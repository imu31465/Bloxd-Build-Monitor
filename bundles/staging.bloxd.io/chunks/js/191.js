export const id = 191;
export const ids = [50, 191];
export const modules = {
  38776: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Nd,
      c: () => Wd
    });
    const pd = new WeakMap;

    function Nd(dd, Jd) {
      return pd.set(dd, Jd), dd
    }

    function Wd(dd) {
      var Jd;
      return null !== (Jd = pd.get(dd)) && void 0 !== Jd ? Jd : null
    }
  },
  38674: (dd, Jd, kd) => {
    function pd(dd, Jd, kd) {
      var pd;
      const {
        width: Nd,
        height: Wd
      } = kd, Pd = null !== (pd = dd.text) && void 0 !== pd ? pd : dd, Zd = (Pd.x / 100 - .5) * Nd, gd = (Pd.y / 100 - .5) * Wd, Cd = Nd / 2 - Jd.x;
      if (null !== dd.text && Math.abs(Zd) <= Cd && gd >= Jd.top - Wd / 2 && gd <= Wd / 2 - Jd.bottom) return {
        x: Pd.x,
        y: Pd.y
      };
      const Kd = Math.min(0 === Zd ? 1 / 0 : Cd / Math.abs(Zd), gd > 0 ? (Wd / 2 - Jd.bottom) / gd : gd < 0 ? (Jd.top - Wd / 2) / gd : 1 / 0);
      return !Number.isFinite(Kd) || Kd < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + Zd * Kd / Nd * 100,
        y: 50 + gd * Kd / Wd * 100
      }
    }
    kd.d(Jd, {
      e: () => pd
    })
  },
  38690: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Pd
    });
    const pd = 4,
      Nd = 12e3,
      Wd = 1e3;
    class Pd {
      constructor() {
        let {
          limit: dd = pd,
          windowMs: Jd = Nd,
          spacingMs: kd = Wd,
          now: Pd = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = dd, this.windowMs = Jd, this.spacingMs = kd, this.now = Pd
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const dd of this.priority) dd.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const dd = this.now();
        this.sent.push(dd), this.lastSentAt = dd, this.schedule(), this.notify()
      }
      addPriority(dd) {
        return this.priority.add(dd), () => {
          this.priority.delete(dd)
        }
      }
      subscribe(dd) {
        return this.listeners.add(dd), () => {
          this.listeners.delete(dd)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const dd of this.priority)
          if (dd.waiting()) return !0;
        return !1
      }
      prune() {
        const dd = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= dd;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const dd = this.now(),
          Jd = this.lastSentAt + this.spacingMs,
          kd = Math.min(Jd > dd ? Jd : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        kd !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, kd - dd)))
      }
      notify() {
        for (const dd of this.listeners) dd()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38670: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd
    });
    class pd {
      constructor(dd, Jd, kd) {
        this.nO = dd, this.beforeOpen = Jd, this.afterClose = kd, this.open = !1, this.pL = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.pL && (this.open = !0, this.beforeOpen(this), this.emit())
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
        this.open = !1, this.emit(), this.pL = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.pL || (this.snapshot = this.buildSnapshot(), this.nO(this.snapshot))
      }
    }
  },
  38780: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      SkyblockEntityFacing: () => Zd,
      needsSkyblockEntityFacing: () => Pd
    });
    var pd = kd(605),
      Nd = kd(4090),
      Wd = kd(38785);

    function Pd(dd, Jd) {
      if (dd.metaInfo === pd.c || "Iron Guardian" === dd.type || "Gold Guardian" === dd.type) return !0;
      if ("Pig" === dd.type) return "sitting" === dd.pose;
      if ("Person" !== dd.meshKind || void 0 === dd.meshOpts) return !1;
      let kd = null === Jd || void 0 === Jd ? void 0 : Jd.get(dd.meshOpts);
      if (void 0 === kd) {
        var Wd, Pd;
        const pd = (0, Nd.h)(dd);
        kd = !1, "pig_napoleon" === (null === pd || void 0 === pd || null === (Wd = pd.opts.textures) || void 0 === Wd ? void 0 : Wd.head) ? kd = !0 : "npc_pig_head" === (null === pd || void 0 === pd || null === (Pd = pd.opts.textures) || void 0 === Pd ? void 0 : Pd.head) && (kd = "sitting" === pd.opts.pose || "sitting"), Jd && (Jd.size >= 256 && Jd.clear(), Jd.set(dd.meshOpts, kd))
      }
      return "sitting" === kd ? "sitting" === dd.pose : kd
    }(0, Wd.i)("skyblock", ((dd, Jd) => {
      Jd.setFacingTolerance(Pd(dd) ? 0 : null)
    }));
    class Zd {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = dd, this.alsoVisit = Jd, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = dd => {
          var Jd;
          const kd = this.api.getEntityInfo(dd);
          kd && (Pd(kd, this.meshFacingCache) && (this.api.setFacingTolerance(dd, 0), this.nextFacing.add(dd)), null === (Jd = this.alsoVisit) || void 0 === Jd || Jd.call(this, dd, kd))
        }
      }
      Do() {
        const {
          api: dd
        } = this, Jd = this.nextFacing;
        dd.forEachEntity(this.visit);
        for (const kd of this.facing) Jd.has(kd) || dd.setFacingTolerance(kd, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = Jd
      }
      dispose() {
        for (const dd of this.facing) this.api.setFacingTolerance(dd, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  38668: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      default: () => Cg
    });
    const pd = "island";
    var Nd = kd(313);
    const Wd = (0, Nd.Hb)([0, 0, -1]),
      Pd = [{
        name: "S",
        bearing: (0, Nd.Hb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, Nd.Hb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: Wd
      }, {
        name: "W",
        bearing: (0, Nd.Hb)([1, 0, 0])
      }];

    function Zd(dd, Jd, kd) {
      return [100 * (kd.mapMaxX - dd) / (kd.mapMaxX - kd.mapMinX), 100 * (Jd - kd.mapMinZ) / (kd.mapMaxZ - kd.mapMinZ)]
    }

    function gd(dd, Jd, kd) {
      const Nd = "local" === Jd,
        Wd = dd.background,
        Pd = Jd => Wd ? Zd(Jd[0] - dd.mapOrigin[0], Jd[2] - dd.mapOrigin[2], Wd.bounds) : [50, 50],
        gd = (dd.insideDungeon ? [] : dd.landmarks).map((dd => {
          var Jd, pd;
          return {
            id: dd.id,
            name: kd(dd.visited && dd.nameKey ? null !== (Jd = dd.mapLabelKey) && void 0 !== Jd ? Jd : dd.nameKey : "skyblockGame:mapUnknown"),
            icon: dd.visited && null !== (pd = dd.icon) && void 0 !== pd ? pd : "unknown",
            visited: dd.visited,
            current: !1,
            position: Pd(dd.position),
            travelKind: "landmark",
            travelId: dd.id
          }
        })),
        Kd = dd.zones.map((Jd => {
          var pd;
          return {
            id: Jd.id,
            name: kd(Jd.visited && Jd.nameKey ? Jd.nameKey : "skyblockGame:mapUnknown"),
            icon: Jd.visited && null !== (pd = Jd.icon) && void 0 !== pd ? pd : "unknown",
            visited: Jd.visited,
            current: Jd.id === dd.zoneId,
            position: Jd.position,
            thumbnail: Jd.visited ? Jd.id : void 0,
            travelKind: "zone",
            travelId: Jd.id
          }
        })),
        od = dd.insideDungeon || !Wd ? [] : dd.portals.map((dd => {
          var Jd;
          return {
            id: dd.id,
            name: kd(null !== (Jd = dd.nameKey) && void 0 !== Jd ? Jd : "skyblockGame:mapUnknown"),
            icon: dd.visited ? "dungeons" === dd.destination ? "portal_orange" : "portal" : "unknown",
            visited: dd.visited,
            current: !1,
            position: Pd(dd.position),
            colour: dd.colour,
            travelKind: "zone",
            travelId: dd.destination
          }
        })),
        ld = Nd ? gd : Kd,
        Qd = ld.filter((dd => dd.visited)).length,
        Ld = Wd ? (Wd.bounds.mapMaxX - Wd.bounds.mapMinX) / (Wd.bounds.mapMaxZ - Wd.bounds.mapMinZ) : 2,
        Od = Wd ? JSON.stringify([Wd.bounds, dd.mapOrigin]) : "";
      return {
        local: Nd,
        points: ld,
        portals: Nd ? od : [],
        progress: ld.length ? kd("skyblockGame:mapDiscovered", {
          current: String(Qd),
          total: String(ld.length)
        }) : null,
        percent: ld.length ? 100 * Qd / ld.length : 0,
        canTravel: [...ld, ...Nd ? od : []].some((dd => dd.visited && !dd.current)),
        noLandmarks: Nd && !dd.insideDungeon && 0 === gd.length,
        background: Wd ? {
          imageKey: Wd.imageKey,
          fallbackImageKey: dd.zoneId,
          geometryKey: Od,
          label: kd(Wd.labelKey),
          colour: Wd.backgroundColour,
          ratio: Ld
        } : null,
        connections: Cd(dd.zones),
        minimap: Wd ? {
          imageKey: Wd.imageKey,
          fallbackImageKey: dd.zoneId,
          geometryKey: Od,
          label: kd(Wd.labelKey),
          colour: Wd.backgroundColour,
          caption: kd(dd.zoneId === pd ? "skyblockGame:zoneIsland" : Wd.labelKey),
          width: (Wd.bounds.mapMaxX - Wd.bounds.mapMinX) / Wd.minimapSpan * 100 + "%",
          height: (Wd.bounds.mapMaxZ - Wd.bounds.mapMinZ) / Wd.minimapSpan * 100 + "%",
          markers: [...gd, ...od]
        } : null
      }
    }

    function Cd(dd) {
      const Jd = new Set;
      return dd.flatMap((kd => kd.connections.flatMap((pd => {
        const Nd = dd.find((dd => dd.id === pd)),
          Wd = [kd.id, pd].sort().join("|");
        return !Nd || Jd.has(Wd) ? [] : (Jd.add(Wd), [{
          id: `${kd.id}-${pd}`,
          start: kd.position,
          end: Nd.position,
          explored: kd.visited && Nd.visited
        }])
      }))))
    }
    var Kd = kd(38670);
    class od extends Kd.c {}
    const ld = "skyblockMapView";
    class Qd extends od {
      constructor(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(dd, pd, Nd), this.requestTravel = Jd, this.translate = kd, this.now = Wd, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
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
        }, this.travel = (dd, Jd) => {
          if (!this.map || this.pending || this.pL) return;
          const kd = ("zone" === dd ? this.map.zones : this.map.landmarks).find((dd => dd.id === Jd));
          if (kd) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in kd && !kd.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (kd.visited)
              if ("zone" === dd && Jd === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const kd = ++this.nextRequestId;
                this.pending = {
                  requestId: kd,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: dd,
                  id: Jd,
                  requestId: kd
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
      ZL(dd) {
        var Jd;
        if (!this.pL)
          if ("entities" !== dd.kind)
            if ("open" !== dd.kind) {
              var kd, pd;
              if ("snapshot" === dd.kind)(null === (kd = dd.snapshot) || void 0 === kd ? void 0 : kd.zoneId) !== (null === (pd = this.map) || void 0 === pd ? void 0 : pd.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = dd.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === dd.kind) {
                var Nd;
                dd.requestId === (null === (Nd = this.pending) || void 0 === Nd ? void 0 : Nd.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (dd.requestId === (null === (Jd = this.pending) || void 0 === Jd ? void 0 : Jd.requestId)) {
                var Wd;
                this.pending = null, this.feedbackKey = null !== (Wd = dd.errorKey) && void 0 !== Wd ? Wd : "", null === dd.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = dd.entities
      }
      Do() {
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
          presentation: this.map ? gd(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const Ld = 67.5 * Math.PI / 180;

    function Od(dd, Jd) {
      const kd = Math.abs(dd);
      if (kd > Ld || Jd.trackHalfWidth <= 0) return null;
      const pd = Jd.trackHalfWidth,
        Nd = Jd.screenHalfWidth / (Jd.tanHalfFovX * Math.max(.5, Math.cos(Jd.pitch))),
        Wd = Math.min(Math.atan(.6 * pd / Nd), .75 * Ld),
        Pd = Nd * Math.tan(Wd);
      let Zd;
      if (kd <= Wd) Zd = Nd * Math.tan(kd);
      else {
        const dd = Ld - Wd,
          Jd = Math.max(0, Nd * dd / (Math.cos(Wd) ** 2 * (pd - Pd)) - 1),
          gd = (kd - Wd) / dd;
        Zd = Pd + (pd - Pd) * (1 + Jd) * gd / (1 + Jd * gd)
      }
      return 50 + Math.sign(dd) * Zd * 50 / pd
    }
    class ed {
      constructor(dd, Jd) {
        this.map = dd, this.visited = Jd, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = Jd ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const dd = this.map.getSnapshot().map;
        return !dd || dd.insideDungeon ? [] : dd.landmarks.filter((dd => dd.visited === this.visited)).map((dd => {
          var Jd, kd;
          return {
            id: `landmark:${dd.id}`,
            position: dd.position,
            icon: null !== (Jd = dd.icon) && void 0 !== Jd ? Jd : "unknown",
            nameKey: null !== (kd = dd.nameKey) && void 0 !== kd ? kd : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class Rd {
      constructor(dd, Jd, kd, pd) {
        this.map = dd, this.kind = Jd, this.position = kd, this.alive = pd, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = Jd, this.range = "enemy" === Jd ? 48 : 64, this.limit = 12
      }
      yI(dd) {
        if ("enemy" !== this.kind || this.alive(dd.Pd)) return this.position(dd.Pd)
      }
      getPoints() {
        const dd = [];
        for (const pd of this.map.getEntities()) {
          if (pd.kind !== this.kind || "enemy" === this.kind && !this.alive(pd.compassEntityId)) continue;
          const Nd = this.position(pd.compassEntityId);
          var Jd, kd;
          if (Nd) dd.push({
            id: `${this.kind}:${pd.compassEntityId}`,
            Pd: pd.compassEntityId,
            kind: this.kind,
            icon: null !== (Jd = pd.icon) && void 0 !== Jd ? Jd : pd.npcSkin ? `npc_${pd.npcSkin}` : this.kind,
            displayName: pd.displayName,
            position: Nd,
            nameKey: null !== (kd = pd.nameKey) && void 0 !== kd ? kd : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return dd
      }
    }
    class Id {
      constructor(dd) {
        this.map = dd, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const dd = this.map.getSnapshot().map;
        return !dd || dd.insideDungeon ? [] : dd.portals.map((dd => {
          var Jd;
          return {
            id: "portal:" + dd.id,
            kind: "portal",
            position: dd.position,
            nameKey: null !== (Jd = dd.nameKey) && void 0 !== Jd ? Jd : "skyblockGame:compassUnvisitedZone",
            icon: dd.visited ? "dungeons" === dd.destination ? "portal_orange" : "portal" : "unknown",
            colour: dd.colour
          }
        }))
      }
    }
    class Gd {
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

    function vd(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dd.position;
      const Wd = pd[0] - Jd[0],
        Pd = pd[2] - Jd[2];
      return {
        ...dd,
        position: pd,
        offset: Nd.b.computeShortestRotation(kd, (0, Nd.Hb)([Wd, 0, Pd])),
        distance: Math.hypot(Wd, pd[1] - Jd[1], Pd)
      }
    }
    let xd;

    function qd(dd, Jd) {
      var kd;
      return (null === (kd = xd) || void 0 === kd ? void 0 : kd.locale) !== Jd && (xd = {
        locale: Jd,
        near: new Intl.NumberFormat(Jd, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(Jd, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (dd < 10 ? xd.near : xd.far).format(dd)
    }
    class Bd {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(dd) {
        return this.providers.set(dd.id, dd), this.refreshAt = 0, () => {
          this.providers.get(dd.id) === dd && (this.providers.delete(dd.id), this.refreshAt = 0)
        }
      }
      frame(dd, Jd, kd) {
        if (kd >= this.refreshAt) {
          this.refreshAt = kd + 200, this.candidates = [];
          for (const Jd of this.providers.values()) {
            if (!Jd.enabled) continue;
            const kd = Jd.getPoints().map((Jd => {
              const kd = Jd.position;
              return {
                point: Jd,
                distance: Math.hypot(kd[0] - dd[0], kd[1] - dd[1], kd[2] - dd[2])
              }
            })).filter((dd => dd.distance <= Jd.range)).sort(((dd, Jd) => dd.distance - Jd.distance)).slice(0, Jd.limit);
            for (const {
                point: dd
              }
              of kd) this.candidates.push({
              provider: Jd,
              point: dd
            })
          }
        }
        const pd = [];
        for (const {
            point: Nd,
            provider: Wd
          }
          of this.candidates) {
          if (!Wd.enabled) continue;
          const kd = Wd.yI ? Wd.yI(Nd) : Nd.position;
          if (kd) {
            const Wd = vd(Nd, dd, Jd, kd);
            Math.abs(Wd.offset) <= Ld && pd.push(Wd)
          }
        }
        return pd
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var sd = kd(36783),
      ad = kd(56);
    const Md = [{
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
      Fd = Md.length;

    function Yd(dd) {
      return dd >= Fd ? 1 : dd + 1
    }
    const md = "skyblockQuests",
      bd = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      Sd = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function jd(dd) {
      let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const kd = Math.max(0, Math.floor(dd)),
        pd = Math.floor(kd % 1e3 / 100),
        Nd = Math.floor(kd / 1e3),
        Wd = Nd % 60,
        Pd = Math.floor(Nd / 60),
        Zd = Pd % 60,
        gd = Math.floor(Pd / 60),
        Cd = dd => dd < 10 ? `0${dd}` : String(dd),
        Kd = Jd ? `.${pd}` : "";
      return gd > 0 ? `${gd}:${Cd(Zd)}:${Cd(Wd)}${Kd}` : `${Zd}:${Cd(Wd)}${Kd}`
    }
    const Xd = "devquests",
      fd = "none",
      nd = {
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
      Ud = "Compressed Messy Stone",
      yd = {
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
      Dd = ["Stone", "Diorite", "Andesite", "Granite"],
      Td = new Set(Dd),
      Ed = (Object.keys(yd), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const cd = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function hd(dd, Jd) {
      const kd = Math.floor(5 * dd / (2 * Jd + 1));
      return Math.min(4, Math.max(0, kd))
    }
    var rd = kd(1260);
    var ud = kd(36534);
    var td = kd(36779),
      Vd = kd(29),
      zd = kd(8809);
    const Hd = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      wd = 1e3;

    function Ad(dd) {
      return Math.max(0, dd)
    }

    function dJ(dd) {
      return 1 + .01 * Ad(dd)
    }

    function JJ(dd) {
      return 1 + .005 * Ad(dd)
    }

    function kJ(dd) {
      return 1 + .005 * Ad(dd)
    }

    function pJ(dd) {
      return .01 * Ad(dd)
    }

    function NJ(dd) {
      return 150 / (150 + Ad(dd))
    }

    function WJ(dd) {
      return 1 + .002 * Ad(dd)
    }

    function PJ(dd) {
      return Math.round(10 * dd) / 10
    }

    function ZJ(dd, Jd) {
      switch (dd) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: PJ(100 * (JJ(Jd) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: PJ(100 * (dJ(Jd) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: PJ(100 * (kJ(Jd) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: PJ(100 * pJ(Jd))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: PJ(100 * (1 - NJ(Jd)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: PJ(100 * (WJ(Jd) - 1))
          }
      }
    }

    function gJ(dd) {
      return "farming" === dd ? 200 : 100
    }

    function CJ(dd, Jd) {
      if (!Number.isSafeInteger(dd) || dd < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const kd = gJ(Jd),
        pd = dd => function(dd, Jd) {
          return gJ(dd) * Jd * (Jd + 1) / 2
        }(Jd, dd);
      let Nd = Math.min(wd, Math.floor((Math.sqrt(8 * dd / kd + 1) - 1) / 2));
      return Nd < wd && pd(Nd + 1) <= dd ? Nd++ : pd(Nd) > dd && Nd--, {
        totalXp: dd,
        level: Nd,
        xpIntoLevel: dd - pd(Nd),
        xpForNextLevel: Nd === wd ? null : kd * (Nd + 1)
      }
    }
    const KJ = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function oJ(dd) {
      return KJ.has(dd)
    }
    const lJ = new Set(Nd.wb);

    function QJ(dd) {
      return lJ.has(dd)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const LJ = {
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
      OJ = {
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
      eJ = {
        ...OJ,
        ...Object.fromEntries(Object.entries(Ed).map((dd => {
          let [Jd, kd] = dd;
          return [Jd, 9 * OJ[kd]]
        })))
      },
      RJ = {
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
      IJ = {
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
    const GJ = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      vJ = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function xJ(dd) {
      return `rgb(${vJ[dd].join(", ")})`
    }

    function qJ(dd, Jd, kd) {
      if (!kd) return dd(Jd);
      const pd = {};
      for (const [Nd, Wd] of Object.entries(kd)) pd[Nd] = "string" === typeof Wd ? Wd : dd(Wd.translationKey);
      return dd(Jd, pd)
    }
    class BJ {
      constructor(dd, Jd) {
        this.now = dd, this.getJournal = Jd, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.EC = !1, this.onShown = () => {}
      }
      enqueue(dd) {
        const Jd = sJ(dd);
        if (Jd) this.pending.push(dd);
        else {
          const Jd = this.pending.findIndex(sJ);
          this.pending.splice(-1 === Jd ? this.pending.length : Jd, 0, dd)
        }
        return (null === this.current || null !== this.followUp && !Jd) && (this.advance(), !0)
      }
      setHeld(dd) {
        return this.EC = dd, !dd && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      Do() {
        const dd = this.getJournal(),
          Jd = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === Jd ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === Jd || void 0 === Jd ? void 0 : Jd.kind) && dd && dd.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === Jd || void 0 === Jd ? void 0 : Jd.kind)) {
          const dd = this.findFollowUp(this.current);
          if ("step" !== (null === dd || void 0 === dd ? void 0 : dd.kind) || dd.questId !== Jd.questId || dd.step.id !== Jd.step.id) return this.showFollowUp(dd, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(dd, Jd, kd) {
        var pd, Nd, Wd, Pd;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, dd, kd);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, dd);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, dd, Jd);
        const {
          questCompletionKind: Zd,
          questCompletionNameKey: gd
        } = this.current, Cd = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, Kd = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, od = "step" === (null === (pd = this.followUp) || void 0 === pd ? void 0 : pd.kind) ? this.followUp : null, ld = "explore" === (null === (Nd = this.followUp) || void 0 === Nd ? void 0 : Nd.kind);
        let Qd;
        return Qd = ld ? dd("skyblockGame:questExploreTitle") : null !== od ? "quest" === Zd ? dd("skyblockGame:questNextQuestTitle", {
          quest: dd(od.questNameKey)
        }) : dd("skyblockGame:questNextStepTitle") : dd("started" === Zd ? "skyblockGame:questStartedTitle" : "quest" === Zd ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? Zd : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: Qd,
          name: ld ? Jd("skyblockGame:questExploreName") : null !== od ? qJ(Jd, od.step.nameKey, od.step.nameParams) : qJ(Jd, gd, Cd),
          description: ld ? Jd("skyblockGame:questExploreDescription") : null === od ? null : qJ(Jd, od.step.descriptionKey, od.step.descriptionParams),
          reward: null === this.followUp && Kd > 0 ? Jd("skyblockGame:questCoinRewardSuffix", {
            amount: Kd.toLocaleString(kd)
          }) : null,
          iconItem: null !== (Wd = null === od || void 0 === od ? void 0 : od.step.questIconItem) && void 0 !== Wd ? Wd : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== od && (null === (Pd = this.getJournal()) || void 0 === Pd ? void 0 : Pd.trackedQuestId) === od.questId ? od.step.nameKey : null
        }
      }
      getSkillLevelView(dd, Jd, kd) {
        let {
          skill: pd,
          beforeLevel: Nd,
          level: Wd
        } = dd;
        const Pd = ZJ(pd, Nd),
          Zd = ZJ(pd, Wd);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: Jd(`skyblockGame:${pd}`),
          name: Jd("skyblockGame:skillLevelUp", {
            to: Wd.toLocaleString(kd)
          }),
          description: Pd.percent === Zd.percent ? null : Jd(`${Zd.translationKey}Change`, {
            before: Pd.percent.toLocaleString(kd),
            after: Zd.percent.toLocaleString(kd)
          }),
          reward: null,
          iconItem: GJ[pd],
          accent: xJ(pd),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(dd, Jd) {
        let {
          landmarkNameKey: kd
        } = dd;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: Jd("skyblockGame:landmarkDiscovered"),
          name: Jd(kd),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(dd, Jd, kd) {
        let {
          titleKey: pd,
          textKey: Nd,
          params: Wd = {},
          nameKeys: Pd = {},
          iconItem: Zd = null
        } = dd;
        const gd = {
          ...Wd
        };
        for (const [Cd, Kd] of Object.entries(Pd)) gd[Cd] = Jd(Kd);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: Jd(pd),
          name: kd(Nd, gd),
          description: null,
          reward: null,
          iconItem: Zd,
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
      showFollowUp(dd, Jd) {
        null === dd || this.EC ? this.advance() : (this.followUp = dd, this.token++, this.shownAt = this.now(), this.expiresAt = null !== Jd && void 0 !== Jd ? Jd : this.shownAt + this.durationMs())
      }
      findFollowUp(dd) {
        var Jd;
        const kd = this.getJournal();
        if (!kd || this.hasPendingQuestPopup() || sJ(dd)) return null;
        const pd = "started" === dd.questCompletionKind ? kd.active.some((Jd => Jd.id === dd.questCompletionQuestId)) : "quest" === dd.questCompletionKind ? kd.completed.some((Jd => Jd.id === dd.questCompletionQuestId)) : [...kd.active, ...kd.completed].some((Jd => Jd.id === dd.questCompletionQuestId && Jd.subquests.some((Jd => Jd.id === dd.questCompletionStepId && "completed" === Jd.status))));
        if (!pd) return null;
        if ("quest" === dd.questCompletionKind && 0 === kd.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const Nd = kd.active.find((dd => dd.id === kd.trackedQuestId)),
          Wd = null !== (Jd = null === Nd || void 0 === Nd ? void 0 : Nd.subquests.find((dd => "ready" === dd.status))) && void 0 !== Jd ? Jd : null === Nd || void 0 === Nd ? void 0 : Nd.subquests.find((dd => "active" === dd.status));
        return Wd ? {
          kind: "step",
          questId: Nd.id,
          questNameKey: Nd.nameKey,
          step: Wd
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((dd => !sJ(dd)))
      }
      advance() {
        var dd;
        this.current = this.EC ? null : null !== (dd = this.pending.shift()) && void 0 !== dd ? dd : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function sJ(dd) {
      return iJ(dd.questCompletionKind)
    }

    function iJ(dd) {
      return "skillLevel" === dd || "landmark" === dd || "npcNote" === dd
    }
    var aJ = kd(38674);
    const MJ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      FJ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      YJ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      mJ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      bJ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var SJ = kd(38683);
    const jJ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      XJ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const fJ = kd.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const nJ = kd.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      UJ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var yJ = kd(18700),
      DJ = kd(20930),
      TJ = kd(23256),
      EJ = kd(24763),
      cJ = kd(26456);
    const hJ = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: yJ,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: DJ,
      cow: bJ,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: kd(26472),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: MJ,
      fishing_1: MJ,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: FJ,
      guardian_iron: YJ,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: TJ,
      mines: EJ,
      mining_1: EJ,
      npc: mJ,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: bJ,
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
      npc_gold_guardian: FJ,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: YJ,
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
      npc_tentacle_guy: SJ,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: jJ,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: fJ,
      quest_talk: nJ,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: UJ,
      watermelon: cJ
    };

    function rJ(dd, Jd) {
      const kd = document.createElement("img");
      return kd.className = Jd, kd.src = dd, kd.alt = "", kd.draggable = !1, kd
    }

    function uJ(dd) {
      var Jd;
      const kd = null !== (Jd = hJ[dd]) && void 0 !== Jd ? Jd : dd.startsWith("npc_") ? mJ : UJ;
      if ("portal" !== dd) return rJ(kd, "SkyblockMapIcon");
      const pd = document.createElement("span");
      pd.className = "SkyblockMapIcon Portal";
      const Nd = document.createElement("span");
      return Nd.className = "SkyblockMapIconTint", Nd.style.maskImage = Nd.style.webkitMaskImage = `url("${XJ}")`, pd.append(rJ(kd, "SkyblockMapIconLayer"), Nd, rJ(XJ, "SkyblockMapIconLayer SkyblockMapIconShade")), pd
    }
    var tJ = kd(38651),
      VJ = kd(4099);
    const zJ = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function HJ(dd) {
      const Jd = new VJ.j(dd);
      return {
        radius: 45,
        squareness: 3,
        wobbles: zJ.map((dd => {
          let {
            lobes: kd,
            amount: pd
          } = dd;
          return {
            lobes: kd[Math.floor(Jd.next() * kd.length)],
            amount: pd[0] + Jd.next() * (pd[1] - pd[0]),
            phase: 2 * Jd.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function wJ(dd) {
      let {
        radius: Jd,
        squareness: kd,
        wobbles: pd,
        samples: Nd
      } = dd;
      const Wd = [];
      for (let Pd = 0; Pd < Nd; Pd++) {
        const dd = 2 * Math.PI * Pd / Nd,
          Zd = Math.cos(dd),
          gd = Math.sin(dd),
          Cd = Jd * (Math.abs(Zd) ** kd + Math.abs(gd) ** kd) ** (-1 / kd) * pd.reduce(((Jd, kd) => {
            let {
              lobes: pd,
              amount: Nd,
              phase: Wd
            } = kd;
            return Jd + Nd * Math.sin(pd * dd + Wd)
          }), 1);
        Wd.push(`${(50+Cd*Zd).toFixed(2)} ${(50+Cd*gd).toFixed(2)}`)
      }
      return `M${Wd.join("L")}Z`
    }
    const AJ = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class dk {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.pL = !1, this.mountCompass = dd => {
          var Jd;
          if (null === (Jd = this.stopLayout) || void 0 === Jd || Jd.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !dd || this.pL) return;
          const kd = dd.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: dd,
            track: kd,
            label: dd.querySelector(".SkyblockCompassLabel")
          }, kd.replaceChildren();
          for (let Nd = 0; Nd < 4; Nd++) {
            const dd = document.createElement("span");
            dd.className = "SkyblockCompassCardinal", kd.appendChild(dd), this.cardinals.push(dd)
          }
          const pd = (0, tJ.e)(AJ, [dd], this.layout);
          this.stopLayout = () => {
            pd(), kd.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = dd => {
          this.terrain = this.pL ? null : dd, this.render(this.frame)
        }, this.mountMinimapSearchArea = dd => {
          this.mountSearchArea("minimap", dd)
        }, this.mountMapSearchArea = dd => {
          this.mountSearchArea("map", dd)
        }, this.mountPlayer = dd => {
          this.player = this.pL ? null : dd, this.render(this.frame)
        }, this.mountWaypoint = dd => {
          var Jd, kd;
          if (null === (Jd = this.stopWaypoint) || void 0 === Jd || Jd.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !dd || this.pL) return;
          const pd = dd.querySelector(".SkyblockQuestWaypointMarker");
          pd.replaceChildren(uJ("quest")), this.markerIcon = "quest", this.waypoint = {
            root: dd,
            marker: pd,
            clip: dd.querySelector(".SkyblockQuestWaypointTextClip"),
            text: dd.querySelector(".SkyblockQuestWaypointText"),
            label: dd.querySelector(".SkyblockQuestWaypointLabel"),
            distance: dd.querySelector(".SkyblockQuestWaypointDistance"),
            hint: dd.querySelector(".SkyblockQuestWaypointHint")
          };
          const Nd = () => {
              this.waypointMarkerSize = {
                width: pd.offsetWidth,
                height: pd.offsetHeight
              }, this.waypointInset = {
                x: pd.offsetWidth / 2 + 8,
                top: pd.offsetHeight + 8,
                bottom: 8
              }
            },
            Wd = new ResizeObserver((() => {
              Nd(), this.render(this.frame)
            }));
          Wd.observe(pd, {
            box: "border-box"
          });
          const Pd = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", Pd), null === (kd = window.visualViewport) || void 0 === kd || kd.addEventListener("resize", Pd), this.stopWaypoint = () => {
            var dd;
            Wd.disconnect(), window.removeEventListener("resize", Pd), null === (dd = window.visualViewport) || void 0 === dd || dd.removeEventListener("resize", Pd)
          }, Pd(), Nd(), this.render(this.frame)
        }, this.mountWaypointOrigin = dd => {
          var Jd;
          if (null === (Jd = this.stopWaypointOrigin) || void 0 === Jd || Jd.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = dd && !this.pL ? Number(dd.dataset.notificationToken) : null, dd && !this.pL && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const Jd = {
              nameKey: dd.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = Jd;
            const kd = () => {
                const kd = dd.getBoundingClientRect();
                Jd.x = (kd.left + kd.width / 2) / window.innerWidth * 100, Jd.y = (kd.top + kd.height / 2) / window.innerHeight * 100
              },
              pd = new ResizeObserver(kd);
            pd.observe(dd.parentElement), pd.observe(dd), window.addEventListener("resize", kd), this.stopWaypointOrigin = () => {
              pd.disconnect(), window.removeEventListener("resize", kd)
            }, kd()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const dd = this.compass.root,
            Jd = getComputedStyle(dd),
            kd = getComputedStyle(document.documentElement),
            pd = parseFloat(kd.fontSize),
            Nd = parseFloat(Jd.getPropertyValue("--compass-icon-size")) * pd,
            Wd = "1" === Jd.getPropertyValue("--compass-fit-top").trim(),
            Pd = Wd ? 1 : 8,
            Zd = Array.from(document.querySelectorAll(AJ), (dd => {
              var Jd;
              return (null !== (Jd = dd.querySelector(".MiddleTextTop")) && void 0 !== Jd ? Jd : dd).getBoundingClientRect()
            })).filter((dd => dd.width > 0 && dd.height > 0));
          let gd = (parseFloat(kd.getPropertyValue("--notchTop")) || 0) + Pd,
            Cd = "";
          if (Wd) {
            const Jd = window.innerWidth / 2,
              kd = dd.getBoundingClientRect().height,
              Wd = [gd, ...Zd.map((dd => Math.max(gd, dd.bottom + Pd)))].sort(((dd, Jd) => dd - Jd));
            for (const dd of Wd) {
              let Wd = Jd - 8;
              for (const pd of Zd) pd.bottom + Pd <= dd || pd.top >= dd + kd + Pd || (Wd = Math.min(Wd, pd.right <= Jd ? Jd - pd.right - 8 : pd.left - Jd - 8));
              const Kd = 2 * Wd - Nd;
              if (Kd >= 16 * pd) {
                Cd = `${Kd}px`, gd = dd;
                break
              }
            }
          }
          dd.style.maxWidth !== Cd && (dd.style.maxWidth = Cd);
          const Kd = dd.getBoundingClientRect(),
            od = this.compassSize.trackHalfWidth;
          if (Kd.width > 0) {
            const dd = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: dd.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * Nd / dd.width
          }
          if (!Cd)
            for (const ld of Zd) ld.right > Kd.left - 8 && ld.left < Kd.right + 8 && (gd = Math.max(gd, ld.bottom + Pd));
          dd.style.top = `${gd}px`, this.compassSize.trackHalfWidth !== od && this.render(this.frame)
        }
      }
      mountSearchArea(dd, Jd) {
        this.searchAreas[dd] = this.pL ? null : Jd, this.render(this.frame)
      }
      render(dd) {
        if (this.pL) return;
        if (this.frame = dd, this.compass && (Jk(this.compass.root, !dd), dd)) {
          const Jd = this.compassSize.trackHalfWidth / 50;
          dd.compass.cardinals.forEach(((dd, kd) => {
            const pd = this.cardinals[kd];
            pd.textContent !== dd.name && (pd.textContent = dd.name), Jk(pd, dd.hidden), pd.style.translate = dd.left * Jd + "px"
          }));
          const kd = new Set;
          dd.compass.markers.forEach(((pd, Nd) => {
            var Wd;
            kd.add(pd.id);
            let Pd = this.markers.get(pd.id);
            Pd || (Pd = document.createElement("span"), Pd.className = "SkyblockCompassMarker", this.markers.set(pd.id, Pd), this.compass.track.appendChild(Pd)), Pd.dataset.icon !== pd.icon && (Pd.dataset.icon = pd.icon, Pd.replaceChildren(uJ(pd.icon))), Pd.style.color = null !== (Wd = pd.colour) && void 0 !== Wd ? Wd : "", Pd.style.translate = pd.left * Jd + "px", Pd.style.zIndex = String(dd.compass.markers.length - Nd), Pd.title !== pd.name && (Pd.title = pd.name)
          }));
          for (const [dd, pd] of this.markers) kd.has(dd) || (pd.remove(), this.markers.delete(dd));
          this.compass.label.textContent !== dd.compass.label && (this.compass.label.textContent = dd.compass.label)
        }
        this.terrain && (Jk(this.terrain, !(null !== dd && void 0 !== dd && dd.minimap)), null !== dd && void 0 !== dd && dd.minimap && (this.terrain.style.transform = dd.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", dd.minimap.iconRotation)));
        const Jd = null === dd || void 0 === dd ? void 0 : dd.searchArea;
        for (const kd of [this.searchAreas.minimap, this.searchAreas.map])
          if (kd && (Jk(kd, !Jd), Jd)) {
            if (this.searchAreaPath.seed !== Jd.shapeSeed && (this.searchAreaPath = {
                seed: Jd.shapeSeed,
                d: wJ(HJ(Jd.shapeSeed))
              }), kd.dataset.shapeSeed !== Jd.shapeSeed) {
              kd.dataset.shapeSeed = Jd.shapeSeed;
              for (const dd of kd.querySelectorAll("path")) dd.setAttribute("d", this.searchAreaPath.d)
            }
            kd.style.left = `${Jd.left}%`, kd.style.top = `${Jd.top}%`, kd.style.width = `${Jd.width}%`, kd.style.height = `${Jd.height}%`
          } if (this.player && (Jk(this.player, !(null !== dd && void 0 !== dd && dd.player) || dd.player.hidden), null !== dd && void 0 !== dd && dd.player && (this.player.style.left = `${dd.player.left}%`, this.player.style.top = `${dd.player.top}%`, this.player.style.setProperty("--map-player-rotation", dd.player.rotation))), this.waypoint) {
          const {
            root: Jd,
            marker: kd,
            clip: pd,
            text: Nd,
            label: Wd,
            distance: Pd,
            hint: Zd
          } = this.waypoint, gd = !(null !== dd && void 0 !== dd && dd.waypoint) || null !== dd.waypoint.popupToken && dd.waypoint.popupToken !== this.waypointOriginToken;
          Jk(Jd, gd);
          let Cd = 1;
          const Kd = this.waypointLaunch;
          if (!gd && Kd && dd.waypoint.nameKey === Kd.nameKey) {
            const dd = performance.now();
            Kd.startedAt ??= dd, Cd = Math.min(1, Math.max(0, (dd - Kd.startedAt - 450) / 1e3)), kd.style.opacity = String(Math.min(1, (dd - Kd.startedAt) / 150)), 1 === Cd && (this.waypointLaunch = null)
          } else kd.style.opacity = "", Kd && null !== Kd.startedAt && (this.waypointLaunch = null);
          if (Jd.classList.toggle("Launching", Cd < 1), null !== dd && void 0 !== dd && dd.waypoint) {
            const Jd = this.waypointInset,
              gd = "quest_talk" === dd.waypoint.markerIcon ? function(dd, Jd, kd) {
                if (!dd.text || null === dd.blockHeight || 0 === dd.nearness) return dd;
                const pd = dd.blockHeight / 100 * kd.height,
                  Nd = -dd.nearness * (kk * pd + Jd.width / 2),
                  Wd = dd.nearness * (pk * pd + Jd.height / 2);
                return {
                  ...dd,
                  text: {
                    x: dd.text.x + Nd / kd.width * 100,
                    y: dd.text.y + Wd / kd.height * 100
                  }
                }
              }(dd.waypoint, this.waypointMarkerSize, this.viewport) : dd.waypoint,
              od = (0, aJ.e)(gd, Jd, this.viewport),
              ld = Cd * Cd * (3 - 2 * Cd),
              Qd = Cd < 1 ? Kd.x + (od.x - Kd.x) * ld : od.x,
              Ld = Cd < 1 ? Kd.y + (od.y - Kd.y) * ld : od.y;
            kd.style.translate = `${Qd}vw ${Ld}vh`, pd.style.clipPath = `inset(${Jd.top}px ${Jd.x}px ${Jd.bottom}px)`, Jk(Nd, Cd < 1 || !dd.waypoint.text), Nd.style.opacity = String(1 - dd.waypoint.nearness), dd.waypoint.text && (Nd.style.translate = `${dd.waypoint.text.x}vw ${dd.waypoint.text.y}vh`), Wd.textContent !== dd.waypoint.name && (Wd.textContent = dd.waypoint.name), this.markerIcon !== dd.waypoint.markerIcon && (this.markerIcon = dd.waypoint.markerIcon, kd.replaceChildren(uJ(this.markerIcon))), Pd.textContent !== dd.waypoint.distance && (Pd.textContent = dd.waypoint.distance), Jk(Zd, null === dd.waypoint.hint), null !== dd.waypoint.hint && Zd.textContent !== dd.waypoint.hint && (Zd.textContent = dd.waypoint.hint)
          }
        }
      }
      dispose() {
        var dd, Jd;
        this.mountWaypointOrigin(null), this.render(null), null === (dd = this.stopLayout) || void 0 === dd || dd.call(this), this.stopLayout = null, null === (Jd = this.stopWaypoint) || void 0 === Jd || Jd.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.pL = !0
      }
    }

    function Jk(dd, Jd) {
      dd.hidden !== Jd && (dd.hidden = Jd)
    }
    const kk = .55,
      pk = .6;
    const Nk = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class Wk {
      constructor(dd, Jd, kd, pd) {
        this.map = dd, this.quests = Jd, this.compass = kd, this.display = new dk, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.pL = !1, this.snapshot = null, this.texts = new Map, this.translate = pd
      }
      setTranslator(dd, Jd) {
        this.translate = dd, this.locale = Jd, this.metresFormat = new Intl.NumberFormat(Jd), this.texts.clear()
      }
      translateCached(dd, Jd) {
        const kd = void 0 === Jd ? dd : `${dd} ${Jd}`;
        let pd = this.texts.get(kd);
        return void 0 === pd && (this.texts.size >= 500 && this.texts.clear(), pd = this.translate(dd, void 0 === Jd ? void 0 : {
          distance: Jd
        }), this.texts.set(kd, pd)), pd
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(dd, Jd, kd) {
        if (this.pL) return;
        if (!dd) return this.snapshot = null, void this.display.render(null);
        const pd = this.map.getSnapshot().map,
          gd = kd.cameraHeading,
          Cd = {
            ...this.display.compassSize,
            tanHalfFovX: kd.tanHalfFovX,
            pitch: kd.cameraPitch
          },
          Kd = [];
        if (pd)
          for (const Nd of this.compass.frame(dd, gd, Jd)) {
            const dd = Od(Nd.offset, Cd);
            null !== dd && Kd.push({
              ...Nd,
              left: dd
            })
          }
        const od = function(dd, Jd) {
            const kd = [],
              pd = dd => "quest" === dd.kind ? dd.distance - 1 : dd.distance,
              Nd = [...dd].sort(((dd, Jd) => pd(dd) - pd(Jd) || dd.id.localeCompare(Jd.id)));
            for (const Wd of Nd) {
              let dd = !1;
              if ("quest" !== Wd.kind)
                for (const pd of kd)
                  if (Math.abs(pd.left - Wd.left) < Jd) {
                    dd = !0;
                    break
                  } dd || kd.push(Wd)
            }
            return kd
          }(Kd, this.display.compassSpacing),
          ld = function(dd) {
            let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              kd = null;
            for (const pd of dd) Math.abs(pd.offset) <= Jd && (!kd || pd.distance < kd.distance || pd.distance === kd.distance && Math.abs(pd.offset) < Math.abs(kd.offset)) && (kd = pd);
            return kd
          }(od),
          Qd = dd => {
            var Jd;
            return null !== (Jd = dd.displayName) && void 0 !== Jd ? Jd : this.translateCached(dd.nameKey)
          },
          Ld = {
            compass: {
              markers: od.map((dd => ({
                id: dd.id,
                icon: dd.icon,
                colour: dd.colour,
                name: Qd(dd),
                left: dd.left
              }))),
              cardinals: Pd.map((dd => {
                let {
                  name: Jd,
                  bearing: kd
                } = dd;
                const pd = Od(Nd.b.computeShortestRotation(gd, kd), Cd);
                return {
                  name: Jd,
                  left: null !== pd && void 0 !== pd ? pd : 0,
                  hidden: null === pd
                }
              })),
              label: ld ? `${Qd(ld)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",qd(ld.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== pd && void 0 !== pd && pd.background) {
          const Jd = dd[0] - pd.mapOrigin[0],
            kd = dd[2] - pd.mapOrigin[2],
            {
              rotation: Nd,
              transform: Pd
            } = function(dd, Jd, kd, pd) {
              const [Nd, Pd] = Zd(dd, Jd, pd), gd = Wd - kd;
              return {
                rotation: gd,
                transform: `rotate(${gd}rad) translate(-${Nd}%, -${Pd}%)`
              }
            }(Jd, kd, gd, pd.background.bounds);
          Ld.minimap = {
            transform: Pd,
            iconRotation: -Nd + "rad"
          };
          const [Cd, Kd] = Zd(Jd, kd, pd.background.bounds);
          Ld.player = {
            left: Cd,
            top: Kd,
            hidden: Cd < 0 || Kd < 0 || Cd > 100 || Kd > 100,
            rotation: -Nd + "rad"
          }
        }
        const {
          waypoint: ed
        } = this.quests.getSnapshot();
        if ("search" === (null === ed || void 0 === ed ? void 0 : ed.questMarkerIcon) && null !== pd && void 0 !== pd && pd.background) {
          const {
            bounds: dd
          } = pd.background, [Jd, kd] = Zd(ed.position[0] - pd.mapOrigin[0], ed.position[2] - pd.mapOrigin[2], dd);
          Ld.searchArea = {
            left: Jd,
            top: kd,
            width: 6400 / (dd.mapMaxX - dd.mapMinX),
            height: 6400 / (dd.mapMaxZ - dd.mapMinZ),
            shapeSeed: ed.nameKey
          }
        }
        const Rd = this.quests.getNotificationSnapshot(),
          Id = "completion" === (null === Rd || void 0 === Rd ? void 0 : Rd.phase) && !iJ(Rd.kind);
        if (ed && !Id) {
          const Jd = Math.hypot(...ed.position.map(((Jd, kd) => Jd - dd[kd]))),
            pd = Math.round(Jd),
            Nd = "talk" === ed.questMarkerIcon ? Math.min(1, Math.max(0, (10 - Jd) / 5)) : 0,
            Wd = kd.projectWorldPosToViewport(ed.position),
            Pd = Wd && kd.projectWorldPosToViewport([ed.position[0], ed.position[1] - 1, ed.position[2]]);
          Ld.waypoint = {
            ...kd.projectWorldPosToScreenPos(ed.position),
            text: Wd,
            nearness: Nd * Nd * (3 - 2 * Nd),
            blockHeight: Wd && Pd ? Pd.y - Wd.y : null,
            name: this.translateCached(ed.nameKey),
            nameKey: ed.nameKey,
            markerIcon: ed.questMarkerIcon ? Nk[ed.questMarkerIcon] : "quest",
            popupToken: (null === Rd || void 0 === Rd ? void 0 : Rd.waypointNameKey) === ed.nameKey ? Rd.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(pd)),
            hint: "search" === ed.questMarkerIcon && Math.hypot(ed.position[0] - dd[0], ed.position[2] - dd[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = Ld, this.display.render(Ld)
      }
      dispose() {
        this.pL = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const Pk = "skyblockSkillsView";
    class Zk extends od {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          kd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dd => dd,
          pd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          Nd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : dd => dd;
        super(dd, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = Jd, this.translate = kd, this.locale = pd, this.itemName = Nd, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
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
      setTranslator(dd, Jd, kd) {
        this.translate = dd, this.locale = Jd, this.itemName = kd, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(dd) {
        let Jd = this.skillText.get(dd);
        return Jd || (Jd = {
          label: this.translate(`skyblockGame:${dd}`),
          description: this.translate(`skyblockGame:${dd}Description`)
        }, this.skillText.set(dd, Jd)), Jd
      }
      sources(dd) {
        if ("mining" === dd || "fishing" === dd) return this.buildSources(dd);
        let Jd = this.sourceText.get(dd);
        return Jd || (Jd = this.buildSources(dd), this.sourceText.set(dd, Jd)), Jd
      }
      buildSources(dd) {
        const Jd = this.translate;
        return "exploration" === dd ? [Jd("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), Jd("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === dd ? [Jd("skyblockGame:logSource", {
          xp: this.number(LJ["Maple Log"])
        })] : "combat" === dd ? [Jd("skyblockGame:creatureKillSource"), Jd("skyblockGame:noEnvironmentalXp")] : "farming" === dd ? [Jd("skyblockGame:cropSource", {
          xp: this.number(RJ["Wheat|FreshlyGrown"])
        }), Jd("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), Jd("skyblockGame:noYoungCropXp")] : Object.entries("mining" === dd ? eJ : IJ).map((dd => {
          let [kd, pd] = dd;
          return Jd("skyblockGame:itemXpSource", {
            item: this.itemName(kd),
            xp: this.number(pd)
          })
        }))
      }
      number(dd) {
        return dd.toLocaleString(this.locale)
      }
      benefit(dd, Jd) {
        const kd = ZJ(dd, Jd);
        return this.translate(kd.translationKey, {
          bonus: this.number(kd.percent)
        })
      }
      ZL(dd) {
        if (!this.pL) {
          if ("snapshot" === dd.kind) this.progress = dd.progress, this.pending.clear(), this.recent = null;
          else if ("award" === dd.kind && this.progress) {
            const {
              award: Jd
            } = dd;
            this.progress = {
              ...this.progress,
              [Jd.skill]: Jd.after
            };
            for (const [dd, pd] of this.pending) pd.skill === Jd.skill && this.pending.delete(dd);
            const kd = Jd.after.level > Jd.before.level;
            this.recordGain(Jd.skill, Jd.amount, kd ? ++this.nextLevelUpToken : null), kd && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: Jd.skill,
              beforeLevel: Jd.before.level,
              level: Jd.after.level
            })
          } else {
            if ("rejectBlock" === dd.kind) return void this.rejectBlock(dd.position);
            if ("open" === dd.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(dd, Jd, kd) {
        if (!this.progress || this.pL || kd) return;
        const pd = function(dd, Jd) {
          const kd = dd.split("|")[0];
          return "Air" === Jd || Jd === `Barkless ${dd}` ? Object.hasOwn(LJ, kd) ? {
            skill: "foraging",
            amount: LJ[kd]
          } : "Air" !== Jd ? null : Object.hasOwn(eJ, dd) ? {
            skill: "mining",
            amount: eJ[dd]
          } : oJ(dd) ? {
            skill: "farming",
            amount: 10
          } : QJ(dd) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(RJ, dd) ? {
            skill: "farming",
            amount: RJ[dd]
          } : Object.hasOwn(yd, dd) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(Jd, "Air");
        if (!pd) return;
        const Nd = dd.join(",");
        if (this.pending.has(Nd)) return;
        const Wd = this.predictedProgress(pd.skill).totalXp + pd.amount;
        Number.isSafeInteger(Wd) && (this.pending.set(Nd, {
          ...pd,
          expires: this.now() + 2e3
        }), this.recordGain(pd.skill, 0), this.emit())
      }
      rejectBlock(dd) {
        this.pending.delete(dd.join(",")) && this.emit()
      }
      Do() {
        if (this.pL) return;
        let dd = !1;
        for (const [Jd, kd] of this.pending) kd.expires <= this.now() && (this.pending.delete(Jd), dd = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, dd = !0), dd && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(dd, Jd) {
        var kd, pd;
        let Nd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Wd = (null === (kd = this.recent) || void 0 === kd ? void 0 : kd.skill) === dd && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          Pd = (null === (pd = this.recent) || void 0 === pd ? void 0 : pd.skill) === dd && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: dd,
          confirmed: Wd + Jd,
          expires: this.now() + 3e3,
          levelUpToken: null !== Nd && void 0 !== Nd ? Nd : Pd
        }
      }
      pendingXp(dd) {
        let Jd = 0;
        for (const kd of this.pending.values()) kd.skill === dd && (Jd += kd.amount);
        return Jd
      }
      predictedProgress(dd) {
        const Jd = this.progress[dd],
          kd = this.pendingXp(dd);
        return kd ? CJ(Jd.totalXp + kd, dd) : Jd
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var dd, Jd, kd;
        const pd = this.progress ? Hd.map((dd => {
            const Jd = this.predictedProgress(dd);
            return {
              ...this.text(dd),
              icon: GJ[dd],
              benefit: this.benefit(dd, Jd.level),
              sources: this.sources(dd),
              id: dd,
              selected: dd === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(Jd.level)
              }),
              xp: null === Jd.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(Jd.xpIntoLevel),
                target: this.number(Jd.xpForNextLevel)
              }),
              percent: null === Jd.xpForNextLevel ? 100 : Math.min(100, Jd.xpIntoLevel / Jd.xpForNextLevel * 100)
            }
          })) : [],
          Nd = pd.find((dd => {
            var Jd;
            return dd.id === (null === (Jd = this.recent) || void 0 === Jd ? void 0 : Jd.skill)
          })),
          Wd = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: pd,
          detail: null !== (dd = pd.find((dd => dd.selected))) && void 0 !== dd ? dd : null,
          overallLevel: this.progress ? Hd.reduce(((dd, Jd) => dd + this.predictedProgress(Jd).level), 0) : null,
          hud: Nd && Wd > 0 ? {
            skill: Nd,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(Wd)
            }),
            levelUpToken: null !== (Jd = null === (kd = this.recent) || void 0 === kd ? void 0 : kd.levelUpToken) && void 0 !== Jd ? Jd : null,
            colour: xJ(Nd.id)
          } : null
        }
      }
    }
    const gk = Math.max(1600, 600, 950) + 400,
      Ck = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      Kk = "skyblockQuestsView",
      lk = "skyblockQuestNotificationView";
    class Qk extends od {
      constructor(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          Pd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(dd, pd, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = Jd, this.translate = kd, this.now = Nd, this.locale = Wd, this.publishNotification = Pd, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var dd, Jd;
          this.selected = null !== (dd = null === (Jd = this.authoritative) || void 0 === Jd ? void 0 : Jd.trackedQuestId) && void 0 !== dd ? dd : null, this.show()
        }, this.select = dd => {
          this.selected = dd, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const dd = this.snapshot.detail;
          !this.pL && null !== dd && void 0 !== dd && dd.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(dd.id), this.emit())
        }, this.viewDialogue = () => {
          const dd = this.snapshot.detail;
          var Jd;
          dd && (null === (Jd = this.onViewDialogue) || void 0 === Jd || Jd.call(this, dd.id))
        }, this.notifications = new BJ(Nd, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var dd, Jd;
        return null !== (dd = null === (Jd = this.authoritative) || void 0 === Jd ? void 0 : Jd.trackedQuestId) && void 0 !== dd ? dd : null
      }
      notify(dd) {
        !this.pL && this.notifications.enqueue(dd) && this.emitNotification()
      }
      setNotificationsHeld(dd) {
        (this.notifications.setHeld(dd) || dd) && this.emitNotification()
      }
      Do() {
        var dd, Jd;
        if (this.pL) return;
        this.notifications.Do() && this.emitNotification();
        let kd = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, kd = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, kd = !0);
        const pd = Lk(this.authoritative);
        null !== pd && void 0 !== pd && null !== (dd = pd.questClock) && void 0 !== dd && dd.running && this.clockText(pd) !== (null === (Jd = this.snapshot.tracked) || void 0 === Jd ? void 0 : Jd.clock) && (kd = !0), kd && this.emit()
      }
      setTranslator(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = dd, this.locale = Jd, this.emitNotification(), this.emit()
      }
      ZL(dd) {
        if (!this.pL)
          if ("completion" === dd.kind) this.notify(dd.questCompletion);
          else if ("landmark" === dd.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: dd.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === dd.kind) {
          var Jd, kd, pd;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: dd.npcNoteTitleKey,
            textKey: dd.npcNoteTextKey,
            params: null !== (Jd = dd.npcNoteParams) && void 0 !== Jd ? Jd : {},
            nameKeys: null !== (kd = dd.npcNoteNameKeys) && void 0 !== kd ? kd : {},
            iconItem: null !== (pd = dd.npcNoteIconItem) && void 0 !== pd ? pd : null
          })
        } else if ("open" === dd.kind) this.show();
        else if ("guidance" === dd.kind) this.waypoint = dd.waypoint, this.compassTarget = dd.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === dd.kind) {
          this.authoritative = dd.snapshot, this.notifications.Do() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const Jd = this.trackedStepPulse;
          this.updateTrackedStepPulse(dd.snapshot), this.emit(), this.trackedStepPulse > Jd && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.pL || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var dd;
        return null !== (dd = this.translateWithIcons) && void 0 !== dd ? dd : this.translate
      }
      clockText(dd) {
        const Jd = dd.questClock;
        if (!Jd) return null;
        const kd = Jd.elapsedMs + (Jd.running ? this.now() - this.receivedAt : 0);
        return void 0 === Jd.countdownFromMs ? jd(kd, !1) : jd(1e3 * Math.ceil(Math.max(0, Jd.countdownFromMs - kd) / 1e3), !1)
      }
      updateTrackedStepPulse(dd) {
        var Jd, kd, pd;
        const Nd = Lk(dd);
        if (!Nd) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const Wd = dd => Nd.subquests.filter((Jd => dd(Jd.status))).map((dd => dd.id)),
          Pd = Wd((dd => "completed" === dd || "skipped" === dd)),
          Zd = Wd((dd => "locked" !== dd)),
          gd = (null === (Jd = this.trackedSteps) || void 0 === Jd ? void 0 : Jd.questId) === Nd.id && Nd.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (gd) {
          const dd = Pd.filter((dd => !gd.finished.has(dd))),
            Jd = Wd((dd => "active" === dd || "ready" === dd)).filter((dd => !gd.unlocked.has(dd)));
          dd.length > 0 && this.trackedStepPulse++, (dd.length > 0 || Jd.length > 0) && (this.trackedChange = {
            finished: new Set(dd),
            unlocked: new Set(Jd),
            expiresAt: this.now() + gk
          })
        } else {
          var Cd;
          this.trackedStepPulse = (null === (Cd = this.trackedSteps) || void 0 === Cd ? void 0 : Cd.questId) === Nd.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: Nd.id,
          progress: Nd.progress,
          finished: new Set([...null !== (kd = null === gd || void 0 === gd ? void 0 : gd.finished) && void 0 !== kd ? kd : [], ...Pd]),
          unlocked: new Set([...null !== (pd = null === gd || void 0 === gd ? void 0 : gd.unlocked) && void 0 !== pd ? pd : [], ...Zd])
        }
      }
      entry(dd, Jd) {
        var kd, pd;
        const Nd = dd.id === (null === (kd = this.authoritative) || void 0 === kd ? void 0 : kd.trackedQuestId),
          Wd = this.now() < this.trackAvailableAt,
          Pd = this.questTextTranslator(),
          Zd = dd.subquests.map((Jd => {
            var kd, pd, Wd, Zd, gd, Cd;
            const Kd = null !== (kd = Jd.handInNpcName) && void 0 !== kd ? kd : dd.giverName,
              od = this.translate("skyblockGame:progress", {
                current: Jd.progress.toLocaleString(this.locale),
                target: Jd.target.toLocaleString(this.locale)
              }),
              ld = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: Kd ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [Jd.status],
              Qd = "active" === Jd.status || "ready" === Jd.status;
            return {
              id: Jd.id,
              name: qJ(Pd, Jd.nameKey, Jd.nameParams),
              description: qJ(Pd, Jd.descriptionKey, Jd.descriptionParams),
              progress: od,
              status: Jd.status,
              statusLabel: ld ? this.translate(ld, {
                npc: Kd
              }) : od,
              iconItem: Qd && null !== (pd = Jd.questIconItem) && void 0 !== pd ? pd : null,
              barPercent: "active" === Jd.status && Jd.showsProgressBar ? Math.min(100, 100 * Jd.progress / Jd.target) : null,
              justFinished: Nd && null !== (Wd = null === (Zd = this.trackedChange) || void 0 === Zd ? void 0 : Zd.finished.has(Jd.id)) && void 0 !== Wd && Wd,
              justUnlocked: Nd && null !== (gd = null === (Cd = this.trackedChange) || void 0 === Cd ? void 0 : Cd.unlocked.has(Jd.id)) && void 0 !== gd && gd
            }
          }));
        return {
          id: dd.id,
          name: qJ(Pd, dd.nameKey, dd.nameParams),
          description: qJ(Pd, dd.descriptionKey, dd.descriptionParams),
          progress: Jd ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: dd.progress.toLocaleString(this.locale),
            target: dd.target.toLocaleString(this.locale)
          }),
          completed: Jd,
          tracked: Nd,
          selected: dd.id === this.selected,
          canTrack: !Jd && !Nd && !Wd,
          trackLabel: this.translate(Nd ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : Wd ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== dd.id,
          subquests: Zd,
          focusStep: null !== (pd = Zd.find((dd => null !== dd.barPercent))) && void 0 !== pd ? pd : null,
          clock: this.clockText(dd)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd;
        const Kd = [...null !== (dd = null === (Jd = this.authoritative) || void 0 === Jd ? void 0 : Jd.active) && void 0 !== dd ? dd : [], ...null !== (kd = null === (pd = this.authoritative) || void 0 === pd ? void 0 : pd.completed) && void 0 !== kd ? kd : []];
        var od, ld, Qd, Ld;
        Kd.some((dd => dd.id === this.selected)) || (this.selected = null !== (od = null !== (ld = null === (Qd = this.authoritative) || void 0 === Qd ? void 0 : Qd.trackedQuestId) && void 0 !== ld ? ld : null === (Ld = Kd[0]) || void 0 === Ld ? void 0 : Ld.id) && void 0 !== od ? od : null);
        const Od = null !== (Nd = null === (Wd = this.authoritative) || void 0 === Wd ? void 0 : Wd.active.map((dd => this.entry(dd, !1)))) && void 0 !== Nd ? Nd : [];
        Od.sort(((dd, Jd) => Number(Jd.tracked) - Number(dd.tracked)));
        const ed = null !== (Pd = null === (Zd = this.authoritative) || void 0 === Zd ? void 0 : Zd.completed.map((dd => this.entry(dd, !0)))) && void 0 !== Pd ? Pd : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: Od,
          completed: ed,
          completedExpanded: this.completedExpanded,
          detail: null !== (gd = [...Od, ...ed].find((dd => dd.selected))) && void 0 !== gd ? gd : null,
          tracked: null !== (Cd = Od.find((dd => dd.tracked))) && void 0 !== Cd ? Cd : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function Lk(dd) {
      var Jd;
      return null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.active.find((Jd => Jd.id === dd.trackedQuestId))) && void 0 !== Jd ? Jd : null
    }
    const Ok = "skyblockDungeonsView";
    class ek extends od {
      constructor(dd, Jd) {
        let kd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          pd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(dd, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = Jd, this.locale = kd, this.requestEnter = pd, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
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
            Jd = null === dd || void 0 === dd ? void 0 : dd.difficulties[this.pageIndex];
          void 0 !== Jd && null !== Jd.unlockedBoss && (this.close(), this.requestEnter(dd.id, Jd.difficulty))
        }
      }
      setTranslator(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = dd, this.locale = Jd, this.emit()
      }
      ZL(dd) {
        var Jd, kd;
        if (!this.pL) return "open" === dd.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== dd.kind ? "snapshot" === dd.kind && (this.authoritative = dd.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (Jd = null === (kd = this.pickerEntry()) || void 0 === kd ? void 0 : kd.difficulties.length) && void 0 !== Jd ? Jd : 1) - 1)), null === dd.snapshot && this.open ? this.close() : this.emit()) : this.choose(dd.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(dd) {
        var Jd;
        const kd = null === (Jd = this.authoritative) || void 0 === Jd ? void 0 : Jd.dungeons.find((Jd => Jd.id === dd));
        void 0 !== kd ? this.open && this.pickerDungeonId === dd || (this.pickerDungeonId = dd, this.pageIndex = Math.max(0, kd.difficulties.findLastIndex((dd => null !== dd.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${dd}`)
      }
      turnTo(dd) {
        var Jd, kd;
        const pd = null !== (Jd = null === (kd = this.pickerEntry()) || void 0 === kd ? void 0 : kd.difficulties.length) && void 0 !== Jd ? Jd : 0;
        dd < 0 || dd >= pd || dd === this.pageIndex || (this.pageIndex = dd, this.emit())
      }
      pickerEntry() {
        var dd, Jd;
        return null !== (dd = null === (Jd = this.authoritative) || void 0 === Jd ? void 0 : Jd.dungeons.find((dd => dd.id === this.pickerDungeonId))) && void 0 !== dd ? dd : null
      }
      difficulty(dd) {
        const Jd = dd.completions > 0,
          kd = null === dd.bestMs ? null : jd(dd.bestMs);
        return {
          difficulty: dd.difficulty,
          label: this.translate(bd[dd.difficulty]),
          colour: Sd[dd.difficulty],
          beaten: Jd,
          bestTime: kd,
          completions: dd.completions,
          summary: Jd ? [null === kd ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: kd
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: dd.completions.toLocaleString(this.locale)
          })].filter((dd => null !== dd)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(dd) {
        const Jd = dd.difficulties.map((dd => this.difficulty(dd))),
          kd = Jd.filter((dd => dd.beaten)).length;
        return {
          id: dd.id,
          name: this.translate(dd.nameKey),
          selected: dd.id === this.selected,
          beatenSummary: `${kd} / ${Jd.length}`,
          difficulties: Jd
        }
      }
      picker() {
        const dd = this.pickerEntry();
        if (null === dd || 0 === dd.difficulties.length) return null;
        const Jd = dd.difficulties.map(((Jd, kd) => {
          var pd, Nd, Wd, Pd;
          const Zd = Jd.unlockedBoss,
            gd = null === Zd ? this.lockedHint(dd, kd) : null;
          return {
            ...this.difficulty(Jd),
            unlocked: null !== Zd,
            bossName: null === Zd ? null : this.translate(Zd.bossNameKey),
            bossMobType: null !== (pd = null === Zd || void 0 === Zd ? void 0 : Zd.bossMobType) && void 0 !== pd ? pd : null,
            bossMobVariation: null !== (Nd = null === Zd || void 0 === Zd ? void 0 : Zd.bossMobVariation) && void 0 !== Nd ? Nd : null,
            lockedHint: null !== (Wd = null === gd || void 0 === gd ? void 0 : gd.text) && void 0 !== Wd ? Wd : null,
            lockedHintHighlight: null !== (Pd = null === gd || void 0 === gd ? void 0 : gd.highlight) && void 0 !== Pd ? Pd : null,
            current: kd === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(dd.nameKey),
          pages: Jd,
          page: Jd[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < Jd.length - 1
        }
      }
      lockedHint(dd, Jd) {
        var kd, pd, Nd;
        if (0 === Jd && "number" === typeof dd.combatLevelLock) {
          const Jd = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: dd.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: Jd,
            colour: xJ("combat"),
            icon: GJ.combat
          })
        }
        const Wd = null !== (kd = null === (pd = this.authoritative) || void 0 === pd ? void 0 : pd.dungeons) && void 0 !== kd ? kd : [],
          Pd = Jd > 0 ? dd : null !== (Nd = Wd[Wd.indexOf(dd) - 1]) && void 0 !== Nd ? Nd : null,
          Zd = Jd > 0 ? dd.difficulties[Jd - 1] : null === Pd || void 0 === Pd ? void 0 : Pd.difficulties[0];
        if (null === Pd || void 0 === Zd) return null;
        const gd = this.translate(Pd.nameKey);
        if (null === Zd.unlockedBoss) return Pd === dd ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, Zd.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: gd
        }, Zd.difficulty);
        const Cd = this.translate(Zd.unlockedBoss.bossNameKey);
        return Pd === dd ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: Cd
        }, Zd.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: Cd,
            dungeon: gd
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(dd, Jd, kd) {
        return this.hintHighlighting(dd, Jd, "difficulty", {
          name: this.translate(bd[kd]),
          colour: Sd[kd],
          icon: null
        })
      }
      hintHighlighting(dd, Jd, kd, pd) {
        let {
          name: Nd,
          colour: Wd,
          icon: Pd
        } = pd;
        const Zd = this.translate(dd, {
          ...Jd,
          [kd]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(dd, {
            ...Jd,
            [kd]: Nd
          }),
          highlight: 2 === Zd.length ? {
            before: Zd[0],
            name: Nd,
            after: Zd[1],
            colour: Wd,
            icon: Pd
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var dd, Jd, kd;
        const pd = null !== (dd = null === (Jd = this.authoritative) || void 0 === Jd ? void 0 : Jd.dungeons) && void 0 !== dd ? dd : [];
        var Nd, Wd;
        pd.some((dd => dd.id === this.selected)) || (this.selected = null !== (Nd = null === (Wd = pd[0]) || void 0 === Wd ? void 0 : Wd.id) && void 0 !== Nd ? Nd : null);
        const Pd = pd.map((dd => this.entry(dd)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: Pd,
          detail: null !== (kd = Pd.find((dd => dd.selected))) && void 0 !== kd ? kd : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const Rk = ["mining", "farming", "foraging", "fishing", "combat"],
      Ik = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      Gk = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function vk() {
      for (var dd = arguments.length, Jd = new Array(dd), kd = 0; kd < dd; kd++) Jd[kd] = arguments[kd];
      return Jd.map(((dd, Jd) => ({
        amount: dd,
        coins: Ik[Jd],
        xp: Gk[Jd]
      })))
    }
    const xk = vk(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      qk = vk(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      Bk = vk(50, 100, 250, 500, 1e3, 2500, 5e3),
      sk = vk(25, 50, 100, 250, 500, 1e3),
      ik = vk(10, 25, 50, 100, 250, 500, 1e3),
      ak = vk(1, 5, 10, 25, 50);

    function Mk(dd, Jd) {
      return {
        id: dd,
        category: "fishing",
        item: Jd,
        drops: [Jd],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ik
      }
    }
    const Fk = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: qk
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: Bk
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: Bk
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: sk
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: sk
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: qk
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: xk
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: xk
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: xk
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: Bk
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: qk
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: qk
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: qk
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: Bk
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: Bk
      }, Mk("wheatfish", "Wheatfish"), Mk("darter", "Darter"), Mk("sunset_minnow", "Sunset Minnow"), Mk("root_flounder", "Root Flounder"), Mk("greenfin_loach", "Greenfin Loach"), Mk("red_strongfish", "Red Strongfish"), Mk("green_strongfish", "Green Strongfish"), Mk("boomerang_fish", "Boomerang Fish"), Mk("seahorse", "Seahorse"), Mk("spined_stickleback", "Spined Stickleback"), Mk("moon_strongfish", "Moon Strongfish"), Mk("boulder_bass", "Boulder Bass"), Mk("grass_snapper", "Grass Snapper"), Mk("crystal_wheatfish", "Crystalized Wheatfish", ak), Mk("moonstone_pupfish", "Moonstone Pupfish", ak), Mk("reedglass_minnow", "Reedglass Minnow"), Mk("mangrove_herring", "Mangrove Herring"), Mk("mudline_perch", "Mudline Perch"), Mk("coastal_mullet", "Coastal Mullet"), Mk("reef_sardine", "Reef Sardine"), Mk("root_perch", "Root Perch"), Mk("driftwood_catfish", "Driftwood Catfish"), Mk("aether_minnow", "Aether Minnow"), Mk("needlefish", "Tri-Pointed Needlefish"), Mk("threadfin_bream", "Threadfin Bream"), Mk("mudbelly_tilapia", "Mudbelly Tilapia"), Mk("rotslab_eel", "Rotslab Eel"), Mk("polarflash_electron", "Polarflash Electron"), Mk("mireback_carp", "Mireback Carp"), Mk("blackwater_bream", "Blackwater Bream"), Mk("stone_grouper", "Stone Grouper"), Mk("shadeback_ray", "Shadeback Ray"), Mk("glacial_silverfish", "Glacial Silverfish"), Mk("hatchetfish", "Hatchetfish"), Mk("moonlit_boomerang", "Moonlit Boomerang Fish"), Mk("murkborne_ray", "Murkborne Ray"), Mk("bamboo_catfish", "Bamboo Catfish"), Mk("mossback_arapaima", "Mossback Arapaima"), Mk("murk_stingray", "Murk Stingray"), Mk("channel_sawfish", "Channel Sawfish"), Mk("boned_sturgeon", "Boned Sturgeon"), Mk("oarfish", "Oarfish"), Mk("snakehead", "Snakehead", ak), Mk("eldertide_leviathan", "Eldertide Leviathan", ak), Mk("pithead", "Pithead"), Mk("electric_eel", "Electric Eel"), Mk("shadow_darter", "Shadow Darter"), Mk("abyss_carp", "Abyss Carp"), Mk("nomai_moray", "Nomai Moray"), Mk("silver_dragonfish", "Silver Dragonfish"), Mk("giant_moray", "Giant Moray"), Mk("coelacanth", "Coelacanth", ak), Mk("frost_herring", "Frost Herring"), Mk("permafrost_halibut", "Permafrost Halibut"), Mk("glacial_lanternfish", "Glacial Lanternfish"), Mk("frozen_grenadier", "Frozen Grenadier"), Mk("blackfin_icefish", "Blackfin Icefish"), Mk("moonfish", "Moonfish"), Mk("alpha_strongfish", "Alpha Moon Strongfish"), Mk("deep_lanternfish", "Deepwater Lanternfish", ak), Mk("pearlescent_moonfish", "Pearlescent Moonfish", ak), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: qk
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: sk
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: sk
      }],
      Yk = (new Map(Fk.map((dd => [dd.id, dd]))), new Map),
      mk = new Map;
    for (const Kg of Fk) {
      for (const [dd, Jd] of Object.entries(null !== (bk = Kg.blocks) && void 0 !== bk ? bk : {})) {
        var bk;
        Yk.set(dd, {
          collection: Kg,
          amount: Jd
        })
      }
      for (const dd of null !== (Sk = Kg.drops) && void 0 !== Sk ? Sk : []) {
        var Sk;
        mk.set(dd, Kg)
      }
    }

    function jk(dd, Jd) {
      let kd = 0;
      for (; kd < dd.tiers.length && Jd >= dd.tiers[kd].amount;) kd++;
      return kd
    }
    const Xk = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function fk(dd) {
      return Xk[dd - 1]
    }
    const nk = "skyblockCollectionsView";
    class Uk extends od {
      constructor(dd, Jd) {
        let kd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          pd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : dd => dd;
        super(dd, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = Jd, this.locale = kd, this.itemName = pd, this.counts = null, this.category = "mining", this.selected = Fk[0].id, this.snapshot = {
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
      setTranslator(dd, Jd, kd) {
        this.translate = dd, this.locale = Jd, this.itemName = kd, this.emit()
      }
      ZL(dd) {
        if (!this.pL)
          if ("collOpen" !== dd.kind) {
            (dd.collFull || null === this.counts) && (this.counts = new Map);
            for (const [Jd, kd] of dd.collCounts) this.counts.set(Jd, kd);
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
        const Jd = this.inCategory(this.category).map((dd => this.collectionView(dd))),
          kd = Fk.reduce(((dd, Jd) => dd + this.tierOf(Jd)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: Rk.map((dd => this.categoryView(dd))),
          collections: Jd,
          detail: null !== (dd = Jd.find((dd => dd.selected))) && void 0 !== dd ? dd : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(kd)
          })
        }
      }
      categoryView(dd) {
        const Jd = this.inCategory(dd),
          kd = Jd.reduce(((dd, Jd) => dd + this.tierOf(Jd)), 0),
          pd = Jd.reduce(((dd, Jd) => dd + Jd.tiers.length), 0);
        return {
          id: dd,
          label: this.translate(`skyblockGame:${dd}`),
          icon: GJ[dd],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(kd),
            target: this.number(pd)
          }),
          selected: dd === this.category
        }
      }
      collectionView(dd) {
        var Jd, kd;
        const pd = null !== (Jd = this.counts.get(dd.id)) && void 0 !== Jd ? Jd : 0,
          Nd = jk(dd, pd),
          Wd = null !== (kd = dd.tiers[Nd]) && void 0 !== kd ? kd : null,
          Pd = 0 === Nd ? 0 : dd.tiers[Nd - 1].amount;
        return {
          id: dd.id,
          name: this.itemName(dd.item),
          icon: dd.item,
          selected: dd.id === this.selected,
          locked: 0 === pd,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(pd)
          }),
          tier: 0 === Nd ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(Nd),
          percent: null === Wd ? 100 : Math.min(100, (pd - Pd) / (Wd.amount - Pd) * 100),
          progress: null === Wd ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(pd),
            target: this.number(Wd.amount)
          }),
          nextReward: null === Wd ? null : this.reward(dd, Wd.coins, Wd.xp)
        }
      }
      reward(dd, Jd, kd) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(Jd),
          xp: this.number(kd),
          skill: this.translate(`skyblockGame:${dd.category}`)
        })
      }
      tierLabel(dd) {
        return this.translate("skyblockGame:collectionTier", {
          tier: fk(dd)
        })
      }
      tierOf(dd) {
        var Jd;
        return jk(dd, null !== (Jd = this.counts.get(dd.id)) && void 0 !== Jd ? Jd : 0)
      }
      inCategory(dd) {
        return Fk.filter((Jd => Jd.category === dd))
      }
      number(dd) {
        return dd.toLocaleString(this.locale)
      }
    }
    const yk = "skyblockPortalTransitView",
      Dk = "skyblockPortalArrival";
    class Tk {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.nO = dd, this.storage = Jd, this.now = kd, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      ZL(dd) {
        const Jd = {
          zoneNameKey: dd.transitZoneNameKey,
          variation: dd.transitZoneVariation,
          colour: dd.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(Dk, Jd), this.show("departure", Jd.zoneNameKey, Jd.colour, dd.transitDurationMs, dd.transitDurationMs + 1500, (() => {
          this.storage.removeItem(Dk)
        }))
      }
      resumeArrival(dd) {
        const Jd = this.storage.getItem(Dk);
        this.storage.removeItem(Dk), null === Jd || Jd.variation !== dd || this.now() - Jd.departedAt > 3e4 || this.show("arrival", Jd.zoneNameKey, Jd.colour, 3200, 2e4)
      }
      finishArrival(dd) {
        var Jd;
        "arrival" === (null === (Jd = this.view) || void 0 === Jd ? void 0 : Jd.phase) && this.view.token === dd && (this.clearTimer(), this.view = null, this.nO(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(dd, Jd, kd, pd, Nd, Wd) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: dd,
          zoneNameKey: Jd,
          colour: kd,
          durationMs: pd
        }, this.nO(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.nO(null), null === Wd || void 0 === Wd || Wd()
        }), Nd)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const Ek = "skyblockDailyRewardView",
      ck = "skyblockDailyRewardCoin";
    class hk {
      constructor(dd, Jd, kd, pd) {
        let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          Pd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          Zd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          gd = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.nO = dd, this.isBusy = Jd, this.holdQuestPopups = kd, this.onHeldCoinsChanged = pd, this.onCoinLanded = Nd, this.onStarted = Wd, this.onFinished = Pd, this.onItemLanded = Zd, this.now = gd, this.EC = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var dd, Jd;
        return null !== (dd = null === (Jd = this.playing) || void 0 === Jd ? void 0 : Jd.view) && void 0 !== dd ? dd : null
      }
      getHeldCoins() {
        var dd, Jd;
        let kd = 0;
        for (const pd of this.EC) kd += pd.coins;
        return kd - (null !== (dd = null === (Jd = this.playing) || void 0 === Jd ? void 0 : Jd.released) && void 0 !== dd ? dd : 0)
      }
      ZL(dd) {
        "dailyRewardClaimed" !== dd.kind ? (this.queue.push(dd), this.Do()) : this.EC.push({
          coins: dd.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      Do() {
        const dd = this.now();
        if (null === this.playing) return this.releaseUnshown(dd), void this.startNext(dd);
        const Jd = this.playing,
          kd = dd - Jd.startedAt,
          pd = Jd.view.flyingCoins,
          Nd = function(dd, Jd) {
            let kd = 0;
            for (; kd < Jd && uk(kd, Jd) <= dd;) kd++;
            return kd
          }(kd, pd);
        if (Nd !== Jd.landed) {
          for (let dd = Nd - Jd.landed > 2 ? Nd - 1 : Jd.landed; dd < Nd; dd++) this.onCoinLanded(dd, pd);
          Jd.landed = Nd, Jd.released = Math.round(Jd.view.coins * Nd / pd), this.onHeldCoinsChanged()
        }
        for (; Jd.itemsLanded < Jd.view.items.length && 2e3 + 160 * Jd.itemsLanded + 630 <= kd;) this.onItemLanded(Jd.itemsLanded), Jd.itemsLanded++;
        kd >= Jd.view.durationMs && (this.finish(), this.startNext(dd))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.EC = [], this.nO(null)
      }
      startNext(dd) {
        if (0 === this.queue.length || this.isBusy()) return;
        const Jd = this.queue.shift();
        this.token++;
        const kd = {
          token: this.token,
          day: Jd.dailyRewardDay,
          coins: Jd.dailyRewardCoins,
          items: Jd.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: Jd.dailyRewardDay === Fd ? 24 : 14
        };
        this.playing = {
          view: kd,
          startedAt: dd,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.nO(kd), this.onStarted(kd)
      }
      finish() {
        this.EC.shift(), this.playing = null, this.holdQuestPopups(!1), this.nO(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(dd) {
        if (this.queue.length > 0 || 0 === this.EC.length) return;
        const Jd = this.EC.length;
        this.EC = this.EC.filter((Jd => dd - Jd.receivedAt < 6e4)), this.EC.length !== Jd && this.onHeldCoinsChanged()
      }
    }

    function rk(dd, Jd) {
      return 450 + 715 * dd / (Jd - 1)
    }

    function uk(dd, Jd) {
      return rk(dd, Jd) + 650
    }
    const tk = "skyblockMailboxView";
    class Vk {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.nO = dd, this.isBusy = Jd, this.onStarted = kd, this.now = pd, this.waiting = [], this.playing = null, this.token = 0, this.itemName = dd => dd
      }
      getSnapshot() {
        var dd, Jd;
        return null !== (dd = null === (Jd = this.playing) || void 0 === Jd ? void 0 : Jd.view) && void 0 !== dd ? dd : null
      }
      setItemName(dd) {
        this.itemName = dd
      }
      ZL(dd) {
        this.waiting.push(...dd.mailLetters), this.Do()
      }
      Do() {
        const dd = this.now();
        null !== this.playing && dd - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.nO(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(dd)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.nO(null)
      }
      start(dd) {
        const Jd = this.waiting.slice(0, 3);
        this.token++;
        const kd = {
          token: this.token,
          letters: Jd.map((dd => this.toView(dd))),
          more: this.waiting.length - Jd.length,
          durationMs: 4500 + 700 * Jd.length
        };
        this.waiting = [], this.playing = {
          view: kd,
          startedAt: dd
        }, this.nO(kd), this.onStarted(kd)
      }
      toView(dd) {
        return {
          coins: dd.mailCoins,
          items: dd.mailItems.map((dd => {
            var Jd;
            return {
              itemName: dd.mailItemName,
              amount: dd.mailItemAmount,
              label: null !== (Jd = dd.mailItemLabel) && void 0 !== Jd ? Jd : this.itemName(dd.mailItemName)
            }
          })),
          reasonKey: dd.mailReasonKey,
          reasonParams: dd.mailReasonParams
        }
      }
    }
    const zk = "skyblockQuestGraphView",
      Hk = "skyblockDevQuestJump";

    function wk(dd) {
      if (0 === dd.length) return "";
      const Jd = [`M ${dd[0].x} ${dd[0].y}`];
      for (let pd = 1; pd < dd.length - 1; pd++) {
        const kd = dd[pd + 1];
        Jd.push(`Q ${dd[pd].x} ${dd[pd].y} ${(dd[pd].x+kd.x)/2} ${(dd[pd].y+kd.y)/2}`)
      }
      const kd = dd[dd.length - 1];
      return Jd.push(`L ${kd.x} ${kd.y}`), Jd.join(" ")
    }

    function Ak(dd, Jd) {
      return dd < Jd ? `${dd}|${Jd}` : `${Jd}|${dd}`
    }
    class dp extends od {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          Pd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          Zd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(dd, kd, pd), this.translate = Jd, this.requestJump = Nd, this.requestArrive = Wd, this.storage = Pd, this.now = Zd, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
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
      ZL(dd) {
        if (!this.pL)
          if ("graph" !== dd.kind) {
            if ("jumping" === dd.kind) {
              const Jd = {
                questId: dd.graphQuestId,
                variation: dd.graphVariation,
                completes: dd.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(Hk, Jd)
            }
          } else {
            const Jd = ++this.graphCount;
            kd.e(112).then((() => kd(6303))).then((kd => {
              let {
                default: pd
              } = kd;
              this.pL || Jd !== this.graphCount || (this.layout = function(dd, Jd, kd) {
                var pd, Nd;
                const Wd = new dd.graphlib.Graph;
                Wd.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), Wd.setDefaultEdgeLabel((() => ({})));
                const Pd = new Set;
                for (const Kd of Jd) Pd.add(Kd.graphQuestId), Wd.setNode(Kd.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const Zd = kd.filter((dd => Pd.has(dd.graphFromId) && Pd.has(dd.graphToId) && dd.graphFromId !== dd.graphToId)),
                  gd = new Map;
                for (const Kd of [...Zd].sort(((dd, Jd) => Number("awaits" === dd.graphEdgeKind) - Number("awaits" === Jd.graphEdgeKind)))) {
                  const dd = Ak(Kd.graphFromId, Kd.graphToId);
                  gd.has(dd) || (gd.set(dd, Kd), Wd.setEdge(Kd.graphFromId, Kd.graphToId))
                }
                dd.layout(Wd);
                const Cd = Wd.graph();
                return {
                  width: Math.ceil(null !== (pd = Cd.width) && void 0 !== pd ? pd : 0),
                  height: Math.ceil(null !== (Nd = Cd.height) && void 0 !== Nd ? Nd : 0),
                  nodes: Jd.map((dd => {
                    var Jd, kd;
                    const pd = Wd.node(dd.graphQuestId);
                    return {
                      node: dd,
                      left: (null !== (Jd = pd.x) && void 0 !== Jd ? Jd : 0) - 95,
                      top: (null !== (kd = pd.y) && void 0 !== kd ? kd : 0) - 26
                    }
                  })),
                  edges: Zd.map((dd => {
                    var Jd;
                    const kd = gd.get(Ak(dd.graphFromId, dd.graphToId)),
                      pd = null !== (Jd = Wd.edge(kd.graphFromId, kd.graphToId).points) && void 0 !== Jd ? Jd : [];
                    return {
                      edge: dd,
                      key: `${dd.graphFromId}|${dd.graphToId}|${dd.graphEdgeKind}`,
                      path: wk(kd.graphFromId === dd.graphFromId ? pd : [...pd].reverse())
                    }
                  })),
                  plans: new Map(Jd.map((dd => [dd.graphQuestId, new Set([dd.graphQuestId, ...dd.graphPlanIds])])))
                }
              }(pd, dd.graphNodes, dd.graphEdges), this.show())
            })).catch((dd => {
              console.error("The quest graph could not be laid out", dd)
            }))
          }
      }
      resumeJump(dd) {
        const Jd = this.storage.getItem(Hk);
        this.storage.removeItem(Hk), null === Jd || Jd.variation !== dd || this.now() - Jd.departedAt > 6e4 || this.requestArrive(Jd.questId, Jd.completes)
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
        var dd, Jd;
        return null !== (dd = null === this.hoveredId || null === (Jd = this.layout) || void 0 === Jd ? void 0 : Jd.plans.get(this.hoveredId)) && void 0 !== dd ? dd : new Set
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
        const Jd = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: dd.width,
          height: dd.height,
          nodes: dd.nodes.map((dd => {
            let {
              node: kd,
              left: pd,
              top: Nd
            } = dd;
            return {
              id: kd.graphQuestId,
              name: this.translate(kd.graphNameKey),
              detail: null === kd.graphGiverName ? kd.graphZoneId : `${kd.graphGiverName} \xb7 ${kd.graphZoneId}`,
              state: kd.graphState,
              left: pd,
              top: Nd,
              inPlan: Jd.has(kd.graphQuestId),
              hovered: kd.graphQuestId === this.hoveredId
            }
          })),
          edges: dd.edges.map((dd => {
            let {
              edge: kd,
              key: pd,
              path: Nd
            } = dd;
            return {
              key: pd,
              kind: kd.graphEdgeKind,
              path: Nd,
              inPlan: Jd.has(kd.graphFromId) && Jd.has(kd.graphToId)
            }
          })),
          planning: Jd.size > 0
        }
      }
    }
    var Jp = kd(37210);
    const kp = 250,
      pp = 2150,
      Np = -2.8,
      Wp = 2.2,
      Pp = -27,
      Zp = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      gp = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      Cp = Math.round(50 + 1e3 * (gp.delay + gp.period / 2)),
      Kp = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      op = Array.from({
        length: 26
      }, ((dd, Jd) => {
        const kd = 2.39996 * Jd,
          pd = .5 + .618034 * Jd % 1 * .23,
          Nd = Jd % 3 !== 2;
        return {
          rune: Nd ? Kp[7 * Jd % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(kd)*pd).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(kd)*pd).toFixed(3)})`,
            "--spin": 40 * (Jd % 5 - 2) + "deg",
            "--size": (Nd ? 1 + Jd % 4 * .2 : .3 + Jd % 2 * .15) + "rem",
            "--duration": `${(1.8+7*Jd%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*Jd%3).toFixed(2)}s`
          }
        }
      }));

    function lp(dd, Jd) {
      return Array.from({
        length: 30 + 3 * dd + (Jd ? 10 : 0)
      }, ((dd, Jd) => {
        const kd = Jd < 4,
          pd = kd ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          Nd = kd ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          Wd = kd ? 2.2 : .6 + Math.random(),
          Pd = kd ? .3 : Math.random() < .5 ? .16 : .24,
          Zd = kd ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": pd,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${Nd.toFixed(2)}rem`,
          "--length": `${Wd.toFixed(2)}rem`,
          "--width": `${Pd}rem`,
          "--duration": `${Math.round(Zd)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function Qp(dd) {
      let {
        zeta: Jd,
        period: kd
      } = dd;
      const pd = 2 * Math.PI / kd;
      return {
        w: pd,
        decay: Jd * pd / Math.sqrt(1 - Jd * Jd)
      }
    }
    let Lp = !1;

    function Op() {
      if (Lp) return;
      Lp = !0;
      const dd = document.createElement("style");
      dd.textContent = function() {
        const dd = Qp(Zp),
          Jd = Qp(gp),
          kd = Jd => Math.exp(-dd.decay * Jd) * Math.sin(dd.w * Jd),
          pd = kd(Math.atan(dd.w / dd.decay) / dd.w),
          Nd = .25,
          Wd = 2.15,
          Pd = Math.round(215),
          Zd = [];
        for (let gd = 0; gd <= Pd; gd++) {
          const dd = gd / Pd * Wd;
          let Cd = Math.sin(Math.min(dd, Nd) / Nd * Math.PI / 2) ** 2,
            Kd = 0,
            od = 1,
            ld = 1 - .2 * Cd,
            Qd = 1;
          if (dd >= Nd) {
            const Pd = dd - Nd,
              Zd = Math.max(0, Pd - .05);
            Cd = Math.exp(-Zd / .05), Kd = kd(Zd + Zp.lead * (1 - Math.exp(-Zd / Zp.rush))) / pd;
            const gd = Zd - gp.delay,
              Ld = gd <= 0 ? 0 : 1 - Math.exp(-Jd.decay * gd) * (Math.cos(Jd.w * gd) + Jd.decay / Jd.w * Math.sin(Jd.w * gd)),
              Od = Math.max(0, (dd - 1.77) / (Wd - 1.77));
            od = (1 + (gp.to - 1) * Ld) * (1 + .08 * Od), ld = 1.1 + 1.5 * Math.exp(-Pd / .07) + .3 * Math.exp(-(((1e3 * Pd - Cp) / 100) ** 2)) + .8 * Od, Qd = 1 - Od ** 1.5
          }
          const Ld = .15 * Cd + Np * Kd,
            Od = -.1 * Cd + Wp * Kd,
            ed = 3 * Cd + Pp * Kd;
          Zd.push(`${(gd/Pd*100).toFixed(3)}% { opacity: ${Qd.toFixed(3)}; transform: translate(${Ld.toFixed(3)}rem, ${Od.toFixed(3)}rem) rotate(${ed.toFixed(2)}deg) scale(${od.toFixed(3)}); filter: brightness(${ld.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${Zd.join(" ")} }`
      }(), document.head.append(dd)
    }
    const ep = "skyblockForgeView",
      Rp = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class Ip extends od {
      constructor(dd, Jd, kd, pd, Nd) {
        super(dd, kd, pd), this.translate = Jd, this.requestForge = Nd, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.onOpened = null, this.select = (dd, Jd) => {
          var kd, pd;
          null !== this.forging || (null !== (kd = this.owned[(0, Jp.p)(Jd, dd)]) && void 0 !== kd ? kd : 0) <= 0 || (this.selected[dd] = this.selected[dd] === Jd ? null : Jd, this.status = null, null === (pd = this.onPartSelected) || void 0 === pd || pd.call(this), this.emit())
        }, this.forge = dd => {
          var Jd, kd;
          const pd = this.selectedParts();
          if (null === pd || this.isPending() || !this.open) return;
          const Nd = (0, Jp.n)(pd);
          if (null === Nd || Nd.coalCost > this.coal) return;
          const Wd = this.preview(Nd),
            Pd = null !== (Jd = null === (kd = this.onForgeStarted) || void 0 === kd ? void 0 : kd.call(this, Wd.tier, Wd.named, dd)) && void 0 !== Jd ? Jd : () => {};
          if (this.dropArrival(), dd) {
            const dd = {
              id: ++this.forgeId,
              preview: Wd,
              timers: [],
              stopSounds: Pd,
              landed: !1,
              reply: null
            };
            dd.timers.push(setTimeout((() => {
              dd.landed = !0, null !== dd.reply && (this.apply(dd.reply), dd.reply = null, this.emit())
            }), kp), setTimeout((() => {
              this.finishForge(dd)
            }), pp)), this.forging = dd
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(pd)
        }, this.snapshot = this.buildSnapshot()
      }
      ZL(dd) {
        var Jd;
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === dd.forgeMessageKind) return this.dropForge(), this.apply(dd), this.status = null, this.show(), void(null === (Jd = this.onOpened) || void 0 === Jd || Jd.call(this));
        const kd = this.forging;
        if (null !== kd && null !== dd.forgeRefusalKey) this.dropForge();
        else if (null !== kd && !kd.landed) return void(kd.reply = dd);
        this.apply(dd), this.emit()
      }
      apply(dd) {
        if (this.owned = dd.forgeOwnedParts, this.coal = dd.forgeCoalOwned, this.keepSelectionOwned("open" === dd.forgeMessageKind), null !== dd.forgeForgedSwordId) {
          var Jd;
          const kd = (0, Jp.n)(dd.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (Jd = null === kd || void 0 === kd ? void 0 : kd.displayName) && void 0 !== Jd ? Jd : ""
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
        var Jd;
        this.forging = null;
        const kd = this.selectedParts(),
          pd = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: dd.id,
          sameSword: null !== kd && (null === (Jd = (0, Jp.n)(kd)) || void 0 === Jd ? void 0 : Jd.displayName) === dd.preview.name,
          timer: pd
        }, this.emit()
      }
      dropForge() {
        const dd = this.forging;
        if (null !== dd) {
          this.forging = null;
          for (const Jd of dd.timers) clearTimeout(Jd);
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
        var dd, Jd, kd;
        const pd = this.selectedParts(),
          Nd = null === pd ? null : (0, Jp.n)(pd),
          Wd = null !== (dd = null === (Jd = this.forging) || void 0 === Jd ? void 0 : Jd.preview) && void 0 !== dd ? dd : null === Nd ? null : this.preview(Nd);
        return {
          enabled: this.received,
          open: this.open,
          slots: Jp.j.map((dd => ({
            kind: dd,
            label: this.translate(Rp[dd]),
            parts: this.partsFor(dd)
          }))),
          coalOwned: this.coal,
          preview: Wd,
          unformedSword: Jp.g[null !== (kd = this.selected.Blade) && void 0 !== kd ? kd : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((dd => dd > 0)),
          canForge: null !== Wd && !Wd.coalShort && !this.isPending(),
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
        const Jd = [];
        for (const pd of Jp.c) {
          var kd;
          const Nd = (0, Jp.p)(pd, dd),
            Wd = null !== (kd = this.owned[Nd]) && void 0 !== kd ? kd : 0;
          Wd > 0 && Jd.push({
            material: pd,
            itemName: Nd,
            owned: Wd,
            selected: this.selected[dd] === pd,
            placeholder: !1
          })
        }
        if (0 === Jd.length) {
          const kd = Jp.c[0];
          Jd.push({
            material: kd,
            itemName: (0, Jp.p)(kd, dd),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return Jd
      }
      stats(dd) {
        const Jd = [{
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
        return dd.reachBonus > 0 && Jd.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${dd.reachBonus.toFixed(1)}`,
          better: !0
        }), dd.damageReduction > 0 && Jd.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*dd.damageReduction)}%`,
          better: !0
        }), Jd
      }
      selectedParts() {
        const {
          Blade: dd,
          Guard: Jd,
          Handle: kd
        } = this.selected;
        return null === dd || null === Jd || null === kd ? null : {
          blade: dd,
          guard: Jd,
          handle: kd
        }
      }
      keepSelectionOwned(dd) {
        for (const kd of Jp.j) {
          var Jd;
          const pd = this.selected[kd];
          if (null !== pd && (null !== (Jd = this.owned[(0, Jp.p)(pd, kd)]) && void 0 !== Jd ? Jd : 0) > 0) continue;
          if (!dd) {
            this.selected[kd] = null;
            continue
          }
          const Nd = [...Jp.c].reverse().find((dd => {
            var Jd;
            return (null !== (Jd = this.owned[(0, Jp.p)(dd, kd)]) && void 0 !== Jd ? Jd : 0) > 0
          }));
          this.selected[kd] = null !== Nd && void 0 !== Nd ? Nd : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const Gp = "skyblockSmugglerView",
      vp = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class xp extends od {
      constructor(dd, Jd, kd, pd, Nd) {
        let Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(dd, kd, pd), this.translate = Jd, this.requestBuy = Nd, this.now = Wd, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = dd => dd, this.onBought = null, this.buy = dd => {
          const Jd = this.deals[dd];
          void 0 !== Jd && !this.isPending() && this.open && !this.soldOut.has(dd) && this.canAfford(Jd) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, dd))
        }, this.snapshot = this.buildSnapshot()
      }
      ZL(dd) {
        if (this.received = !0, this.day = dd.smugglerDay, this.deals = dd.smugglerDeals, this.rivets = dd.smugglerRivetsOwned, this.crests = dd.smugglerCrestsOwned, this.soldOut = new Set(dd.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + dd.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === dd.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = dd.smugglerBoughtSlot, null !== dd.smugglerBoughtSlot) {
          var Jd, kd;
          const pd = this.deals[dd.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === pd ? "" : this.dealName(pd),
              amount: String(null !== (Jd = null === pd || void 0 === pd ? void 0 : pd.smugglerDealAmount) && void 0 !== Jd ? Jd : 0)
            }
          }, this.boughtCount++, null === (kd = this.onBought) || void 0 === kd || kd.call(this)
        } else null !== dd.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: dd.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(dd, Jd, kd) {
        this.translate = dd, void 0 !== kd && (this.itemName = kd), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(dd) {
        if (null !== dd.smugglerDealUniqueName) return dd.smugglerDealUniqueName;
        const Jd = vp[dd.smugglerDealItem];
        return void 0 === Jd ? this.itemName(dd.smugglerDealItem) : this.translate(Jd)
      }
      canAfford(dd) {
        return dd.smugglerDealRivets <= this.rivets && dd.smugglerDealCrests <= this.crests
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
        const dd = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return dd <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : dd < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(dd)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(dd / 60)),
          minutes: String(dd % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((dd, Jd) => ({
            slot: Jd,
            itemName: dd.smugglerDealItem,
            displayName: this.dealName(dd),
            enchantmentTier: dd.smugglerDealEnchantmentTier,
            amount: dd.smugglerDealAmount,
            rivets: dd.smugglerDealRivets,
            crests: dd.smugglerDealCrests,
            affordable: this.canAfford(dd),
            soldOut: this.soldOut.has(Jd),
            justBought: this.boughtSlot === Jd
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
    const qp = "skyblockPassageView",
      Bp = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function sp(dd, Jd) {
      return dd(Bp[Jd])
    }

    function ip(dd, Jd, kd, pd) {
      const Nd = Math.ceil((kd - pd) / 864e5),
        Wd = sp(dd, Jd);
      return Nd > 1 ? dd("skyblockGame:passageNextDays", {
        phase: Wd,
        days: String(Nd)
      }) : dd("skyblockGame:passageNextSoon", {
        phase: Wd
      })
    }
    class ap extends od {
      constructor(dd, Jd, kd, pd) {
        let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(dd, kd, pd), this.translate = Jd, this.now = Nd, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = dd => dd, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      ZL(dd) {
        this.message = dd, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(dd, Jd, kd) {
        this.translate = dd, void 0 !== kd && (this.itemName = kd), this.emit()
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
          phaseName: sp(this.translate, dd.passagePhase),
          visitors: dd.passageVisitors.map((dd => this.describe(dd))),
          resting: this.describe(dd.passageResting),
          nextPhase: dd.passageNextPhase,
          next: ip(this.translate, dd.passageNextPhase, dd.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var Mp = kd(38690);
    const Fp = "skyblockKeepersChairView";
    class Yp extends od {
      constructor(dd, Jd, kd, pd, Nd) {
        let Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          Pd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new Mp.b;
        super(dd, kd, pd), this.translate = Jd, this.requestAim = Nd, this.now = Wd, this.pacer = Pd, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = dd => dd, this.aim = dd => {
          !this.awaitingReply && this.open && this.atChair && dd !== this.favoured && (null === dd || this.islands.some((Jd => Jd.keepersChairIslandId === dd && Jd.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== dd && void 0 !== dd ? dd : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Pd.subscribe((() => {
          this.emit()
        }))
      }
      ZL(dd) {
        var Jd, kd;
        this.received = !0;
        const pd = this.favoured,
          Nd = this.atChair;
        var Wd;
        return this.islands = dd.keepersChairIslands, this.favoured = dd.keepersChairFavoured, this.passage = null !== (Jd = dd.keepersChairPassage) && void 0 !== Jd ? Jd : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (kd = dd.keepersChairAtChair) || void 0 === kd || kd, "place" === dd.keepersChairMessageKind ? (!Nd && this.atChair && "refused" === (null === (Wd = this.status) || void 0 === Wd ? void 0 : Wd.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === dd.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== dd.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: dd.keepersChairRefusalKey,
          island: null
        } : this.favoured !== pd && (this.status = null === this.favoured ? {
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
      setTranslator(dd, Jd, kd) {
        this.translate = dd, void 0 !== kd && (this.itemName = kd), this.emit()
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
        const Jd = this.islands.find((Jd => Jd.keepersChairIslandId === dd));
        return void 0 === Jd ? dd : this.translate(Jd.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const dd = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          Jd = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((dd => {
            const Jd = dd.keepersChairFeaturedFish;
            return {
              id: dd.keepersChairIslandId,
              name: this.translate(dd.keepersChairIslandNameKey),
              relit: dd.keepersChairIslandRelit,
              featuredFish: null === Jd ? null : {
                itemName: Jd,
                displayName: this.itemName(Jd)
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
          almanac: null === Jd ? null : {
            phase: Jd.keepersChairPassagePhase,
            phaseName: sp(this.translate, Jd.keepersChairPassagePhase),
            nextPhase: Jd.keepersChairPassageNextPhase,
            next: ip(this.translate, Jd.keepersChairPassageNextPhase, Jd.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const mp = "skyblockReachLogView",
      bp = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      Sp = "Caught Fish",
      jp = [1, 2, 4];

    function Xp(dd, Jd) {
      return dd.map((dd => ({
        ...dd,
        reachLogPageFish: dd.reachLogPageFish.map((dd => ({
          ...dd,
          reachLogFishFresh: Jd(dd)
        })))
      })))
    }
    class fp extends od {
      constructor(dd, Jd, kd, pd, Nd) {
        let Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new Mp.b;
        super(dd, kd, pd), this.translate = Jd, this.requestOpen = Nd, this.pacer = Wd, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = dd => dd, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = dd => {
          this.pages.some((Jd => Jd.reachLogIslandId === dd)) && (this.selected = dd, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Wd.subscribe((() => {
          this.emit()
        }))
      }
      ZL(dd) {
        if (this.received = !0, "status" === dd.reachLogMessageKind) return !0 === dd.reachLogNews && this.markNews(), this.serverFresh = dd.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const Jd = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== dd.reachLogMessageKind)
          if (this.pageViews = null, this.pages = Xp(dd.reachLogPages, (dd => dd.reachLogFishFresh || this.heldFresh.has(dd.reachLogFishItem))), this.letGoShown = dd.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, Jd) this.showPages();
          else {
            for (const dd of this.pages)
              for (const Jd of dd.reachLogPageFish) Jd.reachLogFishFresh && this.heldFresh.add(Jd.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(dd, Jd, kd) {
        this.translate = dd, this.pageViews = null, void 0 !== kd && (this.itemName = kd), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = Xp(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var dd, Jd, kd, pd;
        const Nd = this.pages.find((dd => dd.reachLogPageFish.some((dd => dd.reachLogFishFresh))));
        if (void 0 !== Nd) return Nd.reachLogIslandId;
        if (null !== this.selected && this.pages.some((dd => dd.reachLogIslandId === this.selected))) return this.selected;
        return null !== (dd = null !== (Jd = null === (kd = this.pages.filter((dd => dd.reachLogIslandAwake)).at(-1)) || void 0 === kd ? void 0 : kd.reachLogIslandId) && void 0 !== Jd ? Jd : null === (pd = this.pages[0]) || void 0 === pd ? void 0 : pd.reachLogIslandId) && void 0 !== dd ? dd : null
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
          var Jd;
          return {
            id: dd.reachLogIslandId,
            name: this.translate(dd.reachLogIslandNameKey),
            awake: dd.reachLogIslandAwake,
            gold: dd.reachLogPageGold,
            caught: dd.reachLogPageFish.filter((dd => dd.reachLogFishCaught && !dd.reachLogFishVisitor)).length,
            total: dd.reachLogPageFish.filter((dd => !dd.reachLogFishVisitor)).length,
            fish: dd.reachLogPageFish.map((dd => {
              const Jd = dd.reachLogFishBestKg;
              return {
                itemName: dd.reachLogFishItem,
                name: dd.reachLogFishCaught ? this.itemName(dd.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: dd.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / dd.reachLogFishChance))
                }),
                best: dd.reachLogFishCaught ? null === Jd ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: Jd.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: dd.reachLogFishMarks,
                ribbons: jp.map((Jd => 0 !== (dd.reachLogFishRibbons & Jd))),
                glimmer: 0 !== (8 & dd.reachLogFishRibbons),
                halo: 0 !== (32 & dd.reachLogFishRibbons),
                fresh: dd.reachLogFishFresh,
                visitor: dd.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (Jd = dd.reachLogPageReturner) && void 0 !== Jd ? Jd : null)
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
    const np = "skyblockLampLightView";
    class Up {
      constructor(dd, Jd, kd, pd) {
        this.nO = dd, this.translate = Jd, this.requestCommand = kd, this.pacer = pd, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.pL = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = dd => {
          dd ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = dd => {
          this.send(`buy ${dd}`)
        }, this.socket = dd => {
          this.send(`socket ${null!==dd&&void 0!==dd?dd:fd}`)
        }, this.wearTint = dd => {
          this.send(`tint ${null!==dd&&void 0!==dd?dd:fd}`)
        }, this.setSituation = dd => {
          this.situation = dd, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = pd.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = pd.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      ZL(dd) {
        if (this.message = dd, null !== dd.lampLightShop && (this.shop = dd.lampLightShop), "open" === dd.lampLightKind && (this.refusalKey = null), "reply" === dd.lampLightKind) {
          var Jd;
          const Nd = null !== (Jd = dd.lampLightReplyTag) && void 0 !== Jd ? Jd : null,
            Wd = null !== Nd && Nd === this.offTag;
          var kd, pd;
          if (Wd ? this.settleOff() : null !== Nd && Nd !== this.awaitingTag || this.settleReply(), this.refusalKey = dd.lampLightRefusalKey, null !== dd.lampLightBought && !Wd) this.sparkle = {
            id: dd.lampLightBought,
            count: (null !== (kd = null === (pd = this.sparkle) || void 0 === pd ? void 0 : pd.count) && void 0 !== kd ? kd : 0) + 1
          }
        }
        dd.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === dd.lampLightKind && (this.lastGained = dd.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(dd) {
        dd !== this.atChair && (this.atChair = dd, dd && (this.refusalKey = null), this.emit())
      }
      setTranslator(dd, Jd) {
        this.translate = dd, this.locale = null !== Jd && void 0 !== Jd ? Jd : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.pL = !0
      }
      send(dd) {
        var Jd;
        if (null !== this.awaitingTag || "ready" !== (null === (Jd = this.message) || void 0 === Jd ? void 0 : Jd.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const kd = this.nextTag();
        this.awaitingTag = kd, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${dd} ${kd}`), this.emit()
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
        this.pL || (this.snapshot = this.buildSnapshot(), this.nO(this.snapshot))
      }
      formatLight(dd) {
        return Math.floor(dd).toLocaleString(this.locale)
      }
      formatPercent(dd) {
        const Jd = 100 * dd;
        return Jd >= 10 ? Math.round(Jd).toLocaleString(this.locale) : Jd.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(dd, Jd) {
        if ("bite" === dd) return this.translate("skyblockGame:lampLightBite", {
          seconds: (Jd.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === dd) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(Jd.lampLightRareChance)
        });
        if ("notice" === dd) return null === Jd.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(Jd.lampLightNoticeChance)
        });
        const kd = "meter" === dd ? Jd.lampLightMeterCatches : Jd.lampLightBloomCatches;
        return null === kd ? null : this.translate("meter" === dd ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(kd))
        })
      }
      oddsLines(dd, Jd) {
        const kd = (dd, Jd) => {
            var kd;
            return null !== (kd = {
              bite: Jd.lampLightBiteMs,
              rare: Jd.lampLightRareChance,
              meter: Jd.lampLightMeterCatches,
              bloom: Jd.lampLightBloomCatches,
              notice: Jd.lampLightNoticeChance
            } [dd]) && void 0 !== kd ? kd : 0
          },
          pd = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          Nd = [];
        for (const Wd of ["bite", "rare", "meter", "bloom", "notice"]) {
          const Pd = this.formatOdds(Wd, dd),
            Zd = this.formatOdds(Wd, Jd);
          if (null === Pd || null === Zd || "bite" !== Wd && "rare" !== Wd && Pd === Zd) continue;
          const gd = kd(Wd, Jd) - kd(Wd, dd),
            Cd = pd[Wd] ? gd < 0 : gd > 0;
          Nd.push({
            label: Wd,
            before: Pd,
            after: Zd,
            tone: Pd === Zd ? "same" : Cd ? "better" : "worse"
          })
        }
        return Nd
      }
      charmView(dd, Jd, kd) {
        const pd = dd.lampLightCharmId.charAt(0).toUpperCase() + dd.lampLightCharmId.slice(1),
          Nd = "bloom" === this.situation;
        return {
          id: dd.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${pd}`),
          effect: this.translate(`skyblockGame:lampLightCharm${pd}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(dd.lampLightCharmCost)
          }),
          owned: dd.lampLightCharmOwned,
          affordable: kd >= dd.lampLightCharmCost,
          socketed: Jd.lampLightSocketed === dd.lampLightCharmId,
          lines: this.oddsLines(Nd ? Jd.lampLightBareBloom : Jd.lampLightBareOpen, Nd ? dd.lampLightCharmBloom : dd.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var dd, Jd, kd, pd;
        const Nd = this.message,
          Wd = "ready" === (null === Nd || void 0 === Nd ? void 0 : Nd.lampLightStatus) ? this.shop : null,
          Pd = null !== (dd = null === Nd || void 0 === Nd ? void 0 : Nd.lampLightBalance) && void 0 !== dd ? dd : 0,
          Zd = this.atChair,
          gd = "loading" === (null === Nd || void 0 === Nd ? void 0 : Nd.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === Nd || void 0 === Nd ? void 0 : Nd.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          Cd = "ready" !== (null === Nd || void 0 === Nd ? void 0 : Nd.lampLightStatus) || Zd ? null !== (Jd = this.refusalKey) && void 0 !== Jd ? Jd : gd : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== Nd && "locked" !== Nd.lampLightStatus,
          status: null !== (kd = null === Nd || void 0 === Nd ? void 0 : Nd.lampLightStatus) && void 0 !== kd ? kd : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(Pd)
          }),
          releasing: null !== (pd = null === Nd || void 0 === Nd ? void 0 : Nd.lampLightReleasing) && void 0 !== pd && pd,
          gained: null === Nd || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === Nd || void 0 === Nd ? void 0 : Nd.lampLightStatus) && Zd && !this.isPending(),
          situation: this.situation,
          shop: null === Wd ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: Wd.lampLightOddsRod,
              island: this.translate(Wd.lampLightIslandNameKey)
            }),
            heldRod: null !== Wd.lampLightHeldRod,
            charms: Wd.lampLightCharms.map((dd => this.charmView(dd, Wd, Pd))),
            tints: Wd.lampLightTints.map((dd => {
              const Jd = dd.lampLightTintId,
                [kd, pd, Nd] = dd.lampLightTintColour;
              return {
                id: Jd,
                name: this.translate(`skyblockGame:lampLightTint${Jd.charAt(0).toUpperCase()}${Jd.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(dd.lampLightTintCost)
                }),
                owned: dd.lampLightTintOwned,
                affordable: Pd >= dd.lampLightTintCost,
                wearing: Wd.lampLightTint === Jd,
                colour: `rgb(${kd}, ${pd}, ${Nd})`
              }
            })),
            wearingIslandColours: null === Wd.lampLightTint
          },
          notice: null === Cd ? null : this.translate(Cd),
          sparkle: this.sparkle
        }
      }
    }
    const yp = "skyblockMagmawardView";
    class Dp {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.nO = dd, this.now = Jd, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = cd.map((() => 0)), this.wornAt = cd.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      ZL(dd) {
        var Jd, kd;
        const pd = cd.map(((Jd, kd) => !0 === dd.magmawardPiecesWorn[kd]));
        if (!pd.includes(!0)) return this.snapshot = null, void this.nO(null);
        const Nd = this.now(),
          Wd = this.snapshot;
        null === Wd && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const Pd = dd.magmawardFuelCarried,
          Zd = !pd.includes(!1);
        let gd = null !== (Jd = null === Wd || void 0 === Wd ? void 0 : Wd.pulse) && void 0 !== Jd ? Jd : null,
          Cd = null !== (kd = null === Wd || void 0 === Wd ? void 0 : Wd.flare) && void 0 !== kd ? kd : null;
        dd.magmawardFuelBurned ? (gd = "burn", Cd = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = Nd, this.flareAt = Nd) : null !== Wd && Pd > Wd.fuel && (gd = "gain", this.pulseToken++, this.pulseAt = Nd), Zd && null !== Wd && !Wd.fullSet && (Cd = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = Nd, this.setLitAt = Nd);
        const Kd = cd.map(((dd, Jd) => (pd[Jd] && null !== Wd && !Wd.pieces[Jd].worn && (this.wornTokens[Jd]++, this.wornAt[Jd] = Nd), {
          itemName: dd,
          worn: pd[Jd],
          wornToken: this.wornTokens[Jd],
          justWorn: pd[Jd] && this.isPlaying(this.wornAt[Jd], Nd)
        })));
        this.snapshot = {
          pieces: Kd,
          wornCount: pd.filter(Boolean).length,
          fullSet: Zd,
          fuel: Pd,
          fuelState: Pd <= 0 ? "empty" : Pd <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, Nd) ? gd : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, Nd) ? Cd : null,
          flareToken: this.flareToken,
          setLit: Zd && this.isPlaying(this.setLitAt, Nd),
          setLitToken: this.setLitToken
        }, this.nO(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.nO(null)
      }
      isPlaying(dd, Jd) {
        return Jd - dd < 1200
      }
    }
    const Tp = "skyblockGlowtideView";
    class Ep {
      constructor(dd) {
        this.nO = dd, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = dd => {
          this.arrow = dd, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      ZL(dd) {
        this.bloom = dd.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.nO(null))
      }
      afterRender(dd, Jd) {
        const kd = this.bloom;
        if (null === kd || null === dd) return;
        const pd = kd.glowtideBloomX - dd[0],
          Wd = kd.glowtideBloomZ - dd[2],
          Pd = Math.hypot(pd, Wd),
          Zd = this.snapshot,
          gd = null !== Zd && void 0 !== Zd && Zd.inRange ? 1 : 0,
          Cd = Pd <= 12.5 + gd && dd[1] - kd.glowtideBloomY <= 10 + gd;
        !Cd || null !== Zd && void 0 !== Zd && Zd.inRange || this.inRangeToken++;
        const Kd = {
          colour: kd.glowtideBloomColour,
          inRange: Cd,
          distance: Math.round(Pd),
          inRangeToken: this.inRangeToken
        };
        (null === Zd || Kd.colour !== Zd.colour || Kd.inRange !== Zd.inRange || !Cd && Kd.distance !== Zd.distance) && (this.snapshot = Kd, this.nO(Kd));
        const od = Nd.b.computeShortestRotation(Jd, (0, Nd.Hb)([pd, 0, Wd]));
        null === this.arrow || Math.abs(od - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${od}rad)`, this.arrowTurn = od)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.nO(null)
      }
    }
    const cp = "skyblockGlowMeterView";
    class hp {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.nO = dd, this.now = Jd, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      ZL(dd) {
        const Jd = this.now(),
          {
            glowMeterFill: kd,
            glowMeterCapacity: pd
          } = dd,
          Nd = kd >= pd,
          Wd = this.snapshot;
        null !== Wd && (Nd && !Wd.full && (this.fullToken++, this.fullAt = Jd), Wd.full && !Nd ? (this.burstToken++, this.burstAt = Jd) : kd > Wd.fill && (this.gainToken++, this.gainAt = Jd)), this.snapshot = {
          fill: kd,
          oo: pd,
          ratio: Math.min(1, Math.max(0, kd / pd)),
          full: Nd,
          rares: dd.glowMeterRares,
          ready: Nd && this.isPlaying(this.fullAt, Jd),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, Jd),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, Jd),
          gainToken: this.gainToken
        }, this.nO(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.nO(null)
      }
      isPlaying(dd, Jd) {
        return Jd - dd < 2e3
      }
    }
    const rp = "skyblockHushWaitView";
    class tp {
      constructor(dd) {
        this.nO = dd, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      ZL(dd) {
        let {
          hushWaitMs: Jd,
          hushWaitTotalMs: kd,
          hushWaitLines: pd
        } = dd;
        if (this.clearTimers(), this.token++, 0 === pd.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (Jd <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: pd[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const Nd = Math.max(null !== kd && void 0 !== kd ? kd : Jd, Jd),
          Wd = Nd - Jd,
          Pd = dd => Nd * dd / pd.length,
          Zd = dd => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: Nd,
              elapsedMs: Wd,
              line: pd[dd],
              lineIndex: dd
            })
          };
        let gd = 0;
        for (; gd + 1 < pd.length && Pd(gd + 1) <= Wd;) gd++;
        Zd(gd);
        for (let Cd = gd + 1; Cd < pd.length; Cd++) this.later(Pd(Cd) - Wd, (() => {
          Zd(Cd)
        }));
        this.later(Jd, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(dd) {
        this.snapshot = dd, this.nO(dd)
      }
      later(dd, Jd) {
        this.timers.push(setTimeout(Jd, dd))
      }
      clearTimers() {
        for (const dd of this.timers) clearTimeout(dd);
        this.timers = []
      }
    }
    const Vp = "skyblockTideChartsView",
      zp = 36e5,
      Hp = 864e5;

    function wp(dd, Jd, kd) {
      const [pd, Nd, Wd, Pd] = dd.tideChartArea, Zd = Math.floor(Jd), gd = Math.floor(kd);
      return Zd >= pd && Zd <= Wd && gd >= Nd && gd <= Pd
    }

    function Ap(dd, Jd, kd) {
      const [pd, Nd, Wd, Pd] = dd.tideChartWater;
      return function(dd, Jd, kd, pd, Nd, Wd) {
        const Pd = 4 - hd(Math.floor(Nd) - (dd - kd), kd);
        return 5 * hd(Math.floor(Wd) - (Jd - pd), pd) + Pd
      }(pd, Nd, Wd, Pd, Jd, kd)
    }

    function dN(dd, Jd, kd) {
      const pd = dd.tideCharts;
      for (let Nd = 0; Nd < pd.length; Nd++)
        if (wp(pd[Nd], Jd, kd)) return pd[Nd];
      return null
    }

    function JN(dd, Jd, kd) {
      const pd = Math.max(0, Jd - kd);
      return pd > Hp ? dd("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(pd / Hp))
      }) : pd > zp ? dd("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(pd / zp))
      }) : dd("skyblockGame:tideChartsTurnSoon")
    }
    class kN extends od {
      constructor(dd, Jd, kd, pd) {
        let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(dd, kd, pd), this.translate = Jd, this.now = Nd, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.Tl = dd => {
          this.picked = dd, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      ZL(dd) {
        const Jd = this.message;
        if (null !== Jd)
          for (const pd of dd.tideCharts) {
            var kd;
            const dd = Jd.tideCharts.find((dd => dd.tideChartIsland === pd.tideChartIsland)),
              Nd = pd.tideChartLit & ~(null !== (kd = null === dd || void 0 === dd ? void 0 : dd.tideChartLit) && void 0 !== kd ? kd : 0);
            void 0 !== dd && 0 !== Nd && (this.pulse = {
              island: pd.tideChartIsland,
              cells: Nd,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = dd, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(dd, Jd) {
        var kd;
        const pd = null === this.message || Number.isNaN(dd) ? null : dN(this.message, dd, Jd),
          Nd = null !== (kd = null === pd || void 0 === pd ? void 0 : pd.tideChartIsland) && void 0 !== kd ? kd : null,
          Wd = null === pd ? -1 : function(dd, Jd, kd) {
            const [pd, Nd, Wd, Pd] = dd.tideChartWater;
            return function(dd, Jd, kd, pd, Nd, Wd, Pd) {
              return ((Nd - dd) / (kd + Pd)) ** 2 + ((Wd - Jd) / (pd + Pd)) ** 2 <= 1
            }(pd, Nd, Wd, Pd, Jd, kd, 2) ? Ap(dd, Jd, kd) : -1
          }(pd, dd, Jd);
        return (Nd !== this.hereIsland || Wd !== this.hereCell) && (this.hereIsland = Nd, this.hereCell = Wd, null !== Nd && (this.lastIsland = Nd), !0)
      }
      afterRender(dd) {
        if (null === this.message) return;
        this.lastX = null === dd ? Number.NaN : dd[0], this.lastZ = null === dd ? Number.NaN : dd[2];
        const Jd = this.locate(this.lastX, this.lastZ),
          kd = this.expirePulses();
        (Jd || kd || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const dd = this.now();
        return !(!this.open || dd - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = dd, JN(this.translate, this.message.tideChartTurnsInMs, dd - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(dd, Jd) {
        const kd = null === this.message ? null : dN(this.message, dd, Jd);
        if (null === kd) return;
        const pd = Ap(kd, dd, Jd);
        0 === (kd.tideChartPreBlank & 1 << pd) && (this.cast = {
          island: kd.tideChartIsland,
          cell: pd,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const dd = this.now();
        let Jd = !1;
        return 0 !== this.pulse.cells && dd - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, Jd = !0), null !== this.cast && dd - this.cast.atMs >= 1500 && (this.cast = null, Jd = !0), Jd
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
      findChart(dd, Jd) {
        var kd;
        return null !== (kd = dd.tideCharts.find((dd => dd.tideChartIsland === Jd))) && void 0 !== kd ? kd : null
      }
      describe(dd) {
        var Jd, kd, pd;
        const Nd = dd.tideChartIsland,
          Wd = [];
        for (let Qd = 0; Qd < 25; Qd++) {
          const Jd = 1 << Qd;
          0 !== (dd.tideChartLit & Jd) ? Wd.push("lit") : 0 !== (dd.tideChartClear & Jd) ? Wd.push("clear") : 0 !== (dd.tideChartPreBlank & Jd) ? Wd.push("shore") : Wd.push("water")
        }
        const Pd = function(dd) {
            let Jd = 0;
            for (let kd = dd >>> 0; 0 !== kd; kd &= kd - 1) Jd++;
            return Jd
          }(dd.tideChartLit),
          Zd = dd.tideChartInkCount,
          gd = this.translate(dd.tideChartIslandNameKey),
          Cd = this.translate("skyblockGame:tideChartsLit", {
            lit: String(Pd),
            ink: String(Zd)
          }),
          Kd = null === dd.tideChartPictureNameKey ? null : this.translate(dd.tideChartPictureNameKey),
          od = this.hereIsland === Nd && -1 !== this.hereCell ? this.hereCell : null,
          ld = [`${gd}: ${Cd}.`];
        if (null !== Kd && ld.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: Kd
          })), null !== od) {
          const dd = Math.floor(od / 5) + 1,
            Jd = od % 5 + 1;
          ld.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(dd),
            column: String(Jd)
          }))
        }
        return {
          island: Nd,
          islandName: gd,
          cells: Wd,
          hereCell: od,
          lit: Pd,
          ink: Zd,
          litText: Cd,
          pictureName: Kd,
          gridLabel: ld.join(" "),
          pulseCells: this.pulse.island === Nd ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (Jd = this.cast) || void 0 === Jd ? void 0 : Jd.island) === Nd ? this.cast.cell : null,
          castToken: null !== (kd = null === (pd = this.cast) || void 0 === pd ? void 0 : pd.token) && void 0 !== kd ? kd : 0
        }
      }
      buildSnapshot() {
        var dd, Jd, kd;
        const pd = this.message;
        if (null === pd || 0 === pd.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const Nd = this.findChart(pd, this.hereIsland),
          Wd = null !== (dd = null !== (Jd = null !== (kd = this.findChart(pd, this.open ? this.picked : null)) && void 0 !== kd ? kd : Nd) && void 0 !== Jd ? Jd : this.findChart(pd, this.lastIsland)) && void 0 !== dd ? dd : pd.tideCharts[0],
          Pd = null === Nd ? null : this.describe(Nd);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: Pd,
          card: Wd === Nd ? Pd : this.describe(Wd),
          turnsText: JN(this.translate, pd.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(pd.tideChartBookCount)
          }),
          tabs: pd.tideCharts.map((dd => ({
            island: dd.tideChartIsland,
            name: this.translate(dd.tideChartIslandNameKey),
            selected: dd.tideChartIsland === Wd.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const pN = "skyblockRegularsView",
      NN = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      WN = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function PN(dd, Jd) {
      return "given" === dd ? Jd.given : "owed" === dd ? Jd.owed : Jd.goal
    }
    class ZN extends od {
      constructor(dd, Jd, kd, pd) {
        super(dd, kd, pd), this.translate = Jd, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = dd => dd, this.openIsland = dd => {
          this.selected = dd, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = dd => {
          this.selected = dd, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      ZL(dd) {
        this.message = dd, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const dd = this.openedFromReachLog;
        return this.openedFromReachLog = !1, dd
      }
      setTranslator(dd, Jd, kd) {
        this.translate = dd, void 0 !== kd && (this.itemName = kd), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(dd, Jd, kd) {
        return {
          text: this.translate(PN(dd, Jd), kd),
          given: "given" === dd
        }
      }
      describeRegular(dd, Jd) {
        const kd = this.translate,
          pd = null !== dd.regularKg,
          Nd = dd.regularMeetings,
          Wd = pd ? 0 === Nd ? kd("skyblockGame:regularsNotMet") : 1 === Nd ? kd("skyblockGame:regularsMeetingsOne") : kd("skyblockGame:regularsMeetings", {
            count: Nd
          }) : "";
        return {
          id: dd.regularId,
          name: kd(dd.regularNameKey),
          line: kd(dd.regularLineKey),
          itemName: dd.regularFishItem,
          fishName: this.itemName(dd.regularFishItem),
          tagged: pd,
          size: null === dd.regularKg ? kd("skyblockGame:regularsNotTagged") : kd("skyblockGame:regularsSize", {
            kg: dd.regularKg.toFixed(1)
          }),
          meetings: Wd,
          chance: kd("skyblockGame:regularsChance", {
            count: dd.regularOneInCasts
          }),
          resting: dd.regularRestingToday,
          gifts: [{
            text: kd("skyblockGame:regularsGiftFlare"),
            given: Nd >= 3
          }, this.describeGift(dd.regularTintGift, NN, {
            tint: kd(dd.regularTintNameKey)
          })],
          history: [...dd.regularHistory].reverse().map((dd => {
            const pd = dd.regularMeetingKg.toFixed(1),
              Nd = Jd - dd.regularMeetingDay;
            return Nd <= 0 ? kd("skyblockGame:regularsToday", {
              kg: pd
            }) : kd("skyblockGame:regularsDaysAgo", {
              days: Nd,
              kg: pd
            })
          }))
        }
      }
      describeIsland(dd, Jd) {
        return {
          id: dd.regularsIslandId,
          name: this.translate(dd.regularsIslandNameKey),
          charm: this.describeGift(dd.regularsCharmGift, WN, {
            charm: this.translate(dd.regularsCharmNameKey)
          }),
          regulars: dd.regularsList.map((dd => this.describeRegular(dd, Jd)))
        }
      }
      buildSnapshot() {
        var dd, Jd, kd, pd;
        const Nd = this.message;
        if (null === Nd) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const Wd = Nd.regularsIslands.map((dd => this.describeIsland(dd, Nd.regularsToday))),
          Pd = null !== (dd = null !== (Jd = null === (kd = Wd.find((dd => dd.id === this.selected))) || void 0 === kd ? void 0 : kd.id) && void 0 !== Jd ? Jd : null === (pd = Wd[0]) || void 0 === pd ? void 0 : pd.id) && void 0 !== dd ? dd : "";
        return {
          enabled: !0,
          open: this.open,
          selected: Pd,
          islands: Wd
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const gN = "skyblockHiddenWatersView";
    class CN {
      constructor(dd) {
        this.nO = dd, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      ZL(dd) {
        this.snapshot = function(dd) {
          const [Jd, kd] = dd.hiddenWatersMapSize, pd = (dd, pd) => ({
            left: 1 - dd / Jd,
            top: pd / kd
          }), Nd = new Map;
          for (const [Pd, Zd] of dd.hiddenWatersGlimpses) {
            var Wd;
            const dd = null !== (Wd = Nd.get(Pd)) && void 0 !== Wd ? Wd : [];
            dd.push(Zd), Nd.set(Pd, dd)
          }
          return {
            found: dd.hiddenWatersFound,
            total: dd.hiddenWatersTotal,
            aspect: kd / Jd,
            pins: dd.hiddenWatersPins.map((dd => {
              let [Jd, kd] = dd;
              return pd(Jd, kd)
            })),
            islands: dd.hiddenWatersIslands.map((dd => {
              let [Nd, Wd, Pd, Zd] = dd;
              const {
                left: gd,
                top: Cd
              } = pd(Pd + 1, Wd);
              return {
                left: gd,
                top: Cd,
                width: (Pd + 1 - Nd) / Jd,
                height: (Zd + 1 - Wd) / kd
              }
            })),
            glimpses: Nd
          }
        }(dd), this.nO(this.snapshot)
      }
    }
    const KN = "skyblockDialogueView";
    class oN extends od {
      constructor(dd, Jd, kd, pd, Nd) {
        let Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(dd, kd, pd), this.translate = Jd, this.requestDialogue = Nd, this.now = Wd, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
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
      ZL(dd) {
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
        const Jd = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...Jd,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const kd = this.selection;
        if ("quest" === kd.kind) {
          const dd = this.scripts.find((dd => dd.dialogueQuestId === kd.questId));
          return {
            ...Jd,
            characters: [],
            questFocus: kd.questId,
            conversations: dd ? [this.conversation(dd)] : []
          }
        }
        const pd = [];
        for (let Wd = this.scripts.length - 1; Wd >= 0; Wd--) {
          const dd = this.scripts[Wd].dialogueLines;
          for (let Jd = dd.length - 1; Jd >= 0; Jd--) pd.includes(dd[Jd].dialogueSpeakerId) || pd.push(dd[Jd].dialogueSpeakerId)
        }
        const Nd = null !== kd.npcId && pd.includes(kd.npcId) ? kd.npcId : null !== (dd = pd[0]) && void 0 !== dd ? dd : null;
        return {
          ...Jd,
          characters: pd.map((dd => {
            var Jd, kd;
            return {
              id: dd,
              styling: null !== (Jd = null === (kd = this.speakers.get(dd)) || void 0 === kd ? void 0 : kd.dialogueSpeakerStyling) && void 0 !== Jd ? Jd : dd,
              selected: dd === Nd
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((dd => dd.dialogueLines.some((dd => dd.dialogueSpeakerId === Nd)))).map((dd => this.conversation(dd))).reverse()
        }
      }
      conversation(dd) {
        let Jd = null;
        return {
          questId: dd.dialogueQuestId,
          questName: this.translate(dd.dialogueQuestNameKey),
          completed: dd.dialogueQuestCompleted,
          lines: dd.dialogueLines.map(((dd, kd) => {
            var pd;
            const Nd = dd.dialogueSpeakerId === Jd || null === (pd = this.speakers.get(dd.dialogueSpeakerId)) || void 0 === pd ? void 0 : pd.dialogueSpeakerStyling;
            return Jd = dd.dialogueSpeakerId, {
              key: kd,
              display: {
                line: {
                  translationKey: dd.dialogueLineKey,
                  params: this.params(dd.dialogueLineParams)
                },
                speakerName: Nd,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(dd) {
        if (void 0 !== dd) return Object.fromEntries(Object.entries(dd).map((dd => {
          let [Jd, kd] = dd;
          return [Jd, "string" === typeof kd ? kd : this.translate(kd.translationKey)]
        })))
      }
    }
    var lN = kd(593),
      QN = kd(1288),
      LN = kd(95);
    const ON = "skyblockAutographsView";

    function eN(dd) {
      const Jd = lN.i[dd];
      return {
        label: Jd.chatTag.map((dd => dd.str)).join(""),
        icon: Jd.icon,
        colour: Jd.mainRGB
      }
    }
    class RN extends od {
      constructor(dd) {
        let Jd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = Jd, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      ZL(dd) {
        this.signatures = dd.autographSignatures, dd.autographOpen ? this.show() : this.emit()
      }
      setTranslator(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = Jd, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var dd;
        const Jd = null !== (dd = this.signatures) && void 0 !== dd ? dd : [],
          kd = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          pd = [...Jd].sort(((dd, Jd) => Number(null !== Jd.autographRank) - Number(null !== dd.autographRank) || Jd.autographSignedAtMs - dd.autographSignedAtMs)).map((dd => ({
            key: `${dd.autographSignedAtMs}|${dd.autographSignerName}`,
            name: (0, QN.d)(dd.autographSignerName, !LN.featureFlags.canSeeRealPlayerNames),
            rank: null === dd.autographRank ? null : eN(dd.autographRank),
            signedOn: kd.format(dd.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: pd,
          total: pd.length,
          rankTotal: pd.filter((dd => null !== dd.rank)).length
        }
      }
    }
    const IN = "skyblockHudView",
      GN = () => {},
      vN = {
        getItem: () => null,
        setItem: GN,
        removeItem: GN
      };
    class xN {
      constructor(dd) {
        let {
          translate: Jd,
          translateWithIcons: kd,
          setMenuOpen: pd = GN,
          dismissMenu: Nd = () => {
            pd(!1)
          },
          publishSkills: Wd = GN,
          publishQuests: Pd = GN,
          publishQuestNotification: Zd = GN,
          publishDungeons: gd = GN,
          publishCollections: Cd = GN,
          publishMap: Kd = GN,
          publishHud: od = GN,
          publishPortalTransit: ld = GN,
          publishDailyReward: Ld = GN,
          publishMailbox: Od = GN,
          publishQuestGraph: ed = GN,
          publishForge: Rd = GN,
          publishSmuggler: Id = GN,
          publishKeepersChair: Gd = GN,
          publishReachLog: vd = GN,
          publishLampLight: xd = GN,
          publishMagmaward: qd = GN,
          publishGlowtide: sd = GN,
          publishGlowMeter: ad = GN,
          publishHushWait: Md = GN,
          publishPassage: Fd = GN,
          publishTideCharts: Yd = GN,
          publishRegulars: md = GN,
          publishHiddenWaters: bd = GN,
          publishDialogue: Sd = GN,
          publishAutographs: jd = GN,
          isLoadingScreenUp: Xd = () => !1,
          onDailyRewardCoinLanded: fd = GN,
          onDailyRewardStarted: nd = GN,
          onDailyRewardFinished: Ud = GN,
          onDailyRewardItemLanded: yd = GN,
          onMailboxStarted: Dd = GN,
          journeyStorage: Td = vN,
          requestTracking: Ed = GN,
          requestTravel: cd = GN,
          requestDungeonEnter: hd = GN,
          requestQuestJump: rd = GN,
          requestQuestArrive: ud = GN,
          requestForge: td = GN,
          requestSmuggle: Vd = GN,
          requestKeepersChairAim: zd = GN,
          requestReachLogOpen: Hd = GN,
          requestLampLight: wd = GN,
          requestDialogue: Ad = GN
        } = dd;
        this.navigation = void 0, this.map = void 0, this.compass = new Bd, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new Mp.b, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = dd => dd, this.close = () => {
          for (const dd of this.panels) dd.close()
        }, this.setMenuOpen = pd, this.publishHud = od, this.portalTransit = new Tk(ld, Td), this.magmaward = new Dp(qd), this.glowtide = new Ep(sd), this.glowMeter = new hp(ad), this.hushWait = new tp(Md), this.dailyReward = new hk(Ld, (() => Xd() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (dd => {
          this.quests.setNotificationsHeld(dd)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), fd, nd, Ud, yd);
        const dJ = dd => {
          this.panels.some((dd => dd.isOpen())) || (dd ? Nd() : this.setMenuOpen(!1))
        };
        this.skills = new Zk(Wd, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), Jd, void 0, void 0, dJ), this.quests = new Qk(Pd, Ed, Jd, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, dJ, Zd), this.dungeons = new ek(gd, Jd, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, dJ, hd), this.collections = new Uk(Cd, Jd, (() => {
          this.beforePanelOpen(this.collections)
        }), dJ), this.map = new Qd(Kd, cd, Jd, (() => {
          this.beforePanelOpen(this.map)
        }), dJ), this.questGraph = new dp(ed, Jd, (() => {
          this.beforePanelOpen(this.questGraph)
        }), dJ, rd, ud, Td), this.forge = new Ip(Rd, Jd, (() => {
          this.beforePanelOpen(this.forge)
        }), dJ, td), this.smuggler = new xp(Id, Jd, (() => {
          this.beforePanelOpen(this.smuggler)
        }), dJ, Vd), this.lampLight = new Up(xd, Jd, wd, this.commandPacer), this.keepersChair = new Yp(Gd, Jd, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (dd => {
          this.lampLight.onChairClosed(), dJ(dd)
        }), zd, Date.now, this.commandPacer), this.reachLog = new fp(vd, Jd, (() => {
          this.beforePanelOpen(this.reachLog)
        }), dJ, Hd, this.commandPacer), this.passage = new ap(Fd, Jd, (() => {
          this.beforePanelOpen(this.passage)
        }), dJ), this.tideCharts = new kN(Yd, Jd, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), dJ), this.regulars = new ZN(md, Jd, (() => {
          this.beforePanelOpen(this.regulars)
        }), (dd => {
          this.regulars.takeReturnToReachLog() && !dd && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), dJ(dd)
        })), this.hiddenWaters = new CN(bd), this.dialogue = new oN(Sd, Jd, (() => {
          this.beforePanelOpen(this.dialogue)
        }), dJ, Ad), this.autographs = new RN(jd, (() => {
          this.beforePanelOpen(this.autographs)
        }), dJ), this.mailbox = new Vk(Od, (() => Xd() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), Dd), this.quests.translateWithIcons = null !== kd && void 0 !== kd ? kd : null, this.skills.onLevelUp = dd => {
          this.quests.notify(dd)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new Wk(this.map, this.quests, this.compass, Jd)
      }
      getHudSnapshot() {
        const dd = this.hudSnapshot,
          Jd = this.dailyReward.getHeldCoins();
        return null === dd || Jd <= 0 || !("hudPurseCoins" in dd) ? dd : {
          ...dd,
          hudPurseCoins: Math.max(0, dd.hudPurseCoins - Jd)
        }
      }
      receiveHud(dd) {
        this.hudSnapshot = dd, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(dd) {
        this.setMenuOpen(!0);
        const Jd = dd === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = dd;
        for (const kd of this.panels) kd === dd || Jd && kd === this.reachLog || kd.close();
        this.openingPanel = null
      }
      setTranslator(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Jd => this.resolveItemName(Jd, dd);
        this.quests.translateWithIcons = null !== kd && void 0 !== kd ? kd : null, this.navigation.setTranslator(dd, Jd), this.lampLight.setTranslator(dd, Jd), this.mailbox.setItemName(pd);
        for (const Nd of this.panels) Nd.setTranslator(dd, Jd, pd)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const dd of this.panels) dd.dispose()
      }
    }
    var qN = kd(1044),
      BN = kd.n(qN),
      sN = kd(22),
      iN = kd(36772),
      aN = kd(3247),
      MN = kd(1924),
      FN = kd(1904),
      YN = kd(9257),
      mN = kd(1211),
      bN = kd(1459),
      SN = kd(1103);

    function jN(dd) {
      let {
        controller: Jd,
        minimap: kd,
        children: pd
      } = dd;
      const Wd = (0, bN.i)(IN, Jd.getHudSnapshot()),
        [Pd, Zd] = (0, ad.useState)(Jd.skills.getSnapshot().overallLevel);
      (0, bN.h)(Pk, (dd => {
        Zd(dd.overallLevel)
      }));
      const gd = (0, ad.useRef)(null);
      (0, bN.h)(ck, (dd => {
        ! function(dd, Jd) {
          if (null === dd || "function" !== typeof dd.animate) return;
          const kd = Jd ? 1.35 : 1.15;
          dd.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${kd})`
          }, {
            transform: "scale(1)"
          }], {
            duration: Jd ? 320 : 160,
            easing: "ease-out"
          }), dd.classList.toggle("Receiving", !Jd), Jd && (dd.classList.remove("Shine"), dd.offsetWidth, dd.classList.add("Shine"))
        }(gd.current, dd)
      }));
      const {
        t: Cd
      } = (0, mN.B)(), {
        isTouchScreen: Kd
      } = (0, sN.j)(["isTouchScreen"]), [od, ld] = (0, ad.useState)(null);
      return (0, aN.i)(od, ".SkyblockRightHud"), null !== Wd || kd ? (0, SN.jsx)(iN.g, {
        placement: "topRight",
        children: (0, SN.jsxs)("div", {
          className: BN()("SkyblockRightHud", {
            TouchScreen: Kd
          }),
          children: [kd, null !== Wd && (0, SN.jsxs)("div", {
            ref: ld,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in Wd ? (0, SN.jsx)("div", {
              className: "SkyblockHudHelp",
              children: Wd.hudHelpText
            }) : (0, SN.jsxs)(SN.Fragment, {
              children: [(0, SN.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, SN.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, SN.jsx)("strong", {
                    style: {
                      color: Nd.M.cyanUiText
                    },
                    children: Cd(Wd.hudZoneNameKey)
                  }), null !== Pd && (0, SN.jsx)("span", {
                    style: {
                      color: Nd.M.goldUiText
                    },
                    children: Cd("skyblockGame:level", {
                      level: (0, YN.h)(Pd)
                    })
                  })]
                }), (0, SN.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: gd,
                  children: [(0, SN.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, SN.jsx)(MN.d, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, YN.h)(Wd.hudPurseCoins)]
                })]
              }), Wd.hudClockText.length > 0 && (0, SN.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, SN.jsx)(FN.c, {
                  text: Wd.hudClockText
                })
              })]
            }), pd, "hudZoneNameKey" in Wd && (0, SN.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function XN(dd) {
      let {
        icon: Jd
      } = dd;
      const kd = (0, ad.useCallback)((dd => {
        null === dd || void 0 === dd || dd.replaceChildren(uJ(Jd))
      }), [Jd]);
      return (0, SN.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: kd
      })
    }

    function fN(dd) {
      let {
        controller: Jd
      } = dd;
      const {
        t: kd
      } = (0, mN.B)();
      return (0, SN.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: Jd.display.mountPlayer,
        title: kd("skyblockGame:mapYouAreHere"),
        children: (0, SN.jsx)(XN, {
          icon: "player"
        })
      })
    }
    const nN = kd(38694),
      UN = Object.fromEntries(nN.keys().map((dd => [dd.replace(/^\.\/(.*)\.png$/, "$1"), nN(dd)])));

    function yN(dd, Jd) {
      var kd;
      return null !== (kd = UN[dd]) && void 0 !== kd ? kd : UN[Jd]
    }

    function DN(dd) {
      let {
        imageKey: Jd,
        fallbackImageKey: kd,
        geometryKey: pd,
        alt: Nd,
        className: Wd
      } = dd;
      const [Pd, Zd] = (0, ad.useState)((() => function(dd, Jd) {
        return [{
          id: 0,
          imageKey: dd,
          geometryKey: Jd,
          phase: "shown"
        }]
      }(Jd, pd))), gd = function(dd, Jd, kd) {
        const pd = dd[dd.length - 1];
        if (pd.imageKey === Jd && pd.geometryKey === kd) return dd;
        const Nd = {
          id: pd.id + 1,
          imageKey: Jd,
          geometryKey: kd,
          phase: "entering"
        };
        return pd.geometryKey === kd ? [{
          ...pd,
          phase: "leaving"
        }, Nd] : [Nd]
      }(Pd, Jd, pd);
      return gd !== Pd && Zd(gd), (0, SN.jsx)(SN.Fragment, {
        children: gd.map((dd => (0, SN.jsx)("img", {
          className: BN()("SkyblockMapTerrainImage", Wd, {
            Entering: "entering" === dd.phase,
            Leaving: "leaving" === dd.phase
          }),
          src: yN(dd.imageKey, kd),
          alt: "leaving" === dd.phase ? "" : Nd,
          onAnimationEnd: () => {
            Zd((Jd => function(dd, Jd) {
              return dd.flatMap((dd => dd.id !== Jd ? [dd] : "leaving" === dd.phase ? [] : [{
                ...dd,
                phase: "shown"
              }]))
            }(Jd, dd.id)))
          }
        }, dd.id)))
      })
    }
    var TN = kd(4389),
      EN = kd(1461);

    function cN(dd) {
      if ("Tab" !== dd.key) return;
      const Jd = Array.from(dd.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        kd = Jd.indexOf(document.activeElement);
      var pd;
      if (dd.shiftKey && kd <= 0) dd.preventDefault(), null === (pd = Jd.at(-1)) || void 0 === pd || pd.focus();
      else if (!dd.shiftKey && (-1 === kd || kd === Jd.length - 1)) {
        var Nd;
        dd.preventDefault(), null === (Nd = Jd[0]) || void 0 === Nd || Nd.focus()
      }
    }

    function hN() {
      const dd = (0, ad.useRef)(null);
      return (0, ad.useCallback)((Jd => {
        var kd;
        Jd ? (dd.current = document.activeElement, Jd.focus()) : null === (kd = dd.current) || void 0 === kd || kd.focus()
      }), [])
    }

    function rN(dd) {
      let {
        percent: Jd,
        label: kd,
        levelUpToken: pd,
        colour: Nd
      } = dd;
      return (0, SN.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": kd,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Jd,
        "aria-valuetext": kd,
        children: [(0, SN.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${Jd/100})`
          }
        }), null !== pd && void 0 !== pd && (0, SN.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": Nd
          }
        }, pd)]
      })
    }

    function uN(dd) {
      let {
        mount: Jd
      } = dd;
      return (0, SN.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: Jd,
        hidden: !0,
        children: (0, SN.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, SN.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, SN.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function tN(dd, Jd, kd, pd) {
      (0, ad.useLayoutEffect)((() => {
        const Nd = dd.current;
        if (!kd || null === Jd || void 0 === Jd || !Jd.local || !Nd) return;
        const Wd = Array.from(Nd.querySelectorAll(".SkyblockMapNode")),
          Pd = [...Jd.points, ...Jd.portals],
          Zd = () => {
            const dd = Nd.clientWidth,
              kd = Nd.clientHeight,
              Zd = Wd.map(((Nd, Wd) => {
                const Zd = Pd[Wd];
                return {
                  id: Zd.id,
                  portal: Wd >= Jd.points.length,
                  x: Zd.position[0] * dd / 100,
                  y: Zd.position[1] * kd / 100,
                  width: Nd.offsetWidth / pd,
                  height: Nd.offsetHeight / pd
                }
              })),
              gd = new Map(Pd.map(((dd, Jd) => [dd.id, Wd[Jd]])));
            for (const Jd of function(dd, Jd, kd) {
                const pd = [],
                  Nd = [...dd].sort(((dd, Jd) => Number(Jd.portal) - Number(dd.portal) || dd.id.localeCompare(Jd.id)));
                for (const Wd of Nd) {
                  const dd = dd => Math.max(Wd.width / 2, Math.min(Jd - Wd.width / 2, dd)),
                    Nd = dd => Math.max(Wd.height / 2, Math.min(kd - Wd.height / 2, dd)),
                    Pd = [dd(Wd.x)],
                    Zd = [Nd(Wd.y)];
                  for (const Jd of pd) Pd.push(dd(Jd.x - (Jd.width + Wd.width) / 2 - 4), dd(Jd.x + (Jd.width + Wd.width) / 2 + 4)), Zd.push(Nd(Jd.y - (Jd.height + Wd.height) / 2 - 4), Nd(Jd.y + (Jd.height + Wd.height) / 2 + 4));
                  let gd = {
                      ...Wd,
                      x: Pd[0],
                      y: Zd[0]
                    },
                    Cd = 1 / 0,
                    Kd = 1 / 0;
                  for (const Jd of new Set(Pd))
                    for (const dd of new Set(Zd)) {
                      let kd = 0;
                      for (const Pd of pd) kd += Math.max(0, (Wd.width + Pd.width) / 2 + 4 - Math.abs(Jd - Pd.x)) * Math.max(0, (Wd.height + Pd.height) / 2 + 4 - Math.abs(dd - Pd.y));
                      const Nd = (Jd - Wd.x) ** 2 + (dd - Wd.y) ** 2;
                      (kd < Cd || kd === Cd && Nd < Kd) && (gd = {
                        ...Wd,
                        x: Jd,
                        y: dd
                      }, Cd = kd, Kd = Nd)
                    }
                  pd.push(gd)
                }
                return pd
              }(Zd, dd, kd)) {
              const dd = gd.get(Jd.id);
              dd.style.left = `${Jd.x}px`, dd.style.top = `${Jd.y}px`
            }
          };
        Zd();
        const gd = new ResizeObserver(Zd);
        gd.observe(Nd);
        for (const dd of Wd) gd.observe(dd);
        return () => {
          gd.disconnect()
        }
      }), [dd, Jd, kd, pd])
    }
    const VN = {
        zoom: 1,
        x: 0,
        y: 0
      },
      zN = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function HN(dd, Jd, kd) {
      return Math.min(kd, Math.max(Jd, dd))
    }

    function wN(dd, Jd, kd) {
      const pd = Math.min(1, kd * Jd / dd),
        Nd = Math.min(1, dd / (kd * Jd));
      return {
        x0: (1 - pd) / 2,
        y0: (1 - Nd) / 2,
        x1: (1 + pd) / 2,
        y1: (1 + Nd) / 2
      }
    }

    function AN(dd, Jd, kd, pd) {
      const Nd = Jd * (pd - kd);
      if (Nd <= 1) return .5 - Jd * (kd + pd) / 2;
      const Wd = .45 * Math.min(1, Nd - 1);
      return HN(dd, 1 - Jd * pd - Wd, Wd - Jd * kd)
    }

    function dW(dd, Jd) {
      const kd = HN(dd.zoom, 1, 12);
      return {
        zoom: kd,
        x: AN(dd.x, kd, Jd.x0, Jd.x1),
        y: AN(dd.y, kd, Jd.y0, Jd.y1)
      }
    }

    function JW(dd, Jd, kd, pd) {
      let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : zN;
      const Wd = HN(dd.zoom * Jd, 1, 12),
        Pd = Wd / dd.zoom;
      return dW({
        zoom: Wd,
        x: kd - (kd - dd.x) * Pd,
        y: pd - (pd - dd.y) * Pd
      }, Nd)
    }

    function kW(dd, Jd, kd, pd) {
      const [Nd, Wd] = (0, ad.useState)(VN);
      (0, ad.useEffect)((() => {
        Wd(VN)
      }), [kd]), (0, ad.useEffect)((() => {
        const kd = dd.current;
        if (!Jd || !kd) return;
        const Nd = () => wN(kd.clientWidth, kd.clientHeight, pd),
          Pd = dd => {
            const Jd = kd.getBoundingClientRect();
            return {
              x: (dd.clientX - Jd.left) / Jd.width,
              y: (dd.clientY - Jd.top) / Jd.height
            }
          },
          Zd = new Map;
        let gd = {
            x: 0,
            y: 0
          },
          Cd = !1,
          Kd = 0;
        const od = dd => {
            dd.preventDefault();
            const Jd = dd.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * dd.deltaY : dd.deltaY,
              kd = Pd(dd);
            Wd((dd => JW(dd, Math.exp(.0015 * -Jd), kd.x, kd.y, Nd())))
          },
          ld = dd => {
            "mouse" === dd.pointerType && 0 !== dd.button || (Zd.set(dd.pointerId, Pd(dd)), 1 === Zd.size && (gd = {
              x: dd.clientX,
              y: dd.clientY
            }, Cd = !1), Kd = 0)
          },
          Qd = dd => {
            const Jd = Zd.get(dd.pointerId);
            if (!Jd) return;
            const pd = Pd(dd);
            if (Zd.set(dd.pointerId, pd), 2 === Zd.size) {
              const [dd, Jd] = [...Zd.values()], kd = Math.hypot(dd.x - Jd.x, dd.y - Jd.y);
              if (Kd > 0) {
                const pd = kd / Kd;
                Wd((kd => JW(kd, pd, (dd.x + Jd.x) / 2, (dd.y + Jd.y) / 2, Nd())))
              }
              return Kd = kd, void(Cd = !0)
            }!Cd && Math.hypot(dd.clientX - gd.x, dd.clientY - gd.y) < 4 || (Cd || (Cd = !0, kd.setPointerCapture(dd.pointerId)), Wd((dd => function(dd, Jd, kd) {
              let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zN;
              return dW({
                zoom: dd.zoom,
                x: dd.x + Jd,
                y: dd.y + kd
              }, pd)
            }(dd, pd.x - Jd.x, pd.y - Jd.y, Nd()))))
          },
          Ld = dd => {
            Zd.delete(dd.pointerId), Kd = 0
          },
          Od = dd => {
            Cd && (dd.stopPropagation(), dd.preventDefault(), Cd = !1)
          },
          ed = new ResizeObserver((() => {
            Wd((dd => dW(dd, Nd())))
          }));
        return ed.observe(kd), kd.addEventListener("wheel", od, {
          passive: !1
        }), kd.addEventListener("pointerdown", ld), kd.addEventListener("pointermove", Qd), kd.addEventListener("pointerup", Ld), kd.addEventListener("pointercancel", Ld), kd.addEventListener("click", Od, !0), () => {
          ed.disconnect(), kd.removeEventListener("wheel", od), kd.removeEventListener("pointerdown", ld), kd.removeEventListener("pointermove", Qd), kd.removeEventListener("pointerup", Ld), kd.removeEventListener("pointercancel", Ld), kd.removeEventListener("click", Od, !0)
        }
      }), [dd, Jd, kd, pd]);
      return {
        view: Nd,
        zoomBy: Jd => {
          const kd = dd.current;
          kd && Wd((dd => JW(dd, Jd, .5, .5, wN(kd.clientWidth, kd.clientHeight, pd))))
        }
      }
    }

    function pW(dd) {
      var Jd, kd, pd, Nd;
      let {
        controller: Wd,
        navigation: Pd
      } = dd;
      const Zd = (0, bN.i)(ld, Wd.getSnapshot()),
        {
          t: gd
        } = (0, mN.B)(),
        Cd = hN(),
        Kd = Zd.presentation,
        od = (0, ad.useRef)(null),
        Qd = (0, ad.useRef)(null),
        Ld = Boolean(Zd.open && (null === Kd || void 0 === Kd ? void 0 : Kd.local) && Kd.background),
        Od = kW(od, Ld, `${Zd.open}|${Zd.tab}|${null===Kd||void 0===Kd||null===(Jd=Kd.background)||void 0===Jd?void 0:Jd.geometryKey}`, null !== (kd = null === Kd || void 0 === Kd || null === (pd = Kd.background) || void 0 === pd ? void 0 : pd.ratio) && void 0 !== kd ? kd : 2);
      if (tN(Qd, Kd, Zd.open, Od.view.zoom), !Kd || !Zd.open) return null;
      const ed = Kd.local ? Kd.background : null,
        Rd = {
          "--map-ratio": String(null !== (Nd = null === ed || void 0 === ed ? void 0 : ed.ratio) && void 0 !== Nd ? Nd : 2),
          backgroundColor: null === ed || void 0 === ed ? void 0 : ed.colour
        },
        Id = {
          "--map-zoom": String(Od.view.zoom),
          transform: `translate(${100*Od.view.x}%, ${100*Od.view.y}%) scale(${Od.view.zoom})`
        };
      return (0, SN.jsx)(TN.e, {
        show: Zd.open,
        close: Wd.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, SN.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: Cd,
          onKeyDown: cN,
          children: [(0, SN.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, SN.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, SN.jsx)("h2", {
                id: "skyblockMapTitle",
                children: gd("skyblockGame:map")
              }), Kd.minimap && (0, SN.jsx)("p", {
                children: Kd.minimap.caption
              })]
            }), (0, SN.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((dd => (0, SN.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": dd === Zd.tab ? "true" : void 0,
                className: BN()({
                  Selected: dd === Zd.tab
                }),
                "aria-pressed": dd === Zd.tab,
                onClick: () => {
                  Wd.selectTab(dd)
                },
                children: gd("local" === dd ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, dd)))
            }), (0, SN.jsx)(EN.i, {
              padIgnore: !0,
              onClick: Wd.dismiss
            })]
          }), (0, SN.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, SN.jsxs)("div", {
              ref: od,
              className: BN()("SkyblockMapCanvas", {
                Local: Kd.local,
                Overview: !Kd.local,
                Zoomed: Od.view.zoom > 1
              }),
              style: Rd,
              children: [(0, SN.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: Ld ? Id : void 0,
                children: (0, SN.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: Qd,
                  children: [ed && (0, SN.jsx)(DN, {
                    className: "SkyblockMapTerrain",
                    imageKey: ed.imageKey,
                    fallbackImageKey: ed.fallbackImageKey,
                    geometryKey: ed.geometryKey,
                    alt: ed.label
                  }), Kd.local && (0, SN.jsx)(uN, {
                    mount: Pd.display.mountMapSearchArea
                  }), !Kd.local && (0, SN.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: Kd.connections.map((dd => (0, SN.jsx)("line", {
                      className: BN()({
                        Explored: dd.explored
                      }),
                      x1: dd.start[0],
                      y1: dd.start[1],
                      x2: dd.end[0],
                      y2: dd.end[1]
                    }, dd.id)))
                  }), Kd.points.map((dd => {
                    const Jd = !Kd.local && dd.thumbnail ? UN[dd.thumbnail] : void 0;
                    return (0, SN.jsxs)("div", {
                      className: BN()("SkyblockMapNode", {
                        Current: dd.current
                      }),
                      style: {
                        left: `${dd.position[0]}%`,
                        top: `${dd.position[1]}%`
                      },
                      children: [(0, SN.jsxs)(EN.d, {
                        className: BN()("SkyblockMapPin", {
                          Unknown: !dd.visited,
                          Current: dd.current
                        }),
                        disabled: Zd.pending,
                        onClick: () => {
                          Wd.travel(dd.travelKind, dd.travelId)
                        },
                        children: [Jd && (0, SN.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: Jd,
                          alt: ""
                        }), !Jd && (0, SN.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, SN.jsx)(XN, {
                            icon: dd.icon
                          })
                        }), (0, SN.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: dd.name
                        })]
                      }), dd.current && (0, SN.jsx)("span", {
                        className: BN()("SkyblockMapHereBadge", {
                          Above: dd.position[1] > 50
                        }),
                        children: gd("skyblockGame:mapYouAreHere")
                      })]
                    }, dd.id)
                  })), Kd.portals.map((dd => (0, SN.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${dd.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${dd.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, SN.jsxs)(EN.d, {
                      className: "SkyblockMapPin",
                      disabled: Zd.pending,
                      onClick: () => {
                        Wd.travel(dd.travelKind, dd.travelId)
                      },
                      children: [(0, SN.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: dd.colour
                        },
                        "aria-hidden": "true",
                        children: (0, SN.jsx)(XN, {
                          icon: dd.icon
                        })
                      }), (0, SN.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: dd.name
                      })]
                    })
                  }, dd.id))), Kd.local && (0, SN.jsx)(fN, {
                    controller: Pd
                  })]
                })
              }), Ld && (0, SN.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, SN.jsx)("button", {
                  type: "button",
                  "aria-label": gd("skyblockGame:mapZoomIn"),
                  disabled: Od.view.zoom >= 12,
                  onClick: () => {
                    Od.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, SN.jsx)("button", {
                  type: "button",
                  "aria-label": gd("skyblockGame:mapZoomOut"),
                  disabled: Od.view.zoom <= 1,
                  onClick: () => {
                    Od.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, SN.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: Zd.feedback
              })]
            })
          }), (0, SN.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [Kd.progress && (0, SN.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, SN.jsx)("span", {
                children: Kd.progress
              }), (0, SN.jsx)(rN, {
                percent: Kd.percent,
                label: Kd.progress
              })]
            }), Kd.noLandmarks && (0, SN.jsx)("span", {
              children: gd("skyblockGame:mapNoLandmarks")
            }), Kd.canTravel && (0, SN.jsx)("span", {
              className: "SkyblockMapHint",
              children: gd("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function NW(dd) {
      let {
        view: Jd,
        controller: kd,
        navigation: pd
      } = dd;
      const {
        t: Nd
      } = (0, mN.B)(), {
        isTouchScreen: Wd
      } = (0, sN.j)(["isTouchScreen"]);
      return (0, SN.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": Nd("skyblockGame:mapLocal"),
        children: [Wd && (0, SN.jsx)(EN.d, {
          className: "SkyblockMinimapOpen",
          onClick: kd.showLocal,
          children: Nd("skyblockGame:map")
        }), (0, SN.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: Jd.colour
          },
          children: [(0, SN.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: pd.display.mountTerrain,
            style: {
              width: Jd.width,
              height: Jd.height
            },
            children: [(0, SN.jsx)(DN, {
              imageKey: Jd.imageKey,
              fallbackImageKey: Jd.fallbackImageKey,
              geometryKey: Jd.geometryKey,
              alt: Jd.label
            }), (0, SN.jsx)(uN, {
              mount: pd.display.mountMinimapSearchArea
            }), Jd.markers.map((dd => (0, SN.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${dd.position[0]}%`,
                top: `${dd.position[1]}%`,
                color: dd.colour
              },
              title: dd.name,
              children: (0, SN.jsx)(XN, {
                icon: dd.icon
              })
            }, dd.id)))]
          }), (0, SN.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: Nd("skyblockGame:mapYouAreHere"),
            children: (0, SN.jsx)(XN, {
              icon: "player"
            })
          })]
        }), (0, SN.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: Jd.caption
        })]
      })
    }

    function WW(dd) {
      let {
        controller: Jd
      } = dd;
      return (0, SN.jsxs)("div", {
        className: "SkyblockCompass",
        ref: Jd.display.mountCompass,
        children: [(0, SN.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, SN.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, SN.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function PW(dd) {
      let {
        controller: Jd,
        surface: kd
      } = dd;
      const {
        t: pd
      } = (0, mN.B)(), Nd = (0, bN.i)(Pk, Jd.getSnapshot()), Wd = hN();
      return Nd.enabled ? (0, SN.jsxs)(SN.Fragment, {
        children: ["hud" === kd && (0, SN.jsx)(iN.g, {
          placement: "statBars",
          children: Nd.hud && (0, SN.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": Nd.hud.colour
            },
            children: [(0, SN.jsx)(rN, {
              percent: Nd.hud.skill.percent,
              label: Nd.hud.skill.xp,
              levelUpToken: Nd.hud.levelUpToken,
              colour: Nd.hud.colour
            }), (0, SN.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, SN.jsxs)("span", {
                children: [Nd.hud.skill.label, " \xb7 ", Nd.hud.skill.level]
              }), (0, SN.jsx)("span", {
                children: Nd.hud.gain
              })]
            })]
          })
        }), "hud" === kd && (0, SN.jsx)(iN.g, {
          children: Nd.hud && (0, SN.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, SN.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, SN.jsx)("strong", {
                children: Nd.hud.skill.label
              }), (0, SN.jsx)("span", {
                children: Nd.hud.gain
              })]
            }), (0, SN.jsx)(rN, {
              percent: Nd.hud.skill.percent,
              label: Nd.hud.skill.xp,
              levelUpToken: Nd.hud.levelUpToken,
              colour: Nd.hud.colour
            }), (0, SN.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, SN.jsx)("span", {
                children: Nd.hud.skill.level
              }), (0, SN.jsx)("span", {
                children: Nd.hud.skill.xp
              })]
            })]
          })
        }), "menu" === kd && (0, SN.jsx)(TN.e, {
          show: Nd.open,
          close: Jd.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, SN.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: Wd,
            onKeyDown: cN,
            children: [(0, SN.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, SN.jsxs)("div", {
                children: [(0, SN.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: pd("skyblockGame:skills")
                }), (0, SN.jsx)("p", {
                  children: pd("skyblockGame:skillsIntro")
                })]
              }), (0, SN.jsx)(EN.i, {
                padIgnore: !0,
                onClick: Jd.dismiss
              })]
            }), (0, SN.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, SN.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: Nd.skills.map((dd => (0, SN.jsxs)(EN.d, {
                  className: BN()("SkyblockSkillCard", {
                    Selected: dd.selected
                  }),
                  ariaPressed: dd.selected,
                  onClick: () => {
                    Jd.select(dd.id)
                  },
                  children: [(0, SN.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, SN.jsx)(MN.d, {
                      itemName: dd.icon,
                      amount: 0
                    })
                  }), (0, SN.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, SN.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, SN.jsx)("strong", {
                        children: dd.label
                      }), (0, SN.jsx)("span", {
                        children: dd.level
                      })]
                    }), (0, SN.jsx)(rN, {
                      percent: dd.percent,
                      label: `${dd.label}: ${dd.xp}`
                    }), (0, SN.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: dd.xp
                    })]
                  })]
                }, dd.id)))
              }), Nd.detail && (0, SN.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, SN.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, SN.jsx)(MN.d, {
                    itemName: Nd.detail.icon,
                    amount: 0
                  })
                }), (0, SN.jsx)("h3", {
                  children: Nd.detail.label
                }), (0, SN.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: Nd.detail.level
                }), (0, SN.jsx)("p", {
                  children: Nd.detail.description
                }), (0, SN.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, SN.jsx)("strong", {
                    children: pd("skyblockGame:currentBenefit")
                  }), (0, SN.jsx)("span", {
                    children: Nd.detail.benefit
                  })]
                }), (0, SN.jsx)(rN, {
                  percent: Nd.detail.percent,
                  label: Nd.detail.xp
                }), (0, SN.jsx)("p", {
                  children: Nd.detail.xp
                }), (0, SN.jsx)("h4", {
                  children: pd("skyblockGame:earnXp")
                }), (0, SN.jsx)("ul", {
                  children: Nd.detail.sources.map((dd => (0, SN.jsx)("li", {
                    children: dd
                  }, dd)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var ZW = kd(1384),
      gW = kd(4726),
      CW = kd(300);

    function KW(dd) {
      let {
        item: Jd
      } = dd;
      return (0, SN.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, SN.jsx)(MN.d, {
          itemName: Jd,
          amount: 0
        })
      })
    }

    function oW(dd) {
      let {
        name: Jd,
        percent: kd,
        progress: pd
      } = dd;
      return (0, SN.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, SN.jsx)(rN, {
          percent: kd,
          label: `${(0,CW.pb)(Jd)}: ${pd}`
        }), (0, SN.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: pd
        })]
      })
    }

    function lW(dd) {
      let {
        subquests: Jd,
        showDescriptions: kd = !1
      } = dd;
      return (0, SN.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: Jd.map((dd => {
          const Jd = kd && "completed" === dd.status,
            pd = (0, SN.jsxs)("li", {
              className: BN()("SkyblockQuestStep", dd.status, {
                JustFinished: dd.justFinished,
                JustUnlocked: dd.justUnlocked
              }),
              tabIndex: Jd ? 0 : void 0,
              children: [null !== dd.iconItem && (0, SN.jsx)(KW, {
                item: dd.iconItem
              }), null === dd.iconItem && (0, SN.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === dd.status ? "\u2713" : "skipped" === dd.status ? "\u2212" : "\u25cb"
              }), (0, SN.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, SN.jsx)("strong", {
                  children: (0, SN.jsx)(gW.b, {
                    text: dd.name
                  })
                }), kd && !Jd && (0, SN.jsx)("span", {
                  children: (0, SN.jsx)(gW.b, {
                    text: dd.description
                  })
                }), null !== dd.barPercent && (0, SN.jsx)(oW, {
                  name: dd.name,
                  percent: dd.barPercent,
                  progress: dd.progress
                }), null === dd.barPercent && !Jd && (0, SN.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: dd.statusLabel
                })]
              })]
            }, dd.id);
          return Jd ? (0, SN.jsx)(ZW.f, {
            delayShow: 200,
            tooltipInner: (0, SN.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, SN.jsx)("span", {
                children: (0, SN.jsx)(gW.b, {
                  text: dd.description
                })
              }), (0, SN.jsx)("strong", {
                children: dd.statusLabel
              })]
            }),
            children: pd
          }, dd.id) : pd
        }))
      })
    }

    function QW(dd) {
      let {
        quest: Jd,
        select: kd
      } = dd;
      const {
        t: pd
      } = (0, mN.B)(), Nd = Jd.focusStep;
      return (0, SN.jsxs)(EN.d, {
        className: BN()("SkyblockQuestCard", {
          Selected: Jd.selected,
          Tracked: Jd.tracked
        }),
        onClick: () => {
          kd(Jd.id)
        },
        children: [(0, SN.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, SN.jsx)("strong", {
            children: (0, SN.jsx)(gW.b, {
              text: Jd.name
            })
          }), Jd.tracked && (0, SN.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: pd("skyblockGame:currentQuest")
          })]
        }), Nd && (0, SN.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== Nd.iconItem && (0, SN.jsx)(KW, {
            item: Nd.iconItem
          }), (0, SN.jsx)(oW, {
            name: Nd.name,
            percent: Nd.barPercent,
            progress: Nd.progress
          })]
        }), (0, SN.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: Jd.progress
        })]
      })
    }

    function LW(dd) {
      let {
        controller: Jd,
        surface: kd
      } = dd;
      const pd = (0, bN.i)(Kk, Jd.getSnapshot()),
        {
          t: Nd
        } = (0, mN.B)(),
        Wd = hN();
      return pd.enabled ? (0, SN.jsxs)(SN.Fragment, {
        children: ["hud" === kd && (0, SN.jsx)(SN.Fragment, {
          children: pd.tracked && (0, SN.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: Ck,
            children: (0, SN.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [pd.trackedStepPulse > 0 && (0, SN.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, pd.trackedStepPulse), (0, SN.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: Nd("skyblockGame:currentQuest")
              }), (0, SN.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, SN.jsx)("strong", {
                  children: (0, SN.jsx)(gW.b, {
                    text: pd.tracked.name
                  })
                }), null !== pd.tracked.clock && (0, SN.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: pd.tracked.clock
                })]
              }), (0, SN.jsx)(lW, {
                subquests: pd.tracked.subquests
              })]
            })
          })
        }), "menu" === kd && (0, SN.jsx)(TN.e, {
          show: pd.open,
          close: Jd.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, SN.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: Wd,
            onKeyDown: cN,
            children: [(0, SN.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, SN.jsx)("div", {
                children: (0, SN.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: Nd("skyblockGame:quests")
                })
              }), (0, SN.jsx)(EN.i, {
                padIgnore: !0,
                onClick: Jd.dismiss
              })]
            }), (0, SN.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, SN.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, SN.jsx)("h3", {
                  children: Nd("skyblockGame:current")
                }), 0 === pd.active.length && (0, SN.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: Nd("skyblockGame:noActiveQuests")
                }), pd.active.map((dd => (0, SN.jsx)(QW, {
                  quest: dd,
                  select: Jd.select
                }, dd.id))), (0, SN.jsx)("h3", {
                  children: (0, SN.jsxs)("button", {
                    type: "button",
                    className: BN()("SkyblockQuestSectionToggle", {
                      Expanded: pd.completedExpanded
                    }),
                    "aria-expanded": pd.completedExpanded,
                    onClick: Jd.toggleCompleted,
                    children: [(0, SN.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), Nd("skyblockGame:completed"), (0, SN.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: pd.completed.length
                    })]
                  })
                }), pd.completedExpanded && 0 === pd.completed.length && (0, SN.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: Nd("skyblockGame:noCompletedQuests")
                }), pd.completedExpanded && pd.completed.map((dd => (0, SN.jsx)(QW, {
                  quest: dd,
                  select: Jd.select
                }, dd.id)))]
              }), pd.detail && (0, SN.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [pd.detail.completed && (0, SN.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: Nd("skyblockGame:completedQuest")
                }), (0, SN.jsx)("h3", {
                  children: (0, SN.jsx)(gW.b, {
                    text: pd.detail.name
                  })
                }), (0, SN.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, SN.jsx)(gW.b, {
                    text: pd.detail.description
                  })
                }), (0, SN.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [pd.detail.progress, null !== pd.detail.clock && (0, SN.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: pd.detail.clock
                  })]
                }), (0, SN.jsx)(lW, {
                  subquests: pd.detail.subquests,
                  showDescriptions: !0
                }), pd.detail.tracked && (0, SN.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: pd.detail.trackLabel
                }), !pd.detail.completed && !pd.detail.tracked && (0, SN.jsx)(EN.j, {
                  onClick: Jd.trackSelected,
                  disabled: !pd.detail.canTrack,
                  children: pd.detail.trackLabel
                }), pd.detail.canViewDialogue && (0, SN.jsx)(EN.d, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: Jd.viewDialogue,
                  children: Nd("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var OW = kd(1059),
      eW = kd(2502);

    function RW(dd, Jd, kd, pd, Nd) {
      const Wd = dd => "linear" === Nd ? dd : {
          vd: Nd,
          point: dd
        },
        Pd = {};
      for (const [Zd, gd] of pd)
        for (const [Jd, kd] of Object.entries(dd(Zd, gd, Wd))) Pd[Jd] ??= {
          timeline: []
        }, Pd[Jd].timeline.push(kd);
      return {
        Ld: Jd,
        loop: kd,
        Rd: Pd
      }
    }
    const IW = .547,
      GW = .022,
      vW = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      xW = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function qW(dd, Jd, kd) {
      const {
        drop: pd = 0,
        shift: Nd = 0,
        torso: Wd = 0,
        nod: Pd = 0,
        tilt: Zd = 0,
        legs: gd = [0, 0],
        arms: Cd = 0,
        spread: Kd = 0
      } = Jd, od = IW * Math.cos(Wd) - GW * Math.sin(Wd), ld = IW * Math.sin(Wd) + GW * Math.cos(Wd), Qd = kd([0, -pd, Nd]);
      return {
        LowerBody: {
          timeFraction: dd,
          position: Qd,
          rotation: kd([0, 0, 0])
        },
        UpperBody: {
          timeFraction: dd,
          position: Qd,
          rotation: kd([Wd, 0, Zd])
        },
        HeadMesh: {
          timeFraction: dd,
          position: kd([0, od - IW - pd, ld - GW + Nd]),
          rotation: kd([Wd + Pd, 0, Zd])
        },
        LegLeftMesh: {
          timeFraction: dd,
          rotation: kd([gd[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: dd,
          rotation: kd([gd[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: dd,
          rotation: kd([Cd, 0, Kd])
        },
        ArmRightMesh: {
          timeFraction: dd,
          rotation: kd([Cd, 0, -Kd])
        }
      }
    }

    function BW(dd, Jd, kd) {
      return RW(qW, dd, Jd, kd, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function sW(dd) {
      return "number" === typeof dd ? [dd, dd] : dd
    }

    function iW(dd, Jd, kd) {
      const {
        rise: pd = 0,
        shift: Nd = 0,
        torso: Wd = 0,
        twist: Pd = 0,
        tilt: Zd = 0,
        nod: gd = 0,
        cock: Cd = 0,
        arms: Kd = 0,
        spread: od = 0
      } = Jd, [ld, Qd] = sW(Kd), [Ld, Od] = sW(od);
      return {
        TorsoNode: {
          timeFraction: dd,
          position: kd([0, pd, Nd]),
          rotation: kd([Wd, Pd, Zd])
        },
        HeadMesh: {
          timeFraction: dd,
          rotation: kd([gd, 0, Cd])
        },
        ArmLeftMesh: {
          timeFraction: dd,
          rotation: kd([ld, 0, Ld])
        },
        ArmRightMesh: {
          timeFraction: dd,
          rotation: kd([Qd, 0, -Od])
        }
      }
    }
    const aW = [1.0625, -1, 0];

    function MW(dd) {
      return "number" === typeof dd ? [dd, dd] : dd
    }

    function FW(dd, Jd, kd) {
      const {
        drop: pd = 0,
        shift: Nd = 0,
        torso: Wd = 0,
        tilt: Pd = 0,
        nod: Zd = 0,
        cock: gd = 0,
        legs: Cd = [0, 0],
        arms: Kd = 0,
        spread: od = 0
      } = Jd, [ld, Qd] = MW(Kd), [Ld, Od] = MW(od), ed = -Wd, Rd = -Pd, [Id, Gd, vd] = function(dd, Jd) {
        const [kd, pd, Nd] = [-aW[0], aW[1], -aW[2]], Wd = kd * Math.cos(Jd) - pd * Math.sin(Jd), Pd = kd * Math.sin(Jd) + pd * Math.cos(Jd);
        return [Wd - kd, -(Pd * Math.cos(dd) - Nd * Math.sin(dd) - pd), Pd * Math.sin(dd) + Nd * Math.cos(dd) - Nd]
      }(ed, Rd), xd = kd([0, -pd, Nd]);
      return {
        TorsoNode: {
          timeFraction: dd,
          position: kd([Id, Gd - pd, vd + Nd]),
          rotation: kd([ed, 0, Rd])
        },
        HeadMesh: {
          timeFraction: dd,
          rotation: kd([-Zd, 0, -gd])
        },
        ArmLeftMesh: {
          timeFraction: dd,
          rotation: kd([-ld, 0, -Ld])
        },
        ArmRightMesh: {
          timeFraction: dd,
          rotation: kd([-Qd, 0, Od])
        },
        LegLeftMesh: {
          timeFraction: dd,
          position: xd,
          rotation: kd([-Cd[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: dd,
          position: xd,
          rotation: kd([-Cd[1], 0, 0])
        }
      }
    }
    var YW = kd(37329),
      mW = kd(38613),
      bW = kd(38776);

    function SW(dd, Jd, kd) {
      var pd, Nd;
      const Wd = function() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return dd + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - dd) * kd
        },
        [Pd, Zd] = null !== (pd = dd.legs) && void 0 !== pd ? pd : [0, 0],
        [gd, Cd] = null !== (Nd = Jd.legs) && void 0 !== Nd ? Nd : [0, 0];
      return {
        drop: Wd(dd.drop, Jd.drop),
        shift: Wd(dd.shift, Jd.shift),
        torso: Wd(dd.torso, Jd.torso),
        nod: Wd(dd.nod, Jd.nod),
        tilt: Wd(dd.tilt, Jd.tilt),
        legs: [Wd(Pd, gd), Wd(Zd, Cd)],
        arms: Wd(dd.arms, Jd.arms),
        spread: Wd(dd.spread, Jd.spread)
      }
    }
    const jW = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      XW = BW(4400, !0, [
        [0, jW],
        [.16, {
          ...jW,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, jW],
        [.44, {
          ...jW,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, SW(jW, vW, .7)],
        [.66, SW(jW, vW, .78)],
        [.74, SW(jW, xW, .65)],
        [.86, {
          ...jW,
          drop: .14
        }],
        [1, jW]
      ], "catmull-rom-spline"),
      fW = {
        ...jW,
        drop: .14,
        torso: .3,
        spread: .4
      },
      nW = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      UW = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      yW = {
        caveGolem: XW,
        magmaGolem: BW(3600, !0, [
          [0, fW],
          [.12, {
            ...fW,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...fW,
            tilt: -.08
          }],
          [.4, {
            ...fW,
            tilt: .06,
            drop: .11
          }],
          [.52, SW(fW, vW, .9)],
          [.62, SW(fW, xW, .8)],
          [.7, SW(fW, xW, .45)],
          [.78, SW(fW, xW, .85)],
          [.9, {
            ...fW,
            drop: .17
          }],
          [1, fW]
        ], "catmull-rom-spline"),
        frostWraith: function(dd, Jd, kd) {
          return RW(iW, dd, Jd, kd, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, nW],
          [.14, {
            ...nW,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...nW,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...nW,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...nW,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...nW,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...nW,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...nW,
            rise: .16,
            tilt: -.04
          }],
          [1, nW]
        ], "catmull-rom-spline"),
        tikiTerror: function(dd, Jd, kd) {
          return RW(FW, dd, Jd, kd, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, UW],
          [.16, {
            ...UW,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, UW],
          [.44, {
            ...UW,
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
            ...UW,
            drop: .1
          }],
          [1, UW]
        ], "catmull-rom-spline")
      },
      DW = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      TW = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      EW = Object.fromEntries(Object.entries(yW).map((dd => {
        let [Jd, kd] = dd;
        return [Jd, (0, bW.b)((0, YW.h)(kd), Jd)]
      })));

    function cW(dd) {
      const Jd = function(dd) {
        var Jd;
        const kd = (0, mW.d)(dd).poseRig;
        return null !== (Jd = TW[dd]) && void 0 !== Jd ? Jd : void 0 === kd ? null : DW[kd]
      }(dd);
      return null === Jd ? null : EW[Jd]
    }

    function hW(dd) {
      return {
        "--difficulty-colour": dd
      }
    }
    const rW = (0, ad.lazy)((() => (0, eW.d)(kd.e(193).then((() => kd(41485))), (dd => dd.MobPreview))));

    function uW(dd) {
      var Jd, kd, pd;
      let {
        picker: Nd,
        controller: Wd
      } = dd;
      const {
        t: Pd
      } = (0, mN.B)(), Zd = hN(), {
        page: gd
      } = Nd;
      return (0, SN.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: Zd,
        onKeyDown: dd => {
          "ArrowLeft" === dd.key ? (dd.preventDefault(), dd.stopPropagation(), Wd.previous()) : "ArrowRight" === dd.key ? (dd.preventDefault(), dd.stopPropagation(), Wd.next()) : cN(dd)
        },
        style: hW(gd.colour),
        children: [(0, SN.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, SN.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: Nd.dungeonName
          }), (0, SN.jsx)(EN.i, {
            padIgnore: !0,
            onClick: Wd.dismiss
          })]
        }), (0, SN.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, SN.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, SN.jsx)(EN.d, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !Nd.canPrevious,
              onClick: Wd.previous,
              children: (0, SN.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, SN.jsx)(OW.e, {
                  name: "angle-up"
                })
              })
            }), (0, SN.jsxs)("div", {
              className: BN()("SkyblockBossPickerBoss", {
                Locked: !gd.unlocked
              }),
              children: [null !== gd.bossMobType && (0, SN.jsx)(ad.Suspense, {
                fallback: (0, SN.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, SN.jsx)(rW, {
                  className: "SkyblockBossPickerModel",
                  mobType: gd.bossMobType,
                  variation: gd.bossMobVariation,
                  animation: null !== (Jd = cW(gd.bossMobType)) && void 0 !== Jd ? Jd : void 0
                })
              }), null === gd.bossMobType && (0, SN.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, SN.jsx)(EN.d, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !Nd.canNext,
              onClick: Wd.next,
              children: (0, SN.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, SN.jsx)(OW.e, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, SN.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, SN.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [gd.beaten && (0, SN.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), gd.label]
            }), (0, SN.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (kd = gd.bossName) && void 0 !== kd ? kd : "???"
            }), (0, SN.jsxs)("span", {
              className: BN()("SkyblockBossPickerRecord", {
                Locked: null !== gd.lockedHint
              }),
              children: [null !== gd.lockedHintHighlight && (0, SN.jsxs)(SN.Fragment, {
                children: [gd.lockedHintHighlight.before, (0, SN.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: hW(gd.lockedHintHighlight.colour),
                  children: [null !== gd.lockedHintHighlight.icon && (0, SN.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, SN.jsx)(MN.d, {
                      itemName: gd.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), gd.lockedHintHighlight.name]
                }), gd.lockedHintHighlight.after]
              }), null === gd.lockedHintHighlight && (null !== (pd = gd.lockedHint) && void 0 !== pd ? pd : gd.summary)]
            })]
          }), (0, SN.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: Nd.pages.map((dd => (0, SN.jsx)("span", {
              className: BN()("SkyblockBossPickerDot", {
                Current: dd.current,
                Locked: !dd.unlocked
              }),
              style: hW(dd.colour)
            }, dd.difficulty)))
          }), (0, SN.jsx)(EN.n, {
            className: "SkyblockBossPickerFight",
            disabled: !gd.unlocked,
            onClick: Wd.enter,
            children: Pd("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function tW(dd) {
      let {
        dungeon: Jd,
        select: kd
      } = dd;
      return (0, SN.jsxs)(EN.d, {
        className: BN()("SkyblockDungeonCard", {
          Selected: Jd.selected
        }),
        onClick: () => {
          kd(Jd.id)
        },
        children: [(0, SN.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, SN.jsx)("strong", {
            children: Jd.name
          }), (0, SN.jsx)("span", {
            children: Jd.beatenSummary
          })]
        }), (0, SN.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: Jd.difficulties.map((dd => (0, SN.jsxs)("span", {
            className: BN()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: dd.beaten
            }),
            style: hW(dd.colour),
            title: dd.summary,
            children: [dd.beaten && (0, SN.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), dd.label]
          }, dd.difficulty)))
        })]
      })
    }

    function VW(dd) {
      let {
        controller: Jd
      } = dd;
      const kd = (0, bN.i)(Ok, Jd.getSnapshot()),
        {
          t: pd
        } = (0, mN.B)(),
        Nd = hN();
      return kd.enabled ? (0, SN.jsxs)(TN.e, {
        show: kd.open,
        close: Jd.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [kd.picker && (0, SN.jsx)(uW, {
          picker: kd.picker,
          controller: Jd
        }), !kd.picker && (0, SN.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: Nd,
          onKeyDown: cN,
          children: [(0, SN.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, SN.jsxs)("div", {
              children: [(0, SN.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: pd("skyblockGame:dungeons")
              }), (0, SN.jsx)("p", {
                children: pd("skyblockGame:dungeonsIntro")
              })]
            }), (0, SN.jsx)(EN.i, {
              padIgnore: !0,
              onClick: Jd.dismiss
            })]
          }), (0, SN.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, SN.jsx)("div", {
              className: "SkyblockDungeonList",
              children: kd.dungeons.map((dd => (0, SN.jsx)(tW, {
                dungeon: dd,
                select: Jd.select
              }, dd.id)))
            }), kd.detail && (0, SN.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, SN.jsx)("h3", {
                children: kd.detail.name
              }), (0, SN.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: kd.detail.difficulties.map((dd => (0, SN.jsxs)("li", {
                  className: BN()("SkyblockDungeonRecord", {
                    Beaten: dd.beaten
                  }),
                  children: [(0, SN.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: hW(dd.colour),
                    children: [dd.beaten && (0, SN.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), dd.label]
                  }), (0, SN.jsx)("span", {
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

    function zW(dd) {
      let {
        collection: Jd,
        select: kd
      } = dd;
      return (0, SN.jsxs)(EN.d, {
        className: BN()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: Jd.selected,
          Locked: Jd.locked
        }),
        ariaPressed: Jd.selected,
        onClick: () => {
          kd(Jd.id)
        },
        children: [(0, SN.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, SN.jsx)(MN.d, {
            itemName: Jd.icon,
            amount: 0
          })
        }), (0, SN.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, SN.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, SN.jsx)("strong", {
              children: Jd.name
            }), (0, SN.jsx)("span", {
              children: Jd.tier
            })]
          }), (0, SN.jsx)(rN, {
            percent: Jd.percent,
            label: `${Jd.name}: ${Jd.progress}`
          }), (0, SN.jsx)("span", {
            className: "SkyblockSkillXp",
            children: Jd.progress
          })]
        })]
      })
    }

    function HW(dd) {
      let {
        collection: Jd
      } = dd;
      const {
        t: kd
      } = (0, mN.B)();
      return (0, SN.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, SN.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, SN.jsx)(MN.d, {
            itemName: Jd.icon,
            amount: 0
          })
        }), (0, SN.jsx)("h3", {
          children: Jd.name
        }), (0, SN.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: Jd.tier
        }), (0, SN.jsx)("p", {
          children: Jd.locked ? kd("skyblockGame:collectionLocked") : Jd.count
        }), null !== Jd.nextReward && (0, SN.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, SN.jsx)("strong", {
            children: kd("skyblockGame:collectionNextReward")
          }), (0, SN.jsx)("span", {
            children: Jd.nextReward
          })]
        }), (0, SN.jsx)(rN, {
          percent: Jd.percent,
          label: Jd.progress
        }), (0, SN.jsx)("p", {
          children: Jd.progress
        })]
      })
    }

    function wW(dd) {
      let {
        controller: Jd
      } = dd;
      const kd = (0, bN.i)(nk, Jd.getSnapshot()),
        {
          t: pd
        } = (0, mN.B)(),
        Nd = hN();
      return kd.enabled ? (0, SN.jsx)(TN.e, {
        show: kd.open,
        close: Jd.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, SN.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: Nd,
          onKeyDown: cN,
          children: [(0, SN.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, SN.jsxs)("div", {
              children: [(0, SN.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: pd("skyblockGame:collections")
              }), (0, SN.jsxs)("p", {
                children: [pd("skyblockGame:collectionsIntro"), " ", kd.tiersUnlocked]
              })]
            }), (0, SN.jsx)(EN.i, {
              padIgnore: !0,
              onClick: Jd.dismiss
            })]
          }), (0, SN.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: kd.categories.map((dd => (0, SN.jsxs)(EN.d, {
              className: BN()("SkyblockCollectionCategory", {
                Selected: dd.selected
              }),
              ariaPressed: dd.selected,
              padTabSelected: dd.selected,
              onClick: () => {
                Jd.selectCategory(dd.id)
              },
              children: [(0, SN.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, SN.jsx)(MN.d, {
                  itemName: dd.icon,
                  amount: 0
                })
              }), (0, SN.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, SN.jsx)("strong", {
                  children: dd.label
                }), (0, SN.jsx)("span", {
                  children: dd.tiers
                })]
              })]
            }, dd.id)))
          }), (0, SN.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, SN.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: kd.collections.map((dd => (0, SN.jsx)(zW, {
                collection: dd,
                select: Jd.select
              }, dd.id)))
            }), kd.detail && (0, SN.jsx)(HW, {
              collection: kd.detail
            })]
          })]
        })
      }) : null
    }
    const AW = ["completed", "active", "available", "locked"],
      dP = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function JP(dd) {
      let {
        controller: Jd
      } = dd;
      const kd = (0, bN.i)(zk, Jd.getSnapshot()),
        {
          t: pd
        } = (0, mN.B)(),
        Nd = hN();
      return kd.enabled ? (0, SN.jsx)(TN.e, {
        show: kd.open,
        close: Jd.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, SN.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: Nd,
          onKeyDown: cN,
          children: [(0, SN.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, SN.jsxs)("div", {
              children: [(0, SN.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: pd("skyblockDevQuests:title")
              }), (0, SN.jsx)("p", {
                children: pd("skyblockDevQuests:intro")
              })]
            }), (0, SN.jsx)(EN.i, {
              onClick: Jd.dismiss
            })]
          }), (0, SN.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [AW.map((dd => (0, SN.jsx)("span", {
              className: BN()("SkyblockQuestGraphLegendState", dd),
              children: pd(`skyblockDevQuests:state_${dd}`)
            }, dd))), dP.map((dd => (0, SN.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, SN.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, SN.jsx)("line", {
                  className: BN()("SkyblockQuestGraphEdge", dd),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), pd(`skyblockDevQuests:edge_${dd}`)]
            }, dd)))]
          }), (0, SN.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, SN.jsxs)("div", {
              className: BN()("SkyblockQuestGraphCanvas", {
                Planning: kd.planning
              }),
              style: {
                width: kd.width,
                height: kd.height
              },
              children: [(0, SN.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: kd.width,
                height: kd.height,
                "aria-hidden": "true",
                children: [(0, SN.jsx)("defs", {
                  children: (0, SN.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, SN.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), kd.edges.map((dd => (0, SN.jsx)("path", {
                  className: BN()("SkyblockQuestGraphEdge", dd.kind, {
                    InPlan: dd.inPlan
                  }),
                  d: dd.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, dd.key)))]
              }), kd.nodes.map((dd => (0, SN.jsxs)("button", {
                type: "button",
                className: BN()("SkyblockQuestGraphNode", dd.state, {
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
                  Jd.hover(dd.id)
                },
                onMouseLeave: () => {
                  Jd.hover(null)
                },
                onFocus: () => {
                  Jd.hover(dd.id)
                },
                onBlur: () => {
                  Jd.hover(null)
                },
                onClick: () => {
                  Jd.jump(dd.id)
                },
                children: [(0, SN.jsx)("strong", {
                  children: dd.name
                }), (0, SN.jsx)("span", {
                  children: dd.detail
                })]
              }, dd.id)))]
            })
          })]
        })
      }) : null
    }
    const kP = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      pP = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${Cp}ms`,
        "--forge-duration": "2150ms"
      },
      NP = Array.from({
        length: 18
      }, ((dd, Jd) => ({
        "--ember-left": `${(4+92*(.618034*Jd%1)).toFixed(1)}%`,
        "--ember-size": 3 + Jd % 3 * 2 + "px",
        "--ember-drift": 14 * (Jd % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*Jd%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*Jd%8).toFixed(2)}s`
      })));

    function WP(dd) {
      if (dd.style.removeProperty("--part-size"), null === dd.parentElement || "wrap" === getComputedStyle(dd.parentElement).flexWrap) return;
      const Jd = [...dd.children],
        kd = getComputedStyle(dd),
        pd = parseFloat(kd.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        Nd = (dd.clientHeight - parseFloat(kd.rowGap) * (Jd.length - 1)) / Jd.length,
        Wd = Jd.map((dd => {
          const Jd = getComputedStyle(dd),
            kd = dd.querySelector("h3"),
            Wd = dd.querySelector(".SkyblockForgeParts");
          if (null === kd || null === Wd) return pd;
          const Pd = Nd - parseFloat(Jd.paddingTop) - parseFloat(Jd.paddingBottom) - kd.offsetHeight - parseFloat(getComputedStyle(kd).marginBottom),
            Zd = parseFloat(getComputedStyle(Wd).columnGap),
            gd = Wd.children.length;
          let Cd = 0;
          for (let pd = 1; pd <= gd; pd++) {
            const dd = Math.ceil(gd / pd);
            Cd = Math.max(Cd, Math.min((Wd.clientWidth - Zd * (pd - 1)) / pd, (Pd - Zd * (dd - 1)) / dd))
          }
          return Cd
        }));
      dd.style.setProperty("--part-size", `${Math.floor(Math.max(pd,Math.min(...Wd)))}px`)
    }

    function PP(dd) {
      var Jd, kd, pd, Wd, Pd;
      let {
        controller: Zd
      } = dd;
      const gd = (0, bN.i)(ep, Zd.getSnapshot()),
        {
          t: Cd
        } = (0, mN.B)(),
        Kd = hN(),
        od = function() {
          const dd = (0, ad.useRef)(null),
            Jd = (0, ad.useRef)(null);
          return (0, ad.useLayoutEffect)((() => {
            null !== dd.current && WP(dd.current)
          })), (0, ad.useCallback)((kd => {
            var pd;
            null === (pd = Jd.current) || void 0 === pd || pd.disconnect(), Jd.current = null, dd.current = kd, null !== kd && (Jd.current = new ResizeObserver((() => {
              WP(kd)
            })), Jd.current.observe(kd))
          }), [])
        }(),
        ld = function(dd) {
          const Jd = (0, ad.useRef)(null);
          return (0, ad.useLayoutEffect)((() => {
            const dd = Jd.current;
            if (null !== dd) {
              dd.style.removeProperty("font-size");
              for (let Jd = 1.7; Jd > 1.1 && dd.scrollWidth > dd.clientWidth; Jd -= .1) dd.style.fontSize = Jd - .1 + "rem"
            }
          }), [dd]), (0, ad.useCallback)((dd => {
            Jd.current = dd
          }), [])
        }(null === (Jd = gd.preview) || void 0 === Jd ? void 0 : Jd.name),
        Qd = (0, ad.useRef)(null),
        Ld = (0, ad.useRef)({}),
        Od = gd.forging,
        ed = null !== (kd = null === Od || void 0 === Od ? void 0 : Od.preview.tier) && void 0 !== kd ? kd : 0,
        Rd = null !== (pd = null === Od || void 0 === Od ? void 0 : Od.preview.named) && void 0 !== pd && pd,
        Id = (0, ad.useMemo)((() => {
          return null === Od ? null : {
            flames: (dd = ed, Jd = Rd, Array.from({
              length: 26 + 6 * dd + (Jd ? 20 : 0)
            }, ((dd, Jd) => {
              const kd = Jd < 6,
                pd = Math.random() * Math.PI * 2,
                Nd = kd ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                Wd = Math.cos(pd) * Nd,
                Pd = Math.sin(pd) * Nd - 2 - 3 * Math.random(),
                Zd = Math.random(),
                [gd, Cd, Kd] = kd ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : Zd < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : Zd < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [Zd < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": gd,
                "--x0": `${(.15*Wd).toFixed(2)}rem`,
                "--y0": `${(.15*Pd).toFixed(2)}rem`,
                "--x": `${Wd.toFixed(2)}rem`,
                "--y": `${Pd.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${Cd.toFixed(2)}rem`,
                "--duration": `${Math.round(Kd)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: lp(ed, Rd)
          };
          var dd, Jd
        }), [null === Od || void 0 === Od ? void 0 : Od.id]);
      if (!gd.enabled) return null;
      const Gd = gd.preview,
        vd = gd.arriving,
        xd = null !== vd && !vd.sameSword,
        qd = null !== Gd && (0, SN.jsx)(MN.d, {
          itemName: Gd.baseSword,
          amount: 0,
          enchantmentTier: Gd.enchantmentTier
        });
      return (0, SN.jsx)(TN.e, {
        show: gd.open,
        close: Zd.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, SN.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: Kd,
          onKeyDown: cN,
          children: [(0, SN.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: NP.map(((dd, Jd) => (0, SN.jsx)("span", {
              style: dd
            }, Jd)))
          }), (0, SN.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, SN.jsxs)("div", {
              children: [(0, SN.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: Cd("skyblockGame:forgeTitle")
              }), (0, SN.jsx)("p", {
                children: Cd("skyblockGame:forgeIntro")
              })]
            }), (0, SN.jsx)(EN.i, {
              onClick: Zd.dismiss
            })]
          }), (0, SN.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, SN.jsx)("div", {
              ref: od,
              className: BN()("SkyblockForgeSlots", {
                Locked: null !== Od
              }),
              children: gd.slots.map((dd => (0, SN.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, SN.jsx)("h3", {
                  children: dd.label
                }), (0, SN.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: dd.parts.map((Jd => (0, SN.jsx)("button", {
                    type: "button",
                    className: BN()("SkyblockForgePart", {
                      Selected: Jd.selected,
                      Missing: Jd.placeholder
                    }),
                    disabled: Jd.placeholder,
                    title: Jd.placeholder ? Cd("skyblockGame:forgePickParts") : Jd.itemName,
                    "aria-pressed": Jd.selected,
                    onClick: () => {
                      Zd.select(dd.kind, Jd.material)
                    },
                    children: (0, SN.jsx)(MN.d, {
                      itemName: Jd.itemName,
                      amount: Jd.owned
                    })
                  }, Jd.material)))
                })]
              }, dd.kind)))
            }), (0, SN.jsxs)("div", {
              className: BN()("SkyblockForgeAnvil", {
                Named: null === Gd || void 0 === Gd ? void 0 : Gd.named
              }),
              style: {
                "--tier": null === Gd ? "transparent" : Nd.tb[Gd.enchantmentTier]
              },
              children: [(0, SN.jsxs)("div", {
                className: BN()("SkyblockForgeAltar", {
                  Forging: null !== Od
                }),
                style: null === Od ? void 0 : pP,
                children: [(0, SN.jsxs)("div", {
                  className: BN()("SkyblockForgeMount", {
                    Arrive: null !== vd
                  }),
                  children: [null === Gd && (0, SN.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, SN.jsx)(MN.d, {
                      itemName: gd.unformedSword,
                      amount: 0
                    })
                  }), null !== Gd && (0, SN.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== Gd && null === Od && (0, SN.jsx)("div", {
                    ref: Qd,
                    className: "SkyblockForgeFloat",
                    children: (0, SN.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: qd
                    })
                  }), null !== Gd && (0, SN.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: op.map(((dd, Jd) => (0, SN.jsx)("span", {
                      className: BN()({
                        Rune: "" !== dd.rune
                      }),
                      style: dd.style,
                      children: dd.rune
                    }, Jd)))
                  }), null !== Od && null !== Id && (0, SN.jsxs)(SN.Fragment, {
                    children: [(0, SN.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, SN.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: Id.flames.map(((dd, Jd) => (0, SN.jsx)("span", {
                        style: dd
                      }, Jd)))
                    }), (0, SN.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: Ld.current,
                      children: (0, SN.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: qd
                      })
                    }), (0, SN.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, SN.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (ed >= 4 || Rd) && (0, SN.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, SN.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: Id.sparks.map(((dd, Jd) => (0, SN.jsx)("span", {
                        style: dd
                      }, Jd)))
                    }), (0, SN.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, SN.jsx)("p", {
                  className: BN()("SkyblockForgeStatus", null === (Wd = gd.status) || void 0 === Wd ? void 0 : Wd.tone),
                  children: null === (Pd = gd.status) || void 0 === Pd ? void 0 : Pd.text
                })]
              }), null === Gd && (0, SN.jsx)("p", {
                className: BN()("SkyblockForgeName Waiting", {
                  ArriveText: xd
                }),
                children: Cd(gd.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== Gd && (0, SN.jsx)("h3", {
                ref: ld,
                className: BN()("SkyblockForgeName", {
                  ArriveText: xd
                }),
                title: Gd.name,
                children: Gd.name
              }), (null === Gd || void 0 === Gd ? void 0 : Gd.named) && (0, SN.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: Cd("skyblockGame:forgeSecret")
              }), (0, SN.jsxs)(EN.n, {
                className: "SkyblockForgeButton",
                disabled: !gd.canForge,
                title: null === Gd ? void 0 : Cd("skyblockGame:forgeCoalOwned", {
                  owned: String(gd.coalOwned)
                }),
                onClick: () => {
                  Ld.current = function(dd) {
                    const Jd = null === dd ? "none" : getComputedStyle(dd).transform,
                      kd = new DOMMatrixReadOnly("none" === Jd ? void 0 : Jd);
                    return {
                      "--settle-y": `${kd.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(kd.b,kd.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(Qd.current), Op(), Zd.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [Cd("skyblockGame:forgeButton"), null !== Gd && (0, SN.jsxs)("span", {
                  className: BN()("SkyblockForgeCost", {
                    Short: Gd.coalShort
                  }),
                  children: [(0, SN.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, SN.jsx)(MN.d, {
                      itemName: Jp.b,
                      amount: 0
                    })
                  }), Gd.coalCost]
                })]
              })]
            }), (0, SN.jsxs)("div", {
              className: BN()("SkyblockForgeDetails", {
                Named: null === Gd || void 0 === Gd ? void 0 : Gd.named
              }),
              children: [(0, SN.jsx)("p", {
                className: BN()("SkyblockForgeLore", {
                  ArriveText: xd
                }),
                title: null === Gd || void 0 === Gd ? void 0 : Gd.lore,
                children: null === Gd || void 0 === Gd ? void 0 : Gd.lore
              }), (0, SN.jsxs)("dl", {
                className: BN()("SkyblockForgeStats", {
                  ArriveText: xd
                }),
                children: [null === Gd && kP.map((dd => (0, SN.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, SN.jsx)("dt", {
                    children: Cd(dd)
                  }), (0, SN.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, dd))), null === Gd || void 0 === Gd ? void 0 : Gd.stats.map((dd => (0, SN.jsxs)("div", {
                  className: BN()("SkyblockForgeStat", {
                    Better: dd.better
                  }),
                  children: [(0, SN.jsx)("dt", {
                    children: dd.label
                  }), (0, SN.jsx)("dd", {
                    children: dd.value
                  })]
                }, dd.label)))]
              }), (0, SN.jsx)("ul", {
                className: BN()("SkyblockForgeEffects", {
                  ArriveText: xd
                }),
                children: null === Gd || void 0 === Gd ? void 0 : Gd.effects.map((dd => (0, SN.jsx)("li", {
                  children: dd
                }, dd)))
              })]
            })]
          })]
        })
      })
    }
    const ZP = "Doom Rivet",
      gP = "Doom Crest";

    function CP(dd) {
      let {
        itemName: Jd,
        amount: kd,
        owned: pd
      } = dd;
      return (0, SN.jsxs)("span", {
        className: BN()("SkyblockSmugglerPrice", {
          Short: kd > pd
        }),
        children: [(0, SN.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, SN.jsx)(MN.d, {
            itemName: Jd,
            amount: 0
          })
        }), (0, SN.jsx)("span", {
          children: kd
        })]
      })
    }

    function KP(dd) {
      return dd.justBought ? "skyblockGame:smugglerJustBought" : dd.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function oP(dd) {
      let {
        deal: Jd,
        view: kd,
        buy: pd
      } = dd;
      const {
        t: Nd
      } = (0, mN.B)();
      return (0, SN.jsxs)("div", {
        className: BN()("SkyblockSmugglerPocket", {
          Bought: Jd.justBought,
          Unaffordable: !Jd.affordable,
          SoldOut: Jd.soldOut && !Jd.justBought
        }),
        children: [(0, SN.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, SN.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, SN.jsx)(MN.d, {
            itemName: Jd.itemName,
            amount: 0,
            enchantmentTier: Jd.enchantmentTier
          }), Jd.amount > 1 && (0, SN.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: Nd("skyblockGame:smugglerAmount", {
              amount: Jd.amount
            })
          })]
        }), (0, SN.jsx)("h3", {
          children: Jd.displayName
        }), (0, SN.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, SN.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [Jd.rivets > 0 && (0, SN.jsx)(CP, {
              itemName: ZP,
              amount: Jd.rivets,
              owned: kd.rivetsOwned
            }), Jd.crests > 0 && (0, SN.jsx)(CP, {
              itemName: gP,
              amount: Jd.crests,
              owned: kd.crestsOwned
            })]
          }), (0, SN.jsx)(EN.d, {
            className: "SkyblockSmugglerBuy",
            disabled: Jd.soldOut || !Jd.affordable || kd.pending,
            onClick: () => {
              pd(Jd.slot)
            },
            children: Nd(KP(Jd))
          })]
        })]
      }, Jd.justBought ? kd.boughtCount : 0)
    }

    function lP(dd) {
      let {
        controller: Jd
      } = dd;
      const kd = (0, bN.i)(Gp, Jd.getSnapshot()),
        {
          t: pd
        } = (0, mN.B)(),
        Nd = hN();
      return kd.enabled ? (0, SN.jsx)(TN.e, {
        show: kd.open,
        close: Jd.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, SN.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: Nd,
          onKeyDown: cN,
          children: [(0, SN.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, SN.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, SN.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, SN.jsxs)("div", {
              children: [(0, SN.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: pd("skyblockGame:smugglerTitle")
              }), (0, SN.jsx)("p", {
                children: pd("skyblockGame:smugglerIntro")
              })]
            }), (0, SN.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, SN.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, SN.jsx)(CP, {
                  itemName: ZP,
                  amount: kd.rivetsOwned,
                  owned: kd.rivetsOwned
                }), (0, SN.jsx)(CP, {
                  itemName: gP,
                  amount: kd.crestsOwned,
                  owned: kd.crestsOwned
                })]
              }), (0, SN.jsx)(EN.i, {
                onClick: Jd.dismiss
              })]
            })]
          }), (0, SN.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: kd.deals.map((dd => (0, SN.jsx)(oP, {
              deal: dd,
              view: kd,
              buy: Jd.buy
            }, dd.slot)))
          }), (0, SN.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, SN.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: kd.rotatesText
            }), null !== kd.status && (0, SN.jsx)("span", {
              className: BN()("SkyblockSmugglerStatus", kd.status.tone),
              children: kd.status.text
            })]
          })]
        })
      }) : null
    }

    function QP(dd) {
      let {
        phase: Jd,
        className: kd
      } = dd;
      return (0, SN.jsx)("span", {
        className: BN()("SkyblockMoon", `Moon-${Jd}`, kd),
        "aria-hidden": "true"
      })
    }

    function LP(dd) {
      let {
        controller: Jd
      } = dd;
      const kd = (0, bN.i)(qp, Jd.getSnapshot()),
        {
          t: pd
        } = (0, mN.B)();
      return kd.enabled ? (0, SN.jsx)(iN.g, {
        placement: "statBars",
        children: (0, SN.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: BN()("SkyblockPassageChip", kd.open && "Open"),
          "aria-label": pd("skyblockGame:passageChipLabel", {
            phase: kd.phaseName
          }),
          title: pd("skyblockGame:passageChipLabel", {
            phase: kd.phaseName
          }),
          onMouseDown: dd => {
            dd.preventDefault()
          },
          onClick: Jd.toggle,
          children: (0, SN.jsx)(QP, {
            phase: kd.phase
          }, kd.phase)
        })
      }) : null
    }

    function OP(dd) {
      let {
        fish: Jd
      } = dd;
      return (0, SN.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, SN.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, SN.jsx)(MN.d, {
            itemName: Jd.itemName,
            amount: 0
          })
        }), (0, SN.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, SN.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: Jd.displayName
          }), (0, SN.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: Jd.where
          })]
        })]
      })
    }

    function eP(dd) {
      let {
        controller: Jd
      } = dd;
      const kd = (0, bN.i)(qp, Jd.getSnapshot()),
        {
          t: pd
        } = (0, mN.B)(),
        Nd = hN();
      return kd.enabled ? (0, SN.jsx)(TN.e, {
        show: kd.open,
        close: Jd.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, SN.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: Nd,
          onKeyDown: cN,
          children: [(0, SN.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, SN.jsx)(QP, {
              phase: kd.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, SN.jsxs)("div", {
              children: [(0, SN.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: pd("skyblockGame:passageTitle")
              }), (0, SN.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: kd.phaseName
              })]
            }), (0, SN.jsx)(EN.i, {
              padIgnore: !0,
              onClick: Jd.dismiss
            })]
          }), (0, SN.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: pd("skyblockGame:passageIntro")
          }), (0, SN.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, SN.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, SN.jsx)("h3", {
                children: pd("skyblockGame:passageVisiting")
              }), (0, SN.jsx)("ul", {
                className: "SkyblockPassageList",
                children: kd.visitors.map((dd => (0, SN.jsx)(OP, {
                  fish: dd
                }, dd.itemName)))
              })]
            }), (0, SN.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== kd.resting && (0, SN.jsxs)(SN.Fragment, {
                children: [(0, SN.jsx)("h3", {
                  children: pd("skyblockGame:passageResting")
                }), (0, SN.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, SN.jsx)(OP, {
                    fish: kd.resting
                  })
                })]
              }), (0, SN.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, SN.jsx)(QP, {
                  phase: kd.nextPhase
                }), (0, SN.jsx)("span", {
                  children: kd.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function RP() {
      return (0, SN.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((dd => (0, SN.jsx)("i", {
          style: {
            "--sparkle-index": dd
          }
        }, dd)))
      })
    }

    function IP(dd) {
      var Jd;
      let {
        charm: kd,
        view: pd,
        controller: Nd
      } = dd;
      const {
        t: Wd
      } = (0, mN.B)(), Pd = pd.shop, Zd = (null === (Jd = pd.sparkle) || void 0 === Jd ? void 0 : Jd.id) === kd.id;
      return (0, SN.jsxs)("li", {
        className: BN()("SkyblockLampLightCharm", kd.owned && "Owned", kd.socketed && "Socketed"),
        children: [Zd && (0, SN.jsx)(RP, {}, pd.sparkle.count), (0, SN.jsx)("h4", {
          children: kd.name
        }), (0, SN.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: kd.effect
        }), (0, SN.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: kd.lines.map((dd => (0, SN.jsxs)("li", {
            className: BN()("SkyblockLampLightOddsLine", "better" === dd.tone ? "Better" : "worse" === dd.tone ? "Worse" : "Same"),
            children: [(0, SN.jsx)("span", {
              className: "Before",
              children: dd.before
            }), (0, SN.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, SN.jsx)("span", {
              className: "After",
              children: dd.after
            })]
          }, dd.label)))
        }), (0, SN.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: kd.owned ? kd.socketed ? (0, SN.jsxs)(SN.Fragment, {
            children: [(0, SN.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: Wd("skyblockGame:lampLightSocketed")
            }), (0, SN.jsx)(EN.G, {
              disabled: !pd.canCommand,
              ariaLabel: Wd("skyblockGame:lampLightRemoveLabel", {
                charm: kd.name
              }),
              onClick: () => {
                Nd.socket(null)
              },
              children: Wd("skyblockGame:lampLightRemove")
            })]
          }) : (0, SN.jsx)(EN.d, {
            disabled: !pd.canCommand || !Pd.heldRod,
            ariaLabel: Wd("skyblockGame:lampLightSocketLabel", {
              charm: kd.name
            }),
            onClick: () => {
              Nd.socket(kd.id)
            },
            children: Wd("skyblockGame:lampLightSocket")
          }) : (0, SN.jsx)(EN.d, {
            disabled: !pd.canCommand || !kd.affordable,
            ariaLabel: Wd("skyblockGame:lampLightBuyLabel", {
              item: kd.name,
              cost: kd.cost
            }),
            onClick: () => {
              Nd.buy(kd.id)
            },
            children: kd.cost
          })
        })]
      })
    }

    function GP(dd) {
      var Jd;
      let {
        tint: kd,
        view: pd,
        controller: Nd
      } = dd;
      const {
        t: Wd
      } = (0, mN.B)();
      return (0, SN.jsxs)("li", {
        className: BN()("SkyblockLampLightTint", kd.wearing && "Wearing"),
        style: {
          "--tint-colour": kd.colour
        },
        children: [(null === (Jd = pd.sparkle) || void 0 === Jd ? void 0 : Jd.id) === kd.id && (0, SN.jsx)(RP, {}, pd.sparkle.count), (0, SN.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, SN.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: kd.name
        }), kd.wearing ? (0, SN.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: Wd("skyblockGame:lampLightWearing")
        }) : (0, SN.jsx)(EN.d, {
          disabled: !pd.canCommand || !kd.owned && !kd.affordable,
          ariaLabel: kd.owned ? Wd("skyblockGame:lampLightWearLabel", {
            tint: kd.name
          }) : Wd("skyblockGame:lampLightBuyLabel", {
            item: kd.name,
            cost: kd.cost
          }),
          onClick: () => {
            kd.owned ? Nd.wearTint(kd.id) : Nd.buy(kd.id)
          },
          children: kd.owned ? Wd("skyblockGame:lampLightWear") : kd.cost
        })]
      })
    }

    function vP(dd) {
      let {
        controller: Jd
      } = dd;
      const kd = (0, bN.i)(np, Jd.getSnapshot()),
        {
          t: pd
        } = (0, mN.B)(),
        Nd = kd.shop;
      return (0, SN.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, SN.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, SN.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: kd.balance
          }), (0, SN.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": kd.releasing,
            className: BN()("SkyblockLampLightSwitch", kd.releasing && "On"),
            disabled: kd.releasing ? "ready" !== kd.status : !kd.canCommand,
            onClick: () => {
              Jd.setRelease(!kd.releasing)
            },
            children: [(0, SN.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, SN.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), pd("skyblockGame:lampLightRelease")]
          }), (0, SN.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: pd("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== kd.notice && (0, SN.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: kd.notice
        }), null !== Nd && (0, SN.jsxs)(SN.Fragment, {
          children: [(0, SN.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, SN.jsx)("h3", {
              children: pd("skyblockGame:lampLightCharms")
            }), (0, SN.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: Nd.oddsFor
            }), (0, SN.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((dd => (0, SN.jsx)("button", {
                type: "button",
                "aria-pressed": kd.situation === dd,
                className: BN()("SkyblockLampLightSituation", kd.situation === dd && "Selected"),
                onClick: () => {
                  Jd.setSituation(dd)
                },
                children: pd("open" === dd ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, dd)))
            })]
          }), !Nd.heldRod && (0, SN.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: pd("skyblockGame:lampLightHoldRod")
          }), (0, SN.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: Nd.charms.map((dd => (0, SN.jsx)(IP, {
              charm: dd,
              view: kd,
              controller: Jd
            }, dd.id)))
          }), (0, SN.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, SN.jsx)("h3", {
              children: pd("skyblockGame:lampLightTints")
            })
          }), (0, SN.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, SN.jsxs)("li", {
              className: BN()("SkyblockLampLightTint", "Islands", Nd.wearingIslandColours && "Wearing"),
              children: [(0, SN.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, SN.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: pd("skyblockGame:lampLightIslandColours")
              }), Nd.wearingIslandColours ? (0, SN.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: pd("skyblockGame:lampLightWearing")
              }) : (0, SN.jsx)(EN.d, {
                disabled: !kd.canCommand,
                ariaLabel: pd("skyblockGame:lampLightWearLabel", {
                  tint: pd("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  Jd.wearTint(null)
                },
                children: pd("skyblockGame:lampLightWear")
              })]
            }), Nd.tints.map((dd => (0, SN.jsx)(GP, {
              tint: dd,
              view: kd,
              controller: Jd
            }, dd.id)))]
          })]
        })]
      })
    }

    function xP(dd) {
      let {
        controller: Jd
      } = dd;
      const kd = (0, bN.i)(np, Jd.getSnapshot()),
        {
          t: pd
        } = (0, mN.B)();
      return kd.releasing ? (0, SN.jsx)(iN.g, {
        children: (0, SN.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            Jd.setRelease(!1)
          },
          children: [(0, SN.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, SN.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [pd("skyblockGame:lampLightReleasing"), " \xb7 ", kd.balance]
          }), (0, SN.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: pd("skyblockGame:lampLightKeepCatches")
          }), null !== kd.gained && (0, SN.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: kd.gained.text
          }, kd.gained.count)]
        })
      }) : null
    }

    function qP(dd) {
      let {
        island: Jd,
        view: kd,
        aim: pd
      } = dd;
      const {
        t: Nd
      } = (0, mN.B)(), Wd = Jd.featuredFish;
      return (0, SN.jsxs)("li", {
        className: BN()("SkyblockKeepersChairIsland", `Island-${Jd.id}`, Jd.favoured && "Aimed", !Jd.relit && "Dark"),
        children: [(0, SN.jsx)("h3", {
          children: Jd.name
        }), Jd.relit && null !== Wd ? (0, SN.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, SN.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: Nd("skyblockGame:keepersChairTideNotice")
          }), (0, SN.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, SN.jsx)(MN.d, {
              itemName: Wd.itemName,
              amount: 0
            })
          }), (0, SN.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: Wd.displayName
          })]
        }) : (0, SN.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, SN.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: Nd("skyblockGame:keepersChairDark")
          })
        }), Jd.relit && (Jd.favoured ? (0, SN.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: Nd("skyblockGame:keepersChairAimed")
        }) : (0, SN.jsx)(EN.d, {
          className: "SkyblockKeepersChairAim",
          disabled: !kd.canAim,
          ariaLabel: Nd("skyblockGame:keepersChairAimLabel", {
            island: Jd.name
          }),
          onClick: () => {
            pd(Jd.id)
          },
          children: Nd("skyblockGame:keepersChairAim")
        }))]
      }, Jd.favoured ? kd.aimedCount : 0)
    }

    function BP(dd) {
      let {
        controller: Jd,
        lampLight: kd
      } = dd;
      const pd = (0, bN.i)(Fp, Jd.getSnapshot()),
        Nd = (0, bN.i)(np, kd.getSnapshot()),
        [Wd, Pd] = (0, ad.useState)("lamp"),
        {
          t: Zd
        } = (0, mN.B)(),
        gd = hN();
      if (!pd.enabled) return null;
      const Cd = "light" === Wd && Nd.enabled;
      return (0, SN.jsx)(TN.e, {
        show: pd.open,
        close: Jd.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, SN.jsxs)("section", {
          className: BN()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", Cd && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: gd,
          onKeyDown: cN,
          children: [(0, SN.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, SN.jsxs)("div", {
              children: [(0, SN.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: Zd("skyblockGame:keepersChairTitle")
              }), (0, SN.jsx)("p", {
                children: Zd(Cd ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, SN.jsx)(EN.i, {
              padIgnore: !0,
              ariaLabel: Zd("skyblockGame:keepersChairClose"),
              onClick: Jd.dismiss
            })]
          }), Nd.enabled && (0, SN.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((dd => (0, SN.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === dd === Cd,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === dd === Cd ? "true" : void 0,
              className: BN()("SkyblockKeepersChairTab", "light" === dd === Cd && "Selected"),
              onClick: () => {
                Pd(dd)
              },
              children: [Zd("lamp" === dd ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === dd && (0, SN.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: Nd.balance
              })]
            }, dd)))
          }), Cd ? (0, SN.jsx)(vP, {
            controller: kd
          }) : (0, SN.jsx)(sP, {
            view: pd,
            controller: Jd
          })]
        })
      })
    }

    function sP(dd) {
      let {
        view: Jd,
        controller: kd
      } = dd;
      const {
        t: pd
      } = (0, mN.B)();
      return (0, SN.jsxs)(SN.Fragment, {
        children: [(0, SN.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: Jd.islands.map((dd => (0, SN.jsx)(qP, {
            island: dd,
            view: Jd,
            aim: kd.aim
          }, dd.id)))
        }), null !== Jd.almanac && (0, SN.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, SN.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: pd("skyblockGame:passageTitle")
          }), (0, SN.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, SN.jsx)(QP, {
              phase: Jd.almanac.phase
            }), Jd.almanac.phaseName]
          }), (0, SN.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, SN.jsx)(QP, {
              phase: Jd.almanac.nextPhase
            }), Jd.almanac.next]
          })]
        }), (0, SN.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, SN.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: pd("skyblockGame:keepersChairFavour")
          }), Jd.aimed && (0, SN.jsx)(EN.G, {
            className: "SkyblockKeepersChairRest",
            disabled: !Jd.canAim,
            onClick: () => {
              kd.aim(null)
            },
            children: pd("skyblockGame:keepersChairRest")
          })]
        }), null !== Jd.status && (0, SN.jsx)("p", {
          className: BN()("SkyblockKeepersChairStatus", "refused" === Jd.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: Jd.status.text
        })]
      })
    }

    function iP(dd) {
      let {
        controller: Jd
      } = dd;
      const {
        t: kd
      } = (0, mN.B)(), pd = (0, bN.i)(mp, Jd.getSnapshot());
      if (!pd.enabled) return null;
      const Nd = pd.freshCount > 0 ? kd("skyblockGame:reachLogOpenNews", {
        count: pd.freshCount
      }) : kd("skyblockGame:reachLogOpen");
      return (0, SN.jsx)(iN.g, {
        placement: "statBars",
        children: (0, SN.jsxs)("button", {
          type: "button",
          className: BN()("SkyblockReachLogButton", pd.freshCount > 0 && "HasNews", pd.pending && "Pending"),
          "aria-label": Nd,
          title: Nd,
          onClick: Jd.ask,
          children: [pd.news && (0, SN.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${pd.newsToken}`), (0, SN.jsx)("span", {
            className: BN()("SkyblockReachLogIcon", pd.news && "Jump"),
            "aria-hidden": "true",
            children: (0, SN.jsx)(MN.d, {
              itemName: Sp,
              amount: 0
            })
          }, `icon:${pd.newsToken}`), pd.freshCount > 0 && (0, SN.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: pd.freshCount
          })]
        })
      })
    }

    function aP(dd) {
      let {
        gift: Jd
      } = dd;
      return (0, SN.jsx)("li", {
        className: BN()("SkyblockRegularsGift", Jd.given && "Given"),
        children: Jd.text
      })
    }

    function MP(dd) {
      let {
        regular: Jd
      } = dd;
      const {
        t: kd
      } = (0, mN.B)();
      return (0, SN.jsxs)("li", {
        className: BN()("SkyblockRegularsCard", Jd.tagged ? "Tagged" : "Untagged", Jd.resting && "Resting"),
        children: [(0, SN.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, SN.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: Jd.fishName,
            children: (0, SN.jsx)(MN.d, {
              itemName: Jd.itemName,
              amount: 0
            })
          }), (0, SN.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, SN.jsx)("h3", {
              children: Jd.name
            }), (0, SN.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: Jd.fishName
            })]
          })]
        }), (0, SN.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: Jd.line
        }), (0, SN.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, SN.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: Jd.size
          }), Jd.tagged && (0, SN.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: Jd.resting ? kd("skyblockGame:regularsResting") : Jd.meetings
          })]
        }), (0, SN.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: Jd.chance
        }), (0, SN.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: Jd.gifts.map((dd => (0, SN.jsx)(aP, {
            gift: dd
          }, dd.text)))
        }), Jd.history.length > 0 && (0, SN.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: Jd.history.map(((dd, Jd) => (0, SN.jsx)("li", {
            children: dd
          }, Jd)))
        })]
      })
    }

    function FP(dd) {
      let {
        controller: Jd,
        island: kd
      } = dd;
      const {
        t: pd
      } = (0, mN.B)(), Nd = (0, bN.i)(pN, Jd.getSnapshot()), Wd = Nd.islands.find((dd => dd.id === kd));
      if (!Nd.enabled || void 0 === Wd) return null;
      const Pd = pd("skyblockGame:regularsOpen");
      return (0, SN.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": Pd,
        title: Pd,
        onClick: () => {
          Jd.openIsland(kd)
        },
        children: [(0, SN.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: pd("skyblockGame:regularsTitle")
        }), Wd.regulars.map((dd => (0, SN.jsx)("span", {
          className: BN()("SkyblockRegularsStripIcon", dd.tagged && "Tagged"),
          title: dd.name,
          children: (0, SN.jsx)(MN.d, {
            itemName: dd.itemName,
            amount: 0
          })
        }, dd.id)))]
      })
    }

    function YP(dd) {
      var Jd;
      let {
        controller: kd
      } = dd;
      const pd = (0, bN.i)(pN, kd.getSnapshot()),
        {
          t: Nd
        } = (0, mN.B)(),
        Wd = hN();
      if (!pd.enabled) return null;
      const Pd = null !== (Jd = pd.islands.find((dd => dd.id === pd.selected))) && void 0 !== Jd ? Jd : null;
      return (0, SN.jsx)(TN.e, {
        show: pd.open,
        close: kd.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, SN.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: Wd,
          onKeyDown: cN,
          children: [(0, SN.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, SN.jsxs)("div", {
              children: [(0, SN.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: Nd("skyblockGame:regularsTitle")
              }), (0, SN.jsx)("p", {
                children: Nd("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, SN.jsx)(EN.i, {
              padIgnore: !0,
              onClick: kd.dismiss
            })]
          }), (0, SN.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: pd.islands.map((dd => {
              const Jd = dd.id === pd.selected;
              return (0, SN.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": Jd,
                "data-pad-tab": !0,
                "data-pad-selected": Jd ? "true" : void 0,
                className: BN()("SkyblockReachLogTab", `Island-${dd.id}`, Jd && "Selected", dd.charm.given && "GoldPage"),
                onClick: () => {
                  kd.selectIsland(dd.id)
                },
                children: (0, SN.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: dd.name
                })
              }, dd.id)
            }))
          }), (0, SN.jsxs)("div", {
            className: BN()("SkyblockRegularsPage", null !== Pd && `Island-${Pd.id}`),
            role: "tabpanel",
            children: [(0, SN.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: Nd("skyblockGame:regularsHow")
            }), null !== Pd && (0, SN.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: Pd.regulars.map((dd => (0, SN.jsx)(MP, {
                regular: dd
              }, dd.id)))
            })]
          }), null !== Pd && (0, SN.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, SN.jsx)("span", {
              className: BN()("SkyblockRegularsCharm", Pd.charm.given && "Given"),
              children: Pd.charm.text
            })
          })]
        })
      })
    }
    const mP = [{
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
      bP = Array.from({
        length: 6
      }, ((dd, Jd) => ({
        "--x": `${(88*(.618034*Jd%1)).toFixed(1)}%`,
        "--y": `${(10+37*Jd%70).toFixed(1)}%`,
        "--size": 7 + Jd % 3 * 3 + "rem",
        "--drift-x": 3 * (Jd % 3 - 1) + "rem",
        "--drift-y": 2 * (Jd % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + Jd % 4 * 3 + "s",
        "--delay": 2.5 * -Jd + "s"
      }))),
      SP = Array.from({
        length: 14
      }, ((dd, Jd) => ({
        "--left": `${(3+94*((.618034*Jd+.3)%1)).toFixed(1)}%`,
        "--size": 4 + Jd % 4 * 2 + "px",
        "--sway": Jd % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*Jd%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*Jd%12).toFixed(2)}s`
      }))),
      jP = (0, ad.memo)((function(dd) {
        let {
          island: Jd
        } = dd;
        return (0, SN.jsxs)("div", {
          className: BN()("SkyblockReachLogDepths", null !== Jd && `Island-${Jd}`),
          "aria-hidden": "true",
          children: [mP.map(((dd, Jd) => (0, SN.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: dd
          }, `shaft${Jd}`))), bP.map(((dd, Jd) => (0, SN.jsx)("span", {
            className: BN()("SkyblockReachLogMote", Jd % 2 === 1 && "Violet"),
            style: dd
          }, `mote${Jd}`))), SP.map(((dd, Jd) => (0, SN.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: dd
          }, `bubble${Jd}`)))]
        })
      })),
      XP = 100;

    function fP(dd) {
      let {
        view: Jd
      } = dd;
      const {
        t: kd
      } = (0, mN.B)();
      if (null === Jd || 0 === Jd.total) return null;
      const pd = XP * Jd.aspect,
        Nd = kd("skyblockGame:hiddenWatersCount", {
          found: Jd.found,
          total: Jd.total
        });
      return (0, SN.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${kd("skyblockGame:hiddenWatersTitle")}: ${Nd}`,
        children: [(0, SN.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${pd}`,
          "aria-hidden": "true",
          children: [Jd.islands.map(((dd, Jd) => (0, SN.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (dd.left + dd.width / 2) * XP,
            cy: (dd.top + dd.height / 2) * pd,
            rx: dd.width / 2 * XP,
            ry: dd.height / 2 * pd
          }, Jd))), Jd.pins.map(((dd, Jd) => (0, SN.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: dd.left * XP,
            cy: dd.top * pd,
            r: 13
          }, Jd)))]
        }), (0, SN.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, SN.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: kd("skyblockGame:hiddenWatersTitle")
          }), (0, SN.jsx)("span", {
            className: Jd.found === Jd.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: Nd
          })]
        })]
      })
    }

    function nP(dd) {
      let {
        view: Jd,
        island: kd
      } = dd;
      const {
        t: pd
      } = (0, mN.B)(), Nd = null === Jd || void 0 === Jd ? void 0 : Jd.glimpses.get(kd);
      return void 0 === Nd || 0 === Nd.length ? null : (0, SN.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, SN.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: pd("skyblockGame:hiddenWatersGlimpsed")
        }), (0, SN.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: Nd.map((dd => (0, SN.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, SN.jsx)(MN.d, {
              itemName: dd,
              amount: 0
            })
          }, dd)))
        })]
      })
    }
    const UP = ["Bronze", "Silver", "Gold"],
      yP = [{
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
      DP = yP.slice(0, 2);

    function TP(dd) {
      return dd ? yP : DP
    }

    function EP(dd) {
      let {
        fish: Jd,
        letGoShown: kd
      } = dd;
      const {
        t: pd
      } = (0, mN.B)();
      return (0, SN.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [UP.map(((dd, kd) => {
          const Nd = kd < Jd.marks;
          return (0, SN.jsx)("span", {
            className: BN()("SkyblockReachLogPip", dd, Nd && "Earned", Nd && Jd.fresh && kd === Jd.marks - 1 && "Newest"),
            title: pd(bp[kd])
          }, dd)
        })), (0, SN.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), TP(kd).map(((dd, kd) => (0, SN.jsx)("span", {
          className: BN()("SkyblockReachLogRibbon", dd.className, !0 === Jd.ribbons[kd] && "Earned"),
          title: pd(dd.titleKey)
        }, dd.className)))]
      })
    }

    function cP(dd) {
      let {
        letGoShown: Jd,
        haloShown: kd
      } = dd;
      const {
        t: pd
      } = (0, mN.B)();
      return (0, SN.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, SN.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: pd("skyblockGame:reachLogMarks"),
          children: [(0, SN.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), pd("skyblockGame:reachLogLegendMarks")]
        }), TP(Jd).map((dd => (0, SN.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: pd(dd.titleKey),
          children: [(0, SN.jsx)("span", {
            className: BN()("SkyblockReachLogRibbon", dd.className, "Earned")
          }), pd(dd.legendKey)]
        }, dd.className))), (0, SN.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: pd("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, SN.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), pd("skyblockGame:reachLogLegendGlimmer")]
        }), kd && (0, SN.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: pd("skyblockGame:reachLogHaloTitle"),
          children: [(0, SN.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), pd("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function hP(dd) {
      let {
        returner: Jd
      } = dd;
      return (0, SN.jsxs)("div", {
        className: BN()("SkyblockReachLogReturner", Jd.back && "Back"),
        children: [(0, SN.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, SN.jsx)(MN.d, {
            itemName: Jd.itemName,
            amount: 0
          })
        }), (0, SN.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: Jd.line
        })]
      })
    }

    function rP(dd) {
      let {
        fish: Jd,
        letGoShown: kd
      } = dd;
      const {
        t: pd
      } = (0, mN.B)();
      return (0, SN.jsxs)("li", {
        className: BN()("SkyblockReachLogCard", Jd.caught ? "Caught" : "Unknown", Jd.marks >= 3 && "GoldCard", Jd.fresh && "Fresh", Jd.visitor && "Visitor"),
        children: [Jd.visitor && (0, SN.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: pd("skyblockGame:reachLogVisitor")
        }), Jd.fresh && Array.from({
          length: 4
        }, ((dd, Jd) => (0, SN.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, Jd))), (0, SN.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [Jd.halo && (0, SN.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: pd("skyblockGame:reachLogHaloTitle")
          }), (0, SN.jsx)(MN.d, {
            itemName: Jd.itemName,
            amount: 0
          }), Jd.glimmer && (0, SN.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: pd("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, SN.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: Jd.name
        }), (0, SN.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: Jd.chance
        }), (0, SN.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: Jd.best
        }), (0, SN.jsx)(EP, {
          fish: Jd,
          letGoShown: kd
        })]
      })
    }

    function uP(dd) {
      let {
        page: Jd,
        letGoShown: kd,
        hiddenWaters: pd
      } = dd;
      const {
        t: Nd
      } = (0, mN.B)();
      return Jd.awake ? (0, SN.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: Jd.fish.map((dd => (0, SN.jsx)(rP, {
          fish: dd,
          letGoShown: kd
        }, dd.itemName)))
      }) : (0, SN.jsxs)(SN.Fragment, {
        children: [(0, SN.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: Nd("skyblockGame:reachLogAsleep")
        }), (0, SN.jsx)(nP, {
          view: pd,
          island: Jd.id
        })]
      })
    }

    function tP(dd) {
      var Jd, kd;
      let {
        controller: pd,
        regulars: Nd,
        hiddenWaters: Wd
      } = dd;
      const Pd = (0, bN.i)(mp, pd.getSnapshot()),
        Zd = function(dd) {
          return (0, bN.i)(gN, dd.getSnapshot())
        }(Wd),
        gd = (0, bN.i)(pN, Nd.getSnapshot()),
        {
          t: Cd
        } = (0, mN.B)(),
        Kd = hN();
      if (!Pd.enabled) return null;
      const od = null !== (Jd = Pd.pages.find((dd => dd.id === Pd.selected))) && void 0 !== Jd ? Jd : null;
      return (0, SN.jsx)(TN.e, {
        show: Pd.open,
        close: pd.dismiss,
        togglePointerLock: !1,
        className: BN()("SkyblockSkillsOverlay", gd.open && "SkyblockReachLogUnderLedger"),
        children: (0, SN.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: Kd,
          onKeyDown: cN,
          children: [(0, SN.jsx)(jP, {
            island: null !== (kd = null === od || void 0 === od ? void 0 : od.id) && void 0 !== kd ? kd : null
          }), (0, SN.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, SN.jsxs)("div", {
              children: [(0, SN.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: Cd("skyblockGame:reachLogTitle")
              }), (0, SN.jsx)("p", {
                children: Cd("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, SN.jsx)(fP, {
              view: Zd
            }), (0, SN.jsx)(EN.i, {
              padIgnore: !0,
              onClick: pd.dismiss
            })]
          }), (0, SN.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: Pd.pages.map((dd => {
              const Jd = dd.id === Pd.selected,
                kd = dd.fish.some((dd => dd.fresh));
              return (0, SN.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": Jd,
                "data-pad-tab": !0,
                "data-pad-selected": Jd ? "true" : void 0,
                className: BN()("SkyblockReachLogTab", `Island-${dd.id}`, Jd && "Selected", !dd.awake && "Asleep", dd.gold && "GoldPage", kd && "HasNews"),
                onClick: () => {
                  pd.selectPage(dd.id)
                },
                children: [(0, SN.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: dd.name
                }), dd.awake && (0, SN.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: Cd("skyblockGame:reachLogCaughtCount", {
                    caught: dd.caught,
                    total: dd.total
                  })
                })]
              }, dd.id)
            }))
          }), (0, SN.jsxs)("div", {
            className: BN()("SkyblockReachLogPage", null !== od && `Island-${od.id}`),
            role: "tabpanel",
            children: [null !== od && (0, SN.jsx)(uP, {
              page: od,
              letGoShown: Pd.letGoShown,
              hiddenWaters: Zd
            }), !0 === (null === od || void 0 === od ? void 0 : od.awake) && null !== od.returner && (0, SN.jsx)(hP, {
              returner: od.returner
            }), !0 === (null === od || void 0 === od ? void 0 : od.awake) && (0, SN.jsx)(FP, {
              controller: Nd,
              island: od.id
            })]
          }), (0, SN.jsx)("footer", {
            className: BN()("SkyblockReachLogFooter", null !== od && `Island-${od.id}`, !0 === (null === od || void 0 === od ? void 0 : od.gold) && "GoldPage"),
            children: !0 === (null === od || void 0 === od ? void 0 : od.gold) ? (0, SN.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: Cd("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, SN.jsxs)(SN.Fragment, {
              children: [(0, SN.jsx)(cP, {
                letGoShown: Pd.letGoShown,
                haloShown: !0 === (null === od || void 0 === od ? void 0 : od.fish.some((dd => dd.halo)))
              }), (0, SN.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: Cd("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var VP = kd(4722);

    function zP(dd) {
      let {
        conversation: Jd,
        completedLabel: kd
      } = dd;
      return (0, SN.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, SN.jsxs)("header", {
          children: [(0, SN.jsx)("h3", {
            children: Jd.questName
          }), Jd.completed && (0, SN.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: kd
          })]
        }), Jd.lines.map((dd => (0, SN.jsx)(VP.b, {
          display: dd.display
        }, dd.key)))]
      })
    }

    function HP(dd) {
      let {
        controller: Jd
      } = dd;
      const {
        t: kd
      } = (0, mN.B)(), pd = (0, bN.i)(KN, Jd.getSnapshot()), Nd = hN();
      if (!pd.enabled) return null;
      const Wd = !pd.loading && 0 === pd.conversations.length;
      return (0, SN.jsx)(TN.e, {
        show: pd.open,
        close: Jd.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, SN.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: Nd,
          onKeyDown: cN,
          children: [(0, SN.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, SN.jsxs)("div", {
              children: [(0, SN.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: kd("skyblockDialogue:title")
              }), (0, SN.jsx)("p", {
                children: kd("skyblockDialogue:intro")
              })]
            }), (0, SN.jsx)(EN.i, {
              padIgnore: !0,
              onClick: Jd.dismiss
            })]
          }), (0, SN.jsxs)("div", {
            className: BN()("SkyblockDialogueBody", {
              SingleColumn: null !== pd.questFocus || 0 === pd.characters.length
            }),
            children: [null === pd.questFocus && pd.characters.length > 0 && (0, SN.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: pd.characters.map((dd => (0, SN.jsx)(EN.d, {
                className: BN()("SkyblockDialogueCharacter", {
                  Selected: dd.selected
                }),
                onClick: () => {
                  Jd.selectCharacter(dd.id)
                },
                children: (0, SN.jsx)(FN.c, {
                  text: dd.styling
                })
              }, dd.id)))
            }), (0, SN.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== pd.questFocus && (0, SN.jsx)(EN.d, {
                className: "SkyblockDialogueBack",
                onClick: Jd.showCharacters,
                children: kd("skyblockDialogue:allCharacters")
              }), pd.loading && (0, SN.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: kd("skyblockDialogue:loading")
              }), Wd && (0, SN.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: kd(null === pd.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), pd.conversations.map((dd => (0, SN.jsx)(zP, {
                conversation: dd,
                completedLabel: pd.completedLabel
              }, dd.questId)))]
            })]
          })]
        })
      })
    }

    function wP(dd) {
      let {
        controller: Jd
      } = dd;
      const kd = (0, bN.i)(ON, Jd.getSnapshot()),
        {
          t: pd
        } = (0, mN.B)(),
        Nd = hN();
      return kd.enabled ? (0, SN.jsx)(TN.e, {
        show: kd.open,
        close: Jd.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, SN.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: Nd,
          onKeyDown: cN,
          children: [(0, SN.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, SN.jsxs)("div", {
              children: [(0, SN.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: pd("skyblockGame:autographBook")
              }), (0, SN.jsx)("p", {
                children: pd("skyblockGame:autographBookIntro")
              })]
            }), (0, SN.jsx)(EN.i, {
              padIgnore: !0,
              onClick: Jd.dismiss
            })]
          }), (0, SN.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, SN.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, SN.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, SN.jsx)("strong", {
                  children: kd.total
                }), (0, SN.jsx)("span", {
                  children: pd("skyblockGame:autographTotal")
                })]
              }), (0, SN.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, SN.jsx)("strong", {
                  children: kd.rankTotal
                }), (0, SN.jsx)("span", {
                  children: pd("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === kd.entries.length ? (0, SN.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: pd("skyblockGame:autographBookEmpty")
            }) : (0, SN.jsx)("ul", {
              className: "SkyblockAutographList",
              children: kd.entries.map((dd => (0, SN.jsxs)("li", {
                className: BN()("SkyblockAutograph", {
                  Ranked: null !== dd.rank
                }),
                style: null === dd.rank ? void 0 : {
                  color: dd.rank.colour
                },
                children: [null !== dd.rank && (0, SN.jsx)(OW.e, {
                  className: "SkyblockAutographRankIcon",
                  name: dd.rank.icon,
                  kit: (0, OW.g)(dd.rank.icon)
                }), (0, SN.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, SN.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: dd.name
                  }), (0, SN.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== dd.rank && (0, SN.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: dd.rank.label
                    }), (0, SN.jsx)("span", {
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
    const AP = (0, ad.memo)((function(dd) {
        let {
          controller: Jd
        } = dd;
        return (0, SN.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: Jd.display.mountWaypoint,
          children: [(0, SN.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, SN.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, SN.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, SN.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, SN.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, SN.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      dZ = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function JZ(dd) {
      return "next" === dd.phase ? "\u2192" : dZ[dd.kind]
    }
    const kZ = (0, ad.memo)((function(dd) {
      let {
        controller: Jd,
        display: kd
      } = dd;
      const pd = (0, bN.i)(lk, Jd.getNotificationSnapshot()),
        [Nd, Wd] = (0, ad.useState)(!1);
      return (0, bN.h)("qteStateUpdated", (dd => {
        Wd(dd.isActive)
      })), (0, SN.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (Nd ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [pd && (0, SN.jsxs)("div", {
          className: `SkyblockQuestNotification ${pd.kind} ${pd.phase}`,
          style: {
            "--quest-notification-duration": `${pd.durationMs}ms`,
            ...pd.accent && {
              "--quest-notification-accent": pd.accent
            }
          },
          children: [(0, SN.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (pd.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, SN.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: JZ(pd)
            }), pd.iconItem && (0, SN.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, SN.jsx)(MN.d, {
                itemName: pd.iconItem,
                amount: 0
              })
            })]
          }), (0, SN.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, SN.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: pd.title
            }), (0, SN.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, SN.jsx)(gW.b, {
                text: pd.name
              })
            }), pd.description && (0, SN.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, SN.jsx)(gW.b, {
                text: pd.description
              })
            }), pd.reward && (0, SN.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, SN.jsx)(gW.b, {
                text: pd.reward
              })
            })]
          })]
        }, pd.token), (null === pd || void 0 === pd ? void 0 : pd.waypointNameKey) && (0, SN.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": pd.waypointNameKey,
          "data-notification-token": pd.token,
          ref: kd.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${pd.token}`)]
      })
    }));

    function pZ(dd) {
      const Jd = parseInt(dd.replace("#", ""), 16);
      return `${Jd>>16&255}, ${Jd>>8&255}, ${255&Jd}`
    }
    const NZ = (0, ad.memo)((function(dd) {
      let {
        controller: Jd
      } = dd;
      const {
        t: kd
      } = (0, mN.B)(), pd = (0, bN.i)(yk, Jd.getSnapshot());
      if (!pd) return null;
      const Nd = "arrival" === pd.phase;
      return (0, SN.jsxs)("div", {
        className: BN()("SkyblockPortalTransit", {
          Departure: !Nd,
          Arrival: Nd
        }),
        style: {
          "--portal-rgb": pZ(pd.colour),
          "--portal-duration": `${pd.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, SN.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, SN.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            Jd.finishArrival(pd.token)
          }
        }), (0, SN.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, SN.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !Nd && (0, SN.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: kd("skyblockGame:portalTransitHeading")
          }), (0, SN.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: kd(pd.zoneNameKey)
          })]
        })]
      }, pd.token)
    }));

    function WZ() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function PZ() {
      const dd = document.querySelector(".SkyblockHudCoins"),
        Jd = null === dd || void 0 === dd ? void 0 : dd.getBoundingClientRect();
      return Jd && Jd.width > 0 ? {
        x: Jd.left + Math.min(Jd.width, 24) / 2,
        y: Jd.top + Jd.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function ZZ(dd) {
      return {
        x: dd.left + dd.width / 2,
        y: dd.top + dd.height / 2
      }
    }

    function gZ() {
      var dd;
      const Jd = null === (dd = document.querySelector(".HotBar")) || void 0 === dd ? void 0 : dd.getBoundingClientRect();
      return Jd && Jd.width > 0 ? ZZ(Jd) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function CZ(dd) {
      let {
        items: Jd,
        origins: kd,
        target: pd
      } = dd;
      return (0, SN.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: Jd.map(((dd, Jd) => {
          const Nd = kd[Jd];
          return (0, SN.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${Nd.x}px`,
              top: `${Nd.y}px`,
              "--item-dx": pd.x - Nd.x + "px",
              "--item-dy": pd.y - Nd.y + "px",
              "--item-delay": 2e3 + 160 * Jd + "ms",
              "--item-flight": "700ms"
            },
            children: (0, SN.jsx)(MN.d, {
              itemName: dd.dailyRewardItemName,
              amount: 0
            })
          }, dd.dailyRewardItemName)
        }))
      })
    }

    function KZ(dd, Jd) {
      const kd = -Math.PI / 2 + 1.25 * (dd / (Jd - 1) * 2 - 1),
        pd = 70 + dd % 3 * 22;
      return {
        x: Math.cos(kd) * pd,
        y: Math.sin(kd) * pd * .7
      }
    }

    function oZ(dd) {
      let {
        origin: Jd,
        target: kd,
        count: pd
      } = dd;
      const Nd = [];
      for (let Wd = 0; Wd < pd; Wd++) {
        const dd = KZ(Wd, pd);
        Nd.push((0, SN.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${Jd.x}px`,
            top: `${Jd.y}px`,
            "--coin-bx": `${dd.x}px`,
            "--coin-by": `${dd.y}px`,
            "--coin-dx": kd.x - Jd.x + "px",
            "--coin-dy": kd.y - Jd.y + "px",
            "--coin-delay": `${rk(Wd,pd)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, SN.jsx)(MN.d, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, Wd))
      }
      return (0, SN.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: Nd
      })
    }

    function lZ(dd) {
      let {
        day: Jd
      } = dd;
      const kd = Md[Jd - 1];
      return (0, SN.jsxs)(SN.Fragment, {
        children: [(0, SN.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, SN.jsx)(MN.d, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, YN.h)(kd.dailyRewardCoins)]
        }), kd.dailyRewardItems.map((dd => (0, SN.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, SN.jsx)(MN.d, {
            itemName: dd.dailyRewardItemName,
            amount: 0
          }), "\xd7", dd.dailyRewardItemAmount]
        }, dd.dailyRewardItemName)))]
      })
    }

    function QZ(dd) {
      let {
        day: Jd
      } = dd;
      const kd = Yd(Jd);
      return (0, SN.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: Md.map(((dd, pd) => {
          const Nd = pd + 1;
          return (0, SN.jsxs)("li", {
            className: BN()("SkyblockDailyRewardTile", {
              Claimed: Nd < Jd && Nd !== kd,
              Today: Nd === Jd,
              Tomorrow: Nd === kd,
              Jackpot: Nd === Fd
            }),
            children: [(0, SN.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: Nd
            }), (0, SN.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, SN.jsx)(MN.d, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, YN.h)(dd.dailyRewardCoins)]
            }), dd.dailyRewardItems.map((dd => (0, SN.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, SN.jsx)(MN.d, {
                itemName: dd.dailyRewardItemName,
                amount: 0
              }), "\xd7", dd.dailyRewardItemAmount]
            }, dd.dailyRewardItemName)))]
          }, Nd)
        }))
      })
    }

    function LZ(dd) {
      let {
        view: Jd
      } = dd;
      const {
        t: kd
      } = (0, mN.B)(), pd = (0, ad.useRef)(null), Nd = (0, ad.useRef)(null), [Wd, Pd] = (0, ad.useState)(null);
      (0, ad.useLayoutEffect)((() => {
        var dd;
        const Jd = null === (dd = pd.current) || void 0 === dd ? void 0 : dd.getBoundingClientRect();
        if (Jd) {
          var kd, Wd;
          const dd = Array.from(null !== (kd = null === (Wd = Nd.current) || void 0 === Wd ? void 0 : Wd.children) && void 0 !== kd ? kd : [], (dd => ZZ(dd.getBoundingClientRect())));
          Pd({
            origin: ZZ(Jd),
            target: PZ(),
            itemOrigins: dd,
            itemTarget: gZ()
          })
        }
      }), []);
      const Zd = Yd(Jd.day),
        gd = function(dd, Jd) {
          const [kd, pd] = (0, ad.useState)((() => WZ() ? dd : 0));
          return (0, ad.useEffect)((() => {
            if (WZ()) return;
            const kd = performance.now();
            let Nd = 0;
            const Wd = Pd => {
              const Zd = Math.min(Math.max((Pd - kd) / Jd, 0), 1);
              pd(Math.round(dd * (1 - (1 - Zd) ** 3))), Zd < 1 && (Nd = requestAnimationFrame(Wd))
            };
            return Nd = requestAnimationFrame(Wd), () => {
              cancelAnimationFrame(Nd)
            }
          }), [dd, Jd]), kd
        }(Jd.coins, 450);
      return (0, SN.jsxs)("div", {
        className: BN()("SkyblockDailyReward", {
          Jackpot: Jd.day === Fd
        }),
        style: {
          "--daily-duration": `${Jd.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, SN.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, SN.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, SN.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, SN.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: kd("skyblockGame:dailyRewardTitle")
            }), (0, SN.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: kd("skyblockGame:dailyRewardDay", {
                day: String(Jd.day)
              })
            })]
          }), (0, SN.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: pd,
            children: [(0, SN.jsx)(MN.d, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, SN.jsxs)("span", {
              children: ["+", (0, YN.h)(gd)]
            })]
          }), Jd.items.length > 0 && (0, SN.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: Nd,
            children: Jd.items.map((dd => (0, SN.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, SN.jsx)(MN.d, {
                itemName: dd.dailyRewardItemName,
                amount: 0
              }), "\xd7", dd.dailyRewardItemAmount]
            }, dd.dailyRewardItemName)))
          }), (0, SN.jsx)(QZ, {
            day: Jd.day
          }), (0, SN.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [kd("skyblockGame:dailyRewardComeBack"), (0, SN.jsx)(lZ, {
              day: Zd
            })]
          })]
        }), null !== Wd && (0, SN.jsx)(oZ, {
          origin: Wd.origin,
          target: Wd.target,
          count: Jd.flyingCoins
        }), null !== Wd && Wd.itemOrigins.length === Jd.items.length && (0, SN.jsx)(CZ, {
          items: Jd.items,
          origins: Wd.itemOrigins,
          target: Wd.itemTarget
        })]
      })
    }
    const OZ = (0, ad.memo)((function(dd) {
        let {
          controller: Jd
        } = dd;
        const kd = (0, bN.i)(Ek, Jd.getSnapshot());
        return kd ? (0, SN.jsx)(LZ, {
          view: kd
        }, kd.token) : null
      })),
      eZ = "Gold Coin";

    function RZ(dd) {
      return 650 + 220 * dd
    }

    function IZ(dd) {
      return {
        "--letter-delay": `${RZ(dd)}ms`,
        "--letter-land": `${RZ(dd)+300}ms`
      }
    }

    function GZ(dd) {
      let {
        letterCount: Jd
      } = dd;
      return (0, SN.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, SN.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, SN.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, SN.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: Jd
        }, ((dd, Jd) => (0, SN.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: IZ(Jd),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, Jd)))]
      })
    }

    function vZ(dd) {
      var Jd, kd, pd;
      let {
        letter: Nd,
        index: Wd
      } = dd;
      const {
        t: Pd
      } = (0, mN.B)(), Zd = null !== (Jd = null === (kd = Nd.items[0]) || void 0 === kd ? void 0 : kd.itemName) && void 0 !== Jd ? Jd : eZ;
      return (0, SN.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: IZ(Wd),
        children: [(0, SN.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, SN.jsx)(MN.d, {
            itemName: Zd,
            amount: 0
          })
        }), (0, SN.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: Pd(Nd.reasonKey, null !== (pd = Nd.reasonParams) && void 0 !== pd ? pd : void 0)
        }), (0, SN.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [Nd.coins > 0 && (0, SN.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, SN.jsx)(MN.d, {
              itemName: eZ,
              amount: 0
            }), "+", (0, YN.h)(Nd.coins)]
          }), Nd.items.map(((dd, Jd) => (0, SN.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, SN.jsx)(MN.d, {
              itemName: dd.itemName,
              amount: 0
            }), dd.label, " \xd7", dd.amount]
          }, Jd)))]
        })]
      })
    }

    function xZ(dd) {
      let {
        view: Jd
      } = dd;
      const {
        t: kd
      } = (0, mN.B)();
      return (0, SN.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${Jd.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${RZ(Jd.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, SN.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, SN.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, SN.jsx)(GZ, {
              letterCount: Jd.letters.length
            }), (0, SN.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: kd("skyblockGame:mailboxTitle")
            })]
          }), (0, SN.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: Jd.letters.map(((dd, Jd) => (0, SN.jsx)(vZ, {
              letter: dd,
              index: Jd
            }, Jd)))
          }), Jd.more > 0 && (0, SN.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: kd("skyblockGame:mailboxMore", {
              count: String(Jd.more)
            })
          })]
        })
      })
    }
    const qZ = (0, ad.memo)((function(dd) {
      let {
        controller: Jd
      } = dd;
      const kd = (0, bN.i)(tk, Jd.getSnapshot());
      return kd ? (0, SN.jsx)(xZ, {
        view: kd
      }, kd.token) : null
    }));

    function BZ(dd) {
      let {
        controller: Jd
      } = dd;
      const {
        t: kd
      } = (0, mN.B)(), pd = (0, bN.i)(yp, Jd.getSnapshot());
      if (null === pd) return null;
      const Nd = pd.fullSet ? "empty" === pd.fuelState ? {
        text: kd("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: kd("skyblockGame:magmawardHudFullSet", {
          worn: String(pd.wornCount)
        }),
        tone: "partial"
      };
      return (0, SN.jsx)(iN.g, {
        placement: "statBars",
        children: (0, SN.jsxs)("div", {
          className: BN()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${pd.fuelState}`, {
            "SkyblockMagmawardHud-partial": !pd.fullSet,
            "SkyblockMagmawardHud-armed": pd.fullSet && "empty" !== pd.fuelState
          }),
          children: [null !== pd.flare && (0, SN.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${pd.flare}`
          }, `flare:${pd.flareToken}`), (0, SN.jsx)("div", {
            className: BN()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: pd.setLit
            }),
            children: pd.pieces.map(((dd, Jd) => (0, SN.jsx)("div", {
              className: BN()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: dd.worn,
                SkyblockMagmawardPieceJustWorn: dd.justWorn
              }),
              children: (0, SN.jsx)(MN.d, {
                itemName: dd.itemName,
                amount: 0
              })
            }, `${Jd}:${dd.wornToken}`)))
          }, `pieces:${pd.setLitToken}`), (0, SN.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, SN.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, SN.jsxs)("div", {
              className: BN()("SkyblockMagmawardFuelCounter", pd.pulse && `SkyblockMagmawardFuelCounter-${pd.pulse}`),
              children: [(0, SN.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, SN.jsx)(MN.d, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, SN.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: pd.fuel
              })]
            }, `counter:${pd.pulseToken}`), "burn" === pd.pulse && (0, SN.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${pd.pulseToken}`)]
          }), Nd && (0, SN.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${Nd.tone} SmallTextBold`,
            children: Nd.text
          })]
        })
      })
    }

    function sZ(dd) {
      let {
        controller: Jd
      } = dd;
      const {
        t: kd,
        selectedLanguage: pd
      } = (0, mN.B)(), Nd = (0, bN.i)(Tp, Jd.getSnapshot());
      return null === Nd ? null : (0, SN.jsx)(iN.g, {
        placement: "statBars",
        children: (0, SN.jsxs)("div", {
          className: BN()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: Nd.inRange
          }),
          style: {
            "--glowtide-colour": Nd.colour
          },
          "aria-label": kd("skyblockGame:glowtideChipLabel"),
          children: [(0, SN.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), Nd.inRange ? (0, SN.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: kd("skyblockGame:glowtideChipInRange")
          }, `call:${Nd.inRangeToken}`) : (0, SN.jsxs)(SN.Fragment, {
            children: [(0, SN.jsx)("div", {
              ref: Jd.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, SN.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: kd("skyblockGame:waypointDistance", {
                distance: qd(Nd.distance, pd.code)
              })
            })]
          })]
        })
      })
    }

    function iZ(dd) {
      let {
        controller: Jd
      } = dd;
      const {
        t: kd
      } = (0, mN.B)(), pd = (0, bN.i)(cp, Jd.getSnapshot());
      return null === pd ? null : (0, SN.jsx)(iN.g, {
        placement: "statBars",
        children: (0, SN.jsxs)("div", {
          className: BN()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: pd.full
          }),
          "aria-label": kd("skyblockGame:glowMeterLabel", {
            fill: String(pd.fill),
            oo: String(pd.oo)
          }),
          children: [pd.burst && (0, SN.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${pd.burstToken}`), (0, SN.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, SN.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${pd.ratio})`
              }
            }), pd.gained && (0, SN.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${pd.gainToken}`), pd.full && Array.from({
              length: 5
            }, ((dd, Jd) => (0, SN.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, Jd)))]
          }), pd.full && pd.rares.map((dd => (0, SN.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, SN.jsx)(MN.d, {
              itemName: dd,
              amount: 0
            })
          }, dd))), pd.ready && (0, SN.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, SN.jsx)("span", {
              children: kd("skyblockGame:glowMeterReady")
            })
          }, `ready:${pd.fullToken}`)]
        })
      })
    }

    function aZ(dd) {
      let {
        controller: Jd
      } = dd;
      const {
        t: kd
      } = (0, mN.B)(), pd = (0, bN.i)(rp, Jd.getSnapshot());
      if (null === pd) return null;
      const Nd = "waiting" === pd.phase,
        Wd = {
          animationDuration: `${pd.waitMs}ms`,
          animationDelay: -pd.elapsedMs + "ms"
        },
        Pd = Nd ? void 0 : {
          animationDuration: `${pd.waitMs}ms`
        };
      return (0, SN.jsxs)("div", {
        className: Nd ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [Nd && (0, SN.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((dd, Jd) => (0, SN.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, Jd))), (0, SN.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: Wd
          }), (0, SN.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, SN.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, SN.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: Wd
            })]
          }), (0, SN.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, SN.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: Pd,
          children: kd(pd.line)
        }, pd.lineIndex)]
      }, pd.token)
    }

    function MZ(dd) {
      let {
        chart: Jd,
        showHere: kd,
        className: pd
      } = dd;
      return (0, SN.jsx)("div", {
        className: BN()("SkyblockTideChartGrid", pd, null !== Jd.pictureName && "Complete"),
        "aria-hidden": "true",
        children: Jd.cells.map(((dd, pd) => {
          const Nd = 0 !== (Jd.pulseCells & 1 << pd),
            Wd = Jd.castCell === pd;
          return (0, SN.jsx)("span", {
            className: BN()("SkyblockTideChartCell", `Cell-${dd}`, Nd && "Pulse", Wd && "Cast", kd && Jd.hereCell === pd && "Here")
          }, `${pd}:${Nd?`p${Jd.pulseToken}`:""}:${Wd?`c${Jd.castToken}`:""}`)
        }))
      })
    }

    function FZ(dd) {
      let {
        controller: Jd
      } = dd;
      const kd = (0, bN.i)(Vp, Jd.getSnapshot()),
        {
          t: pd
        } = (0, mN.B)(),
        Nd = kd.chip;
      if (!kd.enabled || null === Nd) return null;
      const Wd = pd("skyblockGame:tideChartsChipLabel", {
        island: Nd.islandName,
        lit: String(Nd.lit),
        ink: String(Nd.ink)
      });
      return (0, SN.jsx)(iN.g, {
        placement: "statBars",
        children: (0, SN.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: BN()("SkyblockTideChartsChip", kd.open && "Open", null !== Nd.pictureName && "Complete"),
          "aria-label": Wd,
          title: Wd,
          onMouseDown: dd => {
            dd.preventDefault()
          },
          onClick: Jd.toggle,
          children: [(0, SN.jsx)(MZ, {
            chart: Nd,
            showHere: !1,
            className: "Mini"
          }), (0, SN.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [Nd.lit, "/", Nd.ink]
          })]
        })
      })
    }

    function YZ(dd) {
      let {
        controller: Jd
      } = dd;
      const kd = (0, bN.i)(Vp, Jd.getSnapshot()),
        {
          t: pd
        } = (0, mN.B)(),
        Nd = hN(),
        Wd = kd.card;
      return kd.enabled && null !== Wd ? (0, SN.jsx)(TN.e, {
        show: kd.open,
        close: Jd.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, SN.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: Nd,
          onKeyDown: cN,
          children: [(0, SN.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, SN.jsxs)("div", {
              children: [(0, SN.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: pd("skyblockGame:tideChartsTitle")
              }), (0, SN.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: pd("skyblockGame:tideChartsIntro")
              })]
            }), (0, SN.jsx)(EN.i, {
              padIgnore: !0,
              ariaLabel: pd("skyblockGame:tideChartsClose"),
              onClick: Jd.dismiss
            })]
          }), kd.tabs.length > 1 && (0, SN.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": pd("skyblockGame:tideChartsIslands"),
            children: kd.tabs.map((dd => (0, SN.jsx)("button", {
              type: "button",
              className: BN()("SkyblockTideChartsTab", dd.selected && "Selected"),
              "aria-pressed": dd.selected,
              onClick: () => {
                Jd.Tl(dd.island)
              },
              children: dd.name
            }, dd.island)))
          }), (0, SN.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, SN.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": Wd.gridLabel,
              children: (0, SN.jsx)(MZ, {
                chart: Wd,
                showHere: !0,
                className: "Large"
              })
            }), (0, SN.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, SN.jsx)("h3", {
                children: Wd.islandName
              }), (0, SN.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: Wd.litText
              }), null === Wd.pictureName ? (0, SN.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: pd("skyblockGame:tideChartsPictureHidden")
              }) : (0, SN.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: pd("skyblockGame:tideChartsPictureRevealed", {
                  picture: Wd.pictureName
                })
              }, Wd.pictureName), (0, SN.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, SN.jsxs)("li", {
                  children: [(0, SN.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), pd("skyblockGame:tideChartsLegendLit")]
                }), (0, SN.jsxs)("li", {
                  children: [(0, SN.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), pd("skyblockGame:tideChartsLegendClear")]
                }), null !== Wd.hereCell && (0, SN.jsxs)("li", {
                  children: [(0, SN.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), pd("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, SN.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, SN.jsx)("span", {
                  children: kd.turnsText
                }), (0, SN.jsx)("span", {
                  children: kd.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function mZ(dd) {
      var Jd;
      let {
        controller: kd
      } = dd;
      const {
        selectedLanguage: pd
      } = (0, mN.B)(), Nd = pd.code;
      (0, ad.useEffect)((() => {
        kd.setTranslator(((dd, Jd) => (0, mN.x)(Nd, dd, Jd)), Nd, ((dd, Jd) => (0, mN.t)(Nd, dd, Jd)))
      }), [kd, Nd]);
      const Wd = (0, bN.i)(ld, kd.map.getSnapshot()),
        {
          openInGameMenuName: Pd
        } = (0, sN.j)(["openInGameMenuName"]);
      return (0, SN.jsxs)(SN.Fragment, {
        children: [(0, SN.jsx)(kZ, {
          controller: kd.quests,
          display: kd.navigation.display
        }), Wd.enabled && !Pd && (0, SN.jsx)(WW, {
          controller: kd.navigation
        }), (0, SN.jsx)(jN, {
          controller: kd,
          minimap: Wd.enabled && (null === (Jd = Wd.presentation) || void 0 === Jd ? void 0 : Jd.minimap) && (0, SN.jsx)(NW, {
            view: Wd.presentation.minimap,
            navigation: kd.navigation,
            controller: kd.map
          }),
          children: (0, SN.jsx)(LW, {
            controller: kd.quests,
            surface: "hud"
          })
        }), (0, SN.jsx)(AP, {
          controller: kd.navigation
        }), (0, SN.jsx)(NZ, {
          controller: kd.portalTransit
        }), (0, SN.jsx)(OZ, {
          controller: kd.dailyReward
        }), (0, SN.jsx)(qZ, {
          controller: kd.mailbox
        }), (0, SN.jsx)(BZ, {
          controller: kd.magmaward
        }), (0, SN.jsx)(sZ, {
          controller: kd.glowtide
        }), (0, SN.jsx)(LP, {
          controller: kd.passage
        }), (0, SN.jsx)(FZ, {
          controller: kd.tideCharts
        }), (0, SN.jsx)(iZ, {
          controller: kd.glowMeter
        }), (0, SN.jsx)(iP, {
          controller: kd.reachLog
        }), (0, SN.jsx)(aZ, {
          controller: kd.hushWait
        }), (0, SN.jsx)(xP, {
          controller: kd.lampLight
        }), (0, SN.jsx)(PW, {
          controller: kd.skills,
          surface: "hud"
        })]
      })
    }

    function bZ(dd) {
      let {
        controller: Jd
      } = dd;
      return (0, SN.jsxs)(SN.Fragment, {
        children: [(0, SN.jsx)(pW, {
          controller: Jd.map,
          navigation: Jd.navigation
        }), (0, SN.jsx)(PW, {
          controller: Jd.skills,
          surface: "menu"
        }), (0, SN.jsx)(LW, {
          controller: Jd.quests,
          surface: "menu"
        }), (0, SN.jsx)(VW, {
          controller: Jd.dungeons
        }), (0, SN.jsx)(wW, {
          controller: Jd.collections
        }), (0, SN.jsx)(JP, {
          controller: Jd.questGraph
        }), (0, SN.jsx)(PP, {
          controller: Jd.forge
        }), (0, SN.jsx)(lP, {
          controller: Jd.smuggler
        }), (0, SN.jsx)(BP, {
          controller: Jd.keepersChair,
          lampLight: Jd.lampLight
        }), (0, SN.jsx)(tP, {
          controller: Jd.reachLog,
          regulars: Jd.regulars,
          hiddenWaters: Jd.hiddenWaters
        }), (0, SN.jsx)(YP, {
          controller: Jd.regulars
        }), (0, SN.jsx)(eP, {
          controller: Jd.passage
        }), (0, SN.jsx)(YZ, {
          controller: Jd.tideCharts
        }), (0, SN.jsx)(HP, {
          controller: Jd.dialogue
        }), (0, SN.jsx)(wP, {
          controller: Jd.autographs
        })]
      })
    }
    var SZ = kd(36933);
    const jZ = kp + Cp;

    function XZ(dd, Jd, kd, pd, Nd) {
      const Wd = [],
        Pd = [],
        Zd = kd => {
          const pd = dd.playSound(Jd, kd.sound, kd.volume, kd.rate);
          pd && (Pd.push(pd), void 0 !== kd.cutAfter && Wd.push(setTimeout((() => {
            pd.fade(pd.getVolume(), 0, 300)
          }), kd.cutAfter)))
        };
      for (const gd of function(dd, Jd) {
          const kd = [{
            sound: "rpgKnifeSlice1",
            beat: kp,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: kp,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: kp,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: kp,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: kp,
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
            sound: (0, SZ.g)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: jZ + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, SZ.g)("bigDrumSwish"),
            beat: jZ + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: jZ + 60,
            lead: 180,
            volume: .5 + .06 * dd,
            rate: .82 + .07 * dd
          }];
          return dd >= 4 && kd.push({
            sound: "exp_levelup",
            beat: jZ + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), Jd && kd.push({
            sound: "trumpetFlare",
            beat: jZ + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), kd.push({
            sound: "harp_pling",
            beat: pp,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), kd
        }(kd, pd)) Nd ? Wd.push(setTimeout((() => {
        Zd(gd)
      }), Math.max(0, gd.beat - gd.lead / gd.rate))) : gd.beat !== kp && "magicAccent2" !== gd.sound && "trumpetFlare" !== gd.sound || Zd(gd);
      return () => {
        for (const dd of Wd) clearTimeout(dd);
        for (const dd of Pd) dd.fade(dd.getVolume(), 0, 120)
      }
    }
    class fZ {
      constructor(dd) {
        this.deps = dd, this.pending = new Map, this.localHook = null
      }
      hookWaiting(dd, Jd) {
        this.pending.delete(dd);
        const kd = this.deps.now();
        if (null === Jd) {
          var pd;
          if ((null === (pd = this.localHook) || void 0 === pd ? void 0 : pd.hookId) === dd) {
            const dd = kd >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(dd)
          }
          return
        }
        const Nd = kd + Jd;
        this.settle(dd, Nd) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(dd, {
          untilMs: kd + 1e3,
          biteAtMs: Nd
        }))
      }
      getLocalHook() {
        var dd, Jd;
        return null !== (dd = null === (Jd = this.localHook) || void 0 === Jd ? void 0 : Jd.hookId) && void 0 !== dd ? dd : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const dd = this.deps.now();
        for (const [Jd, {
            untilMs: kd,
            biteAtMs: pd
          }] of this.pending)(this.settle(Jd, pd) || dd > kd) && this.pending.delete(Jd)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(dd, Jd) {
        const kd = this.deps.getLineOwner(dd);
        if (null === kd) return !1;
        if (!this.deps.isLocalPlayer(kd)) return !0;
        if (this.localHook = {
            hookId: dd,
            biteAtMs: Jd
          }, !this.deps.isHushWaiting()) {
          const [Jd, kd] = this.deps.getHookPosition(dd);
          this.deps.onCastLanded(Jd, kd)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var nZ = kd(4090);
    const UZ = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      yZ = {
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
    class DZ {
      constructor(dd) {
        this.deps = dd, this.tell = null
      }
      receiveTell(dd) {
        let {
          biteTellTier: Jd
        } = dd;
        this.tell = {
          tier: Jd,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(dd) {
        const Jd = this.tell;
        if (this.tell = null, !dd) return;
        const kd = null !== Jd && this.deps.now() - Jd.atMs <= 3e3 ? Jd.tier : 0;
        this.deps.vibrate(UZ[kd])
      }
      burstAtHook() {
        const dd = this.tell,
          Jd = this.deps.getLocalHookPosition();
        null === dd || dd.burst || null === Jd || (dd.burst = !0, this.deps.playParticles(function(dd, Jd) {
          let [kd, pd, Nd] = Jd;
          const {
            count: Wd,
            rise: Pd,
            colour: Zd
          } = yZ[dd], [gd, Cd, Kd] = Zd;
          return {
            texture: "glint",
            pos1: [kd - .3, pd, Nd - .3],
            pos2: [kd + .3, pd + .2, Nd + .3],
            dir1: [-.6, Pd, -.6],
            dir2: [.6, 1.4 * Pd, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: Wd,
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
              minColor: [gd, Cd, Kd, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [gd, Cd, Kd, 0],
              maxColor: [gd, Cd, Kd, 0]
            }],
            blendMode: nZ.d.Add,
            hideDist: 48
          }
        }(dd.tier, Jd)))
      }
    }
    var TZ = kd(1273),
      EZ = kd(1938),
      cZ = kd(33);

    function hZ(dd, Jd) {
      return [{
        timeFraction: 0,
        minColor: [255 * dd[0], 255 * dd[1], 255 * dd[2], 1],
        maxColor: [255 * Jd[0], 255 * Jd[1], 255 * Jd[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const rZ = [0, 0, 0],
      uZ = {
        texture: "glint",
        mipmaps: !1,
        oo: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: rZ,
        dir2: rZ,
        blendMode: nZ.d.OneOne
      },
      tZ = {
        ...uZ,
        colorGradients: hZ([1, .88, .38], [1, .65, .15])
      },
      VZ = {
        ...uZ,
        colorGradients: hZ([.55, .95, 1], [.9, 1, 1])
      },
      zZ = [.5, .5, .5],
      HZ = {
        texture: "glint",
        mipmaps: !1,
        oo: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: hZ([1, .12, .12], [1, .35, .2]),
        blendMode: nZ.d.OneOne
      };
    class wZ {
      constructor() {
        this.drops = new Map
      }
      ZL(dd, Jd) {
        if ("overflowFlash" === Jd.kind) {
          const [kd, pd, Nd] = Jd.position, Wd = dd.createParticles(HZ, {
            pos: [kd, pd, Nd],
            half: zZ
          });
          return Wd.emit(18), void Wd.stop()
        }
        this.drops.has(Jd.itemId) || this.drops.set(Jd.itemId, {
          owner: Jd.owner,
          cosmetic: Jd.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      Do(dd) {
        if (0 === this.drops.size) return;
        const Jd = performance.now(),
          kd = dd.getCameraPosition();
        let pd = 0;
        for (const Wd of this.drops.values()) null !== Wd.particles && pd++;
        for (const [Wd, Pd] of this.drops) {
          const Zd = dd.getPositionView(Wd);
          if (null === Zd) {
            var Nd;
            if (Pd.seen || Jd - Pd.markedAt > 5e3) null !== Pd.particles && pd--, null === (Nd = Pd.particles) || void 0 === Nd || Nd.stop(), this.drops.delete(Wd);
            continue
          }
          Pd.cosmetic || !dd.isLocalPlayer(Pd.owner) || Pd.pickupDelayCleared || (dd.clearPickupDelay(Wd), Pd.pickupDelayCleared = !0);
          const gd = Pd.lastPosition,
            Cd = Pd.seen && (Zd[0] - gd[0]) ** 2 + (Zd[1] - gd[1]) ** 2 + (Zd[2] - gd[2]) ** 2 > 4e-4,
            Kd = (Zd[0] - kd[0]) ** 2 + (Zd[1] - kd[1]) ** 2 + (Zd[2] - kd[2]) ** 2 < 2025;
          Pd.seen = !0, gd[0] = Zd[0], gd[1] = Zd[1], gd[2] = Zd[2], Cd && (Pd.lastMovingAt = Jd), null !== Pd.particles && (!Kd || Jd - Pd.lastMovingAt > 500) && (Pd.particles.stop(), Pd.particles = null, pd--), Cd && Kd && null === Pd.particles && pd < 32 && (Pd.particles = dd.createParticles(Pd.cosmetic ? VZ : tZ, {
            pos: Zd
          }), pd++), null !== Pd.particles && (Pd.particles.moveTo(Zd), Pd.particles.setEmitRate(Cd ? 12 : 0)), !Cd && null === Pd.particles && Jd - Math.max(Pd.lastMovingAt, Pd.markedAt) > 2e3 && this.drops.delete(Wd)
        }
      }
      dispose() {
        for (const Jd of this.drops.values()) {
          var dd;
          null === (dd = Jd.particles) || void 0 === dd || dd.stop()
        }
        this.drops.clear()
      }
    }
    var AZ = kd(193);
    const dg = AZ.g.uR * AZ.g.playerEyeToHeightRatio;
    class Jg {
      constructor(dd) {
        this.host = dd, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      ZL(dd) {
        this.lava = dd, this.nextUpdateAt = 0
      }
      Do() {
        var dd;
        const Jd = this.host.now();
        if (Jd < this.nextUpdateAt) return;
        this.nextUpdateAt = Jd + 250;
        const kd = this.host.playerPosition(),
          pd = kd && this.findNearest([kd[0], kd[1] + dg, kd[2]]);
        if (!pd || pd.distance >= 40) return void this.stop();
        const Nd = .5 * Math.min(1, (40 - pd.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(Nd) : this.loop = this.host.play("lavaFlow", Nd, pd.position, 40 + dg, 9, !0), null === (dd = this.loop) || void 0 === dd || dd.setPosition(pd.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var dd;
        null === (dd = this.loop) || void 0 === dd || dd.stop(), this.loop = null
      }
      findNearest(dd) {
        let Jd = -1,
          kd = 1 / 0;
        for (let pd = 0; pd < this.lava.length; pd += 3) {
          const Nd = this.lava[pd] - dd[0],
            Wd = this.lava[pd + 1] - dd[1],
            Pd = this.lava[pd + 2] - dd[2],
            Zd = Nd * Nd + Wd * Wd + Pd * Pd;
          Zd < kd && (kd = Zd, Jd = pd)
        }
        return Jd < 0 ? null : {
          position: [this.lava[Jd], this.lava[Jd + 1], this.lava[Jd + 2]],
          distance: Math.sqrt(kd)
        }
      }
    }
    var kg = kd(1915),
      pg = kd(38780);
    const Ng = {
      "Grey Portal": "Gray"
    };
    for (const Kg of Nd.Oc) Ng[`${Kg} Portal`] = Kg;
    const Wg = Object.keys(Ng),
      Pg = Object.fromEntries(Wg.map((dd => [dd, (0, Nd.$)(Nd.M[`${(0,Nd.Be)(Ng[dd])}Team`])])));
    Object.fromEntries(Wg.map((dd => [dd, Nd.M[`${(0,Nd.Be)(Ng[dd])}UiText`]])));
    class Zg {
      constructor(dd, Jd) {
        this.presentation = dd, this.portal = Jd, this.unlocked = void 0
      }
      ZL(dd) {
        const Jd = !1 === this.unlocked && dd;
        this.unlocked = dd, this.Do();
        const {
          min: kd,
          max: pd,
          unlockedBlock: Nd
        } = this.portal;
        if (Jd && this.presentation.hasChunk(...kd)) {
          const [dd, Jd, Wd] = Pg[Nd];
          this.presentation.playParticles({
            pos1: [...kd],
            pos2: pd.map((dd => dd + 1)),
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
              minColor: [dd, Jd, Wd, 1],
              maxColor: [Math.min(255, dd + 55), Math.min(255, Jd + 55), Math.min(255, Wd + 90), 1]
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
      Do() {
        var dd;
        const Jd = this.unlocked ? this.portal.unlockedBlock : null !== (dd = this.portal.lockedBlock) && void 0 !== dd ? dd : "Light Gray Portal",
          {
            min: kd,
            max: pd
          } = this.portal;
        for (let Nd = kd[0]; Nd <= pd[0]; Nd++)
          for (let dd = kd[1]; dd <= pd[1]; dd++)
            for (let Wd = kd[2]; Wd <= pd[2]; Wd++) this.presentation.hasChunk(Nd, dd, Wd) && this.presentation.MI(Nd, dd, Wd) !== Jd && this.presentation.aY(Nd, dd, Wd, Jd)
      }
    }
    const gg = {
        farming_1: {
          raises: dd => "NPC" === dd.type && "chef" === dd.variation,
          rise: .4
        },
        fishing_1: {
          raises: dd => "Draugr Warper" === dd.type,
          rise: .4
        }
      },
      Cg = (dd, Jd, kd, Wd) => {
        let {
          localPlayerId: Pd
        } = Wd;
        const Zd = new xN({
          translate: (dd, Jd) => (0, mN.x)(TZ.c.get().getCurrentLanguageCode(), dd, Jd),
          translateWithIcons: (dd, Jd) => (0, mN.t)(TZ.c.get().getCurrentLanguageCode(), dd, Jd),
          setMenuOpen: dd => {
            dd ? (0, td.p)() : (0, td.g)()
          },
          dismissMenu: td.j,
          publishSkills: dd => {
            Vd.j.nO(Pk, dd, !0)
          },
          publishQuests: dd => {
            Vd.j.nO(Kk, dd, !0)
          },
          publishQuestNotification: dd => {
            Vd.j.nO(lk, dd, !0)
          },
          publishDungeons: dd => {
            Vd.j.nO(Ok, dd, !0)
          },
          publishCollections: dd => {
            Vd.j.nO(nk, dd, !0)
          },
          publishMap: dd => {
            Vd.j.nO(ld, dd, !0)
          },
          publishHud: dd => {
            Vd.j.nO(IN, dd, !0)
          },
          publishPortalTransit: dd => {
            Vd.j.nO(yk, dd, !0)
          },
          isLoadingScreenUp: () => sN.d.get("loadingOverlayVisible"),
          publishDailyReward: dd => {
            Vd.j.nO(Ek, dd, !0)
          },
          publishMailbox: dd => {
            Vd.j.nO(tk, dd, !0)
          },
          publishQuestGraph: dd => {
            Vd.j.nO(zk, dd, !0)
          },
          publishForge: dd => {
            Vd.j.nO(ep, dd, !0)
          },
          publishSmuggler: dd => {
            Vd.j.nO(Gp, dd, !0)
          },
          publishKeepersChair: dd => {
            Vd.j.nO(Fp, dd, !0)
          },
          publishReachLog: dd => {
            Vd.j.nO(mp, dd, !0)
          },
          publishLampLight: dd => {
            Vd.j.nO(np, dd, !0)
          },
          publishMagmaward: dd => {
            Vd.j.nO(yp, dd, !0)
          },
          publishGlowtide: dd => {
            Vd.j.nO(Tp, dd, !0)
          },
          publishGlowMeter: dd => {
            Vd.j.nO(cp, dd, !0)
          },
          publishHushWait: dd => {
            Vd.j.nO(rp, dd, !0)
          },
          publishPassage: dd => {
            Vd.j.nO(qp, dd, !0)
          },
          publishTideCharts: dd => {
            Vd.j.nO(Vp, dd, !0)
          },
          publishRegulars: dd => {
            Vd.j.nO(pN, dd, !0)
          },
          publishHiddenWaters: dd => {
            Vd.j.nO(gN, dd, !0)
          },
          publishDialogue: dd => {
            Vd.j.nO(KN, dd, !0)
          },
          publishAutographs: dd => {
            Vd.j.nO(ON, dd, !0)
          },
          onDailyRewardStarted: dd => {
            Sd.playSound(Pd, dd.day === Fd ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (dd, Jd) => {
            Sd.playSound(Pd, "exp_collect", .35, 1 + .6 * dd / (Jd - 1)), Vd.j.nO(ck, dd === Jd - 1)
          },
          onDailyRewardItemLanded: dd => {
            Sd.playSound(Pd, "pickUp", .6, 1 + .15 * dd)
          },
          onMailboxStarted: () => {
            Sd.playSound(Pd, "rpgMetalClick", .6, 1), Sd.playSound(Pd, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            Sd.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: cZ.k,
          requestTracking: dd => {
            Sd.sendCommand(`quests track ${dd}`)
          },
          requestDungeonEnter: (dd, Jd) => {
            Sd.sendCommand(`dungeonEnter ${dd} ${Jd}`)
          },
          requestQuestJump: dd => {
            Sd.sendCommand(`${Xd} jump ${dd}`)
          },
          requestQuestArrive: (dd, Jd) => {
            const kd = `${Xd} arrive ${dd}`;
            Sd.sendCommand(Jd ? `${kd} complete` : kd)
          },
          requestForge: dd => {
            let {
              blade: Jd,
              guard: kd,
              handle: pd
            } = dd;
            Sd.sendCommand(`forge ${Jd} ${kd} ${pd}`)
          },
          requestDialogue: () => {
            Sd.sendCommand("quests dialogue")
          },
          requestSmuggle: (dd, Jd) => {
            Sd.sendCommand(`smuggle ${dd} ${Jd}`)
          },
          requestKeepersChairAim: dd => {
            Sd.sendCommand(`keeperschair-aim ${dd}`)
          },
          requestReachLogOpen: () => {
            Sd.sendCommand("reachlog-open")
          },
          requestLampLight: dd => {
            Sd.sendCommand(`${dd}`)
          },
          requestTravel: dd => {
            Sd.sendCommand(`map travel ${dd.kind} ${dd.id} ${dd.requestId}`)
          }
        });
        let gd, Cd, Kd, od, Qd, Ld, Od, vd, xd, qd, Bd, Md, Yd;
        const bd = new wZ;
        let Sd, jd = null;
        const fd = gg[null !== kd && void 0 !== kd ? kd : ""],
          Dd = (dd, Jd) => {
            null !== fd && void 0 !== fd && fd.raises(Jd) && Sd.setNametagOffset(dd, fd.rise)
          },
          cd = new DZ({
            getLocalHookPosition: () => {
              const dd = hd.getLocalHook();
              return null !== dd && Sd.checkValid(dd) ? Sd.yI(dd) : null
            },
            playParticles: dd => {
              Sd.playParticleEffect(dd)
            },
            vibrate: dd => {
              zd.d.play("fishBite", dd)
            },
            now: () => performance.now()
          }),
          hd = new fZ({
            getLineOwner: dd => Sd.checkValid(dd) ? Sd.getLineOwner(dd) : null,
            isLocalPlayer: dd => Sd.isLocalPlayer(dd),
            getHookPosition: dd => {
              const [Jd, , kd] = Sd.yI(dd);
              return [Jd, kd]
            },
            isHushWaiting: () => {
              var dd;
              return "waiting" === (null === (dd = Zd.hushWait.getSnapshot()) || void 0 === dd ? void 0 : dd.phase)
            },
            onCastLanded: (dd, Jd) => {
              Zd.tideCharts.castLanded(dd, Jd)
            },
            onLocalHookSettled: () => {
              cd.onLocalHookSettled()
            },
            onLocalWaitEnded: dd => {
              cd.onLocalWaitEnded(dd)
            },
            now: () => performance.now()
          }),
          Hd = new Jg({
            now: () => performance.now(),
            playerPosition: () => Sd.checkValid(Pd) ? Sd.yI(Pd) : null,
            play: (dd, Jd, kd, pd, Nd, Wd) => Sd.playSound(Pd, dd, Jd, 1, {
              Pk: kd,
              maxHearDist: pd,
              refDistance: Nd
            }, Wd)
          }),
          wd = new Map;
        let Ad;
        return {
          onCreate: dd => {
            if (Sd = dd, jd = new pg.SkyblockEntityFacing(dd, fd ? Dd : null), Zd.portalTransit.resumeArrival(null !== kd && void 0 !== kd ? kd : null), (null !== kd && void 0 !== kd ? kd : pd) === pd) {
              let dd = -1 / 0;
              Ad = Vd.j.subscribe("toggleMenu", (Jd => {
                const kd = performance.now();
                "inventory|Workbench" !== Jd || "cross_to_hub" !== Zd.quests.getTrackedQuestId() || kd - dd < 1e4 || (dd = kd, Sd.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [pd, Nd] of Object.entries(null !== (Jd = nd[null !== kd && void 0 !== kd ? kd : ""]) && void 0 !== Jd ? Jd : {})) {
              var Jd;
              wd.set(pd, new Zg({
                hasChunk: (Jd, kd, pd) => dd.isBlockInLoadedChunk(Jd, kd, pd),
                MI: (Jd, kd, pd) => dd.blockIdToBlockName(dd.getBlockId(Jd, kd, pd)),
                aY: (Jd, kd, pd, Nd) => {
                  dd.aY(Jd, kd, pd, Nd)
                },
                playParticles: Jd => {
                  dd.playParticleEffect(Jd)
                }
              }, Nd))
            }
            Yd = (0, kg.h)((dd => function(dd) {
              return Object.hasOwn(hJ, dd) || dd.startsWith("npc_")
            }(dd) ? uJ(dd) : null)), Zd.resolveItemName = (Jd, kd) => {
              const pd = dd.getItemStat(Pd, Jd, "displayName");
              return pd && "object" === typeof pd && "translationKey" in pd ? kd(pd.translationKey, (0, mN.r)(pd.params, EZ.d.shown)) : "string" === typeof pd ? kd(pd) : Jd
            }, Zd.quests.notifications.onShown = dd => {
              "quest" === dd ? Sd.playSound(Pd, "magicAccent1", 1, 1) : "skillLevel" === dd ? Sd.playSound(Pd, "magicAccent1", 1, .6) : "landmark" === dd ? Sd.playSound(Pd, "trumpetFlare", 1, .6) : "npcNote" === dd ? Sd.playSound(Pd, "magicAccent2", .8, 1.1) : "started" === dd ? Sd.playSound(Pd, (0, SZ.g)("bigDrumSwish"), 1, 1) : Sd.playSound(Pd, (0, SZ.g)("rpgHandleSmallLeather"), 1, 1)
            }, Zd.forge.onPartSelected = () => {
              Sd.playSound(Pd, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, Zd.forge.onOpened = () => {
              ! function(dd) {
                dd.preloadSounds([(0, SZ.g)("firecracker"), "fireBurn", "magicAccent2"])
              }(dd)
            }, Zd.forge.onForgeStarted = (Jd, kd, pd) => XZ(dd, Pd, Jd, kd, pd), Zd.smuggler.onBought = () => {
              Sd.playSound(Pd, (0, SZ.g)("rpgHandleSmallLeather"), 1, 1), Sd.playSound(Pd, "chestOpen", .6, 1)
            }, Zd.compass.register(new ed(Zd.map, !0)), Zd.compass.register(new ed(Zd.map, !1)), Zd.compass.register(new Id(Zd.map)), Zd.compass.register(new Gd((() => Zd.quests.getSnapshot().compassTarget)));
            for (const kd of ["enemy", "npc"]) Zd.compass.register(new Rd(Zd.map, kd, (Jd => dd.checkValid(Jd) ? dd.yI(Jd) : void 0), (Jd => dd.isAlive(Jd))))
          },
          onAfterRender: (dd, Jd) => {
            const kd = Sd.checkValid(Pd) ? Sd.yI(Pd) : null;
            Zd.navigation.afterRender(kd, performance.now(), Jd), Zd.glowtide.afterRender(kd, Jd.cameraHeading), Zd.tideCharts.afterRender(kd), hd.afterRender()
          },
          onClose: () => {
            var dd, Jd, kd, pd, Nd, Wd, Pd, ld, Ld, ed, Rd, Id, Gd, sd, ad;
            Ad && Vd.j.unsubscribe(Ad), null === (dd = Yd) || void 0 === dd || dd(), bd.dispose(), Hd.dispose(), null === (Jd = jd) || void 0 === Jd || Jd.dispose(), hd.dispose(), Zd.dispose(), null === (kd = gd) || void 0 === kd || kd(), null === (pd = Cd) || void 0 === pd || pd(), null === (Nd = Kd) || void 0 === Nd || Nd(), null === (Wd = od) || void 0 === Wd || Wd(), null === (Pd = Qd) || void 0 === Pd || Pd(), null === (ld = Od) || void 0 === ld || ld(), null === (Ld = undefined) || void 0 === Ld || Ld(), null === (ed = vd) || void 0 === ed || ed(), null === (Rd = xd) || void 0 === Rd || Rd(), null === (Id = qd) || void 0 === Id || Id(), null === (Gd = Bd) || void 0 === Gd || Gd(), null === (sd = undefined) || void 0 === sd || sd(), null === (ad = Md) || void 0 === ad || ad()
          },
          onPlayerChangeBlock: (dd, Jd, pd, Wd, gd, Cd) => {
            if (dd === Pd && "Air" === Cd) {
              const dd = Sd.getClientOption(Pd, "creative");
              Zd.skills.predictBlock([Jd, pd, Wd], gd, dd);
              const Cd = function(dd, Jd) {
                  if ("hub" === Jd || "farming_1" === Jd || "mining_1" === Jd) return !Td.has(dd) || "hub" !== Jd && "mining_1" !== Jd ? Object.hasOwn(yd, dd) ? yd[dd] : void 0 : Ud
                }(gd, kd),
                Kd = ("hub" === kd || "mining_1" === kd) && (Nd.xd.some((dd => dd === gd)) || Object.hasOwn(Ed, gd) || "mining_1" === kd && "Block of Coal" === gd);
              dd || void 0 === Cd && !Kd || Sd.aY(Jd, pd, Wd, null !== Cd && void 0 !== Cd ? Cd : Ud)
            }
          },
          onPlayerAttackEntity: (dd, Jd) => {
            if (dd !== Pd || "Player" !== Sd.getEntityType(Jd)) return;
            const [kd, pd, Nd] = Sd.yI(Jd);
            Sd.burstParticlePreset("critical", [kd, pd + 1, Nd], 10)
          },
          onChangeBlockFail: dd => {
            for (const {
                uW: Jd
              }
              of dd) Zd.skills.rejectBlock(Jd)
          },
          onReceivedMessageFromServer: (dd, Jd) => {
            if ("skyblockGatedPortal" === dd) {
              var kd;
              const [dd, pd] = Jd;
              return void(null === (kd = wd.get(dd)) || void 0 === kd || kd.ZL(pd))
            }
            if ("skyblockDailyReward" === dd) return void Zd.dailyReward.ZL(Jd);
            if ("skyblockMailbox" === dd) return void Zd.mailbox.ZL(Jd);
            if ("skyblockPortalTransit" === dd) return void Zd.portalTransit.ZL(Jd);
            if ("skyblockLoot" === dd) return void bd.ZL(Sd, Jd);
            if ("skyblockLava" === dd) return void Hd.ZL(Jd);
            if ("skyblockForge" === dd) return void Zd.forge.ZL(Jd);
            if ("skyblockMagmaward" === dd) return void Zd.magmaward.ZL(Jd);
            if ("skyblockGlowtide" === dd) return void Zd.glowtide.ZL(Jd);
            if ("skyblockGlowMeter" === dd) return void Zd.glowMeter.ZL(Jd);
            if ("skyblockHushWait" === dd) return void Zd.hushWait.ZL(Jd);
            if ("skyblockPassage" === dd) {
              const dd = Jd;
              return Zd.passage.ZL(dd), Zd.reachLog.receivePassagePhase(dd.passagePhase), qd ??= (0, sd.x)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: Zd.passage.show
              }), void Zd.keepersChair.receivePassage({
                keepersChairPassagePhase: dd.passagePhase,
                keepersChairPassageNextPhase: dd.passageNextPhase,
                keepersChairPassageTurnsInMs: dd.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === dd) {
              const dd = Jd;
              return Zd.tideCharts.ZL(dd), void(dd.tideCharts.length > 0 && (Bd ??= (0, sd.x)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: Zd.tideCharts.show
              })))
            }
            if (dd === rd.C) {
              var pd;
              const {
                hookId: dd,
                waiting: kd
              } = Jd;
              return void hd.hookWaiting(dd, null !== (pd = null === kd || void 0 === kd ? void 0 : kd.remainingMs) && void 0 !== pd ? pd : null)
            }
            if ("skyblockBiteTell" === dd) return void cd.receiveTell(Jd);
            if ("skyblockSmuggler" === dd) return void Zd.smuggler.ZL(Jd);
            if ("skyblockKeepersChair" === dd) return Zd.keepersChair.ZL(Jd), void Zd.lampLight.setAtChair(Zd.keepersChair.isAtChair());
            if ("skyblockLampLight" === dd) {
              const dd = Jd;
              var Nd;
              if (Zd.lampLight.ZL(dd), dd.lampLightReleasing) xd ??= (0, sd.x)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  Zd.lampLight.setRelease(!1)
                }
              });
              else null === (Nd = xd) || void 0 === Nd || Nd(), xd = void 0;
              return
            }
            if ("skyblockRegulars" === dd) return void Zd.regulars.ZL(Jd);
            if ("skyblockHiddenWaters" === dd) return void Zd.hiddenWaters.ZL(Jd);
            if ("skyblockReachLog" === dd) return Zd.reachLog.ZL(Jd), void(vd ??= (0, sd.x)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: Sp
              },
              onClick: Zd.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === dd) {
              for (const [dd, kd, pd, Nd] of Jd) Sd.aY(dd, kd, pd, Nd);
              return
            }
            if ("skyblockHud" === dd) Zd.receiveHud(Jd);
            else if ("skyblockMap" === dd) Zd.map.ZL(Jd);
            else if (dd === ud.g) Zd.skills.ZL(Jd);
            else if (dd === md && "dialogue" === Jd.kind) Zd.dialogue.ZL(Jd);
            else if (dd === md) Zd.quests.ZL(Jd);
            else if ("skyblockDungeons" === dd) Zd.dungeons.ZL(Jd);
            else if ("sbCollections" === dd) Zd.collections.ZL(Jd);
            else if ("skyblockQuestGraph" === dd) Zd.questGraph.ZL(Jd);
            else {
              if ("skyblockAutographs" !== dd) return;
              Zd.autographs.ZL(Jd)
            }
            if (!Cd && Zd.map.getSnapshot().enabled) {
              const dd = (0, sd.x)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: Zd.map.show
                }),
                Jd = (0, td.t)(Zd.map.show);
              Cd = () => {
                dd(), Jd()
              }
            }!Kd && Zd.skills.getSnapshot().enabled && (Kd = (0, sd.x)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: Zd.skills.show
            })), !Od && Zd.collections.getSnapshot().enabled && (Od = (0, sd.x)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: Zd.collections.show
            })), !od && Zd.quests.getSnapshot().enabled && (od = (0, sd.x)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: Zd.quests.show
            })), !Md && Zd.autographs.getSnapshot().enabled && (Md = (0, sd.x)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: Zd.autographs.show
            }));
            const Wd = Zd.dungeons.getSnapshot().enabled;
            var Pd;
            (Kd || od || Wd) && Ld !== Wd && (Ld = Wd, null === (Pd = Qd) || void 0 === Pd || Pd(), Qd = (0, sd.x)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: jJ
              },
              disabled: !Wd,
              panel: !0,
              onClick: Zd.dungeons.show
            }));
            gd || (gd = (0, td.w)((0, ad.createElement)(mZ, {
              controller: Zd
            }), {
              content: (0, ad.createElement)(bZ, {
                controller: Zd
              }),
              onClose: Zd.close
            }))
          },
          Do: () => {
            var dd;
            for (const Jd of wd.values()) Jd.Do();
            bd.Do(Sd), Hd.Do(), null === (dd = jd) || void 0 === dd || dd.Do(), Zd.skills.Do(), Zd.quests.Do(), Zd.dailyReward.Do(), Zd.mailbox.Do(), Zd.map.Do()
          }
        }
      }
  },
  36534: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Nd,
      g: () => pd
    });
    const pd = "skyblockSkills",
      Nd = "skills_test_gym"
  },
  9257: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Nd,
      h: () => Pd
    });
    const pd = [{
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

    function Nd(dd) {
      let Jd, kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof dd) {
        if (!Number.isFinite(dd)) return "0";
        if (Math.abs(dd) < 100) {
          const Jd = dd < 0 ? "-" : "",
            kd = Math.abs(dd);
          return kd >= 10 ? `${Jd}${kd.toFixed(1).replace(/\.0$/,"")}` : `${Jd}${kd.toFixed(2).replace(/\.?0+$/,"")}`
        }
        Jd = BigInt(Math.floor(dd))
      } else Jd = dd;
      const Nd = Jd < 0n ? -Jd : Jd,
        Wd = Jd < 0n ? "-" : "",
        Pd = Nd.toString();
      if (Pd.length <= kd) return `${Wd}${Pd}`;
      const Zd = 3 * Math.floor((Pd.length - 1) / 3);
      if (Zd < 3) return `${Wd}${Pd}`;
      if (Zd > 3 * pd.length) {
        const dd = Pd[0],
          Jd = Pd.slice(1, 3).replace(/0+$/, "");
        return `${Wd}${Jd?`${dd}.${Jd}`:dd}e${Pd.length-1}`
      }
      const {
        threshold: gd,
        suffix: Cd
      } = pd[pd.length - Zd / 3], Kd = Nd / gd, od = Number(1000n * (Nd % gd) / gd), ld = Number(Kd) + od / 1e3;
      let Qd;
      return Qd = ld >= 100 ? Math.floor(ld).toString() : ld >= 10 ? ld.toFixed(1).replace(/\.0$/, "") : ld.toFixed(2).replace(/\.?0+$/, ""), `${Wd}${Qd}${Cd}`
    }
    const Wd = pd.map((dd => {
      let {
        threshold: Jd,
        suffix: kd
      } = dd;
      return {
        threshold: Number(Jd),
        suffix: kd
      }
    })).filter((dd => {
      let {
        threshold: Jd
      } = dd;
      return Number.isFinite(Jd)
    }));

    function Pd(dd) {
      const Jd = Math.abs(dd),
        kd = dd < 0 ? "-" : "";
      for (const {
          threshold: pd,
          suffix: Nd
        }
        of Wd)
        if (Jd >= pd) {
          const dd = Jd / pd;
          if (dd >= 1e3) return `${kd}${Jd.toExponential(2).replace("e+","e")}`;
          let Wd;
          return Wd = dd >= 100 ? Math.floor(dd).toString() : dd >= 10 ? dd.toFixed(1).replace(/\.0$/, "") : dd.toFixed(2).replace(/\.?0+$/, ""), `${kd}${Wd}${Nd}`
        } return `${kd}${Jd}`
    }
  },
  38694: (dd, Jd, kd) => {
    var pd = {
      "./combat_1.png": 38700,
      "./dungeon_crumbling_crypt.png": 38709,
      "./dungeon_frozen_hollow.png": 38714,
      "./dungeon_wildwood_grove.png": 38719,
      "./dungeons.png": 38725,
      "./farming_1.png": 38730,
      "./fishing_1.png": 38739,
      "./hub.png": 38742,
      "./island.png": 38745,
      "./mining_1.png": 38752,
      "./mining_1_bridge.png": 38760,
      "./mining_1_gallery.png": 38763,
      "./mining_1_hollow.png": 38768,
      "./mining_1_village.png": 38772
    };

    function Nd(dd) {
      var Jd = Wd(dd);
      return kd(Jd)
    }

    function Wd(dd) {
      if (!kd.o(pd, dd)) {
        var Jd = new Error("Cannot find module '" + dd + "'");
        throw Jd.code = "MODULE_NOT_FOUND", Jd
      }
      return pd[dd]
    }
    Nd.keys = function() {
      return Object.keys(pd)
    }, Nd.resolve = Wd, dd.exports = Nd, Nd.id = 38694
  },
  38700: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  38709: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  38714: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  38719: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  38725: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  38730: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/farming_1.08302e28e41bf98474fe.png"
  },
  38739: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  38742: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/hub.8b20a64678134496251d.png"
  },
  38745: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/island.113e20c7bd7db93fe1ce.png"
  },
  38752: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/mining_1.68cac4bdadc5ef809ae5.png"
  },
  38760: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/mining_1_bridge.56ff82ba845db0b52726.png"
  },
  38763: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/mining_1_gallery.4e799e6329dbc66249ce.png"
  },
  38768: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  38772: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/mining_1_village.c2a625c1c4541a1fbe65.png"
  },
  18700: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  20930: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  23256: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  24763: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  26456: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  26472: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  38683: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);