export const id = 191;
export const ids = [50, 191];
export const modules = {
  38522: (qq, Eq, gq) => {
    var Yq = {
      "./combat_1.png": 38526,
      "./dungeon_crumbling_crypt.png": 38529,
      "./dungeon_frozen_hollow.png": 38536,
      "./dungeon_wildwood_grove.png": 38539,
      "./dungeons.png": 38545,
      "./farming_1.png": 38554,
      "./fishing_1.png": 38563,
      "./hub.png": 38571,
      "./island.png": 38573,
      "./mining_1.png": 38581,
      "./mining_1_bridge.png": 38585,
      "./mining_1_gallery.png": 38588,
      "./mining_1_hollow.png": 38594,
      "./mining_1_village.png": 38602
    };

    function lq(qq) {
      var Eq = Oq(qq);
      return gq(Eq)
    }

    function Oq(qq) {
      if (!gq.o(Yq, qq)) {
        var Eq = new Error("Cannot find module '" + qq + "'");
        throw Eq.code = "MODULE_NOT_FOUND", Eq
      }
      return Yq[qq]
    }
    lq.keys = function() {
      return Object.keys(Yq)
    }, lq.resolve = Oq, qq.exports = lq, lq.id = 38522
  },
  38611: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq,
      f: () => Oq
    });
    const Yq = new WeakMap;

    function lq(qq, Eq) {
      return Yq.set(qq, Eq), qq
    }

    function Oq(qq) {
      var Eq;
      return null !== (Eq = Yq.get(qq)) && void 0 !== Eq ? Eq : null
    }
  },
  38505: (qq, Eq, gq) => {
    function Yq(qq, Eq, gq) {
      var Yq;
      const {
        width: lq,
        height: Oq
      } = gq, mq = null !== (Yq = qq.text) && void 0 !== Yq ? Yq : qq, xq = (mq.x / 100 - .5) * lq, Aq = (mq.y / 100 - .5) * Oq, cq = lq / 2 - Eq.x;
      if (null !== qq.text && Math.abs(xq) <= cq && Aq >= Eq.top - Oq / 2 && Aq <= Oq / 2 - Eq.bottom) return {
        x: mq.x,
        y: mq.y
      };
      const uq = Math.min(0 === xq ? 1 / 0 : cq / Math.abs(xq), Aq > 0 ? (Oq / 2 - Eq.bottom) / Aq : Aq < 0 ? (Eq.top - Oq / 2) / Aq : 1 / 0);
      return !Number.isFinite(uq) || uq < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + xq * uq / lq * 100,
        y: 50 + Aq * uq / Oq * 100
      }
    }
    gq.d(Eq, {
      c: () => Yq
    })
  },
  38514: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => mq
    });
    const Yq = 4,
      lq = 12e3,
      Oq = 1e3;
    class mq {
      constructor() {
        let {
          limit: qq = Yq,
          windowMs: Eq = lq,
          spacingMs: gq = Oq,
          now: mq = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = qq, this.windowMs = Eq, this.spacingMs = gq, this.now = mq
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const qq of this.priority) qq.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const qq = this.now();
        this.sent.push(qq), this.lastSentAt = qq, this.schedule(), this.notify()
      }
      addPriority(qq) {
        return this.priority.add(qq), () => {
          this.priority.delete(qq)
        }
      }
      subscribe(qq) {
        return this.listeners.add(qq), () => {
          this.listeners.delete(qq)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const qq of this.priority)
          if (qq.waiting()) return !0;
        return !1
      }
      prune() {
        const qq = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= qq;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const qq = this.now(),
          Eq = this.lastSentAt + this.spacingMs,
          gq = Math.min(Eq > qq ? Eq : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        gq !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, gq - qq)))
      }
      notify() {
        for (const qq of this.listeners) qq()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38498: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Yq
    });
    class Yq {
      constructor(qq, Eq, gq) {
        this.TV = qq, this.beforeOpen = Eq, this.afterClose = gq, this.open = !1, this.eN = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.eN && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(qq) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(qq)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.eN = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.eN || (this.snapshot = this.buildSnapshot(), this.TV(this.snapshot))
      }
    }
  },
  38619: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      SkyblockEntityFacing: () => xq,
      needsSkyblockEntityFacing: () => mq
    });
    var Yq = gq(590),
      lq = gq(4096),
      Oq = gq(38625);

    function mq(qq, Eq) {
      if (qq.metaInfo === Yq.c || "Iron Guardian" === qq.type || "Gold Guardian" === qq.type) return !0;
      if ("Pig" === qq.type) return "sitting" === qq.pose;
      if ("Person" !== qq.meshKind || void 0 === qq.meshOpts) return !1;
      let gq = null === Eq || void 0 === Eq ? void 0 : Eq.get(qq.meshOpts);
      if (void 0 === gq) {
        var Oq, mq;
        const Yq = (0, lq.i)(qq);
        gq = !1, "pig_napoleon" === (null === Yq || void 0 === Yq || null === (Oq = Yq.opts.textures) || void 0 === Oq ? void 0 : Oq.head) ? gq = !0 : "npc_pig_head" === (null === Yq || void 0 === Yq || null === (mq = Yq.opts.textures) || void 0 === mq ? void 0 : mq.head) && (gq = "sitting" === Yq.opts.pose || "sitting"), Eq && (Eq.size >= 256 && Eq.clear(), Eq.set(qq.meshOpts, gq))
      }
      return "sitting" === gq ? "sitting" === qq.pose : gq
    }(0, Oq.g)("skyblock", ((qq, Eq) => {
      Eq.setFacingTolerance(mq(qq) ? 0 : null)
    }));
    class xq {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = qq, this.alsoVisit = Eq, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = qq => {
          var Eq;
          const gq = this.api.getEntityInfo(qq);
          gq && (mq(gq, this.meshFacingCache) && (this.api.setFacingTolerance(qq, 0), this.nextFacing.add(qq)), null === (Eq = this.alsoVisit) || void 0 === Eq || Eq.call(this, qq, gq))
        }
      }
      SB() {
        const {
          api: qq
        } = this, Eq = this.nextFacing;
        qq.forEachEntity(this.visit);
        for (const gq of this.facing) Eq.has(gq) || qq.setFacingTolerance(gq, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = Eq
      }
      dispose() {
        for (const qq of this.facing) this.api.setFacingTolerance(qq, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  38492: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      default: () => xA
    });
    const Yq = "island";
    var lq = gq(307);
    const Oq = (0, lq.Kb)([0, 0, -1]),
      mq = [{
        name: "S",
        bearing: (0, lq.Kb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, lq.Kb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: Oq
      }, {
        name: "W",
        bearing: (0, lq.Kb)([1, 0, 0])
      }];

    function xq(qq, Eq, gq) {
      return [100 * (gq.mapMaxX - qq) / (gq.mapMaxX - gq.mapMinX), 100 * (Eq - gq.mapMinZ) / (gq.mapMaxZ - gq.mapMinZ)]
    }

    function Aq(qq, Eq, gq) {
      const lq = "local" === Eq,
        Oq = qq.background,
        mq = Eq => Oq ? xq(Eq[0] - qq.mapOrigin[0], Eq[2] - qq.mapOrigin[2], Oq.bounds) : [50, 50],
        Aq = (qq.insideDungeon ? [] : qq.landmarks).map((qq => {
          var Eq, Yq;
          return {
            id: qq.id,
            name: gq(qq.visited && qq.nameKey ? null !== (Eq = qq.mapLabelKey) && void 0 !== Eq ? Eq : qq.nameKey : "skyblockGame:mapUnknown"),
            icon: qq.visited && null !== (Yq = qq.icon) && void 0 !== Yq ? Yq : "unknown",
            visited: qq.visited,
            current: !1,
            position: mq(qq.position),
            travelKind: "landmark",
            travelId: qq.id
          }
        })),
        uq = qq.zones.map((Eq => {
          var Yq;
          return {
            id: Eq.id,
            name: gq(Eq.visited && Eq.nameKey ? Eq.nameKey : "skyblockGame:mapUnknown"),
            icon: Eq.visited && null !== (Yq = Eq.icon) && void 0 !== Yq ? Yq : "unknown",
            visited: Eq.visited,
            current: Eq.id === qq.zoneId,
            position: Eq.position,
            thumbnail: Eq.visited ? Eq.id : void 0,
            travelKind: "zone",
            travelId: Eq.id
          }
        })),
        Bq = qq.insideDungeon || !Oq ? [] : qq.portals.map((qq => {
          var Eq;
          return {
            id: qq.id,
            name: gq(null !== (Eq = qq.nameKey) && void 0 !== Eq ? Eq : "skyblockGame:mapUnknown"),
            icon: qq.visited ? "dungeons" === qq.destination ? "portal_orange" : "portal" : "unknown",
            visited: qq.visited,
            current: !1,
            position: mq(qq.position),
            colour: qq.colour,
            travelKind: "zone",
            travelId: qq.destination
          }
        })),
        Wq = lq ? Aq : uq,
        Nq = Wq.filter((qq => qq.visited)).length,
        aq = Oq ? (Oq.bounds.mapMaxX - Oq.bounds.mapMinX) / (Oq.bounds.mapMaxZ - Oq.bounds.mapMinZ) : 2,
        Vq = Oq ? JSON.stringify([Oq.bounds, qq.mapOrigin]) : "";
      return {
        local: lq,
        points: Wq,
        portals: lq ? Bq : [],
        progress: Wq.length ? gq("skyblockGame:mapDiscovered", {
          current: String(Nq),
          total: String(Wq.length)
        }) : null,
        percent: Wq.length ? 100 * Nq / Wq.length : 0,
        canTravel: [...Wq, ...lq ? Bq : []].some((qq => qq.visited && !qq.current)),
        noLandmarks: lq && !qq.insideDungeon && 0 === Aq.length,
        background: Oq ? {
          imageKey: Oq.imageKey,
          fallbackImageKey: qq.zoneId,
          geometryKey: Vq,
          label: gq(Oq.labelKey),
          colour: Oq.backgroundColour,
          ratio: aq
        } : null,
        connections: cq(qq.zones),
        minimap: Oq ? {
          imageKey: Oq.imageKey,
          fallbackImageKey: qq.zoneId,
          geometryKey: Vq,
          label: gq(Oq.labelKey),
          colour: Oq.backgroundColour,
          caption: gq(qq.zoneId === Yq ? "skyblockGame:zoneIsland" : Oq.labelKey),
          width: (Oq.bounds.mapMaxX - Oq.bounds.mapMinX) / Oq.minimapSpan * 100 + "%",
          height: (Oq.bounds.mapMaxZ - Oq.bounds.mapMinZ) / Oq.minimapSpan * 100 + "%",
          markers: [...Aq, ...Bq]
        } : null
      }
    }

    function cq(qq) {
      const Eq = new Set;
      return qq.flatMap((gq => gq.connections.flatMap((Yq => {
        const lq = qq.find((qq => qq.id === Yq)),
          Oq = [gq.id, Yq].sort().join("|");
        return !lq || Eq.has(Oq) ? [] : (Eq.add(Oq), [{
          id: `${gq.id}-${Yq}`,
          start: gq.position,
          end: lq.position,
          explored: gq.visited && lq.visited
        }])
      }))))
    }
    var uq = gq(38498);
    class Bq extends uq.c {}
    const Wq = "skyblockMapView";
    class Nq extends Bq {
      constructor(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(qq, Yq, lq), this.requestTravel = Eq, this.translate = gq, this.now = Oq, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = qq => {
          this.tab = qq, this.feedbackKey = "", this.emit()
        }, this.travel = (qq, Eq) => {
          if (!this.map || this.pending || this.eN) return;
          const gq = ("zone" === qq ? this.map.zones : this.map.landmarks).find((qq => qq.id === Eq));
          if (gq) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in gq && !gq.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (gq.visited)
              if ("zone" === qq && Eq === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const gq = ++this.nextRequestId;
                this.pending = {
                  requestId: gq,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: qq,
                  id: Eq,
                  requestId: gq
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
      setTranslator(qq) {
        this.translate = qq, this.emit()
      }
      ga(qq) {
        var Eq;
        if (!this.eN)
          if ("entities" !== qq.kind)
            if ("open" !== qq.kind) {
              var gq, Yq;
              if ("snapshot" === qq.kind)(null === (gq = qq.snapshot) || void 0 === gq ? void 0 : gq.zoneId) !== (null === (Yq = this.map) || void 0 === Yq ? void 0 : Yq.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = qq.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === qq.kind) {
                var lq;
                qq.requestId === (null === (lq = this.pending) || void 0 === lq ? void 0 : lq.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (qq.requestId === (null === (Eq = this.pending) || void 0 === Eq ? void 0 : Eq.requestId)) {
                var Oq;
                this.pending = null, this.feedbackKey = null !== (Oq = qq.errorKey) && void 0 !== Oq ? Oq : "", null === qq.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = qq.entities
      }
      SB() {
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
          presentation: this.map ? Aq(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const aq = 67.5 * Math.PI / 180;

    function Vq(qq, Eq) {
      const gq = Math.abs(qq);
      if (gq > aq || Eq.trackHalfWidth <= 0) return null;
      const Yq = Eq.trackHalfWidth,
        lq = Eq.screenHalfWidth / (Eq.tanHalfFovX * Math.max(.5, Math.cos(Eq.pitch))),
        Oq = Math.min(Math.atan(.6 * Yq / lq), .75 * aq),
        mq = lq * Math.tan(Oq);
      let xq;
      if (gq <= Oq) xq = lq * Math.tan(gq);
      else {
        const qq = aq - Oq,
          Eq = Math.max(0, lq * qq / (Math.cos(Oq) ** 2 * (Yq - mq)) - 1),
          Aq = (gq - Oq) / qq;
        xq = mq + (Yq - mq) * (1 + Eq) * Aq / (1 + Eq * Aq)
      }
      return 50 + Math.sign(qq) * xq * 50 / Yq
    }
    class dq {
      constructor(qq, Eq) {
        this.map = qq, this.visited = Eq, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = Eq ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const qq = this.map.getSnapshot().map;
        return !qq || qq.insideDungeon ? [] : qq.landmarks.filter((qq => qq.visited === this.visited)).map((qq => {
          var Eq, gq;
          return {
            id: `landmark:${qq.id}`,
            position: qq.position,
            icon: null !== (Eq = qq.icon) && void 0 !== Eq ? Eq : "unknown",
            nameKey: null !== (gq = qq.nameKey) && void 0 !== gq ? gq : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class jq {
      constructor(qq, Eq, gq, Yq) {
        this.map = qq, this.kind = Eq, this.position = gq, this.alive = Yq, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = Eq, this.range = "enemy" === Eq ? 48 : 64, this.limit = 12
      }
      Py(qq) {
        if ("enemy" !== this.kind || this.alive(qq.xq)) return this.position(qq.xq)
      }
      getPoints() {
        const qq = [];
        for (const Yq of this.map.getEntities()) {
          if (Yq.kind !== this.kind || "enemy" === this.kind && !this.alive(Yq.compassEntityId)) continue;
          const lq = this.position(Yq.compassEntityId);
          var Eq, gq;
          if (lq) qq.push({
            id: `${this.kind}:${Yq.compassEntityId}`,
            xq: Yq.compassEntityId,
            kind: this.kind,
            icon: null !== (Eq = Yq.icon) && void 0 !== Eq ? Eq : Yq.npcSkin ? `npc_${Yq.npcSkin}` : this.kind,
            displayName: Yq.displayName,
            position: lq,
            nameKey: null !== (gq = Yq.nameKey) && void 0 !== gq ? gq : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return qq
      }
    }
    class Hq {
      constructor(qq) {
        this.map = qq, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const qq = this.map.getSnapshot().map;
        return !qq || qq.insideDungeon ? [] : qq.portals.map((qq => {
          var Eq;
          return {
            id: "portal:" + qq.id,
            kind: "portal",
            position: qq.position,
            nameKey: null !== (Eq = qq.nameKey) && void 0 !== Eq ? Eq : "skyblockGame:compassUnvisitedZone",
            icon: qq.visited ? "dungeons" === qq.destination ? "portal_orange" : "portal" : "unknown",
            colour: qq.colour
          }
        }))
      }
    }
    class oq {
      constructor(qq) {
        this.target = qq, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const qq = this.target();
        return qq ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: qq.position,
          nameKey: qq.nameKey
        }] : []
      }
    }

    function Pq(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : qq.position;
      const Oq = Yq[0] - Eq[0],
        mq = Yq[2] - Eq[2];
      return {
        ...qq,
        position: Yq,
        offset: lq.c.computeShortestRotation(gq, (0, lq.Kb)([Oq, 0, mq])),
        distance: Math.hypot(Oq, Yq[1] - Eq[1], mq)
      }
    }
    let Qq;

    function yq(qq, Eq) {
      var gq;
      return (null === (gq = Qq) || void 0 === gq ? void 0 : gq.locale) !== Eq && (Qq = {
        locale: Eq,
        near: new Intl.NumberFormat(Eq, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(Eq, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (qq < 10 ? Qq.near : Qq.far).format(qq)
    }
    class tq {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(qq) {
        return this.providers.set(qq.id, qq), this.refreshAt = 0, () => {
          this.providers.get(qq.id) === qq && (this.providers.delete(qq.id), this.refreshAt = 0)
        }
      }
      frame(qq, Eq, gq) {
        if (gq >= this.refreshAt) {
          this.refreshAt = gq + 200, this.candidates = [];
          for (const Eq of this.providers.values()) {
            if (!Eq.enabled) continue;
            const gq = Eq.getPoints().map((Eq => {
              const gq = Eq.position;
              return {
                point: Eq,
                distance: Math.hypot(gq[0] - qq[0], gq[1] - qq[1], gq[2] - qq[2])
              }
            })).filter((qq => qq.distance <= Eq.range)).sort(((qq, Eq) => qq.distance - Eq.distance)).slice(0, Eq.limit);
            for (const {
                point: qq
              }
              of gq) this.candidates.push({
              provider: Eq,
              point: qq
            })
          }
        }
        const Yq = [];
        for (const {
            point: lq,
            provider: Oq
          }
          of this.candidates) {
          if (!Oq.enabled) continue;
          const gq = Oq.Py ? Oq.Py(lq) : lq.position;
          if (gq) {
            const Oq = Pq(lq, qq, Eq, gq);
            Math.abs(Oq.offset) <= aq && Yq.push(Oq)
          }
        }
        return Yq
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var rq = gq(36662),
      vq = gq(57);
    const hq = [{
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
      nq = hq.length;

    function bq(qq) {
      return qq >= nq ? 1 : qq + 1
    }
    const iq = "skyblockQuests",
      Zq = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      fq = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function Mq(qq) {
      let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const gq = Math.max(0, Math.floor(qq)),
        Yq = Math.floor(gq % 1e3 / 100),
        lq = Math.floor(gq / 1e3),
        Oq = lq % 60,
        mq = Math.floor(lq / 60),
        xq = mq % 60,
        Aq = Math.floor(mq / 60),
        cq = qq => qq < 10 ? `0${qq}` : String(qq),
        uq = Eq ? `.${Yq}` : "";
      return Aq > 0 ? `${Aq}:${cq(xq)}:${cq(Oq)}${uq}` : `${xq}:${cq(Oq)}${uq}`
    }
    const Tq = "devquests",
      zq = "none",
      Sq = {
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
      pq = "Compressed Messy Stone",
      Gq = {
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
      Lq = ["Stone", "Diorite", "Andesite", "Granite"],
      Jq = new Set(Lq),
      kq = (Object.keys(Gq), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const Rq = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function Uq(qq, Eq) {
      const gq = Math.floor(5 * qq / (2 * Eq + 1));
      return Math.min(4, Math.max(0, gq))
    }
    var Fq = gq(1226);
    var sq = gq(36431);
    var Xq = gq(36657),
      wq = gq(31),
      Kq = gq(8846);
    const Cq = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      Iq = 1e3;

    function eq(qq) {
      return Math.max(0, qq)
    }

    function Dq(qq) {
      return 1 + .01 * eq(qq)
    }

    function qE(qq) {
      return 1 + .005 * eq(qq)
    }

    function EE(qq) {
      return 1 + .005 * eq(qq)
    }

    function gE(qq) {
      return .01 * eq(qq)
    }

    function YE(qq) {
      return 150 / (150 + eq(qq))
    }

    function lE(qq) {
      return 1 + .002 * eq(qq)
    }

    function OE(qq) {
      return Math.round(10 * qq) / 10
    }

    function mE(qq, Eq) {
      switch (qq) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: OE(100 * (qE(Eq) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: OE(100 * (Dq(Eq) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: OE(100 * (EE(Eq) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: OE(100 * gE(Eq))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: OE(100 * (1 - YE(Eq)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: OE(100 * (lE(Eq) - 1))
          }
      }
    }

    function xE(qq) {
      return "farming" === qq ? 200 : 100
    }

    function AE(qq, Eq) {
      if (!Number.isSafeInteger(qq) || qq < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const gq = xE(Eq),
        Yq = qq => function(qq, Eq) {
          return xE(qq) * Eq * (Eq + 1) / 2
        }(Eq, qq);
      let lq = Math.min(Iq, Math.floor((Math.sqrt(8 * qq / gq + 1) - 1) / 2));
      return lq < Iq && Yq(lq + 1) <= qq ? lq++ : Yq(lq) > qq && lq--, {
        totalXp: qq,
        level: lq,
        xpIntoLevel: qq - Yq(lq),
        xpForNextLevel: lq === Iq ? null : gq * (lq + 1)
      }
    }
    const cE = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function uE(qq) {
      return cE.has(qq)
    }
    const BE = new Set(lq.Bb);

    function WE(qq) {
      return BE.has(qq)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const NE = {
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
      aE = {
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
      VE = {
        ...aE,
        ...Object.fromEntries(Object.entries(kq).map((qq => {
          let [Eq, gq] = qq;
          return [Eq, 9 * aE[gq]]
        })))
      },
      dE = {
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
      jE = {
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
    const HE = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      oE = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function PE(qq) {
      return `rgb(${oE[qq].join(", ")})`
    }

    function QE(qq, Eq, gq) {
      if (!gq) return qq(Eq);
      const Yq = {};
      for (const [lq, Oq] of Object.entries(gq)) Yq[lq] = "string" === typeof Oq ? Oq : qq(Oq.translationKey);
      return qq(Eq, Yq)
    }
    class yE {
      constructor(qq, Eq) {
        this.now = qq, this.getJournal = Eq, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.Fc = !1, this.onShown = () => {}
      }
      enqueue(qq) {
        const Eq = tE(qq);
        if (Eq) this.pending.push(qq);
        else {
          const Eq = this.pending.findIndex(tE);
          this.pending.splice(-1 === Eq ? this.pending.length : Eq, 0, qq)
        }
        return (null === this.current || null !== this.followUp && !Eq) && (this.advance(), !0)
      }
      setHeld(qq) {
        return this.Fc = qq, !qq && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      SB() {
        const qq = this.getJournal(),
          Eq = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === Eq ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === Eq || void 0 === Eq ? void 0 : Eq.kind) && qq && qq.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === Eq || void 0 === Eq ? void 0 : Eq.kind)) {
          const qq = this.findFollowUp(this.current);
          if ("step" !== (null === qq || void 0 === qq ? void 0 : qq.kind) || qq.questId !== Eq.questId || qq.step.id !== Eq.step.id) return this.showFollowUp(qq, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(qq, Eq, gq) {
        var Yq, lq, Oq, mq;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, qq, gq);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, qq);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, qq, Eq);
        const {
          questCompletionKind: xq,
          questCompletionNameKey: Aq
        } = this.current, cq = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, uq = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, Bq = "step" === (null === (Yq = this.followUp) || void 0 === Yq ? void 0 : Yq.kind) ? this.followUp : null, Wq = "explore" === (null === (lq = this.followUp) || void 0 === lq ? void 0 : lq.kind);
        let Nq;
        return Nq = Wq ? qq("skyblockGame:questExploreTitle") : null !== Bq ? "quest" === xq ? qq("skyblockGame:questNextQuestTitle", {
          quest: qq(Bq.questNameKey)
        }) : qq("skyblockGame:questNextStepTitle") : qq("started" === xq ? "skyblockGame:questStartedTitle" : "quest" === xq ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? xq : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: Nq,
          name: Wq ? Eq("skyblockGame:questExploreName") : null !== Bq ? QE(Eq, Bq.step.nameKey, Bq.step.nameParams) : QE(Eq, Aq, cq),
          description: Wq ? Eq("skyblockGame:questExploreDescription") : null === Bq ? null : QE(Eq, Bq.step.descriptionKey, Bq.step.descriptionParams),
          reward: null === this.followUp && uq > 0 ? Eq("skyblockGame:questCoinRewardSuffix", {
            amount: uq.toLocaleString(gq)
          }) : null,
          iconItem: null !== (Oq = null === Bq || void 0 === Bq ? void 0 : Bq.step.questIconItem) && void 0 !== Oq ? Oq : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== Bq && (null === (mq = this.getJournal()) || void 0 === mq ? void 0 : mq.trackedQuestId) === Bq.questId ? Bq.step.nameKey : null
        }
      }
      getSkillLevelView(qq, Eq, gq) {
        let {
          skill: Yq,
          beforeLevel: lq,
          level: Oq
        } = qq;
        const mq = mE(Yq, lq),
          xq = mE(Yq, Oq);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: Eq(`skyblockGame:${Yq}`),
          name: Eq("skyblockGame:skillLevelUp", {
            to: Oq.toLocaleString(gq)
          }),
          description: mq.percent === xq.percent ? null : Eq(`${xq.translationKey}Change`, {
            before: mq.percent.toLocaleString(gq),
            after: xq.percent.toLocaleString(gq)
          }),
          reward: null,
          iconItem: HE[Yq],
          accent: PE(Yq),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(qq, Eq) {
        let {
          landmarkNameKey: gq
        } = qq;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: Eq("skyblockGame:landmarkDiscovered"),
          name: Eq(gq),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(qq, Eq, gq) {
        let {
          titleKey: Yq,
          textKey: lq,
          params: Oq = {},
          nameKeys: mq = {},
          iconItem: xq = null
        } = qq;
        const Aq = {
          ...Oq
        };
        for (const [cq, uq] of Object.entries(mq)) Aq[cq] = Eq(uq);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: Eq(Yq),
          name: gq(lq, Aq),
          description: null,
          reward: null,
          iconItem: xq,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var qq;
        if (null !== this.followUp) return 5600;
        switch (null === (qq = this.current) || void 0 === qq ? void 0 : qq.questCompletionKind) {
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
      showFollowUp(qq, Eq) {
        null === qq || this.Fc ? this.advance() : (this.followUp = qq, this.token++, this.shownAt = this.now(), this.expiresAt = null !== Eq && void 0 !== Eq ? Eq : this.shownAt + this.durationMs())
      }
      findFollowUp(qq) {
        var Eq;
        const gq = this.getJournal();
        if (!gq || this.hasPendingQuestPopup() || tE(qq)) return null;
        const Yq = "started" === qq.questCompletionKind ? gq.active.some((Eq => Eq.id === qq.questCompletionQuestId)) : "quest" === qq.questCompletionKind ? gq.completed.some((Eq => Eq.id === qq.questCompletionQuestId)) : [...gq.active, ...gq.completed].some((Eq => Eq.id === qq.questCompletionQuestId && Eq.subquests.some((Eq => Eq.id === qq.questCompletionStepId && "completed" === Eq.status))));
        if (!Yq) return null;
        if ("quest" === qq.questCompletionKind && 0 === gq.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const lq = gq.active.find((qq => qq.id === gq.trackedQuestId)),
          Oq = null !== (Eq = null === lq || void 0 === lq ? void 0 : lq.subquests.find((qq => "ready" === qq.status))) && void 0 !== Eq ? Eq : null === lq || void 0 === lq ? void 0 : lq.subquests.find((qq => "active" === qq.status));
        return Oq ? {
          kind: "step",
          questId: lq.id,
          questNameKey: lq.nameKey,
          step: Oq
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((qq => !tE(qq)))
      }
      advance() {
        var qq;
        this.current = this.Fc ? null : null !== (qq = this.pending.shift()) && void 0 !== qq ? qq : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function tE(qq) {
      return rE(qq.questCompletionKind)
    }

    function rE(qq) {
      return "skillLevel" === qq || "landmark" === qq || "npcNote" === qq
    }
    var vE = gq(38505);
    const hE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      nE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      bE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      iE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      ZE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var fE = gq(38510);
    const ME = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      TE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const zE = gq.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const SE = gq.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      pE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var GE = gq(18775),
      LE = gq(20858),
      JE = gq(23250),
      kE = gq(24872),
      RE = gq(26558);
    const UE = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: GE,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: LE,
      cow: ZE,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: gq(26573),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: hE,
      fishing_1: hE,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: nE,
      guardian_iron: bE,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: JE,
      mines: kE,
      mining_1: kE,
      npc: iE,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: ZE,
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
      npc_gold_guardian: nE,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: bE,
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
      npc_tentacle_guy: fE,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: ME,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: zE,
      quest_talk: SE,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: pE,
      watermelon: RE
    };

    function FE(qq, Eq) {
      const gq = document.createElement("img");
      return gq.className = Eq, gq.src = qq, gq.alt = "", gq.draggable = !1, gq
    }

    function sE(qq) {
      var Eq;
      const gq = null !== (Eq = UE[qq]) && void 0 !== Eq ? Eq : qq.startsWith("npc_") ? iE : pE;
      if ("portal" !== qq) return FE(gq, "SkyblockMapIcon");
      const Yq = document.createElement("span");
      Yq.className = "SkyblockMapIcon Portal";
      const lq = document.createElement("span");
      return lq.className = "SkyblockMapIconTint", lq.style.maskImage = lq.style.webkitMaskImage = `url("${TE}")`, Yq.append(FE(gq, "SkyblockMapIconLayer"), lq, FE(TE, "SkyblockMapIconLayer SkyblockMapIconShade")), Yq
    }
    var XE = gq(38479),
      wE = gq(4107);
    const KE = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function CE(qq) {
      const Eq = new wE.k(qq);
      return {
        radius: 45,
        squareness: 3,
        wobbles: KE.map((qq => {
          let {
            lobes: gq,
            amount: Yq
          } = qq;
          return {
            lobes: gq[Math.floor(Eq.next() * gq.length)],
            amount: Yq[0] + Eq.next() * (Yq[1] - Yq[0]),
            phase: 2 * Eq.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function IE(qq) {
      let {
        radius: Eq,
        squareness: gq,
        wobbles: Yq,
        samples: lq
      } = qq;
      const Oq = [];
      for (let mq = 0; mq < lq; mq++) {
        const qq = 2 * Math.PI * mq / lq,
          xq = Math.cos(qq),
          Aq = Math.sin(qq),
          cq = Eq * (Math.abs(xq) ** gq + Math.abs(Aq) ** gq) ** (-1 / gq) * Yq.reduce(((Eq, gq) => {
            let {
              lobes: Yq,
              amount: lq,
              phase: Oq
            } = gq;
            return Eq + lq * Math.sin(Yq * qq + Oq)
          }), 1);
        Oq.push(`${(50+cq*xq).toFixed(2)} ${(50+cq*Aq).toFixed(2)}`)
      }
      return `M${Oq.join("L")}Z`
    }
    const eE = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class DE {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.eN = !1, this.mountCompass = qq => {
          var Eq;
          if (null === (Eq = this.stopLayout) || void 0 === Eq || Eq.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !qq || this.eN) return;
          const gq = qq.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: qq,
            track: gq,
            label: qq.querySelector(".SkyblockCompassLabel")
          }, gq.replaceChildren();
          for (let lq = 0; lq < 4; lq++) {
            const qq = document.createElement("span");
            qq.className = "SkyblockCompassCardinal", gq.appendChild(qq), this.cardinals.push(qq)
          }
          const Yq = (0, XE.b)(eE, [qq], this.layout);
          this.stopLayout = () => {
            Yq(), gq.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = qq => {
          this.terrain = this.eN ? null : qq, this.render(this.frame)
        }, this.mountMinimapSearchArea = qq => {
          this.mountSearchArea("minimap", qq)
        }, this.mountMapSearchArea = qq => {
          this.mountSearchArea("map", qq)
        }, this.mountPlayer = qq => {
          this.player = this.eN ? null : qq, this.render(this.frame)
        }, this.mountWaypoint = qq => {
          var Eq, gq;
          if (null === (Eq = this.stopWaypoint) || void 0 === Eq || Eq.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !qq || this.eN) return;
          const Yq = qq.querySelector(".SkyblockQuestWaypointMarker");
          Yq.replaceChildren(sE("quest")), this.markerIcon = "quest", this.waypoint = {
            root: qq,
            marker: Yq,
            clip: qq.querySelector(".SkyblockQuestWaypointTextClip"),
            text: qq.querySelector(".SkyblockQuestWaypointText"),
            label: qq.querySelector(".SkyblockQuestWaypointLabel"),
            distance: qq.querySelector(".SkyblockQuestWaypointDistance"),
            hint: qq.querySelector(".SkyblockQuestWaypointHint")
          };
          const lq = () => {
              this.waypointMarkerSize = {
                width: Yq.offsetWidth,
                height: Yq.offsetHeight
              }, this.waypointInset = {
                x: Yq.offsetWidth / 2 + 8,
                top: Yq.offsetHeight + 8,
                bottom: 8
              }
            },
            Oq = new ResizeObserver((() => {
              lq(), this.render(this.frame)
            }));
          Oq.observe(Yq, {
            box: "border-box"
          });
          const mq = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", mq), null === (gq = window.visualViewport) || void 0 === gq || gq.addEventListener("resize", mq), this.stopWaypoint = () => {
            var qq;
            Oq.disconnect(), window.removeEventListener("resize", mq), null === (qq = window.visualViewport) || void 0 === qq || qq.removeEventListener("resize", mq)
          }, mq(), lq(), this.render(this.frame)
        }, this.mountWaypointOrigin = qq => {
          var Eq;
          if (null === (Eq = this.stopWaypointOrigin) || void 0 === Eq || Eq.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = qq && !this.eN ? Number(qq.dataset.notificationToken) : null, qq && !this.eN && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const Eq = {
              nameKey: qq.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = Eq;
            const gq = () => {
                const gq = qq.getBoundingClientRect();
                Eq.x = (gq.left + gq.width / 2) / window.innerWidth * 100, Eq.y = (gq.top + gq.height / 2) / window.innerHeight * 100
              },
              Yq = new ResizeObserver(gq);
            Yq.observe(qq.parentElement), Yq.observe(qq), window.addEventListener("resize", gq), this.stopWaypointOrigin = () => {
              Yq.disconnect(), window.removeEventListener("resize", gq)
            }, gq()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const qq = this.compass.root,
            Eq = getComputedStyle(qq),
            gq = getComputedStyle(document.documentElement),
            Yq = parseFloat(gq.fontSize),
            lq = parseFloat(Eq.getPropertyValue("--compass-icon-size")) * Yq,
            Oq = "1" === Eq.getPropertyValue("--compass-fit-top").trim(),
            mq = Oq ? 1 : 8,
            xq = Array.from(document.querySelectorAll(eE), (qq => {
              var Eq;
              return (null !== (Eq = qq.querySelector(".MiddleTextTop")) && void 0 !== Eq ? Eq : qq).getBoundingClientRect()
            })).filter((qq => qq.width > 0 && qq.height > 0));
          let Aq = (parseFloat(gq.getPropertyValue("--notchTop")) || 0) + mq,
            cq = "";
          if (Oq) {
            const Eq = window.innerWidth / 2,
              gq = qq.getBoundingClientRect().height,
              Oq = [Aq, ...xq.map((qq => Math.max(Aq, qq.bottom + mq)))].sort(((qq, Eq) => qq - Eq));
            for (const qq of Oq) {
              let Oq = Eq - 8;
              for (const Yq of xq) Yq.bottom + mq <= qq || Yq.top >= qq + gq + mq || (Oq = Math.min(Oq, Yq.right <= Eq ? Eq - Yq.right - 8 : Yq.left - Eq - 8));
              const uq = 2 * Oq - lq;
              if (uq >= 16 * Yq) {
                cq = `${uq}px`, Aq = qq;
                break
              }
            }
          }
          qq.style.maxWidth !== cq && (qq.style.maxWidth = cq);
          const uq = qq.getBoundingClientRect(),
            Bq = this.compassSize.trackHalfWidth;
          if (uq.width > 0) {
            const qq = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: qq.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * lq / qq.width
          }
          if (!cq)
            for (const Wq of xq) Wq.right > uq.left - 8 && Wq.left < uq.right + 8 && (Aq = Math.max(Aq, Wq.bottom + mq));
          qq.style.top = `${Aq}px`, this.compassSize.trackHalfWidth !== Bq && this.render(this.frame)
        }
      }
      mountSearchArea(qq, Eq) {
        this.searchAreas[qq] = this.eN ? null : Eq, this.render(this.frame)
      }
      render(qq) {
        if (this.eN) return;
        if (this.frame = qq, this.compass && (qg(this.compass.root, !qq), qq)) {
          const Eq = this.compassSize.trackHalfWidth / 50;
          qq.compass.cardinals.forEach(((qq, gq) => {
            const Yq = this.cardinals[gq];
            Yq.textContent !== qq.name && (Yq.textContent = qq.name), qg(Yq, qq.hidden), Yq.style.translate = qq.left * Eq + "px"
          }));
          const gq = new Set;
          qq.compass.markers.forEach(((Yq, lq) => {
            var Oq;
            gq.add(Yq.id);
            let mq = this.markers.get(Yq.id);
            mq || (mq = document.createElement("span"), mq.className = "SkyblockCompassMarker", this.markers.set(Yq.id, mq), this.compass.track.appendChild(mq)), mq.dataset.icon !== Yq.icon && (mq.dataset.icon = Yq.icon, mq.replaceChildren(sE(Yq.icon))), mq.style.color = null !== (Oq = Yq.colour) && void 0 !== Oq ? Oq : "", mq.style.translate = Yq.left * Eq + "px", mq.style.zIndex = String(qq.compass.markers.length - lq), mq.title !== Yq.name && (mq.title = Yq.name)
          }));
          for (const [qq, Yq] of this.markers) gq.has(qq) || (Yq.remove(), this.markers.delete(qq));
          this.compass.label.textContent !== qq.compass.label && (this.compass.label.textContent = qq.compass.label)
        }
        this.terrain && (qg(this.terrain, !(null !== qq && void 0 !== qq && qq.minimap)), null !== qq && void 0 !== qq && qq.minimap && (this.terrain.style.transform = qq.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", qq.minimap.iconRotation)));
        const Eq = null === qq || void 0 === qq ? void 0 : qq.searchArea;
        for (const gq of [this.searchAreas.minimap, this.searchAreas.map])
          if (gq && (qg(gq, !Eq), Eq)) {
            if (this.searchAreaPath.seed !== Eq.shapeSeed && (this.searchAreaPath = {
                seed: Eq.shapeSeed,
                d: IE(CE(Eq.shapeSeed))
              }), gq.dataset.shapeSeed !== Eq.shapeSeed) {
              gq.dataset.shapeSeed = Eq.shapeSeed;
              for (const qq of gq.querySelectorAll("path")) qq.setAttribute("d", this.searchAreaPath.d)
            }
            gq.style.left = `${Eq.left}%`, gq.style.top = `${Eq.top}%`, gq.style.width = `${Eq.width}%`, gq.style.height = `${Eq.height}%`
          } if (this.player && (qg(this.player, !(null !== qq && void 0 !== qq && qq.player) || qq.player.hidden), null !== qq && void 0 !== qq && qq.player && (this.player.style.left = `${qq.player.left}%`, this.player.style.top = `${qq.player.top}%`, this.player.style.setProperty("--map-player-rotation", qq.player.rotation))), this.waypoint) {
          const {
            root: Eq,
            marker: gq,
            clip: Yq,
            text: lq,
            label: Oq,
            distance: mq,
            hint: xq
          } = this.waypoint, Aq = !(null !== qq && void 0 !== qq && qq.waypoint) || null !== qq.waypoint.popupToken && qq.waypoint.popupToken !== this.waypointOriginToken;
          qg(Eq, Aq);
          let cq = 1;
          const uq = this.waypointLaunch;
          if (!Aq && uq && qq.waypoint.nameKey === uq.nameKey) {
            const qq = performance.now();
            uq.startedAt ??= qq, cq = Math.min(1, Math.max(0, (qq - uq.startedAt - 450) / 1e3)), gq.style.opacity = String(Math.min(1, (qq - uq.startedAt) / 150)), 1 === cq && (this.waypointLaunch = null)
          } else gq.style.opacity = "", uq && null !== uq.startedAt && (this.waypointLaunch = null);
          if (Eq.classList.toggle("Launching", cq < 1), null !== qq && void 0 !== qq && qq.waypoint) {
            const Eq = this.waypointInset,
              Aq = "quest_talk" === qq.waypoint.markerIcon ? function(qq, Eq, gq) {
                if (!qq.text || null === qq.blockHeight || 0 === qq.nearness) return qq;
                const Yq = qq.blockHeight / 100 * gq.height,
                  lq = -qq.nearness * (Eg * Yq + Eq.width / 2),
                  Oq = qq.nearness * (gg * Yq + Eq.height / 2);
                return {
                  ...qq,
                  text: {
                    x: qq.text.x + lq / gq.width * 100,
                    y: qq.text.y + Oq / gq.height * 100
                  }
                }
              }(qq.waypoint, this.waypointMarkerSize, this.viewport) : qq.waypoint,
              Bq = (0, vE.c)(Aq, Eq, this.viewport),
              Wq = cq * cq * (3 - 2 * cq),
              Nq = cq < 1 ? uq.x + (Bq.x - uq.x) * Wq : Bq.x,
              aq = cq < 1 ? uq.y + (Bq.y - uq.y) * Wq : Bq.y;
            gq.style.translate = `${Nq}vw ${aq}vh`, Yq.style.clipPath = `inset(${Eq.top}px ${Eq.x}px ${Eq.bottom}px)`, qg(lq, cq < 1 || !qq.waypoint.text), lq.style.opacity = String(1 - qq.waypoint.nearness), qq.waypoint.text && (lq.style.translate = `${qq.waypoint.text.x}vw ${qq.waypoint.text.y}vh`), Oq.textContent !== qq.waypoint.name && (Oq.textContent = qq.waypoint.name), this.markerIcon !== qq.waypoint.markerIcon && (this.markerIcon = qq.waypoint.markerIcon, gq.replaceChildren(sE(this.markerIcon))), mq.textContent !== qq.waypoint.distance && (mq.textContent = qq.waypoint.distance), qg(xq, null === qq.waypoint.hint), null !== qq.waypoint.hint && xq.textContent !== qq.waypoint.hint && (xq.textContent = qq.waypoint.hint)
          }
        }
      }
      dispose() {
        var qq, Eq;
        this.mountWaypointOrigin(null), this.render(null), null === (qq = this.stopLayout) || void 0 === qq || qq.call(this), this.stopLayout = null, null === (Eq = this.stopWaypoint) || void 0 === Eq || Eq.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.eN = !0
      }
    }

    function qg(qq, Eq) {
      qq.hidden !== Eq && (qq.hidden = Eq)
    }
    const Eg = .55,
      gg = .6;
    const Yg = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class lg {
      constructor(qq, Eq, gq, Yq) {
        this.map = qq, this.quests = Eq, this.compass = gq, this.display = new DE, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.eN = !1, this.snapshot = null, this.texts = new Map, this.translate = Yq
      }
      setTranslator(qq, Eq) {
        this.translate = qq, this.locale = Eq, this.metresFormat = new Intl.NumberFormat(Eq), this.texts.clear()
      }
      translateCached(qq, Eq) {
        const gq = void 0 === Eq ? qq : `${qq} ${Eq}`;
        let Yq = this.texts.get(gq);
        return void 0 === Yq && (this.texts.size >= 500 && this.texts.clear(), Yq = this.translate(qq, void 0 === Eq ? void 0 : {
          distance: Eq
        }), this.texts.set(gq, Yq)), Yq
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(qq, Eq, gq) {
        if (this.eN) return;
        if (!qq) return this.snapshot = null, void this.display.render(null);
        const Yq = this.map.getSnapshot().map,
          Aq = gq.cameraHeading,
          cq = {
            ...this.display.compassSize,
            tanHalfFovX: gq.tanHalfFovX,
            pitch: gq.cameraPitch
          },
          uq = [];
        if (Yq)
          for (const lq of this.compass.frame(qq, Aq, Eq)) {
            const qq = Vq(lq.offset, cq);
            null !== qq && uq.push({
              ...lq,
              left: qq
            })
          }
        const Bq = function(qq, Eq) {
            const gq = [],
              Yq = qq => "quest" === qq.kind ? qq.distance - 1 : qq.distance,
              lq = [...qq].sort(((qq, Eq) => Yq(qq) - Yq(Eq) || qq.id.localeCompare(Eq.id)));
            for (const Oq of lq) {
              let qq = !1;
              if ("quest" !== Oq.kind)
                for (const Yq of gq)
                  if (Math.abs(Yq.left - Oq.left) < Eq) {
                    qq = !0;
                    break
                  } qq || gq.push(Oq)
            }
            return gq
          }(uq, this.display.compassSpacing),
          Wq = function(qq) {
            let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              gq = null;
            for (const Yq of qq) Math.abs(Yq.offset) <= Eq && (!gq || Yq.distance < gq.distance || Yq.distance === gq.distance && Math.abs(Yq.offset) < Math.abs(gq.offset)) && (gq = Yq);
            return gq
          }(Bq),
          Nq = qq => {
            var Eq;
            return null !== (Eq = qq.displayName) && void 0 !== Eq ? Eq : this.translateCached(qq.nameKey)
          },
          aq = {
            compass: {
              markers: Bq.map((qq => ({
                id: qq.id,
                icon: qq.icon,
                colour: qq.colour,
                name: Nq(qq),
                left: qq.left
              }))),
              cardinals: mq.map((qq => {
                let {
                  name: Eq,
                  bearing: gq
                } = qq;
                const Yq = Vq(lq.c.computeShortestRotation(Aq, gq), cq);
                return {
                  name: Eq,
                  left: null !== Yq && void 0 !== Yq ? Yq : 0,
                  hidden: null === Yq
                }
              })),
              label: Wq ? `${Nq(Wq)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",yq(Wq.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== Yq && void 0 !== Yq && Yq.background) {
          const Eq = qq[0] - Yq.mapOrigin[0],
            gq = qq[2] - Yq.mapOrigin[2],
            {
              rotation: lq,
              transform: mq
            } = function(qq, Eq, gq, Yq) {
              const [lq, mq] = xq(qq, Eq, Yq), Aq = Oq - gq;
              return {
                rotation: Aq,
                transform: `rotate(${Aq}rad) translate(-${lq}%, -${mq}%)`
              }
            }(Eq, gq, Aq, Yq.background.bounds);
          aq.minimap = {
            transform: mq,
            iconRotation: -lq + "rad"
          };
          const [cq, uq] = xq(Eq, gq, Yq.background.bounds);
          aq.player = {
            left: cq,
            top: uq,
            hidden: cq < 0 || uq < 0 || cq > 100 || uq > 100,
            rotation: -lq + "rad"
          }
        }
        const {
          waypoint: dq
        } = this.quests.getSnapshot();
        if ("search" === (null === dq || void 0 === dq ? void 0 : dq.questMarkerIcon) && null !== Yq && void 0 !== Yq && Yq.background) {
          const {
            bounds: qq
          } = Yq.background, [Eq, gq] = xq(dq.position[0] - Yq.mapOrigin[0], dq.position[2] - Yq.mapOrigin[2], qq);
          aq.searchArea = {
            left: Eq,
            top: gq,
            width: 6400 / (qq.mapMaxX - qq.mapMinX),
            height: 6400 / (qq.mapMaxZ - qq.mapMinZ),
            shapeSeed: dq.nameKey
          }
        }
        const jq = this.quests.getNotificationSnapshot(),
          Hq = "completion" === (null === jq || void 0 === jq ? void 0 : jq.phase) && !rE(jq.kind);
        if (dq && !Hq) {
          const Eq = Math.hypot(...dq.position.map(((Eq, gq) => Eq - qq[gq]))),
            Yq = Math.round(Eq),
            lq = "talk" === dq.questMarkerIcon ? Math.min(1, Math.max(0, (10 - Eq) / 5)) : 0,
            Oq = gq.projectWorldPosToViewport(dq.position),
            mq = Oq && gq.projectWorldPosToViewport([dq.position[0], dq.position[1] - 1, dq.position[2]]);
          aq.waypoint = {
            ...gq.projectWorldPosToScreenPos(dq.position),
            text: Oq,
            nearness: lq * lq * (3 - 2 * lq),
            blockHeight: Oq && mq ? mq.y - Oq.y : null,
            name: this.translateCached(dq.nameKey),
            nameKey: dq.nameKey,
            markerIcon: dq.questMarkerIcon ? Yg[dq.questMarkerIcon] : "quest",
            popupToken: (null === jq || void 0 === jq ? void 0 : jq.waypointNameKey) === dq.nameKey ? jq.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(Yq)),
            hint: "search" === dq.questMarkerIcon && Math.hypot(dq.position[0] - qq[0], dq.position[2] - qq[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = aq, this.display.render(aq)
      }
      dispose() {
        this.eN = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const Og = "skyblockSkillsView";
    class mg extends Bq {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          gq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : qq => qq,
          Yq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          lq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : qq => qq;
        super(qq, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = Eq, this.translate = gq, this.locale = Yq, this.itemName = lq, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = qq => {
          this.selected = qq, this.emit()
        }
      }
      setTranslator(qq, Eq, gq) {
        this.translate = qq, this.locale = Eq, this.itemName = gq, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(qq) {
        let Eq = this.skillText.get(qq);
        return Eq || (Eq = {
          label: this.translate(`skyblockGame:${qq}`),
          description: this.translate(`skyblockGame:${qq}Description`)
        }, this.skillText.set(qq, Eq)), Eq
      }
      sources(qq) {
        if ("mining" === qq || "fishing" === qq) return this.buildSources(qq);
        let Eq = this.sourceText.get(qq);
        return Eq || (Eq = this.buildSources(qq), this.sourceText.set(qq, Eq)), Eq
      }
      buildSources(qq) {
        const Eq = this.translate;
        return "exploration" === qq ? [Eq("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), Eq("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === qq ? [Eq("skyblockGame:logSource", {
          xp: this.number(NE["Maple Log"])
        })] : "combat" === qq ? [Eq("skyblockGame:creatureKillSource"), Eq("skyblockGame:noEnvironmentalXp")] : "farming" === qq ? [Eq("skyblockGame:cropSource", {
          xp: this.number(dE["Wheat|FreshlyGrown"])
        }), Eq("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), Eq("skyblockGame:noYoungCropXp")] : Object.entries("mining" === qq ? VE : jE).map((qq => {
          let [gq, Yq] = qq;
          return Eq("skyblockGame:itemXpSource", {
            item: this.itemName(gq),
            xp: this.number(Yq)
          })
        }))
      }
      number(qq) {
        return qq.toLocaleString(this.locale)
      }
      benefit(qq, Eq) {
        const gq = mE(qq, Eq);
        return this.translate(gq.translationKey, {
          bonus: this.number(gq.percent)
        })
      }
      ga(qq) {
        if (!this.eN) {
          if ("snapshot" === qq.kind) this.progress = qq.progress, this.pending.clear(), this.recent = null;
          else if ("award" === qq.kind && this.progress) {
            const {
              award: Eq
            } = qq;
            this.progress = {
              ...this.progress,
              [Eq.skill]: Eq.after
            };
            for (const [qq, Yq] of this.pending) Yq.skill === Eq.skill && this.pending.delete(qq);
            const gq = Eq.after.level > Eq.before.level;
            this.recordGain(Eq.skill, Eq.amount, gq ? ++this.nextLevelUpToken : null), gq && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: Eq.skill,
              beforeLevel: Eq.before.level,
              level: Eq.after.level
            })
          } else {
            if ("rejectBlock" === qq.kind) return void this.rejectBlock(qq.position);
            if ("open" === qq.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(qq, Eq, gq) {
        if (!this.progress || this.eN || gq) return;
        const Yq = function(qq, Eq) {
          const gq = qq.split("|")[0];
          return "Air" === Eq || Eq === `Barkless ${qq}` ? Object.hasOwn(NE, gq) ? {
            skill: "foraging",
            amount: NE[gq]
          } : "Air" !== Eq ? null : Object.hasOwn(VE, qq) ? {
            skill: "mining",
            amount: VE[qq]
          } : uE(qq) ? {
            skill: "farming",
            amount: 10
          } : WE(qq) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(dE, qq) ? {
            skill: "farming",
            amount: dE[qq]
          } : Object.hasOwn(Gq, qq) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(Eq, "Air");
        if (!Yq) return;
        const lq = qq.join(",");
        if (this.pending.has(lq)) return;
        const Oq = this.predictedProgress(Yq.skill).totalXp + Yq.amount;
        Number.isSafeInteger(Oq) && (this.pending.set(lq, {
          ...Yq,
          expires: this.now() + 2e3
        }), this.recordGain(Yq.skill, 0), this.emit())
      }
      rejectBlock(qq) {
        this.pending.delete(qq.join(",")) && this.emit()
      }
      SB() {
        if (this.eN) return;
        let qq = !1;
        for (const [Eq, gq] of this.pending) gq.expires <= this.now() && (this.pending.delete(Eq), qq = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, qq = !0), qq && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(qq, Eq) {
        var gq, Yq;
        let lq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Oq = (null === (gq = this.recent) || void 0 === gq ? void 0 : gq.skill) === qq && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          mq = (null === (Yq = this.recent) || void 0 === Yq ? void 0 : Yq.skill) === qq && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: qq,
          confirmed: Oq + Eq,
          expires: this.now() + 3e3,
          levelUpToken: null !== lq && void 0 !== lq ? lq : mq
        }
      }
      pendingXp(qq) {
        let Eq = 0;
        for (const gq of this.pending.values()) gq.skill === qq && (Eq += gq.amount);
        return Eq
      }
      predictedProgress(qq) {
        const Eq = this.progress[qq],
          gq = this.pendingXp(qq);
        return gq ? AE(Eq.totalXp + gq, qq) : Eq
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var qq, Eq, gq;
        const Yq = this.progress ? Cq.map((qq => {
            const Eq = this.predictedProgress(qq);
            return {
              ...this.text(qq),
              icon: HE[qq],
              benefit: this.benefit(qq, Eq.level),
              sources: this.sources(qq),
              id: qq,
              selected: qq === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(Eq.level)
              }),
              xp: null === Eq.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(Eq.xpIntoLevel),
                target: this.number(Eq.xpForNextLevel)
              }),
              percent: null === Eq.xpForNextLevel ? 100 : Math.min(100, Eq.xpIntoLevel / Eq.xpForNextLevel * 100)
            }
          })) : [],
          lq = Yq.find((qq => {
            var Eq;
            return qq.id === (null === (Eq = this.recent) || void 0 === Eq ? void 0 : Eq.skill)
          })),
          Oq = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: Yq,
          detail: null !== (qq = Yq.find((qq => qq.selected))) && void 0 !== qq ? qq : null,
          overallLevel: this.progress ? Cq.reduce(((qq, Eq) => qq + this.predictedProgress(Eq).level), 0) : null,
          hud: lq && Oq > 0 ? {
            skill: lq,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(Oq)
            }),
            levelUpToken: null !== (Eq = null === (gq = this.recent) || void 0 === gq ? void 0 : gq.levelUpToken) && void 0 !== Eq ? Eq : null,
            colour: PE(lq.id)
          } : null
        }
      }
    }
    const xg = Math.max(1600, 600, 950) + 400,
      Ag = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      cg = "skyblockQuestsView",
      ug = "skyblockQuestNotificationView";
    class Bg extends Bq {
      constructor(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          mq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(qq, Yq, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = Eq, this.translate = gq, this.now = lq, this.locale = Oq, this.publishNotification = mq, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var qq, Eq;
          this.selected = null !== (qq = null === (Eq = this.authoritative) || void 0 === Eq ? void 0 : Eq.trackedQuestId) && void 0 !== qq ? qq : null, this.show()
        }, this.select = qq => {
          this.selected = qq, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const qq = this.snapshot.detail;
          !this.eN && null !== qq && void 0 !== qq && qq.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(qq.id), this.emit())
        }, this.viewDialogue = () => {
          const qq = this.snapshot.detail;
          var Eq;
          qq && (null === (Eq = this.onViewDialogue) || void 0 === Eq || Eq.call(this, qq.id))
        }, this.notifications = new yE(lq, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var qq, Eq;
        return null !== (qq = null === (Eq = this.authoritative) || void 0 === Eq ? void 0 : Eq.trackedQuestId) && void 0 !== qq ? qq : null
      }
      notify(qq) {
        !this.eN && this.notifications.enqueue(qq) && this.emitNotification()
      }
      setNotificationsHeld(qq) {
        (this.notifications.setHeld(qq) || qq) && this.emitNotification()
      }
      SB() {
        var qq, Eq;
        if (this.eN) return;
        this.notifications.SB() && this.emitNotification();
        let gq = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, gq = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, gq = !0);
        const Yq = Wg(this.authoritative);
        null !== Yq && void 0 !== Yq && null !== (qq = Yq.questClock) && void 0 !== qq && qq.running && this.clockText(Yq) !== (null === (Eq = this.snapshot.tracked) || void 0 === Eq ? void 0 : Eq.clock) && (gq = !0), gq && this.emit()
      }
      setTranslator(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = qq, this.locale = Eq, this.emitNotification(), this.emit()
      }
      ga(qq) {
        if (!this.eN)
          if ("completion" === qq.kind) this.notify(qq.questCompletion);
          else if ("landmark" === qq.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: qq.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === qq.kind) {
          var Eq, gq, Yq;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: qq.npcNoteTitleKey,
            textKey: qq.npcNoteTextKey,
            params: null !== (Eq = qq.npcNoteParams) && void 0 !== Eq ? Eq : {},
            nameKeys: null !== (gq = qq.npcNoteNameKeys) && void 0 !== gq ? gq : {},
            iconItem: null !== (Yq = qq.npcNoteIconItem) && void 0 !== Yq ? Yq : null
          })
        } else if ("open" === qq.kind) this.show();
        else if ("guidance" === qq.kind) this.waypoint = qq.waypoint, this.compassTarget = qq.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === qq.kind) {
          this.authoritative = qq.snapshot, this.notifications.SB() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const Eq = this.trackedStepPulse;
          this.updateTrackedStepPulse(qq.snapshot), this.emit(), this.trackedStepPulse > Eq && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.eN || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var qq;
        return null !== (qq = this.translateWithIcons) && void 0 !== qq ? qq : this.translate
      }
      clockText(qq) {
        const Eq = qq.questClock;
        if (!Eq) return null;
        const gq = Eq.elapsedMs + (Eq.running ? this.now() - this.receivedAt : 0);
        return void 0 === Eq.countdownFromMs ? Mq(gq, !1) : Mq(1e3 * Math.ceil(Math.max(0, Eq.countdownFromMs - gq) / 1e3), !1)
      }
      updateTrackedStepPulse(qq) {
        var Eq, gq, Yq;
        const lq = Wg(qq);
        if (!lq) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const Oq = qq => lq.subquests.filter((Eq => qq(Eq.status))).map((qq => qq.id)),
          mq = Oq((qq => "completed" === qq || "skipped" === qq)),
          xq = Oq((qq => "locked" !== qq)),
          Aq = (null === (Eq = this.trackedSteps) || void 0 === Eq ? void 0 : Eq.questId) === lq.id && lq.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (Aq) {
          const qq = mq.filter((qq => !Aq.finished.has(qq))),
            Eq = Oq((qq => "active" === qq || "ready" === qq)).filter((qq => !Aq.unlocked.has(qq)));
          qq.length > 0 && this.trackedStepPulse++, (qq.length > 0 || Eq.length > 0) && (this.trackedChange = {
            finished: new Set(qq),
            unlocked: new Set(Eq),
            expiresAt: this.now() + xg
          })
        } else {
          var cq;
          this.trackedStepPulse = (null === (cq = this.trackedSteps) || void 0 === cq ? void 0 : cq.questId) === lq.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: lq.id,
          progress: lq.progress,
          finished: new Set([...null !== (gq = null === Aq || void 0 === Aq ? void 0 : Aq.finished) && void 0 !== gq ? gq : [], ...mq]),
          unlocked: new Set([...null !== (Yq = null === Aq || void 0 === Aq ? void 0 : Aq.unlocked) && void 0 !== Yq ? Yq : [], ...xq])
        }
      }
      entry(qq, Eq) {
        var gq, Yq;
        const lq = qq.id === (null === (gq = this.authoritative) || void 0 === gq ? void 0 : gq.trackedQuestId),
          Oq = this.now() < this.trackAvailableAt,
          mq = this.questTextTranslator(),
          xq = qq.subquests.map((Eq => {
            var gq, Yq, Oq, xq, Aq, cq;
            const uq = null !== (gq = Eq.handInNpcName) && void 0 !== gq ? gq : qq.giverName,
              Bq = this.translate("skyblockGame:progress", {
                current: Eq.progress.toLocaleString(this.locale),
                target: Eq.target.toLocaleString(this.locale)
              }),
              Wq = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: uq ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [Eq.status],
              Nq = "active" === Eq.status || "ready" === Eq.status;
            return {
              id: Eq.id,
              name: QE(mq, Eq.nameKey, Eq.nameParams),
              description: QE(mq, Eq.descriptionKey, Eq.descriptionParams),
              progress: Bq,
              status: Eq.status,
              statusLabel: Wq ? this.translate(Wq, {
                npc: uq
              }) : Bq,
              iconItem: Nq && null !== (Yq = Eq.questIconItem) && void 0 !== Yq ? Yq : null,
              barPercent: "active" === Eq.status && Eq.showsProgressBar ? Math.min(100, 100 * Eq.progress / Eq.target) : null,
              justFinished: lq && null !== (Oq = null === (xq = this.trackedChange) || void 0 === xq ? void 0 : xq.finished.has(Eq.id)) && void 0 !== Oq && Oq,
              justUnlocked: lq && null !== (Aq = null === (cq = this.trackedChange) || void 0 === cq ? void 0 : cq.unlocked.has(Eq.id)) && void 0 !== Aq && Aq
            }
          }));
        return {
          id: qq.id,
          name: QE(mq, qq.nameKey, qq.nameParams),
          description: QE(mq, qq.descriptionKey, qq.descriptionParams),
          progress: Eq ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: qq.progress.toLocaleString(this.locale),
            target: qq.target.toLocaleString(this.locale)
          }),
          completed: Eq,
          tracked: lq,
          selected: qq.id === this.selected,
          canTrack: !Eq && !lq && !Oq,
          trackLabel: this.translate(lq ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : Oq ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== qq.id,
          subquests: xq,
          focusStep: null !== (Yq = xq.find((qq => null !== qq.barPercent))) && void 0 !== Yq ? Yq : null,
          clock: this.clockText(qq)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq;
        const uq = [...null !== (qq = null === (Eq = this.authoritative) || void 0 === Eq ? void 0 : Eq.active) && void 0 !== qq ? qq : [], ...null !== (gq = null === (Yq = this.authoritative) || void 0 === Yq ? void 0 : Yq.completed) && void 0 !== gq ? gq : []];
        var Bq, Wq, Nq, aq;
        uq.some((qq => qq.id === this.selected)) || (this.selected = null !== (Bq = null !== (Wq = null === (Nq = this.authoritative) || void 0 === Nq ? void 0 : Nq.trackedQuestId) && void 0 !== Wq ? Wq : null === (aq = uq[0]) || void 0 === aq ? void 0 : aq.id) && void 0 !== Bq ? Bq : null);
        const Vq = null !== (lq = null === (Oq = this.authoritative) || void 0 === Oq ? void 0 : Oq.active.map((qq => this.entry(qq, !1)))) && void 0 !== lq ? lq : [];
        Vq.sort(((qq, Eq) => Number(Eq.tracked) - Number(qq.tracked)));
        const dq = null !== (mq = null === (xq = this.authoritative) || void 0 === xq ? void 0 : xq.completed.map((qq => this.entry(qq, !0)))) && void 0 !== mq ? mq : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: Vq,
          completed: dq,
          completedExpanded: this.completedExpanded,
          detail: null !== (Aq = [...Vq, ...dq].find((qq => qq.selected))) && void 0 !== Aq ? Aq : null,
          tracked: null !== (cq = Vq.find((qq => qq.tracked))) && void 0 !== cq ? cq : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function Wg(qq) {
      var Eq;
      return null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.active.find((Eq => Eq.id === qq.trackedQuestId))) && void 0 !== Eq ? Eq : null
    }
    const Ng = "skyblockDungeonsView";
    class ag extends Bq {
      constructor(qq, Eq) {
        let gq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          Yq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(qq, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = Eq, this.locale = gq, this.requestEnter = Yq, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = qq => {
          this.selected = qq, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const qq = this.pickerEntry(),
            Eq = null === qq || void 0 === qq ? void 0 : qq.difficulties[this.pageIndex];
          void 0 !== Eq && null !== Eq.unlockedBoss && (this.close(), this.requestEnter(qq.id, Eq.difficulty))
        }
      }
      setTranslator(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = qq, this.locale = Eq, this.emit()
      }
      ga(qq) {
        var Eq, gq;
        if (!this.eN) return "open" === qq.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== qq.kind ? "snapshot" === qq.kind && (this.authoritative = qq.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (Eq = null === (gq = this.pickerEntry()) || void 0 === gq ? void 0 : gq.difficulties.length) && void 0 !== Eq ? Eq : 1) - 1)), null === qq.snapshot && this.open ? this.close() : this.emit()) : this.choose(qq.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(qq) {
        var Eq;
        const gq = null === (Eq = this.authoritative) || void 0 === Eq ? void 0 : Eq.dungeons.find((Eq => Eq.id === qq));
        void 0 !== gq ? this.open && this.pickerDungeonId === qq || (this.pickerDungeonId = qq, this.pageIndex = Math.max(0, gq.difficulties.findLastIndex((qq => null !== qq.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${qq}`)
      }
      turnTo(qq) {
        var Eq, gq;
        const Yq = null !== (Eq = null === (gq = this.pickerEntry()) || void 0 === gq ? void 0 : gq.difficulties.length) && void 0 !== Eq ? Eq : 0;
        qq < 0 || qq >= Yq || qq === this.pageIndex || (this.pageIndex = qq, this.emit())
      }
      pickerEntry() {
        var qq, Eq;
        return null !== (qq = null === (Eq = this.authoritative) || void 0 === Eq ? void 0 : Eq.dungeons.find((qq => qq.id === this.pickerDungeonId))) && void 0 !== qq ? qq : null
      }
      difficulty(qq) {
        const Eq = qq.completions > 0,
          gq = null === qq.bestMs ? null : Mq(qq.bestMs);
        return {
          difficulty: qq.difficulty,
          label: this.translate(Zq[qq.difficulty]),
          colour: fq[qq.difficulty],
          beaten: Eq,
          bestTime: gq,
          completions: qq.completions,
          summary: Eq ? [null === gq ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: gq
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: qq.completions.toLocaleString(this.locale)
          })].filter((qq => null !== qq)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(qq) {
        const Eq = qq.difficulties.map((qq => this.difficulty(qq))),
          gq = Eq.filter((qq => qq.beaten)).length;
        return {
          id: qq.id,
          name: this.translate(qq.nameKey),
          selected: qq.id === this.selected,
          beatenSummary: `${gq} / ${Eq.length}`,
          difficulties: Eq
        }
      }
      picker() {
        const qq = this.pickerEntry();
        if (null === qq || 0 === qq.difficulties.length) return null;
        const Eq = qq.difficulties.map(((Eq, gq) => {
          var Yq, lq, Oq, mq;
          const xq = Eq.unlockedBoss,
            Aq = null === xq ? this.lockedHint(qq, gq) : null;
          return {
            ...this.difficulty(Eq),
            unlocked: null !== xq,
            bossName: null === xq ? null : this.translate(xq.bossNameKey),
            bossMobType: null !== (Yq = null === xq || void 0 === xq ? void 0 : xq.bossMobType) && void 0 !== Yq ? Yq : null,
            bossMobVariation: null !== (lq = null === xq || void 0 === xq ? void 0 : xq.bossMobVariation) && void 0 !== lq ? lq : null,
            lockedHint: null !== (Oq = null === Aq || void 0 === Aq ? void 0 : Aq.text) && void 0 !== Oq ? Oq : null,
            lockedHintHighlight: null !== (mq = null === Aq || void 0 === Aq ? void 0 : Aq.highlight) && void 0 !== mq ? mq : null,
            current: gq === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(qq.nameKey),
          pages: Eq,
          page: Eq[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < Eq.length - 1
        }
      }
      lockedHint(qq, Eq) {
        var gq, Yq, lq;
        if (0 === Eq && "number" === typeof qq.combatLevelLock) {
          const Eq = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: qq.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: Eq,
            colour: PE("combat"),
            icon: HE.combat
          })
        }
        const Oq = null !== (gq = null === (Yq = this.authoritative) || void 0 === Yq ? void 0 : Yq.dungeons) && void 0 !== gq ? gq : [],
          mq = Eq > 0 ? qq : null !== (lq = Oq[Oq.indexOf(qq) - 1]) && void 0 !== lq ? lq : null,
          xq = Eq > 0 ? qq.difficulties[Eq - 1] : null === mq || void 0 === mq ? void 0 : mq.difficulties[0];
        if (null === mq || void 0 === xq) return null;
        const Aq = this.translate(mq.nameKey);
        if (null === xq.unlockedBoss) return mq === qq ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, xq.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: Aq
        }, xq.difficulty);
        const cq = this.translate(xq.unlockedBoss.bossNameKey);
        return mq === qq ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: cq
        }, xq.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: cq,
            dungeon: Aq
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(qq, Eq, gq) {
        return this.hintHighlighting(qq, Eq, "difficulty", {
          name: this.translate(Zq[gq]),
          colour: fq[gq],
          icon: null
        })
      }
      hintHighlighting(qq, Eq, gq, Yq) {
        let {
          name: lq,
          colour: Oq,
          icon: mq
        } = Yq;
        const xq = this.translate(qq, {
          ...Eq,
          [gq]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(qq, {
            ...Eq,
            [gq]: lq
          }),
          highlight: 2 === xq.length ? {
            before: xq[0],
            name: lq,
            after: xq[1],
            colour: Oq,
            icon: mq
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var qq, Eq, gq;
        const Yq = null !== (qq = null === (Eq = this.authoritative) || void 0 === Eq ? void 0 : Eq.dungeons) && void 0 !== qq ? qq : [];
        var lq, Oq;
        Yq.some((qq => qq.id === this.selected)) || (this.selected = null !== (lq = null === (Oq = Yq[0]) || void 0 === Oq ? void 0 : Oq.id) && void 0 !== lq ? lq : null);
        const mq = Yq.map((qq => this.entry(qq)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: mq,
          detail: null !== (gq = mq.find((qq => qq.selected))) && void 0 !== gq ? gq : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const Vg = ["mining", "farming", "foraging", "fishing", "combat"],
      dg = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      jg = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function Hg() {
      for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
      return Eq.map(((qq, Eq) => ({
        amount: qq,
        coins: dg[Eq],
        xp: jg[Eq]
      })))
    }
    const og = Hg(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      Pg = Hg(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      Qg = Hg(50, 100, 250, 500, 1e3, 2500, 5e3),
      yg = Hg(25, 50, 100, 250, 500, 1e3),
      tg = Hg(10, 25, 50, 100, 250, 500, 1e3),
      rg = Hg(1, 5, 10, 25, 50);

    function vg(qq, Eq) {
      return {
        id: qq,
        category: "fishing",
        item: Eq,
        drops: [Eq],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tg
      }
    }
    const hg = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: Pg
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: Qg
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: Qg
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: yg
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: yg
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: Pg
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: og
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: og
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: og
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: Qg
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: Pg
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: Pg
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: Pg
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: Qg
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: Qg
      }, vg("wheatfish", "Wheatfish"), vg("darter", "Darter"), vg("sunset_minnow", "Sunset Minnow"), vg("root_flounder", "Root Flounder"), vg("greenfin_loach", "Greenfin Loach"), vg("red_strongfish", "Red Strongfish"), vg("green_strongfish", "Green Strongfish"), vg("boomerang_fish", "Boomerang Fish"), vg("seahorse", "Seahorse"), vg("spined_stickleback", "Spined Stickleback"), vg("moon_strongfish", "Moon Strongfish"), vg("boulder_bass", "Boulder Bass"), vg("grass_snapper", "Grass Snapper"), vg("crystal_wheatfish", "Crystalized Wheatfish", rg), vg("moonstone_pupfish", "Moonstone Pupfish", rg), vg("reedglass_minnow", "Reedglass Minnow"), vg("mangrove_herring", "Mangrove Herring"), vg("mudline_perch", "Mudline Perch"), vg("coastal_mullet", "Coastal Mullet"), vg("reef_sardine", "Reef Sardine"), vg("root_perch", "Root Perch"), vg("driftwood_catfish", "Driftwood Catfish"), vg("aether_minnow", "Aether Minnow"), vg("needlefish", "Tri-Pointed Needlefish"), vg("threadfin_bream", "Threadfin Bream"), vg("mudbelly_tilapia", "Mudbelly Tilapia"), vg("rotslab_eel", "Rotslab Eel"), vg("polarflash_electron", "Polarflash Electron"), vg("mireback_carp", "Mireback Carp"), vg("blackwater_bream", "Blackwater Bream"), vg("stone_grouper", "Stone Grouper"), vg("shadeback_ray", "Shadeback Ray"), vg("glacial_silverfish", "Glacial Silverfish"), vg("hatchetfish", "Hatchetfish"), vg("moonlit_boomerang", "Moonlit Boomerang Fish"), vg("murkborne_ray", "Murkborne Ray"), vg("bamboo_catfish", "Bamboo Catfish"), vg("mossback_arapaima", "Mossback Arapaima"), vg("murk_stingray", "Murk Stingray"), vg("channel_sawfish", "Channel Sawfish"), vg("boned_sturgeon", "Boned Sturgeon"), vg("oarfish", "Oarfish"), vg("snakehead", "Snakehead", rg), vg("eldertide_leviathan", "Eldertide Leviathan", rg), vg("pithead", "Pithead"), vg("electric_eel", "Electric Eel"), vg("shadow_darter", "Shadow Darter"), vg("abyss_carp", "Abyss Carp"), vg("nomai_moray", "Nomai Moray"), vg("silver_dragonfish", "Silver Dragonfish"), vg("giant_moray", "Giant Moray"), vg("coelacanth", "Coelacanth", rg), vg("frost_herring", "Frost Herring"), vg("permafrost_halibut", "Permafrost Halibut"), vg("glacial_lanternfish", "Glacial Lanternfish"), vg("frozen_grenadier", "Frozen Grenadier"), vg("blackfin_icefish", "Blackfin Icefish"), vg("moonfish", "Moonfish"), vg("alpha_strongfish", "Alpha Moon Strongfish"), vg("deep_lanternfish", "Deepwater Lanternfish", rg), vg("pearlescent_moonfish", "Pearlescent Moonfish", rg), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: Pg
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: yg
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: yg
      }],
      ng = (new Map(hg.map((qq => [qq.id, qq]))), new Map),
      bg = new Map;
    for (const AA of hg) {
      for (const [qq, Eq] of Object.entries(null !== (ig = AA.blocks) && void 0 !== ig ? ig : {})) {
        var ig;
        ng.set(qq, {
          collection: AA,
          amount: Eq
        })
      }
      for (const qq of null !== (Zg = AA.drops) && void 0 !== Zg ? Zg : []) {
        var Zg;
        bg.set(qq, AA)
      }
    }

    function fg(qq, Eq) {
      let gq = 0;
      for (; gq < qq.tiers.length && Eq >= qq.tiers[gq].amount;) gq++;
      return gq
    }
    const Mg = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function Tg(qq) {
      return Mg[qq - 1]
    }
    const zg = "skyblockCollectionsView";
    class Sg extends Bq {
      constructor(qq, Eq) {
        let gq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          Yq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : qq => qq;
        super(qq, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = Eq, this.locale = gq, this.itemName = Yq, this.counts = null, this.category = "mining", this.selected = hg[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = qq => {
          this.category = qq, this.selected = this.inCategory(qq)[0].id, this.emit()
        }, this.select = qq => {
          this.selected = qq, this.emit()
        }
      }
      setTranslator(qq, Eq, gq) {
        this.translate = qq, this.locale = Eq, this.itemName = gq, this.emit()
      }
      ga(qq) {
        if (!this.eN)
          if ("collOpen" !== qq.kind) {
            (qq.collFull || null === this.counts) && (this.counts = new Map);
            for (const [Eq, gq] of qq.collCounts) this.counts.set(Eq, gq);
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
        var qq;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const Eq = this.inCategory(this.category).map((qq => this.collectionView(qq))),
          gq = hg.reduce(((qq, Eq) => qq + this.tierOf(Eq)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: Vg.map((qq => this.categoryView(qq))),
          collections: Eq,
          detail: null !== (qq = Eq.find((qq => qq.selected))) && void 0 !== qq ? qq : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(gq)
          })
        }
      }
      categoryView(qq) {
        const Eq = this.inCategory(qq),
          gq = Eq.reduce(((qq, Eq) => qq + this.tierOf(Eq)), 0),
          Yq = Eq.reduce(((qq, Eq) => qq + Eq.tiers.length), 0);
        return {
          id: qq,
          label: this.translate(`skyblockGame:${qq}`),
          icon: HE[qq],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(gq),
            target: this.number(Yq)
          }),
          selected: qq === this.category
        }
      }
      collectionView(qq) {
        var Eq, gq;
        const Yq = null !== (Eq = this.counts.get(qq.id)) && void 0 !== Eq ? Eq : 0,
          lq = fg(qq, Yq),
          Oq = null !== (gq = qq.tiers[lq]) && void 0 !== gq ? gq : null,
          mq = 0 === lq ? 0 : qq.tiers[lq - 1].amount;
        return {
          id: qq.id,
          name: this.itemName(qq.item),
          icon: qq.item,
          selected: qq.id === this.selected,
          locked: 0 === Yq,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(Yq)
          }),
          tier: 0 === lq ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(lq),
          percent: null === Oq ? 100 : Math.min(100, (Yq - mq) / (Oq.amount - mq) * 100),
          progress: null === Oq ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(Yq),
            target: this.number(Oq.amount)
          }),
          nextReward: null === Oq ? null : this.reward(qq, Oq.coins, Oq.xp)
        }
      }
      reward(qq, Eq, gq) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(Eq),
          xp: this.number(gq),
          skill: this.translate(`skyblockGame:${qq.category}`)
        })
      }
      tierLabel(qq) {
        return this.translate("skyblockGame:collectionTier", {
          tier: Tg(qq)
        })
      }
      tierOf(qq) {
        var Eq;
        return fg(qq, null !== (Eq = this.counts.get(qq.id)) && void 0 !== Eq ? Eq : 0)
      }
      inCategory(qq) {
        return hg.filter((Eq => Eq.category === qq))
      }
      number(qq) {
        return qq.toLocaleString(this.locale)
      }
    }
    const pg = "skyblockPortalTransitView",
      Gg = "skyblockPortalArrival";
    class Lg {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.TV = qq, this.storage = Eq, this.now = gq, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      ga(qq) {
        const Eq = {
          zoneNameKey: qq.transitZoneNameKey,
          variation: qq.transitZoneVariation,
          colour: qq.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(Gg, Eq), this.show("departure", Eq.zoneNameKey, Eq.colour, qq.transitDurationMs, qq.transitDurationMs + 1500, (() => {
          this.storage.removeItem(Gg)
        }))
      }
      resumeArrival(qq) {
        const Eq = this.storage.getItem(Gg);
        this.storage.removeItem(Gg), null === Eq || Eq.variation !== qq || this.now() - Eq.departedAt > 3e4 || this.show("arrival", Eq.zoneNameKey, Eq.colour, 3200, 2e4)
      }
      finishArrival(qq) {
        var Eq;
        "arrival" === (null === (Eq = this.view) || void 0 === Eq ? void 0 : Eq.phase) && this.view.token === qq && (this.clearTimer(), this.view = null, this.TV(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(qq, Eq, gq, Yq, lq, Oq) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: qq,
          zoneNameKey: Eq,
          colour: gq,
          durationMs: Yq
        }, this.TV(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.TV(null), null === Oq || void 0 === Oq || Oq()
        }), lq)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const Jg = "skyblockDailyRewardView",
      kg = "skyblockDailyRewardCoin";
    class Rg {
      constructor(qq, Eq, gq, Yq) {
        let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          mq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          xq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          Aq = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.TV = qq, this.isBusy = Eq, this.holdQuestPopups = gq, this.onHeldCoinsChanged = Yq, this.onCoinLanded = lq, this.onStarted = Oq, this.onFinished = mq, this.onItemLanded = xq, this.now = Aq, this.Fc = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var qq, Eq;
        return null !== (qq = null === (Eq = this.playing) || void 0 === Eq ? void 0 : Eq.view) && void 0 !== qq ? qq : null
      }
      getHeldCoins() {
        var qq, Eq;
        let gq = 0;
        for (const Yq of this.Fc) gq += Yq.coins;
        return gq - (null !== (qq = null === (Eq = this.playing) || void 0 === Eq ? void 0 : Eq.released) && void 0 !== qq ? qq : 0)
      }
      ga(qq) {
        "dailyRewardClaimed" !== qq.kind ? (this.queue.push(qq), this.SB()) : this.Fc.push({
          coins: qq.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      SB() {
        const qq = this.now();
        if (null === this.playing) return this.releaseUnshown(qq), void this.startNext(qq);
        const Eq = this.playing,
          gq = qq - Eq.startedAt,
          Yq = Eq.view.flyingCoins,
          lq = function(qq, Eq) {
            let gq = 0;
            for (; gq < Eq && Fg(gq, Eq) <= qq;) gq++;
            return gq
          }(gq, Yq);
        if (lq !== Eq.landed) {
          for (let qq = lq - Eq.landed > 2 ? lq - 1 : Eq.landed; qq < lq; qq++) this.onCoinLanded(qq, Yq);
          Eq.landed = lq, Eq.released = Math.round(Eq.view.coins * lq / Yq), this.onHeldCoinsChanged()
        }
        for (; Eq.itemsLanded < Eq.view.items.length && 2e3 + 160 * Eq.itemsLanded + 630 <= gq;) this.onItemLanded(Eq.itemsLanded), Eq.itemsLanded++;
        gq >= Eq.view.durationMs && (this.finish(), this.startNext(qq))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.Fc = [], this.TV(null)
      }
      startNext(qq) {
        if (0 === this.queue.length || this.isBusy()) return;
        const Eq = this.queue.shift();
        this.token++;
        const gq = {
          token: this.token,
          day: Eq.dailyRewardDay,
          coins: Eq.dailyRewardCoins,
          items: Eq.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: Eq.dailyRewardDay === nq ? 24 : 14
        };
        this.playing = {
          view: gq,
          startedAt: qq,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.TV(gq), this.onStarted(gq)
      }
      finish() {
        this.Fc.shift(), this.playing = null, this.holdQuestPopups(!1), this.TV(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(qq) {
        if (this.queue.length > 0 || 0 === this.Fc.length) return;
        const Eq = this.Fc.length;
        this.Fc = this.Fc.filter((Eq => qq - Eq.receivedAt < 6e4)), this.Fc.length !== Eq && this.onHeldCoinsChanged()
      }
    }

    function Ug(qq, Eq) {
      return 450 + 715 * qq / (Eq - 1)
    }

    function Fg(qq, Eq) {
      return Ug(qq, Eq) + 650
    }
    const sg = "skyblockMailboxView";
    class Xg {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.TV = qq, this.isBusy = Eq, this.onStarted = gq, this.now = Yq, this.waiting = [], this.playing = null, this.token = 0, this.itemName = qq => qq
      }
      getSnapshot() {
        var qq, Eq;
        return null !== (qq = null === (Eq = this.playing) || void 0 === Eq ? void 0 : Eq.view) && void 0 !== qq ? qq : null
      }
      setItemName(qq) {
        this.itemName = qq
      }
      ga(qq) {
        this.waiting.push(...qq.mailLetters), this.SB()
      }
      SB() {
        const qq = this.now();
        null !== this.playing && qq - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.TV(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(qq)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.TV(null)
      }
      start(qq) {
        const Eq = this.waiting.slice(0, 3);
        this.token++;
        const gq = {
          token: this.token,
          letters: Eq.map((qq => this.toView(qq))),
          more: this.waiting.length - Eq.length,
          durationMs: 4500 + 700 * Eq.length
        };
        this.waiting = [], this.playing = {
          view: gq,
          startedAt: qq
        }, this.TV(gq), this.onStarted(gq)
      }
      toView(qq) {
        return {
          coins: qq.mailCoins,
          items: qq.mailItems.map((qq => {
            var Eq;
            return {
              itemName: qq.mailItemName,
              amount: qq.mailItemAmount,
              label: null !== (Eq = qq.mailItemLabel) && void 0 !== Eq ? Eq : this.itemName(qq.mailItemName)
            }
          })),
          reasonKey: qq.mailReasonKey,
          reasonParams: qq.mailReasonParams
        }
      }
    }
    const wg = "skyblockQuestGraphView",
      Kg = "skyblockDevQuestJump";

    function Cg(qq) {
      if (0 === qq.length) return "";
      const Eq = [`M ${qq[0].x} ${qq[0].y}`];
      for (let Yq = 1; Yq < qq.length - 1; Yq++) {
        const gq = qq[Yq + 1];
        Eq.push(`Q ${qq[Yq].x} ${qq[Yq].y} ${(qq[Yq].x+gq.x)/2} ${(qq[Yq].y+gq.y)/2}`)
      }
      const gq = qq[qq.length - 1];
      return Eq.push(`L ${gq.x} ${gq.y}`), Eq.join(" ")
    }

    function Ig(qq, Eq) {
      return qq < Eq ? `${qq}|${Eq}` : `${Eq}|${qq}`
    }
    class eg extends Bq {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          mq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          xq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(qq, gq, Yq), this.translate = Eq, this.requestJump = lq, this.requestArrive = Oq, this.storage = mq, this.now = xq, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = qq => {
          qq !== this.hoveredId && (this.hoveredId = qq, this.emit())
        }, this.jump = qq => {
          this.close(), this.requestJump(qq)
        }
      }
      ga(qq) {
        if (!this.eN)
          if ("graph" !== qq.kind) {
            if ("jumping" === qq.kind) {
              const Eq = {
                questId: qq.graphQuestId,
                variation: qq.graphVariation,
                completes: qq.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(Kg, Eq)
            }
          } else {
            const Eq = ++this.graphCount;
            gq.e(112).then((() => gq(6302))).then((gq => {
              let {
                default: Yq
              } = gq;
              this.eN || Eq !== this.graphCount || (this.layout = function(qq, Eq, gq) {
                var Yq, lq;
                const Oq = new qq.graphlib.Graph;
                Oq.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), Oq.setDefaultEdgeLabel((() => ({})));
                const mq = new Set;
                for (const uq of Eq) mq.add(uq.graphQuestId), Oq.setNode(uq.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const xq = gq.filter((qq => mq.has(qq.graphFromId) && mq.has(qq.graphToId) && qq.graphFromId !== qq.graphToId)),
                  Aq = new Map;
                for (const uq of [...xq].sort(((qq, Eq) => Number("awaits" === qq.graphEdgeKind) - Number("awaits" === Eq.graphEdgeKind)))) {
                  const qq = Ig(uq.graphFromId, uq.graphToId);
                  Aq.has(qq) || (Aq.set(qq, uq), Oq.setEdge(uq.graphFromId, uq.graphToId))
                }
                qq.layout(Oq);
                const cq = Oq.graph();
                return {
                  width: Math.ceil(null !== (Yq = cq.width) && void 0 !== Yq ? Yq : 0),
                  height: Math.ceil(null !== (lq = cq.height) && void 0 !== lq ? lq : 0),
                  nodes: Eq.map((qq => {
                    var Eq, gq;
                    const Yq = Oq.node(qq.graphQuestId);
                    return {
                      node: qq,
                      left: (null !== (Eq = Yq.x) && void 0 !== Eq ? Eq : 0) - 95,
                      top: (null !== (gq = Yq.y) && void 0 !== gq ? gq : 0) - 26
                    }
                  })),
                  edges: xq.map((qq => {
                    var Eq;
                    const gq = Aq.get(Ig(qq.graphFromId, qq.graphToId)),
                      Yq = null !== (Eq = Oq.edge(gq.graphFromId, gq.graphToId).points) && void 0 !== Eq ? Eq : [];
                    return {
                      edge: qq,
                      key: `${qq.graphFromId}|${qq.graphToId}|${qq.graphEdgeKind}`,
                      path: Cg(gq.graphFromId === qq.graphFromId ? Yq : [...Yq].reverse())
                    }
                  })),
                  plans: new Map(Eq.map((qq => [qq.graphQuestId, new Set([qq.graphQuestId, ...qq.graphPlanIds])])))
                }
              }(Yq, qq.graphNodes, qq.graphEdges), this.show())
            })).catch((qq => {
              console.error("The quest graph could not be laid out", qq)
            }))
          }
      }
      resumeJump(qq) {
        const Eq = this.storage.getItem(Kg);
        this.storage.removeItem(Kg), null === Eq || Eq.variation !== qq || this.now() - Eq.departedAt > 6e4 || this.requestArrive(Eq.questId, Eq.completes)
      }
      setTranslator(qq) {
        this.translate = qq, this.emit()
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
        var qq, Eq;
        return null !== (qq = null === this.hoveredId || null === (Eq = this.layout) || void 0 === Eq ? void 0 : Eq.plans.get(this.hoveredId)) && void 0 !== qq ? qq : new Set
      }
      buildSnapshot() {
        const qq = this.layout;
        if (null === qq) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const Eq = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: qq.width,
          height: qq.height,
          nodes: qq.nodes.map((qq => {
            let {
              node: gq,
              left: Yq,
              top: lq
            } = qq;
            return {
              id: gq.graphQuestId,
              name: this.translate(gq.graphNameKey),
              detail: null === gq.graphGiverName ? gq.graphZoneId : `${gq.graphGiverName} \xb7 ${gq.graphZoneId}`,
              state: gq.graphState,
              left: Yq,
              top: lq,
              inPlan: Eq.has(gq.graphQuestId),
              hovered: gq.graphQuestId === this.hoveredId
            }
          })),
          edges: qq.edges.map((qq => {
            let {
              edge: gq,
              key: Yq,
              path: lq
            } = qq;
            return {
              key: Yq,
              kind: gq.graphEdgeKind,
              path: lq,
              inPlan: Eq.has(gq.graphFromId) && Eq.has(gq.graphToId)
            }
          })),
          planning: Eq.size > 0
        }
      }
    }
    var Dg = gq(37109);
    const qY = 250,
      EY = 2150,
      gY = -2.8,
      YY = 2.2,
      lY = -27,
      OY = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      mY = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      xY = Math.round(50 + 1e3 * (mY.delay + mY.period / 2)),
      AY = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      cY = Array.from({
        length: 26
      }, ((qq, Eq) => {
        const gq = 2.39996 * Eq,
          Yq = .5 + .618034 * Eq % 1 * .23,
          lq = Eq % 3 !== 2;
        return {
          rune: lq ? AY[7 * Eq % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(gq)*Yq).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(gq)*Yq).toFixed(3)})`,
            "--spin": 40 * (Eq % 5 - 2) + "deg",
            "--size": (lq ? 1 + Eq % 4 * .2 : .3 + Eq % 2 * .15) + "rem",
            "--duration": `${(1.8+7*Eq%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*Eq%3).toFixed(2)}s`
          }
        }
      }));

    function uY(qq, Eq) {
      return Array.from({
        length: 30 + 3 * qq + (Eq ? 10 : 0)
      }, ((qq, Eq) => {
        const gq = Eq < 4,
          Yq = gq ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          lq = gq ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          Oq = gq ? 2.2 : .6 + Math.random(),
          mq = gq ? .3 : Math.random() < .5 ? .16 : .24,
          xq = gq ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": Yq,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${lq.toFixed(2)}rem`,
          "--length": `${Oq.toFixed(2)}rem`,
          "--width": `${mq}rem`,
          "--duration": `${Math.round(xq)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function BY(qq) {
      let {
        zeta: Eq,
        period: gq
      } = qq;
      const Yq = 2 * Math.PI / gq;
      return {
        w: Yq,
        decay: Eq * Yq / Math.sqrt(1 - Eq * Eq)
      }
    }
    let WY = !1;

    function NY() {
      if (WY) return;
      WY = !0;
      const qq = document.createElement("style");
      qq.textContent = function() {
        const qq = BY(OY),
          Eq = BY(mY),
          gq = Eq => Math.exp(-qq.decay * Eq) * Math.sin(qq.w * Eq),
          Yq = gq(Math.atan(qq.w / qq.decay) / qq.w),
          lq = .25,
          Oq = 2.15,
          mq = Math.round(215),
          xq = [];
        for (let Aq = 0; Aq <= mq; Aq++) {
          const qq = Aq / mq * Oq;
          let cq = Math.sin(Math.min(qq, lq) / lq * Math.PI / 2) ** 2,
            uq = 0,
            Bq = 1,
            Wq = 1 - .2 * cq,
            Nq = 1;
          if (qq >= lq) {
            const mq = qq - lq,
              xq = Math.max(0, mq - .05);
            cq = Math.exp(-xq / .05), uq = gq(xq + OY.lead * (1 - Math.exp(-xq / OY.rush))) / Yq;
            const Aq = xq - mY.delay,
              aq = Aq <= 0 ? 0 : 1 - Math.exp(-Eq.decay * Aq) * (Math.cos(Eq.w * Aq) + Eq.decay / Eq.w * Math.sin(Eq.w * Aq)),
              Vq = Math.max(0, (qq - 1.77) / (Oq - 1.77));
            Bq = (1 + (mY.to - 1) * aq) * (1 + .08 * Vq), Wq = 1.1 + 1.5 * Math.exp(-mq / .07) + .3 * Math.exp(-(((1e3 * mq - xY) / 100) ** 2)) + .8 * Vq, Nq = 1 - Vq ** 1.5
          }
          const aq = .15 * cq + gY * uq,
            Vq = -.1 * cq + YY * uq,
            dq = 3 * cq + lY * uq;
          xq.push(`${(Aq/mq*100).toFixed(3)}% { opacity: ${Nq.toFixed(3)}; transform: translate(${aq.toFixed(3)}rem, ${Vq.toFixed(3)}rem) rotate(${dq.toFixed(2)}deg) scale(${Bq.toFixed(3)}); filter: brightness(${Wq.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${xq.join(" ")} }`
      }(), document.head.append(qq)
    }
    const aY = "skyblockForgeView",
      VY = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class dY extends Bq {
      constructor(qq, Eq, gq, Yq, lq) {
        super(qq, gq, Yq), this.translate = Eq, this.requestForge = lq, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.onOpened = null, this.select = (qq, Eq) => {
          var gq, Yq;
          null !== this.forging || (null !== (gq = this.owned[(0, Dg.q)(Eq, qq)]) && void 0 !== gq ? gq : 0) <= 0 || (this.selected[qq] = this.selected[qq] === Eq ? null : Eq, this.status = null, null === (Yq = this.onPartSelected) || void 0 === Yq || Yq.call(this), this.emit())
        }, this.forge = qq => {
          var Eq, gq;
          const Yq = this.selectedParts();
          if (null === Yq || this.isPending() || !this.open) return;
          const lq = (0, Dg.m)(Yq);
          if (null === lq || lq.coalCost > this.coal) return;
          const Oq = this.preview(lq),
            mq = null !== (Eq = null === (gq = this.onForgeStarted) || void 0 === gq ? void 0 : gq.call(this, Oq.tier, Oq.named, qq)) && void 0 !== Eq ? Eq : () => {};
          if (this.dropArrival(), qq) {
            const qq = {
              id: ++this.forgeId,
              preview: Oq,
              timers: [],
              stopSounds: mq,
              landed: !1,
              reply: null
            };
            qq.timers.push(setTimeout((() => {
              qq.landed = !0, null !== qq.reply && (this.apply(qq.reply), qq.reply = null, this.emit())
            }), qY), setTimeout((() => {
              this.finishForge(qq)
            }), EY)), this.forging = qq
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(Yq)
        }, this.snapshot = this.buildSnapshot()
      }
      ga(qq) {
        var Eq;
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === qq.forgeMessageKind) return this.dropForge(), this.apply(qq), this.status = null, this.show(), void(null === (Eq = this.onOpened) || void 0 === Eq || Eq.call(this));
        const gq = this.forging;
        if (null !== gq && null !== qq.forgeRefusalKey) this.dropForge();
        else if (null !== gq && !gq.landed) return void(gq.reply = qq);
        this.apply(qq), this.emit()
      }
      apply(qq) {
        if (this.owned = qq.forgeOwnedParts, this.coal = qq.forgeCoalOwned, this.keepSelectionOwned("open" === qq.forgeMessageKind), null !== qq.forgeForgedSwordId) {
          var Eq;
          const gq = (0, Dg.m)(qq.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (Eq = null === gq || void 0 === gq ? void 0 : gq.displayName) && void 0 !== Eq ? Eq : ""
            }
          }
        } else null !== qq.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: qq.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(qq) {
        this.translate = qq, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(qq) {
        var Eq;
        this.forging = null;
        const gq = this.selectedParts(),
          Yq = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: qq.id,
          sameSword: null !== gq && (null === (Eq = (0, Dg.m)(gq)) || void 0 === Eq ? void 0 : Eq.displayName) === qq.preview.name,
          timer: Yq
        }, this.emit()
      }
      dropForge() {
        const qq = this.forging;
        if (null !== qq) {
          this.forging = null;
          for (const Eq of qq.timers) clearTimeout(Eq);
          qq.stopSounds(), null !== qq.reply && this.apply(qq.reply)
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
        var qq, Eq, gq;
        const Yq = this.selectedParts(),
          lq = null === Yq ? null : (0, Dg.m)(Yq),
          Oq = null !== (qq = null === (Eq = this.forging) || void 0 === Eq ? void 0 : Eq.preview) && void 0 !== qq ? qq : null === lq ? null : this.preview(lq);
        return {
          enabled: this.received,
          open: this.open,
          slots: Dg.j.map((qq => ({
            kind: qq,
            label: this.translate(VY[qq]),
            parts: this.partsFor(qq)
          }))),
          coalOwned: this.coal,
          preview: Oq,
          unformedSword: Dg.g[null !== (gq = this.selected.Blade) && void 0 !== gq ? gq : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((qq => qq > 0)),
          canForge: null !== Oq && !Oq.coalShort && !this.isPending(),
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
      preview(qq) {
        return {
          name: qq.displayName,
          lore: qq.lore,
          baseSword: qq.baseSword,
          enchantmentTier: qq.enchantmentTier,
          tier: Number(qq.enchantmentTier.slice(-1)),
          named: qq.named,
          stats: this.stats(qq),
          effects: qq.effects,
          coalCost: qq.coalCost,
          coalShort: null === this.forging && qq.coalCost > this.coal
        }
      }
      partsFor(qq) {
        const Eq = [];
        for (const Yq of Dg.e) {
          var gq;
          const lq = (0, Dg.q)(Yq, qq),
            Oq = null !== (gq = this.owned[lq]) && void 0 !== gq ? gq : 0;
          Oq > 0 && Eq.push({
            material: Yq,
            itemName: lq,
            owned: Oq,
            selected: this.selected[qq] === Yq,
            placeholder: !1
          })
        }
        if (0 === Eq.length) {
          const gq = Dg.e[0];
          Eq.push({
            material: gq,
            itemName: (0, Dg.q)(gq, qq),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return Eq
      }
      stats(qq) {
        const Eq = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${qq.powerMultiplier.toFixed(2)}`,
          better: qq.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${qq.damageMultiplier.toFixed(2)}`,
          better: qq.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/qq.cooldownMultiplier).toFixed(2)}`,
          better: qq.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${qq.knockbackMultiplier.toFixed(2)}`,
          better: qq.knockbackMultiplier > 1
        }];
        return qq.reachBonus > 0 && Eq.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${qq.reachBonus.toFixed(1)}`,
          better: !0
        }), qq.damageReduction > 0 && Eq.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*qq.damageReduction)}%`,
          better: !0
        }), Eq
      }
      selectedParts() {
        const {
          Blade: qq,
          Guard: Eq,
          Handle: gq
        } = this.selected;
        return null === qq || null === Eq || null === gq ? null : {
          blade: qq,
          guard: Eq,
          handle: gq
        }
      }
      keepSelectionOwned(qq) {
        for (const gq of Dg.j) {
          var Eq;
          const Yq = this.selected[gq];
          if (null !== Yq && (null !== (Eq = this.owned[(0, Dg.q)(Yq, gq)]) && void 0 !== Eq ? Eq : 0) > 0) continue;
          if (!qq) {
            this.selected[gq] = null;
            continue
          }
          const lq = [...Dg.e].reverse().find((qq => {
            var Eq;
            return (null !== (Eq = this.owned[(0, Dg.q)(qq, gq)]) && void 0 !== Eq ? Eq : 0) > 0
          }));
          this.selected[gq] = null !== lq && void 0 !== lq ? lq : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const jY = "skyblockSmugglerView",
      HY = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class oY extends Bq {
      constructor(qq, Eq, gq, Yq, lq) {
        let Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(qq, gq, Yq), this.translate = Eq, this.requestBuy = lq, this.now = Oq, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = qq => qq, this.onBought = null, this.buy = qq => {
          const Eq = this.deals[qq];
          void 0 !== Eq && !this.isPending() && this.open && !this.soldOut.has(qq) && this.canAfford(Eq) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, qq))
        }, this.snapshot = this.buildSnapshot()
      }
      ga(qq) {
        if (this.received = !0, this.day = qq.smugglerDay, this.deals = qq.smugglerDeals, this.rivets = qq.smugglerRivetsOwned, this.crests = qq.smugglerCrestsOwned, this.soldOut = new Set(qq.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + qq.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === qq.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = qq.smugglerBoughtSlot, null !== qq.smugglerBoughtSlot) {
          var Eq, gq;
          const Yq = this.deals[qq.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === Yq ? "" : this.dealName(Yq),
              amount: String(null !== (Eq = null === Yq || void 0 === Yq ? void 0 : Yq.smugglerDealAmount) && void 0 !== Eq ? Eq : 0)
            }
          }, this.boughtCount++, null === (gq = this.onBought) || void 0 === gq || gq.call(this)
        } else null !== qq.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: qq.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(qq, Eq, gq) {
        this.translate = qq, void 0 !== gq && (this.itemName = gq), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(qq) {
        if (null !== qq.smugglerDealUniqueName) return qq.smugglerDealUniqueName;
        const Eq = HY[qq.smugglerDealItem];
        return void 0 === Eq ? this.itemName(qq.smugglerDealItem) : this.translate(Eq)
      }
      canAfford(qq) {
        return qq.smugglerDealRivets <= this.rivets && qq.smugglerDealCrests <= this.crests
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
        const qq = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return qq <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : qq < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(qq)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(qq / 60)),
          minutes: String(qq % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((qq, Eq) => ({
            slot: Eq,
            itemName: qq.smugglerDealItem,
            displayName: this.dealName(qq),
            enchantmentTier: qq.smugglerDealEnchantmentTier,
            amount: qq.smugglerDealAmount,
            rivets: qq.smugglerDealRivets,
            crests: qq.smugglerDealCrests,
            affordable: this.canAfford(qq),
            soldOut: this.soldOut.has(Eq),
            justBought: this.boughtSlot === Eq
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
    const PY = "skyblockPassageView",
      QY = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function yY(qq, Eq) {
      return qq(QY[Eq])
    }

    function tY(qq, Eq, gq, Yq) {
      const lq = Math.ceil((gq - Yq) / 864e5),
        Oq = yY(qq, Eq);
      return lq > 1 ? qq("skyblockGame:passageNextDays", {
        phase: Oq,
        days: String(lq)
      }) : qq("skyblockGame:passageNextSoon", {
        phase: Oq
      })
    }
    class rY extends Bq {
      constructor(qq, Eq, gq, Yq) {
        let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(qq, gq, Yq), this.translate = Eq, this.now = lq, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = qq => qq, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      ga(qq) {
        this.message = qq, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(qq, Eq, gq) {
        this.translate = qq, void 0 !== gq && (this.itemName = gq), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(qq) {
        return {
          itemName: qq.passageFish,
          displayName: this.itemName(qq.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(qq.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const qq = this.message;
        return null === qq ? {
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
          phase: qq.passagePhase,
          phaseName: yY(this.translate, qq.passagePhase),
          visitors: qq.passageVisitors.map((qq => this.describe(qq))),
          resting: this.describe(qq.passageResting),
          nextPhase: qq.passageNextPhase,
          next: tY(this.translate, qq.passageNextPhase, qq.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var vY = gq(38514);
    const hY = "skyblockKeepersChairView";
    class nY extends Bq {
      constructor(qq, Eq, gq, Yq, lq) {
        let Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          mq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new vY.b;
        super(qq, gq, Yq), this.translate = Eq, this.requestAim = lq, this.now = Oq, this.pacer = mq, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = qq => qq, this.aim = qq => {
          !this.awaitingReply && this.open && this.atChair && qq !== this.favoured && (null === qq || this.islands.some((Eq => Eq.keepersChairIslandId === qq && Eq.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== qq && void 0 !== qq ? qq : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = mq.subscribe((() => {
          this.emit()
        }))
      }
      ga(qq) {
        var Eq, gq;
        this.received = !0;
        const Yq = this.favoured,
          lq = this.atChair;
        var Oq;
        return this.islands = qq.keepersChairIslands, this.favoured = qq.keepersChairFavoured, this.passage = null !== (Eq = qq.keepersChairPassage) && void 0 !== Eq ? Eq : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (gq = qq.keepersChairAtChair) || void 0 === gq || gq, "place" === qq.keepersChairMessageKind ? (!lq && this.atChair && "refused" === (null === (Oq = this.status) || void 0 === Oq ? void 0 : Oq.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === qq.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== qq.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: qq.keepersChairRefusalKey,
          island: null
        } : this.favoured !== Yq && (this.status = null === this.favoured ? {
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
      receivePassage(qq) {
        this.received && (this.passage = qq, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(qq, Eq, gq) {
        this.translate = qq, void 0 !== gq && (this.itemName = gq), this.emit()
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
      islandName(qq) {
        const Eq = this.islands.find((Eq => Eq.keepersChairIslandId === qq));
        return void 0 === Eq ? qq : this.translate(Eq.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const qq = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          Eq = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((qq => {
            const Eq = qq.keepersChairFeaturedFish;
            return {
              id: qq.keepersChairIslandId,
              name: this.translate(qq.keepersChairIslandNameKey),
              relit: qq.keepersChairIslandRelit,
              featuredFish: null === Eq ? null : {
                itemName: Eq,
                displayName: this.itemName(Eq)
              },
              favoured: qq.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === qq ? null : {
            tone: qq.tone,
            text: this.translate(qq.key, null === qq.island ? void 0 : {
              island: this.islandName(qq.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === Eq ? null : {
            phase: Eq.keepersChairPassagePhase,
            phaseName: yY(this.translate, Eq.keepersChairPassagePhase),
            nextPhase: Eq.keepersChairPassageNextPhase,
            next: tY(this.translate, Eq.keepersChairPassageNextPhase, Eq.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const bY = "skyblockReachLogView",
      iY = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      ZY = "Caught Fish",
      fY = [1, 2, 4];

    function MY(qq, Eq) {
      return qq.map((qq => ({
        ...qq,
        reachLogPageFish: qq.reachLogPageFish.map((qq => ({
          ...qq,
          reachLogFishFresh: Eq(qq)
        })))
      })))
    }
    class TY extends Bq {
      constructor(qq, Eq, gq, Yq, lq) {
        let Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new vY.b;
        super(qq, gq, Yq), this.translate = Eq, this.requestOpen = lq, this.pacer = Oq, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = qq => qq, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = qq => {
          this.pages.some((Eq => Eq.reachLogIslandId === qq)) && (this.selected = qq, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Oq.subscribe((() => {
          this.emit()
        }))
      }
      ga(qq) {
        if (this.received = !0, "status" === qq.reachLogMessageKind) return !0 === qq.reachLogNews && this.markNews(), this.serverFresh = qq.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const Eq = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== qq.reachLogMessageKind)
          if (this.pageViews = null, this.pages = MY(qq.reachLogPages, (qq => qq.reachLogFishFresh || this.heldFresh.has(qq.reachLogFishItem))), this.letGoShown = qq.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, Eq) this.showPages();
          else {
            for (const qq of this.pages)
              for (const Eq of qq.reachLogPageFish) Eq.reachLogFishFresh && this.heldFresh.add(Eq.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(qq, Eq, gq) {
        this.translate = qq, this.pageViews = null, void 0 !== gq && (this.itemName = gq), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = MY(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var qq, Eq, gq, Yq;
        const lq = this.pages.find((qq => qq.reachLogPageFish.some((qq => qq.reachLogFishFresh))));
        if (void 0 !== lq) return lq.reachLogIslandId;
        if (null !== this.selected && this.pages.some((qq => qq.reachLogIslandId === this.selected))) return this.selected;
        return null !== (qq = null !== (Eq = null === (gq = this.pages.filter((qq => qq.reachLogIslandAwake)).at(-1)) || void 0 === gq ? void 0 : gq.reachLogIslandId) && void 0 !== Eq ? Eq : null === (Yq = this.pages[0]) || void 0 === Yq ? void 0 : Yq.reachLogIslandId) && void 0 !== qq ? qq : null
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
        return this.pages.map((qq => {
          var Eq;
          return {
            id: qq.reachLogIslandId,
            name: this.translate(qq.reachLogIslandNameKey),
            awake: qq.reachLogIslandAwake,
            gold: qq.reachLogPageGold,
            caught: qq.reachLogPageFish.filter((qq => qq.reachLogFishCaught && !qq.reachLogFishVisitor)).length,
            total: qq.reachLogPageFish.filter((qq => !qq.reachLogFishVisitor)).length,
            fish: qq.reachLogPageFish.map((qq => {
              const Eq = qq.reachLogFishBestKg;
              return {
                itemName: qq.reachLogFishItem,
                name: qq.reachLogFishCaught ? this.itemName(qq.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: qq.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / qq.reachLogFishChance))
                }),
                best: qq.reachLogFishCaught ? null === Eq ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: Eq.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: qq.reachLogFishMarks,
                ribbons: fY.map((Eq => 0 !== (qq.reachLogFishRibbons & Eq))),
                glimmer: 0 !== (8 & qq.reachLogFishRibbons),
                halo: 0 !== (32 & qq.reachLogFishRibbons),
                fresh: qq.reachLogFishFresh,
                visitor: qq.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (Eq = qq.reachLogPageReturner) && void 0 !== Eq ? Eq : null)
          }
        }))
      }
      buildReturner(qq) {
        return null === qq ? null : {
          itemName: qq.reachLogReturnerFishItem,
          line: this.translate(qq.reachLogReturnerLineKey, {
            name: this.translate(qq.reachLogReturnerNameKey),
            trinket: this.translate(qq.reachLogReturnerTrinketKey)
          }),
          back: qq.reachLogReturnerBack
        }
      }
      receivePassagePhase(qq) {
        null !== this.passagePhase && this.passagePhase !== qq && (this.pagesCurrent = !1), this.passagePhase = qq
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const zY = "skyblockLampLightView";
    class SY {
      constructor(qq, Eq, gq, Yq) {
        this.TV = qq, this.translate = Eq, this.requestCommand = gq, this.pacer = Yq, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.eN = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = qq => {
          qq ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = qq => {
          this.send(`buy ${qq}`)
        }, this.socket = qq => {
          this.send(`socket ${null!==qq&&void 0!==qq?qq:zq}`)
        }, this.wearTint = qq => {
          this.send(`tint ${null!==qq&&void 0!==qq?qq:zq}`)
        }, this.setSituation = qq => {
          this.situation = qq, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Yq.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = Yq.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      ga(qq) {
        if (this.message = qq, null !== qq.lampLightShop && (this.shop = qq.lampLightShop), "open" === qq.lampLightKind && (this.refusalKey = null), "reply" === qq.lampLightKind) {
          var Eq;
          const lq = null !== (Eq = qq.lampLightReplyTag) && void 0 !== Eq ? Eq : null,
            Oq = null !== lq && lq === this.offTag;
          var gq, Yq;
          if (Oq ? this.settleOff() : null !== lq && lq !== this.awaitingTag || this.settleReply(), this.refusalKey = qq.lampLightRefusalKey, null !== qq.lampLightBought && !Oq) this.sparkle = {
            id: qq.lampLightBought,
            count: (null !== (gq = null === (Yq = this.sparkle) || void 0 === Yq ? void 0 : Yq.count) && void 0 !== gq ? gq : 0) + 1
          }
        }
        qq.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === qq.lampLightKind && (this.lastGained = qq.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(qq) {
        qq !== this.atChair && (this.atChair = qq, qq && (this.refusalKey = null), this.emit())
      }
      setTranslator(qq, Eq) {
        this.translate = qq, this.locale = null !== Eq && void 0 !== Eq ? Eq : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.eN = !0
      }
      send(qq) {
        var Eq;
        if (null !== this.awaitingTag || "ready" !== (null === (Eq = this.message) || void 0 === Eq ? void 0 : Eq.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const gq = this.nextTag();
        this.awaitingTag = gq, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${qq} ${gq}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const qq = this.nextTag();
        this.offTag = qq, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${qq}`)
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
        this.eN || (this.snapshot = this.buildSnapshot(), this.TV(this.snapshot))
      }
      formatLight(qq) {
        return Math.floor(qq).toLocaleString(this.locale)
      }
      formatPercent(qq) {
        const Eq = 100 * qq;
        return Eq >= 10 ? Math.round(Eq).toLocaleString(this.locale) : Eq.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(qq, Eq) {
        if ("bite" === qq) return this.translate("skyblockGame:lampLightBite", {
          seconds: (Eq.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === qq) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(Eq.lampLightRareChance)
        });
        if ("notice" === qq) return null === Eq.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(Eq.lampLightNoticeChance)
        });
        const gq = "meter" === qq ? Eq.lampLightMeterCatches : Eq.lampLightBloomCatches;
        return null === gq ? null : this.translate("meter" === qq ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(gq))
        })
      }
      oddsLines(qq, Eq) {
        const gq = (qq, Eq) => {
            var gq;
            return null !== (gq = {
              bite: Eq.lampLightBiteMs,
              rare: Eq.lampLightRareChance,
              meter: Eq.lampLightMeterCatches,
              bloom: Eq.lampLightBloomCatches,
              notice: Eq.lampLightNoticeChance
            } [qq]) && void 0 !== gq ? gq : 0
          },
          Yq = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          lq = [];
        for (const Oq of ["bite", "rare", "meter", "bloom", "notice"]) {
          const mq = this.formatOdds(Oq, qq),
            xq = this.formatOdds(Oq, Eq);
          if (null === mq || null === xq || "bite" !== Oq && "rare" !== Oq && mq === xq) continue;
          const Aq = gq(Oq, Eq) - gq(Oq, qq),
            cq = Yq[Oq] ? Aq < 0 : Aq > 0;
          lq.push({
            label: Oq,
            before: mq,
            after: xq,
            tone: mq === xq ? "same" : cq ? "better" : "worse"
          })
        }
        return lq
      }
      charmView(qq, Eq, gq) {
        const Yq = qq.lampLightCharmId.charAt(0).toUpperCase() + qq.lampLightCharmId.slice(1),
          lq = "bloom" === this.situation;
        return {
          id: qq.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${Yq}`),
          effect: this.translate(`skyblockGame:lampLightCharm${Yq}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(qq.lampLightCharmCost)
          }),
          owned: qq.lampLightCharmOwned,
          affordable: gq >= qq.lampLightCharmCost,
          socketed: Eq.lampLightSocketed === qq.lampLightCharmId,
          lines: this.oddsLines(lq ? Eq.lampLightBareBloom : Eq.lampLightBareOpen, lq ? qq.lampLightCharmBloom : qq.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var qq, Eq, gq, Yq;
        const lq = this.message,
          Oq = "ready" === (null === lq || void 0 === lq ? void 0 : lq.lampLightStatus) ? this.shop : null,
          mq = null !== (qq = null === lq || void 0 === lq ? void 0 : lq.lampLightBalance) && void 0 !== qq ? qq : 0,
          xq = this.atChair,
          Aq = "loading" === (null === lq || void 0 === lq ? void 0 : lq.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === lq || void 0 === lq ? void 0 : lq.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          cq = "ready" !== (null === lq || void 0 === lq ? void 0 : lq.lampLightStatus) || xq ? null !== (Eq = this.refusalKey) && void 0 !== Eq ? Eq : Aq : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== lq && "locked" !== lq.lampLightStatus,
          status: null !== (gq = null === lq || void 0 === lq ? void 0 : lq.lampLightStatus) && void 0 !== gq ? gq : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(mq)
          }),
          releasing: null !== (Yq = null === lq || void 0 === lq ? void 0 : lq.lampLightReleasing) && void 0 !== Yq && Yq,
          gained: null === lq || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === lq || void 0 === lq ? void 0 : lq.lampLightStatus) && xq && !this.isPending(),
          situation: this.situation,
          shop: null === Oq ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: Oq.lampLightOddsRod,
              island: this.translate(Oq.lampLightIslandNameKey)
            }),
            heldRod: null !== Oq.lampLightHeldRod,
            charms: Oq.lampLightCharms.map((qq => this.charmView(qq, Oq, mq))),
            tints: Oq.lampLightTints.map((qq => {
              const Eq = qq.lampLightTintId,
                [gq, Yq, lq] = qq.lampLightTintColour;
              return {
                id: Eq,
                name: this.translate(`skyblockGame:lampLightTint${Eq.charAt(0).toUpperCase()}${Eq.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(qq.lampLightTintCost)
                }),
                owned: qq.lampLightTintOwned,
                affordable: mq >= qq.lampLightTintCost,
                wearing: Oq.lampLightTint === Eq,
                colour: `rgb(${gq}, ${Yq}, ${lq})`
              }
            })),
            wearingIslandColours: null === Oq.lampLightTint
          },
          notice: null === cq ? null : this.translate(cq),
          sparkle: this.sparkle
        }
      }
    }
    const pY = "skyblockMagmawardView";
    class GY {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.TV = qq, this.now = Eq, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = Rq.map((() => 0)), this.wornAt = Rq.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      ga(qq) {
        var Eq, gq;
        const Yq = Rq.map(((Eq, gq) => !0 === qq.magmawardPiecesWorn[gq]));
        if (!Yq.includes(!0)) return this.snapshot = null, void this.TV(null);
        const lq = this.now(),
          Oq = this.snapshot;
        null === Oq && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const mq = qq.magmawardFuelCarried,
          xq = !Yq.includes(!1);
        let Aq = null !== (Eq = null === Oq || void 0 === Oq ? void 0 : Oq.pulse) && void 0 !== Eq ? Eq : null,
          cq = null !== (gq = null === Oq || void 0 === Oq ? void 0 : Oq.flare) && void 0 !== gq ? gq : null;
        qq.magmawardFuelBurned ? (Aq = "burn", cq = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = lq, this.flareAt = lq) : null !== Oq && mq > Oq.fuel && (Aq = "gain", this.pulseToken++, this.pulseAt = lq), xq && null !== Oq && !Oq.fullSet && (cq = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = lq, this.setLitAt = lq);
        const uq = Rq.map(((qq, Eq) => (Yq[Eq] && null !== Oq && !Oq.pieces[Eq].worn && (this.wornTokens[Eq]++, this.wornAt[Eq] = lq), {
          itemName: qq,
          worn: Yq[Eq],
          wornToken: this.wornTokens[Eq],
          justWorn: Yq[Eq] && this.isPlaying(this.wornAt[Eq], lq)
        })));
        this.snapshot = {
          pieces: uq,
          wornCount: Yq.filter(Boolean).length,
          fullSet: xq,
          fuel: mq,
          fuelState: mq <= 0 ? "empty" : mq <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, lq) ? Aq : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, lq) ? cq : null,
          flareToken: this.flareToken,
          setLit: xq && this.isPlaying(this.setLitAt, lq),
          setLitToken: this.setLitToken
        }, this.TV(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.TV(null)
      }
      isPlaying(qq, Eq) {
        return Eq - qq < 1200
      }
    }
    const LY = "skyblockGlowtideView";
    class JY {
      constructor(qq) {
        this.TV = qq, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = qq => {
          this.arrow = qq, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      ga(qq) {
        this.bloom = qq.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.TV(null))
      }
      afterRender(qq, Eq) {
        const gq = this.bloom;
        if (null === gq || null === qq) return;
        const Yq = gq.glowtideBloomX - qq[0],
          Oq = gq.glowtideBloomZ - qq[2],
          mq = Math.hypot(Yq, Oq),
          xq = this.snapshot,
          Aq = null !== xq && void 0 !== xq && xq.inRange ? 1 : 0,
          cq = mq <= 12.5 + Aq && qq[1] - gq.glowtideBloomY <= 10 + Aq;
        !cq || null !== xq && void 0 !== xq && xq.inRange || this.inRangeToken++;
        const uq = {
          colour: gq.glowtideBloomColour,
          inRange: cq,
          distance: Math.round(mq),
          inRangeToken: this.inRangeToken
        };
        (null === xq || uq.colour !== xq.colour || uq.inRange !== xq.inRange || !cq && uq.distance !== xq.distance) && (this.snapshot = uq, this.TV(uq));
        const Bq = lq.c.computeShortestRotation(Eq, (0, lq.Kb)([Yq, 0, Oq]));
        null === this.arrow || Math.abs(Bq - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${Bq}rad)`, this.arrowTurn = Bq)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.TV(null)
      }
    }
    const kY = "skyblockGlowMeterView";
    class RY {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.TV = qq, this.now = Eq, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      ga(qq) {
        const Eq = this.now(),
          {
            glowMeterFill: gq,
            glowMeterCapacity: Yq
          } = qq,
          lq = gq >= Yq,
          Oq = this.snapshot;
        null !== Oq && (lq && !Oq.full && (this.fullToken++, this.fullAt = Eq), Oq.full && !lq ? (this.burstToken++, this.burstAt = Eq) : gq > Oq.fill && (this.gainToken++, this.gainAt = Eq)), this.snapshot = {
          fill: gq,
          WB: Yq,
          ratio: Math.min(1, Math.max(0, gq / Yq)),
          full: lq,
          rares: qq.glowMeterRares,
          ready: lq && this.isPlaying(this.fullAt, Eq),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, Eq),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, Eq),
          gainToken: this.gainToken
        }, this.TV(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.TV(null)
      }
      isPlaying(qq, Eq) {
        return Eq - qq < 2e3
      }
    }
    const UY = "skyblockHushWaitView";
    class FY {
      constructor(qq) {
        this.TV = qq, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      ga(qq) {
        let {
          hushWaitMs: Eq,
          hushWaitTotalMs: gq,
          hushWaitLines: Yq
        } = qq;
        if (this.clearTimers(), this.token++, 0 === Yq.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (Eq <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: Yq[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const lq = Math.max(null !== gq && void 0 !== gq ? gq : Eq, Eq),
          Oq = lq - Eq,
          mq = qq => lq * qq / Yq.length,
          xq = qq => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: lq,
              elapsedMs: Oq,
              line: Yq[qq],
              lineIndex: qq
            })
          };
        let Aq = 0;
        for (; Aq + 1 < Yq.length && mq(Aq + 1) <= Oq;) Aq++;
        xq(Aq);
        for (let cq = Aq + 1; cq < Yq.length; cq++) this.later(mq(cq) - Oq, (() => {
          xq(cq)
        }));
        this.later(Eq, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(qq) {
        this.snapshot = qq, this.TV(qq)
      }
      later(qq, Eq) {
        this.timers.push(setTimeout(Eq, qq))
      }
      clearTimers() {
        for (const qq of this.timers) clearTimeout(qq);
        this.timers = []
      }
    }
    const sY = "skyblockTideChartsView",
      XY = 36e5,
      wY = 864e5;

    function KY(qq, Eq, gq) {
      const [Yq, lq, Oq, mq] = qq.tideChartArea, xq = Math.floor(Eq), Aq = Math.floor(gq);
      return xq >= Yq && xq <= Oq && Aq >= lq && Aq <= mq
    }

    function CY(qq, Eq, gq) {
      const [Yq, lq, Oq, mq] = qq.tideChartWater;
      return function(qq, Eq, gq, Yq, lq, Oq) {
        const mq = 4 - Uq(Math.floor(lq) - (qq - gq), gq);
        return 5 * Uq(Math.floor(Oq) - (Eq - Yq), Yq) + mq
      }(Yq, lq, Oq, mq, Eq, gq)
    }

    function IY(qq, Eq, gq) {
      const Yq = qq.tideCharts;
      for (let lq = 0; lq < Yq.length; lq++)
        if (KY(Yq[lq], Eq, gq)) return Yq[lq];
      return null
    }

    function eY(qq, Eq, gq) {
      const Yq = Math.max(0, Eq - gq);
      return Yq > wY ? qq("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(Yq / wY))
      }) : Yq > XY ? qq("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(Yq / XY))
      }) : qq("skyblockGame:tideChartsTurnSoon")
    }
    class DY extends Bq {
      constructor(qq, Eq, gq, Yq) {
        let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(qq, gq, Yq), this.translate = Eq, this.now = lq, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.zW = qq => {
          this.picked = qq, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      ga(qq) {
        const Eq = this.message;
        if (null !== Eq)
          for (const Yq of qq.tideCharts) {
            var gq;
            const qq = Eq.tideCharts.find((qq => qq.tideChartIsland === Yq.tideChartIsland)),
              lq = Yq.tideChartLit & ~(null !== (gq = null === qq || void 0 === qq ? void 0 : qq.tideChartLit) && void 0 !== gq ? gq : 0);
            void 0 !== qq && 0 !== lq && (this.pulse = {
              island: Yq.tideChartIsland,
              cells: lq,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = qq, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(qq, Eq) {
        var gq;
        const Yq = null === this.message || Number.isNaN(qq) ? null : IY(this.message, qq, Eq),
          lq = null !== (gq = null === Yq || void 0 === Yq ? void 0 : Yq.tideChartIsland) && void 0 !== gq ? gq : null,
          Oq = null === Yq ? -1 : function(qq, Eq, gq) {
            const [Yq, lq, Oq, mq] = qq.tideChartWater;
            return function(qq, Eq, gq, Yq, lq, Oq, mq) {
              return ((lq - qq) / (gq + mq)) ** 2 + ((Oq - Eq) / (Yq + mq)) ** 2 <= 1
            }(Yq, lq, Oq, mq, Eq, gq, 2) ? CY(qq, Eq, gq) : -1
          }(Yq, qq, Eq);
        return (lq !== this.hereIsland || Oq !== this.hereCell) && (this.hereIsland = lq, this.hereCell = Oq, null !== lq && (this.lastIsland = lq), !0)
      }
      afterRender(qq) {
        if (null === this.message) return;
        this.lastX = null === qq ? Number.NaN : qq[0], this.lastZ = null === qq ? Number.NaN : qq[2];
        const Eq = this.locate(this.lastX, this.lastZ),
          gq = this.expirePulses();
        (Eq || gq || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const qq = this.now();
        return !(!this.open || qq - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = qq, eY(this.translate, this.message.tideChartTurnsInMs, qq - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(qq, Eq) {
        const gq = null === this.message ? null : IY(this.message, qq, Eq);
        if (null === gq) return;
        const Yq = CY(gq, qq, Eq);
        0 === (gq.tideChartPreBlank & 1 << Yq) && (this.cast = {
          island: gq.tideChartIsland,
          cell: Yq,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const qq = this.now();
        let Eq = !1;
        return 0 !== this.pulse.cells && qq - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, Eq = !0), null !== this.cast && qq - this.cast.atMs >= 1500 && (this.cast = null, Eq = !0), Eq
      }
      setTranslator(qq) {
        this.translate = qq, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(qq, Eq) {
        var gq;
        return null !== (gq = qq.tideCharts.find((qq => qq.tideChartIsland === Eq))) && void 0 !== gq ? gq : null
      }
      describe(qq) {
        var Eq, gq, Yq;
        const lq = qq.tideChartIsland,
          Oq = [];
        for (let Nq = 0; Nq < 25; Nq++) {
          const Eq = 1 << Nq;
          0 !== (qq.tideChartLit & Eq) ? Oq.push("lit") : 0 !== (qq.tideChartClear & Eq) ? Oq.push("clear") : 0 !== (qq.tideChartPreBlank & Eq) ? Oq.push("shore") : Oq.push("water")
        }
        const mq = function(qq) {
            let Eq = 0;
            for (let gq = qq >>> 0; 0 !== gq; gq &= gq - 1) Eq++;
            return Eq
          }(qq.tideChartLit),
          xq = qq.tideChartInkCount,
          Aq = this.translate(qq.tideChartIslandNameKey),
          cq = this.translate("skyblockGame:tideChartsLit", {
            lit: String(mq),
            ink: String(xq)
          }),
          uq = null === qq.tideChartPictureNameKey ? null : this.translate(qq.tideChartPictureNameKey),
          Bq = this.hereIsland === lq && -1 !== this.hereCell ? this.hereCell : null,
          Wq = [`${Aq}: ${cq}.`];
        if (null !== uq && Wq.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: uq
          })), null !== Bq) {
          const qq = Math.floor(Bq / 5) + 1,
            Eq = Bq % 5 + 1;
          Wq.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(qq),
            column: String(Eq)
          }))
        }
        return {
          island: lq,
          islandName: Aq,
          cells: Oq,
          hereCell: Bq,
          lit: mq,
          ink: xq,
          litText: cq,
          pictureName: uq,
          gridLabel: Wq.join(" "),
          pulseCells: this.pulse.island === lq ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (Eq = this.cast) || void 0 === Eq ? void 0 : Eq.island) === lq ? this.cast.cell : null,
          castToken: null !== (gq = null === (Yq = this.cast) || void 0 === Yq ? void 0 : Yq.token) && void 0 !== gq ? gq : 0
        }
      }
      buildSnapshot() {
        var qq, Eq, gq;
        const Yq = this.message;
        if (null === Yq || 0 === Yq.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const lq = this.findChart(Yq, this.hereIsland),
          Oq = null !== (qq = null !== (Eq = null !== (gq = this.findChart(Yq, this.open ? this.picked : null)) && void 0 !== gq ? gq : lq) && void 0 !== Eq ? Eq : this.findChart(Yq, this.lastIsland)) && void 0 !== qq ? qq : Yq.tideCharts[0],
          mq = null === lq ? null : this.describe(lq);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: mq,
          card: Oq === lq ? mq : this.describe(Oq),
          turnsText: eY(this.translate, Yq.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(Yq.tideChartBookCount)
          }),
          tabs: Yq.tideCharts.map((qq => ({
            island: qq.tideChartIsland,
            name: this.translate(qq.tideChartIslandNameKey),
            selected: qq.tideChartIsland === Oq.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const ql = "skyblockRegularsView",
      El = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      gl = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function Yl(qq, Eq) {
      return "given" === qq ? Eq.given : "owed" === qq ? Eq.owed : Eq.goal
    }
    class ll extends Bq {
      constructor(qq, Eq, gq, Yq) {
        super(qq, gq, Yq), this.translate = Eq, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = qq => qq, this.openIsland = qq => {
          this.selected = qq, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = qq => {
          this.selected = qq, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      ga(qq) {
        this.message = qq, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const qq = this.openedFromReachLog;
        return this.openedFromReachLog = !1, qq
      }
      setTranslator(qq, Eq, gq) {
        this.translate = qq, void 0 !== gq && (this.itemName = gq), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(qq, Eq, gq) {
        return {
          text: this.translate(Yl(qq, Eq), gq),
          given: "given" === qq
        }
      }
      describeRegular(qq, Eq) {
        const gq = this.translate,
          Yq = null !== qq.regularKg,
          lq = qq.regularMeetings,
          Oq = Yq ? 0 === lq ? gq("skyblockGame:regularsNotMet") : 1 === lq ? gq("skyblockGame:regularsMeetingsOne") : gq("skyblockGame:regularsMeetings", {
            count: lq
          }) : "";
        return {
          id: qq.regularId,
          name: gq(qq.regularNameKey),
          line: gq(qq.regularLineKey),
          itemName: qq.regularFishItem,
          fishName: this.itemName(qq.regularFishItem),
          tagged: Yq,
          size: null === qq.regularKg ? gq("skyblockGame:regularsNotTagged") : gq("skyblockGame:regularsSize", {
            kg: qq.regularKg.toFixed(1)
          }),
          meetings: Oq,
          chance: gq("skyblockGame:regularsChance", {
            count: qq.regularOneInCasts
          }),
          resting: qq.regularRestingToday,
          gifts: [{
            text: gq("skyblockGame:regularsGiftFlare"),
            given: lq >= 3
          }, this.describeGift(qq.regularTintGift, El, {
            tint: gq(qq.regularTintNameKey)
          })],
          history: [...qq.regularHistory].reverse().map((qq => {
            const Yq = qq.regularMeetingKg.toFixed(1),
              lq = Eq - qq.regularMeetingDay;
            return lq <= 0 ? gq("skyblockGame:regularsToday", {
              kg: Yq
            }) : gq("skyblockGame:regularsDaysAgo", {
              days: lq,
              kg: Yq
            })
          }))
        }
      }
      describeIsland(qq, Eq) {
        return {
          id: qq.regularsIslandId,
          name: this.translate(qq.regularsIslandNameKey),
          charm: this.describeGift(qq.regularsCharmGift, gl, {
            charm: this.translate(qq.regularsCharmNameKey)
          }),
          regulars: qq.regularsList.map((qq => this.describeRegular(qq, Eq)))
        }
      }
      buildSnapshot() {
        var qq, Eq, gq, Yq;
        const lq = this.message;
        if (null === lq) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const Oq = lq.regularsIslands.map((qq => this.describeIsland(qq, lq.regularsToday))),
          mq = null !== (qq = null !== (Eq = null === (gq = Oq.find((qq => qq.id === this.selected))) || void 0 === gq ? void 0 : gq.id) && void 0 !== Eq ? Eq : null === (Yq = Oq[0]) || void 0 === Yq ? void 0 : Yq.id) && void 0 !== qq ? qq : "";
        return {
          enabled: !0,
          open: this.open,
          selected: mq,
          islands: Oq
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const Ol = "skyblockHiddenWatersView";
    class ml {
      constructor(qq) {
        this.TV = qq, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      ga(qq) {
        this.snapshot = function(qq) {
          const [Eq, gq] = qq.hiddenWatersMapSize, Yq = (qq, Yq) => ({
            left: 1 - qq / Eq,
            top: Yq / gq
          }), lq = new Map;
          for (const [mq, xq] of qq.hiddenWatersGlimpses) {
            var Oq;
            const qq = null !== (Oq = lq.get(mq)) && void 0 !== Oq ? Oq : [];
            qq.push(xq), lq.set(mq, qq)
          }
          return {
            found: qq.hiddenWatersFound,
            total: qq.hiddenWatersTotal,
            aspect: gq / Eq,
            pins: qq.hiddenWatersPins.map((qq => {
              let [Eq, gq] = qq;
              return Yq(Eq, gq)
            })),
            islands: qq.hiddenWatersIslands.map((qq => {
              let [lq, Oq, mq, xq] = qq;
              const {
                left: Aq,
                top: cq
              } = Yq(mq + 1, Oq);
              return {
                left: Aq,
                top: cq,
                width: (mq + 1 - lq) / Eq,
                height: (xq + 1 - Oq) / gq
              }
            })),
            glimpses: lq
          }
        }(qq), this.TV(this.snapshot)
      }
    }
    const xl = "skyblockDialogueView";
    class Al extends Bq {
      constructor(qq, Eq, gq, Yq, lq) {
        let Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(qq, gq, Yq), this.translate = Eq, this.requestDialogue = lq, this.now = Oq, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = qq => {
          this.selection = {
            kind: "quest",
            questId: qq
          }, this.request(), this.show()
        }, this.selectCharacter = qq => {
          this.selection = {
            kind: "character",
            npcId: qq
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      ga(qq) {
        this.received = !0, this.scripts = qq.questDialogueScripts, this.speakers = new Map(qq.questDialogueSpeakers.map((qq => [qq.dialogueSpeakerId, qq]))), this.emit()
      }
      setTranslator(qq) {
        this.translate = qq, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const qq = this.now();
        qq >= this.requestAvailableAt && (this.requestAvailableAt = qq + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var qq;
        const Eq = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...Eq,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const gq = this.selection;
        if ("quest" === gq.kind) {
          const qq = this.scripts.find((qq => qq.dialogueQuestId === gq.questId));
          return {
            ...Eq,
            characters: [],
            questFocus: gq.questId,
            conversations: qq ? [this.conversation(qq)] : []
          }
        }
        const Yq = [];
        for (let Oq = this.scripts.length - 1; Oq >= 0; Oq--) {
          const qq = this.scripts[Oq].dialogueLines;
          for (let Eq = qq.length - 1; Eq >= 0; Eq--) Yq.includes(qq[Eq].dialogueSpeakerId) || Yq.push(qq[Eq].dialogueSpeakerId)
        }
        const lq = null !== gq.npcId && Yq.includes(gq.npcId) ? gq.npcId : null !== (qq = Yq[0]) && void 0 !== qq ? qq : null;
        return {
          ...Eq,
          characters: Yq.map((qq => {
            var Eq, gq;
            return {
              id: qq,
              styling: null !== (Eq = null === (gq = this.speakers.get(qq)) || void 0 === gq ? void 0 : gq.dialogueSpeakerStyling) && void 0 !== Eq ? Eq : qq,
              selected: qq === lq
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((qq => qq.dialogueLines.some((qq => qq.dialogueSpeakerId === lq)))).map((qq => this.conversation(qq))).reverse()
        }
      }
      conversation(qq) {
        let Eq = null;
        return {
          questId: qq.dialogueQuestId,
          questName: this.translate(qq.dialogueQuestNameKey),
          completed: qq.dialogueQuestCompleted,
          lines: qq.dialogueLines.map(((qq, gq) => {
            var Yq;
            const lq = qq.dialogueSpeakerId === Eq || null === (Yq = this.speakers.get(qq.dialogueSpeakerId)) || void 0 === Yq ? void 0 : Yq.dialogueSpeakerStyling;
            return Eq = qq.dialogueSpeakerId, {
              key: gq,
              display: {
                line: {
                  translationKey: qq.dialogueLineKey,
                  params: this.params(qq.dialogueLineParams)
                },
                speakerName: lq,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(qq) {
        if (void 0 !== qq) return Object.fromEntries(Object.entries(qq).map((qq => {
          let [Eq, gq] = qq;
          return [Eq, "string" === typeof gq ? gq : this.translate(gq.translationKey)]
        })))
      }
    }
    var cl = gq(576),
      ul = gq(1261),
      Bl = gq(96);
    const Wl = "skyblockAutographsView";

    function Nl(qq) {
      const Eq = cl.m[qq];
      return {
        label: Eq.chatTag.map((qq => qq.str)).join(""),
        icon: Eq.icon,
        colour: Eq.mainRGB
      }
    }
    class al extends Bq {
      constructor(qq) {
        let Eq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(qq, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = Eq, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      ga(qq) {
        this.signatures = qq.autographSignatures, qq.autographOpen ? this.show() : this.emit()
      }
      setTranslator(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = Eq, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var qq;
        const Eq = null !== (qq = this.signatures) && void 0 !== qq ? qq : [],
          gq = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          Yq = [...Eq].sort(((qq, Eq) => Number(null !== Eq.autographRank) - Number(null !== qq.autographRank) || Eq.autographSignedAtMs - qq.autographSignedAtMs)).map((qq => ({
            key: `${qq.autographSignedAtMs}|${qq.autographSignerName}`,
            name: (0, ul.e)(qq.autographSignerName, !Bl.featureFlags.canSeeRealPlayerNames),
            rank: null === qq.autographRank ? null : Nl(qq.autographRank),
            signedOn: gq.format(qq.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: Yq,
          total: Yq.length,
          rankTotal: Yq.filter((qq => null !== qq.rank)).length
        }
      }
    }
    const Vl = "skyblockHudView",
      dl = () => {},
      jl = {
        getItem: () => null,
        setItem: dl,
        removeItem: dl
      };
    class Hl {
      constructor(qq) {
        let {
          translate: Eq,
          translateWithIcons: gq,
          setMenuOpen: Yq = dl,
          dismissMenu: lq = () => {
            Yq(!1)
          },
          publishSkills: Oq = dl,
          publishQuests: mq = dl,
          publishQuestNotification: xq = dl,
          publishDungeons: Aq = dl,
          publishCollections: cq = dl,
          publishMap: uq = dl,
          publishHud: Bq = dl,
          publishPortalTransit: Wq = dl,
          publishDailyReward: aq = dl,
          publishMailbox: Vq = dl,
          publishQuestGraph: dq = dl,
          publishForge: jq = dl,
          publishSmuggler: Hq = dl,
          publishKeepersChair: oq = dl,
          publishReachLog: Pq = dl,
          publishLampLight: Qq = dl,
          publishMagmaward: yq = dl,
          publishGlowtide: rq = dl,
          publishGlowMeter: vq = dl,
          publishHushWait: hq = dl,
          publishPassage: nq = dl,
          publishTideCharts: bq = dl,
          publishRegulars: iq = dl,
          publishHiddenWaters: Zq = dl,
          publishDialogue: fq = dl,
          publishAutographs: Mq = dl,
          isLoadingScreenUp: Tq = () => !1,
          onDailyRewardCoinLanded: zq = dl,
          onDailyRewardStarted: Sq = dl,
          onDailyRewardFinished: pq = dl,
          onDailyRewardItemLanded: Gq = dl,
          onMailboxStarted: Lq = dl,
          journeyStorage: Jq = jl,
          requestTracking: kq = dl,
          requestTravel: Rq = dl,
          requestDungeonEnter: Uq = dl,
          requestQuestJump: Fq = dl,
          requestQuestArrive: sq = dl,
          requestForge: Xq = dl,
          requestSmuggle: wq = dl,
          requestKeepersChairAim: Kq = dl,
          requestReachLogOpen: Cq = dl,
          requestLampLight: Iq = dl,
          requestDialogue: eq = dl
        } = qq;
        this.navigation = void 0, this.map = void 0, this.compass = new tq, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new vY.b, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = qq => qq, this.close = () => {
          for (const qq of this.panels) qq.close()
        }, this.setMenuOpen = Yq, this.publishHud = Bq, this.portalTransit = new Lg(Wq, Jq), this.magmaward = new GY(yq), this.glowtide = new JY(rq), this.glowMeter = new RY(vq), this.hushWait = new FY(hq), this.dailyReward = new Rg(aq, (() => Tq() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (qq => {
          this.quests.setNotificationsHeld(qq)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), zq, Sq, pq, Gq);
        const Dq = qq => {
          this.panels.some((qq => qq.isOpen())) || (qq ? lq() : this.setMenuOpen(!1))
        };
        this.skills = new mg(Oq, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), Eq, void 0, void 0, Dq), this.quests = new Bg(mq, kq, Eq, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, Dq, xq), this.dungeons = new ag(Aq, Eq, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, Dq, Uq), this.collections = new Sg(cq, Eq, (() => {
          this.beforePanelOpen(this.collections)
        }), Dq), this.map = new Nq(uq, Rq, Eq, (() => {
          this.beforePanelOpen(this.map)
        }), Dq), this.questGraph = new eg(dq, Eq, (() => {
          this.beforePanelOpen(this.questGraph)
        }), Dq, Fq, sq, Jq), this.forge = new dY(jq, Eq, (() => {
          this.beforePanelOpen(this.forge)
        }), Dq, Xq), this.smuggler = new oY(Hq, Eq, (() => {
          this.beforePanelOpen(this.smuggler)
        }), Dq, wq), this.lampLight = new SY(Qq, Eq, Iq, this.commandPacer), this.keepersChair = new nY(oq, Eq, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (qq => {
          this.lampLight.onChairClosed(), Dq(qq)
        }), Kq, Date.now, this.commandPacer), this.reachLog = new TY(Pq, Eq, (() => {
          this.beforePanelOpen(this.reachLog)
        }), Dq, Cq, this.commandPacer), this.passage = new rY(nq, Eq, (() => {
          this.beforePanelOpen(this.passage)
        }), Dq), this.tideCharts = new DY(bq, Eq, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), Dq), this.regulars = new ll(iq, Eq, (() => {
          this.beforePanelOpen(this.regulars)
        }), (qq => {
          this.regulars.takeReturnToReachLog() && !qq && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), Dq(qq)
        })), this.hiddenWaters = new ml(Zq), this.dialogue = new Al(fq, Eq, (() => {
          this.beforePanelOpen(this.dialogue)
        }), Dq, eq), this.autographs = new al(Mq, (() => {
          this.beforePanelOpen(this.autographs)
        }), Dq), this.mailbox = new Xg(Vq, (() => Tq() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), Lq), this.quests.translateWithIcons = null !== gq && void 0 !== gq ? gq : null, this.skills.onLevelUp = qq => {
          this.quests.notify(qq)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new lg(this.map, this.quests, this.compass, Eq)
      }
      getHudSnapshot() {
        const qq = this.hudSnapshot,
          Eq = this.dailyReward.getHeldCoins();
        return null === qq || Eq <= 0 || !("hudPurseCoins" in qq) ? qq : {
          ...qq,
          hudPurseCoins: Math.max(0, qq.hudPurseCoins - Eq)
        }
      }
      receiveHud(qq) {
        this.hudSnapshot = qq, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(qq) {
        this.setMenuOpen(!0);
        const Eq = qq === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = qq;
        for (const gq of this.panels) gq === qq || Eq && gq === this.reachLog || gq.close();
        this.openingPanel = null
      }
      setTranslator(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Eq => this.resolveItemName(Eq, qq);
        this.quests.translateWithIcons = null !== gq && void 0 !== gq ? gq : null, this.navigation.setTranslator(qq, Eq), this.lampLight.setTranslator(qq, Eq), this.mailbox.setItemName(Yq);
        for (const lq of this.panels) lq.setTranslator(qq, Eq, Yq)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const qq of this.panels) qq.dispose()
      }
    }
    var ol = gq(1018),
      Pl = gq.n(ol),
      Ql = gq(24),
      yl = gq(36648),
      tl = gq(3273),
      rl = gq(1895),
      vl = gq(1876),
      hl = gq(9304),
      nl = gq(1183),
      bl = gq(1416),
      il = gq(1070);

    function Zl(qq) {
      let {
        controller: Eq,
        minimap: gq,
        children: Yq
      } = qq;
      const Oq = (0, bl.h)(Vl, Eq.getHudSnapshot()),
        [mq, xq] = (0, vq.useState)(Eq.skills.getSnapshot().overallLevel);
      (0, bl.f)(Og, (qq => {
        xq(qq.overallLevel)
      }));
      const Aq = (0, vq.useRef)(null);
      (0, bl.f)(kg, (qq => {
        ! function(qq, Eq) {
          if (null === qq || "function" !== typeof qq.animate) return;
          const gq = Eq ? 1.35 : 1.15;
          qq.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${gq})`
          }, {
            transform: "scale(1)"
          }], {
            duration: Eq ? 320 : 160,
            easing: "ease-out"
          }), qq.classList.toggle("Receiving", !Eq), Eq && (qq.classList.remove("Shine"), qq.offsetWidth, qq.classList.add("Shine"))
        }(Aq.current, qq)
      }));
      const {
        t: cq
      } = (0, nl.v)(), {
        isTouchScreen: uq
      } = (0, Ql.j)(["isTouchScreen"]), [Bq, Wq] = (0, vq.useState)(null);
      return (0, tl.h)(Bq, ".SkyblockRightHud"), null !== Oq || gq ? (0, il.jsx)(yl.g, {
        placement: "topRight",
        children: (0, il.jsxs)("div", {
          className: Pl()("SkyblockRightHud", {
            TouchScreen: uq
          }),
          children: [gq, null !== Oq && (0, il.jsxs)("div", {
            ref: Wq,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in Oq ? (0, il.jsx)("div", {
              className: "SkyblockHudHelp",
              children: Oq.hudHelpText
            }) : (0, il.jsxs)(il.Fragment, {
              children: [(0, il.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, il.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, il.jsx)("strong", {
                    style: {
                      color: lq.M.cyanUiText
                    },
                    children: cq(Oq.hudZoneNameKey)
                  }), null !== mq && (0, il.jsx)("span", {
                    style: {
                      color: lq.M.goldUiText
                    },
                    children: cq("skyblockGame:level", {
                      level: (0, hl.d)(mq)
                    })
                  })]
                }), (0, il.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: Aq,
                  children: [(0, il.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, il.jsx)(rl.e, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, hl.d)(Oq.hudPurseCoins)]
                })]
              }), Oq.hudClockText.length > 0 && (0, il.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, il.jsx)(vl.c, {
                  text: Oq.hudClockText
                })
              })]
            }), Yq, "hudZoneNameKey" in Oq && (0, il.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function fl(qq) {
      let {
        icon: Eq
      } = qq;
      const gq = (0, vq.useCallback)((qq => {
        null === qq || void 0 === qq || qq.replaceChildren(sE(Eq))
      }), [Eq]);
      return (0, il.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: gq
      })
    }

    function Ml(qq) {
      let {
        controller: Eq
      } = qq;
      const {
        t: gq
      } = (0, nl.v)();
      return (0, il.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: Eq.display.mountPlayer,
        title: gq("skyblockGame:mapYouAreHere"),
        children: (0, il.jsx)(fl, {
          icon: "player"
        })
      })
    }
    const Tl = gq(38522),
      zl = Object.fromEntries(Tl.keys().map((qq => [qq.replace(/^\.\/(.*)\.png$/, "$1"), Tl(qq)])));

    function Sl(qq, Eq) {
      var gq;
      return null !== (gq = zl[qq]) && void 0 !== gq ? gq : zl[Eq]
    }

    function pl(qq) {
      let {
        imageKey: Eq,
        fallbackImageKey: gq,
        geometryKey: Yq,
        alt: lq,
        className: Oq
      } = qq;
      const [mq, xq] = (0, vq.useState)((() => function(qq, Eq) {
        return [{
          id: 0,
          imageKey: qq,
          geometryKey: Eq,
          phase: "shown"
        }]
      }(Eq, Yq))), Aq = function(qq, Eq, gq) {
        const Yq = qq[qq.length - 1];
        if (Yq.imageKey === Eq && Yq.geometryKey === gq) return qq;
        const lq = {
          id: Yq.id + 1,
          imageKey: Eq,
          geometryKey: gq,
          phase: "entering"
        };
        return Yq.geometryKey === gq ? [{
          ...Yq,
          phase: "leaving"
        }, lq] : [lq]
      }(mq, Eq, Yq);
      return Aq !== mq && xq(Aq), (0, il.jsx)(il.Fragment, {
        children: Aq.map((qq => (0, il.jsx)("img", {
          className: Pl()("SkyblockMapTerrainImage", Oq, {
            Entering: "entering" === qq.phase,
            Leaving: "leaving" === qq.phase
          }),
          src: Sl(qq.imageKey, gq),
          alt: "leaving" === qq.phase ? "" : lq,
          onAnimationEnd: () => {
            xq((Eq => function(qq, Eq) {
              return qq.flatMap((qq => qq.id !== Eq ? [qq] : "leaving" === qq.phase ? [] : [{
                ...qq,
                phase: "shown"
              }]))
            }(Eq, qq.id)))
          }
        }, qq.id)))
      })
    }
    var Gl = gq(4359),
      Ll = gq(1422);

    function Jl(qq) {
      if ("Tab" !== qq.key) return;
      const Eq = Array.from(qq.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        gq = Eq.indexOf(document.activeElement);
      var Yq;
      if (qq.shiftKey && gq <= 0) qq.preventDefault(), null === (Yq = Eq.at(-1)) || void 0 === Yq || Yq.focus();
      else if (!qq.shiftKey && (-1 === gq || gq === Eq.length - 1)) {
        var lq;
        qq.preventDefault(), null === (lq = Eq[0]) || void 0 === lq || lq.focus()
      }
    }

    function kl() {
      const qq = (0, vq.useRef)(null);
      return (0, vq.useCallback)((Eq => {
        var gq;
        Eq ? (qq.current = document.activeElement, Eq.focus()) : null === (gq = qq.current) || void 0 === gq || gq.focus()
      }), [])
    }

    function Rl(qq) {
      let {
        percent: Eq,
        label: gq,
        levelUpToken: Yq,
        colour: lq
      } = qq;
      return (0, il.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": gq,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Eq,
        "aria-valuetext": gq,
        children: [(0, il.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${Eq/100})`
          }
        }), null !== Yq && void 0 !== Yq && (0, il.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": lq
          }
        }, Yq)]
      })
    }

    function Ul(qq) {
      let {
        mount: Eq
      } = qq;
      return (0, il.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: Eq,
        hidden: !0,
        children: (0, il.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, il.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, il.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function Fl(qq, Eq, gq, Yq) {
      (0, vq.useLayoutEffect)((() => {
        const lq = qq.current;
        if (!gq || null === Eq || void 0 === Eq || !Eq.local || !lq) return;
        const Oq = Array.from(lq.querySelectorAll(".SkyblockMapNode")),
          mq = [...Eq.points, ...Eq.portals],
          xq = () => {
            const qq = lq.clientWidth,
              gq = lq.clientHeight,
              xq = Oq.map(((lq, Oq) => {
                const xq = mq[Oq];
                return {
                  id: xq.id,
                  portal: Oq >= Eq.points.length,
                  x: xq.position[0] * qq / 100,
                  y: xq.position[1] * gq / 100,
                  width: lq.offsetWidth / Yq,
                  height: lq.offsetHeight / Yq
                }
              })),
              Aq = new Map(mq.map(((qq, Eq) => [qq.id, Oq[Eq]])));
            for (const Eq of function(qq, Eq, gq) {
                const Yq = [],
                  lq = [...qq].sort(((qq, Eq) => Number(Eq.portal) - Number(qq.portal) || qq.id.localeCompare(Eq.id)));
                for (const Oq of lq) {
                  const qq = qq => Math.max(Oq.width / 2, Math.min(Eq - Oq.width / 2, qq)),
                    lq = qq => Math.max(Oq.height / 2, Math.min(gq - Oq.height / 2, qq)),
                    mq = [qq(Oq.x)],
                    xq = [lq(Oq.y)];
                  for (const Eq of Yq) mq.push(qq(Eq.x - (Eq.width + Oq.width) / 2 - 4), qq(Eq.x + (Eq.width + Oq.width) / 2 + 4)), xq.push(lq(Eq.y - (Eq.height + Oq.height) / 2 - 4), lq(Eq.y + (Eq.height + Oq.height) / 2 + 4));
                  let Aq = {
                      ...Oq,
                      x: mq[0],
                      y: xq[0]
                    },
                    cq = 1 / 0,
                    uq = 1 / 0;
                  for (const Eq of new Set(mq))
                    for (const qq of new Set(xq)) {
                      let gq = 0;
                      for (const mq of Yq) gq += Math.max(0, (Oq.width + mq.width) / 2 + 4 - Math.abs(Eq - mq.x)) * Math.max(0, (Oq.height + mq.height) / 2 + 4 - Math.abs(qq - mq.y));
                      const lq = (Eq - Oq.x) ** 2 + (qq - Oq.y) ** 2;
                      (gq < cq || gq === cq && lq < uq) && (Aq = {
                        ...Oq,
                        x: Eq,
                        y: qq
                      }, cq = gq, uq = lq)
                    }
                  Yq.push(Aq)
                }
                return Yq
              }(xq, qq, gq)) {
              const qq = Aq.get(Eq.id);
              qq.style.left = `${Eq.x}px`, qq.style.top = `${Eq.y}px`
            }
          };
        xq();
        const Aq = new ResizeObserver(xq);
        Aq.observe(lq);
        for (const qq of Oq) Aq.observe(qq);
        return () => {
          Aq.disconnect()
        }
      }), [qq, Eq, gq, Yq])
    }
    const sl = {
        zoom: 1,
        x: 0,
        y: 0
      },
      Xl = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function wl(qq, Eq, gq) {
      return Math.min(gq, Math.max(Eq, qq))
    }

    function Kl(qq, Eq, gq) {
      const Yq = Math.min(1, gq * Eq / qq),
        lq = Math.min(1, qq / (gq * Eq));
      return {
        x0: (1 - Yq) / 2,
        y0: (1 - lq) / 2,
        x1: (1 + Yq) / 2,
        y1: (1 + lq) / 2
      }
    }

    function Cl(qq, Eq, gq, Yq) {
      const lq = Eq * (Yq - gq);
      if (lq <= 1) return .5 - Eq * (gq + Yq) / 2;
      const Oq = .45 * Math.min(1, lq - 1);
      return wl(qq, 1 - Eq * Yq - Oq, Oq - Eq * gq)
    }

    function Il(qq, Eq) {
      const gq = wl(qq.zoom, 1, 12);
      return {
        zoom: gq,
        x: Cl(qq.x, gq, Eq.x0, Eq.x1),
        y: Cl(qq.y, gq, Eq.y0, Eq.y1)
      }
    }

    function el(qq, Eq, gq, Yq) {
      let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Xl;
      const Oq = wl(qq.zoom * Eq, 1, 12),
        mq = Oq / qq.zoom;
      return Il({
        zoom: Oq,
        x: gq - (gq - qq.x) * mq,
        y: Yq - (Yq - qq.y) * mq
      }, lq)
    }

    function Dl(qq, Eq, gq, Yq) {
      const [lq, Oq] = (0, vq.useState)(sl);
      (0, vq.useEffect)((() => {
        Oq(sl)
      }), [gq]), (0, vq.useEffect)((() => {
        const gq = qq.current;
        if (!Eq || !gq) return;
        const lq = () => Kl(gq.clientWidth, gq.clientHeight, Yq),
          mq = qq => {
            const Eq = gq.getBoundingClientRect();
            return {
              x: (qq.clientX - Eq.left) / Eq.width,
              y: (qq.clientY - Eq.top) / Eq.height
            }
          },
          xq = new Map;
        let Aq = {
            x: 0,
            y: 0
          },
          cq = !1,
          uq = 0;
        const Bq = qq => {
            qq.preventDefault();
            const Eq = qq.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * qq.deltaY : qq.deltaY,
              gq = mq(qq);
            Oq((qq => el(qq, Math.exp(.0015 * -Eq), gq.x, gq.y, lq())))
          },
          Wq = qq => {
            "mouse" === qq.pointerType && 0 !== qq.button || (xq.set(qq.pointerId, mq(qq)), 1 === xq.size && (Aq = {
              x: qq.clientX,
              y: qq.clientY
            }, cq = !1), uq = 0)
          },
          Nq = qq => {
            const Eq = xq.get(qq.pointerId);
            if (!Eq) return;
            const Yq = mq(qq);
            if (xq.set(qq.pointerId, Yq), 2 === xq.size) {
              const [qq, Eq] = [...xq.values()], gq = Math.hypot(qq.x - Eq.x, qq.y - Eq.y);
              if (uq > 0) {
                const Yq = gq / uq;
                Oq((gq => el(gq, Yq, (qq.x + Eq.x) / 2, (qq.y + Eq.y) / 2, lq())))
              }
              return uq = gq, void(cq = !0)
            }!cq && Math.hypot(qq.clientX - Aq.x, qq.clientY - Aq.y) < 4 || (cq || (cq = !0, gq.setPointerCapture(qq.pointerId)), Oq((qq => function(qq, Eq, gq) {
              let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Xl;
              return Il({
                zoom: qq.zoom,
                x: qq.x + Eq,
                y: qq.y + gq
              }, Yq)
            }(qq, Yq.x - Eq.x, Yq.y - Eq.y, lq()))))
          },
          aq = qq => {
            xq.delete(qq.pointerId), uq = 0
          },
          Vq = qq => {
            cq && (qq.stopPropagation(), qq.preventDefault(), cq = !1)
          },
          dq = new ResizeObserver((() => {
            Oq((qq => Il(qq, lq())))
          }));
        return dq.observe(gq), gq.addEventListener("wheel", Bq, {
          passive: !1
        }), gq.addEventListener("pointerdown", Wq), gq.addEventListener("pointermove", Nq), gq.addEventListener("pointerup", aq), gq.addEventListener("pointercancel", aq), gq.addEventListener("click", Vq, !0), () => {
          dq.disconnect(), gq.removeEventListener("wheel", Bq), gq.removeEventListener("pointerdown", Wq), gq.removeEventListener("pointermove", Nq), gq.removeEventListener("pointerup", aq), gq.removeEventListener("pointercancel", aq), gq.removeEventListener("click", Vq, !0)
        }
      }), [qq, Eq, gq, Yq]);
      return {
        view: lq,
        zoomBy: Eq => {
          const gq = qq.current;
          gq && Oq((qq => el(qq, Eq, .5, .5, Kl(gq.clientWidth, gq.clientHeight, Yq))))
        }
      }
    }

    function qO(qq) {
      var Eq, gq, Yq, lq;
      let {
        controller: Oq,
        navigation: mq
      } = qq;
      const xq = (0, bl.h)(Wq, Oq.getSnapshot()),
        {
          t: Aq
        } = (0, nl.v)(),
        cq = kl(),
        uq = xq.presentation,
        Bq = (0, vq.useRef)(null),
        Nq = (0, vq.useRef)(null),
        aq = Boolean(xq.open && (null === uq || void 0 === uq ? void 0 : uq.local) && uq.background),
        Vq = Dl(Bq, aq, `${xq.open}|${xq.tab}|${null===uq||void 0===uq||null===(Eq=uq.background)||void 0===Eq?void 0:Eq.geometryKey}`, null !== (gq = null === uq || void 0 === uq || null === (Yq = uq.background) || void 0 === Yq ? void 0 : Yq.ratio) && void 0 !== gq ? gq : 2);
      if (Fl(Nq, uq, xq.open, Vq.view.zoom), !uq || !xq.open) return null;
      const dq = uq.local ? uq.background : null,
        jq = {
          "--map-ratio": String(null !== (lq = null === dq || void 0 === dq ? void 0 : dq.ratio) && void 0 !== lq ? lq : 2),
          backgroundColor: null === dq || void 0 === dq ? void 0 : dq.colour
        },
        Hq = {
          "--map-zoom": String(Vq.view.zoom),
          transform: `translate(${100*Vq.view.x}%, ${100*Vq.view.y}%) scale(${Vq.view.zoom})`
        };
      return (0, il.jsx)(Gl.c, {
        show: xq.open,
        close: Oq.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, il.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: cq,
          onKeyDown: Jl,
          children: [(0, il.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, il.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, il.jsx)("h2", {
                id: "skyblockMapTitle",
                children: Aq("skyblockGame:map")
              }), uq.minimap && (0, il.jsx)("p", {
                children: uq.minimap.caption
              })]
            }), (0, il.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((qq => (0, il.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": qq === xq.tab ? "true" : void 0,
                className: Pl()({
                  Selected: qq === xq.tab
                }),
                "aria-pressed": qq === xq.tab,
                onClick: () => {
                  Oq.selectTab(qq)
                },
                children: Aq("local" === qq ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, qq)))
            }), (0, il.jsx)(Ll.m, {
              padIgnore: !0,
              onClick: Oq.dismiss
            })]
          }), (0, il.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, il.jsxs)("div", {
              ref: Bq,
              className: Pl()("SkyblockMapCanvas", {
                Local: uq.local,
                Overview: !uq.local,
                Zoomed: Vq.view.zoom > 1
              }),
              style: jq,
              children: [(0, il.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: aq ? Hq : void 0,
                children: (0, il.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: Nq,
                  children: [dq && (0, il.jsx)(pl, {
                    className: "SkyblockMapTerrain",
                    imageKey: dq.imageKey,
                    fallbackImageKey: dq.fallbackImageKey,
                    geometryKey: dq.geometryKey,
                    alt: dq.label
                  }), uq.local && (0, il.jsx)(Ul, {
                    mount: mq.display.mountMapSearchArea
                  }), !uq.local && (0, il.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: uq.connections.map((qq => (0, il.jsx)("line", {
                      className: Pl()({
                        Explored: qq.explored
                      }),
                      x1: qq.start[0],
                      y1: qq.start[1],
                      x2: qq.end[0],
                      y2: qq.end[1]
                    }, qq.id)))
                  }), uq.points.map((qq => {
                    const Eq = !uq.local && qq.thumbnail ? zl[qq.thumbnail] : void 0;
                    return (0, il.jsxs)("div", {
                      className: Pl()("SkyblockMapNode", {
                        Current: qq.current
                      }),
                      style: {
                        left: `${qq.position[0]}%`,
                        top: `${qq.position[1]}%`
                      },
                      children: [(0, il.jsxs)(Ll.g, {
                        className: Pl()("SkyblockMapPin", {
                          Unknown: !qq.visited,
                          Current: qq.current
                        }),
                        disabled: xq.pending,
                        onClick: () => {
                          Oq.travel(qq.travelKind, qq.travelId)
                        },
                        children: [Eq && (0, il.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: Eq,
                          alt: ""
                        }), !Eq && (0, il.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, il.jsx)(fl, {
                            icon: qq.icon
                          })
                        }), (0, il.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: qq.name
                        })]
                      }), qq.current && (0, il.jsx)("span", {
                        className: Pl()("SkyblockMapHereBadge", {
                          Above: qq.position[1] > 50
                        }),
                        children: Aq("skyblockGame:mapYouAreHere")
                      })]
                    }, qq.id)
                  })), uq.portals.map((qq => (0, il.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${qq.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${qq.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, il.jsxs)(Ll.g, {
                      className: "SkyblockMapPin",
                      disabled: xq.pending,
                      onClick: () => {
                        Oq.travel(qq.travelKind, qq.travelId)
                      },
                      children: [(0, il.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: qq.colour
                        },
                        "aria-hidden": "true",
                        children: (0, il.jsx)(fl, {
                          icon: qq.icon
                        })
                      }), (0, il.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: qq.name
                      })]
                    })
                  }, qq.id))), uq.local && (0, il.jsx)(Ml, {
                    controller: mq
                  })]
                })
              }), aq && (0, il.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, il.jsx)("button", {
                  type: "button",
                  "aria-label": Aq("skyblockGame:mapZoomIn"),
                  disabled: Vq.view.zoom >= 12,
                  onClick: () => {
                    Vq.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, il.jsx)("button", {
                  type: "button",
                  "aria-label": Aq("skyblockGame:mapZoomOut"),
                  disabled: Vq.view.zoom <= 1,
                  onClick: () => {
                    Vq.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, il.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: xq.feedback
              })]
            })
          }), (0, il.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [uq.progress && (0, il.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, il.jsx)("span", {
                children: uq.progress
              }), (0, il.jsx)(Rl, {
                percent: uq.percent,
                label: uq.progress
              })]
            }), uq.noLandmarks && (0, il.jsx)("span", {
              children: Aq("skyblockGame:mapNoLandmarks")
            }), uq.canTravel && (0, il.jsx)("span", {
              className: "SkyblockMapHint",
              children: Aq("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function EO(qq) {
      let {
        view: Eq,
        controller: gq,
        navigation: Yq
      } = qq;
      const {
        t: lq
      } = (0, nl.v)(), {
        isTouchScreen: Oq
      } = (0, Ql.j)(["isTouchScreen"]);
      return (0, il.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": lq("skyblockGame:mapLocal"),
        children: [Oq && (0, il.jsx)(Ll.g, {
          className: "SkyblockMinimapOpen",
          onClick: gq.showLocal,
          children: lq("skyblockGame:map")
        }), (0, il.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: Eq.colour
          },
          children: [(0, il.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: Yq.display.mountTerrain,
            style: {
              width: Eq.width,
              height: Eq.height
            },
            children: [(0, il.jsx)(pl, {
              imageKey: Eq.imageKey,
              fallbackImageKey: Eq.fallbackImageKey,
              geometryKey: Eq.geometryKey,
              alt: Eq.label
            }), (0, il.jsx)(Ul, {
              mount: Yq.display.mountMinimapSearchArea
            }), Eq.markers.map((qq => (0, il.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${qq.position[0]}%`,
                top: `${qq.position[1]}%`,
                color: qq.colour
              },
              title: qq.name,
              children: (0, il.jsx)(fl, {
                icon: qq.icon
              })
            }, qq.id)))]
          }), (0, il.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: lq("skyblockGame:mapYouAreHere"),
            children: (0, il.jsx)(fl, {
              icon: "player"
            })
          })]
        }), (0, il.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: Eq.caption
        })]
      })
    }

    function gO(qq) {
      let {
        controller: Eq
      } = qq;
      return (0, il.jsxs)("div", {
        className: "SkyblockCompass",
        ref: Eq.display.mountCompass,
        children: [(0, il.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, il.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, il.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function YO(qq) {
      let {
        controller: Eq,
        surface: gq
      } = qq;
      const {
        t: Yq
      } = (0, nl.v)(), lq = (0, bl.h)(Og, Eq.getSnapshot()), Oq = kl();
      return lq.enabled ? (0, il.jsxs)(il.Fragment, {
        children: ["hud" === gq && (0, il.jsx)(yl.g, {
          placement: "statBars",
          children: lq.hud && (0, il.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": lq.hud.colour
            },
            children: [(0, il.jsx)(Rl, {
              percent: lq.hud.skill.percent,
              label: lq.hud.skill.xp,
              levelUpToken: lq.hud.levelUpToken,
              colour: lq.hud.colour
            }), (0, il.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, il.jsxs)("span", {
                children: [lq.hud.skill.label, " \xb7 ", lq.hud.skill.level]
              }), (0, il.jsx)("span", {
                children: lq.hud.gain
              })]
            })]
          })
        }), "hud" === gq && (0, il.jsx)(yl.g, {
          children: lq.hud && (0, il.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, il.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, il.jsx)("strong", {
                children: lq.hud.skill.label
              }), (0, il.jsx)("span", {
                children: lq.hud.gain
              })]
            }), (0, il.jsx)(Rl, {
              percent: lq.hud.skill.percent,
              label: lq.hud.skill.xp,
              levelUpToken: lq.hud.levelUpToken,
              colour: lq.hud.colour
            }), (0, il.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, il.jsx)("span", {
                children: lq.hud.skill.level
              }), (0, il.jsx)("span", {
                children: lq.hud.skill.xp
              })]
            })]
          })
        }), "menu" === gq && (0, il.jsx)(Gl.c, {
          show: lq.open,
          close: Eq.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, il.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: Oq,
            onKeyDown: Jl,
            children: [(0, il.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, il.jsxs)("div", {
                children: [(0, il.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: Yq("skyblockGame:skills")
                }), (0, il.jsx)("p", {
                  children: Yq("skyblockGame:skillsIntro")
                })]
              }), (0, il.jsx)(Ll.m, {
                padIgnore: !0,
                onClick: Eq.dismiss
              })]
            }), (0, il.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, il.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: lq.skills.map((qq => (0, il.jsxs)(Ll.g, {
                  className: Pl()("SkyblockSkillCard", {
                    Selected: qq.selected
                  }),
                  ariaPressed: qq.selected,
                  onClick: () => {
                    Eq.select(qq.id)
                  },
                  children: [(0, il.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, il.jsx)(rl.e, {
                      itemName: qq.icon,
                      amount: 0
                    })
                  }), (0, il.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, il.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, il.jsx)("strong", {
                        children: qq.label
                      }), (0, il.jsx)("span", {
                        children: qq.level
                      })]
                    }), (0, il.jsx)(Rl, {
                      percent: qq.percent,
                      label: `${qq.label}: ${qq.xp}`
                    }), (0, il.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: qq.xp
                    })]
                  })]
                }, qq.id)))
              }), lq.detail && (0, il.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, il.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, il.jsx)(rl.e, {
                    itemName: lq.detail.icon,
                    amount: 0
                  })
                }), (0, il.jsx)("h3", {
                  children: lq.detail.label
                }), (0, il.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: lq.detail.level
                }), (0, il.jsx)("p", {
                  children: lq.detail.description
                }), (0, il.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, il.jsx)("strong", {
                    children: Yq("skyblockGame:currentBenefit")
                  }), (0, il.jsx)("span", {
                    children: lq.detail.benefit
                  })]
                }), (0, il.jsx)(Rl, {
                  percent: lq.detail.percent,
                  label: lq.detail.xp
                }), (0, il.jsx)("p", {
                  children: lq.detail.xp
                }), (0, il.jsx)("h4", {
                  children: Yq("skyblockGame:earnXp")
                }), (0, il.jsx)("ul", {
                  children: lq.detail.sources.map((qq => (0, il.jsx)("li", {
                    children: qq
                  }, qq)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var lO = gq(1341),
      OO = gq(4656),
      mO = gq(296);

    function xO(qq) {
      let {
        item: Eq
      } = qq;
      return (0, il.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, il.jsx)(rl.e, {
          itemName: Eq,
          amount: 0
        })
      })
    }

    function AO(qq) {
      let {
        name: Eq,
        percent: gq,
        progress: Yq
      } = qq;
      return (0, il.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, il.jsx)(Rl, {
          percent: gq,
          label: `${(0,mO.rb)(Eq)}: ${Yq}`
        }), (0, il.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: Yq
        })]
      })
    }

    function cO(qq) {
      let {
        subquests: Eq,
        showDescriptions: gq = !1
      } = qq;
      return (0, il.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: Eq.map((qq => {
          const Eq = gq && "completed" === qq.status,
            Yq = (0, il.jsxs)("li", {
              className: Pl()("SkyblockQuestStep", qq.status, {
                JustFinished: qq.justFinished,
                JustUnlocked: qq.justUnlocked
              }),
              tabIndex: Eq ? 0 : void 0,
              children: [null !== qq.iconItem && (0, il.jsx)(xO, {
                item: qq.iconItem
              }), null === qq.iconItem && (0, il.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === qq.status ? "\u2713" : "skipped" === qq.status ? "\u2212" : "\u25cb"
              }), (0, il.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, il.jsx)("strong", {
                  children: (0, il.jsx)(OO.e, {
                    text: qq.name
                  })
                }), gq && !Eq && (0, il.jsx)("span", {
                  children: (0, il.jsx)(OO.e, {
                    text: qq.description
                  })
                }), null !== qq.barPercent && (0, il.jsx)(AO, {
                  name: qq.name,
                  percent: qq.barPercent,
                  progress: qq.progress
                }), null === qq.barPercent && !Eq && (0, il.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: qq.statusLabel
                })]
              })]
            }, qq.id);
          return Eq ? (0, il.jsx)(lO.e, {
            delayShow: 200,
            tooltipInner: (0, il.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, il.jsx)("span", {
                children: (0, il.jsx)(OO.e, {
                  text: qq.description
                })
              }), (0, il.jsx)("strong", {
                children: qq.statusLabel
              })]
            }),
            children: Yq
          }, qq.id) : Yq
        }))
      })
    }

    function uO(qq) {
      let {
        quest: Eq,
        select: gq
      } = qq;
      const {
        t: Yq
      } = (0, nl.v)(), lq = Eq.focusStep;
      return (0, il.jsxs)(Ll.g, {
        className: Pl()("SkyblockQuestCard", {
          Selected: Eq.selected,
          Tracked: Eq.tracked
        }),
        onClick: () => {
          gq(Eq.id)
        },
        children: [(0, il.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, il.jsx)("strong", {
            children: (0, il.jsx)(OO.e, {
              text: Eq.name
            })
          }), Eq.tracked && (0, il.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: Yq("skyblockGame:currentQuest")
          })]
        }), lq && (0, il.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== lq.iconItem && (0, il.jsx)(xO, {
            item: lq.iconItem
          }), (0, il.jsx)(AO, {
            name: lq.name,
            percent: lq.barPercent,
            progress: lq.progress
          })]
        }), (0, il.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: Eq.progress
        })]
      })
    }

    function BO(qq) {
      let {
        controller: Eq,
        surface: gq
      } = qq;
      const Yq = (0, bl.h)(cg, Eq.getSnapshot()),
        {
          t: lq
        } = (0, nl.v)(),
        Oq = kl();
      return Yq.enabled ? (0, il.jsxs)(il.Fragment, {
        children: ["hud" === gq && (0, il.jsx)(il.Fragment, {
          children: Yq.tracked && (0, il.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: Ag,
            children: (0, il.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [Yq.trackedStepPulse > 0 && (0, il.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, Yq.trackedStepPulse), (0, il.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: lq("skyblockGame:currentQuest")
              }), (0, il.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, il.jsx)("strong", {
                  children: (0, il.jsx)(OO.e, {
                    text: Yq.tracked.name
                  })
                }), null !== Yq.tracked.clock && (0, il.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: Yq.tracked.clock
                })]
              }), (0, il.jsx)(cO, {
                subquests: Yq.tracked.subquests
              })]
            })
          })
        }), "menu" === gq && (0, il.jsx)(Gl.c, {
          show: Yq.open,
          close: Eq.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, il.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: Oq,
            onKeyDown: Jl,
            children: [(0, il.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, il.jsx)("div", {
                children: (0, il.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: lq("skyblockGame:quests")
                })
              }), (0, il.jsx)(Ll.m, {
                padIgnore: !0,
                onClick: Eq.dismiss
              })]
            }), (0, il.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, il.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, il.jsx)("h3", {
                  children: lq("skyblockGame:current")
                }), 0 === Yq.active.length && (0, il.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: lq("skyblockGame:noActiveQuests")
                }), Yq.active.map((qq => (0, il.jsx)(uO, {
                  quest: qq,
                  select: Eq.select
                }, qq.id))), (0, il.jsx)("h3", {
                  children: (0, il.jsxs)("button", {
                    type: "button",
                    className: Pl()("SkyblockQuestSectionToggle", {
                      Expanded: Yq.completedExpanded
                    }),
                    "aria-expanded": Yq.completedExpanded,
                    onClick: Eq.toggleCompleted,
                    children: [(0, il.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), lq("skyblockGame:completed"), (0, il.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: Yq.completed.length
                    })]
                  })
                }), Yq.completedExpanded && 0 === Yq.completed.length && (0, il.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: lq("skyblockGame:noCompletedQuests")
                }), Yq.completedExpanded && Yq.completed.map((qq => (0, il.jsx)(uO, {
                  quest: qq,
                  select: Eq.select
                }, qq.id)))]
              }), Yq.detail && (0, il.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [Yq.detail.completed && (0, il.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: lq("skyblockGame:completedQuest")
                }), (0, il.jsx)("h3", {
                  children: (0, il.jsx)(OO.e, {
                    text: Yq.detail.name
                  })
                }), (0, il.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, il.jsx)(OO.e, {
                    text: Yq.detail.description
                  })
                }), (0, il.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [Yq.detail.progress, null !== Yq.detail.clock && (0, il.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: Yq.detail.clock
                  })]
                }), (0, il.jsx)(cO, {
                  subquests: Yq.detail.subquests,
                  showDescriptions: !0
                }), Yq.detail.tracked && (0, il.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: Yq.detail.trackLabel
                }), !Yq.detail.completed && !Yq.detail.tracked && (0, il.jsx)(Ll.p, {
                  onClick: Eq.trackSelected,
                  disabled: !Yq.detail.canTrack,
                  children: Yq.detail.trackLabel
                }), Yq.detail.canViewDialogue && (0, il.jsx)(Ll.g, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: Eq.viewDialogue,
                  children: lq("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var WO = gq(1025),
      NO = gq(2538);

    function aO(qq, Eq, gq, Yq, lq) {
      const Oq = qq => "linear" === lq ? qq : {
          oq: lq,
          point: qq
        },
        mq = {};
      for (const [xq, Aq] of Yq)
        for (const [Eq, gq] of Object.entries(qq(xq, Aq, Oq))) mq[Eq] ??= {
          timeline: []
        }, mq[Eq].timeline.push(gq);
      return {
        aq: Eq,
        loop: gq,
        dq: mq
      }
    }
    const VO = .547,
      dO = .022,
      jO = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      HO = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function oO(qq, Eq, gq) {
      const {
        drop: Yq = 0,
        shift: lq = 0,
        torso: Oq = 0,
        nod: mq = 0,
        tilt: xq = 0,
        legs: Aq = [0, 0],
        arms: cq = 0,
        spread: uq = 0
      } = Eq, Bq = VO * Math.cos(Oq) - dO * Math.sin(Oq), Wq = VO * Math.sin(Oq) + dO * Math.cos(Oq), Nq = gq([0, -Yq, lq]);
      return {
        LowerBody: {
          timeFraction: qq,
          position: Nq,
          rotation: gq([0, 0, 0])
        },
        UpperBody: {
          timeFraction: qq,
          position: Nq,
          rotation: gq([Oq, 0, xq])
        },
        HeadMesh: {
          timeFraction: qq,
          position: gq([0, Bq - VO - Yq, Wq - dO + lq]),
          rotation: gq([Oq + mq, 0, xq])
        },
        LegLeftMesh: {
          timeFraction: qq,
          rotation: gq([Aq[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: qq,
          rotation: gq([Aq[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: qq,
          rotation: gq([cq, 0, uq])
        },
        ArmRightMesh: {
          timeFraction: qq,
          rotation: gq([cq, 0, -uq])
        }
      }
    }

    function PO(qq, Eq, gq) {
      return aO(oO, qq, Eq, gq, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function QO(qq) {
      return "number" === typeof qq ? [qq, qq] : qq
    }

    function yO(qq, Eq, gq) {
      const {
        rise: Yq = 0,
        shift: lq = 0,
        torso: Oq = 0,
        twist: mq = 0,
        tilt: xq = 0,
        nod: Aq = 0,
        cock: cq = 0,
        arms: uq = 0,
        spread: Bq = 0
      } = Eq, [Wq, Nq] = QO(uq), [aq, Vq] = QO(Bq);
      return {
        TorsoNode: {
          timeFraction: qq,
          position: gq([0, Yq, lq]),
          rotation: gq([Oq, mq, xq])
        },
        HeadMesh: {
          timeFraction: qq,
          rotation: gq([Aq, 0, cq])
        },
        ArmLeftMesh: {
          timeFraction: qq,
          rotation: gq([Wq, 0, aq])
        },
        ArmRightMesh: {
          timeFraction: qq,
          rotation: gq([Nq, 0, -Vq])
        }
      }
    }
    const tO = [1.0625, -1, 0];

    function rO(qq) {
      return "number" === typeof qq ? [qq, qq] : qq
    }

    function vO(qq, Eq, gq) {
      const {
        drop: Yq = 0,
        shift: lq = 0,
        torso: Oq = 0,
        tilt: mq = 0,
        nod: xq = 0,
        cock: Aq = 0,
        legs: cq = [0, 0],
        arms: uq = 0,
        spread: Bq = 0
      } = Eq, [Wq, Nq] = rO(uq), [aq, Vq] = rO(Bq), dq = -Oq, jq = -mq, [Hq, oq, Pq] = function(qq, Eq) {
        const [gq, Yq, lq] = [-tO[0], tO[1], -tO[2]], Oq = gq * Math.cos(Eq) - Yq * Math.sin(Eq), mq = gq * Math.sin(Eq) + Yq * Math.cos(Eq);
        return [Oq - gq, -(mq * Math.cos(qq) - lq * Math.sin(qq) - Yq), mq * Math.sin(qq) + lq * Math.cos(qq) - lq]
      }(dq, jq), Qq = gq([0, -Yq, lq]);
      return {
        TorsoNode: {
          timeFraction: qq,
          position: gq([Hq, oq - Yq, Pq + lq]),
          rotation: gq([dq, 0, jq])
        },
        HeadMesh: {
          timeFraction: qq,
          rotation: gq([-xq, 0, -Aq])
        },
        ArmLeftMesh: {
          timeFraction: qq,
          rotation: gq([-Wq, 0, -aq])
        },
        ArmRightMesh: {
          timeFraction: qq,
          rotation: gq([-Nq, 0, Vq])
        },
        LegLeftMesh: {
          timeFraction: qq,
          position: Qq,
          rotation: gq([-cq[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: qq,
          position: Qq,
          rotation: gq([-cq[1], 0, 0])
        }
      }
    }
    var hO = gq(37195),
      nO = gq(38455),
      bO = gq(38611);

    function iO(qq, Eq, gq) {
      var Yq, lq;
      const Oq = function() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return qq + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - qq) * gq
        },
        [mq, xq] = null !== (Yq = qq.legs) && void 0 !== Yq ? Yq : [0, 0],
        [Aq, cq] = null !== (lq = Eq.legs) && void 0 !== lq ? lq : [0, 0];
      return {
        drop: Oq(qq.drop, Eq.drop),
        shift: Oq(qq.shift, Eq.shift),
        torso: Oq(qq.torso, Eq.torso),
        nod: Oq(qq.nod, Eq.nod),
        tilt: Oq(qq.tilt, Eq.tilt),
        legs: [Oq(mq, Aq), Oq(xq, cq)],
        arms: Oq(qq.arms, Eq.arms),
        spread: Oq(qq.spread, Eq.spread)
      }
    }
    const ZO = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      fO = PO(4400, !0, [
        [0, ZO],
        [.16, {
          ...ZO,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, ZO],
        [.44, {
          ...ZO,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, iO(ZO, jO, .7)],
        [.66, iO(ZO, jO, .78)],
        [.74, iO(ZO, HO, .65)],
        [.86, {
          ...ZO,
          drop: .14
        }],
        [1, ZO]
      ], "catmull-rom-spline"),
      MO = {
        ...ZO,
        drop: .14,
        torso: .3,
        spread: .4
      },
      TO = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      zO = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      SO = {
        caveGolem: fO,
        magmaGolem: PO(3600, !0, [
          [0, MO],
          [.12, {
            ...MO,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...MO,
            tilt: -.08
          }],
          [.4, {
            ...MO,
            tilt: .06,
            drop: .11
          }],
          [.52, iO(MO, jO, .9)],
          [.62, iO(MO, HO, .8)],
          [.7, iO(MO, HO, .45)],
          [.78, iO(MO, HO, .85)],
          [.9, {
            ...MO,
            drop: .17
          }],
          [1, MO]
        ], "catmull-rom-spline"),
        frostWraith: function(qq, Eq, gq) {
          return aO(yO, qq, Eq, gq, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, TO],
          [.14, {
            ...TO,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...TO,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...TO,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...TO,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...TO,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...TO,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...TO,
            rise: .16,
            tilt: -.04
          }],
          [1, TO]
        ], "catmull-rom-spline"),
        tikiTerror: function(qq, Eq, gq) {
          return aO(vO, qq, Eq, gq, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, zO],
          [.16, {
            ...zO,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, zO],
          [.44, {
            ...zO,
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
            ...zO,
            drop: .1
          }],
          [1, zO]
        ], "catmull-rom-spline")
      },
      pO = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      GO = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      LO = Object.fromEntries(Object.entries(SO).map((qq => {
        let [Eq, gq] = qq;
        return [Eq, (0, bO.b)((0, hO.g)(gq), Eq)]
      })));

    function JO(qq) {
      const Eq = function(qq) {
        var Eq;
        const gq = (0, nO.c)(qq).poseRig;
        return null !== (Eq = GO[qq]) && void 0 !== Eq ? Eq : void 0 === gq ? null : pO[gq]
      }(qq);
      return null === Eq ? null : LO[Eq]
    }

    function kO(qq) {
      return {
        "--difficulty-colour": qq
      }
    }
    const RO = (0, vq.lazy)((() => (0, NO.b)(gq.e(193).then((() => gq(41277))), (qq => qq.MobPreview))));

    function UO(qq) {
      var Eq, gq, Yq;
      let {
        picker: lq,
        controller: Oq
      } = qq;
      const {
        t: mq
      } = (0, nl.v)(), xq = kl(), {
        page: Aq
      } = lq;
      return (0, il.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: xq,
        onKeyDown: qq => {
          "ArrowLeft" === qq.key ? (qq.preventDefault(), qq.stopPropagation(), Oq.previous()) : "ArrowRight" === qq.key ? (qq.preventDefault(), qq.stopPropagation(), Oq.next()) : Jl(qq)
        },
        style: kO(Aq.colour),
        children: [(0, il.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, il.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: lq.dungeonName
          }), (0, il.jsx)(Ll.m, {
            padIgnore: !0,
            onClick: Oq.dismiss
          })]
        }), (0, il.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, il.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, il.jsx)(Ll.g, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !lq.canPrevious,
              onClick: Oq.previous,
              children: (0, il.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, il.jsx)(WO.d, {
                  name: "angle-up"
                })
              })
            }), (0, il.jsxs)("div", {
              className: Pl()("SkyblockBossPickerBoss", {
                Locked: !Aq.unlocked
              }),
              children: [null !== Aq.bossMobType && (0, il.jsx)(vq.Suspense, {
                fallback: (0, il.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, il.jsx)(RO, {
                  className: "SkyblockBossPickerModel",
                  mobType: Aq.bossMobType,
                  variation: Aq.bossMobVariation,
                  animation: null !== (Eq = JO(Aq.bossMobType)) && void 0 !== Eq ? Eq : void 0
                })
              }), null === Aq.bossMobType && (0, il.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, il.jsx)(Ll.g, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !lq.canNext,
              onClick: Oq.next,
              children: (0, il.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, il.jsx)(WO.d, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, il.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, il.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [Aq.beaten && (0, il.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), Aq.label]
            }), (0, il.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (gq = Aq.bossName) && void 0 !== gq ? gq : "???"
            }), (0, il.jsxs)("span", {
              className: Pl()("SkyblockBossPickerRecord", {
                Locked: null !== Aq.lockedHint
              }),
              children: [null !== Aq.lockedHintHighlight && (0, il.jsxs)(il.Fragment, {
                children: [Aq.lockedHintHighlight.before, (0, il.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: kO(Aq.lockedHintHighlight.colour),
                  children: [null !== Aq.lockedHintHighlight.icon && (0, il.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, il.jsx)(rl.e, {
                      itemName: Aq.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), Aq.lockedHintHighlight.name]
                }), Aq.lockedHintHighlight.after]
              }), null === Aq.lockedHintHighlight && (null !== (Yq = Aq.lockedHint) && void 0 !== Yq ? Yq : Aq.summary)]
            })]
          }), (0, il.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: lq.pages.map((qq => (0, il.jsx)("span", {
              className: Pl()("SkyblockBossPickerDot", {
                Current: qq.current,
                Locked: !qq.unlocked
              }),
              style: kO(qq.colour)
            }, qq.difficulty)))
          }), (0, il.jsx)(Ll.v, {
            className: "SkyblockBossPickerFight",
            disabled: !Aq.unlocked,
            onClick: Oq.enter,
            children: mq("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function FO(qq) {
      let {
        dungeon: Eq,
        select: gq
      } = qq;
      return (0, il.jsxs)(Ll.g, {
        className: Pl()("SkyblockDungeonCard", {
          Selected: Eq.selected
        }),
        onClick: () => {
          gq(Eq.id)
        },
        children: [(0, il.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, il.jsx)("strong", {
            children: Eq.name
          }), (0, il.jsx)("span", {
            children: Eq.beatenSummary
          })]
        }), (0, il.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: Eq.difficulties.map((qq => (0, il.jsxs)("span", {
            className: Pl()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: qq.beaten
            }),
            style: kO(qq.colour),
            title: qq.summary,
            children: [qq.beaten && (0, il.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), qq.label]
          }, qq.difficulty)))
        })]
      })
    }

    function sO(qq) {
      let {
        controller: Eq
      } = qq;
      const gq = (0, bl.h)(Ng, Eq.getSnapshot()),
        {
          t: Yq
        } = (0, nl.v)(),
        lq = kl();
      return gq.enabled ? (0, il.jsxs)(Gl.c, {
        show: gq.open,
        close: Eq.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [gq.picker && (0, il.jsx)(UO, {
          picker: gq.picker,
          controller: Eq
        }), !gq.picker && (0, il.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: lq,
          onKeyDown: Jl,
          children: [(0, il.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, il.jsxs)("div", {
              children: [(0, il.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: Yq("skyblockGame:dungeons")
              }), (0, il.jsx)("p", {
                children: Yq("skyblockGame:dungeonsIntro")
              })]
            }), (0, il.jsx)(Ll.m, {
              padIgnore: !0,
              onClick: Eq.dismiss
            })]
          }), (0, il.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, il.jsx)("div", {
              className: "SkyblockDungeonList",
              children: gq.dungeons.map((qq => (0, il.jsx)(FO, {
                dungeon: qq,
                select: Eq.select
              }, qq.id)))
            }), gq.detail && (0, il.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, il.jsx)("h3", {
                children: gq.detail.name
              }), (0, il.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: gq.detail.difficulties.map((qq => (0, il.jsxs)("li", {
                  className: Pl()("SkyblockDungeonRecord", {
                    Beaten: qq.beaten
                  }),
                  children: [(0, il.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: kO(qq.colour),
                    children: [qq.beaten && (0, il.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), qq.label]
                  }), (0, il.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: qq.summary
                  })]
                }, qq.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function XO(qq) {
      let {
        collection: Eq,
        select: gq
      } = qq;
      return (0, il.jsxs)(Ll.g, {
        className: Pl()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: Eq.selected,
          Locked: Eq.locked
        }),
        ariaPressed: Eq.selected,
        onClick: () => {
          gq(Eq.id)
        },
        children: [(0, il.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, il.jsx)(rl.e, {
            itemName: Eq.icon,
            amount: 0
          })
        }), (0, il.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, il.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, il.jsx)("strong", {
              children: Eq.name
            }), (0, il.jsx)("span", {
              children: Eq.tier
            })]
          }), (0, il.jsx)(Rl, {
            percent: Eq.percent,
            label: `${Eq.name}: ${Eq.progress}`
          }), (0, il.jsx)("span", {
            className: "SkyblockSkillXp",
            children: Eq.progress
          })]
        })]
      })
    }

    function wO(qq) {
      let {
        collection: Eq
      } = qq;
      const {
        t: gq
      } = (0, nl.v)();
      return (0, il.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, il.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, il.jsx)(rl.e, {
            itemName: Eq.icon,
            amount: 0
          })
        }), (0, il.jsx)("h3", {
          children: Eq.name
        }), (0, il.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: Eq.tier
        }), (0, il.jsx)("p", {
          children: Eq.locked ? gq("skyblockGame:collectionLocked") : Eq.count
        }), null !== Eq.nextReward && (0, il.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, il.jsx)("strong", {
            children: gq("skyblockGame:collectionNextReward")
          }), (0, il.jsx)("span", {
            children: Eq.nextReward
          })]
        }), (0, il.jsx)(Rl, {
          percent: Eq.percent,
          label: Eq.progress
        }), (0, il.jsx)("p", {
          children: Eq.progress
        })]
      })
    }

    function KO(qq) {
      let {
        controller: Eq
      } = qq;
      const gq = (0, bl.h)(zg, Eq.getSnapshot()),
        {
          t: Yq
        } = (0, nl.v)(),
        lq = kl();
      return gq.enabled ? (0, il.jsx)(Gl.c, {
        show: gq.open,
        close: Eq.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, il.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: lq,
          onKeyDown: Jl,
          children: [(0, il.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, il.jsxs)("div", {
              children: [(0, il.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: Yq("skyblockGame:collections")
              }), (0, il.jsxs)("p", {
                children: [Yq("skyblockGame:collectionsIntro"), " ", gq.tiersUnlocked]
              })]
            }), (0, il.jsx)(Ll.m, {
              padIgnore: !0,
              onClick: Eq.dismiss
            })]
          }), (0, il.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: gq.categories.map((qq => (0, il.jsxs)(Ll.g, {
              className: Pl()("SkyblockCollectionCategory", {
                Selected: qq.selected
              }),
              ariaPressed: qq.selected,
              padTabSelected: qq.selected,
              onClick: () => {
                Eq.selectCategory(qq.id)
              },
              children: [(0, il.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, il.jsx)(rl.e, {
                  itemName: qq.icon,
                  amount: 0
                })
              }), (0, il.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, il.jsx)("strong", {
                  children: qq.label
                }), (0, il.jsx)("span", {
                  children: qq.tiers
                })]
              })]
            }, qq.id)))
          }), (0, il.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, il.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: gq.collections.map((qq => (0, il.jsx)(XO, {
                collection: qq,
                select: Eq.select
              }, qq.id)))
            }), gq.detail && (0, il.jsx)(wO, {
              collection: gq.detail
            })]
          })]
        })
      }) : null
    }
    const CO = ["completed", "active", "available", "locked"],
      IO = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function eO(qq) {
      let {
        controller: Eq
      } = qq;
      const gq = (0, bl.h)(wg, Eq.getSnapshot()),
        {
          t: Yq
        } = (0, nl.v)(),
        lq = kl();
      return gq.enabled ? (0, il.jsx)(Gl.c, {
        show: gq.open,
        close: Eq.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, il.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: lq,
          onKeyDown: Jl,
          children: [(0, il.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, il.jsxs)("div", {
              children: [(0, il.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: Yq("skyblockDevQuests:title")
              }), (0, il.jsx)("p", {
                children: Yq("skyblockDevQuests:intro")
              })]
            }), (0, il.jsx)(Ll.m, {
              onClick: Eq.dismiss
            })]
          }), (0, il.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [CO.map((qq => (0, il.jsx)("span", {
              className: Pl()("SkyblockQuestGraphLegendState", qq),
              children: Yq(`skyblockDevQuests:state_${qq}`)
            }, qq))), IO.map((qq => (0, il.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, il.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, il.jsx)("line", {
                  className: Pl()("SkyblockQuestGraphEdge", qq),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), Yq(`skyblockDevQuests:edge_${qq}`)]
            }, qq)))]
          }), (0, il.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, il.jsxs)("div", {
              className: Pl()("SkyblockQuestGraphCanvas", {
                Planning: gq.planning
              }),
              style: {
                width: gq.width,
                height: gq.height
              },
              children: [(0, il.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: gq.width,
                height: gq.height,
                "aria-hidden": "true",
                children: [(0, il.jsx)("defs", {
                  children: (0, il.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, il.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), gq.edges.map((qq => (0, il.jsx)("path", {
                  className: Pl()("SkyblockQuestGraphEdge", qq.kind, {
                    InPlan: qq.inPlan
                  }),
                  d: qq.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, qq.key)))]
              }), gq.nodes.map((qq => (0, il.jsxs)("button", {
                type: "button",
                className: Pl()("SkyblockQuestGraphNode", qq.state, {
                  InPlan: qq.inPlan,
                  Hovered: qq.hovered
                }),
                style: {
                  left: qq.left,
                  top: qq.top,
                  width: 190,
                  height: 52
                },
                title: qq.id,
                onMouseEnter: () => {
                  Eq.hover(qq.id)
                },
                onMouseLeave: () => {
                  Eq.hover(null)
                },
                onFocus: () => {
                  Eq.hover(qq.id)
                },
                onBlur: () => {
                  Eq.hover(null)
                },
                onClick: () => {
                  Eq.jump(qq.id)
                },
                children: [(0, il.jsx)("strong", {
                  children: qq.name
                }), (0, il.jsx)("span", {
                  children: qq.detail
                })]
              }, qq.id)))]
            })
          })]
        })
      }) : null
    }
    const DO = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      qm = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${xY}ms`,
        "--forge-duration": "2150ms"
      },
      Em = Array.from({
        length: 18
      }, ((qq, Eq) => ({
        "--ember-left": `${(4+92*(.618034*Eq%1)).toFixed(1)}%`,
        "--ember-size": 3 + Eq % 3 * 2 + "px",
        "--ember-drift": 14 * (Eq % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*Eq%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*Eq%8).toFixed(2)}s`
      })));

    function gm(qq) {
      if (qq.style.removeProperty("--part-size"), null === qq.parentElement || "wrap" === getComputedStyle(qq.parentElement).flexWrap) return;
      const Eq = [...qq.children],
        gq = getComputedStyle(qq),
        Yq = parseFloat(gq.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        lq = (qq.clientHeight - parseFloat(gq.rowGap) * (Eq.length - 1)) / Eq.length,
        Oq = Eq.map((qq => {
          const Eq = getComputedStyle(qq),
            gq = qq.querySelector("h3"),
            Oq = qq.querySelector(".SkyblockForgeParts");
          if (null === gq || null === Oq) return Yq;
          const mq = lq - parseFloat(Eq.paddingTop) - parseFloat(Eq.paddingBottom) - gq.offsetHeight - parseFloat(getComputedStyle(gq).marginBottom),
            xq = parseFloat(getComputedStyle(Oq).columnGap),
            Aq = Oq.children.length;
          let cq = 0;
          for (let Yq = 1; Yq <= Aq; Yq++) {
            const qq = Math.ceil(Aq / Yq);
            cq = Math.max(cq, Math.min((Oq.clientWidth - xq * (Yq - 1)) / Yq, (mq - xq * (qq - 1)) / qq))
          }
          return cq
        }));
      qq.style.setProperty("--part-size", `${Math.floor(Math.max(Yq,Math.min(...Oq)))}px`)
    }

    function Ym(qq) {
      var Eq, gq, Yq, Oq, mq;
      let {
        controller: xq
      } = qq;
      const Aq = (0, bl.h)(aY, xq.getSnapshot()),
        {
          t: cq
        } = (0, nl.v)(),
        uq = kl(),
        Bq = function() {
          const qq = (0, vq.useRef)(null),
            Eq = (0, vq.useRef)(null);
          return (0, vq.useLayoutEffect)((() => {
            null !== qq.current && gm(qq.current)
          })), (0, vq.useCallback)((gq => {
            var Yq;
            null === (Yq = Eq.current) || void 0 === Yq || Yq.disconnect(), Eq.current = null, qq.current = gq, null !== gq && (Eq.current = new ResizeObserver((() => {
              gm(gq)
            })), Eq.current.observe(gq))
          }), [])
        }(),
        Wq = function(qq) {
          const Eq = (0, vq.useRef)(null);
          return (0, vq.useLayoutEffect)((() => {
            const qq = Eq.current;
            if (null !== qq) {
              qq.style.removeProperty("font-size");
              for (let Eq = 1.7; Eq > 1.1 && qq.scrollWidth > qq.clientWidth; Eq -= .1) qq.style.fontSize = Eq - .1 + "rem"
            }
          }), [qq]), (0, vq.useCallback)((qq => {
            Eq.current = qq
          }), [])
        }(null === (Eq = Aq.preview) || void 0 === Eq ? void 0 : Eq.name),
        Nq = (0, vq.useRef)(null),
        aq = (0, vq.useRef)({}),
        Vq = Aq.forging,
        dq = null !== (gq = null === Vq || void 0 === Vq ? void 0 : Vq.preview.tier) && void 0 !== gq ? gq : 0,
        jq = null !== (Yq = null === Vq || void 0 === Vq ? void 0 : Vq.preview.named) && void 0 !== Yq && Yq,
        Hq = (0, vq.useMemo)((() => {
          return null === Vq ? null : {
            flames: (qq = dq, Eq = jq, Array.from({
              length: 26 + 6 * qq + (Eq ? 20 : 0)
            }, ((qq, Eq) => {
              const gq = Eq < 6,
                Yq = Math.random() * Math.PI * 2,
                lq = gq ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                Oq = Math.cos(Yq) * lq,
                mq = Math.sin(Yq) * lq - 2 - 3 * Math.random(),
                xq = Math.random(),
                [Aq, cq, uq] = gq ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : xq < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : xq < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [xq < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": Aq,
                "--x0": `${(.15*Oq).toFixed(2)}rem`,
                "--y0": `${(.15*mq).toFixed(2)}rem`,
                "--x": `${Oq.toFixed(2)}rem`,
                "--y": `${mq.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${cq.toFixed(2)}rem`,
                "--duration": `${Math.round(uq)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: uY(dq, jq)
          };
          var qq, Eq
        }), [null === Vq || void 0 === Vq ? void 0 : Vq.id]);
      if (!Aq.enabled) return null;
      const oq = Aq.preview,
        Pq = Aq.arriving,
        Qq = null !== Pq && !Pq.sameSword,
        yq = null !== oq && (0, il.jsx)(rl.e, {
          itemName: oq.baseSword,
          amount: 0,
          enchantmentTier: oq.enchantmentTier
        });
      return (0, il.jsx)(Gl.c, {
        show: Aq.open,
        close: xq.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, il.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: uq,
          onKeyDown: Jl,
          children: [(0, il.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: Em.map(((qq, Eq) => (0, il.jsx)("span", {
              style: qq
            }, Eq)))
          }), (0, il.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, il.jsxs)("div", {
              children: [(0, il.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: cq("skyblockGame:forgeTitle")
              }), (0, il.jsx)("p", {
                children: cq("skyblockGame:forgeIntro")
              })]
            }), (0, il.jsx)(Ll.m, {
              onClick: xq.dismiss
            })]
          }), (0, il.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, il.jsx)("div", {
              ref: Bq,
              className: Pl()("SkyblockForgeSlots", {
                Locked: null !== Vq
              }),
              children: Aq.slots.map((qq => (0, il.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, il.jsx)("h3", {
                  children: qq.label
                }), (0, il.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: qq.parts.map((Eq => (0, il.jsx)("button", {
                    type: "button",
                    className: Pl()("SkyblockForgePart", {
                      Selected: Eq.selected,
                      Missing: Eq.placeholder
                    }),
                    disabled: Eq.placeholder,
                    title: Eq.placeholder ? cq("skyblockGame:forgePickParts") : Eq.itemName,
                    "aria-pressed": Eq.selected,
                    onClick: () => {
                      xq.select(qq.kind, Eq.material)
                    },
                    children: (0, il.jsx)(rl.e, {
                      itemName: Eq.itemName,
                      amount: Eq.owned
                    })
                  }, Eq.material)))
                })]
              }, qq.kind)))
            }), (0, il.jsxs)("div", {
              className: Pl()("SkyblockForgeAnvil", {
                Named: null === oq || void 0 === oq ? void 0 : oq.named
              }),
              style: {
                "--tier": null === oq ? "transparent" : lq.Ab[oq.enchantmentTier]
              },
              children: [(0, il.jsxs)("div", {
                className: Pl()("SkyblockForgeAltar", {
                  Forging: null !== Vq
                }),
                style: null === Vq ? void 0 : qm,
                children: [(0, il.jsxs)("div", {
                  className: Pl()("SkyblockForgeMount", {
                    Arrive: null !== Pq
                  }),
                  children: [null === oq && (0, il.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, il.jsx)(rl.e, {
                      itemName: Aq.unformedSword,
                      amount: 0
                    })
                  }), null !== oq && (0, il.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== oq && null === Vq && (0, il.jsx)("div", {
                    ref: Nq,
                    className: "SkyblockForgeFloat",
                    children: (0, il.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: yq
                    })
                  }), null !== oq && (0, il.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: cY.map(((qq, Eq) => (0, il.jsx)("span", {
                      className: Pl()({
                        Rune: "" !== qq.rune
                      }),
                      style: qq.style,
                      children: qq.rune
                    }, Eq)))
                  }), null !== Vq && null !== Hq && (0, il.jsxs)(il.Fragment, {
                    children: [(0, il.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, il.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: Hq.flames.map(((qq, Eq) => (0, il.jsx)("span", {
                        style: qq
                      }, Eq)))
                    }), (0, il.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: aq.current,
                      children: (0, il.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: yq
                      })
                    }), (0, il.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, il.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (dq >= 4 || jq) && (0, il.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, il.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: Hq.sparks.map(((qq, Eq) => (0, il.jsx)("span", {
                        style: qq
                      }, Eq)))
                    }), (0, il.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, il.jsx)("p", {
                  className: Pl()("SkyblockForgeStatus", null === (Oq = Aq.status) || void 0 === Oq ? void 0 : Oq.tone),
                  children: null === (mq = Aq.status) || void 0 === mq ? void 0 : mq.text
                })]
              }), null === oq && (0, il.jsx)("p", {
                className: Pl()("SkyblockForgeName Waiting", {
                  ArriveText: Qq
                }),
                children: cq(Aq.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== oq && (0, il.jsx)("h3", {
                ref: Wq,
                className: Pl()("SkyblockForgeName", {
                  ArriveText: Qq
                }),
                title: oq.name,
                children: oq.name
              }), (null === oq || void 0 === oq ? void 0 : oq.named) && (0, il.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: cq("skyblockGame:forgeSecret")
              }), (0, il.jsxs)(Ll.v, {
                className: "SkyblockForgeButton",
                disabled: !Aq.canForge,
                title: null === oq ? void 0 : cq("skyblockGame:forgeCoalOwned", {
                  owned: String(Aq.coalOwned)
                }),
                onClick: () => {
                  aq.current = function(qq) {
                    const Eq = null === qq ? "none" : getComputedStyle(qq).transform,
                      gq = new DOMMatrixReadOnly("none" === Eq ? void 0 : Eq);
                    return {
                      "--settle-y": `${gq.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(gq.b,gq.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(Nq.current), NY(), xq.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [cq("skyblockGame:forgeButton"), null !== oq && (0, il.jsxs)("span", {
                  className: Pl()("SkyblockForgeCost", {
                    Short: oq.coalShort
                  }),
                  children: [(0, il.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, il.jsx)(rl.e, {
                      itemName: Dg.b,
                      amount: 0
                    })
                  }), oq.coalCost]
                })]
              })]
            }), (0, il.jsxs)("div", {
              className: Pl()("SkyblockForgeDetails", {
                Named: null === oq || void 0 === oq ? void 0 : oq.named
              }),
              children: [(0, il.jsx)("p", {
                className: Pl()("SkyblockForgeLore", {
                  ArriveText: Qq
                }),
                title: null === oq || void 0 === oq ? void 0 : oq.lore,
                children: null === oq || void 0 === oq ? void 0 : oq.lore
              }), (0, il.jsxs)("dl", {
                className: Pl()("SkyblockForgeStats", {
                  ArriveText: Qq
                }),
                children: [null === oq && DO.map((qq => (0, il.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, il.jsx)("dt", {
                    children: cq(qq)
                  }), (0, il.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, qq))), null === oq || void 0 === oq ? void 0 : oq.stats.map((qq => (0, il.jsxs)("div", {
                  className: Pl()("SkyblockForgeStat", {
                    Better: qq.better
                  }),
                  children: [(0, il.jsx)("dt", {
                    children: qq.label
                  }), (0, il.jsx)("dd", {
                    children: qq.value
                  })]
                }, qq.label)))]
              }), (0, il.jsx)("ul", {
                className: Pl()("SkyblockForgeEffects", {
                  ArriveText: Qq
                }),
                children: null === oq || void 0 === oq ? void 0 : oq.effects.map((qq => (0, il.jsx)("li", {
                  children: qq
                }, qq)))
              })]
            })]
          })]
        })
      })
    }
    const lm = "Doom Rivet",
      Om = "Doom Crest";

    function mm(qq) {
      let {
        itemName: Eq,
        amount: gq,
        owned: Yq
      } = qq;
      return (0, il.jsxs)("span", {
        className: Pl()("SkyblockSmugglerPrice", {
          Short: gq > Yq
        }),
        children: [(0, il.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, il.jsx)(rl.e, {
            itemName: Eq,
            amount: 0
          })
        }), (0, il.jsx)("span", {
          children: gq
        })]
      })
    }

    function xm(qq) {
      return qq.justBought ? "skyblockGame:smugglerJustBought" : qq.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function Am(qq) {
      let {
        deal: Eq,
        view: gq,
        buy: Yq
      } = qq;
      const {
        t: lq
      } = (0, nl.v)();
      return (0, il.jsxs)("div", {
        className: Pl()("SkyblockSmugglerPocket", {
          Bought: Eq.justBought,
          Unaffordable: !Eq.affordable,
          SoldOut: Eq.soldOut && !Eq.justBought
        }),
        children: [(0, il.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, il.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, il.jsx)(rl.e, {
            itemName: Eq.itemName,
            amount: 0,
            enchantmentTier: Eq.enchantmentTier
          }), Eq.amount > 1 && (0, il.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: lq("skyblockGame:smugglerAmount", {
              amount: Eq.amount
            })
          })]
        }), (0, il.jsx)("h3", {
          children: Eq.displayName
        }), (0, il.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, il.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [Eq.rivets > 0 && (0, il.jsx)(mm, {
              itemName: lm,
              amount: Eq.rivets,
              owned: gq.rivetsOwned
            }), Eq.crests > 0 && (0, il.jsx)(mm, {
              itemName: Om,
              amount: Eq.crests,
              owned: gq.crestsOwned
            })]
          }), (0, il.jsx)(Ll.g, {
            className: "SkyblockSmugglerBuy",
            disabled: Eq.soldOut || !Eq.affordable || gq.pending,
            onClick: () => {
              Yq(Eq.slot)
            },
            children: lq(xm(Eq))
          })]
        })]
      }, Eq.justBought ? gq.boughtCount : 0)
    }

    function cm(qq) {
      let {
        controller: Eq
      } = qq;
      const gq = (0, bl.h)(jY, Eq.getSnapshot()),
        {
          t: Yq
        } = (0, nl.v)(),
        lq = kl();
      return gq.enabled ? (0, il.jsx)(Gl.c, {
        show: gq.open,
        close: Eq.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, il.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: lq,
          onKeyDown: Jl,
          children: [(0, il.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, il.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, il.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, il.jsxs)("div", {
              children: [(0, il.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: Yq("skyblockGame:smugglerTitle")
              }), (0, il.jsx)("p", {
                children: Yq("skyblockGame:smugglerIntro")
              })]
            }), (0, il.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, il.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, il.jsx)(mm, {
                  itemName: lm,
                  amount: gq.rivetsOwned,
                  owned: gq.rivetsOwned
                }), (0, il.jsx)(mm, {
                  itemName: Om,
                  amount: gq.crestsOwned,
                  owned: gq.crestsOwned
                })]
              }), (0, il.jsx)(Ll.m, {
                onClick: Eq.dismiss
              })]
            })]
          }), (0, il.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: gq.deals.map((qq => (0, il.jsx)(Am, {
              deal: qq,
              view: gq,
              buy: Eq.buy
            }, qq.slot)))
          }), (0, il.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, il.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: gq.rotatesText
            }), null !== gq.status && (0, il.jsx)("span", {
              className: Pl()("SkyblockSmugglerStatus", gq.status.tone),
              children: gq.status.text
            })]
          })]
        })
      }) : null
    }

    function um(qq) {
      let {
        phase: Eq,
        className: gq
      } = qq;
      return (0, il.jsx)("span", {
        className: Pl()("SkyblockMoon", `Moon-${Eq}`, gq),
        "aria-hidden": "true"
      })
    }

    function Bm(qq) {
      let {
        controller: Eq
      } = qq;
      const gq = (0, bl.h)(PY, Eq.getSnapshot()),
        {
          t: Yq
        } = (0, nl.v)();
      return gq.enabled ? (0, il.jsx)(yl.g, {
        placement: "statBars",
        children: (0, il.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: Pl()("SkyblockPassageChip", gq.open && "Open"),
          "aria-label": Yq("skyblockGame:passageChipLabel", {
            phase: gq.phaseName
          }),
          title: Yq("skyblockGame:passageChipLabel", {
            phase: gq.phaseName
          }),
          onMouseDown: qq => {
            qq.preventDefault()
          },
          onClick: Eq.toggle,
          children: (0, il.jsx)(um, {
            phase: gq.phase
          }, gq.phase)
        })
      }) : null
    }

    function Wm(qq) {
      let {
        fish: Eq
      } = qq;
      return (0, il.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, il.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, il.jsx)(rl.e, {
            itemName: Eq.itemName,
            amount: 0
          })
        }), (0, il.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, il.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: Eq.displayName
          }), (0, il.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: Eq.where
          })]
        })]
      })
    }

    function Nm(qq) {
      let {
        controller: Eq
      } = qq;
      const gq = (0, bl.h)(PY, Eq.getSnapshot()),
        {
          t: Yq
        } = (0, nl.v)(),
        lq = kl();
      return gq.enabled ? (0, il.jsx)(Gl.c, {
        show: gq.open,
        close: Eq.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, il.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: lq,
          onKeyDown: Jl,
          children: [(0, il.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, il.jsx)(um, {
              phase: gq.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, il.jsxs)("div", {
              children: [(0, il.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: Yq("skyblockGame:passageTitle")
              }), (0, il.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: gq.phaseName
              })]
            }), (0, il.jsx)(Ll.m, {
              padIgnore: !0,
              onClick: Eq.dismiss
            })]
          }), (0, il.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: Yq("skyblockGame:passageIntro")
          }), (0, il.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, il.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, il.jsx)("h3", {
                children: Yq("skyblockGame:passageVisiting")
              }), (0, il.jsx)("ul", {
                className: "SkyblockPassageList",
                children: gq.visitors.map((qq => (0, il.jsx)(Wm, {
                  fish: qq
                }, qq.itemName)))
              })]
            }), (0, il.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== gq.resting && (0, il.jsxs)(il.Fragment, {
                children: [(0, il.jsx)("h3", {
                  children: Yq("skyblockGame:passageResting")
                }), (0, il.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, il.jsx)(Wm, {
                    fish: gq.resting
                  })
                })]
              }), (0, il.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, il.jsx)(um, {
                  phase: gq.nextPhase
                }), (0, il.jsx)("span", {
                  children: gq.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function am() {
      return (0, il.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((qq => (0, il.jsx)("i", {
          style: {
            "--sparkle-index": qq
          }
        }, qq)))
      })
    }

    function Vm(qq) {
      var Eq;
      let {
        charm: gq,
        view: Yq,
        controller: lq
      } = qq;
      const {
        t: Oq
      } = (0, nl.v)(), mq = Yq.shop, xq = (null === (Eq = Yq.sparkle) || void 0 === Eq ? void 0 : Eq.id) === gq.id;
      return (0, il.jsxs)("li", {
        className: Pl()("SkyblockLampLightCharm", gq.owned && "Owned", gq.socketed && "Socketed"),
        children: [xq && (0, il.jsx)(am, {}, Yq.sparkle.count), (0, il.jsx)("h4", {
          children: gq.name
        }), (0, il.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: gq.effect
        }), (0, il.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: gq.lines.map((qq => (0, il.jsxs)("li", {
            className: Pl()("SkyblockLampLightOddsLine", "better" === qq.tone ? "Better" : "worse" === qq.tone ? "Worse" : "Same"),
            children: [(0, il.jsx)("span", {
              className: "Before",
              children: qq.before
            }), (0, il.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, il.jsx)("span", {
              className: "After",
              children: qq.after
            })]
          }, qq.label)))
        }), (0, il.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: gq.owned ? gq.socketed ? (0, il.jsxs)(il.Fragment, {
            children: [(0, il.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: Oq("skyblockGame:lampLightSocketed")
            }), (0, il.jsx)(Ll.Q, {
              disabled: !Yq.canCommand,
              ariaLabel: Oq("skyblockGame:lampLightRemoveLabel", {
                charm: gq.name
              }),
              onClick: () => {
                lq.socket(null)
              },
              children: Oq("skyblockGame:lampLightRemove")
            })]
          }) : (0, il.jsx)(Ll.g, {
            disabled: !Yq.canCommand || !mq.heldRod,
            ariaLabel: Oq("skyblockGame:lampLightSocketLabel", {
              charm: gq.name
            }),
            onClick: () => {
              lq.socket(gq.id)
            },
            children: Oq("skyblockGame:lampLightSocket")
          }) : (0, il.jsx)(Ll.g, {
            disabled: !Yq.canCommand || !gq.affordable,
            ariaLabel: Oq("skyblockGame:lampLightBuyLabel", {
              item: gq.name,
              cost: gq.cost
            }),
            onClick: () => {
              lq.buy(gq.id)
            },
            children: gq.cost
          })
        })]
      })
    }

    function dm(qq) {
      var Eq;
      let {
        tint: gq,
        view: Yq,
        controller: lq
      } = qq;
      const {
        t: Oq
      } = (0, nl.v)();
      return (0, il.jsxs)("li", {
        className: Pl()("SkyblockLampLightTint", gq.wearing && "Wearing"),
        style: {
          "--tint-colour": gq.colour
        },
        children: [(null === (Eq = Yq.sparkle) || void 0 === Eq ? void 0 : Eq.id) === gq.id && (0, il.jsx)(am, {}, Yq.sparkle.count), (0, il.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, il.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: gq.name
        }), gq.wearing ? (0, il.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: Oq("skyblockGame:lampLightWearing")
        }) : (0, il.jsx)(Ll.g, {
          disabled: !Yq.canCommand || !gq.owned && !gq.affordable,
          ariaLabel: gq.owned ? Oq("skyblockGame:lampLightWearLabel", {
            tint: gq.name
          }) : Oq("skyblockGame:lampLightBuyLabel", {
            item: gq.name,
            cost: gq.cost
          }),
          onClick: () => {
            gq.owned ? lq.wearTint(gq.id) : lq.buy(gq.id)
          },
          children: gq.owned ? Oq("skyblockGame:lampLightWear") : gq.cost
        })]
      })
    }

    function jm(qq) {
      let {
        controller: Eq
      } = qq;
      const gq = (0, bl.h)(zY, Eq.getSnapshot()),
        {
          t: Yq
        } = (0, nl.v)(),
        lq = gq.shop;
      return (0, il.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, il.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, il.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: gq.balance
          }), (0, il.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": gq.releasing,
            className: Pl()("SkyblockLampLightSwitch", gq.releasing && "On"),
            disabled: gq.releasing ? "ready" !== gq.status : !gq.canCommand,
            onClick: () => {
              Eq.setRelease(!gq.releasing)
            },
            children: [(0, il.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, il.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), Yq("skyblockGame:lampLightRelease")]
          }), (0, il.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: Yq("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== gq.notice && (0, il.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: gq.notice
        }), null !== lq && (0, il.jsxs)(il.Fragment, {
          children: [(0, il.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, il.jsx)("h3", {
              children: Yq("skyblockGame:lampLightCharms")
            }), (0, il.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: lq.oddsFor
            }), (0, il.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((qq => (0, il.jsx)("button", {
                type: "button",
                "aria-pressed": gq.situation === qq,
                className: Pl()("SkyblockLampLightSituation", gq.situation === qq && "Selected"),
                onClick: () => {
                  Eq.setSituation(qq)
                },
                children: Yq("open" === qq ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, qq)))
            })]
          }), !lq.heldRod && (0, il.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: Yq("skyblockGame:lampLightHoldRod")
          }), (0, il.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: lq.charms.map((qq => (0, il.jsx)(Vm, {
              charm: qq,
              view: gq,
              controller: Eq
            }, qq.id)))
          }), (0, il.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, il.jsx)("h3", {
              children: Yq("skyblockGame:lampLightTints")
            })
          }), (0, il.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, il.jsxs)("li", {
              className: Pl()("SkyblockLampLightTint", "Islands", lq.wearingIslandColours && "Wearing"),
              children: [(0, il.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, il.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: Yq("skyblockGame:lampLightIslandColours")
              }), lq.wearingIslandColours ? (0, il.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: Yq("skyblockGame:lampLightWearing")
              }) : (0, il.jsx)(Ll.g, {
                disabled: !gq.canCommand,
                ariaLabel: Yq("skyblockGame:lampLightWearLabel", {
                  tint: Yq("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  Eq.wearTint(null)
                },
                children: Yq("skyblockGame:lampLightWear")
              })]
            }), lq.tints.map((qq => (0, il.jsx)(dm, {
              tint: qq,
              view: gq,
              controller: Eq
            }, qq.id)))]
          })]
        })]
      })
    }

    function Hm(qq) {
      let {
        controller: Eq
      } = qq;
      const gq = (0, bl.h)(zY, Eq.getSnapshot()),
        {
          t: Yq
        } = (0, nl.v)();
      return gq.releasing ? (0, il.jsx)(yl.g, {
        children: (0, il.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            Eq.setRelease(!1)
          },
          children: [(0, il.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, il.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [Yq("skyblockGame:lampLightReleasing"), " \xb7 ", gq.balance]
          }), (0, il.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: Yq("skyblockGame:lampLightKeepCatches")
          }), null !== gq.gained && (0, il.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: gq.gained.text
          }, gq.gained.count)]
        })
      }) : null
    }

    function om(qq) {
      let {
        island: Eq,
        view: gq,
        aim: Yq
      } = qq;
      const {
        t: lq
      } = (0, nl.v)(), Oq = Eq.featuredFish;
      return (0, il.jsxs)("li", {
        className: Pl()("SkyblockKeepersChairIsland", `Island-${Eq.id}`, Eq.favoured && "Aimed", !Eq.relit && "Dark"),
        children: [(0, il.jsx)("h3", {
          children: Eq.name
        }), Eq.relit && null !== Oq ? (0, il.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, il.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: lq("skyblockGame:keepersChairTideNotice")
          }), (0, il.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, il.jsx)(rl.e, {
              itemName: Oq.itemName,
              amount: 0
            })
          }), (0, il.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: Oq.displayName
          })]
        }) : (0, il.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, il.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: lq("skyblockGame:keepersChairDark")
          })
        }), Eq.relit && (Eq.favoured ? (0, il.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: lq("skyblockGame:keepersChairAimed")
        }) : (0, il.jsx)(Ll.g, {
          className: "SkyblockKeepersChairAim",
          disabled: !gq.canAim,
          ariaLabel: lq("skyblockGame:keepersChairAimLabel", {
            island: Eq.name
          }),
          onClick: () => {
            Yq(Eq.id)
          },
          children: lq("skyblockGame:keepersChairAim")
        }))]
      }, Eq.favoured ? gq.aimedCount : 0)
    }

    function Pm(qq) {
      let {
        controller: Eq,
        lampLight: gq
      } = qq;
      const Yq = (0, bl.h)(hY, Eq.getSnapshot()),
        lq = (0, bl.h)(zY, gq.getSnapshot()),
        [Oq, mq] = (0, vq.useState)("lamp"),
        {
          t: xq
        } = (0, nl.v)(),
        Aq = kl();
      if (!Yq.enabled) return null;
      const cq = "light" === Oq && lq.enabled;
      return (0, il.jsx)(Gl.c, {
        show: Yq.open,
        close: Eq.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, il.jsxs)("section", {
          className: Pl()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", cq && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: Aq,
          onKeyDown: Jl,
          children: [(0, il.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, il.jsxs)("div", {
              children: [(0, il.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: xq("skyblockGame:keepersChairTitle")
              }), (0, il.jsx)("p", {
                children: xq(cq ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, il.jsx)(Ll.m, {
              padIgnore: !0,
              ariaLabel: xq("skyblockGame:keepersChairClose"),
              onClick: Eq.dismiss
            })]
          }), lq.enabled && (0, il.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((qq => (0, il.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === qq === cq,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === qq === cq ? "true" : void 0,
              className: Pl()("SkyblockKeepersChairTab", "light" === qq === cq && "Selected"),
              onClick: () => {
                mq(qq)
              },
              children: [xq("lamp" === qq ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === qq && (0, il.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: lq.balance
              })]
            }, qq)))
          }), cq ? (0, il.jsx)(jm, {
            controller: gq
          }) : (0, il.jsx)(Qm, {
            view: Yq,
            controller: Eq
          })]
        })
      })
    }

    function Qm(qq) {
      let {
        view: Eq,
        controller: gq
      } = qq;
      const {
        t: Yq
      } = (0, nl.v)();
      return (0, il.jsxs)(il.Fragment, {
        children: [(0, il.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: Eq.islands.map((qq => (0, il.jsx)(om, {
            island: qq,
            view: Eq,
            aim: gq.aim
          }, qq.id)))
        }), null !== Eq.almanac && (0, il.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, il.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: Yq("skyblockGame:passageTitle")
          }), (0, il.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, il.jsx)(um, {
              phase: Eq.almanac.phase
            }), Eq.almanac.phaseName]
          }), (0, il.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, il.jsx)(um, {
              phase: Eq.almanac.nextPhase
            }), Eq.almanac.next]
          })]
        }), (0, il.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, il.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: Yq("skyblockGame:keepersChairFavour")
          }), Eq.aimed && (0, il.jsx)(Ll.Q, {
            className: "SkyblockKeepersChairRest",
            disabled: !Eq.canAim,
            onClick: () => {
              gq.aim(null)
            },
            children: Yq("skyblockGame:keepersChairRest")
          })]
        }), null !== Eq.status && (0, il.jsx)("p", {
          className: Pl()("SkyblockKeepersChairStatus", "refused" === Eq.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: Eq.status.text
        })]
      })
    }

    function ym(qq) {
      let {
        controller: Eq
      } = qq;
      const {
        t: gq
      } = (0, nl.v)(), Yq = (0, bl.h)(bY, Eq.getSnapshot());
      if (!Yq.enabled) return null;
      const lq = Yq.freshCount > 0 ? gq("skyblockGame:reachLogOpenNews", {
        count: Yq.freshCount
      }) : gq("skyblockGame:reachLogOpen");
      return (0, il.jsx)(yl.g, {
        placement: "statBars",
        children: (0, il.jsxs)("button", {
          type: "button",
          className: Pl()("SkyblockReachLogButton", Yq.freshCount > 0 && "HasNews", Yq.pending && "Pending"),
          "aria-label": lq,
          title: lq,
          onClick: Eq.ask,
          children: [Yq.news && (0, il.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${Yq.newsToken}`), (0, il.jsx)("span", {
            className: Pl()("SkyblockReachLogIcon", Yq.news && "Jump"),
            "aria-hidden": "true",
            children: (0, il.jsx)(rl.e, {
              itemName: ZY,
              amount: 0
            })
          }, `icon:${Yq.newsToken}`), Yq.freshCount > 0 && (0, il.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: Yq.freshCount
          })]
        })
      })
    }

    function tm(qq) {
      let {
        gift: Eq
      } = qq;
      return (0, il.jsx)("li", {
        className: Pl()("SkyblockRegularsGift", Eq.given && "Given"),
        children: Eq.text
      })
    }

    function rm(qq) {
      let {
        regular: Eq
      } = qq;
      const {
        t: gq
      } = (0, nl.v)();
      return (0, il.jsxs)("li", {
        className: Pl()("SkyblockRegularsCard", Eq.tagged ? "Tagged" : "Untagged", Eq.resting && "Resting"),
        children: [(0, il.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, il.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: Eq.fishName,
            children: (0, il.jsx)(rl.e, {
              itemName: Eq.itemName,
              amount: 0
            })
          }), (0, il.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, il.jsx)("h3", {
              children: Eq.name
            }), (0, il.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: Eq.fishName
            })]
          })]
        }), (0, il.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: Eq.line
        }), (0, il.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, il.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: Eq.size
          }), Eq.tagged && (0, il.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: Eq.resting ? gq("skyblockGame:regularsResting") : Eq.meetings
          })]
        }), (0, il.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: Eq.chance
        }), (0, il.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: Eq.gifts.map((qq => (0, il.jsx)(tm, {
            gift: qq
          }, qq.text)))
        }), Eq.history.length > 0 && (0, il.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: Eq.history.map(((qq, Eq) => (0, il.jsx)("li", {
            children: qq
          }, Eq)))
        })]
      })
    }

    function hm(qq) {
      let {
        controller: Eq,
        island: gq
      } = qq;
      const {
        t: Yq
      } = (0, nl.v)(), lq = (0, bl.h)(ql, Eq.getSnapshot()), Oq = lq.islands.find((qq => qq.id === gq));
      if (!lq.enabled || void 0 === Oq) return null;
      const mq = Yq("skyblockGame:regularsOpen");
      return (0, il.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": mq,
        title: mq,
        onClick: () => {
          Eq.openIsland(gq)
        },
        children: [(0, il.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: Yq("skyblockGame:regularsTitle")
        }), Oq.regulars.map((qq => (0, il.jsx)("span", {
          className: Pl()("SkyblockRegularsStripIcon", qq.tagged && "Tagged"),
          title: qq.name,
          children: (0, il.jsx)(rl.e, {
            itemName: qq.itemName,
            amount: 0
          })
        }, qq.id)))]
      })
    }

    function nm(qq) {
      var Eq;
      let {
        controller: gq
      } = qq;
      const Yq = (0, bl.h)(ql, gq.getSnapshot()),
        {
          t: lq
        } = (0, nl.v)(),
        Oq = kl();
      if (!Yq.enabled) return null;
      const mq = null !== (Eq = Yq.islands.find((qq => qq.id === Yq.selected))) && void 0 !== Eq ? Eq : null;
      return (0, il.jsx)(Gl.c, {
        show: Yq.open,
        close: gq.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, il.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: Oq,
          onKeyDown: Jl,
          children: [(0, il.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, il.jsxs)("div", {
              children: [(0, il.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: lq("skyblockGame:regularsTitle")
              }), (0, il.jsx)("p", {
                children: lq("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, il.jsx)(Ll.m, {
              padIgnore: !0,
              onClick: gq.dismiss
            })]
          }), (0, il.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: Yq.islands.map((qq => {
              const Eq = qq.id === Yq.selected;
              return (0, il.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": Eq,
                "data-pad-tab": !0,
                "data-pad-selected": Eq ? "true" : void 0,
                className: Pl()("SkyblockReachLogTab", `Island-${qq.id}`, Eq && "Selected", qq.charm.given && "GoldPage"),
                onClick: () => {
                  gq.selectIsland(qq.id)
                },
                children: (0, il.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: qq.name
                })
              }, qq.id)
            }))
          }), (0, il.jsxs)("div", {
            className: Pl()("SkyblockRegularsPage", null !== mq && `Island-${mq.id}`),
            role: "tabpanel",
            children: [(0, il.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: lq("skyblockGame:regularsHow")
            }), null !== mq && (0, il.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: mq.regulars.map((qq => (0, il.jsx)(rm, {
                regular: qq
              }, qq.id)))
            })]
          }), null !== mq && (0, il.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, il.jsx)("span", {
              className: Pl()("SkyblockRegularsCharm", mq.charm.given && "Given"),
              children: mq.charm.text
            })
          })]
        })
      })
    }
    const bm = [{
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
      im = Array.from({
        length: 6
      }, ((qq, Eq) => ({
        "--x": `${(88*(.618034*Eq%1)).toFixed(1)}%`,
        "--y": `${(10+37*Eq%70).toFixed(1)}%`,
        "--size": 7 + Eq % 3 * 3 + "rem",
        "--drift-x": 3 * (Eq % 3 - 1) + "rem",
        "--drift-y": 2 * (Eq % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + Eq % 4 * 3 + "s",
        "--delay": 2.5 * -Eq + "s"
      }))),
      Zm = Array.from({
        length: 14
      }, ((qq, Eq) => ({
        "--left": `${(3+94*((.618034*Eq+.3)%1)).toFixed(1)}%`,
        "--size": 4 + Eq % 4 * 2 + "px",
        "--sway": Eq % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*Eq%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*Eq%12).toFixed(2)}s`
      }))),
      fm = (0, vq.memo)((function(qq) {
        let {
          island: Eq
        } = qq;
        return (0, il.jsxs)("div", {
          className: Pl()("SkyblockReachLogDepths", null !== Eq && `Island-${Eq}`),
          "aria-hidden": "true",
          children: [bm.map(((qq, Eq) => (0, il.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: qq
          }, `shaft${Eq}`))), im.map(((qq, Eq) => (0, il.jsx)("span", {
            className: Pl()("SkyblockReachLogMote", Eq % 2 === 1 && "Violet"),
            style: qq
          }, `mote${Eq}`))), Zm.map(((qq, Eq) => (0, il.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: qq
          }, `bubble${Eq}`)))]
        })
      })),
      Mm = 100;

    function Tm(qq) {
      let {
        view: Eq
      } = qq;
      const {
        t: gq
      } = (0, nl.v)();
      if (null === Eq || 0 === Eq.total) return null;
      const Yq = Mm * Eq.aspect,
        lq = gq("skyblockGame:hiddenWatersCount", {
          found: Eq.found,
          total: Eq.total
        });
      return (0, il.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${gq("skyblockGame:hiddenWatersTitle")}: ${lq}`,
        children: [(0, il.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${Yq}`,
          "aria-hidden": "true",
          children: [Eq.islands.map(((qq, Eq) => (0, il.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (qq.left + qq.width / 2) * Mm,
            cy: (qq.top + qq.height / 2) * Yq,
            rx: qq.width / 2 * Mm,
            ry: qq.height / 2 * Yq
          }, Eq))), Eq.pins.map(((qq, Eq) => (0, il.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: qq.left * Mm,
            cy: qq.top * Yq,
            r: 13
          }, Eq)))]
        }), (0, il.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, il.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: gq("skyblockGame:hiddenWatersTitle")
          }), (0, il.jsx)("span", {
            className: Eq.found === Eq.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: lq
          })]
        })]
      })
    }

    function zm(qq) {
      let {
        view: Eq,
        island: gq
      } = qq;
      const {
        t: Yq
      } = (0, nl.v)(), lq = null === Eq || void 0 === Eq ? void 0 : Eq.glimpses.get(gq);
      return void 0 === lq || 0 === lq.length ? null : (0, il.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, il.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: Yq("skyblockGame:hiddenWatersGlimpsed")
        }), (0, il.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: lq.map((qq => (0, il.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, il.jsx)(rl.e, {
              itemName: qq,
              amount: 0
            })
          }, qq)))
        })]
      })
    }
    const Sm = ["Bronze", "Silver", "Gold"],
      pm = [{
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
      Gm = pm.slice(0, 2);

    function Lm(qq) {
      return qq ? pm : Gm
    }

    function Jm(qq) {
      let {
        fish: Eq,
        letGoShown: gq
      } = qq;
      const {
        t: Yq
      } = (0, nl.v)();
      return (0, il.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [Sm.map(((qq, gq) => {
          const lq = gq < Eq.marks;
          return (0, il.jsx)("span", {
            className: Pl()("SkyblockReachLogPip", qq, lq && "Earned", lq && Eq.fresh && gq === Eq.marks - 1 && "Newest"),
            title: Yq(iY[gq])
          }, qq)
        })), (0, il.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), Lm(gq).map(((qq, gq) => (0, il.jsx)("span", {
          className: Pl()("SkyblockReachLogRibbon", qq.className, !0 === Eq.ribbons[gq] && "Earned"),
          title: Yq(qq.titleKey)
        }, qq.className)))]
      })
    }

    function km(qq) {
      let {
        letGoShown: Eq,
        haloShown: gq
      } = qq;
      const {
        t: Yq
      } = (0, nl.v)();
      return (0, il.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, il.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Yq("skyblockGame:reachLogMarks"),
          children: [(0, il.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), Yq("skyblockGame:reachLogLegendMarks")]
        }), Lm(Eq).map((qq => (0, il.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Yq(qq.titleKey),
          children: [(0, il.jsx)("span", {
            className: Pl()("SkyblockReachLogRibbon", qq.className, "Earned")
          }), Yq(qq.legendKey)]
        }, qq.className))), (0, il.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Yq("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, il.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), Yq("skyblockGame:reachLogLegendGlimmer")]
        }), gq && (0, il.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Yq("skyblockGame:reachLogHaloTitle"),
          children: [(0, il.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), Yq("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function Rm(qq) {
      let {
        returner: Eq
      } = qq;
      return (0, il.jsxs)("div", {
        className: Pl()("SkyblockReachLogReturner", Eq.back && "Back"),
        children: [(0, il.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, il.jsx)(rl.e, {
            itemName: Eq.itemName,
            amount: 0
          })
        }), (0, il.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: Eq.line
        })]
      })
    }

    function Um(qq) {
      let {
        fish: Eq,
        letGoShown: gq
      } = qq;
      const {
        t: Yq
      } = (0, nl.v)();
      return (0, il.jsxs)("li", {
        className: Pl()("SkyblockReachLogCard", Eq.caught ? "Caught" : "Unknown", Eq.marks >= 3 && "GoldCard", Eq.fresh && "Fresh", Eq.visitor && "Visitor"),
        children: [Eq.visitor && (0, il.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: Yq("skyblockGame:reachLogVisitor")
        }), Eq.fresh && Array.from({
          length: 4
        }, ((qq, Eq) => (0, il.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, Eq))), (0, il.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [Eq.halo && (0, il.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: Yq("skyblockGame:reachLogHaloTitle")
          }), (0, il.jsx)(rl.e, {
            itemName: Eq.itemName,
            amount: 0
          }), Eq.glimmer && (0, il.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: Yq("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, il.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: Eq.name
        }), (0, il.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: Eq.chance
        }), (0, il.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: Eq.best
        }), (0, il.jsx)(Jm, {
          fish: Eq,
          letGoShown: gq
        })]
      })
    }

    function Fm(qq) {
      let {
        page: Eq,
        letGoShown: gq,
        hiddenWaters: Yq
      } = qq;
      const {
        t: lq
      } = (0, nl.v)();
      return Eq.awake ? (0, il.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: Eq.fish.map((qq => (0, il.jsx)(Um, {
          fish: qq,
          letGoShown: gq
        }, qq.itemName)))
      }) : (0, il.jsxs)(il.Fragment, {
        children: [(0, il.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: lq("skyblockGame:reachLogAsleep")
        }), (0, il.jsx)(zm, {
          view: Yq,
          island: Eq.id
        })]
      })
    }

    function sm(qq) {
      var Eq, gq;
      let {
        controller: Yq,
        regulars: lq,
        hiddenWaters: Oq
      } = qq;
      const mq = (0, bl.h)(bY, Yq.getSnapshot()),
        xq = function(qq) {
          return (0, bl.h)(Ol, qq.getSnapshot())
        }(Oq),
        Aq = (0, bl.h)(ql, lq.getSnapshot()),
        {
          t: cq
        } = (0, nl.v)(),
        uq = kl();
      if (!mq.enabled) return null;
      const Bq = null !== (Eq = mq.pages.find((qq => qq.id === mq.selected))) && void 0 !== Eq ? Eq : null;
      return (0, il.jsx)(Gl.c, {
        show: mq.open,
        close: Yq.dismiss,
        togglePointerLock: !1,
        className: Pl()("SkyblockSkillsOverlay", Aq.open && "SkyblockReachLogUnderLedger"),
        children: (0, il.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: uq,
          onKeyDown: Jl,
          children: [(0, il.jsx)(fm, {
            island: null !== (gq = null === Bq || void 0 === Bq ? void 0 : Bq.id) && void 0 !== gq ? gq : null
          }), (0, il.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, il.jsxs)("div", {
              children: [(0, il.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: cq("skyblockGame:reachLogTitle")
              }), (0, il.jsx)("p", {
                children: cq("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, il.jsx)(Tm, {
              view: xq
            }), (0, il.jsx)(Ll.m, {
              padIgnore: !0,
              onClick: Yq.dismiss
            })]
          }), (0, il.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: mq.pages.map((qq => {
              const Eq = qq.id === mq.selected,
                gq = qq.fish.some((qq => qq.fresh));
              return (0, il.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": Eq,
                "data-pad-tab": !0,
                "data-pad-selected": Eq ? "true" : void 0,
                className: Pl()("SkyblockReachLogTab", `Island-${qq.id}`, Eq && "Selected", !qq.awake && "Asleep", qq.gold && "GoldPage", gq && "HasNews"),
                onClick: () => {
                  Yq.selectPage(qq.id)
                },
                children: [(0, il.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: qq.name
                }), qq.awake && (0, il.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: cq("skyblockGame:reachLogCaughtCount", {
                    caught: qq.caught,
                    total: qq.total
                  })
                })]
              }, qq.id)
            }))
          }), (0, il.jsxs)("div", {
            className: Pl()("SkyblockReachLogPage", null !== Bq && `Island-${Bq.id}`),
            role: "tabpanel",
            children: [null !== Bq && (0, il.jsx)(Fm, {
              page: Bq,
              letGoShown: mq.letGoShown,
              hiddenWaters: xq
            }), !0 === (null === Bq || void 0 === Bq ? void 0 : Bq.awake) && null !== Bq.returner && (0, il.jsx)(Rm, {
              returner: Bq.returner
            }), !0 === (null === Bq || void 0 === Bq ? void 0 : Bq.awake) && (0, il.jsx)(hm, {
              controller: lq,
              island: Bq.id
            })]
          }), (0, il.jsx)("footer", {
            className: Pl()("SkyblockReachLogFooter", null !== Bq && `Island-${Bq.id}`, !0 === (null === Bq || void 0 === Bq ? void 0 : Bq.gold) && "GoldPage"),
            children: !0 === (null === Bq || void 0 === Bq ? void 0 : Bq.gold) ? (0, il.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: cq("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, il.jsxs)(il.Fragment, {
              children: [(0, il.jsx)(km, {
                letGoShown: mq.letGoShown,
                haloShown: !0 === (null === Bq || void 0 === Bq ? void 0 : Bq.fish.some((qq => qq.halo)))
              }), (0, il.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: cq("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var Xm = gq(4648);

    function wm(qq) {
      let {
        conversation: Eq,
        completedLabel: gq
      } = qq;
      return (0, il.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, il.jsxs)("header", {
          children: [(0, il.jsx)("h3", {
            children: Eq.questName
          }), Eq.completed && (0, il.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: gq
          })]
        }), Eq.lines.map((qq => (0, il.jsx)(Xm.e, {
          display: qq.display
        }, qq.key)))]
      })
    }

    function Km(qq) {
      let {
        controller: Eq
      } = qq;
      const {
        t: gq
      } = (0, nl.v)(), Yq = (0, bl.h)(xl, Eq.getSnapshot()), lq = kl();
      if (!Yq.enabled) return null;
      const Oq = !Yq.loading && 0 === Yq.conversations.length;
      return (0, il.jsx)(Gl.c, {
        show: Yq.open,
        close: Eq.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, il.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: lq,
          onKeyDown: Jl,
          children: [(0, il.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, il.jsxs)("div", {
              children: [(0, il.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: gq("skyblockDialogue:title")
              }), (0, il.jsx)("p", {
                children: gq("skyblockDialogue:intro")
              })]
            }), (0, il.jsx)(Ll.m, {
              padIgnore: !0,
              onClick: Eq.dismiss
            })]
          }), (0, il.jsxs)("div", {
            className: Pl()("SkyblockDialogueBody", {
              SingleColumn: null !== Yq.questFocus || 0 === Yq.characters.length
            }),
            children: [null === Yq.questFocus && Yq.characters.length > 0 && (0, il.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: Yq.characters.map((qq => (0, il.jsx)(Ll.g, {
                className: Pl()("SkyblockDialogueCharacter", {
                  Selected: qq.selected
                }),
                onClick: () => {
                  Eq.selectCharacter(qq.id)
                },
                children: (0, il.jsx)(vl.c, {
                  text: qq.styling
                })
              }, qq.id)))
            }), (0, il.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== Yq.questFocus && (0, il.jsx)(Ll.g, {
                className: "SkyblockDialogueBack",
                onClick: Eq.showCharacters,
                children: gq("skyblockDialogue:allCharacters")
              }), Yq.loading && (0, il.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: gq("skyblockDialogue:loading")
              }), Oq && (0, il.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: gq(null === Yq.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), Yq.conversations.map((qq => (0, il.jsx)(wm, {
                conversation: qq,
                completedLabel: Yq.completedLabel
              }, qq.questId)))]
            })]
          })]
        })
      })
    }

    function Cm(qq) {
      let {
        controller: Eq
      } = qq;
      const gq = (0, bl.h)(Wl, Eq.getSnapshot()),
        {
          t: Yq
        } = (0, nl.v)(),
        lq = kl();
      return gq.enabled ? (0, il.jsx)(Gl.c, {
        show: gq.open,
        close: Eq.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, il.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: lq,
          onKeyDown: Jl,
          children: [(0, il.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, il.jsxs)("div", {
              children: [(0, il.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: Yq("skyblockGame:autographBook")
              }), (0, il.jsx)("p", {
                children: Yq("skyblockGame:autographBookIntro")
              })]
            }), (0, il.jsx)(Ll.m, {
              padIgnore: !0,
              onClick: Eq.dismiss
            })]
          }), (0, il.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, il.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, il.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, il.jsx)("strong", {
                  children: gq.total
                }), (0, il.jsx)("span", {
                  children: Yq("skyblockGame:autographTotal")
                })]
              }), (0, il.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, il.jsx)("strong", {
                  children: gq.rankTotal
                }), (0, il.jsx)("span", {
                  children: Yq("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === gq.entries.length ? (0, il.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: Yq("skyblockGame:autographBookEmpty")
            }) : (0, il.jsx)("ul", {
              className: "SkyblockAutographList",
              children: gq.entries.map((qq => (0, il.jsxs)("li", {
                className: Pl()("SkyblockAutograph", {
                  Ranked: null !== qq.rank
                }),
                style: null === qq.rank ? void 0 : {
                  color: qq.rank.colour
                },
                children: [null !== qq.rank && (0, il.jsx)(WO.d, {
                  className: "SkyblockAutographRankIcon",
                  name: qq.rank.icon,
                  kit: (0, WO.h)(qq.rank.icon)
                }), (0, il.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, il.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: qq.name
                  }), (0, il.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== qq.rank && (0, il.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: qq.rank.label
                    }), (0, il.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: qq.signedOn
                    })]
                  })]
                })]
              }, qq.key)))
            })]
          })]
        })
      }) : null
    }
    const Im = (0, vq.memo)((function(qq) {
        let {
          controller: Eq
        } = qq;
        return (0, il.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: Eq.display.mountWaypoint,
          children: [(0, il.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, il.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, il.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, il.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, il.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, il.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      em = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function Dm(qq) {
      return "next" === qq.phase ? "\u2192" : em[qq.kind]
    }
    const qx = (0, vq.memo)((function(qq) {
      let {
        controller: Eq,
        display: gq
      } = qq;
      const Yq = (0, bl.h)(ug, Eq.getNotificationSnapshot()),
        [lq, Oq] = (0, vq.useState)(!1);
      return (0, bl.f)("qteStateUpdated", (qq => {
        Oq(qq.isActive)
      })), (0, il.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (lq ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [Yq && (0, il.jsxs)("div", {
          className: `SkyblockQuestNotification ${Yq.kind} ${Yq.phase}`,
          style: {
            "--quest-notification-duration": `${Yq.durationMs}ms`,
            ...Yq.accent && {
              "--quest-notification-accent": Yq.accent
            }
          },
          children: [(0, il.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (Yq.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, il.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: Dm(Yq)
            }), Yq.iconItem && (0, il.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, il.jsx)(rl.e, {
                itemName: Yq.iconItem,
                amount: 0
              })
            })]
          }), (0, il.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, il.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: Yq.title
            }), (0, il.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, il.jsx)(OO.e, {
                text: Yq.name
              })
            }), Yq.description && (0, il.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, il.jsx)(OO.e, {
                text: Yq.description
              })
            }), Yq.reward && (0, il.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, il.jsx)(OO.e, {
                text: Yq.reward
              })
            })]
          })]
        }, Yq.token), (null === Yq || void 0 === Yq ? void 0 : Yq.waypointNameKey) && (0, il.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": Yq.waypointNameKey,
          "data-notification-token": Yq.token,
          ref: gq.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${Yq.token}`)]
      })
    }));

    function Ex(qq) {
      const Eq = parseInt(qq.replace("#", ""), 16);
      return `${Eq>>16&255}, ${Eq>>8&255}, ${255&Eq}`
    }
    const gx = (0, vq.memo)((function(qq) {
      let {
        controller: Eq
      } = qq;
      const {
        t: gq
      } = (0, nl.v)(), Yq = (0, bl.h)(pg, Eq.getSnapshot());
      if (!Yq) return null;
      const lq = "arrival" === Yq.phase;
      return (0, il.jsxs)("div", {
        className: Pl()("SkyblockPortalTransit", {
          Departure: !lq,
          Arrival: lq
        }),
        style: {
          "--portal-rgb": Ex(Yq.colour),
          "--portal-duration": `${Yq.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, il.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, il.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            Eq.finishArrival(Yq.token)
          }
        }), (0, il.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, il.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !lq && (0, il.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: gq("skyblockGame:portalTransitHeading")
          }), (0, il.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: gq(Yq.zoneNameKey)
          })]
        })]
      }, Yq.token)
    }));

    function Yx() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function lx() {
      const qq = document.querySelector(".SkyblockHudCoins"),
        Eq = null === qq || void 0 === qq ? void 0 : qq.getBoundingClientRect();
      return Eq && Eq.width > 0 ? {
        x: Eq.left + Math.min(Eq.width, 24) / 2,
        y: Eq.top + Eq.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function Ox(qq) {
      return {
        x: qq.left + qq.width / 2,
        y: qq.top + qq.height / 2
      }
    }

    function mx() {
      var qq;
      const Eq = null === (qq = document.querySelector(".HotBar")) || void 0 === qq ? void 0 : qq.getBoundingClientRect();
      return Eq && Eq.width > 0 ? Ox(Eq) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function xx(qq) {
      let {
        items: Eq,
        origins: gq,
        target: Yq
      } = qq;
      return (0, il.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: Eq.map(((qq, Eq) => {
          const lq = gq[Eq];
          return (0, il.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${lq.x}px`,
              top: `${lq.y}px`,
              "--item-dx": Yq.x - lq.x + "px",
              "--item-dy": Yq.y - lq.y + "px",
              "--item-delay": 2e3 + 160 * Eq + "ms",
              "--item-flight": "700ms"
            },
            children: (0, il.jsx)(rl.e, {
              itemName: qq.dailyRewardItemName,
              amount: 0
            })
          }, qq.dailyRewardItemName)
        }))
      })
    }

    function Ax(qq, Eq) {
      const gq = -Math.PI / 2 + 1.25 * (qq / (Eq - 1) * 2 - 1),
        Yq = 70 + qq % 3 * 22;
      return {
        x: Math.cos(gq) * Yq,
        y: Math.sin(gq) * Yq * .7
      }
    }

    function cx(qq) {
      let {
        origin: Eq,
        target: gq,
        count: Yq
      } = qq;
      const lq = [];
      for (let Oq = 0; Oq < Yq; Oq++) {
        const qq = Ax(Oq, Yq);
        lq.push((0, il.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${Eq.x}px`,
            top: `${Eq.y}px`,
            "--coin-bx": `${qq.x}px`,
            "--coin-by": `${qq.y}px`,
            "--coin-dx": gq.x - Eq.x + "px",
            "--coin-dy": gq.y - Eq.y + "px",
            "--coin-delay": `${Ug(Oq,Yq)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, il.jsx)(rl.e, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, Oq))
      }
      return (0, il.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: lq
      })
    }

    function ux(qq) {
      let {
        day: Eq
      } = qq;
      const gq = hq[Eq - 1];
      return (0, il.jsxs)(il.Fragment, {
        children: [(0, il.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, il.jsx)(rl.e, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, hl.d)(gq.dailyRewardCoins)]
        }), gq.dailyRewardItems.map((qq => (0, il.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, il.jsx)(rl.e, {
            itemName: qq.dailyRewardItemName,
            amount: 0
          }), "\xd7", qq.dailyRewardItemAmount]
        }, qq.dailyRewardItemName)))]
      })
    }

    function Bx(qq) {
      let {
        day: Eq
      } = qq;
      const gq = bq(Eq);
      return (0, il.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: hq.map(((qq, Yq) => {
          const lq = Yq + 1;
          return (0, il.jsxs)("li", {
            className: Pl()("SkyblockDailyRewardTile", {
              Claimed: lq < Eq && lq !== gq,
              Today: lq === Eq,
              Tomorrow: lq === gq,
              Jackpot: lq === nq
            }),
            children: [(0, il.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: lq
            }), (0, il.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, il.jsx)(rl.e, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, hl.d)(qq.dailyRewardCoins)]
            }), qq.dailyRewardItems.map((qq => (0, il.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, il.jsx)(rl.e, {
                itemName: qq.dailyRewardItemName,
                amount: 0
              }), "\xd7", qq.dailyRewardItemAmount]
            }, qq.dailyRewardItemName)))]
          }, lq)
        }))
      })
    }

    function Wx(qq) {
      let {
        view: Eq
      } = qq;
      const {
        t: gq
      } = (0, nl.v)(), Yq = (0, vq.useRef)(null), lq = (0, vq.useRef)(null), [Oq, mq] = (0, vq.useState)(null);
      (0, vq.useLayoutEffect)((() => {
        var qq;
        const Eq = null === (qq = Yq.current) || void 0 === qq ? void 0 : qq.getBoundingClientRect();
        if (Eq) {
          var gq, Oq;
          const qq = Array.from(null !== (gq = null === (Oq = lq.current) || void 0 === Oq ? void 0 : Oq.children) && void 0 !== gq ? gq : [], (qq => Ox(qq.getBoundingClientRect())));
          mq({
            origin: Ox(Eq),
            target: lx(),
            itemOrigins: qq,
            itemTarget: mx()
          })
        }
      }), []);
      const xq = bq(Eq.day),
        Aq = function(qq, Eq) {
          const [gq, Yq] = (0, vq.useState)((() => Yx() ? qq : 0));
          return (0, vq.useEffect)((() => {
            if (Yx()) return;
            const gq = performance.now();
            let lq = 0;
            const Oq = mq => {
              const xq = Math.min(Math.max((mq - gq) / Eq, 0), 1);
              Yq(Math.round(qq * (1 - (1 - xq) ** 3))), xq < 1 && (lq = requestAnimationFrame(Oq))
            };
            return lq = requestAnimationFrame(Oq), () => {
              cancelAnimationFrame(lq)
            }
          }), [qq, Eq]), gq
        }(Eq.coins, 450);
      return (0, il.jsxs)("div", {
        className: Pl()("SkyblockDailyReward", {
          Jackpot: Eq.day === nq
        }),
        style: {
          "--daily-duration": `${Eq.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, il.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, il.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, il.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, il.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: gq("skyblockGame:dailyRewardTitle")
            }), (0, il.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: gq("skyblockGame:dailyRewardDay", {
                day: String(Eq.day)
              })
            })]
          }), (0, il.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: Yq,
            children: [(0, il.jsx)(rl.e, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, il.jsxs)("span", {
              children: ["+", (0, hl.d)(Aq)]
            })]
          }), Eq.items.length > 0 && (0, il.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: lq,
            children: Eq.items.map((qq => (0, il.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, il.jsx)(rl.e, {
                itemName: qq.dailyRewardItemName,
                amount: 0
              }), "\xd7", qq.dailyRewardItemAmount]
            }, qq.dailyRewardItemName)))
          }), (0, il.jsx)(Bx, {
            day: Eq.day
          }), (0, il.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [gq("skyblockGame:dailyRewardComeBack"), (0, il.jsx)(ux, {
              day: xq
            })]
          })]
        }), null !== Oq && (0, il.jsx)(cx, {
          origin: Oq.origin,
          target: Oq.target,
          count: Eq.flyingCoins
        }), null !== Oq && Oq.itemOrigins.length === Eq.items.length && (0, il.jsx)(xx, {
          items: Eq.items,
          origins: Oq.itemOrigins,
          target: Oq.itemTarget
        })]
      })
    }
    const Nx = (0, vq.memo)((function(qq) {
        let {
          controller: Eq
        } = qq;
        const gq = (0, bl.h)(Jg, Eq.getSnapshot());
        return gq ? (0, il.jsx)(Wx, {
          view: gq
        }, gq.token) : null
      })),
      ax = "Gold Coin";

    function Vx(qq) {
      return 650 + 220 * qq
    }

    function dx(qq) {
      return {
        "--letter-delay": `${Vx(qq)}ms`,
        "--letter-land": `${Vx(qq)+300}ms`
      }
    }

    function jx(qq) {
      let {
        letterCount: Eq
      } = qq;
      return (0, il.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, il.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, il.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, il.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: Eq
        }, ((qq, Eq) => (0, il.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: dx(Eq),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, Eq)))]
      })
    }

    function Hx(qq) {
      var Eq, gq, Yq;
      let {
        letter: lq,
        index: Oq
      } = qq;
      const {
        t: mq
      } = (0, nl.v)(), xq = null !== (Eq = null === (gq = lq.items[0]) || void 0 === gq ? void 0 : gq.itemName) && void 0 !== Eq ? Eq : ax;
      return (0, il.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: dx(Oq),
        children: [(0, il.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, il.jsx)(rl.e, {
            itemName: xq,
            amount: 0
          })
        }), (0, il.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: mq(lq.reasonKey, null !== (Yq = lq.reasonParams) && void 0 !== Yq ? Yq : void 0)
        }), (0, il.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [lq.coins > 0 && (0, il.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, il.jsx)(rl.e, {
              itemName: ax,
              amount: 0
            }), "+", (0, hl.d)(lq.coins)]
          }), lq.items.map(((qq, Eq) => (0, il.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, il.jsx)(rl.e, {
              itemName: qq.itemName,
              amount: 0
            }), qq.label, " \xd7", qq.amount]
          }, Eq)))]
        })]
      })
    }

    function ox(qq) {
      let {
        view: Eq
      } = qq;
      const {
        t: gq
      } = (0, nl.v)();
      return (0, il.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${Eq.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${Vx(Eq.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, il.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, il.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, il.jsx)(jx, {
              letterCount: Eq.letters.length
            }), (0, il.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: gq("skyblockGame:mailboxTitle")
            })]
          }), (0, il.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: Eq.letters.map(((qq, Eq) => (0, il.jsx)(Hx, {
              letter: qq,
              index: Eq
            }, Eq)))
          }), Eq.more > 0 && (0, il.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: gq("skyblockGame:mailboxMore", {
              count: String(Eq.more)
            })
          })]
        })
      })
    }
    const Px = (0, vq.memo)((function(qq) {
      let {
        controller: Eq
      } = qq;
      const gq = (0, bl.h)(sg, Eq.getSnapshot());
      return gq ? (0, il.jsx)(ox, {
        view: gq
      }, gq.token) : null
    }));

    function Qx(qq) {
      let {
        controller: Eq
      } = qq;
      const {
        t: gq
      } = (0, nl.v)(), Yq = (0, bl.h)(pY, Eq.getSnapshot());
      if (null === Yq) return null;
      const lq = Yq.fullSet ? "empty" === Yq.fuelState ? {
        text: gq("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: gq("skyblockGame:magmawardHudFullSet", {
          worn: String(Yq.wornCount)
        }),
        tone: "partial"
      };
      return (0, il.jsx)(yl.g, {
        placement: "statBars",
        children: (0, il.jsxs)("div", {
          className: Pl()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${Yq.fuelState}`, {
            "SkyblockMagmawardHud-partial": !Yq.fullSet,
            "SkyblockMagmawardHud-armed": Yq.fullSet && "empty" !== Yq.fuelState
          }),
          children: [null !== Yq.flare && (0, il.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${Yq.flare}`
          }, `flare:${Yq.flareToken}`), (0, il.jsx)("div", {
            className: Pl()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: Yq.setLit
            }),
            children: Yq.pieces.map(((qq, Eq) => (0, il.jsx)("div", {
              className: Pl()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: qq.worn,
                SkyblockMagmawardPieceJustWorn: qq.justWorn
              }),
              children: (0, il.jsx)(rl.e, {
                itemName: qq.itemName,
                amount: 0
              })
            }, `${Eq}:${qq.wornToken}`)))
          }, `pieces:${Yq.setLitToken}`), (0, il.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, il.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, il.jsxs)("div", {
              className: Pl()("SkyblockMagmawardFuelCounter", Yq.pulse && `SkyblockMagmawardFuelCounter-${Yq.pulse}`),
              children: [(0, il.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, il.jsx)(rl.e, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, il.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: Yq.fuel
              })]
            }, `counter:${Yq.pulseToken}`), "burn" === Yq.pulse && (0, il.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${Yq.pulseToken}`)]
          }), lq && (0, il.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${lq.tone} SmallTextBold`,
            children: lq.text
          })]
        })
      })
    }

    function yx(qq) {
      let {
        controller: Eq
      } = qq;
      const {
        t: gq,
        selectedLanguage: Yq
      } = (0, nl.v)(), lq = (0, bl.h)(LY, Eq.getSnapshot());
      return null === lq ? null : (0, il.jsx)(yl.g, {
        placement: "statBars",
        children: (0, il.jsxs)("div", {
          className: Pl()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: lq.inRange
          }),
          style: {
            "--glowtide-colour": lq.colour
          },
          "aria-label": gq("skyblockGame:glowtideChipLabel"),
          children: [(0, il.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), lq.inRange ? (0, il.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: gq("skyblockGame:glowtideChipInRange")
          }, `call:${lq.inRangeToken}`) : (0, il.jsxs)(il.Fragment, {
            children: [(0, il.jsx)("div", {
              ref: Eq.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, il.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: gq("skyblockGame:waypointDistance", {
                distance: yq(lq.distance, Yq.code)
              })
            })]
          })]
        })
      })
    }

    function tx(qq) {
      let {
        controller: Eq
      } = qq;
      const {
        t: gq
      } = (0, nl.v)(), Yq = (0, bl.h)(kY, Eq.getSnapshot());
      return null === Yq ? null : (0, il.jsx)(yl.g, {
        placement: "statBars",
        children: (0, il.jsxs)("div", {
          className: Pl()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: Yq.full
          }),
          "aria-label": gq("skyblockGame:glowMeterLabel", {
            fill: String(Yq.fill),
            WB: String(Yq.WB)
          }),
          children: [Yq.burst && (0, il.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${Yq.burstToken}`), (0, il.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, il.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${Yq.ratio})`
              }
            }), Yq.gained && (0, il.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${Yq.gainToken}`), Yq.full && Array.from({
              length: 5
            }, ((qq, Eq) => (0, il.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, Eq)))]
          }), Yq.full && Yq.rares.map((qq => (0, il.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, il.jsx)(rl.e, {
              itemName: qq,
              amount: 0
            })
          }, qq))), Yq.ready && (0, il.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, il.jsx)("span", {
              children: gq("skyblockGame:glowMeterReady")
            })
          }, `ready:${Yq.fullToken}`)]
        })
      })
    }

    function rx(qq) {
      let {
        controller: Eq
      } = qq;
      const {
        t: gq
      } = (0, nl.v)(), Yq = (0, bl.h)(UY, Eq.getSnapshot());
      if (null === Yq) return null;
      const lq = "waiting" === Yq.phase,
        Oq = {
          animationDuration: `${Yq.waitMs}ms`,
          animationDelay: -Yq.elapsedMs + "ms"
        },
        mq = lq ? void 0 : {
          animationDuration: `${Yq.waitMs}ms`
        };
      return (0, il.jsxs)("div", {
        className: lq ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [lq && (0, il.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((qq, Eq) => (0, il.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, Eq))), (0, il.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: Oq
          }), (0, il.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, il.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, il.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: Oq
            })]
          }), (0, il.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, il.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: mq,
          children: gq(Yq.line)
        }, Yq.lineIndex)]
      }, Yq.token)
    }

    function vx(qq) {
      let {
        chart: Eq,
        showHere: gq,
        className: Yq
      } = qq;
      return (0, il.jsx)("div", {
        className: Pl()("SkyblockTideChartGrid", Yq, null !== Eq.pictureName && "Complete"),
        "aria-hidden": "true",
        children: Eq.cells.map(((qq, Yq) => {
          const lq = 0 !== (Eq.pulseCells & 1 << Yq),
            Oq = Eq.castCell === Yq;
          return (0, il.jsx)("span", {
            className: Pl()("SkyblockTideChartCell", `Cell-${qq}`, lq && "Pulse", Oq && "Cast", gq && Eq.hereCell === Yq && "Here")
          }, `${Yq}:${lq?`p${Eq.pulseToken}`:""}:${Oq?`c${Eq.castToken}`:""}`)
        }))
      })
    }

    function hx(qq) {
      let {
        controller: Eq
      } = qq;
      const gq = (0, bl.h)(sY, Eq.getSnapshot()),
        {
          t: Yq
        } = (0, nl.v)(),
        lq = gq.chip;
      if (!gq.enabled || null === lq) return null;
      const Oq = Yq("skyblockGame:tideChartsChipLabel", {
        island: lq.islandName,
        lit: String(lq.lit),
        ink: String(lq.ink)
      });
      return (0, il.jsx)(yl.g, {
        placement: "statBars",
        children: (0, il.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: Pl()("SkyblockTideChartsChip", gq.open && "Open", null !== lq.pictureName && "Complete"),
          "aria-label": Oq,
          title: Oq,
          onMouseDown: qq => {
            qq.preventDefault()
          },
          onClick: Eq.toggle,
          children: [(0, il.jsx)(vx, {
            chart: lq,
            showHere: !1,
            className: "Mini"
          }), (0, il.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [lq.lit, "/", lq.ink]
          })]
        })
      })
    }

    function nx(qq) {
      let {
        controller: Eq
      } = qq;
      const gq = (0, bl.h)(sY, Eq.getSnapshot()),
        {
          t: Yq
        } = (0, nl.v)(),
        lq = kl(),
        Oq = gq.card;
      return gq.enabled && null !== Oq ? (0, il.jsx)(Gl.c, {
        show: gq.open,
        close: Eq.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, il.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: lq,
          onKeyDown: Jl,
          children: [(0, il.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, il.jsxs)("div", {
              children: [(0, il.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: Yq("skyblockGame:tideChartsTitle")
              }), (0, il.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: Yq("skyblockGame:tideChartsIntro")
              })]
            }), (0, il.jsx)(Ll.m, {
              padIgnore: !0,
              ariaLabel: Yq("skyblockGame:tideChartsClose"),
              onClick: Eq.dismiss
            })]
          }), gq.tabs.length > 1 && (0, il.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": Yq("skyblockGame:tideChartsIslands"),
            children: gq.tabs.map((qq => (0, il.jsx)("button", {
              type: "button",
              className: Pl()("SkyblockTideChartsTab", qq.selected && "Selected"),
              "aria-pressed": qq.selected,
              onClick: () => {
                Eq.zW(qq.island)
              },
              children: qq.name
            }, qq.island)))
          }), (0, il.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, il.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": Oq.gridLabel,
              children: (0, il.jsx)(vx, {
                chart: Oq,
                showHere: !0,
                className: "Large"
              })
            }), (0, il.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, il.jsx)("h3", {
                children: Oq.islandName
              }), (0, il.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: Oq.litText
              }), null === Oq.pictureName ? (0, il.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: Yq("skyblockGame:tideChartsPictureHidden")
              }) : (0, il.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: Yq("skyblockGame:tideChartsPictureRevealed", {
                  picture: Oq.pictureName
                })
              }, Oq.pictureName), (0, il.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, il.jsxs)("li", {
                  children: [(0, il.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), Yq("skyblockGame:tideChartsLegendLit")]
                }), (0, il.jsxs)("li", {
                  children: [(0, il.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), Yq("skyblockGame:tideChartsLegendClear")]
                }), null !== Oq.hereCell && (0, il.jsxs)("li", {
                  children: [(0, il.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), Yq("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, il.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, il.jsx)("span", {
                  children: gq.turnsText
                }), (0, il.jsx)("span", {
                  children: gq.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function bx(qq) {
      var Eq;
      let {
        controller: gq
      } = qq;
      const {
        selectedLanguage: Yq
      } = (0, nl.v)(), lq = Yq.code;
      (0, vq.useEffect)((() => {
        gq.setTranslator(((qq, Eq) => (0, nl.s)(lq, qq, Eq)), lq, ((qq, Eq) => (0, nl.n)(lq, qq, Eq)))
      }), [gq, lq]);
      const Oq = (0, bl.h)(Wq, gq.map.getSnapshot()),
        {
          openInGameMenuName: mq
        } = (0, Ql.j)(["openInGameMenuName"]);
      return (0, il.jsxs)(il.Fragment, {
        children: [(0, il.jsx)(qx, {
          controller: gq.quests,
          display: gq.navigation.display
        }), Oq.enabled && !mq && (0, il.jsx)(gO, {
          controller: gq.navigation
        }), (0, il.jsx)(Zl, {
          controller: gq,
          minimap: Oq.enabled && (null === (Eq = Oq.presentation) || void 0 === Eq ? void 0 : Eq.minimap) && (0, il.jsx)(EO, {
            view: Oq.presentation.minimap,
            navigation: gq.navigation,
            controller: gq.map
          }),
          children: (0, il.jsx)(BO, {
            controller: gq.quests,
            surface: "hud"
          })
        }), (0, il.jsx)(Im, {
          controller: gq.navigation
        }), (0, il.jsx)(gx, {
          controller: gq.portalTransit
        }), (0, il.jsx)(Nx, {
          controller: gq.dailyReward
        }), (0, il.jsx)(Px, {
          controller: gq.mailbox
        }), (0, il.jsx)(Qx, {
          controller: gq.magmaward
        }), (0, il.jsx)(yx, {
          controller: gq.glowtide
        }), (0, il.jsx)(Bm, {
          controller: gq.passage
        }), (0, il.jsx)(hx, {
          controller: gq.tideCharts
        }), (0, il.jsx)(tx, {
          controller: gq.glowMeter
        }), (0, il.jsx)(ym, {
          controller: gq.reachLog
        }), (0, il.jsx)(rx, {
          controller: gq.hushWait
        }), (0, il.jsx)(Hm, {
          controller: gq.lampLight
        }), (0, il.jsx)(YO, {
          controller: gq.skills,
          surface: "hud"
        })]
      })
    }

    function ix(qq) {
      let {
        controller: Eq
      } = qq;
      return (0, il.jsxs)(il.Fragment, {
        children: [(0, il.jsx)(qO, {
          controller: Eq.map,
          navigation: Eq.navigation
        }), (0, il.jsx)(YO, {
          controller: Eq.skills,
          surface: "menu"
        }), (0, il.jsx)(BO, {
          controller: Eq.quests,
          surface: "menu"
        }), (0, il.jsx)(sO, {
          controller: Eq.dungeons
        }), (0, il.jsx)(KO, {
          controller: Eq.collections
        }), (0, il.jsx)(eO, {
          controller: Eq.questGraph
        }), (0, il.jsx)(Ym, {
          controller: Eq.forge
        }), (0, il.jsx)(cm, {
          controller: Eq.smuggler
        }), (0, il.jsx)(Pm, {
          controller: Eq.keepersChair,
          lampLight: Eq.lampLight
        }), (0, il.jsx)(sm, {
          controller: Eq.reachLog,
          regulars: Eq.regulars,
          hiddenWaters: Eq.hiddenWaters
        }), (0, il.jsx)(nm, {
          controller: Eq.regulars
        }), (0, il.jsx)(Nm, {
          controller: Eq.passage
        }), (0, il.jsx)(nx, {
          controller: Eq.tideCharts
        }), (0, il.jsx)(Km, {
          controller: Eq.dialogue
        }), (0, il.jsx)(Cm, {
          controller: Eq.autographs
        })]
      })
    }
    var Zx = gq(36796);
    const fx = qY + xY;

    function Mx(qq, Eq, gq, Yq, lq) {
      const Oq = [],
        mq = [],
        xq = gq => {
          const Yq = qq.playSound(Eq, gq.sound, gq.volume, gq.rate);
          Yq && (mq.push(Yq), void 0 !== gq.cutAfter && Oq.push(setTimeout((() => {
            Yq.fade(Yq.getVolume(), 0, 300)
          }), gq.cutAfter)))
        };
      for (const Aq of function(qq, Eq) {
          const gq = [{
            sound: "rpgKnifeSlice1",
            beat: qY,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: qY,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: qY,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: qY,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: qY,
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
            sound: (0, Zx.c)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: fx + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, Zx.c)("bigDrumSwish"),
            beat: fx + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: fx + 60,
            lead: 180,
            volume: .5 + .06 * qq,
            rate: .82 + .07 * qq
          }];
          return qq >= 4 && gq.push({
            sound: "exp_levelup",
            beat: fx + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), Eq && gq.push({
            sound: "trumpetFlare",
            beat: fx + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), gq.push({
            sound: "harp_pling",
            beat: EY,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), gq
        }(gq, Yq)) lq ? Oq.push(setTimeout((() => {
        xq(Aq)
      }), Math.max(0, Aq.beat - Aq.lead / Aq.rate))) : Aq.beat !== qY && "magicAccent2" !== Aq.sound && "trumpetFlare" !== Aq.sound || xq(Aq);
      return () => {
        for (const qq of Oq) clearTimeout(qq);
        for (const qq of mq) qq.fade(qq.getVolume(), 0, 120)
      }
    }
    class Tx {
      constructor(qq) {
        this.deps = qq, this.pending = new Map, this.localHook = null
      }
      hookWaiting(qq, Eq) {
        this.pending.delete(qq);
        const gq = this.deps.now();
        if (null === Eq) {
          var Yq;
          if ((null === (Yq = this.localHook) || void 0 === Yq ? void 0 : Yq.hookId) === qq) {
            const qq = gq >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(qq)
          }
          return
        }
        const lq = gq + Eq;
        this.settle(qq, lq) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(qq, {
          untilMs: gq + 1e3,
          biteAtMs: lq
        }))
      }
      getLocalHook() {
        var qq, Eq;
        return null !== (qq = null === (Eq = this.localHook) || void 0 === Eq ? void 0 : Eq.hookId) && void 0 !== qq ? qq : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const qq = this.deps.now();
        for (const [Eq, {
            untilMs: gq,
            biteAtMs: Yq
          }] of this.pending)(this.settle(Eq, Yq) || qq > gq) && this.pending.delete(Eq)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(qq, Eq) {
        const gq = this.deps.getLineOwner(qq);
        if (null === gq) return !1;
        if (!this.deps.isLocalPlayer(gq)) return !0;
        if (this.localHook = {
            hookId: qq,
            biteAtMs: Eq
          }, !this.deps.isHushWaiting()) {
          const [Eq, gq] = this.deps.getHookPosition(qq);
          this.deps.onCastLanded(Eq, gq)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var zx = gq(4096);
    const Sx = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      px = {
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
    class Gx {
      constructor(qq) {
        this.deps = qq, this.tell = null
      }
      receiveTell(qq) {
        let {
          biteTellTier: Eq
        } = qq;
        this.tell = {
          tier: Eq,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(qq) {
        const Eq = this.tell;
        if (this.tell = null, !qq) return;
        const gq = null !== Eq && this.deps.now() - Eq.atMs <= 3e3 ? Eq.tier : 0;
        this.deps.vibrate(Sx[gq])
      }
      burstAtHook() {
        const qq = this.tell,
          Eq = this.deps.getLocalHookPosition();
        null === qq || qq.burst || null === Eq || (qq.burst = !0, this.deps.playParticles(function(qq, Eq) {
          let [gq, Yq, lq] = Eq;
          const {
            count: Oq,
            rise: mq,
            colour: xq
          } = px[qq], [Aq, cq, uq] = xq;
          return {
            texture: "glint",
            pos1: [gq - .3, Yq, lq - .3],
            pos2: [gq + .3, Yq + .2, lq + .3],
            dir1: [-.6, mq, -.6],
            dir2: [.6, 1.4 * mq, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: Oq,
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
              minColor: [Aq, cq, uq, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [Aq, cq, uq, 0],
              maxColor: [Aq, cq, uq, 0]
            }],
            blendMode: zx.h.Add,
            hideDist: 48
          }
        }(qq.tier, Eq)))
      }
    }
    var Lx = gq(1241),
      Jx = gq(1906),
      kx = gq(38);

    function Rx(qq, Eq) {
      return [{
        timeFraction: 0,
        minColor: [255 * qq[0], 255 * qq[1], 255 * qq[2], 1],
        maxColor: [255 * Eq[0], 255 * Eq[1], 255 * Eq[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const Ux = [0, 0, 0],
      Fx = {
        texture: "glint",
        mipmaps: !1,
        WB: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: Ux,
        dir2: Ux,
        blendMode: zx.h.OneOne
      },
      sx = {
        ...Fx,
        colorGradients: Rx([1, .88, .38], [1, .65, .15])
      },
      Xx = {
        ...Fx,
        colorGradients: Rx([.55, .95, 1], [.9, 1, 1])
      },
      wx = [.5, .5, .5],
      Kx = {
        texture: "glint",
        mipmaps: !1,
        WB: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: Rx([1, .12, .12], [1, .35, .2]),
        blendMode: zx.h.OneOne
      };
    class Cx {
      constructor() {
        this.drops = new Map
      }
      ga(qq, Eq) {
        if ("overflowFlash" === Eq.kind) {
          const [gq, Yq, lq] = Eq.position, Oq = qq.createParticles(Kx, {
            pos: [gq, Yq, lq],
            half: wx
          });
          return Oq.emit(18), void Oq.stop()
        }
        this.drops.has(Eq.itemId) || this.drops.set(Eq.itemId, {
          owner: Eq.owner,
          cosmetic: Eq.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      SB(qq) {
        if (0 === this.drops.size) return;
        const Eq = performance.now(),
          gq = qq.getCameraPosition();
        let Yq = 0;
        for (const Oq of this.drops.values()) null !== Oq.particles && Yq++;
        for (const [Oq, mq] of this.drops) {
          const xq = qq.getPositionView(Oq);
          if (null === xq) {
            var lq;
            if (mq.seen || Eq - mq.markedAt > 5e3) null !== mq.particles && Yq--, null === (lq = mq.particles) || void 0 === lq || lq.stop(), this.drops.delete(Oq);
            continue
          }
          mq.cosmetic || !qq.isLocalPlayer(mq.owner) || mq.pickupDelayCleared || (qq.clearPickupDelay(Oq), mq.pickupDelayCleared = !0);
          const Aq = mq.lastPosition,
            cq = mq.seen && (xq[0] - Aq[0]) ** 2 + (xq[1] - Aq[1]) ** 2 + (xq[2] - Aq[2]) ** 2 > 4e-4,
            uq = (xq[0] - gq[0]) ** 2 + (xq[1] - gq[1]) ** 2 + (xq[2] - gq[2]) ** 2 < 2025;
          mq.seen = !0, Aq[0] = xq[0], Aq[1] = xq[1], Aq[2] = xq[2], cq && (mq.lastMovingAt = Eq), null !== mq.particles && (!uq || Eq - mq.lastMovingAt > 500) && (mq.particles.stop(), mq.particles = null, Yq--), cq && uq && null === mq.particles && Yq < 32 && (mq.particles = qq.createParticles(mq.cosmetic ? Xx : sx, {
            pos: xq
          }), Yq++), null !== mq.particles && (mq.particles.moveTo(xq), mq.particles.setEmitRate(cq ? 12 : 0)), !cq && null === mq.particles && Eq - Math.max(mq.lastMovingAt, mq.markedAt) > 2e3 && this.drops.delete(Oq)
        }
      }
      dispose() {
        for (const Eq of this.drops.values()) {
          var qq;
          null === (qq = Eq.particles) || void 0 === qq || qq.stop()
        }
        this.drops.clear()
      }
    }
    var Ix = gq(190);
    const ex = Ix.c.UH * Ix.c.playerEyeToHeightRatio;
    class Dx {
      constructor(qq) {
        this.host = qq, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      ga(qq) {
        this.lava = qq, this.nextUpdateAt = 0
      }
      SB() {
        var qq;
        const Eq = this.host.now();
        if (Eq < this.nextUpdateAt) return;
        this.nextUpdateAt = Eq + 250;
        const gq = this.host.playerPosition(),
          Yq = gq && this.findNearest([gq[0], gq[1] + ex, gq[2]]);
        if (!Yq || Yq.distance >= 40) return void this.stop();
        const lq = .5 * Math.min(1, (40 - Yq.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(lq) : this.loop = this.host.play("lavaFlow", lq, Yq.position, 40 + ex, 9, !0), null === (qq = this.loop) || void 0 === qq || qq.setPosition(Yq.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var qq;
        null === (qq = this.loop) || void 0 === qq || qq.stop(), this.loop = null
      }
      findNearest(qq) {
        let Eq = -1,
          gq = 1 / 0;
        for (let Yq = 0; Yq < this.lava.length; Yq += 3) {
          const lq = this.lava[Yq] - qq[0],
            Oq = this.lava[Yq + 1] - qq[1],
            mq = this.lava[Yq + 2] - qq[2],
            xq = lq * lq + Oq * Oq + mq * mq;
          xq < gq && (gq = xq, Eq = Yq)
        }
        return Eq < 0 ? null : {
          position: [this.lava[Eq], this.lava[Eq + 1], this.lava[Eq + 2]],
          distance: Math.sqrt(gq)
        }
      }
    }
    var qA = gq(1893),
      EA = gq(38619);
    const gA = {
      "Grey Portal": "Gray"
    };
    for (const AA of lq.Tc) gA[`${AA} Portal`] = AA;
    const YA = Object.keys(gA),
      lA = Object.fromEntries(YA.map((qq => [qq, (0, lq.bb)(lq.M[`${(0,lq.ue)(gA[qq])}Team`])])));
    Object.fromEntries(YA.map((qq => [qq, lq.M[`${(0,lq.ue)(gA[qq])}UiText`]])));
    class OA {
      constructor(qq, Eq) {
        this.presentation = qq, this.portal = Eq, this.unlocked = void 0
      }
      ga(qq) {
        const Eq = !1 === this.unlocked && qq;
        this.unlocked = qq, this.SB();
        const {
          min: gq,
          max: Yq,
          unlockedBlock: lq
        } = this.portal;
        if (Eq && this.presentation.hasChunk(...gq)) {
          const [qq, Eq, Oq] = lA[lq];
          this.presentation.playParticles({
            pos1: [...gq],
            pos2: Yq.map((qq => qq + 1)),
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
              minColor: [qq, Eq, Oq, 1],
              maxColor: [Math.min(255, qq + 55), Math.min(255, Eq + 55), Math.min(255, Oq + 90), 1]
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
      SB() {
        var qq;
        const Eq = this.unlocked ? this.portal.unlockedBlock : null !== (qq = this.portal.lockedBlock) && void 0 !== qq ? qq : "Light Gray Portal",
          {
            min: gq,
            max: Yq
          } = this.portal;
        for (let lq = gq[0]; lq <= Yq[0]; lq++)
          for (let qq = gq[1]; qq <= Yq[1]; qq++)
            for (let Oq = gq[2]; Oq <= Yq[2]; Oq++) this.presentation.hasChunk(lq, qq, Oq) && this.presentation.Ay(lq, qq, Oq) !== Eq && this.presentation.xJ(lq, qq, Oq, Eq)
      }
    }
    const mA = {
        farming_1: {
          raises: qq => "NPC" === qq.type && "chef" === qq.variation,
          rise: .4
        },
        fishing_1: {
          raises: qq => "Draugr Warper" === qq.type,
          rise: .4
        }
      },
      xA = (qq, Eq, gq, Oq) => {
        let {
          localPlayerId: mq
        } = Oq;
        const xq = new Hl({
          translate: (qq, Eq) => (0, nl.s)(Lx.h.get().getCurrentLanguageCode(), qq, Eq),
          translateWithIcons: (qq, Eq) => (0, nl.n)(Lx.h.get().getCurrentLanguageCode(), qq, Eq),
          setMenuOpen: qq => {
            qq ? (0, Xq.m)() : (0, Xq.e)()
          },
          dismissMenu: Xq.h,
          publishSkills: qq => {
            wq.i.TV(Og, qq, !0)
          },
          publishQuests: qq => {
            wq.i.TV(cg, qq, !0)
          },
          publishQuestNotification: qq => {
            wq.i.TV(ug, qq, !0)
          },
          publishDungeons: qq => {
            wq.i.TV(Ng, qq, !0)
          },
          publishCollections: qq => {
            wq.i.TV(zg, qq, !0)
          },
          publishMap: qq => {
            wq.i.TV(Wq, qq, !0)
          },
          publishHud: qq => {
            wq.i.TV(Vl, qq, !0)
          },
          publishPortalTransit: qq => {
            wq.i.TV(pg, qq, !0)
          },
          isLoadingScreenUp: () => Ql.b.get("loadingOverlayVisible"),
          publishDailyReward: qq => {
            wq.i.TV(Jg, qq, !0)
          },
          publishMailbox: qq => {
            wq.i.TV(sg, qq, !0)
          },
          publishQuestGraph: qq => {
            wq.i.TV(wg, qq, !0)
          },
          publishForge: qq => {
            wq.i.TV(aY, qq, !0)
          },
          publishSmuggler: qq => {
            wq.i.TV(jY, qq, !0)
          },
          publishKeepersChair: qq => {
            wq.i.TV(hY, qq, !0)
          },
          publishReachLog: qq => {
            wq.i.TV(bY, qq, !0)
          },
          publishLampLight: qq => {
            wq.i.TV(zY, qq, !0)
          },
          publishMagmaward: qq => {
            wq.i.TV(pY, qq, !0)
          },
          publishGlowtide: qq => {
            wq.i.TV(LY, qq, !0)
          },
          publishGlowMeter: qq => {
            wq.i.TV(kY, qq, !0)
          },
          publishHushWait: qq => {
            wq.i.TV(UY, qq, !0)
          },
          publishPassage: qq => {
            wq.i.TV(PY, qq, !0)
          },
          publishTideCharts: qq => {
            wq.i.TV(sY, qq, !0)
          },
          publishRegulars: qq => {
            wq.i.TV(ql, qq, !0)
          },
          publishHiddenWaters: qq => {
            wq.i.TV(Ol, qq, !0)
          },
          publishDialogue: qq => {
            wq.i.TV(xl, qq, !0)
          },
          publishAutographs: qq => {
            wq.i.TV(Wl, qq, !0)
          },
          onDailyRewardStarted: qq => {
            fq.playSound(mq, qq.day === nq ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (qq, Eq) => {
            fq.playSound(mq, "exp_collect", .35, 1 + .6 * qq / (Eq - 1)), wq.i.TV(kg, qq === Eq - 1)
          },
          onDailyRewardItemLanded: qq => {
            fq.playSound(mq, "pickUp", .6, 1 + .15 * qq)
          },
          onMailboxStarted: () => {
            fq.playSound(mq, "rpgMetalClick", .6, 1), fq.playSound(mq, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            fq.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: kx.k,
          requestTracking: qq => {
            fq.sendCommand(`quests track ${qq}`)
          },
          requestDungeonEnter: (qq, Eq) => {
            fq.sendCommand(`dungeonEnter ${qq} ${Eq}`)
          },
          requestQuestJump: qq => {
            fq.sendCommand(`${Tq} jump ${qq}`)
          },
          requestQuestArrive: (qq, Eq) => {
            const gq = `${Tq} arrive ${qq}`;
            fq.sendCommand(Eq ? `${gq} complete` : gq)
          },
          requestForge: qq => {
            let {
              blade: Eq,
              guard: gq,
              handle: Yq
            } = qq;
            fq.sendCommand(`forge ${Eq} ${gq} ${Yq}`)
          },
          requestDialogue: () => {
            fq.sendCommand("quests dialogue")
          },
          requestSmuggle: (qq, Eq) => {
            fq.sendCommand(`smuggle ${qq} ${Eq}`)
          },
          requestKeepersChairAim: qq => {
            fq.sendCommand(`keeperschair-aim ${qq}`)
          },
          requestReachLogOpen: () => {
            fq.sendCommand("reachlog-open")
          },
          requestLampLight: qq => {
            fq.sendCommand(`${qq}`)
          },
          requestTravel: qq => {
            fq.sendCommand(`map travel ${qq.kind} ${qq.id} ${qq.requestId}`)
          }
        });
        let Aq, cq, uq, Bq, Nq, aq, Vq, Pq, Qq, yq, tq, hq, bq;
        const Zq = new Cx;
        let fq, Mq = null;
        const zq = mA[null !== gq && void 0 !== gq ? gq : ""],
          Lq = (qq, Eq) => {
            null !== zq && void 0 !== zq && zq.raises(Eq) && fq.setNametagOffset(qq, zq.rise)
          },
          Rq = new Gx({
            getLocalHookPosition: () => {
              const qq = Uq.getLocalHook();
              return null !== qq && fq.checkValid(qq) ? fq.Py(qq) : null
            },
            playParticles: qq => {
              fq.playParticleEffect(qq)
            },
            vibrate: qq => {
              Kq.e.play("fishBite", qq)
            },
            now: () => performance.now()
          }),
          Uq = new Tx({
            getLineOwner: qq => fq.checkValid(qq) ? fq.getLineOwner(qq) : null,
            isLocalPlayer: qq => fq.isLocalPlayer(qq),
            getHookPosition: qq => {
              const [Eq, , gq] = fq.Py(qq);
              return [Eq, gq]
            },
            isHushWaiting: () => {
              var qq;
              return "waiting" === (null === (qq = xq.hushWait.getSnapshot()) || void 0 === qq ? void 0 : qq.phase)
            },
            onCastLanded: (qq, Eq) => {
              xq.tideCharts.castLanded(qq, Eq)
            },
            onLocalHookSettled: () => {
              Rq.onLocalHookSettled()
            },
            onLocalWaitEnded: qq => {
              Rq.onLocalWaitEnded(qq)
            },
            now: () => performance.now()
          }),
          Cq = new Dx({
            now: () => performance.now(),
            playerPosition: () => fq.checkValid(mq) ? fq.Py(mq) : null,
            play: (qq, Eq, gq, Yq, lq, Oq) => fq.playSound(mq, qq, Eq, 1, {
              DE: gq,
              maxHearDist: Yq,
              refDistance: lq
            }, Oq)
          }),
          Iq = new Map;
        let eq;
        return {
          onCreate: qq => {
            if (fq = qq, Mq = new EA.SkyblockEntityFacing(qq, zq ? Lq : null), xq.portalTransit.resumeArrival(null !== gq && void 0 !== gq ? gq : null), (null !== gq && void 0 !== gq ? gq : Yq) === Yq) {
              let qq = -1 / 0;
              eq = wq.i.subscribe("toggleMenu", (Eq => {
                const gq = performance.now();
                "inventory|Workbench" !== Eq || "cross_to_hub" !== xq.quests.getTrackedQuestId() || gq - qq < 1e4 || (qq = gq, fq.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [Yq, lq] of Object.entries(null !== (Eq = Sq[null !== gq && void 0 !== gq ? gq : ""]) && void 0 !== Eq ? Eq : {})) {
              var Eq;
              Iq.set(Yq, new OA({
                hasChunk: (Eq, gq, Yq) => qq.isBlockInLoadedChunk(Eq, gq, Yq),
                Ay: (Eq, gq, Yq) => qq.blockIdToBlockName(qq.getBlockId(Eq, gq, Yq)),
                xJ: (Eq, gq, Yq, lq) => {
                  qq.xJ(Eq, gq, Yq, lq)
                },
                playParticles: Eq => {
                  qq.playParticleEffect(Eq)
                }
              }, lq))
            }
            bq = (0, qA.e)((qq => function(qq) {
              return Object.hasOwn(UE, qq) || qq.startsWith("npc_")
            }(qq) ? sE(qq) : null)), xq.resolveItemName = (Eq, gq) => {
              const Yq = qq.getItemStat(mq, Eq, "displayName");
              return Yq && "object" === typeof Yq && "translationKey" in Yq ? gq(Yq.translationKey, (0, nl.j)(Yq.params, Jx.d.shown)) : "string" === typeof Yq ? gq(Yq) : Eq
            }, xq.quests.notifications.onShown = qq => {
              "quest" === qq ? fq.playSound(mq, "magicAccent1", 1, 1) : "skillLevel" === qq ? fq.playSound(mq, "magicAccent1", 1, .6) : "landmark" === qq ? fq.playSound(mq, "trumpetFlare", 1, .6) : "npcNote" === qq ? fq.playSound(mq, "magicAccent2", .8, 1.1) : "started" === qq ? fq.playSound(mq, (0, Zx.c)("bigDrumSwish"), 1, 1) : fq.playSound(mq, (0, Zx.c)("rpgHandleSmallLeather"), 1, 1)
            }, xq.forge.onPartSelected = () => {
              fq.playSound(mq, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, xq.forge.onOpened = () => {
              ! function(qq) {
                qq.preloadSounds([(0, Zx.c)("firecracker"), "fireBurn", "magicAccent2"])
              }(qq)
            }, xq.forge.onForgeStarted = (Eq, gq, Yq) => Mx(qq, mq, Eq, gq, Yq), xq.smuggler.onBought = () => {
              fq.playSound(mq, (0, Zx.c)("rpgHandleSmallLeather"), 1, 1), fq.playSound(mq, "chestOpen", .6, 1)
            }, xq.compass.register(new dq(xq.map, !0)), xq.compass.register(new dq(xq.map, !1)), xq.compass.register(new Hq(xq.map)), xq.compass.register(new oq((() => xq.quests.getSnapshot().compassTarget)));
            for (const gq of ["enemy", "npc"]) xq.compass.register(new jq(xq.map, gq, (Eq => qq.checkValid(Eq) ? qq.Py(Eq) : void 0), (Eq => qq.isAlive(Eq))))
          },
          onAfterRender: (qq, Eq) => {
            const gq = fq.checkValid(mq) ? fq.Py(mq) : null;
            xq.navigation.afterRender(gq, performance.now(), Eq), xq.glowtide.afterRender(gq, Eq.cameraHeading), xq.tideCharts.afterRender(gq), Uq.afterRender()
          },
          onClose: () => {
            var qq, Eq, gq, Yq, lq, Oq, mq, Wq, aq, dq, jq, Hq, oq, rq, vq;
            eq && wq.i.unsubscribe(eq), null === (qq = bq) || void 0 === qq || qq(), Zq.dispose(), Cq.dispose(), null === (Eq = Mq) || void 0 === Eq || Eq.dispose(), Uq.dispose(), xq.dispose(), null === (gq = Aq) || void 0 === gq || gq(), null === (Yq = cq) || void 0 === Yq || Yq(), null === (lq = uq) || void 0 === lq || lq(), null === (Oq = Bq) || void 0 === Oq || Oq(), null === (mq = Nq) || void 0 === mq || mq(), null === (Wq = Vq) || void 0 === Wq || Wq(), null === (aq = undefined) || void 0 === aq || aq(), null === (dq = Pq) || void 0 === dq || dq(), null === (jq = Qq) || void 0 === jq || jq(), null === (Hq = yq) || void 0 === Hq || Hq(), null === (oq = tq) || void 0 === oq || oq(), null === (rq = undefined) || void 0 === rq || rq(), null === (vq = hq) || void 0 === vq || vq()
          },
          onPlayerChangeBlock: (qq, Eq, Yq, Oq, Aq, cq) => {
            if (qq === mq && "Air" === cq) {
              const qq = fq.getClientOption(mq, "creative");
              xq.skills.predictBlock([Eq, Yq, Oq], Aq, qq);
              const cq = function(qq, Eq) {
                  if ("hub" === Eq || "farming_1" === Eq || "mining_1" === Eq) return !Jq.has(qq) || "hub" !== Eq && "mining_1" !== Eq ? Object.hasOwn(Gq, qq) ? Gq[qq] : void 0 : pq
                }(Aq, gq),
                uq = ("hub" === gq || "mining_1" === gq) && (lq.sd.some((qq => qq === Aq)) || Object.hasOwn(kq, Aq) || "mining_1" === gq && "Block of Coal" === Aq);
              qq || void 0 === cq && !uq || fq.xJ(Eq, Yq, Oq, null !== cq && void 0 !== cq ? cq : pq)
            }
          },
          onPlayerAttackEntity: (qq, Eq) => {
            if (qq !== mq || "Player" !== fq.getEntityType(Eq)) return;
            const [gq, Yq, lq] = fq.Py(Eq);
            fq.burstParticlePreset("critical", [gq, Yq + 1, lq], 10)
          },
          onChangeBlockFail: qq => {
            for (const {
                MO: Eq
              }
              of qq) xq.skills.rejectBlock(Eq)
          },
          onReceivedMessageFromServer: (qq, Eq) => {
            if ("skyblockGatedPortal" === qq) {
              var gq;
              const [qq, Yq] = Eq;
              return void(null === (gq = Iq.get(qq)) || void 0 === gq || gq.ga(Yq))
            }
            if ("skyblockDailyReward" === qq) return void xq.dailyReward.ga(Eq);
            if ("skyblockMailbox" === qq) return void xq.mailbox.ga(Eq);
            if ("skyblockPortalTransit" === qq) return void xq.portalTransit.ga(Eq);
            if ("skyblockLoot" === qq) return void Zq.ga(fq, Eq);
            if ("skyblockLava" === qq) return void Cq.ga(Eq);
            if ("skyblockForge" === qq) return void xq.forge.ga(Eq);
            if ("skyblockMagmaward" === qq) return void xq.magmaward.ga(Eq);
            if ("skyblockGlowtide" === qq) return void xq.glowtide.ga(Eq);
            if ("skyblockGlowMeter" === qq) return void xq.glowMeter.ga(Eq);
            if ("skyblockHushWait" === qq) return void xq.hushWait.ga(Eq);
            if ("skyblockPassage" === qq) {
              const qq = Eq;
              return xq.passage.ga(qq), xq.reachLog.receivePassagePhase(qq.passagePhase), yq ??= (0, rq.p)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: xq.passage.show
              }), void xq.keepersChair.receivePassage({
                keepersChairPassagePhase: qq.passagePhase,
                keepersChairPassageNextPhase: qq.passageNextPhase,
                keepersChairPassageTurnsInMs: qq.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === qq) {
              const qq = Eq;
              return xq.tideCharts.ga(qq), void(qq.tideCharts.length > 0 && (tq ??= (0, rq.p)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: xq.tideCharts.show
              })))
            }
            if (qq === Fq.D) {
              var Yq;
              const {
                hookId: qq,
                waiting: gq
              } = Eq;
              return void Uq.hookWaiting(qq, null !== (Yq = null === gq || void 0 === gq ? void 0 : gq.remainingMs) && void 0 !== Yq ? Yq : null)
            }
            if ("skyblockBiteTell" === qq) return void Rq.receiveTell(Eq);
            if ("skyblockSmuggler" === qq) return void xq.smuggler.ga(Eq);
            if ("skyblockKeepersChair" === qq) return xq.keepersChair.ga(Eq), void xq.lampLight.setAtChair(xq.keepersChair.isAtChair());
            if ("skyblockLampLight" === qq) {
              const qq = Eq;
              var lq;
              if (xq.lampLight.ga(qq), qq.lampLightReleasing) Qq ??= (0, rq.p)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  xq.lampLight.setRelease(!1)
                }
              });
              else null === (lq = Qq) || void 0 === lq || lq(), Qq = void 0;
              return
            }
            if ("skyblockRegulars" === qq) return void xq.regulars.ga(Eq);
            if ("skyblockHiddenWaters" === qq) return void xq.hiddenWaters.ga(Eq);
            if ("skyblockReachLog" === qq) return xq.reachLog.ga(Eq), void(Pq ??= (0, rq.p)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: ZY
              },
              onClick: xq.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === qq) {
              for (const [qq, gq, Yq, lq] of Eq) fq.xJ(qq, gq, Yq, lq);
              return
            }
            if ("skyblockHud" === qq) xq.receiveHud(Eq);
            else if ("skyblockMap" === qq) xq.map.ga(Eq);
            else if (qq === sq.g) xq.skills.ga(Eq);
            else if (qq === iq && "dialogue" === Eq.kind) xq.dialogue.ga(Eq);
            else if (qq === iq) xq.quests.ga(Eq);
            else if ("skyblockDungeons" === qq) xq.dungeons.ga(Eq);
            else if ("sbCollections" === qq) xq.collections.ga(Eq);
            else if ("skyblockQuestGraph" === qq) xq.questGraph.ga(Eq);
            else {
              if ("skyblockAutographs" !== qq) return;
              xq.autographs.ga(Eq)
            }
            if (!cq && xq.map.getSnapshot().enabled) {
              const qq = (0, rq.p)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: xq.map.show
                }),
                Eq = (0, Xq.n)(xq.map.show);
              cq = () => {
                qq(), Eq()
              }
            }!uq && xq.skills.getSnapshot().enabled && (uq = (0, rq.p)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: xq.skills.show
            })), !Vq && xq.collections.getSnapshot().enabled && (Vq = (0, rq.p)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: xq.collections.show
            })), !Bq && xq.quests.getSnapshot().enabled && (Bq = (0, rq.p)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: xq.quests.show
            })), !hq && xq.autographs.getSnapshot().enabled && (hq = (0, rq.p)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: xq.autographs.show
            }));
            const Oq = xq.dungeons.getSnapshot().enabled;
            var mq;
            (uq || Bq || Oq) && aq !== Oq && (aq = Oq, null === (mq = Nq) || void 0 === mq || mq(), Nq = (0, rq.p)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: ME
              },
              disabled: !Oq,
              panel: !0,
              onClick: xq.dungeons.show
            }));
            Aq || (Aq = (0, Xq.r)((0, vq.createElement)(bx, {
              controller: xq
            }), {
              content: (0, vq.createElement)(ix, {
                controller: xq
              }),
              onClose: xq.close
            }))
          },
          SB: () => {
            var qq;
            for (const Eq of Iq.values()) Eq.SB();
            Zq.SB(fq), Cq.SB(), null === (qq = Mq) || void 0 === qq || qq.SB(), xq.skills.SB(), xq.quests.SB(), xq.dailyReward.SB(), xq.mailbox.SB(), xq.map.SB()
          }
        }
      }
  },
  36431: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => lq,
      g: () => Yq
    });
    const Yq = "skyblockSkills",
      lq = "skills_test_gym"
  },
  9304: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => lq,
      d: () => mq
    });
    const Yq = [{
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

    function lq(qq) {
      let Eq, gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof qq) {
        if (!Number.isFinite(qq)) return "0";
        if (Math.abs(qq) < 100) {
          const Eq = qq < 0 ? "-" : "",
            gq = Math.abs(qq);
          return gq >= 10 ? `${Eq}${gq.toFixed(1).replace(/\.0$/,"")}` : `${Eq}${gq.toFixed(2).replace(/\.?0+$/,"")}`
        }
        Eq = BigInt(Math.floor(qq))
      } else Eq = qq;
      const lq = Eq < 0n ? -Eq : Eq,
        Oq = Eq < 0n ? "-" : "",
        mq = lq.toString();
      if (mq.length <= gq) return `${Oq}${mq}`;
      const xq = 3 * Math.floor((mq.length - 1) / 3);
      if (xq < 3) return `${Oq}${mq}`;
      if (xq > 3 * Yq.length) {
        const qq = mq[0],
          Eq = mq.slice(1, 3).replace(/0+$/, "");
        return `${Oq}${Eq?`${qq}.${Eq}`:qq}e${mq.length-1}`
      }
      const {
        threshold: Aq,
        suffix: cq
      } = Yq[Yq.length - xq / 3], uq = lq / Aq, Bq = Number(1000n * (lq % Aq) / Aq), Wq = Number(uq) + Bq / 1e3;
      let Nq;
      return Nq = Wq >= 100 ? Math.floor(Wq).toString() : Wq >= 10 ? Wq.toFixed(1).replace(/\.0$/, "") : Wq.toFixed(2).replace(/\.?0+$/, ""), `${Oq}${Nq}${cq}`
    }
    const Oq = Yq.map((qq => {
      let {
        threshold: Eq,
        suffix: gq
      } = qq;
      return {
        threshold: Number(Eq),
        suffix: gq
      }
    })).filter((qq => {
      let {
        threshold: Eq
      } = qq;
      return Number.isFinite(Eq)
    }));

    function mq(qq) {
      const Eq = Math.abs(qq),
        gq = qq < 0 ? "-" : "";
      for (const {
          threshold: Yq,
          suffix: lq
        }
        of Oq)
        if (Eq >= Yq) {
          const qq = Eq / Yq;
          if (qq >= 1e3) return `${gq}${Eq.toExponential(2).replace("e+","e")}`;
          let Oq;
          return Oq = qq >= 100 ? Math.floor(qq).toString() : qq >= 10 ? qq.toFixed(1).replace(/\.0$/, "") : qq.toFixed(2).replace(/\.?0+$/, ""), `${gq}${Oq}${lq}`
        } return `${gq}${Eq}`
    }
  },
  38526: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  38529: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  38536: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  38539: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  38545: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  38554: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/farming_1.08302e28e41bf98474fe.png"
  },
  38563: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  38571: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/hub.8b20a64678134496251d.png"
  },
  38573: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/island.113e20c7bd7db93fe1ce.png"
  },
  38581: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/mining_1.68cac4bdadc5ef809ae5.png"
  },
  38585: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/mining_1_bridge.56ff82ba845db0b52726.png"
  },
  38588: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/mining_1_gallery.4e799e6329dbc66249ce.png"
  },
  38594: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  38602: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/mining_1_village.c2a625c1c4541a1fbe65.png"
  },
  18775: qq => {
    qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  20858: qq => {
    qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  23250: qq => {
    qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  24872: qq => {
    qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  26558: qq => {
    qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  26573: qq => {
    qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  38510: qq => {
    qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);