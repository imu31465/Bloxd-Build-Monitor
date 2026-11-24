export const id = 192;
export const ids = [52, 192];
export const modules = {
  38774: (pp, ip, cp) => {
    var Op = {
      "./combat_1.png": 38776,
      "./dungeon_crumbling_crypt.png": 38783,
      "./dungeon_frozen_hollow.png": 38791,
      "./dungeon_wildwood_grove.png": 38798,
      "./dungeons.png": 38807,
      "./farming_1.png": 38814,
      "./fishing_1.png": 38817,
      "./hub.png": 38819,
      "./island.png": 38824,
      "./mining_1.png": 38828,
      "./mining_1_bridge.png": 38831,
      "./mining_1_gallery.png": 38836,
      "./mining_1_hollow.png": 38842,
      "./mining_1_village.png": 38849
    };

    function op(pp) {
      var ip = Ip(pp);
      return cp(ip)
    }

    function Ip(pp) {
      if (!cp.o(Op, pp)) {
        var ip = new Error("Cannot find module '" + pp + "'");
        throw ip.code = "MODULE_NOT_FOUND", ip
      }
      return Op[pp]
    }
    op.keys = function() {
      return Object.keys(Op)
    }, op.resolve = Ip, pp.exports = op, op.id = 38774
  },
  38856: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => op,
      c: () => Ip
    });
    const Op = new WeakMap;

    function op(pp, ip) {
      return Op.set(pp, ip), pp
    }

    function Ip(pp) {
      var ip;
      return null !== (ip = Op.get(pp)) && void 0 !== ip ? ip : null
    }
  },
  38751: (pp, ip, cp) => {
    function Op(pp, ip, cp) {
      var Op;
      const {
        width: op,
        height: Ip
      } = cp, Sp = null !== (Op = pp.text) && void 0 !== Op ? Op : pp, xp = (Sp.x / 100 - .5) * op, Lp = (Sp.y / 100 - .5) * Ip, Yp = op / 2 - ip.x;
      if (null !== pp.text && Math.abs(xp) <= Yp && Lp >= ip.top - Ip / 2 && Lp <= Ip / 2 - ip.bottom) return {
        x: Sp.x,
        y: Sp.y
      };
      const Dp = Math.min(0 === xp ? 1 / 0 : Yp / Math.abs(xp), Lp > 0 ? (Ip / 2 - ip.bottom) / Lp : Lp < 0 ? (ip.top - Ip / 2) / Lp : 1 / 0);
      return !Number.isFinite(Dp) || Dp < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + xp * Dp / op * 100,
        y: 50 + Lp * Dp / Ip * 100
      }
    }
    cp.d(ip, {
      d: () => Op
    })
  },
  38767: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp
    });
    const Op = 4,
      op = 12e3,
      Ip = 1e3;
    class Sp {
      constructor() {
        let {
          limit: pp = Op,
          windowMs: ip = op,
          spacingMs: cp = Ip,
          now: Sp = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = pp, this.windowMs = ip, this.spacingMs = cp, this.now = Sp
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const pp of this.priority) pp.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const pp = this.now();
        this.sent.push(pp), this.lastSentAt = pp, this.schedule(), this.notify()
      }
      addPriority(pp) {
        return this.priority.add(pp), () => {
          this.priority.delete(pp)
        }
      }
      subscribe(pp) {
        return this.listeners.add(pp), () => {
          this.listeners.delete(pp)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const pp of this.priority)
          if (pp.waiting()) return !0;
        return !1
      }
      prune() {
        const pp = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= pp;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const pp = this.now(),
          ip = this.lastSentAt + this.spacingMs,
          cp = Math.min(ip > pp ? ip : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        cp !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, cp - pp)))
      }
      notify() {
        for (const pp of this.listeners) pp()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38745: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op
    });
    class Op {
      constructor(pp, ip, cp) {
        this.GA = pp, this.beforeOpen = ip, this.afterClose = cp, this.open = !1, this.Ry = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.Ry && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(pp) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(pp)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.Ry = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.Ry || (this.snapshot = this.buildSnapshot(), this.GA(this.snapshot))
      }
    }
  },
  38864: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      SkyblockEntityFacing: () => xp,
      needsSkyblockEntityFacing: () => Sp
    });
    var Op = cp(636),
      op = cp(4341),
      Ip = cp(38866);

    function Sp(pp, ip) {
      if (pp.metaInfo === Op.d || "Iron Guardian" === pp.type || "Gold Guardian" === pp.type) return !0;
      if ("Pig" === pp.type) return "sitting" === pp.pose;
      if ("Person" !== pp.meshKind || void 0 === pp.meshOpts) return !1;
      let cp = null === ip || void 0 === ip ? void 0 : ip.get(pp.meshOpts);
      if (void 0 === cp) {
        var Ip, Sp;
        const Op = (0, op.h)(pp);
        cp = !1, "pig_napoleon" === (null === Op || void 0 === Op || null === (Ip = Op.opts.textures) || void 0 === Ip ? void 0 : Ip.head) ? cp = !0 : "npc_pig_head" === (null === Op || void 0 === Op || null === (Sp = Op.opts.textures) || void 0 === Sp ? void 0 : Sp.head) && (cp = "sitting" === Op.opts.pose || "sitting"), ip && (ip.size >= 256 && ip.clear(), ip.set(pp.meshOpts, cp))
      }
      return "sitting" === cp ? "sitting" === pp.pose : cp
    }(0, Ip.h)("skyblock", ((pp, ip) => {
      ip.setFacingTolerance(Sp(pp) ? 0 : null)
    }));
    class xp {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = pp, this.alsoVisit = ip, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = pp => {
          var ip;
          const cp = this.api.getEntityInfo(pp);
          cp && (Sp(cp, this.meshFacingCache) && (this.api.setFacingTolerance(pp, 0), this.nextFacing.add(pp)), null === (ip = this.alsoVisit) || void 0 === ip || ip.call(this, pp, cp))
        }
      }
      LP() {
        const {
          api: pp
        } = this, ip = this.nextFacing;
        pp.forEachEntity(this.visit);
        for (const cp of this.facing) ip.has(cp) || pp.setFacingTolerance(cp, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = ip
      }
      dispose() {
        for (const pp of this.facing) this.api.setFacingTolerance(pp, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  38739: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      default: () => PL
    });
    const Op = "island";
    var op = cp(337);
    const Ip = (0, op.zb)([0, 0, -1]),
      Sp = [{
        name: "S",
        bearing: (0, op.zb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, op.zb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: Ip
      }, {
        name: "W",
        bearing: (0, op.zb)([1, 0, 0])
      }];

    function xp(pp, ip, cp) {
      return [100 * (cp.mapMaxX - pp) / (cp.mapMaxX - cp.mapMinX), 100 * (ip - cp.mapMinZ) / (cp.mapMaxZ - cp.mapMinZ)]
    }

    function Lp(pp, ip, cp) {
      const op = "local" === ip,
        Ip = pp.background,
        Sp = ip => Ip ? xp(ip[0] - pp.mapOrigin[0], ip[2] - pp.mapOrigin[2], Ip.bounds) : [50, 50],
        Lp = (pp.insideDungeon ? [] : pp.landmarks).map((pp => {
          var ip, Op;
          return {
            id: pp.id,
            name: cp(pp.visited && pp.nameKey ? null !== (ip = pp.mapLabelKey) && void 0 !== ip ? ip : pp.nameKey : "skyblockGame:mapUnknown"),
            icon: pp.visited && null !== (Op = pp.icon) && void 0 !== Op ? Op : "unknown",
            visited: pp.visited,
            current: !1,
            position: Sp(pp.position),
            travelKind: "landmark",
            travelId: pp.id
          }
        })),
        Dp = pp.zones.map((ip => {
          var Op;
          return {
            id: ip.id,
            name: cp(ip.visited && ip.nameKey ? ip.nameKey : "skyblockGame:mapUnknown"),
            icon: ip.visited && null !== (Op = ip.icon) && void 0 !== Op ? Op : "unknown",
            visited: ip.visited,
            current: ip.id === pp.zoneId,
            position: ip.position,
            thumbnail: ip.visited ? ip.id : void 0,
            travelKind: "zone",
            travelId: ip.id
          }
        })),
        Ap = pp.insideDungeon || !Ip ? [] : pp.portals.map((pp => {
          var ip;
          return {
            id: pp.id,
            name: cp(null !== (ip = pp.nameKey) && void 0 !== ip ? ip : "skyblockGame:mapUnknown"),
            icon: pp.visited ? "dungeons" === pp.destination ? "portal_orange" : "portal" : "unknown",
            visited: pp.visited,
            current: !1,
            position: Sp(pp.position),
            colour: pp.colour,
            travelKind: "zone",
            travelId: pp.destination
          }
        })),
        Pp = op ? Lp : Dp,
        Wp = Pp.filter((pp => pp.visited)).length,
        yp = Ip ? (Ip.bounds.mapMaxX - Ip.bounds.mapMinX) / (Ip.bounds.mapMaxZ - Ip.bounds.mapMinZ) : 2,
        Up = Ip ? JSON.stringify([Ip.bounds, pp.mapOrigin]) : "";
      return {
        local: op,
        points: Pp,
        portals: op ? Ap : [],
        progress: Pp.length ? cp("skyblockGame:mapDiscovered", {
          current: String(Wp),
          total: String(Pp.length)
        }) : null,
        percent: Pp.length ? 100 * Wp / Pp.length : 0,
        canTravel: [...Pp, ...op ? Ap : []].some((pp => pp.visited && !pp.current)),
        noLandmarks: op && !pp.insideDungeon && 0 === Lp.length,
        background: Ip ? {
          imageKey: Ip.imageKey,
          fallbackImageKey: pp.zoneId,
          geometryKey: Up,
          label: cp(Ip.labelKey),
          colour: Ip.backgroundColour,
          ratio: yp
        } : null,
        connections: Yp(pp.zones),
        minimap: Ip ? {
          imageKey: Ip.imageKey,
          fallbackImageKey: pp.zoneId,
          geometryKey: Up,
          label: cp(Ip.labelKey),
          colour: Ip.backgroundColour,
          caption: cp(pp.zoneId === Op ? "skyblockGame:zoneIsland" : Ip.labelKey),
          width: (Ip.bounds.mapMaxX - Ip.bounds.mapMinX) / Ip.minimapSpan * 100 + "%",
          height: (Ip.bounds.mapMaxZ - Ip.bounds.mapMinZ) / Ip.minimapSpan * 100 + "%",
          markers: [...Lp, ...Ap]
        } : null
      }
    }

    function Yp(pp) {
      const ip = new Set;
      return pp.flatMap((cp => cp.connections.flatMap((Op => {
        const op = pp.find((pp => pp.id === Op)),
          Ip = [cp.id, Op].sort().join("|");
        return !op || ip.has(Ip) ? [] : (ip.add(Ip), [{
          id: `${cp.id}-${Op}`,
          start: cp.position,
          end: op.position,
          explored: cp.visited && op.visited
        }])
      }))))
    }
    var Dp = cp(38745);
    class Ap extends Dp.b {}
    const Pp = "skyblockMapView";
    class Wp extends Ap {
      constructor(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(pp, Op, op), this.requestTravel = ip, this.translate = cp, this.now = Ip, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = pp => {
          this.tab = pp, this.feedbackKey = "", this.emit()
        }, this.travel = (pp, ip) => {
          if (!this.map || this.pending || this.Ry) return;
          const cp = ("zone" === pp ? this.map.zones : this.map.landmarks).find((pp => pp.id === ip));
          if (cp) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in cp && !cp.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (cp.visited)
              if ("zone" === pp && ip === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const cp = ++this.nextRequestId;
                this.pending = {
                  requestId: cp,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: pp,
                  id: ip,
                  requestId: cp
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
      setTranslator(pp) {
        this.translate = pp, this.emit()
      }
      Ey(pp) {
        var ip;
        if (!this.Ry)
          if ("entities" !== pp.kind)
            if ("open" !== pp.kind) {
              var cp, Op;
              if ("snapshot" === pp.kind)(null === (cp = pp.snapshot) || void 0 === cp ? void 0 : cp.zoneId) !== (null === (Op = this.map) || void 0 === Op ? void 0 : Op.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = pp.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === pp.kind) {
                var op;
                pp.requestId === (null === (op = this.pending) || void 0 === op ? void 0 : op.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (pp.requestId === (null === (ip = this.pending) || void 0 === ip ? void 0 : ip.requestId)) {
                var Ip;
                this.pending = null, this.feedbackKey = null !== (Ip = pp.errorKey) && void 0 !== Ip ? Ip : "", null === pp.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = pp.entities
      }
      LP() {
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
          presentation: this.map ? Lp(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const yp = 67.5 * Math.PI / 180;

    function Up(pp, ip) {
      const cp = Math.abs(pp);
      if (cp > yp || ip.trackHalfWidth <= 0) return null;
      const Op = ip.trackHalfWidth,
        op = ip.screenHalfWidth / (ip.tanHalfFovX * Math.max(.5, Math.cos(ip.pitch))),
        Ip = Math.min(Math.atan(.6 * Op / op), .75 * yp),
        Sp = op * Math.tan(Ip);
      let xp;
      if (cp <= Ip) xp = op * Math.tan(cp);
      else {
        const pp = yp - Ip,
          ip = Math.max(0, op * pp / (Math.cos(Ip) ** 2 * (Op - Sp)) - 1),
          Lp = (cp - Ip) / pp;
        xp = Sp + (Op - Sp) * (1 + ip) * Lp / (1 + ip * Lp)
      }
      return 50 + Math.sign(pp) * xp * 50 / Op
    }
    class wp {
      constructor(pp, ip) {
        this.map = pp, this.visited = ip, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = ip ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const pp = this.map.getSnapshot().map;
        return !pp || pp.insideDungeon ? [] : pp.landmarks.filter((pp => pp.visited === this.visited)).map((pp => {
          var ip, cp;
          return {
            id: `landmark:${pp.id}`,
            position: pp.position,
            icon: null !== (ip = pp.icon) && void 0 !== ip ? ip : "unknown",
            nameKey: null !== (cp = pp.nameKey) && void 0 !== cp ? cp : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class vp {
      constructor(pp, ip, cp, Op) {
        this.map = pp, this.kind = ip, this.position = cp, this.alive = Op, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = ip, this.range = "enemy" === ip ? 48 : 64, this.limit = 12
      }
      sH(pp) {
        if ("enemy" !== this.kind || this.alive(pp.KO)) return this.position(pp.KO)
      }
      getPoints() {
        const pp = [];
        for (const Op of this.map.getEntities()) {
          if (Op.kind !== this.kind || "enemy" === this.kind && !this.alive(Op.compassEntityId)) continue;
          const op = this.position(Op.compassEntityId);
          var ip, cp;
          if (op) pp.push({
            id: `${this.kind}:${Op.compassEntityId}`,
            KO: Op.compassEntityId,
            kind: this.kind,
            icon: null !== (ip = Op.icon) && void 0 !== ip ? ip : Op.npcSkin ? `npc_${Op.npcSkin}` : this.kind,
            displayName: Op.displayName,
            position: op,
            nameKey: null !== (cp = Op.nameKey) && void 0 !== cp ? cp : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return pp
      }
    }
    class tp {
      constructor(pp) {
        this.map = pp, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const pp = this.map.getSnapshot().map;
        return !pp || pp.insideDungeon ? [] : pp.portals.map((pp => {
          var ip;
          return {
            id: "portal:" + pp.id,
            kind: "portal",
            position: pp.position,
            nameKey: null !== (ip = pp.nameKey) && void 0 !== ip ? ip : "skyblockGame:compassUnvisitedZone",
            icon: pp.visited ? "dungeons" === pp.destination ? "portal_orange" : "portal" : "unknown",
            colour: pp.colour
          }
        }))
      }
    }
    class Hp {
      constructor(pp) {
        this.target = pp, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const pp = this.target();
        return pp ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: pp.position,
          nameKey: pp.nameKey
        }] : []
      }
    }

    function dp(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pp.position;
      const Ip = Op[0] - ip[0],
        Sp = Op[2] - ip[2];
      return {
        ...pp,
        position: Op,
        offset: op.d.computeShortestRotation(cp, (0, op.zb)([Ip, 0, Sp])),
        distance: Math.hypot(Ip, Op[1] - ip[1], Sp)
      }
    }
    let ep;

    function jp(pp, ip) {
      var cp;
      return (null === (cp = ep) || void 0 === cp ? void 0 : cp.locale) !== ip && (ep = {
        locale: ip,
        near: new Intl.NumberFormat(ip, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(ip, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (pp < 10 ? ep.near : ep.far).format(pp)
    }
    class kp {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(pp) {
        return this.providers.set(pp.id, pp), this.refreshAt = 0, () => {
          this.providers.get(pp.id) === pp && (this.providers.delete(pp.id), this.refreshAt = 0)
        }
      }
      frame(pp, ip, cp) {
        if (cp >= this.refreshAt) {
          this.refreshAt = cp + 200, this.candidates = [];
          for (const ip of this.providers.values()) {
            if (!ip.enabled) continue;
            const cp = ip.getPoints().map((ip => {
              const cp = ip.position;
              return {
                point: ip,
                distance: Math.hypot(cp[0] - pp[0], cp[1] - pp[1], cp[2] - pp[2])
              }
            })).filter((pp => pp.distance <= ip.range)).sort(((pp, ip) => pp.distance - ip.distance)).slice(0, ip.limit);
            for (const {
                point: pp
              }
              of cp) this.candidates.push({
              provider: ip,
              point: pp
            })
          }
        }
        const Op = [];
        for (const {
            point: op,
            provider: Ip
          }
          of this.candidates) {
          if (!Ip.enabled) continue;
          const cp = Ip.sH ? Ip.sH(op) : op.position;
          if (cp) {
            const Ip = dp(op, pp, ip, cp);
            Math.abs(Ip.offset) <= yp && Op.push(Ip)
          }
        }
        return Op
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var mp = cp(36804),
      Rp = cp(62);
    const qp = [{
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
      Mp = qp.length;

    function Cp(pp) {
      return pp >= Mp ? 1 : pp + 1
    }
    const Ep = "skyblockQuests",
      Xp = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      lp = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function Qp(pp) {
      let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const cp = Math.max(0, Math.floor(pp)),
        Op = Math.floor(cp % 1e3 / 100),
        op = Math.floor(cp / 1e3),
        Ip = op % 60,
        Sp = Math.floor(op / 60),
        xp = Sp % 60,
        Lp = Math.floor(Sp / 60),
        Yp = pp => pp < 10 ? `0${pp}` : String(pp),
        Dp = ip ? `.${Op}` : "";
      return Lp > 0 ? `${Lp}:${Yp(xp)}:${Yp(Ip)}${Dp}` : `${xp}:${Yp(Ip)}${Dp}`
    }
    const Jp = "devquests",
      Bp = "none",
      Np = {
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
      Tp = "Compressed Messy Stone",
      fp = {
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
      bp = ["Stone", "Diorite", "Andesite", "Granite"],
      hp = new Set(bp),
      ap = (Object.keys(fp), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const np = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function Fp(pp, ip) {
      const cp = Math.floor(5 * pp / (2 * ip + 1));
      return Math.min(4, Math.max(0, cp))
    }
    var gp = cp(1251);
    var Gp = cp(36569);
    var rp = cp(36799),
      Zp = cp(34),
      zp = cp(9002);
    const sp = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      Kp = 1e3;

    function Vp(pp) {
      return Math.max(0, pp)
    }

    function ii(pp) {
      return 1 + .01 * Vp(pp)
    }

    function ci(pp) {
      return 1 + .005 * Vp(pp)
    }

    function Oi(pp) {
      return 1 + .005 * Vp(pp)
    }

    function oi(pp) {
      return .01 * Vp(pp)
    }

    function Ii(pp) {
      return 150 / (150 + Vp(pp))
    }

    function Si(pp) {
      return 1 + .002 * Vp(pp)
    }

    function xi(pp) {
      return Math.round(10 * pp) / 10
    }

    function Li(pp, ip) {
      switch (pp) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: xi(100 * (ci(ip) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: xi(100 * (ii(ip) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: xi(100 * (Oi(ip) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: xi(100 * oi(ip))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: xi(100 * (1 - Ii(ip)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: xi(100 * (Si(ip) - 1))
          }
      }
    }

    function Yi(pp) {
      return "farming" === pp ? 200 : 100
    }

    function Di(pp, ip) {
      if (!Number.isSafeInteger(pp) || pp < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const cp = Yi(ip),
        Op = pp => function(pp, ip) {
          return Yi(pp) * ip * (ip + 1) / 2
        }(ip, pp);
      let op = Math.min(Kp, Math.floor((Math.sqrt(8 * pp / cp + 1) - 1) / 2));
      return op < Kp && Op(op + 1) <= pp ? op++ : Op(op) > pp && op--, {
        totalXp: pp,
        level: op,
        xpIntoLevel: pp - Op(op),
        xpForNextLevel: op === Kp ? null : cp * (op + 1)
      }
    }
    const Ai = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function Pi(pp) {
      return Ai.has(pp)
    }
    const Wi = new Set(op.pb);

    function yi(pp) {
      return Wi.has(pp)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const Ui = {
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
      wi = {
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
      vi = {
        ...wi,
        ...Object.fromEntries(Object.entries(ap).map((pp => {
          let [ip, cp] = pp;
          return [ip, 9 * wi[cp]]
        })))
      },
      ti = {
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
      Hi = {
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
    const di = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      ei = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function ui(pp) {
      return `rgb(${ei[pp].join(", ")})`
    }

    function ji(pp, ip, cp) {
      if (!cp) return pp(ip);
      const Op = {};
      for (const [op, Ip] of Object.entries(cp)) Op[op] = "string" === typeof Ip ? Ip : pp(Ip.translationKey);
      return pp(ip, Op)
    }
    class ki {
      constructor(pp, ip) {
        this.now = pp, this.getJournal = ip, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.sx = !1, this.onShown = () => {}
      }
      enqueue(pp) {
        const ip = mi(pp);
        if (ip) this.pending.push(pp);
        else {
          const ip = this.pending.findIndex(mi);
          this.pending.splice(-1 === ip ? this.pending.length : ip, 0, pp)
        }
        return (null === this.current || null !== this.followUp && !ip) && (this.advance(), !0)
      }
      setHeld(pp) {
        return this.sx = pp, !pp && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      LP() {
        const pp = this.getJournal(),
          ip = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === ip ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === ip || void 0 === ip ? void 0 : ip.kind) && pp && pp.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === ip || void 0 === ip ? void 0 : ip.kind)) {
          const pp = this.findFollowUp(this.current);
          if ("step" !== (null === pp || void 0 === pp ? void 0 : pp.kind) || pp.questId !== ip.questId || pp.step.id !== ip.step.id) return this.showFollowUp(pp, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(pp, ip, cp) {
        var Op, op, Ip, Sp;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, pp, cp);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, pp);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, pp, ip);
        const {
          questCompletionKind: xp,
          questCompletionNameKey: Lp
        } = this.current, Yp = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, Dp = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, Ap = "step" === (null === (Op = this.followUp) || void 0 === Op ? void 0 : Op.kind) ? this.followUp : null, Pp = "explore" === (null === (op = this.followUp) || void 0 === op ? void 0 : op.kind);
        let Wp;
        return Wp = Pp ? pp("skyblockGame:questExploreTitle") : null !== Ap ? "quest" === xp ? pp("skyblockGame:questNextQuestTitle", {
          quest: pp(Ap.questNameKey)
        }) : pp("skyblockGame:questNextStepTitle") : pp("started" === xp ? "skyblockGame:questStartedTitle" : "quest" === xp ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? xp : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: Wp,
          name: Pp ? ip("skyblockGame:questExploreName") : null !== Ap ? ji(ip, Ap.step.nameKey, Ap.step.nameParams) : ji(ip, Lp, Yp),
          description: Pp ? ip("skyblockGame:questExploreDescription") : null === Ap ? null : ji(ip, Ap.step.descriptionKey, Ap.step.descriptionParams),
          reward: null === this.followUp && Dp > 0 ? ip("skyblockGame:questCoinRewardSuffix", {
            amount: Dp.toLocaleString(cp)
          }) : null,
          iconItem: null !== (Ip = null === Ap || void 0 === Ap ? void 0 : Ap.step.questIconItem) && void 0 !== Ip ? Ip : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== Ap && (null === (Sp = this.getJournal()) || void 0 === Sp ? void 0 : Sp.trackedQuestId) === Ap.questId ? Ap.step.nameKey : null
        }
      }
      getSkillLevelView(pp, ip, cp) {
        let {
          skill: Op,
          beforeLevel: op,
          level: Ip
        } = pp;
        const Sp = Li(Op, op),
          xp = Li(Op, Ip);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: ip(`skyblockGame:${Op}`),
          name: ip("skyblockGame:skillLevelUp", {
            to: Ip.toLocaleString(cp)
          }),
          description: Sp.percent === xp.percent ? null : ip(`${xp.translationKey}Change`, {
            before: Sp.percent.toLocaleString(cp),
            after: xp.percent.toLocaleString(cp)
          }),
          reward: null,
          iconItem: di[Op],
          accent: ui(Op),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(pp, ip) {
        let {
          landmarkNameKey: cp
        } = pp;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: ip("skyblockGame:landmarkDiscovered"),
          name: ip(cp),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(pp, ip, cp) {
        let {
          titleKey: Op,
          textKey: op,
          params: Ip = {},
          nameKeys: Sp = {},
          iconItem: xp = null
        } = pp;
        const Lp = {
          ...Ip
        };
        for (const [Yp, Dp] of Object.entries(Sp)) Lp[Yp] = ip(Dp);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: ip(Op),
          name: cp(op, Lp),
          description: null,
          reward: null,
          iconItem: xp,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var pp;
        if (null !== this.followUp) return 5600;
        switch (null === (pp = this.current) || void 0 === pp ? void 0 : pp.questCompletionKind) {
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
      showFollowUp(pp, ip) {
        null === pp || this.sx ? this.advance() : (this.followUp = pp, this.token++, this.shownAt = this.now(), this.expiresAt = null !== ip && void 0 !== ip ? ip : this.shownAt + this.durationMs())
      }
      findFollowUp(pp) {
        var ip;
        const cp = this.getJournal();
        if (!cp || this.hasPendingQuestPopup() || mi(pp)) return null;
        const Op = "started" === pp.questCompletionKind ? cp.active.some((ip => ip.id === pp.questCompletionQuestId)) : "quest" === pp.questCompletionKind ? cp.completed.some((ip => ip.id === pp.questCompletionQuestId)) : [...cp.active, ...cp.completed].some((ip => ip.id === pp.questCompletionQuestId && ip.subquests.some((ip => ip.id === pp.questCompletionStepId && "completed" === ip.status))));
        if (!Op) return null;
        if ("quest" === pp.questCompletionKind && 0 === cp.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const op = cp.active.find((pp => pp.id === cp.trackedQuestId)),
          Ip = null !== (ip = null === op || void 0 === op ? void 0 : op.subquests.find((pp => "ready" === pp.status))) && void 0 !== ip ? ip : null === op || void 0 === op ? void 0 : op.subquests.find((pp => "active" === pp.status));
        return Ip ? {
          kind: "step",
          questId: op.id,
          questNameKey: op.nameKey,
          step: Ip
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((pp => !mi(pp)))
      }
      advance() {
        var pp;
        this.current = this.sx ? null : null !== (pp = this.pending.shift()) && void 0 !== pp ? pp : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function mi(pp) {
      return Ri(pp.questCompletionKind)
    }

    function Ri(pp) {
      return "skillLevel" === pp || "landmark" === pp || "npcNote" === pp
    }
    var qi = cp(38751);
    const Mi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      Ci = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      Ei = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      Xi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      li = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var Qi = cp(38756);
    var Ji = cp(38762);
    const Bi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      Ni = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const Ti = cp.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const fi = cp.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      bi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var ai = cp(18601),
      ni = cp(20687),
      Fi = cp(22986),
      gi = cp(24531),
      Gi = cp(26312);
    const ri = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: ai,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: ni,
      cow: li,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: cp(26332),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: Mi,
      fishing_1: Mi,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: Ci,
      guardian_iron: Ei,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: Fi,
      mines: gi,
      mining_1: gi,
      npc: Xi,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: li,
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
      npc_gold_guardian: Ci,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: Ei,
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
      npc_portal_mage: Qi,
      npc_rabbit_aristocrat: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAXklEQVR4nGNgIAP8h2JcfDD4P3fB+v/3csphkmB2S/tUDMX/+yYuIE7h3AXrwYqRMU4TlZSV4YpAbJwKYe4EYRC7prYLU6GLocX/ODe3/1+//wJjEBskhtXnODBpAAD3lm2BX81XrwAAAABJRU5ErkJggg==",
      npc_smuglyn: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAASklEQVR42mNgIAP8x4FRFWlqamLF6IrBgj1hoSgYq8Kv33/9txBi/z81LhaMQWyQGIbC5VmZcEUwDBLDUIiuCIRB1pOtkOjgIQgAhutlSTAZTWcAAAAASUVORK5CYII=",
      npc_tentacle_boy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAiElEQVR4nGNkQID/DNgBI5wAKXJw8Wb48vkjhqozJ4+A1bHABKI0arEad+akBdzY/ybmNgw/f/3CqpCdjQ1sKthEM4scHM5DsZ7hf23T3v9fv//6z8srAmaj80FqmGC6JMSkUExB54Ot1ubgYSgoXQkWuHXrKpiG8UFyMAA3HkbjEIMoRqMxxABOskezGUlSqQAAAABJRU5ErkJggg==",
      npc_tentacle_girl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAgklEQVR4nGNgwA3+QzEYMOGQ/H9viS7Dp4N+MDEGFmRFO8PqGYTFRBjevnrDwMCwjuHN4/twSRZsikD07U1BUKnLKArBQExYAIxh7OvX78DlUNzoMbEWKxtDYb11MFY2htXPPr5nOH7mApiW4hdECxAkX/fbJIGDYqV3MYwND0eiAQAf4TQGGrZ+tQAAAABJRU5ErkJggg==",
      npc_tentacle_guy: Ji,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: Bi,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: Ti,
      quest_talk: fi,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: bi,
      watermelon: Gi
    };

    function Zi(pp, ip) {
      const cp = document.createElement("img");
      return cp.className = ip, cp.src = pp, cp.alt = "", cp.draggable = !1, cp
    }

    function zi(pp) {
      var ip;
      const cp = null !== (ip = ri[pp]) && void 0 !== ip ? ip : pp.startsWith("npc_") ? Xi : bi;
      if ("portal" !== pp) return Zi(cp, "SkyblockMapIcon");
      const Op = document.createElement("span");
      Op.className = "SkyblockMapIcon Portal";
      const op = document.createElement("span");
      return op.className = "SkyblockMapIconTint", op.style.maskImage = op.style.webkitMaskImage = `url("${Ni}")`, Op.append(Zi(cp, "SkyblockMapIconLayer"), op, Zi(Ni, "SkyblockMapIconLayer SkyblockMapIconShade")), Op
    }
    var si = cp(38729),
      Ki = cp(4346);
    const Vi = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function pc(pp) {
      const ip = new Ki.h(pp);
      return {
        radius: 45,
        squareness: 3,
        wobbles: Vi.map((pp => {
          let {
            lobes: cp,
            amount: Op
          } = pp;
          return {
            lobes: cp[Math.floor(ip.next() * cp.length)],
            amount: Op[0] + ip.next() * (Op[1] - Op[0]),
            phase: 2 * ip.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function ic(pp) {
      let {
        radius: ip,
        squareness: cp,
        wobbles: Op,
        samples: op
      } = pp;
      const Ip = [];
      for (let Sp = 0; Sp < op; Sp++) {
        const pp = 2 * Math.PI * Sp / op,
          xp = Math.cos(pp),
          Lp = Math.sin(pp),
          Yp = ip * (Math.abs(xp) ** cp + Math.abs(Lp) ** cp) ** (-1 / cp) * Op.reduce(((ip, cp) => {
            let {
              lobes: Op,
              amount: op,
              phase: Ip
            } = cp;
            return ip + op * Math.sin(Op * pp + Ip)
          }), 1);
        Ip.push(`${(50+Yp*xp).toFixed(2)} ${(50+Yp*Lp).toFixed(2)}`)
      }
      return `M${Ip.join("L")}Z`
    }
    const cc = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class Oc {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.Ry = !1, this.mountCompass = pp => {
          var ip;
          if (null === (ip = this.stopLayout) || void 0 === ip || ip.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !pp || this.Ry) return;
          const cp = pp.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: pp,
            track: cp,
            label: pp.querySelector(".SkyblockCompassLabel")
          }, cp.replaceChildren();
          for (let op = 0; op < 4; op++) {
            const pp = document.createElement("span");
            pp.className = "SkyblockCompassCardinal", cp.appendChild(pp), this.cardinals.push(pp)
          }
          const Op = (0, si.d)(cc, [pp], this.layout);
          this.stopLayout = () => {
            Op(), cp.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = pp => {
          this.terrain = this.Ry ? null : pp, this.render(this.frame)
        }, this.mountMinimapSearchArea = pp => {
          this.mountSearchArea("minimap", pp)
        }, this.mountMapSearchArea = pp => {
          this.mountSearchArea("map", pp)
        }, this.mountPlayer = pp => {
          this.player = this.Ry ? null : pp, this.render(this.frame)
        }, this.mountWaypoint = pp => {
          var ip, cp;
          if (null === (ip = this.stopWaypoint) || void 0 === ip || ip.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !pp || this.Ry) return;
          const Op = pp.querySelector(".SkyblockQuestWaypointMarker");
          Op.replaceChildren(zi("quest")), this.markerIcon = "quest", this.waypoint = {
            root: pp,
            marker: Op,
            clip: pp.querySelector(".SkyblockQuestWaypointTextClip"),
            text: pp.querySelector(".SkyblockQuestWaypointText"),
            label: pp.querySelector(".SkyblockQuestWaypointLabel"),
            distance: pp.querySelector(".SkyblockQuestWaypointDistance"),
            hint: pp.querySelector(".SkyblockQuestWaypointHint")
          };
          const op = () => {
              this.waypointMarkerSize = {
                width: Op.offsetWidth,
                height: Op.offsetHeight
              }, this.waypointInset = {
                x: Op.offsetWidth / 2 + 8,
                top: Op.offsetHeight + 8,
                bottom: 8
              }
            },
            Ip = new ResizeObserver((() => {
              op(), this.render(this.frame)
            }));
          Ip.observe(Op, {
            box: "border-box"
          });
          const Sp = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", Sp), null === (cp = window.visualViewport) || void 0 === cp || cp.addEventListener("resize", Sp), this.stopWaypoint = () => {
            var pp;
            Ip.disconnect(), window.removeEventListener("resize", Sp), null === (pp = window.visualViewport) || void 0 === pp || pp.removeEventListener("resize", Sp)
          }, Sp(), op(), this.render(this.frame)
        }, this.mountWaypointOrigin = pp => {
          var ip;
          if (null === (ip = this.stopWaypointOrigin) || void 0 === ip || ip.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = pp && !this.Ry ? Number(pp.dataset.notificationToken) : null, pp && !this.Ry && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const ip = {
              nameKey: pp.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = ip;
            const cp = () => {
                const cp = pp.getBoundingClientRect();
                ip.x = (cp.left + cp.width / 2) / window.innerWidth * 100, ip.y = (cp.top + cp.height / 2) / window.innerHeight * 100
              },
              Op = new ResizeObserver(cp);
            Op.observe(pp.parentElement), Op.observe(pp), window.addEventListener("resize", cp), this.stopWaypointOrigin = () => {
              Op.disconnect(), window.removeEventListener("resize", cp)
            }, cp()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const pp = this.compass.root,
            ip = getComputedStyle(pp),
            cp = getComputedStyle(document.documentElement),
            Op = parseFloat(cp.fontSize),
            op = parseFloat(ip.getPropertyValue("--compass-icon-size")) * Op,
            Ip = "1" === ip.getPropertyValue("--compass-fit-top").trim(),
            Sp = Ip ? 1 : 8,
            xp = Array.from(document.querySelectorAll(cc), (pp => {
              var ip;
              return (null !== (ip = pp.querySelector(".MiddleTextTop")) && void 0 !== ip ? ip : pp).getBoundingClientRect()
            })).filter((pp => pp.width > 0 && pp.height > 0));
          let Lp = (parseFloat(cp.getPropertyValue("--notchTop")) || 0) + Sp,
            Yp = "";
          if (Ip) {
            const ip = window.innerWidth / 2,
              cp = pp.getBoundingClientRect().height,
              Ip = [Lp, ...xp.map((pp => Math.max(Lp, pp.bottom + Sp)))].sort(((pp, ip) => pp - ip));
            for (const pp of Ip) {
              let Ip = ip - 8;
              for (const Op of xp) Op.bottom + Sp <= pp || Op.top >= pp + cp + Sp || (Ip = Math.min(Ip, Op.right <= ip ? ip - Op.right - 8 : Op.left - ip - 8));
              const Dp = 2 * Ip - op;
              if (Dp >= 16 * Op) {
                Yp = `${Dp}px`, Lp = pp;
                break
              }
            }
          }
          pp.style.maxWidth !== Yp && (pp.style.maxWidth = Yp);
          const Dp = pp.getBoundingClientRect(),
            Ap = this.compassSize.trackHalfWidth;
          if (Dp.width > 0) {
            const pp = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: pp.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * op / pp.width
          }
          if (!Yp)
            for (const Pp of xp) Pp.right > Dp.left - 8 && Pp.left < Dp.right + 8 && (Lp = Math.max(Lp, Pp.bottom + Sp));
          pp.style.top = `${Lp}px`, this.compassSize.trackHalfWidth !== Ap && this.render(this.frame)
        }
      }
      mountSearchArea(pp, ip) {
        this.searchAreas[pp] = this.Ry ? null : ip, this.render(this.frame)
      }
      render(pp) {
        if (this.Ry) return;
        if (this.frame = pp, this.compass && (oc(this.compass.root, !pp), pp)) {
          const ip = this.compassSize.trackHalfWidth / 50;
          pp.compass.cardinals.forEach(((pp, cp) => {
            const Op = this.cardinals[cp];
            Op.textContent !== pp.name && (Op.textContent = pp.name), oc(Op, pp.hidden), Op.style.translate = pp.left * ip + "px"
          }));
          const cp = new Set;
          pp.compass.markers.forEach(((Op, op) => {
            var Ip;
            cp.add(Op.id);
            let Sp = this.markers.get(Op.id);
            Sp || (Sp = document.createElement("span"), Sp.className = "SkyblockCompassMarker", this.markers.set(Op.id, Sp), this.compass.track.appendChild(Sp)), Sp.dataset.icon !== Op.icon && (Sp.dataset.icon = Op.icon, Sp.replaceChildren(zi(Op.icon))), Sp.style.color = null !== (Ip = Op.colour) && void 0 !== Ip ? Ip : "", Sp.style.translate = Op.left * ip + "px", Sp.style.zIndex = String(pp.compass.markers.length - op), Sp.title !== Op.name && (Sp.title = Op.name)
          }));
          for (const [pp, Op] of this.markers) cp.has(pp) || (Op.remove(), this.markers.delete(pp));
          this.compass.label.textContent !== pp.compass.label && (this.compass.label.textContent = pp.compass.label)
        }
        this.terrain && (oc(this.terrain, !(null !== pp && void 0 !== pp && pp.minimap)), null !== pp && void 0 !== pp && pp.minimap && (this.terrain.style.transform = pp.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", pp.minimap.iconRotation)));
        const ip = null === pp || void 0 === pp ? void 0 : pp.searchArea;
        for (const cp of [this.searchAreas.minimap, this.searchAreas.map])
          if (cp && (oc(cp, !ip), ip)) {
            if (this.searchAreaPath.seed !== ip.shapeSeed && (this.searchAreaPath = {
                seed: ip.shapeSeed,
                d: ic(pc(ip.shapeSeed))
              }), cp.dataset.shapeSeed !== ip.shapeSeed) {
              cp.dataset.shapeSeed = ip.shapeSeed;
              for (const pp of cp.querySelectorAll("path")) pp.setAttribute("d", this.searchAreaPath.d)
            }
            cp.style.left = `${ip.left}%`, cp.style.top = `${ip.top}%`, cp.style.width = `${ip.width}%`, cp.style.height = `${ip.height}%`
          } if (this.player && (oc(this.player, !(null !== pp && void 0 !== pp && pp.player) || pp.player.hidden), null !== pp && void 0 !== pp && pp.player && (this.player.style.left = `${pp.player.left}%`, this.player.style.top = `${pp.player.top}%`, this.player.style.setProperty("--map-player-rotation", pp.player.rotation))), this.waypoint) {
          const {
            root: ip,
            marker: cp,
            clip: Op,
            text: op,
            label: Ip,
            distance: Sp,
            hint: xp
          } = this.waypoint, Lp = !(null !== pp && void 0 !== pp && pp.waypoint) || null !== pp.waypoint.popupToken && pp.waypoint.popupToken !== this.waypointOriginToken;
          oc(ip, Lp);
          let Yp = 1;
          const Dp = this.waypointLaunch;
          if (!Lp && Dp && pp.waypoint.nameKey === Dp.nameKey) {
            const pp = performance.now();
            Dp.startedAt ??= pp, Yp = Math.min(1, Math.max(0, (pp - Dp.startedAt - 450) / 1e3)), cp.style.opacity = String(Math.min(1, (pp - Dp.startedAt) / 150)), 1 === Yp && (this.waypointLaunch = null)
          } else cp.style.opacity = "", Dp && null !== Dp.startedAt && (this.waypointLaunch = null);
          if (ip.classList.toggle("Launching", Yp < 1), null !== pp && void 0 !== pp && pp.waypoint) {
            const ip = this.waypointInset,
              Lp = "quest_talk" === pp.waypoint.markerIcon ? function(pp, ip, cp) {
                if (!pp.text || null === pp.blockHeight || 0 === pp.nearness) return pp;
                const Op = pp.blockHeight / 100 * cp.height,
                  op = -pp.nearness * (Ic * Op + ip.width / 2),
                  Ip = pp.nearness * (Sc * Op + ip.height / 2);
                return {
                  ...pp,
                  text: {
                    x: pp.text.x + op / cp.width * 100,
                    y: pp.text.y + Ip / cp.height * 100
                  }
                }
              }(pp.waypoint, this.waypointMarkerSize, this.viewport) : pp.waypoint,
              Ap = (0, qi.d)(Lp, ip, this.viewport),
              Pp = Yp * Yp * (3 - 2 * Yp),
              Wp = Yp < 1 ? Dp.x + (Ap.x - Dp.x) * Pp : Ap.x,
              yp = Yp < 1 ? Dp.y + (Ap.y - Dp.y) * Pp : Ap.y;
            cp.style.translate = `${Wp}vw ${yp}vh`, Op.style.clipPath = `inset(${ip.top}px ${ip.x}px ${ip.bottom}px)`, oc(op, Yp < 1 || !pp.waypoint.text), op.style.opacity = String(1 - pp.waypoint.nearness), pp.waypoint.text && (op.style.translate = `${pp.waypoint.text.x}vw ${pp.waypoint.text.y}vh`), Ip.textContent !== pp.waypoint.name && (Ip.textContent = pp.waypoint.name), this.markerIcon !== pp.waypoint.markerIcon && (this.markerIcon = pp.waypoint.markerIcon, cp.replaceChildren(zi(this.markerIcon))), Sp.textContent !== pp.waypoint.distance && (Sp.textContent = pp.waypoint.distance), oc(xp, null === pp.waypoint.hint), null !== pp.waypoint.hint && xp.textContent !== pp.waypoint.hint && (xp.textContent = pp.waypoint.hint)
          }
        }
      }
      dispose() {
        var pp, ip;
        this.mountWaypointOrigin(null), this.render(null), null === (pp = this.stopLayout) || void 0 === pp || pp.call(this), this.stopLayout = null, null === (ip = this.stopWaypoint) || void 0 === ip || ip.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.Ry = !0
      }
    }

    function oc(pp, ip) {
      pp.hidden !== ip && (pp.hidden = ip)
    }
    const Ic = .55,
      Sc = .6;
    const xc = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class Lc {
      constructor(pp, ip, cp, Op) {
        this.map = pp, this.quests = ip, this.compass = cp, this.display = new Oc, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.Ry = !1, this.snapshot = null, this.texts = new Map, this.translate = Op
      }
      setTranslator(pp, ip) {
        this.translate = pp, this.locale = ip, this.metresFormat = new Intl.NumberFormat(ip), this.texts.clear()
      }
      translateCached(pp, ip) {
        const cp = void 0 === ip ? pp : `${pp} ${ip}`;
        let Op = this.texts.get(cp);
        return void 0 === Op && (this.texts.size >= 500 && this.texts.clear(), Op = this.translate(pp, void 0 === ip ? void 0 : {
          distance: ip
        }), this.texts.set(cp, Op)), Op
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(pp, ip, cp) {
        if (this.Ry) return;
        if (!pp) return this.snapshot = null, void this.display.render(null);
        const Op = this.map.getSnapshot().map,
          Lp = cp.cameraHeading,
          Yp = {
            ...this.display.compassSize,
            tanHalfFovX: cp.tanHalfFovX,
            pitch: cp.cameraPitch
          },
          Dp = [];
        if (Op)
          for (const op of this.compass.frame(pp, Lp, ip)) {
            const pp = Up(op.offset, Yp);
            null !== pp && Dp.push({
              ...op,
              left: pp
            })
          }
        const Ap = function(pp, ip) {
            const cp = [],
              Op = pp => "quest" === pp.kind ? pp.distance - 1 : pp.distance,
              op = [...pp].sort(((pp, ip) => Op(pp) - Op(ip) || pp.id.localeCompare(ip.id)));
            for (const Ip of op) {
              let pp = !1;
              if ("quest" !== Ip.kind)
                for (const Op of cp)
                  if (Math.abs(Op.left - Ip.left) < ip) {
                    pp = !0;
                    break
                  } pp || cp.push(Ip)
            }
            return cp
          }(Dp, this.display.compassSpacing),
          Pp = function(pp) {
            let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              cp = null;
            for (const Op of pp) Math.abs(Op.offset) <= ip && (!cp || Op.distance < cp.distance || Op.distance === cp.distance && Math.abs(Op.offset) < Math.abs(cp.offset)) && (cp = Op);
            return cp
          }(Ap),
          Wp = pp => {
            var ip;
            return null !== (ip = pp.displayName) && void 0 !== ip ? ip : this.translateCached(pp.nameKey)
          },
          yp = {
            compass: {
              markers: Ap.map((pp => ({
                id: pp.id,
                icon: pp.icon,
                colour: pp.colour,
                name: Wp(pp),
                left: pp.left
              }))),
              cardinals: Sp.map((pp => {
                let {
                  name: ip,
                  bearing: cp
                } = pp;
                const Op = Up(op.d.computeShortestRotation(Lp, cp), Yp);
                return {
                  name: ip,
                  left: null !== Op && void 0 !== Op ? Op : 0,
                  hidden: null === Op
                }
              })),
              label: Pp ? `${Wp(Pp)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",jp(Pp.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== Op && void 0 !== Op && Op.background) {
          const ip = pp[0] - Op.mapOrigin[0],
            cp = pp[2] - Op.mapOrigin[2],
            {
              rotation: op,
              transform: Sp
            } = function(pp, ip, cp, Op) {
              const [op, Sp] = xp(pp, ip, Op), Lp = Ip - cp;
              return {
                rotation: Lp,
                transform: `rotate(${Lp}rad) translate(-${op}%, -${Sp}%)`
              }
            }(ip, cp, Lp, Op.background.bounds);
          yp.minimap = {
            transform: Sp,
            iconRotation: -op + "rad"
          };
          const [Yp, Dp] = xp(ip, cp, Op.background.bounds);
          yp.player = {
            left: Yp,
            top: Dp,
            hidden: Yp < 0 || Dp < 0 || Yp > 100 || Dp > 100,
            rotation: -op + "rad"
          }
        }
        const {
          waypoint: wp
        } = this.quests.getSnapshot();
        if ("search" === (null === wp || void 0 === wp ? void 0 : wp.questMarkerIcon) && null !== Op && void 0 !== Op && Op.background) {
          const {
            bounds: pp
          } = Op.background, [ip, cp] = xp(wp.position[0] - Op.mapOrigin[0], wp.position[2] - Op.mapOrigin[2], pp);
          yp.searchArea = {
            left: ip,
            top: cp,
            width: 6400 / (pp.mapMaxX - pp.mapMinX),
            height: 6400 / (pp.mapMaxZ - pp.mapMinZ),
            shapeSeed: wp.nameKey
          }
        }
        const vp = this.quests.getNotificationSnapshot(),
          tp = "completion" === (null === vp || void 0 === vp ? void 0 : vp.phase) && !Ri(vp.kind);
        if (wp && !tp) {
          const ip = Math.hypot(...wp.position.map(((ip, cp) => ip - pp[cp]))),
            Op = Math.round(ip),
            op = "talk" === wp.questMarkerIcon ? Math.min(1, Math.max(0, (10 - ip) / 5)) : 0,
            Ip = cp.projectWorldPosToViewport(wp.position),
            Sp = Ip && cp.projectWorldPosToViewport([wp.position[0], wp.position[1] - 1, wp.position[2]]);
          yp.waypoint = {
            ...cp.projectWorldPosToScreenPos(wp.position),
            text: Ip,
            nearness: op * op * (3 - 2 * op),
            blockHeight: Ip && Sp ? Sp.y - Ip.y : null,
            name: this.translateCached(wp.nameKey),
            nameKey: wp.nameKey,
            markerIcon: wp.questMarkerIcon ? xc[wp.questMarkerIcon] : "quest",
            popupToken: (null === vp || void 0 === vp ? void 0 : vp.waypointNameKey) === wp.nameKey ? vp.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(Op)),
            hint: "search" === wp.questMarkerIcon && Math.hypot(wp.position[0] - pp[0], wp.position[2] - pp[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = yp, this.display.render(yp)
      }
      dispose() {
        this.Ry = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const Yc = "skyblockSkillsView";
    class Dc extends Ap {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          cp = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pp => pp,
          Op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          op = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : pp => pp;
        super(pp, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = ip, this.translate = cp, this.locale = Op, this.itemName = op, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = pp => {
          this.selected = pp, this.emit()
        }
      }
      setTranslator(pp, ip, cp) {
        this.translate = pp, this.locale = ip, this.itemName = cp, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(pp) {
        let ip = this.skillText.get(pp);
        return ip || (ip = {
          label: this.translate(`skyblockGame:${pp}`),
          description: this.translate(`skyblockGame:${pp}Description`)
        }, this.skillText.set(pp, ip)), ip
      }
      sources(pp) {
        if ("mining" === pp || "fishing" === pp) return this.buildSources(pp);
        let ip = this.sourceText.get(pp);
        return ip || (ip = this.buildSources(pp), this.sourceText.set(pp, ip)), ip
      }
      buildSources(pp) {
        const ip = this.translate;
        return "exploration" === pp ? [ip("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), ip("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === pp ? [ip("skyblockGame:logSource", {
          xp: this.number(Ui["Maple Log"])
        })] : "combat" === pp ? [ip("skyblockGame:creatureKillSource"), ip("skyblockGame:noEnvironmentalXp")] : "farming" === pp ? [ip("skyblockGame:cropSource", {
          xp: this.number(ti["Wheat|FreshlyGrown"])
        }), ip("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), ip("skyblockGame:noYoungCropXp")] : Object.entries("mining" === pp ? vi : Hi).map((pp => {
          let [cp, Op] = pp;
          return ip("skyblockGame:itemXpSource", {
            item: this.itemName(cp),
            xp: this.number(Op)
          })
        }))
      }
      number(pp) {
        return pp.toLocaleString(this.locale)
      }
      benefit(pp, ip) {
        const cp = Li(pp, ip);
        return this.translate(cp.translationKey, {
          bonus: this.number(cp.percent)
        })
      }
      Ey(pp) {
        if (!this.Ry) {
          if ("snapshot" === pp.kind) this.progress = pp.progress, this.pending.clear(), this.recent = null;
          else if ("award" === pp.kind && this.progress) {
            const {
              award: ip
            } = pp;
            this.progress = {
              ...this.progress,
              [ip.skill]: ip.after
            };
            for (const [pp, Op] of this.pending) Op.skill === ip.skill && this.pending.delete(pp);
            const cp = ip.after.level > ip.before.level;
            this.recordGain(ip.skill, ip.amount, cp ? ++this.nextLevelUpToken : null), cp && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: ip.skill,
              beforeLevel: ip.before.level,
              level: ip.after.level
            })
          } else {
            if ("rejectBlock" === pp.kind) return void this.rejectBlock(pp.position);
            if ("open" === pp.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(pp, ip, cp) {
        if (!this.progress || this.Ry || cp) return;
        const Op = function(pp, ip) {
          const cp = pp.split("|")[0];
          return "Air" === ip || ip === `Barkless ${pp}` ? Object.hasOwn(Ui, cp) ? {
            skill: "foraging",
            amount: Ui[cp]
          } : "Air" !== ip ? null : Object.hasOwn(vi, pp) ? {
            skill: "mining",
            amount: vi[pp]
          } : Pi(pp) ? {
            skill: "farming",
            amount: 10
          } : yi(pp) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(ti, pp) ? {
            skill: "farming",
            amount: ti[pp]
          } : Object.hasOwn(fp, pp) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(ip, "Air");
        if (!Op) return;
        const op = pp.join(",");
        if (this.pending.has(op)) return;
        const Ip = this.predictedProgress(Op.skill).totalXp + Op.amount;
        Number.isSafeInteger(Ip) && (this.pending.set(op, {
          ...Op,
          expires: this.now() + 2e3
        }), this.recordGain(Op.skill, 0), this.emit())
      }
      rejectBlock(pp) {
        this.pending.delete(pp.join(",")) && this.emit()
      }
      LP() {
        if (this.Ry) return;
        let pp = !1;
        for (const [ip, cp] of this.pending) cp.expires <= this.now() && (this.pending.delete(ip), pp = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, pp = !0), pp && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(pp, ip) {
        var cp, Op;
        let op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Ip = (null === (cp = this.recent) || void 0 === cp ? void 0 : cp.skill) === pp && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          Sp = (null === (Op = this.recent) || void 0 === Op ? void 0 : Op.skill) === pp && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: pp,
          confirmed: Ip + ip,
          expires: this.now() + 3e3,
          levelUpToken: null !== op && void 0 !== op ? op : Sp
        }
      }
      pendingXp(pp) {
        let ip = 0;
        for (const cp of this.pending.values()) cp.skill === pp && (ip += cp.amount);
        return ip
      }
      predictedProgress(pp) {
        const ip = this.progress[pp],
          cp = this.pendingXp(pp);
        return cp ? Di(ip.totalXp + cp, pp) : ip
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var pp, ip, cp;
        const Op = this.progress ? sp.map((pp => {
            const ip = this.predictedProgress(pp);
            return {
              ...this.text(pp),
              icon: di[pp],
              benefit: this.benefit(pp, ip.level),
              sources: this.sources(pp),
              id: pp,
              selected: pp === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(ip.level)
              }),
              xp: null === ip.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(ip.xpIntoLevel),
                target: this.number(ip.xpForNextLevel)
              }),
              percent: null === ip.xpForNextLevel ? 100 : Math.min(100, ip.xpIntoLevel / ip.xpForNextLevel * 100)
            }
          })) : [],
          op = Op.find((pp => {
            var ip;
            return pp.id === (null === (ip = this.recent) || void 0 === ip ? void 0 : ip.skill)
          })),
          Ip = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: Op,
          detail: null !== (pp = Op.find((pp => pp.selected))) && void 0 !== pp ? pp : null,
          overallLevel: this.progress ? sp.reduce(((pp, ip) => pp + this.predictedProgress(ip).level), 0) : null,
          hud: op && Ip > 0 ? {
            skill: op,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(Ip)
            }),
            levelUpToken: null !== (ip = null === (cp = this.recent) || void 0 === cp ? void 0 : cp.levelUpToken) && void 0 !== ip ? ip : null,
            colour: ui(op.id)
          } : null
        }
      }
    }
    const Ac = Math.max(1600, 600, 950) + 400,
      Pc = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      Wc = "skyblockQuestsView",
      yc = "skyblockQuestNotificationView";
    class Uc extends Ap {
      constructor(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          Sp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(pp, Op, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = ip, this.translate = cp, this.now = op, this.locale = Ip, this.publishNotification = Sp, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var pp, ip;
          this.selected = null !== (pp = null === (ip = this.authoritative) || void 0 === ip ? void 0 : ip.trackedQuestId) && void 0 !== pp ? pp : null, this.show()
        }, this.select = pp => {
          this.selected = pp, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const pp = this.snapshot.detail;
          !this.Ry && null !== pp && void 0 !== pp && pp.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(pp.id), this.emit())
        }, this.viewDialogue = () => {
          const pp = this.snapshot.detail;
          var ip;
          pp && (null === (ip = this.onViewDialogue) || void 0 === ip || ip.call(this, pp.id))
        }, this.notifications = new ki(op, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var pp, ip;
        return null !== (pp = null === (ip = this.authoritative) || void 0 === ip ? void 0 : ip.trackedQuestId) && void 0 !== pp ? pp : null
      }
      notify(pp) {
        !this.Ry && this.notifications.enqueue(pp) && this.emitNotification()
      }
      setNotificationsHeld(pp) {
        (this.notifications.setHeld(pp) || pp) && this.emitNotification()
      }
      LP() {
        var pp, ip;
        if (this.Ry) return;
        this.notifications.LP() && this.emitNotification();
        let cp = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, cp = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, cp = !0);
        const Op = wc(this.authoritative);
        null !== Op && void 0 !== Op && null !== (pp = Op.questClock) && void 0 !== pp && pp.running && this.clockText(Op) !== (null === (ip = this.snapshot.tracked) || void 0 === ip ? void 0 : ip.clock) && (cp = !0), cp && this.emit()
      }
      setTranslator(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = pp, this.locale = ip, this.emitNotification(), this.emit()
      }
      Ey(pp) {
        if (!this.Ry)
          if ("completion" === pp.kind) this.notify(pp.questCompletion);
          else if ("landmark" === pp.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: pp.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === pp.kind) {
          var ip, cp, Op;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: pp.npcNoteTitleKey,
            textKey: pp.npcNoteTextKey,
            params: null !== (ip = pp.npcNoteParams) && void 0 !== ip ? ip : {},
            nameKeys: null !== (cp = pp.npcNoteNameKeys) && void 0 !== cp ? cp : {},
            iconItem: null !== (Op = pp.npcNoteIconItem) && void 0 !== Op ? Op : null
          })
        } else if ("open" === pp.kind) this.show();
        else if ("guidance" === pp.kind) this.waypoint = pp.waypoint, this.compassTarget = pp.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === pp.kind) {
          this.authoritative = pp.snapshot, this.notifications.LP() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const ip = this.trackedStepPulse;
          this.updateTrackedStepPulse(pp.snapshot), this.emit(), this.trackedStepPulse > ip && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.Ry || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var pp;
        return null !== (pp = this.translateWithIcons) && void 0 !== pp ? pp : this.translate
      }
      clockText(pp) {
        const ip = pp.questClock;
        if (!ip) return null;
        const cp = ip.elapsedMs + (ip.running ? this.now() - this.receivedAt : 0);
        return void 0 === ip.countdownFromMs ? Qp(cp, !1) : Qp(1e3 * Math.ceil(Math.max(0, ip.countdownFromMs - cp) / 1e3), !1)
      }
      updateTrackedStepPulse(pp) {
        var ip, cp, Op;
        const op = wc(pp);
        if (!op) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const Ip = pp => op.subquests.filter((ip => pp(ip.status))).map((pp => pp.id)),
          Sp = Ip((pp => "completed" === pp || "skipped" === pp)),
          xp = Ip((pp => "locked" !== pp)),
          Lp = (null === (ip = this.trackedSteps) || void 0 === ip ? void 0 : ip.questId) === op.id && op.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (Lp) {
          const pp = Sp.filter((pp => !Lp.finished.has(pp))),
            ip = Ip((pp => "active" === pp || "ready" === pp)).filter((pp => !Lp.unlocked.has(pp)));
          pp.length > 0 && this.trackedStepPulse++, (pp.length > 0 || ip.length > 0) && (this.trackedChange = {
            finished: new Set(pp),
            unlocked: new Set(ip),
            expiresAt: this.now() + Ac
          })
        } else {
          var Yp;
          this.trackedStepPulse = (null === (Yp = this.trackedSteps) || void 0 === Yp ? void 0 : Yp.questId) === op.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: op.id,
          progress: op.progress,
          finished: new Set([...null !== (cp = null === Lp || void 0 === Lp ? void 0 : Lp.finished) && void 0 !== cp ? cp : [], ...Sp]),
          unlocked: new Set([...null !== (Op = null === Lp || void 0 === Lp ? void 0 : Lp.unlocked) && void 0 !== Op ? Op : [], ...xp])
        }
      }
      entry(pp, ip) {
        var cp, Op;
        const op = pp.id === (null === (cp = this.authoritative) || void 0 === cp ? void 0 : cp.trackedQuestId),
          Ip = this.now() < this.trackAvailableAt,
          Sp = this.questTextTranslator(),
          xp = pp.subquests.map((ip => {
            var cp, Op, Ip, xp, Lp, Yp;
            const Dp = null !== (cp = ip.handInNpcName) && void 0 !== cp ? cp : pp.giverName,
              Ap = this.translate("skyblockGame:progress", {
                current: ip.progress.toLocaleString(this.locale),
                target: ip.target.toLocaleString(this.locale)
              }),
              Pp = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: Dp ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [ip.status],
              Wp = "active" === ip.status || "ready" === ip.status;
            return {
              id: ip.id,
              name: ji(Sp, ip.nameKey, ip.nameParams),
              description: ji(Sp, ip.descriptionKey, ip.descriptionParams),
              progress: Ap,
              status: ip.status,
              statusLabel: Pp ? this.translate(Pp, {
                npc: Dp
              }) : Ap,
              iconItem: Wp && null !== (Op = ip.questIconItem) && void 0 !== Op ? Op : null,
              barPercent: "active" === ip.status && ip.showsProgressBar ? Math.min(100, 100 * ip.progress / ip.target) : null,
              justFinished: op && null !== (Ip = null === (xp = this.trackedChange) || void 0 === xp ? void 0 : xp.finished.has(ip.id)) && void 0 !== Ip && Ip,
              justUnlocked: op && null !== (Lp = null === (Yp = this.trackedChange) || void 0 === Yp ? void 0 : Yp.unlocked.has(ip.id)) && void 0 !== Lp && Lp
            }
          }));
        return {
          id: pp.id,
          name: ji(Sp, pp.nameKey, pp.nameParams),
          description: ji(Sp, pp.descriptionKey, pp.descriptionParams),
          progress: ip ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: pp.progress.toLocaleString(this.locale),
            target: pp.target.toLocaleString(this.locale)
          }),
          completed: ip,
          tracked: op,
          selected: pp.id === this.selected,
          canTrack: !ip && !op && !Ip,
          trackLabel: this.translate(op ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : Ip ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== pp.id,
          subquests: xp,
          focusStep: null !== (Op = xp.find((pp => null !== pp.barPercent))) && void 0 !== Op ? Op : null,
          clock: this.clockText(pp)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp;
        const Dp = [...null !== (pp = null === (ip = this.authoritative) || void 0 === ip ? void 0 : ip.active) && void 0 !== pp ? pp : [], ...null !== (cp = null === (Op = this.authoritative) || void 0 === Op ? void 0 : Op.completed) && void 0 !== cp ? cp : []];
        var Ap, Pp, Wp, yp;
        Dp.some((pp => pp.id === this.selected)) || (this.selected = null !== (Ap = null !== (Pp = null === (Wp = this.authoritative) || void 0 === Wp ? void 0 : Wp.trackedQuestId) && void 0 !== Pp ? Pp : null === (yp = Dp[0]) || void 0 === yp ? void 0 : yp.id) && void 0 !== Ap ? Ap : null);
        const Up = null !== (op = null === (Ip = this.authoritative) || void 0 === Ip ? void 0 : Ip.active.map((pp => this.entry(pp, !1)))) && void 0 !== op ? op : [];
        Up.sort(((pp, ip) => Number(ip.tracked) - Number(pp.tracked)));
        const wp = null !== (Sp = null === (xp = this.authoritative) || void 0 === xp ? void 0 : xp.completed.map((pp => this.entry(pp, !0)))) && void 0 !== Sp ? Sp : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: Up,
          completed: wp,
          completedExpanded: this.completedExpanded,
          detail: null !== (Lp = [...Up, ...wp].find((pp => pp.selected))) && void 0 !== Lp ? Lp : null,
          tracked: null !== (Yp = Up.find((pp => pp.tracked))) && void 0 !== Yp ? Yp : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function wc(pp) {
      var ip;
      return null !== (ip = null === pp || void 0 === pp ? void 0 : pp.active.find((ip => ip.id === pp.trackedQuestId))) && void 0 !== ip ? ip : null
    }
    const vc = "skyblockDungeonsView";
    class tc extends Ap {
      constructor(pp, ip) {
        let cp = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          Op = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(pp, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = ip, this.locale = cp, this.requestEnter = Op, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = pp => {
          this.selected = pp, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const pp = this.pickerEntry(),
            ip = null === pp || void 0 === pp ? void 0 : pp.difficulties[this.pageIndex];
          void 0 !== ip && null !== ip.unlockedBoss && (this.close(), this.requestEnter(pp.id, ip.difficulty))
        }
      }
      setTranslator(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = pp, this.locale = ip, this.emit()
      }
      Ey(pp) {
        var ip, cp;
        if (!this.Ry) return "open" === pp.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== pp.kind ? "snapshot" === pp.kind && (this.authoritative = pp.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (ip = null === (cp = this.pickerEntry()) || void 0 === cp ? void 0 : cp.difficulties.length) && void 0 !== ip ? ip : 1) - 1)), null === pp.snapshot && this.open ? this.close() : this.emit()) : this.choose(pp.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(pp) {
        var ip;
        const cp = null === (ip = this.authoritative) || void 0 === ip ? void 0 : ip.dungeons.find((ip => ip.id === pp));
        void 0 !== cp ? this.open && this.pickerDungeonId === pp || (this.pickerDungeonId = pp, this.pageIndex = Math.max(0, cp.difficulties.findLastIndex((pp => null !== pp.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${pp}`)
      }
      turnTo(pp) {
        var ip, cp;
        const Op = null !== (ip = null === (cp = this.pickerEntry()) || void 0 === cp ? void 0 : cp.difficulties.length) && void 0 !== ip ? ip : 0;
        pp < 0 || pp >= Op || pp === this.pageIndex || (this.pageIndex = pp, this.emit())
      }
      pickerEntry() {
        var pp, ip;
        return null !== (pp = null === (ip = this.authoritative) || void 0 === ip ? void 0 : ip.dungeons.find((pp => pp.id === this.pickerDungeonId))) && void 0 !== pp ? pp : null
      }
      difficulty(pp) {
        const ip = pp.completions > 0,
          cp = null === pp.bestMs ? null : Qp(pp.bestMs);
        return {
          difficulty: pp.difficulty,
          label: this.translate(Xp[pp.difficulty]),
          colour: lp[pp.difficulty],
          beaten: ip,
          bestTime: cp,
          completions: pp.completions,
          summary: ip ? [null === cp ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: cp
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: pp.completions.toLocaleString(this.locale)
          })].filter((pp => null !== pp)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(pp) {
        const ip = pp.difficulties.map((pp => this.difficulty(pp))),
          cp = ip.filter((pp => pp.beaten)).length;
        return {
          id: pp.id,
          name: this.translate(pp.nameKey),
          selected: pp.id === this.selected,
          beatenSummary: `${cp} / ${ip.length}`,
          difficulties: ip
        }
      }
      picker() {
        const pp = this.pickerEntry();
        if (null === pp || 0 === pp.difficulties.length) return null;
        const ip = pp.difficulties.map(((ip, cp) => {
          var Op, op, Ip, Sp;
          const xp = ip.unlockedBoss,
            Lp = null === xp ? this.lockedHint(pp, cp) : null;
          return {
            ...this.difficulty(ip),
            unlocked: null !== xp,
            bossName: null === xp ? null : this.translate(xp.bossNameKey),
            bossMobType: null !== (Op = null === xp || void 0 === xp ? void 0 : xp.bossMobType) && void 0 !== Op ? Op : null,
            bossMobVariation: null !== (op = null === xp || void 0 === xp ? void 0 : xp.bossMobVariation) && void 0 !== op ? op : null,
            lockedHint: null !== (Ip = null === Lp || void 0 === Lp ? void 0 : Lp.text) && void 0 !== Ip ? Ip : null,
            lockedHintHighlight: null !== (Sp = null === Lp || void 0 === Lp ? void 0 : Lp.highlight) && void 0 !== Sp ? Sp : null,
            current: cp === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(pp.nameKey),
          pages: ip,
          page: ip[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < ip.length - 1
        }
      }
      lockedHint(pp, ip) {
        var cp, Op, op;
        if (0 === ip && "number" === typeof pp.combatLevelLock) {
          const ip = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: pp.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: ip,
            colour: ui("combat"),
            icon: di.combat
          })
        }
        const Ip = null !== (cp = null === (Op = this.authoritative) || void 0 === Op ? void 0 : Op.dungeons) && void 0 !== cp ? cp : [],
          Sp = ip > 0 ? pp : null !== (op = Ip[Ip.indexOf(pp) - 1]) && void 0 !== op ? op : null,
          xp = ip > 0 ? pp.difficulties[ip - 1] : null === Sp || void 0 === Sp ? void 0 : Sp.difficulties[0];
        if (null === Sp || void 0 === xp) return null;
        const Lp = this.translate(Sp.nameKey);
        if (null === xp.unlockedBoss) return Sp === pp ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, xp.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: Lp
        }, xp.difficulty);
        const Yp = this.translate(xp.unlockedBoss.bossNameKey);
        return Sp === pp ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: Yp
        }, xp.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: Yp,
            dungeon: Lp
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(pp, ip, cp) {
        return this.hintHighlighting(pp, ip, "difficulty", {
          name: this.translate(Xp[cp]),
          colour: lp[cp],
          icon: null
        })
      }
      hintHighlighting(pp, ip, cp, Op) {
        let {
          name: op,
          colour: Ip,
          icon: Sp
        } = Op;
        const xp = this.translate(pp, {
          ...ip,
          [cp]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(pp, {
            ...ip,
            [cp]: op
          }),
          highlight: 2 === xp.length ? {
            before: xp[0],
            name: op,
            after: xp[1],
            colour: Ip,
            icon: Sp
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var pp, ip, cp;
        const Op = null !== (pp = null === (ip = this.authoritative) || void 0 === ip ? void 0 : ip.dungeons) && void 0 !== pp ? pp : [];
        var op, Ip;
        Op.some((pp => pp.id === this.selected)) || (this.selected = null !== (op = null === (Ip = Op[0]) || void 0 === Ip ? void 0 : Ip.id) && void 0 !== op ? op : null);
        const Sp = Op.map((pp => this.entry(pp)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: Sp,
          detail: null !== (cp = Sp.find((pp => pp.selected))) && void 0 !== cp ? cp : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const Hc = ["mining", "farming", "foraging", "fishing", "combat"],
      dc = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      ec = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function uc() {
      for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
      return ip.map(((pp, ip) => ({
        amount: pp,
        coins: dc[ip],
        xp: ec[ip]
      })))
    }
    const jc = uc(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      kc = uc(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      mc = uc(50, 100, 250, 500, 1e3, 2500, 5e3),
      Rc = uc(25, 50, 100, 250, 500, 1e3),
      qc = uc(10, 25, 50, 100, 250, 500, 1e3),
      Mc = uc(1, 5, 10, 25, 50);

    function Cc(pp, ip) {
      return {
        id: pp,
        category: "fishing",
        item: ip,
        drops: [ip],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qc
      }
    }
    const Ec = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: kc
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: mc
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: mc
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: Rc
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: Rc
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: kc
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: jc
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: jc
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: jc
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: mc
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: kc
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: kc
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: kc
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: mc
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: mc
      }, Cc("wheatfish", "Wheatfish"), Cc("darter", "Darter"), Cc("sunset_minnow", "Sunset Minnow"), Cc("root_flounder", "Root Flounder"), Cc("greenfin_loach", "Greenfin Loach"), Cc("red_strongfish", "Red Strongfish"), Cc("green_strongfish", "Green Strongfish"), Cc("boomerang_fish", "Boomerang Fish"), Cc("seahorse", "Seahorse"), Cc("spined_stickleback", "Spined Stickleback"), Cc("moon_strongfish", "Moon Strongfish"), Cc("boulder_bass", "Boulder Bass"), Cc("grass_snapper", "Grass Snapper"), Cc("crystal_wheatfish", "Crystalized Wheatfish", Mc), Cc("moonstone_pupfish", "Moonstone Pupfish", Mc), Cc("reedglass_minnow", "Reedglass Minnow"), Cc("mangrove_herring", "Mangrove Herring"), Cc("mudline_perch", "Mudline Perch"), Cc("coastal_mullet", "Coastal Mullet"), Cc("reef_sardine", "Reef Sardine"), Cc("root_perch", "Root Perch"), Cc("driftwood_catfish", "Driftwood Catfish"), Cc("aether_minnow", "Aether Minnow"), Cc("needlefish", "Tri-Pointed Needlefish"), Cc("threadfin_bream", "Threadfin Bream"), Cc("mudbelly_tilapia", "Mudbelly Tilapia"), Cc("rotslab_eel", "Rotslab Eel"), Cc("polarflash_electron", "Polarflash Electron"), Cc("mireback_carp", "Mireback Carp"), Cc("blackwater_bream", "Blackwater Bream"), Cc("stone_grouper", "Stone Grouper"), Cc("shadeback_ray", "Shadeback Ray"), Cc("glacial_silverfish", "Glacial Silverfish"), Cc("hatchetfish", "Hatchetfish"), Cc("moonlit_boomerang", "Moonlit Boomerang Fish"), Cc("murkborne_ray", "Murkborne Ray"), Cc("bamboo_catfish", "Bamboo Catfish"), Cc("mossback_arapaima", "Mossback Arapaima"), Cc("murk_stingray", "Murk Stingray"), Cc("channel_sawfish", "Channel Sawfish"), Cc("boned_sturgeon", "Boned Sturgeon"), Cc("oarfish", "Oarfish"), Cc("snakehead", "Snakehead", Mc), Cc("eldertide_leviathan", "Eldertide Leviathan", Mc), Cc("pithead", "Pithead"), Cc("electric_eel", "Electric Eel"), Cc("shadow_darter", "Shadow Darter"), Cc("abyss_carp", "Abyss Carp"), Cc("nomai_moray", "Nomai Moray"), Cc("silver_dragonfish", "Silver Dragonfish"), Cc("giant_moray", "Giant Moray"), Cc("coelacanth", "Coelacanth", Mc), Cc("frost_herring", "Frost Herring"), Cc("permafrost_halibut", "Permafrost Halibut"), Cc("glacial_lanternfish", "Glacial Lanternfish"), Cc("frozen_grenadier", "Frozen Grenadier"), Cc("blackfin_icefish", "Blackfin Icefish"), Cc("moonfish", "Moonfish"), Cc("alpha_strongfish", "Alpha Moon Strongfish"), Cc("deep_lanternfish", "Deepwater Lanternfish", Mc), Cc("pearlescent_moonfish", "Pearlescent Moonfish", Mc), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: kc
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: Rc
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: Rc
      }],
      Xc = (new Map(Ec.map((pp => [pp.id, pp]))), new Map),
      lc = new Map;
    for (const WL of Ec) {
      for (const [pp, ip] of Object.entries(null !== (Qc = WL.blocks) && void 0 !== Qc ? Qc : {})) {
        var Qc;
        Xc.set(pp, {
          collection: WL,
          amount: ip
        })
      }
      for (const pp of null !== (Jc = WL.drops) && void 0 !== Jc ? Jc : []) {
        var Jc;
        lc.set(pp, WL)
      }
    }

    function Bc(pp, ip) {
      let cp = 0;
      for (; cp < pp.tiers.length && ip >= pp.tiers[cp].amount;) cp++;
      return cp
    }
    const Nc = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function Tc(pp) {
      return Nc[pp - 1]
    }
    const fc = "skyblockCollectionsView";
    class bc extends Ap {
      constructor(pp, ip) {
        let cp = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          Op = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : pp => pp;
        super(pp, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = ip, this.locale = cp, this.itemName = Op, this.counts = null, this.category = "mining", this.selected = Ec[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = pp => {
          this.category = pp, this.selected = this.inCategory(pp)[0].id, this.emit()
        }, this.select = pp => {
          this.selected = pp, this.emit()
        }
      }
      setTranslator(pp, ip, cp) {
        this.translate = pp, this.locale = ip, this.itemName = cp, this.emit()
      }
      Ey(pp) {
        if (!this.Ry)
          if ("collOpen" !== pp.kind) {
            (pp.collFull || null === this.counts) && (this.counts = new Map);
            for (const [ip, cp] of pp.collCounts) this.counts.set(ip, cp);
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
        var pp;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const ip = this.inCategory(this.category).map((pp => this.collectionView(pp))),
          cp = Ec.reduce(((pp, ip) => pp + this.tierOf(ip)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: Hc.map((pp => this.categoryView(pp))),
          collections: ip,
          detail: null !== (pp = ip.find((pp => pp.selected))) && void 0 !== pp ? pp : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(cp)
          })
        }
      }
      categoryView(pp) {
        const ip = this.inCategory(pp),
          cp = ip.reduce(((pp, ip) => pp + this.tierOf(ip)), 0),
          Op = ip.reduce(((pp, ip) => pp + ip.tiers.length), 0);
        return {
          id: pp,
          label: this.translate(`skyblockGame:${pp}`),
          icon: di[pp],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(cp),
            target: this.number(Op)
          }),
          selected: pp === this.category
        }
      }
      collectionView(pp) {
        var ip, cp;
        const Op = null !== (ip = this.counts.get(pp.id)) && void 0 !== ip ? ip : 0,
          op = Bc(pp, Op),
          Ip = null !== (cp = pp.tiers[op]) && void 0 !== cp ? cp : null,
          Sp = 0 === op ? 0 : pp.tiers[op - 1].amount;
        return {
          id: pp.id,
          name: this.itemName(pp.item),
          icon: pp.item,
          selected: pp.id === this.selected,
          locked: 0 === Op,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(Op)
          }),
          tier: 0 === op ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(op),
          percent: null === Ip ? 100 : Math.min(100, (Op - Sp) / (Ip.amount - Sp) * 100),
          progress: null === Ip ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(Op),
            target: this.number(Ip.amount)
          }),
          nextReward: null === Ip ? null : this.reward(pp, Ip.coins, Ip.xp)
        }
      }
      reward(pp, ip, cp) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(ip),
          xp: this.number(cp),
          skill: this.translate(`skyblockGame:${pp.category}`)
        })
      }
      tierLabel(pp) {
        return this.translate("skyblockGame:collectionTier", {
          tier: Tc(pp)
        })
      }
      tierOf(pp) {
        var ip;
        return Bc(pp, null !== (ip = this.counts.get(pp.id)) && void 0 !== ip ? ip : 0)
      }
      inCategory(pp) {
        return Ec.filter((ip => ip.category === pp))
      }
      number(pp) {
        return pp.toLocaleString(this.locale)
      }
    }
    const hc = "skyblockPortalTransitView",
      ac = "skyblockPortalArrival";
    class nc {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.GA = pp, this.storage = ip, this.now = cp, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      Ey(pp) {
        const ip = {
          zoneNameKey: pp.transitZoneNameKey,
          variation: pp.transitZoneVariation,
          colour: pp.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(ac, ip), this.show("departure", ip.zoneNameKey, ip.colour, pp.transitDurationMs, pp.transitDurationMs + 1500, (() => {
          this.storage.removeItem(ac)
        }))
      }
      resumeArrival(pp) {
        const ip = this.storage.getItem(ac);
        this.storage.removeItem(ac), null === ip || ip.variation !== pp || this.now() - ip.departedAt > 3e4 || this.show("arrival", ip.zoneNameKey, ip.colour, 3200, 2e4)
      }
      finishArrival(pp) {
        var ip;
        "arrival" === (null === (ip = this.view) || void 0 === ip ? void 0 : ip.phase) && this.view.token === pp && (this.clearTimer(), this.view = null, this.GA(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(pp, ip, cp, Op, op, Ip) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: pp,
          zoneNameKey: ip,
          colour: cp,
          durationMs: Op
        }, this.GA(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.GA(null), null === Ip || void 0 === Ip || Ip()
        }), op)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const Fc = "skyblockDailyRewardView",
      gc = "skyblockDailyRewardCoin";
    class Gc {
      constructor(pp, ip, cp, Op) {
        let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          Sp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          xp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          Lp = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.GA = pp, this.isBusy = ip, this.holdQuestPopups = cp, this.onHeldCoinsChanged = Op, this.onCoinLanded = op, this.onStarted = Ip, this.onFinished = Sp, this.onItemLanded = xp, this.now = Lp, this.sx = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var pp, ip;
        return null !== (pp = null === (ip = this.playing) || void 0 === ip ? void 0 : ip.view) && void 0 !== pp ? pp : null
      }
      getHeldCoins() {
        var pp, ip;
        let cp = 0;
        for (const Op of this.sx) cp += Op.coins;
        return cp - (null !== (pp = null === (ip = this.playing) || void 0 === ip ? void 0 : ip.released) && void 0 !== pp ? pp : 0)
      }
      Ey(pp) {
        "dailyRewardClaimed" !== pp.kind ? (this.queue.push(pp), this.LP()) : this.sx.push({
          coins: pp.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      LP() {
        const pp = this.now();
        if (null === this.playing) return this.releaseUnshown(pp), void this.startNext(pp);
        const ip = this.playing,
          cp = pp - ip.startedAt,
          Op = ip.view.flyingCoins,
          op = function(pp, ip) {
            let cp = 0;
            for (; cp < ip && Zc(cp, ip) <= pp;) cp++;
            return cp
          }(cp, Op);
        if (op !== ip.landed) {
          for (let pp = op - ip.landed > 2 ? op - 1 : ip.landed; pp < op; pp++) this.onCoinLanded(pp, Op);
          ip.landed = op, ip.released = Math.round(ip.view.coins * op / Op), this.onHeldCoinsChanged()
        }
        for (; ip.itemsLanded < ip.view.items.length && 2e3 + 160 * ip.itemsLanded + 630 <= cp;) this.onItemLanded(ip.itemsLanded), ip.itemsLanded++;
        cp >= ip.view.durationMs && (this.finish(), this.startNext(pp))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.sx = [], this.GA(null)
      }
      startNext(pp) {
        if (0 === this.queue.length || this.isBusy()) return;
        const ip = this.queue.shift();
        this.token++;
        const cp = {
          token: this.token,
          day: ip.dailyRewardDay,
          coins: ip.dailyRewardCoins,
          items: ip.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: ip.dailyRewardDay === Mp ? 24 : 14
        };
        this.playing = {
          view: cp,
          startedAt: pp,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.GA(cp), this.onStarted(cp)
      }
      finish() {
        this.sx.shift(), this.playing = null, this.holdQuestPopups(!1), this.GA(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(pp) {
        if (this.queue.length > 0 || 0 === this.sx.length) return;
        const ip = this.sx.length;
        this.sx = this.sx.filter((ip => pp - ip.receivedAt < 6e4)), this.sx.length !== ip && this.onHeldCoinsChanged()
      }
    }

    function rc(pp, ip) {
      return 450 + 715 * pp / (ip - 1)
    }

    function Zc(pp, ip) {
      return rc(pp, ip) + 650
    }
    const zc = "skyblockMailboxView";
    class sc {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.GA = pp, this.isBusy = ip, this.onStarted = cp, this.now = Op, this.waiting = [], this.playing = null, this.token = 0, this.itemName = pp => pp
      }
      getSnapshot() {
        var pp, ip;
        return null !== (pp = null === (ip = this.playing) || void 0 === ip ? void 0 : ip.view) && void 0 !== pp ? pp : null
      }
      setItemName(pp) {
        this.itemName = pp
      }
      Ey(pp) {
        this.waiting.push(...pp.mailLetters), this.LP()
      }
      LP() {
        const pp = this.now();
        null !== this.playing && pp - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.GA(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(pp)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.GA(null)
      }
      start(pp) {
        const ip = this.waiting.slice(0, 3);
        this.token++;
        const cp = {
          token: this.token,
          letters: ip.map((pp => this.toView(pp))),
          more: this.waiting.length - ip.length,
          durationMs: 4500 + 700 * ip.length
        };
        this.waiting = [], this.playing = {
          view: cp,
          startedAt: pp
        }, this.GA(cp), this.onStarted(cp)
      }
      toView(pp) {
        return {
          coins: pp.mailCoins,
          items: pp.mailItems.map((pp => {
            var ip;
            return {
              itemName: pp.mailItemName,
              amount: pp.mailItemAmount,
              label: null !== (ip = pp.mailItemLabel) && void 0 !== ip ? ip : this.itemName(pp.mailItemName)
            }
          })),
          reasonKey: pp.mailReasonKey,
          reasonParams: pp.mailReasonParams
        }
      }
    }
    const Kc = "skyblockQuestGraphView",
      Vc = "skyblockDevQuestJump";

    function pO(pp) {
      if (0 === pp.length) return "";
      const ip = [`M ${pp[0].x} ${pp[0].y}`];
      for (let Op = 1; Op < pp.length - 1; Op++) {
        const cp = pp[Op + 1];
        ip.push(`Q ${pp[Op].x} ${pp[Op].y} ${(pp[Op].x+cp.x)/2} ${(pp[Op].y+cp.y)/2}`)
      }
      const cp = pp[pp.length - 1];
      return ip.push(`L ${cp.x} ${cp.y}`), ip.join(" ")
    }

    function iO(pp, ip) {
      return pp < ip ? `${pp}|${ip}` : `${ip}|${pp}`
    }
    class cO extends Ap {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          Sp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          xp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(pp, cp, Op), this.translate = ip, this.requestJump = op, this.requestArrive = Ip, this.storage = Sp, this.now = xp, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = pp => {
          pp !== this.hoveredId && (this.hoveredId = pp, this.emit())
        }, this.jump = pp => {
          this.close(), this.requestJump(pp)
        }
      }
      Ey(pp) {
        if (!this.Ry)
          if ("graph" !== pp.kind) {
            if ("jumping" === pp.kind) {
              const ip = {
                questId: pp.graphQuestId,
                variation: pp.graphVariation,
                completes: pp.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(Vc, ip)
            }
          } else {
            const ip = ++this.graphCount;
            cp.e(120).then((() => cp(6564))).then((cp => {
              let {
                default: Op
              } = cp;
              this.Ry || ip !== this.graphCount || (this.layout = function(pp, ip, cp) {
                var Op, op;
                const Ip = new pp.graphlib.Graph;
                Ip.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), Ip.setDefaultEdgeLabel((() => ({})));
                const Sp = new Set;
                for (const Dp of ip) Sp.add(Dp.graphQuestId), Ip.setNode(Dp.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const xp = cp.filter((pp => Sp.has(pp.graphFromId) && Sp.has(pp.graphToId) && pp.graphFromId !== pp.graphToId)),
                  Lp = new Map;
                for (const Dp of [...xp].sort(((pp, ip) => Number("awaits" === pp.graphEdgeKind) - Number("awaits" === ip.graphEdgeKind)))) {
                  const pp = iO(Dp.graphFromId, Dp.graphToId);
                  Lp.has(pp) || (Lp.set(pp, Dp), Ip.setEdge(Dp.graphFromId, Dp.graphToId))
                }
                pp.layout(Ip);
                const Yp = Ip.graph();
                return {
                  width: Math.ceil(null !== (Op = Yp.width) && void 0 !== Op ? Op : 0),
                  height: Math.ceil(null !== (op = Yp.height) && void 0 !== op ? op : 0),
                  nodes: ip.map((pp => {
                    var ip, cp;
                    const Op = Ip.node(pp.graphQuestId);
                    return {
                      node: pp,
                      left: (null !== (ip = Op.x) && void 0 !== ip ? ip : 0) - 95,
                      top: (null !== (cp = Op.y) && void 0 !== cp ? cp : 0) - 26
                    }
                  })),
                  edges: xp.map((pp => {
                    var ip;
                    const cp = Lp.get(iO(pp.graphFromId, pp.graphToId)),
                      Op = null !== (ip = Ip.edge(cp.graphFromId, cp.graphToId).points) && void 0 !== ip ? ip : [];
                    return {
                      edge: pp,
                      key: `${pp.graphFromId}|${pp.graphToId}|${pp.graphEdgeKind}`,
                      path: pO(cp.graphFromId === pp.graphFromId ? Op : [...Op].reverse())
                    }
                  })),
                  plans: new Map(ip.map((pp => [pp.graphQuestId, new Set([pp.graphQuestId, ...pp.graphPlanIds])])))
                }
              }(Op, pp.graphNodes, pp.graphEdges), this.show())
            })).catch((pp => {
              console.error("The quest graph could not be laid out", pp)
            }))
          }
      }
      resumeJump(pp) {
        const ip = this.storage.getItem(Vc);
        this.storage.removeItem(Vc), null === ip || ip.variation !== pp || this.now() - ip.departedAt > 6e4 || this.requestArrive(ip.questId, ip.completes)
      }
      setTranslator(pp) {
        this.translate = pp, this.emit()
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
        var pp, ip;
        return null !== (pp = null === this.hoveredId || null === (ip = this.layout) || void 0 === ip ? void 0 : ip.plans.get(this.hoveredId)) && void 0 !== pp ? pp : new Set
      }
      buildSnapshot() {
        const pp = this.layout;
        if (null === pp) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const ip = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: pp.width,
          height: pp.height,
          nodes: pp.nodes.map((pp => {
            let {
              node: cp,
              left: Op,
              top: op
            } = pp;
            return {
              id: cp.graphQuestId,
              name: this.translate(cp.graphNameKey),
              detail: null === cp.graphGiverName ? cp.graphZoneId : `${cp.graphGiverName} \xb7 ${cp.graphZoneId}`,
              state: cp.graphState,
              left: Op,
              top: op,
              inPlan: ip.has(cp.graphQuestId),
              hovered: cp.graphQuestId === this.hoveredId
            }
          })),
          edges: pp.edges.map((pp => {
            let {
              edge: cp,
              key: Op,
              path: op
            } = pp;
            return {
              key: Op,
              kind: cp.graphEdgeKind,
              path: op,
              inPlan: ip.has(cp.graphFromId) && ip.has(cp.graphToId)
            }
          })),
          planning: ip.size > 0
        }
      }
    }
    var OO = cp(37277);
    const oO = 250,
      IO = 2150,
      SO = -2.8,
      xO = 2.2,
      LO = -27,
      YO = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      DO = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      AO = Math.round(50 + 1e3 * (DO.delay + DO.period / 2)),
      PO = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      WO = Array.from({
        length: 26
      }, ((pp, ip) => {
        const cp = 2.39996 * ip,
          Op = .5 + .618034 * ip % 1 * .23,
          op = ip % 3 !== 2;
        return {
          rune: op ? PO[7 * ip % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(cp)*Op).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(cp)*Op).toFixed(3)})`,
            "--spin": 40 * (ip % 5 - 2) + "deg",
            "--size": (op ? 1 + ip % 4 * .2 : .3 + ip % 2 * .15) + "rem",
            "--duration": `${(1.8+7*ip%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*ip%3).toFixed(2)}s`
          }
        }
      }));

    function yO(pp, ip) {
      return Array.from({
        length: 30 + 3 * pp + (ip ? 10 : 0)
      }, ((pp, ip) => {
        const cp = ip < 4,
          Op = cp ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          op = cp ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          Ip = cp ? 2.2 : .6 + Math.random(),
          Sp = cp ? .3 : Math.random() < .5 ? .16 : .24,
          xp = cp ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": Op,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${op.toFixed(2)}rem`,
          "--length": `${Ip.toFixed(2)}rem`,
          "--width": `${Sp}rem`,
          "--duration": `${Math.round(xp)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function UO(pp) {
      let {
        zeta: ip,
        period: cp
      } = pp;
      const Op = 2 * Math.PI / cp;
      return {
        w: Op,
        decay: ip * Op / Math.sqrt(1 - ip * ip)
      }
    }
    let wO = !1;

    function vO() {
      if (wO) return;
      wO = !0;
      const pp = document.createElement("style");
      pp.textContent = function() {
        const pp = UO(YO),
          ip = UO(DO),
          cp = ip => Math.exp(-pp.decay * ip) * Math.sin(pp.w * ip),
          Op = cp(Math.atan(pp.w / pp.decay) / pp.w),
          op = .25,
          Ip = 2.15,
          Sp = Math.round(215),
          xp = [];
        for (let Lp = 0; Lp <= Sp; Lp++) {
          const pp = Lp / Sp * Ip;
          let Yp = Math.sin(Math.min(pp, op) / op * Math.PI / 2) ** 2,
            Dp = 0,
            Ap = 1,
            Pp = 1 - .2 * Yp,
            Wp = 1;
          if (pp >= op) {
            const Sp = pp - op,
              xp = Math.max(0, Sp - .05);
            Yp = Math.exp(-xp / .05), Dp = cp(xp + YO.lead * (1 - Math.exp(-xp / YO.rush))) / Op;
            const Lp = xp - DO.delay,
              yp = Lp <= 0 ? 0 : 1 - Math.exp(-ip.decay * Lp) * (Math.cos(ip.w * Lp) + ip.decay / ip.w * Math.sin(ip.w * Lp)),
              Up = Math.max(0, (pp - 1.77) / (Ip - 1.77));
            Ap = (1 + (DO.to - 1) * yp) * (1 + .08 * Up), Pp = 1.1 + 1.5 * Math.exp(-Sp / .07) + .3 * Math.exp(-(((1e3 * Sp - AO) / 100) ** 2)) + .8 * Up, Wp = 1 - Up ** 1.5
          }
          const yp = .15 * Yp + SO * Dp,
            Up = -.1 * Yp + xO * Dp,
            wp = 3 * Yp + LO * Dp;
          xp.push(`${(Lp/Sp*100).toFixed(3)}% { opacity: ${Wp.toFixed(3)}; transform: translate(${yp.toFixed(3)}rem, ${Up.toFixed(3)}rem) rotate(${wp.toFixed(2)}deg) scale(${Ap.toFixed(3)}); filter: brightness(${Pp.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${xp.join(" ")} }`
      }(), document.head.append(pp)
    }
    const tO = "skyblockForgeView",
      HO = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class dO extends Ap {
      constructor(pp, ip, cp, Op, op) {
        super(pp, cp, Op), this.translate = ip, this.requestForge = op, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.onOpened = null, this.select = (pp, ip) => {
          var cp, Op;
          null !== this.forging || (null !== (cp = this.owned[(0, OO.s)(ip, pp)]) && void 0 !== cp ? cp : 0) <= 0 || (this.selected[pp] = this.selected[pp] === ip ? null : ip, this.status = null, null === (Op = this.onPartSelected) || void 0 === Op || Op.call(this), this.emit())
        }, this.forge = pp => {
          var ip, cp;
          const Op = this.selectedParts();
          if (null === Op || this.isPending() || !this.open) return;
          const op = (0, OO.p)(Op);
          if (null === op || op.coalCost > this.coal) return;
          const Ip = this.preview(op),
            Sp = null !== (ip = null === (cp = this.onForgeStarted) || void 0 === cp ? void 0 : cp.call(this, Ip.tier, Ip.named, pp)) && void 0 !== ip ? ip : () => {};
          if (this.dropArrival(), pp) {
            const pp = {
              id: ++this.forgeId,
              preview: Ip,
              timers: [],
              stopSounds: Sp,
              landed: !1,
              reply: null
            };
            pp.timers.push(setTimeout((() => {
              pp.landed = !0, null !== pp.reply && (this.apply(pp.reply), pp.reply = null, this.emit())
            }), oO), setTimeout((() => {
              this.finishForge(pp)
            }), IO)), this.forging = pp
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(Op)
        }, this.snapshot = this.buildSnapshot()
      }
      Ey(pp) {
        var ip;
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === pp.forgeMessageKind) return this.dropForge(), this.apply(pp), this.status = null, this.show(), void(null === (ip = this.onOpened) || void 0 === ip || ip.call(this));
        const cp = this.forging;
        if (null !== cp && null !== pp.forgeRefusalKey) this.dropForge();
        else if (null !== cp && !cp.landed) return void(cp.reply = pp);
        this.apply(pp), this.emit()
      }
      apply(pp) {
        if (this.owned = pp.forgeOwnedParts, this.coal = pp.forgeCoalOwned, this.keepSelectionOwned("open" === pp.forgeMessageKind), null !== pp.forgeForgedSwordId) {
          var ip;
          const cp = (0, OO.p)(pp.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (ip = null === cp || void 0 === cp ? void 0 : cp.displayName) && void 0 !== ip ? ip : ""
            }
          }
        } else null !== pp.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: pp.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(pp) {
        this.translate = pp, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(pp) {
        var ip;
        this.forging = null;
        const cp = this.selectedParts(),
          Op = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: pp.id,
          sameSword: null !== cp && (null === (ip = (0, OO.p)(cp)) || void 0 === ip ? void 0 : ip.displayName) === pp.preview.name,
          timer: Op
        }, this.emit()
      }
      dropForge() {
        const pp = this.forging;
        if (null !== pp) {
          this.forging = null;
          for (const ip of pp.timers) clearTimeout(ip);
          pp.stopSounds(), null !== pp.reply && this.apply(pp.reply)
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
        var pp, ip, cp;
        const Op = this.selectedParts(),
          op = null === Op ? null : (0, OO.p)(Op),
          Ip = null !== (pp = null === (ip = this.forging) || void 0 === ip ? void 0 : ip.preview) && void 0 !== pp ? pp : null === op ? null : this.preview(op);
        return {
          enabled: this.received,
          open: this.open,
          slots: OO.n.map((pp => ({
            kind: pp,
            label: this.translate(HO[pp]),
            parts: this.partsFor(pp)
          }))),
          coalOwned: this.coal,
          preview: Ip,
          unformedSword: OO.j[null !== (cp = this.selected.Blade) && void 0 !== cp ? cp : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((pp => pp > 0)),
          canForge: null !== Ip && !Ip.coalShort && !this.isPending(),
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
      preview(pp) {
        return {
          name: pp.displayName,
          lore: pp.lore,
          baseSword: pp.baseSword,
          enchantmentTier: pp.enchantmentTier,
          tier: Number(pp.enchantmentTier.slice(-1)),
          named: pp.named,
          stats: this.stats(pp),
          effects: pp.effects,
          coalCost: pp.coalCost,
          coalShort: null === this.forging && pp.coalCost > this.coal
        }
      }
      partsFor(pp) {
        const ip = [];
        for (const Op of OO.f) {
          var cp;
          const op = (0, OO.s)(Op, pp),
            Ip = null !== (cp = this.owned[op]) && void 0 !== cp ? cp : 0;
          Ip > 0 && ip.push({
            material: Op,
            itemName: op,
            owned: Ip,
            selected: this.selected[pp] === Op,
            placeholder: !1
          })
        }
        if (0 === ip.length) {
          const cp = OO.f[0];
          ip.push({
            material: cp,
            itemName: (0, OO.s)(cp, pp),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return ip
      }
      stats(pp) {
        const ip = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${pp.powerMultiplier.toFixed(2)}`,
          better: pp.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${pp.damageMultiplier.toFixed(2)}`,
          better: pp.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/pp.cooldownMultiplier).toFixed(2)}`,
          better: pp.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${pp.knockbackMultiplier.toFixed(2)}`,
          better: pp.knockbackMultiplier > 1
        }];
        return pp.reachBonus > 0 && ip.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${pp.reachBonus.toFixed(1)}`,
          better: !0
        }), pp.damageReduction > 0 && ip.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*pp.damageReduction)}%`,
          better: !0
        }), ip
      }
      selectedParts() {
        const {
          Blade: pp,
          Guard: ip,
          Handle: cp
        } = this.selected;
        return null === pp || null === ip || null === cp ? null : {
          blade: pp,
          guard: ip,
          handle: cp
        }
      }
      keepSelectionOwned(pp) {
        for (const cp of OO.n) {
          var ip;
          const Op = this.selected[cp];
          if (null !== Op && (null !== (ip = this.owned[(0, OO.s)(Op, cp)]) && void 0 !== ip ? ip : 0) > 0) continue;
          if (!pp) {
            this.selected[cp] = null;
            continue
          }
          const op = [...OO.f].reverse().find((pp => {
            var ip;
            return (null !== (ip = this.owned[(0, OO.s)(pp, cp)]) && void 0 !== ip ? ip : 0) > 0
          }));
          this.selected[cp] = null !== op && void 0 !== op ? op : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const eO = "skyblockSmugglerView",
      uO = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class jO extends Ap {
      constructor(pp, ip, cp, Op, op) {
        let Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(pp, cp, Op), this.translate = ip, this.requestBuy = op, this.now = Ip, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = pp => pp, this.onBought = null, this.buy = pp => {
          const ip = this.deals[pp];
          void 0 !== ip && !this.isPending() && this.open && !this.soldOut.has(pp) && this.canAfford(ip) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, pp))
        }, this.snapshot = this.buildSnapshot()
      }
      Ey(pp) {
        if (this.received = !0, this.day = pp.smugglerDay, this.deals = pp.smugglerDeals, this.rivets = pp.smugglerRivetsOwned, this.crests = pp.smugglerCrestsOwned, this.soldOut = new Set(pp.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + pp.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === pp.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = pp.smugglerBoughtSlot, null !== pp.smugglerBoughtSlot) {
          var ip, cp;
          const Op = this.deals[pp.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === Op ? "" : this.dealName(Op),
              amount: String(null !== (ip = null === Op || void 0 === Op ? void 0 : Op.smugglerDealAmount) && void 0 !== ip ? ip : 0)
            }
          }, this.boughtCount++, null === (cp = this.onBought) || void 0 === cp || cp.call(this)
        } else null !== pp.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: pp.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(pp, ip, cp) {
        this.translate = pp, void 0 !== cp && (this.itemName = cp), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(pp) {
        if (null !== pp.smugglerDealUniqueName) return pp.smugglerDealUniqueName;
        const ip = uO[pp.smugglerDealItem];
        return void 0 === ip ? this.itemName(pp.smugglerDealItem) : this.translate(ip)
      }
      canAfford(pp) {
        return pp.smugglerDealRivets <= this.rivets && pp.smugglerDealCrests <= this.crests
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
        const pp = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return pp <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : pp < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(pp)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(pp / 60)),
          minutes: String(pp % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((pp, ip) => ({
            slot: ip,
            itemName: pp.smugglerDealItem,
            displayName: this.dealName(pp),
            enchantmentTier: pp.smugglerDealEnchantmentTier,
            amount: pp.smugglerDealAmount,
            rivets: pp.smugglerDealRivets,
            crests: pp.smugglerDealCrests,
            affordable: this.canAfford(pp),
            soldOut: this.soldOut.has(ip),
            justBought: this.boughtSlot === ip
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
    const kO = "skyblockPassageView",
      mO = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function RO(pp, ip) {
      return pp(mO[ip])
    }

    function qO(pp, ip, cp, Op) {
      const op = Math.ceil((cp - Op) / 864e5),
        Ip = RO(pp, ip);
      return op > 1 ? pp("skyblockGame:passageNextDays", {
        phase: Ip,
        days: String(op)
      }) : pp("skyblockGame:passageNextSoon", {
        phase: Ip
      })
    }
    class MO extends Ap {
      constructor(pp, ip, cp, Op) {
        let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(pp, cp, Op), this.translate = ip, this.now = op, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = pp => pp, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      Ey(pp) {
        this.message = pp, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(pp, ip, cp) {
        this.translate = pp, void 0 !== cp && (this.itemName = cp), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(pp) {
        return {
          itemName: pp.passageFish,
          displayName: this.itemName(pp.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(pp.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const pp = this.message;
        return null === pp ? {
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
          phase: pp.passagePhase,
          phaseName: RO(this.translate, pp.passagePhase),
          visitors: pp.passageVisitors.map((pp => this.describe(pp))),
          resting: this.describe(pp.passageResting),
          nextPhase: pp.passageNextPhase,
          next: qO(this.translate, pp.passageNextPhase, pp.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var CO = cp(38767);
    const EO = "skyblockKeepersChairView";
    class XO extends Ap {
      constructor(pp, ip, cp, Op, op) {
        let Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          Sp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new CO.b;
        super(pp, cp, Op), this.translate = ip, this.requestAim = op, this.now = Ip, this.pacer = Sp, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = pp => pp, this.aim = pp => {
          !this.awaitingReply && this.open && this.atChair && pp !== this.favoured && (null === pp || this.islands.some((ip => ip.keepersChairIslandId === pp && ip.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== pp && void 0 !== pp ? pp : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Sp.subscribe((() => {
          this.emit()
        }))
      }
      Ey(pp) {
        var ip, cp;
        this.received = !0;
        const Op = this.favoured,
          op = this.atChair;
        var Ip;
        return this.islands = pp.keepersChairIslands, this.favoured = pp.keepersChairFavoured, this.passage = null !== (ip = pp.keepersChairPassage) && void 0 !== ip ? ip : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (cp = pp.keepersChairAtChair) || void 0 === cp || cp, "place" === pp.keepersChairMessageKind ? (!op && this.atChair && "refused" === (null === (Ip = this.status) || void 0 === Ip ? void 0 : Ip.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === pp.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== pp.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: pp.keepersChairRefusalKey,
          island: null
        } : this.favoured !== Op && (this.status = null === this.favoured ? {
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
      receivePassage(pp) {
        this.received && (this.passage = pp, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(pp, ip, cp) {
        this.translate = pp, void 0 !== cp && (this.itemName = cp), this.emit()
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
      islandName(pp) {
        const ip = this.islands.find((ip => ip.keepersChairIslandId === pp));
        return void 0 === ip ? pp : this.translate(ip.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const pp = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          ip = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((pp => {
            const ip = pp.keepersChairFeaturedFish;
            return {
              id: pp.keepersChairIslandId,
              name: this.translate(pp.keepersChairIslandNameKey),
              relit: pp.keepersChairIslandRelit,
              featuredFish: null === ip ? null : {
                itemName: ip,
                displayName: this.itemName(ip)
              },
              favoured: pp.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === pp ? null : {
            tone: pp.tone,
            text: this.translate(pp.key, null === pp.island ? void 0 : {
              island: this.islandName(pp.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === ip ? null : {
            phase: ip.keepersChairPassagePhase,
            phaseName: RO(this.translate, ip.keepersChairPassagePhase),
            nextPhase: ip.keepersChairPassageNextPhase,
            next: qO(this.translate, ip.keepersChairPassageNextPhase, ip.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const lO = "skyblockReachLogView",
      QO = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      JO = "Caught Fish",
      BO = [1, 2, 4];

    function NO(pp, ip) {
      return pp.map((pp => ({
        ...pp,
        reachLogPageFish: pp.reachLogPageFish.map((pp => ({
          ...pp,
          reachLogFishFresh: ip(pp)
        })))
      })))
    }
    class TO extends Ap {
      constructor(pp, ip, cp, Op, op) {
        let Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new CO.b;
        super(pp, cp, Op), this.translate = ip, this.requestOpen = op, this.pacer = Ip, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = pp => pp, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = pp => {
          this.pages.some((ip => ip.reachLogIslandId === pp)) && (this.selected = pp, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Ip.subscribe((() => {
          this.emit()
        }))
      }
      Ey(pp) {
        if (this.received = !0, "status" === pp.reachLogMessageKind) return !0 === pp.reachLogNews && this.markNews(), this.serverFresh = pp.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const ip = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== pp.reachLogMessageKind)
          if (this.pageViews = null, this.pages = NO(pp.reachLogPages, (pp => pp.reachLogFishFresh || this.heldFresh.has(pp.reachLogFishItem))), this.letGoShown = pp.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, ip) this.showPages();
          else {
            for (const pp of this.pages)
              for (const ip of pp.reachLogPageFish) ip.reachLogFishFresh && this.heldFresh.add(ip.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(pp, ip, cp) {
        this.translate = pp, this.pageViews = null, void 0 !== cp && (this.itemName = cp), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = NO(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var pp, ip, cp, Op;
        const op = this.pages.find((pp => pp.reachLogPageFish.some((pp => pp.reachLogFishFresh))));
        if (void 0 !== op) return op.reachLogIslandId;
        if (null !== this.selected && this.pages.some((pp => pp.reachLogIslandId === this.selected))) return this.selected;
        return null !== (pp = null !== (ip = null === (cp = this.pages.filter((pp => pp.reachLogIslandAwake)).at(-1)) || void 0 === cp ? void 0 : cp.reachLogIslandId) && void 0 !== ip ? ip : null === (Op = this.pages[0]) || void 0 === Op ? void 0 : Op.reachLogIslandId) && void 0 !== pp ? pp : null
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
        return this.pages.map((pp => {
          var ip;
          return {
            id: pp.reachLogIslandId,
            name: this.translate(pp.reachLogIslandNameKey),
            awake: pp.reachLogIslandAwake,
            gold: pp.reachLogPageGold,
            caught: pp.reachLogPageFish.filter((pp => pp.reachLogFishCaught && !pp.reachLogFishVisitor)).length,
            total: pp.reachLogPageFish.filter((pp => !pp.reachLogFishVisitor)).length,
            fish: pp.reachLogPageFish.map((pp => {
              const ip = pp.reachLogFishBestKg;
              return {
                itemName: pp.reachLogFishItem,
                name: pp.reachLogFishCaught ? this.itemName(pp.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: pp.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / pp.reachLogFishChance))
                }),
                best: pp.reachLogFishCaught ? null === ip ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: ip.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: pp.reachLogFishMarks,
                ribbons: BO.map((ip => 0 !== (pp.reachLogFishRibbons & ip))),
                glimmer: 0 !== (8 & pp.reachLogFishRibbons),
                halo: 0 !== (32 & pp.reachLogFishRibbons),
                fresh: pp.reachLogFishFresh,
                visitor: pp.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (ip = pp.reachLogPageReturner) && void 0 !== ip ? ip : null)
          }
        }))
      }
      buildReturner(pp) {
        return null === pp ? null : {
          itemName: pp.reachLogReturnerFishItem,
          line: this.translate(pp.reachLogReturnerLineKey, {
            name: this.translate(pp.reachLogReturnerNameKey),
            trinket: this.translate(pp.reachLogReturnerTrinketKey)
          }),
          back: pp.reachLogReturnerBack
        }
      }
      receivePassagePhase(pp) {
        null !== this.passagePhase && this.passagePhase !== pp && (this.pagesCurrent = !1), this.passagePhase = pp
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const fO = "skyblockLampLightView";
    class bO {
      constructor(pp, ip, cp, Op) {
        this.GA = pp, this.translate = ip, this.requestCommand = cp, this.pacer = Op, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.Ry = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = pp => {
          pp ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = pp => {
          this.send(`buy ${pp}`)
        }, this.socket = pp => {
          this.send(`socket ${null!==pp&&void 0!==pp?pp:Bp}`)
        }, this.wearTint = pp => {
          this.send(`tint ${null!==pp&&void 0!==pp?pp:Bp}`)
        }, this.setSituation = pp => {
          this.situation = pp, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Op.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = Op.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      Ey(pp) {
        if (this.message = pp, null !== pp.lampLightShop && (this.shop = pp.lampLightShop), "open" === pp.lampLightKind && (this.refusalKey = null), "reply" === pp.lampLightKind) {
          var ip;
          const op = null !== (ip = pp.lampLightReplyTag) && void 0 !== ip ? ip : null,
            Ip = null !== op && op === this.offTag;
          var cp, Op;
          if (Ip ? this.settleOff() : null !== op && op !== this.awaitingTag || this.settleReply(), this.refusalKey = pp.lampLightRefusalKey, null !== pp.lampLightBought && !Ip) this.sparkle = {
            id: pp.lampLightBought,
            count: (null !== (cp = null === (Op = this.sparkle) || void 0 === Op ? void 0 : Op.count) && void 0 !== cp ? cp : 0) + 1
          }
        }
        pp.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === pp.lampLightKind && (this.lastGained = pp.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(pp) {
        pp !== this.atChair && (this.atChair = pp, pp && (this.refusalKey = null), this.emit())
      }
      setTranslator(pp, ip) {
        this.translate = pp, this.locale = null !== ip && void 0 !== ip ? ip : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.Ry = !0
      }
      send(pp) {
        var ip;
        if (null !== this.awaitingTag || "ready" !== (null === (ip = this.message) || void 0 === ip ? void 0 : ip.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const cp = this.nextTag();
        this.awaitingTag = cp, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${pp} ${cp}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const pp = this.nextTag();
        this.offTag = pp, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${pp}`)
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
        this.Ry || (this.snapshot = this.buildSnapshot(), this.GA(this.snapshot))
      }
      formatLight(pp) {
        return Math.floor(pp).toLocaleString(this.locale)
      }
      formatPercent(pp) {
        const ip = 100 * pp;
        return ip >= 10 ? Math.round(ip).toLocaleString(this.locale) : ip.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(pp, ip) {
        if ("bite" === pp) return this.translate("skyblockGame:lampLightBite", {
          seconds: (ip.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === pp) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(ip.lampLightRareChance)
        });
        if ("notice" === pp) return null === ip.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(ip.lampLightNoticeChance)
        });
        const cp = "meter" === pp ? ip.lampLightMeterCatches : ip.lampLightBloomCatches;
        return null === cp ? null : this.translate("meter" === pp ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(cp))
        })
      }
      oddsLines(pp, ip) {
        const cp = (pp, ip) => {
            var cp;
            return null !== (cp = {
              bite: ip.lampLightBiteMs,
              rare: ip.lampLightRareChance,
              meter: ip.lampLightMeterCatches,
              bloom: ip.lampLightBloomCatches,
              notice: ip.lampLightNoticeChance
            } [pp]) && void 0 !== cp ? cp : 0
          },
          Op = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          op = [];
        for (const Ip of ["bite", "rare", "meter", "bloom", "notice"]) {
          const Sp = this.formatOdds(Ip, pp),
            xp = this.formatOdds(Ip, ip);
          if (null === Sp || null === xp || "bite" !== Ip && "rare" !== Ip && Sp === xp) continue;
          const Lp = cp(Ip, ip) - cp(Ip, pp),
            Yp = Op[Ip] ? Lp < 0 : Lp > 0;
          op.push({
            label: Ip,
            before: Sp,
            after: xp,
            tone: Sp === xp ? "same" : Yp ? "better" : "worse"
          })
        }
        return op
      }
      charmView(pp, ip, cp) {
        const Op = pp.lampLightCharmId.charAt(0).toUpperCase() + pp.lampLightCharmId.slice(1),
          op = "bloom" === this.situation;
        return {
          id: pp.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${Op}`),
          effect: this.translate(`skyblockGame:lampLightCharm${Op}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(pp.lampLightCharmCost)
          }),
          owned: pp.lampLightCharmOwned,
          affordable: cp >= pp.lampLightCharmCost,
          socketed: ip.lampLightSocketed === pp.lampLightCharmId,
          lines: this.oddsLines(op ? ip.lampLightBareBloom : ip.lampLightBareOpen, op ? pp.lampLightCharmBloom : pp.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var pp, ip, cp, Op;
        const op = this.message,
          Ip = "ready" === (null === op || void 0 === op ? void 0 : op.lampLightStatus) ? this.shop : null,
          Sp = null !== (pp = null === op || void 0 === op ? void 0 : op.lampLightBalance) && void 0 !== pp ? pp : 0,
          xp = this.atChair,
          Lp = "loading" === (null === op || void 0 === op ? void 0 : op.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === op || void 0 === op ? void 0 : op.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          Yp = "ready" !== (null === op || void 0 === op ? void 0 : op.lampLightStatus) || xp ? null !== (ip = this.refusalKey) && void 0 !== ip ? ip : Lp : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== op && "locked" !== op.lampLightStatus,
          status: null !== (cp = null === op || void 0 === op ? void 0 : op.lampLightStatus) && void 0 !== cp ? cp : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(Sp)
          }),
          releasing: null !== (Op = null === op || void 0 === op ? void 0 : op.lampLightReleasing) && void 0 !== Op && Op,
          gained: null === op || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === op || void 0 === op ? void 0 : op.lampLightStatus) && xp && !this.isPending(),
          situation: this.situation,
          shop: null === Ip ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: Ip.lampLightOddsRod,
              island: this.translate(Ip.lampLightIslandNameKey)
            }),
            heldRod: null !== Ip.lampLightHeldRod,
            charms: Ip.lampLightCharms.map((pp => this.charmView(pp, Ip, Sp))),
            tints: Ip.lampLightTints.map((pp => {
              const ip = pp.lampLightTintId,
                [cp, Op, op] = pp.lampLightTintColour;
              return {
                id: ip,
                name: this.translate(`skyblockGame:lampLightTint${ip.charAt(0).toUpperCase()}${ip.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(pp.lampLightTintCost)
                }),
                owned: pp.lampLightTintOwned,
                affordable: Sp >= pp.lampLightTintCost,
                wearing: Ip.lampLightTint === ip,
                colour: `rgb(${cp}, ${Op}, ${op})`
              }
            })),
            wearingIslandColours: null === Ip.lampLightTint
          },
          notice: null === Yp ? null : this.translate(Yp),
          sparkle: this.sparkle
        }
      }
    }
    const hO = "skyblockMagmawardView";
    class aO {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.GA = pp, this.now = ip, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = np.map((() => 0)), this.wornAt = np.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      Ey(pp) {
        var ip, cp;
        const Op = np.map(((ip, cp) => !0 === pp.magmawardPiecesWorn[cp]));
        if (!Op.includes(!0)) return this.snapshot = null, void this.GA(null);
        const op = this.now(),
          Ip = this.snapshot;
        null === Ip && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const Sp = pp.magmawardFuelCarried,
          xp = !Op.includes(!1);
        let Lp = null !== (ip = null === Ip || void 0 === Ip ? void 0 : Ip.pulse) && void 0 !== ip ? ip : null,
          Yp = null !== (cp = null === Ip || void 0 === Ip ? void 0 : Ip.flare) && void 0 !== cp ? cp : null;
        pp.magmawardFuelBurned ? (Lp = "burn", Yp = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = op, this.flareAt = op) : null !== Ip && Sp > Ip.fuel && (Lp = "gain", this.pulseToken++, this.pulseAt = op), xp && null !== Ip && !Ip.fullSet && (Yp = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = op, this.setLitAt = op);
        const Dp = np.map(((pp, ip) => (Op[ip] && null !== Ip && !Ip.pieces[ip].worn && (this.wornTokens[ip]++, this.wornAt[ip] = op), {
          itemName: pp,
          worn: Op[ip],
          wornToken: this.wornTokens[ip],
          justWorn: Op[ip] && this.isPlaying(this.wornAt[ip], op)
        })));
        this.snapshot = {
          pieces: Dp,
          wornCount: Op.filter(Boolean).length,
          fullSet: xp,
          fuel: Sp,
          fuelState: Sp <= 0 ? "empty" : Sp <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, op) ? Lp : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, op) ? Yp : null,
          flareToken: this.flareToken,
          setLit: xp && this.isPlaying(this.setLitAt, op),
          setLitToken: this.setLitToken
        }, this.GA(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.GA(null)
      }
      isPlaying(pp, ip) {
        return ip - pp < 1200
      }
    }
    const nO = "skyblockGlowtideView";
    class FO {
      constructor(pp) {
        this.GA = pp, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = pp => {
          this.arrow = pp, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      Ey(pp) {
        this.bloom = pp.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.GA(null))
      }
      afterRender(pp, ip) {
        const cp = this.bloom;
        if (null === cp || null === pp) return;
        const Op = cp.glowtideBloomX - pp[0],
          Ip = cp.glowtideBloomZ - pp[2],
          Sp = Math.hypot(Op, Ip),
          xp = this.snapshot,
          Lp = null !== xp && void 0 !== xp && xp.inRange ? 1 : 0,
          Yp = Sp <= 12.5 + Lp && pp[1] - cp.glowtideBloomY <= 10 + Lp;
        !Yp || null !== xp && void 0 !== xp && xp.inRange || this.inRangeToken++;
        const Dp = {
          colour: cp.glowtideBloomColour,
          inRange: Yp,
          distance: Math.round(Sp),
          inRangeToken: this.inRangeToken
        };
        (null === xp || Dp.colour !== xp.colour || Dp.inRange !== xp.inRange || !Yp && Dp.distance !== xp.distance) && (this.snapshot = Dp, this.GA(Dp));
        const Ap = op.d.computeShortestRotation(ip, (0, op.zb)([Op, 0, Ip]));
        null === this.arrow || Math.abs(Ap - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${Ap}rad)`, this.arrowTurn = Ap)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.GA(null)
      }
    }
    const gO = "skyblockGlowMeterView";
    class GO {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.GA = pp, this.now = ip, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      Ey(pp) {
        const ip = this.now(),
          {
            glowMeterFill: cp,
            glowMeterCapacity: Op
          } = pp,
          op = cp >= Op,
          Ip = this.snapshot;
        null !== Ip && (op && !Ip.full && (this.fullToken++, this.fullAt = ip), Ip.full && !op ? (this.burstToken++, this.burstAt = ip) : cp > Ip.fill && (this.gainToken++, this.gainAt = ip)), this.snapshot = {
          fill: cp,
          TA: Op,
          ratio: Math.min(1, Math.max(0, cp / Op)),
          full: op,
          rares: pp.glowMeterRares,
          ready: op && this.isPlaying(this.fullAt, ip),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, ip),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, ip),
          gainToken: this.gainToken
        }, this.GA(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.GA(null)
      }
      isPlaying(pp, ip) {
        return ip - pp < 2e3
      }
    }
    const rO = "skyblockHushWaitView";
    class ZO {
      constructor(pp) {
        this.GA = pp, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      Ey(pp) {
        let {
          hushWaitMs: ip,
          hushWaitTotalMs: cp,
          hushWaitLines: Op
        } = pp;
        if (this.clearTimers(), this.token++, 0 === Op.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (ip <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: Op[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const op = Math.max(null !== cp && void 0 !== cp ? cp : ip, ip),
          Ip = op - ip,
          Sp = pp => op * pp / Op.length,
          xp = pp => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: op,
              elapsedMs: Ip,
              line: Op[pp],
              lineIndex: pp
            })
          };
        let Lp = 0;
        for (; Lp + 1 < Op.length && Sp(Lp + 1) <= Ip;) Lp++;
        xp(Lp);
        for (let Yp = Lp + 1; Yp < Op.length; Yp++) this.later(Sp(Yp) - Ip, (() => {
          xp(Yp)
        }));
        this.later(ip, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(pp) {
        this.snapshot = pp, this.GA(pp)
      }
      later(pp, ip) {
        this.timers.push(setTimeout(ip, pp))
      }
      clearTimers() {
        for (const pp of this.timers) clearTimeout(pp);
        this.timers = []
      }
    }
    const zO = "skyblockTideChartsView",
      sO = 36e5,
      KO = 864e5;

    function VO(pp, ip, cp) {
      const [Op, op, Ip, Sp] = pp.tideChartArea, xp = Math.floor(ip), Lp = Math.floor(cp);
      return xp >= Op && xp <= Ip && Lp >= op && Lp <= Sp
    }

    function po(pp, ip, cp) {
      const [Op, op, Ip, Sp] = pp.tideChartWater;
      return function(pp, ip, cp, Op, op, Ip) {
        const Sp = 4 - Fp(Math.floor(op) - (pp - cp), cp);
        return 5 * Fp(Math.floor(Ip) - (ip - Op), Op) + Sp
      }(Op, op, Ip, Sp, ip, cp)
    }

    function io(pp, ip, cp) {
      const Op = pp.tideCharts;
      for (let op = 0; op < Op.length; op++)
        if (VO(Op[op], ip, cp)) return Op[op];
      return null
    }

    function co(pp, ip, cp) {
      const Op = Math.max(0, ip - cp);
      return Op > KO ? pp("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(Op / KO))
      }) : Op > sO ? pp("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(Op / sO))
      }) : pp("skyblockGame:tideChartsTurnSoon")
    }
    class Oo extends Ap {
      constructor(pp, ip, cp, Op) {
        let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(pp, cp, Op), this.translate = ip, this.now = op, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.SW = pp => {
          this.picked = pp, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      Ey(pp) {
        const ip = this.message;
        if (null !== ip)
          for (const Op of pp.tideCharts) {
            var cp;
            const pp = ip.tideCharts.find((pp => pp.tideChartIsland === Op.tideChartIsland)),
              op = Op.tideChartLit & ~(null !== (cp = null === pp || void 0 === pp ? void 0 : pp.tideChartLit) && void 0 !== cp ? cp : 0);
            void 0 !== pp && 0 !== op && (this.pulse = {
              island: Op.tideChartIsland,
              cells: op,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = pp, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(pp, ip) {
        var cp;
        const Op = null === this.message || Number.isNaN(pp) ? null : io(this.message, pp, ip),
          op = null !== (cp = null === Op || void 0 === Op ? void 0 : Op.tideChartIsland) && void 0 !== cp ? cp : null,
          Ip = null === Op ? -1 : function(pp, ip, cp) {
            const [Op, op, Ip, Sp] = pp.tideChartWater;
            return function(pp, ip, cp, Op, op, Ip, Sp) {
              return ((op - pp) / (cp + Sp)) ** 2 + ((Ip - ip) / (Op + Sp)) ** 2 <= 1
            }(Op, op, Ip, Sp, ip, cp, 2) ? po(pp, ip, cp) : -1
          }(Op, pp, ip);
        return (op !== this.hereIsland || Ip !== this.hereCell) && (this.hereIsland = op, this.hereCell = Ip, null !== op && (this.lastIsland = op), !0)
      }
      afterRender(pp) {
        if (null === this.message) return;
        this.lastX = null === pp ? Number.NaN : pp[0], this.lastZ = null === pp ? Number.NaN : pp[2];
        const ip = this.locate(this.lastX, this.lastZ),
          cp = this.expirePulses();
        (ip || cp || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const pp = this.now();
        return !(!this.open || pp - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = pp, co(this.translate, this.message.tideChartTurnsInMs, pp - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(pp, ip) {
        const cp = null === this.message ? null : io(this.message, pp, ip);
        if (null === cp) return;
        const Op = po(cp, pp, ip);
        0 === (cp.tideChartPreBlank & 1 << Op) && (this.cast = {
          island: cp.tideChartIsland,
          cell: Op,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const pp = this.now();
        let ip = !1;
        return 0 !== this.pulse.cells && pp - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, ip = !0), null !== this.cast && pp - this.cast.atMs >= 1500 && (this.cast = null, ip = !0), ip
      }
      setTranslator(pp) {
        this.translate = pp, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(pp, ip) {
        var cp;
        return null !== (cp = pp.tideCharts.find((pp => pp.tideChartIsland === ip))) && void 0 !== cp ? cp : null
      }
      describe(pp) {
        var ip, cp, Op;
        const op = pp.tideChartIsland,
          Ip = [];
        for (let Wp = 0; Wp < 25; Wp++) {
          const ip = 1 << Wp;
          0 !== (pp.tideChartLit & ip) ? Ip.push("lit") : 0 !== (pp.tideChartClear & ip) ? Ip.push("clear") : 0 !== (pp.tideChartPreBlank & ip) ? Ip.push("shore") : Ip.push("water")
        }
        const Sp = function(pp) {
            let ip = 0;
            for (let cp = pp >>> 0; 0 !== cp; cp &= cp - 1) ip++;
            return ip
          }(pp.tideChartLit),
          xp = pp.tideChartInkCount,
          Lp = this.translate(pp.tideChartIslandNameKey),
          Yp = this.translate("skyblockGame:tideChartsLit", {
            lit: String(Sp),
            ink: String(xp)
          }),
          Dp = null === pp.tideChartPictureNameKey ? null : this.translate(pp.tideChartPictureNameKey),
          Ap = this.hereIsland === op && -1 !== this.hereCell ? this.hereCell : null,
          Pp = [`${Lp}: ${Yp}.`];
        if (null !== Dp && Pp.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: Dp
          })), null !== Ap) {
          const pp = Math.floor(Ap / 5) + 1,
            ip = Ap % 5 + 1;
          Pp.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(pp),
            column: String(ip)
          }))
        }
        return {
          island: op,
          islandName: Lp,
          cells: Ip,
          hereCell: Ap,
          lit: Sp,
          ink: xp,
          litText: Yp,
          pictureName: Dp,
          gridLabel: Pp.join(" "),
          pulseCells: this.pulse.island === op ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (ip = this.cast) || void 0 === ip ? void 0 : ip.island) === op ? this.cast.cell : null,
          castToken: null !== (cp = null === (Op = this.cast) || void 0 === Op ? void 0 : Op.token) && void 0 !== cp ? cp : 0
        }
      }
      buildSnapshot() {
        var pp, ip, cp;
        const Op = this.message;
        if (null === Op || 0 === Op.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const op = this.findChart(Op, this.hereIsland),
          Ip = null !== (pp = null !== (ip = null !== (cp = this.findChart(Op, this.open ? this.picked : null)) && void 0 !== cp ? cp : op) && void 0 !== ip ? ip : this.findChart(Op, this.lastIsland)) && void 0 !== pp ? pp : Op.tideCharts[0],
          Sp = null === op ? null : this.describe(op);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: Sp,
          card: Ip === op ? Sp : this.describe(Ip),
          turnsText: co(this.translate, Op.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(Op.tideChartBookCount)
          }),
          tabs: Op.tideCharts.map((pp => ({
            island: pp.tideChartIsland,
            name: this.translate(pp.tideChartIslandNameKey),
            selected: pp.tideChartIsland === Ip.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const oo = "skyblockRegularsView",
      Io = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      So = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function xo(pp, ip) {
      return "given" === pp ? ip.given : "owed" === pp ? ip.owed : ip.goal
    }
    class Lo extends Ap {
      constructor(pp, ip, cp, Op) {
        super(pp, cp, Op), this.translate = ip, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = pp => pp, this.openIsland = pp => {
          this.selected = pp, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = pp => {
          this.selected = pp, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      Ey(pp) {
        this.message = pp, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const pp = this.openedFromReachLog;
        return this.openedFromReachLog = !1, pp
      }
      setTranslator(pp, ip, cp) {
        this.translate = pp, void 0 !== cp && (this.itemName = cp), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(pp, ip, cp) {
        return {
          text: this.translate(xo(pp, ip), cp),
          given: "given" === pp
        }
      }
      describeRegular(pp, ip) {
        const cp = this.translate,
          Op = null !== pp.regularKg,
          op = pp.regularMeetings,
          Ip = Op ? 0 === op ? cp("skyblockGame:regularsNotMet") : 1 === op ? cp("skyblockGame:regularsMeetingsOne") : cp("skyblockGame:regularsMeetings", {
            count: op
          }) : "";
        return {
          id: pp.regularId,
          name: cp(pp.regularNameKey),
          line: cp(pp.regularLineKey),
          itemName: pp.regularFishItem,
          fishName: this.itemName(pp.regularFishItem),
          tagged: Op,
          size: null === pp.regularKg ? cp("skyblockGame:regularsNotTagged") : cp("skyblockGame:regularsSize", {
            kg: pp.regularKg.toFixed(1)
          }),
          meetings: Ip,
          chance: cp("skyblockGame:regularsChance", {
            count: pp.regularOneInCasts
          }),
          resting: pp.regularRestingToday,
          gifts: [{
            text: cp("skyblockGame:regularsGiftFlare"),
            given: op >= 3
          }, this.describeGift(pp.regularTintGift, Io, {
            tint: cp(pp.regularTintNameKey)
          })],
          history: [...pp.regularHistory].reverse().map((pp => {
            const Op = pp.regularMeetingKg.toFixed(1),
              op = ip - pp.regularMeetingDay;
            return op <= 0 ? cp("skyblockGame:regularsToday", {
              kg: Op
            }) : cp("skyblockGame:regularsDaysAgo", {
              days: op,
              kg: Op
            })
          }))
        }
      }
      describeIsland(pp, ip) {
        return {
          id: pp.regularsIslandId,
          name: this.translate(pp.regularsIslandNameKey),
          charm: this.describeGift(pp.regularsCharmGift, So, {
            charm: this.translate(pp.regularsCharmNameKey)
          }),
          regulars: pp.regularsList.map((pp => this.describeRegular(pp, ip)))
        }
      }
      buildSnapshot() {
        var pp, ip, cp, Op;
        const op = this.message;
        if (null === op) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const Ip = op.regularsIslands.map((pp => this.describeIsland(pp, op.regularsToday))),
          Sp = null !== (pp = null !== (ip = null === (cp = Ip.find((pp => pp.id === this.selected))) || void 0 === cp ? void 0 : cp.id) && void 0 !== ip ? ip : null === (Op = Ip[0]) || void 0 === Op ? void 0 : Op.id) && void 0 !== pp ? pp : "";
        return {
          enabled: !0,
          open: this.open,
          selected: Sp,
          islands: Ip
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const Yo = "skyblockHiddenWatersView";
    class Do {
      constructor(pp) {
        this.GA = pp, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      Ey(pp) {
        this.snapshot = function(pp) {
          const [ip, cp] = pp.hiddenWatersMapSize, Op = (pp, Op) => ({
            left: 1 - pp / ip,
            top: Op / cp
          }), op = new Map;
          for (const [Sp, xp] of pp.hiddenWatersGlimpses) {
            var Ip;
            const pp = null !== (Ip = op.get(Sp)) && void 0 !== Ip ? Ip : [];
            pp.push(xp), op.set(Sp, pp)
          }
          return {
            found: pp.hiddenWatersFound,
            total: pp.hiddenWatersTotal,
            aspect: cp / ip,
            pins: pp.hiddenWatersPins.map((pp => {
              let [ip, cp] = pp;
              return Op(ip, cp)
            })),
            islands: pp.hiddenWatersIslands.map((pp => {
              let [op, Ip, Sp, xp] = pp;
              const {
                left: Lp,
                top: Yp
              } = Op(Sp + 1, Ip);
              return {
                left: Lp,
                top: Yp,
                width: (Sp + 1 - op) / ip,
                height: (xp + 1 - Ip) / cp
              }
            })),
            glimpses: op
          }
        }(pp), this.GA(this.snapshot)
      }
    }
    const Ao = "skyblockDialogueView";
    class Po extends Ap {
      constructor(pp, ip, cp, Op, op) {
        let Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(pp, cp, Op), this.translate = ip, this.requestDialogue = op, this.now = Ip, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = pp => {
          this.selection = {
            kind: "quest",
            questId: pp
          }, this.request(), this.show()
        }, this.selectCharacter = pp => {
          this.selection = {
            kind: "character",
            npcId: pp
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      Ey(pp) {
        this.received = !0, this.scripts = pp.questDialogueScripts, this.speakers = new Map(pp.questDialogueSpeakers.map((pp => [pp.dialogueSpeakerId, pp]))), this.emit()
      }
      setTranslator(pp) {
        this.translate = pp, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const pp = this.now();
        pp >= this.requestAvailableAt && (this.requestAvailableAt = pp + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var pp;
        const ip = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...ip,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const cp = this.selection;
        if ("quest" === cp.kind) {
          const pp = this.scripts.find((pp => pp.dialogueQuestId === cp.questId));
          return {
            ...ip,
            characters: [],
            questFocus: cp.questId,
            conversations: pp ? [this.conversation(pp)] : []
          }
        }
        const Op = [];
        for (let Ip = this.scripts.length - 1; Ip >= 0; Ip--) {
          const pp = this.scripts[Ip].dialogueLines;
          for (let ip = pp.length - 1; ip >= 0; ip--) Op.includes(pp[ip].dialogueSpeakerId) || Op.push(pp[ip].dialogueSpeakerId)
        }
        const op = null !== cp.npcId && Op.includes(cp.npcId) ? cp.npcId : null !== (pp = Op[0]) && void 0 !== pp ? pp : null;
        return {
          ...ip,
          characters: Op.map((pp => {
            var ip, cp;
            return {
              id: pp,
              styling: null !== (ip = null === (cp = this.speakers.get(pp)) || void 0 === cp ? void 0 : cp.dialogueSpeakerStyling) && void 0 !== ip ? ip : pp,
              selected: pp === op
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((pp => pp.dialogueLines.some((pp => pp.dialogueSpeakerId === op)))).map((pp => this.conversation(pp))).reverse()
        }
      }
      conversation(pp) {
        let ip = null;
        return {
          questId: pp.dialogueQuestId,
          questName: this.translate(pp.dialogueQuestNameKey),
          completed: pp.dialogueQuestCompleted,
          lines: pp.dialogueLines.map(((pp, cp) => {
            var Op;
            const op = pp.dialogueSpeakerId === ip || null === (Op = this.speakers.get(pp.dialogueSpeakerId)) || void 0 === Op ? void 0 : Op.dialogueSpeakerStyling;
            return ip = pp.dialogueSpeakerId, {
              key: cp,
              display: {
                line: {
                  translationKey: pp.dialogueLineKey,
                  params: this.params(pp.dialogueLineParams)
                },
                speakerName: op,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(pp) {
        if (void 0 !== pp) return Object.fromEntries(Object.entries(pp).map((pp => {
          let [ip, cp] = pp;
          return [ip, "string" === typeof cp ? cp : this.translate(cp.translationKey)]
        })))
      }
    }
    var Wo = cp(620),
      yo = cp(1284),
      Uo = cp(104);
    const wo = "skyblockAutographsView";

    function vo(pp) {
      const ip = Wo.g[pp];
      return {
        label: ip.chatTag.map((pp => pp.str)).join(""),
        icon: ip.icon,
        colour: ip.mainRGB
      }
    }
    class to extends Ap {
      constructor(pp) {
        let ip = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(pp, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = ip, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      Ey(pp) {
        this.signatures = pp.autographSignatures, pp.autographOpen ? this.show() : this.emit()
      }
      setTranslator(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = ip, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var pp;
        const ip = null !== (pp = this.signatures) && void 0 !== pp ? pp : [],
          cp = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          Op = [...ip].sort(((pp, ip) => Number(null !== ip.autographRank) - Number(null !== pp.autographRank) || ip.autographSignedAtMs - pp.autographSignedAtMs)).map((pp => ({
            key: `${pp.autographSignedAtMs}|${pp.autographSignerName}`,
            name: (0, yo.d)(pp.autographSignerName, !Uo.featureFlags.canSeeRealPlayerNames),
            rank: null === pp.autographRank ? null : vo(pp.autographRank),
            signedOn: cp.format(pp.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: Op,
          total: Op.length,
          rankTotal: Op.filter((pp => null !== pp.rank)).length
        }
      }
    }
    const Ho = "skyblockHudView",
      eo = () => {},
      uo = {
        getItem: () => null,
        setItem: eo,
        removeItem: eo
      };
    class jo {
      constructor(pp) {
        let {
          translate: ip,
          translateWithIcons: cp,
          setMenuOpen: Op = eo,
          dismissMenu: op = () => {
            Op(!1)
          },
          publishSkills: Ip = eo,
          publishQuests: Sp = eo,
          publishQuestNotification: xp = eo,
          publishDungeons: Lp = eo,
          publishCollections: Yp = eo,
          publishMap: Dp = eo,
          publishHud: Ap = eo,
          publishPortalTransit: Pp = eo,
          publishDailyReward: yp = eo,
          publishMailbox: Up = eo,
          publishQuestGraph: wp = eo,
          publishForge: vp = eo,
          publishSmuggler: tp = eo,
          publishKeepersChair: Hp = eo,
          publishReachLog: dp = eo,
          publishLampLight: ep = eo,
          publishMagmaward: jp = eo,
          publishGlowtide: mp = eo,
          publishGlowMeter: Rp = eo,
          publishHushWait: qp = eo,
          publishPassage: Mp = eo,
          publishTideCharts: Cp = eo,
          publishRegulars: Ep = eo,
          publishHiddenWaters: Xp = eo,
          publishDialogue: lp = eo,
          publishAutographs: Qp = eo,
          isLoadingScreenUp: Jp = () => !1,
          onDailyRewardCoinLanded: Bp = eo,
          onDailyRewardStarted: Np = eo,
          onDailyRewardFinished: Tp = eo,
          onDailyRewardItemLanded: fp = eo,
          onMailboxStarted: bp = eo,
          journeyStorage: hp = uo,
          requestTracking: ap = eo,
          requestTravel: np = eo,
          requestDungeonEnter: Fp = eo,
          requestQuestJump: gp = eo,
          requestQuestArrive: Gp = eo,
          requestForge: rp = eo,
          requestSmuggle: Zp = eo,
          requestKeepersChairAim: zp = eo,
          requestReachLogOpen: sp = eo,
          requestLampLight: Kp = eo,
          requestDialogue: Vp = eo
        } = pp;
        this.navigation = void 0, this.map = void 0, this.compass = new kp, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new CO.b, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = pp => pp, this.close = () => {
          for (const pp of this.panels) pp.close()
        }, this.setMenuOpen = Op, this.publishHud = Ap, this.portalTransit = new nc(Pp, hp), this.magmaward = new aO(jp), this.glowtide = new FO(mp), this.glowMeter = new GO(Rp), this.hushWait = new ZO(qp), this.dailyReward = new Gc(yp, (() => Jp() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (pp => {
          this.quests.setNotificationsHeld(pp)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), Bp, Np, Tp, fp);
        const ii = pp => {
          this.panels.some((pp => pp.isOpen())) || (pp ? op() : this.setMenuOpen(!1))
        };
        this.skills = new Dc(Ip, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), ip, void 0, void 0, ii), this.quests = new Uc(Sp, ap, ip, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, ii, xp), this.dungeons = new tc(Lp, ip, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, ii, Fp), this.collections = new bc(Yp, ip, (() => {
          this.beforePanelOpen(this.collections)
        }), ii), this.map = new Wp(Dp, np, ip, (() => {
          this.beforePanelOpen(this.map)
        }), ii), this.questGraph = new cO(wp, ip, (() => {
          this.beforePanelOpen(this.questGraph)
        }), ii, gp, Gp, hp), this.forge = new dO(vp, ip, (() => {
          this.beforePanelOpen(this.forge)
        }), ii, rp), this.smuggler = new jO(tp, ip, (() => {
          this.beforePanelOpen(this.smuggler)
        }), ii, Zp), this.lampLight = new bO(ep, ip, Kp, this.commandPacer), this.keepersChair = new XO(Hp, ip, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (pp => {
          this.lampLight.onChairClosed(), ii(pp)
        }), zp, Date.now, this.commandPacer), this.reachLog = new TO(dp, ip, (() => {
          this.beforePanelOpen(this.reachLog)
        }), ii, sp, this.commandPacer), this.passage = new MO(Mp, ip, (() => {
          this.beforePanelOpen(this.passage)
        }), ii), this.tideCharts = new Oo(Cp, ip, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), ii), this.regulars = new Lo(Ep, ip, (() => {
          this.beforePanelOpen(this.regulars)
        }), (pp => {
          this.regulars.takeReturnToReachLog() && !pp && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), ii(pp)
        })), this.hiddenWaters = new Do(Xp), this.dialogue = new Po(lp, ip, (() => {
          this.beforePanelOpen(this.dialogue)
        }), ii, Vp), this.autographs = new to(Qp, (() => {
          this.beforePanelOpen(this.autographs)
        }), ii), this.mailbox = new sc(Up, (() => Jp() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), bp), this.quests.translateWithIcons = null !== cp && void 0 !== cp ? cp : null, this.skills.onLevelUp = pp => {
          this.quests.notify(pp)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new Lc(this.map, this.quests, this.compass, ip)
      }
      getHudSnapshot() {
        const pp = this.hudSnapshot,
          ip = this.dailyReward.getHeldCoins();
        return null === pp || ip <= 0 || !("hudPurseCoins" in pp) ? pp : {
          ...pp,
          hudPurseCoins: Math.max(0, pp.hudPurseCoins - ip)
        }
      }
      receiveHud(pp) {
        this.hudSnapshot = pp, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(pp) {
        this.setMenuOpen(!0);
        const ip = pp === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = pp;
        for (const cp of this.panels) cp === pp || ip && cp === this.reachLog || cp.close();
        this.openingPanel = null
      }
      setTranslator(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ip => this.resolveItemName(ip, pp);
        this.quests.translateWithIcons = null !== cp && void 0 !== cp ? cp : null, this.navigation.setTranslator(pp, ip), this.lampLight.setTranslator(pp, ip), this.mailbox.setItemName(Op);
        for (const op of this.panels) op.setTranslator(pp, ip, Op)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const pp of this.panels) pp.dispose()
      }
    }
    var ko = cp(1049),
      mo = cp.n(ko),
      Ro = cp(25),
      qo = cp(36791),
      Mo = cp(3520),
      Co = cp(1941),
      Eo = cp(1929),
      Xo = cp(34453),
      Qo = cp(1201),
      Jo = cp(1476),
      Bo = cp(1112);

    function No(pp) {
      let {
        controller: ip,
        minimap: cp,
        children: Op
      } = pp;
      const Ip = (0, Jo.i)(Ho, ip.getHudSnapshot()),
        [Sp, xp] = (0, Rp.useState)(ip.skills.getSnapshot().overallLevel);
      (0, Jo.f)(Yc, (pp => {
        xp(pp.overallLevel)
      }));
      const Lp = (0, Rp.useRef)(null);
      (0, Jo.f)(gc, (pp => {
        ! function(pp, ip) {
          if (null === pp || "function" !== typeof pp.animate) return;
          const cp = ip ? 1.35 : 1.15;
          pp.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${cp})`
          }, {
            transform: "scale(1)"
          }], {
            duration: ip ? 320 : 160,
            easing: "ease-out"
          }), pp.classList.toggle("Receiving", !ip), ip && (pp.classList.remove("Shine"), pp.offsetWidth, pp.classList.add("Shine"))
        }(Lp.current, pp)
      }));
      const {
        t: Yp
      } = (0, Qo.H)(), {
        isTouchScreen: Dp
      } = (0, Ro.o)(["isTouchScreen"]), [Ap, Pp] = (0, Rp.useState)(null);
      return (0, Mo.k)(Ap, ".SkyblockRightHud"), null !== Ip || cp ? (0, Bo.jsx)(qo.h, {
        placement: "topRight",
        children: (0, Bo.jsxs)("div", {
          className: mo()("SkyblockRightHud", {
            TouchScreen: Dp
          }),
          children: [cp, null !== Ip && (0, Bo.jsxs)("div", {
            ref: Pp,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in Ip ? (0, Bo.jsx)("div", {
              className: "SkyblockHudHelp",
              children: Ip.hudHelpText
            }) : (0, Bo.jsxs)(Bo.Fragment, {
              children: [(0, Bo.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, Bo.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, Bo.jsx)("strong", {
                    style: {
                      color: op.N.cyanUiText
                    },
                    children: Yp(Ip.hudZoneNameKey)
                  }), null !== Sp && (0, Bo.jsx)("span", {
                    style: {
                      color: op.N.goldUiText
                    },
                    children: Yp("skyblockGame:level", {
                      level: (0, Xo.g)(Sp)
                    })
                  })]
                }), (0, Bo.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: Lp,
                  children: [(0, Bo.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, Bo.jsx)(Co.d, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, Xo.g)(Ip.hudPurseCoins)]
                })]
              }), Ip.hudClockText.length > 0 && (0, Bo.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, Bo.jsx)(Eo.e, {
                  text: Ip.hudClockText
                })
              })]
            }), Op, "hudZoneNameKey" in Ip && (0, Bo.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function To(pp) {
      let {
        icon: ip
      } = pp;
      const cp = (0, Rp.useCallback)((pp => {
        null === pp || void 0 === pp || pp.replaceChildren(zi(ip))
      }), [ip]);
      return (0, Bo.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: cp
      })
    }

    function fo(pp) {
      let {
        controller: ip
      } = pp;
      const {
        t: cp
      } = (0, Qo.H)();
      return (0, Bo.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: ip.display.mountPlayer,
        title: cp("skyblockGame:mapYouAreHere"),
        children: (0, Bo.jsx)(To, {
          icon: "player"
        })
      })
    }
    const bo = cp(38774),
      ho = Object.fromEntries(bo.keys().map((pp => [pp.replace(/^\.\/(.*)\.png$/, "$1"), bo(pp)])));

    function ao(pp, ip) {
      var cp;
      return null !== (cp = ho[pp]) && void 0 !== cp ? cp : ho[ip]
    }

    function no(pp) {
      let {
        imageKey: ip,
        fallbackImageKey: cp,
        geometryKey: Op,
        alt: op,
        className: Ip
      } = pp;
      const [Sp, xp] = (0, Rp.useState)((() => function(pp, ip) {
        return [{
          id: 0,
          imageKey: pp,
          geometryKey: ip,
          phase: "shown"
        }]
      }(ip, Op))), Lp = function(pp, ip, cp) {
        const Op = pp[pp.length - 1];
        if (Op.imageKey === ip && Op.geometryKey === cp) return pp;
        const op = {
          id: Op.id + 1,
          imageKey: ip,
          geometryKey: cp,
          phase: "entering"
        };
        return Op.geometryKey === cp ? [{
          ...Op,
          phase: "leaving"
        }, op] : [op]
      }(Sp, ip, Op);
      return Lp !== Sp && xp(Lp), (0, Bo.jsx)(Bo.Fragment, {
        children: Lp.map((pp => (0, Bo.jsx)("img", {
          className: mo()("SkyblockMapTerrainImage", Ip, {
            Entering: "entering" === pp.phase,
            Leaving: "leaving" === pp.phase
          }),
          src: ao(pp.imageKey, cp),
          alt: "leaving" === pp.phase ? "" : op,
          onAnimationEnd: () => {
            xp((ip => function(pp, ip) {
              return pp.flatMap((pp => pp.id !== ip ? [pp] : "leaving" === pp.phase ? [] : [{
                ...pp,
                phase: "shown"
              }]))
            }(ip, pp.id)))
          }
        }, pp.id)))
      })
    }
    var Fo = cp(4621),
      go = cp(1480);

    function Go(pp) {
      if ("Tab" !== pp.key) return;
      const ip = Array.from(pp.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        cp = ip.indexOf(document.activeElement);
      var Op;
      if (pp.shiftKey && cp <= 0) pp.preventDefault(), null === (Op = ip.at(-1)) || void 0 === Op || Op.focus();
      else if (!pp.shiftKey && (-1 === cp || cp === ip.length - 1)) {
        var op;
        pp.preventDefault(), null === (op = ip[0]) || void 0 === op || op.focus()
      }
    }

    function ro() {
      const pp = (0, Rp.useRef)(null);
      return (0, Rp.useCallback)((ip => {
        var cp;
        ip ? (pp.current = document.activeElement, ip.focus()) : null === (cp = pp.current) || void 0 === cp || cp.focus()
      }), [])
    }

    function Zo(pp) {
      let {
        percent: ip,
        label: cp,
        levelUpToken: Op,
        colour: op
      } = pp;
      return (0, Bo.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": cp,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": ip,
        "aria-valuetext": cp,
        children: [(0, Bo.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${ip/100})`
          }
        }), null !== Op && void 0 !== Op && (0, Bo.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": op
          }
        }, Op)]
      })
    }

    function zo(pp) {
      let {
        mount: ip
      } = pp;
      return (0, Bo.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: ip,
        hidden: !0,
        children: (0, Bo.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, Bo.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, Bo.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function so(pp, ip, cp, Op) {
      (0, Rp.useLayoutEffect)((() => {
        const op = pp.current;
        if (!cp || null === ip || void 0 === ip || !ip.local || !op) return;
        const Ip = Array.from(op.querySelectorAll(".SkyblockMapNode")),
          Sp = [...ip.points, ...ip.portals],
          xp = () => {
            const pp = op.clientWidth,
              cp = op.clientHeight,
              xp = Ip.map(((op, Ip) => {
                const xp = Sp[Ip];
                return {
                  id: xp.id,
                  portal: Ip >= ip.points.length,
                  x: xp.position[0] * pp / 100,
                  y: xp.position[1] * cp / 100,
                  width: op.offsetWidth / Op,
                  height: op.offsetHeight / Op
                }
              })),
              Lp = new Map(Sp.map(((pp, ip) => [pp.id, Ip[ip]])));
            for (const ip of function(pp, ip, cp) {
                const Op = [],
                  op = [...pp].sort(((pp, ip) => Number(ip.portal) - Number(pp.portal) || pp.id.localeCompare(ip.id)));
                for (const Ip of op) {
                  const pp = pp => Math.max(Ip.width / 2, Math.min(ip - Ip.width / 2, pp)),
                    op = pp => Math.max(Ip.height / 2, Math.min(cp - Ip.height / 2, pp)),
                    Sp = [pp(Ip.x)],
                    xp = [op(Ip.y)];
                  for (const ip of Op) Sp.push(pp(ip.x - (ip.width + Ip.width) / 2 - 4), pp(ip.x + (ip.width + Ip.width) / 2 + 4)), xp.push(op(ip.y - (ip.height + Ip.height) / 2 - 4), op(ip.y + (ip.height + Ip.height) / 2 + 4));
                  let Lp = {
                      ...Ip,
                      x: Sp[0],
                      y: xp[0]
                    },
                    Yp = 1 / 0,
                    Dp = 1 / 0;
                  for (const ip of new Set(Sp))
                    for (const pp of new Set(xp)) {
                      let cp = 0;
                      for (const Sp of Op) cp += Math.max(0, (Ip.width + Sp.width) / 2 + 4 - Math.abs(ip - Sp.x)) * Math.max(0, (Ip.height + Sp.height) / 2 + 4 - Math.abs(pp - Sp.y));
                      const op = (ip - Ip.x) ** 2 + (pp - Ip.y) ** 2;
                      (cp < Yp || cp === Yp && op < Dp) && (Lp = {
                        ...Ip,
                        x: ip,
                        y: pp
                      }, Yp = cp, Dp = op)
                    }
                  Op.push(Lp)
                }
                return Op
              }(xp, pp, cp)) {
              const pp = Lp.get(ip.id);
              pp.style.left = `${ip.x}px`, pp.style.top = `${ip.y}px`
            }
          };
        xp();
        const Lp = new ResizeObserver(xp);
        Lp.observe(op);
        for (const pp of Ip) Lp.observe(pp);
        return () => {
          Lp.disconnect()
        }
      }), [pp, ip, cp, Op])
    }
    const Ko = {
        zoom: 1,
        x: 0,
        y: 0
      },
      Vo = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function pI(pp, ip, cp) {
      return Math.min(cp, Math.max(ip, pp))
    }

    function iI(pp, ip, cp) {
      const Op = Math.min(1, cp * ip / pp),
        op = Math.min(1, pp / (cp * ip));
      return {
        x0: (1 - Op) / 2,
        y0: (1 - op) / 2,
        x1: (1 + Op) / 2,
        y1: (1 + op) / 2
      }
    }

    function cI(pp, ip, cp, Op) {
      const op = ip * (Op - cp);
      if (op <= 1) return .5 - ip * (cp + Op) / 2;
      const Ip = .45 * Math.min(1, op - 1);
      return pI(pp, 1 - ip * Op - Ip, Ip - ip * cp)
    }

    function OI(pp, ip) {
      const cp = pI(pp.zoom, 1, 12);
      return {
        zoom: cp,
        x: cI(pp.x, cp, ip.x0, ip.x1),
        y: cI(pp.y, cp, ip.y0, ip.y1)
      }
    }

    function oI(pp, ip, cp, Op) {
      let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Vo;
      const Ip = pI(pp.zoom * ip, 1, 12),
        Sp = Ip / pp.zoom;
      return OI({
        zoom: Ip,
        x: cp - (cp - pp.x) * Sp,
        y: Op - (Op - pp.y) * Sp
      }, op)
    }

    function II(pp, ip, cp, Op) {
      const [op, Ip] = (0, Rp.useState)(Ko);
      (0, Rp.useEffect)((() => {
        Ip(Ko)
      }), [cp]), (0, Rp.useEffect)((() => {
        const cp = pp.current;
        if (!ip || !cp) return;
        const op = () => iI(cp.clientWidth, cp.clientHeight, Op),
          Sp = pp => {
            const ip = cp.getBoundingClientRect();
            return {
              x: (pp.clientX - ip.left) / ip.width,
              y: (pp.clientY - ip.top) / ip.height
            }
          },
          xp = new Map;
        let Lp = {
            x: 0,
            y: 0
          },
          Yp = !1,
          Dp = 0;
        const Ap = pp => {
            pp.preventDefault();
            const ip = pp.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * pp.deltaY : pp.deltaY,
              cp = Sp(pp);
            Ip((pp => oI(pp, Math.exp(.0015 * -ip), cp.x, cp.y, op())))
          },
          Pp = pp => {
            "mouse" === pp.pointerType && 0 !== pp.button || (xp.set(pp.pointerId, Sp(pp)), 1 === xp.size && (Lp = {
              x: pp.clientX,
              y: pp.clientY
            }, Yp = !1), Dp = 0)
          },
          Wp = pp => {
            const ip = xp.get(pp.pointerId);
            if (!ip) return;
            const Op = Sp(pp);
            if (xp.set(pp.pointerId, Op), 2 === xp.size) {
              const [pp, ip] = [...xp.values()], cp = Math.hypot(pp.x - ip.x, pp.y - ip.y);
              if (Dp > 0) {
                const Op = cp / Dp;
                Ip((cp => oI(cp, Op, (pp.x + ip.x) / 2, (pp.y + ip.y) / 2, op())))
              }
              return Dp = cp, void(Yp = !0)
            }!Yp && Math.hypot(pp.clientX - Lp.x, pp.clientY - Lp.y) < 4 || (Yp || (Yp = !0, cp.setPointerCapture(pp.pointerId)), Ip((pp => function(pp, ip, cp) {
              let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Vo;
              return OI({
                zoom: pp.zoom,
                x: pp.x + ip,
                y: pp.y + cp
              }, Op)
            }(pp, Op.x - ip.x, Op.y - ip.y, op()))))
          },
          yp = pp => {
            xp.delete(pp.pointerId), Dp = 0
          },
          Up = pp => {
            Yp && (pp.stopPropagation(), pp.preventDefault(), Yp = !1)
          },
          wp = new ResizeObserver((() => {
            Ip((pp => OI(pp, op())))
          }));
        return wp.observe(cp), cp.addEventListener("wheel", Ap, {
          passive: !1
        }), cp.addEventListener("pointerdown", Pp), cp.addEventListener("pointermove", Wp), cp.addEventListener("pointerup", yp), cp.addEventListener("pointercancel", yp), cp.addEventListener("click", Up, !0), () => {
          wp.disconnect(), cp.removeEventListener("wheel", Ap), cp.removeEventListener("pointerdown", Pp), cp.removeEventListener("pointermove", Wp), cp.removeEventListener("pointerup", yp), cp.removeEventListener("pointercancel", yp), cp.removeEventListener("click", Up, !0)
        }
      }), [pp, ip, cp, Op]);
      return {
        view: op,
        zoomBy: ip => {
          const cp = pp.current;
          cp && Ip((pp => oI(pp, ip, .5, .5, iI(cp.clientWidth, cp.clientHeight, Op))))
        }
      }
    }

    function SI(pp) {
      var ip, cp, Op, op;
      let {
        controller: Ip,
        navigation: Sp
      } = pp;
      const xp = (0, Jo.i)(Pp, Ip.getSnapshot()),
        {
          t: Lp
        } = (0, Qo.H)(),
        Yp = ro(),
        Dp = xp.presentation,
        Ap = (0, Rp.useRef)(null),
        Wp = (0, Rp.useRef)(null),
        yp = Boolean(xp.open && (null === Dp || void 0 === Dp ? void 0 : Dp.local) && Dp.background),
        Up = II(Ap, yp, `${xp.open}|${xp.tab}|${null===Dp||void 0===Dp||null===(ip=Dp.background)||void 0===ip?void 0:ip.geometryKey}`, null !== (cp = null === Dp || void 0 === Dp || null === (Op = Dp.background) || void 0 === Op ? void 0 : Op.ratio) && void 0 !== cp ? cp : 2);
      if (so(Wp, Dp, xp.open, Up.view.zoom), !Dp || !xp.open) return null;
      const wp = Dp.local ? Dp.background : null,
        vp = {
          "--map-ratio": String(null !== (op = null === wp || void 0 === wp ? void 0 : wp.ratio) && void 0 !== op ? op : 2),
          backgroundColor: null === wp || void 0 === wp ? void 0 : wp.colour
        },
        tp = {
          "--map-zoom": String(Up.view.zoom),
          transform: `translate(${100*Up.view.x}%, ${100*Up.view.y}%) scale(${Up.view.zoom})`
        };
      return (0, Bo.jsx)(Fo.c, {
        show: xp.open,
        close: Ip.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Bo.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: Yp,
          onKeyDown: Go,
          children: [(0, Bo.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Bo.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, Bo.jsx)("h2", {
                id: "skyblockMapTitle",
                children: Lp("skyblockGame:map")
              }), Dp.minimap && (0, Bo.jsx)("p", {
                children: Dp.minimap.caption
              })]
            }), (0, Bo.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((pp => (0, Bo.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": pp === xp.tab ? "true" : void 0,
                className: mo()({
                  Selected: pp === xp.tab
                }),
                "aria-pressed": pp === xp.tab,
                onClick: () => {
                  Ip.selectTab(pp)
                },
                children: Lp("local" === pp ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, pp)))
            }), (0, Bo.jsx)(go.l, {
              padIgnore: !0,
              onClick: Ip.dismiss
            })]
          }), (0, Bo.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, Bo.jsxs)("div", {
              ref: Ap,
              className: mo()("SkyblockMapCanvas", {
                Local: Dp.local,
                Overview: !Dp.local,
                Zoomed: Up.view.zoom > 1
              }),
              style: vp,
              children: [(0, Bo.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: yp ? tp : void 0,
                children: (0, Bo.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: Wp,
                  children: [wp && (0, Bo.jsx)(no, {
                    className: "SkyblockMapTerrain",
                    imageKey: wp.imageKey,
                    fallbackImageKey: wp.fallbackImageKey,
                    geometryKey: wp.geometryKey,
                    alt: wp.label
                  }), Dp.local && (0, Bo.jsx)(zo, {
                    mount: Sp.display.mountMapSearchArea
                  }), !Dp.local && (0, Bo.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: Dp.connections.map((pp => (0, Bo.jsx)("line", {
                      className: mo()({
                        Explored: pp.explored
                      }),
                      x1: pp.start[0],
                      y1: pp.start[1],
                      x2: pp.end[0],
                      y2: pp.end[1]
                    }, pp.id)))
                  }), Dp.points.map((pp => {
                    const ip = !Dp.local && pp.thumbnail ? ho[pp.thumbnail] : void 0;
                    return (0, Bo.jsxs)("div", {
                      className: mo()("SkyblockMapNode", {
                        Current: pp.current
                      }),
                      style: {
                        left: `${pp.position[0]}%`,
                        top: `${pp.position[1]}%`
                      },
                      children: [(0, Bo.jsxs)(go.f, {
                        className: mo()("SkyblockMapPin", {
                          Unknown: !pp.visited,
                          Current: pp.current
                        }),
                        disabled: xp.pending,
                        onClick: () => {
                          Ip.travel(pp.travelKind, pp.travelId)
                        },
                        children: [ip && (0, Bo.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: ip,
                          alt: ""
                        }), !ip && (0, Bo.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, Bo.jsx)(To, {
                            icon: pp.icon
                          })
                        }), (0, Bo.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: pp.name
                        })]
                      }), pp.current && (0, Bo.jsx)("span", {
                        className: mo()("SkyblockMapHereBadge", {
                          Above: pp.position[1] > 50
                        }),
                        children: Lp("skyblockGame:mapYouAreHere")
                      })]
                    }, pp.id)
                  })), Dp.portals.map((pp => (0, Bo.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${pp.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${pp.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, Bo.jsxs)(go.f, {
                      className: "SkyblockMapPin",
                      disabled: xp.pending,
                      onClick: () => {
                        Ip.travel(pp.travelKind, pp.travelId)
                      },
                      children: [(0, Bo.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: pp.colour
                        },
                        "aria-hidden": "true",
                        children: (0, Bo.jsx)(To, {
                          icon: pp.icon
                        })
                      }), (0, Bo.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: pp.name
                      })]
                    })
                  }, pp.id))), Dp.local && (0, Bo.jsx)(fo, {
                    controller: Sp
                  })]
                })
              }), yp && (0, Bo.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, Bo.jsx)("button", {
                  type: "button",
                  "aria-label": Lp("skyblockGame:mapZoomIn"),
                  disabled: Up.view.zoom >= 12,
                  onClick: () => {
                    Up.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, Bo.jsx)("button", {
                  type: "button",
                  "aria-label": Lp("skyblockGame:mapZoomOut"),
                  disabled: Up.view.zoom <= 1,
                  onClick: () => {
                    Up.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, Bo.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: xp.feedback
              })]
            })
          }), (0, Bo.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [Dp.progress && (0, Bo.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, Bo.jsx)("span", {
                children: Dp.progress
              }), (0, Bo.jsx)(Zo, {
                percent: Dp.percent,
                label: Dp.progress
              })]
            }), Dp.noLandmarks && (0, Bo.jsx)("span", {
              children: Lp("skyblockGame:mapNoLandmarks")
            }), Dp.canTravel && (0, Bo.jsx)("span", {
              className: "SkyblockMapHint",
              children: Lp("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function xI(pp) {
      let {
        view: ip,
        controller: cp,
        navigation: Op
      } = pp;
      const {
        t: op
      } = (0, Qo.H)(), {
        isTouchScreen: Ip
      } = (0, Ro.o)(["isTouchScreen"]);
      return (0, Bo.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": op("skyblockGame:mapLocal"),
        children: [Ip && (0, Bo.jsx)(go.f, {
          className: "SkyblockMinimapOpen",
          onClick: cp.showLocal,
          children: op("skyblockGame:map")
        }), (0, Bo.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: ip.colour
          },
          children: [(0, Bo.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: Op.display.mountTerrain,
            style: {
              width: ip.width,
              height: ip.height
            },
            children: [(0, Bo.jsx)(no, {
              imageKey: ip.imageKey,
              fallbackImageKey: ip.fallbackImageKey,
              geometryKey: ip.geometryKey,
              alt: ip.label
            }), (0, Bo.jsx)(zo, {
              mount: Op.display.mountMinimapSearchArea
            }), ip.markers.map((pp => (0, Bo.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${pp.position[0]}%`,
                top: `${pp.position[1]}%`,
                color: pp.colour
              },
              title: pp.name,
              children: (0, Bo.jsx)(To, {
                icon: pp.icon
              })
            }, pp.id)))]
          }), (0, Bo.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: op("skyblockGame:mapYouAreHere"),
            children: (0, Bo.jsx)(To, {
              icon: "player"
            })
          })]
        }), (0, Bo.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: ip.caption
        })]
      })
    }

    function LI(pp) {
      let {
        controller: ip
      } = pp;
      return (0, Bo.jsxs)("div", {
        className: "SkyblockCompass",
        ref: ip.display.mountCompass,
        children: [(0, Bo.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, Bo.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, Bo.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function YI(pp) {
      let {
        controller: ip,
        surface: cp
      } = pp;
      const {
        t: Op
      } = (0, Qo.H)(), op = (0, Jo.i)(Yc, ip.getSnapshot()), Ip = ro();
      return op.enabled ? (0, Bo.jsxs)(Bo.Fragment, {
        children: ["hud" === cp && (0, Bo.jsx)(qo.h, {
          placement: "statBars",
          children: op.hud && (0, Bo.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": op.hud.colour
            },
            children: [(0, Bo.jsx)(Zo, {
              percent: op.hud.skill.percent,
              label: op.hud.skill.xp,
              levelUpToken: op.hud.levelUpToken,
              colour: op.hud.colour
            }), (0, Bo.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, Bo.jsxs)("span", {
                children: [op.hud.skill.label, " \xb7 ", op.hud.skill.level]
              }), (0, Bo.jsx)("span", {
                children: op.hud.gain
              })]
            })]
          })
        }), "hud" === cp && (0, Bo.jsx)(qo.h, {
          children: op.hud && (0, Bo.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, Bo.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, Bo.jsx)("strong", {
                children: op.hud.skill.label
              }), (0, Bo.jsx)("span", {
                children: op.hud.gain
              })]
            }), (0, Bo.jsx)(Zo, {
              percent: op.hud.skill.percent,
              label: op.hud.skill.xp,
              levelUpToken: op.hud.levelUpToken,
              colour: op.hud.colour
            }), (0, Bo.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, Bo.jsx)("span", {
                children: op.hud.skill.level
              }), (0, Bo.jsx)("span", {
                children: op.hud.skill.xp
              })]
            })]
          })
        }), "menu" === cp && (0, Bo.jsx)(Fo.c, {
          show: op.open,
          close: ip.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Bo.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: Ip,
            onKeyDown: Go,
            children: [(0, Bo.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Bo.jsxs)("div", {
                children: [(0, Bo.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: Op("skyblockGame:skills")
                }), (0, Bo.jsx)("p", {
                  children: Op("skyblockGame:skillsIntro")
                })]
              }), (0, Bo.jsx)(go.l, {
                padIgnore: !0,
                onClick: ip.dismiss
              })]
            }), (0, Bo.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, Bo.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: op.skills.map((pp => (0, Bo.jsxs)(go.f, {
                  className: mo()("SkyblockSkillCard", {
                    Selected: pp.selected
                  }),
                  ariaPressed: pp.selected,
                  onClick: () => {
                    ip.select(pp.id)
                  },
                  children: [(0, Bo.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, Bo.jsx)(Co.d, {
                      itemName: pp.icon,
                      amount: 0
                    })
                  }), (0, Bo.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, Bo.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, Bo.jsx)("strong", {
                        children: pp.label
                      }), (0, Bo.jsx)("span", {
                        children: pp.level
                      })]
                    }), (0, Bo.jsx)(Zo, {
                      percent: pp.percent,
                      label: `${pp.label}: ${pp.xp}`
                    }), (0, Bo.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: pp.xp
                    })]
                  })]
                }, pp.id)))
              }), op.detail && (0, Bo.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, Bo.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, Bo.jsx)(Co.d, {
                    itemName: op.detail.icon,
                    amount: 0
                  })
                }), (0, Bo.jsx)("h3", {
                  children: op.detail.label
                }), (0, Bo.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: op.detail.level
                }), (0, Bo.jsx)("p", {
                  children: op.detail.description
                }), (0, Bo.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, Bo.jsx)("strong", {
                    children: Op("skyblockGame:currentBenefit")
                  }), (0, Bo.jsx)("span", {
                    children: op.detail.benefit
                  })]
                }), (0, Bo.jsx)(Zo, {
                  percent: op.detail.percent,
                  label: op.detail.xp
                }), (0, Bo.jsx)("p", {
                  children: op.detail.xp
                }), (0, Bo.jsx)("h4", {
                  children: Op("skyblockGame:earnXp")
                }), (0, Bo.jsx)("ul", {
                  children: op.detail.sources.map((pp => (0, Bo.jsx)("li", {
                    children: pp
                  }, pp)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var DI = cp(1387),
      AI = cp(4956),
      PI = cp(322);

    function WI(pp) {
      let {
        item: ip
      } = pp;
      return (0, Bo.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, Bo.jsx)(Co.d, {
          itemName: ip,
          amount: 0
        })
      })
    }

    function yI(pp) {
      let {
        name: ip,
        percent: cp,
        progress: Op
      } = pp;
      return (0, Bo.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, Bo.jsx)(Zo, {
          percent: cp,
          label: `${(0,PI.zb)(ip)}: ${Op}`
        }), (0, Bo.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: Op
        })]
      })
    }

    function UI(pp) {
      let {
        subquests: ip,
        showDescriptions: cp = !1
      } = pp;
      return (0, Bo.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: ip.map((pp => {
          const ip = cp && "completed" === pp.status,
            Op = (0, Bo.jsxs)("li", {
              className: mo()("SkyblockQuestStep", pp.status, {
                JustFinished: pp.justFinished,
                JustUnlocked: pp.justUnlocked
              }),
              tabIndex: ip ? 0 : void 0,
              children: [null !== pp.iconItem && (0, Bo.jsx)(WI, {
                item: pp.iconItem
              }), null === pp.iconItem && (0, Bo.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === pp.status ? "\u2713" : "skipped" === pp.status ? "\u2212" : "\u25cb"
              }), (0, Bo.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, Bo.jsx)("strong", {
                  children: (0, Bo.jsx)(AI.d, {
                    text: pp.name
                  })
                }), cp && !ip && (0, Bo.jsx)("span", {
                  children: (0, Bo.jsx)(AI.d, {
                    text: pp.description
                  })
                }), null !== pp.barPercent && (0, Bo.jsx)(yI, {
                  name: pp.name,
                  percent: pp.barPercent,
                  progress: pp.progress
                }), null === pp.barPercent && !ip && (0, Bo.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: pp.statusLabel
                })]
              })]
            }, pp.id);
          return ip ? (0, Bo.jsx)(DI.f, {
            delayShow: 200,
            tooltipInner: (0, Bo.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, Bo.jsx)("span", {
                children: (0, Bo.jsx)(AI.d, {
                  text: pp.description
                })
              }), (0, Bo.jsx)("strong", {
                children: pp.statusLabel
              })]
            }),
            children: Op
          }, pp.id) : Op
        }))
      })
    }

    function wI(pp) {
      let {
        quest: ip,
        select: cp
      } = pp;
      const {
        t: Op
      } = (0, Qo.H)(), op = ip.focusStep;
      return (0, Bo.jsxs)(go.f, {
        className: mo()("SkyblockQuestCard", {
          Selected: ip.selected,
          Tracked: ip.tracked
        }),
        onClick: () => {
          cp(ip.id)
        },
        children: [(0, Bo.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, Bo.jsx)("strong", {
            children: (0, Bo.jsx)(AI.d, {
              text: ip.name
            })
          }), ip.tracked && (0, Bo.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: Op("skyblockGame:currentQuest")
          })]
        }), op && (0, Bo.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== op.iconItem && (0, Bo.jsx)(WI, {
            item: op.iconItem
          }), (0, Bo.jsx)(yI, {
            name: op.name,
            percent: op.barPercent,
            progress: op.progress
          })]
        }), (0, Bo.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: ip.progress
        })]
      })
    }

    function vI(pp) {
      let {
        controller: ip,
        surface: cp
      } = pp;
      const Op = (0, Jo.i)(Wc, ip.getSnapshot()),
        {
          t: op
        } = (0, Qo.H)(),
        Ip = ro();
      return Op.enabled ? (0, Bo.jsxs)(Bo.Fragment, {
        children: ["hud" === cp && (0, Bo.jsx)(Bo.Fragment, {
          children: Op.tracked && (0, Bo.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: Pc,
            children: (0, Bo.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [Op.trackedStepPulse > 0 && (0, Bo.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, Op.trackedStepPulse), (0, Bo.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: op("skyblockGame:currentQuest")
              }), (0, Bo.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, Bo.jsx)("strong", {
                  children: (0, Bo.jsx)(AI.d, {
                    text: Op.tracked.name
                  })
                }), null !== Op.tracked.clock && (0, Bo.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: Op.tracked.clock
                })]
              }), (0, Bo.jsx)(UI, {
                subquests: Op.tracked.subquests
              })]
            })
          })
        }), "menu" === cp && (0, Bo.jsx)(Fo.c, {
          show: Op.open,
          close: ip.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Bo.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: Ip,
            onKeyDown: Go,
            children: [(0, Bo.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Bo.jsx)("div", {
                children: (0, Bo.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: op("skyblockGame:quests")
                })
              }), (0, Bo.jsx)(go.l, {
                padIgnore: !0,
                onClick: ip.dismiss
              })]
            }), (0, Bo.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, Bo.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, Bo.jsx)("h3", {
                  children: op("skyblockGame:current")
                }), 0 === Op.active.length && (0, Bo.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: op("skyblockGame:noActiveQuests")
                }), Op.active.map((pp => (0, Bo.jsx)(wI, {
                  quest: pp,
                  select: ip.select
                }, pp.id))), (0, Bo.jsx)("h3", {
                  children: (0, Bo.jsxs)("button", {
                    type: "button",
                    className: mo()("SkyblockQuestSectionToggle", {
                      Expanded: Op.completedExpanded
                    }),
                    "aria-expanded": Op.completedExpanded,
                    onClick: ip.toggleCompleted,
                    children: [(0, Bo.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), op("skyblockGame:completed"), (0, Bo.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: Op.completed.length
                    })]
                  })
                }), Op.completedExpanded && 0 === Op.completed.length && (0, Bo.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: op("skyblockGame:noCompletedQuests")
                }), Op.completedExpanded && Op.completed.map((pp => (0, Bo.jsx)(wI, {
                  quest: pp,
                  select: ip.select
                }, pp.id)))]
              }), Op.detail && (0, Bo.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [Op.detail.completed && (0, Bo.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: op("skyblockGame:completedQuest")
                }), (0, Bo.jsx)("h3", {
                  children: (0, Bo.jsx)(AI.d, {
                    text: Op.detail.name
                  })
                }), (0, Bo.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, Bo.jsx)(AI.d, {
                    text: Op.detail.description
                  })
                }), (0, Bo.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [Op.detail.progress, null !== Op.detail.clock && (0, Bo.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: Op.detail.clock
                  })]
                }), (0, Bo.jsx)(UI, {
                  subquests: Op.detail.subquests,
                  showDescriptions: !0
                }), Op.detail.tracked && (0, Bo.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: Op.detail.trackLabel
                }), !Op.detail.completed && !Op.detail.tracked && (0, Bo.jsx)(go.o, {
                  onClick: ip.trackSelected,
                  disabled: !Op.detail.canTrack,
                  children: Op.detail.trackLabel
                }), Op.detail.canViewDialogue && (0, Bo.jsx)(go.f, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: ip.viewDialogue,
                  children: op("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var tI = cp(1060),
      HI = cp(2695);

    function dI(pp, ip, cp, Op, op) {
      const Ip = pp => "linear" === op ? pp : {
          Wo: op,
          point: pp
        },
        Sp = {};
      for (const [xp, Lp] of Op)
        for (const [ip, cp] of Object.entries(pp(xp, Lp, Ip))) Sp[ip] ??= {
          timeline: []
        }, Sp[ip].timeline.push(cp);
      return {
        Lo: ip,
        loop: cp,
        Do: Sp
      }
    }
    const eI = .547,
      uI = .022,
      jI = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      kI = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function mI(pp, ip, cp) {
      const {
        drop: Op = 0,
        shift: op = 0,
        torso: Ip = 0,
        nod: Sp = 0,
        tilt: xp = 0,
        legs: Lp = [0, 0],
        arms: Yp = 0,
        spread: Dp = 0
      } = ip, Ap = eI * Math.cos(Ip) - uI * Math.sin(Ip), Pp = eI * Math.sin(Ip) + uI * Math.cos(Ip), Wp = cp([0, -Op, op]);
      return {
        LowerBody: {
          timeFraction: pp,
          position: Wp,
          rotation: cp([0, 0, 0])
        },
        UpperBody: {
          timeFraction: pp,
          position: Wp,
          rotation: cp([Ip, 0, xp])
        },
        HeadMesh: {
          timeFraction: pp,
          position: cp([0, Ap - eI - Op, Pp - uI + op]),
          rotation: cp([Ip + Sp, 0, xp])
        },
        LegLeftMesh: {
          timeFraction: pp,
          rotation: cp([Lp[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: pp,
          rotation: cp([Lp[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: pp,
          rotation: cp([Yp, 0, Dp])
        },
        ArmRightMesh: {
          timeFraction: pp,
          rotation: cp([Yp, 0, -Dp])
        }
      }
    }

    function RI(pp, ip, cp) {
      return dI(mI, pp, ip, cp, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function qI(pp) {
      return "number" === typeof pp ? [pp, pp] : pp
    }

    function MI(pp, ip, cp) {
      const {
        rise: Op = 0,
        shift: op = 0,
        torso: Ip = 0,
        twist: Sp = 0,
        tilt: xp = 0,
        nod: Lp = 0,
        cock: Yp = 0,
        arms: Dp = 0,
        spread: Ap = 0
      } = ip, [Pp, Wp] = qI(Dp), [yp, Up] = qI(Ap);
      return {
        TorsoNode: {
          timeFraction: pp,
          position: cp([0, Op, op]),
          rotation: cp([Ip, Sp, xp])
        },
        HeadMesh: {
          timeFraction: pp,
          rotation: cp([Lp, 0, Yp])
        },
        ArmLeftMesh: {
          timeFraction: pp,
          rotation: cp([Pp, 0, yp])
        },
        ArmRightMesh: {
          timeFraction: pp,
          rotation: cp([Wp, 0, -Up])
        }
      }
    }
    const CI = [1.0625, -1, 0];

    function EI(pp) {
      return "number" === typeof pp ? [pp, pp] : pp
    }

    function XI(pp, ip, cp) {
      const {
        drop: Op = 0,
        shift: op = 0,
        torso: Ip = 0,
        tilt: Sp = 0,
        nod: xp = 0,
        cock: Lp = 0,
        legs: Yp = [0, 0],
        arms: Dp = 0,
        spread: Ap = 0
      } = ip, [Pp, Wp] = EI(Dp), [yp, Up] = EI(Ap), wp = -Ip, vp = -Sp, [tp, Hp, dp] = function(pp, ip) {
        const [cp, Op, op] = [-CI[0], CI[1], -CI[2]], Ip = cp * Math.cos(ip) - Op * Math.sin(ip), Sp = cp * Math.sin(ip) + Op * Math.cos(ip);
        return [Ip - cp, -(Sp * Math.cos(pp) - op * Math.sin(pp) - Op), Sp * Math.sin(pp) + op * Math.cos(pp) - op]
      }(wp, vp), ep = cp([0, -Op, op]);
      return {
        TorsoNode: {
          timeFraction: pp,
          position: cp([tp, Hp - Op, dp + op]),
          rotation: cp([wp, 0, vp])
        },
        HeadMesh: {
          timeFraction: pp,
          rotation: cp([-xp, 0, -Lp])
        },
        ArmLeftMesh: {
          timeFraction: pp,
          rotation: cp([-Pp, 0, -yp])
        },
        ArmRightMesh: {
          timeFraction: pp,
          rotation: cp([-Wp, 0, Up])
        },
        LegLeftMesh: {
          timeFraction: pp,
          position: ep,
          rotation: cp([-Yp[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: pp,
          position: ep,
          rotation: cp([-Yp[1], 0, 0])
        }
      }
    }
    var lI = cp(37395),
      QI = cp(38690),
      JI = cp(38856);

    function BI(pp, ip, cp) {
      var Op, op;
      const Ip = function() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return pp + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - pp) * cp
        },
        [Sp, xp] = null !== (Op = pp.legs) && void 0 !== Op ? Op : [0, 0],
        [Lp, Yp] = null !== (op = ip.legs) && void 0 !== op ? op : [0, 0];
      return {
        drop: Ip(pp.drop, ip.drop),
        shift: Ip(pp.shift, ip.shift),
        torso: Ip(pp.torso, ip.torso),
        nod: Ip(pp.nod, ip.nod),
        tilt: Ip(pp.tilt, ip.tilt),
        legs: [Ip(Sp, Lp), Ip(xp, Yp)],
        arms: Ip(pp.arms, ip.arms),
        spread: Ip(pp.spread, ip.spread)
      }
    }
    const NI = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      TI = RI(4400, !0, [
        [0, NI],
        [.16, {
          ...NI,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, NI],
        [.44, {
          ...NI,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, BI(NI, jI, .7)],
        [.66, BI(NI, jI, .78)],
        [.74, BI(NI, kI, .65)],
        [.86, {
          ...NI,
          drop: .14
        }],
        [1, NI]
      ], "catmull-rom-spline"),
      fI = {
        ...NI,
        drop: .14,
        torso: .3,
        spread: .4
      },
      bI = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      hI = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      aI = {
        caveGolem: TI,
        magmaGolem: RI(3600, !0, [
          [0, fI],
          [.12, {
            ...fI,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...fI,
            tilt: -.08
          }],
          [.4, {
            ...fI,
            tilt: .06,
            drop: .11
          }],
          [.52, BI(fI, jI, .9)],
          [.62, BI(fI, kI, .8)],
          [.7, BI(fI, kI, .45)],
          [.78, BI(fI, kI, .85)],
          [.9, {
            ...fI,
            drop: .17
          }],
          [1, fI]
        ], "catmull-rom-spline"),
        frostWraith: function(pp, ip, cp) {
          return dI(MI, pp, ip, cp, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, bI],
          [.14, {
            ...bI,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...bI,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...bI,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...bI,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...bI,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...bI,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...bI,
            rise: .16,
            tilt: -.04
          }],
          [1, bI]
        ], "catmull-rom-spline"),
        tikiTerror: function(pp, ip, cp) {
          return dI(XI, pp, ip, cp, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, hI],
          [.16, {
            ...hI,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, hI],
          [.44, {
            ...hI,
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
            ...hI,
            drop: .1
          }],
          [1, hI]
        ], "catmull-rom-spline")
      },
      nI = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      FI = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      gI = Object.fromEntries(Object.entries(aI).map((pp => {
        let [ip, cp] = pp;
        return [ip, (0, JI.b)((0, lI.d)(cp), ip)]
      })));

    function GI(pp) {
      const ip = function(pp) {
        var ip;
        const cp = (0, QI.b)(pp).poseRig;
        return null !== (ip = FI[pp]) && void 0 !== ip ? ip : void 0 === cp ? null : nI[cp]
      }(pp);
      return null === ip ? null : gI[ip]
    }

    function rI(pp) {
      return {
        "--difficulty-colour": pp
      }
    }
    const ZI = (0, Rp.lazy)((() => (0, HI.c)(cp.e(203).then((() => cp(41768))), (pp => pp.MobPreview))));

    function zI(pp) {
      var ip, cp, Op;
      let {
        picker: op,
        controller: Ip
      } = pp;
      const {
        t: Sp
      } = (0, Qo.H)(), xp = ro(), {
        page: Lp
      } = op;
      return (0, Bo.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: xp,
        onKeyDown: pp => {
          "ArrowLeft" === pp.key ? (pp.preventDefault(), pp.stopPropagation(), Ip.previous()) : "ArrowRight" === pp.key ? (pp.preventDefault(), pp.stopPropagation(), Ip.next()) : Go(pp)
        },
        style: rI(Lp.colour),
        children: [(0, Bo.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, Bo.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: op.dungeonName
          }), (0, Bo.jsx)(go.l, {
            padIgnore: !0,
            onClick: Ip.dismiss
          })]
        }), (0, Bo.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, Bo.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, Bo.jsx)(go.f, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !op.canPrevious,
              onClick: Ip.previous,
              children: (0, Bo.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Bo.jsx)(tI.d, {
                  name: "angle-up"
                })
              })
            }), (0, Bo.jsxs)("div", {
              className: mo()("SkyblockBossPickerBoss", {
                Locked: !Lp.unlocked
              }),
              children: [null !== Lp.bossMobType && (0, Bo.jsx)(Rp.Suspense, {
                fallback: (0, Bo.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, Bo.jsx)(ZI, {
                  className: "SkyblockBossPickerModel",
                  mobType: Lp.bossMobType,
                  variation: Lp.bossMobVariation,
                  animation: null !== (ip = GI(Lp.bossMobType)) && void 0 !== ip ? ip : void 0
                })
              }), null === Lp.bossMobType && (0, Bo.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, Bo.jsx)(go.f, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !op.canNext,
              onClick: Ip.next,
              children: (0, Bo.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Bo.jsx)(tI.d, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, Bo.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, Bo.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [Lp.beaten && (0, Bo.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), Lp.label]
            }), (0, Bo.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (cp = Lp.bossName) && void 0 !== cp ? cp : "???"
            }), (0, Bo.jsxs)("span", {
              className: mo()("SkyblockBossPickerRecord", {
                Locked: null !== Lp.lockedHint
              }),
              children: [null !== Lp.lockedHintHighlight && (0, Bo.jsxs)(Bo.Fragment, {
                children: [Lp.lockedHintHighlight.before, (0, Bo.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: rI(Lp.lockedHintHighlight.colour),
                  children: [null !== Lp.lockedHintHighlight.icon && (0, Bo.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, Bo.jsx)(Co.d, {
                      itemName: Lp.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), Lp.lockedHintHighlight.name]
                }), Lp.lockedHintHighlight.after]
              }), null === Lp.lockedHintHighlight && (null !== (Op = Lp.lockedHint) && void 0 !== Op ? Op : Lp.summary)]
            })]
          }), (0, Bo.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: op.pages.map((pp => (0, Bo.jsx)("span", {
              className: mo()("SkyblockBossPickerDot", {
                Current: pp.current,
                Locked: !pp.unlocked
              }),
              style: rI(pp.colour)
            }, pp.difficulty)))
          }), (0, Bo.jsx)(go.w, {
            className: "SkyblockBossPickerFight",
            disabled: !Lp.unlocked,
            onClick: Ip.enter,
            children: Sp("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function sI(pp) {
      let {
        dungeon: ip,
        select: cp
      } = pp;
      return (0, Bo.jsxs)(go.f, {
        className: mo()("SkyblockDungeonCard", {
          Selected: ip.selected
        }),
        onClick: () => {
          cp(ip.id)
        },
        children: [(0, Bo.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, Bo.jsx)("strong", {
            children: ip.name
          }), (0, Bo.jsx)("span", {
            children: ip.beatenSummary
          })]
        }), (0, Bo.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: ip.difficulties.map((pp => (0, Bo.jsxs)("span", {
            className: mo()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: pp.beaten
            }),
            style: rI(pp.colour),
            title: pp.summary,
            children: [pp.beaten && (0, Bo.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), pp.label]
          }, pp.difficulty)))
        })]
      })
    }

    function KI(pp) {
      let {
        controller: ip
      } = pp;
      const cp = (0, Jo.i)(vc, ip.getSnapshot()),
        {
          t: Op
        } = (0, Qo.H)(),
        op = ro();
      return cp.enabled ? (0, Bo.jsxs)(Fo.c, {
        show: cp.open,
        close: ip.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [cp.picker && (0, Bo.jsx)(zI, {
          picker: cp.picker,
          controller: ip
        }), !cp.picker && (0, Bo.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: op,
          onKeyDown: Go,
          children: [(0, Bo.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Bo.jsxs)("div", {
              children: [(0, Bo.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: Op("skyblockGame:dungeons")
              }), (0, Bo.jsx)("p", {
                children: Op("skyblockGame:dungeonsIntro")
              })]
            }), (0, Bo.jsx)(go.l, {
              padIgnore: !0,
              onClick: ip.dismiss
            })]
          }), (0, Bo.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, Bo.jsx)("div", {
              className: "SkyblockDungeonList",
              children: cp.dungeons.map((pp => (0, Bo.jsx)(sI, {
                dungeon: pp,
                select: ip.select
              }, pp.id)))
            }), cp.detail && (0, Bo.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, Bo.jsx)("h3", {
                children: cp.detail.name
              }), (0, Bo.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: cp.detail.difficulties.map((pp => (0, Bo.jsxs)("li", {
                  className: mo()("SkyblockDungeonRecord", {
                    Beaten: pp.beaten
                  }),
                  children: [(0, Bo.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: rI(pp.colour),
                    children: [pp.beaten && (0, Bo.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), pp.label]
                  }), (0, Bo.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: pp.summary
                  })]
                }, pp.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function VI(pp) {
      let {
        collection: ip,
        select: cp
      } = pp;
      return (0, Bo.jsxs)(go.f, {
        className: mo()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: ip.selected,
          Locked: ip.locked
        }),
        ariaPressed: ip.selected,
        onClick: () => {
          cp(ip.id)
        },
        children: [(0, Bo.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, Bo.jsx)(Co.d, {
            itemName: ip.icon,
            amount: 0
          })
        }), (0, Bo.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, Bo.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, Bo.jsx)("strong", {
              children: ip.name
            }), (0, Bo.jsx)("span", {
              children: ip.tier
            })]
          }), (0, Bo.jsx)(Zo, {
            percent: ip.percent,
            label: `${ip.name}: ${ip.progress}`
          }), (0, Bo.jsx)("span", {
            className: "SkyblockSkillXp",
            children: ip.progress
          })]
        })]
      })
    }

    function pS(pp) {
      let {
        collection: ip
      } = pp;
      const {
        t: cp
      } = (0, Qo.H)();
      return (0, Bo.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, Bo.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, Bo.jsx)(Co.d, {
            itemName: ip.icon,
            amount: 0
          })
        }), (0, Bo.jsx)("h3", {
          children: ip.name
        }), (0, Bo.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: ip.tier
        }), (0, Bo.jsx)("p", {
          children: ip.locked ? cp("skyblockGame:collectionLocked") : ip.count
        }), null !== ip.nextReward && (0, Bo.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, Bo.jsx)("strong", {
            children: cp("skyblockGame:collectionNextReward")
          }), (0, Bo.jsx)("span", {
            children: ip.nextReward
          })]
        }), (0, Bo.jsx)(Zo, {
          percent: ip.percent,
          label: ip.progress
        }), (0, Bo.jsx)("p", {
          children: ip.progress
        })]
      })
    }

    function iS(pp) {
      let {
        controller: ip
      } = pp;
      const cp = (0, Jo.i)(fc, ip.getSnapshot()),
        {
          t: Op
        } = (0, Qo.H)(),
        op = ro();
      return cp.enabled ? (0, Bo.jsx)(Fo.c, {
        show: cp.open,
        close: ip.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Bo.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: op,
          onKeyDown: Go,
          children: [(0, Bo.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Bo.jsxs)("div", {
              children: [(0, Bo.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: Op("skyblockGame:collections")
              }), (0, Bo.jsxs)("p", {
                children: [Op("skyblockGame:collectionsIntro"), " ", cp.tiersUnlocked]
              })]
            }), (0, Bo.jsx)(go.l, {
              padIgnore: !0,
              onClick: ip.dismiss
            })]
          }), (0, Bo.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: cp.categories.map((pp => (0, Bo.jsxs)(go.f, {
              className: mo()("SkyblockCollectionCategory", {
                Selected: pp.selected
              }),
              ariaPressed: pp.selected,
              padTabSelected: pp.selected,
              onClick: () => {
                ip.selectCategory(pp.id)
              },
              children: [(0, Bo.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, Bo.jsx)(Co.d, {
                  itemName: pp.icon,
                  amount: 0
                })
              }), (0, Bo.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, Bo.jsx)("strong", {
                  children: pp.label
                }), (0, Bo.jsx)("span", {
                  children: pp.tiers
                })]
              })]
            }, pp.id)))
          }), (0, Bo.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, Bo.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: cp.collections.map((pp => (0, Bo.jsx)(VI, {
                collection: pp,
                select: ip.select
              }, pp.id)))
            }), cp.detail && (0, Bo.jsx)(pS, {
              collection: cp.detail
            })]
          })]
        })
      }) : null
    }
    const cS = ["completed", "active", "available", "locked"],
      OS = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function oS(pp) {
      let {
        controller: ip
      } = pp;
      const cp = (0, Jo.i)(Kc, ip.getSnapshot()),
        {
          t: Op
        } = (0, Qo.H)(),
        op = ro();
      return cp.enabled ? (0, Bo.jsx)(Fo.c, {
        show: cp.open,
        close: ip.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Bo.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: op,
          onKeyDown: Go,
          children: [(0, Bo.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Bo.jsxs)("div", {
              children: [(0, Bo.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: Op("skyblockDevQuests:title")
              }), (0, Bo.jsx)("p", {
                children: Op("skyblockDevQuests:intro")
              })]
            }), (0, Bo.jsx)(go.l, {
              onClick: ip.dismiss
            })]
          }), (0, Bo.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [cS.map((pp => (0, Bo.jsx)("span", {
              className: mo()("SkyblockQuestGraphLegendState", pp),
              children: Op(`skyblockDevQuests:state_${pp}`)
            }, pp))), OS.map((pp => (0, Bo.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, Bo.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, Bo.jsx)("line", {
                  className: mo()("SkyblockQuestGraphEdge", pp),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), Op(`skyblockDevQuests:edge_${pp}`)]
            }, pp)))]
          }), (0, Bo.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, Bo.jsxs)("div", {
              className: mo()("SkyblockQuestGraphCanvas", {
                Planning: cp.planning
              }),
              style: {
                width: cp.width,
                height: cp.height
              },
              children: [(0, Bo.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: cp.width,
                height: cp.height,
                "aria-hidden": "true",
                children: [(0, Bo.jsx)("defs", {
                  children: (0, Bo.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, Bo.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), cp.edges.map((pp => (0, Bo.jsx)("path", {
                  className: mo()("SkyblockQuestGraphEdge", pp.kind, {
                    InPlan: pp.inPlan
                  }),
                  d: pp.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, pp.key)))]
              }), cp.nodes.map((pp => (0, Bo.jsxs)("button", {
                type: "button",
                className: mo()("SkyblockQuestGraphNode", pp.state, {
                  InPlan: pp.inPlan,
                  Hovered: pp.hovered
                }),
                style: {
                  left: pp.left,
                  top: pp.top,
                  width: 190,
                  height: 52
                },
                title: pp.id,
                onMouseEnter: () => {
                  ip.hover(pp.id)
                },
                onMouseLeave: () => {
                  ip.hover(null)
                },
                onFocus: () => {
                  ip.hover(pp.id)
                },
                onBlur: () => {
                  ip.hover(null)
                },
                onClick: () => {
                  ip.jump(pp.id)
                },
                children: [(0, Bo.jsx)("strong", {
                  children: pp.name
                }), (0, Bo.jsx)("span", {
                  children: pp.detail
                })]
              }, pp.id)))]
            })
          })]
        })
      }) : null
    }
    const IS = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      SS = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${AO}ms`,
        "--forge-duration": "2150ms"
      },
      xS = Array.from({
        length: 18
      }, ((pp, ip) => ({
        "--ember-left": `${(4+92*(.618034*ip%1)).toFixed(1)}%`,
        "--ember-size": 3 + ip % 3 * 2 + "px",
        "--ember-drift": 14 * (ip % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*ip%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*ip%8).toFixed(2)}s`
      })));

    function LS(pp) {
      if (pp.style.removeProperty("--part-size"), null === pp.parentElement || "wrap" === getComputedStyle(pp.parentElement).flexWrap) return;
      const ip = [...pp.children],
        cp = getComputedStyle(pp),
        Op = parseFloat(cp.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        op = (pp.clientHeight - parseFloat(cp.rowGap) * (ip.length - 1)) / ip.length,
        Ip = ip.map((pp => {
          const ip = getComputedStyle(pp),
            cp = pp.querySelector("h3"),
            Ip = pp.querySelector(".SkyblockForgeParts");
          if (null === cp || null === Ip) return Op;
          const Sp = op - parseFloat(ip.paddingTop) - parseFloat(ip.paddingBottom) - cp.offsetHeight - parseFloat(getComputedStyle(cp).marginBottom),
            xp = parseFloat(getComputedStyle(Ip).columnGap),
            Lp = Ip.children.length;
          let Yp = 0;
          for (let Op = 1; Op <= Lp; Op++) {
            const pp = Math.ceil(Lp / Op);
            Yp = Math.max(Yp, Math.min((Ip.clientWidth - xp * (Op - 1)) / Op, (Sp - xp * (pp - 1)) / pp))
          }
          return Yp
        }));
      pp.style.setProperty("--part-size", `${Math.floor(Math.max(Op,Math.min(...Ip)))}px`)
    }

    function YS(pp) {
      var ip, cp, Op, Ip, Sp;
      let {
        controller: xp
      } = pp;
      const Lp = (0, Jo.i)(tO, xp.getSnapshot()),
        {
          t: Yp
        } = (0, Qo.H)(),
        Dp = ro(),
        Ap = function() {
          const pp = (0, Rp.useRef)(null),
            ip = (0, Rp.useRef)(null);
          return (0, Rp.useLayoutEffect)((() => {
            null !== pp.current && LS(pp.current)
          })), (0, Rp.useCallback)((cp => {
            var Op;
            null === (Op = ip.current) || void 0 === Op || Op.disconnect(), ip.current = null, pp.current = cp, null !== cp && (ip.current = new ResizeObserver((() => {
              LS(cp)
            })), ip.current.observe(cp))
          }), [])
        }(),
        Pp = function(pp) {
          const ip = (0, Rp.useRef)(null);
          return (0, Rp.useLayoutEffect)((() => {
            const pp = ip.current;
            if (null !== pp) {
              pp.style.removeProperty("font-size");
              for (let ip = 1.7; ip > 1.1 && pp.scrollWidth > pp.clientWidth; ip -= .1) pp.style.fontSize = ip - .1 + "rem"
            }
          }), [pp]), (0, Rp.useCallback)((pp => {
            ip.current = pp
          }), [])
        }(null === (ip = Lp.preview) || void 0 === ip ? void 0 : ip.name),
        Wp = (0, Rp.useRef)(null),
        yp = (0, Rp.useRef)({}),
        Up = Lp.forging,
        wp = null !== (cp = null === Up || void 0 === Up ? void 0 : Up.preview.tier) && void 0 !== cp ? cp : 0,
        vp = null !== (Op = null === Up || void 0 === Up ? void 0 : Up.preview.named) && void 0 !== Op && Op,
        tp = (0, Rp.useMemo)((() => {
          return null === Up ? null : {
            flames: (pp = wp, ip = vp, Array.from({
              length: 26 + 6 * pp + (ip ? 20 : 0)
            }, ((pp, ip) => {
              const cp = ip < 6,
                Op = Math.random() * Math.PI * 2,
                op = cp ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                Ip = Math.cos(Op) * op,
                Sp = Math.sin(Op) * op - 2 - 3 * Math.random(),
                xp = Math.random(),
                [Lp, Yp, Dp] = cp ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : xp < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : xp < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [xp < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": Lp,
                "--x0": `${(.15*Ip).toFixed(2)}rem`,
                "--y0": `${(.15*Sp).toFixed(2)}rem`,
                "--x": `${Ip.toFixed(2)}rem`,
                "--y": `${Sp.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${Yp.toFixed(2)}rem`,
                "--duration": `${Math.round(Dp)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: yO(wp, vp)
          };
          var pp, ip
        }), [null === Up || void 0 === Up ? void 0 : Up.id]);
      if (!Lp.enabled) return null;
      const Hp = Lp.preview,
        dp = Lp.arriving,
        ep = null !== dp && !dp.sameSword,
        jp = null !== Hp && (0, Bo.jsx)(Co.d, {
          itemName: Hp.baseSword,
          amount: 0,
          enchantmentTier: Hp.enchantmentTier
        });
      return (0, Bo.jsx)(Fo.c, {
        show: Lp.open,
        close: xp.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Bo.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: Dp,
          onKeyDown: Go,
          children: [(0, Bo.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: xS.map(((pp, ip) => (0, Bo.jsx)("span", {
              style: pp
            }, ip)))
          }), (0, Bo.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Bo.jsxs)("div", {
              children: [(0, Bo.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: Yp("skyblockGame:forgeTitle")
              }), (0, Bo.jsx)("p", {
                children: Yp("skyblockGame:forgeIntro")
              })]
            }), (0, Bo.jsx)(go.l, {
              onClick: xp.dismiss
            })]
          }), (0, Bo.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, Bo.jsx)("div", {
              ref: Ap,
              className: mo()("SkyblockForgeSlots", {
                Locked: null !== Up
              }),
              children: Lp.slots.map((pp => (0, Bo.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, Bo.jsx)("h3", {
                  children: pp.label
                }), (0, Bo.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: pp.parts.map((ip => (0, Bo.jsx)("button", {
                    type: "button",
                    className: mo()("SkyblockForgePart", {
                      Selected: ip.selected,
                      Missing: ip.placeholder
                    }),
                    disabled: ip.placeholder,
                    title: ip.placeholder ? Yp("skyblockGame:forgePickParts") : ip.itemName,
                    "aria-pressed": ip.selected,
                    onClick: () => {
                      xp.select(pp.kind, ip.material)
                    },
                    children: (0, Bo.jsx)(Co.d, {
                      itemName: ip.itemName,
                      amount: ip.owned
                    })
                  }, ip.material)))
                })]
              }, pp.kind)))
            }), (0, Bo.jsxs)("div", {
              className: mo()("SkyblockForgeAnvil", {
                Named: null === Hp || void 0 === Hp ? void 0 : Hp.named
              }),
              style: {
                "--tier": null === Hp ? "transparent" : op.lb[Hp.enchantmentTier]
              },
              children: [(0, Bo.jsxs)("div", {
                className: mo()("SkyblockForgeAltar", {
                  Forging: null !== Up
                }),
                style: null === Up ? void 0 : SS,
                children: [(0, Bo.jsxs)("div", {
                  className: mo()("SkyblockForgeMount", {
                    Arrive: null !== dp
                  }),
                  children: [null === Hp && (0, Bo.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, Bo.jsx)(Co.d, {
                      itemName: Lp.unformedSword,
                      amount: 0
                    })
                  }), null !== Hp && (0, Bo.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== Hp && null === Up && (0, Bo.jsx)("div", {
                    ref: Wp,
                    className: "SkyblockForgeFloat",
                    children: (0, Bo.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: jp
                    })
                  }), null !== Hp && (0, Bo.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: WO.map(((pp, ip) => (0, Bo.jsx)("span", {
                      className: mo()({
                        Rune: "" !== pp.rune
                      }),
                      style: pp.style,
                      children: pp.rune
                    }, ip)))
                  }), null !== Up && null !== tp && (0, Bo.jsxs)(Bo.Fragment, {
                    children: [(0, Bo.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, Bo.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: tp.flames.map(((pp, ip) => (0, Bo.jsx)("span", {
                        style: pp
                      }, ip)))
                    }), (0, Bo.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: yp.current,
                      children: (0, Bo.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: jp
                      })
                    }), (0, Bo.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, Bo.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (wp >= 4 || vp) && (0, Bo.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, Bo.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: tp.sparks.map(((pp, ip) => (0, Bo.jsx)("span", {
                        style: pp
                      }, ip)))
                    }), (0, Bo.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, Bo.jsx)("p", {
                  className: mo()("SkyblockForgeStatus", null === (Ip = Lp.status) || void 0 === Ip ? void 0 : Ip.tone),
                  children: null === (Sp = Lp.status) || void 0 === Sp ? void 0 : Sp.text
                })]
              }), null === Hp && (0, Bo.jsx)("p", {
                className: mo()("SkyblockForgeName Waiting", {
                  ArriveText: ep
                }),
                children: Yp(Lp.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== Hp && (0, Bo.jsx)("h3", {
                ref: Pp,
                className: mo()("SkyblockForgeName", {
                  ArriveText: ep
                }),
                title: Hp.name,
                children: Hp.name
              }), (null === Hp || void 0 === Hp ? void 0 : Hp.named) && (0, Bo.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: Yp("skyblockGame:forgeSecret")
              }), (0, Bo.jsxs)(go.w, {
                className: "SkyblockForgeButton",
                disabled: !Lp.canForge,
                title: null === Hp ? void 0 : Yp("skyblockGame:forgeCoalOwned", {
                  owned: String(Lp.coalOwned)
                }),
                onClick: () => {
                  yp.current = function(pp) {
                    const ip = null === pp ? "none" : getComputedStyle(pp).transform,
                      cp = new DOMMatrixReadOnly("none" === ip ? void 0 : ip);
                    return {
                      "--settle-y": `${cp.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(cp.b,cp.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(Wp.current), vO(), xp.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [Yp("skyblockGame:forgeButton"), null !== Hp && (0, Bo.jsxs)("span", {
                  className: mo()("SkyblockForgeCost", {
                    Short: Hp.coalShort
                  }),
                  children: [(0, Bo.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, Bo.jsx)(Co.d, {
                      itemName: OO.b,
                      amount: 0
                    })
                  }), Hp.coalCost]
                })]
              })]
            }), (0, Bo.jsxs)("div", {
              className: mo()("SkyblockForgeDetails", {
                Named: null === Hp || void 0 === Hp ? void 0 : Hp.named
              }),
              children: [(0, Bo.jsx)("p", {
                className: mo()("SkyblockForgeLore", {
                  ArriveText: ep
                }),
                title: null === Hp || void 0 === Hp ? void 0 : Hp.lore,
                children: null === Hp || void 0 === Hp ? void 0 : Hp.lore
              }), (0, Bo.jsxs)("dl", {
                className: mo()("SkyblockForgeStats", {
                  ArriveText: ep
                }),
                children: [null === Hp && IS.map((pp => (0, Bo.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, Bo.jsx)("dt", {
                    children: Yp(pp)
                  }), (0, Bo.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, pp))), null === Hp || void 0 === Hp ? void 0 : Hp.stats.map((pp => (0, Bo.jsxs)("div", {
                  className: mo()("SkyblockForgeStat", {
                    Better: pp.better
                  }),
                  children: [(0, Bo.jsx)("dt", {
                    children: pp.label
                  }), (0, Bo.jsx)("dd", {
                    children: pp.value
                  })]
                }, pp.label)))]
              }), (0, Bo.jsx)("ul", {
                className: mo()("SkyblockForgeEffects", {
                  ArriveText: ep
                }),
                children: null === Hp || void 0 === Hp ? void 0 : Hp.effects.map((pp => (0, Bo.jsx)("li", {
                  children: pp
                }, pp)))
              })]
            })]
          })]
        })
      })
    }
    const DS = "Doom Rivet",
      AS = "Doom Crest";

    function PS(pp) {
      let {
        itemName: ip,
        amount: cp,
        owned: Op
      } = pp;
      return (0, Bo.jsxs)("span", {
        className: mo()("SkyblockSmugglerPrice", {
          Short: cp > Op
        }),
        children: [(0, Bo.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, Bo.jsx)(Co.d, {
            itemName: ip,
            amount: 0
          })
        }), (0, Bo.jsx)("span", {
          children: cp
        })]
      })
    }

    function WS(pp) {
      return pp.justBought ? "skyblockGame:smugglerJustBought" : pp.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function yS(pp) {
      let {
        deal: ip,
        view: cp,
        buy: Op
      } = pp;
      const {
        t: op
      } = (0, Qo.H)();
      return (0, Bo.jsxs)("div", {
        className: mo()("SkyblockSmugglerPocket", {
          Bought: ip.justBought,
          Unaffordable: !ip.affordable,
          SoldOut: ip.soldOut && !ip.justBought
        }),
        children: [(0, Bo.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, Bo.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, Bo.jsx)(Co.d, {
            itemName: ip.itemName,
            amount: 0,
            enchantmentTier: ip.enchantmentTier
          }), ip.amount > 1 && (0, Bo.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: op("skyblockGame:smugglerAmount", {
              amount: ip.amount
            })
          })]
        }), (0, Bo.jsx)("h3", {
          children: ip.displayName
        }), (0, Bo.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, Bo.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [ip.rivets > 0 && (0, Bo.jsx)(PS, {
              itemName: DS,
              amount: ip.rivets,
              owned: cp.rivetsOwned
            }), ip.crests > 0 && (0, Bo.jsx)(PS, {
              itemName: AS,
              amount: ip.crests,
              owned: cp.crestsOwned
            })]
          }), (0, Bo.jsx)(go.f, {
            className: "SkyblockSmugglerBuy",
            disabled: ip.soldOut || !ip.affordable || cp.pending,
            onClick: () => {
              Op(ip.slot)
            },
            children: op(WS(ip))
          })]
        })]
      }, ip.justBought ? cp.boughtCount : 0)
    }

    function US(pp) {
      let {
        controller: ip
      } = pp;
      const cp = (0, Jo.i)(eO, ip.getSnapshot()),
        {
          t: Op
        } = (0, Qo.H)(),
        op = ro();
      return cp.enabled ? (0, Bo.jsx)(Fo.c, {
        show: cp.open,
        close: ip.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Bo.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: op,
          onKeyDown: Go,
          children: [(0, Bo.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, Bo.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, Bo.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, Bo.jsxs)("div", {
              children: [(0, Bo.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: Op("skyblockGame:smugglerTitle")
              }), (0, Bo.jsx)("p", {
                children: Op("skyblockGame:smugglerIntro")
              })]
            }), (0, Bo.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, Bo.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, Bo.jsx)(PS, {
                  itemName: DS,
                  amount: cp.rivetsOwned,
                  owned: cp.rivetsOwned
                }), (0, Bo.jsx)(PS, {
                  itemName: AS,
                  amount: cp.crestsOwned,
                  owned: cp.crestsOwned
                })]
              }), (0, Bo.jsx)(go.l, {
                onClick: ip.dismiss
              })]
            })]
          }), (0, Bo.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: cp.deals.map((pp => (0, Bo.jsx)(yS, {
              deal: pp,
              view: cp,
              buy: ip.buy
            }, pp.slot)))
          }), (0, Bo.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, Bo.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: cp.rotatesText
            }), null !== cp.status && (0, Bo.jsx)("span", {
              className: mo()("SkyblockSmugglerStatus", cp.status.tone),
              children: cp.status.text
            })]
          })]
        })
      }) : null
    }

    function wS(pp) {
      let {
        phase: ip,
        className: cp
      } = pp;
      return (0, Bo.jsx)("span", {
        className: mo()("SkyblockMoon", `Moon-${ip}`, cp),
        "aria-hidden": "true"
      })
    }

    function vS(pp) {
      let {
        controller: ip
      } = pp;
      const cp = (0, Jo.i)(kO, ip.getSnapshot()),
        {
          t: Op
        } = (0, Qo.H)();
      return cp.enabled ? (0, Bo.jsx)(qo.h, {
        placement: "statBars",
        children: (0, Bo.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: mo()("SkyblockPassageChip", cp.open && "Open"),
          "aria-label": Op("skyblockGame:passageChipLabel", {
            phase: cp.phaseName
          }),
          title: Op("skyblockGame:passageChipLabel", {
            phase: cp.phaseName
          }),
          onMouseDown: pp => {
            pp.preventDefault()
          },
          onClick: ip.toggle,
          children: (0, Bo.jsx)(wS, {
            phase: cp.phase
          }, cp.phase)
        })
      }) : null
    }

    function tS(pp) {
      let {
        fish: ip
      } = pp;
      return (0, Bo.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, Bo.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, Bo.jsx)(Co.d, {
            itemName: ip.itemName,
            amount: 0
          })
        }), (0, Bo.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, Bo.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: ip.displayName
          }), (0, Bo.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: ip.where
          })]
        })]
      })
    }

    function HS(pp) {
      let {
        controller: ip
      } = pp;
      const cp = (0, Jo.i)(kO, ip.getSnapshot()),
        {
          t: Op
        } = (0, Qo.H)(),
        op = ro();
      return cp.enabled ? (0, Bo.jsx)(Fo.c, {
        show: cp.open,
        close: ip.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Bo.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: op,
          onKeyDown: Go,
          children: [(0, Bo.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, Bo.jsx)(wS, {
              phase: cp.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, Bo.jsxs)("div", {
              children: [(0, Bo.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: Op("skyblockGame:passageTitle")
              }), (0, Bo.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: cp.phaseName
              })]
            }), (0, Bo.jsx)(go.l, {
              padIgnore: !0,
              onClick: ip.dismiss
            })]
          }), (0, Bo.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: Op("skyblockGame:passageIntro")
          }), (0, Bo.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, Bo.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, Bo.jsx)("h3", {
                children: Op("skyblockGame:passageVisiting")
              }), (0, Bo.jsx)("ul", {
                className: "SkyblockPassageList",
                children: cp.visitors.map((pp => (0, Bo.jsx)(tS, {
                  fish: pp
                }, pp.itemName)))
              })]
            }), (0, Bo.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== cp.resting && (0, Bo.jsxs)(Bo.Fragment, {
                children: [(0, Bo.jsx)("h3", {
                  children: Op("skyblockGame:passageResting")
                }), (0, Bo.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, Bo.jsx)(tS, {
                    fish: cp.resting
                  })
                })]
              }), (0, Bo.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, Bo.jsx)(wS, {
                  phase: cp.nextPhase
                }), (0, Bo.jsx)("span", {
                  children: cp.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function dS() {
      return (0, Bo.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((pp => (0, Bo.jsx)("i", {
          style: {
            "--sparkle-index": pp
          }
        }, pp)))
      })
    }

    function eS(pp) {
      var ip;
      let {
        charm: cp,
        view: Op,
        controller: op
      } = pp;
      const {
        t: Ip
      } = (0, Qo.H)(), Sp = Op.shop, xp = (null === (ip = Op.sparkle) || void 0 === ip ? void 0 : ip.id) === cp.id;
      return (0, Bo.jsxs)("li", {
        className: mo()("SkyblockLampLightCharm", cp.owned && "Owned", cp.socketed && "Socketed"),
        children: [xp && (0, Bo.jsx)(dS, {}, Op.sparkle.count), (0, Bo.jsx)("h4", {
          children: cp.name
        }), (0, Bo.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: cp.effect
        }), (0, Bo.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: cp.lines.map((pp => (0, Bo.jsxs)("li", {
            className: mo()("SkyblockLampLightOddsLine", "better" === pp.tone ? "Better" : "worse" === pp.tone ? "Worse" : "Same"),
            children: [(0, Bo.jsx)("span", {
              className: "Before",
              children: pp.before
            }), (0, Bo.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, Bo.jsx)("span", {
              className: "After",
              children: pp.after
            })]
          }, pp.label)))
        }), (0, Bo.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: cp.owned ? cp.socketed ? (0, Bo.jsxs)(Bo.Fragment, {
            children: [(0, Bo.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: Ip("skyblockGame:lampLightSocketed")
            }), (0, Bo.jsx)(go.S, {
              disabled: !Op.canCommand,
              ariaLabel: Ip("skyblockGame:lampLightRemoveLabel", {
                charm: cp.name
              }),
              onClick: () => {
                op.socket(null)
              },
              children: Ip("skyblockGame:lampLightRemove")
            })]
          }) : (0, Bo.jsx)(go.f, {
            disabled: !Op.canCommand || !Sp.heldRod,
            ariaLabel: Ip("skyblockGame:lampLightSocketLabel", {
              charm: cp.name
            }),
            onClick: () => {
              op.socket(cp.id)
            },
            children: Ip("skyblockGame:lampLightSocket")
          }) : (0, Bo.jsx)(go.f, {
            disabled: !Op.canCommand || !cp.affordable,
            ariaLabel: Ip("skyblockGame:lampLightBuyLabel", {
              item: cp.name,
              cost: cp.cost
            }),
            onClick: () => {
              op.buy(cp.id)
            },
            children: cp.cost
          })
        })]
      })
    }

    function uS(pp) {
      var ip;
      let {
        tint: cp,
        view: Op,
        controller: op
      } = pp;
      const {
        t: Ip
      } = (0, Qo.H)();
      return (0, Bo.jsxs)("li", {
        className: mo()("SkyblockLampLightTint", cp.wearing && "Wearing"),
        style: {
          "--tint-colour": cp.colour
        },
        children: [(null === (ip = Op.sparkle) || void 0 === ip ? void 0 : ip.id) === cp.id && (0, Bo.jsx)(dS, {}, Op.sparkle.count), (0, Bo.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, Bo.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: cp.name
        }), cp.wearing ? (0, Bo.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: Ip("skyblockGame:lampLightWearing")
        }) : (0, Bo.jsx)(go.f, {
          disabled: !Op.canCommand || !cp.owned && !cp.affordable,
          ariaLabel: cp.owned ? Ip("skyblockGame:lampLightWearLabel", {
            tint: cp.name
          }) : Ip("skyblockGame:lampLightBuyLabel", {
            item: cp.name,
            cost: cp.cost
          }),
          onClick: () => {
            cp.owned ? op.wearTint(cp.id) : op.buy(cp.id)
          },
          children: cp.owned ? Ip("skyblockGame:lampLightWear") : cp.cost
        })]
      })
    }

    function jS(pp) {
      let {
        controller: ip
      } = pp;
      const cp = (0, Jo.i)(fO, ip.getSnapshot()),
        {
          t: Op
        } = (0, Qo.H)(),
        op = cp.shop;
      return (0, Bo.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, Bo.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, Bo.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: cp.balance
          }), (0, Bo.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": cp.releasing,
            className: mo()("SkyblockLampLightSwitch", cp.releasing && "On"),
            disabled: cp.releasing ? "ready" !== cp.status : !cp.canCommand,
            onClick: () => {
              ip.setRelease(!cp.releasing)
            },
            children: [(0, Bo.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, Bo.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), Op("skyblockGame:lampLightRelease")]
          }), (0, Bo.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: Op("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== cp.notice && (0, Bo.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: cp.notice
        }), null !== op && (0, Bo.jsxs)(Bo.Fragment, {
          children: [(0, Bo.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, Bo.jsx)("h3", {
              children: Op("skyblockGame:lampLightCharms")
            }), (0, Bo.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: op.oddsFor
            }), (0, Bo.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((pp => (0, Bo.jsx)("button", {
                type: "button",
                "aria-pressed": cp.situation === pp,
                className: mo()("SkyblockLampLightSituation", cp.situation === pp && "Selected"),
                onClick: () => {
                  ip.setSituation(pp)
                },
                children: Op("open" === pp ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, pp)))
            })]
          }), !op.heldRod && (0, Bo.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: Op("skyblockGame:lampLightHoldRod")
          }), (0, Bo.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: op.charms.map((pp => (0, Bo.jsx)(eS, {
              charm: pp,
              view: cp,
              controller: ip
            }, pp.id)))
          }), (0, Bo.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, Bo.jsx)("h3", {
              children: Op("skyblockGame:lampLightTints")
            })
          }), (0, Bo.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, Bo.jsxs)("li", {
              className: mo()("SkyblockLampLightTint", "Islands", op.wearingIslandColours && "Wearing"),
              children: [(0, Bo.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, Bo.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: Op("skyblockGame:lampLightIslandColours")
              }), op.wearingIslandColours ? (0, Bo.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: Op("skyblockGame:lampLightWearing")
              }) : (0, Bo.jsx)(go.f, {
                disabled: !cp.canCommand,
                ariaLabel: Op("skyblockGame:lampLightWearLabel", {
                  tint: Op("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  ip.wearTint(null)
                },
                children: Op("skyblockGame:lampLightWear")
              })]
            }), op.tints.map((pp => (0, Bo.jsx)(uS, {
              tint: pp,
              view: cp,
              controller: ip
            }, pp.id)))]
          })]
        })]
      })
    }

    function kS(pp) {
      let {
        controller: ip
      } = pp;
      const cp = (0, Jo.i)(fO, ip.getSnapshot()),
        {
          t: Op
        } = (0, Qo.H)();
      return cp.releasing ? (0, Bo.jsx)(qo.h, {
        children: (0, Bo.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            ip.setRelease(!1)
          },
          children: [(0, Bo.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, Bo.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [Op("skyblockGame:lampLightReleasing"), " \xb7 ", cp.balance]
          }), (0, Bo.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: Op("skyblockGame:lampLightKeepCatches")
          }), null !== cp.gained && (0, Bo.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: cp.gained.text
          }, cp.gained.count)]
        })
      }) : null
    }

    function mS(pp) {
      let {
        island: ip,
        view: cp,
        aim: Op
      } = pp;
      const {
        t: op
      } = (0, Qo.H)(), Ip = ip.featuredFish;
      return (0, Bo.jsxs)("li", {
        className: mo()("SkyblockKeepersChairIsland", `Island-${ip.id}`, ip.favoured && "Aimed", !ip.relit && "Dark"),
        children: [(0, Bo.jsx)("h3", {
          children: ip.name
        }), ip.relit && null !== Ip ? (0, Bo.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, Bo.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: op("skyblockGame:keepersChairTideNotice")
          }), (0, Bo.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, Bo.jsx)(Co.d, {
              itemName: Ip.itemName,
              amount: 0
            })
          }), (0, Bo.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: Ip.displayName
          })]
        }) : (0, Bo.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, Bo.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: op("skyblockGame:keepersChairDark")
          })
        }), ip.relit && (ip.favoured ? (0, Bo.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: op("skyblockGame:keepersChairAimed")
        }) : (0, Bo.jsx)(go.f, {
          className: "SkyblockKeepersChairAim",
          disabled: !cp.canAim,
          ariaLabel: op("skyblockGame:keepersChairAimLabel", {
            island: ip.name
          }),
          onClick: () => {
            Op(ip.id)
          },
          children: op("skyblockGame:keepersChairAim")
        }))]
      }, ip.favoured ? cp.aimedCount : 0)
    }

    function RS(pp) {
      let {
        controller: ip,
        lampLight: cp
      } = pp;
      const Op = (0, Jo.i)(EO, ip.getSnapshot()),
        op = (0, Jo.i)(fO, cp.getSnapshot()),
        [Ip, Sp] = (0, Rp.useState)("lamp"),
        {
          t: xp
        } = (0, Qo.H)(),
        Lp = ro();
      if (!Op.enabled) return null;
      const Yp = "light" === Ip && op.enabled;
      return (0, Bo.jsx)(Fo.c, {
        show: Op.open,
        close: ip.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Bo.jsxs)("section", {
          className: mo()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", Yp && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: Lp,
          onKeyDown: Go,
          children: [(0, Bo.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, Bo.jsxs)("div", {
              children: [(0, Bo.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: xp("skyblockGame:keepersChairTitle")
              }), (0, Bo.jsx)("p", {
                children: xp(Yp ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, Bo.jsx)(go.l, {
              padIgnore: !0,
              ariaLabel: xp("skyblockGame:keepersChairClose"),
              onClick: ip.dismiss
            })]
          }), op.enabled && (0, Bo.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((pp => (0, Bo.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === pp === Yp,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === pp === Yp ? "true" : void 0,
              className: mo()("SkyblockKeepersChairTab", "light" === pp === Yp && "Selected"),
              onClick: () => {
                Sp(pp)
              },
              children: [xp("lamp" === pp ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === pp && (0, Bo.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: op.balance
              })]
            }, pp)))
          }), Yp ? (0, Bo.jsx)(jS, {
            controller: cp
          }) : (0, Bo.jsx)(qS, {
            view: Op,
            controller: ip
          })]
        })
      })
    }

    function qS(pp) {
      let {
        view: ip,
        controller: cp
      } = pp;
      const {
        t: Op
      } = (0, Qo.H)();
      return (0, Bo.jsxs)(Bo.Fragment, {
        children: [(0, Bo.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: ip.islands.map((pp => (0, Bo.jsx)(mS, {
            island: pp,
            view: ip,
            aim: cp.aim
          }, pp.id)))
        }), null !== ip.almanac && (0, Bo.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, Bo.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: Op("skyblockGame:passageTitle")
          }), (0, Bo.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, Bo.jsx)(wS, {
              phase: ip.almanac.phase
            }), ip.almanac.phaseName]
          }), (0, Bo.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, Bo.jsx)(wS, {
              phase: ip.almanac.nextPhase
            }), ip.almanac.next]
          })]
        }), (0, Bo.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, Bo.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: Op("skyblockGame:keepersChairFavour")
          }), ip.aimed && (0, Bo.jsx)(go.S, {
            className: "SkyblockKeepersChairRest",
            disabled: !ip.canAim,
            onClick: () => {
              cp.aim(null)
            },
            children: Op("skyblockGame:keepersChairRest")
          })]
        }), null !== ip.status && (0, Bo.jsx)("p", {
          className: mo()("SkyblockKeepersChairStatus", "refused" === ip.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: ip.status.text
        })]
      })
    }

    function MS(pp) {
      let {
        controller: ip
      } = pp;
      const {
        t: cp
      } = (0, Qo.H)(), Op = (0, Jo.i)(lO, ip.getSnapshot());
      if (!Op.enabled) return null;
      const op = Op.freshCount > 0 ? cp("skyblockGame:reachLogOpenNews", {
        count: Op.freshCount
      }) : cp("skyblockGame:reachLogOpen");
      return (0, Bo.jsx)(qo.h, {
        placement: "statBars",
        children: (0, Bo.jsxs)("button", {
          type: "button",
          className: mo()("SkyblockReachLogButton", Op.freshCount > 0 && "HasNews", Op.pending && "Pending"),
          "aria-label": op,
          title: op,
          onClick: ip.ask,
          children: [Op.news && (0, Bo.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${Op.newsToken}`), (0, Bo.jsx)("span", {
            className: mo()("SkyblockReachLogIcon", Op.news && "Jump"),
            "aria-hidden": "true",
            children: (0, Bo.jsx)(Co.d, {
              itemName: JO,
              amount: 0
            })
          }, `icon:${Op.newsToken}`), Op.freshCount > 0 && (0, Bo.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: Op.freshCount
          })]
        })
      })
    }

    function CS(pp) {
      let {
        gift: ip
      } = pp;
      return (0, Bo.jsx)("li", {
        className: mo()("SkyblockRegularsGift", ip.given && "Given"),
        children: ip.text
      })
    }

    function ES(pp) {
      let {
        regular: ip
      } = pp;
      const {
        t: cp
      } = (0, Qo.H)();
      return (0, Bo.jsxs)("li", {
        className: mo()("SkyblockRegularsCard", ip.tagged ? "Tagged" : "Untagged", ip.resting && "Resting"),
        children: [(0, Bo.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, Bo.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: ip.fishName,
            children: (0, Bo.jsx)(Co.d, {
              itemName: ip.itemName,
              amount: 0
            })
          }), (0, Bo.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, Bo.jsx)("h3", {
              children: ip.name
            }), (0, Bo.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: ip.fishName
            })]
          })]
        }), (0, Bo.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: ip.line
        }), (0, Bo.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, Bo.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: ip.size
          }), ip.tagged && (0, Bo.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: ip.resting ? cp("skyblockGame:regularsResting") : ip.meetings
          })]
        }), (0, Bo.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: ip.chance
        }), (0, Bo.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: ip.gifts.map((pp => (0, Bo.jsx)(CS, {
            gift: pp
          }, pp.text)))
        }), ip.history.length > 0 && (0, Bo.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: ip.history.map(((pp, ip) => (0, Bo.jsx)("li", {
            children: pp
          }, ip)))
        })]
      })
    }

    function XS(pp) {
      let {
        controller: ip,
        island: cp
      } = pp;
      const {
        t: Op
      } = (0, Qo.H)(), op = (0, Jo.i)(oo, ip.getSnapshot()), Ip = op.islands.find((pp => pp.id === cp));
      if (!op.enabled || void 0 === Ip) return null;
      const Sp = Op("skyblockGame:regularsOpen");
      return (0, Bo.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": Sp,
        title: Sp,
        onClick: () => {
          ip.openIsland(cp)
        },
        children: [(0, Bo.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: Op("skyblockGame:regularsTitle")
        }), Ip.regulars.map((pp => (0, Bo.jsx)("span", {
          className: mo()("SkyblockRegularsStripIcon", pp.tagged && "Tagged"),
          title: pp.name,
          children: (0, Bo.jsx)(Co.d, {
            itemName: pp.itemName,
            amount: 0
          })
        }, pp.id)))]
      })
    }

    function lS(pp) {
      var ip;
      let {
        controller: cp
      } = pp;
      const Op = (0, Jo.i)(oo, cp.getSnapshot()),
        {
          t: op
        } = (0, Qo.H)(),
        Ip = ro();
      if (!Op.enabled) return null;
      const Sp = null !== (ip = Op.islands.find((pp => pp.id === Op.selected))) && void 0 !== ip ? ip : null;
      return (0, Bo.jsx)(Fo.c, {
        show: Op.open,
        close: cp.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Bo.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: Ip,
          onKeyDown: Go,
          children: [(0, Bo.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Bo.jsxs)("div", {
              children: [(0, Bo.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: op("skyblockGame:regularsTitle")
              }), (0, Bo.jsx)("p", {
                children: op("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, Bo.jsx)(go.l, {
              padIgnore: !0,
              onClick: cp.dismiss
            })]
          }), (0, Bo.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: Op.islands.map((pp => {
              const ip = pp.id === Op.selected;
              return (0, Bo.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": ip,
                "data-pad-tab": !0,
                "data-pad-selected": ip ? "true" : void 0,
                className: mo()("SkyblockReachLogTab", `Island-${pp.id}`, ip && "Selected", pp.charm.given && "GoldPage"),
                onClick: () => {
                  cp.selectIsland(pp.id)
                },
                children: (0, Bo.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: pp.name
                })
              }, pp.id)
            }))
          }), (0, Bo.jsxs)("div", {
            className: mo()("SkyblockRegularsPage", null !== Sp && `Island-${Sp.id}`),
            role: "tabpanel",
            children: [(0, Bo.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: op("skyblockGame:regularsHow")
            }), null !== Sp && (0, Bo.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: Sp.regulars.map((pp => (0, Bo.jsx)(ES, {
                regular: pp
              }, pp.id)))
            })]
          }), null !== Sp && (0, Bo.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, Bo.jsx)("span", {
              className: mo()("SkyblockRegularsCharm", Sp.charm.given && "Given"),
              children: Sp.charm.text
            })
          })]
        })
      })
    }
    const QS = [{
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
      JS = Array.from({
        length: 6
      }, ((pp, ip) => ({
        "--x": `${(88*(.618034*ip%1)).toFixed(1)}%`,
        "--y": `${(10+37*ip%70).toFixed(1)}%`,
        "--size": 7 + ip % 3 * 3 + "rem",
        "--drift-x": 3 * (ip % 3 - 1) + "rem",
        "--drift-y": 2 * (ip % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + ip % 4 * 3 + "s",
        "--delay": 2.5 * -ip + "s"
      }))),
      BS = Array.from({
        length: 14
      }, ((pp, ip) => ({
        "--left": `${(3+94*((.618034*ip+.3)%1)).toFixed(1)}%`,
        "--size": 4 + ip % 4 * 2 + "px",
        "--sway": ip % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*ip%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*ip%12).toFixed(2)}s`
      }))),
      NS = (0, Rp.memo)((function(pp) {
        let {
          island: ip
        } = pp;
        return (0, Bo.jsxs)("div", {
          className: mo()("SkyblockReachLogDepths", null !== ip && `Island-${ip}`),
          "aria-hidden": "true",
          children: [QS.map(((pp, ip) => (0, Bo.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: pp
          }, `shaft${ip}`))), JS.map(((pp, ip) => (0, Bo.jsx)("span", {
            className: mo()("SkyblockReachLogMote", ip % 2 === 1 && "Violet"),
            style: pp
          }, `mote${ip}`))), BS.map(((pp, ip) => (0, Bo.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: pp
          }, `bubble${ip}`)))]
        })
      })),
      TS = 100;

    function fS(pp) {
      let {
        view: ip
      } = pp;
      const {
        t: cp
      } = (0, Qo.H)();
      if (null === ip || 0 === ip.total) return null;
      const Op = TS * ip.aspect,
        op = cp("skyblockGame:hiddenWatersCount", {
          found: ip.found,
          total: ip.total
        });
      return (0, Bo.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${cp("skyblockGame:hiddenWatersTitle")}: ${op}`,
        children: [(0, Bo.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${Op}`,
          "aria-hidden": "true",
          children: [ip.islands.map(((pp, ip) => (0, Bo.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (pp.left + pp.width / 2) * TS,
            cy: (pp.top + pp.height / 2) * Op,
            rx: pp.width / 2 * TS,
            ry: pp.height / 2 * Op
          }, ip))), ip.pins.map(((pp, ip) => (0, Bo.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: pp.left * TS,
            cy: pp.top * Op,
            r: 13
          }, ip)))]
        }), (0, Bo.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, Bo.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: cp("skyblockGame:hiddenWatersTitle")
          }), (0, Bo.jsx)("span", {
            className: ip.found === ip.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: op
          })]
        })]
      })
    }

    function bS(pp) {
      let {
        view: ip,
        island: cp
      } = pp;
      const {
        t: Op
      } = (0, Qo.H)(), op = null === ip || void 0 === ip ? void 0 : ip.glimpses.get(cp);
      return void 0 === op || 0 === op.length ? null : (0, Bo.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, Bo.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: Op("skyblockGame:hiddenWatersGlimpsed")
        }), (0, Bo.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: op.map((pp => (0, Bo.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, Bo.jsx)(Co.d, {
              itemName: pp,
              amount: 0
            })
          }, pp)))
        })]
      })
    }
    const hS = ["Bronze", "Silver", "Gold"],
      aS = [{
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
      nS = aS.slice(0, 2);

    function FS(pp) {
      return pp ? aS : nS
    }

    function gS(pp) {
      let {
        fish: ip,
        letGoShown: cp
      } = pp;
      const {
        t: Op
      } = (0, Qo.H)();
      return (0, Bo.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [hS.map(((pp, cp) => {
          const op = cp < ip.marks;
          return (0, Bo.jsx)("span", {
            className: mo()("SkyblockReachLogPip", pp, op && "Earned", op && ip.fresh && cp === ip.marks - 1 && "Newest"),
            title: Op(QO[cp])
          }, pp)
        })), (0, Bo.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), FS(cp).map(((pp, cp) => (0, Bo.jsx)("span", {
          className: mo()("SkyblockReachLogRibbon", pp.className, !0 === ip.ribbons[cp] && "Earned"),
          title: Op(pp.titleKey)
        }, pp.className)))]
      })
    }

    function GS(pp) {
      let {
        letGoShown: ip,
        haloShown: cp
      } = pp;
      const {
        t: Op
      } = (0, Qo.H)();
      return (0, Bo.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, Bo.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Op("skyblockGame:reachLogMarks"),
          children: [(0, Bo.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), Op("skyblockGame:reachLogLegendMarks")]
        }), FS(ip).map((pp => (0, Bo.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Op(pp.titleKey),
          children: [(0, Bo.jsx)("span", {
            className: mo()("SkyblockReachLogRibbon", pp.className, "Earned")
          }), Op(pp.legendKey)]
        }, pp.className))), (0, Bo.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Op("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, Bo.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), Op("skyblockGame:reachLogLegendGlimmer")]
        }), cp && (0, Bo.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Op("skyblockGame:reachLogHaloTitle"),
          children: [(0, Bo.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), Op("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function rS(pp) {
      let {
        returner: ip
      } = pp;
      return (0, Bo.jsxs)("div", {
        className: mo()("SkyblockReachLogReturner", ip.back && "Back"),
        children: [(0, Bo.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, Bo.jsx)(Co.d, {
            itemName: ip.itemName,
            amount: 0
          })
        }), (0, Bo.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: ip.line
        })]
      })
    }

    function ZS(pp) {
      let {
        fish: ip,
        letGoShown: cp
      } = pp;
      const {
        t: Op
      } = (0, Qo.H)();
      return (0, Bo.jsxs)("li", {
        className: mo()("SkyblockReachLogCard", ip.caught ? "Caught" : "Unknown", ip.marks >= 3 && "GoldCard", ip.fresh && "Fresh", ip.visitor && "Visitor"),
        children: [ip.visitor && (0, Bo.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: Op("skyblockGame:reachLogVisitor")
        }), ip.fresh && Array.from({
          length: 4
        }, ((pp, ip) => (0, Bo.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, ip))), (0, Bo.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [ip.halo && (0, Bo.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: Op("skyblockGame:reachLogHaloTitle")
          }), (0, Bo.jsx)(Co.d, {
            itemName: ip.itemName,
            amount: 0
          }), ip.glimmer && (0, Bo.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: Op("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, Bo.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: ip.name
        }), (0, Bo.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: ip.chance
        }), (0, Bo.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: ip.best
        }), (0, Bo.jsx)(gS, {
          fish: ip,
          letGoShown: cp
        })]
      })
    }

    function zS(pp) {
      let {
        page: ip,
        letGoShown: cp,
        hiddenWaters: Op
      } = pp;
      const {
        t: op
      } = (0, Qo.H)();
      return ip.awake ? (0, Bo.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: ip.fish.map((pp => (0, Bo.jsx)(ZS, {
          fish: pp,
          letGoShown: cp
        }, pp.itemName)))
      }) : (0, Bo.jsxs)(Bo.Fragment, {
        children: [(0, Bo.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: op("skyblockGame:reachLogAsleep")
        }), (0, Bo.jsx)(bS, {
          view: Op,
          island: ip.id
        })]
      })
    }

    function sS(pp) {
      var ip, cp;
      let {
        controller: Op,
        regulars: op,
        hiddenWaters: Ip
      } = pp;
      const Sp = (0, Jo.i)(lO, Op.getSnapshot()),
        xp = function(pp) {
          return (0, Jo.i)(Yo, pp.getSnapshot())
        }(Ip),
        Lp = (0, Jo.i)(oo, op.getSnapshot()),
        {
          t: Yp
        } = (0, Qo.H)(),
        Dp = ro();
      if (!Sp.enabled) return null;
      const Ap = null !== (ip = Sp.pages.find((pp => pp.id === Sp.selected))) && void 0 !== ip ? ip : null;
      return (0, Bo.jsx)(Fo.c, {
        show: Sp.open,
        close: Op.dismiss,
        togglePointerLock: !1,
        className: mo()("SkyblockSkillsOverlay", Lp.open && "SkyblockReachLogUnderLedger"),
        children: (0, Bo.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: Dp,
          onKeyDown: Go,
          children: [(0, Bo.jsx)(NS, {
            island: null !== (cp = null === Ap || void 0 === Ap ? void 0 : Ap.id) && void 0 !== cp ? cp : null
          }), (0, Bo.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Bo.jsxs)("div", {
              children: [(0, Bo.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: Yp("skyblockGame:reachLogTitle")
              }), (0, Bo.jsx)("p", {
                children: Yp("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, Bo.jsx)(fS, {
              view: xp
            }), (0, Bo.jsx)(go.l, {
              padIgnore: !0,
              onClick: Op.dismiss
            })]
          }), (0, Bo.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: Sp.pages.map((pp => {
              const ip = pp.id === Sp.selected,
                cp = pp.fish.some((pp => pp.fresh));
              return (0, Bo.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": ip,
                "data-pad-tab": !0,
                "data-pad-selected": ip ? "true" : void 0,
                className: mo()("SkyblockReachLogTab", `Island-${pp.id}`, ip && "Selected", !pp.awake && "Asleep", pp.gold && "GoldPage", cp && "HasNews"),
                onClick: () => {
                  Op.selectPage(pp.id)
                },
                children: [(0, Bo.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: pp.name
                }), pp.awake && (0, Bo.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: Yp("skyblockGame:reachLogCaughtCount", {
                    caught: pp.caught,
                    total: pp.total
                  })
                })]
              }, pp.id)
            }))
          }), (0, Bo.jsxs)("div", {
            className: mo()("SkyblockReachLogPage", null !== Ap && `Island-${Ap.id}`),
            role: "tabpanel",
            children: [null !== Ap && (0, Bo.jsx)(zS, {
              page: Ap,
              letGoShown: Sp.letGoShown,
              hiddenWaters: xp
            }), !0 === (null === Ap || void 0 === Ap ? void 0 : Ap.awake) && null !== Ap.returner && (0, Bo.jsx)(rS, {
              returner: Ap.returner
            }), !0 === (null === Ap || void 0 === Ap ? void 0 : Ap.awake) && (0, Bo.jsx)(XS, {
              controller: op,
              island: Ap.id
            })]
          }), (0, Bo.jsx)("footer", {
            className: mo()("SkyblockReachLogFooter", null !== Ap && `Island-${Ap.id}`, !0 === (null === Ap || void 0 === Ap ? void 0 : Ap.gold) && "GoldPage"),
            children: !0 === (null === Ap || void 0 === Ap ? void 0 : Ap.gold) ? (0, Bo.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: Yp("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, Bo.jsxs)(Bo.Fragment, {
              children: [(0, Bo.jsx)(GS, {
                letGoShown: Sp.letGoShown,
                haloShown: !0 === (null === Ap || void 0 === Ap ? void 0 : Ap.fish.some((pp => pp.halo)))
              }), (0, Bo.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: Yp("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var KS = cp(4950);

    function VS(pp) {
      let {
        conversation: ip,
        completedLabel: cp
      } = pp;
      return (0, Bo.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, Bo.jsxs)("header", {
          children: [(0, Bo.jsx)("h3", {
            children: ip.questName
          }), ip.completed && (0, Bo.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: cp
          })]
        }), ip.lines.map((pp => (0, Bo.jsx)(KS.e, {
          display: pp.display
        }, pp.key)))]
      })
    }

    function px(pp) {
      let {
        controller: ip
      } = pp;
      const {
        t: cp
      } = (0, Qo.H)(), Op = (0, Jo.i)(Ao, ip.getSnapshot()), op = ro();
      if (!Op.enabled) return null;
      const Ip = !Op.loading && 0 === Op.conversations.length;
      return (0, Bo.jsx)(Fo.c, {
        show: Op.open,
        close: ip.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Bo.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: op,
          onKeyDown: Go,
          children: [(0, Bo.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Bo.jsxs)("div", {
              children: [(0, Bo.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: cp("skyblockDialogue:title")
              }), (0, Bo.jsx)("p", {
                children: cp("skyblockDialogue:intro")
              })]
            }), (0, Bo.jsx)(go.l, {
              padIgnore: !0,
              onClick: ip.dismiss
            })]
          }), (0, Bo.jsxs)("div", {
            className: mo()("SkyblockDialogueBody", {
              SingleColumn: null !== Op.questFocus || 0 === Op.characters.length
            }),
            children: [null === Op.questFocus && Op.characters.length > 0 && (0, Bo.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: Op.characters.map((pp => (0, Bo.jsx)(go.f, {
                className: mo()("SkyblockDialogueCharacter", {
                  Selected: pp.selected
                }),
                onClick: () => {
                  ip.selectCharacter(pp.id)
                },
                children: (0, Bo.jsx)(Eo.e, {
                  text: pp.styling
                })
              }, pp.id)))
            }), (0, Bo.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== Op.questFocus && (0, Bo.jsx)(go.f, {
                className: "SkyblockDialogueBack",
                onClick: ip.showCharacters,
                children: cp("skyblockDialogue:allCharacters")
              }), Op.loading && (0, Bo.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: cp("skyblockDialogue:loading")
              }), Ip && (0, Bo.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: cp(null === Op.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), Op.conversations.map((pp => (0, Bo.jsx)(VS, {
                conversation: pp,
                completedLabel: Op.completedLabel
              }, pp.questId)))]
            })]
          })]
        })
      })
    }

    function ix(pp) {
      let {
        controller: ip
      } = pp;
      const cp = (0, Jo.i)(wo, ip.getSnapshot()),
        {
          t: Op
        } = (0, Qo.H)(),
        op = ro();
      return cp.enabled ? (0, Bo.jsx)(Fo.c, {
        show: cp.open,
        close: ip.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Bo.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: op,
          onKeyDown: Go,
          children: [(0, Bo.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Bo.jsxs)("div", {
              children: [(0, Bo.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: Op("skyblockGame:autographBook")
              }), (0, Bo.jsx)("p", {
                children: Op("skyblockGame:autographBookIntro")
              })]
            }), (0, Bo.jsx)(go.l, {
              padIgnore: !0,
              onClick: ip.dismiss
            })]
          }), (0, Bo.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, Bo.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, Bo.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, Bo.jsx)("strong", {
                  children: cp.total
                }), (0, Bo.jsx)("span", {
                  children: Op("skyblockGame:autographTotal")
                })]
              }), (0, Bo.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, Bo.jsx)("strong", {
                  children: cp.rankTotal
                }), (0, Bo.jsx)("span", {
                  children: Op("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === cp.entries.length ? (0, Bo.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: Op("skyblockGame:autographBookEmpty")
            }) : (0, Bo.jsx)("ul", {
              className: "SkyblockAutographList",
              children: cp.entries.map((pp => (0, Bo.jsxs)("li", {
                className: mo()("SkyblockAutograph", {
                  Ranked: null !== pp.rank
                }),
                style: null === pp.rank ? void 0 : {
                  color: pp.rank.colour
                },
                children: [null !== pp.rank && (0, Bo.jsx)(tI.d, {
                  className: "SkyblockAutographRankIcon",
                  name: pp.rank.icon,
                  kit: (0, tI.e)(pp.rank.icon)
                }), (0, Bo.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, Bo.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: pp.name
                  }), (0, Bo.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== pp.rank && (0, Bo.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: pp.rank.label
                    }), (0, Bo.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: pp.signedOn
                    })]
                  })]
                })]
              }, pp.key)))
            })]
          })]
        })
      }) : null
    }
    const cx = (0, Rp.memo)((function(pp) {
        let {
          controller: ip
        } = pp;
        return (0, Bo.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: ip.display.mountWaypoint,
          children: [(0, Bo.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, Bo.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, Bo.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, Bo.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, Bo.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, Bo.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      Ox = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function ox(pp) {
      return "next" === pp.phase ? "\u2192" : Ox[pp.kind]
    }
    const Ix = (0, Rp.memo)((function(pp) {
      let {
        controller: ip,
        display: cp
      } = pp;
      const Op = (0, Jo.i)(yc, ip.getNotificationSnapshot()),
        [op, Ip] = (0, Rp.useState)(!1);
      return (0, Jo.f)("qteStateUpdated", (pp => {
        Ip(pp.isActive)
      })), (0, Bo.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (op ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [Op && (0, Bo.jsxs)("div", {
          className: `SkyblockQuestNotification ${Op.kind} ${Op.phase}`,
          style: {
            "--quest-notification-duration": `${Op.durationMs}ms`,
            ...Op.accent && {
              "--quest-notification-accent": Op.accent
            }
          },
          children: [(0, Bo.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (Op.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, Bo.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: ox(Op)
            }), Op.iconItem && (0, Bo.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, Bo.jsx)(Co.d, {
                itemName: Op.iconItem,
                amount: 0
              })
            })]
          }), (0, Bo.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, Bo.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: Op.title
            }), (0, Bo.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, Bo.jsx)(AI.d, {
                text: Op.name
              })
            }), Op.description && (0, Bo.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, Bo.jsx)(AI.d, {
                text: Op.description
              })
            }), Op.reward && (0, Bo.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, Bo.jsx)(AI.d, {
                text: Op.reward
              })
            })]
          })]
        }, Op.token), (null === Op || void 0 === Op ? void 0 : Op.waypointNameKey) && (0, Bo.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": Op.waypointNameKey,
          "data-notification-token": Op.token,
          ref: cp.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${Op.token}`)]
      })
    }));

    function Sx(pp) {
      const ip = parseInt(pp.replace("#", ""), 16);
      return `${ip>>16&255}, ${ip>>8&255}, ${255&ip}`
    }
    const xx = (0, Rp.memo)((function(pp) {
      let {
        controller: ip
      } = pp;
      const {
        t: cp
      } = (0, Qo.H)(), Op = (0, Jo.i)(hc, ip.getSnapshot());
      if (!Op) return null;
      const op = "arrival" === Op.phase;
      return (0, Bo.jsxs)("div", {
        className: mo()("SkyblockPortalTransit", {
          Departure: !op,
          Arrival: op
        }),
        style: {
          "--portal-rgb": Sx(Op.colour),
          "--portal-duration": `${Op.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Bo.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, Bo.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            ip.finishArrival(Op.token)
          }
        }), (0, Bo.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, Bo.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !op && (0, Bo.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: cp("skyblockGame:portalTransitHeading")
          }), (0, Bo.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: cp(Op.zoneNameKey)
          })]
        })]
      }, Op.token)
    }));

    function Lx() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function Yx() {
      const pp = document.querySelector(".SkyblockHudCoins"),
        ip = null === pp || void 0 === pp ? void 0 : pp.getBoundingClientRect();
      return ip && ip.width > 0 ? {
        x: ip.left + Math.min(ip.width, 24) / 2,
        y: ip.top + ip.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function Dx(pp) {
      return {
        x: pp.left + pp.width / 2,
        y: pp.top + pp.height / 2
      }
    }

    function Ax() {
      var pp;
      const ip = null === (pp = document.querySelector(".HotBar")) || void 0 === pp ? void 0 : pp.getBoundingClientRect();
      return ip && ip.width > 0 ? Dx(ip) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function Px(pp) {
      let {
        items: ip,
        origins: cp,
        target: Op
      } = pp;
      return (0, Bo.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: ip.map(((pp, ip) => {
          const op = cp[ip];
          return (0, Bo.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${op.x}px`,
              top: `${op.y}px`,
              "--item-dx": Op.x - op.x + "px",
              "--item-dy": Op.y - op.y + "px",
              "--item-delay": 2e3 + 160 * ip + "ms",
              "--item-flight": "700ms"
            },
            children: (0, Bo.jsx)(Co.d, {
              itemName: pp.dailyRewardItemName,
              amount: 0
            })
          }, pp.dailyRewardItemName)
        }))
      })
    }

    function Wx(pp, ip) {
      const cp = -Math.PI / 2 + 1.25 * (pp / (ip - 1) * 2 - 1),
        Op = 70 + pp % 3 * 22;
      return {
        x: Math.cos(cp) * Op,
        y: Math.sin(cp) * Op * .7
      }
    }

    function yx(pp) {
      let {
        origin: ip,
        target: cp,
        count: Op
      } = pp;
      const op = [];
      for (let Ip = 0; Ip < Op; Ip++) {
        const pp = Wx(Ip, Op);
        op.push((0, Bo.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${ip.x}px`,
            top: `${ip.y}px`,
            "--coin-bx": `${pp.x}px`,
            "--coin-by": `${pp.y}px`,
            "--coin-dx": cp.x - ip.x + "px",
            "--coin-dy": cp.y - ip.y + "px",
            "--coin-delay": `${rc(Ip,Op)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, Bo.jsx)(Co.d, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, Ip))
      }
      return (0, Bo.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: op
      })
    }

    function Ux(pp) {
      let {
        day: ip
      } = pp;
      const cp = qp[ip - 1];
      return (0, Bo.jsxs)(Bo.Fragment, {
        children: [(0, Bo.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Bo.jsx)(Co.d, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, Xo.g)(cp.dailyRewardCoins)]
        }), cp.dailyRewardItems.map((pp => (0, Bo.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Bo.jsx)(Co.d, {
            itemName: pp.dailyRewardItemName,
            amount: 0
          }), "\xd7", pp.dailyRewardItemAmount]
        }, pp.dailyRewardItemName)))]
      })
    }

    function wx(pp) {
      let {
        day: ip
      } = pp;
      const cp = Cp(ip);
      return (0, Bo.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: qp.map(((pp, Op) => {
          const op = Op + 1;
          return (0, Bo.jsxs)("li", {
            className: mo()("SkyblockDailyRewardTile", {
              Claimed: op < ip && op !== cp,
              Today: op === ip,
              Tomorrow: op === cp,
              Jackpot: op === Mp
            }),
            children: [(0, Bo.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: op
            }), (0, Bo.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, Bo.jsx)(Co.d, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, Xo.g)(pp.dailyRewardCoins)]
            }), pp.dailyRewardItems.map((pp => (0, Bo.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, Bo.jsx)(Co.d, {
                itemName: pp.dailyRewardItemName,
                amount: 0
              }), "\xd7", pp.dailyRewardItemAmount]
            }, pp.dailyRewardItemName)))]
          }, op)
        }))
      })
    }

    function vx(pp) {
      let {
        view: ip
      } = pp;
      const {
        t: cp
      } = (0, Qo.H)(), Op = (0, Rp.useRef)(null), op = (0, Rp.useRef)(null), [Ip, Sp] = (0, Rp.useState)(null);
      (0, Rp.useLayoutEffect)((() => {
        var pp;
        const ip = null === (pp = Op.current) || void 0 === pp ? void 0 : pp.getBoundingClientRect();
        if (ip) {
          var cp, Ip;
          const pp = Array.from(null !== (cp = null === (Ip = op.current) || void 0 === Ip ? void 0 : Ip.children) && void 0 !== cp ? cp : [], (pp => Dx(pp.getBoundingClientRect())));
          Sp({
            origin: Dx(ip),
            target: Yx(),
            itemOrigins: pp,
            itemTarget: Ax()
          })
        }
      }), []);
      const xp = Cp(ip.day),
        Lp = function(pp, ip) {
          const [cp, Op] = (0, Rp.useState)((() => Lx() ? pp : 0));
          return (0, Rp.useEffect)((() => {
            if (Lx()) return;
            const cp = performance.now();
            let op = 0;
            const Ip = Sp => {
              const xp = Math.min(Math.max((Sp - cp) / ip, 0), 1);
              Op(Math.round(pp * (1 - (1 - xp) ** 3))), xp < 1 && (op = requestAnimationFrame(Ip))
            };
            return op = requestAnimationFrame(Ip), () => {
              cancelAnimationFrame(op)
            }
          }), [pp, ip]), cp
        }(ip.coins, 450);
      return (0, Bo.jsxs)("div", {
        className: mo()("SkyblockDailyReward", {
          Jackpot: ip.day === Mp
        }),
        style: {
          "--daily-duration": `${ip.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Bo.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, Bo.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, Bo.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, Bo.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: cp("skyblockGame:dailyRewardTitle")
            }), (0, Bo.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: cp("skyblockGame:dailyRewardDay", {
                day: String(ip.day)
              })
            })]
          }), (0, Bo.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: Op,
            children: [(0, Bo.jsx)(Co.d, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, Bo.jsxs)("span", {
              children: ["+", (0, Xo.g)(Lp)]
            })]
          }), ip.items.length > 0 && (0, Bo.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: op,
            children: ip.items.map((pp => (0, Bo.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, Bo.jsx)(Co.d, {
                itemName: pp.dailyRewardItemName,
                amount: 0
              }), "\xd7", pp.dailyRewardItemAmount]
            }, pp.dailyRewardItemName)))
          }), (0, Bo.jsx)(wx, {
            day: ip.day
          }), (0, Bo.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [cp("skyblockGame:dailyRewardComeBack"), (0, Bo.jsx)(Ux, {
              day: xp
            })]
          })]
        }), null !== Ip && (0, Bo.jsx)(yx, {
          origin: Ip.origin,
          target: Ip.target,
          count: ip.flyingCoins
        }), null !== Ip && Ip.itemOrigins.length === ip.items.length && (0, Bo.jsx)(Px, {
          items: ip.items,
          origins: Ip.itemOrigins,
          target: Ip.itemTarget
        })]
      })
    }
    const tx = (0, Rp.memo)((function(pp) {
        let {
          controller: ip
        } = pp;
        const cp = (0, Jo.i)(Fc, ip.getSnapshot());
        return cp ? (0, Bo.jsx)(vx, {
          view: cp
        }, cp.token) : null
      })),
      Hx = "Gold Coin";

    function dx(pp) {
      return 650 + 220 * pp
    }

    function ex(pp) {
      return {
        "--letter-delay": `${dx(pp)}ms`,
        "--letter-land": `${dx(pp)+300}ms`
      }
    }

    function ux(pp) {
      let {
        letterCount: ip
      } = pp;
      return (0, Bo.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, Bo.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Bo.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Bo.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: ip
        }, ((pp, ip) => (0, Bo.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: ex(ip),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, ip)))]
      })
    }

    function jx(pp) {
      var ip, cp, Op;
      let {
        letter: op,
        index: Ip
      } = pp;
      const {
        t: Sp
      } = (0, Qo.H)(), xp = null !== (ip = null === (cp = op.items[0]) || void 0 === cp ? void 0 : cp.itemName) && void 0 !== ip ? ip : Hx;
      return (0, Bo.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: ex(Ip),
        children: [(0, Bo.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, Bo.jsx)(Co.d, {
            itemName: xp,
            amount: 0
          })
        }), (0, Bo.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: Sp(op.reasonKey, null !== (Op = op.reasonParams) && void 0 !== Op ? Op : void 0)
        }), (0, Bo.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [op.coins > 0 && (0, Bo.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, Bo.jsx)(Co.d, {
              itemName: Hx,
              amount: 0
            }), "+", (0, Xo.g)(op.coins)]
          }), op.items.map(((pp, ip) => (0, Bo.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, Bo.jsx)(Co.d, {
              itemName: pp.itemName,
              amount: 0
            }), pp.label, " \xd7", pp.amount]
          }, ip)))]
        })]
      })
    }

    function kx(pp) {
      let {
        view: ip
      } = pp;
      const {
        t: cp
      } = (0, Qo.H)();
      return (0, Bo.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${ip.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${dx(ip.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, Bo.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, Bo.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, Bo.jsx)(ux, {
              letterCount: ip.letters.length
            }), (0, Bo.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: cp("skyblockGame:mailboxTitle")
            })]
          }), (0, Bo.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: ip.letters.map(((pp, ip) => (0, Bo.jsx)(jx, {
              letter: pp,
              index: ip
            }, ip)))
          }), ip.more > 0 && (0, Bo.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: cp("skyblockGame:mailboxMore", {
              count: String(ip.more)
            })
          })]
        })
      })
    }
    const mx = (0, Rp.memo)((function(pp) {
      let {
        controller: ip
      } = pp;
      const cp = (0, Jo.i)(zc, ip.getSnapshot());
      return cp ? (0, Bo.jsx)(kx, {
        view: cp
      }, cp.token) : null
    }));

    function Rx(pp) {
      let {
        controller: ip
      } = pp;
      const {
        t: cp
      } = (0, Qo.H)(), Op = (0, Jo.i)(hO, ip.getSnapshot());
      if (null === Op) return null;
      const op = Op.fullSet ? "empty" === Op.fuelState ? {
        text: cp("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: cp("skyblockGame:magmawardHudFullSet", {
          worn: String(Op.wornCount)
        }),
        tone: "partial"
      };
      return (0, Bo.jsx)(qo.h, {
        placement: "statBars",
        children: (0, Bo.jsxs)("div", {
          className: mo()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${Op.fuelState}`, {
            "SkyblockMagmawardHud-partial": !Op.fullSet,
            "SkyblockMagmawardHud-armed": Op.fullSet && "empty" !== Op.fuelState
          }),
          children: [null !== Op.flare && (0, Bo.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${Op.flare}`
          }, `flare:${Op.flareToken}`), (0, Bo.jsx)("div", {
            className: mo()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: Op.setLit
            }),
            children: Op.pieces.map(((pp, ip) => (0, Bo.jsx)("div", {
              className: mo()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: pp.worn,
                SkyblockMagmawardPieceJustWorn: pp.justWorn
              }),
              children: (0, Bo.jsx)(Co.d, {
                itemName: pp.itemName,
                amount: 0
              })
            }, `${ip}:${pp.wornToken}`)))
          }, `pieces:${Op.setLitToken}`), (0, Bo.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, Bo.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, Bo.jsxs)("div", {
              className: mo()("SkyblockMagmawardFuelCounter", Op.pulse && `SkyblockMagmawardFuelCounter-${Op.pulse}`),
              children: [(0, Bo.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, Bo.jsx)(Co.d, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, Bo.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: Op.fuel
              })]
            }, `counter:${Op.pulseToken}`), "burn" === Op.pulse && (0, Bo.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${Op.pulseToken}`)]
          }), op && (0, Bo.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${op.tone} SmallTextBold`,
            children: op.text
          })]
        })
      })
    }

    function qx(pp) {
      let {
        controller: ip
      } = pp;
      const {
        t: cp,
        selectedLanguage: Op
      } = (0, Qo.H)(), op = (0, Jo.i)(nO, ip.getSnapshot());
      return null === op ? null : (0, Bo.jsx)(qo.h, {
        placement: "statBars",
        children: (0, Bo.jsxs)("div", {
          className: mo()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: op.inRange
          }),
          style: {
            "--glowtide-colour": op.colour
          },
          "aria-label": cp("skyblockGame:glowtideChipLabel"),
          children: [(0, Bo.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), op.inRange ? (0, Bo.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: cp("skyblockGame:glowtideChipInRange")
          }, `call:${op.inRangeToken}`) : (0, Bo.jsxs)(Bo.Fragment, {
            children: [(0, Bo.jsx)("div", {
              ref: ip.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, Bo.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: cp("skyblockGame:waypointDistance", {
                distance: jp(op.distance, Op.code)
              })
            })]
          })]
        })
      })
    }

    function Mx(pp) {
      let {
        controller: ip
      } = pp;
      const {
        t: cp
      } = (0, Qo.H)(), Op = (0, Jo.i)(gO, ip.getSnapshot());
      return null === Op ? null : (0, Bo.jsx)(qo.h, {
        placement: "statBars",
        children: (0, Bo.jsxs)("div", {
          className: mo()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: Op.full
          }),
          "aria-label": cp("skyblockGame:glowMeterLabel", {
            fill: String(Op.fill),
            TA: String(Op.TA)
          }),
          children: [Op.burst && (0, Bo.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${Op.burstToken}`), (0, Bo.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, Bo.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${Op.ratio})`
              }
            }), Op.gained && (0, Bo.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${Op.gainToken}`), Op.full && Array.from({
              length: 5
            }, ((pp, ip) => (0, Bo.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, ip)))]
          }), Op.full && Op.rares.map((pp => (0, Bo.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, Bo.jsx)(Co.d, {
              itemName: pp,
              amount: 0
            })
          }, pp))), Op.ready && (0, Bo.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, Bo.jsx)("span", {
              children: cp("skyblockGame:glowMeterReady")
            })
          }, `ready:${Op.fullToken}`)]
        })
      })
    }

    function Cx(pp) {
      let {
        controller: ip
      } = pp;
      const {
        t: cp
      } = (0, Qo.H)(), Op = (0, Jo.i)(rO, ip.getSnapshot());
      if (null === Op) return null;
      const op = "waiting" === Op.phase,
        Ip = {
          animationDuration: `${Op.waitMs}ms`,
          animationDelay: -Op.elapsedMs + "ms"
        },
        Sp = op ? void 0 : {
          animationDuration: `${Op.waitMs}ms`
        };
      return (0, Bo.jsxs)("div", {
        className: op ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [op && (0, Bo.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((pp, ip) => (0, Bo.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, ip))), (0, Bo.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: Ip
          }), (0, Bo.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, Bo.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, Bo.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: Ip
            })]
          }), (0, Bo.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, Bo.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: Sp,
          children: cp(Op.line)
        }, Op.lineIndex)]
      }, Op.token)
    }

    function Ex(pp) {
      let {
        chart: ip,
        showHere: cp,
        className: Op
      } = pp;
      return (0, Bo.jsx)("div", {
        className: mo()("SkyblockTideChartGrid", Op, null !== ip.pictureName && "Complete"),
        "aria-hidden": "true",
        children: ip.cells.map(((pp, Op) => {
          const op = 0 !== (ip.pulseCells & 1 << Op),
            Ip = ip.castCell === Op;
          return (0, Bo.jsx)("span", {
            className: mo()("SkyblockTideChartCell", `Cell-${pp}`, op && "Pulse", Ip && "Cast", cp && ip.hereCell === Op && "Here")
          }, `${Op}:${op?`p${ip.pulseToken}`:""}:${Ip?`c${ip.castToken}`:""}`)
        }))
      })
    }

    function Xx(pp) {
      let {
        controller: ip
      } = pp;
      const cp = (0, Jo.i)(zO, ip.getSnapshot()),
        {
          t: Op
        } = (0, Qo.H)(),
        op = cp.chip;
      if (!cp.enabled || null === op) return null;
      const Ip = Op("skyblockGame:tideChartsChipLabel", {
        island: op.islandName,
        lit: String(op.lit),
        ink: String(op.ink)
      });
      return (0, Bo.jsx)(qo.h, {
        placement: "statBars",
        children: (0, Bo.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: mo()("SkyblockTideChartsChip", cp.open && "Open", null !== op.pictureName && "Complete"),
          "aria-label": Ip,
          title: Ip,
          onMouseDown: pp => {
            pp.preventDefault()
          },
          onClick: ip.toggle,
          children: [(0, Bo.jsx)(Ex, {
            chart: op,
            showHere: !1,
            className: "Mini"
          }), (0, Bo.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [op.lit, "/", op.ink]
          })]
        })
      })
    }

    function lx(pp) {
      let {
        controller: ip
      } = pp;
      const cp = (0, Jo.i)(zO, ip.getSnapshot()),
        {
          t: Op
        } = (0, Qo.H)(),
        op = ro(),
        Ip = cp.card;
      return cp.enabled && null !== Ip ? (0, Bo.jsx)(Fo.c, {
        show: cp.open,
        close: ip.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Bo.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: op,
          onKeyDown: Go,
          children: [(0, Bo.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, Bo.jsxs)("div", {
              children: [(0, Bo.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: Op("skyblockGame:tideChartsTitle")
              }), (0, Bo.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: Op("skyblockGame:tideChartsIntro")
              })]
            }), (0, Bo.jsx)(go.l, {
              padIgnore: !0,
              ariaLabel: Op("skyblockGame:tideChartsClose"),
              onClick: ip.dismiss
            })]
          }), cp.tabs.length > 1 && (0, Bo.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": Op("skyblockGame:tideChartsIslands"),
            children: cp.tabs.map((pp => (0, Bo.jsx)("button", {
              type: "button",
              className: mo()("SkyblockTideChartsTab", pp.selected && "Selected"),
              "aria-pressed": pp.selected,
              onClick: () => {
                ip.SW(pp.island)
              },
              children: pp.name
            }, pp.island)))
          }), (0, Bo.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, Bo.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": Ip.gridLabel,
              children: (0, Bo.jsx)(Ex, {
                chart: Ip,
                showHere: !0,
                className: "Large"
              })
            }), (0, Bo.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, Bo.jsx)("h3", {
                children: Ip.islandName
              }), (0, Bo.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: Ip.litText
              }), null === Ip.pictureName ? (0, Bo.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: Op("skyblockGame:tideChartsPictureHidden")
              }) : (0, Bo.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: Op("skyblockGame:tideChartsPictureRevealed", {
                  picture: Ip.pictureName
                })
              }, Ip.pictureName), (0, Bo.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, Bo.jsxs)("li", {
                  children: [(0, Bo.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), Op("skyblockGame:tideChartsLegendLit")]
                }), (0, Bo.jsxs)("li", {
                  children: [(0, Bo.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), Op("skyblockGame:tideChartsLegendClear")]
                }), null !== Ip.hereCell && (0, Bo.jsxs)("li", {
                  children: [(0, Bo.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), Op("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, Bo.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, Bo.jsx)("span", {
                  children: cp.turnsText
                }), (0, Bo.jsx)("span", {
                  children: cp.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function Qx(pp) {
      var ip;
      let {
        controller: cp
      } = pp;
      const {
        selectedLanguage: Op
      } = (0, Qo.H)(), op = Op.code;
      (0, Rp.useEffect)((() => {
        cp.setTranslator(((pp, ip) => (0, Qo.B)(op, pp, ip)), op, ((pp, ip) => (0, Qo.w)(op, pp, ip)))
      }), [cp, op]);
      const Ip = (0, Jo.i)(Pp, cp.map.getSnapshot()),
        {
          openInGameMenuName: Sp
        } = (0, Ro.o)(["openInGameMenuName"]);
      return (0, Bo.jsxs)(Bo.Fragment, {
        children: [(0, Bo.jsx)(Ix, {
          controller: cp.quests,
          display: cp.navigation.display
        }), Ip.enabled && !Sp && (0, Bo.jsx)(LI, {
          controller: cp.navigation
        }), (0, Bo.jsx)(No, {
          controller: cp,
          minimap: Ip.enabled && (null === (ip = Ip.presentation) || void 0 === ip ? void 0 : ip.minimap) && (0, Bo.jsx)(xI, {
            view: Ip.presentation.minimap,
            navigation: cp.navigation,
            controller: cp.map
          }),
          children: (0, Bo.jsx)(vI, {
            controller: cp.quests,
            surface: "hud"
          })
        }), (0, Bo.jsx)(cx, {
          controller: cp.navigation
        }), (0, Bo.jsx)(xx, {
          controller: cp.portalTransit
        }), (0, Bo.jsx)(tx, {
          controller: cp.dailyReward
        }), (0, Bo.jsx)(mx, {
          controller: cp.mailbox
        }), (0, Bo.jsx)(Rx, {
          controller: cp.magmaward
        }), (0, Bo.jsx)(qx, {
          controller: cp.glowtide
        }), (0, Bo.jsx)(vS, {
          controller: cp.passage
        }), (0, Bo.jsx)(Xx, {
          controller: cp.tideCharts
        }), (0, Bo.jsx)(Mx, {
          controller: cp.glowMeter
        }), (0, Bo.jsx)(MS, {
          controller: cp.reachLog
        }), (0, Bo.jsx)(Cx, {
          controller: cp.hushWait
        }), (0, Bo.jsx)(kS, {
          controller: cp.lampLight
        }), (0, Bo.jsx)(YI, {
          controller: cp.skills,
          surface: "hud"
        })]
      })
    }

    function Jx(pp) {
      let {
        controller: ip
      } = pp;
      return (0, Bo.jsxs)(Bo.Fragment, {
        children: [(0, Bo.jsx)(SI, {
          controller: ip.map,
          navigation: ip.navigation
        }), (0, Bo.jsx)(YI, {
          controller: ip.skills,
          surface: "menu"
        }), (0, Bo.jsx)(vI, {
          controller: ip.quests,
          surface: "menu"
        }), (0, Bo.jsx)(KI, {
          controller: ip.dungeons
        }), (0, Bo.jsx)(iS, {
          controller: ip.collections
        }), (0, Bo.jsx)(oS, {
          controller: ip.questGraph
        }), (0, Bo.jsx)(YS, {
          controller: ip.forge
        }), (0, Bo.jsx)(US, {
          controller: ip.smuggler
        }), (0, Bo.jsx)(RS, {
          controller: ip.keepersChair,
          lampLight: ip.lampLight
        }), (0, Bo.jsx)(sS, {
          controller: ip.reachLog,
          regulars: ip.regulars,
          hiddenWaters: ip.hiddenWaters
        }), (0, Bo.jsx)(lS, {
          controller: ip.regulars
        }), (0, Bo.jsx)(HS, {
          controller: ip.passage
        }), (0, Bo.jsx)(lx, {
          controller: ip.tideCharts
        }), (0, Bo.jsx)(px, {
          controller: ip.dialogue
        }), (0, Bo.jsx)(ix, {
          controller: ip.autographs
        })]
      })
    }
    var Bx = cp(36948);
    const Nx = oO + AO;

    function Tx(pp, ip, cp, Op, op) {
      const Ip = [],
        Sp = [],
        xp = cp => {
          const Op = pp.playSound(ip, cp.sound, cp.volume, cp.rate);
          Op && (Sp.push(Op), void 0 !== cp.cutAfter && Ip.push(setTimeout((() => {
            Op.fade(Op.getVolume(), 0, 300)
          }), cp.cutAfter)))
        };
      for (const Lp of function(pp, ip) {
          const cp = [{
            sound: "rpgKnifeSlice1",
            beat: oO,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: oO,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: oO,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: oO,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: oO,
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
            sound: (0, Bx.d)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: Nx + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, Bx.d)("bigDrumSwish"),
            beat: Nx + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: Nx + 60,
            lead: 180,
            volume: .5 + .06 * pp,
            rate: .82 + .07 * pp
          }];
          return pp >= 4 && cp.push({
            sound: "exp_levelup",
            beat: Nx + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), ip && cp.push({
            sound: "trumpetFlare",
            beat: Nx + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), cp.push({
            sound: "harp_pling",
            beat: IO,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), cp
        }(cp, Op)) op ? Ip.push(setTimeout((() => {
        xp(Lp)
      }), Math.max(0, Lp.beat - Lp.lead / Lp.rate))) : Lp.beat !== oO && "magicAccent2" !== Lp.sound && "trumpetFlare" !== Lp.sound || xp(Lp);
      return () => {
        for (const pp of Ip) clearTimeout(pp);
        for (const pp of Sp) pp.fade(pp.getVolume(), 0, 120)
      }
    }
    class fx {
      constructor(pp) {
        this.deps = pp, this.pending = new Map, this.localHook = null
      }
      hookWaiting(pp, ip) {
        this.pending.delete(pp);
        const cp = this.deps.now();
        if (null === ip) {
          var Op;
          if ((null === (Op = this.localHook) || void 0 === Op ? void 0 : Op.hookId) === pp) {
            const pp = cp >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(pp)
          }
          return
        }
        const op = cp + ip;
        this.settle(pp, op) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(pp, {
          untilMs: cp + 1e3,
          biteAtMs: op
        }))
      }
      getLocalHook() {
        var pp, ip;
        return null !== (pp = null === (ip = this.localHook) || void 0 === ip ? void 0 : ip.hookId) && void 0 !== pp ? pp : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const pp = this.deps.now();
        for (const [ip, {
            untilMs: cp,
            biteAtMs: Op
          }] of this.pending)(this.settle(ip, Op) || pp > cp) && this.pending.delete(ip)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(pp, ip) {
        const cp = this.deps.getLineOwner(pp);
        if (null === cp) return !1;
        if (!this.deps.isLocalPlayer(cp)) return !0;
        if (this.localHook = {
            hookId: pp,
            biteAtMs: ip
          }, !this.deps.isHushWaiting()) {
          const [ip, cp] = this.deps.getHookPosition(pp);
          this.deps.onCastLanded(ip, cp)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var bx = cp(4341);
    const hx = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      ax = {
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
    class nx {
      constructor(pp) {
        this.deps = pp, this.tell = null
      }
      receiveTell(pp) {
        let {
          biteTellTier: ip
        } = pp;
        this.tell = {
          tier: ip,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(pp) {
        const ip = this.tell;
        if (this.tell = null, !pp) return;
        const cp = null !== ip && this.deps.now() - ip.atMs <= 3e3 ? ip.tier : 0;
        this.deps.vibrate(hx[cp])
      }
      burstAtHook() {
        const pp = this.tell,
          ip = this.deps.getLocalHookPosition();
        null === pp || pp.burst || null === ip || (pp.burst = !0, this.deps.playParticles(function(pp, ip) {
          let [cp, Op, op] = ip;
          const {
            count: Ip,
            rise: Sp,
            colour: xp
          } = ax[pp], [Lp, Yp, Dp] = xp;
          return {
            texture: "glint",
            pos1: [cp - .3, Op, op - .3],
            pos2: [cp + .3, Op + .2, op + .3],
            dir1: [-.6, Sp, -.6],
            dir2: [.6, 1.4 * Sp, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: Ip,
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
              minColor: [Lp, Yp, Dp, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [Lp, Yp, Dp, 0],
              maxColor: [Lp, Yp, Dp, 0]
            }],
            blendMode: bx.g.Add,
            hideDist: 48
          }
        }(pp.tier, ip)))
      }
    }
    var Fx = cp(1260),
      gx = cp(1963),
      Gx = cp(44);

    function rx(pp, ip) {
      return [{
        timeFraction: 0,
        minColor: [255 * pp[0], 255 * pp[1], 255 * pp[2], 1],
        maxColor: [255 * ip[0], 255 * ip[1], 255 * ip[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const Zx = [0, 0, 0],
      zx = {
        texture: "glint",
        mipmaps: !1,
        TA: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: Zx,
        dir2: Zx,
        blendMode: bx.g.OneOne
      },
      sx = {
        ...zx,
        colorGradients: rx([1, .88, .38], [1, .65, .15])
      },
      Kx = {
        ...zx,
        colorGradients: rx([.55, .95, 1], [.9, 1, 1])
      },
      Vx = [.5, .5, .5],
      pL = {
        texture: "glint",
        mipmaps: !1,
        TA: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: rx([1, .12, .12], [1, .35, .2]),
        blendMode: bx.g.OneOne
      };
    class iL {
      constructor() {
        this.drops = new Map
      }
      Ey(pp, ip) {
        if ("overflowFlash" === ip.kind) {
          const [cp, Op, op] = ip.position, Ip = pp.createParticles(pL, {
            pos: [cp, Op, op],
            half: Vx
          });
          return Ip.emit(18), void Ip.stop()
        }
        this.drops.has(ip.itemId) || this.drops.set(ip.itemId, {
          owner: ip.owner,
          cosmetic: ip.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      LP(pp) {
        if (0 === this.drops.size) return;
        const ip = performance.now(),
          cp = pp.getCameraPosition();
        let Op = 0;
        for (const Ip of this.drops.values()) null !== Ip.particles && Op++;
        for (const [Ip, Sp] of this.drops) {
          const xp = pp.getPositionView(Ip);
          if (null === xp) {
            var op;
            if (Sp.seen || ip - Sp.markedAt > 5e3) null !== Sp.particles && Op--, null === (op = Sp.particles) || void 0 === op || op.stop(), this.drops.delete(Ip);
            continue
          }
          Sp.cosmetic || !pp.isLocalPlayer(Sp.owner) || Sp.pickupDelayCleared || (pp.clearPickupDelay(Ip), Sp.pickupDelayCleared = !0);
          const Lp = Sp.lastPosition,
            Yp = Sp.seen && (xp[0] - Lp[0]) ** 2 + (xp[1] - Lp[1]) ** 2 + (xp[2] - Lp[2]) ** 2 > 4e-4,
            Dp = (xp[0] - cp[0]) ** 2 + (xp[1] - cp[1]) ** 2 + (xp[2] - cp[2]) ** 2 < 2025;
          Sp.seen = !0, Lp[0] = xp[0], Lp[1] = xp[1], Lp[2] = xp[2], Yp && (Sp.lastMovingAt = ip), null !== Sp.particles && (!Dp || ip - Sp.lastMovingAt > 500) && (Sp.particles.stop(), Sp.particles = null, Op--), Yp && Dp && null === Sp.particles && Op < 32 && (Sp.particles = pp.createParticles(Sp.cosmetic ? Kx : sx, {
            pos: xp
          }), Op++), null !== Sp.particles && (Sp.particles.moveTo(xp), Sp.particles.setEmitRate(Yp ? 12 : 0)), !Yp && null === Sp.particles && ip - Math.max(Sp.lastMovingAt, Sp.markedAt) > 2e3 && this.drops.delete(Ip)
        }
      }
      dispose() {
        for (const ip of this.drops.values()) {
          var pp;
          null === (pp = ip.particles) || void 0 === pp || pp.stop()
        }
        this.drops.clear()
      }
    }
    var cL = cp(195);
    const OL = cL.g.Vw * cL.g.playerEyeToHeightRatio;
    class oL {
      constructor(pp) {
        this.host = pp, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      Ey(pp) {
        this.lava = pp, this.nextUpdateAt = 0
      }
      LP() {
        var pp;
        const ip = this.host.now();
        if (ip < this.nextUpdateAt) return;
        this.nextUpdateAt = ip + 250;
        const cp = this.host.playerPosition(),
          Op = cp && this.findNearest([cp[0], cp[1] + OL, cp[2]]);
        if (!Op || Op.distance >= 40) return void this.stop();
        const op = .5 * Math.min(1, (40 - Op.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(op) : this.loop = this.host.play("lavaFlow", op, Op.position, 40 + OL, 9, !0), null === (pp = this.loop) || void 0 === pp || pp.setPosition(Op.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var pp;
        null === (pp = this.loop) || void 0 === pp || pp.stop(), this.loop = null
      }
      findNearest(pp) {
        let ip = -1,
          cp = 1 / 0;
        for (let Op = 0; Op < this.lava.length; Op += 3) {
          const op = this.lava[Op] - pp[0],
            Ip = this.lava[Op + 1] - pp[1],
            Sp = this.lava[Op + 2] - pp[2],
            xp = op * op + Ip * Ip + Sp * Sp;
          xp < cp && (cp = xp, ip = Op)
        }
        return ip < 0 ? null : {
          position: [this.lava[ip], this.lava[ip + 1], this.lava[ip + 2]],
          distance: Math.sqrt(cp)
        }
      }
    }
    var IL = cp(1938),
      SL = cp(38864);
    const xL = {
      "Grey Portal": "Gray"
    };
    for (const WL of op.wc) xL[`${WL} Portal`] = WL;
    const LL = Object.keys(xL),
      YL = Object.fromEntries(LL.map((pp => [pp, (0, op.$)(op.N[`${(0,op.qe)(xL[pp])}Team`])])));
    Object.fromEntries(LL.map((pp => [pp, op.N[`${(0,op.qe)(xL[pp])}UiText`]])));
    class DL {
      constructor(pp, ip) {
        this.presentation = pp, this.portal = ip, this.unlocked = void 0
      }
      Ey(pp) {
        const ip = !1 === this.unlocked && pp;
        this.unlocked = pp, this.LP();
        const {
          min: cp,
          max: Op,
          unlockedBlock: op
        } = this.portal;
        if (ip && this.presentation.hasChunk(...cp)) {
          const [pp, ip, Ip] = YL[op];
          this.presentation.playParticles({
            pos1: [...cp],
            pos2: Op.map((pp => pp + 1)),
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
              minColor: [pp, ip, Ip, 1],
              maxColor: [Math.min(255, pp + 55), Math.min(255, ip + 55), Math.min(255, Ip + 90), 1]
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
      LP() {
        var pp;
        const ip = this.unlocked ? this.portal.unlockedBlock : null !== (pp = this.portal.lockedBlock) && void 0 !== pp ? pp : "Light Gray Portal",
          {
            min: cp,
            max: Op
          } = this.portal;
        for (let op = cp[0]; op <= Op[0]; op++)
          for (let pp = cp[1]; pp <= Op[1]; pp++)
            for (let Ip = cp[2]; Ip <= Op[2]; Ip++) this.presentation.hasChunk(op, pp, Ip) && this.presentation.nH(op, pp, Ip) !== ip && this.presentation.qE(op, pp, Ip, ip)
      }
    }
    const AL = {
        farming_1: {
          raises: pp => "NPC" === pp.type && "chef" === pp.variation,
          rise: .4
        },
        fishing_1: {
          raises: pp => "Draugr Warper" === pp.type,
          rise: .4
        }
      },
      PL = (pp, ip, cp, Ip) => {
        let {
          localPlayerId: Sp
        } = Ip;
        const xp = new jo({
          translate: (pp, ip) => (0, Qo.B)(Fx.g.get().getCurrentLanguageCode(), pp, ip),
          translateWithIcons: (pp, ip) => (0, Qo.w)(Fx.g.get().getCurrentLanguageCode(), pp, ip),
          setMenuOpen: pp => {
            pp ? (0, rp.t)() : (0, rp.h)()
          },
          dismissMenu: rp.l,
          publishSkills: pp => {
            Zp.m.GA(Yc, pp, !0)
          },
          publishQuests: pp => {
            Zp.m.GA(Wc, pp, !0)
          },
          publishQuestNotification: pp => {
            Zp.m.GA(yc, pp, !0)
          },
          publishDungeons: pp => {
            Zp.m.GA(vc, pp, !0)
          },
          publishCollections: pp => {
            Zp.m.GA(fc, pp, !0)
          },
          publishMap: pp => {
            Zp.m.GA(Pp, pp, !0)
          },
          publishHud: pp => {
            Zp.m.GA(Ho, pp, !0)
          },
          publishPortalTransit: pp => {
            Zp.m.GA(hc, pp, !0)
          },
          isLoadingScreenUp: () => Ro.c.get("loadingOverlayVisible"),
          publishDailyReward: pp => {
            Zp.m.GA(Fc, pp, !0)
          },
          publishMailbox: pp => {
            Zp.m.GA(zc, pp, !0)
          },
          publishQuestGraph: pp => {
            Zp.m.GA(Kc, pp, !0)
          },
          publishForge: pp => {
            Zp.m.GA(tO, pp, !0)
          },
          publishSmuggler: pp => {
            Zp.m.GA(eO, pp, !0)
          },
          publishKeepersChair: pp => {
            Zp.m.GA(EO, pp, !0)
          },
          publishReachLog: pp => {
            Zp.m.GA(lO, pp, !0)
          },
          publishLampLight: pp => {
            Zp.m.GA(fO, pp, !0)
          },
          publishMagmaward: pp => {
            Zp.m.GA(hO, pp, !0)
          },
          publishGlowtide: pp => {
            Zp.m.GA(nO, pp, !0)
          },
          publishGlowMeter: pp => {
            Zp.m.GA(gO, pp, !0)
          },
          publishHushWait: pp => {
            Zp.m.GA(rO, pp, !0)
          },
          publishPassage: pp => {
            Zp.m.GA(kO, pp, !0)
          },
          publishTideCharts: pp => {
            Zp.m.GA(zO, pp, !0)
          },
          publishRegulars: pp => {
            Zp.m.GA(oo, pp, !0)
          },
          publishHiddenWaters: pp => {
            Zp.m.GA(Yo, pp, !0)
          },
          publishDialogue: pp => {
            Zp.m.GA(Ao, pp, !0)
          },
          publishAutographs: pp => {
            Zp.m.GA(wo, pp, !0)
          },
          onDailyRewardStarted: pp => {
            lp.playSound(Sp, pp.day === Mp ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (pp, ip) => {
            lp.playSound(Sp, "exp_collect", .35, 1 + .6 * pp / (ip - 1)), Zp.m.GA(gc, pp === ip - 1)
          },
          onDailyRewardItemLanded: pp => {
            lp.playSound(Sp, "pickUp", .6, 1 + .15 * pp)
          },
          onMailboxStarted: () => {
            lp.playSound(Sp, "rpgMetalClick", .6, 1), lp.playSound(Sp, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            lp.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: Gx.l,
          requestTracking: pp => {
            lp.sendCommand(`quests track ${pp}`)
          },
          requestDungeonEnter: (pp, ip) => {
            lp.sendCommand(`dungeonEnter ${pp} ${ip}`)
          },
          requestQuestJump: pp => {
            lp.sendCommand(`${Jp} jump ${pp}`)
          },
          requestQuestArrive: (pp, ip) => {
            const cp = `${Jp} arrive ${pp}`;
            lp.sendCommand(ip ? `${cp} complete` : cp)
          },
          requestForge: pp => {
            let {
              blade: ip,
              guard: cp,
              handle: Op
            } = pp;
            lp.sendCommand(`forge ${ip} ${cp} ${Op}`)
          },
          requestDialogue: () => {
            lp.sendCommand("quests dialogue")
          },
          requestSmuggle: (pp, ip) => {
            lp.sendCommand(`smuggle ${pp} ${ip}`)
          },
          requestKeepersChairAim: pp => {
            lp.sendCommand(`keeperschair-aim ${pp}`)
          },
          requestReachLogOpen: () => {
            lp.sendCommand("reachlog-open")
          },
          requestLampLight: pp => {
            lp.sendCommand(`${pp}`)
          },
          requestTravel: pp => {
            lp.sendCommand(`map travel ${pp.kind} ${pp.id} ${pp.requestId}`)
          }
        });
        let Lp, Yp, Dp, Ap, Wp, yp, Up, dp, ep, jp, kp, qp, Cp;
        const Xp = new iL;
        let lp, Qp = null;
        const Bp = AL[null !== cp && void 0 !== cp ? cp : ""],
          bp = (pp, ip) => {
            null !== Bp && void 0 !== Bp && Bp.raises(ip) && lp.setNametagOffset(pp, Bp.rise)
          },
          np = new nx({
            getLocalHookPosition: () => {
              const pp = Fp.getLocalHook();
              return null !== pp && lp.checkValid(pp) ? lp.sH(pp) : null
            },
            playParticles: pp => {
              lp.playParticleEffect(pp)
            },
            vibrate: pp => {
              zp.f.play("fishBite", pp)
            },
            now: () => performance.now()
          }),
          Fp = new fx({
            getLineOwner: pp => lp.checkValid(pp) ? lp.getLineOwner(pp) : null,
            isLocalPlayer: pp => lp.isLocalPlayer(pp),
            getHookPosition: pp => {
              const [ip, , cp] = lp.sH(pp);
              return [ip, cp]
            },
            isHushWaiting: () => {
              var pp;
              return "waiting" === (null === (pp = xp.hushWait.getSnapshot()) || void 0 === pp ? void 0 : pp.phase)
            },
            onCastLanded: (pp, ip) => {
              xp.tideCharts.castLanded(pp, ip)
            },
            onLocalHookSettled: () => {
              np.onLocalHookSettled()
            },
            onLocalWaitEnded: pp => {
              np.onLocalWaitEnded(pp)
            },
            now: () => performance.now()
          }),
          sp = new oL({
            now: () => performance.now(),
            playerPosition: () => lp.checkValid(Sp) ? lp.sH(Sp) : null,
            play: (pp, ip, cp, Op, op, Ip) => lp.playSound(Sp, pp, ip, 1, {
              Sp: cp,
              maxHearDist: Op,
              refDistance: op
            }, Ip)
          }),
          Kp = new Map;
        let Vp;
        return {
          onCreate: pp => {
            if (lp = pp, Qp = new SL.SkyblockEntityFacing(pp, Bp ? bp : null), xp.portalTransit.resumeArrival(null !== cp && void 0 !== cp ? cp : null), (null !== cp && void 0 !== cp ? cp : Op) === Op) {
              let pp = -1 / 0;
              Vp = Zp.m.subscribe("toggleMenu", (ip => {
                const cp = performance.now();
                "inventory|Workbench" !== ip || "cross_to_hub" !== xp.quests.getTrackedQuestId() || cp - pp < 1e4 || (pp = cp, lp.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [Op, op] of Object.entries(null !== (ip = Np[null !== cp && void 0 !== cp ? cp : ""]) && void 0 !== ip ? ip : {})) {
              var ip;
              Kp.set(Op, new DL({
                hasChunk: (ip, cp, Op) => pp.isBlockInLoadedChunk(ip, cp, Op),
                nH: (ip, cp, Op) => pp.blockIdToBlockName(pp.getBlockId(ip, cp, Op)),
                qE: (ip, cp, Op, op) => {
                  pp.qE(ip, cp, Op, op)
                },
                playParticles: ip => {
                  pp.playParticleEffect(ip)
                }
              }, op))
            }
            Cp = (0, IL.f)((pp => function(pp) {
              return Object.hasOwn(ri, pp) || pp.startsWith("npc_")
            }(pp) ? zi(pp) : null)), xp.resolveItemName = (ip, cp) => {
              const Op = pp.getItemStat(Sp, ip, "displayName");
              return Op && "object" === typeof Op && "translationKey" in Op ? cp(Op.translationKey, (0, Qo.t)(Op.params, gx.d.shown)) : "string" === typeof Op ? cp(Op) : ip
            }, xp.quests.notifications.onShown = pp => {
              "quest" === pp ? lp.playSound(Sp, "magicAccent1", 1, 1) : "skillLevel" === pp ? lp.playSound(Sp, "magicAccent1", 1, .6) : "landmark" === pp ? lp.playSound(Sp, "trumpetFlare", 1, .6) : "npcNote" === pp ? lp.playSound(Sp, "magicAccent2", .8, 1.1) : "started" === pp ? lp.playSound(Sp, (0, Bx.d)("bigDrumSwish"), 1, 1) : lp.playSound(Sp, (0, Bx.d)("rpgHandleSmallLeather"), 1, 1)
            }, xp.forge.onPartSelected = () => {
              lp.playSound(Sp, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, xp.forge.onOpened = () => {
              ! function(pp) {
                pp.preloadSounds([(0, Bx.d)("firecracker"), "fireBurn", "magicAccent2"])
              }(pp)
            }, xp.forge.onForgeStarted = (ip, cp, Op) => Tx(pp, Sp, ip, cp, Op), xp.smuggler.onBought = () => {
              lp.playSound(Sp, (0, Bx.d)("rpgHandleSmallLeather"), 1, 1), lp.playSound(Sp, "chestOpen", .6, 1)
            }, xp.compass.register(new wp(xp.map, !0)), xp.compass.register(new wp(xp.map, !1)), xp.compass.register(new tp(xp.map)), xp.compass.register(new Hp((() => xp.quests.getSnapshot().compassTarget)));
            for (const cp of ["enemy", "npc"]) xp.compass.register(new vp(xp.map, cp, (ip => pp.checkValid(ip) ? pp.sH(ip) : void 0), (ip => pp.isAlive(ip))))
          },
          onAfterRender: (pp, ip) => {
            const cp = lp.checkValid(Sp) ? lp.sH(Sp) : null;
            xp.navigation.afterRender(cp, performance.now(), ip), xp.glowtide.afterRender(cp, ip.cameraHeading), xp.tideCharts.afterRender(cp), Fp.afterRender()
          },
          onClose: () => {
            var pp, ip, cp, Op, op, Ip, Sp, Pp, yp, wp, vp, tp, Hp, mp, Rp;
            Vp && Zp.m.unsubscribe(Vp), null === (pp = Cp) || void 0 === pp || pp(), Xp.dispose(), sp.dispose(), null === (ip = Qp) || void 0 === ip || ip.dispose(), Fp.dispose(), xp.dispose(), null === (cp = Lp) || void 0 === cp || cp(), null === (Op = Yp) || void 0 === Op || Op(), null === (op = Dp) || void 0 === op || op(), null === (Ip = Ap) || void 0 === Ip || Ip(), null === (Sp = Wp) || void 0 === Sp || Sp(), null === (Pp = Up) || void 0 === Pp || Pp(), null === (yp = undefined) || void 0 === yp || yp(), null === (wp = dp) || void 0 === wp || wp(), null === (vp = ep) || void 0 === vp || vp(), null === (tp = jp) || void 0 === tp || tp(), null === (Hp = kp) || void 0 === Hp || Hp(), null === (mp = undefined) || void 0 === mp || mp(), null === (Rp = qp) || void 0 === Rp || Rp()
          },
          onPlayerChangeBlock: (pp, ip, Op, Ip, Lp, Yp) => {
            if (pp === Sp && "Air" === Yp) {
              const pp = lp.getClientOption(Sp, "creative");
              xp.skills.predictBlock([ip, Op, Ip], Lp, pp);
              const Yp = function(pp, ip) {
                  if ("hub" === ip || "farming_1" === ip || "mining_1" === ip) return !hp.has(pp) || "hub" !== ip && "mining_1" !== ip ? Object.hasOwn(fp, pp) ? fp[pp] : void 0 : Tp
                }(Lp, cp),
                Dp = ("hub" === cp || "mining_1" === cp) && (op.ad.some((pp => pp === Lp)) || Object.hasOwn(ap, Lp) || "mining_1" === cp && "Block of Coal" === Lp);
              pp || void 0 === Yp && !Dp || lp.qE(ip, Op, Ip, null !== Yp && void 0 !== Yp ? Yp : Tp)
            }
          },
          onPlayerAttackEntity: (pp, ip) => {
            if (pp !== Sp || "Player" !== lp.getEntityType(ip)) return;
            const [cp, Op, op] = lp.sH(ip);
            lp.burstParticlePreset("critical", [cp, Op + 1, op], 10)
          },
          onChangeBlockFail: pp => {
            for (const {
                dp: ip
              }
              of pp) xp.skills.rejectBlock(ip)
          },
          onReceivedMessageFromServer: (pp, ip) => {
            if ("skyblockGatedPortal" === pp) {
              var cp;
              const [pp, Op] = ip;
              return void(null === (cp = Kp.get(pp)) || void 0 === cp || cp.Ey(Op))
            }
            if ("skyblockDailyReward" === pp) return void xp.dailyReward.Ey(ip);
            if ("skyblockMailbox" === pp) return void xp.mailbox.Ey(ip);
            if ("skyblockPortalTransit" === pp) return void xp.portalTransit.Ey(ip);
            if ("skyblockLoot" === pp) return void Xp.Ey(lp, ip);
            if ("skyblockLava" === pp) return void sp.Ey(ip);
            if ("skyblockForge" === pp) return void xp.forge.Ey(ip);
            if ("skyblockMagmaward" === pp) return void xp.magmaward.Ey(ip);
            if ("skyblockGlowtide" === pp) return void xp.glowtide.Ey(ip);
            if ("skyblockGlowMeter" === pp) return void xp.glowMeter.Ey(ip);
            if ("skyblockHushWait" === pp) return void xp.hushWait.Ey(ip);
            if ("skyblockPassage" === pp) {
              const pp = ip;
              return xp.passage.Ey(pp), xp.reachLog.receivePassagePhase(pp.passagePhase), jp ??= (0, mp.w)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: xp.passage.show
              }), void xp.keepersChair.receivePassage({
                keepersChairPassagePhase: pp.passagePhase,
                keepersChairPassageNextPhase: pp.passageNextPhase,
                keepersChairPassageTurnsInMs: pp.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === pp) {
              const pp = ip;
              return xp.tideCharts.Ey(pp), void(pp.tideCharts.length > 0 && (kp ??= (0, mp.w)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: xp.tideCharts.show
              })))
            }
            if (pp === gp.z) {
              var Op;
              const {
                hookId: pp,
                waiting: cp
              } = ip;
              return void Fp.hookWaiting(pp, null !== (Op = null === cp || void 0 === cp ? void 0 : cp.remainingMs) && void 0 !== Op ? Op : null)
            }
            if ("skyblockBiteTell" === pp) return void np.receiveTell(ip);
            if ("skyblockSmuggler" === pp) return void xp.smuggler.Ey(ip);
            if ("skyblockKeepersChair" === pp) return xp.keepersChair.Ey(ip), void xp.lampLight.setAtChair(xp.keepersChair.isAtChair());
            if ("skyblockLampLight" === pp) {
              const pp = ip;
              var op;
              if (xp.lampLight.Ey(pp), pp.lampLightReleasing) ep ??= (0, mp.w)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  xp.lampLight.setRelease(!1)
                }
              });
              else null === (op = ep) || void 0 === op || op(), ep = void 0;
              return
            }
            if ("skyblockRegulars" === pp) return void xp.regulars.Ey(ip);
            if ("skyblockHiddenWaters" === pp) return void xp.hiddenWaters.Ey(ip);
            if ("skyblockReachLog" === pp) return xp.reachLog.Ey(ip), void(dp ??= (0, mp.w)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: JO
              },
              onClick: xp.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === pp) {
              for (const [pp, cp, Op, op] of ip) lp.qE(pp, cp, Op, op);
              return
            }
            if ("skyblockHud" === pp) xp.receiveHud(ip);
            else if ("skyblockMap" === pp) xp.map.Ey(ip);
            else if (pp === Gp.e) xp.skills.Ey(ip);
            else if (pp === Ep && "dialogue" === ip.kind) xp.dialogue.Ey(ip);
            else if (pp === Ep) xp.quests.Ey(ip);
            else if ("skyblockDungeons" === pp) xp.dungeons.Ey(ip);
            else if ("sbCollections" === pp) xp.collections.Ey(ip);
            else if ("skyblockQuestGraph" === pp) xp.questGraph.Ey(ip);
            else {
              if ("skyblockAutographs" !== pp) return;
              xp.autographs.Ey(ip)
            }
            if (!Yp && xp.map.getSnapshot().enabled) {
              const pp = (0, mp.w)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: xp.map.show
                }),
                ip = (0, rp.x)(xp.map.show);
              Yp = () => {
                pp(), ip()
              }
            }!Dp && xp.skills.getSnapshot().enabled && (Dp = (0, mp.w)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: xp.skills.show
            })), !Up && xp.collections.getSnapshot().enabled && (Up = (0, mp.w)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: xp.collections.show
            })), !Ap && xp.quests.getSnapshot().enabled && (Ap = (0, mp.w)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: xp.quests.show
            })), !qp && xp.autographs.getSnapshot().enabled && (qp = (0, mp.w)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: xp.autographs.show
            }));
            const Ip = xp.dungeons.getSnapshot().enabled;
            var Sp;
            (Dp || Ap || Ip) && yp !== Ip && (yp = Ip, null === (Sp = Wp) || void 0 === Sp || Sp(), Wp = (0, mp.w)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: Bi
              },
              disabled: !Ip,
              panel: !0,
              onClick: xp.dungeons.show
            }));
            Lp || (Lp = (0, rp.A)((0, Rp.createElement)(Qx, {
              controller: xp
            }), {
              content: (0, Rp.createElement)(Jx, {
                controller: xp
              }),
              onClose: xp.close
            }))
          },
          LP: () => {
            var pp;
            for (const ip of Kp.values()) ip.LP();
            Xp.LP(lp), sp.LP(), null === (pp = Qp) || void 0 === pp || pp.LP(), xp.skills.LP(), xp.quests.LP(), xp.dailyReward.LP(), xp.mailbox.LP(), xp.map.LP()
          }
        }
      }
  },
  36569: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => op,
      e: () => Op
    });
    const Op = "skyblockSkills",
      op = "skills_test_gym"
  },
  34453: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => op,
      g: () => Sp
    });
    const Op = [{
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

    function op(pp) {
      let ip, cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof pp) {
        if (!Number.isFinite(pp)) return "0";
        if (Math.abs(pp) < 100) {
          const ip = pp < 0 ? "-" : "",
            cp = Math.abs(pp);
          return cp >= 10 ? `${ip}${cp.toFixed(1).replace(/\.0$/,"")}` : `${ip}${cp.toFixed(2).replace(/\.?0+$/,"")}`
        }
        ip = BigInt(Math.floor(pp))
      } else ip = pp;
      const op = ip < 0n ? -ip : ip,
        Ip = ip < 0n ? "-" : "",
        Sp = op.toString();
      if (Sp.length <= cp) return `${Ip}${Sp}`;
      const xp = 3 * Math.floor((Sp.length - 1) / 3);
      if (xp < 3) return `${Ip}${Sp}`;
      if (xp > 3 * Op.length) {
        const pp = Sp[0],
          ip = Sp.slice(1, 3).replace(/0+$/, "");
        return `${Ip}${ip?`${pp}.${ip}`:pp}e${Sp.length-1}`
      }
      const {
        threshold: Lp,
        suffix: Yp
      } = Op[Op.length - xp / 3], Dp = op / Lp, Ap = Number(1000n * (op % Lp) / Lp), Pp = Number(Dp) + Ap / 1e3;
      let Wp;
      return Wp = Pp >= 100 ? Math.floor(Pp).toString() : Pp >= 10 ? Pp.toFixed(1).replace(/\.0$/, "") : Pp.toFixed(2).replace(/\.?0+$/, ""), `${Ip}${Wp}${Yp}`
    }
    const Ip = Op.map((pp => {
      let {
        threshold: ip,
        suffix: cp
      } = pp;
      return {
        threshold: Number(ip),
        suffix: cp
      }
    })).filter((pp => {
      let {
        threshold: ip
      } = pp;
      return Number.isFinite(ip)
    }));

    function Sp(pp) {
      const ip = Math.abs(pp),
        cp = pp < 0 ? "-" : "";
      for (const {
          threshold: Op,
          suffix: op
        }
        of Ip)
        if (ip >= Op) {
          const pp = ip / Op;
          if (pp >= 1e3) return `${cp}${ip.toExponential(2).replace("e+","e")}`;
          let Ip;
          return Ip = pp >= 100 ? Math.floor(pp).toString() : pp >= 10 ? pp.toFixed(1).replace(/\.0$/, "") : pp.toFixed(2).replace(/\.?0+$/, ""), `${cp}${Ip}${op}`
        } return `${cp}${ip}`
    }
  },
  38776: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  38783: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  38791: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  38798: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  38807: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  38814: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/farming_1.88c6a10630aed3ef8195.png"
  },
  38817: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  38819: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/hub.2531ead8f8a327f34b1c.png"
  },
  38824: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/island.205bb9973a65f87b60a3.png"
  },
  38828: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/mining_1.98c7a7e3424532a89b98.png"
  },
  38831: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/mining_1_bridge.65d4e676030492359993.png"
  },
  38836: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/mining_1_gallery.f9f2baffc0a921cd9ffe.png"
  },
  38842: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  38849: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/mining_1_village.855cb5fdab046ca65e04.png"
  },
  18601: pp => {
    pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  20687: pp => {
    pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  22986: pp => {
    pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  24531: pp => {
    pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  26312: pp => {
    pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  26332: pp => {
    pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  38756: pp => {
    pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYUlEQVR4nGNgIBP8R8NYwX+GDVNRMQOm4v8MC9qxYwZUxf//b+T4//8A+///51khGMTeyIGp8Nz0gv8MDoFgGsbeUB2BXeHESHcUjFNhR4Dj/zp3OzAGsbEphHgIOyYNAACzzGY5JF2GbAAAAABJRU5ErkJggg=="
  },
  38762: pp => {
    pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);