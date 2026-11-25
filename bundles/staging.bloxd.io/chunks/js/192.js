export const id = 192;
export const ids = [52, 192];
export const modules = {
  38855: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt,
      f: () => Dt
    });
    const Ot = new WeakMap;

    function qt(tt, et) {
      return Ot.set(tt, et), tt
    }

    function Dt(tt) {
      var et;
      return null !== (et = Ot.get(tt)) && void 0 !== et ? et : null
    }
  },
  38751: (tt, et, Vt) => {
    function Ot(tt, et, Vt) {
      var Ot;
      const {
        width: qt,
        height: Dt
      } = Vt, mt = null !== (Ot = tt.text) && void 0 !== Ot ? Ot : tt, dt = (mt.x / 100 - .5) * qt, jt = (mt.y / 100 - .5) * Dt, Ht = qt / 2 - et.x;
      if (null !== tt.text && Math.abs(dt) <= Ht && jt >= et.top - Dt / 2 && jt <= Dt / 2 - et.bottom) return {
        x: mt.x,
        y: mt.y
      };
      const Xt = Math.min(0 === dt ? 1 / 0 : Ht / Math.abs(dt), jt > 0 ? (Dt / 2 - et.bottom) / jt : jt < 0 ? (et.top - Dt / 2) / jt : 1 / 0);
      return !Number.isFinite(Xt) || Xt < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + dt * Xt / qt * 100,
        y: 50 + jt * Xt / Dt * 100
      }
    }
    Vt.d(et, {
      b: () => Ot
    })
  },
  38760: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => mt
    });
    const Ot = 4,
      qt = 12e3,
      Dt = 1e3;
    class mt {
      constructor() {
        let {
          limit: tt = Ot,
          windowMs: et = qt,
          spacingMs: Vt = Dt,
          now: mt = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = tt, this.windowMs = et, this.spacingMs = Vt, this.now = mt
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const tt of this.priority) tt.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const tt = this.now();
        this.sent.push(tt), this.lastSentAt = tt, this.schedule(), this.notify()
      }
      addPriority(tt) {
        return this.priority.add(tt), () => {
          this.priority.delete(tt)
        }
      }
      subscribe(tt) {
        return this.listeners.add(tt), () => {
          this.listeners.delete(tt)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const tt of this.priority)
          if (tt.waiting()) return !0;
        return !1
      }
      prune() {
        const tt = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= tt;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const tt = this.now(),
          et = this.lastSentAt + this.spacingMs,
          Vt = Math.min(et > tt ? et : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        Vt !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, Vt - tt)))
      }
      notify() {
        for (const tt of this.listeners) tt()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38747: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot
    });
    class Ot {
      constructor(tt, et, Vt) {
        this.sw = tt, this.beforeOpen = et, this.afterClose = Vt, this.open = !1, this.df = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.df && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(tt) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(tt)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.df = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.df || (this.snapshot = this.buildSnapshot(), this.sw(this.snapshot))
      }
    }
  },
  38860: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      SkyblockEntityFacing: () => dt,
      needsSkyblockEntityFacing: () => mt
    });
    var Ot = Vt(707),
      qt = Vt(4339),
      Dt = Vt(38869);

    function mt(tt, et) {
      if (tt.metaInfo === Ot.d || "Iron Guardian" === tt.type || "Gold Guardian" === tt.type) return !0;
      if ("Pig" === tt.type) return "sitting" === tt.pose;
      if ("Person" !== tt.meshKind || void 0 === tt.meshOpts) return !1;
      let Vt = null === et || void 0 === et ? void 0 : et.get(tt.meshOpts);
      if (void 0 === Vt) {
        var Dt, mt;
        const Ot = (0, qt.h)(tt);
        Vt = !1, "pig_napoleon" === (null === Ot || void 0 === Ot || null === (Dt = Ot.opts.textures) || void 0 === Dt ? void 0 : Dt.head) ? Vt = !0 : "npc_pig_head" === (null === Ot || void 0 === Ot || null === (mt = Ot.opts.textures) || void 0 === mt ? void 0 : mt.head) && (Vt = "sitting" === Ot.opts.pose || "sitting"), et && (et.size >= 256 && et.clear(), et.set(tt.meshOpts, Vt))
      }
      return "sitting" === Vt ? "sitting" === tt.pose : Vt
    }(0, Dt.e)("skyblock", ((tt, et) => {
      et.setFacingTolerance(mt(tt) ? 0 : null)
    }));
    class dt {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = tt, this.alsoVisit = et, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = tt => {
          var et;
          const Vt = this.api.getEntityInfo(tt);
          Vt && (mt(Vt, this.meshFacingCache) && (this.api.setFacingTolerance(tt, 0), this.nextFacing.add(tt)), null === (et = this.alsoVisit) || void 0 === et || et.call(this, tt, Vt))
        }
      }
      BQ() {
        const {
          api: tt
        } = this, et = this.nextFacing;
        tt.forEachEntity(this.visit);
        for (const Vt of this.facing) et.has(Vt) || tt.setFacingTolerance(Vt, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = et
      }
      dispose() {
        for (const tt of this.facing) this.api.setFacingTolerance(tt, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  38744: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      default: () => Qj
    });
    const Ot = "island";
    var qt = Vt(391);
    const Dt = (0, qt.Lb)([0, 0, -1]),
      mt = [{
        name: "S",
        bearing: (0, qt.Lb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, qt.Lb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: Dt
      }, {
        name: "W",
        bearing: (0, qt.Lb)([1, 0, 0])
      }];

    function dt(tt, et, Vt) {
      return [100 * (Vt.mapMaxX - tt) / (Vt.mapMaxX - Vt.mapMinX), 100 * (et - Vt.mapMinZ) / (Vt.mapMaxZ - Vt.mapMinZ)]
    }

    function jt(tt, et, Vt) {
      const qt = "local" === et,
        Dt = tt.background,
        mt = et => Dt ? dt(et[0] - tt.mapOrigin[0], et[2] - tt.mapOrigin[2], Dt.bounds) : [50, 50],
        jt = (tt.insideDungeon ? [] : tt.landmarks).map((tt => {
          var et, Ot;
          return {
            id: tt.id,
            name: Vt(tt.visited && tt.nameKey ? null !== (et = tt.mapLabelKey) && void 0 !== et ? et : tt.nameKey : "skyblockGame:mapUnknown"),
            icon: tt.visited && null !== (Ot = tt.icon) && void 0 !== Ot ? Ot : "unknown",
            visited: tt.visited,
            current: !1,
            position: mt(tt.position),
            travelKind: "landmark",
            travelId: tt.id
          }
        })),
        Xt = tt.zones.map((et => {
          var Ot;
          return {
            id: et.id,
            name: Vt(et.visited && et.nameKey ? et.nameKey : "skyblockGame:mapUnknown"),
            icon: et.visited && null !== (Ot = et.icon) && void 0 !== Ot ? Ot : "unknown",
            visited: et.visited,
            current: et.id === tt.zoneId,
            position: et.position,
            thumbnail: et.visited ? et.id : void 0,
            travelKind: "zone",
            travelId: et.id
          }
        })),
        Qt = tt.insideDungeon || !Dt ? [] : tt.portals.map((tt => {
          var et;
          return {
            id: tt.id,
            name: Vt(null !== (et = tt.nameKey) && void 0 !== et ? et : "skyblockGame:mapUnknown"),
            icon: tt.visited ? "dungeons" === tt.destination ? "portal_orange" : "portal" : "unknown",
            visited: tt.visited,
            current: !1,
            position: mt(tt.position),
            colour: tt.colour,
            travelKind: "zone",
            travelId: tt.destination
          }
        })),
        lt = qt ? jt : Xt,
        Et = lt.filter((tt => tt.visited)).length,
        ft = Dt ? (Dt.bounds.mapMaxX - Dt.bounds.mapMinX) / (Dt.bounds.mapMaxZ - Dt.bounds.mapMinZ) : 2,
        wt = Dt ? JSON.stringify([Dt.bounds, tt.mapOrigin]) : "";
      return {
        local: qt,
        points: lt,
        portals: qt ? Qt : [],
        progress: lt.length ? Vt("skyblockGame:mapDiscovered", {
          current: String(Et),
          total: String(lt.length)
        }) : null,
        percent: lt.length ? 100 * Et / lt.length : 0,
        canTravel: [...lt, ...qt ? Qt : []].some((tt => tt.visited && !tt.current)),
        noLandmarks: qt && !tt.insideDungeon && 0 === jt.length,
        background: Dt ? {
          imageKey: Dt.imageKey,
          fallbackImageKey: tt.zoneId,
          geometryKey: wt,
          label: Vt(Dt.labelKey),
          colour: Dt.backgroundColour,
          ratio: ft
        } : null,
        connections: Ht(tt.zones),
        minimap: Dt ? {
          imageKey: Dt.imageKey,
          fallbackImageKey: tt.zoneId,
          geometryKey: wt,
          label: Vt(Dt.labelKey),
          colour: Dt.backgroundColour,
          caption: Vt(tt.zoneId === Ot ? "skyblockGame:zoneIsland" : Dt.labelKey),
          width: (Dt.bounds.mapMaxX - Dt.bounds.mapMinX) / Dt.minimapSpan * 100 + "%",
          height: (Dt.bounds.mapMaxZ - Dt.bounds.mapMinZ) / Dt.minimapSpan * 100 + "%",
          markers: [...jt, ...Qt]
        } : null
      }
    }

    function Ht(tt) {
      const et = new Set;
      return tt.flatMap((Vt => Vt.connections.flatMap((Ot => {
        const qt = tt.find((tt => tt.id === Ot)),
          Dt = [Vt.id, Ot].sort().join("|");
        return !qt || et.has(Dt) ? [] : (et.add(Dt), [{
          id: `${Vt.id}-${Ot}`,
          start: Vt.position,
          end: qt.position,
          explored: Vt.visited && qt.visited
        }])
      }))))
    }
    var Xt = Vt(38747);
    class Qt extends Xt.b {}
    const lt = "skyblockMapView";
    class Et extends Qt {
      constructor(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(tt, Ot, qt), this.requestTravel = et, this.translate = Vt, this.now = Dt, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = tt => {
          this.tab = tt, this.feedbackKey = "", this.emit()
        }, this.travel = (tt, et) => {
          if (!this.map || this.pending || this.df) return;
          const Vt = ("zone" === tt ? this.map.zones : this.map.landmarks).find((tt => tt.id === et));
          if (Vt) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in Vt && !Vt.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (Vt.visited)
              if ("zone" === tt && et === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const Vt = ++this.nextRequestId;
                this.pending = {
                  requestId: Vt,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: tt,
                  id: et,
                  requestId: Vt
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
      setTranslator(tt) {
        this.translate = tt, this.emit()
      }
      Qf(tt) {
        var et;
        if (!this.df)
          if ("entities" !== tt.kind)
            if ("open" !== tt.kind) {
              var Vt, Ot;
              if ("snapshot" === tt.kind)(null === (Vt = tt.snapshot) || void 0 === Vt ? void 0 : Vt.zoneId) !== (null === (Ot = this.map) || void 0 === Ot ? void 0 : Ot.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = tt.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === tt.kind) {
                var qt;
                tt.requestId === (null === (qt = this.pending) || void 0 === qt ? void 0 : qt.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (tt.requestId === (null === (et = this.pending) || void 0 === et ? void 0 : et.requestId)) {
                var Dt;
                this.pending = null, this.feedbackKey = null !== (Dt = tt.errorKey) && void 0 !== Dt ? Dt : "", null === tt.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = tt.entities
      }
      BQ() {
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
          presentation: this.map ? jt(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const ft = 67.5 * Math.PI / 180;

    function wt(tt, et) {
      const Vt = Math.abs(tt);
      if (Vt > ft || et.trackHalfWidth <= 0) return null;
      const Ot = et.trackHalfWidth,
        qt = et.screenHalfWidth / (et.tanHalfFovX * Math.max(.5, Math.cos(et.pitch))),
        Dt = Math.min(Math.atan(.6 * Ot / qt), .75 * ft),
        mt = qt * Math.tan(Dt);
      let dt;
      if (Vt <= Dt) dt = qt * Math.tan(Vt);
      else {
        const tt = ft - Dt,
          et = Math.max(0, qt * tt / (Math.cos(Dt) ** 2 * (Ot - mt)) - 1),
          jt = (Vt - Dt) / tt;
        dt = mt + (Ot - mt) * (1 + et) * jt / (1 + et * jt)
      }
      return 50 + Math.sign(tt) * dt * 50 / Ot
    }
    class yt {
      constructor(tt, et) {
        this.map = tt, this.visited = et, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = et ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const tt = this.map.getSnapshot().map;
        return !tt || tt.insideDungeon ? [] : tt.landmarks.filter((tt => tt.visited === this.visited)).map((tt => {
          var et, Vt;
          return {
            id: `landmark:${tt.id}`,
            position: tt.position,
            icon: null !== (et = tt.icon) && void 0 !== et ? et : "unknown",
            nameKey: null !== (Vt = tt.nameKey) && void 0 !== Vt ? Vt : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class Nt {
      constructor(tt, et, Vt, Ot) {
        this.map = tt, this.kind = et, this.position = Vt, this.alive = Ot, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = et, this.range = "enemy" === et ? 48 : 64, this.limit = 12
      }
      YM(tt) {
        if ("enemy" !== this.kind || this.alive(tt.pO)) return this.position(tt.pO)
      }
      getPoints() {
        const tt = [];
        for (const Ot of this.map.getEntities()) {
          if (Ot.kind !== this.kind || "enemy" === this.kind && !this.alive(Ot.compassEntityId)) continue;
          const qt = this.position(Ot.compassEntityId);
          var et, Vt;
          if (qt) tt.push({
            id: `${this.kind}:${Ot.compassEntityId}`,
            pO: Ot.compassEntityId,
            kind: this.kind,
            icon: null !== (et = Ot.icon) && void 0 !== et ? et : Ot.npcSkin ? `npc_${Ot.npcSkin}` : this.kind,
            displayName: Ot.displayName,
            position: qt,
            nameKey: null !== (Vt = Ot.nameKey) && void 0 !== Vt ? Vt : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return tt
      }
    }
    class Mt {
      constructor(tt) {
        this.map = tt, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const tt = this.map.getSnapshot().map;
        return !tt || tt.insideDungeon ? [] : tt.portals.map((tt => {
          var et;
          return {
            id: "portal:" + tt.id,
            kind: "portal",
            position: tt.position,
            nameKey: null !== (et = tt.nameKey) && void 0 !== et ? et : "skyblockGame:compassUnvisitedZone",
            icon: tt.visited ? "dungeons" === tt.destination ? "portal_orange" : "portal" : "unknown",
            colour: tt.colour
          }
        }))
      }
    }
    class bt {
      constructor(tt) {
        this.target = tt, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const tt = this.target();
        return tt ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: tt.position,
          nameKey: tt.nameKey
        }] : []
      }
    }

    function Jt(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tt.position;
      const Dt = Ot[0] - et[0],
        mt = Ot[2] - et[2];
      return {
        ...tt,
        position: Ot,
        offset: qt.e.computeShortestRotation(Vt, (0, qt.Lb)([Dt, 0, mt])),
        distance: Math.hypot(Dt, Ot[1] - et[1], mt)
      }
    }
    let Ct;

    function ut(tt, et) {
      var Vt;
      return (null === (Vt = Ct) || void 0 === Vt ? void 0 : Vt.locale) !== et && (Ct = {
        locale: et,
        near: new Intl.NumberFormat(et, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(et, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (tt < 10 ? Ct.near : Ct.far).format(tt)
    }
    class Kt {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(tt) {
        return this.providers.set(tt.id, tt), this.refreshAt = 0, () => {
          this.providers.get(tt.id) === tt && (this.providers.delete(tt.id), this.refreshAt = 0)
        }
      }
      frame(tt, et, Vt) {
        if (Vt >= this.refreshAt) {
          this.refreshAt = Vt + 200, this.candidates = [];
          for (const et of this.providers.values()) {
            if (!et.enabled) continue;
            const Vt = et.getPoints().map((et => {
              const Vt = et.position;
              return {
                point: et,
                distance: Math.hypot(Vt[0] - tt[0], Vt[1] - tt[1], Vt[2] - tt[2])
              }
            })).filter((tt => tt.distance <= et.range)).sort(((tt, et) => tt.distance - et.distance)).slice(0, et.limit);
            for (const {
                point: tt
              }
              of Vt) this.candidates.push({
              provider: et,
              point: tt
            })
          }
        }
        const Ot = [];
        for (const {
            point: qt,
            provider: Dt
          }
          of this.candidates) {
          if (!Dt.enabled) continue;
          const Vt = Dt.YM ? Dt.YM(qt) : qt.position;
          if (Vt) {
            const Dt = Jt(qt, tt, et, Vt);
            Math.abs(Dt.offset) <= ft && Ot.push(Dt)
          }
        }
        return Ot
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var ht = Vt(36867),
      vt = Vt(63);
    const Wt = [{
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
      St = Wt.length;

    function ct(tt) {
      return tt >= St ? 1 : tt + 1
    }
    const Rt = "skyblockQuests",
      It = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      Pt = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function Zt(tt) {
      let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const Vt = Math.max(0, Math.floor(tt)),
        Ot = Math.floor(Vt % 1e3 / 100),
        qt = Math.floor(Vt / 1e3),
        Dt = qt % 60,
        mt = Math.floor(qt / 60),
        dt = mt % 60,
        jt = Math.floor(mt / 60),
        Ht = tt => tt < 10 ? `0${tt}` : String(tt),
        Xt = et ? `.${Ot}` : "";
      return jt > 0 ? `${jt}:${Ht(dt)}:${Ht(Dt)}${Xt}` : `${dt}:${Ht(Dt)}${Xt}`
    }
    const Lt = "devquests",
      Ft = "none",
      kt = {
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
      Gt = "Compressed Messy Stone",
      zt = {
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
      ot = ["Stone", "Diorite", "Andesite", "Granite"],
      rt = new Set(ot),
      Ut = (Object.keys(zt), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const At = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function it(tt, et) {
      const Vt = Math.floor(5 * tt / (2 * et + 1));
      return Math.min(4, Math.max(0, Vt))
    }
    var Yt = Vt(1325);
    var Bt = Vt(36593);
    var pt = Vt(36861),
      xt = Vt(31),
      Tt = Vt(9101);
    const gt = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      st = 1e3;

    function nt(tt) {
      return Math.max(0, tt)
    }

    function te(tt) {
      return 1 + .01 * nt(tt)
    }

    function ee(tt) {
      return 1 + .005 * nt(tt)
    }

    function Ve(tt) {
      return 1 + .005 * nt(tt)
    }

    function Oe(tt) {
      return .01 * nt(tt)
    }

    function qe(tt) {
      return 150 / (150 + nt(tt))
    }

    function De(tt) {
      return 1 + .002 * nt(tt)
    }

    function me(tt) {
      return Math.round(10 * tt) / 10
    }

    function de(tt, et) {
      switch (tt) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: me(100 * (ee(et) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: me(100 * (te(et) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: me(100 * (Ve(et) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: me(100 * Oe(et))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: me(100 * (1 - qe(et)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: me(100 * (De(et) - 1))
          }
      }
    }

    function je(tt) {
      return "farming" === tt ? 200 : 100
    }

    function He(tt, et) {
      if (!Number.isSafeInteger(tt) || tt < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const Vt = je(et),
        Ot = tt => function(tt, et) {
          return je(tt) * et * (et + 1) / 2
        }(et, tt);
      let qt = Math.min(st, Math.floor((Math.sqrt(8 * tt / Vt + 1) - 1) / 2));
      return qt < st && Ot(qt + 1) <= tt ? qt++ : Ot(qt) > tt && qt--, {
        totalXp: tt,
        level: qt,
        xpIntoLevel: tt - Ot(qt),
        xpForNextLevel: qt === st ? null : Vt * (qt + 1)
      }
    }
    const Xe = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function Qe(tt) {
      return Xe.has(tt)
    }
    const le = new Set(qt.Ab);

    function Ee(tt) {
      return le.has(tt)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const fe = {
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
      we = {
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
      ye = {
        ...we,
        ...Object.fromEntries(Object.entries(Ut).map((tt => {
          let [et, Vt] = tt;
          return [et, 9 * we[Vt]]
        })))
      },
      Ne = {
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
      ae = {
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
    const Me = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      be = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function Je(tt) {
      return `rgb(${be[tt].join(", ")})`
    }

    function Ce(tt, et, Vt) {
      if (!Vt) return tt(et);
      const Ot = {};
      for (const [qt, Dt] of Object.entries(Vt)) Ot[qt] = "string" === typeof Dt ? Dt : tt(Dt.translationKey);
      return tt(et, Ot)
    }
    class ue {
      constructor(tt, et) {
        this.now = tt, this.getJournal = et, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.Pd = !1, this.onShown = () => {}
      }
      enqueue(tt) {
        const et = Ke(tt);
        if (et) this.pending.push(tt);
        else {
          const et = this.pending.findIndex(Ke);
          this.pending.splice(-1 === et ? this.pending.length : et, 0, tt)
        }
        return (null === this.current || null !== this.followUp && !et) && (this.advance(), !0)
      }
      setHeld(tt) {
        return this.Pd = tt, !tt && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      BQ() {
        const tt = this.getJournal(),
          et = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === et ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === et || void 0 === et ? void 0 : et.kind) && tt && tt.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === et || void 0 === et ? void 0 : et.kind)) {
          const tt = this.findFollowUp(this.current);
          if ("step" !== (null === tt || void 0 === tt ? void 0 : tt.kind) || tt.questId !== et.questId || tt.step.id !== et.step.id) return this.showFollowUp(tt, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(tt, et, Vt) {
        var Ot, qt, Dt, mt;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, tt, Vt);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, tt);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, tt, et);
        const {
          questCompletionKind: dt,
          questCompletionNameKey: jt
        } = this.current, Ht = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, Xt = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, Qt = "step" === (null === (Ot = this.followUp) || void 0 === Ot ? void 0 : Ot.kind) ? this.followUp : null, lt = "explore" === (null === (qt = this.followUp) || void 0 === qt ? void 0 : qt.kind);
        let Et;
        return Et = lt ? tt("skyblockGame:questExploreTitle") : null !== Qt ? "quest" === dt ? tt("skyblockGame:questNextQuestTitle", {
          quest: tt(Qt.questNameKey)
        }) : tt("skyblockGame:questNextStepTitle") : tt("started" === dt ? "skyblockGame:questStartedTitle" : "quest" === dt ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? dt : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: Et,
          name: lt ? et("skyblockGame:questExploreName") : null !== Qt ? Ce(et, Qt.step.nameKey, Qt.step.nameParams) : Ce(et, jt, Ht),
          description: lt ? et("skyblockGame:questExploreDescription") : null === Qt ? null : Ce(et, Qt.step.descriptionKey, Qt.step.descriptionParams),
          reward: null === this.followUp && Xt > 0 ? et("skyblockGame:questCoinRewardSuffix", {
            amount: Xt.toLocaleString(Vt)
          }) : null,
          iconItem: null !== (Dt = null === Qt || void 0 === Qt ? void 0 : Qt.step.questIconItem) && void 0 !== Dt ? Dt : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== Qt && (null === (mt = this.getJournal()) || void 0 === mt ? void 0 : mt.trackedQuestId) === Qt.questId ? Qt.step.nameKey : null
        }
      }
      getSkillLevelView(tt, et, Vt) {
        let {
          skill: Ot,
          beforeLevel: qt,
          level: Dt
        } = tt;
        const mt = de(Ot, qt),
          dt = de(Ot, Dt);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: et(`skyblockGame:${Ot}`),
          name: et("skyblockGame:skillLevelUp", {
            to: Dt.toLocaleString(Vt)
          }),
          description: mt.percent === dt.percent ? null : et(`${dt.translationKey}Change`, {
            before: mt.percent.toLocaleString(Vt),
            after: dt.percent.toLocaleString(Vt)
          }),
          reward: null,
          iconItem: Me[Ot],
          accent: Je(Ot),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(tt, et) {
        let {
          landmarkNameKey: Vt
        } = tt;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: et("skyblockGame:landmarkDiscovered"),
          name: et(Vt),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(tt, et, Vt) {
        let {
          titleKey: Ot,
          textKey: qt,
          params: Dt = {},
          nameKeys: mt = {},
          iconItem: dt = null
        } = tt;
        const jt = {
          ...Dt
        };
        for (const [Ht, Xt] of Object.entries(mt)) jt[Ht] = et(Xt);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: et(Ot),
          name: Vt(qt, jt),
          description: null,
          reward: null,
          iconItem: dt,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var tt;
        if (null !== this.followUp) return 5600;
        switch (null === (tt = this.current) || void 0 === tt ? void 0 : tt.questCompletionKind) {
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
      showFollowUp(tt, et) {
        null === tt || this.Pd ? this.advance() : (this.followUp = tt, this.token++, this.shownAt = this.now(), this.expiresAt = null !== et && void 0 !== et ? et : this.shownAt + this.durationMs())
      }
      findFollowUp(tt) {
        var et;
        const Vt = this.getJournal();
        if (!Vt || this.hasPendingQuestPopup() || Ke(tt)) return null;
        const Ot = "started" === tt.questCompletionKind ? Vt.active.some((et => et.id === tt.questCompletionQuestId)) : "quest" === tt.questCompletionKind ? Vt.completed.some((et => et.id === tt.questCompletionQuestId)) : [...Vt.active, ...Vt.completed].some((et => et.id === tt.questCompletionQuestId && et.subquests.some((et => et.id === tt.questCompletionStepId && "completed" === et.status))));
        if (!Ot) return null;
        if ("quest" === tt.questCompletionKind && 0 === Vt.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const qt = Vt.active.find((tt => tt.id === Vt.trackedQuestId)),
          Dt = null !== (et = null === qt || void 0 === qt ? void 0 : qt.subquests.find((tt => "ready" === tt.status))) && void 0 !== et ? et : null === qt || void 0 === qt ? void 0 : qt.subquests.find((tt => "active" === tt.status));
        return Dt ? {
          kind: "step",
          questId: qt.id,
          questNameKey: qt.nameKey,
          step: Dt
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((tt => !Ke(tt)))
      }
      advance() {
        var tt;
        this.current = this.Pd ? null : null !== (tt = this.pending.shift()) && void 0 !== tt ? tt : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function Ke(tt) {
      return he(tt.questCompletionKind)
    }

    function he(tt) {
      return "skillLevel" === tt || "landmark" === tt || "npcNote" === tt
    }
    var ve = Vt(38751);
    const We = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      Se = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      ce = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      Re = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      Ie = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var Pe = Vt(38755);
    var Ze = Vt(38758);
    const Le = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      Fe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const ke = Vt.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const Ge = Vt.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      ze = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var oe = Vt(18600),
      re = Vt(20729),
      Ue = Vt(23164),
      Ae = Vt(24740),
      ie = Vt(26416);
    const Ye = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: oe,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: re,
      cow: Ie,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: Vt(26437),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: We,
      fishing_1: We,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: Se,
      guardian_iron: ce,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: Ue,
      mines: Ae,
      mining_1: Ae,
      npc: Re,
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
      npc_gold_guardian: Se,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: ce,
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
      npc_portal_mage: Pe,
      npc_rabbit_aristocrat: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAXklEQVR4nGNgIAP8h2JcfDD4P3fB+v/3csphkmB2S/tUDMX/+yYuIE7h3AXrwYqRMU4TlZSV4YpAbJwKYe4EYRC7prYLU6GLocX/ODe3/1+//wJjEBskhtXnODBpAAD3lm2BX81XrwAAAABJRU5ErkJggg==",
      npc_smuglyn: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAASklEQVR42mNgIAP8x4FRFWlqamLF6IrBgj1hoSgYq8Kv33/9txBi/z81LhaMQWyQGIbC5VmZcEUwDBLDUIiuCIRB1pOtkOjgIQgAhutlSTAZTWcAAAAASUVORK5CYII=",
      npc_tentacle_boy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAiElEQVR4nGNkQID/DNgBI5wAKXJw8Wb48vkjhqozJ4+A1bHABKI0arEad+akBdzY/ybmNgw/f/3CqpCdjQ1sKthEM4scHM5DsZ7hf23T3v9fv//6z8srAmaj80FqmGC6JMSkUExB54Ot1ubgYSgoXQkWuHXrKpiG8UFyMAA3HkbjEIMoRqMxxABOskezGUlSqQAAAABJRU5ErkJggg==",
      npc_tentacle_girl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAgklEQVR4nGNgwA3+QzEYMOGQ/H9viS7Dp4N+MDEGFmRFO8PqGYTFRBjevnrDwMCwjuHN4/twSRZsikD07U1BUKnLKArBQExYAIxh7OvX78DlUNzoMbEWKxtDYb11MFY2htXPPr5nOH7mApiW4hdECxAkX/fbJIGDYqV3MYwND0eiAQAf4TQGGrZ+tQAAAABJRU5ErkJggg==",
      npc_tentacle_guy: Ze,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: Le,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: ke,
      quest_talk: Ge,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: ze,
      watermelon: ie
    };

    function Be(tt, et) {
      const Vt = document.createElement("img");
      return Vt.className = et, Vt.src = tt, Vt.alt = "", Vt.draggable = !1, Vt
    }

    function pe(tt) {
      var et;
      const Vt = null !== (et = Ye[tt]) && void 0 !== et ? et : tt.startsWith("npc_") ? Re : ze;
      if ("portal" !== tt) return Be(Vt, "SkyblockMapIcon");
      const Ot = document.createElement("span");
      Ot.className = "SkyblockMapIcon Portal";
      const qt = document.createElement("span");
      return qt.className = "SkyblockMapIconTint", qt.style.maskImage = qt.style.webkitMaskImage = `url("${Fe}")`, Ot.append(Be(Vt, "SkyblockMapIconLayer"), qt, Be(Fe, "SkyblockMapIconLayer SkyblockMapIconShade")), Ot
    }
    var xe = Vt(38733),
      Te = Vt(4347);
    const ge = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function se(tt) {
      const et = new Te.k(tt);
      return {
        radius: 45,
        squareness: 3,
        wobbles: ge.map((tt => {
          let {
            lobes: Vt,
            amount: Ot
          } = tt;
          return {
            lobes: Vt[Math.floor(et.next() * Vt.length)],
            amount: Ot[0] + et.next() * (Ot[1] - Ot[0]),
            phase: 2 * et.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function ne(tt) {
      let {
        radius: et,
        squareness: Vt,
        wobbles: Ot,
        samples: qt
      } = tt;
      const Dt = [];
      for (let mt = 0; mt < qt; mt++) {
        const tt = 2 * Math.PI * mt / qt,
          dt = Math.cos(tt),
          jt = Math.sin(tt),
          Ht = et * (Math.abs(dt) ** Vt + Math.abs(jt) ** Vt) ** (-1 / Vt) * Ot.reduce(((et, Vt) => {
            let {
              lobes: Ot,
              amount: qt,
              phase: Dt
            } = Vt;
            return et + qt * Math.sin(Ot * tt + Dt)
          }), 1);
        Dt.push(`${(50+Ht*dt).toFixed(2)} ${(50+Ht*jt).toFixed(2)}`)
      }
      return `M${Dt.join("L")}Z`
    }
    const tV = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class eV {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.df = !1, this.mountCompass = tt => {
          var et;
          if (null === (et = this.stopLayout) || void 0 === et || et.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !tt || this.df) return;
          const Vt = tt.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: tt,
            track: Vt,
            label: tt.querySelector(".SkyblockCompassLabel")
          }, Vt.replaceChildren();
          for (let qt = 0; qt < 4; qt++) {
            const tt = document.createElement("span");
            tt.className = "SkyblockCompassCardinal", Vt.appendChild(tt), this.cardinals.push(tt)
          }
          const Ot = (0, xe.d)(tV, [tt], this.layout);
          this.stopLayout = () => {
            Ot(), Vt.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = tt => {
          this.terrain = this.df ? null : tt, this.render(this.frame)
        }, this.mountMinimapSearchArea = tt => {
          this.mountSearchArea("minimap", tt)
        }, this.mountMapSearchArea = tt => {
          this.mountSearchArea("map", tt)
        }, this.mountPlayer = tt => {
          this.player = this.df ? null : tt, this.render(this.frame)
        }, this.mountWaypoint = tt => {
          var et, Vt;
          if (null === (et = this.stopWaypoint) || void 0 === et || et.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !tt || this.df) return;
          const Ot = tt.querySelector(".SkyblockQuestWaypointMarker");
          Ot.replaceChildren(pe("quest")), this.markerIcon = "quest", this.waypoint = {
            root: tt,
            marker: Ot,
            clip: tt.querySelector(".SkyblockQuestWaypointTextClip"),
            text: tt.querySelector(".SkyblockQuestWaypointText"),
            label: tt.querySelector(".SkyblockQuestWaypointLabel"),
            distance: tt.querySelector(".SkyblockQuestWaypointDistance"),
            hint: tt.querySelector(".SkyblockQuestWaypointHint")
          };
          const qt = () => {
              this.waypointMarkerSize = {
                width: Ot.offsetWidth,
                height: Ot.offsetHeight
              }, this.waypointInset = {
                x: Ot.offsetWidth / 2 + 8,
                top: Ot.offsetHeight + 8,
                bottom: 8
              }
            },
            Dt = new ResizeObserver((() => {
              qt(), this.render(this.frame)
            }));
          Dt.observe(Ot, {
            box: "border-box"
          });
          const mt = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", mt), null === (Vt = window.visualViewport) || void 0 === Vt || Vt.addEventListener("resize", mt), this.stopWaypoint = () => {
            var tt;
            Dt.disconnect(), window.removeEventListener("resize", mt), null === (tt = window.visualViewport) || void 0 === tt || tt.removeEventListener("resize", mt)
          }, mt(), qt(), this.render(this.frame)
        }, this.mountWaypointOrigin = tt => {
          var et;
          if (null === (et = this.stopWaypointOrigin) || void 0 === et || et.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = tt && !this.df ? Number(tt.dataset.notificationToken) : null, tt && !this.df && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const et = {
              nameKey: tt.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = et;
            const Vt = () => {
                const Vt = tt.getBoundingClientRect();
                et.x = (Vt.left + Vt.width / 2) / window.innerWidth * 100, et.y = (Vt.top + Vt.height / 2) / window.innerHeight * 100
              },
              Ot = new ResizeObserver(Vt);
            Ot.observe(tt.parentElement), Ot.observe(tt), window.addEventListener("resize", Vt), this.stopWaypointOrigin = () => {
              Ot.disconnect(), window.removeEventListener("resize", Vt)
            }, Vt()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const tt = this.compass.root,
            et = getComputedStyle(tt),
            Vt = getComputedStyle(document.documentElement),
            Ot = parseFloat(Vt.fontSize),
            qt = parseFloat(et.getPropertyValue("--compass-icon-size")) * Ot,
            Dt = "1" === et.getPropertyValue("--compass-fit-top").trim(),
            mt = Dt ? 1 : 8,
            dt = Array.from(document.querySelectorAll(tV), (tt => {
              var et;
              return (null !== (et = tt.querySelector(".MiddleTextTop")) && void 0 !== et ? et : tt).getBoundingClientRect()
            })).filter((tt => tt.width > 0 && tt.height > 0));
          let jt = (parseFloat(Vt.getPropertyValue("--notchTop")) || 0) + mt,
            Ht = "";
          if (Dt) {
            const et = window.innerWidth / 2,
              Vt = tt.getBoundingClientRect().height,
              Dt = [jt, ...dt.map((tt => Math.max(jt, tt.bottom + mt)))].sort(((tt, et) => tt - et));
            for (const tt of Dt) {
              let Dt = et - 8;
              for (const Ot of dt) Ot.bottom + mt <= tt || Ot.top >= tt + Vt + mt || (Dt = Math.min(Dt, Ot.right <= et ? et - Ot.right - 8 : Ot.left - et - 8));
              const Xt = 2 * Dt - qt;
              if (Xt >= 16 * Ot) {
                Ht = `${Xt}px`, jt = tt;
                break
              }
            }
          }
          tt.style.maxWidth !== Ht && (tt.style.maxWidth = Ht);
          const Xt = tt.getBoundingClientRect(),
            Qt = this.compassSize.trackHalfWidth;
          if (Xt.width > 0) {
            const tt = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: tt.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * qt / tt.width
          }
          if (!Ht)
            for (const lt of dt) lt.right > Xt.left - 8 && lt.left < Xt.right + 8 && (jt = Math.max(jt, lt.bottom + mt));
          tt.style.top = `${jt}px`, this.compassSize.trackHalfWidth !== Qt && this.render(this.frame)
        }
      }
      mountSearchArea(tt, et) {
        this.searchAreas[tt] = this.df ? null : et, this.render(this.frame)
      }
      render(tt) {
        if (this.df) return;
        if (this.frame = tt, this.compass && (VV(this.compass.root, !tt), tt)) {
          const et = this.compassSize.trackHalfWidth / 50;
          tt.compass.cardinals.forEach(((tt, Vt) => {
            const Ot = this.cardinals[Vt];
            Ot.textContent !== tt.name && (Ot.textContent = tt.name), VV(Ot, tt.hidden), Ot.style.translate = tt.left * et + "px"
          }));
          const Vt = new Set;
          tt.compass.markers.forEach(((Ot, qt) => {
            var Dt;
            Vt.add(Ot.id);
            let mt = this.markers.get(Ot.id);
            mt || (mt = document.createElement("span"), mt.className = "SkyblockCompassMarker", this.markers.set(Ot.id, mt), this.compass.track.appendChild(mt)), mt.dataset.icon !== Ot.icon && (mt.dataset.icon = Ot.icon, mt.replaceChildren(pe(Ot.icon))), mt.style.color = null !== (Dt = Ot.colour) && void 0 !== Dt ? Dt : "", mt.style.translate = Ot.left * et + "px", mt.style.zIndex = String(tt.compass.markers.length - qt), mt.title !== Ot.name && (mt.title = Ot.name)
          }));
          for (const [tt, Ot] of this.markers) Vt.has(tt) || (Ot.remove(), this.markers.delete(tt));
          this.compass.label.textContent !== tt.compass.label && (this.compass.label.textContent = tt.compass.label)
        }
        this.terrain && (VV(this.terrain, !(null !== tt && void 0 !== tt && tt.minimap)), null !== tt && void 0 !== tt && tt.minimap && (this.terrain.style.transform = tt.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", tt.minimap.iconRotation)));
        const et = null === tt || void 0 === tt ? void 0 : tt.searchArea;
        for (const Vt of [this.searchAreas.minimap, this.searchAreas.map])
          if (Vt && (VV(Vt, !et), et)) {
            if (this.searchAreaPath.seed !== et.shapeSeed && (this.searchAreaPath = {
                seed: et.shapeSeed,
                d: ne(se(et.shapeSeed))
              }), Vt.dataset.shapeSeed !== et.shapeSeed) {
              Vt.dataset.shapeSeed = et.shapeSeed;
              for (const tt of Vt.querySelectorAll("path")) tt.setAttribute("d", this.searchAreaPath.d)
            }
            Vt.style.left = `${et.left}%`, Vt.style.top = `${et.top}%`, Vt.style.width = `${et.width}%`, Vt.style.height = `${et.height}%`
          } if (this.player && (VV(this.player, !(null !== tt && void 0 !== tt && tt.player) || tt.player.hidden), null !== tt && void 0 !== tt && tt.player && (this.player.style.left = `${tt.player.left}%`, this.player.style.top = `${tt.player.top}%`, this.player.style.setProperty("--map-player-rotation", tt.player.rotation))), this.waypoint) {
          const {
            root: et,
            marker: Vt,
            clip: Ot,
            text: qt,
            label: Dt,
            distance: mt,
            hint: dt
          } = this.waypoint, jt = !(null !== tt && void 0 !== tt && tt.waypoint) || null !== tt.waypoint.popupToken && tt.waypoint.popupToken !== this.waypointOriginToken;
          VV(et, jt);
          let Ht = 1;
          const Xt = this.waypointLaunch;
          if (!jt && Xt && tt.waypoint.nameKey === Xt.nameKey) {
            const tt = performance.now();
            Xt.startedAt ??= tt, Ht = Math.min(1, Math.max(0, (tt - Xt.startedAt - 450) / 1e3)), Vt.style.opacity = String(Math.min(1, (tt - Xt.startedAt) / 150)), 1 === Ht && (this.waypointLaunch = null)
          } else Vt.style.opacity = "", Xt && null !== Xt.startedAt && (this.waypointLaunch = null);
          if (et.classList.toggle("Launching", Ht < 1), null !== tt && void 0 !== tt && tt.waypoint) {
            const et = this.waypointInset,
              jt = "quest_talk" === tt.waypoint.markerIcon ? function(tt, et, Vt) {
                if (!tt.text || null === tt.blockHeight || 0 === tt.nearness) return tt;
                const Ot = tt.blockHeight / 100 * Vt.height,
                  qt = -tt.nearness * (OV * Ot + et.width / 2),
                  Dt = tt.nearness * (qV * Ot + et.height / 2);
                return {
                  ...tt,
                  text: {
                    x: tt.text.x + qt / Vt.width * 100,
                    y: tt.text.y + Dt / Vt.height * 100
                  }
                }
              }(tt.waypoint, this.waypointMarkerSize, this.viewport) : tt.waypoint,
              Qt = (0, ve.b)(jt, et, this.viewport),
              lt = Ht * Ht * (3 - 2 * Ht),
              Et = Ht < 1 ? Xt.x + (Qt.x - Xt.x) * lt : Qt.x,
              ft = Ht < 1 ? Xt.y + (Qt.y - Xt.y) * lt : Qt.y;
            Vt.style.translate = `${Et}vw ${ft}vh`, Ot.style.clipPath = `inset(${et.top}px ${et.x}px ${et.bottom}px)`, VV(qt, Ht < 1 || !tt.waypoint.text), qt.style.opacity = String(1 - tt.waypoint.nearness), tt.waypoint.text && (qt.style.translate = `${tt.waypoint.text.x}vw ${tt.waypoint.text.y}vh`), Dt.textContent !== tt.waypoint.name && (Dt.textContent = tt.waypoint.name), this.markerIcon !== tt.waypoint.markerIcon && (this.markerIcon = tt.waypoint.markerIcon, Vt.replaceChildren(pe(this.markerIcon))), mt.textContent !== tt.waypoint.distance && (mt.textContent = tt.waypoint.distance), VV(dt, null === tt.waypoint.hint), null !== tt.waypoint.hint && dt.textContent !== tt.waypoint.hint && (dt.textContent = tt.waypoint.hint)
          }
        }
      }
      dispose() {
        var tt, et;
        this.mountWaypointOrigin(null), this.render(null), null === (tt = this.stopLayout) || void 0 === tt || tt.call(this), this.stopLayout = null, null === (et = this.stopWaypoint) || void 0 === et || et.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.df = !0
      }
    }

    function VV(tt, et) {
      tt.hidden !== et && (tt.hidden = et)
    }
    const OV = .55,
      qV = .6;
    const DV = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class mV {
      constructor(tt, et, Vt, Ot) {
        this.map = tt, this.quests = et, this.compass = Vt, this.display = new eV, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.df = !1, this.snapshot = null, this.texts = new Map, this.translate = Ot
      }
      setTranslator(tt, et) {
        this.translate = tt, this.locale = et, this.metresFormat = new Intl.NumberFormat(et), this.texts.clear()
      }
      translateCached(tt, et) {
        const Vt = void 0 === et ? tt : `${tt} ${et}`;
        let Ot = this.texts.get(Vt);
        return void 0 === Ot && (this.texts.size >= 500 && this.texts.clear(), Ot = this.translate(tt, void 0 === et ? void 0 : {
          distance: et
        }), this.texts.set(Vt, Ot)), Ot
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(tt, et, Vt) {
        if (this.df) return;
        if (!tt) return this.snapshot = null, void this.display.render(null);
        const Ot = this.map.getSnapshot().map,
          jt = Vt.cameraHeading,
          Ht = {
            ...this.display.compassSize,
            tanHalfFovX: Vt.tanHalfFovX,
            pitch: Vt.cameraPitch
          },
          Xt = [];
        if (Ot)
          for (const qt of this.compass.frame(tt, jt, et)) {
            const tt = wt(qt.offset, Ht);
            null !== tt && Xt.push({
              ...qt,
              left: tt
            })
          }
        const Qt = function(tt, et) {
            const Vt = [],
              Ot = tt => "quest" === tt.kind ? tt.distance - 1 : tt.distance,
              qt = [...tt].sort(((tt, et) => Ot(tt) - Ot(et) || tt.id.localeCompare(et.id)));
            for (const Dt of qt) {
              let tt = !1;
              if ("quest" !== Dt.kind)
                for (const Ot of Vt)
                  if (Math.abs(Ot.left - Dt.left) < et) {
                    tt = !0;
                    break
                  } tt || Vt.push(Dt)
            }
            return Vt
          }(Xt, this.display.compassSpacing),
          lt = function(tt) {
            let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              Vt = null;
            for (const Ot of tt) Math.abs(Ot.offset) <= et && (!Vt || Ot.distance < Vt.distance || Ot.distance === Vt.distance && Math.abs(Ot.offset) < Math.abs(Vt.offset)) && (Vt = Ot);
            return Vt
          }(Qt),
          Et = tt => {
            var et;
            return null !== (et = tt.displayName) && void 0 !== et ? et : this.translateCached(tt.nameKey)
          },
          ft = {
            compass: {
              markers: Qt.map((tt => ({
                id: tt.id,
                icon: tt.icon,
                colour: tt.colour,
                name: Et(tt),
                left: tt.left
              }))),
              cardinals: mt.map((tt => {
                let {
                  name: et,
                  bearing: Vt
                } = tt;
                const Ot = wt(qt.e.computeShortestRotation(jt, Vt), Ht);
                return {
                  name: et,
                  left: null !== Ot && void 0 !== Ot ? Ot : 0,
                  hidden: null === Ot
                }
              })),
              label: lt ? `${Et(lt)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",ut(lt.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== Ot && void 0 !== Ot && Ot.background) {
          const et = tt[0] - Ot.mapOrigin[0],
            Vt = tt[2] - Ot.mapOrigin[2],
            {
              rotation: qt,
              transform: mt
            } = function(tt, et, Vt, Ot) {
              const [qt, mt] = dt(tt, et, Ot), jt = Dt - Vt;
              return {
                rotation: jt,
                transform: `rotate(${jt}rad) translate(-${qt}%, -${mt}%)`
              }
            }(et, Vt, jt, Ot.background.bounds);
          ft.minimap = {
            transform: mt,
            iconRotation: -qt + "rad"
          };
          const [Ht, Xt] = dt(et, Vt, Ot.background.bounds);
          ft.player = {
            left: Ht,
            top: Xt,
            hidden: Ht < 0 || Xt < 0 || Ht > 100 || Xt > 100,
            rotation: -qt + "rad"
          }
        }
        const {
          waypoint: yt
        } = this.quests.getSnapshot();
        if ("search" === (null === yt || void 0 === yt ? void 0 : yt.questMarkerIcon) && null !== Ot && void 0 !== Ot && Ot.background) {
          const {
            bounds: tt
          } = Ot.background, [et, Vt] = dt(yt.position[0] - Ot.mapOrigin[0], yt.position[2] - Ot.mapOrigin[2], tt);
          ft.searchArea = {
            left: et,
            top: Vt,
            width: 6400 / (tt.mapMaxX - tt.mapMinX),
            height: 6400 / (tt.mapMaxZ - tt.mapMinZ),
            shapeSeed: yt.nameKey
          }
        }
        const Nt = this.quests.getNotificationSnapshot(),
          Mt = "completion" === (null === Nt || void 0 === Nt ? void 0 : Nt.phase) && !he(Nt.kind);
        if (yt && !Mt) {
          const et = Math.hypot(...yt.position.map(((et, Vt) => et - tt[Vt]))),
            Ot = Math.round(et),
            qt = "talk" === yt.questMarkerIcon ? Math.min(1, Math.max(0, (10 - et) / 5)) : 0,
            Dt = Vt.projectWorldPosToViewport(yt.position),
            mt = Dt && Vt.projectWorldPosToViewport([yt.position[0], yt.position[1] - 1, yt.position[2]]);
          ft.waypoint = {
            ...Vt.projectWorldPosToScreenPos(yt.position),
            text: Dt,
            nearness: qt * qt * (3 - 2 * qt),
            blockHeight: Dt && mt ? mt.y - Dt.y : null,
            name: this.translateCached(yt.nameKey),
            nameKey: yt.nameKey,
            markerIcon: yt.questMarkerIcon ? DV[yt.questMarkerIcon] : "quest",
            popupToken: (null === Nt || void 0 === Nt ? void 0 : Nt.waypointNameKey) === yt.nameKey ? Nt.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(Ot)),
            hint: "search" === yt.questMarkerIcon && Math.hypot(yt.position[0] - tt[0], yt.position[2] - tt[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = ft, this.display.render(ft)
      }
      dispose() {
        this.df = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const dV = "skyblockSkillsView";
    class jV extends Qt {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          Vt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tt => tt,
          Ot = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          qt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : tt => tt;
        super(tt, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = et, this.translate = Vt, this.locale = Ot, this.itemName = qt, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = tt => {
          this.selected = tt, this.emit()
        }
      }
      setTranslator(tt, et, Vt) {
        this.translate = tt, this.locale = et, this.itemName = Vt, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(tt) {
        let et = this.skillText.get(tt);
        return et || (et = {
          label: this.translate(`skyblockGame:${tt}`),
          description: this.translate(`skyblockGame:${tt}Description`)
        }, this.skillText.set(tt, et)), et
      }
      sources(tt) {
        if ("mining" === tt || "fishing" === tt) return this.buildSources(tt);
        let et = this.sourceText.get(tt);
        return et || (et = this.buildSources(tt), this.sourceText.set(tt, et)), et
      }
      buildSources(tt) {
        const et = this.translate;
        return "exploration" === tt ? [et("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), et("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === tt ? [et("skyblockGame:logSource", {
          xp: this.number(fe["Maple Log"])
        })] : "combat" === tt ? [et("skyblockGame:creatureKillSource"), et("skyblockGame:noEnvironmentalXp")] : "farming" === tt ? [et("skyblockGame:cropSource", {
          xp: this.number(Ne["Wheat|FreshlyGrown"])
        }), et("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), et("skyblockGame:noYoungCropXp")] : Object.entries("mining" === tt ? ye : ae).map((tt => {
          let [Vt, Ot] = tt;
          return et("skyblockGame:itemXpSource", {
            item: this.itemName(Vt),
            xp: this.number(Ot)
          })
        }))
      }
      number(tt) {
        return tt.toLocaleString(this.locale)
      }
      benefit(tt, et) {
        const Vt = de(tt, et);
        return this.translate(Vt.translationKey, {
          bonus: this.number(Vt.percent)
        })
      }
      Qf(tt) {
        if (!this.df) {
          if ("snapshot" === tt.kind) this.progress = tt.progress, this.pending.clear(), this.recent = null;
          else if ("award" === tt.kind && this.progress) {
            const {
              award: et
            } = tt;
            this.progress = {
              ...this.progress,
              [et.skill]: et.after
            };
            for (const [tt, Ot] of this.pending) Ot.skill === et.skill && this.pending.delete(tt);
            const Vt = et.after.level > et.before.level;
            this.recordGain(et.skill, et.amount, Vt ? ++this.nextLevelUpToken : null), Vt && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: et.skill,
              beforeLevel: et.before.level,
              level: et.after.level
            })
          } else {
            if ("rejectBlock" === tt.kind) return void this.rejectBlock(tt.position);
            if ("open" === tt.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(tt, et, Vt) {
        if (!this.progress || this.df || Vt) return;
        const Ot = function(tt, et) {
          const Vt = tt.split("|")[0];
          return "Air" === et || et === `Barkless ${tt}` ? Object.hasOwn(fe, Vt) ? {
            skill: "foraging",
            amount: fe[Vt]
          } : "Air" !== et ? null : Object.hasOwn(ye, tt) ? {
            skill: "mining",
            amount: ye[tt]
          } : Qe(tt) ? {
            skill: "farming",
            amount: 10
          } : Ee(tt) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(Ne, tt) ? {
            skill: "farming",
            amount: Ne[tt]
          } : Object.hasOwn(zt, tt) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(et, "Air");
        if (!Ot) return;
        const qt = tt.join(",");
        if (this.pending.has(qt)) return;
        const Dt = this.predictedProgress(Ot.skill).totalXp + Ot.amount;
        Number.isSafeInteger(Dt) && (this.pending.set(qt, {
          ...Ot,
          expires: this.now() + 2e3
        }), this.recordGain(Ot.skill, 0), this.emit())
      }
      rejectBlock(tt) {
        this.pending.delete(tt.join(",")) && this.emit()
      }
      BQ() {
        if (this.df) return;
        let tt = !1;
        for (const [et, Vt] of this.pending) Vt.expires <= this.now() && (this.pending.delete(et), tt = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, tt = !0), tt && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(tt, et) {
        var Vt, Ot;
        let qt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Dt = (null === (Vt = this.recent) || void 0 === Vt ? void 0 : Vt.skill) === tt && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          mt = (null === (Ot = this.recent) || void 0 === Ot ? void 0 : Ot.skill) === tt && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: tt,
          confirmed: Dt + et,
          expires: this.now() + 3e3,
          levelUpToken: null !== qt && void 0 !== qt ? qt : mt
        }
      }
      pendingXp(tt) {
        let et = 0;
        for (const Vt of this.pending.values()) Vt.skill === tt && (et += Vt.amount);
        return et
      }
      predictedProgress(tt) {
        const et = this.progress[tt],
          Vt = this.pendingXp(tt);
        return Vt ? He(et.totalXp + Vt, tt) : et
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var tt, et, Vt;
        const Ot = this.progress ? gt.map((tt => {
            const et = this.predictedProgress(tt);
            return {
              ...this.text(tt),
              icon: Me[tt],
              benefit: this.benefit(tt, et.level),
              sources: this.sources(tt),
              id: tt,
              selected: tt === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(et.level)
              }),
              xp: null === et.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(et.xpIntoLevel),
                target: this.number(et.xpForNextLevel)
              }),
              percent: null === et.xpForNextLevel ? 100 : Math.min(100, et.xpIntoLevel / et.xpForNextLevel * 100)
            }
          })) : [],
          qt = Ot.find((tt => {
            var et;
            return tt.id === (null === (et = this.recent) || void 0 === et ? void 0 : et.skill)
          })),
          Dt = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: Ot,
          detail: null !== (tt = Ot.find((tt => tt.selected))) && void 0 !== tt ? tt : null,
          overallLevel: this.progress ? gt.reduce(((tt, et) => tt + this.predictedProgress(et).level), 0) : null,
          hud: qt && Dt > 0 ? {
            skill: qt,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(Dt)
            }),
            levelUpToken: null !== (et = null === (Vt = this.recent) || void 0 === Vt ? void 0 : Vt.levelUpToken) && void 0 !== et ? et : null,
            colour: Je(qt.id)
          } : null
        }
      }
    }
    const HV = Math.max(1600, 600, 950) + 400,
      XV = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      QV = "skyblockQuestsView",
      lV = "skyblockQuestNotificationView";
    class EV extends Qt {
      constructor(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          mt = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(tt, Ot, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = et, this.translate = Vt, this.now = qt, this.locale = Dt, this.publishNotification = mt, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var tt, et;
          this.selected = null !== (tt = null === (et = this.authoritative) || void 0 === et ? void 0 : et.trackedQuestId) && void 0 !== tt ? tt : null, this.show()
        }, this.select = tt => {
          this.selected = tt, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const tt = this.snapshot.detail;
          !this.df && null !== tt && void 0 !== tt && tt.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(tt.id), this.emit())
        }, this.viewDialogue = () => {
          const tt = this.snapshot.detail;
          var et;
          tt && (null === (et = this.onViewDialogue) || void 0 === et || et.call(this, tt.id))
        }, this.notifications = new ue(qt, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var tt, et;
        return null !== (tt = null === (et = this.authoritative) || void 0 === et ? void 0 : et.trackedQuestId) && void 0 !== tt ? tt : null
      }
      notify(tt) {
        !this.df && this.notifications.enqueue(tt) && this.emitNotification()
      }
      setNotificationsHeld(tt) {
        (this.notifications.setHeld(tt) || tt) && this.emitNotification()
      }
      BQ() {
        var tt, et;
        if (this.df) return;
        this.notifications.BQ() && this.emitNotification();
        let Vt = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, Vt = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, Vt = !0);
        const Ot = fV(this.authoritative);
        null !== Ot && void 0 !== Ot && null !== (tt = Ot.questClock) && void 0 !== tt && tt.running && this.clockText(Ot) !== (null === (et = this.snapshot.tracked) || void 0 === et ? void 0 : et.clock) && (Vt = !0), Vt && this.emit()
      }
      setTranslator(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = tt, this.locale = et, this.emitNotification(), this.emit()
      }
      Qf(tt) {
        if (!this.df)
          if ("completion" === tt.kind) this.notify(tt.questCompletion);
          else if ("landmark" === tt.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: tt.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === tt.kind) {
          var et, Vt, Ot;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: tt.npcNoteTitleKey,
            textKey: tt.npcNoteTextKey,
            params: null !== (et = tt.npcNoteParams) && void 0 !== et ? et : {},
            nameKeys: null !== (Vt = tt.npcNoteNameKeys) && void 0 !== Vt ? Vt : {},
            iconItem: null !== (Ot = tt.npcNoteIconItem) && void 0 !== Ot ? Ot : null
          })
        } else if ("open" === tt.kind) this.show();
        else if ("guidance" === tt.kind) this.waypoint = tt.waypoint, this.compassTarget = tt.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === tt.kind) {
          this.authoritative = tt.snapshot, this.notifications.BQ() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const et = this.trackedStepPulse;
          this.updateTrackedStepPulse(tt.snapshot), this.emit(), this.trackedStepPulse > et && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.df || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var tt;
        return null !== (tt = this.translateWithIcons) && void 0 !== tt ? tt : this.translate
      }
      clockText(tt) {
        const et = tt.questClock;
        if (!et) return null;
        const Vt = et.elapsedMs + (et.running ? this.now() - this.receivedAt : 0);
        return void 0 === et.countdownFromMs ? Zt(Vt, !1) : Zt(1e3 * Math.ceil(Math.max(0, et.countdownFromMs - Vt) / 1e3), !1)
      }
      updateTrackedStepPulse(tt) {
        var et, Vt, Ot;
        const qt = fV(tt);
        if (!qt) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const Dt = tt => qt.subquests.filter((et => tt(et.status))).map((tt => tt.id)),
          mt = Dt((tt => "completed" === tt || "skipped" === tt)),
          dt = Dt((tt => "locked" !== tt)),
          jt = (null === (et = this.trackedSteps) || void 0 === et ? void 0 : et.questId) === qt.id && qt.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (jt) {
          const tt = mt.filter((tt => !jt.finished.has(tt))),
            et = Dt((tt => "active" === tt || "ready" === tt)).filter((tt => !jt.unlocked.has(tt)));
          tt.length > 0 && this.trackedStepPulse++, (tt.length > 0 || et.length > 0) && (this.trackedChange = {
            finished: new Set(tt),
            unlocked: new Set(et),
            expiresAt: this.now() + HV
          })
        } else {
          var Ht;
          this.trackedStepPulse = (null === (Ht = this.trackedSteps) || void 0 === Ht ? void 0 : Ht.questId) === qt.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: qt.id,
          progress: qt.progress,
          finished: new Set([...null !== (Vt = null === jt || void 0 === jt ? void 0 : jt.finished) && void 0 !== Vt ? Vt : [], ...mt]),
          unlocked: new Set([...null !== (Ot = null === jt || void 0 === jt ? void 0 : jt.unlocked) && void 0 !== Ot ? Ot : [], ...dt])
        }
      }
      entry(tt, et) {
        var Vt, Ot;
        const qt = tt.id === (null === (Vt = this.authoritative) || void 0 === Vt ? void 0 : Vt.trackedQuestId),
          Dt = this.now() < this.trackAvailableAt,
          mt = this.questTextTranslator(),
          dt = tt.subquests.map((et => {
            var Vt, Ot, Dt, dt, jt, Ht;
            const Xt = null !== (Vt = et.handInNpcName) && void 0 !== Vt ? Vt : tt.giverName,
              Qt = this.translate("skyblockGame:progress", {
                current: et.progress.toLocaleString(this.locale),
                target: et.target.toLocaleString(this.locale)
              }),
              lt = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: Xt ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [et.status],
              Et = "active" === et.status || "ready" === et.status;
            return {
              id: et.id,
              name: Ce(mt, et.nameKey, et.nameParams),
              description: Ce(mt, et.descriptionKey, et.descriptionParams),
              progress: Qt,
              status: et.status,
              statusLabel: lt ? this.translate(lt, {
                npc: Xt
              }) : Qt,
              iconItem: Et && null !== (Ot = et.questIconItem) && void 0 !== Ot ? Ot : null,
              barPercent: "active" === et.status && et.showsProgressBar ? Math.min(100, 100 * et.progress / et.target) : null,
              justFinished: qt && null !== (Dt = null === (dt = this.trackedChange) || void 0 === dt ? void 0 : dt.finished.has(et.id)) && void 0 !== Dt && Dt,
              justUnlocked: qt && null !== (jt = null === (Ht = this.trackedChange) || void 0 === Ht ? void 0 : Ht.unlocked.has(et.id)) && void 0 !== jt && jt
            }
          }));
        return {
          id: tt.id,
          name: Ce(mt, tt.nameKey, tt.nameParams),
          description: Ce(mt, tt.descriptionKey, tt.descriptionParams),
          progress: et ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: tt.progress.toLocaleString(this.locale),
            target: tt.target.toLocaleString(this.locale)
          }),
          completed: et,
          tracked: qt,
          selected: tt.id === this.selected,
          canTrack: !et && !qt && !Dt,
          trackLabel: this.translate(qt ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : Dt ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== tt.id,
          subquests: dt,
          focusStep: null !== (Ot = dt.find((tt => null !== tt.barPercent))) && void 0 !== Ot ? Ot : null,
          clock: this.clockText(tt)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht;
        const Xt = [...null !== (tt = null === (et = this.authoritative) || void 0 === et ? void 0 : et.active) && void 0 !== tt ? tt : [], ...null !== (Vt = null === (Ot = this.authoritative) || void 0 === Ot ? void 0 : Ot.completed) && void 0 !== Vt ? Vt : []];
        var Qt, lt, Et, ft;
        Xt.some((tt => tt.id === this.selected)) || (this.selected = null !== (Qt = null !== (lt = null === (Et = this.authoritative) || void 0 === Et ? void 0 : Et.trackedQuestId) && void 0 !== lt ? lt : null === (ft = Xt[0]) || void 0 === ft ? void 0 : ft.id) && void 0 !== Qt ? Qt : null);
        const wt = null !== (qt = null === (Dt = this.authoritative) || void 0 === Dt ? void 0 : Dt.active.map((tt => this.entry(tt, !1)))) && void 0 !== qt ? qt : [];
        wt.sort(((tt, et) => Number(et.tracked) - Number(tt.tracked)));
        const yt = null !== (mt = null === (dt = this.authoritative) || void 0 === dt ? void 0 : dt.completed.map((tt => this.entry(tt, !0)))) && void 0 !== mt ? mt : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: wt,
          completed: yt,
          completedExpanded: this.completedExpanded,
          detail: null !== (jt = [...wt, ...yt].find((tt => tt.selected))) && void 0 !== jt ? jt : null,
          tracked: null !== (Ht = wt.find((tt => tt.tracked))) && void 0 !== Ht ? Ht : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function fV(tt) {
      var et;
      return null !== (et = null === tt || void 0 === tt ? void 0 : tt.active.find((et => et.id === tt.trackedQuestId))) && void 0 !== et ? et : null
    }
    const wV = "skyblockDungeonsView";
    class yV extends Qt {
      constructor(tt, et) {
        let Vt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          Ot = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(tt, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = et, this.locale = Vt, this.requestEnter = Ot, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = tt => {
          this.selected = tt, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const tt = this.pickerEntry(),
            et = null === tt || void 0 === tt ? void 0 : tt.difficulties[this.pageIndex];
          void 0 !== et && null !== et.unlockedBoss && (this.close(), this.requestEnter(tt.id, et.difficulty))
        }
      }
      setTranslator(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = tt, this.locale = et, this.emit()
      }
      Qf(tt) {
        var et, Vt;
        if (!this.df) return "open" === tt.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== tt.kind ? "snapshot" === tt.kind && (this.authoritative = tt.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (et = null === (Vt = this.pickerEntry()) || void 0 === Vt ? void 0 : Vt.difficulties.length) && void 0 !== et ? et : 1) - 1)), null === tt.snapshot && this.open ? this.close() : this.emit()) : this.choose(tt.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(tt) {
        var et;
        const Vt = null === (et = this.authoritative) || void 0 === et ? void 0 : et.dungeons.find((et => et.id === tt));
        void 0 !== Vt ? this.open && this.pickerDungeonId === tt || (this.pickerDungeonId = tt, this.pageIndex = Math.max(0, Vt.difficulties.findLastIndex((tt => null !== tt.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${tt}`)
      }
      turnTo(tt) {
        var et, Vt;
        const Ot = null !== (et = null === (Vt = this.pickerEntry()) || void 0 === Vt ? void 0 : Vt.difficulties.length) && void 0 !== et ? et : 0;
        tt < 0 || tt >= Ot || tt === this.pageIndex || (this.pageIndex = tt, this.emit())
      }
      pickerEntry() {
        var tt, et;
        return null !== (tt = null === (et = this.authoritative) || void 0 === et ? void 0 : et.dungeons.find((tt => tt.id === this.pickerDungeonId))) && void 0 !== tt ? tt : null
      }
      difficulty(tt) {
        const et = tt.completions > 0,
          Vt = null === tt.bestMs ? null : Zt(tt.bestMs);
        return {
          difficulty: tt.difficulty,
          label: this.translate(It[tt.difficulty]),
          colour: Pt[tt.difficulty],
          beaten: et,
          bestTime: Vt,
          completions: tt.completions,
          summary: et ? [null === Vt ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: Vt
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: tt.completions.toLocaleString(this.locale)
          })].filter((tt => null !== tt)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(tt) {
        const et = tt.difficulties.map((tt => this.difficulty(tt))),
          Vt = et.filter((tt => tt.beaten)).length;
        return {
          id: tt.id,
          name: this.translate(tt.nameKey),
          selected: tt.id === this.selected,
          beatenSummary: `${Vt} / ${et.length}`,
          difficulties: et
        }
      }
      picker() {
        const tt = this.pickerEntry();
        if (null === tt || 0 === tt.difficulties.length) return null;
        const et = tt.difficulties.map(((et, Vt) => {
          var Ot, qt, Dt, mt;
          const dt = et.unlockedBoss,
            jt = null === dt ? this.lockedHint(tt, Vt) : null;
          return {
            ...this.difficulty(et),
            unlocked: null !== dt,
            bossName: null === dt ? null : this.translate(dt.bossNameKey),
            bossMobType: null !== (Ot = null === dt || void 0 === dt ? void 0 : dt.bossMobType) && void 0 !== Ot ? Ot : null,
            bossMobVariation: null !== (qt = null === dt || void 0 === dt ? void 0 : dt.bossMobVariation) && void 0 !== qt ? qt : null,
            lockedHint: null !== (Dt = null === jt || void 0 === jt ? void 0 : jt.text) && void 0 !== Dt ? Dt : null,
            lockedHintHighlight: null !== (mt = null === jt || void 0 === jt ? void 0 : jt.highlight) && void 0 !== mt ? mt : null,
            current: Vt === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(tt.nameKey),
          pages: et,
          page: et[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < et.length - 1
        }
      }
      lockedHint(tt, et) {
        var Vt, Ot, qt;
        if (0 === et && "number" === typeof tt.combatLevelLock) {
          const et = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: tt.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: et,
            colour: Je("combat"),
            icon: Me.combat
          })
        }
        const Dt = null !== (Vt = null === (Ot = this.authoritative) || void 0 === Ot ? void 0 : Ot.dungeons) && void 0 !== Vt ? Vt : [],
          mt = et > 0 ? tt : null !== (qt = Dt[Dt.indexOf(tt) - 1]) && void 0 !== qt ? qt : null,
          dt = et > 0 ? tt.difficulties[et - 1] : null === mt || void 0 === mt ? void 0 : mt.difficulties[0];
        if (null === mt || void 0 === dt) return null;
        const jt = this.translate(mt.nameKey);
        if (null === dt.unlockedBoss) return mt === tt ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, dt.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: jt
        }, dt.difficulty);
        const Ht = this.translate(dt.unlockedBoss.bossNameKey);
        return mt === tt ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: Ht
        }, dt.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: Ht,
            dungeon: jt
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(tt, et, Vt) {
        return this.hintHighlighting(tt, et, "difficulty", {
          name: this.translate(It[Vt]),
          colour: Pt[Vt],
          icon: null
        })
      }
      hintHighlighting(tt, et, Vt, Ot) {
        let {
          name: qt,
          colour: Dt,
          icon: mt
        } = Ot;
        const dt = this.translate(tt, {
          ...et,
          [Vt]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(tt, {
            ...et,
            [Vt]: qt
          }),
          highlight: 2 === dt.length ? {
            before: dt[0],
            name: qt,
            after: dt[1],
            colour: Dt,
            icon: mt
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var tt, et, Vt;
        const Ot = null !== (tt = null === (et = this.authoritative) || void 0 === et ? void 0 : et.dungeons) && void 0 !== tt ? tt : [];
        var qt, Dt;
        Ot.some((tt => tt.id === this.selected)) || (this.selected = null !== (qt = null === (Dt = Ot[0]) || void 0 === Dt ? void 0 : Dt.id) && void 0 !== qt ? qt : null);
        const mt = Ot.map((tt => this.entry(tt)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: mt,
          detail: null !== (Vt = mt.find((tt => tt.selected))) && void 0 !== Vt ? Vt : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const NV = ["mining", "farming", "foraging", "fishing", "combat"],
      aV = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      MV = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function bV() {
      for (var tt = arguments.length, et = new Array(tt), Vt = 0; Vt < tt; Vt++) et[Vt] = arguments[Vt];
      return et.map(((tt, et) => ({
        amount: tt,
        coins: aV[et],
        xp: MV[et]
      })))
    }
    const JV = bV(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      CV = bV(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      uV = bV(50, 100, 250, 500, 1e3, 2500, 5e3),
      KV = bV(25, 50, 100, 250, 500, 1e3),
      hV = bV(10, 25, 50, 100, 250, 500, 1e3),
      vV = bV(1, 5, 10, 25, 50);

    function WV(tt, et) {
      return {
        id: tt,
        category: "fishing",
        item: et,
        drops: [et],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hV
      }
    }
    const SV = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: CV
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: uV
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: uV
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: KV
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: KV
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: CV
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: JV
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: JV
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: JV
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: uV
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: CV
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: CV
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: CV
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: uV
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: uV
      }, WV("wheatfish", "Wheatfish"), WV("darter", "Darter"), WV("sunset_minnow", "Sunset Minnow"), WV("root_flounder", "Root Flounder"), WV("greenfin_loach", "Greenfin Loach"), WV("red_strongfish", "Red Strongfish"), WV("green_strongfish", "Green Strongfish"), WV("boomerang_fish", "Boomerang Fish"), WV("seahorse", "Seahorse"), WV("spined_stickleback", "Spined Stickleback"), WV("moon_strongfish", "Moon Strongfish"), WV("boulder_bass", "Boulder Bass"), WV("grass_snapper", "Grass Snapper"), WV("crystal_wheatfish", "Crystalized Wheatfish", vV), WV("moonstone_pupfish", "Moonstone Pupfish", vV), WV("reedglass_minnow", "Reedglass Minnow"), WV("mangrove_herring", "Mangrove Herring"), WV("mudline_perch", "Mudline Perch"), WV("coastal_mullet", "Coastal Mullet"), WV("reef_sardine", "Reef Sardine"), WV("root_perch", "Root Perch"), WV("driftwood_catfish", "Driftwood Catfish"), WV("aether_minnow", "Aether Minnow"), WV("needlefish", "Tri-Pointed Needlefish"), WV("threadfin_bream", "Threadfin Bream"), WV("mudbelly_tilapia", "Mudbelly Tilapia"), WV("rotslab_eel", "Rotslab Eel"), WV("polarflash_electron", "Polarflash Electron"), WV("mireback_carp", "Mireback Carp"), WV("blackwater_bream", "Blackwater Bream"), WV("stone_grouper", "Stone Grouper"), WV("shadeback_ray", "Shadeback Ray"), WV("glacial_silverfish", "Glacial Silverfish"), WV("hatchetfish", "Hatchetfish"), WV("moonlit_boomerang", "Moonlit Boomerang Fish"), WV("murkborne_ray", "Murkborne Ray"), WV("bamboo_catfish", "Bamboo Catfish"), WV("mossback_arapaima", "Mossback Arapaima"), WV("murk_stingray", "Murk Stingray"), WV("channel_sawfish", "Channel Sawfish"), WV("boned_sturgeon", "Boned Sturgeon"), WV("oarfish", "Oarfish"), WV("snakehead", "Snakehead", vV), WV("eldertide_leviathan", "Eldertide Leviathan", vV), WV("pithead", "Pithead"), WV("electric_eel", "Electric Eel"), WV("shadow_darter", "Shadow Darter"), WV("abyss_carp", "Abyss Carp"), WV("nomai_moray", "Nomai Moray"), WV("silver_dragonfish", "Silver Dragonfish"), WV("giant_moray", "Giant Moray"), WV("coelacanth", "Coelacanth", vV), WV("frost_herring", "Frost Herring"), WV("permafrost_halibut", "Permafrost Halibut"), WV("glacial_lanternfish", "Glacial Lanternfish"), WV("frozen_grenadier", "Frozen Grenadier"), WV("blackfin_icefish", "Blackfin Icefish"), WV("moonfish", "Moonfish"), WV("alpha_strongfish", "Alpha Moon Strongfish"), WV("deep_lanternfish", "Deepwater Lanternfish", vV), WV("pearlescent_moonfish", "Pearlescent Moonfish", vV), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: CV
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: KV
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: KV
      }],
      cV = (new Map(SV.map((tt => [tt.id, tt]))), new Map),
      RV = new Map;
    for (const lj of SV) {
      for (const [tt, et] of Object.entries(null !== (IV = lj.blocks) && void 0 !== IV ? IV : {})) {
        var IV;
        cV.set(tt, {
          collection: lj,
          amount: et
        })
      }
      for (const tt of null !== (PV = lj.drops) && void 0 !== PV ? PV : []) {
        var PV;
        RV.set(tt, lj)
      }
    }

    function ZV(tt, et) {
      let Vt = 0;
      for (; Vt < tt.tiers.length && et >= tt.tiers[Vt].amount;) Vt++;
      return Vt
    }
    const LV = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function FV(tt) {
      return LV[tt - 1]
    }
    const kV = "skyblockCollectionsView";
    class GV extends Qt {
      constructor(tt, et) {
        let Vt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          Ot = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : tt => tt;
        super(tt, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = et, this.locale = Vt, this.itemName = Ot, this.counts = null, this.category = "mining", this.selected = SV[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = tt => {
          this.category = tt, this.selected = this.inCategory(tt)[0].id, this.emit()
        }, this.select = tt => {
          this.selected = tt, this.emit()
        }
      }
      setTranslator(tt, et, Vt) {
        this.translate = tt, this.locale = et, this.itemName = Vt, this.emit()
      }
      Qf(tt) {
        if (!this.df)
          if ("collOpen" !== tt.kind) {
            (tt.collFull || null === this.counts) && (this.counts = new Map);
            for (const [et, Vt] of tt.collCounts) this.counts.set(et, Vt);
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
        var tt;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const et = this.inCategory(this.category).map((tt => this.collectionView(tt))),
          Vt = SV.reduce(((tt, et) => tt + this.tierOf(et)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: NV.map((tt => this.categoryView(tt))),
          collections: et,
          detail: null !== (tt = et.find((tt => tt.selected))) && void 0 !== tt ? tt : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(Vt)
          })
        }
      }
      categoryView(tt) {
        const et = this.inCategory(tt),
          Vt = et.reduce(((tt, et) => tt + this.tierOf(et)), 0),
          Ot = et.reduce(((tt, et) => tt + et.tiers.length), 0);
        return {
          id: tt,
          label: this.translate(`skyblockGame:${tt}`),
          icon: Me[tt],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(Vt),
            target: this.number(Ot)
          }),
          selected: tt === this.category
        }
      }
      collectionView(tt) {
        var et, Vt;
        const Ot = null !== (et = this.counts.get(tt.id)) && void 0 !== et ? et : 0,
          qt = ZV(tt, Ot),
          Dt = null !== (Vt = tt.tiers[qt]) && void 0 !== Vt ? Vt : null,
          mt = 0 === qt ? 0 : tt.tiers[qt - 1].amount;
        return {
          id: tt.id,
          name: this.itemName(tt.item),
          icon: tt.item,
          selected: tt.id === this.selected,
          locked: 0 === Ot,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(Ot)
          }),
          tier: 0 === qt ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(qt),
          percent: null === Dt ? 100 : Math.min(100, (Ot - mt) / (Dt.amount - mt) * 100),
          progress: null === Dt ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(Ot),
            target: this.number(Dt.amount)
          }),
          nextReward: null === Dt ? null : this.reward(tt, Dt.coins, Dt.xp)
        }
      }
      reward(tt, et, Vt) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(et),
          xp: this.number(Vt),
          skill: this.translate(`skyblockGame:${tt.category}`)
        })
      }
      tierLabel(tt) {
        return this.translate("skyblockGame:collectionTier", {
          tier: FV(tt)
        })
      }
      tierOf(tt) {
        var et;
        return ZV(tt, null !== (et = this.counts.get(tt.id)) && void 0 !== et ? et : 0)
      }
      inCategory(tt) {
        return SV.filter((et => et.category === tt))
      }
      number(tt) {
        return tt.toLocaleString(this.locale)
      }
    }
    const zV = "skyblockPortalTransitView",
      oV = "skyblockPortalArrival";
    class rV {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.sw = tt, this.storage = et, this.now = Vt, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      Qf(tt) {
        const et = {
          zoneNameKey: tt.transitZoneNameKey,
          variation: tt.transitZoneVariation,
          colour: tt.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(oV, et), this.show("departure", et.zoneNameKey, et.colour, tt.transitDurationMs, tt.transitDurationMs + 1500, (() => {
          this.storage.removeItem(oV)
        }))
      }
      resumeArrival(tt) {
        const et = this.storage.getItem(oV);
        this.storage.removeItem(oV), null === et || et.variation !== tt || this.now() - et.departedAt > 3e4 || this.show("arrival", et.zoneNameKey, et.colour, 3200, 2e4)
      }
      finishArrival(tt) {
        var et;
        "arrival" === (null === (et = this.view) || void 0 === et ? void 0 : et.phase) && this.view.token === tt && (this.clearTimer(), this.view = null, this.sw(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(tt, et, Vt, Ot, qt, Dt) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: tt,
          zoneNameKey: et,
          colour: Vt,
          durationMs: Ot
        }, this.sw(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.sw(null), null === Dt || void 0 === Dt || Dt()
        }), qt)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const UV = "skyblockDailyRewardView",
      AV = "skyblockDailyRewardCoin";
    class iV {
      constructor(tt, et, Vt, Ot) {
        let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          mt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          dt = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          jt = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.sw = tt, this.isBusy = et, this.holdQuestPopups = Vt, this.onHeldCoinsChanged = Ot, this.onCoinLanded = qt, this.onStarted = Dt, this.onFinished = mt, this.onItemLanded = dt, this.now = jt, this.Pd = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var tt, et;
        return null !== (tt = null === (et = this.playing) || void 0 === et ? void 0 : et.view) && void 0 !== tt ? tt : null
      }
      getHeldCoins() {
        var tt, et;
        let Vt = 0;
        for (const Ot of this.Pd) Vt += Ot.coins;
        return Vt - (null !== (tt = null === (et = this.playing) || void 0 === et ? void 0 : et.released) && void 0 !== tt ? tt : 0)
      }
      Qf(tt) {
        "dailyRewardClaimed" !== tt.kind ? (this.queue.push(tt), this.BQ()) : this.Pd.push({
          coins: tt.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      BQ() {
        const tt = this.now();
        if (null === this.playing) return this.releaseUnshown(tt), void this.startNext(tt);
        const et = this.playing,
          Vt = tt - et.startedAt,
          Ot = et.view.flyingCoins,
          qt = function(tt, et) {
            let Vt = 0;
            for (; Vt < et && BV(Vt, et) <= tt;) Vt++;
            return Vt
          }(Vt, Ot);
        if (qt !== et.landed) {
          for (let tt = qt - et.landed > 2 ? qt - 1 : et.landed; tt < qt; tt++) this.onCoinLanded(tt, Ot);
          et.landed = qt, et.released = Math.round(et.view.coins * qt / Ot), this.onHeldCoinsChanged()
        }
        for (; et.itemsLanded < et.view.items.length && 2e3 + 160 * et.itemsLanded + 630 <= Vt;) this.onItemLanded(et.itemsLanded), et.itemsLanded++;
        Vt >= et.view.durationMs && (this.finish(), this.startNext(tt))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.Pd = [], this.sw(null)
      }
      startNext(tt) {
        if (0 === this.queue.length || this.isBusy()) return;
        const et = this.queue.shift();
        this.token++;
        const Vt = {
          token: this.token,
          day: et.dailyRewardDay,
          coins: et.dailyRewardCoins,
          items: et.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: et.dailyRewardDay === St ? 24 : 14
        };
        this.playing = {
          view: Vt,
          startedAt: tt,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.sw(Vt), this.onStarted(Vt)
      }
      finish() {
        this.Pd.shift(), this.playing = null, this.holdQuestPopups(!1), this.sw(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(tt) {
        if (this.queue.length > 0 || 0 === this.Pd.length) return;
        const et = this.Pd.length;
        this.Pd = this.Pd.filter((et => tt - et.receivedAt < 6e4)), this.Pd.length !== et && this.onHeldCoinsChanged()
      }
    }

    function YV(tt, et) {
      return 450 + 715 * tt / (et - 1)
    }

    function BV(tt, et) {
      return YV(tt, et) + 650
    }
    const pV = "skyblockMailboxView";
    class xV {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.sw = tt, this.isBusy = et, this.onStarted = Vt, this.now = Ot, this.waiting = [], this.playing = null, this.token = 0, this.itemName = tt => tt
      }
      getSnapshot() {
        var tt, et;
        return null !== (tt = null === (et = this.playing) || void 0 === et ? void 0 : et.view) && void 0 !== tt ? tt : null
      }
      setItemName(tt) {
        this.itemName = tt
      }
      Qf(tt) {
        this.waiting.push(...tt.mailLetters), this.BQ()
      }
      BQ() {
        const tt = this.now();
        null !== this.playing && tt - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.sw(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(tt)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.sw(null)
      }
      start(tt) {
        const et = this.waiting.slice(0, 3);
        this.token++;
        const Vt = {
          token: this.token,
          letters: et.map((tt => this.toView(tt))),
          more: this.waiting.length - et.length,
          durationMs: 4500 + 700 * et.length
        };
        this.waiting = [], this.playing = {
          view: Vt,
          startedAt: tt
        }, this.sw(Vt), this.onStarted(Vt)
      }
      toView(tt) {
        return {
          coins: tt.mailCoins,
          items: tt.mailItems.map((tt => {
            var et;
            return {
              itemName: tt.mailItemName,
              amount: tt.mailItemAmount,
              label: null !== (et = tt.mailItemLabel) && void 0 !== et ? et : this.itemName(tt.mailItemName)
            }
          })),
          reasonKey: tt.mailReasonKey,
          reasonParams: tt.mailReasonParams
        }
      }
    }
    const TV = "skyblockQuestGraphView",
      gV = "skyblockDevQuestJump";

    function sV(tt) {
      if (0 === tt.length) return "";
      const et = [`M ${tt[0].x} ${tt[0].y}`];
      for (let Ot = 1; Ot < tt.length - 1; Ot++) {
        const Vt = tt[Ot + 1];
        et.push(`Q ${tt[Ot].x} ${tt[Ot].y} ${(tt[Ot].x+Vt.x)/2} ${(tt[Ot].y+Vt.y)/2}`)
      }
      const Vt = tt[tt.length - 1];
      return et.push(`L ${Vt.x} ${Vt.y}`), et.join(" ")
    }

    function nV(tt, et) {
      return tt < et ? `${tt}|${et}` : `${et}|${tt}`
    }
    class tO extends Qt {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          mt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          dt = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(tt, Vt, Ot), this.translate = et, this.requestJump = qt, this.requestArrive = Dt, this.storage = mt, this.now = dt, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = tt => {
          tt !== this.hoveredId && (this.hoveredId = tt, this.emit())
        }, this.jump = tt => {
          this.close(), this.requestJump(tt)
        }
      }
      Qf(tt) {
        if (!this.df)
          if ("graph" !== tt.kind) {
            if ("jumping" === tt.kind) {
              const et = {
                questId: tt.graphQuestId,
                variation: tt.graphVariation,
                completes: tt.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(gV, et)
            }
          } else {
            const et = ++this.graphCount;
            Vt.e(120).then((() => Vt(6623))).then((Vt => {
              let {
                default: Ot
              } = Vt;
              this.df || et !== this.graphCount || (this.layout = function(tt, et, Vt) {
                var Ot, qt;
                const Dt = new tt.graphlib.Graph;
                Dt.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), Dt.setDefaultEdgeLabel((() => ({})));
                const mt = new Set;
                for (const Xt of et) mt.add(Xt.graphQuestId), Dt.setNode(Xt.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const dt = Vt.filter((tt => mt.has(tt.graphFromId) && mt.has(tt.graphToId) && tt.graphFromId !== tt.graphToId)),
                  jt = new Map;
                for (const Xt of [...dt].sort(((tt, et) => Number("awaits" === tt.graphEdgeKind) - Number("awaits" === et.graphEdgeKind)))) {
                  const tt = nV(Xt.graphFromId, Xt.graphToId);
                  jt.has(tt) || (jt.set(tt, Xt), Dt.setEdge(Xt.graphFromId, Xt.graphToId))
                }
                tt.layout(Dt);
                const Ht = Dt.graph();
                return {
                  width: Math.ceil(null !== (Ot = Ht.width) && void 0 !== Ot ? Ot : 0),
                  height: Math.ceil(null !== (qt = Ht.height) && void 0 !== qt ? qt : 0),
                  nodes: et.map((tt => {
                    var et, Vt;
                    const Ot = Dt.node(tt.graphQuestId);
                    return {
                      node: tt,
                      left: (null !== (et = Ot.x) && void 0 !== et ? et : 0) - 95,
                      top: (null !== (Vt = Ot.y) && void 0 !== Vt ? Vt : 0) - 26
                    }
                  })),
                  edges: dt.map((tt => {
                    var et;
                    const Vt = jt.get(nV(tt.graphFromId, tt.graphToId)),
                      Ot = null !== (et = Dt.edge(Vt.graphFromId, Vt.graphToId).points) && void 0 !== et ? et : [];
                    return {
                      edge: tt,
                      key: `${tt.graphFromId}|${tt.graphToId}|${tt.graphEdgeKind}`,
                      path: sV(Vt.graphFromId === tt.graphFromId ? Ot : [...Ot].reverse())
                    }
                  })),
                  plans: new Map(et.map((tt => [tt.graphQuestId, new Set([tt.graphQuestId, ...tt.graphPlanIds])])))
                }
              }(Ot, tt.graphNodes, tt.graphEdges), this.show())
            })).catch((tt => {
              console.error("The quest graph could not be laid out", tt)
            }))
          }
      }
      resumeJump(tt) {
        const et = this.storage.getItem(gV);
        this.storage.removeItem(gV), null === et || et.variation !== tt || this.now() - et.departedAt > 6e4 || this.requestArrive(et.questId, et.completes)
      }
      setTranslator(tt) {
        this.translate = tt, this.emit()
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
        var tt, et;
        return null !== (tt = null === this.hoveredId || null === (et = this.layout) || void 0 === et ? void 0 : et.plans.get(this.hoveredId)) && void 0 !== tt ? tt : new Set
      }
      buildSnapshot() {
        const tt = this.layout;
        if (null === tt) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const et = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: tt.width,
          height: tt.height,
          nodes: tt.nodes.map((tt => {
            let {
              node: Vt,
              left: Ot,
              top: qt
            } = tt;
            return {
              id: Vt.graphQuestId,
              name: this.translate(Vt.graphNameKey),
              detail: null === Vt.graphGiverName ? Vt.graphZoneId : `${Vt.graphGiverName} \xb7 ${Vt.graphZoneId}`,
              state: Vt.graphState,
              left: Ot,
              top: qt,
              inPlan: et.has(Vt.graphQuestId),
              hovered: Vt.graphQuestId === this.hoveredId
            }
          })),
          edges: tt.edges.map((tt => {
            let {
              edge: Vt,
              key: Ot,
              path: qt
            } = tt;
            return {
              key: Ot,
              kind: Vt.graphEdgeKind,
              path: qt,
              inPlan: et.has(Vt.graphFromId) && et.has(Vt.graphToId)
            }
          })),
          planning: et.size > 0
        }
      }
    }
    var eO = Vt(37301);
    const VO = 250,
      OO = 2150,
      qO = -2.8,
      DO = 2.2,
      mO = -27,
      dO = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      jO = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      HO = Math.round(50 + 1e3 * (jO.delay + jO.period / 2)),
      XO = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      QO = Array.from({
        length: 26
      }, ((tt, et) => {
        const Vt = 2.39996 * et,
          Ot = .5 + .618034 * et % 1 * .23,
          qt = et % 3 !== 2;
        return {
          rune: qt ? XO[7 * et % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(Vt)*Ot).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(Vt)*Ot).toFixed(3)})`,
            "--spin": 40 * (et % 5 - 2) + "deg",
            "--size": (qt ? 1 + et % 4 * .2 : .3 + et % 2 * .15) + "rem",
            "--duration": `${(1.8+7*et%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*et%3).toFixed(2)}s`
          }
        }
      }));

    function lO(tt, et) {
      return Array.from({
        length: 30 + 3 * tt + (et ? 10 : 0)
      }, ((tt, et) => {
        const Vt = et < 4,
          Ot = Vt ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          qt = Vt ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          Dt = Vt ? 2.2 : .6 + Math.random(),
          mt = Vt ? .3 : Math.random() < .5 ? .16 : .24,
          dt = Vt ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": Ot,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${qt.toFixed(2)}rem`,
          "--length": `${Dt.toFixed(2)}rem`,
          "--width": `${mt}rem`,
          "--duration": `${Math.round(dt)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function EO(tt) {
      let {
        zeta: et,
        period: Vt
      } = tt;
      const Ot = 2 * Math.PI / Vt;
      return {
        w: Ot,
        decay: et * Ot / Math.sqrt(1 - et * et)
      }
    }
    let fO = !1;

    function wO() {
      if (fO) return;
      fO = !0;
      const tt = document.createElement("style");
      tt.textContent = function() {
        const tt = EO(dO),
          et = EO(jO),
          Vt = et => Math.exp(-tt.decay * et) * Math.sin(tt.w * et),
          Ot = Vt(Math.atan(tt.w / tt.decay) / tt.w),
          qt = .25,
          Dt = 2.15,
          mt = Math.round(215),
          dt = [];
        for (let jt = 0; jt <= mt; jt++) {
          const tt = jt / mt * Dt;
          let Ht = Math.sin(Math.min(tt, qt) / qt * Math.PI / 2) ** 2,
            Xt = 0,
            Qt = 1,
            lt = 1 - .2 * Ht,
            Et = 1;
          if (tt >= qt) {
            const mt = tt - qt,
              dt = Math.max(0, mt - .05);
            Ht = Math.exp(-dt / .05), Xt = Vt(dt + dO.lead * (1 - Math.exp(-dt / dO.rush))) / Ot;
            const jt = dt - jO.delay,
              ft = jt <= 0 ? 0 : 1 - Math.exp(-et.decay * jt) * (Math.cos(et.w * jt) + et.decay / et.w * Math.sin(et.w * jt)),
              wt = Math.max(0, (tt - 1.77) / (Dt - 1.77));
            Qt = (1 + (jO.to - 1) * ft) * (1 + .08 * wt), lt = 1.1 + 1.5 * Math.exp(-mt / .07) + .3 * Math.exp(-(((1e3 * mt - HO) / 100) ** 2)) + .8 * wt, Et = 1 - wt ** 1.5
          }
          const ft = .15 * Ht + qO * Xt,
            wt = -.1 * Ht + DO * Xt,
            yt = 3 * Ht + mO * Xt;
          dt.push(`${(jt/mt*100).toFixed(3)}% { opacity: ${Et.toFixed(3)}; transform: translate(${ft.toFixed(3)}rem, ${wt.toFixed(3)}rem) rotate(${yt.toFixed(2)}deg) scale(${Qt.toFixed(3)}); filter: brightness(${lt.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${dt.join(" ")} }`
      }(), document.head.append(tt)
    }
    const yO = "skyblockForgeView",
      NO = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class aO extends Qt {
      constructor(tt, et, Vt, Ot, qt) {
        super(tt, Vt, Ot), this.translate = et, this.requestForge = qt, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.onOpened = null, this.select = (tt, et) => {
          var Vt, Ot;
          null !== this.forging || (null !== (Vt = this.owned[(0, eO.o)(et, tt)]) && void 0 !== Vt ? Vt : 0) <= 0 || (this.selected[tt] = this.selected[tt] === et ? null : et, this.status = null, null === (Ot = this.onPartSelected) || void 0 === Ot || Ot.call(this), this.emit())
        }, this.forge = tt => {
          var et, Vt;
          const Ot = this.selectedParts();
          if (null === Ot || this.isPending() || !this.open) return;
          const qt = (0, eO.l)(Ot);
          if (null === qt || qt.coalCost > this.coal) return;
          const Dt = this.preview(qt),
            mt = null !== (et = null === (Vt = this.onForgeStarted) || void 0 === Vt ? void 0 : Vt.call(this, Dt.tier, Dt.named, tt)) && void 0 !== et ? et : () => {};
          if (this.dropArrival(), tt) {
            const tt = {
              id: ++this.forgeId,
              preview: Dt,
              timers: [],
              stopSounds: mt,
              landed: !1,
              reply: null
            };
            tt.timers.push(setTimeout((() => {
              tt.landed = !0, null !== tt.reply && (this.apply(tt.reply), tt.reply = null, this.emit())
            }), VO), setTimeout((() => {
              this.finishForge(tt)
            }), OO)), this.forging = tt
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(Ot)
        }, this.snapshot = this.buildSnapshot()
      }
      Qf(tt) {
        var et;
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === tt.forgeMessageKind) return this.dropForge(), this.apply(tt), this.status = null, this.show(), void(null === (et = this.onOpened) || void 0 === et || et.call(this));
        const Vt = this.forging;
        if (null !== Vt && null !== tt.forgeRefusalKey) this.dropForge();
        else if (null !== Vt && !Vt.landed) return void(Vt.reply = tt);
        this.apply(tt), this.emit()
      }
      apply(tt) {
        if (this.owned = tt.forgeOwnedParts, this.coal = tt.forgeCoalOwned, this.keepSelectionOwned("open" === tt.forgeMessageKind), null !== tt.forgeForgedSwordId) {
          var et;
          const Vt = (0, eO.l)(tt.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (et = null === Vt || void 0 === Vt ? void 0 : Vt.displayName) && void 0 !== et ? et : ""
            }
          }
        } else null !== tt.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: tt.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(tt) {
        this.translate = tt, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(tt) {
        var et;
        this.forging = null;
        const Vt = this.selectedParts(),
          Ot = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: tt.id,
          sameSword: null !== Vt && (null === (et = (0, eO.l)(Vt)) || void 0 === et ? void 0 : et.displayName) === tt.preview.name,
          timer: Ot
        }, this.emit()
      }
      dropForge() {
        const tt = this.forging;
        if (null !== tt) {
          this.forging = null;
          for (const et of tt.timers) clearTimeout(et);
          tt.stopSounds(), null !== tt.reply && this.apply(tt.reply)
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
        var tt, et, Vt;
        const Ot = this.selectedParts(),
          qt = null === Ot ? null : (0, eO.l)(Ot),
          Dt = null !== (tt = null === (et = this.forging) || void 0 === et ? void 0 : et.preview) && void 0 !== tt ? tt : null === qt ? null : this.preview(qt);
        return {
          enabled: this.received,
          open: this.open,
          slots: eO.k.map((tt => ({
            kind: tt,
            label: this.translate(NO[tt]),
            parts: this.partsFor(tt)
          }))),
          coalOwned: this.coal,
          preview: Dt,
          unformedSword: eO.j[null !== (Vt = this.selected.Blade) && void 0 !== Vt ? Vt : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((tt => tt > 0)),
          canForge: null !== Dt && !Dt.coalShort && !this.isPending(),
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
      preview(tt) {
        return {
          name: tt.displayName,
          lore: tt.lore,
          baseSword: tt.baseSword,
          enchantmentTier: tt.enchantmentTier,
          tier: Number(tt.enchantmentTier.slice(-1)),
          named: tt.named,
          stats: this.stats(tt),
          effects: tt.effects,
          coalCost: tt.coalCost,
          coalShort: null === this.forging && tt.coalCost > this.coal
        }
      }
      partsFor(tt) {
        const et = [];
        for (const Ot of eO.h) {
          var Vt;
          const qt = (0, eO.o)(Ot, tt),
            Dt = null !== (Vt = this.owned[qt]) && void 0 !== Vt ? Vt : 0;
          Dt > 0 && et.push({
            material: Ot,
            itemName: qt,
            owned: Dt,
            selected: this.selected[tt] === Ot,
            placeholder: !1
          })
        }
        if (0 === et.length) {
          const Vt = eO.h[0];
          et.push({
            material: Vt,
            itemName: (0, eO.o)(Vt, tt),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return et
      }
      stats(tt) {
        const et = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${tt.powerMultiplier.toFixed(2)}`,
          better: tt.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${tt.damageMultiplier.toFixed(2)}`,
          better: tt.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/tt.cooldownMultiplier).toFixed(2)}`,
          better: tt.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${tt.knockbackMultiplier.toFixed(2)}`,
          better: tt.knockbackMultiplier > 1
        }];
        return tt.reachBonus > 0 && et.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${tt.reachBonus.toFixed(1)}`,
          better: !0
        }), tt.damageReduction > 0 && et.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*tt.damageReduction)}%`,
          better: !0
        }), et
      }
      selectedParts() {
        const {
          Blade: tt,
          Guard: et,
          Handle: Vt
        } = this.selected;
        return null === tt || null === et || null === Vt ? null : {
          blade: tt,
          guard: et,
          handle: Vt
        }
      }
      keepSelectionOwned(tt) {
        for (const Vt of eO.k) {
          var et;
          const Ot = this.selected[Vt];
          if (null !== Ot && (null !== (et = this.owned[(0, eO.o)(Ot, Vt)]) && void 0 !== et ? et : 0) > 0) continue;
          if (!tt) {
            this.selected[Vt] = null;
            continue
          }
          const qt = [...eO.h].reverse().find((tt => {
            var et;
            return (null !== (et = this.owned[(0, eO.o)(tt, Vt)]) && void 0 !== et ? et : 0) > 0
          }));
          this.selected[Vt] = null !== qt && void 0 !== qt ? qt : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const MO = "skyblockSmugglerView",
      bO = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class JO extends Qt {
      constructor(tt, et, Vt, Ot, qt) {
        let Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(tt, Vt, Ot), this.translate = et, this.requestBuy = qt, this.now = Dt, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = tt => tt, this.onBought = null, this.buy = tt => {
          const et = this.deals[tt];
          void 0 !== et && !this.isPending() && this.open && !this.soldOut.has(tt) && this.canAfford(et) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, tt))
        }, this.snapshot = this.buildSnapshot()
      }
      Qf(tt) {
        if (this.received = !0, this.day = tt.smugglerDay, this.deals = tt.smugglerDeals, this.rivets = tt.smugglerRivetsOwned, this.crests = tt.smugglerCrestsOwned, this.soldOut = new Set(tt.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + tt.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === tt.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = tt.smugglerBoughtSlot, null !== tt.smugglerBoughtSlot) {
          var et, Vt;
          const Ot = this.deals[tt.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === Ot ? "" : this.dealName(Ot),
              amount: String(null !== (et = null === Ot || void 0 === Ot ? void 0 : Ot.smugglerDealAmount) && void 0 !== et ? et : 0)
            }
          }, this.boughtCount++, null === (Vt = this.onBought) || void 0 === Vt || Vt.call(this)
        } else null !== tt.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: tt.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(tt, et, Vt) {
        this.translate = tt, void 0 !== Vt && (this.itemName = Vt), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(tt) {
        if (null !== tt.smugglerDealUniqueName) return tt.smugglerDealUniqueName;
        const et = bO[tt.smugglerDealItem];
        return void 0 === et ? this.itemName(tt.smugglerDealItem) : this.translate(et)
      }
      canAfford(tt) {
        return tt.smugglerDealRivets <= this.rivets && tt.smugglerDealCrests <= this.crests
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
        const tt = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return tt <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : tt < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(tt)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(tt / 60)),
          minutes: String(tt % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((tt, et) => ({
            slot: et,
            itemName: tt.smugglerDealItem,
            displayName: this.dealName(tt),
            enchantmentTier: tt.smugglerDealEnchantmentTier,
            amount: tt.smugglerDealAmount,
            rivets: tt.smugglerDealRivets,
            crests: tt.smugglerDealCrests,
            affordable: this.canAfford(tt),
            soldOut: this.soldOut.has(et),
            justBought: this.boughtSlot === et
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
    const CO = "skyblockPassageView",
      uO = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function KO(tt, et) {
      return tt(uO[et])
    }

    function hO(tt, et, Vt, Ot) {
      const qt = Math.ceil((Vt - Ot) / 864e5),
        Dt = KO(tt, et);
      return qt > 1 ? tt("skyblockGame:passageNextDays", {
        phase: Dt,
        days: String(qt)
      }) : tt("skyblockGame:passageNextSoon", {
        phase: Dt
      })
    }
    class vO extends Qt {
      constructor(tt, et, Vt, Ot) {
        let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(tt, Vt, Ot), this.translate = et, this.now = qt, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = tt => tt, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      Qf(tt) {
        this.message = tt, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(tt, et, Vt) {
        this.translate = tt, void 0 !== Vt && (this.itemName = Vt), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(tt) {
        return {
          itemName: tt.passageFish,
          displayName: this.itemName(tt.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(tt.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const tt = this.message;
        return null === tt ? {
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
          phase: tt.passagePhase,
          phaseName: KO(this.translate, tt.passagePhase),
          visitors: tt.passageVisitors.map((tt => this.describe(tt))),
          resting: this.describe(tt.passageResting),
          nextPhase: tt.passageNextPhase,
          next: hO(this.translate, tt.passageNextPhase, tt.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var WO = Vt(38760);
    const SO = "skyblockKeepersChairView";
    class cO extends Qt {
      constructor(tt, et, Vt, Ot, qt) {
        let Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          mt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new WO.e;
        super(tt, Vt, Ot), this.translate = et, this.requestAim = qt, this.now = Dt, this.pacer = mt, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = tt => tt, this.aim = tt => {
          !this.awaitingReply && this.open && this.atChair && tt !== this.favoured && (null === tt || this.islands.some((et => et.keepersChairIslandId === tt && et.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== tt && void 0 !== tt ? tt : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = mt.subscribe((() => {
          this.emit()
        }))
      }
      Qf(tt) {
        var et, Vt;
        this.received = !0;
        const Ot = this.favoured,
          qt = this.atChair;
        var Dt;
        return this.islands = tt.keepersChairIslands, this.favoured = tt.keepersChairFavoured, this.passage = null !== (et = tt.keepersChairPassage) && void 0 !== et ? et : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (Vt = tt.keepersChairAtChair) || void 0 === Vt || Vt, "place" === tt.keepersChairMessageKind ? (!qt && this.atChair && "refused" === (null === (Dt = this.status) || void 0 === Dt ? void 0 : Dt.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === tt.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== tt.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: tt.keepersChairRefusalKey,
          island: null
        } : this.favoured !== Ot && (this.status = null === this.favoured ? {
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
      receivePassage(tt) {
        this.received && (this.passage = tt, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(tt, et, Vt) {
        this.translate = tt, void 0 !== Vt && (this.itemName = Vt), this.emit()
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
      islandName(tt) {
        const et = this.islands.find((et => et.keepersChairIslandId === tt));
        return void 0 === et ? tt : this.translate(et.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const tt = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          et = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((tt => {
            const et = tt.keepersChairFeaturedFish;
            return {
              id: tt.keepersChairIslandId,
              name: this.translate(tt.keepersChairIslandNameKey),
              relit: tt.keepersChairIslandRelit,
              featuredFish: null === et ? null : {
                itemName: et,
                displayName: this.itemName(et)
              },
              favoured: tt.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === tt ? null : {
            tone: tt.tone,
            text: this.translate(tt.key, null === tt.island ? void 0 : {
              island: this.islandName(tt.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === et ? null : {
            phase: et.keepersChairPassagePhase,
            phaseName: KO(this.translate, et.keepersChairPassagePhase),
            nextPhase: et.keepersChairPassageNextPhase,
            next: hO(this.translate, et.keepersChairPassageNextPhase, et.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const RO = "skyblockReachLogView",
      IO = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      PO = "Caught Fish",
      ZO = [1, 2, 4];

    function LO(tt, et) {
      return tt.map((tt => ({
        ...tt,
        reachLogPageFish: tt.reachLogPageFish.map((tt => ({
          ...tt,
          reachLogFishFresh: et(tt)
        })))
      })))
    }
    class FO extends Qt {
      constructor(tt, et, Vt, Ot, qt) {
        let Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new WO.e;
        super(tt, Vt, Ot), this.translate = et, this.requestOpen = qt, this.pacer = Dt, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = tt => tt, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = tt => {
          this.pages.some((et => et.reachLogIslandId === tt)) && (this.selected = tt, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Dt.subscribe((() => {
          this.emit()
        }))
      }
      Qf(tt) {
        if (this.received = !0, "status" === tt.reachLogMessageKind) return !0 === tt.reachLogNews && this.markNews(), this.serverFresh = tt.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const et = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== tt.reachLogMessageKind)
          if (this.pageViews = null, this.pages = LO(tt.reachLogPages, (tt => tt.reachLogFishFresh || this.heldFresh.has(tt.reachLogFishItem))), this.letGoShown = tt.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, et) this.showPages();
          else {
            for (const tt of this.pages)
              for (const et of tt.reachLogPageFish) et.reachLogFishFresh && this.heldFresh.add(et.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(tt, et, Vt) {
        this.translate = tt, this.pageViews = null, void 0 !== Vt && (this.itemName = Vt), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = LO(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var tt, et, Vt, Ot;
        const qt = this.pages.find((tt => tt.reachLogPageFish.some((tt => tt.reachLogFishFresh))));
        if (void 0 !== qt) return qt.reachLogIslandId;
        if (null !== this.selected && this.pages.some((tt => tt.reachLogIslandId === this.selected))) return this.selected;
        return null !== (tt = null !== (et = null === (Vt = this.pages.filter((tt => tt.reachLogIslandAwake)).at(-1)) || void 0 === Vt ? void 0 : Vt.reachLogIslandId) && void 0 !== et ? et : null === (Ot = this.pages[0]) || void 0 === Ot ? void 0 : Ot.reachLogIslandId) && void 0 !== tt ? tt : null
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
        return this.pages.map((tt => {
          var et;
          return {
            id: tt.reachLogIslandId,
            name: this.translate(tt.reachLogIslandNameKey),
            awake: tt.reachLogIslandAwake,
            gold: tt.reachLogPageGold,
            caught: tt.reachLogPageFish.filter((tt => tt.reachLogFishCaught && !tt.reachLogFishVisitor)).length,
            total: tt.reachLogPageFish.filter((tt => !tt.reachLogFishVisitor)).length,
            fish: tt.reachLogPageFish.map((tt => {
              const et = tt.reachLogFishBestKg;
              return {
                itemName: tt.reachLogFishItem,
                name: tt.reachLogFishCaught ? this.itemName(tt.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: tt.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / tt.reachLogFishChance))
                }),
                best: tt.reachLogFishCaught ? null === et ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: et.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: tt.reachLogFishMarks,
                ribbons: ZO.map((et => 0 !== (tt.reachLogFishRibbons & et))),
                glimmer: 0 !== (8 & tt.reachLogFishRibbons),
                halo: 0 !== (32 & tt.reachLogFishRibbons),
                fresh: tt.reachLogFishFresh,
                visitor: tt.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (et = tt.reachLogPageReturner) && void 0 !== et ? et : null)
          }
        }))
      }
      buildReturner(tt) {
        return null === tt ? null : {
          itemName: tt.reachLogReturnerFishItem,
          line: this.translate(tt.reachLogReturnerLineKey, {
            name: this.translate(tt.reachLogReturnerNameKey),
            trinket: this.translate(tt.reachLogReturnerTrinketKey)
          }),
          back: tt.reachLogReturnerBack
        }
      }
      receivePassagePhase(tt) {
        null !== this.passagePhase && this.passagePhase !== tt && (this.pagesCurrent = !1), this.passagePhase = tt
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const kO = "skyblockLampLightView";
    class GO {
      constructor(tt, et, Vt, Ot) {
        this.sw = tt, this.translate = et, this.requestCommand = Vt, this.pacer = Ot, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.df = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = tt => {
          tt ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = tt => {
          this.send(`buy ${tt}`)
        }, this.socket = tt => {
          this.send(`socket ${null!==tt&&void 0!==tt?tt:Ft}`)
        }, this.wearTint = tt => {
          this.send(`tint ${null!==tt&&void 0!==tt?tt:Ft}`)
        }, this.setSituation = tt => {
          this.situation = tt, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Ot.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = Ot.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      Qf(tt) {
        if (this.message = tt, null !== tt.lampLightShop && (this.shop = tt.lampLightShop), "open" === tt.lampLightKind && (this.refusalKey = null), "reply" === tt.lampLightKind) {
          var et;
          const qt = null !== (et = tt.lampLightReplyTag) && void 0 !== et ? et : null,
            Dt = null !== qt && qt === this.offTag;
          var Vt, Ot;
          if (Dt ? this.settleOff() : null !== qt && qt !== this.awaitingTag || this.settleReply(), this.refusalKey = tt.lampLightRefusalKey, null !== tt.lampLightBought && !Dt) this.sparkle = {
            id: tt.lampLightBought,
            count: (null !== (Vt = null === (Ot = this.sparkle) || void 0 === Ot ? void 0 : Ot.count) && void 0 !== Vt ? Vt : 0) + 1
          }
        }
        tt.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === tt.lampLightKind && (this.lastGained = tt.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(tt) {
        tt !== this.atChair && (this.atChair = tt, tt && (this.refusalKey = null), this.emit())
      }
      setTranslator(tt, et) {
        this.translate = tt, this.locale = null !== et && void 0 !== et ? et : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.df = !0
      }
      send(tt) {
        var et;
        if (null !== this.awaitingTag || "ready" !== (null === (et = this.message) || void 0 === et ? void 0 : et.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const Vt = this.nextTag();
        this.awaitingTag = Vt, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${tt} ${Vt}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const tt = this.nextTag();
        this.offTag = tt, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${tt}`)
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
        this.df || (this.snapshot = this.buildSnapshot(), this.sw(this.snapshot))
      }
      formatLight(tt) {
        return Math.floor(tt).toLocaleString(this.locale)
      }
      formatPercent(tt) {
        const et = 100 * tt;
        return et >= 10 ? Math.round(et).toLocaleString(this.locale) : et.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(tt, et) {
        if ("bite" === tt) return this.translate("skyblockGame:lampLightBite", {
          seconds: (et.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === tt) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(et.lampLightRareChance)
        });
        if ("notice" === tt) return null === et.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(et.lampLightNoticeChance)
        });
        const Vt = "meter" === tt ? et.lampLightMeterCatches : et.lampLightBloomCatches;
        return null === Vt ? null : this.translate("meter" === tt ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(Vt))
        })
      }
      oddsLines(tt, et) {
        const Vt = (tt, et) => {
            var Vt;
            return null !== (Vt = {
              bite: et.lampLightBiteMs,
              rare: et.lampLightRareChance,
              meter: et.lampLightMeterCatches,
              bloom: et.lampLightBloomCatches,
              notice: et.lampLightNoticeChance
            } [tt]) && void 0 !== Vt ? Vt : 0
          },
          Ot = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          qt = [];
        for (const Dt of ["bite", "rare", "meter", "bloom", "notice"]) {
          const mt = this.formatOdds(Dt, tt),
            dt = this.formatOdds(Dt, et);
          if (null === mt || null === dt || "bite" !== Dt && "rare" !== Dt && mt === dt) continue;
          const jt = Vt(Dt, et) - Vt(Dt, tt),
            Ht = Ot[Dt] ? jt < 0 : jt > 0;
          qt.push({
            label: Dt,
            before: mt,
            after: dt,
            tone: mt === dt ? "same" : Ht ? "better" : "worse"
          })
        }
        return qt
      }
      charmView(tt, et, Vt) {
        const Ot = tt.lampLightCharmId.charAt(0).toUpperCase() + tt.lampLightCharmId.slice(1),
          qt = "bloom" === this.situation;
        return {
          id: tt.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${Ot}`),
          effect: this.translate(`skyblockGame:lampLightCharm${Ot}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(tt.lampLightCharmCost)
          }),
          owned: tt.lampLightCharmOwned,
          affordable: Vt >= tt.lampLightCharmCost,
          socketed: et.lampLightSocketed === tt.lampLightCharmId,
          lines: this.oddsLines(qt ? et.lampLightBareBloom : et.lampLightBareOpen, qt ? tt.lampLightCharmBloom : tt.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var tt, et, Vt, Ot;
        const qt = this.message,
          Dt = "ready" === (null === qt || void 0 === qt ? void 0 : qt.lampLightStatus) ? this.shop : null,
          mt = null !== (tt = null === qt || void 0 === qt ? void 0 : qt.lampLightBalance) && void 0 !== tt ? tt : 0,
          dt = this.atChair,
          jt = "loading" === (null === qt || void 0 === qt ? void 0 : qt.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === qt || void 0 === qt ? void 0 : qt.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          Ht = "ready" !== (null === qt || void 0 === qt ? void 0 : qt.lampLightStatus) || dt ? null !== (et = this.refusalKey) && void 0 !== et ? et : jt : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== qt && "locked" !== qt.lampLightStatus,
          status: null !== (Vt = null === qt || void 0 === qt ? void 0 : qt.lampLightStatus) && void 0 !== Vt ? Vt : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(mt)
          }),
          releasing: null !== (Ot = null === qt || void 0 === qt ? void 0 : qt.lampLightReleasing) && void 0 !== Ot && Ot,
          gained: null === qt || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === qt || void 0 === qt ? void 0 : qt.lampLightStatus) && dt && !this.isPending(),
          situation: this.situation,
          shop: null === Dt ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: Dt.lampLightOddsRod,
              island: this.translate(Dt.lampLightIslandNameKey)
            }),
            heldRod: null !== Dt.lampLightHeldRod,
            charms: Dt.lampLightCharms.map((tt => this.charmView(tt, Dt, mt))),
            tints: Dt.lampLightTints.map((tt => {
              const et = tt.lampLightTintId,
                [Vt, Ot, qt] = tt.lampLightTintColour;
              return {
                id: et,
                name: this.translate(`skyblockGame:lampLightTint${et.charAt(0).toUpperCase()}${et.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(tt.lampLightTintCost)
                }),
                owned: tt.lampLightTintOwned,
                affordable: mt >= tt.lampLightTintCost,
                wearing: Dt.lampLightTint === et,
                colour: `rgb(${Vt}, ${Ot}, ${qt})`
              }
            })),
            wearingIslandColours: null === Dt.lampLightTint
          },
          notice: null === Ht ? null : this.translate(Ht),
          sparkle: this.sparkle
        }
      }
    }
    const zO = "skyblockMagmawardView";
    class oO {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sw = tt, this.now = et, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = At.map((() => 0)), this.wornAt = At.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      Qf(tt) {
        var et, Vt;
        const Ot = At.map(((et, Vt) => !0 === tt.magmawardPiecesWorn[Vt]));
        if (!Ot.includes(!0)) return this.snapshot = null, void this.sw(null);
        const qt = this.now(),
          Dt = this.snapshot;
        null === Dt && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const mt = tt.magmawardFuelCarried,
          dt = !Ot.includes(!1);
        let jt = null !== (et = null === Dt || void 0 === Dt ? void 0 : Dt.pulse) && void 0 !== et ? et : null,
          Ht = null !== (Vt = null === Dt || void 0 === Dt ? void 0 : Dt.flare) && void 0 !== Vt ? Vt : null;
        tt.magmawardFuelBurned ? (jt = "burn", Ht = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = qt, this.flareAt = qt) : null !== Dt && mt > Dt.fuel && (jt = "gain", this.pulseToken++, this.pulseAt = qt), dt && null !== Dt && !Dt.fullSet && (Ht = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = qt, this.setLitAt = qt);
        const Xt = At.map(((tt, et) => (Ot[et] && null !== Dt && !Dt.pieces[et].worn && (this.wornTokens[et]++, this.wornAt[et] = qt), {
          itemName: tt,
          worn: Ot[et],
          wornToken: this.wornTokens[et],
          justWorn: Ot[et] && this.isPlaying(this.wornAt[et], qt)
        })));
        this.snapshot = {
          pieces: Xt,
          wornCount: Ot.filter(Boolean).length,
          fullSet: dt,
          fuel: mt,
          fuelState: mt <= 0 ? "empty" : mt <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, qt) ? jt : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, qt) ? Ht : null,
          flareToken: this.flareToken,
          setLit: dt && this.isPlaying(this.setLitAt, qt),
          setLitToken: this.setLitToken
        }, this.sw(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.sw(null)
      }
      isPlaying(tt, et) {
        return et - tt < 1200
      }
    }
    const rO = "skyblockGlowtideView";
    class UO {
      constructor(tt) {
        this.sw = tt, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = tt => {
          this.arrow = tt, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      Qf(tt) {
        this.bloom = tt.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.sw(null))
      }
      afterRender(tt, et) {
        const Vt = this.bloom;
        if (null === Vt || null === tt) return;
        const Ot = Vt.glowtideBloomX - tt[0],
          Dt = Vt.glowtideBloomZ - tt[2],
          mt = Math.hypot(Ot, Dt),
          dt = this.snapshot,
          jt = null !== dt && void 0 !== dt && dt.inRange ? 1 : 0,
          Ht = mt <= 12.5 + jt && tt[1] - Vt.glowtideBloomY <= 10 + jt;
        !Ht || null !== dt && void 0 !== dt && dt.inRange || this.inRangeToken++;
        const Xt = {
          colour: Vt.glowtideBloomColour,
          inRange: Ht,
          distance: Math.round(mt),
          inRangeToken: this.inRangeToken
        };
        (null === dt || Xt.colour !== dt.colour || Xt.inRange !== dt.inRange || !Ht && Xt.distance !== dt.distance) && (this.snapshot = Xt, this.sw(Xt));
        const Qt = qt.e.computeShortestRotation(et, (0, qt.Lb)([Ot, 0, Dt]));
        null === this.arrow || Math.abs(Qt - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${Qt}rad)`, this.arrowTurn = Qt)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.sw(null)
      }
    }
    const AO = "skyblockGlowMeterView";
    class iO {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sw = tt, this.now = et, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      Qf(tt) {
        const et = this.now(),
          {
            glowMeterFill: Vt,
            glowMeterCapacity: Ot
          } = tt,
          qt = Vt >= Ot,
          Dt = this.snapshot;
        null !== Dt && (qt && !Dt.full && (this.fullToken++, this.fullAt = et), Dt.full && !qt ? (this.burstToken++, this.burstAt = et) : Vt > Dt.fill && (this.gainToken++, this.gainAt = et)), this.snapshot = {
          fill: Vt,
          uQ: Ot,
          ratio: Math.min(1, Math.max(0, Vt / Ot)),
          full: qt,
          rares: tt.glowMeterRares,
          ready: qt && this.isPlaying(this.fullAt, et),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, et),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, et),
          gainToken: this.gainToken
        }, this.sw(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.sw(null)
      }
      isPlaying(tt, et) {
        return et - tt < 2e3
      }
    }
    const YO = "skyblockHushWaitView";
    class BO {
      constructor(tt) {
        this.sw = tt, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      Qf(tt) {
        let {
          hushWaitMs: et,
          hushWaitTotalMs: Vt,
          hushWaitLines: Ot
        } = tt;
        if (this.clearTimers(), this.token++, 0 === Ot.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (et <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: Ot[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const qt = Math.max(null !== Vt && void 0 !== Vt ? Vt : et, et),
          Dt = qt - et,
          mt = tt => qt * tt / Ot.length,
          dt = tt => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: qt,
              elapsedMs: Dt,
              line: Ot[tt],
              lineIndex: tt
            })
          };
        let jt = 0;
        for (; jt + 1 < Ot.length && mt(jt + 1) <= Dt;) jt++;
        dt(jt);
        for (let Ht = jt + 1; Ht < Ot.length; Ht++) this.later(mt(Ht) - Dt, (() => {
          dt(Ht)
        }));
        this.later(et, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(tt) {
        this.snapshot = tt, this.sw(tt)
      }
      later(tt, et) {
        this.timers.push(setTimeout(et, tt))
      }
      clearTimers() {
        for (const tt of this.timers) clearTimeout(tt);
        this.timers = []
      }
    }
    const pO = "skyblockTideChartsView",
      xO = 36e5,
      TO = 864e5;

    function gO(tt, et, Vt) {
      const [Ot, qt, Dt, mt] = tt.tideChartArea, dt = Math.floor(et), jt = Math.floor(Vt);
      return dt >= Ot && dt <= Dt && jt >= qt && jt <= mt
    }

    function sO(tt, et, Vt) {
      const [Ot, qt, Dt, mt] = tt.tideChartWater;
      return function(tt, et, Vt, Ot, qt, Dt) {
        const mt = 4 - it(Math.floor(qt) - (tt - Vt), Vt);
        return 5 * it(Math.floor(Dt) - (et - Ot), Ot) + mt
      }(Ot, qt, Dt, mt, et, Vt)
    }

    function nO(tt, et, Vt) {
      const Ot = tt.tideCharts;
      for (let qt = 0; qt < Ot.length; qt++)
        if (gO(Ot[qt], et, Vt)) return Ot[qt];
      return null
    }

    function tq(tt, et, Vt) {
      const Ot = Math.max(0, et - Vt);
      return Ot > TO ? tt("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(Ot / TO))
      }) : Ot > xO ? tt("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(Ot / xO))
      }) : tt("skyblockGame:tideChartsTurnSoon")
    }
    class eq extends Qt {
      constructor(tt, et, Vt, Ot) {
        let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(tt, Vt, Ot), this.translate = et, this.now = qt, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.il = tt => {
          this.picked = tt, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      Qf(tt) {
        const et = this.message;
        if (null !== et)
          for (const Ot of tt.tideCharts) {
            var Vt;
            const tt = et.tideCharts.find((tt => tt.tideChartIsland === Ot.tideChartIsland)),
              qt = Ot.tideChartLit & ~(null !== (Vt = null === tt || void 0 === tt ? void 0 : tt.tideChartLit) && void 0 !== Vt ? Vt : 0);
            void 0 !== tt && 0 !== qt && (this.pulse = {
              island: Ot.tideChartIsland,
              cells: qt,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = tt, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(tt, et) {
        var Vt;
        const Ot = null === this.message || Number.isNaN(tt) ? null : nO(this.message, tt, et),
          qt = null !== (Vt = null === Ot || void 0 === Ot ? void 0 : Ot.tideChartIsland) && void 0 !== Vt ? Vt : null,
          Dt = null === Ot ? -1 : function(tt, et, Vt) {
            const [Ot, qt, Dt, mt] = tt.tideChartWater;
            return function(tt, et, Vt, Ot, qt, Dt, mt) {
              return ((qt - tt) / (Vt + mt)) ** 2 + ((Dt - et) / (Ot + mt)) ** 2 <= 1
            }(Ot, qt, Dt, mt, et, Vt, 2) ? sO(tt, et, Vt) : -1
          }(Ot, tt, et);
        return (qt !== this.hereIsland || Dt !== this.hereCell) && (this.hereIsland = qt, this.hereCell = Dt, null !== qt && (this.lastIsland = qt), !0)
      }
      afterRender(tt) {
        if (null === this.message) return;
        this.lastX = null === tt ? Number.NaN : tt[0], this.lastZ = null === tt ? Number.NaN : tt[2];
        const et = this.locate(this.lastX, this.lastZ),
          Vt = this.expirePulses();
        (et || Vt || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const tt = this.now();
        return !(!this.open || tt - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = tt, tq(this.translate, this.message.tideChartTurnsInMs, tt - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(tt, et) {
        const Vt = null === this.message ? null : nO(this.message, tt, et);
        if (null === Vt) return;
        const Ot = sO(Vt, tt, et);
        0 === (Vt.tideChartPreBlank & 1 << Ot) && (this.cast = {
          island: Vt.tideChartIsland,
          cell: Ot,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const tt = this.now();
        let et = !1;
        return 0 !== this.pulse.cells && tt - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, et = !0), null !== this.cast && tt - this.cast.atMs >= 1500 && (this.cast = null, et = !0), et
      }
      setTranslator(tt) {
        this.translate = tt, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(tt, et) {
        var Vt;
        return null !== (Vt = tt.tideCharts.find((tt => tt.tideChartIsland === et))) && void 0 !== Vt ? Vt : null
      }
      describe(tt) {
        var et, Vt, Ot;
        const qt = tt.tideChartIsland,
          Dt = [];
        for (let Et = 0; Et < 25; Et++) {
          const et = 1 << Et;
          0 !== (tt.tideChartLit & et) ? Dt.push("lit") : 0 !== (tt.tideChartClear & et) ? Dt.push("clear") : 0 !== (tt.tideChartPreBlank & et) ? Dt.push("shore") : Dt.push("water")
        }
        const mt = function(tt) {
            let et = 0;
            for (let Vt = tt >>> 0; 0 !== Vt; Vt &= Vt - 1) et++;
            return et
          }(tt.tideChartLit),
          dt = tt.tideChartInkCount,
          jt = this.translate(tt.tideChartIslandNameKey),
          Ht = this.translate("skyblockGame:tideChartsLit", {
            lit: String(mt),
            ink: String(dt)
          }),
          Xt = null === tt.tideChartPictureNameKey ? null : this.translate(tt.tideChartPictureNameKey),
          Qt = this.hereIsland === qt && -1 !== this.hereCell ? this.hereCell : null,
          lt = [`${jt}: ${Ht}.`];
        if (null !== Xt && lt.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: Xt
          })), null !== Qt) {
          const tt = Math.floor(Qt / 5) + 1,
            et = Qt % 5 + 1;
          lt.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(tt),
            column: String(et)
          }))
        }
        return {
          island: qt,
          islandName: jt,
          cells: Dt,
          hereCell: Qt,
          lit: mt,
          ink: dt,
          litText: Ht,
          pictureName: Xt,
          gridLabel: lt.join(" "),
          pulseCells: this.pulse.island === qt ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (et = this.cast) || void 0 === et ? void 0 : et.island) === qt ? this.cast.cell : null,
          castToken: null !== (Vt = null === (Ot = this.cast) || void 0 === Ot ? void 0 : Ot.token) && void 0 !== Vt ? Vt : 0
        }
      }
      buildSnapshot() {
        var tt, et, Vt;
        const Ot = this.message;
        if (null === Ot || 0 === Ot.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const qt = this.findChart(Ot, this.hereIsland),
          Dt = null !== (tt = null !== (et = null !== (Vt = this.findChart(Ot, this.open ? this.picked : null)) && void 0 !== Vt ? Vt : qt) && void 0 !== et ? et : this.findChart(Ot, this.lastIsland)) && void 0 !== tt ? tt : Ot.tideCharts[0],
          mt = null === qt ? null : this.describe(qt);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: mt,
          card: Dt === qt ? mt : this.describe(Dt),
          turnsText: tq(this.translate, Ot.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(Ot.tideChartBookCount)
          }),
          tabs: Ot.tideCharts.map((tt => ({
            island: tt.tideChartIsland,
            name: this.translate(tt.tideChartIslandNameKey),
            selected: tt.tideChartIsland === Dt.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const Vq = "skyblockRegularsView",
      Oq = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      qq = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function Dq(tt, et) {
      return "given" === tt ? et.given : "owed" === tt ? et.owed : et.goal
    }
    class mq extends Qt {
      constructor(tt, et, Vt, Ot) {
        super(tt, Vt, Ot), this.translate = et, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = tt => tt, this.openIsland = tt => {
          this.selected = tt, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = tt => {
          this.selected = tt, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      Qf(tt) {
        this.message = tt, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const tt = this.openedFromReachLog;
        return this.openedFromReachLog = !1, tt
      }
      setTranslator(tt, et, Vt) {
        this.translate = tt, void 0 !== Vt && (this.itemName = Vt), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(tt, et, Vt) {
        return {
          text: this.translate(Dq(tt, et), Vt),
          given: "given" === tt
        }
      }
      describeRegular(tt, et) {
        const Vt = this.translate,
          Ot = null !== tt.regularKg,
          qt = tt.regularMeetings,
          Dt = Ot ? 0 === qt ? Vt("skyblockGame:regularsNotMet") : 1 === qt ? Vt("skyblockGame:regularsMeetingsOne") : Vt("skyblockGame:regularsMeetings", {
            count: qt
          }) : "";
        return {
          id: tt.regularId,
          name: Vt(tt.regularNameKey),
          line: Vt(tt.regularLineKey),
          itemName: tt.regularFishItem,
          fishName: this.itemName(tt.regularFishItem),
          tagged: Ot,
          size: null === tt.regularKg ? Vt("skyblockGame:regularsNotTagged") : Vt("skyblockGame:regularsSize", {
            kg: tt.regularKg.toFixed(1)
          }),
          meetings: Dt,
          chance: Vt("skyblockGame:regularsChance", {
            count: tt.regularOneInCasts
          }),
          resting: tt.regularRestingToday,
          gifts: [{
            text: Vt("skyblockGame:regularsGiftFlare"),
            given: qt >= 3
          }, this.describeGift(tt.regularTintGift, Oq, {
            tint: Vt(tt.regularTintNameKey)
          })],
          history: [...tt.regularHistory].reverse().map((tt => {
            const Ot = tt.regularMeetingKg.toFixed(1),
              qt = et - tt.regularMeetingDay;
            return qt <= 0 ? Vt("skyblockGame:regularsToday", {
              kg: Ot
            }) : Vt("skyblockGame:regularsDaysAgo", {
              days: qt,
              kg: Ot
            })
          }))
        }
      }
      describeIsland(tt, et) {
        return {
          id: tt.regularsIslandId,
          name: this.translate(tt.regularsIslandNameKey),
          charm: this.describeGift(tt.regularsCharmGift, qq, {
            charm: this.translate(tt.regularsCharmNameKey)
          }),
          regulars: tt.regularsList.map((tt => this.describeRegular(tt, et)))
        }
      }
      buildSnapshot() {
        var tt, et, Vt, Ot;
        const qt = this.message;
        if (null === qt) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const Dt = qt.regularsIslands.map((tt => this.describeIsland(tt, qt.regularsToday))),
          mt = null !== (tt = null !== (et = null === (Vt = Dt.find((tt => tt.id === this.selected))) || void 0 === Vt ? void 0 : Vt.id) && void 0 !== et ? et : null === (Ot = Dt[0]) || void 0 === Ot ? void 0 : Ot.id) && void 0 !== tt ? tt : "";
        return {
          enabled: !0,
          open: this.open,
          selected: mt,
          islands: Dt
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const dq = "skyblockHiddenWatersView";
    class jq {
      constructor(tt) {
        this.sw = tt, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      Qf(tt) {
        this.snapshot = function(tt) {
          const [et, Vt] = tt.hiddenWatersMapSize, Ot = (tt, Ot) => ({
            left: 1 - tt / et,
            top: Ot / Vt
          }), qt = new Map;
          for (const [mt, dt] of tt.hiddenWatersGlimpses) {
            var Dt;
            const tt = null !== (Dt = qt.get(mt)) && void 0 !== Dt ? Dt : [];
            tt.push(dt), qt.set(mt, tt)
          }
          return {
            found: tt.hiddenWatersFound,
            total: tt.hiddenWatersTotal,
            aspect: Vt / et,
            pins: tt.hiddenWatersPins.map((tt => {
              let [et, Vt] = tt;
              return Ot(et, Vt)
            })),
            islands: tt.hiddenWatersIslands.map((tt => {
              let [qt, Dt, mt, dt] = tt;
              const {
                left: jt,
                top: Ht
              } = Ot(mt + 1, Dt);
              return {
                left: jt,
                top: Ht,
                width: (mt + 1 - qt) / et,
                height: (dt + 1 - Dt) / Vt
              }
            })),
            glimpses: qt
          }
        }(tt), this.sw(this.snapshot)
      }
    }
    const Hq = "skyblockDialogueView";
    class Xq extends Qt {
      constructor(tt, et, Vt, Ot, qt) {
        let Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(tt, Vt, Ot), this.translate = et, this.requestDialogue = qt, this.now = Dt, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = tt => {
          this.selection = {
            kind: "quest",
            questId: tt
          }, this.request(), this.show()
        }, this.selectCharacter = tt => {
          this.selection = {
            kind: "character",
            npcId: tt
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      Qf(tt) {
        this.received = !0, this.scripts = tt.questDialogueScripts, this.speakers = new Map(tt.questDialogueSpeakers.map((tt => [tt.dialogueSpeakerId, tt]))), this.emit()
      }
      setTranslator(tt) {
        this.translate = tt, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const tt = this.now();
        tt >= this.requestAvailableAt && (this.requestAvailableAt = tt + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var tt;
        const et = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...et,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const Vt = this.selection;
        if ("quest" === Vt.kind) {
          const tt = this.scripts.find((tt => tt.dialogueQuestId === Vt.questId));
          return {
            ...et,
            characters: [],
            questFocus: Vt.questId,
            conversations: tt ? [this.conversation(tt)] : []
          }
        }
        const Ot = [];
        for (let Dt = this.scripts.length - 1; Dt >= 0; Dt--) {
          const tt = this.scripts[Dt].dialogueLines;
          for (let et = tt.length - 1; et >= 0; et--) Ot.includes(tt[et].dialogueSpeakerId) || Ot.push(tt[et].dialogueSpeakerId)
        }
        const qt = null !== Vt.npcId && Ot.includes(Vt.npcId) ? Vt.npcId : null !== (tt = Ot[0]) && void 0 !== tt ? tt : null;
        return {
          ...et,
          characters: Ot.map((tt => {
            var et, Vt;
            return {
              id: tt,
              styling: null !== (et = null === (Vt = this.speakers.get(tt)) || void 0 === Vt ? void 0 : Vt.dialogueSpeakerStyling) && void 0 !== et ? et : tt,
              selected: tt === qt
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((tt => tt.dialogueLines.some((tt => tt.dialogueSpeakerId === qt)))).map((tt => this.conversation(tt))).reverse()
        }
      }
      conversation(tt) {
        let et = null;
        return {
          questId: tt.dialogueQuestId,
          questName: this.translate(tt.dialogueQuestNameKey),
          completed: tt.dialogueQuestCompleted,
          lines: tt.dialogueLines.map(((tt, Vt) => {
            var Ot;
            const qt = tt.dialogueSpeakerId === et || null === (Ot = this.speakers.get(tt.dialogueSpeakerId)) || void 0 === Ot ? void 0 : Ot.dialogueSpeakerStyling;
            return et = tt.dialogueSpeakerId, {
              key: Vt,
              display: {
                line: {
                  translationKey: tt.dialogueLineKey,
                  params: this.params(tt.dialogueLineParams)
                },
                speakerName: qt,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(tt) {
        if (void 0 !== tt) return Object.fromEntries(Object.entries(tt).map((tt => {
          let [et, Vt] = tt;
          return [et, "string" === typeof Vt ? Vt : this.translate(Vt.translationKey)]
        })))
      }
    }
    var Qq = Vt(697),
      lq = Vt(1363),
      Eq = Vt(106);
    const fq = "skyblockAutographsView";

    function wq(tt) {
      const et = Qq.j[tt];
      return {
        label: et.chatTag.map((tt => tt.str)).join(""),
        icon: et.icon,
        colour: et.mainRGB
      }
    }
    class yq extends Qt {
      constructor(tt) {
        let et = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(tt, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = et, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      Qf(tt) {
        this.signatures = tt.autographSignatures, tt.autographOpen ? this.show() : this.emit()
      }
      setTranslator(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = et, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var tt;
        const et = null !== (tt = this.signatures) && void 0 !== tt ? tt : [],
          Vt = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          Ot = [...et].sort(((tt, et) => Number(null !== et.autographRank) - Number(null !== tt.autographRank) || et.autographSignedAtMs - tt.autographSignedAtMs)).map((tt => ({
            key: `${tt.autographSignedAtMs}|${tt.autographSignerName}`,
            name: (0, lq.e)(tt.autographSignerName, !Eq.featureFlags.canSeeRealPlayerNames),
            rank: null === tt.autographRank ? null : wq(tt.autographRank),
            signedOn: Vt.format(tt.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: Ot,
          total: Ot.length,
          rankTotal: Ot.filter((tt => null !== tt.rank)).length
        }
      }
    }
    const Nq = "skyblockHudView",
      aq = () => {},
      Mq = {
        getItem: () => null,
        setItem: aq,
        removeItem: aq
      };
    class bq {
      constructor(tt) {
        let {
          translate: et,
          translateWithIcons: Vt,
          setMenuOpen: Ot = aq,
          dismissMenu: qt = () => {
            Ot(!1)
          },
          publishSkills: Dt = aq,
          publishQuests: mt = aq,
          publishQuestNotification: dt = aq,
          publishDungeons: jt = aq,
          publishCollections: Ht = aq,
          publishMap: Xt = aq,
          publishHud: Qt = aq,
          publishPortalTransit: lt = aq,
          publishDailyReward: ft = aq,
          publishMailbox: wt = aq,
          publishQuestGraph: yt = aq,
          publishForge: Nt = aq,
          publishSmuggler: Mt = aq,
          publishKeepersChair: bt = aq,
          publishReachLog: Jt = aq,
          publishLampLight: Ct = aq,
          publishMagmaward: ut = aq,
          publishGlowtide: ht = aq,
          publishGlowMeter: vt = aq,
          publishHushWait: Wt = aq,
          publishPassage: St = aq,
          publishTideCharts: ct = aq,
          publishRegulars: Rt = aq,
          publishHiddenWaters: It = aq,
          publishDialogue: Pt = aq,
          publishAutographs: Zt = aq,
          isLoadingScreenUp: Lt = () => !1,
          onDailyRewardCoinLanded: Ft = aq,
          onDailyRewardStarted: kt = aq,
          onDailyRewardFinished: Gt = aq,
          onDailyRewardItemLanded: zt = aq,
          onMailboxStarted: ot = aq,
          journeyStorage: rt = Mq,
          requestTracking: Ut = aq,
          requestTravel: At = aq,
          requestDungeonEnter: it = aq,
          requestQuestJump: Yt = aq,
          requestQuestArrive: Bt = aq,
          requestForge: pt = aq,
          requestSmuggle: xt = aq,
          requestKeepersChairAim: Tt = aq,
          requestReachLogOpen: gt = aq,
          requestLampLight: st = aq,
          requestDialogue: nt = aq
        } = tt;
        this.navigation = void 0, this.map = void 0, this.compass = new Kt, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new WO.e, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = tt => tt, this.close = () => {
          for (const tt of this.panels) tt.close()
        }, this.setMenuOpen = Ot, this.publishHud = Qt, this.portalTransit = new rV(lt, rt), this.magmaward = new oO(ut), this.glowtide = new UO(ht), this.glowMeter = new iO(vt), this.hushWait = new BO(Wt), this.dailyReward = new iV(ft, (() => Lt() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (tt => {
          this.quests.setNotificationsHeld(tt)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), Ft, kt, Gt, zt);
        const te = tt => {
          this.panels.some((tt => tt.isOpen())) || (tt ? qt() : this.setMenuOpen(!1))
        };
        this.skills = new jV(Dt, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), et, void 0, void 0, te), this.quests = new EV(mt, Ut, et, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, te, dt), this.dungeons = new yV(jt, et, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, te, it), this.collections = new GV(Ht, et, (() => {
          this.beforePanelOpen(this.collections)
        }), te), this.map = new Et(Xt, At, et, (() => {
          this.beforePanelOpen(this.map)
        }), te), this.questGraph = new tO(yt, et, (() => {
          this.beforePanelOpen(this.questGraph)
        }), te, Yt, Bt, rt), this.forge = new aO(Nt, et, (() => {
          this.beforePanelOpen(this.forge)
        }), te, pt), this.smuggler = new JO(Mt, et, (() => {
          this.beforePanelOpen(this.smuggler)
        }), te, xt), this.lampLight = new GO(Ct, et, st, this.commandPacer), this.keepersChair = new cO(bt, et, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (tt => {
          this.lampLight.onChairClosed(), te(tt)
        }), Tt, Date.now, this.commandPacer), this.reachLog = new FO(Jt, et, (() => {
          this.beforePanelOpen(this.reachLog)
        }), te, gt, this.commandPacer), this.passage = new vO(St, et, (() => {
          this.beforePanelOpen(this.passage)
        }), te), this.tideCharts = new eq(ct, et, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), te), this.regulars = new mq(Rt, et, (() => {
          this.beforePanelOpen(this.regulars)
        }), (tt => {
          this.regulars.takeReturnToReachLog() && !tt && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), te(tt)
        })), this.hiddenWaters = new jq(It), this.dialogue = new Xq(Pt, et, (() => {
          this.beforePanelOpen(this.dialogue)
        }), te, nt), this.autographs = new yq(Zt, (() => {
          this.beforePanelOpen(this.autographs)
        }), te), this.mailbox = new xV(wt, (() => Lt() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), ot), this.quests.translateWithIcons = null !== Vt && void 0 !== Vt ? Vt : null, this.skills.onLevelUp = tt => {
          this.quests.notify(tt)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new mV(this.map, this.quests, this.compass, et)
      }
      getHudSnapshot() {
        const tt = this.hudSnapshot,
          et = this.dailyReward.getHeldCoins();
        return null === tt || et <= 0 || !("hudPurseCoins" in tt) ? tt : {
          ...tt,
          hudPurseCoins: Math.max(0, tt.hudPurseCoins - et)
        }
      }
      receiveHud(tt) {
        this.hudSnapshot = tt, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(tt) {
        this.setMenuOpen(!0);
        const et = tt === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = tt;
        for (const Vt of this.panels) Vt === tt || et && Vt === this.reachLog || Vt.close();
        this.openingPanel = null
      }
      setTranslator(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : et => this.resolveItemName(et, tt);
        this.quests.translateWithIcons = null !== Vt && void 0 !== Vt ? Vt : null, this.navigation.setTranslator(tt, et), this.lampLight.setTranslator(tt, et), this.mailbox.setItemName(Ot);
        for (const qt of this.panels) qt.setTranslator(tt, et, Ot)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const tt of this.panels) tt.dispose()
      }
    }
    var Jq = Vt(1140),
      Cq = Vt.n(Jq),
      uq = Vt(26),
      Kq = Vt(36853),
      hq = Vt(3478),
      vq = Vt(2018),
      Wq = Vt(2001),
      Sq = Vt(34406),
      cq = Vt(1286),
      Rq = Vt(1554),
      Iq = Vt(1188);

    function Pq(tt) {
      let {
        controller: et,
        minimap: Vt,
        children: Ot
      } = tt;
      const Dt = (0, Rq.h)(Nq, et.getHudSnapshot()),
        [mt, dt] = (0, vt.useState)(et.skills.getSnapshot().overallLevel);
      (0, Rq.f)(dV, (tt => {
        dt(tt.overallLevel)
      }));
      const jt = (0, vt.useRef)(null);
      (0, Rq.f)(AV, (tt => {
        ! function(tt, et) {
          if (null === tt || "function" !== typeof tt.animate) return;
          const Vt = et ? 1.35 : 1.15;
          tt.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${Vt})`
          }, {
            transform: "scale(1)"
          }], {
            duration: et ? 320 : 160,
            easing: "ease-out"
          }), tt.classList.toggle("Receiving", !et), et && (tt.classList.remove("Shine"), tt.offsetWidth, tt.classList.add("Shine"))
        }(jt.current, tt)
      }));
      const {
        t: Ht
      } = (0, cq.H)(), {
        isTouchScreen: Xt
      } = (0, uq.k)(["isTouchScreen"]), [Qt, lt] = (0, vt.useState)(null);
      return (0, hq.j)(Qt, ".SkyblockRightHud"), null !== Dt || Vt ? (0, Iq.jsx)(Kq.g, {
        placement: "topRight",
        children: (0, Iq.jsxs)("div", {
          className: Cq()("SkyblockRightHud", {
            TouchScreen: Xt
          }),
          children: [Vt, null !== Dt && (0, Iq.jsxs)("div", {
            ref: lt,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in Dt ? (0, Iq.jsx)("div", {
              className: "SkyblockHudHelp",
              children: Dt.hudHelpText
            }) : (0, Iq.jsxs)(Iq.Fragment, {
              children: [(0, Iq.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, Iq.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, Iq.jsx)("strong", {
                    style: {
                      color: qt.P.cyanUiText
                    },
                    children: Ht(Dt.hudZoneNameKey)
                  }), null !== mt && (0, Iq.jsx)("span", {
                    style: {
                      color: qt.P.goldUiText
                    },
                    children: Ht("skyblockGame:level", {
                      level: (0, Sq.g)(mt)
                    })
                  })]
                }), (0, Iq.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: jt,
                  children: [(0, Iq.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, Iq.jsx)(vq.e, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, Sq.g)(Dt.hudPurseCoins)]
                })]
              }), Dt.hudClockText.length > 0 && (0, Iq.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, Iq.jsx)(Wq.e, {
                  text: Dt.hudClockText
                })
              })]
            }), Ot, "hudZoneNameKey" in Dt && (0, Iq.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function Zq(tt) {
      let {
        icon: et
      } = tt;
      const Vt = (0, vt.useCallback)((tt => {
        null === tt || void 0 === tt || tt.replaceChildren(pe(et))
      }), [et]);
      return (0, Iq.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: Vt
      })
    }

    function Lq(tt) {
      let {
        controller: et
      } = tt;
      const {
        t: Vt
      } = (0, cq.H)();
      return (0, Iq.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: et.display.mountPlayer,
        title: Vt("skyblockGame:mapYouAreHere"),
        children: (0, Iq.jsx)(Zq, {
          icon: "player"
        })
      })
    }
    const Fq = Vt(38767),
      kq = Object.fromEntries(Fq.keys().map((tt => [tt.replace(/^\.\/(.*)\.png$/, "$1"), Fq(tt)])));

    function Gq(tt, et) {
      var Vt;
      return null !== (Vt = kq[tt]) && void 0 !== Vt ? Vt : kq[et]
    }

    function zq(tt) {
      let {
        imageKey: et,
        fallbackImageKey: Vt,
        geometryKey: Ot,
        alt: qt,
        className: Dt
      } = tt;
      const [mt, dt] = (0, vt.useState)((() => function(tt, et) {
        return [{
          id: 0,
          imageKey: tt,
          geometryKey: et,
          phase: "shown"
        }]
      }(et, Ot))), jt = function(tt, et, Vt) {
        const Ot = tt[tt.length - 1];
        if (Ot.imageKey === et && Ot.geometryKey === Vt) return tt;
        const qt = {
          id: Ot.id + 1,
          imageKey: et,
          geometryKey: Vt,
          phase: "entering"
        };
        return Ot.geometryKey === Vt ? [{
          ...Ot,
          phase: "leaving"
        }, qt] : [qt]
      }(mt, et, Ot);
      return jt !== mt && dt(jt), (0, Iq.jsx)(Iq.Fragment, {
        children: jt.map((tt => (0, Iq.jsx)("img", {
          className: Cq()("SkyblockMapTerrainImage", Dt, {
            Entering: "entering" === tt.phase,
            Leaving: "leaving" === tt.phase
          }),
          src: Gq(tt.imageKey, Vt),
          alt: "leaving" === tt.phase ? "" : qt,
          onAnimationEnd: () => {
            dt((et => function(tt, et) {
              return tt.flatMap((tt => tt.id !== et ? [tt] : "leaving" === tt.phase ? [] : [{
                ...tt,
                phase: "shown"
              }]))
            }(et, tt.id)))
          }
        }, tt.id)))
      })
    }
    var oq = Vt(4665),
      rq = Vt(1556);

    function Uq(tt) {
      if ("Tab" !== tt.key) return;
      const et = Array.from(tt.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        Vt = et.indexOf(document.activeElement);
      var Ot;
      if (tt.shiftKey && Vt <= 0) tt.preventDefault(), null === (Ot = et.at(-1)) || void 0 === Ot || Ot.focus();
      else if (!tt.shiftKey && (-1 === Vt || Vt === et.length - 1)) {
        var qt;
        tt.preventDefault(), null === (qt = et[0]) || void 0 === qt || qt.focus()
      }
    }

    function Aq() {
      const tt = (0, vt.useRef)(null);
      return (0, vt.useCallback)((et => {
        var Vt;
        et ? (tt.current = document.activeElement, et.focus()) : null === (Vt = tt.current) || void 0 === Vt || Vt.focus()
      }), [])
    }

    function iq(tt) {
      let {
        percent: et,
        label: Vt,
        levelUpToken: Ot,
        colour: qt
      } = tt;
      return (0, Iq.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": Vt,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": et,
        "aria-valuetext": Vt,
        children: [(0, Iq.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${et/100})`
          }
        }), null !== Ot && void 0 !== Ot && (0, Iq.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": qt
          }
        }, Ot)]
      })
    }

    function Yq(tt) {
      let {
        mount: et
      } = tt;
      return (0, Iq.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: et,
        hidden: !0,
        children: (0, Iq.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, Iq.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, Iq.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function Bq(tt, et, Vt, Ot) {
      (0, vt.useLayoutEffect)((() => {
        const qt = tt.current;
        if (!Vt || null === et || void 0 === et || !et.local || !qt) return;
        const Dt = Array.from(qt.querySelectorAll(".SkyblockMapNode")),
          mt = [...et.points, ...et.portals],
          dt = () => {
            const tt = qt.clientWidth,
              Vt = qt.clientHeight,
              dt = Dt.map(((qt, Dt) => {
                const dt = mt[Dt];
                return {
                  id: dt.id,
                  portal: Dt >= et.points.length,
                  x: dt.position[0] * tt / 100,
                  y: dt.position[1] * Vt / 100,
                  width: qt.offsetWidth / Ot,
                  height: qt.offsetHeight / Ot
                }
              })),
              jt = new Map(mt.map(((tt, et) => [tt.id, Dt[et]])));
            for (const et of function(tt, et, Vt) {
                const Ot = [],
                  qt = [...tt].sort(((tt, et) => Number(et.portal) - Number(tt.portal) || tt.id.localeCompare(et.id)));
                for (const Dt of qt) {
                  const tt = tt => Math.max(Dt.width / 2, Math.min(et - Dt.width / 2, tt)),
                    qt = tt => Math.max(Dt.height / 2, Math.min(Vt - Dt.height / 2, tt)),
                    mt = [tt(Dt.x)],
                    dt = [qt(Dt.y)];
                  for (const et of Ot) mt.push(tt(et.x - (et.width + Dt.width) / 2 - 4), tt(et.x + (et.width + Dt.width) / 2 + 4)), dt.push(qt(et.y - (et.height + Dt.height) / 2 - 4), qt(et.y + (et.height + Dt.height) / 2 + 4));
                  let jt = {
                      ...Dt,
                      x: mt[0],
                      y: dt[0]
                    },
                    Ht = 1 / 0,
                    Xt = 1 / 0;
                  for (const et of new Set(mt))
                    for (const tt of new Set(dt)) {
                      let Vt = 0;
                      for (const mt of Ot) Vt += Math.max(0, (Dt.width + mt.width) / 2 + 4 - Math.abs(et - mt.x)) * Math.max(0, (Dt.height + mt.height) / 2 + 4 - Math.abs(tt - mt.y));
                      const qt = (et - Dt.x) ** 2 + (tt - Dt.y) ** 2;
                      (Vt < Ht || Vt === Ht && qt < Xt) && (jt = {
                        ...Dt,
                        x: et,
                        y: tt
                      }, Ht = Vt, Xt = qt)
                    }
                  Ot.push(jt)
                }
                return Ot
              }(dt, tt, Vt)) {
              const tt = jt.get(et.id);
              tt.style.left = `${et.x}px`, tt.style.top = `${et.y}px`
            }
          };
        dt();
        const jt = new ResizeObserver(dt);
        jt.observe(qt);
        for (const tt of Dt) jt.observe(tt);
        return () => {
          jt.disconnect()
        }
      }), [tt, et, Vt, Ot])
    }
    const pq = {
        zoom: 1,
        x: 0,
        y: 0
      },
      xq = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function Tq(tt, et, Vt) {
      return Math.min(Vt, Math.max(et, tt))
    }

    function gq(tt, et, Vt) {
      const Ot = Math.min(1, Vt * et / tt),
        qt = Math.min(1, tt / (Vt * et));
      return {
        x0: (1 - Ot) / 2,
        y0: (1 - qt) / 2,
        x1: (1 + Ot) / 2,
        y1: (1 + qt) / 2
      }
    }

    function sq(tt, et, Vt, Ot) {
      const qt = et * (Ot - Vt);
      if (qt <= 1) return .5 - et * (Vt + Ot) / 2;
      const Dt = .45 * Math.min(1, qt - 1);
      return Tq(tt, 1 - et * Ot - Dt, Dt - et * Vt)
    }

    function nq(tt, et) {
      const Vt = Tq(tt.zoom, 1, 12);
      return {
        zoom: Vt,
        x: sq(tt.x, Vt, et.x0, et.x1),
        y: sq(tt.y, Vt, et.y0, et.y1)
      }
    }

    function tD(tt, et, Vt, Ot) {
      let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : xq;
      const Dt = Tq(tt.zoom * et, 1, 12),
        mt = Dt / tt.zoom;
      return nq({
        zoom: Dt,
        x: Vt - (Vt - tt.x) * mt,
        y: Ot - (Ot - tt.y) * mt
      }, qt)
    }

    function eD(tt, et, Vt, Ot) {
      const [qt, Dt] = (0, vt.useState)(pq);
      (0, vt.useEffect)((() => {
        Dt(pq)
      }), [Vt]), (0, vt.useEffect)((() => {
        const Vt = tt.current;
        if (!et || !Vt) return;
        const qt = () => gq(Vt.clientWidth, Vt.clientHeight, Ot),
          mt = tt => {
            const et = Vt.getBoundingClientRect();
            return {
              x: (tt.clientX - et.left) / et.width,
              y: (tt.clientY - et.top) / et.height
            }
          },
          dt = new Map;
        let jt = {
            x: 0,
            y: 0
          },
          Ht = !1,
          Xt = 0;
        const Qt = tt => {
            tt.preventDefault();
            const et = tt.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * tt.deltaY : tt.deltaY,
              Vt = mt(tt);
            Dt((tt => tD(tt, Math.exp(.0015 * -et), Vt.x, Vt.y, qt())))
          },
          lt = tt => {
            "mouse" === tt.pointerType && 0 !== tt.button || (dt.set(tt.pointerId, mt(tt)), 1 === dt.size && (jt = {
              x: tt.clientX,
              y: tt.clientY
            }, Ht = !1), Xt = 0)
          },
          Et = tt => {
            const et = dt.get(tt.pointerId);
            if (!et) return;
            const Ot = mt(tt);
            if (dt.set(tt.pointerId, Ot), 2 === dt.size) {
              const [tt, et] = [...dt.values()], Vt = Math.hypot(tt.x - et.x, tt.y - et.y);
              if (Xt > 0) {
                const Ot = Vt / Xt;
                Dt((Vt => tD(Vt, Ot, (tt.x + et.x) / 2, (tt.y + et.y) / 2, qt())))
              }
              return Xt = Vt, void(Ht = !0)
            }!Ht && Math.hypot(tt.clientX - jt.x, tt.clientY - jt.y) < 4 || (Ht || (Ht = !0, Vt.setPointerCapture(tt.pointerId)), Dt((tt => function(tt, et, Vt) {
              let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : xq;
              return nq({
                zoom: tt.zoom,
                x: tt.x + et,
                y: tt.y + Vt
              }, Ot)
            }(tt, Ot.x - et.x, Ot.y - et.y, qt()))))
          },
          ft = tt => {
            dt.delete(tt.pointerId), Xt = 0
          },
          wt = tt => {
            Ht && (tt.stopPropagation(), tt.preventDefault(), Ht = !1)
          },
          yt = new ResizeObserver((() => {
            Dt((tt => nq(tt, qt())))
          }));
        return yt.observe(Vt), Vt.addEventListener("wheel", Qt, {
          passive: !1
        }), Vt.addEventListener("pointerdown", lt), Vt.addEventListener("pointermove", Et), Vt.addEventListener("pointerup", ft), Vt.addEventListener("pointercancel", ft), Vt.addEventListener("click", wt, !0), () => {
          yt.disconnect(), Vt.removeEventListener("wheel", Qt), Vt.removeEventListener("pointerdown", lt), Vt.removeEventListener("pointermove", Et), Vt.removeEventListener("pointerup", ft), Vt.removeEventListener("pointercancel", ft), Vt.removeEventListener("click", wt, !0)
        }
      }), [tt, et, Vt, Ot]);
      return {
        view: qt,
        zoomBy: et => {
          const Vt = tt.current;
          Vt && Dt((tt => tD(tt, et, .5, .5, gq(Vt.clientWidth, Vt.clientHeight, Ot))))
        }
      }
    }

    function VD(tt) {
      var et, Vt, Ot, qt;
      let {
        controller: Dt,
        navigation: mt
      } = tt;
      const dt = (0, Rq.h)(lt, Dt.getSnapshot()),
        {
          t: jt
        } = (0, cq.H)(),
        Ht = Aq(),
        Xt = dt.presentation,
        Qt = (0, vt.useRef)(null),
        Et = (0, vt.useRef)(null),
        ft = Boolean(dt.open && (null === Xt || void 0 === Xt ? void 0 : Xt.local) && Xt.background),
        wt = eD(Qt, ft, `${dt.open}|${dt.tab}|${null===Xt||void 0===Xt||null===(et=Xt.background)||void 0===et?void 0:et.geometryKey}`, null !== (Vt = null === Xt || void 0 === Xt || null === (Ot = Xt.background) || void 0 === Ot ? void 0 : Ot.ratio) && void 0 !== Vt ? Vt : 2);
      if (Bq(Et, Xt, dt.open, wt.view.zoom), !Xt || !dt.open) return null;
      const yt = Xt.local ? Xt.background : null,
        Nt = {
          "--map-ratio": String(null !== (qt = null === yt || void 0 === yt ? void 0 : yt.ratio) && void 0 !== qt ? qt : 2),
          backgroundColor: null === yt || void 0 === yt ? void 0 : yt.colour
        },
        Mt = {
          "--map-zoom": String(wt.view.zoom),
          transform: `translate(${100*wt.view.x}%, ${100*wt.view.y}%) scale(${wt.view.zoom})`
        };
      return (0, Iq.jsx)(oq.c, {
        show: dt.open,
        close: Dt.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Iq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: Ht,
          onKeyDown: Uq,
          children: [(0, Iq.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Iq.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, Iq.jsx)("h2", {
                id: "skyblockMapTitle",
                children: jt("skyblockGame:map")
              }), Xt.minimap && (0, Iq.jsx)("p", {
                children: Xt.minimap.caption
              })]
            }), (0, Iq.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((tt => (0, Iq.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": tt === dt.tab ? "true" : void 0,
                className: Cq()({
                  Selected: tt === dt.tab
                }),
                "aria-pressed": tt === dt.tab,
                onClick: () => {
                  Dt.selectTab(tt)
                },
                children: jt("local" === tt ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, tt)))
            }), (0, Iq.jsx)(rq.j, {
              padIgnore: !0,
              onClick: Dt.dismiss
            })]
          }), (0, Iq.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, Iq.jsxs)("div", {
              ref: Qt,
              className: Cq()("SkyblockMapCanvas", {
                Local: Xt.local,
                Overview: !Xt.local,
                Zoomed: wt.view.zoom > 1
              }),
              style: Nt,
              children: [(0, Iq.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: ft ? Mt : void 0,
                children: (0, Iq.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: Et,
                  children: [yt && (0, Iq.jsx)(zq, {
                    className: "SkyblockMapTerrain",
                    imageKey: yt.imageKey,
                    fallbackImageKey: yt.fallbackImageKey,
                    geometryKey: yt.geometryKey,
                    alt: yt.label
                  }), Xt.local && (0, Iq.jsx)(Yq, {
                    mount: mt.display.mountMapSearchArea
                  }), !Xt.local && (0, Iq.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: Xt.connections.map((tt => (0, Iq.jsx)("line", {
                      className: Cq()({
                        Explored: tt.explored
                      }),
                      x1: tt.start[0],
                      y1: tt.start[1],
                      x2: tt.end[0],
                      y2: tt.end[1]
                    }, tt.id)))
                  }), Xt.points.map((tt => {
                    const et = !Xt.local && tt.thumbnail ? kq[tt.thumbnail] : void 0;
                    return (0, Iq.jsxs)("div", {
                      className: Cq()("SkyblockMapNode", {
                        Current: tt.current
                      }),
                      style: {
                        left: `${tt.position[0]}%`,
                        top: `${tt.position[1]}%`
                      },
                      children: [(0, Iq.jsxs)(rq.f, {
                        className: Cq()("SkyblockMapPin", {
                          Unknown: !tt.visited,
                          Current: tt.current
                        }),
                        disabled: dt.pending,
                        onClick: () => {
                          Dt.travel(tt.travelKind, tt.travelId)
                        },
                        children: [et && (0, Iq.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: et,
                          alt: ""
                        }), !et && (0, Iq.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, Iq.jsx)(Zq, {
                            icon: tt.icon
                          })
                        }), (0, Iq.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: tt.name
                        })]
                      }), tt.current && (0, Iq.jsx)("span", {
                        className: Cq()("SkyblockMapHereBadge", {
                          Above: tt.position[1] > 50
                        }),
                        children: jt("skyblockGame:mapYouAreHere")
                      })]
                    }, tt.id)
                  })), Xt.portals.map((tt => (0, Iq.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${tt.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${tt.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, Iq.jsxs)(rq.f, {
                      className: "SkyblockMapPin",
                      disabled: dt.pending,
                      onClick: () => {
                        Dt.travel(tt.travelKind, tt.travelId)
                      },
                      children: [(0, Iq.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: tt.colour
                        },
                        "aria-hidden": "true",
                        children: (0, Iq.jsx)(Zq, {
                          icon: tt.icon
                        })
                      }), (0, Iq.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: tt.name
                      })]
                    })
                  }, tt.id))), Xt.local && (0, Iq.jsx)(Lq, {
                    controller: mt
                  })]
                })
              }), ft && (0, Iq.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, Iq.jsx)("button", {
                  type: "button",
                  "aria-label": jt("skyblockGame:mapZoomIn"),
                  disabled: wt.view.zoom >= 12,
                  onClick: () => {
                    wt.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, Iq.jsx)("button", {
                  type: "button",
                  "aria-label": jt("skyblockGame:mapZoomOut"),
                  disabled: wt.view.zoom <= 1,
                  onClick: () => {
                    wt.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, Iq.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: dt.feedback
              })]
            })
          }), (0, Iq.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [Xt.progress && (0, Iq.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, Iq.jsx)("span", {
                children: Xt.progress
              }), (0, Iq.jsx)(iq, {
                percent: Xt.percent,
                label: Xt.progress
              })]
            }), Xt.noLandmarks && (0, Iq.jsx)("span", {
              children: jt("skyblockGame:mapNoLandmarks")
            }), Xt.canTravel && (0, Iq.jsx)("span", {
              className: "SkyblockMapHint",
              children: jt("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function OD(tt) {
      let {
        view: et,
        controller: Vt,
        navigation: Ot
      } = tt;
      const {
        t: qt
      } = (0, cq.H)(), {
        isTouchScreen: Dt
      } = (0, uq.k)(["isTouchScreen"]);
      return (0, Iq.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": qt("skyblockGame:mapLocal"),
        children: [Dt && (0, Iq.jsx)(rq.f, {
          className: "SkyblockMinimapOpen",
          onClick: Vt.showLocal,
          children: qt("skyblockGame:map")
        }), (0, Iq.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: et.colour
          },
          children: [(0, Iq.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: Ot.display.mountTerrain,
            style: {
              width: et.width,
              height: et.height
            },
            children: [(0, Iq.jsx)(zq, {
              imageKey: et.imageKey,
              fallbackImageKey: et.fallbackImageKey,
              geometryKey: et.geometryKey,
              alt: et.label
            }), (0, Iq.jsx)(Yq, {
              mount: Ot.display.mountMinimapSearchArea
            }), et.markers.map((tt => (0, Iq.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${tt.position[0]}%`,
                top: `${tt.position[1]}%`,
                color: tt.colour
              },
              title: tt.name,
              children: (0, Iq.jsx)(Zq, {
                icon: tt.icon
              })
            }, tt.id)))]
          }), (0, Iq.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: qt("skyblockGame:mapYouAreHere"),
            children: (0, Iq.jsx)(Zq, {
              icon: "player"
            })
          })]
        }), (0, Iq.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: et.caption
        })]
      })
    }

    function qD(tt) {
      let {
        controller: et
      } = tt;
      return (0, Iq.jsxs)("div", {
        className: "SkyblockCompass",
        ref: et.display.mountCompass,
        children: [(0, Iq.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, Iq.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, Iq.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function DD(tt) {
      let {
        controller: et,
        surface: Vt
      } = tt;
      const {
        t: Ot
      } = (0, cq.H)(), qt = (0, Rq.h)(dV, et.getSnapshot()), Dt = Aq();
      return qt.enabled ? (0, Iq.jsxs)(Iq.Fragment, {
        children: ["hud" === Vt && (0, Iq.jsx)(Kq.g, {
          placement: "statBars",
          children: qt.hud && (0, Iq.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": qt.hud.colour
            },
            children: [(0, Iq.jsx)(iq, {
              percent: qt.hud.skill.percent,
              label: qt.hud.skill.xp,
              levelUpToken: qt.hud.levelUpToken,
              colour: qt.hud.colour
            }), (0, Iq.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, Iq.jsxs)("span", {
                children: [qt.hud.skill.label, " \xb7 ", qt.hud.skill.level]
              }), (0, Iq.jsx)("span", {
                children: qt.hud.gain
              })]
            })]
          })
        }), "hud" === Vt && (0, Iq.jsx)(Kq.g, {
          children: qt.hud && (0, Iq.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, Iq.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, Iq.jsx)("strong", {
                children: qt.hud.skill.label
              }), (0, Iq.jsx)("span", {
                children: qt.hud.gain
              })]
            }), (0, Iq.jsx)(iq, {
              percent: qt.hud.skill.percent,
              label: qt.hud.skill.xp,
              levelUpToken: qt.hud.levelUpToken,
              colour: qt.hud.colour
            }), (0, Iq.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, Iq.jsx)("span", {
                children: qt.hud.skill.level
              }), (0, Iq.jsx)("span", {
                children: qt.hud.skill.xp
              })]
            })]
          })
        }), "menu" === Vt && (0, Iq.jsx)(oq.c, {
          show: qt.open,
          close: et.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Iq.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: Dt,
            onKeyDown: Uq,
            children: [(0, Iq.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Iq.jsxs)("div", {
                children: [(0, Iq.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: Ot("skyblockGame:skills")
                }), (0, Iq.jsx)("p", {
                  children: Ot("skyblockGame:skillsIntro")
                })]
              }), (0, Iq.jsx)(rq.j, {
                padIgnore: !0,
                onClick: et.dismiss
              })]
            }), (0, Iq.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, Iq.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: qt.skills.map((tt => (0, Iq.jsxs)(rq.f, {
                  className: Cq()("SkyblockSkillCard", {
                    Selected: tt.selected
                  }),
                  ariaPressed: tt.selected,
                  onClick: () => {
                    et.select(tt.id)
                  },
                  children: [(0, Iq.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, Iq.jsx)(vq.e, {
                      itemName: tt.icon,
                      amount: 0
                    })
                  }), (0, Iq.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, Iq.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, Iq.jsx)("strong", {
                        children: tt.label
                      }), (0, Iq.jsx)("span", {
                        children: tt.level
                      })]
                    }), (0, Iq.jsx)(iq, {
                      percent: tt.percent,
                      label: `${tt.label}: ${tt.xp}`
                    }), (0, Iq.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: tt.xp
                    })]
                  })]
                }, tt.id)))
              }), qt.detail && (0, Iq.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, Iq.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, Iq.jsx)(vq.e, {
                    itemName: qt.detail.icon,
                    amount: 0
                  })
                }), (0, Iq.jsx)("h3", {
                  children: qt.detail.label
                }), (0, Iq.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: qt.detail.level
                }), (0, Iq.jsx)("p", {
                  children: qt.detail.description
                }), (0, Iq.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, Iq.jsx)("strong", {
                    children: Ot("skyblockGame:currentBenefit")
                  }), (0, Iq.jsx)("span", {
                    children: qt.detail.benefit
                  })]
                }), (0, Iq.jsx)(iq, {
                  percent: qt.detail.percent,
                  label: qt.detail.xp
                }), (0, Iq.jsx)("p", {
                  children: qt.detail.xp
                }), (0, Iq.jsx)("h4", {
                  children: Ot("skyblockGame:earnXp")
                }), (0, Iq.jsx)("ul", {
                  children: qt.detail.sources.map((tt => (0, Iq.jsx)("li", {
                    children: tt
                  }, tt)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var mD = Vt(1464),
      dD = Vt(5003),
      jD = Vt(377);

    function HD(tt) {
      let {
        item: et
      } = tt;
      return (0, Iq.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, Iq.jsx)(vq.e, {
          itemName: et,
          amount: 0
        })
      })
    }

    function XD(tt) {
      let {
        name: et,
        percent: Vt,
        progress: Ot
      } = tt;
      return (0, Iq.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, Iq.jsx)(iq, {
          percent: Vt,
          label: `${(0,jD.hb)(et)}: ${Ot}`
        }), (0, Iq.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: Ot
        })]
      })
    }

    function QD(tt) {
      let {
        subquests: et,
        showDescriptions: Vt = !1
      } = tt;
      return (0, Iq.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: et.map((tt => {
          const et = Vt && "completed" === tt.status,
            Ot = (0, Iq.jsxs)("li", {
              className: Cq()("SkyblockQuestStep", tt.status, {
                JustFinished: tt.justFinished,
                JustUnlocked: tt.justUnlocked
              }),
              tabIndex: et ? 0 : void 0,
              children: [null !== tt.iconItem && (0, Iq.jsx)(HD, {
                item: tt.iconItem
              }), null === tt.iconItem && (0, Iq.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === tt.status ? "\u2713" : "skipped" === tt.status ? "\u2212" : "\u25cb"
              }), (0, Iq.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, Iq.jsx)("strong", {
                  children: (0, Iq.jsx)(dD.d, {
                    text: tt.name
                  })
                }), Vt && !et && (0, Iq.jsx)("span", {
                  children: (0, Iq.jsx)(dD.d, {
                    text: tt.description
                  })
                }), null !== tt.barPercent && (0, Iq.jsx)(XD, {
                  name: tt.name,
                  percent: tt.barPercent,
                  progress: tt.progress
                }), null === tt.barPercent && !et && (0, Iq.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: tt.statusLabel
                })]
              })]
            }, tt.id);
          return et ? (0, Iq.jsx)(mD.g, {
            delayShow: 200,
            tooltipInner: (0, Iq.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, Iq.jsx)("span", {
                children: (0, Iq.jsx)(dD.d, {
                  text: tt.description
                })
              }), (0, Iq.jsx)("strong", {
                children: tt.statusLabel
              })]
            }),
            children: Ot
          }, tt.id) : Ot
        }))
      })
    }

    function lD(tt) {
      let {
        quest: et,
        select: Vt
      } = tt;
      const {
        t: Ot
      } = (0, cq.H)(), qt = et.focusStep;
      return (0, Iq.jsxs)(rq.f, {
        className: Cq()("SkyblockQuestCard", {
          Selected: et.selected,
          Tracked: et.tracked
        }),
        onClick: () => {
          Vt(et.id)
        },
        children: [(0, Iq.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, Iq.jsx)("strong", {
            children: (0, Iq.jsx)(dD.d, {
              text: et.name
            })
          }), et.tracked && (0, Iq.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: Ot("skyblockGame:currentQuest")
          })]
        }), qt && (0, Iq.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== qt.iconItem && (0, Iq.jsx)(HD, {
            item: qt.iconItem
          }), (0, Iq.jsx)(XD, {
            name: qt.name,
            percent: qt.barPercent,
            progress: qt.progress
          })]
        }), (0, Iq.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: et.progress
        })]
      })
    }

    function ED(tt) {
      let {
        controller: et,
        surface: Vt
      } = tt;
      const Ot = (0, Rq.h)(QV, et.getSnapshot()),
        {
          t: qt
        } = (0, cq.H)(),
        Dt = Aq();
      return Ot.enabled ? (0, Iq.jsxs)(Iq.Fragment, {
        children: ["hud" === Vt && (0, Iq.jsx)(Iq.Fragment, {
          children: Ot.tracked && (0, Iq.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: XV,
            children: (0, Iq.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [Ot.trackedStepPulse > 0 && (0, Iq.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, Ot.trackedStepPulse), (0, Iq.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: qt("skyblockGame:currentQuest")
              }), (0, Iq.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, Iq.jsx)("strong", {
                  children: (0, Iq.jsx)(dD.d, {
                    text: Ot.tracked.name
                  })
                }), null !== Ot.tracked.clock && (0, Iq.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: Ot.tracked.clock
                })]
              }), (0, Iq.jsx)(QD, {
                subquests: Ot.tracked.subquests
              })]
            })
          })
        }), "menu" === Vt && (0, Iq.jsx)(oq.c, {
          show: Ot.open,
          close: et.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Iq.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: Dt,
            onKeyDown: Uq,
            children: [(0, Iq.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Iq.jsx)("div", {
                children: (0, Iq.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: qt("skyblockGame:quests")
                })
              }), (0, Iq.jsx)(rq.j, {
                padIgnore: !0,
                onClick: et.dismiss
              })]
            }), (0, Iq.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, Iq.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, Iq.jsx)("h3", {
                  children: qt("skyblockGame:current")
                }), 0 === Ot.active.length && (0, Iq.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: qt("skyblockGame:noActiveQuests")
                }), Ot.active.map((tt => (0, Iq.jsx)(lD, {
                  quest: tt,
                  select: et.select
                }, tt.id))), (0, Iq.jsx)("h3", {
                  children: (0, Iq.jsxs)("button", {
                    type: "button",
                    className: Cq()("SkyblockQuestSectionToggle", {
                      Expanded: Ot.completedExpanded
                    }),
                    "aria-expanded": Ot.completedExpanded,
                    onClick: et.toggleCompleted,
                    children: [(0, Iq.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), qt("skyblockGame:completed"), (0, Iq.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: Ot.completed.length
                    })]
                  })
                }), Ot.completedExpanded && 0 === Ot.completed.length && (0, Iq.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: qt("skyblockGame:noCompletedQuests")
                }), Ot.completedExpanded && Ot.completed.map((tt => (0, Iq.jsx)(lD, {
                  quest: tt,
                  select: et.select
                }, tt.id)))]
              }), Ot.detail && (0, Iq.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [Ot.detail.completed && (0, Iq.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: qt("skyblockGame:completedQuest")
                }), (0, Iq.jsx)("h3", {
                  children: (0, Iq.jsx)(dD.d, {
                    text: Ot.detail.name
                  })
                }), (0, Iq.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, Iq.jsx)(dD.d, {
                    text: Ot.detail.description
                  })
                }), (0, Iq.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [Ot.detail.progress, null !== Ot.detail.clock && (0, Iq.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: Ot.detail.clock
                  })]
                }), (0, Iq.jsx)(QD, {
                  subquests: Ot.detail.subquests,
                  showDescriptions: !0
                }), Ot.detail.tracked && (0, Iq.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: Ot.detail.trackLabel
                }), !Ot.detail.completed && !Ot.detail.tracked && (0, Iq.jsx)(rq.m, {
                  onClick: et.trackSelected,
                  disabled: !Ot.detail.canTrack,
                  children: Ot.detail.trackLabel
                }), Ot.detail.canViewDialogue && (0, Iq.jsx)(rq.f, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: et.viewDialogue,
                  children: qt("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var fD = Vt(1152),
      wD = Vt(2719);

    function yD(tt, et, Vt, Ot, qt) {
      const Dt = tt => "linear" === qt ? tt : {
          mq: qt,
          point: tt
        },
        mt = {};
      for (const [dt, jt] of Ot)
        for (const [et, Vt] of Object.entries(tt(dt, jt, Dt))) mt[et] ??= {
          timeline: []
        }, mt[et].timeline.push(Vt);
      return {
        eq: et,
        loop: Vt,
        Oq: mt
      }
    }
    const ND = .547,
      aD = .022,
      MD = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      bD = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function JD(tt, et, Vt) {
      const {
        drop: Ot = 0,
        shift: qt = 0,
        torso: Dt = 0,
        nod: mt = 0,
        tilt: dt = 0,
        legs: jt = [0, 0],
        arms: Ht = 0,
        spread: Xt = 0
      } = et, Qt = ND * Math.cos(Dt) - aD * Math.sin(Dt), lt = ND * Math.sin(Dt) + aD * Math.cos(Dt), Et = Vt([0, -Ot, qt]);
      return {
        LowerBody: {
          timeFraction: tt,
          position: Et,
          rotation: Vt([0, 0, 0])
        },
        UpperBody: {
          timeFraction: tt,
          position: Et,
          rotation: Vt([Dt, 0, dt])
        },
        HeadMesh: {
          timeFraction: tt,
          position: Vt([0, Qt - ND - Ot, lt - aD + qt]),
          rotation: Vt([Dt + mt, 0, dt])
        },
        LegLeftMesh: {
          timeFraction: tt,
          rotation: Vt([jt[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: tt,
          rotation: Vt([jt[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: tt,
          rotation: Vt([Ht, 0, Xt])
        },
        ArmRightMesh: {
          timeFraction: tt,
          rotation: Vt([Ht, 0, -Xt])
        }
      }
    }

    function CD(tt, et, Vt) {
      return yD(JD, tt, et, Vt, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function uD(tt) {
      return "number" === typeof tt ? [tt, tt] : tt
    }

    function KD(tt, et, Vt) {
      const {
        rise: Ot = 0,
        shift: qt = 0,
        torso: Dt = 0,
        twist: mt = 0,
        tilt: dt = 0,
        nod: jt = 0,
        cock: Ht = 0,
        arms: Xt = 0,
        spread: Qt = 0
      } = et, [lt, Et] = uD(Xt), [ft, wt] = uD(Qt);
      return {
        TorsoNode: {
          timeFraction: tt,
          position: Vt([0, Ot, qt]),
          rotation: Vt([Dt, mt, dt])
        },
        HeadMesh: {
          timeFraction: tt,
          rotation: Vt([jt, 0, Ht])
        },
        ArmLeftMesh: {
          timeFraction: tt,
          rotation: Vt([lt, 0, ft])
        },
        ArmRightMesh: {
          timeFraction: tt,
          rotation: Vt([Et, 0, -wt])
        }
      }
    }
    const hD = [1.0625, -1, 0];

    function vD(tt) {
      return "number" === typeof tt ? [tt, tt] : tt
    }

    function WD(tt, et, Vt) {
      const {
        drop: Ot = 0,
        shift: qt = 0,
        torso: Dt = 0,
        tilt: mt = 0,
        nod: dt = 0,
        cock: jt = 0,
        legs: Ht = [0, 0],
        arms: Xt = 0,
        spread: Qt = 0
      } = et, [lt, Et] = vD(Xt), [ft, wt] = vD(Qt), yt = -Dt, Nt = -mt, [Mt, bt, Jt] = function(tt, et) {
        const [Vt, Ot, qt] = [-hD[0], hD[1], -hD[2]], Dt = Vt * Math.cos(et) - Ot * Math.sin(et), mt = Vt * Math.sin(et) + Ot * Math.cos(et);
        return [Dt - Vt, -(mt * Math.cos(tt) - qt * Math.sin(tt) - Ot), mt * Math.sin(tt) + qt * Math.cos(tt) - qt]
      }(yt, Nt), Ct = Vt([0, -Ot, qt]);
      return {
        TorsoNode: {
          timeFraction: tt,
          position: Vt([Mt, bt - Ot, Jt + qt]),
          rotation: Vt([yt, 0, Nt])
        },
        HeadMesh: {
          timeFraction: tt,
          rotation: Vt([-dt, 0, -jt])
        },
        ArmLeftMesh: {
          timeFraction: tt,
          rotation: Vt([-lt, 0, -ft])
        },
        ArmRightMesh: {
          timeFraction: tt,
          rotation: Vt([-Et, 0, wt])
        },
        LegLeftMesh: {
          timeFraction: tt,
          position: Ct,
          rotation: Vt([-Ht[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: tt,
          position: Ct,
          rotation: Vt([-Ht[1], 0, 0])
        }
      }
    }
    var SD = Vt(37403),
      cD = Vt(38690),
      RD = Vt(38855);

    function ID(tt, et, Vt) {
      var Ot, qt;
      const Dt = function() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return tt + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - tt) * Vt
        },
        [mt, dt] = null !== (Ot = tt.legs) && void 0 !== Ot ? Ot : [0, 0],
        [jt, Ht] = null !== (qt = et.legs) && void 0 !== qt ? qt : [0, 0];
      return {
        drop: Dt(tt.drop, et.drop),
        shift: Dt(tt.shift, et.shift),
        torso: Dt(tt.torso, et.torso),
        nod: Dt(tt.nod, et.nod),
        tilt: Dt(tt.tilt, et.tilt),
        legs: [Dt(mt, jt), Dt(dt, Ht)],
        arms: Dt(tt.arms, et.arms),
        spread: Dt(tt.spread, et.spread)
      }
    }
    const PD = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      ZD = CD(4400, !0, [
        [0, PD],
        [.16, {
          ...PD,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, PD],
        [.44, {
          ...PD,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, ID(PD, MD, .7)],
        [.66, ID(PD, MD, .78)],
        [.74, ID(PD, bD, .65)],
        [.86, {
          ...PD,
          drop: .14
        }],
        [1, PD]
      ], "catmull-rom-spline"),
      LD = {
        ...PD,
        drop: .14,
        torso: .3,
        spread: .4
      },
      FD = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      kD = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      GD = {
        caveGolem: ZD,
        magmaGolem: CD(3600, !0, [
          [0, LD],
          [.12, {
            ...LD,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...LD,
            tilt: -.08
          }],
          [.4, {
            ...LD,
            tilt: .06,
            drop: .11
          }],
          [.52, ID(LD, MD, .9)],
          [.62, ID(LD, bD, .8)],
          [.7, ID(LD, bD, .45)],
          [.78, ID(LD, bD, .85)],
          [.9, {
            ...LD,
            drop: .17
          }],
          [1, LD]
        ], "catmull-rom-spline"),
        frostWraith: function(tt, et, Vt) {
          return yD(KD, tt, et, Vt, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, FD],
          [.14, {
            ...FD,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...FD,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...FD,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...FD,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...FD,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...FD,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...FD,
            rise: .16,
            tilt: -.04
          }],
          [1, FD]
        ], "catmull-rom-spline"),
        tikiTerror: function(tt, et, Vt) {
          return yD(WD, tt, et, Vt, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, kD],
          [.16, {
            ...kD,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, kD],
          [.44, {
            ...kD,
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
            ...kD,
            drop: .1
          }],
          [1, kD]
        ], "catmull-rom-spline")
      },
      zD = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      oD = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      rD = Object.fromEntries(Object.entries(GD).map((tt => {
        let [et, Vt] = tt;
        return [et, (0, RD.e)((0, SD.e)(Vt), et)]
      })));

    function UD(tt) {
      const et = function(tt) {
        var et;
        const Vt = (0, cD.c)(tt).poseRig;
        return null !== (et = oD[tt]) && void 0 !== et ? et : void 0 === Vt ? null : zD[Vt]
      }(tt);
      return null === et ? null : rD[et]
    }

    function AD(tt) {
      return {
        "--difficulty-colour": tt
      }
    }
    const iD = (0, vt.lazy)((() => (0, wD.e)(Vt.e(203).then((() => Vt(41764))), (tt => tt.MobPreview))));

    function YD(tt) {
      var et, Vt, Ot;
      let {
        picker: qt,
        controller: Dt
      } = tt;
      const {
        t: mt
      } = (0, cq.H)(), dt = Aq(), {
        page: jt
      } = qt;
      return (0, Iq.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: dt,
        onKeyDown: tt => {
          "ArrowLeft" === tt.key ? (tt.preventDefault(), tt.stopPropagation(), Dt.previous()) : "ArrowRight" === tt.key ? (tt.preventDefault(), tt.stopPropagation(), Dt.next()) : Uq(tt)
        },
        style: AD(jt.colour),
        children: [(0, Iq.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, Iq.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: qt.dungeonName
          }), (0, Iq.jsx)(rq.j, {
            padIgnore: !0,
            onClick: Dt.dismiss
          })]
        }), (0, Iq.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, Iq.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, Iq.jsx)(rq.f, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !qt.canPrevious,
              onClick: Dt.previous,
              children: (0, Iq.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Iq.jsx)(fD.b, {
                  name: "angle-up"
                })
              })
            }), (0, Iq.jsxs)("div", {
              className: Cq()("SkyblockBossPickerBoss", {
                Locked: !jt.unlocked
              }),
              children: [null !== jt.bossMobType && (0, Iq.jsx)(vt.Suspense, {
                fallback: (0, Iq.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, Iq.jsx)(iD, {
                  className: "SkyblockBossPickerModel",
                  mobType: jt.bossMobType,
                  variation: jt.bossMobVariation,
                  animation: null !== (et = UD(jt.bossMobType)) && void 0 !== et ? et : void 0
                })
              }), null === jt.bossMobType && (0, Iq.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, Iq.jsx)(rq.f, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !qt.canNext,
              onClick: Dt.next,
              children: (0, Iq.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Iq.jsx)(fD.b, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, Iq.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, Iq.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [jt.beaten && (0, Iq.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), jt.label]
            }), (0, Iq.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (Vt = jt.bossName) && void 0 !== Vt ? Vt : "???"
            }), (0, Iq.jsxs)("span", {
              className: Cq()("SkyblockBossPickerRecord", {
                Locked: null !== jt.lockedHint
              }),
              children: [null !== jt.lockedHintHighlight && (0, Iq.jsxs)(Iq.Fragment, {
                children: [jt.lockedHintHighlight.before, (0, Iq.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: AD(jt.lockedHintHighlight.colour),
                  children: [null !== jt.lockedHintHighlight.icon && (0, Iq.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, Iq.jsx)(vq.e, {
                      itemName: jt.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), jt.lockedHintHighlight.name]
                }), jt.lockedHintHighlight.after]
              }), null === jt.lockedHintHighlight && (null !== (Ot = jt.lockedHint) && void 0 !== Ot ? Ot : jt.summary)]
            })]
          }), (0, Iq.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: qt.pages.map((tt => (0, Iq.jsx)("span", {
              className: Cq()("SkyblockBossPickerDot", {
                Current: tt.current,
                Locked: !tt.unlocked
              }),
              style: AD(tt.colour)
            }, tt.difficulty)))
          }), (0, Iq.jsx)(rq.s, {
            className: "SkyblockBossPickerFight",
            disabled: !jt.unlocked,
            onClick: Dt.enter,
            children: mt("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function BD(tt) {
      let {
        dungeon: et,
        select: Vt
      } = tt;
      return (0, Iq.jsxs)(rq.f, {
        className: Cq()("SkyblockDungeonCard", {
          Selected: et.selected
        }),
        onClick: () => {
          Vt(et.id)
        },
        children: [(0, Iq.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, Iq.jsx)("strong", {
            children: et.name
          }), (0, Iq.jsx)("span", {
            children: et.beatenSummary
          })]
        }), (0, Iq.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: et.difficulties.map((tt => (0, Iq.jsxs)("span", {
            className: Cq()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: tt.beaten
            }),
            style: AD(tt.colour),
            title: tt.summary,
            children: [tt.beaten && (0, Iq.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), tt.label]
          }, tt.difficulty)))
        })]
      })
    }

    function pD(tt) {
      let {
        controller: et
      } = tt;
      const Vt = (0, Rq.h)(wV, et.getSnapshot()),
        {
          t: Ot
        } = (0, cq.H)(),
        qt = Aq();
      return Vt.enabled ? (0, Iq.jsxs)(oq.c, {
        show: Vt.open,
        close: et.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [Vt.picker && (0, Iq.jsx)(YD, {
          picker: Vt.picker,
          controller: et
        }), !Vt.picker && (0, Iq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: qt,
          onKeyDown: Uq,
          children: [(0, Iq.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Iq.jsxs)("div", {
              children: [(0, Iq.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: Ot("skyblockGame:dungeons")
              }), (0, Iq.jsx)("p", {
                children: Ot("skyblockGame:dungeonsIntro")
              })]
            }), (0, Iq.jsx)(rq.j, {
              padIgnore: !0,
              onClick: et.dismiss
            })]
          }), (0, Iq.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, Iq.jsx)("div", {
              className: "SkyblockDungeonList",
              children: Vt.dungeons.map((tt => (0, Iq.jsx)(BD, {
                dungeon: tt,
                select: et.select
              }, tt.id)))
            }), Vt.detail && (0, Iq.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, Iq.jsx)("h3", {
                children: Vt.detail.name
              }), (0, Iq.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: Vt.detail.difficulties.map((tt => (0, Iq.jsxs)("li", {
                  className: Cq()("SkyblockDungeonRecord", {
                    Beaten: tt.beaten
                  }),
                  children: [(0, Iq.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: AD(tt.colour),
                    children: [tt.beaten && (0, Iq.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), tt.label]
                  }), (0, Iq.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: tt.summary
                  })]
                }, tt.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function xD(tt) {
      let {
        collection: et,
        select: Vt
      } = tt;
      return (0, Iq.jsxs)(rq.f, {
        className: Cq()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: et.selected,
          Locked: et.locked
        }),
        ariaPressed: et.selected,
        onClick: () => {
          Vt(et.id)
        },
        children: [(0, Iq.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, Iq.jsx)(vq.e, {
            itemName: et.icon,
            amount: 0
          })
        }), (0, Iq.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, Iq.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, Iq.jsx)("strong", {
              children: et.name
            }), (0, Iq.jsx)("span", {
              children: et.tier
            })]
          }), (0, Iq.jsx)(iq, {
            percent: et.percent,
            label: `${et.name}: ${et.progress}`
          }), (0, Iq.jsx)("span", {
            className: "SkyblockSkillXp",
            children: et.progress
          })]
        })]
      })
    }

    function TD(tt) {
      let {
        collection: et
      } = tt;
      const {
        t: Vt
      } = (0, cq.H)();
      return (0, Iq.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, Iq.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, Iq.jsx)(vq.e, {
            itemName: et.icon,
            amount: 0
          })
        }), (0, Iq.jsx)("h3", {
          children: et.name
        }), (0, Iq.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: et.tier
        }), (0, Iq.jsx)("p", {
          children: et.locked ? Vt("skyblockGame:collectionLocked") : et.count
        }), null !== et.nextReward && (0, Iq.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, Iq.jsx)("strong", {
            children: Vt("skyblockGame:collectionNextReward")
          }), (0, Iq.jsx)("span", {
            children: et.nextReward
          })]
        }), (0, Iq.jsx)(iq, {
          percent: et.percent,
          label: et.progress
        }), (0, Iq.jsx)("p", {
          children: et.progress
        })]
      })
    }

    function gD(tt) {
      let {
        controller: et
      } = tt;
      const Vt = (0, Rq.h)(kV, et.getSnapshot()),
        {
          t: Ot
        } = (0, cq.H)(),
        qt = Aq();
      return Vt.enabled ? (0, Iq.jsx)(oq.c, {
        show: Vt.open,
        close: et.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Iq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: qt,
          onKeyDown: Uq,
          children: [(0, Iq.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Iq.jsxs)("div", {
              children: [(0, Iq.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: Ot("skyblockGame:collections")
              }), (0, Iq.jsxs)("p", {
                children: [Ot("skyblockGame:collectionsIntro"), " ", Vt.tiersUnlocked]
              })]
            }), (0, Iq.jsx)(rq.j, {
              padIgnore: !0,
              onClick: et.dismiss
            })]
          }), (0, Iq.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: Vt.categories.map((tt => (0, Iq.jsxs)(rq.f, {
              className: Cq()("SkyblockCollectionCategory", {
                Selected: tt.selected
              }),
              ariaPressed: tt.selected,
              padTabSelected: tt.selected,
              onClick: () => {
                et.selectCategory(tt.id)
              },
              children: [(0, Iq.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, Iq.jsx)(vq.e, {
                  itemName: tt.icon,
                  amount: 0
                })
              }), (0, Iq.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, Iq.jsx)("strong", {
                  children: tt.label
                }), (0, Iq.jsx)("span", {
                  children: tt.tiers
                })]
              })]
            }, tt.id)))
          }), (0, Iq.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, Iq.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: Vt.collections.map((tt => (0, Iq.jsx)(xD, {
                collection: tt,
                select: et.select
              }, tt.id)))
            }), Vt.detail && (0, Iq.jsx)(TD, {
              collection: Vt.detail
            })]
          })]
        })
      }) : null
    }
    const sD = ["completed", "active", "available", "locked"],
      nD = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function tm(tt) {
      let {
        controller: et
      } = tt;
      const Vt = (0, Rq.h)(TV, et.getSnapshot()),
        {
          t: Ot
        } = (0, cq.H)(),
        qt = Aq();
      return Vt.enabled ? (0, Iq.jsx)(oq.c, {
        show: Vt.open,
        close: et.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Iq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: qt,
          onKeyDown: Uq,
          children: [(0, Iq.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Iq.jsxs)("div", {
              children: [(0, Iq.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: Ot("skyblockDevQuests:title")
              }), (0, Iq.jsx)("p", {
                children: Ot("skyblockDevQuests:intro")
              })]
            }), (0, Iq.jsx)(rq.j, {
              onClick: et.dismiss
            })]
          }), (0, Iq.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [sD.map((tt => (0, Iq.jsx)("span", {
              className: Cq()("SkyblockQuestGraphLegendState", tt),
              children: Ot(`skyblockDevQuests:state_${tt}`)
            }, tt))), nD.map((tt => (0, Iq.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, Iq.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, Iq.jsx)("line", {
                  className: Cq()("SkyblockQuestGraphEdge", tt),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), Ot(`skyblockDevQuests:edge_${tt}`)]
            }, tt)))]
          }), (0, Iq.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, Iq.jsxs)("div", {
              className: Cq()("SkyblockQuestGraphCanvas", {
                Planning: Vt.planning
              }),
              style: {
                width: Vt.width,
                height: Vt.height
              },
              children: [(0, Iq.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: Vt.width,
                height: Vt.height,
                "aria-hidden": "true",
                children: [(0, Iq.jsx)("defs", {
                  children: (0, Iq.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, Iq.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), Vt.edges.map((tt => (0, Iq.jsx)("path", {
                  className: Cq()("SkyblockQuestGraphEdge", tt.kind, {
                    InPlan: tt.inPlan
                  }),
                  d: tt.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, tt.key)))]
              }), Vt.nodes.map((tt => (0, Iq.jsxs)("button", {
                type: "button",
                className: Cq()("SkyblockQuestGraphNode", tt.state, {
                  InPlan: tt.inPlan,
                  Hovered: tt.hovered
                }),
                style: {
                  left: tt.left,
                  top: tt.top,
                  width: 190,
                  height: 52
                },
                title: tt.id,
                onMouseEnter: () => {
                  et.hover(tt.id)
                },
                onMouseLeave: () => {
                  et.hover(null)
                },
                onFocus: () => {
                  et.hover(tt.id)
                },
                onBlur: () => {
                  et.hover(null)
                },
                onClick: () => {
                  et.jump(tt.id)
                },
                children: [(0, Iq.jsx)("strong", {
                  children: tt.name
                }), (0, Iq.jsx)("span", {
                  children: tt.detail
                })]
              }, tt.id)))]
            })
          })]
        })
      }) : null
    }
    const em = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      Vm = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${HO}ms`,
        "--forge-duration": "2150ms"
      },
      Om = Array.from({
        length: 18
      }, ((tt, et) => ({
        "--ember-left": `${(4+92*(.618034*et%1)).toFixed(1)}%`,
        "--ember-size": 3 + et % 3 * 2 + "px",
        "--ember-drift": 14 * (et % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*et%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*et%8).toFixed(2)}s`
      })));

    function qm(tt) {
      if (tt.style.removeProperty("--part-size"), null === tt.parentElement || "wrap" === getComputedStyle(tt.parentElement).flexWrap) return;
      const et = [...tt.children],
        Vt = getComputedStyle(tt),
        Ot = parseFloat(Vt.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        qt = (tt.clientHeight - parseFloat(Vt.rowGap) * (et.length - 1)) / et.length,
        Dt = et.map((tt => {
          const et = getComputedStyle(tt),
            Vt = tt.querySelector("h3"),
            Dt = tt.querySelector(".SkyblockForgeParts");
          if (null === Vt || null === Dt) return Ot;
          const mt = qt - parseFloat(et.paddingTop) - parseFloat(et.paddingBottom) - Vt.offsetHeight - parseFloat(getComputedStyle(Vt).marginBottom),
            dt = parseFloat(getComputedStyle(Dt).columnGap),
            jt = Dt.children.length;
          let Ht = 0;
          for (let Ot = 1; Ot <= jt; Ot++) {
            const tt = Math.ceil(jt / Ot);
            Ht = Math.max(Ht, Math.min((Dt.clientWidth - dt * (Ot - 1)) / Ot, (mt - dt * (tt - 1)) / tt))
          }
          return Ht
        }));
      tt.style.setProperty("--part-size", `${Math.floor(Math.max(Ot,Math.min(...Dt)))}px`)
    }

    function Dm(tt) {
      var et, Vt, Ot, Dt, mt;
      let {
        controller: dt
      } = tt;
      const jt = (0, Rq.h)(yO, dt.getSnapshot()),
        {
          t: Ht
        } = (0, cq.H)(),
        Xt = Aq(),
        Qt = function() {
          const tt = (0, vt.useRef)(null),
            et = (0, vt.useRef)(null);
          return (0, vt.useLayoutEffect)((() => {
            null !== tt.current && qm(tt.current)
          })), (0, vt.useCallback)((Vt => {
            var Ot;
            null === (Ot = et.current) || void 0 === Ot || Ot.disconnect(), et.current = null, tt.current = Vt, null !== Vt && (et.current = new ResizeObserver((() => {
              qm(Vt)
            })), et.current.observe(Vt))
          }), [])
        }(),
        lt = function(tt) {
          const et = (0, vt.useRef)(null);
          return (0, vt.useLayoutEffect)((() => {
            const tt = et.current;
            if (null !== tt) {
              tt.style.removeProperty("font-size");
              for (let et = 1.7; et > 1.1 && tt.scrollWidth > tt.clientWidth; et -= .1) tt.style.fontSize = et - .1 + "rem"
            }
          }), [tt]), (0, vt.useCallback)((tt => {
            et.current = tt
          }), [])
        }(null === (et = jt.preview) || void 0 === et ? void 0 : et.name),
        Et = (0, vt.useRef)(null),
        ft = (0, vt.useRef)({}),
        wt = jt.forging,
        yt = null !== (Vt = null === wt || void 0 === wt ? void 0 : wt.preview.tier) && void 0 !== Vt ? Vt : 0,
        Nt = null !== (Ot = null === wt || void 0 === wt ? void 0 : wt.preview.named) && void 0 !== Ot && Ot,
        Mt = (0, vt.useMemo)((() => {
          return null === wt ? null : {
            flames: (tt = yt, et = Nt, Array.from({
              length: 26 + 6 * tt + (et ? 20 : 0)
            }, ((tt, et) => {
              const Vt = et < 6,
                Ot = Math.random() * Math.PI * 2,
                qt = Vt ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                Dt = Math.cos(Ot) * qt,
                mt = Math.sin(Ot) * qt - 2 - 3 * Math.random(),
                dt = Math.random(),
                [jt, Ht, Xt] = Vt ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : dt < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : dt < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [dt < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": jt,
                "--x0": `${(.15*Dt).toFixed(2)}rem`,
                "--y0": `${(.15*mt).toFixed(2)}rem`,
                "--x": `${Dt.toFixed(2)}rem`,
                "--y": `${mt.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${Ht.toFixed(2)}rem`,
                "--duration": `${Math.round(Xt)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: lO(yt, Nt)
          };
          var tt, et
        }), [null === wt || void 0 === wt ? void 0 : wt.id]);
      if (!jt.enabled) return null;
      const bt = jt.preview,
        Jt = jt.arriving,
        Ct = null !== Jt && !Jt.sameSword,
        ut = null !== bt && (0, Iq.jsx)(vq.e, {
          itemName: bt.baseSword,
          amount: 0,
          enchantmentTier: bt.enchantmentTier
        });
      return (0, Iq.jsx)(oq.c, {
        show: jt.open,
        close: dt.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Iq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: Xt,
          onKeyDown: Uq,
          children: [(0, Iq.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: Om.map(((tt, et) => (0, Iq.jsx)("span", {
              style: tt
            }, et)))
          }), (0, Iq.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Iq.jsxs)("div", {
              children: [(0, Iq.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: Ht("skyblockGame:forgeTitle")
              }), (0, Iq.jsx)("p", {
                children: Ht("skyblockGame:forgeIntro")
              })]
            }), (0, Iq.jsx)(rq.j, {
              onClick: dt.dismiss
            })]
          }), (0, Iq.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, Iq.jsx)("div", {
              ref: Qt,
              className: Cq()("SkyblockForgeSlots", {
                Locked: null !== wt
              }),
              children: jt.slots.map((tt => (0, Iq.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, Iq.jsx)("h3", {
                  children: tt.label
                }), (0, Iq.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: tt.parts.map((et => (0, Iq.jsx)("button", {
                    type: "button",
                    className: Cq()("SkyblockForgePart", {
                      Selected: et.selected,
                      Missing: et.placeholder
                    }),
                    disabled: et.placeholder,
                    title: et.placeholder ? Ht("skyblockGame:forgePickParts") : et.itemName,
                    "aria-pressed": et.selected,
                    onClick: () => {
                      dt.select(tt.kind, et.material)
                    },
                    children: (0, Iq.jsx)(vq.e, {
                      itemName: et.itemName,
                      amount: et.owned
                    })
                  }, et.material)))
                })]
              }, tt.kind)))
            }), (0, Iq.jsxs)("div", {
              className: Cq()("SkyblockForgeAnvil", {
                Named: null === bt || void 0 === bt ? void 0 : bt.named
              }),
              style: {
                "--tier": null === bt ? "transparent" : qt.xb[bt.enchantmentTier]
              },
              children: [(0, Iq.jsxs)("div", {
                className: Cq()("SkyblockForgeAltar", {
                  Forging: null !== wt
                }),
                style: null === wt ? void 0 : Vm,
                children: [(0, Iq.jsxs)("div", {
                  className: Cq()("SkyblockForgeMount", {
                    Arrive: null !== Jt
                  }),
                  children: [null === bt && (0, Iq.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, Iq.jsx)(vq.e, {
                      itemName: jt.unformedSword,
                      amount: 0
                    })
                  }), null !== bt && (0, Iq.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== bt && null === wt && (0, Iq.jsx)("div", {
                    ref: Et,
                    className: "SkyblockForgeFloat",
                    children: (0, Iq.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: ut
                    })
                  }), null !== bt && (0, Iq.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: QO.map(((tt, et) => (0, Iq.jsx)("span", {
                      className: Cq()({
                        Rune: "" !== tt.rune
                      }),
                      style: tt.style,
                      children: tt.rune
                    }, et)))
                  }), null !== wt && null !== Mt && (0, Iq.jsxs)(Iq.Fragment, {
                    children: [(0, Iq.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, Iq.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: Mt.flames.map(((tt, et) => (0, Iq.jsx)("span", {
                        style: tt
                      }, et)))
                    }), (0, Iq.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: ft.current,
                      children: (0, Iq.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: ut
                      })
                    }), (0, Iq.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, Iq.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (yt >= 4 || Nt) && (0, Iq.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, Iq.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: Mt.sparks.map(((tt, et) => (0, Iq.jsx)("span", {
                        style: tt
                      }, et)))
                    }), (0, Iq.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, Iq.jsx)("p", {
                  className: Cq()("SkyblockForgeStatus", null === (Dt = jt.status) || void 0 === Dt ? void 0 : Dt.tone),
                  children: null === (mt = jt.status) || void 0 === mt ? void 0 : mt.text
                })]
              }), null === bt && (0, Iq.jsx)("p", {
                className: Cq()("SkyblockForgeName Waiting", {
                  ArriveText: Ct
                }),
                children: Ht(jt.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== bt && (0, Iq.jsx)("h3", {
                ref: lt,
                className: Cq()("SkyblockForgeName", {
                  ArriveText: Ct
                }),
                title: bt.name,
                children: bt.name
              }), (null === bt || void 0 === bt ? void 0 : bt.named) && (0, Iq.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: Ht("skyblockGame:forgeSecret")
              }), (0, Iq.jsxs)(rq.s, {
                className: "SkyblockForgeButton",
                disabled: !jt.canForge,
                title: null === bt ? void 0 : Ht("skyblockGame:forgeCoalOwned", {
                  owned: String(jt.coalOwned)
                }),
                onClick: () => {
                  ft.current = function(tt) {
                    const et = null === tt ? "none" : getComputedStyle(tt).transform,
                      Vt = new DOMMatrixReadOnly("none" === et ? void 0 : et);
                    return {
                      "--settle-y": `${Vt.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(Vt.b,Vt.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(Et.current), wO(), dt.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [Ht("skyblockGame:forgeButton"), null !== bt && (0, Iq.jsxs)("span", {
                  className: Cq()("SkyblockForgeCost", {
                    Short: bt.coalShort
                  }),
                  children: [(0, Iq.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, Iq.jsx)(vq.e, {
                      itemName: eO.e,
                      amount: 0
                    })
                  }), bt.coalCost]
                })]
              })]
            }), (0, Iq.jsxs)("div", {
              className: Cq()("SkyblockForgeDetails", {
                Named: null === bt || void 0 === bt ? void 0 : bt.named
              }),
              children: [(0, Iq.jsx)("p", {
                className: Cq()("SkyblockForgeLore", {
                  ArriveText: Ct
                }),
                title: null === bt || void 0 === bt ? void 0 : bt.lore,
                children: null === bt || void 0 === bt ? void 0 : bt.lore
              }), (0, Iq.jsxs)("dl", {
                className: Cq()("SkyblockForgeStats", {
                  ArriveText: Ct
                }),
                children: [null === bt && em.map((tt => (0, Iq.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, Iq.jsx)("dt", {
                    children: Ht(tt)
                  }), (0, Iq.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, tt))), null === bt || void 0 === bt ? void 0 : bt.stats.map((tt => (0, Iq.jsxs)("div", {
                  className: Cq()("SkyblockForgeStat", {
                    Better: tt.better
                  }),
                  children: [(0, Iq.jsx)("dt", {
                    children: tt.label
                  }), (0, Iq.jsx)("dd", {
                    children: tt.value
                  })]
                }, tt.label)))]
              }), (0, Iq.jsx)("ul", {
                className: Cq()("SkyblockForgeEffects", {
                  ArriveText: Ct
                }),
                children: null === bt || void 0 === bt ? void 0 : bt.effects.map((tt => (0, Iq.jsx)("li", {
                  children: tt
                }, tt)))
              })]
            })]
          })]
        })
      })
    }
    const mm = "Doom Rivet",
      dm = "Doom Crest";

    function jm(tt) {
      let {
        itemName: et,
        amount: Vt,
        owned: Ot
      } = tt;
      return (0, Iq.jsxs)("span", {
        className: Cq()("SkyblockSmugglerPrice", {
          Short: Vt > Ot
        }),
        children: [(0, Iq.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, Iq.jsx)(vq.e, {
            itemName: et,
            amount: 0
          })
        }), (0, Iq.jsx)("span", {
          children: Vt
        })]
      })
    }

    function Hm(tt) {
      return tt.justBought ? "skyblockGame:smugglerJustBought" : tt.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function Xm(tt) {
      let {
        deal: et,
        view: Vt,
        buy: Ot
      } = tt;
      const {
        t: qt
      } = (0, cq.H)();
      return (0, Iq.jsxs)("div", {
        className: Cq()("SkyblockSmugglerPocket", {
          Bought: et.justBought,
          Unaffordable: !et.affordable,
          SoldOut: et.soldOut && !et.justBought
        }),
        children: [(0, Iq.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, Iq.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, Iq.jsx)(vq.e, {
            itemName: et.itemName,
            amount: 0,
            enchantmentTier: et.enchantmentTier
          }), et.amount > 1 && (0, Iq.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: qt("skyblockGame:smugglerAmount", {
              amount: et.amount
            })
          })]
        }), (0, Iq.jsx)("h3", {
          children: et.displayName
        }), (0, Iq.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, Iq.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [et.rivets > 0 && (0, Iq.jsx)(jm, {
              itemName: mm,
              amount: et.rivets,
              owned: Vt.rivetsOwned
            }), et.crests > 0 && (0, Iq.jsx)(jm, {
              itemName: dm,
              amount: et.crests,
              owned: Vt.crestsOwned
            })]
          }), (0, Iq.jsx)(rq.f, {
            className: "SkyblockSmugglerBuy",
            disabled: et.soldOut || !et.affordable || Vt.pending,
            onClick: () => {
              Ot(et.slot)
            },
            children: qt(Hm(et))
          })]
        })]
      }, et.justBought ? Vt.boughtCount : 0)
    }

    function Qm(tt) {
      let {
        controller: et
      } = tt;
      const Vt = (0, Rq.h)(MO, et.getSnapshot()),
        {
          t: Ot
        } = (0, cq.H)(),
        qt = Aq();
      return Vt.enabled ? (0, Iq.jsx)(oq.c, {
        show: Vt.open,
        close: et.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Iq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: qt,
          onKeyDown: Uq,
          children: [(0, Iq.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, Iq.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, Iq.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, Iq.jsxs)("div", {
              children: [(0, Iq.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: Ot("skyblockGame:smugglerTitle")
              }), (0, Iq.jsx)("p", {
                children: Ot("skyblockGame:smugglerIntro")
              })]
            }), (0, Iq.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, Iq.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, Iq.jsx)(jm, {
                  itemName: mm,
                  amount: Vt.rivetsOwned,
                  owned: Vt.rivetsOwned
                }), (0, Iq.jsx)(jm, {
                  itemName: dm,
                  amount: Vt.crestsOwned,
                  owned: Vt.crestsOwned
                })]
              }), (0, Iq.jsx)(rq.j, {
                onClick: et.dismiss
              })]
            })]
          }), (0, Iq.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: Vt.deals.map((tt => (0, Iq.jsx)(Xm, {
              deal: tt,
              view: Vt,
              buy: et.buy
            }, tt.slot)))
          }), (0, Iq.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, Iq.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: Vt.rotatesText
            }), null !== Vt.status && (0, Iq.jsx)("span", {
              className: Cq()("SkyblockSmugglerStatus", Vt.status.tone),
              children: Vt.status.text
            })]
          })]
        })
      }) : null
    }

    function lm(tt) {
      let {
        phase: et,
        className: Vt
      } = tt;
      return (0, Iq.jsx)("span", {
        className: Cq()("SkyblockMoon", `Moon-${et}`, Vt),
        "aria-hidden": "true"
      })
    }

    function Em(tt) {
      let {
        controller: et
      } = tt;
      const Vt = (0, Rq.h)(CO, et.getSnapshot()),
        {
          t: Ot
        } = (0, cq.H)();
      return Vt.enabled ? (0, Iq.jsx)(Kq.g, {
        placement: "statBars",
        children: (0, Iq.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: Cq()("SkyblockPassageChip", Vt.open && "Open"),
          "aria-label": Ot("skyblockGame:passageChipLabel", {
            phase: Vt.phaseName
          }),
          title: Ot("skyblockGame:passageChipLabel", {
            phase: Vt.phaseName
          }),
          onMouseDown: tt => {
            tt.preventDefault()
          },
          onClick: et.toggle,
          children: (0, Iq.jsx)(lm, {
            phase: Vt.phase
          }, Vt.phase)
        })
      }) : null
    }

    function fm(tt) {
      let {
        fish: et
      } = tt;
      return (0, Iq.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, Iq.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, Iq.jsx)(vq.e, {
            itemName: et.itemName,
            amount: 0
          })
        }), (0, Iq.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, Iq.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: et.displayName
          }), (0, Iq.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: et.where
          })]
        })]
      })
    }

    function wm(tt) {
      let {
        controller: et
      } = tt;
      const Vt = (0, Rq.h)(CO, et.getSnapshot()),
        {
          t: Ot
        } = (0, cq.H)(),
        qt = Aq();
      return Vt.enabled ? (0, Iq.jsx)(oq.c, {
        show: Vt.open,
        close: et.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Iq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: qt,
          onKeyDown: Uq,
          children: [(0, Iq.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, Iq.jsx)(lm, {
              phase: Vt.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, Iq.jsxs)("div", {
              children: [(0, Iq.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: Ot("skyblockGame:passageTitle")
              }), (0, Iq.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: Vt.phaseName
              })]
            }), (0, Iq.jsx)(rq.j, {
              padIgnore: !0,
              onClick: et.dismiss
            })]
          }), (0, Iq.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: Ot("skyblockGame:passageIntro")
          }), (0, Iq.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, Iq.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, Iq.jsx)("h3", {
                children: Ot("skyblockGame:passageVisiting")
              }), (0, Iq.jsx)("ul", {
                className: "SkyblockPassageList",
                children: Vt.visitors.map((tt => (0, Iq.jsx)(fm, {
                  fish: tt
                }, tt.itemName)))
              })]
            }), (0, Iq.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== Vt.resting && (0, Iq.jsxs)(Iq.Fragment, {
                children: [(0, Iq.jsx)("h3", {
                  children: Ot("skyblockGame:passageResting")
                }), (0, Iq.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, Iq.jsx)(fm, {
                    fish: Vt.resting
                  })
                })]
              }), (0, Iq.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, Iq.jsx)(lm, {
                  phase: Vt.nextPhase
                }), (0, Iq.jsx)("span", {
                  children: Vt.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function ym() {
      return (0, Iq.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((tt => (0, Iq.jsx)("i", {
          style: {
            "--sparkle-index": tt
          }
        }, tt)))
      })
    }

    function Nm(tt) {
      var et;
      let {
        charm: Vt,
        view: Ot,
        controller: qt
      } = tt;
      const {
        t: Dt
      } = (0, cq.H)(), mt = Ot.shop, dt = (null === (et = Ot.sparkle) || void 0 === et ? void 0 : et.id) === Vt.id;
      return (0, Iq.jsxs)("li", {
        className: Cq()("SkyblockLampLightCharm", Vt.owned && "Owned", Vt.socketed && "Socketed"),
        children: [dt && (0, Iq.jsx)(ym, {}, Ot.sparkle.count), (0, Iq.jsx)("h4", {
          children: Vt.name
        }), (0, Iq.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: Vt.effect
        }), (0, Iq.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: Vt.lines.map((tt => (0, Iq.jsxs)("li", {
            className: Cq()("SkyblockLampLightOddsLine", "better" === tt.tone ? "Better" : "worse" === tt.tone ? "Worse" : "Same"),
            children: [(0, Iq.jsx)("span", {
              className: "Before",
              children: tt.before
            }), (0, Iq.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, Iq.jsx)("span", {
              className: "After",
              children: tt.after
            })]
          }, tt.label)))
        }), (0, Iq.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: Vt.owned ? Vt.socketed ? (0, Iq.jsxs)(Iq.Fragment, {
            children: [(0, Iq.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: Dt("skyblockGame:lampLightSocketed")
            }), (0, Iq.jsx)(rq.Q, {
              disabled: !Ot.canCommand,
              ariaLabel: Dt("skyblockGame:lampLightRemoveLabel", {
                charm: Vt.name
              }),
              onClick: () => {
                qt.socket(null)
              },
              children: Dt("skyblockGame:lampLightRemove")
            })]
          }) : (0, Iq.jsx)(rq.f, {
            disabled: !Ot.canCommand || !mt.heldRod,
            ariaLabel: Dt("skyblockGame:lampLightSocketLabel", {
              charm: Vt.name
            }),
            onClick: () => {
              qt.socket(Vt.id)
            },
            children: Dt("skyblockGame:lampLightSocket")
          }) : (0, Iq.jsx)(rq.f, {
            disabled: !Ot.canCommand || !Vt.affordable,
            ariaLabel: Dt("skyblockGame:lampLightBuyLabel", {
              item: Vt.name,
              cost: Vt.cost
            }),
            onClick: () => {
              qt.buy(Vt.id)
            },
            children: Vt.cost
          })
        })]
      })
    }

    function am(tt) {
      var et;
      let {
        tint: Vt,
        view: Ot,
        controller: qt
      } = tt;
      const {
        t: Dt
      } = (0, cq.H)();
      return (0, Iq.jsxs)("li", {
        className: Cq()("SkyblockLampLightTint", Vt.wearing && "Wearing"),
        style: {
          "--tint-colour": Vt.colour
        },
        children: [(null === (et = Ot.sparkle) || void 0 === et ? void 0 : et.id) === Vt.id && (0, Iq.jsx)(ym, {}, Ot.sparkle.count), (0, Iq.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, Iq.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: Vt.name
        }), Vt.wearing ? (0, Iq.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: Dt("skyblockGame:lampLightWearing")
        }) : (0, Iq.jsx)(rq.f, {
          disabled: !Ot.canCommand || !Vt.owned && !Vt.affordable,
          ariaLabel: Vt.owned ? Dt("skyblockGame:lampLightWearLabel", {
            tint: Vt.name
          }) : Dt("skyblockGame:lampLightBuyLabel", {
            item: Vt.name,
            cost: Vt.cost
          }),
          onClick: () => {
            Vt.owned ? qt.wearTint(Vt.id) : qt.buy(Vt.id)
          },
          children: Vt.owned ? Dt("skyblockGame:lampLightWear") : Vt.cost
        })]
      })
    }

    function Mm(tt) {
      let {
        controller: et
      } = tt;
      const Vt = (0, Rq.h)(kO, et.getSnapshot()),
        {
          t: Ot
        } = (0, cq.H)(),
        qt = Vt.shop;
      return (0, Iq.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, Iq.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, Iq.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: Vt.balance
          }), (0, Iq.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": Vt.releasing,
            className: Cq()("SkyblockLampLightSwitch", Vt.releasing && "On"),
            disabled: Vt.releasing ? "ready" !== Vt.status : !Vt.canCommand,
            onClick: () => {
              et.setRelease(!Vt.releasing)
            },
            children: [(0, Iq.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, Iq.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), Ot("skyblockGame:lampLightRelease")]
          }), (0, Iq.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: Ot("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== Vt.notice && (0, Iq.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: Vt.notice
        }), null !== qt && (0, Iq.jsxs)(Iq.Fragment, {
          children: [(0, Iq.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, Iq.jsx)("h3", {
              children: Ot("skyblockGame:lampLightCharms")
            }), (0, Iq.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: qt.oddsFor
            }), (0, Iq.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((tt => (0, Iq.jsx)("button", {
                type: "button",
                "aria-pressed": Vt.situation === tt,
                className: Cq()("SkyblockLampLightSituation", Vt.situation === tt && "Selected"),
                onClick: () => {
                  et.setSituation(tt)
                },
                children: Ot("open" === tt ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, tt)))
            })]
          }), !qt.heldRod && (0, Iq.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: Ot("skyblockGame:lampLightHoldRod")
          }), (0, Iq.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: qt.charms.map((tt => (0, Iq.jsx)(Nm, {
              charm: tt,
              view: Vt,
              controller: et
            }, tt.id)))
          }), (0, Iq.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, Iq.jsx)("h3", {
              children: Ot("skyblockGame:lampLightTints")
            })
          }), (0, Iq.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, Iq.jsxs)("li", {
              className: Cq()("SkyblockLampLightTint", "Islands", qt.wearingIslandColours && "Wearing"),
              children: [(0, Iq.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, Iq.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: Ot("skyblockGame:lampLightIslandColours")
              }), qt.wearingIslandColours ? (0, Iq.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: Ot("skyblockGame:lampLightWearing")
              }) : (0, Iq.jsx)(rq.f, {
                disabled: !Vt.canCommand,
                ariaLabel: Ot("skyblockGame:lampLightWearLabel", {
                  tint: Ot("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  et.wearTint(null)
                },
                children: Ot("skyblockGame:lampLightWear")
              })]
            }), qt.tints.map((tt => (0, Iq.jsx)(am, {
              tint: tt,
              view: Vt,
              controller: et
            }, tt.id)))]
          })]
        })]
      })
    }

    function bm(tt) {
      let {
        controller: et
      } = tt;
      const Vt = (0, Rq.h)(kO, et.getSnapshot()),
        {
          t: Ot
        } = (0, cq.H)();
      return Vt.releasing ? (0, Iq.jsx)(Kq.g, {
        children: (0, Iq.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            et.setRelease(!1)
          },
          children: [(0, Iq.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, Iq.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [Ot("skyblockGame:lampLightReleasing"), " \xb7 ", Vt.balance]
          }), (0, Iq.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: Ot("skyblockGame:lampLightKeepCatches")
          }), null !== Vt.gained && (0, Iq.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: Vt.gained.text
          }, Vt.gained.count)]
        })
      }) : null
    }

    function Jm(tt) {
      let {
        island: et,
        view: Vt,
        aim: Ot
      } = tt;
      const {
        t: qt
      } = (0, cq.H)(), Dt = et.featuredFish;
      return (0, Iq.jsxs)("li", {
        className: Cq()("SkyblockKeepersChairIsland", `Island-${et.id}`, et.favoured && "Aimed", !et.relit && "Dark"),
        children: [(0, Iq.jsx)("h3", {
          children: et.name
        }), et.relit && null !== Dt ? (0, Iq.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, Iq.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: qt("skyblockGame:keepersChairTideNotice")
          }), (0, Iq.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, Iq.jsx)(vq.e, {
              itemName: Dt.itemName,
              amount: 0
            })
          }), (0, Iq.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: Dt.displayName
          })]
        }) : (0, Iq.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, Iq.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: qt("skyblockGame:keepersChairDark")
          })
        }), et.relit && (et.favoured ? (0, Iq.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: qt("skyblockGame:keepersChairAimed")
        }) : (0, Iq.jsx)(rq.f, {
          className: "SkyblockKeepersChairAim",
          disabled: !Vt.canAim,
          ariaLabel: qt("skyblockGame:keepersChairAimLabel", {
            island: et.name
          }),
          onClick: () => {
            Ot(et.id)
          },
          children: qt("skyblockGame:keepersChairAim")
        }))]
      }, et.favoured ? Vt.aimedCount : 0)
    }

    function Cm(tt) {
      let {
        controller: et,
        lampLight: Vt
      } = tt;
      const Ot = (0, Rq.h)(SO, et.getSnapshot()),
        qt = (0, Rq.h)(kO, Vt.getSnapshot()),
        [Dt, mt] = (0, vt.useState)("lamp"),
        {
          t: dt
        } = (0, cq.H)(),
        jt = Aq();
      if (!Ot.enabled) return null;
      const Ht = "light" === Dt && qt.enabled;
      return (0, Iq.jsx)(oq.c, {
        show: Ot.open,
        close: et.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Iq.jsxs)("section", {
          className: Cq()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", Ht && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: jt,
          onKeyDown: Uq,
          children: [(0, Iq.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, Iq.jsxs)("div", {
              children: [(0, Iq.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: dt("skyblockGame:keepersChairTitle")
              }), (0, Iq.jsx)("p", {
                children: dt(Ht ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, Iq.jsx)(rq.j, {
              padIgnore: !0,
              ariaLabel: dt("skyblockGame:keepersChairClose"),
              onClick: et.dismiss
            })]
          }), qt.enabled && (0, Iq.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((tt => (0, Iq.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === tt === Ht,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === tt === Ht ? "true" : void 0,
              className: Cq()("SkyblockKeepersChairTab", "light" === tt === Ht && "Selected"),
              onClick: () => {
                mt(tt)
              },
              children: [dt("lamp" === tt ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === tt && (0, Iq.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: qt.balance
              })]
            }, tt)))
          }), Ht ? (0, Iq.jsx)(Mm, {
            controller: Vt
          }) : (0, Iq.jsx)(um, {
            view: Ot,
            controller: et
          })]
        })
      })
    }

    function um(tt) {
      let {
        view: et,
        controller: Vt
      } = tt;
      const {
        t: Ot
      } = (0, cq.H)();
      return (0, Iq.jsxs)(Iq.Fragment, {
        children: [(0, Iq.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: et.islands.map((tt => (0, Iq.jsx)(Jm, {
            island: tt,
            view: et,
            aim: Vt.aim
          }, tt.id)))
        }), null !== et.almanac && (0, Iq.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, Iq.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: Ot("skyblockGame:passageTitle")
          }), (0, Iq.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, Iq.jsx)(lm, {
              phase: et.almanac.phase
            }), et.almanac.phaseName]
          }), (0, Iq.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, Iq.jsx)(lm, {
              phase: et.almanac.nextPhase
            }), et.almanac.next]
          })]
        }), (0, Iq.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, Iq.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: Ot("skyblockGame:keepersChairFavour")
          }), et.aimed && (0, Iq.jsx)(rq.Q, {
            className: "SkyblockKeepersChairRest",
            disabled: !et.canAim,
            onClick: () => {
              Vt.aim(null)
            },
            children: Ot("skyblockGame:keepersChairRest")
          })]
        }), null !== et.status && (0, Iq.jsx)("p", {
          className: Cq()("SkyblockKeepersChairStatus", "refused" === et.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: et.status.text
        })]
      })
    }

    function Km(tt) {
      let {
        controller: et
      } = tt;
      const {
        t: Vt
      } = (0, cq.H)(), Ot = (0, Rq.h)(RO, et.getSnapshot());
      if (!Ot.enabled) return null;
      const qt = Ot.freshCount > 0 ? Vt("skyblockGame:reachLogOpenNews", {
        count: Ot.freshCount
      }) : Vt("skyblockGame:reachLogOpen");
      return (0, Iq.jsx)(Kq.g, {
        placement: "statBars",
        children: (0, Iq.jsxs)("button", {
          type: "button",
          className: Cq()("SkyblockReachLogButton", Ot.freshCount > 0 && "HasNews", Ot.pending && "Pending"),
          "aria-label": qt,
          title: qt,
          onClick: et.ask,
          children: [Ot.news && (0, Iq.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${Ot.newsToken}`), (0, Iq.jsx)("span", {
            className: Cq()("SkyblockReachLogIcon", Ot.news && "Jump"),
            "aria-hidden": "true",
            children: (0, Iq.jsx)(vq.e, {
              itemName: PO,
              amount: 0
            })
          }, `icon:${Ot.newsToken}`), Ot.freshCount > 0 && (0, Iq.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: Ot.freshCount
          })]
        })
      })
    }

    function hm(tt) {
      let {
        gift: et
      } = tt;
      return (0, Iq.jsx)("li", {
        className: Cq()("SkyblockRegularsGift", et.given && "Given"),
        children: et.text
      })
    }

    function Wm(tt) {
      let {
        regular: et
      } = tt;
      const {
        t: Vt
      } = (0, cq.H)();
      return (0, Iq.jsxs)("li", {
        className: Cq()("SkyblockRegularsCard", et.tagged ? "Tagged" : "Untagged", et.resting && "Resting"),
        children: [(0, Iq.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, Iq.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: et.fishName,
            children: (0, Iq.jsx)(vq.e, {
              itemName: et.itemName,
              amount: 0
            })
          }), (0, Iq.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, Iq.jsx)("h3", {
              children: et.name
            }), (0, Iq.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: et.fishName
            })]
          })]
        }), (0, Iq.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: et.line
        }), (0, Iq.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, Iq.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: et.size
          }), et.tagged && (0, Iq.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: et.resting ? Vt("skyblockGame:regularsResting") : et.meetings
          })]
        }), (0, Iq.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: et.chance
        }), (0, Iq.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: et.gifts.map((tt => (0, Iq.jsx)(hm, {
            gift: tt
          }, tt.text)))
        }), et.history.length > 0 && (0, Iq.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: et.history.map(((tt, et) => (0, Iq.jsx)("li", {
            children: tt
          }, et)))
        })]
      })
    }

    function Sm(tt) {
      let {
        controller: et,
        island: Vt
      } = tt;
      const {
        t: Ot
      } = (0, cq.H)(), qt = (0, Rq.h)(Vq, et.getSnapshot()), Dt = qt.islands.find((tt => tt.id === Vt));
      if (!qt.enabled || void 0 === Dt) return null;
      const mt = Ot("skyblockGame:regularsOpen");
      return (0, Iq.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": mt,
        title: mt,
        onClick: () => {
          et.openIsland(Vt)
        },
        children: [(0, Iq.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: Ot("skyblockGame:regularsTitle")
        }), Dt.regulars.map((tt => (0, Iq.jsx)("span", {
          className: Cq()("SkyblockRegularsStripIcon", tt.tagged && "Tagged"),
          title: tt.name,
          children: (0, Iq.jsx)(vq.e, {
            itemName: tt.itemName,
            amount: 0
          })
        }, tt.id)))]
      })
    }

    function cm(tt) {
      var et;
      let {
        controller: Vt
      } = tt;
      const Ot = (0, Rq.h)(Vq, Vt.getSnapshot()),
        {
          t: qt
        } = (0, cq.H)(),
        Dt = Aq();
      if (!Ot.enabled) return null;
      const mt = null !== (et = Ot.islands.find((tt => tt.id === Ot.selected))) && void 0 !== et ? et : null;
      return (0, Iq.jsx)(oq.c, {
        show: Ot.open,
        close: Vt.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Iq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: Dt,
          onKeyDown: Uq,
          children: [(0, Iq.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Iq.jsxs)("div", {
              children: [(0, Iq.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: qt("skyblockGame:regularsTitle")
              }), (0, Iq.jsx)("p", {
                children: qt("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, Iq.jsx)(rq.j, {
              padIgnore: !0,
              onClick: Vt.dismiss
            })]
          }), (0, Iq.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: Ot.islands.map((tt => {
              const et = tt.id === Ot.selected;
              return (0, Iq.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": et,
                "data-pad-tab": !0,
                "data-pad-selected": et ? "true" : void 0,
                className: Cq()("SkyblockReachLogTab", `Island-${tt.id}`, et && "Selected", tt.charm.given && "GoldPage"),
                onClick: () => {
                  Vt.selectIsland(tt.id)
                },
                children: (0, Iq.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: tt.name
                })
              }, tt.id)
            }))
          }), (0, Iq.jsxs)("div", {
            className: Cq()("SkyblockRegularsPage", null !== mt && `Island-${mt.id}`),
            role: "tabpanel",
            children: [(0, Iq.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: qt("skyblockGame:regularsHow")
            }), null !== mt && (0, Iq.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: mt.regulars.map((tt => (0, Iq.jsx)(Wm, {
                regular: tt
              }, tt.id)))
            })]
          }), null !== mt && (0, Iq.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, Iq.jsx)("span", {
              className: Cq()("SkyblockRegularsCharm", mt.charm.given && "Given"),
              children: mt.charm.text
            })
          })]
        })
      })
    }
    const Rm = [{
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
      Im = Array.from({
        length: 6
      }, ((tt, et) => ({
        "--x": `${(88*(.618034*et%1)).toFixed(1)}%`,
        "--y": `${(10+37*et%70).toFixed(1)}%`,
        "--size": 7 + et % 3 * 3 + "rem",
        "--drift-x": 3 * (et % 3 - 1) + "rem",
        "--drift-y": 2 * (et % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + et % 4 * 3 + "s",
        "--delay": 2.5 * -et + "s"
      }))),
      Pm = Array.from({
        length: 14
      }, ((tt, et) => ({
        "--left": `${(3+94*((.618034*et+.3)%1)).toFixed(1)}%`,
        "--size": 4 + et % 4 * 2 + "px",
        "--sway": et % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*et%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*et%12).toFixed(2)}s`
      }))),
      Zm = (0, vt.memo)((function(tt) {
        let {
          island: et
        } = tt;
        return (0, Iq.jsxs)("div", {
          className: Cq()("SkyblockReachLogDepths", null !== et && `Island-${et}`),
          "aria-hidden": "true",
          children: [Rm.map(((tt, et) => (0, Iq.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: tt
          }, `shaft${et}`))), Im.map(((tt, et) => (0, Iq.jsx)("span", {
            className: Cq()("SkyblockReachLogMote", et % 2 === 1 && "Violet"),
            style: tt
          }, `mote${et}`))), Pm.map(((tt, et) => (0, Iq.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: tt
          }, `bubble${et}`)))]
        })
      })),
      Lm = 100;

    function Fm(tt) {
      let {
        view: et
      } = tt;
      const {
        t: Vt
      } = (0, cq.H)();
      if (null === et || 0 === et.total) return null;
      const Ot = Lm * et.aspect,
        qt = Vt("skyblockGame:hiddenWatersCount", {
          found: et.found,
          total: et.total
        });
      return (0, Iq.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${Vt("skyblockGame:hiddenWatersTitle")}: ${qt}`,
        children: [(0, Iq.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${Ot}`,
          "aria-hidden": "true",
          children: [et.islands.map(((tt, et) => (0, Iq.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (tt.left + tt.width / 2) * Lm,
            cy: (tt.top + tt.height / 2) * Ot,
            rx: tt.width / 2 * Lm,
            ry: tt.height / 2 * Ot
          }, et))), et.pins.map(((tt, et) => (0, Iq.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: tt.left * Lm,
            cy: tt.top * Ot,
            r: 13
          }, et)))]
        }), (0, Iq.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, Iq.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: Vt("skyblockGame:hiddenWatersTitle")
          }), (0, Iq.jsx)("span", {
            className: et.found === et.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: qt
          })]
        })]
      })
    }

    function km(tt) {
      let {
        view: et,
        island: Vt
      } = tt;
      const {
        t: Ot
      } = (0, cq.H)(), qt = null === et || void 0 === et ? void 0 : et.glimpses.get(Vt);
      return void 0 === qt || 0 === qt.length ? null : (0, Iq.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, Iq.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: Ot("skyblockGame:hiddenWatersGlimpsed")
        }), (0, Iq.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: qt.map((tt => (0, Iq.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, Iq.jsx)(vq.e, {
              itemName: tt,
              amount: 0
            })
          }, tt)))
        })]
      })
    }
    const Gm = ["Bronze", "Silver", "Gold"],
      zm = [{
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
      om = zm.slice(0, 2);

    function rm(tt) {
      return tt ? zm : om
    }

    function Um(tt) {
      let {
        fish: et,
        letGoShown: Vt
      } = tt;
      const {
        t: Ot
      } = (0, cq.H)();
      return (0, Iq.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [Gm.map(((tt, Vt) => {
          const qt = Vt < et.marks;
          return (0, Iq.jsx)("span", {
            className: Cq()("SkyblockReachLogPip", tt, qt && "Earned", qt && et.fresh && Vt === et.marks - 1 && "Newest"),
            title: Ot(IO[Vt])
          }, tt)
        })), (0, Iq.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), rm(Vt).map(((tt, Vt) => (0, Iq.jsx)("span", {
          className: Cq()("SkyblockReachLogRibbon", tt.className, !0 === et.ribbons[Vt] && "Earned"),
          title: Ot(tt.titleKey)
        }, tt.className)))]
      })
    }

    function Am(tt) {
      let {
        letGoShown: et,
        haloShown: Vt
      } = tt;
      const {
        t: Ot
      } = (0, cq.H)();
      return (0, Iq.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, Iq.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Ot("skyblockGame:reachLogMarks"),
          children: [(0, Iq.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), Ot("skyblockGame:reachLogLegendMarks")]
        }), rm(et).map((tt => (0, Iq.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Ot(tt.titleKey),
          children: [(0, Iq.jsx)("span", {
            className: Cq()("SkyblockReachLogRibbon", tt.className, "Earned")
          }), Ot(tt.legendKey)]
        }, tt.className))), (0, Iq.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Ot("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, Iq.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), Ot("skyblockGame:reachLogLegendGlimmer")]
        }), Vt && (0, Iq.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Ot("skyblockGame:reachLogHaloTitle"),
          children: [(0, Iq.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), Ot("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function im(tt) {
      let {
        returner: et
      } = tt;
      return (0, Iq.jsxs)("div", {
        className: Cq()("SkyblockReachLogReturner", et.back && "Back"),
        children: [(0, Iq.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, Iq.jsx)(vq.e, {
            itemName: et.itemName,
            amount: 0
          })
        }), (0, Iq.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: et.line
        })]
      })
    }

    function Ym(tt) {
      let {
        fish: et,
        letGoShown: Vt
      } = tt;
      const {
        t: Ot
      } = (0, cq.H)();
      return (0, Iq.jsxs)("li", {
        className: Cq()("SkyblockReachLogCard", et.caught ? "Caught" : "Unknown", et.marks >= 3 && "GoldCard", et.fresh && "Fresh", et.visitor && "Visitor"),
        children: [et.visitor && (0, Iq.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: Ot("skyblockGame:reachLogVisitor")
        }), et.fresh && Array.from({
          length: 4
        }, ((tt, et) => (0, Iq.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, et))), (0, Iq.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [et.halo && (0, Iq.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: Ot("skyblockGame:reachLogHaloTitle")
          }), (0, Iq.jsx)(vq.e, {
            itemName: et.itemName,
            amount: 0
          }), et.glimmer && (0, Iq.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: Ot("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, Iq.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: et.name
        }), (0, Iq.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: et.chance
        }), (0, Iq.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: et.best
        }), (0, Iq.jsx)(Um, {
          fish: et,
          letGoShown: Vt
        })]
      })
    }

    function Bm(tt) {
      let {
        page: et,
        letGoShown: Vt,
        hiddenWaters: Ot
      } = tt;
      const {
        t: qt
      } = (0, cq.H)();
      return et.awake ? (0, Iq.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: et.fish.map((tt => (0, Iq.jsx)(Ym, {
          fish: tt,
          letGoShown: Vt
        }, tt.itemName)))
      }) : (0, Iq.jsxs)(Iq.Fragment, {
        children: [(0, Iq.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: qt("skyblockGame:reachLogAsleep")
        }), (0, Iq.jsx)(km, {
          view: Ot,
          island: et.id
        })]
      })
    }

    function pm(tt) {
      var et, Vt;
      let {
        controller: Ot,
        regulars: qt,
        hiddenWaters: Dt
      } = tt;
      const mt = (0, Rq.h)(RO, Ot.getSnapshot()),
        dt = function(tt) {
          return (0, Rq.h)(dq, tt.getSnapshot())
        }(Dt),
        jt = (0, Rq.h)(Vq, qt.getSnapshot()),
        {
          t: Ht
        } = (0, cq.H)(),
        Xt = Aq();
      if (!mt.enabled) return null;
      const Qt = null !== (et = mt.pages.find((tt => tt.id === mt.selected))) && void 0 !== et ? et : null;
      return (0, Iq.jsx)(oq.c, {
        show: mt.open,
        close: Ot.dismiss,
        togglePointerLock: !1,
        className: Cq()("SkyblockSkillsOverlay", jt.open && "SkyblockReachLogUnderLedger"),
        children: (0, Iq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: Xt,
          onKeyDown: Uq,
          children: [(0, Iq.jsx)(Zm, {
            island: null !== (Vt = null === Qt || void 0 === Qt ? void 0 : Qt.id) && void 0 !== Vt ? Vt : null
          }), (0, Iq.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Iq.jsxs)("div", {
              children: [(0, Iq.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: Ht("skyblockGame:reachLogTitle")
              }), (0, Iq.jsx)("p", {
                children: Ht("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, Iq.jsx)(Fm, {
              view: dt
            }), (0, Iq.jsx)(rq.j, {
              padIgnore: !0,
              onClick: Ot.dismiss
            })]
          }), (0, Iq.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: mt.pages.map((tt => {
              const et = tt.id === mt.selected,
                Vt = tt.fish.some((tt => tt.fresh));
              return (0, Iq.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": et,
                "data-pad-tab": !0,
                "data-pad-selected": et ? "true" : void 0,
                className: Cq()("SkyblockReachLogTab", `Island-${tt.id}`, et && "Selected", !tt.awake && "Asleep", tt.gold && "GoldPage", Vt && "HasNews"),
                onClick: () => {
                  Ot.selectPage(tt.id)
                },
                children: [(0, Iq.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: tt.name
                }), tt.awake && (0, Iq.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: Ht("skyblockGame:reachLogCaughtCount", {
                    caught: tt.caught,
                    total: tt.total
                  })
                })]
              }, tt.id)
            }))
          }), (0, Iq.jsxs)("div", {
            className: Cq()("SkyblockReachLogPage", null !== Qt && `Island-${Qt.id}`),
            role: "tabpanel",
            children: [null !== Qt && (0, Iq.jsx)(Bm, {
              page: Qt,
              letGoShown: mt.letGoShown,
              hiddenWaters: dt
            }), !0 === (null === Qt || void 0 === Qt ? void 0 : Qt.awake) && null !== Qt.returner && (0, Iq.jsx)(im, {
              returner: Qt.returner
            }), !0 === (null === Qt || void 0 === Qt ? void 0 : Qt.awake) && (0, Iq.jsx)(Sm, {
              controller: qt,
              island: Qt.id
            })]
          }), (0, Iq.jsx)("footer", {
            className: Cq()("SkyblockReachLogFooter", null !== Qt && `Island-${Qt.id}`, !0 === (null === Qt || void 0 === Qt ? void 0 : Qt.gold) && "GoldPage"),
            children: !0 === (null === Qt || void 0 === Qt ? void 0 : Qt.gold) ? (0, Iq.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: Ht("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, Iq.jsxs)(Iq.Fragment, {
              children: [(0, Iq.jsx)(Am, {
                letGoShown: mt.letGoShown,
                haloShown: !0 === (null === Qt || void 0 === Qt ? void 0 : Qt.fish.some((tt => tt.halo)))
              }), (0, Iq.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: Ht("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var xm = Vt(5e3);

    function Tm(tt) {
      let {
        conversation: et,
        completedLabel: Vt
      } = tt;
      return (0, Iq.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, Iq.jsxs)("header", {
          children: [(0, Iq.jsx)("h3", {
            children: et.questName
          }), et.completed && (0, Iq.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: Vt
          })]
        }), et.lines.map((tt => (0, Iq.jsx)(xm.e, {
          display: tt.display
        }, tt.key)))]
      })
    }

    function gm(tt) {
      let {
        controller: et
      } = tt;
      const {
        t: Vt
      } = (0, cq.H)(), Ot = (0, Rq.h)(Hq, et.getSnapshot()), qt = Aq();
      if (!Ot.enabled) return null;
      const Dt = !Ot.loading && 0 === Ot.conversations.length;
      return (0, Iq.jsx)(oq.c, {
        show: Ot.open,
        close: et.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Iq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: qt,
          onKeyDown: Uq,
          children: [(0, Iq.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Iq.jsxs)("div", {
              children: [(0, Iq.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: Vt("skyblockDialogue:title")
              }), (0, Iq.jsx)("p", {
                children: Vt("skyblockDialogue:intro")
              })]
            }), (0, Iq.jsx)(rq.j, {
              padIgnore: !0,
              onClick: et.dismiss
            })]
          }), (0, Iq.jsxs)("div", {
            className: Cq()("SkyblockDialogueBody", {
              SingleColumn: null !== Ot.questFocus || 0 === Ot.characters.length
            }),
            children: [null === Ot.questFocus && Ot.characters.length > 0 && (0, Iq.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: Ot.characters.map((tt => (0, Iq.jsx)(rq.f, {
                className: Cq()("SkyblockDialogueCharacter", {
                  Selected: tt.selected
                }),
                onClick: () => {
                  et.selectCharacter(tt.id)
                },
                children: (0, Iq.jsx)(Wq.e, {
                  text: tt.styling
                })
              }, tt.id)))
            }), (0, Iq.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== Ot.questFocus && (0, Iq.jsx)(rq.f, {
                className: "SkyblockDialogueBack",
                onClick: et.showCharacters,
                children: Vt("skyblockDialogue:allCharacters")
              }), Ot.loading && (0, Iq.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: Vt("skyblockDialogue:loading")
              }), Dt && (0, Iq.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: Vt(null === Ot.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), Ot.conversations.map((tt => (0, Iq.jsx)(Tm, {
                conversation: tt,
                completedLabel: Ot.completedLabel
              }, tt.questId)))]
            })]
          })]
        })
      })
    }

    function sm(tt) {
      let {
        controller: et
      } = tt;
      const Vt = (0, Rq.h)(fq, et.getSnapshot()),
        {
          t: Ot
        } = (0, cq.H)(),
        qt = Aq();
      return Vt.enabled ? (0, Iq.jsx)(oq.c, {
        show: Vt.open,
        close: et.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Iq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: qt,
          onKeyDown: Uq,
          children: [(0, Iq.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Iq.jsxs)("div", {
              children: [(0, Iq.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: Ot("skyblockGame:autographBook")
              }), (0, Iq.jsx)("p", {
                children: Ot("skyblockGame:autographBookIntro")
              })]
            }), (0, Iq.jsx)(rq.j, {
              padIgnore: !0,
              onClick: et.dismiss
            })]
          }), (0, Iq.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, Iq.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, Iq.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, Iq.jsx)("strong", {
                  children: Vt.total
                }), (0, Iq.jsx)("span", {
                  children: Ot("skyblockGame:autographTotal")
                })]
              }), (0, Iq.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, Iq.jsx)("strong", {
                  children: Vt.rankTotal
                }), (0, Iq.jsx)("span", {
                  children: Ot("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === Vt.entries.length ? (0, Iq.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: Ot("skyblockGame:autographBookEmpty")
            }) : (0, Iq.jsx)("ul", {
              className: "SkyblockAutographList",
              children: Vt.entries.map((tt => (0, Iq.jsxs)("li", {
                className: Cq()("SkyblockAutograph", {
                  Ranked: null !== tt.rank
                }),
                style: null === tt.rank ? void 0 : {
                  color: tt.rank.colour
                },
                children: [null !== tt.rank && (0, Iq.jsx)(fD.b, {
                  className: "SkyblockAutographRankIcon",
                  name: tt.rank.icon,
                  kit: (0, fD.e)(tt.rank.icon)
                }), (0, Iq.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, Iq.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: tt.name
                  }), (0, Iq.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== tt.rank && (0, Iq.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: tt.rank.label
                    }), (0, Iq.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: tt.signedOn
                    })]
                  })]
                })]
              }, tt.key)))
            })]
          })]
        })
      }) : null
    }
    const nm = (0, vt.memo)((function(tt) {
        let {
          controller: et
        } = tt;
        return (0, Iq.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: et.display.mountWaypoint,
          children: [(0, Iq.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, Iq.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, Iq.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, Iq.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, Iq.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, Iq.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      td = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function ed(tt) {
      return "next" === tt.phase ? "\u2192" : td[tt.kind]
    }
    const Vd = (0, vt.memo)((function(tt) {
      let {
        controller: et,
        display: Vt
      } = tt;
      const Ot = (0, Rq.h)(lV, et.getNotificationSnapshot()),
        [qt, Dt] = (0, vt.useState)(!1);
      return (0, Rq.f)("qteStateUpdated", (tt => {
        Dt(tt.isActive)
      })), (0, Iq.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (qt ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [Ot && (0, Iq.jsxs)("div", {
          className: `SkyblockQuestNotification ${Ot.kind} ${Ot.phase}`,
          style: {
            "--quest-notification-duration": `${Ot.durationMs}ms`,
            ...Ot.accent && {
              "--quest-notification-accent": Ot.accent
            }
          },
          children: [(0, Iq.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (Ot.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, Iq.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: ed(Ot)
            }), Ot.iconItem && (0, Iq.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, Iq.jsx)(vq.e, {
                itemName: Ot.iconItem,
                amount: 0
              })
            })]
          }), (0, Iq.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, Iq.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: Ot.title
            }), (0, Iq.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, Iq.jsx)(dD.d, {
                text: Ot.name
              })
            }), Ot.description && (0, Iq.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, Iq.jsx)(dD.d, {
                text: Ot.description
              })
            }), Ot.reward && (0, Iq.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, Iq.jsx)(dD.d, {
                text: Ot.reward
              })
            })]
          })]
        }, Ot.token), (null === Ot || void 0 === Ot ? void 0 : Ot.waypointNameKey) && (0, Iq.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": Ot.waypointNameKey,
          "data-notification-token": Ot.token,
          ref: Vt.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${Ot.token}`)]
      })
    }));

    function Od(tt) {
      const et = parseInt(tt.replace("#", ""), 16);
      return `${et>>16&255}, ${et>>8&255}, ${255&et}`
    }
    const qd = (0, vt.memo)((function(tt) {
      let {
        controller: et
      } = tt;
      const {
        t: Vt
      } = (0, cq.H)(), Ot = (0, Rq.h)(zV, et.getSnapshot());
      if (!Ot) return null;
      const qt = "arrival" === Ot.phase;
      return (0, Iq.jsxs)("div", {
        className: Cq()("SkyblockPortalTransit", {
          Departure: !qt,
          Arrival: qt
        }),
        style: {
          "--portal-rgb": Od(Ot.colour),
          "--portal-duration": `${Ot.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Iq.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, Iq.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            et.finishArrival(Ot.token)
          }
        }), (0, Iq.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, Iq.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !qt && (0, Iq.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: Vt("skyblockGame:portalTransitHeading")
          }), (0, Iq.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: Vt(Ot.zoneNameKey)
          })]
        })]
      }, Ot.token)
    }));

    function Dd() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function md() {
      const tt = document.querySelector(".SkyblockHudCoins"),
        et = null === tt || void 0 === tt ? void 0 : tt.getBoundingClientRect();
      return et && et.width > 0 ? {
        x: et.left + Math.min(et.width, 24) / 2,
        y: et.top + et.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function dd(tt) {
      return {
        x: tt.left + tt.width / 2,
        y: tt.top + tt.height / 2
      }
    }

    function jd() {
      var tt;
      const et = null === (tt = document.querySelector(".HotBar")) || void 0 === tt ? void 0 : tt.getBoundingClientRect();
      return et && et.width > 0 ? dd(et) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function Hd(tt) {
      let {
        items: et,
        origins: Vt,
        target: Ot
      } = tt;
      return (0, Iq.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: et.map(((tt, et) => {
          const qt = Vt[et];
          return (0, Iq.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${qt.x}px`,
              top: `${qt.y}px`,
              "--item-dx": Ot.x - qt.x + "px",
              "--item-dy": Ot.y - qt.y + "px",
              "--item-delay": 2e3 + 160 * et + "ms",
              "--item-flight": "700ms"
            },
            children: (0, Iq.jsx)(vq.e, {
              itemName: tt.dailyRewardItemName,
              amount: 0
            })
          }, tt.dailyRewardItemName)
        }))
      })
    }

    function Xd(tt, et) {
      const Vt = -Math.PI / 2 + 1.25 * (tt / (et - 1) * 2 - 1),
        Ot = 70 + tt % 3 * 22;
      return {
        x: Math.cos(Vt) * Ot,
        y: Math.sin(Vt) * Ot * .7
      }
    }

    function Qd(tt) {
      let {
        origin: et,
        target: Vt,
        count: Ot
      } = tt;
      const qt = [];
      for (let Dt = 0; Dt < Ot; Dt++) {
        const tt = Xd(Dt, Ot);
        qt.push((0, Iq.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${et.x}px`,
            top: `${et.y}px`,
            "--coin-bx": `${tt.x}px`,
            "--coin-by": `${tt.y}px`,
            "--coin-dx": Vt.x - et.x + "px",
            "--coin-dy": Vt.y - et.y + "px",
            "--coin-delay": `${YV(Dt,Ot)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, Iq.jsx)(vq.e, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, Dt))
      }
      return (0, Iq.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: qt
      })
    }

    function ld(tt) {
      let {
        day: et
      } = tt;
      const Vt = Wt[et - 1];
      return (0, Iq.jsxs)(Iq.Fragment, {
        children: [(0, Iq.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Iq.jsx)(vq.e, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, Sq.g)(Vt.dailyRewardCoins)]
        }), Vt.dailyRewardItems.map((tt => (0, Iq.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Iq.jsx)(vq.e, {
            itemName: tt.dailyRewardItemName,
            amount: 0
          }), "\xd7", tt.dailyRewardItemAmount]
        }, tt.dailyRewardItemName)))]
      })
    }

    function Ed(tt) {
      let {
        day: et
      } = tt;
      const Vt = ct(et);
      return (0, Iq.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: Wt.map(((tt, Ot) => {
          const qt = Ot + 1;
          return (0, Iq.jsxs)("li", {
            className: Cq()("SkyblockDailyRewardTile", {
              Claimed: qt < et && qt !== Vt,
              Today: qt === et,
              Tomorrow: qt === Vt,
              Jackpot: qt === St
            }),
            children: [(0, Iq.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: qt
            }), (0, Iq.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, Iq.jsx)(vq.e, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, Sq.g)(tt.dailyRewardCoins)]
            }), tt.dailyRewardItems.map((tt => (0, Iq.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, Iq.jsx)(vq.e, {
                itemName: tt.dailyRewardItemName,
                amount: 0
              }), "\xd7", tt.dailyRewardItemAmount]
            }, tt.dailyRewardItemName)))]
          }, qt)
        }))
      })
    }

    function fd(tt) {
      let {
        view: et
      } = tt;
      const {
        t: Vt
      } = (0, cq.H)(), Ot = (0, vt.useRef)(null), qt = (0, vt.useRef)(null), [Dt, mt] = (0, vt.useState)(null);
      (0, vt.useLayoutEffect)((() => {
        var tt;
        const et = null === (tt = Ot.current) || void 0 === tt ? void 0 : tt.getBoundingClientRect();
        if (et) {
          var Vt, Dt;
          const tt = Array.from(null !== (Vt = null === (Dt = qt.current) || void 0 === Dt ? void 0 : Dt.children) && void 0 !== Vt ? Vt : [], (tt => dd(tt.getBoundingClientRect())));
          mt({
            origin: dd(et),
            target: md(),
            itemOrigins: tt,
            itemTarget: jd()
          })
        }
      }), []);
      const dt = ct(et.day),
        jt = function(tt, et) {
          const [Vt, Ot] = (0, vt.useState)((() => Dd() ? tt : 0));
          return (0, vt.useEffect)((() => {
            if (Dd()) return;
            const Vt = performance.now();
            let qt = 0;
            const Dt = mt => {
              const dt = Math.min(Math.max((mt - Vt) / et, 0), 1);
              Ot(Math.round(tt * (1 - (1 - dt) ** 3))), dt < 1 && (qt = requestAnimationFrame(Dt))
            };
            return qt = requestAnimationFrame(Dt), () => {
              cancelAnimationFrame(qt)
            }
          }), [tt, et]), Vt
        }(et.coins, 450);
      return (0, Iq.jsxs)("div", {
        className: Cq()("SkyblockDailyReward", {
          Jackpot: et.day === St
        }),
        style: {
          "--daily-duration": `${et.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Iq.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, Iq.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, Iq.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, Iq.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: Vt("skyblockGame:dailyRewardTitle")
            }), (0, Iq.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: Vt("skyblockGame:dailyRewardDay", {
                day: String(et.day)
              })
            })]
          }), (0, Iq.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: Ot,
            children: [(0, Iq.jsx)(vq.e, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, Iq.jsxs)("span", {
              children: ["+", (0, Sq.g)(jt)]
            })]
          }), et.items.length > 0 && (0, Iq.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: qt,
            children: et.items.map((tt => (0, Iq.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, Iq.jsx)(vq.e, {
                itemName: tt.dailyRewardItemName,
                amount: 0
              }), "\xd7", tt.dailyRewardItemAmount]
            }, tt.dailyRewardItemName)))
          }), (0, Iq.jsx)(Ed, {
            day: et.day
          }), (0, Iq.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [Vt("skyblockGame:dailyRewardComeBack"), (0, Iq.jsx)(ld, {
              day: dt
            })]
          })]
        }), null !== Dt && (0, Iq.jsx)(Qd, {
          origin: Dt.origin,
          target: Dt.target,
          count: et.flyingCoins
        }), null !== Dt && Dt.itemOrigins.length === et.items.length && (0, Iq.jsx)(Hd, {
          items: et.items,
          origins: Dt.itemOrigins,
          target: Dt.itemTarget
        })]
      })
    }
    const wd = (0, vt.memo)((function(tt) {
        let {
          controller: et
        } = tt;
        const Vt = (0, Rq.h)(UV, et.getSnapshot());
        return Vt ? (0, Iq.jsx)(fd, {
          view: Vt
        }, Vt.token) : null
      })),
      yd = "Gold Coin";

    function Nd(tt) {
      return 650 + 220 * tt
    }

    function Md(tt) {
      return {
        "--letter-delay": `${Nd(tt)}ms`,
        "--letter-land": `${Nd(tt)+300}ms`
      }
    }

    function bd(tt) {
      let {
        letterCount: et
      } = tt;
      return (0, Iq.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, Iq.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Iq.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Iq.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: et
        }, ((tt, et) => (0, Iq.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: Md(et),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, et)))]
      })
    }

    function Jd(tt) {
      var et, Vt, Ot;
      let {
        letter: qt,
        index: Dt
      } = tt;
      const {
        t: mt
      } = (0, cq.H)(), dt = null !== (et = null === (Vt = qt.items[0]) || void 0 === Vt ? void 0 : Vt.itemName) && void 0 !== et ? et : yd;
      return (0, Iq.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: Md(Dt),
        children: [(0, Iq.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, Iq.jsx)(vq.e, {
            itemName: dt,
            amount: 0
          })
        }), (0, Iq.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: mt(qt.reasonKey, null !== (Ot = qt.reasonParams) && void 0 !== Ot ? Ot : void 0)
        }), (0, Iq.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [qt.coins > 0 && (0, Iq.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, Iq.jsx)(vq.e, {
              itemName: yd,
              amount: 0
            }), "+", (0, Sq.g)(qt.coins)]
          }), qt.items.map(((tt, et) => (0, Iq.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, Iq.jsx)(vq.e, {
              itemName: tt.itemName,
              amount: 0
            }), tt.label, " \xd7", tt.amount]
          }, et)))]
        })]
      })
    }

    function Cd(tt) {
      let {
        view: et
      } = tt;
      const {
        t: Vt
      } = (0, cq.H)();
      return (0, Iq.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${et.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${Nd(et.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, Iq.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, Iq.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, Iq.jsx)(bd, {
              letterCount: et.letters.length
            }), (0, Iq.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: Vt("skyblockGame:mailboxTitle")
            })]
          }), (0, Iq.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: et.letters.map(((tt, et) => (0, Iq.jsx)(Jd, {
              letter: tt,
              index: et
            }, et)))
          }), et.more > 0 && (0, Iq.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: Vt("skyblockGame:mailboxMore", {
              count: String(et.more)
            })
          })]
        })
      })
    }
    const ud = (0, vt.memo)((function(tt) {
      let {
        controller: et
      } = tt;
      const Vt = (0, Rq.h)(pV, et.getSnapshot());
      return Vt ? (0, Iq.jsx)(Cd, {
        view: Vt
      }, Vt.token) : null
    }));

    function Kd(tt) {
      let {
        controller: et
      } = tt;
      const {
        t: Vt
      } = (0, cq.H)(), Ot = (0, Rq.h)(zO, et.getSnapshot());
      if (null === Ot) return null;
      const qt = Ot.fullSet ? "empty" === Ot.fuelState ? {
        text: Vt("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: Vt("skyblockGame:magmawardHudFullSet", {
          worn: String(Ot.wornCount)
        }),
        tone: "partial"
      };
      return (0, Iq.jsx)(Kq.g, {
        placement: "statBars",
        children: (0, Iq.jsxs)("div", {
          className: Cq()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${Ot.fuelState}`, {
            "SkyblockMagmawardHud-partial": !Ot.fullSet,
            "SkyblockMagmawardHud-armed": Ot.fullSet && "empty" !== Ot.fuelState
          }),
          children: [null !== Ot.flare && (0, Iq.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${Ot.flare}`
          }, `flare:${Ot.flareToken}`), (0, Iq.jsx)("div", {
            className: Cq()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: Ot.setLit
            }),
            children: Ot.pieces.map(((tt, et) => (0, Iq.jsx)("div", {
              className: Cq()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: tt.worn,
                SkyblockMagmawardPieceJustWorn: tt.justWorn
              }),
              children: (0, Iq.jsx)(vq.e, {
                itemName: tt.itemName,
                amount: 0
              })
            }, `${et}:${tt.wornToken}`)))
          }, `pieces:${Ot.setLitToken}`), (0, Iq.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, Iq.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, Iq.jsxs)("div", {
              className: Cq()("SkyblockMagmawardFuelCounter", Ot.pulse && `SkyblockMagmawardFuelCounter-${Ot.pulse}`),
              children: [(0, Iq.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, Iq.jsx)(vq.e, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, Iq.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: Ot.fuel
              })]
            }, `counter:${Ot.pulseToken}`), "burn" === Ot.pulse && (0, Iq.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${Ot.pulseToken}`)]
          }), qt && (0, Iq.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${qt.tone} SmallTextBold`,
            children: qt.text
          })]
        })
      })
    }

    function hd(tt) {
      let {
        controller: et
      } = tt;
      const {
        t: Vt,
        selectedLanguage: Ot
      } = (0, cq.H)(), qt = (0, Rq.h)(rO, et.getSnapshot());
      return null === qt ? null : (0, Iq.jsx)(Kq.g, {
        placement: "statBars",
        children: (0, Iq.jsxs)("div", {
          className: Cq()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: qt.inRange
          }),
          style: {
            "--glowtide-colour": qt.colour
          },
          "aria-label": Vt("skyblockGame:glowtideChipLabel"),
          children: [(0, Iq.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), qt.inRange ? (0, Iq.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: Vt("skyblockGame:glowtideChipInRange")
          }, `call:${qt.inRangeToken}`) : (0, Iq.jsxs)(Iq.Fragment, {
            children: [(0, Iq.jsx)("div", {
              ref: et.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, Iq.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: Vt("skyblockGame:waypointDistance", {
                distance: ut(qt.distance, Ot.code)
              })
            })]
          })]
        })
      })
    }

    function vd(tt) {
      let {
        controller: et
      } = tt;
      const {
        t: Vt
      } = (0, cq.H)(), Ot = (0, Rq.h)(AO, et.getSnapshot());
      return null === Ot ? null : (0, Iq.jsx)(Kq.g, {
        placement: "statBars",
        children: (0, Iq.jsxs)("div", {
          className: Cq()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: Ot.full
          }),
          "aria-label": Vt("skyblockGame:glowMeterLabel", {
            fill: String(Ot.fill),
            uQ: String(Ot.uQ)
          }),
          children: [Ot.burst && (0, Iq.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${Ot.burstToken}`), (0, Iq.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, Iq.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${Ot.ratio})`
              }
            }), Ot.gained && (0, Iq.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${Ot.gainToken}`), Ot.full && Array.from({
              length: 5
            }, ((tt, et) => (0, Iq.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, et)))]
          }), Ot.full && Ot.rares.map((tt => (0, Iq.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, Iq.jsx)(vq.e, {
              itemName: tt,
              amount: 0
            })
          }, tt))), Ot.ready && (0, Iq.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, Iq.jsx)("span", {
              children: Vt("skyblockGame:glowMeterReady")
            })
          }, `ready:${Ot.fullToken}`)]
        })
      })
    }

    function Wd(tt) {
      let {
        controller: et
      } = tt;
      const {
        t: Vt
      } = (0, cq.H)(), Ot = (0, Rq.h)(YO, et.getSnapshot());
      if (null === Ot) return null;
      const qt = "waiting" === Ot.phase,
        Dt = {
          animationDuration: `${Ot.waitMs}ms`,
          animationDelay: -Ot.elapsedMs + "ms"
        },
        mt = qt ? void 0 : {
          animationDuration: `${Ot.waitMs}ms`
        };
      return (0, Iq.jsxs)("div", {
        className: qt ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [qt && (0, Iq.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((tt, et) => (0, Iq.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, et))), (0, Iq.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: Dt
          }), (0, Iq.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, Iq.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, Iq.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: Dt
            })]
          }), (0, Iq.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, Iq.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: mt,
          children: Vt(Ot.line)
        }, Ot.lineIndex)]
      }, Ot.token)
    }

    function Sd(tt) {
      let {
        chart: et,
        showHere: Vt,
        className: Ot
      } = tt;
      return (0, Iq.jsx)("div", {
        className: Cq()("SkyblockTideChartGrid", Ot, null !== et.pictureName && "Complete"),
        "aria-hidden": "true",
        children: et.cells.map(((tt, Ot) => {
          const qt = 0 !== (et.pulseCells & 1 << Ot),
            Dt = et.castCell === Ot;
          return (0, Iq.jsx)("span", {
            className: Cq()("SkyblockTideChartCell", `Cell-${tt}`, qt && "Pulse", Dt && "Cast", Vt && et.hereCell === Ot && "Here")
          }, `${Ot}:${qt?`p${et.pulseToken}`:""}:${Dt?`c${et.castToken}`:""}`)
        }))
      })
    }

    function cd(tt) {
      let {
        controller: et
      } = tt;
      const Vt = (0, Rq.h)(pO, et.getSnapshot()),
        {
          t: Ot
        } = (0, cq.H)(),
        qt = Vt.chip;
      if (!Vt.enabled || null === qt) return null;
      const Dt = Ot("skyblockGame:tideChartsChipLabel", {
        island: qt.islandName,
        lit: String(qt.lit),
        ink: String(qt.ink)
      });
      return (0, Iq.jsx)(Kq.g, {
        placement: "statBars",
        children: (0, Iq.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: Cq()("SkyblockTideChartsChip", Vt.open && "Open", null !== qt.pictureName && "Complete"),
          "aria-label": Dt,
          title: Dt,
          onMouseDown: tt => {
            tt.preventDefault()
          },
          onClick: et.toggle,
          children: [(0, Iq.jsx)(Sd, {
            chart: qt,
            showHere: !1,
            className: "Mini"
          }), (0, Iq.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [qt.lit, "/", qt.ink]
          })]
        })
      })
    }

    function Rd(tt) {
      let {
        controller: et
      } = tt;
      const Vt = (0, Rq.h)(pO, et.getSnapshot()),
        {
          t: Ot
        } = (0, cq.H)(),
        qt = Aq(),
        Dt = Vt.card;
      return Vt.enabled && null !== Dt ? (0, Iq.jsx)(oq.c, {
        show: Vt.open,
        close: et.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Iq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: qt,
          onKeyDown: Uq,
          children: [(0, Iq.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, Iq.jsxs)("div", {
              children: [(0, Iq.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: Ot("skyblockGame:tideChartsTitle")
              }), (0, Iq.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: Ot("skyblockGame:tideChartsIntro")
              })]
            }), (0, Iq.jsx)(rq.j, {
              padIgnore: !0,
              ariaLabel: Ot("skyblockGame:tideChartsClose"),
              onClick: et.dismiss
            })]
          }), Vt.tabs.length > 1 && (0, Iq.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": Ot("skyblockGame:tideChartsIslands"),
            children: Vt.tabs.map((tt => (0, Iq.jsx)("button", {
              type: "button",
              className: Cq()("SkyblockTideChartsTab", tt.selected && "Selected"),
              "aria-pressed": tt.selected,
              onClick: () => {
                et.il(tt.island)
              },
              children: tt.name
            }, tt.island)))
          }), (0, Iq.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, Iq.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": Dt.gridLabel,
              children: (0, Iq.jsx)(Sd, {
                chart: Dt,
                showHere: !0,
                className: "Large"
              })
            }), (0, Iq.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, Iq.jsx)("h3", {
                children: Dt.islandName
              }), (0, Iq.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: Dt.litText
              }), null === Dt.pictureName ? (0, Iq.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: Ot("skyblockGame:tideChartsPictureHidden")
              }) : (0, Iq.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: Ot("skyblockGame:tideChartsPictureRevealed", {
                  picture: Dt.pictureName
                })
              }, Dt.pictureName), (0, Iq.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, Iq.jsxs)("li", {
                  children: [(0, Iq.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), Ot("skyblockGame:tideChartsLegendLit")]
                }), (0, Iq.jsxs)("li", {
                  children: [(0, Iq.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), Ot("skyblockGame:tideChartsLegendClear")]
                }), null !== Dt.hereCell && (0, Iq.jsxs)("li", {
                  children: [(0, Iq.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), Ot("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, Iq.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, Iq.jsx)("span", {
                  children: Vt.turnsText
                }), (0, Iq.jsx)("span", {
                  children: Vt.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function Id(tt) {
      var et;
      let {
        controller: Vt
      } = tt;
      const {
        selectedLanguage: Ot
      } = (0, cq.H)(), qt = Ot.code;
      (0, vt.useEffect)((() => {
        Vt.setTranslator(((tt, et) => (0, cq.A)(qt, tt, et)), qt, ((tt, et) => (0, cq.t)(qt, tt, et)))
      }), [Vt, qt]);
      const Dt = (0, Rq.h)(lt, Vt.map.getSnapshot()),
        {
          openInGameMenuName: mt
        } = (0, uq.k)(["openInGameMenuName"]);
      return (0, Iq.jsxs)(Iq.Fragment, {
        children: [(0, Iq.jsx)(Vd, {
          controller: Vt.quests,
          display: Vt.navigation.display
        }), Dt.enabled && !mt && (0, Iq.jsx)(qD, {
          controller: Vt.navigation
        }), (0, Iq.jsx)(Pq, {
          controller: Vt,
          minimap: Dt.enabled && (null === (et = Dt.presentation) || void 0 === et ? void 0 : et.minimap) && (0, Iq.jsx)(OD, {
            view: Dt.presentation.minimap,
            navigation: Vt.navigation,
            controller: Vt.map
          }),
          children: (0, Iq.jsx)(ED, {
            controller: Vt.quests,
            surface: "hud"
          })
        }), (0, Iq.jsx)(nm, {
          controller: Vt.navigation
        }), (0, Iq.jsx)(qd, {
          controller: Vt.portalTransit
        }), (0, Iq.jsx)(wd, {
          controller: Vt.dailyReward
        }), (0, Iq.jsx)(ud, {
          controller: Vt.mailbox
        }), (0, Iq.jsx)(Kd, {
          controller: Vt.magmaward
        }), (0, Iq.jsx)(hd, {
          controller: Vt.glowtide
        }), (0, Iq.jsx)(Em, {
          controller: Vt.passage
        }), (0, Iq.jsx)(cd, {
          controller: Vt.tideCharts
        }), (0, Iq.jsx)(vd, {
          controller: Vt.glowMeter
        }), (0, Iq.jsx)(Km, {
          controller: Vt.reachLog
        }), (0, Iq.jsx)(Wd, {
          controller: Vt.hushWait
        }), (0, Iq.jsx)(bm, {
          controller: Vt.lampLight
        }), (0, Iq.jsx)(DD, {
          controller: Vt.skills,
          surface: "hud"
        })]
      })
    }

    function Pd(tt) {
      let {
        controller: et
      } = tt;
      return (0, Iq.jsxs)(Iq.Fragment, {
        children: [(0, Iq.jsx)(VD, {
          controller: et.map,
          navigation: et.navigation
        }), (0, Iq.jsx)(DD, {
          controller: et.skills,
          surface: "menu"
        }), (0, Iq.jsx)(ED, {
          controller: et.quests,
          surface: "menu"
        }), (0, Iq.jsx)(pD, {
          controller: et.dungeons
        }), (0, Iq.jsx)(gD, {
          controller: et.collections
        }), (0, Iq.jsx)(tm, {
          controller: et.questGraph
        }), (0, Iq.jsx)(Dm, {
          controller: et.forge
        }), (0, Iq.jsx)(Qm, {
          controller: et.smuggler
        }), (0, Iq.jsx)(Cm, {
          controller: et.keepersChair,
          lampLight: et.lampLight
        }), (0, Iq.jsx)(pm, {
          controller: et.reachLog,
          regulars: et.regulars,
          hiddenWaters: et.hiddenWaters
        }), (0, Iq.jsx)(cm, {
          controller: et.regulars
        }), (0, Iq.jsx)(wm, {
          controller: et.passage
        }), (0, Iq.jsx)(Rd, {
          controller: et.tideCharts
        }), (0, Iq.jsx)(gm, {
          controller: et.dialogue
        }), (0, Iq.jsx)(sm, {
          controller: et.autographs
        })]
      })
    }
    var Zd = Vt(36996);
    const Ld = VO + HO;

    function Fd(tt, et, Vt, Ot, qt) {
      const Dt = [],
        mt = [],
        dt = Vt => {
          const Ot = tt.playSound(et, Vt.sound, Vt.volume, Vt.rate);
          Ot && (mt.push(Ot), void 0 !== Vt.cutAfter && Dt.push(setTimeout((() => {
            Ot.fade(Ot.getVolume(), 0, 300)
          }), Vt.cutAfter)))
        };
      for (const jt of function(tt, et) {
          const Vt = [{
            sound: "rpgKnifeSlice1",
            beat: VO,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: VO,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: VO,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: VO,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: VO,
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
            sound: (0, Zd.g)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: Ld + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, Zd.g)("bigDrumSwish"),
            beat: Ld + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: Ld + 60,
            lead: 180,
            volume: .5 + .06 * tt,
            rate: .82 + .07 * tt
          }];
          return tt >= 4 && Vt.push({
            sound: "exp_levelup",
            beat: Ld + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), et && Vt.push({
            sound: "trumpetFlare",
            beat: Ld + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), Vt.push({
            sound: "harp_pling",
            beat: OO,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), Vt
        }(Vt, Ot)) qt ? Dt.push(setTimeout((() => {
        dt(jt)
      }), Math.max(0, jt.beat - jt.lead / jt.rate))) : jt.beat !== VO && "magicAccent2" !== jt.sound && "trumpetFlare" !== jt.sound || dt(jt);
      return () => {
        for (const tt of Dt) clearTimeout(tt);
        for (const tt of mt) tt.fade(tt.getVolume(), 0, 120)
      }
    }
    class kd {
      constructor(tt) {
        this.deps = tt, this.pending = new Map, this.localHook = null
      }
      hookWaiting(tt, et) {
        this.pending.delete(tt);
        const Vt = this.deps.now();
        if (null === et) {
          var Ot;
          if ((null === (Ot = this.localHook) || void 0 === Ot ? void 0 : Ot.hookId) === tt) {
            const tt = Vt >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(tt)
          }
          return
        }
        const qt = Vt + et;
        this.settle(tt, qt) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(tt, {
          untilMs: Vt + 1e3,
          biteAtMs: qt
        }))
      }
      getLocalHook() {
        var tt, et;
        return null !== (tt = null === (et = this.localHook) || void 0 === et ? void 0 : et.hookId) && void 0 !== tt ? tt : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const tt = this.deps.now();
        for (const [et, {
            untilMs: Vt,
            biteAtMs: Ot
          }] of this.pending)(this.settle(et, Ot) || tt > Vt) && this.pending.delete(et)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(tt, et) {
        const Vt = this.deps.getLineOwner(tt);
        if (null === Vt) return !1;
        if (!this.deps.isLocalPlayer(Vt)) return !0;
        if (this.localHook = {
            hookId: tt,
            biteAtMs: et
          }, !this.deps.isHushWaiting()) {
          const [et, Vt] = this.deps.getHookPosition(tt);
          this.deps.onCastLanded(et, Vt)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var Gd = Vt(4339);
    const zd = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      od = {
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
    class rd {
      constructor(tt) {
        this.deps = tt, this.tell = null
      }
      receiveTell(tt) {
        let {
          biteTellTier: et
        } = tt;
        this.tell = {
          tier: et,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(tt) {
        const et = this.tell;
        if (this.tell = null, !tt) return;
        const Vt = null !== et && this.deps.now() - et.atMs <= 3e3 ? et.tier : 0;
        this.deps.vibrate(zd[Vt])
      }
      burstAtHook() {
        const tt = this.tell,
          et = this.deps.getLocalHookPosition();
        null === tt || tt.burst || null === et || (tt.burst = !0, this.deps.playParticles(function(tt, et) {
          let [Vt, Ot, qt] = et;
          const {
            count: Dt,
            rise: mt,
            colour: dt
          } = od[tt], [jt, Ht, Xt] = dt;
          return {
            texture: "glint",
            pos1: [Vt - .3, Ot, qt - .3],
            pos2: [Vt + .3, Ot + .2, qt + .3],
            dir1: [-.6, mt, -.6],
            dir2: [.6, 1.4 * mt, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: Dt,
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
              minColor: [jt, Ht, Xt, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [jt, Ht, Xt, 0],
              maxColor: [jt, Ht, Xt, 0]
            }],
            blendMode: Gd.f.Add,
            hideDist: 48
          }
        }(tt.tier, et)))
      }
    }
    var Ud = Vt(1338),
      Ad = Vt(2026),
      Yd = Vt(39);

    function Bd(tt, et) {
      return [{
        timeFraction: 0,
        minColor: [255 * tt[0], 255 * tt[1], 255 * tt[2], 1],
        maxColor: [255 * et[0], 255 * et[1], 255 * et[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const pd = [0, 0, 0],
      xd = {
        texture: "glint",
        mipmaps: !1,
        uQ: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: pd,
        dir2: pd,
        blendMode: Gd.f.OneOne
      },
      Td = {
        ...xd,
        colorGradients: Bd([1, .88, .38], [1, .65, .15])
      },
      gd = {
        ...xd,
        colorGradients: Bd([.55, .95, 1], [.9, 1, 1])
      },
      sd = [.5, .5, .5],
      nd = {
        texture: "glint",
        mipmaps: !1,
        uQ: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: Bd([1, .12, .12], [1, .35, .2]),
        blendMode: Gd.f.OneOne
      };
    class tj {
      constructor() {
        this.drops = new Map
      }
      Qf(tt, et) {
        if ("overflowFlash" === et.kind) {
          const [Vt, Ot, qt] = et.position, Dt = tt.createParticles(nd, {
            pos: [Vt, Ot, qt],
            half: sd
          });
          return Dt.emit(18), void Dt.stop()
        }
        this.drops.has(et.itemId) || this.drops.set(et.itemId, {
          owner: et.owner,
          cosmetic: et.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      BQ(tt) {
        if (0 === this.drops.size) return;
        const et = performance.now(),
          Vt = tt.getCameraPosition();
        let Ot = 0;
        for (const Dt of this.drops.values()) null !== Dt.particles && Ot++;
        for (const [Dt, mt] of this.drops) {
          const dt = tt.getPositionView(Dt);
          if (null === dt) {
            var qt;
            if (mt.seen || et - mt.markedAt > 5e3) null !== mt.particles && Ot--, null === (qt = mt.particles) || void 0 === qt || qt.stop(), this.drops.delete(Dt);
            continue
          }
          mt.cosmetic || !tt.isLocalPlayer(mt.owner) || mt.pickupDelayCleared || (tt.clearPickupDelay(Dt), mt.pickupDelayCleared = !0);
          const jt = mt.lastPosition,
            Ht = mt.seen && (dt[0] - jt[0]) ** 2 + (dt[1] - jt[1]) ** 2 + (dt[2] - jt[2]) ** 2 > 4e-4,
            Xt = (dt[0] - Vt[0]) ** 2 + (dt[1] - Vt[1]) ** 2 + (dt[2] - Vt[2]) ** 2 < 2025;
          mt.seen = !0, jt[0] = dt[0], jt[1] = dt[1], jt[2] = dt[2], Ht && (mt.lastMovingAt = et), null !== mt.particles && (!Xt || et - mt.lastMovingAt > 500) && (mt.particles.stop(), mt.particles = null, Ot--), Ht && Xt && null === mt.particles && Ot < 32 && (mt.particles = tt.createParticles(mt.cosmetic ? gd : Td, {
            pos: dt
          }), Ot++), null !== mt.particles && (mt.particles.moveTo(dt), mt.particles.setEmitRate(Ht ? 12 : 0)), !Ht && null === mt.particles && et - Math.max(mt.lastMovingAt, mt.markedAt) > 2e3 && this.drops.delete(Dt)
        }
      }
      dispose() {
        for (const et of this.drops.values()) {
          var tt;
          null === (tt = et.particles) || void 0 === tt || tt.stop()
        }
        this.drops.clear()
      }
    }
    var ej = Vt(229);
    const Vj = ej.e.Yy * ej.e.playerEyeToHeightRatio;
    class Oj {
      constructor(tt) {
        this.host = tt, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      Qf(tt) {
        this.lava = tt, this.nextUpdateAt = 0
      }
      BQ() {
        var tt;
        const et = this.host.now();
        if (et < this.nextUpdateAt) return;
        this.nextUpdateAt = et + 250;
        const Vt = this.host.playerPosition(),
          Ot = Vt && this.findNearest([Vt[0], Vt[1] + Vj, Vt[2]]);
        if (!Ot || Ot.distance >= 40) return void this.stop();
        const qt = .5 * Math.min(1, (40 - Ot.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(qt) : this.loop = this.host.play("lavaFlow", qt, Ot.position, 40 + Vj, 9, !0), null === (tt = this.loop) || void 0 === tt || tt.setPosition(Ot.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var tt;
        null === (tt = this.loop) || void 0 === tt || tt.stop(), this.loop = null
      }
      findNearest(tt) {
        let et = -1,
          Vt = 1 / 0;
        for (let Ot = 0; Ot < this.lava.length; Ot += 3) {
          const qt = this.lava[Ot] - tt[0],
            Dt = this.lava[Ot + 1] - tt[1],
            mt = this.lava[Ot + 2] - tt[2],
            dt = qt * qt + Dt * Dt + mt * mt;
          dt < Vt && (Vt = dt, et = Ot)
        }
        return et < 0 ? null : {
          position: [this.lava[et], this.lava[et + 1], this.lava[et + 2]],
          distance: Math.sqrt(Vt)
        }
      }
    }
    var qj = Vt(2014),
      Dj = Vt(38860);
    const mj = {
      "Grey Portal": "Gray"
    };
    for (const lj of qt.Nc) mj[`${lj} Portal`] = lj;
    const dj = Object.keys(mj),
      jj = Object.fromEntries(dj.map((tt => [tt, (0, qt.cb)(qt.P[`${(0,qt.Pe)(mj[tt])}Team`])])));
    Object.fromEntries(dj.map((tt => [tt, qt.P[`${(0,qt.Pe)(mj[tt])}UiText`]])));
    class Hj {
      constructor(tt, et) {
        this.presentation = tt, this.portal = et, this.unlocked = void 0
      }
      Qf(tt) {
        const et = !1 === this.unlocked && tt;
        this.unlocked = tt, this.BQ();
        const {
          min: Vt,
          max: Ot,
          unlockedBlock: qt
        } = this.portal;
        if (et && this.presentation.hasChunk(...Vt)) {
          const [tt, et, Dt] = jj[qt];
          this.presentation.playParticles({
            pos1: [...Vt],
            pos2: Ot.map((tt => tt + 1)),
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
              minColor: [tt, et, Dt, 1],
              maxColor: [Math.min(255, tt + 55), Math.min(255, et + 55), Math.min(255, Dt + 90), 1]
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
      BQ() {
        var tt;
        const et = this.unlocked ? this.portal.unlockedBlock : null !== (tt = this.portal.lockedBlock) && void 0 !== tt ? tt : "Light Gray Portal",
          {
            min: Vt,
            max: Ot
          } = this.portal;
        for (let qt = Vt[0]; qt <= Ot[0]; qt++)
          for (let tt = Vt[1]; tt <= Ot[1]; tt++)
            for (let Dt = Vt[2]; Dt <= Ot[2]; Dt++) this.presentation.hasChunk(qt, tt, Dt) && this.presentation.XM(qt, tt, Dt) !== et && this.presentation.fR(qt, tt, Dt, et)
      }
    }
    const Xj = {
        farming_1: {
          raises: tt => "NPC" === tt.type && "chef" === tt.variation,
          rise: .4
        },
        fishing_1: {
          raises: tt => "Draugr Warper" === tt.type,
          rise: .4
        }
      },
      Qj = (tt, et, Vt, Dt) => {
        let {
          localPlayerId: mt
        } = Dt;
        const dt = new bq({
          translate: (tt, et) => (0, cq.A)(Ud.e.get().getCurrentLanguageCode(), tt, et),
          translateWithIcons: (tt, et) => (0, cq.t)(Ud.e.get().getCurrentLanguageCode(), tt, et),
          setMenuOpen: tt => {
            tt ? (0, pt.m)() : (0, pt.c)()
          },
          dismissMenu: pt.g,
          publishSkills: tt => {
            xt.j.sw(dV, tt, !0)
          },
          publishQuests: tt => {
            xt.j.sw(QV, tt, !0)
          },
          publishQuestNotification: tt => {
            xt.j.sw(lV, tt, !0)
          },
          publishDungeons: tt => {
            xt.j.sw(wV, tt, !0)
          },
          publishCollections: tt => {
            xt.j.sw(kV, tt, !0)
          },
          publishMap: tt => {
            xt.j.sw(lt, tt, !0)
          },
          publishHud: tt => {
            xt.j.sw(Nq, tt, !0)
          },
          publishPortalTransit: tt => {
            xt.j.sw(zV, tt, !0)
          },
          isLoadingScreenUp: () => uq.b.get("loadingOverlayVisible"),
          publishDailyReward: tt => {
            xt.j.sw(UV, tt, !0)
          },
          publishMailbox: tt => {
            xt.j.sw(pV, tt, !0)
          },
          publishQuestGraph: tt => {
            xt.j.sw(TV, tt, !0)
          },
          publishForge: tt => {
            xt.j.sw(yO, tt, !0)
          },
          publishSmuggler: tt => {
            xt.j.sw(MO, tt, !0)
          },
          publishKeepersChair: tt => {
            xt.j.sw(SO, tt, !0)
          },
          publishReachLog: tt => {
            xt.j.sw(RO, tt, !0)
          },
          publishLampLight: tt => {
            xt.j.sw(kO, tt, !0)
          },
          publishMagmaward: tt => {
            xt.j.sw(zO, tt, !0)
          },
          publishGlowtide: tt => {
            xt.j.sw(rO, tt, !0)
          },
          publishGlowMeter: tt => {
            xt.j.sw(AO, tt, !0)
          },
          publishHushWait: tt => {
            xt.j.sw(YO, tt, !0)
          },
          publishPassage: tt => {
            xt.j.sw(CO, tt, !0)
          },
          publishTideCharts: tt => {
            xt.j.sw(pO, tt, !0)
          },
          publishRegulars: tt => {
            xt.j.sw(Vq, tt, !0)
          },
          publishHiddenWaters: tt => {
            xt.j.sw(dq, tt, !0)
          },
          publishDialogue: tt => {
            xt.j.sw(Hq, tt, !0)
          },
          publishAutographs: tt => {
            xt.j.sw(fq, tt, !0)
          },
          onDailyRewardStarted: tt => {
            Pt.playSound(mt, tt.day === St ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (tt, et) => {
            Pt.playSound(mt, "exp_collect", .35, 1 + .6 * tt / (et - 1)), xt.j.sw(AV, tt === et - 1)
          },
          onDailyRewardItemLanded: tt => {
            Pt.playSound(mt, "pickUp", .6, 1 + .15 * tt)
          },
          onMailboxStarted: () => {
            Pt.playSound(mt, "rpgMetalClick", .6, 1), Pt.playSound(mt, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            Pt.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: Yd.h,
          requestTracking: tt => {
            Pt.sendCommand(`quests track ${tt}`)
          },
          requestDungeonEnter: (tt, et) => {
            Pt.sendCommand(`dungeonEnter ${tt} ${et}`)
          },
          requestQuestJump: tt => {
            Pt.sendCommand(`${Lt} jump ${tt}`)
          },
          requestQuestArrive: (tt, et) => {
            const Vt = `${Lt} arrive ${tt}`;
            Pt.sendCommand(et ? `${Vt} complete` : Vt)
          },
          requestForge: tt => {
            let {
              blade: et,
              guard: Vt,
              handle: Ot
            } = tt;
            Pt.sendCommand(`forge ${et} ${Vt} ${Ot}`)
          },
          requestDialogue: () => {
            Pt.sendCommand("quests dialogue")
          },
          requestSmuggle: (tt, et) => {
            Pt.sendCommand(`smuggle ${tt} ${et}`)
          },
          requestKeepersChairAim: tt => {
            Pt.sendCommand(`keeperschair-aim ${tt}`)
          },
          requestReachLogOpen: () => {
            Pt.sendCommand("reachlog-open")
          },
          requestLampLight: tt => {
            Pt.sendCommand(`${tt}`)
          },
          requestTravel: tt => {
            Pt.sendCommand(`map travel ${tt.kind} ${tt.id} ${tt.requestId}`)
          }
        });
        let jt, Ht, Xt, Qt, Et, ft, wt, Jt, Ct, ut, Kt, Wt, ct;
        const It = new tj;
        let Pt, Zt = null;
        const Ft = Xj[null !== Vt && void 0 !== Vt ? Vt : ""],
          ot = (tt, et) => {
            null !== Ft && void 0 !== Ft && Ft.raises(et) && Pt.setNametagOffset(tt, Ft.rise)
          },
          At = new rd({
            getLocalHookPosition: () => {
              const tt = it.getLocalHook();
              return null !== tt && Pt.checkValid(tt) ? Pt.YM(tt) : null
            },
            playParticles: tt => {
              Pt.playParticleEffect(tt)
            },
            vibrate: tt => {
              Tt.d.play("fishBite", tt)
            },
            now: () => performance.now()
          }),
          it = new kd({
            getLineOwner: tt => Pt.checkValid(tt) ? Pt.getLineOwner(tt) : null,
            isLocalPlayer: tt => Pt.isLocalPlayer(tt),
            getHookPosition: tt => {
              const [et, , Vt] = Pt.YM(tt);
              return [et, Vt]
            },
            isHushWaiting: () => {
              var tt;
              return "waiting" === (null === (tt = dt.hushWait.getSnapshot()) || void 0 === tt ? void 0 : tt.phase)
            },
            onCastLanded: (tt, et) => {
              dt.tideCharts.castLanded(tt, et)
            },
            onLocalHookSettled: () => {
              At.onLocalHookSettled()
            },
            onLocalWaitEnded: tt => {
              At.onLocalWaitEnded(tt)
            },
            now: () => performance.now()
          }),
          gt = new Oj({
            now: () => performance.now(),
            playerPosition: () => Pt.checkValid(mt) ? Pt.YM(mt) : null,
            play: (tt, et, Vt, Ot, qt, Dt) => Pt.playSound(mt, tt, et, 1, {
              qt: Vt,
              maxHearDist: Ot,
              refDistance: qt
            }, Dt)
          }),
          st = new Map;
        let nt;
        return {
          onCreate: tt => {
            if (Pt = tt, Zt = new Dj.SkyblockEntityFacing(tt, Ft ? ot : null), dt.portalTransit.resumeArrival(null !== Vt && void 0 !== Vt ? Vt : null), (null !== Vt && void 0 !== Vt ? Vt : Ot) === Ot) {
              let tt = -1 / 0;
              nt = xt.j.subscribe("toggleMenu", (et => {
                const Vt = performance.now();
                "inventory|Workbench" !== et || "cross_to_hub" !== dt.quests.getTrackedQuestId() || Vt - tt < 1e4 || (tt = Vt, Pt.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [Ot, qt] of Object.entries(null !== (et = kt[null !== Vt && void 0 !== Vt ? Vt : ""]) && void 0 !== et ? et : {})) {
              var et;
              st.set(Ot, new Hj({
                hasChunk: (et, Vt, Ot) => tt.isBlockInLoadedChunk(et, Vt, Ot),
                XM: (et, Vt, Ot) => tt.blockIdToBlockName(tt.getBlockId(et, Vt, Ot)),
                fR: (et, Vt, Ot, qt) => {
                  tt.fR(et, Vt, Ot, qt)
                },
                playParticles: et => {
                  tt.playParticleEffect(et)
                }
              }, qt))
            }
            ct = (0, qj.e)((tt => function(tt) {
              return Object.hasOwn(Ye, tt) || tt.startsWith("npc_")
            }(tt) ? pe(tt) : null)), dt.resolveItemName = (et, Vt) => {
              const Ot = tt.getItemStat(mt, et, "displayName");
              return Ot && "object" === typeof Ot && "translationKey" in Ot ? Vt(Ot.translationKey, (0, cq.p)(Ot.params, Ad.d.shown)) : "string" === typeof Ot ? Vt(Ot) : et
            }, dt.quests.notifications.onShown = tt => {
              "quest" === tt ? Pt.playSound(mt, "magicAccent1", 1, 1) : "skillLevel" === tt ? Pt.playSound(mt, "magicAccent1", 1, .6) : "landmark" === tt ? Pt.playSound(mt, "trumpetFlare", 1, .6) : "npcNote" === tt ? Pt.playSound(mt, "magicAccent2", .8, 1.1) : "started" === tt ? Pt.playSound(mt, (0, Zd.g)("bigDrumSwish"), 1, 1) : Pt.playSound(mt, (0, Zd.g)("rpgHandleSmallLeather"), 1, 1)
            }, dt.forge.onPartSelected = () => {
              Pt.playSound(mt, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, dt.forge.onOpened = () => {
              ! function(tt) {
                tt.preloadSounds([(0, Zd.g)("firecracker"), "fireBurn", "magicAccent2"])
              }(tt)
            }, dt.forge.onForgeStarted = (et, Vt, Ot) => Fd(tt, mt, et, Vt, Ot), dt.smuggler.onBought = () => {
              Pt.playSound(mt, (0, Zd.g)("rpgHandleSmallLeather"), 1, 1), Pt.playSound(mt, "chestOpen", .6, 1)
            }, dt.compass.register(new yt(dt.map, !0)), dt.compass.register(new yt(dt.map, !1)), dt.compass.register(new Mt(dt.map)), dt.compass.register(new bt((() => dt.quests.getSnapshot().compassTarget)));
            for (const Vt of ["enemy", "npc"]) dt.compass.register(new Nt(dt.map, Vt, (et => tt.checkValid(et) ? tt.YM(et) : void 0), (et => tt.isAlive(et))))
          },
          onAfterRender: (tt, et) => {
            const Vt = Pt.checkValid(mt) ? Pt.YM(mt) : null;
            dt.navigation.afterRender(Vt, performance.now(), et), dt.glowtide.afterRender(Vt, et.cameraHeading), dt.tideCharts.afterRender(Vt), it.afterRender()
          },
          onClose: () => {
            var tt, et, Vt, Ot, qt, Dt, mt, lt, ft, yt, Nt, Mt, bt, ht, vt;
            nt && xt.j.unsubscribe(nt), null === (tt = ct) || void 0 === tt || tt(), It.dispose(), gt.dispose(), null === (et = Zt) || void 0 === et || et.dispose(), it.dispose(), dt.dispose(), null === (Vt = jt) || void 0 === Vt || Vt(), null === (Ot = Ht) || void 0 === Ot || Ot(), null === (qt = Xt) || void 0 === qt || qt(), null === (Dt = Qt) || void 0 === Dt || Dt(), null === (mt = Et) || void 0 === mt || mt(), null === (lt = wt) || void 0 === lt || lt(), null === (ft = undefined) || void 0 === ft || ft(), null === (yt = Jt) || void 0 === yt || yt(), null === (Nt = Ct) || void 0 === Nt || Nt(), null === (Mt = ut) || void 0 === Mt || Mt(), null === (bt = Kt) || void 0 === bt || bt(), null === (ht = undefined) || void 0 === ht || ht(), null === (vt = Wt) || void 0 === vt || vt()
          },
          onPlayerChangeBlock: (tt, et, Ot, Dt, jt, Ht) => {
            if (tt === mt && "Air" === Ht) {
              const tt = Pt.getClientOption(mt, "creative");
              dt.skills.predictBlock([et, Ot, Dt], jt, tt);
              const Ht = function(tt, et) {
                  if ("hub" === et || "farming_1" === et || "mining_1" === et) return !rt.has(tt) || "hub" !== et && "mining_1" !== et ? Object.hasOwn(zt, tt) ? zt[tt] : void 0 : Gt
                }(jt, Vt),
                Xt = ("hub" === Vt || "mining_1" === Vt) && (qt.Ad.some((tt => tt === jt)) || Object.hasOwn(Ut, jt) || "mining_1" === Vt && "Block of Coal" === jt);
              tt || void 0 === Ht && !Xt || Pt.fR(et, Ot, Dt, null !== Ht && void 0 !== Ht ? Ht : Gt)
            }
          },
          onPlayerAttackEntity: (tt, et) => {
            if (tt !== mt || "Player" !== Pt.getEntityType(et)) return;
            const [Vt, Ot, qt] = Pt.YM(et);
            Pt.burstParticlePreset("critical", [Vt, Ot + 1, qt], 10)
          },
          onChangeBlockFail: tt => {
            for (const {
                bt: et
              }
              of tt) dt.skills.rejectBlock(et)
          },
          onReceivedMessageFromServer: (tt, et) => {
            if ("skyblockGatedPortal" === tt) {
              var Vt;
              const [tt, Ot] = et;
              return void(null === (Vt = st.get(tt)) || void 0 === Vt || Vt.Qf(Ot))
            }
            if ("skyblockDailyReward" === tt) return void dt.dailyReward.Qf(et);
            if ("skyblockMailbox" === tt) return void dt.mailbox.Qf(et);
            if ("skyblockPortalTransit" === tt) return void dt.portalTransit.Qf(et);
            if ("skyblockLoot" === tt) return void It.Qf(Pt, et);
            if ("skyblockLava" === tt) return void gt.Qf(et);
            if ("skyblockForge" === tt) return void dt.forge.Qf(et);
            if ("skyblockMagmaward" === tt) return void dt.magmaward.Qf(et);
            if ("skyblockGlowtide" === tt) return void dt.glowtide.Qf(et);
            if ("skyblockGlowMeter" === tt) return void dt.glowMeter.Qf(et);
            if ("skyblockHushWait" === tt) return void dt.hushWait.Qf(et);
            if ("skyblockPassage" === tt) {
              const tt = et;
              return dt.passage.Qf(tt), dt.reachLog.receivePassagePhase(tt.passagePhase), ut ??= (0, ht.y)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: dt.passage.show
              }), void dt.keepersChair.receivePassage({
                keepersChairPassagePhase: tt.passagePhase,
                keepersChairPassageNextPhase: tt.passageNextPhase,
                keepersChairPassageTurnsInMs: tt.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === tt) {
              const tt = et;
              return dt.tideCharts.Qf(tt), void(tt.tideCharts.length > 0 && (Kt ??= (0, ht.y)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: dt.tideCharts.show
              })))
            }
            if (tt === Yt.F) {
              var Ot;
              const {
                hookId: tt,
                waiting: Vt
              } = et;
              return void it.hookWaiting(tt, null !== (Ot = null === Vt || void 0 === Vt ? void 0 : Vt.remainingMs) && void 0 !== Ot ? Ot : null)
            }
            if ("skyblockBiteTell" === tt) return void At.receiveTell(et);
            if ("skyblockSmuggler" === tt) return void dt.smuggler.Qf(et);
            if ("skyblockKeepersChair" === tt) return dt.keepersChair.Qf(et), void dt.lampLight.setAtChair(dt.keepersChair.isAtChair());
            if ("skyblockLampLight" === tt) {
              const tt = et;
              var qt;
              if (dt.lampLight.Qf(tt), tt.lampLightReleasing) Ct ??= (0, ht.y)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  dt.lampLight.setRelease(!1)
                }
              });
              else null === (qt = Ct) || void 0 === qt || qt(), Ct = void 0;
              return
            }
            if ("skyblockRegulars" === tt) return void dt.regulars.Qf(et);
            if ("skyblockHiddenWaters" === tt) return void dt.hiddenWaters.Qf(et);
            if ("skyblockReachLog" === tt) return dt.reachLog.Qf(et), void(Jt ??= (0, ht.y)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: PO
              },
              onClick: dt.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === tt) {
              for (const [tt, Vt, Ot, qt] of et) Pt.fR(tt, Vt, Ot, qt);
              return
            }
            if ("skyblockHud" === tt) dt.receiveHud(et);
            else if ("skyblockMap" === tt) dt.map.Qf(et);
            else if (tt === Bt.i) dt.skills.Qf(et);
            else if (tt === Rt && "dialogue" === et.kind) dt.dialogue.Qf(et);
            else if (tt === Rt) dt.quests.Qf(et);
            else if ("skyblockDungeons" === tt) dt.dungeons.Qf(et);
            else if ("sbCollections" === tt) dt.collections.Qf(et);
            else if ("skyblockQuestGraph" === tt) dt.questGraph.Qf(et);
            else {
              if ("skyblockAutographs" !== tt) return;
              dt.autographs.Qf(et)
            }
            if (!Ht && dt.map.getSnapshot().enabled) {
              const tt = (0, ht.y)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: dt.map.show
                }),
                et = (0, pt.o)(dt.map.show);
              Ht = () => {
                tt(), et()
              }
            }!Xt && dt.skills.getSnapshot().enabled && (Xt = (0, ht.y)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: dt.skills.show
            })), !wt && dt.collections.getSnapshot().enabled && (wt = (0, ht.y)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: dt.collections.show
            })), !Qt && dt.quests.getSnapshot().enabled && (Qt = (0, ht.y)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: dt.quests.show
            })), !Wt && dt.autographs.getSnapshot().enabled && (Wt = (0, ht.y)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: dt.autographs.show
            }));
            const Dt = dt.dungeons.getSnapshot().enabled;
            var mt;
            (Xt || Qt || Dt) && ft !== Dt && (ft = Dt, null === (mt = Et) || void 0 === mt || mt(), Et = (0, ht.y)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: Le
              },
              disabled: !Dt,
              panel: !0,
              onClick: dt.dungeons.show
            }));
            jt || (jt = (0, pt.q)((0, vt.createElement)(Id, {
              controller: dt
            }), {
              content: (0, vt.createElement)(Pd, {
                controller: dt
              }),
              onClose: dt.close
            }))
          },
          BQ: () => {
            var tt;
            for (const et of st.values()) et.BQ();
            It.BQ(Pt), gt.BQ(), null === (tt = Zt) || void 0 === tt || tt.BQ(), dt.skills.BQ(), dt.quests.BQ(), dt.dailyReward.BQ(), dt.mailbox.BQ(), dt.map.BQ()
          }
        }
      }
  },
  36593: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt,
      i: () => Ot
    });
    const Ot = "skyblockSkills",
      qt = "skills_test_gym"
  },
  34406: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => qt,
      g: () => mt
    });
    const Ot = [{
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

    function qt(tt) {
      let et, Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof tt) {
        if (!Number.isFinite(tt)) return "0";
        if (Math.abs(tt) < 100) {
          const et = tt < 0 ? "-" : "",
            Vt = Math.abs(tt);
          return Vt >= 10 ? `${et}${Vt.toFixed(1).replace(/\.0$/,"")}` : `${et}${Vt.toFixed(2).replace(/\.?0+$/,"")}`
        }
        et = BigInt(Math.floor(tt))
      } else et = tt;
      const qt = et < 0n ? -et : et,
        Dt = et < 0n ? "-" : "",
        mt = qt.toString();
      if (mt.length <= Vt) return `${Dt}${mt}`;
      const dt = 3 * Math.floor((mt.length - 1) / 3);
      if (dt < 3) return `${Dt}${mt}`;
      if (dt > 3 * Ot.length) {
        const tt = mt[0],
          et = mt.slice(1, 3).replace(/0+$/, "");
        return `${Dt}${et?`${tt}.${et}`:tt}e${mt.length-1}`
      }
      const {
        threshold: jt,
        suffix: Ht
      } = Ot[Ot.length - dt / 3], Xt = qt / jt, Qt = Number(1000n * (qt % jt) / jt), lt = Number(Xt) + Qt / 1e3;
      let Et;
      return Et = lt >= 100 ? Math.floor(lt).toString() : lt >= 10 ? lt.toFixed(1).replace(/\.0$/, "") : lt.toFixed(2).replace(/\.?0+$/, ""), `${Dt}${Et}${Ht}`
    }
    const Dt = Ot.map((tt => {
      let {
        threshold: et,
        suffix: Vt
      } = tt;
      return {
        threshold: Number(et),
        suffix: Vt
      }
    })).filter((tt => {
      let {
        threshold: et
      } = tt;
      return Number.isFinite(et)
    }));

    function mt(tt) {
      const et = Math.abs(tt),
        Vt = tt < 0 ? "-" : "";
      for (const {
          threshold: Ot,
          suffix: qt
        }
        of Dt)
        if (et >= Ot) {
          const tt = et / Ot;
          if (tt >= 1e3) return `${Vt}${et.toExponential(2).replace("e+","e")}`;
          let Dt;
          return Dt = tt >= 100 ? Math.floor(tt).toString() : tt >= 10 ? tt.toFixed(1).replace(/\.0$/, "") : tt.toFixed(2).replace(/\.?0+$/, ""), `${Vt}${Dt}${qt}`
        } return `${Vt}${et}`
    }
  },
  38767: (tt, et, Vt) => {
    var Ot = {
      "./combat_1.png": 38773,
      "./dungeon_crumbling_crypt.png": 38775,
      "./dungeon_frozen_hollow.png": 38779,
      "./dungeon_wildwood_grove.png": 38788,
      "./dungeons.png": 38792,
      "./farming_1.png": 38799,
      "./fishing_1.png": 38806,
      "./hub.png": 38812,
      "./island.png": 38818,
      "./mining_1.png": 38822,
      "./mining_1_bridge.png": 38825,
      "./mining_1_gallery.png": 38834,
      "./mining_1_hollow.png": 38842,
      "./mining_1_village.png": 38851
    };

    function qt(tt) {
      var et = Dt(tt);
      return Vt(et)
    }

    function Dt(tt) {
      if (!Vt.o(Ot, tt)) {
        var et = new Error("Cannot find module '" + tt + "'");
        throw et.code = "MODULE_NOT_FOUND", et
      }
      return Ot[tt]
    }
    qt.keys = function() {
      return Object.keys(Ot)
    }, qt.resolve = Dt, tt.exports = qt, qt.id = 38767
  },
  38773: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  38775: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  38779: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  38788: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  38792: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  38799: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/farming_1.88c6a10630aed3ef8195.png"
  },
  38806: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  38812: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/hub.2531ead8f8a327f34b1c.png"
  },
  38818: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/island.205bb9973a65f87b60a3.png"
  },
  38822: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/mining_1.98c7a7e3424532a89b98.png"
  },
  38825: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/mining_1_bridge.65d4e676030492359993.png"
  },
  38834: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/mining_1_gallery.f9f2baffc0a921cd9ffe.png"
  },
  38842: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  38851: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/mining_1_village.855cb5fdab046ca65e04.png"
  },
  18600: tt => {
    tt.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  20729: tt => {
    tt.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  23164: tt => {
    tt.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  24740: tt => {
    tt.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  26416: tt => {
    tt.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  26437: tt => {
    tt.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  38755: tt => {
    tt.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYUlEQVR4nGNgIBP8R8NYwX+GDVNRMQOm4v8MC9qxYwZUxf//b+T4//8A+///51khGMTeyIGp8Nz0gv8MDoFgGsbeUB2BXeHESHcUjFNhR4Dj/zp3OzAGsbEphHgIOyYNAACzzGY5JF2GbAAAAABJRU5ErkJggg=="
  },
  38758: tt => {
    tt.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);