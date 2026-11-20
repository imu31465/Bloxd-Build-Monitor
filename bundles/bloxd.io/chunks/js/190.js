export const id = 190;
export const ids = [49, 190];
export const modules = {
  38240: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb,
      f: () => ab
    });
    const kb = new WeakMap;

    function Wb(bb, cb) {
      return kb.set(bb, cb), bb
    }

    function ab(bb) {
      var cb;
      return null !== (cb = kb.get(bb)) && void 0 !== cb ? cb : null
    }
  },
  38137: (bb, cb, sb) => {
    function kb(bb, cb, sb) {
      var kb;
      const {
        width: Wb,
        height: ab
      } = sb, Tb = null !== (kb = bb.text) && void 0 !== kb ? kb : bb, Ub = (Tb.x / 100 - .5) * Wb, Ib = (Tb.y / 100 - .5) * ab, Hb = Wb / 2 - cb.x;
      if (null !== bb.text && Math.abs(Ub) <= Hb && Ib >= cb.top - ab / 2 && Ib <= ab / 2 - cb.bottom) return {
        x: Tb.x,
        y: Tb.y
      };
      const fb = Math.min(0 === Ub ? 1 / 0 : Hb / Math.abs(Ub), Ib > 0 ? (ab / 2 - cb.bottom) / Ib : Ib < 0 ? (cb.top - ab / 2) / Ib : 1 / 0);
      return !Number.isFinite(fb) || fb < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + Ub * fb / Wb * 100,
        y: 50 + Ib * fb / ab * 100
      }
    }
    sb.d(cb, {
      e: () => kb
    })
  },
  38152: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Tb
    });
    const kb = 4,
      Wb = 12e3,
      ab = 1e3;
    class Tb {
      constructor() {
        let {
          limit: bb = kb,
          windowMs: cb = Wb,
          spacingMs: sb = ab,
          now: Tb = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = bb, this.windowMs = cb, this.spacingMs = sb, this.now = Tb
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const bb of this.priority) bb.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const bb = this.now();
        this.sent.push(bb), this.lastSentAt = bb, this.schedule(), this.notify()
      }
      addPriority(bb) {
        return this.priority.add(bb), () => {
          this.priority.delete(bb)
        }
      }
      subscribe(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const bb of this.priority)
          if (bb.waiting()) return !0;
        return !1
      }
      prune() {
        const bb = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= bb;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const bb = this.now(),
          cb = this.lastSentAt + this.spacingMs,
          sb = Math.min(cb > bb ? cb : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        sb !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, sb - bb)))
      }
      notify() {
        for (const bb of this.listeners) bb()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38135: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => kb
    });
    class kb {
      constructor(bb, cb, sb) {
        this.QQ = bb, this.beforeOpen = cb, this.afterClose = sb, this.open = !1, this.Em = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.Em && (this.open = !0, this.beforeOpen(this), this.emit())
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
        this.open = !1, this.emit(), this.Em = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.Em || (this.snapshot = this.buildSnapshot(), this.QQ(this.snapshot))
      }
    }
  },
  38245: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      SkyblockEntityFacing: () => Ub,
      needsSkyblockEntityFacing: () => Tb
    });
    var kb = sb(624),
      Wb = sb(4023),
      ab = sb(38253);

    function Tb(bb, cb) {
      if (bb.metaInfo === kb.b || "Iron Guardian" === bb.type || "Gold Guardian" === bb.type) return !0;
      if ("Pig" === bb.type) return "sitting" === bb.pose;
      if ("Person" !== bb.meshKind || void 0 === bb.meshOpts) return !1;
      let sb = null === cb || void 0 === cb ? void 0 : cb.get(bb.meshOpts);
      if (void 0 === sb) {
        var ab, Tb;
        const kb = (0, Wb.h)(bb);
        sb = !1, "pig_napoleon" === (null === kb || void 0 === kb || null === (ab = kb.opts.textures) || void 0 === ab ? void 0 : ab.head) ? sb = !0 : "npc_pig_head" === (null === kb || void 0 === kb || null === (Tb = kb.opts.textures) || void 0 === Tb ? void 0 : Tb.head) && (sb = "sitting" === kb.opts.pose || "sitting"), cb && (cb.size >= 256 && cb.clear(), cb.set(bb.meshOpts, sb))
      }
      return "sitting" === sb ? "sitting" === bb.pose : sb
    }(0, ab.g)("skyblock", ((bb, cb) => {
      cb.setFacingTolerance(Tb(bb) ? 0 : null)
    }));
    class Ub {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = bb, this.alsoVisit = cb, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = bb => {
          var cb;
          const sb = this.api.getEntityInfo(bb);
          sb && (Tb(sb, this.meshFacingCache) && (this.api.setFacingTolerance(bb, 0), this.nextFacing.add(bb)), null === (cb = this.alsoVisit) || void 0 === cb || cb.call(this, bb, sb))
        }
      }
      aX() {
        const {
          api: bb
        } = this, cb = this.nextFacing;
        bb.forEachEntity(this.visit);
        for (const sb of this.facing) cb.has(sb) || bb.setFacingTolerance(sb, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = cb
      }
      dispose() {
        for (const bb of this.facing) this.api.setFacingTolerance(bb, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  38132: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      default: () => HI
    });
    const kb = "island";
    var Wb = sb(344);
    const ab = (0, Wb.Fb)([0, 0, -1]),
      Tb = [{
        name: "S",
        bearing: (0, Wb.Fb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, Wb.Fb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: ab
      }, {
        name: "W",
        bearing: (0, Wb.Fb)([1, 0, 0])
      }];

    function Ub(bb, cb, sb) {
      return [100 * (sb.mapMaxX - bb) / (sb.mapMaxX - sb.mapMinX), 100 * (cb - sb.mapMinZ) / (sb.mapMaxZ - sb.mapMinZ)]
    }

    function Ib(bb, cb, sb) {
      const Wb = "local" === cb,
        ab = bb.background,
        Tb = cb => ab ? Ub(cb[0] - bb.mapOrigin[0], cb[2] - bb.mapOrigin[2], ab.bounds) : [50, 50],
        Ib = (bb.insideDungeon ? [] : bb.landmarks).map((bb => {
          var cb, kb;
          return {
            id: bb.id,
            name: sb(bb.visited && bb.nameKey ? null !== (cb = bb.mapLabelKey) && void 0 !== cb ? cb : bb.nameKey : "skyblockGame:mapUnknown"),
            icon: bb.visited && null !== (kb = bb.icon) && void 0 !== kb ? kb : "unknown",
            visited: bb.visited,
            current: !1,
            position: Tb(bb.position),
            travelKind: "landmark",
            travelId: bb.id
          }
        })),
        fb = bb.zones.map((cb => {
          var kb;
          return {
            id: cb.id,
            name: sb(cb.visited && cb.nameKey ? cb.nameKey : "skyblockGame:mapUnknown"),
            icon: cb.visited && null !== (kb = cb.icon) && void 0 !== kb ? kb : "unknown",
            visited: cb.visited,
            current: cb.id === bb.zoneId,
            position: cb.position,
            thumbnail: cb.visited ? cb.id : void 0,
            travelKind: "zone",
            travelId: cb.id
          }
        })),
        Mb = bb.insideDungeon || !ab ? [] : bb.portals.map((bb => {
          var cb;
          return {
            id: bb.id,
            name: sb(null !== (cb = bb.nameKey) && void 0 !== cb ? cb : "skyblockGame:mapUnknown"),
            icon: bb.visited ? "dungeons" === bb.destination ? "portal_orange" : "portal" : "unknown",
            visited: bb.visited,
            current: !1,
            position: Tb(bb.position),
            colour: bb.colour,
            travelKind: "zone",
            travelId: bb.destination
          }
        })),
        Xb = Wb ? Ib : fb,
        nb = Xb.filter((bb => bb.visited)).length,
        mb = ab ? (ab.bounds.mapMaxX - ab.bounds.mapMinX) / (ab.bounds.mapMaxZ - ab.bounds.mapMinZ) : 2,
        lb = ab ? JSON.stringify([ab.bounds, bb.mapOrigin]) : "";
      return {
        local: Wb,
        points: Xb,
        portals: Wb ? Mb : [],
        progress: Xb.length ? sb("skyblockGame:mapDiscovered", {
          current: String(nb),
          total: String(Xb.length)
        }) : null,
        percent: Xb.length ? 100 * nb / Xb.length : 0,
        canTravel: [...Xb, ...Wb ? Mb : []].some((bb => bb.visited && !bb.current)),
        noLandmarks: Wb && !bb.insideDungeon && 0 === Ib.length,
        background: ab ? {
          imageKey: ab.imageKey,
          fallbackImageKey: bb.zoneId,
          geometryKey: lb,
          label: sb(ab.labelKey),
          colour: ab.backgroundColour,
          ratio: mb
        } : null,
        connections: Hb(bb.zones),
        minimap: ab ? {
          imageKey: ab.imageKey,
          fallbackImageKey: bb.zoneId,
          geometryKey: lb,
          label: sb(ab.labelKey),
          colour: ab.backgroundColour,
          caption: sb(bb.zoneId === kb ? "skyblockGame:zoneIsland" : ab.labelKey),
          width: (ab.bounds.mapMaxX - ab.bounds.mapMinX) / ab.minimapSpan * 100 + "%",
          height: (ab.bounds.mapMaxZ - ab.bounds.mapMinZ) / ab.minimapSpan * 100 + "%",
          markers: [...Ib, ...Mb]
        } : null
      }
    }

    function Hb(bb) {
      const cb = new Set;
      return bb.flatMap((sb => sb.connections.flatMap((kb => {
        const Wb = bb.find((bb => bb.id === kb)),
          ab = [sb.id, kb].sort().join("|");
        return !Wb || cb.has(ab) ? [] : (cb.add(ab), [{
          id: `${sb.id}-${kb}`,
          start: sb.position,
          end: Wb.position,
          explored: sb.visited && Wb.visited
        }])
      }))))
    }
    var fb = sb(38135);
    class Mb extends fb.e {}
    const Xb = "skyblockMapView";
    class nb extends Mb {
      constructor(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(bb, kb, Wb), this.requestTravel = cb, this.translate = sb, this.now = ab, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
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
        }, this.travel = (bb, cb) => {
          if (!this.map || this.pending || this.Em) return;
          const sb = ("zone" === bb ? this.map.zones : this.map.landmarks).find((bb => bb.id === cb));
          if (sb) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in sb && !sb.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (sb.visited)
              if ("zone" === bb && cb === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const sb = ++this.nextRequestId;
                this.pending = {
                  requestId: sb,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: bb,
                  id: cb,
                  requestId: sb
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
      Km(bb) {
        var cb;
        if (!this.Em)
          if ("entities" !== bb.kind)
            if ("open" !== bb.kind) {
              var sb, kb;
              if ("snapshot" === bb.kind)(null === (sb = bb.snapshot) || void 0 === sb ? void 0 : sb.zoneId) !== (null === (kb = this.map) || void 0 === kb ? void 0 : kb.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = bb.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === bb.kind) {
                var Wb;
                bb.requestId === (null === (Wb = this.pending) || void 0 === Wb ? void 0 : Wb.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (bb.requestId === (null === (cb = this.pending) || void 0 === cb ? void 0 : cb.requestId)) {
                var ab;
                this.pending = null, this.feedbackKey = null !== (ab = bb.errorKey) && void 0 !== ab ? ab : "", null === bb.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = bb.entities
      }
      aX() {
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
          presentation: this.map ? Ib(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const mb = 67.5 * Math.PI / 180;

    function lb(bb, cb) {
      const sb = Math.abs(bb);
      if (sb > mb || cb.trackHalfWidth <= 0) return null;
      const kb = cb.trackHalfWidth,
        Wb = cb.screenHalfWidth / (cb.tanHalfFovX * Math.max(.5, Math.cos(cb.pitch))),
        ab = Math.min(Math.atan(.6 * kb / Wb), .75 * mb),
        Tb = Wb * Math.tan(ab);
      let Ub;
      if (sb <= ab) Ub = Wb * Math.tan(sb);
      else {
        const bb = mb - ab,
          cb = Math.max(0, Wb * bb / (Math.cos(ab) ** 2 * (kb - Tb)) - 1),
          Ib = (sb - ab) / bb;
        Ub = Tb + (kb - Tb) * (1 + cb) * Ib / (1 + cb * Ib)
      }
      return 50 + Math.sign(bb) * Ub * 50 / kb
    }
    class Qb {
      constructor(bb, cb) {
        this.map = bb, this.visited = cb, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = cb ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const bb = this.map.getSnapshot().map;
        return !bb || bb.insideDungeon ? [] : bb.landmarks.filter((bb => bb.visited === this.visited)).map((bb => {
          var cb, sb;
          return {
            id: `landmark:${bb.id}`,
            position: bb.position,
            icon: null !== (cb = bb.icon) && void 0 !== cb ? cb : "unknown",
            nameKey: null !== (sb = bb.nameKey) && void 0 !== sb ? sb : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class eb {
      constructor(bb, cb, sb, kb) {
        this.map = bb, this.kind = cb, this.position = sb, this.alive = kb, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = cb, this.range = "enemy" === cb ? 48 : 64, this.limit = 12
      }
      aN(bb) {
        if ("enemy" !== this.kind || this.alive(bb.ia)) return this.position(bb.ia)
      }
      getPoints() {
        const bb = [];
        for (const kb of this.map.getEntities()) {
          if (kb.kind !== this.kind || "enemy" === this.kind && !this.alive(kb.compassEntityId)) continue;
          const Wb = this.position(kb.compassEntityId);
          var cb, sb;
          if (Wb) bb.push({
            id: `${this.kind}:${kb.compassEntityId}`,
            ia: kb.compassEntityId,
            kind: this.kind,
            icon: null !== (cb = kb.icon) && void 0 !== cb ? cb : kb.npcSkin ? `npc_${kb.npcSkin}` : this.kind,
            displayName: kb.displayName,
            position: Wb,
            nameKey: null !== (sb = kb.nameKey) && void 0 !== sb ? sb : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return bb
      }
    }
    class Cb {
      constructor(bb) {
        this.map = bb, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const bb = this.map.getSnapshot().map;
        return !bb || bb.insideDungeon ? [] : bb.portals.map((bb => {
          var cb;
          return {
            id: "portal:" + bb.id,
            kind: "portal",
            position: bb.position,
            nameKey: null !== (cb = bb.nameKey) && void 0 !== cb ? cb : "skyblockGame:compassUnvisitedZone",
            icon: bb.visited ? "dungeons" === bb.destination ? "portal_orange" : "portal" : "unknown",
            colour: bb.colour
          }
        }))
      }
    }
    class Nb {
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

    function Vb(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.position;
      const ab = kb[0] - cb[0],
        Tb = kb[2] - cb[2];
      return {
        ...bb,
        position: kb,
        offset: Wb.d.computeShortestRotation(sb, (0, Wb.Fb)([ab, 0, Tb])),
        distance: Math.hypot(ab, kb[1] - cb[1], Tb)
      }
    }
    let Lb;

    function ub(bb, cb) {
      var sb;
      return (null === (sb = Lb) || void 0 === sb ? void 0 : sb.locale) !== cb && (Lb = {
        locale: cb,
        near: new Intl.NumberFormat(cb, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(cb, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (bb < 10 ? Lb.near : Lb.far).format(bb)
    }
    class Yb {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(bb) {
        return this.providers.set(bb.id, bb), this.refreshAt = 0, () => {
          this.providers.get(bb.id) === bb && (this.providers.delete(bb.id), this.refreshAt = 0)
        }
      }
      frame(bb, cb, sb) {
        if (sb >= this.refreshAt) {
          this.refreshAt = sb + 200, this.candidates = [];
          for (const cb of this.providers.values()) {
            if (!cb.enabled) continue;
            const sb = cb.getPoints().map((cb => {
              const sb = cb.position;
              return {
                point: cb,
                distance: Math.hypot(sb[0] - bb[0], sb[1] - bb[1], sb[2] - bb[2])
              }
            })).filter((bb => bb.distance <= cb.range)).sort(((bb, cb) => bb.distance - cb.distance)).slice(0, cb.limit);
            for (const {
                point: bb
              }
              of sb) this.candidates.push({
              provider: cb,
              point: bb
            })
          }
        }
        const kb = [];
        for (const {
            point: Wb,
            provider: ab
          }
          of this.candidates) {
          if (!ab.enabled) continue;
          const sb = ab.aN ? ab.aN(Wb) : Wb.position;
          if (sb) {
            const ab = Vb(Wb, bb, cb, sb);
            Math.abs(ab.offset) <= mb && kb.push(ab)
          }
        }
        return kb
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var hb = sb(36247),
      Jb = sb(64);
    const gb = [{
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
      Bb = gb.length;

    function tb(bb) {
      return bb >= Bb ? 1 : bb + 1
    }
    const yb = "skyblockQuests",
      Pb = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      Db = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function Eb(bb) {
      let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const sb = Math.max(0, Math.floor(bb)),
        kb = Math.floor(sb % 1e3 / 100),
        Wb = Math.floor(sb / 1e3),
        ab = Wb % 60,
        Tb = Math.floor(Wb / 60),
        Ub = Tb % 60,
        Ib = Math.floor(Tb / 60),
        Hb = bb => bb < 10 ? `0${bb}` : String(bb),
        fb = cb ? `.${kb}` : "";
      return Ib > 0 ? `${Ib}:${Hb(Ub)}:${Hb(ab)}${fb}` : `${Ub}:${Hb(ab)}${fb}`
    }
    const ib = "devquests",
      Ob = "none",
      Gb = {
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
      Kb = "Compressed Messy Stone",
      Zb = {
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
      zb = ["Stone", "Diorite", "Andesite", "Granite"],
      qb = new Set(zb),
      db = (Object.keys(Zb), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const Ab = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function wb(bb, cb) {
      const sb = Math.floor(5 * bb / (2 * cb + 1));
      return Math.min(4, Math.max(0, sb))
    }
    var rb = sb(1253);
    var ob = sb(36039);
    var Sb = sb(36240),
      Rb = sb(26),
      vb = sb(8487);
    const Fb = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      xb = 1e3;

    function jb(bb) {
      return Math.max(0, bb)
    }

    function pb(bb) {
      return 1 + .01 * jb(bb)
    }

    function bc(bb) {
      return 1 + .005 * jb(bb)
    }

    function cc(bb) {
      return 1 + .005 * jb(bb)
    }

    function sc(bb) {
      return .01 * jb(bb)
    }

    function kc(bb) {
      return 150 / (150 + jb(bb))
    }

    function Wc(bb) {
      return 1 + .002 * jb(bb)
    }

    function ac(bb) {
      return Math.round(10 * bb) / 10
    }

    function Tc(bb, cb) {
      switch (bb) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: ac(100 * (bc(cb) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: ac(100 * (pb(cb) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: ac(100 * (cc(cb) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: ac(100 * sc(cb))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: ac(100 * (1 - kc(cb)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: ac(100 * (Wc(cb) - 1))
          }
      }
    }

    function Uc(bb) {
      return "farming" === bb ? 200 : 100
    }

    function Ic(bb, cb) {
      if (!Number.isSafeInteger(bb) || bb < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const sb = Uc(cb),
        kb = bb => function(bb, cb) {
          return Uc(bb) * cb * (cb + 1) / 2
        }(cb, bb);
      let Wb = Math.min(xb, Math.floor((Math.sqrt(8 * bb / sb + 1) - 1) / 2));
      return Wb < xb && kb(Wb + 1) <= bb ? Wb++ : kb(Wb) > bb && Wb--, {
        totalXp: bb,
        level: Wb,
        xpIntoLevel: bb - kb(Wb),
        xpForNextLevel: Wb === xb ? null : sb * (Wb + 1)
      }
    }
    const Hc = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function fc(bb) {
      return Hc.has(bb)
    }
    const Mc = new Set(Wb.rb);

    function Xc(bb) {
      return Mc.has(bb)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const nc = {
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
      mc = {
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
      lc = {
        ...mc,
        ...Object.fromEntries(Object.entries(db).map((bb => {
          let [cb, sb] = bb;
          return [cb, 9 * mc[sb]]
        })))
      },
      Qc = {
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
      ec = {
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
    const Cc = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      Nc = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function Vc(bb) {
      return `rgb(${Nc[bb].join(", ")})`
    }

    function Lc(bb, cb, sb) {
      if (!sb) return bb(cb);
      const kb = {};
      for (const [Wb, ab] of Object.entries(sb)) kb[Wb] = "string" === typeof ab ? ab : bb(ab.translationKey);
      return bb(cb, kb)
    }
    class uc {
      constructor(bb, cb) {
        this.now = bb, this.getJournal = cb, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.qU = !1, this.onShown = () => {}
      }
      enqueue(bb) {
        const cb = Yc(bb);
        if (cb) this.pending.push(bb);
        else {
          const cb = this.pending.findIndex(Yc);
          this.pending.splice(-1 === cb ? this.pending.length : cb, 0, bb)
        }
        return (null === this.current || null !== this.followUp && !cb) && (this.advance(), !0)
      }
      setHeld(bb) {
        return this.qU = bb, !bb && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      aX() {
        const bb = this.getJournal(),
          cb = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === cb ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === cb || void 0 === cb ? void 0 : cb.kind) && bb && bb.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === cb || void 0 === cb ? void 0 : cb.kind)) {
          const bb = this.findFollowUp(this.current);
          if ("step" !== (null === bb || void 0 === bb ? void 0 : bb.kind) || bb.questId !== cb.questId || bb.step.id !== cb.step.id) return this.showFollowUp(bb, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(bb, cb, sb) {
        var kb, Wb, ab, Tb;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, bb, sb);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, bb);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, bb, cb);
        const {
          questCompletionKind: Ub,
          questCompletionNameKey: Ib
        } = this.current, Hb = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, fb = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, Mb = "step" === (null === (kb = this.followUp) || void 0 === kb ? void 0 : kb.kind) ? this.followUp : null, Xb = "explore" === (null === (Wb = this.followUp) || void 0 === Wb ? void 0 : Wb.kind);
        let nb;
        return nb = Xb ? bb("skyblockGame:questExploreTitle") : null !== Mb ? "quest" === Ub ? bb("skyblockGame:questNextQuestTitle", {
          quest: bb(Mb.questNameKey)
        }) : bb("skyblockGame:questNextStepTitle") : bb("started" === Ub ? "skyblockGame:questStartedTitle" : "quest" === Ub ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? Ub : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: nb,
          name: Xb ? cb("skyblockGame:questExploreName") : null !== Mb ? Lc(cb, Mb.step.nameKey, Mb.step.nameParams) : Lc(cb, Ib, Hb),
          description: Xb ? cb("skyblockGame:questExploreDescription") : null === Mb ? null : Lc(cb, Mb.step.descriptionKey, Mb.step.descriptionParams),
          reward: null === this.followUp && fb > 0 ? cb("skyblockGame:questCoinRewardSuffix", {
            amount: fb.toLocaleString(sb)
          }) : null,
          iconItem: null !== (ab = null === Mb || void 0 === Mb ? void 0 : Mb.step.questIconItem) && void 0 !== ab ? ab : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== Mb && (null === (Tb = this.getJournal()) || void 0 === Tb ? void 0 : Tb.trackedQuestId) === Mb.questId ? Mb.step.nameKey : null
        }
      }
      getSkillLevelView(bb, cb, sb) {
        let {
          skill: kb,
          beforeLevel: Wb,
          level: ab
        } = bb;
        const Tb = Tc(kb, Wb),
          Ub = Tc(kb, ab);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: cb(`skyblockGame:${kb}`),
          name: cb("skyblockGame:skillLevelUp", {
            to: ab.toLocaleString(sb)
          }),
          description: Tb.percent === Ub.percent ? null : cb(`${Ub.translationKey}Change`, {
            before: Tb.percent.toLocaleString(sb),
            after: Ub.percent.toLocaleString(sb)
          }),
          reward: null,
          iconItem: Cc[kb],
          accent: Vc(kb),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(bb, cb) {
        let {
          landmarkNameKey: sb
        } = bb;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: cb("skyblockGame:landmarkDiscovered"),
          name: cb(sb),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(bb, cb, sb) {
        let {
          titleKey: kb,
          textKey: Wb,
          params: ab = {},
          nameKeys: Tb = {},
          iconItem: Ub = null
        } = bb;
        const Ib = {
          ...ab
        };
        for (const [Hb, fb] of Object.entries(Tb)) Ib[Hb] = cb(fb);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: cb(kb),
          name: sb(Wb, Ib),
          description: null,
          reward: null,
          iconItem: Ub,
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
      showFollowUp(bb, cb) {
        null === bb || this.qU ? this.advance() : (this.followUp = bb, this.token++, this.shownAt = this.now(), this.expiresAt = null !== cb && void 0 !== cb ? cb : this.shownAt + this.durationMs())
      }
      findFollowUp(bb) {
        var cb;
        const sb = this.getJournal();
        if (!sb || this.hasPendingQuestPopup() || Yc(bb)) return null;
        const kb = "started" === bb.questCompletionKind ? sb.active.some((cb => cb.id === bb.questCompletionQuestId)) : "quest" === bb.questCompletionKind ? sb.completed.some((cb => cb.id === bb.questCompletionQuestId)) : [...sb.active, ...sb.completed].some((cb => cb.id === bb.questCompletionQuestId && cb.subquests.some((cb => cb.id === bb.questCompletionStepId && "completed" === cb.status))));
        if (!kb) return null;
        if ("quest" === bb.questCompletionKind && 0 === sb.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const Wb = sb.active.find((bb => bb.id === sb.trackedQuestId)),
          ab = null !== (cb = null === Wb || void 0 === Wb ? void 0 : Wb.subquests.find((bb => "ready" === bb.status))) && void 0 !== cb ? cb : null === Wb || void 0 === Wb ? void 0 : Wb.subquests.find((bb => "active" === bb.status));
        return ab ? {
          kind: "step",
          questId: Wb.id,
          questNameKey: Wb.nameKey,
          step: ab
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((bb => !Yc(bb)))
      }
      advance() {
        var bb;
        this.current = this.qU ? null : null !== (bb = this.pending.shift()) && void 0 !== bb ? bb : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function Yc(bb) {
      return hc(bb.questCompletionKind)
    }

    function hc(bb) {
      return "skillLevel" === bb || "landmark" === bb || "npcNote" === bb
    }
    var Jc = sb(38137);
    const gc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      Bc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      tc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      yc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      Pc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var Dc = sb(38146);
    const Ec = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      ic = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const Oc = sb.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const Gc = sb.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      Kc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var Zc = sb(18175),
      zc = sb(20313),
      qc = sb(22716),
      dc = sb(24310),
      Ac = sb(26032);
    const wc = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: Zc,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: zc,
      cow: Pc,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: sb(26052),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: gc,
      fishing_1: gc,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: Bc,
      guardian_iron: tc,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: qc,
      mines: dc,
      mining_1: dc,
      npc: yc,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: Pc,
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
      npc_gold_guardian: Bc,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: tc,
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
      npc_tentacle_guy: Dc,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: Ec,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: Oc,
      quest_talk: Gc,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: Kc,
      watermelon: Ac
    };

    function rc(bb, cb) {
      const sb = document.createElement("img");
      return sb.className = cb, sb.src = bb, sb.alt = "", sb.draggable = !1, sb
    }

    function oc(bb) {
      var cb;
      const sb = null !== (cb = wc[bb]) && void 0 !== cb ? cb : bb.startsWith("npc_") ? yc : Kc;
      if ("portal" !== bb) return rc(sb, "SkyblockMapIcon");
      const kb = document.createElement("span");
      kb.className = "SkyblockMapIcon Portal";
      const Wb = document.createElement("span");
      return Wb.className = "SkyblockMapIconTint", Wb.style.maskImage = Wb.style.webkitMaskImage = `url("${ic}")`, kb.append(rc(sb, "SkyblockMapIconLayer"), Wb, rc(ic, "SkyblockMapIconLayer SkyblockMapIconShade")), kb
    }
    var Sc = sb(38124),
      Rc = sb(4033);
    const vc = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function Fc(bb) {
      const cb = new Rc.j(bb);
      return {
        radius: 45,
        squareness: 3,
        wobbles: vc.map((bb => {
          let {
            lobes: sb,
            amount: kb
          } = bb;
          return {
            lobes: sb[Math.floor(cb.next() * sb.length)],
            amount: kb[0] + cb.next() * (kb[1] - kb[0]),
            phase: 2 * cb.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function xc(bb) {
      let {
        radius: cb,
        squareness: sb,
        wobbles: kb,
        samples: Wb
      } = bb;
      const ab = [];
      for (let Tb = 0; Tb < Wb; Tb++) {
        const bb = 2 * Math.PI * Tb / Wb,
          Ub = Math.cos(bb),
          Ib = Math.sin(bb),
          Hb = cb * (Math.abs(Ub) ** sb + Math.abs(Ib) ** sb) ** (-1 / sb) * kb.reduce(((cb, sb) => {
            let {
              lobes: kb,
              amount: Wb,
              phase: ab
            } = sb;
            return cb + Wb * Math.sin(kb * bb + ab)
          }), 1);
        ab.push(`${(50+Hb*Ub).toFixed(2)} ${(50+Hb*Ib).toFixed(2)}`)
      }
      return `M${ab.join("L")}Z`
    }
    const jc = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class pc {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.Em = !1, this.mountCompass = bb => {
          var cb;
          if (null === (cb = this.stopLayout) || void 0 === cb || cb.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !bb || this.Em) return;
          const sb = bb.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: bb,
            track: sb,
            label: bb.querySelector(".SkyblockCompassLabel")
          }, sb.replaceChildren();
          for (let Wb = 0; Wb < 4; Wb++) {
            const bb = document.createElement("span");
            bb.className = "SkyblockCompassCardinal", sb.appendChild(bb), this.cardinals.push(bb)
          }
          const kb = (0, Sc.c)(jc, [bb], this.layout);
          this.stopLayout = () => {
            kb(), sb.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = bb => {
          this.terrain = this.Em ? null : bb, this.render(this.frame)
        }, this.mountMinimapSearchArea = bb => {
          this.mountSearchArea("minimap", bb)
        }, this.mountMapSearchArea = bb => {
          this.mountSearchArea("map", bb)
        }, this.mountPlayer = bb => {
          this.player = this.Em ? null : bb, this.render(this.frame)
        }, this.mountWaypoint = bb => {
          var cb, sb;
          if (null === (cb = this.stopWaypoint) || void 0 === cb || cb.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !bb || this.Em) return;
          const kb = bb.querySelector(".SkyblockQuestWaypointMarker");
          kb.replaceChildren(oc("quest")), this.markerIcon = "quest", this.waypoint = {
            root: bb,
            marker: kb,
            clip: bb.querySelector(".SkyblockQuestWaypointTextClip"),
            text: bb.querySelector(".SkyblockQuestWaypointText"),
            label: bb.querySelector(".SkyblockQuestWaypointLabel"),
            distance: bb.querySelector(".SkyblockQuestWaypointDistance"),
            hint: bb.querySelector(".SkyblockQuestWaypointHint")
          };
          const Wb = () => {
              this.waypointMarkerSize = {
                width: kb.offsetWidth,
                height: kb.offsetHeight
              }, this.waypointInset = {
                x: kb.offsetWidth / 2 + 8,
                top: kb.offsetHeight + 8,
                bottom: 8
              }
            },
            ab = new ResizeObserver((() => {
              Wb(), this.render(this.frame)
            }));
          ab.observe(kb, {
            box: "border-box"
          });
          const Tb = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", Tb), null === (sb = window.visualViewport) || void 0 === sb || sb.addEventListener("resize", Tb), this.stopWaypoint = () => {
            var bb;
            ab.disconnect(), window.removeEventListener("resize", Tb), null === (bb = window.visualViewport) || void 0 === bb || bb.removeEventListener("resize", Tb)
          }, Tb(), Wb(), this.render(this.frame)
        }, this.mountWaypointOrigin = bb => {
          var cb;
          if (null === (cb = this.stopWaypointOrigin) || void 0 === cb || cb.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = bb && !this.Em ? Number(bb.dataset.notificationToken) : null, bb && !this.Em && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const cb = {
              nameKey: bb.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = cb;
            const sb = () => {
                const sb = bb.getBoundingClientRect();
                cb.x = (sb.left + sb.width / 2) / window.innerWidth * 100, cb.y = (sb.top + sb.height / 2) / window.innerHeight * 100
              },
              kb = new ResizeObserver(sb);
            kb.observe(bb.parentElement), kb.observe(bb), window.addEventListener("resize", sb), this.stopWaypointOrigin = () => {
              kb.disconnect(), window.removeEventListener("resize", sb)
            }, sb()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const bb = this.compass.root,
            cb = getComputedStyle(bb),
            sb = getComputedStyle(document.documentElement),
            kb = parseFloat(sb.fontSize),
            Wb = parseFloat(cb.getPropertyValue("--compass-icon-size")) * kb,
            ab = "1" === cb.getPropertyValue("--compass-fit-top").trim(),
            Tb = ab ? 1 : 8,
            Ub = Array.from(document.querySelectorAll(jc), (bb => {
              var cb;
              return (null !== (cb = bb.querySelector(".MiddleTextTop")) && void 0 !== cb ? cb : bb).getBoundingClientRect()
            })).filter((bb => bb.width > 0 && bb.height > 0));
          let Ib = (parseFloat(sb.getPropertyValue("--notchTop")) || 0) + Tb,
            Hb = "";
          if (ab) {
            const cb = window.innerWidth / 2,
              sb = bb.getBoundingClientRect().height,
              ab = [Ib, ...Ub.map((bb => Math.max(Ib, bb.bottom + Tb)))].sort(((bb, cb) => bb - cb));
            for (const bb of ab) {
              let ab = cb - 8;
              for (const kb of Ub) kb.bottom + Tb <= bb || kb.top >= bb + sb + Tb || (ab = Math.min(ab, kb.right <= cb ? cb - kb.right - 8 : kb.left - cb - 8));
              const fb = 2 * ab - Wb;
              if (fb >= 16 * kb) {
                Hb = `${fb}px`, Ib = bb;
                break
              }
            }
          }
          bb.style.maxWidth !== Hb && (bb.style.maxWidth = Hb);
          const fb = bb.getBoundingClientRect(),
            Mb = this.compassSize.trackHalfWidth;
          if (fb.width > 0) {
            const bb = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: bb.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * Wb / bb.width
          }
          if (!Hb)
            for (const Xb of Ub) Xb.right > fb.left - 8 && Xb.left < fb.right + 8 && (Ib = Math.max(Ib, Xb.bottom + Tb));
          bb.style.top = `${Ib}px`, this.compassSize.trackHalfWidth !== Mb && this.render(this.frame)
        }
      }
      mountSearchArea(bb, cb) {
        this.searchAreas[bb] = this.Em ? null : cb, this.render(this.frame)
      }
      render(bb) {
        if (this.Em) return;
        if (this.frame = bb, this.compass && (bs(this.compass.root, !bb), bb)) {
          const cb = this.compassSize.trackHalfWidth / 50;
          bb.compass.cardinals.forEach(((bb, sb) => {
            const kb = this.cardinals[sb];
            kb.textContent !== bb.name && (kb.textContent = bb.name), bs(kb, bb.hidden), kb.style.translate = bb.left * cb + "px"
          }));
          const sb = new Set;
          bb.compass.markers.forEach(((kb, Wb) => {
            var ab;
            sb.add(kb.id);
            let Tb = this.markers.get(kb.id);
            Tb || (Tb = document.createElement("span"), Tb.className = "SkyblockCompassMarker", this.markers.set(kb.id, Tb), this.compass.track.appendChild(Tb)), Tb.dataset.icon !== kb.icon && (Tb.dataset.icon = kb.icon, Tb.replaceChildren(oc(kb.icon))), Tb.style.color = null !== (ab = kb.colour) && void 0 !== ab ? ab : "", Tb.style.translate = kb.left * cb + "px", Tb.style.zIndex = String(bb.compass.markers.length - Wb), Tb.title !== kb.name && (Tb.title = kb.name)
          }));
          for (const [bb, kb] of this.markers) sb.has(bb) || (kb.remove(), this.markers.delete(bb));
          this.compass.label.textContent !== bb.compass.label && (this.compass.label.textContent = bb.compass.label)
        }
        this.terrain && (bs(this.terrain, !(null !== bb && void 0 !== bb && bb.minimap)), null !== bb && void 0 !== bb && bb.minimap && (this.terrain.style.transform = bb.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", bb.minimap.iconRotation)));
        const cb = null === bb || void 0 === bb ? void 0 : bb.searchArea;
        for (const sb of [this.searchAreas.minimap, this.searchAreas.map])
          if (sb && (bs(sb, !cb), cb)) {
            if (this.searchAreaPath.seed !== cb.shapeSeed && (this.searchAreaPath = {
                seed: cb.shapeSeed,
                d: xc(Fc(cb.shapeSeed))
              }), sb.dataset.shapeSeed !== cb.shapeSeed) {
              sb.dataset.shapeSeed = cb.shapeSeed;
              for (const bb of sb.querySelectorAll("path")) bb.setAttribute("d", this.searchAreaPath.d)
            }
            sb.style.left = `${cb.left}%`, sb.style.top = `${cb.top}%`, sb.style.width = `${cb.width}%`, sb.style.height = `${cb.height}%`
          } if (this.player && (bs(this.player, !(null !== bb && void 0 !== bb && bb.player) || bb.player.hidden), null !== bb && void 0 !== bb && bb.player && (this.player.style.left = `${bb.player.left}%`, this.player.style.top = `${bb.player.top}%`, this.player.style.setProperty("--map-player-rotation", bb.player.rotation))), this.waypoint) {
          const {
            root: cb,
            marker: sb,
            clip: kb,
            text: Wb,
            label: ab,
            distance: Tb,
            hint: Ub
          } = this.waypoint, Ib = !(null !== bb && void 0 !== bb && bb.waypoint) || null !== bb.waypoint.popupToken && bb.waypoint.popupToken !== this.waypointOriginToken;
          bs(cb, Ib);
          let Hb = 1;
          const fb = this.waypointLaunch;
          if (!Ib && fb && bb.waypoint.nameKey === fb.nameKey) {
            const bb = performance.now();
            fb.startedAt ??= bb, Hb = Math.min(1, Math.max(0, (bb - fb.startedAt - 450) / 1e3)), sb.style.opacity = String(Math.min(1, (bb - fb.startedAt) / 150)), 1 === Hb && (this.waypointLaunch = null)
          } else sb.style.opacity = "", fb && null !== fb.startedAt && (this.waypointLaunch = null);
          if (cb.classList.toggle("Launching", Hb < 1), null !== bb && void 0 !== bb && bb.waypoint) {
            const cb = this.waypointInset,
              Ib = "quest_talk" === bb.waypoint.markerIcon ? function(bb, cb, sb) {
                if (!bb.text || null === bb.blockHeight || 0 === bb.nearness) return bb;
                const kb = bb.blockHeight / 100 * sb.height,
                  Wb = -bb.nearness * (cs * kb + cb.width / 2),
                  ab = bb.nearness * (ss * kb + cb.height / 2);
                return {
                  ...bb,
                  text: {
                    x: bb.text.x + Wb / sb.width * 100,
                    y: bb.text.y + ab / sb.height * 100
                  }
                }
              }(bb.waypoint, this.waypointMarkerSize, this.viewport) : bb.waypoint,
              Mb = (0, Jc.e)(Ib, cb, this.viewport),
              Xb = Hb * Hb * (3 - 2 * Hb),
              nb = Hb < 1 ? fb.x + (Mb.x - fb.x) * Xb : Mb.x,
              mb = Hb < 1 ? fb.y + (Mb.y - fb.y) * Xb : Mb.y;
            sb.style.translate = `${nb}vw ${mb}vh`, kb.style.clipPath = `inset(${cb.top}px ${cb.x}px ${cb.bottom}px)`, bs(Wb, Hb < 1 || !bb.waypoint.text), Wb.style.opacity = String(1 - bb.waypoint.nearness), bb.waypoint.text && (Wb.style.translate = `${bb.waypoint.text.x}vw ${bb.waypoint.text.y}vh`), ab.textContent !== bb.waypoint.name && (ab.textContent = bb.waypoint.name), this.markerIcon !== bb.waypoint.markerIcon && (this.markerIcon = bb.waypoint.markerIcon, sb.replaceChildren(oc(this.markerIcon))), Tb.textContent !== bb.waypoint.distance && (Tb.textContent = bb.waypoint.distance), bs(Ub, null === bb.waypoint.hint), null !== bb.waypoint.hint && Ub.textContent !== bb.waypoint.hint && (Ub.textContent = bb.waypoint.hint)
          }
        }
      }
      dispose() {
        var bb, cb;
        this.mountWaypointOrigin(null), this.render(null), null === (bb = this.stopLayout) || void 0 === bb || bb.call(this), this.stopLayout = null, null === (cb = this.stopWaypoint) || void 0 === cb || cb.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.Em = !0
      }
    }

    function bs(bb, cb) {
      bb.hidden !== cb && (bb.hidden = cb)
    }
    const cs = .55,
      ss = .6;
    const ks = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class Ws {
      constructor(bb, cb, sb, kb) {
        this.map = bb, this.quests = cb, this.compass = sb, this.display = new pc, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.Em = !1, this.snapshot = null, this.texts = new Map, this.translate = kb
      }
      setTranslator(bb, cb) {
        this.translate = bb, this.locale = cb, this.metresFormat = new Intl.NumberFormat(cb), this.texts.clear()
      }
      translateCached(bb, cb) {
        const sb = void 0 === cb ? bb : `${bb} ${cb}`;
        let kb = this.texts.get(sb);
        return void 0 === kb && (this.texts.size >= 500 && this.texts.clear(), kb = this.translate(bb, void 0 === cb ? void 0 : {
          distance: cb
        }), this.texts.set(sb, kb)), kb
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(bb, cb, sb) {
        if (this.Em) return;
        if (!bb) return this.snapshot = null, void this.display.render(null);
        const kb = this.map.getSnapshot().map,
          Ib = sb.cameraHeading,
          Hb = {
            ...this.display.compassSize,
            tanHalfFovX: sb.tanHalfFovX,
            pitch: sb.cameraPitch
          },
          fb = [];
        if (kb)
          for (const Wb of this.compass.frame(bb, Ib, cb)) {
            const bb = lb(Wb.offset, Hb);
            null !== bb && fb.push({
              ...Wb,
              left: bb
            })
          }
        const Mb = function(bb, cb) {
            const sb = [],
              kb = bb => "quest" === bb.kind ? bb.distance - 1 : bb.distance,
              Wb = [...bb].sort(((bb, cb) => kb(bb) - kb(cb) || bb.id.localeCompare(cb.id)));
            for (const ab of Wb) {
              let bb = !1;
              if ("quest" !== ab.kind)
                for (const kb of sb)
                  if (Math.abs(kb.left - ab.left) < cb) {
                    bb = !0;
                    break
                  } bb || sb.push(ab)
            }
            return sb
          }(fb, this.display.compassSpacing),
          Xb = function(bb) {
            let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              sb = null;
            for (const kb of bb) Math.abs(kb.offset) <= cb && (!sb || kb.distance < sb.distance || kb.distance === sb.distance && Math.abs(kb.offset) < Math.abs(sb.offset)) && (sb = kb);
            return sb
          }(Mb),
          nb = bb => {
            var cb;
            return null !== (cb = bb.displayName) && void 0 !== cb ? cb : this.translateCached(bb.nameKey)
          },
          mb = {
            compass: {
              markers: Mb.map((bb => ({
                id: bb.id,
                icon: bb.icon,
                colour: bb.colour,
                name: nb(bb),
                left: bb.left
              }))),
              cardinals: Tb.map((bb => {
                let {
                  name: cb,
                  bearing: sb
                } = bb;
                const kb = lb(Wb.d.computeShortestRotation(Ib, sb), Hb);
                return {
                  name: cb,
                  left: null !== kb && void 0 !== kb ? kb : 0,
                  hidden: null === kb
                }
              })),
              label: Xb ? `${nb(Xb)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",ub(Xb.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== kb && void 0 !== kb && kb.background) {
          const cb = bb[0] - kb.mapOrigin[0],
            sb = bb[2] - kb.mapOrigin[2],
            {
              rotation: Wb,
              transform: Tb
            } = function(bb, cb, sb, kb) {
              const [Wb, Tb] = Ub(bb, cb, kb), Ib = ab - sb;
              return {
                rotation: Ib,
                transform: `rotate(${Ib}rad) translate(-${Wb}%, -${Tb}%)`
              }
            }(cb, sb, Ib, kb.background.bounds);
          mb.minimap = {
            transform: Tb,
            iconRotation: -Wb + "rad"
          };
          const [Hb, fb] = Ub(cb, sb, kb.background.bounds);
          mb.player = {
            left: Hb,
            top: fb,
            hidden: Hb < 0 || fb < 0 || Hb > 100 || fb > 100,
            rotation: -Wb + "rad"
          }
        }
        const {
          waypoint: Qb
        } = this.quests.getSnapshot();
        if ("search" === (null === Qb || void 0 === Qb ? void 0 : Qb.questMarkerIcon) && null !== kb && void 0 !== kb && kb.background) {
          const {
            bounds: bb
          } = kb.background, [cb, sb] = Ub(Qb.position[0] - kb.mapOrigin[0], Qb.position[2] - kb.mapOrigin[2], bb);
          mb.searchArea = {
            left: cb,
            top: sb,
            width: 6400 / (bb.mapMaxX - bb.mapMinX),
            height: 6400 / (bb.mapMaxZ - bb.mapMinZ),
            shapeSeed: Qb.nameKey
          }
        }
        const eb = this.quests.getNotificationSnapshot(),
          Cb = "completion" === (null === eb || void 0 === eb ? void 0 : eb.phase) && !hc(eb.kind);
        if (Qb && !Cb) {
          const cb = Math.hypot(...Qb.position.map(((cb, sb) => cb - bb[sb]))),
            kb = Math.round(cb),
            Wb = "talk" === Qb.questMarkerIcon ? Math.min(1, Math.max(0, (10 - cb) / 5)) : 0,
            ab = sb.projectWorldPosToViewport(Qb.position),
            Tb = ab && sb.projectWorldPosToViewport([Qb.position[0], Qb.position[1] - 1, Qb.position[2]]);
          mb.waypoint = {
            ...sb.projectWorldPosToScreenPos(Qb.position),
            text: ab,
            nearness: Wb * Wb * (3 - 2 * Wb),
            blockHeight: ab && Tb ? Tb.y - ab.y : null,
            name: this.translateCached(Qb.nameKey),
            nameKey: Qb.nameKey,
            markerIcon: Qb.questMarkerIcon ? ks[Qb.questMarkerIcon] : "quest",
            popupToken: (null === eb || void 0 === eb ? void 0 : eb.waypointNameKey) === Qb.nameKey ? eb.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(kb)),
            hint: "search" === Qb.questMarkerIcon && Math.hypot(Qb.position[0] - bb[0], Qb.position[2] - bb[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = mb, this.display.render(mb)
      }
      dispose() {
        this.Em = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const as = "skyblockSkillsView";
    class Ts extends Mb {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          sb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb => bb,
          kb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          Wb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : bb => bb;
        super(bb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = cb, this.translate = sb, this.locale = kb, this.itemName = Wb, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
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
      setTranslator(bb, cb, sb) {
        this.translate = bb, this.locale = cb, this.itemName = sb, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(bb) {
        let cb = this.skillText.get(bb);
        return cb || (cb = {
          label: this.translate(`skyblockGame:${bb}`),
          description: this.translate(`skyblockGame:${bb}Description`)
        }, this.skillText.set(bb, cb)), cb
      }
      sources(bb) {
        if ("mining" === bb || "fishing" === bb) return this.buildSources(bb);
        let cb = this.sourceText.get(bb);
        return cb || (cb = this.buildSources(bb), this.sourceText.set(bb, cb)), cb
      }
      buildSources(bb) {
        const cb = this.translate;
        return "exploration" === bb ? [cb("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), cb("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === bb ? [cb("skyblockGame:logSource", {
          xp: this.number(nc["Maple Log"])
        })] : "combat" === bb ? [cb("skyblockGame:creatureKillSource"), cb("skyblockGame:noEnvironmentalXp")] : "farming" === bb ? [cb("skyblockGame:cropSource", {
          xp: this.number(Qc["Wheat|FreshlyGrown"])
        }), cb("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), cb("skyblockGame:noYoungCropXp")] : Object.entries("mining" === bb ? lc : ec).map((bb => {
          let [sb, kb] = bb;
          return cb("skyblockGame:itemXpSource", {
            item: this.itemName(sb),
            xp: this.number(kb)
          })
        }))
      }
      number(bb) {
        return bb.toLocaleString(this.locale)
      }
      benefit(bb, cb) {
        const sb = Tc(bb, cb);
        return this.translate(sb.translationKey, {
          bonus: this.number(sb.percent)
        })
      }
      Km(bb) {
        if (!this.Em) {
          if ("snapshot" === bb.kind) this.progress = bb.progress, this.pending.clear(), this.recent = null;
          else if ("award" === bb.kind && this.progress) {
            const {
              award: cb
            } = bb;
            this.progress = {
              ...this.progress,
              [cb.skill]: cb.after
            };
            for (const [bb, kb] of this.pending) kb.skill === cb.skill && this.pending.delete(bb);
            const sb = cb.after.level > cb.before.level;
            this.recordGain(cb.skill, cb.amount, sb ? ++this.nextLevelUpToken : null), sb && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: cb.skill,
              beforeLevel: cb.before.level,
              level: cb.after.level
            })
          } else {
            if ("rejectBlock" === bb.kind) return void this.rejectBlock(bb.position);
            if ("open" === bb.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(bb, cb, sb) {
        if (!this.progress || this.Em || sb) return;
        const kb = function(bb, cb) {
          const sb = bb.split("|")[0];
          return "Air" === cb || cb === `Barkless ${bb}` ? Object.hasOwn(nc, sb) ? {
            skill: "foraging",
            amount: nc[sb]
          } : "Air" !== cb ? null : Object.hasOwn(lc, bb) ? {
            skill: "mining",
            amount: lc[bb]
          } : fc(bb) ? {
            skill: "farming",
            amount: 10
          } : Xc(bb) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(Qc, bb) ? {
            skill: "farming",
            amount: Qc[bb]
          } : Object.hasOwn(Zb, bb) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(cb, "Air");
        if (!kb) return;
        const Wb = bb.join(",");
        if (this.pending.has(Wb)) return;
        const ab = this.predictedProgress(kb.skill).totalXp + kb.amount;
        Number.isSafeInteger(ab) && (this.pending.set(Wb, {
          ...kb,
          expires: this.now() + 2e3
        }), this.recordGain(kb.skill, 0), this.emit())
      }
      rejectBlock(bb) {
        this.pending.delete(bb.join(",")) && this.emit()
      }
      aX() {
        if (this.Em) return;
        let bb = !1;
        for (const [cb, sb] of this.pending) sb.expires <= this.now() && (this.pending.delete(cb), bb = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, bb = !0), bb && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(bb, cb) {
        var sb, kb;
        let Wb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const ab = (null === (sb = this.recent) || void 0 === sb ? void 0 : sb.skill) === bb && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          Tb = (null === (kb = this.recent) || void 0 === kb ? void 0 : kb.skill) === bb && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: bb,
          confirmed: ab + cb,
          expires: this.now() + 3e3,
          levelUpToken: null !== Wb && void 0 !== Wb ? Wb : Tb
        }
      }
      pendingXp(bb) {
        let cb = 0;
        for (const sb of this.pending.values()) sb.skill === bb && (cb += sb.amount);
        return cb
      }
      predictedProgress(bb) {
        const cb = this.progress[bb],
          sb = this.pendingXp(bb);
        return sb ? Ic(cb.totalXp + sb, bb) : cb
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var bb, cb, sb;
        const kb = this.progress ? Fb.map((bb => {
            const cb = this.predictedProgress(bb);
            return {
              ...this.text(bb),
              icon: Cc[bb],
              benefit: this.benefit(bb, cb.level),
              sources: this.sources(bb),
              id: bb,
              selected: bb === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(cb.level)
              }),
              xp: null === cb.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(cb.xpIntoLevel),
                target: this.number(cb.xpForNextLevel)
              }),
              percent: null === cb.xpForNextLevel ? 100 : Math.min(100, cb.xpIntoLevel / cb.xpForNextLevel * 100)
            }
          })) : [],
          Wb = kb.find((bb => {
            var cb;
            return bb.id === (null === (cb = this.recent) || void 0 === cb ? void 0 : cb.skill)
          })),
          ab = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: kb,
          detail: null !== (bb = kb.find((bb => bb.selected))) && void 0 !== bb ? bb : null,
          overallLevel: this.progress ? Fb.reduce(((bb, cb) => bb + this.predictedProgress(cb).level), 0) : null,
          hud: Wb && ab > 0 ? {
            skill: Wb,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(ab)
            }),
            levelUpToken: null !== (cb = null === (sb = this.recent) || void 0 === sb ? void 0 : sb.levelUpToken) && void 0 !== cb ? cb : null,
            colour: Vc(Wb.id)
          } : null
        }
      }
    }
    const Us = Math.max(1600, 600, 950) + 400,
      Is = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      Hs = "skyblockQuestsView",
      fs = "skyblockQuestNotificationView";
    class Ms extends Mb {
      constructor(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          Tb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(bb, kb, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = cb, this.translate = sb, this.now = Wb, this.locale = ab, this.publishNotification = Tb, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var bb, cb;
          this.selected = null !== (bb = null === (cb = this.authoritative) || void 0 === cb ? void 0 : cb.trackedQuestId) && void 0 !== bb ? bb : null, this.show()
        }, this.select = bb => {
          this.selected = bb, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const bb = this.snapshot.detail;
          !this.Em && null !== bb && void 0 !== bb && bb.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(bb.id), this.emit())
        }, this.viewDialogue = () => {
          const bb = this.snapshot.detail;
          var cb;
          bb && (null === (cb = this.onViewDialogue) || void 0 === cb || cb.call(this, bb.id))
        }, this.notifications = new uc(Wb, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var bb, cb;
        return null !== (bb = null === (cb = this.authoritative) || void 0 === cb ? void 0 : cb.trackedQuestId) && void 0 !== bb ? bb : null
      }
      notify(bb) {
        !this.Em && this.notifications.enqueue(bb) && this.emitNotification()
      }
      setNotificationsHeld(bb) {
        (this.notifications.setHeld(bb) || bb) && this.emitNotification()
      }
      aX() {
        var bb, cb;
        if (this.Em) return;
        this.notifications.aX() && this.emitNotification();
        let sb = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, sb = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, sb = !0);
        const kb = Xs(this.authoritative);
        null !== kb && void 0 !== kb && null !== (bb = kb.questClock) && void 0 !== bb && bb.running && this.clockText(kb) !== (null === (cb = this.snapshot.tracked) || void 0 === cb ? void 0 : cb.clock) && (sb = !0), sb && this.emit()
      }
      setTranslator(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = bb, this.locale = cb, this.emitNotification(), this.emit()
      }
      Km(bb) {
        if (!this.Em)
          if ("completion" === bb.kind) this.notify(bb.questCompletion);
          else if ("landmark" === bb.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: bb.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === bb.kind) {
          var cb, sb, kb;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: bb.npcNoteTitleKey,
            textKey: bb.npcNoteTextKey,
            params: null !== (cb = bb.npcNoteParams) && void 0 !== cb ? cb : {},
            nameKeys: null !== (sb = bb.npcNoteNameKeys) && void 0 !== sb ? sb : {},
            iconItem: null !== (kb = bb.npcNoteIconItem) && void 0 !== kb ? kb : null
          })
        } else if ("open" === bb.kind) this.show();
        else if ("guidance" === bb.kind) this.waypoint = bb.waypoint, this.compassTarget = bb.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === bb.kind) {
          this.authoritative = bb.snapshot, this.notifications.aX() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const cb = this.trackedStepPulse;
          this.updateTrackedStepPulse(bb.snapshot), this.emit(), this.trackedStepPulse > cb && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.Em || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var bb;
        return null !== (bb = this.translateWithIcons) && void 0 !== bb ? bb : this.translate
      }
      clockText(bb) {
        const cb = bb.questClock;
        if (!cb) return null;
        const sb = cb.elapsedMs + (cb.running ? this.now() - this.receivedAt : 0);
        return void 0 === cb.countdownFromMs ? Eb(sb, !1) : Eb(1e3 * Math.ceil(Math.max(0, cb.countdownFromMs - sb) / 1e3), !1)
      }
      updateTrackedStepPulse(bb) {
        var cb, sb, kb;
        const Wb = Xs(bb);
        if (!Wb) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const ab = bb => Wb.subquests.filter((cb => bb(cb.status))).map((bb => bb.id)),
          Tb = ab((bb => "completed" === bb || "skipped" === bb)),
          Ub = ab((bb => "locked" !== bb)),
          Ib = (null === (cb = this.trackedSteps) || void 0 === cb ? void 0 : cb.questId) === Wb.id && Wb.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (Ib) {
          const bb = Tb.filter((bb => !Ib.finished.has(bb))),
            cb = ab((bb => "active" === bb || "ready" === bb)).filter((bb => !Ib.unlocked.has(bb)));
          bb.length > 0 && this.trackedStepPulse++, (bb.length > 0 || cb.length > 0) && (this.trackedChange = {
            finished: new Set(bb),
            unlocked: new Set(cb),
            expiresAt: this.now() + Us
          })
        } else {
          var Hb;
          this.trackedStepPulse = (null === (Hb = this.trackedSteps) || void 0 === Hb ? void 0 : Hb.questId) === Wb.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: Wb.id,
          progress: Wb.progress,
          finished: new Set([...null !== (sb = null === Ib || void 0 === Ib ? void 0 : Ib.finished) && void 0 !== sb ? sb : [], ...Tb]),
          unlocked: new Set([...null !== (kb = null === Ib || void 0 === Ib ? void 0 : Ib.unlocked) && void 0 !== kb ? kb : [], ...Ub])
        }
      }
      entry(bb, cb) {
        var sb, kb;
        const Wb = bb.id === (null === (sb = this.authoritative) || void 0 === sb ? void 0 : sb.trackedQuestId),
          ab = this.now() < this.trackAvailableAt,
          Tb = this.questTextTranslator(),
          Ub = bb.subquests.map((cb => {
            var sb, kb, ab, Ub, Ib, Hb;
            const fb = null !== (sb = cb.handInNpcName) && void 0 !== sb ? sb : bb.giverName,
              Mb = this.translate("skyblockGame:progress", {
                current: cb.progress.toLocaleString(this.locale),
                target: cb.target.toLocaleString(this.locale)
              }),
              Xb = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: fb ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [cb.status],
              nb = "active" === cb.status || "ready" === cb.status;
            return {
              id: cb.id,
              name: Lc(Tb, cb.nameKey, cb.nameParams),
              description: Lc(Tb, cb.descriptionKey, cb.descriptionParams),
              progress: Mb,
              status: cb.status,
              statusLabel: Xb ? this.translate(Xb, {
                npc: fb
              }) : Mb,
              iconItem: nb && null !== (kb = cb.questIconItem) && void 0 !== kb ? kb : null,
              barPercent: "active" === cb.status && cb.showsProgressBar ? Math.min(100, 100 * cb.progress / cb.target) : null,
              justFinished: Wb && null !== (ab = null === (Ub = this.trackedChange) || void 0 === Ub ? void 0 : Ub.finished.has(cb.id)) && void 0 !== ab && ab,
              justUnlocked: Wb && null !== (Ib = null === (Hb = this.trackedChange) || void 0 === Hb ? void 0 : Hb.unlocked.has(cb.id)) && void 0 !== Ib && Ib
            }
          }));
        return {
          id: bb.id,
          name: Lc(Tb, bb.nameKey, bb.nameParams),
          description: Lc(Tb, bb.descriptionKey, bb.descriptionParams),
          progress: cb ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: bb.progress.toLocaleString(this.locale),
            target: bb.target.toLocaleString(this.locale)
          }),
          completed: cb,
          tracked: Wb,
          selected: bb.id === this.selected,
          canTrack: !cb && !Wb && !ab,
          trackLabel: this.translate(Wb ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : ab ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== bb.id,
          subquests: Ub,
          focusStep: null !== (kb = Ub.find((bb => null !== bb.barPercent))) && void 0 !== kb ? kb : null,
          clock: this.clockText(bb)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb;
        const fb = [...null !== (bb = null === (cb = this.authoritative) || void 0 === cb ? void 0 : cb.active) && void 0 !== bb ? bb : [], ...null !== (sb = null === (kb = this.authoritative) || void 0 === kb ? void 0 : kb.completed) && void 0 !== sb ? sb : []];
        var Mb, Xb, nb, mb;
        fb.some((bb => bb.id === this.selected)) || (this.selected = null !== (Mb = null !== (Xb = null === (nb = this.authoritative) || void 0 === nb ? void 0 : nb.trackedQuestId) && void 0 !== Xb ? Xb : null === (mb = fb[0]) || void 0 === mb ? void 0 : mb.id) && void 0 !== Mb ? Mb : null);
        const lb = null !== (Wb = null === (ab = this.authoritative) || void 0 === ab ? void 0 : ab.active.map((bb => this.entry(bb, !1)))) && void 0 !== Wb ? Wb : [];
        lb.sort(((bb, cb) => Number(cb.tracked) - Number(bb.tracked)));
        const Qb = null !== (Tb = null === (Ub = this.authoritative) || void 0 === Ub ? void 0 : Ub.completed.map((bb => this.entry(bb, !0)))) && void 0 !== Tb ? Tb : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: lb,
          completed: Qb,
          completedExpanded: this.completedExpanded,
          detail: null !== (Ib = [...lb, ...Qb].find((bb => bb.selected))) && void 0 !== Ib ? Ib : null,
          tracked: null !== (Hb = lb.find((bb => bb.tracked))) && void 0 !== Hb ? Hb : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function Xs(bb) {
      var cb;
      return null !== (cb = null === bb || void 0 === bb ? void 0 : bb.active.find((cb => cb.id === bb.trackedQuestId))) && void 0 !== cb ? cb : null
    }
    const ns = "skyblockDungeonsView";
    class ms extends Mb {
      constructor(bb, cb) {
        let sb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          kb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(bb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = cb, this.locale = sb, this.requestEnter = kb, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
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
            cb = null === bb || void 0 === bb ? void 0 : bb.difficulties[this.pageIndex];
          void 0 !== cb && null !== cb.unlockedBoss && (this.close(), this.requestEnter(bb.id, cb.difficulty))
        }
      }
      setTranslator(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = bb, this.locale = cb, this.emit()
      }
      Km(bb) {
        var cb, sb;
        if (!this.Em) return "open" === bb.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== bb.kind ? "snapshot" === bb.kind && (this.authoritative = bb.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (cb = null === (sb = this.pickerEntry()) || void 0 === sb ? void 0 : sb.difficulties.length) && void 0 !== cb ? cb : 1) - 1)), null === bb.snapshot && this.open ? this.close() : this.emit()) : this.choose(bb.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(bb) {
        var cb;
        const sb = null === (cb = this.authoritative) || void 0 === cb ? void 0 : cb.dungeons.find((cb => cb.id === bb));
        void 0 !== sb ? this.open && this.pickerDungeonId === bb || (this.pickerDungeonId = bb, this.pageIndex = Math.max(0, sb.difficulties.findLastIndex((bb => null !== bb.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${bb}`)
      }
      turnTo(bb) {
        var cb, sb;
        const kb = null !== (cb = null === (sb = this.pickerEntry()) || void 0 === sb ? void 0 : sb.difficulties.length) && void 0 !== cb ? cb : 0;
        bb < 0 || bb >= kb || bb === this.pageIndex || (this.pageIndex = bb, this.emit())
      }
      pickerEntry() {
        var bb, cb;
        return null !== (bb = null === (cb = this.authoritative) || void 0 === cb ? void 0 : cb.dungeons.find((bb => bb.id === this.pickerDungeonId))) && void 0 !== bb ? bb : null
      }
      difficulty(bb) {
        const cb = bb.completions > 0,
          sb = null === bb.bestMs ? null : Eb(bb.bestMs);
        return {
          difficulty: bb.difficulty,
          label: this.translate(Pb[bb.difficulty]),
          colour: Db[bb.difficulty],
          beaten: cb,
          bestTime: sb,
          completions: bb.completions,
          summary: cb ? [null === sb ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: sb
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: bb.completions.toLocaleString(this.locale)
          })].filter((bb => null !== bb)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(bb) {
        const cb = bb.difficulties.map((bb => this.difficulty(bb))),
          sb = cb.filter((bb => bb.beaten)).length;
        return {
          id: bb.id,
          name: this.translate(bb.nameKey),
          selected: bb.id === this.selected,
          beatenSummary: `${sb} / ${cb.length}`,
          difficulties: cb
        }
      }
      picker() {
        const bb = this.pickerEntry();
        if (null === bb || 0 === bb.difficulties.length) return null;
        const cb = bb.difficulties.map(((cb, sb) => {
          var kb, Wb, ab, Tb;
          const Ub = cb.unlockedBoss,
            Ib = null === Ub ? this.lockedHint(bb, sb) : null;
          return {
            ...this.difficulty(cb),
            unlocked: null !== Ub,
            bossName: null === Ub ? null : this.translate(Ub.bossNameKey),
            bossMobType: null !== (kb = null === Ub || void 0 === Ub ? void 0 : Ub.bossMobType) && void 0 !== kb ? kb : null,
            bossMobVariation: null !== (Wb = null === Ub || void 0 === Ub ? void 0 : Ub.bossMobVariation) && void 0 !== Wb ? Wb : null,
            lockedHint: null !== (ab = null === Ib || void 0 === Ib ? void 0 : Ib.text) && void 0 !== ab ? ab : null,
            lockedHintHighlight: null !== (Tb = null === Ib || void 0 === Ib ? void 0 : Ib.highlight) && void 0 !== Tb ? Tb : null,
            current: sb === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(bb.nameKey),
          pages: cb,
          page: cb[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < cb.length - 1
        }
      }
      lockedHint(bb, cb) {
        var sb, kb, Wb;
        if (0 === cb && "number" === typeof bb.combatLevelLock) {
          const cb = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: bb.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: cb,
            colour: Vc("combat"),
            icon: Cc.combat
          })
        }
        const ab = null !== (sb = null === (kb = this.authoritative) || void 0 === kb ? void 0 : kb.dungeons) && void 0 !== sb ? sb : [],
          Tb = cb > 0 ? bb : null !== (Wb = ab[ab.indexOf(bb) - 1]) && void 0 !== Wb ? Wb : null,
          Ub = cb > 0 ? bb.difficulties[cb - 1] : null === Tb || void 0 === Tb ? void 0 : Tb.difficulties[0];
        if (null === Tb || void 0 === Ub) return null;
        const Ib = this.translate(Tb.nameKey);
        if (null === Ub.unlockedBoss) return Tb === bb ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, Ub.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: Ib
        }, Ub.difficulty);
        const Hb = this.translate(Ub.unlockedBoss.bossNameKey);
        return Tb === bb ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: Hb
        }, Ub.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: Hb,
            dungeon: Ib
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(bb, cb, sb) {
        return this.hintHighlighting(bb, cb, "difficulty", {
          name: this.translate(Pb[sb]),
          colour: Db[sb],
          icon: null
        })
      }
      hintHighlighting(bb, cb, sb, kb) {
        let {
          name: Wb,
          colour: ab,
          icon: Tb
        } = kb;
        const Ub = this.translate(bb, {
          ...cb,
          [sb]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(bb, {
            ...cb,
            [sb]: Wb
          }),
          highlight: 2 === Ub.length ? {
            before: Ub[0],
            name: Wb,
            after: Ub[1],
            colour: ab,
            icon: Tb
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var bb, cb, sb;
        const kb = null !== (bb = null === (cb = this.authoritative) || void 0 === cb ? void 0 : cb.dungeons) && void 0 !== bb ? bb : [];
        var Wb, ab;
        kb.some((bb => bb.id === this.selected)) || (this.selected = null !== (Wb = null === (ab = kb[0]) || void 0 === ab ? void 0 : ab.id) && void 0 !== Wb ? Wb : null);
        const Tb = kb.map((bb => this.entry(bb)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: Tb,
          detail: null !== (sb = Tb.find((bb => bb.selected))) && void 0 !== sb ? sb : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const ls = ["mining", "farming", "foraging", "fishing", "combat"],
      Qs = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      es = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function Cs() {
      for (var bb = arguments.length, cb = new Array(bb), sb = 0; sb < bb; sb++) cb[sb] = arguments[sb];
      return cb.map(((bb, cb) => ({
        amount: bb,
        coins: Qs[cb],
        xp: es[cb]
      })))
    }
    const Ns = Cs(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      Vs = Cs(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      Ls = Cs(50, 100, 250, 500, 1e3, 2500, 5e3),
      us = Cs(25, 50, 100, 250, 500, 1e3),
      Ys = Cs(10, 25, 50, 100, 250, 500, 1e3),
      hs = Cs(1, 5, 10, 25, 50);

    function gs(bb, cb) {
      return {
        id: bb,
        category: "fishing",
        item: cb,
        drops: [cb],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ys
      }
    }
    const Bs = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: Vs
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: Ls
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: Ls
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: us
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: us
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: Vs
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: Ns
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: Ns
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: Ns
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: Ls
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: Vs
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: Vs
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: Vs
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: Ls
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: Ls
      }, gs("wheatfish", "Wheatfish"), gs("darter", "Darter"), gs("sunset_minnow", "Sunset Minnow"), gs("root_flounder", "Root Flounder"), gs("greenfin_loach", "Greenfin Loach"), gs("red_strongfish", "Red Strongfish"), gs("green_strongfish", "Green Strongfish"), gs("boomerang_fish", "Boomerang Fish"), gs("seahorse", "Seahorse"), gs("spined_stickleback", "Spined Stickleback"), gs("moon_strongfish", "Moon Strongfish"), gs("boulder_bass", "Boulder Bass"), gs("grass_snapper", "Grass Snapper"), gs("crystal_wheatfish", "Crystalized Wheatfish", hs), gs("moonstone_pupfish", "Moonstone Pupfish", hs), gs("reedglass_minnow", "Reedglass Minnow"), gs("mangrove_herring", "Mangrove Herring"), gs("mudline_perch", "Mudline Perch"), gs("coastal_mullet", "Coastal Mullet"), gs("reef_sardine", "Reef Sardine"), gs("root_perch", "Root Perch"), gs("driftwood_catfish", "Driftwood Catfish"), gs("aether_minnow", "Aether Minnow"), gs("needlefish", "Tri-Pointed Needlefish"), gs("threadfin_bream", "Threadfin Bream"), gs("mudbelly_tilapia", "Mudbelly Tilapia"), gs("rotslab_eel", "Rotslab Eel"), gs("polarflash_electron", "Polarflash Electron"), gs("mireback_carp", "Mireback Carp"), gs("blackwater_bream", "Blackwater Bream"), gs("stone_grouper", "Stone Grouper"), gs("shadeback_ray", "Shadeback Ray"), gs("glacial_silverfish", "Glacial Silverfish"), gs("hatchetfish", "Hatchetfish"), gs("moonlit_boomerang", "Moonlit Boomerang Fish"), gs("murkborne_ray", "Murkborne Ray"), gs("bamboo_catfish", "Bamboo Catfish"), gs("mossback_arapaima", "Mossback Arapaima"), gs("murk_stingray", "Murk Stingray"), gs("channel_sawfish", "Channel Sawfish"), gs("boned_sturgeon", "Boned Sturgeon"), gs("oarfish", "Oarfish"), gs("snakehead", "Snakehead", hs), gs("eldertide_leviathan", "Eldertide Leviathan", hs), gs("pithead", "Pithead"), gs("electric_eel", "Electric Eel"), gs("shadow_darter", "Shadow Darter"), gs("abyss_carp", "Abyss Carp"), gs("nomai_moray", "Nomai Moray"), gs("silver_dragonfish", "Silver Dragonfish"), gs("giant_moray", "Giant Moray"), gs("coelacanth", "Coelacanth", hs), gs("frost_herring", "Frost Herring"), gs("permafrost_halibut", "Permafrost Halibut"), gs("glacial_lanternfish", "Glacial Lanternfish"), gs("frozen_grenadier", "Frozen Grenadier"), gs("blackfin_icefish", "Blackfin Icefish"), gs("moonfish", "Moonfish"), gs("alpha_strongfish", "Alpha Moon Strongfish"), gs("deep_lanternfish", "Deepwater Lanternfish", hs), gs("pearlescent_moonfish", "Pearlescent Moonfish", hs), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: Vs
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: us
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: us
      }],
      ts = (new Map(Bs.map((bb => [bb.id, bb]))), new Map),
      ys = new Map;
    for (const fI of Bs) {
      for (const [bb, cb] of Object.entries(null !== (Ps = fI.blocks) && void 0 !== Ps ? Ps : {})) {
        var Ps;
        ts.set(bb, {
          collection: fI,
          amount: cb
        })
      }
      for (const bb of null !== (Ds = fI.drops) && void 0 !== Ds ? Ds : []) {
        var Ds;
        ys.set(bb, fI)
      }
    }

    function Es(bb, cb) {
      let sb = 0;
      for (; sb < bb.tiers.length && cb >= bb.tiers[sb].amount;) sb++;
      return sb
    }
    const is = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function Os(bb) {
      return is[bb - 1]
    }
    const Gs = "skyblockCollectionsView";
    class Ks extends Mb {
      constructor(bb, cb) {
        let sb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          kb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : bb => bb;
        super(bb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = cb, this.locale = sb, this.itemName = kb, this.counts = null, this.category = "mining", this.selected = Bs[0].id, this.snapshot = {
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
      setTranslator(bb, cb, sb) {
        this.translate = bb, this.locale = cb, this.itemName = sb, this.emit()
      }
      Km(bb) {
        if (!this.Em)
          if ("collOpen" !== bb.kind) {
            (bb.collFull || null === this.counts) && (this.counts = new Map);
            for (const [cb, sb] of bb.collCounts) this.counts.set(cb, sb);
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
        const cb = this.inCategory(this.category).map((bb => this.collectionView(bb))),
          sb = Bs.reduce(((bb, cb) => bb + this.tierOf(cb)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: ls.map((bb => this.categoryView(bb))),
          collections: cb,
          detail: null !== (bb = cb.find((bb => bb.selected))) && void 0 !== bb ? bb : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(sb)
          })
        }
      }
      categoryView(bb) {
        const cb = this.inCategory(bb),
          sb = cb.reduce(((bb, cb) => bb + this.tierOf(cb)), 0),
          kb = cb.reduce(((bb, cb) => bb + cb.tiers.length), 0);
        return {
          id: bb,
          label: this.translate(`skyblockGame:${bb}`),
          icon: Cc[bb],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(sb),
            target: this.number(kb)
          }),
          selected: bb === this.category
        }
      }
      collectionView(bb) {
        var cb, sb;
        const kb = null !== (cb = this.counts.get(bb.id)) && void 0 !== cb ? cb : 0,
          Wb = Es(bb, kb),
          ab = null !== (sb = bb.tiers[Wb]) && void 0 !== sb ? sb : null,
          Tb = 0 === Wb ? 0 : bb.tiers[Wb - 1].amount;
        return {
          id: bb.id,
          name: this.itemName(bb.item),
          icon: bb.item,
          selected: bb.id === this.selected,
          locked: 0 === kb,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(kb)
          }),
          tier: 0 === Wb ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(Wb),
          percent: null === ab ? 100 : Math.min(100, (kb - Tb) / (ab.amount - Tb) * 100),
          progress: null === ab ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(kb),
            target: this.number(ab.amount)
          }),
          nextReward: null === ab ? null : this.reward(bb, ab.coins, ab.xp)
        }
      }
      reward(bb, cb, sb) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(cb),
          xp: this.number(sb),
          skill: this.translate(`skyblockGame:${bb.category}`)
        })
      }
      tierLabel(bb) {
        return this.translate("skyblockGame:collectionTier", {
          tier: Os(bb)
        })
      }
      tierOf(bb) {
        var cb;
        return Es(bb, null !== (cb = this.counts.get(bb.id)) && void 0 !== cb ? cb : 0)
      }
      inCategory(bb) {
        return Bs.filter((cb => cb.category === bb))
      }
      number(bb) {
        return bb.toLocaleString(this.locale)
      }
    }
    const Zs = "skyblockPortalTransitView",
      zs = "skyblockPortalArrival";
    class qs {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.QQ = bb, this.storage = cb, this.now = sb, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      Km(bb) {
        const cb = {
          zoneNameKey: bb.transitZoneNameKey,
          variation: bb.transitZoneVariation,
          colour: bb.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(zs, cb), this.show("departure", cb.zoneNameKey, cb.colour, bb.transitDurationMs, bb.transitDurationMs + 1500, (() => {
          this.storage.removeItem(zs)
        }))
      }
      resumeArrival(bb) {
        const cb = this.storage.getItem(zs);
        this.storage.removeItem(zs), null === cb || cb.variation !== bb || this.now() - cb.departedAt > 3e4 || this.show("arrival", cb.zoneNameKey, cb.colour, 3200, 2e4)
      }
      finishArrival(bb) {
        var cb;
        "arrival" === (null === (cb = this.view) || void 0 === cb ? void 0 : cb.phase) && this.view.token === bb && (this.clearTimer(), this.view = null, this.QQ(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(bb, cb, sb, kb, Wb, ab) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: bb,
          zoneNameKey: cb,
          colour: sb,
          durationMs: kb
        }, this.QQ(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.QQ(null), null === ab || void 0 === ab || ab()
        }), Wb)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const ds = "skyblockDailyRewardView",
      As = "skyblockDailyRewardCoin";
    class ws {
      constructor(bb, cb, sb, kb) {
        let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          Tb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          Ub = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          Ib = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.QQ = bb, this.isBusy = cb, this.holdQuestPopups = sb, this.onHeldCoinsChanged = kb, this.onCoinLanded = Wb, this.onStarted = ab, this.onFinished = Tb, this.onItemLanded = Ub, this.now = Ib, this.qU = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var bb, cb;
        return null !== (bb = null === (cb = this.playing) || void 0 === cb ? void 0 : cb.view) && void 0 !== bb ? bb : null
      }
      getHeldCoins() {
        var bb, cb;
        let sb = 0;
        for (const kb of this.qU) sb += kb.coins;
        return sb - (null !== (bb = null === (cb = this.playing) || void 0 === cb ? void 0 : cb.released) && void 0 !== bb ? bb : 0)
      }
      Km(bb) {
        "dailyRewardClaimed" !== bb.kind ? (this.queue.push(bb), this.aX()) : this.qU.push({
          coins: bb.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      aX() {
        const bb = this.now();
        if (null === this.playing) return this.releaseUnshown(bb), void this.startNext(bb);
        const cb = this.playing,
          sb = bb - cb.startedAt,
          kb = cb.view.flyingCoins,
          Wb = function(bb, cb) {
            let sb = 0;
            for (; sb < cb && os(sb, cb) <= bb;) sb++;
            return sb
          }(sb, kb);
        if (Wb !== cb.landed) {
          for (let bb = Wb - cb.landed > 2 ? Wb - 1 : cb.landed; bb < Wb; bb++) this.onCoinLanded(bb, kb);
          cb.landed = Wb, cb.released = Math.round(cb.view.coins * Wb / kb), this.onHeldCoinsChanged()
        }
        for (; cb.itemsLanded < cb.view.items.length && 2e3 + 160 * cb.itemsLanded + 630 <= sb;) this.onItemLanded(cb.itemsLanded), cb.itemsLanded++;
        sb >= cb.view.durationMs && (this.finish(), this.startNext(bb))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.qU = [], this.QQ(null)
      }
      startNext(bb) {
        if (0 === this.queue.length || this.isBusy()) return;
        const cb = this.queue.shift();
        this.token++;
        const sb = {
          token: this.token,
          day: cb.dailyRewardDay,
          coins: cb.dailyRewardCoins,
          items: cb.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: cb.dailyRewardDay === Bb ? 24 : 14
        };
        this.playing = {
          view: sb,
          startedAt: bb,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.QQ(sb), this.onStarted(sb)
      }
      finish() {
        this.qU.shift(), this.playing = null, this.holdQuestPopups(!1), this.QQ(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(bb) {
        if (this.queue.length > 0 || 0 === this.qU.length) return;
        const cb = this.qU.length;
        this.qU = this.qU.filter((cb => bb - cb.receivedAt < 6e4)), this.qU.length !== cb && this.onHeldCoinsChanged()
      }
    }

    function rs(bb, cb) {
      return 450 + 715 * bb / (cb - 1)
    }

    function os(bb, cb) {
      return rs(bb, cb) + 650
    }
    const Ss = "skyblockMailboxView";
    class Rs {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.QQ = bb, this.isBusy = cb, this.onStarted = sb, this.now = kb, this.waiting = [], this.playing = null, this.token = 0, this.itemName = bb => bb
      }
      getSnapshot() {
        var bb, cb;
        return null !== (bb = null === (cb = this.playing) || void 0 === cb ? void 0 : cb.view) && void 0 !== bb ? bb : null
      }
      setItemName(bb) {
        this.itemName = bb
      }
      Km(bb) {
        this.waiting.push(...bb.mailLetters), this.aX()
      }
      aX() {
        const bb = this.now();
        null !== this.playing && bb - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.QQ(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(bb)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.QQ(null)
      }
      start(bb) {
        const cb = this.waiting.slice(0, 3);
        this.token++;
        const sb = {
          token: this.token,
          letters: cb.map((bb => this.toView(bb))),
          more: this.waiting.length - cb.length,
          durationMs: 4500 + 700 * cb.length
        };
        this.waiting = [], this.playing = {
          view: sb,
          startedAt: bb
        }, this.QQ(sb), this.onStarted(sb)
      }
      toView(bb) {
        return {
          coins: bb.mailCoins,
          items: bb.mailItems.map((bb => {
            var cb;
            return {
              itemName: bb.mailItemName,
              amount: bb.mailItemAmount,
              label: null !== (cb = bb.mailItemLabel) && void 0 !== cb ? cb : this.itemName(bb.mailItemName)
            }
          })),
          reasonKey: bb.mailReasonKey,
          reasonParams: bb.mailReasonParams
        }
      }
    }
    const vs = "skyblockQuestGraphView",
      Fs = "skyblockDevQuestJump";

    function xs(bb) {
      if (0 === bb.length) return "";
      const cb = [`M ${bb[0].x} ${bb[0].y}`];
      for (let kb = 1; kb < bb.length - 1; kb++) {
        const sb = bb[kb + 1];
        cb.push(`Q ${bb[kb].x} ${bb[kb].y} ${(bb[kb].x+sb.x)/2} ${(bb[kb].y+sb.y)/2}`)
      }
      const sb = bb[bb.length - 1];
      return cb.push(`L ${sb.x} ${sb.y}`), cb.join(" ")
    }

    function ps(bb, cb) {
      return bb < cb ? `${bb}|${cb}` : `${cb}|${bb}`
    }
    class bk extends Mb {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          Tb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          Ub = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(bb, sb, kb), this.translate = cb, this.requestJump = Wb, this.requestArrive = ab, this.storage = Tb, this.now = Ub, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
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
      Km(bb) {
        if (!this.Em)
          if ("graph" !== bb.kind) {
            if ("jumping" === bb.kind) {
              const cb = {
                questId: bb.graphQuestId,
                variation: bb.graphVariation,
                completes: bb.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(Fs, cb)
            }
          } else {
            const cb = ++this.graphCount;
            sb.e(111).then((() => sb(6099))).then((sb => {
              let {
                default: kb
              } = sb;
              this.Em || cb !== this.graphCount || (this.layout = function(bb, cb, sb) {
                var kb, Wb;
                const ab = new bb.graphlib.Graph;
                ab.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), ab.setDefaultEdgeLabel((() => ({})));
                const Tb = new Set;
                for (const fb of cb) Tb.add(fb.graphQuestId), ab.setNode(fb.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const Ub = sb.filter((bb => Tb.has(bb.graphFromId) && Tb.has(bb.graphToId) && bb.graphFromId !== bb.graphToId)),
                  Ib = new Map;
                for (const fb of [...Ub].sort(((bb, cb) => Number("awaits" === bb.graphEdgeKind) - Number("awaits" === cb.graphEdgeKind)))) {
                  const bb = ps(fb.graphFromId, fb.graphToId);
                  Ib.has(bb) || (Ib.set(bb, fb), ab.setEdge(fb.graphFromId, fb.graphToId))
                }
                bb.layout(ab);
                const Hb = ab.graph();
                return {
                  width: Math.ceil(null !== (kb = Hb.width) && void 0 !== kb ? kb : 0),
                  height: Math.ceil(null !== (Wb = Hb.height) && void 0 !== Wb ? Wb : 0),
                  nodes: cb.map((bb => {
                    var cb, sb;
                    const kb = ab.node(bb.graphQuestId);
                    return {
                      node: bb,
                      left: (null !== (cb = kb.x) && void 0 !== cb ? cb : 0) - 95,
                      top: (null !== (sb = kb.y) && void 0 !== sb ? sb : 0) - 26
                    }
                  })),
                  edges: Ub.map((bb => {
                    var cb;
                    const sb = Ib.get(ps(bb.graphFromId, bb.graphToId)),
                      kb = null !== (cb = ab.edge(sb.graphFromId, sb.graphToId).points) && void 0 !== cb ? cb : [];
                    return {
                      edge: bb,
                      key: `${bb.graphFromId}|${bb.graphToId}|${bb.graphEdgeKind}`,
                      path: xs(sb.graphFromId === bb.graphFromId ? kb : [...kb].reverse())
                    }
                  })),
                  plans: new Map(cb.map((bb => [bb.graphQuestId, new Set([bb.graphQuestId, ...bb.graphPlanIds])])))
                }
              }(kb, bb.graphNodes, bb.graphEdges), this.show())
            })).catch((bb => {
              console.error("The quest graph could not be laid out", bb)
            }))
          }
      }
      resumeJump(bb) {
        const cb = this.storage.getItem(Fs);
        this.storage.removeItem(Fs), null === cb || cb.variation !== bb || this.now() - cb.departedAt > 6e4 || this.requestArrive(cb.questId, cb.completes)
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
        var bb, cb;
        return null !== (bb = null === this.hoveredId || null === (cb = this.layout) || void 0 === cb ? void 0 : cb.plans.get(this.hoveredId)) && void 0 !== bb ? bb : new Set
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
        const cb = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: bb.width,
          height: bb.height,
          nodes: bb.nodes.map((bb => {
            let {
              node: sb,
              left: kb,
              top: Wb
            } = bb;
            return {
              id: sb.graphQuestId,
              name: this.translate(sb.graphNameKey),
              detail: null === sb.graphGiverName ? sb.graphZoneId : `${sb.graphGiverName} \xb7 ${sb.graphZoneId}`,
              state: sb.graphState,
              left: kb,
              top: Wb,
              inPlan: cb.has(sb.graphQuestId),
              hovered: sb.graphQuestId === this.hoveredId
            }
          })),
          edges: bb.edges.map((bb => {
            let {
              edge: sb,
              key: kb,
              path: Wb
            } = bb;
            return {
              key: kb,
              kind: sb.graphEdgeKind,
              path: Wb,
              inPlan: cb.has(sb.graphFromId) && cb.has(sb.graphToId)
            }
          })),
          planning: cb.size > 0
        }
      }
    }
    var ck = sb(36623);
    const sk = 250,
      kk = 2150,
      Wk = -2.8,
      ak = 2.2,
      Tk = -27,
      Uk = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      Ik = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      Hk = Math.round(50 + 1e3 * (Ik.delay + Ik.period / 2)),
      fk = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      Mk = Array.from({
        length: 26
      }, ((bb, cb) => {
        const sb = 2.39996 * cb,
          kb = .5 + .618034 * cb % 1 * .23,
          Wb = cb % 3 !== 2;
        return {
          rune: Wb ? fk[7 * cb % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(sb)*kb).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(sb)*kb).toFixed(3)})`,
            "--spin": 40 * (cb % 5 - 2) + "deg",
            "--size": (Wb ? 1 + cb % 4 * .2 : .3 + cb % 2 * .15) + "rem",
            "--duration": `${(1.8+7*cb%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*cb%3).toFixed(2)}s`
          }
        }
      }));

    function Xk(bb, cb) {
      return Array.from({
        length: 30 + 3 * bb + (cb ? 10 : 0)
      }, ((bb, cb) => {
        const sb = cb < 4,
          kb = sb ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          Wb = sb ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          ab = sb ? 2.2 : .6 + Math.random(),
          Tb = sb ? .3 : Math.random() < .5 ? .16 : .24,
          Ub = sb ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": kb,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${Wb.toFixed(2)}rem`,
          "--length": `${ab.toFixed(2)}rem`,
          "--width": `${Tb}rem`,
          "--duration": `${Math.round(Ub)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function nk(bb) {
      let {
        zeta: cb,
        period: sb
      } = bb;
      const kb = 2 * Math.PI / sb;
      return {
        w: kb,
        decay: cb * kb / Math.sqrt(1 - cb * cb)
      }
    }
    let mk = !1;

    function lk() {
      if (mk) return;
      mk = !0;
      const bb = document.createElement("style");
      bb.textContent = function() {
        const bb = nk(Uk),
          cb = nk(Ik),
          sb = cb => Math.exp(-bb.decay * cb) * Math.sin(bb.w * cb),
          kb = sb(Math.atan(bb.w / bb.decay) / bb.w),
          Wb = .25,
          ab = 2.15,
          Tb = Math.round(215),
          Ub = [];
        for (let Ib = 0; Ib <= Tb; Ib++) {
          const bb = Ib / Tb * ab;
          let Hb = Math.sin(Math.min(bb, Wb) / Wb * Math.PI / 2) ** 2,
            fb = 0,
            Mb = 1,
            Xb = 1 - .2 * Hb,
            nb = 1;
          if (bb >= Wb) {
            const Tb = bb - Wb,
              Ub = Math.max(0, Tb - .05);
            Hb = Math.exp(-Ub / .05), fb = sb(Ub + Uk.lead * (1 - Math.exp(-Ub / Uk.rush))) / kb;
            const Ib = Ub - Ik.delay,
              mb = Ib <= 0 ? 0 : 1 - Math.exp(-cb.decay * Ib) * (Math.cos(cb.w * Ib) + cb.decay / cb.w * Math.sin(cb.w * Ib)),
              lb = Math.max(0, (bb - 1.77) / (ab - 1.77));
            Mb = (1 + (Ik.to - 1) * mb) * (1 + .08 * lb), Xb = 1.1 + 1.5 * Math.exp(-Tb / .07) + .3 * Math.exp(-(((1e3 * Tb - Hk) / 100) ** 2)) + .8 * lb, nb = 1 - lb ** 1.5
          }
          const mb = .15 * Hb + Wk * fb,
            lb = -.1 * Hb + ak * fb,
            Qb = 3 * Hb + Tk * fb;
          Ub.push(`${(Ib/Tb*100).toFixed(3)}% { opacity: ${nb.toFixed(3)}; transform: translate(${mb.toFixed(3)}rem, ${lb.toFixed(3)}rem) rotate(${Qb.toFixed(2)}deg) scale(${Mb.toFixed(3)}); filter: brightness(${Xb.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${Ub.join(" ")} }`
      }(), document.head.append(bb)
    }
    const Qk = "skyblockForgeView",
      ek = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class Ck extends Mb {
      constructor(bb, cb, sb, kb, Wb) {
        super(bb, sb, kb), this.translate = cb, this.requestForge = Wb, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.select = (bb, cb) => {
          var sb, kb;
          null !== this.forging || (null !== (sb = this.owned[(0, ck.u)(cb, bb)]) && void 0 !== sb ? sb : 0) <= 0 || (this.selected[bb] = this.selected[bb] === cb ? null : cb, this.status = null, null === (kb = this.onPartSelected) || void 0 === kb || kb.call(this), this.emit())
        }, this.forge = bb => {
          var cb, sb;
          const kb = this.selectedParts();
          if (null === kb || this.isPending() || !this.open) return;
          const Wb = (0, ck.q)(kb);
          if (null === Wb || Wb.coalCost > this.coal) return;
          const ab = this.preview(Wb),
            Tb = null !== (cb = null === (sb = this.onForgeStarted) || void 0 === sb ? void 0 : sb.call(this, ab.tier, ab.named, bb)) && void 0 !== cb ? cb : () => {};
          if (this.dropArrival(), bb) {
            const bb = {
              id: ++this.forgeId,
              preview: ab,
              timers: [],
              stopSounds: Tb,
              landed: !1,
              reply: null
            };
            bb.timers.push(setTimeout((() => {
              bb.landed = !0, null !== bb.reply && (this.apply(bb.reply), bb.reply = null, this.emit())
            }), sk), setTimeout((() => {
              this.finishForge(bb)
            }), kk)), this.forging = bb
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(kb)
        }, this.snapshot = this.buildSnapshot()
      }
      Km(bb) {
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === bb.forgeMessageKind) return this.dropForge(), this.apply(bb), this.status = null, void this.show();
        const cb = this.forging;
        if (null !== cb && null !== bb.forgeRefusalKey) this.dropForge();
        else if (null !== cb && !cb.landed) return void(cb.reply = bb);
        this.apply(bb), this.emit()
      }
      apply(bb) {
        if (this.owned = bb.forgeOwnedParts, this.coal = bb.forgeCoalOwned, this.keepSelectionOwned("open" === bb.forgeMessageKind), null !== bb.forgeForgedSwordId) {
          var cb;
          const sb = (0, ck.q)(bb.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (cb = null === sb || void 0 === sb ? void 0 : sb.displayName) && void 0 !== cb ? cb : ""
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
        var cb;
        this.forging = null;
        const sb = this.selectedParts(),
          kb = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: bb.id,
          sameSword: null !== sb && (null === (cb = (0, ck.q)(sb)) || void 0 === cb ? void 0 : cb.displayName) === bb.preview.name,
          timer: kb
        }, this.emit()
      }
      dropForge() {
        const bb = this.forging;
        if (null !== bb) {
          this.forging = null;
          for (const cb of bb.timers) clearTimeout(cb);
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
        var bb, cb, sb;
        const kb = this.selectedParts(),
          Wb = null === kb ? null : (0, ck.q)(kb),
          ab = null !== (bb = null === (cb = this.forging) || void 0 === cb ? void 0 : cb.preview) && void 0 !== bb ? bb : null === Wb ? null : this.preview(Wb);
        return {
          enabled: this.received,
          open: this.open,
          slots: ck.n.map((bb => ({
            kind: bb,
            label: this.translate(ek[bb]),
            parts: this.partsFor(bb)
          }))),
          coalOwned: this.coal,
          preview: ab,
          unformedSword: ck.l[null !== (sb = this.selected.Blade) && void 0 !== sb ? sb : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((bb => bb > 0)),
          canForge: null !== ab && !ab.coalShort && !this.isPending(),
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
        const cb = [];
        for (const kb of ck.h) {
          var sb;
          const Wb = (0, ck.u)(kb, bb),
            ab = null !== (sb = this.owned[Wb]) && void 0 !== sb ? sb : 0;
          ab > 0 && cb.push({
            material: kb,
            itemName: Wb,
            owned: ab,
            selected: this.selected[bb] === kb,
            placeholder: !1
          })
        }
        if (0 === cb.length) {
          const sb = ck.h[0];
          cb.push({
            material: sb,
            itemName: (0, ck.u)(sb, bb),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return cb
      }
      stats(bb) {
        const cb = [{
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
        return bb.reachBonus > 0 && cb.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${bb.reachBonus.toFixed(1)}`,
          better: !0
        }), bb.damageReduction > 0 && cb.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*bb.damageReduction)}%`,
          better: !0
        }), cb
      }
      selectedParts() {
        const {
          Blade: bb,
          Guard: cb,
          Handle: sb
        } = this.selected;
        return null === bb || null === cb || null === sb ? null : {
          blade: bb,
          guard: cb,
          handle: sb
        }
      }
      keepSelectionOwned(bb) {
        for (const sb of ck.n) {
          var cb;
          const kb = this.selected[sb];
          if (null !== kb && (null !== (cb = this.owned[(0, ck.u)(kb, sb)]) && void 0 !== cb ? cb : 0) > 0) continue;
          if (!bb) {
            this.selected[sb] = null;
            continue
          }
          const Wb = [...ck.h].reverse().find((bb => {
            var cb;
            return (null !== (cb = this.owned[(0, ck.u)(bb, sb)]) && void 0 !== cb ? cb : 0) > 0
          }));
          this.selected[sb] = null !== Wb && void 0 !== Wb ? Wb : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const Nk = "skyblockSmugglerView",
      Vk = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class Lk extends Mb {
      constructor(bb, cb, sb, kb, Wb) {
        let ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(bb, sb, kb), this.translate = cb, this.requestBuy = Wb, this.now = ab, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = bb => bb, this.onBought = null, this.buy = bb => {
          const cb = this.deals[bb];
          void 0 !== cb && !this.isPending() && this.open && !this.soldOut.has(bb) && this.canAfford(cb) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, bb))
        }, this.snapshot = this.buildSnapshot()
      }
      Km(bb) {
        if (this.received = !0, this.day = bb.smugglerDay, this.deals = bb.smugglerDeals, this.rivets = bb.smugglerRivetsOwned, this.crests = bb.smugglerCrestsOwned, this.soldOut = new Set(bb.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + bb.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === bb.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = bb.smugglerBoughtSlot, null !== bb.smugglerBoughtSlot) {
          var cb, sb;
          const kb = this.deals[bb.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === kb ? "" : this.dealName(kb),
              amount: String(null !== (cb = null === kb || void 0 === kb ? void 0 : kb.smugglerDealAmount) && void 0 !== cb ? cb : 0)
            }
          }, this.boughtCount++, null === (sb = this.onBought) || void 0 === sb || sb.call(this)
        } else null !== bb.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: bb.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(bb, cb, sb) {
        this.translate = bb, void 0 !== sb && (this.itemName = sb), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(bb) {
        if (null !== bb.smugglerDealUniqueName) return bb.smugglerDealUniqueName;
        const cb = Vk[bb.smugglerDealItem];
        return void 0 === cb ? this.itemName(bb.smugglerDealItem) : this.translate(cb)
      }
      canAfford(bb) {
        return bb.smugglerDealRivets <= this.rivets && bb.smugglerDealCrests <= this.crests
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
        const bb = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return bb <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : bb < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(bb)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(bb / 60)),
          minutes: String(bb % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((bb, cb) => ({
            slot: cb,
            itemName: bb.smugglerDealItem,
            displayName: this.dealName(bb),
            enchantmentTier: bb.smugglerDealEnchantmentTier,
            amount: bb.smugglerDealAmount,
            rivets: bb.smugglerDealRivets,
            crests: bb.smugglerDealCrests,
            affordable: this.canAfford(bb),
            soldOut: this.soldOut.has(cb),
            justBought: this.boughtSlot === cb
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
    const uk = "skyblockPassageView",
      Yk = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function hk(bb, cb) {
      return bb(Yk[cb])
    }

    function Jk(bb, cb, sb, kb) {
      const Wb = Math.ceil((sb - kb) / 864e5),
        ab = hk(bb, cb);
      return Wb > 1 ? bb("skyblockGame:passageNextDays", {
        phase: ab,
        days: String(Wb)
      }) : bb("skyblockGame:passageNextSoon", {
        phase: ab
      })
    }
    class gk extends Mb {
      constructor(bb, cb, sb, kb) {
        let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(bb, sb, kb), this.translate = cb, this.now = Wb, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = bb => bb, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      Km(bb) {
        this.message = bb, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(bb, cb, sb) {
        this.translate = bb, void 0 !== sb && (this.itemName = sb), this.emit()
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
          phaseName: hk(this.translate, bb.passagePhase),
          visitors: bb.passageVisitors.map((bb => this.describe(bb))),
          resting: this.describe(bb.passageResting),
          nextPhase: bb.passageNextPhase,
          next: Jk(this.translate, bb.passageNextPhase, bb.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var Bk = sb(38152);
    const tk = "skyblockKeepersChairView";
    class yk extends Mb {
      constructor(bb, cb, sb, kb, Wb) {
        let ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          Tb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new Bk.b;
        super(bb, sb, kb), this.translate = cb, this.requestAim = Wb, this.now = ab, this.pacer = Tb, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = bb => bb, this.aim = bb => {
          !this.awaitingReply && this.open && this.atChair && bb !== this.favoured && (null === bb || this.islands.some((cb => cb.keepersChairIslandId === bb && cb.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== bb && void 0 !== bb ? bb : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Tb.subscribe((() => {
          this.emit()
        }))
      }
      Km(bb) {
        var cb, sb;
        this.received = !0;
        const kb = this.favoured,
          Wb = this.atChair;
        var ab;
        return this.islands = bb.keepersChairIslands, this.favoured = bb.keepersChairFavoured, this.passage = null !== (cb = bb.keepersChairPassage) && void 0 !== cb ? cb : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (sb = bb.keepersChairAtChair) || void 0 === sb || sb, "place" === bb.keepersChairMessageKind ? (!Wb && this.atChair && "refused" === (null === (ab = this.status) || void 0 === ab ? void 0 : ab.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === bb.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== bb.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: bb.keepersChairRefusalKey,
          island: null
        } : this.favoured !== kb && (this.status = null === this.favoured ? {
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
      setTranslator(bb, cb, sb) {
        this.translate = bb, void 0 !== sb && (this.itemName = sb), this.emit()
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
        const cb = this.islands.find((cb => cb.keepersChairIslandId === bb));
        return void 0 === cb ? bb : this.translate(cb.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const bb = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          cb = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((bb => {
            const cb = bb.keepersChairFeaturedFish;
            return {
              id: bb.keepersChairIslandId,
              name: this.translate(bb.keepersChairIslandNameKey),
              relit: bb.keepersChairIslandRelit,
              featuredFish: null === cb ? null : {
                itemName: cb,
                displayName: this.itemName(cb)
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
          almanac: null === cb ? null : {
            phase: cb.keepersChairPassagePhase,
            phaseName: hk(this.translate, cb.keepersChairPassagePhase),
            nextPhase: cb.keepersChairPassageNextPhase,
            next: Jk(this.translate, cb.keepersChairPassageNextPhase, cb.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const Pk = "skyblockReachLogView",
      Dk = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      Ek = "Caught Fish",
      ik = [1, 2, 4];

    function Ok(bb, cb) {
      return bb.map((bb => ({
        ...bb,
        reachLogPageFish: bb.reachLogPageFish.map((bb => ({
          ...bb,
          reachLogFishFresh: cb(bb)
        })))
      })))
    }
    class Gk extends Mb {
      constructor(bb, cb, sb, kb, Wb) {
        let ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new Bk.b;
        super(bb, sb, kb), this.translate = cb, this.requestOpen = Wb, this.pacer = ab, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = bb => bb, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = bb => {
          this.pages.some((cb => cb.reachLogIslandId === bb)) && (this.selected = bb, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = ab.subscribe((() => {
          this.emit()
        }))
      }
      Km(bb) {
        if (this.received = !0, "status" === bb.reachLogMessageKind) return !0 === bb.reachLogNews && this.markNews(), this.serverFresh = bb.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const cb = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== bb.reachLogMessageKind)
          if (this.pageViews = null, this.pages = Ok(bb.reachLogPages, (bb => bb.reachLogFishFresh || this.heldFresh.has(bb.reachLogFishItem))), this.letGoShown = bb.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, cb) this.showPages();
          else {
            for (const bb of this.pages)
              for (const cb of bb.reachLogPageFish) cb.reachLogFishFresh && this.heldFresh.add(cb.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(bb, cb, sb) {
        this.translate = bb, this.pageViews = null, void 0 !== sb && (this.itemName = sb), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = Ok(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var bb, cb, sb, kb;
        const Wb = this.pages.find((bb => bb.reachLogPageFish.some((bb => bb.reachLogFishFresh))));
        if (void 0 !== Wb) return Wb.reachLogIslandId;
        if (null !== this.selected && this.pages.some((bb => bb.reachLogIslandId === this.selected))) return this.selected;
        return null !== (bb = null !== (cb = null === (sb = this.pages.filter((bb => bb.reachLogIslandAwake)).at(-1)) || void 0 === sb ? void 0 : sb.reachLogIslandId) && void 0 !== cb ? cb : null === (kb = this.pages[0]) || void 0 === kb ? void 0 : kb.reachLogIslandId) && void 0 !== bb ? bb : null
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
          var cb;
          return {
            id: bb.reachLogIslandId,
            name: this.translate(bb.reachLogIslandNameKey),
            awake: bb.reachLogIslandAwake,
            gold: bb.reachLogPageGold,
            caught: bb.reachLogPageFish.filter((bb => bb.reachLogFishCaught && !bb.reachLogFishVisitor)).length,
            total: bb.reachLogPageFish.filter((bb => !bb.reachLogFishVisitor)).length,
            fish: bb.reachLogPageFish.map((bb => {
              const cb = bb.reachLogFishBestKg;
              return {
                itemName: bb.reachLogFishItem,
                name: bb.reachLogFishCaught ? this.itemName(bb.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: bb.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / bb.reachLogFishChance))
                }),
                best: bb.reachLogFishCaught ? null === cb ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: cb.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: bb.reachLogFishMarks,
                ribbons: ik.map((cb => 0 !== (bb.reachLogFishRibbons & cb))),
                glimmer: 0 !== (8 & bb.reachLogFishRibbons),
                halo: 0 !== (32 & bb.reachLogFishRibbons),
                fresh: bb.reachLogFishFresh,
                visitor: bb.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (cb = bb.reachLogPageReturner) && void 0 !== cb ? cb : null)
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
    const Kk = "skyblockLampLightView";
    class Zk {
      constructor(bb, cb, sb, kb) {
        this.QQ = bb, this.translate = cb, this.requestCommand = sb, this.pacer = kb, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.Em = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = bb => {
          bb ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = bb => {
          this.send(`buy ${bb}`)
        }, this.socket = bb => {
          this.send(`socket ${null!==bb&&void 0!==bb?bb:Ob}`)
        }, this.wearTint = bb => {
          this.send(`tint ${null!==bb&&void 0!==bb?bb:Ob}`)
        }, this.setSituation = bb => {
          this.situation = bb, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = kb.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = kb.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      Km(bb) {
        if (this.message = bb, null !== bb.lampLightShop && (this.shop = bb.lampLightShop), "open" === bb.lampLightKind && (this.refusalKey = null), "reply" === bb.lampLightKind) {
          var cb;
          const Wb = null !== (cb = bb.lampLightReplyTag) && void 0 !== cb ? cb : null,
            ab = null !== Wb && Wb === this.offTag;
          var sb, kb;
          if (ab ? this.settleOff() : null !== Wb && Wb !== this.awaitingTag || this.settleReply(), this.refusalKey = bb.lampLightRefusalKey, null !== bb.lampLightBought && !ab) this.sparkle = {
            id: bb.lampLightBought,
            count: (null !== (sb = null === (kb = this.sparkle) || void 0 === kb ? void 0 : kb.count) && void 0 !== sb ? sb : 0) + 1
          }
        }
        bb.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === bb.lampLightKind && (this.lastGained = bb.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(bb) {
        bb !== this.atChair && (this.atChair = bb, bb && (this.refusalKey = null), this.emit())
      }
      setTranslator(bb, cb) {
        this.translate = bb, this.locale = null !== cb && void 0 !== cb ? cb : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.Em = !0
      }
      send(bb) {
        var cb;
        if (null !== this.awaitingTag || "ready" !== (null === (cb = this.message) || void 0 === cb ? void 0 : cb.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const sb = this.nextTag();
        this.awaitingTag = sb, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${bb} ${sb}`), this.emit()
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
        this.Em || (this.snapshot = this.buildSnapshot(), this.QQ(this.snapshot))
      }
      formatLight(bb) {
        return Math.floor(bb).toLocaleString(this.locale)
      }
      formatPercent(bb) {
        const cb = 100 * bb;
        return cb >= 10 ? Math.round(cb).toLocaleString(this.locale) : cb.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(bb, cb) {
        if ("bite" === bb) return this.translate("skyblockGame:lampLightBite", {
          seconds: (cb.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === bb) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(cb.lampLightRareChance)
        });
        if ("notice" === bb) return null === cb.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(cb.lampLightNoticeChance)
        });
        const sb = "meter" === bb ? cb.lampLightMeterCatches : cb.lampLightBloomCatches;
        return null === sb ? null : this.translate("meter" === bb ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(sb))
        })
      }
      oddsLines(bb, cb) {
        const sb = (bb, cb) => {
            var sb;
            return null !== (sb = {
              bite: cb.lampLightBiteMs,
              rare: cb.lampLightRareChance,
              meter: cb.lampLightMeterCatches,
              bloom: cb.lampLightBloomCatches,
              notice: cb.lampLightNoticeChance
            } [bb]) && void 0 !== sb ? sb : 0
          },
          kb = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          Wb = [];
        for (const ab of ["bite", "rare", "meter", "bloom", "notice"]) {
          const Tb = this.formatOdds(ab, bb),
            Ub = this.formatOdds(ab, cb);
          if (null === Tb || null === Ub || "bite" !== ab && "rare" !== ab && Tb === Ub) continue;
          const Ib = sb(ab, cb) - sb(ab, bb),
            Hb = kb[ab] ? Ib < 0 : Ib > 0;
          Wb.push({
            label: ab,
            before: Tb,
            after: Ub,
            tone: Tb === Ub ? "same" : Hb ? "better" : "worse"
          })
        }
        return Wb
      }
      charmView(bb, cb, sb) {
        const kb = bb.lampLightCharmId.charAt(0).toUpperCase() + bb.lampLightCharmId.slice(1),
          Wb = "bloom" === this.situation;
        return {
          id: bb.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${kb}`),
          effect: this.translate(`skyblockGame:lampLightCharm${kb}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(bb.lampLightCharmCost)
          }),
          owned: bb.lampLightCharmOwned,
          affordable: sb >= bb.lampLightCharmCost,
          socketed: cb.lampLightSocketed === bb.lampLightCharmId,
          lines: this.oddsLines(Wb ? cb.lampLightBareBloom : cb.lampLightBareOpen, Wb ? bb.lampLightCharmBloom : bb.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var bb, cb, sb, kb;
        const Wb = this.message,
          ab = "ready" === (null === Wb || void 0 === Wb ? void 0 : Wb.lampLightStatus) ? this.shop : null,
          Tb = null !== (bb = null === Wb || void 0 === Wb ? void 0 : Wb.lampLightBalance) && void 0 !== bb ? bb : 0,
          Ub = this.atChair,
          Ib = "loading" === (null === Wb || void 0 === Wb ? void 0 : Wb.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === Wb || void 0 === Wb ? void 0 : Wb.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          Hb = "ready" !== (null === Wb || void 0 === Wb ? void 0 : Wb.lampLightStatus) || Ub ? null !== (cb = this.refusalKey) && void 0 !== cb ? cb : Ib : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== Wb && "locked" !== Wb.lampLightStatus,
          status: null !== (sb = null === Wb || void 0 === Wb ? void 0 : Wb.lampLightStatus) && void 0 !== sb ? sb : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(Tb)
          }),
          releasing: null !== (kb = null === Wb || void 0 === Wb ? void 0 : Wb.lampLightReleasing) && void 0 !== kb && kb,
          gained: null === Wb || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === Wb || void 0 === Wb ? void 0 : Wb.lampLightStatus) && Ub && !this.isPending(),
          situation: this.situation,
          shop: null === ab ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: ab.lampLightOddsRod,
              island: this.translate(ab.lampLightIslandNameKey)
            }),
            heldRod: null !== ab.lampLightHeldRod,
            charms: ab.lampLightCharms.map((bb => this.charmView(bb, ab, Tb))),
            tints: ab.lampLightTints.map((bb => {
              const cb = bb.lampLightTintId,
                [sb, kb, Wb] = bb.lampLightTintColour;
              return {
                id: cb,
                name: this.translate(`skyblockGame:lampLightTint${cb.charAt(0).toUpperCase()}${cb.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(bb.lampLightTintCost)
                }),
                owned: bb.lampLightTintOwned,
                affordable: Tb >= bb.lampLightTintCost,
                wearing: ab.lampLightTint === cb,
                colour: `rgb(${sb}, ${kb}, ${Wb})`
              }
            })),
            wearingIslandColours: null === ab.lampLightTint
          },
          notice: null === Hb ? null : this.translate(Hb),
          sparkle: this.sparkle
        }
      }
    }
    const zk = "skyblockMagmawardView";
    class qk {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.QQ = bb, this.now = cb, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = Ab.map((() => 0)), this.wornAt = Ab.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      Km(bb) {
        var cb, sb;
        const kb = Ab.map(((cb, sb) => !0 === bb.magmawardPiecesWorn[sb]));
        if (!kb.includes(!0)) return this.snapshot = null, void this.QQ(null);
        const Wb = this.now(),
          ab = this.snapshot;
        null === ab && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const Tb = bb.magmawardFuelCarried,
          Ub = !kb.includes(!1);
        let Ib = null !== (cb = null === ab || void 0 === ab ? void 0 : ab.pulse) && void 0 !== cb ? cb : null,
          Hb = null !== (sb = null === ab || void 0 === ab ? void 0 : ab.flare) && void 0 !== sb ? sb : null;
        bb.magmawardFuelBurned ? (Ib = "burn", Hb = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = Wb, this.flareAt = Wb) : null !== ab && Tb > ab.fuel && (Ib = "gain", this.pulseToken++, this.pulseAt = Wb), Ub && null !== ab && !ab.fullSet && (Hb = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = Wb, this.setLitAt = Wb);
        const fb = Ab.map(((bb, cb) => (kb[cb] && null !== ab && !ab.pieces[cb].worn && (this.wornTokens[cb]++, this.wornAt[cb] = Wb), {
          itemName: bb,
          worn: kb[cb],
          wornToken: this.wornTokens[cb],
          justWorn: kb[cb] && this.isPlaying(this.wornAt[cb], Wb)
        })));
        this.snapshot = {
          pieces: fb,
          wornCount: kb.filter(Boolean).length,
          fullSet: Ub,
          fuel: Tb,
          fuelState: Tb <= 0 ? "empty" : Tb <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, Wb) ? Ib : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, Wb) ? Hb : null,
          flareToken: this.flareToken,
          setLit: Ub && this.isPlaying(this.setLitAt, Wb),
          setLitToken: this.setLitToken
        }, this.QQ(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.QQ(null)
      }
      isPlaying(bb, cb) {
        return cb - bb < 1200
      }
    }
    const dk = "skyblockGlowtideView";
    class Ak {
      constructor(bb) {
        this.QQ = bb, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = bb => {
          this.arrow = bb, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      Km(bb) {
        this.bloom = bb.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.QQ(null))
      }
      afterRender(bb, cb) {
        const sb = this.bloom;
        if (null === sb || null === bb) return;
        const kb = sb.glowtideBloomX - bb[0],
          ab = sb.glowtideBloomZ - bb[2],
          Tb = Math.hypot(kb, ab),
          Ub = this.snapshot,
          Ib = null !== Ub && void 0 !== Ub && Ub.inRange ? 1 : 0,
          Hb = Tb <= 12.5 + Ib && bb[1] - sb.glowtideBloomY <= 10 + Ib;
        !Hb || null !== Ub && void 0 !== Ub && Ub.inRange || this.inRangeToken++;
        const fb = {
          colour: sb.glowtideBloomColour,
          inRange: Hb,
          distance: Math.round(Tb),
          inRangeToken: this.inRangeToken
        };
        (null === Ub || fb.colour !== Ub.colour || fb.inRange !== Ub.inRange || !Hb && fb.distance !== Ub.distance) && (this.snapshot = fb, this.QQ(fb));
        const Mb = Wb.d.computeShortestRotation(cb, (0, Wb.Fb)([kb, 0, ab]));
        null === this.arrow || Math.abs(Mb - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${Mb}rad)`, this.arrowTurn = Mb)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.QQ(null)
      }
    }
    const wk = "skyblockGlowMeterView";
    class rk {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.QQ = bb, this.now = cb, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      Km(bb) {
        const cb = this.now(),
          {
            glowMeterFill: sb,
            glowMeterCapacity: kb
          } = bb,
          Wb = sb >= kb,
          ab = this.snapshot;
        null !== ab && (Wb && !ab.full && (this.fullToken++, this.fullAt = cb), ab.full && !Wb ? (this.burstToken++, this.burstAt = cb) : sb > ab.fill && (this.gainToken++, this.gainAt = cb)), this.snapshot = {
          fill: sb,
          GM: kb,
          ratio: Math.min(1, Math.max(0, sb / kb)),
          full: Wb,
          rares: bb.glowMeterRares,
          ready: Wb && this.isPlaying(this.fullAt, cb),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, cb),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, cb),
          gainToken: this.gainToken
        }, this.QQ(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.QQ(null)
      }
      isPlaying(bb, cb) {
        return cb - bb < 2e3
      }
    }
    const Sk = "skyblockHushWaitView";
    class Rk {
      constructor(bb) {
        this.QQ = bb, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      Km(bb) {
        let {
          hushWaitMs: cb,
          hushWaitTotalMs: sb,
          hushWaitLines: kb
        } = bb;
        if (this.clearTimers(), this.token++, 0 === kb.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (cb <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: kb[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const Wb = Math.max(null !== sb && void 0 !== sb ? sb : cb, cb),
          ab = Wb - cb,
          Tb = bb => Wb * bb / kb.length,
          Ub = bb => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: Wb,
              elapsedMs: ab,
              line: kb[bb],
              lineIndex: bb
            })
          };
        let Ib = 0;
        for (; Ib + 1 < kb.length && Tb(Ib + 1) <= ab;) Ib++;
        Ub(Ib);
        for (let Hb = Ib + 1; Hb < kb.length; Hb++) this.later(Tb(Hb) - ab, (() => {
          Ub(Hb)
        }));
        this.later(cb, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(bb) {
        this.snapshot = bb, this.QQ(bb)
      }
      later(bb, cb) {
        this.timers.push(setTimeout(cb, bb))
      }
      clearTimers() {
        for (const bb of this.timers) clearTimeout(bb);
        this.timers = []
      }
    }
    const vk = "skyblockTideChartsView",
      Fk = 36e5,
      xk = 864e5;

    function jk(bb, cb, sb) {
      const [kb, Wb, ab, Tb] = bb.tideChartArea, Ub = Math.floor(cb), Ib = Math.floor(sb);
      return Ub >= kb && Ub <= ab && Ib >= Wb && Ib <= Tb
    }

    function pk(bb, cb, sb) {
      const [kb, Wb, ab, Tb] = bb.tideChartWater;
      return function(bb, cb, sb, kb, Wb, ab) {
        const Tb = 4 - wb(Math.floor(Wb) - (bb - sb), sb);
        return 5 * wb(Math.floor(ab) - (cb - kb), kb) + Tb
      }(kb, Wb, ab, Tb, cb, sb)
    }

    function bW(bb, cb, sb) {
      const kb = bb.tideCharts;
      for (let Wb = 0; Wb < kb.length; Wb++)
        if (jk(kb[Wb], cb, sb)) return kb[Wb];
      return null
    }

    function cW(bb, cb, sb) {
      const kb = Math.max(0, cb - sb);
      return kb > xk ? bb("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(kb / xk))
      }) : kb > Fk ? bb("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(kb / Fk))
      }) : bb("skyblockGame:tideChartsTurnSoon")
    }
    class sW extends Mb {
      constructor(bb, cb, sb, kb) {
        let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(bb, sb, kb), this.translate = cb, this.now = Wb, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.Wn = bb => {
          this.picked = bb, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      Km(bb) {
        const cb = this.message;
        if (null !== cb)
          for (const kb of bb.tideCharts) {
            var sb;
            const bb = cb.tideCharts.find((bb => bb.tideChartIsland === kb.tideChartIsland)),
              Wb = kb.tideChartLit & ~(null !== (sb = null === bb || void 0 === bb ? void 0 : bb.tideChartLit) && void 0 !== sb ? sb : 0);
            void 0 !== bb && 0 !== Wb && (this.pulse = {
              island: kb.tideChartIsland,
              cells: Wb,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = bb, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(bb, cb) {
        var sb;
        const kb = null === this.message || Number.isNaN(bb) ? null : bW(this.message, bb, cb),
          Wb = null !== (sb = null === kb || void 0 === kb ? void 0 : kb.tideChartIsland) && void 0 !== sb ? sb : null,
          ab = null === kb ? -1 : function(bb, cb, sb) {
            const [kb, Wb, ab, Tb] = bb.tideChartWater;
            return function(bb, cb, sb, kb, Wb, ab, Tb) {
              return ((Wb - bb) / (sb + Tb)) ** 2 + ((ab - cb) / (kb + Tb)) ** 2 <= 1
            }(kb, Wb, ab, Tb, cb, sb, 2) ? pk(bb, cb, sb) : -1
          }(kb, bb, cb);
        return (Wb !== this.hereIsland || ab !== this.hereCell) && (this.hereIsland = Wb, this.hereCell = ab, null !== Wb && (this.lastIsland = Wb), !0)
      }
      afterRender(bb) {
        if (null === this.message) return;
        this.lastX = null === bb ? Number.NaN : bb[0], this.lastZ = null === bb ? Number.NaN : bb[2];
        const cb = this.locate(this.lastX, this.lastZ),
          sb = this.expirePulses();
        (cb || sb || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const bb = this.now();
        return !(!this.open || bb - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = bb, cW(this.translate, this.message.tideChartTurnsInMs, bb - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(bb, cb) {
        const sb = null === this.message ? null : bW(this.message, bb, cb);
        if (null === sb) return;
        const kb = pk(sb, bb, cb);
        0 === (sb.tideChartPreBlank & 1 << kb) && (this.cast = {
          island: sb.tideChartIsland,
          cell: kb,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const bb = this.now();
        let cb = !1;
        return 0 !== this.pulse.cells && bb - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, cb = !0), null !== this.cast && bb - this.cast.atMs >= 1500 && (this.cast = null, cb = !0), cb
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
      findChart(bb, cb) {
        var sb;
        return null !== (sb = bb.tideCharts.find((bb => bb.tideChartIsland === cb))) && void 0 !== sb ? sb : null
      }
      describe(bb) {
        var cb, sb, kb;
        const Wb = bb.tideChartIsland,
          ab = [];
        for (let nb = 0; nb < 25; nb++) {
          const cb = 1 << nb;
          0 !== (bb.tideChartLit & cb) ? ab.push("lit") : 0 !== (bb.tideChartClear & cb) ? ab.push("clear") : 0 !== (bb.tideChartPreBlank & cb) ? ab.push("shore") : ab.push("water")
        }
        const Tb = function(bb) {
            let cb = 0;
            for (let sb = bb >>> 0; 0 !== sb; sb &= sb - 1) cb++;
            return cb
          }(bb.tideChartLit),
          Ub = bb.tideChartInkCount,
          Ib = this.translate(bb.tideChartIslandNameKey),
          Hb = this.translate("skyblockGame:tideChartsLit", {
            lit: String(Tb),
            ink: String(Ub)
          }),
          fb = null === bb.tideChartPictureNameKey ? null : this.translate(bb.tideChartPictureNameKey),
          Mb = this.hereIsland === Wb && -1 !== this.hereCell ? this.hereCell : null,
          Xb = [`${Ib}: ${Hb}.`];
        if (null !== fb && Xb.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: fb
          })), null !== Mb) {
          const bb = Math.floor(Mb / 5) + 1,
            cb = Mb % 5 + 1;
          Xb.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(bb),
            column: String(cb)
          }))
        }
        return {
          island: Wb,
          islandName: Ib,
          cells: ab,
          hereCell: Mb,
          lit: Tb,
          ink: Ub,
          litText: Hb,
          pictureName: fb,
          gridLabel: Xb.join(" "),
          pulseCells: this.pulse.island === Wb ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (cb = this.cast) || void 0 === cb ? void 0 : cb.island) === Wb ? this.cast.cell : null,
          castToken: null !== (sb = null === (kb = this.cast) || void 0 === kb ? void 0 : kb.token) && void 0 !== sb ? sb : 0
        }
      }
      buildSnapshot() {
        var bb, cb, sb;
        const kb = this.message;
        if (null === kb || 0 === kb.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const Wb = this.findChart(kb, this.hereIsland),
          ab = null !== (bb = null !== (cb = null !== (sb = this.findChart(kb, this.open ? this.picked : null)) && void 0 !== sb ? sb : Wb) && void 0 !== cb ? cb : this.findChart(kb, this.lastIsland)) && void 0 !== bb ? bb : kb.tideCharts[0],
          Tb = null === Wb ? null : this.describe(Wb);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: Tb,
          card: ab === Wb ? Tb : this.describe(ab),
          turnsText: cW(this.translate, kb.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(kb.tideChartBookCount)
          }),
          tabs: kb.tideCharts.map((bb => ({
            island: bb.tideChartIsland,
            name: this.translate(bb.tideChartIslandNameKey),
            selected: bb.tideChartIsland === ab.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const kW = "skyblockRegularsView",
      WW = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      aW = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function TW(bb, cb) {
      return "given" === bb ? cb.given : "owed" === bb ? cb.owed : cb.goal
    }
    class UW extends Mb {
      constructor(bb, cb, sb, kb) {
        super(bb, sb, kb), this.translate = cb, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = bb => bb, this.openIsland = bb => {
          this.selected = bb, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = bb => {
          this.selected = bb, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      Km(bb) {
        this.message = bb, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const bb = this.openedFromReachLog;
        return this.openedFromReachLog = !1, bb
      }
      setTranslator(bb, cb, sb) {
        this.translate = bb, void 0 !== sb && (this.itemName = sb), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(bb, cb, sb) {
        return {
          text: this.translate(TW(bb, cb), sb),
          given: "given" === bb
        }
      }
      describeRegular(bb, cb) {
        const sb = this.translate,
          kb = null !== bb.regularKg,
          Wb = bb.regularMeetings,
          ab = kb ? 0 === Wb ? sb("skyblockGame:regularsNotMet") : 1 === Wb ? sb("skyblockGame:regularsMeetingsOne") : sb("skyblockGame:regularsMeetings", {
            count: Wb
          }) : "";
        return {
          id: bb.regularId,
          name: sb(bb.regularNameKey),
          line: sb(bb.regularLineKey),
          itemName: bb.regularFishItem,
          fishName: this.itemName(bb.regularFishItem),
          tagged: kb,
          size: null === bb.regularKg ? sb("skyblockGame:regularsNotTagged") : sb("skyblockGame:regularsSize", {
            kg: bb.regularKg.toFixed(1)
          }),
          meetings: ab,
          chance: sb("skyblockGame:regularsChance", {
            count: bb.regularOneInCasts
          }),
          resting: bb.regularRestingToday,
          gifts: [{
            text: sb("skyblockGame:regularsGiftFlare"),
            given: Wb >= 3
          }, this.describeGift(bb.regularTintGift, WW, {
            tint: sb(bb.regularTintNameKey)
          })],
          history: [...bb.regularHistory].reverse().map((bb => {
            const kb = bb.regularMeetingKg.toFixed(1),
              Wb = cb - bb.regularMeetingDay;
            return Wb <= 0 ? sb("skyblockGame:regularsToday", {
              kg: kb
            }) : sb("skyblockGame:regularsDaysAgo", {
              days: Wb,
              kg: kb
            })
          }))
        }
      }
      describeIsland(bb, cb) {
        return {
          id: bb.regularsIslandId,
          name: this.translate(bb.regularsIslandNameKey),
          charm: this.describeGift(bb.regularsCharmGift, aW, {
            charm: this.translate(bb.regularsCharmNameKey)
          }),
          regulars: bb.regularsList.map((bb => this.describeRegular(bb, cb)))
        }
      }
      buildSnapshot() {
        var bb, cb, sb, kb;
        const Wb = this.message;
        if (null === Wb) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const ab = Wb.regularsIslands.map((bb => this.describeIsland(bb, Wb.regularsToday))),
          Tb = null !== (bb = null !== (cb = null === (sb = ab.find((bb => bb.id === this.selected))) || void 0 === sb ? void 0 : sb.id) && void 0 !== cb ? cb : null === (kb = ab[0]) || void 0 === kb ? void 0 : kb.id) && void 0 !== bb ? bb : "";
        return {
          enabled: !0,
          open: this.open,
          selected: Tb,
          islands: ab
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const IW = "skyblockHiddenWatersView";
    class HW {
      constructor(bb) {
        this.QQ = bb, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      Km(bb) {
        this.snapshot = function(bb) {
          const [cb, sb] = bb.hiddenWatersMapSize, kb = (bb, kb) => ({
            left: 1 - bb / cb,
            top: kb / sb
          }), Wb = new Map;
          for (const [Tb, Ub] of bb.hiddenWatersGlimpses) {
            var ab;
            const bb = null !== (ab = Wb.get(Tb)) && void 0 !== ab ? ab : [];
            bb.push(Ub), Wb.set(Tb, bb)
          }
          return {
            found: bb.hiddenWatersFound,
            total: bb.hiddenWatersTotal,
            aspect: sb / cb,
            pins: bb.hiddenWatersPins.map((bb => {
              let [cb, sb] = bb;
              return kb(cb, sb)
            })),
            islands: bb.hiddenWatersIslands.map((bb => {
              let [Wb, ab, Tb, Ub] = bb;
              const {
                left: Ib,
                top: Hb
              } = kb(Tb + 1, ab);
              return {
                left: Ib,
                top: Hb,
                width: (Tb + 1 - Wb) / cb,
                height: (Ub + 1 - ab) / sb
              }
            })),
            glimpses: Wb
          }
        }(bb), this.QQ(this.snapshot)
      }
    }
    const fW = "skyblockDialogueView";
    class MW extends Mb {
      constructor(bb, cb, sb, kb, Wb) {
        let ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(bb, sb, kb), this.translate = cb, this.requestDialogue = Wb, this.now = ab, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
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
      Km(bb) {
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
        const cb = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...cb,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const sb = this.selection;
        if ("quest" === sb.kind) {
          const bb = this.scripts.find((bb => bb.dialogueQuestId === sb.questId));
          return {
            ...cb,
            characters: [],
            questFocus: sb.questId,
            conversations: bb ? [this.conversation(bb)] : []
          }
        }
        const kb = [];
        for (let ab = this.scripts.length - 1; ab >= 0; ab--) {
          const bb = this.scripts[ab].dialogueLines;
          for (let cb = bb.length - 1; cb >= 0; cb--) kb.includes(bb[cb].dialogueSpeakerId) || kb.push(bb[cb].dialogueSpeakerId)
        }
        const Wb = null !== sb.npcId && kb.includes(sb.npcId) ? sb.npcId : null !== (bb = kb[0]) && void 0 !== bb ? bb : null;
        return {
          ...cb,
          characters: kb.map((bb => {
            var cb, sb;
            return {
              id: bb,
              styling: null !== (cb = null === (sb = this.speakers.get(bb)) || void 0 === sb ? void 0 : sb.dialogueSpeakerStyling) && void 0 !== cb ? cb : bb,
              selected: bb === Wb
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((bb => bb.dialogueLines.some((bb => bb.dialogueSpeakerId === Wb)))).map((bb => this.conversation(bb))).reverse()
        }
      }
      conversation(bb) {
        let cb = null;
        return {
          questId: bb.dialogueQuestId,
          questName: this.translate(bb.dialogueQuestNameKey),
          completed: bb.dialogueQuestCompleted,
          lines: bb.dialogueLines.map(((bb, sb) => {
            var kb;
            const Wb = bb.dialogueSpeakerId === cb || null === (kb = this.speakers.get(bb.dialogueSpeakerId)) || void 0 === kb ? void 0 : kb.dialogueSpeakerStyling;
            return cb = bb.dialogueSpeakerId, {
              key: sb,
              display: {
                line: {
                  translationKey: bb.dialogueLineKey,
                  params: this.params(bb.dialogueLineParams)
                },
                speakerName: Wb,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(bb) {
        if (void 0 !== bb) return Object.fromEntries(Object.entries(bb).map((bb => {
          let [cb, sb] = bb;
          return [cb, "string" === typeof sb ? sb : this.translate(sb.translationKey)]
        })))
      }
    }
    var XW = sb(613),
      nW = sb(1271),
      mW = sb(117);
    const lW = "skyblockAutographsView";

    function QW(bb) {
      const cb = XW.h[bb];
      return {
        label: cb.chatTag.map((bb => bb.str)).join(""),
        icon: cb.icon,
        colour: cb.mainRGB
      }
    }
    class eW extends Mb {
      constructor(bb) {
        let cb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = cb, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      Km(bb) {
        this.signatures = bb.autographSignatures, bb.autographOpen ? this.show() : this.emit()
      }
      setTranslator(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = cb, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var bb;
        const cb = null !== (bb = this.signatures) && void 0 !== bb ? bb : [],
          sb = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          kb = [...cb].sort(((bb, cb) => Number(null !== cb.autographRank) - Number(null !== bb.autographRank) || cb.autographSignedAtMs - bb.autographSignedAtMs)).map((bb => ({
            key: `${bb.autographSignedAtMs}|${bb.autographSignerName}`,
            name: (0, nW.d)(bb.autographSignerName, !mW.featureFlags.canSeeRealPlayerNames),
            rank: null === bb.autographRank ? null : QW(bb.autographRank),
            signedOn: sb.format(bb.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: kb,
          total: kb.length,
          rankTotal: kb.filter((bb => null !== bb.rank)).length
        }
      }
    }
    const CW = "skyblockHudView",
      NW = () => {},
      VW = {
        getItem: () => null,
        setItem: NW,
        removeItem: NW
      };
    class LW {
      constructor(bb) {
        let {
          translate: cb,
          translateWithIcons: sb,
          setMenuOpen: kb = NW,
          dismissMenu: Wb = () => {
            kb(!1)
          },
          publishSkills: ab = NW,
          publishQuests: Tb = NW,
          publishQuestNotification: Ub = NW,
          publishDungeons: Ib = NW,
          publishCollections: Hb = NW,
          publishMap: fb = NW,
          publishHud: Mb = NW,
          publishPortalTransit: Xb = NW,
          publishDailyReward: mb = NW,
          publishMailbox: lb = NW,
          publishQuestGraph: Qb = NW,
          publishForge: eb = NW,
          publishSmuggler: Cb = NW,
          publishKeepersChair: Nb = NW,
          publishReachLog: Vb = NW,
          publishLampLight: Lb = NW,
          publishMagmaward: ub = NW,
          publishGlowtide: hb = NW,
          publishGlowMeter: Jb = NW,
          publishHushWait: gb = NW,
          publishPassage: Bb = NW,
          publishTideCharts: tb = NW,
          publishRegulars: yb = NW,
          publishHiddenWaters: Pb = NW,
          publishDialogue: Db = NW,
          publishAutographs: Eb = NW,
          isLoadingScreenUp: ib = () => !1,
          onDailyRewardCoinLanded: Ob = NW,
          onDailyRewardStarted: Gb = NW,
          onDailyRewardFinished: Kb = NW,
          onDailyRewardItemLanded: Zb = NW,
          onMailboxStarted: zb = NW,
          journeyStorage: qb = VW,
          requestTracking: db = NW,
          requestTravel: Ab = NW,
          requestDungeonEnter: wb = NW,
          requestQuestJump: rb = NW,
          requestQuestArrive: ob = NW,
          requestForge: Sb = NW,
          requestSmuggle: Rb = NW,
          requestKeepersChairAim: vb = NW,
          requestReachLogOpen: Fb = NW,
          requestLampLight: xb = NW,
          requestDialogue: jb = NW
        } = bb;
        this.navigation = void 0, this.map = void 0, this.compass = new Yb, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new Bk.b, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = bb => bb, this.close = () => {
          for (const bb of this.panels) bb.close()
        }, this.setMenuOpen = kb, this.publishHud = Mb, this.portalTransit = new qs(Xb, qb), this.magmaward = new qk(ub), this.glowtide = new Ak(hb), this.glowMeter = new rk(Jb), this.hushWait = new Rk(gb), this.dailyReward = new ws(mb, (() => ib() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (bb => {
          this.quests.setNotificationsHeld(bb)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), Ob, Gb, Kb, Zb);
        const pb = bb => {
          this.panels.some((bb => bb.isOpen())) || (bb ? Wb() : this.setMenuOpen(!1))
        };
        this.skills = new Ts(ab, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), cb, void 0, void 0, pb), this.quests = new Ms(Tb, db, cb, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, pb, Ub), this.dungeons = new ms(Ib, cb, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, pb, wb), this.collections = new Ks(Hb, cb, (() => {
          this.beforePanelOpen(this.collections)
        }), pb), this.map = new nb(fb, Ab, cb, (() => {
          this.beforePanelOpen(this.map)
        }), pb), this.questGraph = new bk(Qb, cb, (() => {
          this.beforePanelOpen(this.questGraph)
        }), pb, rb, ob, qb), this.forge = new Ck(eb, cb, (() => {
          this.beforePanelOpen(this.forge)
        }), pb, Sb), this.smuggler = new Lk(Cb, cb, (() => {
          this.beforePanelOpen(this.smuggler)
        }), pb, Rb), this.lampLight = new Zk(Lb, cb, xb, this.commandPacer), this.keepersChair = new yk(Nb, cb, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (bb => {
          this.lampLight.onChairClosed(), pb(bb)
        }), vb, Date.now, this.commandPacer), this.reachLog = new Gk(Vb, cb, (() => {
          this.beforePanelOpen(this.reachLog)
        }), pb, Fb, this.commandPacer), this.passage = new gk(Bb, cb, (() => {
          this.beforePanelOpen(this.passage)
        }), pb), this.tideCharts = new sW(tb, cb, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), pb), this.regulars = new UW(yb, cb, (() => {
          this.beforePanelOpen(this.regulars)
        }), (bb => {
          this.regulars.takeReturnToReachLog() && !bb && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), pb(bb)
        })), this.hiddenWaters = new HW(Pb), this.dialogue = new MW(Db, cb, (() => {
          this.beforePanelOpen(this.dialogue)
        }), pb, jb), this.autographs = new eW(Eb, (() => {
          this.beforePanelOpen(this.autographs)
        }), pb), this.mailbox = new Rs(lb, (() => ib() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), zb), this.quests.translateWithIcons = null !== sb && void 0 !== sb ? sb : null, this.skills.onLevelUp = bb => {
          this.quests.notify(bb)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new Ws(this.map, this.quests, this.compass, cb)
      }
      getHudSnapshot() {
        const bb = this.hudSnapshot,
          cb = this.dailyReward.getHeldCoins();
        return null === bb || cb <= 0 || !("hudPurseCoins" in bb) ? bb : {
          ...bb,
          hudPurseCoins: Math.max(0, bb.hudPurseCoins - cb)
        }
      }
      receiveHud(bb) {
        this.hudSnapshot = bb, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(bb) {
        this.setMenuOpen(!0);
        const cb = bb === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = bb;
        for (const sb of this.panels) sb === bb || cb && sb === this.reachLog || sb.close();
        this.openingPanel = null
      }
      setTranslator(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : cb => this.resolveItemName(cb, bb);
        this.quests.translateWithIcons = null !== sb && void 0 !== sb ? sb : null, this.navigation.setTranslator(bb, cb), this.lampLight.setTranslator(bb, cb), this.mailbox.setItemName(kb);
        for (const Wb of this.panels) Wb.setTranslator(bb, cb, kb)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const bb of this.panels) bb.dispose()
      }
    }
    var uW = sb(1033),
      YW = sb.n(uW),
      hW = sb(19),
      JW = sb(36235),
      gW = sb(3179),
      BW = sb(1858),
      tW = sb(1839),
      yW = sb(8947),
      PW = sb(1197),
      DW = sb(1423),
      EW = sb(1087);

    function iW(bb) {
      let {
        controller: cb,
        minimap: sb,
        children: kb
      } = bb;
      const ab = (0, DW.h)(CW, cb.getHudSnapshot()),
        [Tb, Ub] = (0, Jb.useState)(cb.skills.getSnapshot().overallLevel);
      (0, DW.f)(as, (bb => {
        Ub(bb.overallLevel)
      }));
      const Ib = (0, Jb.useRef)(null);
      (0, DW.f)(As, (bb => {
        ! function(bb, cb) {
          if (null === bb || "function" !== typeof bb.animate) return;
          const sb = cb ? 1.35 : 1.15;
          bb.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${sb})`
          }, {
            transform: "scale(1)"
          }], {
            duration: cb ? 320 : 160,
            easing: "ease-out"
          }), bb.classList.toggle("Receiving", !cb), cb && (bb.classList.remove("Shine"), bb.offsetWidth, bb.classList.add("Shine"))
        }(Ib.current, bb)
      }));
      const {
        t: Hb
      } = (0, PW.E)(), {
        isTouchScreen: fb
      } = (0, hW.p)(["isTouchScreen"]), [Mb, Xb] = (0, Jb.useState)(null);
      return (0, gW.j)(Mb, ".SkyblockRightHud"), null !== ab || sb ? (0, EW.jsx)(JW.e, {
        placement: "topRight",
        children: (0, EW.jsxs)("div", {
          className: YW()("SkyblockRightHud", {
            TouchScreen: fb
          }),
          children: [sb, null !== ab && (0, EW.jsxs)("div", {
            ref: Xb,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in ab ? (0, EW.jsx)("div", {
              className: "SkyblockHudHelp",
              children: ab.hudHelpText
            }) : (0, EW.jsxs)(EW.Fragment, {
              children: [(0, EW.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, EW.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, EW.jsx)("strong", {
                    style: {
                      color: Wb.L.cyanUiText
                    },
                    children: Hb(ab.hudZoneNameKey)
                  }), null !== Tb && (0, EW.jsx)("span", {
                    style: {
                      color: Wb.L.goldUiText
                    },
                    children: Hb("skyblockGame:level", {
                      level: (0, yW.g)(Tb)
                    })
                  })]
                }), (0, EW.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: Ib,
                  children: [(0, EW.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, EW.jsx)(BW.d, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, yW.g)(ab.hudPurseCoins)]
                })]
              }), ab.hudClockText.length > 0 && (0, EW.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, EW.jsx)(tW.d, {
                  text: ab.hudClockText
                })
              })]
            }), kb, "hudZoneNameKey" in ab && (0, EW.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function OW(bb) {
      let {
        icon: cb
      } = bb;
      const sb = (0, Jb.useCallback)((bb => {
        null === bb || void 0 === bb || bb.replaceChildren(oc(cb))
      }), [cb]);
      return (0, EW.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: sb
      })
    }

    function GW(bb) {
      let {
        controller: cb
      } = bb;
      const {
        t: sb
      } = (0, PW.E)();
      return (0, EW.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: cb.display.mountPlayer,
        title: sb("skyblockGame:mapYouAreHere"),
        children: (0, EW.jsx)(OW, {
          icon: "player"
        })
      })
    }
    const KW = sb(38155),
      ZW = Object.fromEntries(KW.keys().map((bb => [bb.replace(/^\.\/(.*)\.png$/, "$1"), KW(bb)])));

    function zW(bb, cb) {
      var sb;
      return null !== (sb = ZW[bb]) && void 0 !== sb ? sb : ZW[cb]
    }

    function qW(bb) {
      let {
        imageKey: cb,
        fallbackImageKey: sb,
        geometryKey: kb,
        alt: Wb,
        className: ab
      } = bb;
      const [Tb, Ub] = (0, Jb.useState)((() => function(bb, cb) {
        return [{
          id: 0,
          imageKey: bb,
          geometryKey: cb,
          phase: "shown"
        }]
      }(cb, kb))), Ib = function(bb, cb, sb) {
        const kb = bb[bb.length - 1];
        if (kb.imageKey === cb && kb.geometryKey === sb) return bb;
        const Wb = {
          id: kb.id + 1,
          imageKey: cb,
          geometryKey: sb,
          phase: "entering"
        };
        return kb.geometryKey === sb ? [{
          ...kb,
          phase: "leaving"
        }, Wb] : [Wb]
      }(Tb, cb, kb);
      return Ib !== Tb && Ub(Ib), (0, EW.jsx)(EW.Fragment, {
        children: Ib.map((bb => (0, EW.jsx)("img", {
          className: YW()("SkyblockMapTerrainImage", ab, {
            Entering: "entering" === bb.phase,
            Leaving: "leaving" === bb.phase
          }),
          src: zW(bb.imageKey, sb),
          alt: "leaving" === bb.phase ? "" : Wb,
          onAnimationEnd: () => {
            Ub((cb => function(bb, cb) {
              return bb.flatMap((bb => bb.id !== cb ? [bb] : "leaving" === bb.phase ? [] : [{
                ...bb,
                phase: "shown"
              }]))
            }(cb, bb.id)))
          }
        }, bb.id)))
      })
    }
    var dW = sb(4270),
      AW = sb(1431);

    function wW(bb) {
      if ("Tab" !== bb.key) return;
      const cb = Array.from(bb.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        sb = cb.indexOf(document.activeElement);
      var kb;
      if (bb.shiftKey && sb <= 0) bb.preventDefault(), null === (kb = cb.at(-1)) || void 0 === kb || kb.focus();
      else if (!bb.shiftKey && (-1 === sb || sb === cb.length - 1)) {
        var Wb;
        bb.preventDefault(), null === (Wb = cb[0]) || void 0 === Wb || Wb.focus()
      }
    }

    function rW() {
      const bb = (0, Jb.useRef)(null);
      return (0, Jb.useCallback)((cb => {
        var sb;
        cb ? (bb.current = document.activeElement, cb.focus()) : null === (sb = bb.current) || void 0 === sb || sb.focus()
      }), [])
    }

    function oW(bb) {
      let {
        percent: cb,
        label: sb,
        levelUpToken: kb,
        colour: Wb
      } = bb;
      return (0, EW.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": sb,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": cb,
        "aria-valuetext": sb,
        children: [(0, EW.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${cb/100})`
          }
        }), null !== kb && void 0 !== kb && (0, EW.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": Wb
          }
        }, kb)]
      })
    }

    function SW(bb) {
      let {
        mount: cb
      } = bb;
      return (0, EW.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: cb,
        hidden: !0,
        children: (0, EW.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, EW.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, EW.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function RW(bb, cb, sb, kb) {
      (0, Jb.useLayoutEffect)((() => {
        const Wb = bb.current;
        if (!sb || null === cb || void 0 === cb || !cb.local || !Wb) return;
        const ab = Array.from(Wb.querySelectorAll(".SkyblockMapNode")),
          Tb = [...cb.points, ...cb.portals],
          Ub = () => {
            const bb = Wb.clientWidth,
              sb = Wb.clientHeight,
              Ub = ab.map(((Wb, ab) => {
                const Ub = Tb[ab];
                return {
                  id: Ub.id,
                  portal: ab >= cb.points.length,
                  x: Ub.position[0] * bb / 100,
                  y: Ub.position[1] * sb / 100,
                  width: Wb.offsetWidth / kb,
                  height: Wb.offsetHeight / kb
                }
              })),
              Ib = new Map(Tb.map(((bb, cb) => [bb.id, ab[cb]])));
            for (const cb of function(bb, cb, sb) {
                const kb = [],
                  Wb = [...bb].sort(((bb, cb) => Number(cb.portal) - Number(bb.portal) || bb.id.localeCompare(cb.id)));
                for (const ab of Wb) {
                  const bb = bb => Math.max(ab.width / 2, Math.min(cb - ab.width / 2, bb)),
                    Wb = bb => Math.max(ab.height / 2, Math.min(sb - ab.height / 2, bb)),
                    Tb = [bb(ab.x)],
                    Ub = [Wb(ab.y)];
                  for (const cb of kb) Tb.push(bb(cb.x - (cb.width + ab.width) / 2 - 4), bb(cb.x + (cb.width + ab.width) / 2 + 4)), Ub.push(Wb(cb.y - (cb.height + ab.height) / 2 - 4), Wb(cb.y + (cb.height + ab.height) / 2 + 4));
                  let Ib = {
                      ...ab,
                      x: Tb[0],
                      y: Ub[0]
                    },
                    Hb = 1 / 0,
                    fb = 1 / 0;
                  for (const cb of new Set(Tb))
                    for (const bb of new Set(Ub)) {
                      let sb = 0;
                      for (const Tb of kb) sb += Math.max(0, (ab.width + Tb.width) / 2 + 4 - Math.abs(cb - Tb.x)) * Math.max(0, (ab.height + Tb.height) / 2 + 4 - Math.abs(bb - Tb.y));
                      const Wb = (cb - ab.x) ** 2 + (bb - ab.y) ** 2;
                      (sb < Hb || sb === Hb && Wb < fb) && (Ib = {
                        ...ab,
                        x: cb,
                        y: bb
                      }, Hb = sb, fb = Wb)
                    }
                  kb.push(Ib)
                }
                return kb
              }(Ub, bb, sb)) {
              const bb = Ib.get(cb.id);
              bb.style.left = `${cb.x}px`, bb.style.top = `${cb.y}px`
            }
          };
        Ub();
        const Ib = new ResizeObserver(Ub);
        Ib.observe(Wb);
        for (const bb of ab) Ib.observe(bb);
        return () => {
          Ib.disconnect()
        }
      }), [bb, cb, sb, kb])
    }
    const vW = {
        zoom: 1,
        x: 0,
        y: 0
      },
      FW = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function xW(bb, cb, sb) {
      return Math.min(sb, Math.max(cb, bb))
    }

    function jW(bb, cb, sb) {
      const kb = Math.min(1, sb * cb / bb),
        Wb = Math.min(1, bb / (sb * cb));
      return {
        x0: (1 - kb) / 2,
        y0: (1 - Wb) / 2,
        x1: (1 + kb) / 2,
        y1: (1 + Wb) / 2
      }
    }

    function pW(bb, cb, sb, kb) {
      const Wb = cb * (kb - sb);
      if (Wb <= 1) return .5 - cb * (sb + kb) / 2;
      const ab = .45 * Math.min(1, Wb - 1);
      return xW(bb, 1 - cb * kb - ab, ab - cb * sb)
    }

    function ba(bb, cb) {
      const sb = xW(bb.zoom, 1, 12);
      return {
        zoom: sb,
        x: pW(bb.x, sb, cb.x0, cb.x1),
        y: pW(bb.y, sb, cb.y0, cb.y1)
      }
    }

    function ca(bb, cb, sb, kb) {
      let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : FW;
      const ab = xW(bb.zoom * cb, 1, 12),
        Tb = ab / bb.zoom;
      return ba({
        zoom: ab,
        x: sb - (sb - bb.x) * Tb,
        y: kb - (kb - bb.y) * Tb
      }, Wb)
    }

    function sa(bb, cb, sb, kb) {
      const [Wb, ab] = (0, Jb.useState)(vW);
      (0, Jb.useEffect)((() => {
        ab(vW)
      }), [sb]), (0, Jb.useEffect)((() => {
        const sb = bb.current;
        if (!cb || !sb) return;
        const Wb = () => jW(sb.clientWidth, sb.clientHeight, kb),
          Tb = bb => {
            const cb = sb.getBoundingClientRect();
            return {
              x: (bb.clientX - cb.left) / cb.width,
              y: (bb.clientY - cb.top) / cb.height
            }
          },
          Ub = new Map;
        let Ib = {
            x: 0,
            y: 0
          },
          Hb = !1,
          fb = 0;
        const Mb = bb => {
            bb.preventDefault();
            const cb = bb.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * bb.deltaY : bb.deltaY,
              sb = Tb(bb);
            ab((bb => ca(bb, Math.exp(.0015 * -cb), sb.x, sb.y, Wb())))
          },
          Xb = bb => {
            "mouse" === bb.pointerType && 0 !== bb.button || (Ub.set(bb.pointerId, Tb(bb)), 1 === Ub.size && (Ib = {
              x: bb.clientX,
              y: bb.clientY
            }, Hb = !1), fb = 0)
          },
          nb = bb => {
            const cb = Ub.get(bb.pointerId);
            if (!cb) return;
            const kb = Tb(bb);
            if (Ub.set(bb.pointerId, kb), 2 === Ub.size) {
              const [bb, cb] = [...Ub.values()], sb = Math.hypot(bb.x - cb.x, bb.y - cb.y);
              if (fb > 0) {
                const kb = sb / fb;
                ab((sb => ca(sb, kb, (bb.x + cb.x) / 2, (bb.y + cb.y) / 2, Wb())))
              }
              return fb = sb, void(Hb = !0)
            }!Hb && Math.hypot(bb.clientX - Ib.x, bb.clientY - Ib.y) < 4 || (Hb || (Hb = !0, sb.setPointerCapture(bb.pointerId)), ab((bb => function(bb, cb, sb) {
              let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : FW;
              return ba({
                zoom: bb.zoom,
                x: bb.x + cb,
                y: bb.y + sb
              }, kb)
            }(bb, kb.x - cb.x, kb.y - cb.y, Wb()))))
          },
          mb = bb => {
            Ub.delete(bb.pointerId), fb = 0
          },
          lb = bb => {
            Hb && (bb.stopPropagation(), bb.preventDefault(), Hb = !1)
          },
          Qb = new ResizeObserver((() => {
            ab((bb => ba(bb, Wb())))
          }));
        return Qb.observe(sb), sb.addEventListener("wheel", Mb, {
          passive: !1
        }), sb.addEventListener("pointerdown", Xb), sb.addEventListener("pointermove", nb), sb.addEventListener("pointerup", mb), sb.addEventListener("pointercancel", mb), sb.addEventListener("click", lb, !0), () => {
          Qb.disconnect(), sb.removeEventListener("wheel", Mb), sb.removeEventListener("pointerdown", Xb), sb.removeEventListener("pointermove", nb), sb.removeEventListener("pointerup", mb), sb.removeEventListener("pointercancel", mb), sb.removeEventListener("click", lb, !0)
        }
      }), [bb, cb, sb, kb]);
      return {
        view: Wb,
        zoomBy: cb => {
          const sb = bb.current;
          sb && ab((bb => ca(bb, cb, .5, .5, jW(sb.clientWidth, sb.clientHeight, kb))))
        }
      }
    }

    function ka(bb) {
      var cb, sb, kb, Wb;
      let {
        controller: ab,
        navigation: Tb
      } = bb;
      const Ub = (0, DW.h)(Xb, ab.getSnapshot()),
        {
          t: Ib
        } = (0, PW.E)(),
        Hb = rW(),
        fb = Ub.presentation,
        Mb = (0, Jb.useRef)(null),
        nb = (0, Jb.useRef)(null),
        mb = Boolean(Ub.open && (null === fb || void 0 === fb ? void 0 : fb.local) && fb.background),
        lb = sa(Mb, mb, `${Ub.open}|${Ub.tab}|${null===fb||void 0===fb||null===(cb=fb.background)||void 0===cb?void 0:cb.geometryKey}`, null !== (sb = null === fb || void 0 === fb || null === (kb = fb.background) || void 0 === kb ? void 0 : kb.ratio) && void 0 !== sb ? sb : 2);
      if (RW(nb, fb, Ub.open, lb.view.zoom), !fb || !Ub.open) return null;
      const Qb = fb.local ? fb.background : null,
        eb = {
          "--map-ratio": String(null !== (Wb = null === Qb || void 0 === Qb ? void 0 : Qb.ratio) && void 0 !== Wb ? Wb : 2),
          backgroundColor: null === Qb || void 0 === Qb ? void 0 : Qb.colour
        },
        Cb = {
          "--map-zoom": String(lb.view.zoom),
          transform: `translate(${100*lb.view.x}%, ${100*lb.view.y}%) scale(${lb.view.zoom})`
        };
      return (0, EW.jsx)(dW.c, {
        show: Ub.open,
        close: ab.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, EW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: Hb,
          onKeyDown: wW,
          children: [(0, EW.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, EW.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, EW.jsx)("h2", {
                id: "skyblockMapTitle",
                children: Ib("skyblockGame:map")
              }), fb.minimap && (0, EW.jsx)("p", {
                children: fb.minimap.caption
              })]
            }), (0, EW.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((bb => (0, EW.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": bb === Ub.tab ? "true" : void 0,
                className: YW()({
                  Selected: bb === Ub.tab
                }),
                "aria-pressed": bb === Ub.tab,
                onClick: () => {
                  ab.selectTab(bb)
                },
                children: Ib("local" === bb ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, bb)))
            }), (0, EW.jsx)(AW.j, {
              padIgnore: !0,
              onClick: ab.dismiss
            })]
          }), (0, EW.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, EW.jsxs)("div", {
              ref: Mb,
              className: YW()("SkyblockMapCanvas", {
                Local: fb.local,
                Overview: !fb.local,
                Zoomed: lb.view.zoom > 1
              }),
              style: eb,
              children: [(0, EW.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: mb ? Cb : void 0,
                children: (0, EW.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: nb,
                  children: [Qb && (0, EW.jsx)(qW, {
                    className: "SkyblockMapTerrain",
                    imageKey: Qb.imageKey,
                    fallbackImageKey: Qb.fallbackImageKey,
                    geometryKey: Qb.geometryKey,
                    alt: Qb.label
                  }), fb.local && (0, EW.jsx)(SW, {
                    mount: Tb.display.mountMapSearchArea
                  }), !fb.local && (0, EW.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: fb.connections.map((bb => (0, EW.jsx)("line", {
                      className: YW()({
                        Explored: bb.explored
                      }),
                      x1: bb.start[0],
                      y1: bb.start[1],
                      x2: bb.end[0],
                      y2: bb.end[1]
                    }, bb.id)))
                  }), fb.points.map((bb => {
                    const cb = !fb.local && bb.thumbnail ? ZW[bb.thumbnail] : void 0;
                    return (0, EW.jsxs)("div", {
                      className: YW()("SkyblockMapNode", {
                        Current: bb.current
                      }),
                      style: {
                        left: `${bb.position[0]}%`,
                        top: `${bb.position[1]}%`
                      },
                      children: [(0, EW.jsxs)(AW.d, {
                        className: YW()("SkyblockMapPin", {
                          Unknown: !bb.visited,
                          Current: bb.current
                        }),
                        disabled: Ub.pending,
                        onClick: () => {
                          ab.travel(bb.travelKind, bb.travelId)
                        },
                        children: [cb && (0, EW.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: cb,
                          alt: ""
                        }), !cb && (0, EW.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, EW.jsx)(OW, {
                            icon: bb.icon
                          })
                        }), (0, EW.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: bb.name
                        })]
                      }), bb.current && (0, EW.jsx)("span", {
                        className: YW()("SkyblockMapHereBadge", {
                          Above: bb.position[1] > 50
                        }),
                        children: Ib("skyblockGame:mapYouAreHere")
                      })]
                    }, bb.id)
                  })), fb.portals.map((bb => (0, EW.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${bb.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${bb.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, EW.jsxs)(AW.d, {
                      className: "SkyblockMapPin",
                      disabled: Ub.pending,
                      onClick: () => {
                        ab.travel(bb.travelKind, bb.travelId)
                      },
                      children: [(0, EW.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: bb.colour
                        },
                        "aria-hidden": "true",
                        children: (0, EW.jsx)(OW, {
                          icon: bb.icon
                        })
                      }), (0, EW.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: bb.name
                      })]
                    })
                  }, bb.id))), fb.local && (0, EW.jsx)(GW, {
                    controller: Tb
                  })]
                })
              }), mb && (0, EW.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, EW.jsx)("button", {
                  type: "button",
                  "aria-label": Ib("skyblockGame:mapZoomIn"),
                  disabled: lb.view.zoom >= 12,
                  onClick: () => {
                    lb.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, EW.jsx)("button", {
                  type: "button",
                  "aria-label": Ib("skyblockGame:mapZoomOut"),
                  disabled: lb.view.zoom <= 1,
                  onClick: () => {
                    lb.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, EW.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: Ub.feedback
              })]
            })
          }), (0, EW.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [fb.progress && (0, EW.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, EW.jsx)("span", {
                children: fb.progress
              }), (0, EW.jsx)(oW, {
                percent: fb.percent,
                label: fb.progress
              })]
            }), fb.noLandmarks && (0, EW.jsx)("span", {
              children: Ib("skyblockGame:mapNoLandmarks")
            }), fb.canTravel && (0, EW.jsx)("span", {
              className: "SkyblockMapHint",
              children: Ib("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function Wa(bb) {
      let {
        view: cb,
        controller: sb,
        navigation: kb
      } = bb;
      const {
        t: Wb
      } = (0, PW.E)(), {
        isTouchScreen: ab
      } = (0, hW.p)(["isTouchScreen"]);
      return (0, EW.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": Wb("skyblockGame:mapLocal"),
        children: [ab && (0, EW.jsx)(AW.d, {
          className: "SkyblockMinimapOpen",
          onClick: sb.showLocal,
          children: Wb("skyblockGame:map")
        }), (0, EW.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: cb.colour
          },
          children: [(0, EW.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: kb.display.mountTerrain,
            style: {
              width: cb.width,
              height: cb.height
            },
            children: [(0, EW.jsx)(qW, {
              imageKey: cb.imageKey,
              fallbackImageKey: cb.fallbackImageKey,
              geometryKey: cb.geometryKey,
              alt: cb.label
            }), (0, EW.jsx)(SW, {
              mount: kb.display.mountMinimapSearchArea
            }), cb.markers.map((bb => (0, EW.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${bb.position[0]}%`,
                top: `${bb.position[1]}%`,
                color: bb.colour
              },
              title: bb.name,
              children: (0, EW.jsx)(OW, {
                icon: bb.icon
              })
            }, bb.id)))]
          }), (0, EW.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: Wb("skyblockGame:mapYouAreHere"),
            children: (0, EW.jsx)(OW, {
              icon: "player"
            })
          })]
        }), (0, EW.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: cb.caption
        })]
      })
    }

    function aa(bb) {
      let {
        controller: cb
      } = bb;
      return (0, EW.jsxs)("div", {
        className: "SkyblockCompass",
        ref: cb.display.mountCompass,
        children: [(0, EW.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, EW.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, EW.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function Ta(bb) {
      let {
        controller: cb,
        surface: sb
      } = bb;
      const {
        t: kb
      } = (0, PW.E)(), Wb = (0, DW.h)(as, cb.getSnapshot()), ab = rW();
      return Wb.enabled ? (0, EW.jsxs)(EW.Fragment, {
        children: ["hud" === sb && (0, EW.jsx)(JW.e, {
          placement: "statBars",
          children: Wb.hud && (0, EW.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": Wb.hud.colour
            },
            children: [(0, EW.jsx)(oW, {
              percent: Wb.hud.skill.percent,
              label: Wb.hud.skill.xp,
              levelUpToken: Wb.hud.levelUpToken,
              colour: Wb.hud.colour
            }), (0, EW.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, EW.jsxs)("span", {
                children: [Wb.hud.skill.label, " \xb7 ", Wb.hud.skill.level]
              }), (0, EW.jsx)("span", {
                children: Wb.hud.gain
              })]
            })]
          })
        }), "hud" === sb && (0, EW.jsx)(JW.e, {
          children: Wb.hud && (0, EW.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, EW.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, EW.jsx)("strong", {
                children: Wb.hud.skill.label
              }), (0, EW.jsx)("span", {
                children: Wb.hud.gain
              })]
            }), (0, EW.jsx)(oW, {
              percent: Wb.hud.skill.percent,
              label: Wb.hud.skill.xp,
              levelUpToken: Wb.hud.levelUpToken,
              colour: Wb.hud.colour
            }), (0, EW.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, EW.jsx)("span", {
                children: Wb.hud.skill.level
              }), (0, EW.jsx)("span", {
                children: Wb.hud.skill.xp
              })]
            })]
          })
        }), "menu" === sb && (0, EW.jsx)(dW.c, {
          show: Wb.open,
          close: cb.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, EW.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: ab,
            onKeyDown: wW,
            children: [(0, EW.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, EW.jsxs)("div", {
                children: [(0, EW.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: kb("skyblockGame:skills")
                }), (0, EW.jsx)("p", {
                  children: kb("skyblockGame:skillsIntro")
                })]
              }), (0, EW.jsx)(AW.j, {
                padIgnore: !0,
                onClick: cb.dismiss
              })]
            }), (0, EW.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, EW.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: Wb.skills.map((bb => (0, EW.jsxs)(AW.d, {
                  className: YW()("SkyblockSkillCard", {
                    Selected: bb.selected
                  }),
                  ariaPressed: bb.selected,
                  onClick: () => {
                    cb.select(bb.id)
                  },
                  children: [(0, EW.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, EW.jsx)(BW.d, {
                      itemName: bb.icon,
                      amount: 0
                    })
                  }), (0, EW.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, EW.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, EW.jsx)("strong", {
                        children: bb.label
                      }), (0, EW.jsx)("span", {
                        children: bb.level
                      })]
                    }), (0, EW.jsx)(oW, {
                      percent: bb.percent,
                      label: `${bb.label}: ${bb.xp}`
                    }), (0, EW.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: bb.xp
                    })]
                  })]
                }, bb.id)))
              }), Wb.detail && (0, EW.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, EW.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, EW.jsx)(BW.d, {
                    itemName: Wb.detail.icon,
                    amount: 0
                  })
                }), (0, EW.jsx)("h3", {
                  children: Wb.detail.label
                }), (0, EW.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: Wb.detail.level
                }), (0, EW.jsx)("p", {
                  children: Wb.detail.description
                }), (0, EW.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, EW.jsx)("strong", {
                    children: kb("skyblockGame:currentBenefit")
                  }), (0, EW.jsx)("span", {
                    children: Wb.detail.benefit
                  })]
                }), (0, EW.jsx)(oW, {
                  percent: Wb.detail.percent,
                  label: Wb.detail.xp
                }), (0, EW.jsx)("p", {
                  children: Wb.detail.xp
                }), (0, EW.jsx)("h4", {
                  children: kb("skyblockGame:earnXp")
                }), (0, EW.jsx)("ul", {
                  children: Wb.detail.sources.map((bb => (0, EW.jsx)("li", {
                    children: bb
                  }, bb)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var Ua = sb(1341),
      Ia = sb(4556),
      Ha = sb(334);

    function fa(bb) {
      let {
        item: cb
      } = bb;
      return (0, EW.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, EW.jsx)(BW.d, {
          itemName: cb,
          amount: 0
        })
      })
    }

    function Ma(bb) {
      let {
        name: cb,
        percent: sb,
        progress: kb
      } = bb;
      return (0, EW.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, EW.jsx)(oW, {
          percent: sb,
          label: `${(0,Ha.wb)(cb)}: ${kb}`
        }), (0, EW.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: kb
        })]
      })
    }

    function Xa(bb) {
      let {
        subquests: cb,
        showDescriptions: sb = !1
      } = bb;
      return (0, EW.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: cb.map((bb => {
          const cb = sb && "completed" === bb.status,
            kb = (0, EW.jsxs)("li", {
              className: YW()("SkyblockQuestStep", bb.status, {
                JustFinished: bb.justFinished,
                JustUnlocked: bb.justUnlocked
              }),
              tabIndex: cb ? 0 : void 0,
              children: [null !== bb.iconItem && (0, EW.jsx)(fa, {
                item: bb.iconItem
              }), null === bb.iconItem && (0, EW.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === bb.status ? "\u2713" : "skipped" === bb.status ? "\u2212" : "\u25cb"
              }), (0, EW.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, EW.jsx)("strong", {
                  children: (0, EW.jsx)(Ia.b, {
                    text: bb.name
                  })
                }), sb && !cb && (0, EW.jsx)("span", {
                  children: (0, EW.jsx)(Ia.b, {
                    text: bb.description
                  })
                }), null !== bb.barPercent && (0, EW.jsx)(Ma, {
                  name: bb.name,
                  percent: bb.barPercent,
                  progress: bb.progress
                }), null === bb.barPercent && !cb && (0, EW.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: bb.statusLabel
                })]
              })]
            }, bb.id);
          return cb ? (0, EW.jsx)(Ua.f, {
            delayShow: 200,
            tooltipInner: (0, EW.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, EW.jsx)("span", {
                children: (0, EW.jsx)(Ia.b, {
                  text: bb.description
                })
              }), (0, EW.jsx)("strong", {
                children: bb.statusLabel
              })]
            }),
            children: kb
          }, bb.id) : kb
        }))
      })
    }

    function na(bb) {
      let {
        quest: cb,
        select: sb
      } = bb;
      const {
        t: kb
      } = (0, PW.E)(), Wb = cb.focusStep;
      return (0, EW.jsxs)(AW.d, {
        className: YW()("SkyblockQuestCard", {
          Selected: cb.selected,
          Tracked: cb.tracked
        }),
        onClick: () => {
          sb(cb.id)
        },
        children: [(0, EW.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, EW.jsx)("strong", {
            children: (0, EW.jsx)(Ia.b, {
              text: cb.name
            })
          }), cb.tracked && (0, EW.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: kb("skyblockGame:currentQuest")
          })]
        }), Wb && (0, EW.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== Wb.iconItem && (0, EW.jsx)(fa, {
            item: Wb.iconItem
          }), (0, EW.jsx)(Ma, {
            name: Wb.name,
            percent: Wb.barPercent,
            progress: Wb.progress
          })]
        }), (0, EW.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: cb.progress
        })]
      })
    }

    function ma(bb) {
      let {
        controller: cb,
        surface: sb
      } = bb;
      const kb = (0, DW.h)(Hs, cb.getSnapshot()),
        {
          t: Wb
        } = (0, PW.E)(),
        ab = rW();
      return kb.enabled ? (0, EW.jsxs)(EW.Fragment, {
        children: ["hud" === sb && (0, EW.jsx)(EW.Fragment, {
          children: kb.tracked && (0, EW.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: Is,
            children: (0, EW.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [kb.trackedStepPulse > 0 && (0, EW.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, kb.trackedStepPulse), (0, EW.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: Wb("skyblockGame:currentQuest")
              }), (0, EW.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, EW.jsx)("strong", {
                  children: (0, EW.jsx)(Ia.b, {
                    text: kb.tracked.name
                  })
                }), null !== kb.tracked.clock && (0, EW.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: kb.tracked.clock
                })]
              }), (0, EW.jsx)(Xa, {
                subquests: kb.tracked.subquests
              })]
            })
          })
        }), "menu" === sb && (0, EW.jsx)(dW.c, {
          show: kb.open,
          close: cb.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, EW.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: ab,
            onKeyDown: wW,
            children: [(0, EW.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, EW.jsx)("div", {
                children: (0, EW.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: Wb("skyblockGame:quests")
                })
              }), (0, EW.jsx)(AW.j, {
                padIgnore: !0,
                onClick: cb.dismiss
              })]
            }), (0, EW.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, EW.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, EW.jsx)("h3", {
                  children: Wb("skyblockGame:current")
                }), 0 === kb.active.length && (0, EW.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: Wb("skyblockGame:noActiveQuests")
                }), kb.active.map((bb => (0, EW.jsx)(na, {
                  quest: bb,
                  select: cb.select
                }, bb.id))), (0, EW.jsx)("h3", {
                  children: (0, EW.jsxs)("button", {
                    type: "button",
                    className: YW()("SkyblockQuestSectionToggle", {
                      Expanded: kb.completedExpanded
                    }),
                    "aria-expanded": kb.completedExpanded,
                    onClick: cb.toggleCompleted,
                    children: [(0, EW.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), Wb("skyblockGame:completed"), (0, EW.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: kb.completed.length
                    })]
                  })
                }), kb.completedExpanded && 0 === kb.completed.length && (0, EW.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: Wb("skyblockGame:noCompletedQuests")
                }), kb.completedExpanded && kb.completed.map((bb => (0, EW.jsx)(na, {
                  quest: bb,
                  select: cb.select
                }, bb.id)))]
              }), kb.detail && (0, EW.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [kb.detail.completed && (0, EW.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: Wb("skyblockGame:completedQuest")
                }), (0, EW.jsx)("h3", {
                  children: (0, EW.jsx)(Ia.b, {
                    text: kb.detail.name
                  })
                }), (0, EW.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, EW.jsx)(Ia.b, {
                    text: kb.detail.description
                  })
                }), (0, EW.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [kb.detail.progress, null !== kb.detail.clock && (0, EW.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: kb.detail.clock
                  })]
                }), (0, EW.jsx)(Xa, {
                  subquests: kb.detail.subquests,
                  showDescriptions: !0
                }), kb.detail.tracked && (0, EW.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: kb.detail.trackLabel
                }), !kb.detail.completed && !kb.detail.tracked && (0, EW.jsx)(AW.n, {
                  onClick: cb.trackSelected,
                  disabled: !kb.detail.canTrack,
                  children: kb.detail.trackLabel
                }), kb.detail.canViewDialogue && (0, EW.jsx)(AW.d, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: cb.viewDialogue,
                  children: Wb("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var la = sb(1039),
      Qa = sb(2459);

    function ea(bb, cb, sb, kb, Wb) {
      const ab = bb => "linear" === Wb ? bb : {
          Ra: Wb,
          point: bb
        },
        Tb = {};
      for (const [Ub, Ib] of kb)
        for (const [cb, sb] of Object.entries(bb(Ub, Ib, ab))) Tb[cb] ??= {
          timeline: []
        }, Tb[cb].timeline.push(sb);
      return {
        da: cb,
        loop: sb,
        ra: Tb
      }
    }
    const Ca = .547,
      Na = .022,
      Va = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      La = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function ua(bb, cb, sb) {
      const {
        drop: kb = 0,
        shift: Wb = 0,
        torso: ab = 0,
        nod: Tb = 0,
        tilt: Ub = 0,
        legs: Ib = [0, 0],
        arms: Hb = 0,
        spread: fb = 0
      } = cb, Mb = Ca * Math.cos(ab) - Na * Math.sin(ab), Xb = Ca * Math.sin(ab) + Na * Math.cos(ab), nb = sb([0, -kb, Wb]);
      return {
        LowerBody: {
          timeFraction: bb,
          position: nb,
          rotation: sb([0, 0, 0])
        },
        UpperBody: {
          timeFraction: bb,
          position: nb,
          rotation: sb([ab, 0, Ub])
        },
        HeadMesh: {
          timeFraction: bb,
          position: sb([0, Mb - Ca - kb, Xb - Na + Wb]),
          rotation: sb([ab + Tb, 0, Ub])
        },
        LegLeftMesh: {
          timeFraction: bb,
          rotation: sb([Ib[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: bb,
          rotation: sb([Ib[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: bb,
          rotation: sb([Hb, 0, fb])
        },
        ArmRightMesh: {
          timeFraction: bb,
          rotation: sb([Hb, 0, -fb])
        }
      }
    }

    function Ya(bb, cb, sb) {
      return ea(ua, bb, cb, sb, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function ha(bb) {
      return "number" === typeof bb ? [bb, bb] : bb
    }

    function Ja(bb, cb, sb) {
      const {
        rise: kb = 0,
        shift: Wb = 0,
        torso: ab = 0,
        twist: Tb = 0,
        tilt: Ub = 0,
        nod: Ib = 0,
        cock: Hb = 0,
        arms: fb = 0,
        spread: Mb = 0
      } = cb, [Xb, nb] = ha(fb), [mb, lb] = ha(Mb);
      return {
        TorsoNode: {
          timeFraction: bb,
          position: sb([0, kb, Wb]),
          rotation: sb([ab, Tb, Ub])
        },
        HeadMesh: {
          timeFraction: bb,
          rotation: sb([Ib, 0, Hb])
        },
        ArmLeftMesh: {
          timeFraction: bb,
          rotation: sb([Xb, 0, mb])
        },
        ArmRightMesh: {
          timeFraction: bb,
          rotation: sb([nb, 0, -lb])
        }
      }
    }
    const ga = [1.0625, -1, 0];

    function Ba(bb) {
      return "number" === typeof bb ? [bb, bb] : bb
    }

    function ta(bb, cb, sb) {
      const {
        drop: kb = 0,
        shift: Wb = 0,
        torso: ab = 0,
        tilt: Tb = 0,
        nod: Ub = 0,
        cock: Ib = 0,
        legs: Hb = [0, 0],
        arms: fb = 0,
        spread: Mb = 0
      } = cb, [Xb, nb] = Ba(fb), [mb, lb] = Ba(Mb), Qb = -ab, eb = -Tb, [Cb, Nb, Vb] = function(bb, cb) {
        const [sb, kb, Wb] = [-ga[0], ga[1], -ga[2]], ab = sb * Math.cos(cb) - kb * Math.sin(cb), Tb = sb * Math.sin(cb) + kb * Math.cos(cb);
        return [ab - sb, -(Tb * Math.cos(bb) - Wb * Math.sin(bb) - kb), Tb * Math.sin(bb) + Wb * Math.cos(bb) - Wb]
      }(Qb, eb), Lb = sb([0, -kb, Wb]);
      return {
        TorsoNode: {
          timeFraction: bb,
          position: sb([Cb, Nb - kb, Vb + Wb]),
          rotation: sb([Qb, 0, eb])
        },
        HeadMesh: {
          timeFraction: bb,
          rotation: sb([-Ub, 0, -Ib])
        },
        ArmLeftMesh: {
          timeFraction: bb,
          rotation: sb([-Xb, 0, -mb])
        },
        ArmRightMesh: {
          timeFraction: bb,
          rotation: sb([-nb, 0, lb])
        },
        LegLeftMesh: {
          timeFraction: bb,
          position: Lb,
          rotation: sb([-Hb[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: bb,
          position: Lb,
          rotation: sb([-Hb[1], 0, 0])
        }
      }
    }
    var ya = sb(36717),
      Pa = sb(38080),
      Da = sb(38240);

    function Ea(bb, cb, sb) {
      var kb, Wb;
      const ab = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return bb + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - bb) * sb
        },
        [Tb, Ub] = null !== (kb = bb.legs) && void 0 !== kb ? kb : [0, 0],
        [Ib, Hb] = null !== (Wb = cb.legs) && void 0 !== Wb ? Wb : [0, 0];
      return {
        drop: ab(bb.drop, cb.drop),
        shift: ab(bb.shift, cb.shift),
        torso: ab(bb.torso, cb.torso),
        nod: ab(bb.nod, cb.nod),
        tilt: ab(bb.tilt, cb.tilt),
        legs: [ab(Tb, Ib), ab(Ub, Hb)],
        arms: ab(bb.arms, cb.arms),
        spread: ab(bb.spread, cb.spread)
      }
    }
    const ia = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      Oa = Ya(4400, !0, [
        [0, ia],
        [.16, {
          ...ia,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, ia],
        [.44, {
          ...ia,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, Ea(ia, Va, .7)],
        [.66, Ea(ia, Va, .78)],
        [.74, Ea(ia, La, .65)],
        [.86, {
          ...ia,
          drop: .14
        }],
        [1, ia]
      ], "catmull-rom-spline"),
      Ga = {
        ...ia,
        drop: .14,
        torso: .3,
        spread: .4
      },
      Ka = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      Za = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      za = {
        caveGolem: Oa,
        magmaGolem: Ya(3600, !0, [
          [0, Ga],
          [.12, {
            ...Ga,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...Ga,
            tilt: -.08
          }],
          [.4, {
            ...Ga,
            tilt: .06,
            drop: .11
          }],
          [.52, Ea(Ga, Va, .9)],
          [.62, Ea(Ga, La, .8)],
          [.7, Ea(Ga, La, .45)],
          [.78, Ea(Ga, La, .85)],
          [.9, {
            ...Ga,
            drop: .17
          }],
          [1, Ga]
        ], "catmull-rom-spline"),
        frostWraith: function(bb, cb, sb) {
          return ea(Ja, bb, cb, sb, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, Ka],
          [.14, {
            ...Ka,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...Ka,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...Ka,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...Ka,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...Ka,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...Ka,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...Ka,
            rise: .16,
            tilt: -.04
          }],
          [1, Ka]
        ], "catmull-rom-spline"),
        tikiTerror: function(bb, cb, sb) {
          return ea(ta, bb, cb, sb, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, Za],
          [.16, {
            ...Za,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, Za],
          [.44, {
            ...Za,
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
            ...Za,
            drop: .1
          }],
          [1, Za]
        ], "catmull-rom-spline")
      },
      qa = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      da = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      Aa = Object.fromEntries(Object.entries(za).map((bb => {
        let [cb, sb] = bb;
        return [cb, (0, Da.c)((0, ya.g)(sb), cb)]
      })));

    function wa(bb) {
      const cb = function(bb) {
        var cb;
        const sb = (0, Pa.e)(bb).poseRig;
        return null !== (cb = da[bb]) && void 0 !== cb ? cb : void 0 === sb ? null : qa[sb]
      }(bb);
      return null === cb ? null : Aa[cb]
    }

    function ra(bb) {
      return {
        "--difficulty-colour": bb
      }
    }
    const oa = (0, Jb.lazy)((() => (0, Qa.c)(sb.e(192).then((() => sb(40939))), (bb => bb.MobPreview))));

    function Sa(bb) {
      var cb, sb, kb;
      let {
        picker: Wb,
        controller: ab
      } = bb;
      const {
        t: Tb
      } = (0, PW.E)(), Ub = rW(), {
        page: Ib
      } = Wb;
      return (0, EW.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: Ub,
        onKeyDown: bb => {
          "ArrowLeft" === bb.key ? (bb.preventDefault(), bb.stopPropagation(), ab.previous()) : "ArrowRight" === bb.key ? (bb.preventDefault(), bb.stopPropagation(), ab.next()) : wW(bb)
        },
        style: ra(Ib.colour),
        children: [(0, EW.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, EW.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: Wb.dungeonName
          }), (0, EW.jsx)(AW.j, {
            padIgnore: !0,
            onClick: ab.dismiss
          })]
        }), (0, EW.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, EW.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, EW.jsx)(AW.d, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !Wb.canPrevious,
              onClick: ab.previous,
              children: (0, EW.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, EW.jsx)(la.b, {
                  name: "angle-up"
                })
              })
            }), (0, EW.jsxs)("div", {
              className: YW()("SkyblockBossPickerBoss", {
                Locked: !Ib.unlocked
              }),
              children: [null !== Ib.bossMobType && (0, EW.jsx)(Jb.Suspense, {
                fallback: (0, EW.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, EW.jsx)(oa, {
                  className: "SkyblockBossPickerModel",
                  mobType: Ib.bossMobType,
                  variation: Ib.bossMobVariation,
                  animation: null !== (cb = wa(Ib.bossMobType)) && void 0 !== cb ? cb : void 0
                })
              }), null === Ib.bossMobType && (0, EW.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, EW.jsx)(AW.d, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !Wb.canNext,
              onClick: ab.next,
              children: (0, EW.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, EW.jsx)(la.b, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, EW.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, EW.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [Ib.beaten && (0, EW.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), Ib.label]
            }), (0, EW.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (sb = Ib.bossName) && void 0 !== sb ? sb : "???"
            }), (0, EW.jsxs)("span", {
              className: YW()("SkyblockBossPickerRecord", {
                Locked: null !== Ib.lockedHint
              }),
              children: [null !== Ib.lockedHintHighlight && (0, EW.jsxs)(EW.Fragment, {
                children: [Ib.lockedHintHighlight.before, (0, EW.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: ra(Ib.lockedHintHighlight.colour),
                  children: [null !== Ib.lockedHintHighlight.icon && (0, EW.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, EW.jsx)(BW.d, {
                      itemName: Ib.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), Ib.lockedHintHighlight.name]
                }), Ib.lockedHintHighlight.after]
              }), null === Ib.lockedHintHighlight && (null !== (kb = Ib.lockedHint) && void 0 !== kb ? kb : Ib.summary)]
            })]
          }), (0, EW.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: Wb.pages.map((bb => (0, EW.jsx)("span", {
              className: YW()("SkyblockBossPickerDot", {
                Current: bb.current,
                Locked: !bb.unlocked
              }),
              style: ra(bb.colour)
            }, bb.difficulty)))
          }), (0, EW.jsx)(AW.p, {
            className: "SkyblockBossPickerFight",
            disabled: !Ib.unlocked,
            onClick: ab.enter,
            children: Tb("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function Ra(bb) {
      let {
        dungeon: cb,
        select: sb
      } = bb;
      return (0, EW.jsxs)(AW.d, {
        className: YW()("SkyblockDungeonCard", {
          Selected: cb.selected
        }),
        onClick: () => {
          sb(cb.id)
        },
        children: [(0, EW.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, EW.jsx)("strong", {
            children: cb.name
          }), (0, EW.jsx)("span", {
            children: cb.beatenSummary
          })]
        }), (0, EW.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: cb.difficulties.map((bb => (0, EW.jsxs)("span", {
            className: YW()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: bb.beaten
            }),
            style: ra(bb.colour),
            title: bb.summary,
            children: [bb.beaten && (0, EW.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), bb.label]
          }, bb.difficulty)))
        })]
      })
    }

    function va(bb) {
      let {
        controller: cb
      } = bb;
      const sb = (0, DW.h)(ns, cb.getSnapshot()),
        {
          t: kb
        } = (0, PW.E)(),
        Wb = rW();
      return sb.enabled ? (0, EW.jsxs)(dW.c, {
        show: sb.open,
        close: cb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [sb.picker && (0, EW.jsx)(Sa, {
          picker: sb.picker,
          controller: cb
        }), !sb.picker && (0, EW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: Wb,
          onKeyDown: wW,
          children: [(0, EW.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, EW.jsxs)("div", {
              children: [(0, EW.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: kb("skyblockGame:dungeons")
              }), (0, EW.jsx)("p", {
                children: kb("skyblockGame:dungeonsIntro")
              })]
            }), (0, EW.jsx)(AW.j, {
              padIgnore: !0,
              onClick: cb.dismiss
            })]
          }), (0, EW.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, EW.jsx)("div", {
              className: "SkyblockDungeonList",
              children: sb.dungeons.map((bb => (0, EW.jsx)(Ra, {
                dungeon: bb,
                select: cb.select
              }, bb.id)))
            }), sb.detail && (0, EW.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, EW.jsx)("h3", {
                children: sb.detail.name
              }), (0, EW.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: sb.detail.difficulties.map((bb => (0, EW.jsxs)("li", {
                  className: YW()("SkyblockDungeonRecord", {
                    Beaten: bb.beaten
                  }),
                  children: [(0, EW.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: ra(bb.colour),
                    children: [bb.beaten && (0, EW.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), bb.label]
                  }), (0, EW.jsx)("span", {
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

    function Fa(bb) {
      let {
        collection: cb,
        select: sb
      } = bb;
      return (0, EW.jsxs)(AW.d, {
        className: YW()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: cb.selected,
          Locked: cb.locked
        }),
        ariaPressed: cb.selected,
        onClick: () => {
          sb(cb.id)
        },
        children: [(0, EW.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, EW.jsx)(BW.d, {
            itemName: cb.icon,
            amount: 0
          })
        }), (0, EW.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, EW.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, EW.jsx)("strong", {
              children: cb.name
            }), (0, EW.jsx)("span", {
              children: cb.tier
            })]
          }), (0, EW.jsx)(oW, {
            percent: cb.percent,
            label: `${cb.name}: ${cb.progress}`
          }), (0, EW.jsx)("span", {
            className: "SkyblockSkillXp",
            children: cb.progress
          })]
        })]
      })
    }

    function xa(bb) {
      let {
        collection: cb
      } = bb;
      const {
        t: sb
      } = (0, PW.E)();
      return (0, EW.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, EW.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, EW.jsx)(BW.d, {
            itemName: cb.icon,
            amount: 0
          })
        }), (0, EW.jsx)("h3", {
          children: cb.name
        }), (0, EW.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: cb.tier
        }), (0, EW.jsx)("p", {
          children: cb.locked ? sb("skyblockGame:collectionLocked") : cb.count
        }), null !== cb.nextReward && (0, EW.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, EW.jsx)("strong", {
            children: sb("skyblockGame:collectionNextReward")
          }), (0, EW.jsx)("span", {
            children: cb.nextReward
          })]
        }), (0, EW.jsx)(oW, {
          percent: cb.percent,
          label: cb.progress
        }), (0, EW.jsx)("p", {
          children: cb.progress
        })]
      })
    }

    function ja(bb) {
      let {
        controller: cb
      } = bb;
      const sb = (0, DW.h)(Gs, cb.getSnapshot()),
        {
          t: kb
        } = (0, PW.E)(),
        Wb = rW();
      return sb.enabled ? (0, EW.jsx)(dW.c, {
        show: sb.open,
        close: cb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, EW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: Wb,
          onKeyDown: wW,
          children: [(0, EW.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, EW.jsxs)("div", {
              children: [(0, EW.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: kb("skyblockGame:collections")
              }), (0, EW.jsxs)("p", {
                children: [kb("skyblockGame:collectionsIntro"), " ", sb.tiersUnlocked]
              })]
            }), (0, EW.jsx)(AW.j, {
              padIgnore: !0,
              onClick: cb.dismiss
            })]
          }), (0, EW.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: sb.categories.map((bb => (0, EW.jsxs)(AW.d, {
              className: YW()("SkyblockCollectionCategory", {
                Selected: bb.selected
              }),
              ariaPressed: bb.selected,
              padTabSelected: bb.selected,
              onClick: () => {
                cb.selectCategory(bb.id)
              },
              children: [(0, EW.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, EW.jsx)(BW.d, {
                  itemName: bb.icon,
                  amount: 0
                })
              }), (0, EW.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, EW.jsx)("strong", {
                  children: bb.label
                }), (0, EW.jsx)("span", {
                  children: bb.tiers
                })]
              })]
            }, bb.id)))
          }), (0, EW.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, EW.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: sb.collections.map((bb => (0, EW.jsx)(Fa, {
                collection: bb,
                select: cb.select
              }, bb.id)))
            }), sb.detail && (0, EW.jsx)(xa, {
              collection: sb.detail
            })]
          })]
        })
      }) : null
    }
    const pa = ["completed", "active", "available", "locked"],
      bT = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function cT(bb) {
      let {
        controller: cb
      } = bb;
      const sb = (0, DW.h)(vs, cb.getSnapshot()),
        {
          t: kb
        } = (0, PW.E)(),
        Wb = rW();
      return sb.enabled ? (0, EW.jsx)(dW.c, {
        show: sb.open,
        close: cb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, EW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: Wb,
          onKeyDown: wW,
          children: [(0, EW.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, EW.jsxs)("div", {
              children: [(0, EW.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: kb("skyblockDevQuests:title")
              }), (0, EW.jsx)("p", {
                children: kb("skyblockDevQuests:intro")
              })]
            }), (0, EW.jsx)(AW.j, {
              onClick: cb.dismiss
            })]
          }), (0, EW.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [pa.map((bb => (0, EW.jsx)("span", {
              className: YW()("SkyblockQuestGraphLegendState", bb),
              children: kb(`skyblockDevQuests:state_${bb}`)
            }, bb))), bT.map((bb => (0, EW.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, EW.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, EW.jsx)("line", {
                  className: YW()("SkyblockQuestGraphEdge", bb),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), kb(`skyblockDevQuests:edge_${bb}`)]
            }, bb)))]
          }), (0, EW.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, EW.jsxs)("div", {
              className: YW()("SkyblockQuestGraphCanvas", {
                Planning: sb.planning
              }),
              style: {
                width: sb.width,
                height: sb.height
              },
              children: [(0, EW.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: sb.width,
                height: sb.height,
                "aria-hidden": "true",
                children: [(0, EW.jsx)("defs", {
                  children: (0, EW.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, EW.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), sb.edges.map((bb => (0, EW.jsx)("path", {
                  className: YW()("SkyblockQuestGraphEdge", bb.kind, {
                    InPlan: bb.inPlan
                  }),
                  d: bb.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, bb.key)))]
              }), sb.nodes.map((bb => (0, EW.jsxs)("button", {
                type: "button",
                className: YW()("SkyblockQuestGraphNode", bb.state, {
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
                  cb.hover(bb.id)
                },
                onMouseLeave: () => {
                  cb.hover(null)
                },
                onFocus: () => {
                  cb.hover(bb.id)
                },
                onBlur: () => {
                  cb.hover(null)
                },
                onClick: () => {
                  cb.jump(bb.id)
                },
                children: [(0, EW.jsx)("strong", {
                  children: bb.name
                }), (0, EW.jsx)("span", {
                  children: bb.detail
                })]
              }, bb.id)))]
            })
          })]
        })
      }) : null
    }
    const sT = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      kT = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${Hk}ms`,
        "--forge-duration": "2150ms"
      },
      WT = Array.from({
        length: 18
      }, ((bb, cb) => ({
        "--ember-left": `${(4+92*(.618034*cb%1)).toFixed(1)}%`,
        "--ember-size": 3 + cb % 3 * 2 + "px",
        "--ember-drift": 14 * (cb % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*cb%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*cb%8).toFixed(2)}s`
      })));

    function aT(bb) {
      if (bb.style.removeProperty("--part-size"), null === bb.parentElement || "wrap" === getComputedStyle(bb.parentElement).flexWrap) return;
      const cb = [...bb.children],
        sb = getComputedStyle(bb),
        kb = parseFloat(sb.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        Wb = (bb.clientHeight - parseFloat(sb.rowGap) * (cb.length - 1)) / cb.length,
        ab = cb.map((bb => {
          const cb = getComputedStyle(bb),
            sb = bb.querySelector("h3"),
            ab = bb.querySelector(".SkyblockForgeParts");
          if (null === sb || null === ab) return kb;
          const Tb = Wb - parseFloat(cb.paddingTop) - parseFloat(cb.paddingBottom) - sb.offsetHeight - parseFloat(getComputedStyle(sb).marginBottom),
            Ub = parseFloat(getComputedStyle(ab).columnGap),
            Ib = ab.children.length;
          let Hb = 0;
          for (let kb = 1; kb <= Ib; kb++) {
            const bb = Math.ceil(Ib / kb);
            Hb = Math.max(Hb, Math.min((ab.clientWidth - Ub * (kb - 1)) / kb, (Tb - Ub * (bb - 1)) / bb))
          }
          return Hb
        }));
      bb.style.setProperty("--part-size", `${Math.floor(Math.max(kb,Math.min(...ab)))}px`)
    }

    function TT(bb) {
      var cb, sb, kb, ab, Tb;
      let {
        controller: Ub
      } = bb;
      const Ib = (0, DW.h)(Qk, Ub.getSnapshot()),
        {
          t: Hb
        } = (0, PW.E)(),
        fb = rW(),
        Mb = function() {
          const bb = (0, Jb.useRef)(null),
            cb = (0, Jb.useRef)(null);
          return (0, Jb.useLayoutEffect)((() => {
            null !== bb.current && aT(bb.current)
          })), (0, Jb.useCallback)((sb => {
            var kb;
            null === (kb = cb.current) || void 0 === kb || kb.disconnect(), cb.current = null, bb.current = sb, null !== sb && (cb.current = new ResizeObserver((() => {
              aT(sb)
            })), cb.current.observe(sb))
          }), [])
        }(),
        Xb = function(bb) {
          const cb = (0, Jb.useRef)(null);
          return (0, Jb.useLayoutEffect)((() => {
            const bb = cb.current;
            if (null !== bb) {
              bb.style.removeProperty("font-size");
              for (let cb = 1.7; cb > 1.1 && bb.scrollWidth > bb.clientWidth; cb -= .1) bb.style.fontSize = cb - .1 + "rem"
            }
          }), [bb]), (0, Jb.useCallback)((bb => {
            cb.current = bb
          }), [])
        }(null === (cb = Ib.preview) || void 0 === cb ? void 0 : cb.name),
        nb = (0, Jb.useRef)(null),
        mb = (0, Jb.useRef)({}),
        lb = Ib.forging,
        Qb = null !== (sb = null === lb || void 0 === lb ? void 0 : lb.preview.tier) && void 0 !== sb ? sb : 0,
        eb = null !== (kb = null === lb || void 0 === lb ? void 0 : lb.preview.named) && void 0 !== kb && kb,
        Cb = (0, Jb.useMemo)((() => {
          return null === lb ? null : {
            flames: (bb = Qb, cb = eb, Array.from({
              length: 26 + 6 * bb + (cb ? 20 : 0)
            }, ((bb, cb) => {
              const sb = cb < 6,
                kb = Math.random() * Math.PI * 2,
                Wb = sb ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                ab = Math.cos(kb) * Wb,
                Tb = Math.sin(kb) * Wb - 2 - 3 * Math.random(),
                Ub = Math.random(),
                [Ib, Hb, fb] = sb ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : Ub < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : Ub < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [Ub < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": Ib,
                "--x0": `${(.15*ab).toFixed(2)}rem`,
                "--y0": `${(.15*Tb).toFixed(2)}rem`,
                "--x": `${ab.toFixed(2)}rem`,
                "--y": `${Tb.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${Hb.toFixed(2)}rem`,
                "--duration": `${Math.round(fb)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: Xk(Qb, eb)
          };
          var bb, cb
        }), [null === lb || void 0 === lb ? void 0 : lb.id]);
      if (!Ib.enabled) return null;
      const Nb = Ib.preview,
        Vb = Ib.arriving,
        Lb = null !== Vb && !Vb.sameSword,
        ub = null !== Nb && (0, EW.jsx)(BW.d, {
          itemName: Nb.baseSword,
          amount: 0,
          enchantmentTier: Nb.enchantmentTier
        });
      return (0, EW.jsx)(dW.c, {
        show: Ib.open,
        close: Ub.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, EW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: fb,
          onKeyDown: wW,
          children: [(0, EW.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: WT.map(((bb, cb) => (0, EW.jsx)("span", {
              style: bb
            }, cb)))
          }), (0, EW.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, EW.jsxs)("div", {
              children: [(0, EW.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: Hb("skyblockGame:forgeTitle")
              }), (0, EW.jsx)("p", {
                children: Hb("skyblockGame:forgeIntro")
              })]
            }), (0, EW.jsx)(AW.j, {
              onClick: Ub.dismiss
            })]
          }), (0, EW.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, EW.jsx)("div", {
              ref: Mb,
              className: YW()("SkyblockForgeSlots", {
                Locked: null !== lb
              }),
              children: Ib.slots.map((bb => (0, EW.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, EW.jsx)("h3", {
                  children: bb.label
                }), (0, EW.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: bb.parts.map((cb => (0, EW.jsx)("button", {
                    type: "button",
                    className: YW()("SkyblockForgePart", {
                      Selected: cb.selected,
                      Missing: cb.placeholder
                    }),
                    disabled: cb.placeholder,
                    title: cb.placeholder ? Hb("skyblockGame:forgePickParts") : cb.itemName,
                    "aria-pressed": cb.selected,
                    onClick: () => {
                      Ub.select(bb.kind, cb.material)
                    },
                    children: (0, EW.jsx)(BW.d, {
                      itemName: cb.itemName,
                      amount: cb.owned
                    })
                  }, cb.material)))
                })]
              }, bb.kind)))
            }), (0, EW.jsxs)("div", {
              className: YW()("SkyblockForgeAnvil", {
                Named: null === Nb || void 0 === Nb ? void 0 : Nb.named
              }),
              style: {
                "--tier": null === Nb ? "transparent" : Wb.nb[Nb.enchantmentTier]
              },
              children: [(0, EW.jsxs)("div", {
                className: YW()("SkyblockForgeAltar", {
                  Forging: null !== lb
                }),
                style: null === lb ? void 0 : kT,
                children: [(0, EW.jsxs)("div", {
                  className: YW()("SkyblockForgeMount", {
                    Arrive: null !== Vb
                  }),
                  children: [null === Nb && (0, EW.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, EW.jsx)(BW.d, {
                      itemName: Ib.unformedSword,
                      amount: 0
                    })
                  }), null !== Nb && (0, EW.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== Nb && null === lb && (0, EW.jsx)("div", {
                    ref: nb,
                    className: "SkyblockForgeFloat",
                    children: (0, EW.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: ub
                    })
                  }), null !== Nb && (0, EW.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: Mk.map(((bb, cb) => (0, EW.jsx)("span", {
                      className: YW()({
                        Rune: "" !== bb.rune
                      }),
                      style: bb.style,
                      children: bb.rune
                    }, cb)))
                  }), null !== lb && null !== Cb && (0, EW.jsxs)(EW.Fragment, {
                    children: [(0, EW.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, EW.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: Cb.flames.map(((bb, cb) => (0, EW.jsx)("span", {
                        style: bb
                      }, cb)))
                    }), (0, EW.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: mb.current,
                      children: (0, EW.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: ub
                      })
                    }), (0, EW.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, EW.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (Qb >= 4 || eb) && (0, EW.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, EW.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: Cb.sparks.map(((bb, cb) => (0, EW.jsx)("span", {
                        style: bb
                      }, cb)))
                    }), (0, EW.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, EW.jsx)("p", {
                  className: YW()("SkyblockForgeStatus", null === (ab = Ib.status) || void 0 === ab ? void 0 : ab.tone),
                  children: null === (Tb = Ib.status) || void 0 === Tb ? void 0 : Tb.text
                })]
              }), null === Nb && (0, EW.jsx)("p", {
                className: YW()("SkyblockForgeName Waiting", {
                  ArriveText: Lb
                }),
                children: Hb(Ib.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== Nb && (0, EW.jsx)("h3", {
                ref: Xb,
                className: YW()("SkyblockForgeName", {
                  ArriveText: Lb
                }),
                title: Nb.name,
                children: Nb.name
              }), (null === Nb || void 0 === Nb ? void 0 : Nb.named) && (0, EW.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: Hb("skyblockGame:forgeSecret")
              }), (0, EW.jsxs)(AW.p, {
                className: "SkyblockForgeButton",
                disabled: !Ib.canForge,
                title: null === Nb ? void 0 : Hb("skyblockGame:forgeCoalOwned", {
                  owned: String(Ib.coalOwned)
                }),
                onClick: () => {
                  mb.current = function(bb) {
                    const cb = null === bb ? "none" : getComputedStyle(bb).transform,
                      sb = new DOMMatrixReadOnly("none" === cb ? void 0 : cb);
                    return {
                      "--settle-y": `${sb.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(sb.b,sb.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(nb.current), lk(), Ub.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [Hb("skyblockGame:forgeButton"), null !== Nb && (0, EW.jsxs)("span", {
                  className: YW()("SkyblockForgeCost", {
                    Short: Nb.coalShort
                  }),
                  children: [(0, EW.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, EW.jsx)(BW.d, {
                      itemName: ck.d,
                      amount: 0
                    })
                  }), Nb.coalCost]
                })]
              })]
            }), (0, EW.jsxs)("div", {
              className: YW()("SkyblockForgeDetails", {
                Named: null === Nb || void 0 === Nb ? void 0 : Nb.named
              }),
              children: [(0, EW.jsx)("p", {
                className: YW()("SkyblockForgeLore", {
                  ArriveText: Lb
                }),
                title: null === Nb || void 0 === Nb ? void 0 : Nb.lore,
                children: null === Nb || void 0 === Nb ? void 0 : Nb.lore
              }), (0, EW.jsxs)("dl", {
                className: YW()("SkyblockForgeStats", {
                  ArriveText: Lb
                }),
                children: [null === Nb && sT.map((bb => (0, EW.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, EW.jsx)("dt", {
                    children: Hb(bb)
                  }), (0, EW.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, bb))), null === Nb || void 0 === Nb ? void 0 : Nb.stats.map((bb => (0, EW.jsxs)("div", {
                  className: YW()("SkyblockForgeStat", {
                    Better: bb.better
                  }),
                  children: [(0, EW.jsx)("dt", {
                    children: bb.label
                  }), (0, EW.jsx)("dd", {
                    children: bb.value
                  })]
                }, bb.label)))]
              }), (0, EW.jsx)("ul", {
                className: YW()("SkyblockForgeEffects", {
                  ArriveText: Lb
                }),
                children: null === Nb || void 0 === Nb ? void 0 : Nb.effects.map((bb => (0, EW.jsx)("li", {
                  children: bb
                }, bb)))
              })]
            })]
          })]
        })
      })
    }
    const UT = "Doom Rivet",
      IT = "Doom Crest";

    function HT(bb) {
      let {
        itemName: cb,
        amount: sb,
        owned: kb
      } = bb;
      return (0, EW.jsxs)("span", {
        className: YW()("SkyblockSmugglerPrice", {
          Short: sb > kb
        }),
        children: [(0, EW.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, EW.jsx)(BW.d, {
            itemName: cb,
            amount: 0
          })
        }), (0, EW.jsx)("span", {
          children: sb
        })]
      })
    }

    function fT(bb) {
      return bb.justBought ? "skyblockGame:smugglerJustBought" : bb.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function MT(bb) {
      let {
        deal: cb,
        view: sb,
        buy: kb
      } = bb;
      const {
        t: Wb
      } = (0, PW.E)();
      return (0, EW.jsxs)("div", {
        className: YW()("SkyblockSmugglerPocket", {
          Bought: cb.justBought,
          Unaffordable: !cb.affordable,
          SoldOut: cb.soldOut && !cb.justBought
        }),
        children: [(0, EW.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, EW.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, EW.jsx)(BW.d, {
            itemName: cb.itemName,
            amount: 0,
            enchantmentTier: cb.enchantmentTier
          }), cb.amount > 1 && (0, EW.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: Wb("skyblockGame:smugglerAmount", {
              amount: cb.amount
            })
          })]
        }), (0, EW.jsx)("h3", {
          children: cb.displayName
        }), (0, EW.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, EW.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [cb.rivets > 0 && (0, EW.jsx)(HT, {
              itemName: UT,
              amount: cb.rivets,
              owned: sb.rivetsOwned
            }), cb.crests > 0 && (0, EW.jsx)(HT, {
              itemName: IT,
              amount: cb.crests,
              owned: sb.crestsOwned
            })]
          }), (0, EW.jsx)(AW.d, {
            className: "SkyblockSmugglerBuy",
            disabled: cb.soldOut || !cb.affordable || sb.pending,
            onClick: () => {
              kb(cb.slot)
            },
            children: Wb(fT(cb))
          })]
        })]
      }, cb.justBought ? sb.boughtCount : 0)
    }

    function XT(bb) {
      let {
        controller: cb
      } = bb;
      const sb = (0, DW.h)(Nk, cb.getSnapshot()),
        {
          t: kb
        } = (0, PW.E)(),
        Wb = rW();
      return sb.enabled ? (0, EW.jsx)(dW.c, {
        show: sb.open,
        close: cb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, EW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: Wb,
          onKeyDown: wW,
          children: [(0, EW.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, EW.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, EW.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, EW.jsxs)("div", {
              children: [(0, EW.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: kb("skyblockGame:smugglerTitle")
              }), (0, EW.jsx)("p", {
                children: kb("skyblockGame:smugglerIntro")
              })]
            }), (0, EW.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, EW.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, EW.jsx)(HT, {
                  itemName: UT,
                  amount: sb.rivetsOwned,
                  owned: sb.rivetsOwned
                }), (0, EW.jsx)(HT, {
                  itemName: IT,
                  amount: sb.crestsOwned,
                  owned: sb.crestsOwned
                })]
              }), (0, EW.jsx)(AW.j, {
                onClick: cb.dismiss
              })]
            })]
          }), (0, EW.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: sb.deals.map((bb => (0, EW.jsx)(MT, {
              deal: bb,
              view: sb,
              buy: cb.buy
            }, bb.slot)))
          }), (0, EW.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, EW.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: sb.rotatesText
            }), null !== sb.status && (0, EW.jsx)("span", {
              className: YW()("SkyblockSmugglerStatus", sb.status.tone),
              children: sb.status.text
            })]
          })]
        })
      }) : null
    }

    function nT(bb) {
      let {
        phase: cb,
        className: sb
      } = bb;
      return (0, EW.jsx)("span", {
        className: YW()("SkyblockMoon", `Moon-${cb}`, sb),
        "aria-hidden": "true"
      })
    }

    function mT(bb) {
      let {
        controller: cb
      } = bb;
      const sb = (0, DW.h)(uk, cb.getSnapshot()),
        {
          t: kb
        } = (0, PW.E)();
      return sb.enabled ? (0, EW.jsx)(JW.e, {
        placement: "statBars",
        children: (0, EW.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: YW()("SkyblockPassageChip", sb.open && "Open"),
          "aria-label": kb("skyblockGame:passageChipLabel", {
            phase: sb.phaseName
          }),
          title: kb("skyblockGame:passageChipLabel", {
            phase: sb.phaseName
          }),
          onMouseDown: bb => {
            bb.preventDefault()
          },
          onClick: cb.toggle,
          children: (0, EW.jsx)(nT, {
            phase: sb.phase
          }, sb.phase)
        })
      }) : null
    }

    function lT(bb) {
      let {
        fish: cb
      } = bb;
      return (0, EW.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, EW.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, EW.jsx)(BW.d, {
            itemName: cb.itemName,
            amount: 0
          })
        }), (0, EW.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, EW.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: cb.displayName
          }), (0, EW.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: cb.where
          })]
        })]
      })
    }

    function QT(bb) {
      let {
        controller: cb
      } = bb;
      const sb = (0, DW.h)(uk, cb.getSnapshot()),
        {
          t: kb
        } = (0, PW.E)(),
        Wb = rW();
      return sb.enabled ? (0, EW.jsx)(dW.c, {
        show: sb.open,
        close: cb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, EW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: Wb,
          onKeyDown: wW,
          children: [(0, EW.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, EW.jsx)(nT, {
              phase: sb.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, EW.jsxs)("div", {
              children: [(0, EW.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: kb("skyblockGame:passageTitle")
              }), (0, EW.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: sb.phaseName
              })]
            }), (0, EW.jsx)(AW.j, {
              padIgnore: !0,
              onClick: cb.dismiss
            })]
          }), (0, EW.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: kb("skyblockGame:passageIntro")
          }), (0, EW.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, EW.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, EW.jsx)("h3", {
                children: kb("skyblockGame:passageVisiting")
              }), (0, EW.jsx)("ul", {
                className: "SkyblockPassageList",
                children: sb.visitors.map((bb => (0, EW.jsx)(lT, {
                  fish: bb
                }, bb.itemName)))
              })]
            }), (0, EW.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== sb.resting && (0, EW.jsxs)(EW.Fragment, {
                children: [(0, EW.jsx)("h3", {
                  children: kb("skyblockGame:passageResting")
                }), (0, EW.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, EW.jsx)(lT, {
                    fish: sb.resting
                  })
                })]
              }), (0, EW.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, EW.jsx)(nT, {
                  phase: sb.nextPhase
                }), (0, EW.jsx)("span", {
                  children: sb.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function eT() {
      return (0, EW.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((bb => (0, EW.jsx)("i", {
          style: {
            "--sparkle-index": bb
          }
        }, bb)))
      })
    }

    function CT(bb) {
      var cb;
      let {
        charm: sb,
        view: kb,
        controller: Wb
      } = bb;
      const {
        t: ab
      } = (0, PW.E)(), Tb = kb.shop, Ub = (null === (cb = kb.sparkle) || void 0 === cb ? void 0 : cb.id) === sb.id;
      return (0, EW.jsxs)("li", {
        className: YW()("SkyblockLampLightCharm", sb.owned && "Owned", sb.socketed && "Socketed"),
        children: [Ub && (0, EW.jsx)(eT, {}, kb.sparkle.count), (0, EW.jsx)("h4", {
          children: sb.name
        }), (0, EW.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: sb.effect
        }), (0, EW.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: sb.lines.map((bb => (0, EW.jsxs)("li", {
            className: YW()("SkyblockLampLightOddsLine", "better" === bb.tone ? "Better" : "worse" === bb.tone ? "Worse" : "Same"),
            children: [(0, EW.jsx)("span", {
              className: "Before",
              children: bb.before
            }), (0, EW.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, EW.jsx)("span", {
              className: "After",
              children: bb.after
            })]
          }, bb.label)))
        }), (0, EW.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: sb.owned ? sb.socketed ? (0, EW.jsxs)(EW.Fragment, {
            children: [(0, EW.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: ab("skyblockGame:lampLightSocketed")
            }), (0, EW.jsx)(AW.M, {
              disabled: !kb.canCommand,
              ariaLabel: ab("skyblockGame:lampLightRemoveLabel", {
                charm: sb.name
              }),
              onClick: () => {
                Wb.socket(null)
              },
              children: ab("skyblockGame:lampLightRemove")
            })]
          }) : (0, EW.jsx)(AW.d, {
            disabled: !kb.canCommand || !Tb.heldRod,
            ariaLabel: ab("skyblockGame:lampLightSocketLabel", {
              charm: sb.name
            }),
            onClick: () => {
              Wb.socket(sb.id)
            },
            children: ab("skyblockGame:lampLightSocket")
          }) : (0, EW.jsx)(AW.d, {
            disabled: !kb.canCommand || !sb.affordable,
            ariaLabel: ab("skyblockGame:lampLightBuyLabel", {
              item: sb.name,
              cost: sb.cost
            }),
            onClick: () => {
              Wb.buy(sb.id)
            },
            children: sb.cost
          })
        })]
      })
    }

    function NT(bb) {
      var cb;
      let {
        tint: sb,
        view: kb,
        controller: Wb
      } = bb;
      const {
        t: ab
      } = (0, PW.E)();
      return (0, EW.jsxs)("li", {
        className: YW()("SkyblockLampLightTint", sb.wearing && "Wearing"),
        style: {
          "--tint-colour": sb.colour
        },
        children: [(null === (cb = kb.sparkle) || void 0 === cb ? void 0 : cb.id) === sb.id && (0, EW.jsx)(eT, {}, kb.sparkle.count), (0, EW.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, EW.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: sb.name
        }), sb.wearing ? (0, EW.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: ab("skyblockGame:lampLightWearing")
        }) : (0, EW.jsx)(AW.d, {
          disabled: !kb.canCommand || !sb.owned && !sb.affordable,
          ariaLabel: sb.owned ? ab("skyblockGame:lampLightWearLabel", {
            tint: sb.name
          }) : ab("skyblockGame:lampLightBuyLabel", {
            item: sb.name,
            cost: sb.cost
          }),
          onClick: () => {
            sb.owned ? Wb.wearTint(sb.id) : Wb.buy(sb.id)
          },
          children: sb.owned ? ab("skyblockGame:lampLightWear") : sb.cost
        })]
      })
    }

    function VT(bb) {
      let {
        controller: cb
      } = bb;
      const sb = (0, DW.h)(Kk, cb.getSnapshot()),
        {
          t: kb
        } = (0, PW.E)(),
        Wb = sb.shop;
      return (0, EW.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, EW.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, EW.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: sb.balance
          }), (0, EW.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": sb.releasing,
            className: YW()("SkyblockLampLightSwitch", sb.releasing && "On"),
            disabled: sb.releasing ? "ready" !== sb.status : !sb.canCommand,
            onClick: () => {
              cb.setRelease(!sb.releasing)
            },
            children: [(0, EW.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, EW.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), kb("skyblockGame:lampLightRelease")]
          }), (0, EW.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: kb("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== sb.notice && (0, EW.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: sb.notice
        }), null !== Wb && (0, EW.jsxs)(EW.Fragment, {
          children: [(0, EW.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, EW.jsx)("h3", {
              children: kb("skyblockGame:lampLightCharms")
            }), (0, EW.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: Wb.oddsFor
            }), (0, EW.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((bb => (0, EW.jsx)("button", {
                type: "button",
                "aria-pressed": sb.situation === bb,
                className: YW()("SkyblockLampLightSituation", sb.situation === bb && "Selected"),
                onClick: () => {
                  cb.setSituation(bb)
                },
                children: kb("open" === bb ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, bb)))
            })]
          }), !Wb.heldRod && (0, EW.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: kb("skyblockGame:lampLightHoldRod")
          }), (0, EW.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: Wb.charms.map((bb => (0, EW.jsx)(CT, {
              charm: bb,
              view: sb,
              controller: cb
            }, bb.id)))
          }), (0, EW.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, EW.jsx)("h3", {
              children: kb("skyblockGame:lampLightTints")
            })
          }), (0, EW.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, EW.jsxs)("li", {
              className: YW()("SkyblockLampLightTint", "Islands", Wb.wearingIslandColours && "Wearing"),
              children: [(0, EW.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, EW.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: kb("skyblockGame:lampLightIslandColours")
              }), Wb.wearingIslandColours ? (0, EW.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: kb("skyblockGame:lampLightWearing")
              }) : (0, EW.jsx)(AW.d, {
                disabled: !sb.canCommand,
                ariaLabel: kb("skyblockGame:lampLightWearLabel", {
                  tint: kb("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  cb.wearTint(null)
                },
                children: kb("skyblockGame:lampLightWear")
              })]
            }), Wb.tints.map((bb => (0, EW.jsx)(NT, {
              tint: bb,
              view: sb,
              controller: cb
            }, bb.id)))]
          })]
        })]
      })
    }

    function LT(bb) {
      let {
        controller: cb
      } = bb;
      const sb = (0, DW.h)(Kk, cb.getSnapshot()),
        {
          t: kb
        } = (0, PW.E)();
      return sb.releasing ? (0, EW.jsx)(JW.e, {
        children: (0, EW.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            cb.setRelease(!1)
          },
          children: [(0, EW.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, EW.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [kb("skyblockGame:lampLightReleasing"), " \xb7 ", sb.balance]
          }), (0, EW.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: kb("skyblockGame:lampLightKeepCatches")
          }), null !== sb.gained && (0, EW.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: sb.gained.text
          }, sb.gained.count)]
        })
      }) : null
    }

    function uT(bb) {
      let {
        island: cb,
        view: sb,
        aim: kb
      } = bb;
      const {
        t: Wb
      } = (0, PW.E)(), ab = cb.featuredFish;
      return (0, EW.jsxs)("li", {
        className: YW()("SkyblockKeepersChairIsland", `Island-${cb.id}`, cb.favoured && "Aimed", !cb.relit && "Dark"),
        children: [(0, EW.jsx)("h3", {
          children: cb.name
        }), cb.relit && null !== ab ? (0, EW.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, EW.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: Wb("skyblockGame:keepersChairTideNotice")
          }), (0, EW.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, EW.jsx)(BW.d, {
              itemName: ab.itemName,
              amount: 0
            })
          }), (0, EW.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: ab.displayName
          })]
        }) : (0, EW.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, EW.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: Wb("skyblockGame:keepersChairDark")
          })
        }), cb.relit && (cb.favoured ? (0, EW.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: Wb("skyblockGame:keepersChairAimed")
        }) : (0, EW.jsx)(AW.d, {
          className: "SkyblockKeepersChairAim",
          disabled: !sb.canAim,
          ariaLabel: Wb("skyblockGame:keepersChairAimLabel", {
            island: cb.name
          }),
          onClick: () => {
            kb(cb.id)
          },
          children: Wb("skyblockGame:keepersChairAim")
        }))]
      }, cb.favoured ? sb.aimedCount : 0)
    }

    function YT(bb) {
      let {
        controller: cb,
        lampLight: sb
      } = bb;
      const kb = (0, DW.h)(tk, cb.getSnapshot()),
        Wb = (0, DW.h)(Kk, sb.getSnapshot()),
        [ab, Tb] = (0, Jb.useState)("lamp"),
        {
          t: Ub
        } = (0, PW.E)(),
        Ib = rW();
      if (!kb.enabled) return null;
      const Hb = "light" === ab && Wb.enabled;
      return (0, EW.jsx)(dW.c, {
        show: kb.open,
        close: cb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, EW.jsxs)("section", {
          className: YW()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", Hb && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: Ib,
          onKeyDown: wW,
          children: [(0, EW.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, EW.jsxs)("div", {
              children: [(0, EW.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: Ub("skyblockGame:keepersChairTitle")
              }), (0, EW.jsx)("p", {
                children: Ub(Hb ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, EW.jsx)(AW.j, {
              padIgnore: !0,
              ariaLabel: Ub("skyblockGame:keepersChairClose"),
              onClick: cb.dismiss
            })]
          }), Wb.enabled && (0, EW.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((bb => (0, EW.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === bb === Hb,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === bb === Hb ? "true" : void 0,
              className: YW()("SkyblockKeepersChairTab", "light" === bb === Hb && "Selected"),
              onClick: () => {
                Tb(bb)
              },
              children: [Ub("lamp" === bb ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === bb && (0, EW.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: Wb.balance
              })]
            }, bb)))
          }), Hb ? (0, EW.jsx)(VT, {
            controller: sb
          }) : (0, EW.jsx)(hT, {
            view: kb,
            controller: cb
          })]
        })
      })
    }

    function hT(bb) {
      let {
        view: cb,
        controller: sb
      } = bb;
      const {
        t: kb
      } = (0, PW.E)();
      return (0, EW.jsxs)(EW.Fragment, {
        children: [(0, EW.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: cb.islands.map((bb => (0, EW.jsx)(uT, {
            island: bb,
            view: cb,
            aim: sb.aim
          }, bb.id)))
        }), null !== cb.almanac && (0, EW.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, EW.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: kb("skyblockGame:passageTitle")
          }), (0, EW.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, EW.jsx)(nT, {
              phase: cb.almanac.phase
            }), cb.almanac.phaseName]
          }), (0, EW.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, EW.jsx)(nT, {
              phase: cb.almanac.nextPhase
            }), cb.almanac.next]
          })]
        }), (0, EW.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, EW.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: kb("skyblockGame:keepersChairFavour")
          }), cb.aimed && (0, EW.jsx)(AW.M, {
            className: "SkyblockKeepersChairRest",
            disabled: !cb.canAim,
            onClick: () => {
              sb.aim(null)
            },
            children: kb("skyblockGame:keepersChairRest")
          })]
        }), null !== cb.status && (0, EW.jsx)("p", {
          className: YW()("SkyblockKeepersChairStatus", "refused" === cb.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: cb.status.text
        })]
      })
    }

    function JT(bb) {
      let {
        controller: cb
      } = bb;
      const {
        t: sb
      } = (0, PW.E)(), kb = (0, DW.h)(Pk, cb.getSnapshot());
      if (!kb.enabled) return null;
      const Wb = kb.freshCount > 0 ? sb("skyblockGame:reachLogOpenNews", {
        count: kb.freshCount
      }) : sb("skyblockGame:reachLogOpen");
      return (0, EW.jsx)(JW.e, {
        placement: "statBars",
        children: (0, EW.jsxs)("button", {
          type: "button",
          className: YW()("SkyblockReachLogButton", kb.freshCount > 0 && "HasNews", kb.pending && "Pending"),
          "aria-label": Wb,
          title: Wb,
          onClick: cb.ask,
          children: [kb.news && (0, EW.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${kb.newsToken}`), (0, EW.jsx)("span", {
            className: YW()("SkyblockReachLogIcon", kb.news && "Jump"),
            "aria-hidden": "true",
            children: (0, EW.jsx)(BW.d, {
              itemName: Ek,
              amount: 0
            })
          }, `icon:${kb.newsToken}`), kb.freshCount > 0 && (0, EW.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: kb.freshCount
          })]
        })
      })
    }

    function gT(bb) {
      let {
        gift: cb
      } = bb;
      return (0, EW.jsx)("li", {
        className: YW()("SkyblockRegularsGift", cb.given && "Given"),
        children: cb.text
      })
    }

    function BT(bb) {
      let {
        regular: cb
      } = bb;
      const {
        t: sb
      } = (0, PW.E)();
      return (0, EW.jsxs)("li", {
        className: YW()("SkyblockRegularsCard", cb.tagged ? "Tagged" : "Untagged", cb.resting && "Resting"),
        children: [(0, EW.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, EW.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: cb.fishName,
            children: (0, EW.jsx)(BW.d, {
              itemName: cb.itemName,
              amount: 0
            })
          }), (0, EW.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, EW.jsx)("h3", {
              children: cb.name
            }), (0, EW.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: cb.fishName
            })]
          })]
        }), (0, EW.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: cb.line
        }), (0, EW.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, EW.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: cb.size
          }), cb.tagged && (0, EW.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: cb.resting ? sb("skyblockGame:regularsResting") : cb.meetings
          })]
        }), (0, EW.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: cb.chance
        }), (0, EW.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: cb.gifts.map((bb => (0, EW.jsx)(gT, {
            gift: bb
          }, bb.text)))
        }), cb.history.length > 0 && (0, EW.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: cb.history.map(((bb, cb) => (0, EW.jsx)("li", {
            children: bb
          }, cb)))
        })]
      })
    }

    function tT(bb) {
      let {
        controller: cb,
        island: sb
      } = bb;
      const {
        t: kb
      } = (0, PW.E)(), Wb = (0, DW.h)(kW, cb.getSnapshot()), ab = Wb.islands.find((bb => bb.id === sb));
      if (!Wb.enabled || void 0 === ab) return null;
      const Tb = kb("skyblockGame:regularsOpen");
      return (0, EW.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": Tb,
        title: Tb,
        onClick: () => {
          cb.openIsland(sb)
        },
        children: [(0, EW.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: kb("skyblockGame:regularsTitle")
        }), ab.regulars.map((bb => (0, EW.jsx)("span", {
          className: YW()("SkyblockRegularsStripIcon", bb.tagged && "Tagged"),
          title: bb.name,
          children: (0, EW.jsx)(BW.d, {
            itemName: bb.itemName,
            amount: 0
          })
        }, bb.id)))]
      })
    }

    function yT(bb) {
      var cb;
      let {
        controller: sb
      } = bb;
      const kb = (0, DW.h)(kW, sb.getSnapshot()),
        {
          t: Wb
        } = (0, PW.E)(),
        ab = rW();
      if (!kb.enabled) return null;
      const Tb = null !== (cb = kb.islands.find((bb => bb.id === kb.selected))) && void 0 !== cb ? cb : null;
      return (0, EW.jsx)(dW.c, {
        show: kb.open,
        close: sb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, EW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: ab,
          onKeyDown: wW,
          children: [(0, EW.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, EW.jsxs)("div", {
              children: [(0, EW.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: Wb("skyblockGame:regularsTitle")
              }), (0, EW.jsx)("p", {
                children: Wb("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, EW.jsx)(AW.j, {
              padIgnore: !0,
              onClick: sb.dismiss
            })]
          }), (0, EW.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: kb.islands.map((bb => {
              const cb = bb.id === kb.selected;
              return (0, EW.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": cb,
                "data-pad-tab": !0,
                "data-pad-selected": cb ? "true" : void 0,
                className: YW()("SkyblockReachLogTab", `Island-${bb.id}`, cb && "Selected", bb.charm.given && "GoldPage"),
                onClick: () => {
                  sb.selectIsland(bb.id)
                },
                children: (0, EW.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: bb.name
                })
              }, bb.id)
            }))
          }), (0, EW.jsxs)("div", {
            className: YW()("SkyblockRegularsPage", null !== Tb && `Island-${Tb.id}`),
            role: "tabpanel",
            children: [(0, EW.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: Wb("skyblockGame:regularsHow")
            }), null !== Tb && (0, EW.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: Tb.regulars.map((bb => (0, EW.jsx)(BT, {
                regular: bb
              }, bb.id)))
            })]
          }), null !== Tb && (0, EW.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, EW.jsx)("span", {
              className: YW()("SkyblockRegularsCharm", Tb.charm.given && "Given"),
              children: Tb.charm.text
            })
          })]
        })
      })
    }
    const PT = [{
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
      DT = Array.from({
        length: 6
      }, ((bb, cb) => ({
        "--x": `${(88*(.618034*cb%1)).toFixed(1)}%`,
        "--y": `${(10+37*cb%70).toFixed(1)}%`,
        "--size": 7 + cb % 3 * 3 + "rem",
        "--drift-x": 3 * (cb % 3 - 1) + "rem",
        "--drift-y": 2 * (cb % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + cb % 4 * 3 + "s",
        "--delay": 2.5 * -cb + "s"
      }))),
      ET = Array.from({
        length: 14
      }, ((bb, cb) => ({
        "--left": `${(3+94*((.618034*cb+.3)%1)).toFixed(1)}%`,
        "--size": 4 + cb % 4 * 2 + "px",
        "--sway": cb % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*cb%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*cb%12).toFixed(2)}s`
      }))),
      iT = (0, Jb.memo)((function(bb) {
        let {
          island: cb
        } = bb;
        return (0, EW.jsxs)("div", {
          className: YW()("SkyblockReachLogDepths", null !== cb && `Island-${cb}`),
          "aria-hidden": "true",
          children: [PT.map(((bb, cb) => (0, EW.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: bb
          }, `shaft${cb}`))), DT.map(((bb, cb) => (0, EW.jsx)("span", {
            className: YW()("SkyblockReachLogMote", cb % 2 === 1 && "Violet"),
            style: bb
          }, `mote${cb}`))), ET.map(((bb, cb) => (0, EW.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: bb
          }, `bubble${cb}`)))]
        })
      })),
      OT = 100;

    function GT(bb) {
      let {
        view: cb
      } = bb;
      const {
        t: sb
      } = (0, PW.E)();
      if (null === cb || 0 === cb.total) return null;
      const kb = OT * cb.aspect,
        Wb = sb("skyblockGame:hiddenWatersCount", {
          found: cb.found,
          total: cb.total
        });
      return (0, EW.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${sb("skyblockGame:hiddenWatersTitle")}: ${Wb}`,
        children: [(0, EW.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${kb}`,
          "aria-hidden": "true",
          children: [cb.islands.map(((bb, cb) => (0, EW.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (bb.left + bb.width / 2) * OT,
            cy: (bb.top + bb.height / 2) * kb,
            rx: bb.width / 2 * OT,
            ry: bb.height / 2 * kb
          }, cb))), cb.pins.map(((bb, cb) => (0, EW.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: bb.left * OT,
            cy: bb.top * kb,
            r: 13
          }, cb)))]
        }), (0, EW.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, EW.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: sb("skyblockGame:hiddenWatersTitle")
          }), (0, EW.jsx)("span", {
            className: cb.found === cb.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: Wb
          })]
        })]
      })
    }

    function KT(bb) {
      let {
        view: cb,
        island: sb
      } = bb;
      const {
        t: kb
      } = (0, PW.E)(), Wb = null === cb || void 0 === cb ? void 0 : cb.glimpses.get(sb);
      return void 0 === Wb || 0 === Wb.length ? null : (0, EW.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, EW.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: kb("skyblockGame:hiddenWatersGlimpsed")
        }), (0, EW.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: Wb.map((bb => (0, EW.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, EW.jsx)(BW.d, {
              itemName: bb,
              amount: 0
            })
          }, bb)))
        })]
      })
    }
    const ZT = ["Bronze", "Silver", "Gold"],
      zT = [{
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
      qT = zT.slice(0, 2);

    function dT(bb) {
      return bb ? zT : qT
    }

    function AT(bb) {
      let {
        fish: cb,
        letGoShown: sb
      } = bb;
      const {
        t: kb
      } = (0, PW.E)();
      return (0, EW.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [ZT.map(((bb, sb) => {
          const Wb = sb < cb.marks;
          return (0, EW.jsx)("span", {
            className: YW()("SkyblockReachLogPip", bb, Wb && "Earned", Wb && cb.fresh && sb === cb.marks - 1 && "Newest"),
            title: kb(Dk[sb])
          }, bb)
        })), (0, EW.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), dT(sb).map(((bb, sb) => (0, EW.jsx)("span", {
          className: YW()("SkyblockReachLogRibbon", bb.className, !0 === cb.ribbons[sb] && "Earned"),
          title: kb(bb.titleKey)
        }, bb.className)))]
      })
    }

    function wT(bb) {
      let {
        letGoShown: cb,
        haloShown: sb
      } = bb;
      const {
        t: kb
      } = (0, PW.E)();
      return (0, EW.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, EW.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: kb("skyblockGame:reachLogMarks"),
          children: [(0, EW.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), kb("skyblockGame:reachLogLegendMarks")]
        }), dT(cb).map((bb => (0, EW.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: kb(bb.titleKey),
          children: [(0, EW.jsx)("span", {
            className: YW()("SkyblockReachLogRibbon", bb.className, "Earned")
          }), kb(bb.legendKey)]
        }, bb.className))), (0, EW.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: kb("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, EW.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), kb("skyblockGame:reachLogLegendGlimmer")]
        }), sb && (0, EW.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: kb("skyblockGame:reachLogHaloTitle"),
          children: [(0, EW.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), kb("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function rT(bb) {
      let {
        returner: cb
      } = bb;
      return (0, EW.jsxs)("div", {
        className: YW()("SkyblockReachLogReturner", cb.back && "Back"),
        children: [(0, EW.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, EW.jsx)(BW.d, {
            itemName: cb.itemName,
            amount: 0
          })
        }), (0, EW.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: cb.line
        })]
      })
    }

    function oT(bb) {
      let {
        fish: cb,
        letGoShown: sb
      } = bb;
      const {
        t: kb
      } = (0, PW.E)();
      return (0, EW.jsxs)("li", {
        className: YW()("SkyblockReachLogCard", cb.caught ? "Caught" : "Unknown", cb.marks >= 3 && "GoldCard", cb.fresh && "Fresh", cb.visitor && "Visitor"),
        children: [cb.visitor && (0, EW.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: kb("skyblockGame:reachLogVisitor")
        }), cb.fresh && Array.from({
          length: 4
        }, ((bb, cb) => (0, EW.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, cb))), (0, EW.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [cb.halo && (0, EW.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: kb("skyblockGame:reachLogHaloTitle")
          }), (0, EW.jsx)(BW.d, {
            itemName: cb.itemName,
            amount: 0
          }), cb.glimmer && (0, EW.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: kb("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, EW.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: cb.name
        }), (0, EW.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: cb.chance
        }), (0, EW.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: cb.best
        }), (0, EW.jsx)(AT, {
          fish: cb,
          letGoShown: sb
        })]
      })
    }

    function ST(bb) {
      let {
        page: cb,
        letGoShown: sb,
        hiddenWaters: kb
      } = bb;
      const {
        t: Wb
      } = (0, PW.E)();
      return cb.awake ? (0, EW.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: cb.fish.map((bb => (0, EW.jsx)(oT, {
          fish: bb,
          letGoShown: sb
        }, bb.itemName)))
      }) : (0, EW.jsxs)(EW.Fragment, {
        children: [(0, EW.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: Wb("skyblockGame:reachLogAsleep")
        }), (0, EW.jsx)(KT, {
          view: kb,
          island: cb.id
        })]
      })
    }

    function RT(bb) {
      var cb, sb;
      let {
        controller: kb,
        regulars: Wb,
        hiddenWaters: ab
      } = bb;
      const Tb = (0, DW.h)(Pk, kb.getSnapshot()),
        Ub = function(bb) {
          return (0, DW.h)(IW, bb.getSnapshot())
        }(ab),
        Ib = (0, DW.h)(kW, Wb.getSnapshot()),
        {
          t: Hb
        } = (0, PW.E)(),
        fb = rW();
      if (!Tb.enabled) return null;
      const Mb = null !== (cb = Tb.pages.find((bb => bb.id === Tb.selected))) && void 0 !== cb ? cb : null;
      return (0, EW.jsx)(dW.c, {
        show: Tb.open,
        close: kb.dismiss,
        togglePointerLock: !1,
        className: YW()("SkyblockSkillsOverlay", Ib.open && "SkyblockReachLogUnderLedger"),
        children: (0, EW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: fb,
          onKeyDown: wW,
          children: [(0, EW.jsx)(iT, {
            island: null !== (sb = null === Mb || void 0 === Mb ? void 0 : Mb.id) && void 0 !== sb ? sb : null
          }), (0, EW.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, EW.jsxs)("div", {
              children: [(0, EW.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: Hb("skyblockGame:reachLogTitle")
              }), (0, EW.jsx)("p", {
                children: Hb("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, EW.jsx)(GT, {
              view: Ub
            }), (0, EW.jsx)(AW.j, {
              padIgnore: !0,
              onClick: kb.dismiss
            })]
          }), (0, EW.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: Tb.pages.map((bb => {
              const cb = bb.id === Tb.selected,
                sb = bb.fish.some((bb => bb.fresh));
              return (0, EW.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": cb,
                "data-pad-tab": !0,
                "data-pad-selected": cb ? "true" : void 0,
                className: YW()("SkyblockReachLogTab", `Island-${bb.id}`, cb && "Selected", !bb.awake && "Asleep", bb.gold && "GoldPage", sb && "HasNews"),
                onClick: () => {
                  kb.selectPage(bb.id)
                },
                children: [(0, EW.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: bb.name
                }), bb.awake && (0, EW.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: Hb("skyblockGame:reachLogCaughtCount", {
                    caught: bb.caught,
                    total: bb.total
                  })
                })]
              }, bb.id)
            }))
          }), (0, EW.jsxs)("div", {
            className: YW()("SkyblockReachLogPage", null !== Mb && `Island-${Mb.id}`),
            role: "tabpanel",
            children: [null !== Mb && (0, EW.jsx)(ST, {
              page: Mb,
              letGoShown: Tb.letGoShown,
              hiddenWaters: Ub
            }), !0 === (null === Mb || void 0 === Mb ? void 0 : Mb.awake) && null !== Mb.returner && (0, EW.jsx)(rT, {
              returner: Mb.returner
            }), !0 === (null === Mb || void 0 === Mb ? void 0 : Mb.awake) && (0, EW.jsx)(tT, {
              controller: Wb,
              island: Mb.id
            })]
          }), (0, EW.jsx)("footer", {
            className: YW()("SkyblockReachLogFooter", null !== Mb && `Island-${Mb.id}`, !0 === (null === Mb || void 0 === Mb ? void 0 : Mb.gold) && "GoldPage"),
            children: !0 === (null === Mb || void 0 === Mb ? void 0 : Mb.gold) ? (0, EW.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: Hb("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, EW.jsxs)(EW.Fragment, {
              children: [(0, EW.jsx)(wT, {
                letGoShown: Tb.letGoShown,
                haloShown: !0 === (null === Mb || void 0 === Mb ? void 0 : Mb.fish.some((bb => bb.halo)))
              }), (0, EW.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: Hb("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var vT = sb(4553);

    function FT(bb) {
      let {
        conversation: cb,
        completedLabel: sb
      } = bb;
      return (0, EW.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, EW.jsxs)("header", {
          children: [(0, EW.jsx)("h3", {
            children: cb.questName
          }), cb.completed && (0, EW.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: sb
          })]
        }), cb.lines.map((bb => (0, EW.jsx)(vT.d, {
          display: bb.display
        }, bb.key)))]
      })
    }

    function xT(bb) {
      let {
        controller: cb
      } = bb;
      const {
        t: sb
      } = (0, PW.E)(), kb = (0, DW.h)(fW, cb.getSnapshot()), Wb = rW();
      if (!kb.enabled) return null;
      const ab = !kb.loading && 0 === kb.conversations.length;
      return (0, EW.jsx)(dW.c, {
        show: kb.open,
        close: cb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, EW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: Wb,
          onKeyDown: wW,
          children: [(0, EW.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, EW.jsxs)("div", {
              children: [(0, EW.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: sb("skyblockDialogue:title")
              }), (0, EW.jsx)("p", {
                children: sb("skyblockDialogue:intro")
              })]
            }), (0, EW.jsx)(AW.j, {
              padIgnore: !0,
              onClick: cb.dismiss
            })]
          }), (0, EW.jsxs)("div", {
            className: YW()("SkyblockDialogueBody", {
              SingleColumn: null !== kb.questFocus || 0 === kb.characters.length
            }),
            children: [null === kb.questFocus && kb.characters.length > 0 && (0, EW.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: kb.characters.map((bb => (0, EW.jsx)(AW.d, {
                className: YW()("SkyblockDialogueCharacter", {
                  Selected: bb.selected
                }),
                onClick: () => {
                  cb.selectCharacter(bb.id)
                },
                children: (0, EW.jsx)(tW.d, {
                  text: bb.styling
                })
              }, bb.id)))
            }), (0, EW.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== kb.questFocus && (0, EW.jsx)(AW.d, {
                className: "SkyblockDialogueBack",
                onClick: cb.showCharacters,
                children: sb("skyblockDialogue:allCharacters")
              }), kb.loading && (0, EW.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: sb("skyblockDialogue:loading")
              }), ab && (0, EW.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: sb(null === kb.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), kb.conversations.map((bb => (0, EW.jsx)(FT, {
                conversation: bb,
                completedLabel: kb.completedLabel
              }, bb.questId)))]
            })]
          })]
        })
      })
    }

    function jT(bb) {
      let {
        controller: cb
      } = bb;
      const sb = (0, DW.h)(lW, cb.getSnapshot()),
        {
          t: kb
        } = (0, PW.E)(),
        Wb = rW();
      return sb.enabled ? (0, EW.jsx)(dW.c, {
        show: sb.open,
        close: cb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, EW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: Wb,
          onKeyDown: wW,
          children: [(0, EW.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, EW.jsxs)("div", {
              children: [(0, EW.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: kb("skyblockGame:autographBook")
              }), (0, EW.jsx)("p", {
                children: kb("skyblockGame:autographBookIntro")
              })]
            }), (0, EW.jsx)(AW.j, {
              padIgnore: !0,
              onClick: cb.dismiss
            })]
          }), (0, EW.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, EW.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, EW.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, EW.jsx)("strong", {
                  children: sb.total
                }), (0, EW.jsx)("span", {
                  children: kb("skyblockGame:autographTotal")
                })]
              }), (0, EW.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, EW.jsx)("strong", {
                  children: sb.rankTotal
                }), (0, EW.jsx)("span", {
                  children: kb("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === sb.entries.length ? (0, EW.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: kb("skyblockGame:autographBookEmpty")
            }) : (0, EW.jsx)("ul", {
              className: "SkyblockAutographList",
              children: sb.entries.map((bb => (0, EW.jsxs)("li", {
                className: YW()("SkyblockAutograph", {
                  Ranked: null !== bb.rank
                }),
                style: null === bb.rank ? void 0 : {
                  color: bb.rank.colour
                },
                children: [null !== bb.rank && (0, EW.jsx)(la.b, {
                  className: "SkyblockAutographRankIcon",
                  name: bb.rank.icon,
                  kit: (0, la.f)(bb.rank.icon)
                }), (0, EW.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, EW.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: bb.name
                  }), (0, EW.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== bb.rank && (0, EW.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: bb.rank.label
                    }), (0, EW.jsx)("span", {
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
    const pT = (0, Jb.memo)((function(bb) {
        let {
          controller: cb
        } = bb;
        return (0, EW.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: cb.display.mountWaypoint,
          children: [(0, EW.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, EW.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, EW.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, EW.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, EW.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, EW.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      bU = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function cU(bb) {
      return "next" === bb.phase ? "\u2192" : bU[bb.kind]
    }
    const sU = (0, Jb.memo)((function(bb) {
      let {
        controller: cb,
        display: sb
      } = bb;
      const kb = (0, DW.h)(fs, cb.getNotificationSnapshot()),
        [Wb, ab] = (0, Jb.useState)(!1);
      return (0, DW.f)("qteStateUpdated", (bb => {
        ab(bb.isActive)
      })), (0, EW.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (Wb ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [kb && (0, EW.jsxs)("div", {
          className: `SkyblockQuestNotification ${kb.kind} ${kb.phase}`,
          style: {
            "--quest-notification-duration": `${kb.durationMs}ms`,
            ...kb.accent && {
              "--quest-notification-accent": kb.accent
            }
          },
          children: [(0, EW.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (kb.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, EW.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: cU(kb)
            }), kb.iconItem && (0, EW.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, EW.jsx)(BW.d, {
                itemName: kb.iconItem,
                amount: 0
              })
            })]
          }), (0, EW.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, EW.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: kb.title
            }), (0, EW.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, EW.jsx)(Ia.b, {
                text: kb.name
              })
            }), kb.description && (0, EW.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, EW.jsx)(Ia.b, {
                text: kb.description
              })
            }), kb.reward && (0, EW.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, EW.jsx)(Ia.b, {
                text: kb.reward
              })
            })]
          })]
        }, kb.token), (null === kb || void 0 === kb ? void 0 : kb.waypointNameKey) && (0, EW.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": kb.waypointNameKey,
          "data-notification-token": kb.token,
          ref: sb.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${kb.token}`)]
      })
    }));

    function kU(bb) {
      const cb = parseInt(bb.replace("#", ""), 16);
      return `${cb>>16&255}, ${cb>>8&255}, ${255&cb}`
    }
    const WU = (0, Jb.memo)((function(bb) {
      let {
        controller: cb
      } = bb;
      const {
        t: sb
      } = (0, PW.E)(), kb = (0, DW.h)(Zs, cb.getSnapshot());
      if (!kb) return null;
      const Wb = "arrival" === kb.phase;
      return (0, EW.jsxs)("div", {
        className: YW()("SkyblockPortalTransit", {
          Departure: !Wb,
          Arrival: Wb
        }),
        style: {
          "--portal-rgb": kU(kb.colour),
          "--portal-duration": `${kb.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, EW.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, EW.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            cb.finishArrival(kb.token)
          }
        }), (0, EW.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, EW.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !Wb && (0, EW.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: sb("skyblockGame:portalTransitHeading")
          }), (0, EW.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: sb(kb.zoneNameKey)
          })]
        })]
      }, kb.token)
    }));

    function aU() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function TU() {
      const bb = document.querySelector(".SkyblockHudCoins"),
        cb = null === bb || void 0 === bb ? void 0 : bb.getBoundingClientRect();
      return cb && cb.width > 0 ? {
        x: cb.left + Math.min(cb.width, 24) / 2,
        y: cb.top + cb.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function UU(bb) {
      return {
        x: bb.left + bb.width / 2,
        y: bb.top + bb.height / 2
      }
    }

    function IU() {
      var bb;
      const cb = null === (bb = document.querySelector(".HotBar")) || void 0 === bb ? void 0 : bb.getBoundingClientRect();
      return cb && cb.width > 0 ? UU(cb) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function HU(bb) {
      let {
        items: cb,
        origins: sb,
        target: kb
      } = bb;
      return (0, EW.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: cb.map(((bb, cb) => {
          const Wb = sb[cb];
          return (0, EW.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${Wb.x}px`,
              top: `${Wb.y}px`,
              "--item-dx": kb.x - Wb.x + "px",
              "--item-dy": kb.y - Wb.y + "px",
              "--item-delay": 2e3 + 160 * cb + "ms",
              "--item-flight": "700ms"
            },
            children: (0, EW.jsx)(BW.d, {
              itemName: bb.dailyRewardItemName,
              amount: 0
            })
          }, bb.dailyRewardItemName)
        }))
      })
    }

    function fU(bb, cb) {
      const sb = -Math.PI / 2 + 1.25 * (bb / (cb - 1) * 2 - 1),
        kb = 70 + bb % 3 * 22;
      return {
        x: Math.cos(sb) * kb,
        y: Math.sin(sb) * kb * .7
      }
    }

    function MU(bb) {
      let {
        origin: cb,
        target: sb,
        count: kb
      } = bb;
      const Wb = [];
      for (let ab = 0; ab < kb; ab++) {
        const bb = fU(ab, kb);
        Wb.push((0, EW.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${cb.x}px`,
            top: `${cb.y}px`,
            "--coin-bx": `${bb.x}px`,
            "--coin-by": `${bb.y}px`,
            "--coin-dx": sb.x - cb.x + "px",
            "--coin-dy": sb.y - cb.y + "px",
            "--coin-delay": `${rs(ab,kb)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, EW.jsx)(BW.d, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, ab))
      }
      return (0, EW.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: Wb
      })
    }

    function XU(bb) {
      let {
        day: cb
      } = bb;
      const sb = gb[cb - 1];
      return (0, EW.jsxs)(EW.Fragment, {
        children: [(0, EW.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, EW.jsx)(BW.d, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, yW.g)(sb.dailyRewardCoins)]
        }), sb.dailyRewardItems.map((bb => (0, EW.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, EW.jsx)(BW.d, {
            itemName: bb.dailyRewardItemName,
            amount: 0
          }), "\xd7", bb.dailyRewardItemAmount]
        }, bb.dailyRewardItemName)))]
      })
    }

    function nU(bb) {
      let {
        day: cb
      } = bb;
      const sb = tb(cb);
      return (0, EW.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: gb.map(((bb, kb) => {
          const Wb = kb + 1;
          return (0, EW.jsxs)("li", {
            className: YW()("SkyblockDailyRewardTile", {
              Claimed: Wb < cb && Wb !== sb,
              Today: Wb === cb,
              Tomorrow: Wb === sb,
              Jackpot: Wb === Bb
            }),
            children: [(0, EW.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: Wb
            }), (0, EW.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, EW.jsx)(BW.d, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, yW.g)(bb.dailyRewardCoins)]
            }), bb.dailyRewardItems.map((bb => (0, EW.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, EW.jsx)(BW.d, {
                itemName: bb.dailyRewardItemName,
                amount: 0
              }), "\xd7", bb.dailyRewardItemAmount]
            }, bb.dailyRewardItemName)))]
          }, Wb)
        }))
      })
    }

    function mU(bb) {
      let {
        view: cb
      } = bb;
      const {
        t: sb
      } = (0, PW.E)(), kb = (0, Jb.useRef)(null), Wb = (0, Jb.useRef)(null), [ab, Tb] = (0, Jb.useState)(null);
      (0, Jb.useLayoutEffect)((() => {
        var bb;
        const cb = null === (bb = kb.current) || void 0 === bb ? void 0 : bb.getBoundingClientRect();
        if (cb) {
          var sb, ab;
          const bb = Array.from(null !== (sb = null === (ab = Wb.current) || void 0 === ab ? void 0 : ab.children) && void 0 !== sb ? sb : [], (bb => UU(bb.getBoundingClientRect())));
          Tb({
            origin: UU(cb),
            target: TU(),
            itemOrigins: bb,
            itemTarget: IU()
          })
        }
      }), []);
      const Ub = tb(cb.day),
        Ib = function(bb, cb) {
          const [sb, kb] = (0, Jb.useState)((() => aU() ? bb : 0));
          return (0, Jb.useEffect)((() => {
            if (aU()) return;
            const sb = performance.now();
            let Wb = 0;
            const ab = Tb => {
              const Ub = Math.min(Math.max((Tb - sb) / cb, 0), 1);
              kb(Math.round(bb * (1 - (1 - Ub) ** 3))), Ub < 1 && (Wb = requestAnimationFrame(ab))
            };
            return Wb = requestAnimationFrame(ab), () => {
              cancelAnimationFrame(Wb)
            }
          }), [bb, cb]), sb
        }(cb.coins, 450);
      return (0, EW.jsxs)("div", {
        className: YW()("SkyblockDailyReward", {
          Jackpot: cb.day === Bb
        }),
        style: {
          "--daily-duration": `${cb.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, EW.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, EW.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, EW.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, EW.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: sb("skyblockGame:dailyRewardTitle")
            }), (0, EW.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: sb("skyblockGame:dailyRewardDay", {
                day: String(cb.day)
              })
            })]
          }), (0, EW.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: kb,
            children: [(0, EW.jsx)(BW.d, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, EW.jsxs)("span", {
              children: ["+", (0, yW.g)(Ib)]
            })]
          }), cb.items.length > 0 && (0, EW.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: Wb,
            children: cb.items.map((bb => (0, EW.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, EW.jsx)(BW.d, {
                itemName: bb.dailyRewardItemName,
                amount: 0
              }), "\xd7", bb.dailyRewardItemAmount]
            }, bb.dailyRewardItemName)))
          }), (0, EW.jsx)(nU, {
            day: cb.day
          }), (0, EW.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [sb("skyblockGame:dailyRewardComeBack"), (0, EW.jsx)(XU, {
              day: Ub
            })]
          })]
        }), null !== ab && (0, EW.jsx)(MU, {
          origin: ab.origin,
          target: ab.target,
          count: cb.flyingCoins
        }), null !== ab && ab.itemOrigins.length === cb.items.length && (0, EW.jsx)(HU, {
          items: cb.items,
          origins: ab.itemOrigins,
          target: ab.itemTarget
        })]
      })
    }
    const lU = (0, Jb.memo)((function(bb) {
        let {
          controller: cb
        } = bb;
        const sb = (0, DW.h)(ds, cb.getSnapshot());
        return sb ? (0, EW.jsx)(mU, {
          view: sb
        }, sb.token) : null
      })),
      QU = "Gold Coin";

    function eU(bb) {
      return 650 + 220 * bb
    }

    function CU(bb) {
      return {
        "--letter-delay": `${eU(bb)}ms`,
        "--letter-land": `${eU(bb)+300}ms`
      }
    }

    function NU(bb) {
      let {
        letterCount: cb
      } = bb;
      return (0, EW.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, EW.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, EW.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, EW.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: cb
        }, ((bb, cb) => (0, EW.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: CU(cb),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, cb)))]
      })
    }

    function VU(bb) {
      var cb, sb, kb;
      let {
        letter: Wb,
        index: ab
      } = bb;
      const {
        t: Tb
      } = (0, PW.E)(), Ub = null !== (cb = null === (sb = Wb.items[0]) || void 0 === sb ? void 0 : sb.itemName) && void 0 !== cb ? cb : QU;
      return (0, EW.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: CU(ab),
        children: [(0, EW.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, EW.jsx)(BW.d, {
            itemName: Ub,
            amount: 0
          })
        }), (0, EW.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: Tb(Wb.reasonKey, null !== (kb = Wb.reasonParams) && void 0 !== kb ? kb : void 0)
        }), (0, EW.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [Wb.coins > 0 && (0, EW.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, EW.jsx)(BW.d, {
              itemName: QU,
              amount: 0
            }), "+", (0, yW.g)(Wb.coins)]
          }), Wb.items.map(((bb, cb) => (0, EW.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, EW.jsx)(BW.d, {
              itemName: bb.itemName,
              amount: 0
            }), bb.label, " \xd7", bb.amount]
          }, cb)))]
        })]
      })
    }

    function LU(bb) {
      let {
        view: cb
      } = bb;
      const {
        t: sb
      } = (0, PW.E)();
      return (0, EW.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${cb.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${eU(cb.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, EW.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, EW.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, EW.jsx)(NU, {
              letterCount: cb.letters.length
            }), (0, EW.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: sb("skyblockGame:mailboxTitle")
            })]
          }), (0, EW.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: cb.letters.map(((bb, cb) => (0, EW.jsx)(VU, {
              letter: bb,
              index: cb
            }, cb)))
          }), cb.more > 0 && (0, EW.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: sb("skyblockGame:mailboxMore", {
              count: String(cb.more)
            })
          })]
        })
      })
    }
    const uU = (0, Jb.memo)((function(bb) {
      let {
        controller: cb
      } = bb;
      const sb = (0, DW.h)(Ss, cb.getSnapshot());
      return sb ? (0, EW.jsx)(LU, {
        view: sb
      }, sb.token) : null
    }));

    function YU(bb) {
      let {
        controller: cb
      } = bb;
      const {
        t: sb
      } = (0, PW.E)(), kb = (0, DW.h)(zk, cb.getSnapshot());
      if (null === kb) return null;
      const Wb = kb.fullSet ? "empty" === kb.fuelState ? {
        text: sb("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: sb("skyblockGame:magmawardHudFullSet", {
          worn: String(kb.wornCount)
        }),
        tone: "partial"
      };
      return (0, EW.jsx)(JW.e, {
        placement: "statBars",
        children: (0, EW.jsxs)("div", {
          className: YW()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${kb.fuelState}`, {
            "SkyblockMagmawardHud-partial": !kb.fullSet,
            "SkyblockMagmawardHud-armed": kb.fullSet && "empty" !== kb.fuelState
          }),
          children: [null !== kb.flare && (0, EW.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${kb.flare}`
          }, `flare:${kb.flareToken}`), (0, EW.jsx)("div", {
            className: YW()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: kb.setLit
            }),
            children: kb.pieces.map(((bb, cb) => (0, EW.jsx)("div", {
              className: YW()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: bb.worn,
                SkyblockMagmawardPieceJustWorn: bb.justWorn
              }),
              children: (0, EW.jsx)(BW.d, {
                itemName: bb.itemName,
                amount: 0
              })
            }, `${cb}:${bb.wornToken}`)))
          }, `pieces:${kb.setLitToken}`), (0, EW.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, EW.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, EW.jsxs)("div", {
              className: YW()("SkyblockMagmawardFuelCounter", kb.pulse && `SkyblockMagmawardFuelCounter-${kb.pulse}`),
              children: [(0, EW.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, EW.jsx)(BW.d, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, EW.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: kb.fuel
              })]
            }, `counter:${kb.pulseToken}`), "burn" === kb.pulse && (0, EW.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${kb.pulseToken}`)]
          }), Wb && (0, EW.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${Wb.tone} SmallTextBold`,
            children: Wb.text
          })]
        })
      })
    }

    function hU(bb) {
      let {
        controller: cb
      } = bb;
      const {
        t: sb,
        selectedLanguage: kb
      } = (0, PW.E)(), Wb = (0, DW.h)(dk, cb.getSnapshot());
      return null === Wb ? null : (0, EW.jsx)(JW.e, {
        placement: "statBars",
        children: (0, EW.jsxs)("div", {
          className: YW()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: Wb.inRange
          }),
          style: {
            "--glowtide-colour": Wb.colour
          },
          "aria-label": sb("skyblockGame:glowtideChipLabel"),
          children: [(0, EW.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), Wb.inRange ? (0, EW.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: sb("skyblockGame:glowtideChipInRange")
          }, `call:${Wb.inRangeToken}`) : (0, EW.jsxs)(EW.Fragment, {
            children: [(0, EW.jsx)("div", {
              ref: cb.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, EW.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: sb("skyblockGame:waypointDistance", {
                distance: ub(Wb.distance, kb.code)
              })
            })]
          })]
        })
      })
    }

    function JU(bb) {
      let {
        controller: cb
      } = bb;
      const {
        t: sb
      } = (0, PW.E)(), kb = (0, DW.h)(wk, cb.getSnapshot());
      return null === kb ? null : (0, EW.jsx)(JW.e, {
        placement: "statBars",
        children: (0, EW.jsxs)("div", {
          className: YW()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: kb.full
          }),
          "aria-label": sb("skyblockGame:glowMeterLabel", {
            fill: String(kb.fill),
            GM: String(kb.GM)
          }),
          children: [kb.burst && (0, EW.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${kb.burstToken}`), (0, EW.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, EW.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${kb.ratio})`
              }
            }), kb.gained && (0, EW.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${kb.gainToken}`), kb.full && Array.from({
              length: 5
            }, ((bb, cb) => (0, EW.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, cb)))]
          }), kb.full && kb.rares.map((bb => (0, EW.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, EW.jsx)(BW.d, {
              itemName: bb,
              amount: 0
            })
          }, bb))), kb.ready && (0, EW.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, EW.jsx)("span", {
              children: sb("skyblockGame:glowMeterReady")
            })
          }, `ready:${kb.fullToken}`)]
        })
      })
    }

    function gU(bb) {
      let {
        controller: cb
      } = bb;
      const {
        t: sb
      } = (0, PW.E)(), kb = (0, DW.h)(Sk, cb.getSnapshot());
      if (null === kb) return null;
      const Wb = "waiting" === kb.phase,
        ab = {
          animationDuration: `${kb.waitMs}ms`,
          animationDelay: -kb.elapsedMs + "ms"
        },
        Tb = Wb ? void 0 : {
          animationDuration: `${kb.waitMs}ms`
        };
      return (0, EW.jsxs)("div", {
        className: Wb ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [Wb && (0, EW.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((bb, cb) => (0, EW.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, cb))), (0, EW.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: ab
          }), (0, EW.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, EW.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, EW.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: ab
            })]
          }), (0, EW.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, EW.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: Tb,
          children: sb(kb.line)
        }, kb.lineIndex)]
      }, kb.token)
    }

    function BU(bb) {
      let {
        chart: cb,
        showHere: sb,
        className: kb
      } = bb;
      return (0, EW.jsx)("div", {
        className: YW()("SkyblockTideChartGrid", kb, null !== cb.pictureName && "Complete"),
        "aria-hidden": "true",
        children: cb.cells.map(((bb, kb) => {
          const Wb = 0 !== (cb.pulseCells & 1 << kb),
            ab = cb.castCell === kb;
          return (0, EW.jsx)("span", {
            className: YW()("SkyblockTideChartCell", `Cell-${bb}`, Wb && "Pulse", ab && "Cast", sb && cb.hereCell === kb && "Here")
          }, `${kb}:${Wb?`p${cb.pulseToken}`:""}:${ab?`c${cb.castToken}`:""}`)
        }))
      })
    }

    function tU(bb) {
      let {
        controller: cb
      } = bb;
      const sb = (0, DW.h)(vk, cb.getSnapshot()),
        {
          t: kb
        } = (0, PW.E)(),
        Wb = sb.chip;
      if (!sb.enabled || null === Wb) return null;
      const ab = kb("skyblockGame:tideChartsChipLabel", {
        island: Wb.islandName,
        lit: String(Wb.lit),
        ink: String(Wb.ink)
      });
      return (0, EW.jsx)(JW.e, {
        placement: "statBars",
        children: (0, EW.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: YW()("SkyblockTideChartsChip", sb.open && "Open", null !== Wb.pictureName && "Complete"),
          "aria-label": ab,
          title: ab,
          onMouseDown: bb => {
            bb.preventDefault()
          },
          onClick: cb.toggle,
          children: [(0, EW.jsx)(BU, {
            chart: Wb,
            showHere: !1,
            className: "Mini"
          }), (0, EW.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [Wb.lit, "/", Wb.ink]
          })]
        })
      })
    }

    function yU(bb) {
      let {
        controller: cb
      } = bb;
      const sb = (0, DW.h)(vk, cb.getSnapshot()),
        {
          t: kb
        } = (0, PW.E)(),
        Wb = rW(),
        ab = sb.card;
      return sb.enabled && null !== ab ? (0, EW.jsx)(dW.c, {
        show: sb.open,
        close: cb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, EW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: Wb,
          onKeyDown: wW,
          children: [(0, EW.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, EW.jsxs)("div", {
              children: [(0, EW.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: kb("skyblockGame:tideChartsTitle")
              }), (0, EW.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: kb("skyblockGame:tideChartsIntro")
              })]
            }), (0, EW.jsx)(AW.j, {
              padIgnore: !0,
              ariaLabel: kb("skyblockGame:tideChartsClose"),
              onClick: cb.dismiss
            })]
          }), sb.tabs.length > 1 && (0, EW.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": kb("skyblockGame:tideChartsIslands"),
            children: sb.tabs.map((bb => (0, EW.jsx)("button", {
              type: "button",
              className: YW()("SkyblockTideChartsTab", bb.selected && "Selected"),
              "aria-pressed": bb.selected,
              onClick: () => {
                cb.Wn(bb.island)
              },
              children: bb.name
            }, bb.island)))
          }), (0, EW.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, EW.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": ab.gridLabel,
              children: (0, EW.jsx)(BU, {
                chart: ab,
                showHere: !0,
                className: "Large"
              })
            }), (0, EW.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, EW.jsx)("h3", {
                children: ab.islandName
              }), (0, EW.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: ab.litText
              }), null === ab.pictureName ? (0, EW.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: kb("skyblockGame:tideChartsPictureHidden")
              }) : (0, EW.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: kb("skyblockGame:tideChartsPictureRevealed", {
                  picture: ab.pictureName
                })
              }, ab.pictureName), (0, EW.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, EW.jsxs)("li", {
                  children: [(0, EW.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), kb("skyblockGame:tideChartsLegendLit")]
                }), (0, EW.jsxs)("li", {
                  children: [(0, EW.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), kb("skyblockGame:tideChartsLegendClear")]
                }), null !== ab.hereCell && (0, EW.jsxs)("li", {
                  children: [(0, EW.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), kb("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, EW.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, EW.jsx)("span", {
                  children: sb.turnsText
                }), (0, EW.jsx)("span", {
                  children: sb.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function PU(bb) {
      var cb;
      let {
        controller: sb
      } = bb;
      const {
        selectedLanguage: kb
      } = (0, PW.E)(), Wb = kb.code;
      (0, Jb.useEffect)((() => {
        sb.setTranslator(((bb, cb) => (0, PW.y)(Wb, bb, cb)), Wb, ((bb, cb) => (0, PW.q)(Wb, bb, cb)))
      }), [sb, Wb]);
      const ab = (0, DW.h)(Xb, sb.map.getSnapshot()),
        {
          openInGameMenuName: Tb
        } = (0, hW.p)(["openInGameMenuName"]);
      return (0, EW.jsxs)(EW.Fragment, {
        children: [(0, EW.jsx)(sU, {
          controller: sb.quests,
          display: sb.navigation.display
        }), ab.enabled && !Tb && (0, EW.jsx)(aa, {
          controller: sb.navigation
        }), (0, EW.jsx)(iW, {
          controller: sb,
          minimap: ab.enabled && (null === (cb = ab.presentation) || void 0 === cb ? void 0 : cb.minimap) && (0, EW.jsx)(Wa, {
            view: ab.presentation.minimap,
            navigation: sb.navigation,
            controller: sb.map
          }),
          children: (0, EW.jsx)(ma, {
            controller: sb.quests,
            surface: "hud"
          })
        }), (0, EW.jsx)(pT, {
          controller: sb.navigation
        }), (0, EW.jsx)(WU, {
          controller: sb.portalTransit
        }), (0, EW.jsx)(lU, {
          controller: sb.dailyReward
        }), (0, EW.jsx)(uU, {
          controller: sb.mailbox
        }), (0, EW.jsx)(YU, {
          controller: sb.magmaward
        }), (0, EW.jsx)(hU, {
          controller: sb.glowtide
        }), (0, EW.jsx)(mT, {
          controller: sb.passage
        }), (0, EW.jsx)(tU, {
          controller: sb.tideCharts
        }), (0, EW.jsx)(JU, {
          controller: sb.glowMeter
        }), (0, EW.jsx)(JT, {
          controller: sb.reachLog
        }), (0, EW.jsx)(gU, {
          controller: sb.hushWait
        }), (0, EW.jsx)(LT, {
          controller: sb.lampLight
        }), (0, EW.jsx)(Ta, {
          controller: sb.skills,
          surface: "hud"
        })]
      })
    }

    function DU(bb) {
      let {
        controller: cb
      } = bb;
      return (0, EW.jsxs)(EW.Fragment, {
        children: [(0, EW.jsx)(ka, {
          controller: cb.map,
          navigation: cb.navigation
        }), (0, EW.jsx)(Ta, {
          controller: cb.skills,
          surface: "menu"
        }), (0, EW.jsx)(ma, {
          controller: cb.quests,
          surface: "menu"
        }), (0, EW.jsx)(va, {
          controller: cb.dungeons
        }), (0, EW.jsx)(ja, {
          controller: cb.collections
        }), (0, EW.jsx)(cT, {
          controller: cb.questGraph
        }), (0, EW.jsx)(TT, {
          controller: cb.forge
        }), (0, EW.jsx)(XT, {
          controller: cb.smuggler
        }), (0, EW.jsx)(YT, {
          controller: cb.keepersChair,
          lampLight: cb.lampLight
        }), (0, EW.jsx)(RT, {
          controller: cb.reachLog,
          regulars: cb.regulars,
          hiddenWaters: cb.hiddenWaters
        }), (0, EW.jsx)(yT, {
          controller: cb.regulars
        }), (0, EW.jsx)(QT, {
          controller: cb.passage
        }), (0, EW.jsx)(yU, {
          controller: cb.tideCharts
        }), (0, EW.jsx)(xT, {
          controller: cb.dialogue
        }), (0, EW.jsx)(jT, {
          controller: cb.autographs
        })]
      })
    }
    var EU = sb(36359);
    const iU = sk + Hk;

    function OU(bb, cb, sb, kb, Wb) {
      const ab = [],
        Tb = [],
        Ub = sb => {
          const kb = bb.playSound(cb, sb.sound, sb.volume, sb.rate);
          kb && (Tb.push(kb), void 0 !== sb.cutAfter && ab.push(setTimeout((() => {
            kb.fade(kb.getVolume(), 0, 300)
          }), sb.cutAfter)))
        };
      for (const Ib of function(bb, cb) {
          const sb = [{
            sound: "rpgKnifeSlice1",
            beat: sk,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: sk,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: sk,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: sk,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: sk,
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
            sound: (0, EU.c)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: iU + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, EU.c)("bigDrumSwish"),
            beat: iU + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: iU + 60,
            lead: 180,
            volume: .5 + .06 * bb,
            rate: .82 + .07 * bb
          }];
          return bb >= 4 && sb.push({
            sound: "exp_levelup",
            beat: iU + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), cb && sb.push({
            sound: "trumpetFlare",
            beat: iU + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), sb.push({
            sound: "harp_pling",
            beat: kk,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), sb
        }(sb, kb)) Wb ? ab.push(setTimeout((() => {
        Ub(Ib)
      }), Math.max(0, Ib.beat - Ib.lead / Ib.rate))) : Ib.beat !== sk && "magicAccent2" !== Ib.sound && "trumpetFlare" !== Ib.sound || Ub(Ib);
      return () => {
        for (const bb of ab) clearTimeout(bb);
        for (const bb of Tb) bb.fade(bb.getVolume(), 0, 120)
      }
    }
    class GU {
      constructor(bb) {
        this.deps = bb, this.pending = new Map, this.localHook = null
      }
      hookWaiting(bb, cb) {
        this.pending.delete(bb);
        const sb = this.deps.now();
        if (null === cb) {
          var kb;
          if ((null === (kb = this.localHook) || void 0 === kb ? void 0 : kb.hookId) === bb) {
            const bb = sb >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(bb)
          }
          return
        }
        const Wb = sb + cb;
        this.settle(bb, Wb) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(bb, {
          untilMs: sb + 1e3,
          biteAtMs: Wb
        }))
      }
      getLocalHook() {
        var bb, cb;
        return null !== (bb = null === (cb = this.localHook) || void 0 === cb ? void 0 : cb.hookId) && void 0 !== bb ? bb : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const bb = this.deps.now();
        for (const [cb, {
            untilMs: sb,
            biteAtMs: kb
          }] of this.pending)(this.settle(cb, kb) || bb > sb) && this.pending.delete(cb)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(bb, cb) {
        const sb = this.deps.getLineOwner(bb);
        if (null === sb) return !1;
        if (!this.deps.isLocalPlayer(sb)) return !0;
        if (this.localHook = {
            hookId: bb,
            biteAtMs: cb
          }, !this.deps.isHushWaiting()) {
          const [cb, sb] = this.deps.getHookPosition(bb);
          this.deps.onCastLanded(cb, sb)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var KU = sb(4023);
    const ZU = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      zU = {
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
    class qU {
      constructor(bb) {
        this.deps = bb, this.tell = null
      }
      receiveTell(bb) {
        let {
          biteTellTier: cb
        } = bb;
        this.tell = {
          tier: cb,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(bb) {
        const cb = this.tell;
        if (this.tell = null, !bb) return;
        const sb = null !== cb && this.deps.now() - cb.atMs <= 3e3 ? cb.tier : 0;
        this.deps.vibrate(ZU[sb])
      }
      burstAtHook() {
        const bb = this.tell,
          cb = this.deps.getLocalHookPosition();
        null === bb || bb.burst || null === cb || (bb.burst = !0, this.deps.playParticles(function(bb, cb) {
          let [sb, kb, Wb] = cb;
          const {
            count: ab,
            rise: Tb,
            colour: Ub
          } = zU[bb], [Ib, Hb, fb] = Ub;
          return {
            texture: "glint",
            pos1: [sb - .3, kb, Wb - .3],
            pos2: [sb + .3, kb + .2, Wb + .3],
            dir1: [-.6, Tb, -.6],
            dir2: [.6, 1.4 * Tb, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: ab,
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
              minColor: [Ib, Hb, fb, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [Ib, Hb, fb, 0],
              maxColor: [Ib, Hb, fb, 0]
            }],
            blendMode: KU.f.Add,
            hideDist: 48
          }
        }(bb.tier, cb)))
      }
    }
    var dU = sb(1258),
      AU = sb(1876),
      wU = sb(37);

    function rU(bb, cb) {
      return [{
        timeFraction: 0,
        minColor: [255 * bb[0], 255 * bb[1], 255 * bb[2], 1],
        maxColor: [255 * cb[0], 255 * cb[1], 255 * cb[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const oU = [0, 0, 0],
      SU = {
        texture: "glint",
        mipmaps: !1,
        GM: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: oU,
        dir2: oU,
        blendMode: KU.f.OneOne
      },
      RU = {
        ...SU,
        colorGradients: rU([1, .88, .38], [1, .65, .15])
      },
      vU = {
        ...SU,
        colorGradients: rU([.55, .95, 1], [.9, 1, 1])
      },
      FU = [.5, .5, .5],
      xU = {
        texture: "glint",
        mipmaps: !1,
        GM: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: rU([1, .12, .12], [1, .35, .2]),
        blendMode: KU.f.OneOne
      };
    class jU {
      constructor() {
        this.drops = new Map
      }
      Km(bb, cb) {
        if ("overflowFlash" === cb.kind) {
          const [sb, kb, Wb] = cb.position, ab = bb.createParticles(xU, {
            pos: [sb, kb, Wb],
            half: FU
          });
          return ab.emit(18), void ab.stop()
        }
        this.drops.has(cb.itemId) || this.drops.set(cb.itemId, {
          owner: cb.owner,
          cosmetic: cb.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      aX(bb) {
        if (0 === this.drops.size) return;
        const cb = performance.now(),
          sb = bb.getCameraPosition();
        let kb = 0;
        for (const ab of this.drops.values()) null !== ab.particles && kb++;
        for (const [ab, Tb] of this.drops) {
          const Ub = bb.getPositionView(ab);
          if (null === Ub) {
            var Wb;
            if (Tb.seen || cb - Tb.markedAt > 5e3) null !== Tb.particles && kb--, null === (Wb = Tb.particles) || void 0 === Wb || Wb.stop(), this.drops.delete(ab);
            continue
          }
          Tb.cosmetic || !bb.isLocalPlayer(Tb.owner) || Tb.pickupDelayCleared || (bb.clearPickupDelay(ab), Tb.pickupDelayCleared = !0);
          const Ib = Tb.lastPosition,
            Hb = Tb.seen && (Ub[0] - Ib[0]) ** 2 + (Ub[1] - Ib[1]) ** 2 + (Ub[2] - Ib[2]) ** 2 > 4e-4,
            fb = (Ub[0] - sb[0]) ** 2 + (Ub[1] - sb[1]) ** 2 + (Ub[2] - sb[2]) ** 2 < 2025;
          Tb.seen = !0, Ib[0] = Ub[0], Ib[1] = Ub[1], Ib[2] = Ub[2], Hb && (Tb.lastMovingAt = cb), null !== Tb.particles && (!fb || cb - Tb.lastMovingAt > 500) && (Tb.particles.stop(), Tb.particles = null, kb--), Hb && fb && null === Tb.particles && kb < 32 && (Tb.particles = bb.createParticles(Tb.cosmetic ? vU : RU, {
            pos: Ub
          }), kb++), null !== Tb.particles && (Tb.particles.moveTo(Ub), Tb.particles.setEmitRate(Hb ? 12 : 0)), !Hb && null === Tb.particles && cb - Math.max(Tb.lastMovingAt, Tb.markedAt) > 2e3 && this.drops.delete(ab)
        }
      }
      dispose() {
        for (const cb of this.drops.values()) {
          var bb;
          null === (bb = cb.particles) || void 0 === bb || bb.stop()
        }
        this.drops.clear()
      }
    }
    var pU = sb(223);
    const bI = pU.e.JC * pU.e.playerEyeToHeightRatio;
    class cI {
      constructor(bb) {
        this.host = bb, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      Km(bb) {
        this.lava = bb, this.nextUpdateAt = 0
      }
      aX() {
        var bb;
        const cb = this.host.now();
        if (cb < this.nextUpdateAt) return;
        this.nextUpdateAt = cb + 250;
        const sb = this.host.playerPosition(),
          kb = sb && this.findNearest([sb[0], sb[1] + bI, sb[2]]);
        if (!kb || kb.distance >= 40) return void this.stop();
        const Wb = .5 * Math.min(1, (40 - kb.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(Wb) : this.loop = this.host.play("lavaFlow", Wb, kb.position, 40 + bI, 9, !0), null === (bb = this.loop) || void 0 === bb || bb.setPosition(kb.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var bb;
        null === (bb = this.loop) || void 0 === bb || bb.stop(), this.loop = null
      }
      findNearest(bb) {
        let cb = -1,
          sb = 1 / 0;
        for (let kb = 0; kb < this.lava.length; kb += 3) {
          const Wb = this.lava[kb] - bb[0],
            ab = this.lava[kb + 1] - bb[1],
            Tb = this.lava[kb + 2] - bb[2],
            Ub = Wb * Wb + ab * ab + Tb * Tb;
          Ub < sb && (sb = Ub, cb = kb)
        }
        return cb < 0 ? null : {
          position: [this.lava[cb], this.lava[cb + 1], this.lava[cb + 2]],
          distance: Math.sqrt(sb)
        }
      }
    }
    var sI = sb(1851),
      kI = sb(38245);
    const WI = {
      "Grey Portal": "Gray"
    };
    for (const fI of Wb.Hc) WI[`${fI} Portal`] = fI;
    const aI = Object.keys(WI),
      TI = Object.fromEntries(aI.map((bb => [bb, (0, Wb.U)(Wb.L[`${(0,Wb.Je)(WI[bb])}Team`])])));
    Object.fromEntries(aI.map((bb => [bb, Wb.L[`${(0,Wb.Je)(WI[bb])}UiText`]])));
    class UI {
      constructor(bb, cb) {
        this.presentation = bb, this.portal = cb, this.unlocked = void 0
      }
      Km(bb) {
        const cb = !1 === this.unlocked && bb;
        this.unlocked = bb, this.aX();
        const {
          min: sb,
          max: kb,
          unlockedBlock: Wb
        } = this.portal;
        if (cb && this.presentation.hasChunk(...sb)) {
          const [bb, cb, ab] = TI[Wb];
          this.presentation.playParticles({
            pos1: [...sb],
            pos2: kb.map((bb => bb + 1)),
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
              minColor: [bb, cb, ab, 1],
              maxColor: [Math.min(255, bb + 55), Math.min(255, cb + 55), Math.min(255, ab + 90), 1]
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
      aX() {
        var bb;
        const cb = this.unlocked ? this.portal.unlockedBlock : null !== (bb = this.portal.lockedBlock) && void 0 !== bb ? bb : "Light Gray Portal",
          {
            min: sb,
            max: kb
          } = this.portal;
        for (let Wb = sb[0]; Wb <= kb[0]; Wb++)
          for (let bb = sb[1]; bb <= kb[1]; bb++)
            for (let ab = sb[2]; ab <= kb[2]; ab++) this.presentation.hasChunk(Wb, bb, ab) && this.presentation.rC(Wb, bb, ab) !== cb && this.presentation.Tu(Wb, bb, ab, cb)
      }
    }
    const II = {
        farming_1: {
          raises: bb => "NPC" === bb.type && "chef" === bb.variation,
          rise: .4
        },
        fishing_1: {
          raises: bb => "Draugr Warper" === bb.type,
          rise: .4
        }
      },
      HI = (bb, cb, sb, ab) => {
        let {
          localPlayerId: Tb
        } = ab;
        const Ub = new LW({
          translate: (bb, cb) => (0, PW.y)(dU.e.get().getCurrentLanguageCode(), bb, cb),
          translateWithIcons: (bb, cb) => (0, PW.q)(dU.e.get().getCurrentLanguageCode(), bb, cb),
          setMenuOpen: bb => {
            bb ? (0, Sb.m)() : (0, Sb.e)()
          },
          dismissMenu: Sb.g,
          publishSkills: bb => {
            Rb.j.QQ(as, bb, !0)
          },
          publishQuests: bb => {
            Rb.j.QQ(Hs, bb, !0)
          },
          publishQuestNotification: bb => {
            Rb.j.QQ(fs, bb, !0)
          },
          publishDungeons: bb => {
            Rb.j.QQ(ns, bb, !0)
          },
          publishCollections: bb => {
            Rb.j.QQ(Gs, bb, !0)
          },
          publishMap: bb => {
            Rb.j.QQ(Xb, bb, !0)
          },
          publishHud: bb => {
            Rb.j.QQ(CW, bb, !0)
          },
          publishPortalTransit: bb => {
            Rb.j.QQ(Zs, bb, !0)
          },
          isLoadingScreenUp: () => hW.d.get("loadingOverlayVisible"),
          publishDailyReward: bb => {
            Rb.j.QQ(ds, bb, !0)
          },
          publishMailbox: bb => {
            Rb.j.QQ(Ss, bb, !0)
          },
          publishQuestGraph: bb => {
            Rb.j.QQ(vs, bb, !0)
          },
          publishForge: bb => {
            Rb.j.QQ(Qk, bb, !0)
          },
          publishSmuggler: bb => {
            Rb.j.QQ(Nk, bb, !0)
          },
          publishKeepersChair: bb => {
            Rb.j.QQ(tk, bb, !0)
          },
          publishReachLog: bb => {
            Rb.j.QQ(Pk, bb, !0)
          },
          publishLampLight: bb => {
            Rb.j.QQ(Kk, bb, !0)
          },
          publishMagmaward: bb => {
            Rb.j.QQ(zk, bb, !0)
          },
          publishGlowtide: bb => {
            Rb.j.QQ(dk, bb, !0)
          },
          publishGlowMeter: bb => {
            Rb.j.QQ(wk, bb, !0)
          },
          publishHushWait: bb => {
            Rb.j.QQ(Sk, bb, !0)
          },
          publishPassage: bb => {
            Rb.j.QQ(uk, bb, !0)
          },
          publishTideCharts: bb => {
            Rb.j.QQ(vk, bb, !0)
          },
          publishRegulars: bb => {
            Rb.j.QQ(kW, bb, !0)
          },
          publishHiddenWaters: bb => {
            Rb.j.QQ(IW, bb, !0)
          },
          publishDialogue: bb => {
            Rb.j.QQ(fW, bb, !0)
          },
          publishAutographs: bb => {
            Rb.j.QQ(lW, bb, !0)
          },
          onDailyRewardStarted: bb => {
            Db.playSound(Tb, bb.day === Bb ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (bb, cb) => {
            Db.playSound(Tb, "exp_collect", .35, 1 + .6 * bb / (cb - 1)), Rb.j.QQ(As, bb === cb - 1)
          },
          onDailyRewardItemLanded: bb => {
            Db.playSound(Tb, "pickUp", .6, 1 + .15 * bb)
          },
          onMailboxStarted: () => {
            Db.playSound(Tb, "rpgMetalClick", .6, 1), Db.playSound(Tb, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            Db.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: wU.i,
          requestTracking: bb => {
            Db.sendCommand(`quests track ${bb}`)
          },
          requestDungeonEnter: (bb, cb) => {
            Db.sendCommand(`dungeonEnter ${bb} ${cb}`)
          },
          requestQuestJump: bb => {
            Db.sendCommand(`${ib} jump ${bb}`)
          },
          requestQuestArrive: (bb, cb) => {
            const sb = `${ib} arrive ${bb}`;
            Db.sendCommand(cb ? `${sb} complete` : sb)
          },
          requestForge: bb => {
            let {
              blade: cb,
              guard: sb,
              handle: kb
            } = bb;
            Db.sendCommand(`forge ${cb} ${sb} ${kb}`)
          },
          requestDialogue: () => {
            Db.sendCommand("quests dialogue")
          },
          requestSmuggle: (bb, cb) => {
            Db.sendCommand(`smuggle ${bb} ${cb}`)
          },
          requestKeepersChairAim: bb => {
            Db.sendCommand(`keeperschair-aim ${bb}`)
          },
          requestReachLogOpen: () => {
            Db.sendCommand("reachlog-open")
          },
          requestLampLight: bb => {
            Db.sendCommand(`${bb}`)
          },
          requestTravel: bb => {
            Db.sendCommand(`map travel ${bb.kind} ${bb.id} ${bb.requestId}`)
          }
        });
        let Ib, Hb, fb, Mb, nb, mb, lb, Vb, Lb, ub, Yb, gb, tb;
        const Pb = new jU;
        let Db, Eb = null;
        const Ob = II[null !== sb && void 0 !== sb ? sb : ""],
          zb = (bb, cb) => {
            null !== Ob && void 0 !== Ob && Ob.raises(cb) && Db.setNametagOffset(bb, Ob.rise)
          },
          Ab = new qU({
            getLocalHookPosition: () => {
              const bb = wb.getLocalHook();
              return null !== bb && Db.checkValid(bb) ? Db.aN(bb) : null
            },
            playParticles: bb => {
              Db.playParticleEffect(bb)
            },
            vibrate: bb => {
              vb.f.play("fishBite", bb)
            },
            now: () => performance.now()
          }),
          wb = new GU({
            getLineOwner: bb => Db.checkValid(bb) ? Db.getLineOwner(bb) : null,
            isLocalPlayer: bb => Db.isLocalPlayer(bb),
            getHookPosition: bb => {
              const [cb, , sb] = Db.aN(bb);
              return [cb, sb]
            },
            isHushWaiting: () => {
              var bb;
              return "waiting" === (null === (bb = Ub.hushWait.getSnapshot()) || void 0 === bb ? void 0 : bb.phase)
            },
            onCastLanded: (bb, cb) => {
              Ub.tideCharts.castLanded(bb, cb)
            },
            onLocalHookSettled: () => {
              Ab.onLocalHookSettled()
            },
            onLocalWaitEnded: bb => {
              Ab.onLocalWaitEnded(bb)
            },
            now: () => performance.now()
          }),
          Fb = new cI({
            now: () => performance.now(),
            playerPosition: () => Db.checkValid(Tb) ? Db.aN(Tb) : null,
            play: (bb, cb, sb, kb, Wb, ab) => Db.playSound(Tb, bb, cb, 1, {
              ca: sb,
              maxHearDist: kb,
              refDistance: Wb
            }, ab)
          }),
          xb = new Map;
        let jb;
        return {
          onCreate: bb => {
            if (Db = bb, Eb = new kI.SkyblockEntityFacing(bb, Ob ? zb : null), Ub.portalTransit.resumeArrival(null !== sb && void 0 !== sb ? sb : null), (null !== sb && void 0 !== sb ? sb : kb) === kb) {
              let bb = -1 / 0;
              jb = Rb.j.subscribe("toggleMenu", (cb => {
                const sb = performance.now();
                "inventory|Workbench" !== cb || "cross_to_hub" !== Ub.quests.getTrackedQuestId() || sb - bb < 1e4 || (bb = sb, Db.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [kb, Wb] of Object.entries(null !== (cb = Gb[null !== sb && void 0 !== sb ? sb : ""]) && void 0 !== cb ? cb : {})) {
              var cb;
              xb.set(kb, new UI({
                hasChunk: (cb, sb, kb) => bb.isBlockInLoadedChunk(cb, sb, kb),
                rC: (cb, sb, kb) => bb.blockIdToBlockName(bb.getBlockId(cb, sb, kb)),
                Tu: (cb, sb, kb, Wb) => {
                  bb.Tu(cb, sb, kb, Wb)
                },
                playParticles: cb => {
                  bb.playParticleEffect(cb)
                }
              }, Wb))
            }
            tb = (0, sI.f)((bb => function(bb) {
              return Object.hasOwn(wc, bb) || bb.startsWith("npc_")
            }(bb) ? oc(bb) : null)), Ub.resolveItemName = (cb, sb) => {
              const kb = bb.getItemStat(Tb, cb, "displayName");
              return kb && "object" === typeof kb && "translationKey" in kb ? sb(kb.translationKey, (0, PW.p)(kb.params, AU.b.shown)) : "string" === typeof kb ? sb(kb) : cb
            }, Ub.quests.notifications.onShown = bb => {
              "quest" === bb ? Db.playSound(Tb, "magicAccent1", 1, 1) : "skillLevel" === bb ? Db.playSound(Tb, "magicAccent1", 1, .6) : "landmark" === bb ? Db.playSound(Tb, "trumpetFlare", 1, .6) : "npcNote" === bb ? Db.playSound(Tb, "magicAccent2", .8, 1.1) : "started" === bb ? Db.playSound(Tb, (0, EU.c)("bigDrumSwish"), 1, 1) : Db.playSound(Tb, (0, EU.c)("rpgHandleSmallLeather"), 1, 1)
            }, Ub.forge.onPartSelected = () => {
              Db.playSound(Tb, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, Ub.forge.onForgeStarted = (cb, sb, kb) => OU(bb, Tb, cb, sb, kb), Ub.smuggler.onBought = () => {
              Db.playSound(Tb, (0, EU.c)("rpgHandleSmallLeather"), 1, 1), Db.playSound(Tb, "chestOpen", .6, 1)
            }, Ub.compass.register(new Qb(Ub.map, !0)), Ub.compass.register(new Qb(Ub.map, !1)), Ub.compass.register(new Cb(Ub.map)), Ub.compass.register(new Nb((() => Ub.quests.getSnapshot().compassTarget)));
            for (const sb of ["enemy", "npc"]) Ub.compass.register(new eb(Ub.map, sb, (cb => bb.checkValid(cb) ? bb.aN(cb) : void 0), (cb => bb.isAlive(cb))))
          },
          onAfterRender: (bb, cb) => {
            const sb = Db.checkValid(Tb) ? Db.aN(Tb) : null;
            Ub.navigation.afterRender(sb, performance.now(), cb), Ub.glowtide.afterRender(sb, cb.cameraHeading), Ub.tideCharts.afterRender(sb), wb.afterRender()
          },
          onClose: () => {
            var bb, cb, sb, kb, Wb, ab, Tb, Xb, mb, Qb, eb, Cb, Nb, hb, Jb;
            jb && Rb.j.unsubscribe(jb), null === (bb = tb) || void 0 === bb || bb(), Pb.dispose(), Fb.dispose(), null === (cb = Eb) || void 0 === cb || cb.dispose(), wb.dispose(), Ub.dispose(), null === (sb = Ib) || void 0 === sb || sb(), null === (kb = Hb) || void 0 === kb || kb(), null === (Wb = fb) || void 0 === Wb || Wb(), null === (ab = Mb) || void 0 === ab || ab(), null === (Tb = nb) || void 0 === Tb || Tb(), null === (Xb = lb) || void 0 === Xb || Xb(), null === (mb = undefined) || void 0 === mb || mb(), null === (Qb = Vb) || void 0 === Qb || Qb(), null === (eb = Lb) || void 0 === eb || eb(), null === (Cb = ub) || void 0 === Cb || Cb(), null === (Nb = Yb) || void 0 === Nb || Nb(), null === (hb = undefined) || void 0 === hb || hb(), null === (Jb = gb) || void 0 === Jb || Jb()
          },
          onPlayerChangeBlock: (bb, cb, kb, ab, Ib, Hb) => {
            if (bb === Tb && "Air" === Hb) {
              const bb = Db.getClientOption(Tb, "creative");
              Ub.skills.predictBlock([cb, kb, ab], Ib, bb);
              const Hb = function(bb, cb) {
                  if ("hub" === cb || "farming_1" === cb || "mining_1" === cb) return !qb.has(bb) || "hub" !== cb && "mining_1" !== cb ? Object.hasOwn(Zb, bb) ? Zb[bb] : void 0 : Kb
                }(Ib, sb),
                fb = ("hub" === sb || "mining_1" === sb) && (Wb.xd.some((bb => bb === Ib)) || Object.hasOwn(db, Ib) || "mining_1" === sb && "Block of Coal" === Ib);
              bb || void 0 === Hb && !fb || Db.Tu(cb, kb, ab, null !== Hb && void 0 !== Hb ? Hb : Kb)
            }
          },
          onPlayerAttackEntity: (bb, cb) => {
            if (bb !== Tb || "Player" !== Db.getEntityType(cb)) return;
            const [sb, kb, Wb] = Db.aN(cb);
            Db.burstParticlePreset("critical", [sb, kb + 1, Wb], 10)
          },
          onChangeBlockFail: bb => {
            for (const {
                TT: cb
              }
              of bb) Ub.skills.rejectBlock(cb)
          },
          onReceivedMessageFromServer: (bb, cb) => {
            if ("skyblockGatedPortal" === bb) {
              var sb;
              const [bb, kb] = cb;
              return void(null === (sb = xb.get(bb)) || void 0 === sb || sb.Km(kb))
            }
            if ("skyblockDailyReward" === bb) return void Ub.dailyReward.Km(cb);
            if ("skyblockMailbox" === bb) return void Ub.mailbox.Km(cb);
            if ("skyblockPortalTransit" === bb) return void Ub.portalTransit.Km(cb);
            if ("skyblockLoot" === bb) return void Pb.Km(Db, cb);
            if ("skyblockLava" === bb) return void Fb.Km(cb);
            if ("skyblockForge" === bb) return void Ub.forge.Km(cb);
            if ("skyblockMagmaward" === bb) return void Ub.magmaward.Km(cb);
            if ("skyblockGlowtide" === bb) return void Ub.glowtide.Km(cb);
            if ("skyblockGlowMeter" === bb) return void Ub.glowMeter.Km(cb);
            if ("skyblockHushWait" === bb) return void Ub.hushWait.Km(cb);
            if ("skyblockPassage" === bb) {
              const bb = cb;
              return Ub.passage.Km(bb), Ub.reachLog.receivePassagePhase(bb.passagePhase), ub ??= (0, hb.s)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: Ub.passage.show
              }), void Ub.keepersChair.receivePassage({
                keepersChairPassagePhase: bb.passagePhase,
                keepersChairPassageNextPhase: bb.passageNextPhase,
                keepersChairPassageTurnsInMs: bb.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === bb) {
              const bb = cb;
              return Ub.tideCharts.Km(bb), void(bb.tideCharts.length > 0 && (Yb ??= (0, hb.s)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: Ub.tideCharts.show
              })))
            }
            if (bb === rb.v) {
              var kb;
              const {
                hookId: bb,
                waiting: sb
              } = cb;
              return void wb.hookWaiting(bb, null !== (kb = null === sb || void 0 === sb ? void 0 : sb.remainingMs) && void 0 !== kb ? kb : null)
            }
            if ("skyblockBiteTell" === bb) return void Ab.receiveTell(cb);
            if ("skyblockSmuggler" === bb) return void Ub.smuggler.Km(cb);
            if ("skyblockKeepersChair" === bb) return Ub.keepersChair.Km(cb), void Ub.lampLight.setAtChair(Ub.keepersChair.isAtChair());
            if ("skyblockLampLight" === bb) {
              const bb = cb;
              var Wb;
              if (Ub.lampLight.Km(bb), bb.lampLightReleasing) Lb ??= (0, hb.s)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  Ub.lampLight.setRelease(!1)
                }
              });
              else null === (Wb = Lb) || void 0 === Wb || Wb(), Lb = void 0;
              return
            }
            if ("skyblockRegulars" === bb) return void Ub.regulars.Km(cb);
            if ("skyblockHiddenWaters" === bb) return void Ub.hiddenWaters.Km(cb);
            if ("skyblockReachLog" === bb) return Ub.reachLog.Km(cb), void(Vb ??= (0, hb.s)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: Ek
              },
              onClick: Ub.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === bb) {
              for (const [bb, sb, kb, Wb] of cb) Db.Tu(bb, sb, kb, Wb);
              return
            }
            if ("skyblockHud" === bb) Ub.receiveHud(cb);
            else if ("skyblockMap" === bb) Ub.map.Km(cb);
            else if (bb === ob.f) Ub.skills.Km(cb);
            else if (bb === yb && "dialogue" === cb.kind) Ub.dialogue.Km(cb);
            else if (bb === yb) Ub.quests.Km(cb);
            else if ("skyblockDungeons" === bb) Ub.dungeons.Km(cb);
            else if ("sbCollections" === bb) Ub.collections.Km(cb);
            else if ("skyblockQuestGraph" === bb) Ub.questGraph.Km(cb);
            else {
              if ("skyblockAutographs" !== bb) return;
              Ub.autographs.Km(cb)
            }
            if (!Hb && Ub.map.getSnapshot().enabled) {
              const bb = (0, hb.s)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: Ub.map.show
                }),
                cb = (0, Sb.p)(Ub.map.show);
              Hb = () => {
                bb(), cb()
              }
            }!fb && Ub.skills.getSnapshot().enabled && (fb = (0, hb.s)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: Ub.skills.show
            })), !lb && Ub.collections.getSnapshot().enabled && (lb = (0, hb.s)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: Ub.collections.show
            })), !Mb && Ub.quests.getSnapshot().enabled && (Mb = (0, hb.s)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: Ub.quests.show
            })), !gb && Ub.autographs.getSnapshot().enabled && (gb = (0, hb.s)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: Ub.autographs.show
            }));
            const ab = Ub.dungeons.getSnapshot().enabled;
            var Tb;
            (fb || Mb || ab) && mb !== ab && (mb = ab, null === (Tb = nb) || void 0 === Tb || Tb(), nb = (0, hb.s)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: Ec
              },
              disabled: !ab,
              panel: !0,
              onClick: Ub.dungeons.show
            }));
            Ib || (Ib = (0, Sb.s)((0, Jb.createElement)(PU, {
              controller: Ub
            }), {
              content: (0, Jb.createElement)(DU, {
                controller: Ub
              }),
              onClose: Ub.close
            }))
          },
          aX: () => {
            var bb;
            for (const cb of xb.values()) cb.aX();
            Pb.aX(Db), Fb.aX(), null === (bb = Eb) || void 0 === bb || bb.aX(), Ub.skills.aX(), Ub.quests.aX(), Ub.dailyReward.aX(), Ub.mailbox.aX(), Ub.map.aX()
          }
        }
      }
  },
  36039: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb,
      f: () => kb
    });
    const kb = "skyblockSkills",
      Wb = "skills_test_gym"
  },
  8947: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Wb,
      g: () => Tb
    });
    const kb = [{
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

    function Wb(bb) {
      let cb, sb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof bb) {
        if (!Number.isFinite(bb)) return "0";
        if (Math.abs(bb) < 100) {
          const cb = bb < 0 ? "-" : "",
            sb = Math.abs(bb);
          return sb >= 10 ? `${cb}${sb.toFixed(1).replace(/\.0$/,"")}` : `${cb}${sb.toFixed(2).replace(/\.?0+$/,"")}`
        }
        cb = BigInt(Math.floor(bb))
      } else cb = bb;
      const Wb = cb < 0n ? -cb : cb,
        ab = cb < 0n ? "-" : "",
        Tb = Wb.toString();
      if (Tb.length <= sb) return `${ab}${Tb}`;
      const Ub = 3 * Math.floor((Tb.length - 1) / 3);
      if (Ub < 3) return `${ab}${Tb}`;
      if (Ub > 3 * kb.length) {
        const bb = Tb[0],
          cb = Tb.slice(1, 3).replace(/0+$/, "");
        return `${ab}${cb?`${bb}.${cb}`:bb}e${Tb.length-1}`
      }
      const {
        threshold: Ib,
        suffix: Hb
      } = kb[kb.length - Ub / 3], fb = Wb / Ib, Mb = Number(1000n * (Wb % Ib) / Ib), Xb = Number(fb) + Mb / 1e3;
      let nb;
      return nb = Xb >= 100 ? Math.floor(Xb).toString() : Xb >= 10 ? Xb.toFixed(1).replace(/\.0$/, "") : Xb.toFixed(2).replace(/\.?0+$/, ""), `${ab}${nb}${Hb}`
    }
    const ab = kb.map((bb => {
      let {
        threshold: cb,
        suffix: sb
      } = bb;
      return {
        threshold: Number(cb),
        suffix: sb
      }
    })).filter((bb => {
      let {
        threshold: cb
      } = bb;
      return Number.isFinite(cb)
    }));

    function Tb(bb) {
      const cb = Math.abs(bb),
        sb = bb < 0 ? "-" : "";
      for (const {
          threshold: kb,
          suffix: Wb
        }
        of ab)
        if (cb >= kb) {
          const bb = cb / kb;
          if (bb >= 1e3) return `${sb}${cb.toExponential(2).replace("e+","e")}`;
          let ab;
          return ab = bb >= 100 ? Math.floor(bb).toString() : bb >= 10 ? bb.toFixed(1).replace(/\.0$/, "") : bb.toFixed(2).replace(/\.?0+$/, ""), `${sb}${ab}${Wb}`
        } return `${sb}${cb}`
    }
  },
  38155: (bb, cb, sb) => {
    var kb = {
      "./combat_1.png": 38164,
      "./dungeon_crumbling_crypt.png": 38173,
      "./dungeon_frozen_hollow.png": 38182,
      "./dungeon_wildwood_grove.png": 38184,
      "./dungeons.png": 38191,
      "./farming_1.png": 38193,
      "./fishing_1.png": 38198,
      "./hub.png": 38206,
      "./island.png": 38212,
      "./mining_1.png": 38218,
      "./mining_1_bridge.png": 38227,
      "./mining_1_gallery.png": 38229,
      "./mining_1_hollow.png": 38233,
      "./mining_1_village.png": 38237
    };

    function Wb(bb) {
      var cb = ab(bb);
      return sb(cb)
    }

    function ab(bb) {
      if (!sb.o(kb, bb)) {
        var cb = new Error("Cannot find module '" + bb + "'");
        throw cb.code = "MODULE_NOT_FOUND", cb
      }
      return kb[bb]
    }
    Wb.keys = function() {
      return Object.keys(kb)
    }, Wb.resolve = ab, bb.exports = Wb, Wb.id = 38155
  },
  38164: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  38173: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  38182: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  38184: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  38191: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  38193: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/farming_1.08302e28e41bf98474fe.png"
  },
  38198: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  38206: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/hub.8b20a64678134496251d.png"
  },
  38212: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/island.113e20c7bd7db93fe1ce.png"
  },
  38218: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/mining_1.68cac4bdadc5ef809ae5.png"
  },
  38227: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/mining_1_bridge.56ff82ba845db0b52726.png"
  },
  38229: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/mining_1_gallery.4e799e6329dbc66249ce.png"
  },
  38233: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  38237: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/mining_1_village.c2a625c1c4541a1fbe65.png"
  },
  18175: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  20313: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  22716: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  24310: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  26032: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  26052: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  38146: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);