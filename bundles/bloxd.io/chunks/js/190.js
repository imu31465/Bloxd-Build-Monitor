export const id = 190;
export const ids = [51, 190];
export const modules = {
  38621: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Tk,
      f: () => ik
    });
    const Xk = new WeakMap;

    function Tk(kk, Fk) {
      return Xk.set(kk, Fk), kk
    }

    function ik(kk) {
      var Fk;
      return null !== (Fk = Xk.get(kk)) && void 0 !== Fk ? Fk : null
    }
  },
  38534: (kk, Fk, Ik) => {
    function Xk(kk, Fk, Ik) {
      var Xk;
      const {
        width: Tk,
        height: ik
      } = Ik, yk = null !== (Xk = kk.text) && void 0 !== Xk ? Xk : kk, lk = (yk.x / 100 - .5) * Tk, ak = (yk.y / 100 - .5) * ik, qk = Tk / 2 - Fk.x;
      if (null !== kk.text && Math.abs(lk) <= qk && ak >= Fk.top - ik / 2 && ak <= ik / 2 - Fk.bottom) return {
        x: yk.x,
        y: yk.y
      };
      const Lk = Math.min(0 === lk ? 1 / 0 : qk / Math.abs(lk), ak > 0 ? (ik / 2 - Fk.bottom) / ak : ak < 0 ? (Fk.top - ik / 2) / ak : 1 / 0);
      return !Number.isFinite(Lk) || Lk < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + lk * Lk / Tk * 100,
        y: 50 + ak * Lk / ik * 100
      }
    }
    Ik.d(Fk, {
      c: () => Xk
    })
  },
  38540: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => yk
    });
    const Xk = 4,
      Tk = 12e3,
      ik = 1e3;
    class yk {
      constructor() {
        let {
          limit: kk = Xk,
          windowMs: Fk = Tk,
          spacingMs: Ik = ik,
          now: yk = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = kk, this.windowMs = Fk, this.spacingMs = Ik, this.now = yk
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
          Fk = this.lastSentAt + this.spacingMs,
          Ik = Math.min(Fk > kk ? Fk : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        Ik !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, Ik - kk)))
      }
      notify() {
        for (const kk of this.listeners) kk()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38525: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Xk
    });
    class Xk {
      constructor(kk, Fk, Ik) {
        this.GL = kk, this.beforeOpen = Fk, this.afterClose = Ik, this.open = !1, this.ee = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.ee && (this.open = !0, this.beforeOpen(this), this.emit())
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
        this.open = !1, this.emit(), this.ee = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.ee || (this.snapshot = this.buildSnapshot(), this.GL(this.snapshot))
      }
    }
  },
  38623: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      SkyblockEntityFacing: () => lk,
      needsSkyblockEntityFacing: () => yk
    });
    var Xk = Ik(621),
      Tk = Ik(4210),
      ik = Ik(38632);

    function yk(kk, Fk) {
      if (kk.metaInfo === Xk.b || "Iron Guardian" === kk.type || "Gold Guardian" === kk.type) return !0;
      if ("Pig" === kk.type) return "sitting" === kk.pose;
      if ("Person" !== kk.meshKind || void 0 === kk.meshOpts) return !1;
      let Ik = null === Fk || void 0 === Fk ? void 0 : Fk.get(kk.meshOpts);
      if (void 0 === Ik) {
        var ik, yk;
        const Xk = (0, Tk.g)(kk);
        Ik = !1, "pig_napoleon" === (null === Xk || void 0 === Xk || null === (ik = Xk.opts.textures) || void 0 === ik ? void 0 : ik.head) ? Ik = !0 : "npc_pig_head" === (null === Xk || void 0 === Xk || null === (yk = Xk.opts.textures) || void 0 === yk ? void 0 : yk.head) && (Ik = "sitting" === Xk.opts.pose || "sitting"), Fk && (Fk.size >= 256 && Fk.clear(), Fk.set(kk.meshOpts, Ik))
      }
      return "sitting" === Ik ? "sitting" === kk.pose : Ik
    }(0, ik.g)("skyblock", ((kk, Fk) => {
      Fk.setFacingTolerance(yk(kk) ? 0 : null)
    }));
    class lk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = kk, this.alsoVisit = Fk, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = kk => {
          var Fk;
          const Ik = this.api.getEntityInfo(kk);
          Ik && (yk(Ik, this.meshFacingCache) && (this.api.setFacingTolerance(kk, 0), this.nextFacing.add(kk)), null === (Fk = this.alsoVisit) || void 0 === Fk || Fk.call(this, kk, Ik))
        }
      }
      Dt() {
        const {
          api: kk
        } = this, Fk = this.nextFacing;
        kk.forEachEntity(this.visit);
        for (const Ik of this.facing) Fk.has(Ik) || kk.setFacingTolerance(Ik, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = Fk
      }
      dispose() {
        for (const kk of this.facing) this.api.setFacingTolerance(kk, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  38518: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      default: () => qa
    });
    const Xk = "island";
    var Tk = Ik(337);
    const ik = (0, Tk.Kb)([0, 0, -1]),
      yk = [{
        name: "S",
        bearing: (0, Tk.Kb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, Tk.Kb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: ik
      }, {
        name: "W",
        bearing: (0, Tk.Kb)([1, 0, 0])
      }];

    function lk(kk, Fk, Ik) {
      return [100 * (Ik.mapMaxX - kk) / (Ik.mapMaxX - Ik.mapMinX), 100 * (Fk - Ik.mapMinZ) / (Ik.mapMaxZ - Ik.mapMinZ)]
    }

    function ak(kk, Fk, Ik) {
      const Tk = "local" === Fk,
        ik = kk.background,
        yk = Fk => ik ? lk(Fk[0] - kk.mapOrigin[0], Fk[2] - kk.mapOrigin[2], ik.bounds) : [50, 50],
        ak = (kk.insideDungeon ? [] : kk.landmarks).map((kk => {
          var Fk, Xk;
          return {
            id: kk.id,
            name: Ik(kk.visited && kk.nameKey ? null !== (Fk = kk.mapLabelKey) && void 0 !== Fk ? Fk : kk.nameKey : "skyblockGame:mapUnknown"),
            icon: kk.visited && null !== (Xk = kk.icon) && void 0 !== Xk ? Xk : "unknown",
            visited: kk.visited,
            current: !1,
            position: yk(kk.position),
            travelKind: "landmark",
            travelId: kk.id
          }
        })),
        Lk = kk.zones.map((Fk => {
          var Xk;
          return {
            id: Fk.id,
            name: Ik(Fk.visited && Fk.nameKey ? Fk.nameKey : "skyblockGame:mapUnknown"),
            icon: Fk.visited && null !== (Xk = Fk.icon) && void 0 !== Xk ? Xk : "unknown",
            visited: Fk.visited,
            current: Fk.id === kk.zoneId,
            position: Fk.position,
            thumbnail: Fk.visited ? Fk.id : void 0,
            travelKind: "zone",
            travelId: Fk.id
          }
        })),
        tk = kk.insideDungeon || !ik ? [] : kk.portals.map((kk => {
          var Fk;
          return {
            id: kk.id,
            name: Ik(null !== (Fk = kk.nameKey) && void 0 !== Fk ? Fk : "skyblockGame:mapUnknown"),
            icon: kk.visited ? "dungeons" === kk.destination ? "portal_orange" : "portal" : "unknown",
            visited: kk.visited,
            current: !1,
            position: yk(kk.position),
            colour: kk.colour,
            travelKind: "zone",
            travelId: kk.destination
          }
        })),
        Zk = Tk ? ak : Lk,
        jk = Zk.filter((kk => kk.visited)).length,
        ek = ik ? (ik.bounds.mapMaxX - ik.bounds.mapMinX) / (ik.bounds.mapMaxZ - ik.bounds.mapMinZ) : 2,
        wk = ik ? JSON.stringify([ik.bounds, kk.mapOrigin]) : "";
      return {
        local: Tk,
        points: Zk,
        portals: Tk ? tk : [],
        progress: Zk.length ? Ik("skyblockGame:mapDiscovered", {
          current: String(jk),
          total: String(Zk.length)
        }) : null,
        percent: Zk.length ? 100 * jk / Zk.length : 0,
        canTravel: [...Zk, ...Tk ? tk : []].some((kk => kk.visited && !kk.current)),
        noLandmarks: Tk && !kk.insideDungeon && 0 === ak.length,
        background: ik ? {
          imageKey: ik.imageKey,
          fallbackImageKey: kk.zoneId,
          geometryKey: wk,
          label: Ik(ik.labelKey),
          colour: ik.backgroundColour,
          ratio: ek
        } : null,
        connections: qk(kk.zones),
        minimap: ik ? {
          imageKey: ik.imageKey,
          fallbackImageKey: kk.zoneId,
          geometryKey: wk,
          label: Ik(ik.labelKey),
          colour: ik.backgroundColour,
          caption: Ik(kk.zoneId === Xk ? "skyblockGame:zoneIsland" : ik.labelKey),
          width: (ik.bounds.mapMaxX - ik.bounds.mapMinX) / ik.minimapSpan * 100 + "%",
          height: (ik.bounds.mapMaxZ - ik.bounds.mapMinZ) / ik.minimapSpan * 100 + "%",
          markers: [...ak, ...tk]
        } : null
      }
    }

    function qk(kk) {
      const Fk = new Set;
      return kk.flatMap((Ik => Ik.connections.flatMap((Xk => {
        const Tk = kk.find((kk => kk.id === Xk)),
          ik = [Ik.id, Xk].sort().join("|");
        return !Tk || Fk.has(ik) ? [] : (Fk.add(ik), [{
          id: `${Ik.id}-${Xk}`,
          start: Ik.position,
          end: Tk.position,
          explored: Ik.visited && Tk.visited
        }])
      }))))
    }
    var Lk = Ik(38525);
    class tk extends Lk.e {}
    const Zk = "skyblockMapView";
    class jk extends tk {
      constructor(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(kk, Xk, Tk), this.requestTravel = Fk, this.translate = Ik, this.now = ik, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
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
        }, this.travel = (kk, Fk) => {
          if (!this.map || this.pending || this.ee) return;
          const Ik = ("zone" === kk ? this.map.zones : this.map.landmarks).find((kk => kk.id === Fk));
          if (Ik) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in Ik && !Ik.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (Ik.visited)
              if ("zone" === kk && Fk === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const Ik = ++this.nextRequestId;
                this.pending = {
                  requestId: Ik,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: kk,
                  id: Fk,
                  requestId: Ik
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
      Pe(kk) {
        var Fk;
        if (!this.ee)
          if ("entities" !== kk.kind)
            if ("open" !== kk.kind) {
              var Ik, Xk;
              if ("snapshot" === kk.kind)(null === (Ik = kk.snapshot) || void 0 === Ik ? void 0 : Ik.zoneId) !== (null === (Xk = this.map) || void 0 === Xk ? void 0 : Xk.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = kk.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === kk.kind) {
                var Tk;
                kk.requestId === (null === (Tk = this.pending) || void 0 === Tk ? void 0 : Tk.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (kk.requestId === (null === (Fk = this.pending) || void 0 === Fk ? void 0 : Fk.requestId)) {
                var ik;
                this.pending = null, this.feedbackKey = null !== (ik = kk.errorKey) && void 0 !== ik ? ik : "", null === kk.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = kk.entities
      }
      Dt() {
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
          presentation: this.map ? ak(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const ek = 67.5 * Math.PI / 180;

    function wk(kk, Fk) {
      const Ik = Math.abs(kk);
      if (Ik > ek || Fk.trackHalfWidth <= 0) return null;
      const Xk = Fk.trackHalfWidth,
        Tk = Fk.screenHalfWidth / (Fk.tanHalfFovX * Math.max(.5, Math.cos(Fk.pitch))),
        ik = Math.min(Math.atan(.6 * Xk / Tk), .75 * ek),
        yk = Tk * Math.tan(ik);
      let lk;
      if (Ik <= ik) lk = Tk * Math.tan(Ik);
      else {
        const kk = ek - ik,
          Fk = Math.max(0, Tk * kk / (Math.cos(ik) ** 2 * (Xk - yk)) - 1),
          ak = (Ik - ik) / kk;
        lk = yk + (Xk - yk) * (1 + Fk) * ak / (1 + Fk * ak)
      }
      return 50 + Math.sign(kk) * lk * 50 / Xk
    }
    class Hk {
      constructor(kk, Fk) {
        this.map = kk, this.visited = Fk, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = Fk ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const kk = this.map.getSnapshot().map;
        return !kk || kk.insideDungeon ? [] : kk.landmarks.filter((kk => kk.visited === this.visited)).map((kk => {
          var Fk, Ik;
          return {
            id: `landmark:${kk.id}`,
            position: kk.position,
            icon: null !== (Fk = kk.icon) && void 0 !== Fk ? Fk : "unknown",
            nameKey: null !== (Ik = kk.nameKey) && void 0 !== Ik ? Ik : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class Jk {
      constructor(kk, Fk, Ik, Xk) {
        this.map = kk, this.kind = Fk, this.position = Ik, this.alive = Xk, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = Fk, this.range = "enemy" === Fk ? 48 : 64, this.limit = 12
      }
      OJ(kk) {
        if ("enemy" !== this.kind || this.alive(kk.AT)) return this.position(kk.AT)
      }
      getPoints() {
        const kk = [];
        for (const Xk of this.map.getEntities()) {
          if (Xk.kind !== this.kind || "enemy" === this.kind && !this.alive(Xk.compassEntityId)) continue;
          const Tk = this.position(Xk.compassEntityId);
          var Fk, Ik;
          if (Tk) kk.push({
            id: `${this.kind}:${Xk.compassEntityId}`,
            AT: Xk.compassEntityId,
            kind: this.kind,
            icon: null !== (Fk = Xk.icon) && void 0 !== Fk ? Fk : Xk.npcSkin ? `npc_${Xk.npcSkin}` : this.kind,
            displayName: Xk.displayName,
            position: Tk,
            nameKey: null !== (Ik = Xk.nameKey) && void 0 !== Ik ? Ik : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return kk
      }
    }
    class xk {
      constructor(kk) {
        this.map = kk, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const kk = this.map.getSnapshot().map;
        return !kk || kk.insideDungeon ? [] : kk.portals.map((kk => {
          var Fk;
          return {
            id: "portal:" + kk.id,
            kind: "portal",
            position: kk.position,
            nameKey: null !== (Fk = kk.nameKey) && void 0 !== Fk ? Fk : "skyblockGame:compassUnvisitedZone",
            icon: kk.visited ? "dungeons" === kk.destination ? "portal_orange" : "portal" : "unknown",
            colour: kk.colour
          }
        }))
      }
    }
    class Pk {
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

    function Kk(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk.position;
      const ik = Xk[0] - Fk[0],
        yk = Xk[2] - Fk[2];
      return {
        ...kk,
        position: Xk,
        offset: Tk.e.computeShortestRotation(Ik, (0, Tk.Kb)([ik, 0, yk])),
        distance: Math.hypot(ik, Xk[1] - Fk[1], yk)
      }
    }
    let Qk;

    function sk(kk, Fk) {
      var Ik;
      return (null === (Ik = Qk) || void 0 === Ik ? void 0 : Ik.locale) !== Fk && (Qk = {
        locale: Fk,
        near: new Intl.NumberFormat(Fk, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(Fk, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (kk < 10 ? Qk.near : Qk.far).format(kk)
    }
    class Vk {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(kk) {
        return this.providers.set(kk.id, kk), this.refreshAt = 0, () => {
          this.providers.get(kk.id) === kk && (this.providers.delete(kk.id), this.refreshAt = 0)
        }
      }
      frame(kk, Fk, Ik) {
        if (Ik >= this.refreshAt) {
          this.refreshAt = Ik + 200, this.candidates = [];
          for (const Fk of this.providers.values()) {
            if (!Fk.enabled) continue;
            const Ik = Fk.getPoints().map((Fk => {
              const Ik = Fk.position;
              return {
                point: Fk,
                distance: Math.hypot(Ik[0] - kk[0], Ik[1] - kk[1], Ik[2] - kk[2])
              }
            })).filter((kk => kk.distance <= Fk.range)).sort(((kk, Fk) => kk.distance - Fk.distance)).slice(0, Fk.limit);
            for (const {
                point: kk
              }
              of Ik) this.candidates.push({
              provider: Fk,
              point: kk
            })
          }
        }
        const Xk = [];
        for (const {
            point: Tk,
            provider: ik
          }
          of this.candidates) {
          if (!ik.enabled) continue;
          const Ik = ik.OJ ? ik.OJ(Tk) : Tk.position;
          if (Ik) {
            const ik = Kk(Tk, kk, Fk, Ik);
            Math.abs(ik.offset) <= ek && Xk.push(ik)
          }
        }
        return Xk
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var zk = Ik(36607),
      Sk = Ik(58);
    const vk = [{
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
      Ek = vk.length;

    function Ok(kk) {
      return kk >= Ek ? 1 : kk + 1
    }
    const nk = "skyblockQuests",
      Gk = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      pk = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function uk(kk) {
      let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const Ik = Math.max(0, Math.floor(kk)),
        Xk = Math.floor(Ik % 1e3 / 100),
        Tk = Math.floor(Ik / 1e3),
        ik = Tk % 60,
        yk = Math.floor(Tk / 60),
        lk = yk % 60,
        ak = Math.floor(yk / 60),
        qk = kk => kk < 10 ? `0${kk}` : String(kk),
        Lk = Fk ? `.${Xk}` : "";
      return ak > 0 ? `${ak}:${qk(lk)}:${qk(ik)}${Lk}` : `${lk}:${qk(ik)}${Lk}`
    }
    const bk = "devquests",
      Rk = "none",
      Uk = {
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
      Ck = "Compressed Messy Stone",
      Nk = {
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
      ck = ["Stone", "Diorite", "Andesite", "Granite"],
      Wk = new Set(ck),
      fk = (Object.keys(Nk), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const Bk = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function dk(kk, Fk) {
      const Ik = Math.floor(5 * kk / (2 * Fk + 1));
      return Math.min(4, Math.max(0, Ik))
    }
    var Yk = Ik(1231);
    var Ak = Ik(36363);
    var gk = Ik(36600),
      mk = Ik(34),
      hk = Ik(8862);
    const rk = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      Dk = 1e3;

    function Mk(kk) {
      return Math.max(0, kk)
    }

    function kF(kk) {
      return 1 + .01 * Mk(kk)
    }

    function FF(kk) {
      return 1 + .005 * Mk(kk)
    }

    function IF(kk) {
      return 1 + .005 * Mk(kk)
    }

    function XF(kk) {
      return .01 * Mk(kk)
    }

    function TF(kk) {
      return 150 / (150 + Mk(kk))
    }

    function iF(kk) {
      return 1 + .002 * Mk(kk)
    }

    function yF(kk) {
      return Math.round(10 * kk) / 10
    }

    function lF(kk, Fk) {
      switch (kk) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: yF(100 * (FF(Fk) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: yF(100 * (kF(Fk) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: yF(100 * (IF(Fk) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: yF(100 * XF(Fk))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: yF(100 * (1 - TF(Fk)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: yF(100 * (iF(Fk) - 1))
          }
      }
    }

    function aF(kk) {
      return "farming" === kk ? 200 : 100
    }

    function qF(kk, Fk) {
      if (!Number.isSafeInteger(kk) || kk < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const Ik = aF(Fk),
        Xk = kk => function(kk, Fk) {
          return aF(kk) * Fk * (Fk + 1) / 2
        }(Fk, kk);
      let Tk = Math.min(Dk, Math.floor((Math.sqrt(8 * kk / Ik + 1) - 1) / 2));
      return Tk < Dk && Xk(Tk + 1) <= kk ? Tk++ : Xk(Tk) > kk && Tk--, {
        totalXp: kk,
        level: Tk,
        xpIntoLevel: kk - Xk(Tk),
        xpForNextLevel: Tk === Dk ? null : Ik * (Tk + 1)
      }
    }
    const LF = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function tF(kk) {
      return LF.has(kk)
    }
    const ZF = new Set(Tk.vb);

    function jF(kk) {
      return ZF.has(kk)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const eF = {
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
      wF = {
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
      HF = {
        ...wF,
        ...Object.fromEntries(Object.entries(fk).map((kk => {
          let [Fk, Ik] = kk;
          return [Fk, 9 * wF[Ik]]
        })))
      },
      JF = {
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
      xF = {
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
    const PF = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      KF = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function QF(kk) {
      return `rgb(${KF[kk].join(", ")})`
    }

    function sF(kk, Fk, Ik) {
      if (!Ik) return kk(Fk);
      const Xk = {};
      for (const [Tk, ik] of Object.entries(Ik)) Xk[Tk] = "string" === typeof ik ? ik : kk(ik.translationKey);
      return kk(Fk, Xk)
    }
    class VF {
      constructor(kk, Fk) {
        this.now = kk, this.getJournal = Fk, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.eq = !1, this.onShown = () => {}
      }
      enqueue(kk) {
        const Fk = zF(kk);
        if (Fk) this.pending.push(kk);
        else {
          const Fk = this.pending.findIndex(zF);
          this.pending.splice(-1 === Fk ? this.pending.length : Fk, 0, kk)
        }
        return (null === this.current || null !== this.followUp && !Fk) && (this.advance(), !0)
      }
      setHeld(kk) {
        return this.eq = kk, !kk && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      Dt() {
        const kk = this.getJournal(),
          Fk = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === Fk ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === Fk || void 0 === Fk ? void 0 : Fk.kind) && kk && kk.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === Fk || void 0 === Fk ? void 0 : Fk.kind)) {
          const kk = this.findFollowUp(this.current);
          if ("step" !== (null === kk || void 0 === kk ? void 0 : kk.kind) || kk.questId !== Fk.questId || kk.step.id !== Fk.step.id) return this.showFollowUp(kk, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(kk, Fk, Ik) {
        var Xk, Tk, ik, yk;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, kk, Ik);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, kk);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, kk, Fk);
        const {
          questCompletionKind: lk,
          questCompletionNameKey: ak
        } = this.current, qk = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, Lk = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, tk = "step" === (null === (Xk = this.followUp) || void 0 === Xk ? void 0 : Xk.kind) ? this.followUp : null, Zk = "explore" === (null === (Tk = this.followUp) || void 0 === Tk ? void 0 : Tk.kind);
        let jk;
        return jk = Zk ? kk("skyblockGame:questExploreTitle") : null !== tk ? "quest" === lk ? kk("skyblockGame:questNextQuestTitle", {
          quest: kk(tk.questNameKey)
        }) : kk("skyblockGame:questNextStepTitle") : kk("started" === lk ? "skyblockGame:questStartedTitle" : "quest" === lk ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? lk : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: jk,
          name: Zk ? Fk("skyblockGame:questExploreName") : null !== tk ? sF(Fk, tk.step.nameKey, tk.step.nameParams) : sF(Fk, ak, qk),
          description: Zk ? Fk("skyblockGame:questExploreDescription") : null === tk ? null : sF(Fk, tk.step.descriptionKey, tk.step.descriptionParams),
          reward: null === this.followUp && Lk > 0 ? Fk("skyblockGame:questCoinRewardSuffix", {
            amount: Lk.toLocaleString(Ik)
          }) : null,
          iconItem: null !== (ik = null === tk || void 0 === tk ? void 0 : tk.step.questIconItem) && void 0 !== ik ? ik : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== tk && (null === (yk = this.getJournal()) || void 0 === yk ? void 0 : yk.trackedQuestId) === tk.questId ? tk.step.nameKey : null
        }
      }
      getSkillLevelView(kk, Fk, Ik) {
        let {
          skill: Xk,
          beforeLevel: Tk,
          level: ik
        } = kk;
        const yk = lF(Xk, Tk),
          lk = lF(Xk, ik);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: Fk(`skyblockGame:${Xk}`),
          name: Fk("skyblockGame:skillLevelUp", {
            to: ik.toLocaleString(Ik)
          }),
          description: yk.percent === lk.percent ? null : Fk(`${lk.translationKey}Change`, {
            before: yk.percent.toLocaleString(Ik),
            after: lk.percent.toLocaleString(Ik)
          }),
          reward: null,
          iconItem: PF[Xk],
          accent: QF(Xk),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(kk, Fk) {
        let {
          landmarkNameKey: Ik
        } = kk;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: Fk("skyblockGame:landmarkDiscovered"),
          name: Fk(Ik),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(kk, Fk, Ik) {
        let {
          titleKey: Xk,
          textKey: Tk,
          params: ik = {},
          nameKeys: yk = {},
          iconItem: lk = null
        } = kk;
        const ak = {
          ...ik
        };
        for (const [qk, Lk] of Object.entries(yk)) ak[qk] = Fk(Lk);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: Fk(Xk),
          name: Ik(Tk, ak),
          description: null,
          reward: null,
          iconItem: lk,
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
      showFollowUp(kk, Fk) {
        null === kk || this.eq ? this.advance() : (this.followUp = kk, this.token++, this.shownAt = this.now(), this.expiresAt = null !== Fk && void 0 !== Fk ? Fk : this.shownAt + this.durationMs())
      }
      findFollowUp(kk) {
        var Fk;
        const Ik = this.getJournal();
        if (!Ik || this.hasPendingQuestPopup() || zF(kk)) return null;
        const Xk = "started" === kk.questCompletionKind ? Ik.active.some((Fk => Fk.id === kk.questCompletionQuestId)) : "quest" === kk.questCompletionKind ? Ik.completed.some((Fk => Fk.id === kk.questCompletionQuestId)) : [...Ik.active, ...Ik.completed].some((Fk => Fk.id === kk.questCompletionQuestId && Fk.subquests.some((Fk => Fk.id === kk.questCompletionStepId && "completed" === Fk.status))));
        if (!Xk) return null;
        if ("quest" === kk.questCompletionKind && 0 === Ik.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const Tk = Ik.active.find((kk => kk.id === Ik.trackedQuestId)),
          ik = null !== (Fk = null === Tk || void 0 === Tk ? void 0 : Tk.subquests.find((kk => "ready" === kk.status))) && void 0 !== Fk ? Fk : null === Tk || void 0 === Tk ? void 0 : Tk.subquests.find((kk => "active" === kk.status));
        return ik ? {
          kind: "step",
          questId: Tk.id,
          questNameKey: Tk.nameKey,
          step: ik
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((kk => !zF(kk)))
      }
      advance() {
        var kk;
        this.current = this.eq ? null : null !== (kk = this.pending.shift()) && void 0 !== kk ? kk : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function zF(kk) {
      return SF(kk.questCompletionKind)
    }

    function SF(kk) {
      return "skillLevel" === kk || "landmark" === kk || "npcNote" === kk
    }
    var oF = Ik(38534);
    const vF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      EF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      OF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      nF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      GF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var pF = Ik(38537);
    const uF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      bF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const RF = Ik.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const UF = Ik.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      CF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var NF = Ik(18315),
      cF = Ik(20442),
      WF = Ik(22854),
      fF = Ik(24422),
      BF = Ik(26092);
    const dF = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: NF,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: cF,
      cow: GF,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: Ik(26116),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: vF,
      fishing_1: vF,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: EF,
      guardian_iron: OF,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: WF,
      mines: fF,
      mining_1: fF,
      npc: nF,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: GF,
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
      npc_gold_guardian: EF,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: OF,
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
      npc_tentacle_guy: pF,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: uF,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: RF,
      quest_talk: UF,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: CF,
      watermelon: BF
    };

    function YF(kk, Fk) {
      const Ik = document.createElement("img");
      return Ik.className = Fk, Ik.src = kk, Ik.alt = "", Ik.draggable = !1, Ik
    }

    function AF(kk) {
      var Fk;
      const Ik = null !== (Fk = dF[kk]) && void 0 !== Fk ? Fk : kk.startsWith("npc_") ? nF : CF;
      if ("portal" !== kk) return YF(Ik, "SkyblockMapIcon");
      const Xk = document.createElement("span");
      Xk.className = "SkyblockMapIcon Portal";
      const Tk = document.createElement("span");
      return Tk.className = "SkyblockMapIconTint", Tk.style.maskImage = Tk.style.webkitMaskImage = `url("${bF}")`, Xk.append(YF(Ik, "SkyblockMapIconLayer"), Tk, YF(bF, "SkyblockMapIconLayer SkyblockMapIconShade")), Xk
    }
    var gF = Ik(38503),
      mF = Ik(4221);
    const hF = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function rF(kk) {
      const Fk = new mF.f(kk);
      return {
        radius: 45,
        squareness: 3,
        wobbles: hF.map((kk => {
          let {
            lobes: Ik,
            amount: Xk
          } = kk;
          return {
            lobes: Ik[Math.floor(Fk.next() * Ik.length)],
            amount: Xk[0] + Fk.next() * (Xk[1] - Xk[0]),
            phase: 2 * Fk.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function DF(kk) {
      let {
        radius: Fk,
        squareness: Ik,
        wobbles: Xk,
        samples: Tk
      } = kk;
      const ik = [];
      for (let yk = 0; yk < Tk; yk++) {
        const kk = 2 * Math.PI * yk / Tk,
          lk = Math.cos(kk),
          ak = Math.sin(kk),
          qk = Fk * (Math.abs(lk) ** Ik + Math.abs(ak) ** Ik) ** (-1 / Ik) * Xk.reduce(((Fk, Ik) => {
            let {
              lobes: Xk,
              amount: Tk,
              phase: ik
            } = Ik;
            return Fk + Tk * Math.sin(Xk * kk + ik)
          }), 1);
        ik.push(`${(50+qk*lk).toFixed(2)} ${(50+qk*ak).toFixed(2)}`)
      }
      return `M${ik.join("L")}Z`
    }
    const MF = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class kI {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.ee = !1, this.mountCompass = kk => {
          var Fk;
          if (null === (Fk = this.stopLayout) || void 0 === Fk || Fk.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !kk || this.ee) return;
          const Ik = kk.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: kk,
            track: Ik,
            label: kk.querySelector(".SkyblockCompassLabel")
          }, Ik.replaceChildren();
          for (let Tk = 0; Tk < 4; Tk++) {
            const kk = document.createElement("span");
            kk.className = "SkyblockCompassCardinal", Ik.appendChild(kk), this.cardinals.push(kk)
          }
          const Xk = (0, gF.b)(MF, [kk], this.layout);
          this.stopLayout = () => {
            Xk(), Ik.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = kk => {
          this.terrain = this.ee ? null : kk, this.render(this.frame)
        }, this.mountMinimapSearchArea = kk => {
          this.mountSearchArea("minimap", kk)
        }, this.mountMapSearchArea = kk => {
          this.mountSearchArea("map", kk)
        }, this.mountPlayer = kk => {
          this.player = this.ee ? null : kk, this.render(this.frame)
        }, this.mountWaypoint = kk => {
          var Fk, Ik;
          if (null === (Fk = this.stopWaypoint) || void 0 === Fk || Fk.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !kk || this.ee) return;
          const Xk = kk.querySelector(".SkyblockQuestWaypointMarker");
          Xk.replaceChildren(AF("quest")), this.markerIcon = "quest", this.waypoint = {
            root: kk,
            marker: Xk,
            clip: kk.querySelector(".SkyblockQuestWaypointTextClip"),
            text: kk.querySelector(".SkyblockQuestWaypointText"),
            label: kk.querySelector(".SkyblockQuestWaypointLabel"),
            distance: kk.querySelector(".SkyblockQuestWaypointDistance"),
            hint: kk.querySelector(".SkyblockQuestWaypointHint")
          };
          const Tk = () => {
              this.waypointMarkerSize = {
                width: Xk.offsetWidth,
                height: Xk.offsetHeight
              }, this.waypointInset = {
                x: Xk.offsetWidth / 2 + 8,
                top: Xk.offsetHeight + 8,
                bottom: 8
              }
            },
            ik = new ResizeObserver((() => {
              Tk(), this.render(this.frame)
            }));
          ik.observe(Xk, {
            box: "border-box"
          });
          const yk = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", yk), null === (Ik = window.visualViewport) || void 0 === Ik || Ik.addEventListener("resize", yk), this.stopWaypoint = () => {
            var kk;
            ik.disconnect(), window.removeEventListener("resize", yk), null === (kk = window.visualViewport) || void 0 === kk || kk.removeEventListener("resize", yk)
          }, yk(), Tk(), this.render(this.frame)
        }, this.mountWaypointOrigin = kk => {
          var Fk;
          if (null === (Fk = this.stopWaypointOrigin) || void 0 === Fk || Fk.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = kk && !this.ee ? Number(kk.dataset.notificationToken) : null, kk && !this.ee && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const Fk = {
              nameKey: kk.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = Fk;
            const Ik = () => {
                const Ik = kk.getBoundingClientRect();
                Fk.x = (Ik.left + Ik.width / 2) / window.innerWidth * 100, Fk.y = (Ik.top + Ik.height / 2) / window.innerHeight * 100
              },
              Xk = new ResizeObserver(Ik);
            Xk.observe(kk.parentElement), Xk.observe(kk), window.addEventListener("resize", Ik), this.stopWaypointOrigin = () => {
              Xk.disconnect(), window.removeEventListener("resize", Ik)
            }, Ik()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const kk = this.compass.root,
            Fk = getComputedStyle(kk),
            Ik = getComputedStyle(document.documentElement),
            Xk = parseFloat(Ik.fontSize),
            Tk = parseFloat(Fk.getPropertyValue("--compass-icon-size")) * Xk,
            ik = "1" === Fk.getPropertyValue("--compass-fit-top").trim(),
            yk = ik ? 1 : 8,
            lk = Array.from(document.querySelectorAll(MF), (kk => {
              var Fk;
              return (null !== (Fk = kk.querySelector(".MiddleTextTop")) && void 0 !== Fk ? Fk : kk).getBoundingClientRect()
            })).filter((kk => kk.width > 0 && kk.height > 0));
          let ak = (parseFloat(Ik.getPropertyValue("--notchTop")) || 0) + yk,
            qk = "";
          if (ik) {
            const Fk = window.innerWidth / 2,
              Ik = kk.getBoundingClientRect().height,
              ik = [ak, ...lk.map((kk => Math.max(ak, kk.bottom + yk)))].sort(((kk, Fk) => kk - Fk));
            for (const kk of ik) {
              let ik = Fk - 8;
              for (const Xk of lk) Xk.bottom + yk <= kk || Xk.top >= kk + Ik + yk || (ik = Math.min(ik, Xk.right <= Fk ? Fk - Xk.right - 8 : Xk.left - Fk - 8));
              const Lk = 2 * ik - Tk;
              if (Lk >= 16 * Xk) {
                qk = `${Lk}px`, ak = kk;
                break
              }
            }
          }
          kk.style.maxWidth !== qk && (kk.style.maxWidth = qk);
          const Lk = kk.getBoundingClientRect(),
            tk = this.compassSize.trackHalfWidth;
          if (Lk.width > 0) {
            const kk = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: kk.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * Tk / kk.width
          }
          if (!qk)
            for (const Zk of lk) Zk.right > Lk.left - 8 && Zk.left < Lk.right + 8 && (ak = Math.max(ak, Zk.bottom + yk));
          kk.style.top = `${ak}px`, this.compassSize.trackHalfWidth !== tk && this.render(this.frame)
        }
      }
      mountSearchArea(kk, Fk) {
        this.searchAreas[kk] = this.ee ? null : Fk, this.render(this.frame)
      }
      render(kk) {
        if (this.ee) return;
        if (this.frame = kk, this.compass && (FI(this.compass.root, !kk), kk)) {
          const Fk = this.compassSize.trackHalfWidth / 50;
          kk.compass.cardinals.forEach(((kk, Ik) => {
            const Xk = this.cardinals[Ik];
            Xk.textContent !== kk.name && (Xk.textContent = kk.name), FI(Xk, kk.hidden), Xk.style.translate = kk.left * Fk + "px"
          }));
          const Ik = new Set;
          kk.compass.markers.forEach(((Xk, Tk) => {
            var ik;
            Ik.add(Xk.id);
            let yk = this.markers.get(Xk.id);
            yk || (yk = document.createElement("span"), yk.className = "SkyblockCompassMarker", this.markers.set(Xk.id, yk), this.compass.track.appendChild(yk)), yk.dataset.icon !== Xk.icon && (yk.dataset.icon = Xk.icon, yk.replaceChildren(AF(Xk.icon))), yk.style.color = null !== (ik = Xk.colour) && void 0 !== ik ? ik : "", yk.style.translate = Xk.left * Fk + "px", yk.style.zIndex = String(kk.compass.markers.length - Tk), yk.title !== Xk.name && (yk.title = Xk.name)
          }));
          for (const [kk, Xk] of this.markers) Ik.has(kk) || (Xk.remove(), this.markers.delete(kk));
          this.compass.label.textContent !== kk.compass.label && (this.compass.label.textContent = kk.compass.label)
        }
        this.terrain && (FI(this.terrain, !(null !== kk && void 0 !== kk && kk.minimap)), null !== kk && void 0 !== kk && kk.minimap && (this.terrain.style.transform = kk.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", kk.minimap.iconRotation)));
        const Fk = null === kk || void 0 === kk ? void 0 : kk.searchArea;
        for (const Ik of [this.searchAreas.minimap, this.searchAreas.map])
          if (Ik && (FI(Ik, !Fk), Fk)) {
            if (this.searchAreaPath.seed !== Fk.shapeSeed && (this.searchAreaPath = {
                seed: Fk.shapeSeed,
                d: DF(rF(Fk.shapeSeed))
              }), Ik.dataset.shapeSeed !== Fk.shapeSeed) {
              Ik.dataset.shapeSeed = Fk.shapeSeed;
              for (const kk of Ik.querySelectorAll("path")) kk.setAttribute("d", this.searchAreaPath.d)
            }
            Ik.style.left = `${Fk.left}%`, Ik.style.top = `${Fk.top}%`, Ik.style.width = `${Fk.width}%`, Ik.style.height = `${Fk.height}%`
          } if (this.player && (FI(this.player, !(null !== kk && void 0 !== kk && kk.player) || kk.player.hidden), null !== kk && void 0 !== kk && kk.player && (this.player.style.left = `${kk.player.left}%`, this.player.style.top = `${kk.player.top}%`, this.player.style.setProperty("--map-player-rotation", kk.player.rotation))), this.waypoint) {
          const {
            root: Fk,
            marker: Ik,
            clip: Xk,
            text: Tk,
            label: ik,
            distance: yk,
            hint: lk
          } = this.waypoint, ak = !(null !== kk && void 0 !== kk && kk.waypoint) || null !== kk.waypoint.popupToken && kk.waypoint.popupToken !== this.waypointOriginToken;
          FI(Fk, ak);
          let qk = 1;
          const Lk = this.waypointLaunch;
          if (!ak && Lk && kk.waypoint.nameKey === Lk.nameKey) {
            const kk = performance.now();
            Lk.startedAt ??= kk, qk = Math.min(1, Math.max(0, (kk - Lk.startedAt - 450) / 1e3)), Ik.style.opacity = String(Math.min(1, (kk - Lk.startedAt) / 150)), 1 === qk && (this.waypointLaunch = null)
          } else Ik.style.opacity = "", Lk && null !== Lk.startedAt && (this.waypointLaunch = null);
          if (Fk.classList.toggle("Launching", qk < 1), null !== kk && void 0 !== kk && kk.waypoint) {
            const Fk = this.waypointInset,
              ak = "quest_talk" === kk.waypoint.markerIcon ? function(kk, Fk, Ik) {
                if (!kk.text || null === kk.blockHeight || 0 === kk.nearness) return kk;
                const Xk = kk.blockHeight / 100 * Ik.height,
                  Tk = -kk.nearness * (II * Xk + Fk.width / 2),
                  ik = kk.nearness * (XI * Xk + Fk.height / 2);
                return {
                  ...kk,
                  text: {
                    x: kk.text.x + Tk / Ik.width * 100,
                    y: kk.text.y + ik / Ik.height * 100
                  }
                }
              }(kk.waypoint, this.waypointMarkerSize, this.viewport) : kk.waypoint,
              tk = (0, oF.c)(ak, Fk, this.viewport),
              Zk = qk * qk * (3 - 2 * qk),
              jk = qk < 1 ? Lk.x + (tk.x - Lk.x) * Zk : tk.x,
              ek = qk < 1 ? Lk.y + (tk.y - Lk.y) * Zk : tk.y;
            Ik.style.translate = `${jk}vw ${ek}vh`, Xk.style.clipPath = `inset(${Fk.top}px ${Fk.x}px ${Fk.bottom}px)`, FI(Tk, qk < 1 || !kk.waypoint.text), Tk.style.opacity = String(1 - kk.waypoint.nearness), kk.waypoint.text && (Tk.style.translate = `${kk.waypoint.text.x}vw ${kk.waypoint.text.y}vh`), ik.textContent !== kk.waypoint.name && (ik.textContent = kk.waypoint.name), this.markerIcon !== kk.waypoint.markerIcon && (this.markerIcon = kk.waypoint.markerIcon, Ik.replaceChildren(AF(this.markerIcon))), yk.textContent !== kk.waypoint.distance && (yk.textContent = kk.waypoint.distance), FI(lk, null === kk.waypoint.hint), null !== kk.waypoint.hint && lk.textContent !== kk.waypoint.hint && (lk.textContent = kk.waypoint.hint)
          }
        }
      }
      dispose() {
        var kk, Fk;
        this.mountWaypointOrigin(null), this.render(null), null === (kk = this.stopLayout) || void 0 === kk || kk.call(this), this.stopLayout = null, null === (Fk = this.stopWaypoint) || void 0 === Fk || Fk.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.ee = !0
      }
    }

    function FI(kk, Fk) {
      kk.hidden !== Fk && (kk.hidden = Fk)
    }
    const II = .55,
      XI = .6;
    const TI = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class iI {
      constructor(kk, Fk, Ik, Xk) {
        this.map = kk, this.quests = Fk, this.compass = Ik, this.display = new kI, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.ee = !1, this.snapshot = null, this.texts = new Map, this.translate = Xk
      }
      setTranslator(kk, Fk) {
        this.translate = kk, this.locale = Fk, this.metresFormat = new Intl.NumberFormat(Fk), this.texts.clear()
      }
      translateCached(kk, Fk) {
        const Ik = void 0 === Fk ? kk : `${kk} ${Fk}`;
        let Xk = this.texts.get(Ik);
        return void 0 === Xk && (this.texts.size >= 500 && this.texts.clear(), Xk = this.translate(kk, void 0 === Fk ? void 0 : {
          distance: Fk
        }), this.texts.set(Ik, Xk)), Xk
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(kk, Fk, Ik) {
        if (this.ee) return;
        if (!kk) return this.snapshot = null, void this.display.render(null);
        const Xk = this.map.getSnapshot().map,
          ak = Ik.cameraHeading,
          qk = {
            ...this.display.compassSize,
            tanHalfFovX: Ik.tanHalfFovX,
            pitch: Ik.cameraPitch
          },
          Lk = [];
        if (Xk)
          for (const Tk of this.compass.frame(kk, ak, Fk)) {
            const kk = wk(Tk.offset, qk);
            null !== kk && Lk.push({
              ...Tk,
              left: kk
            })
          }
        const tk = function(kk, Fk) {
            const Ik = [],
              Xk = kk => "quest" === kk.kind ? kk.distance - 1 : kk.distance,
              Tk = [...kk].sort(((kk, Fk) => Xk(kk) - Xk(Fk) || kk.id.localeCompare(Fk.id)));
            for (const ik of Tk) {
              let kk = !1;
              if ("quest" !== ik.kind)
                for (const Xk of Ik)
                  if (Math.abs(Xk.left - ik.left) < Fk) {
                    kk = !0;
                    break
                  } kk || Ik.push(ik)
            }
            return Ik
          }(Lk, this.display.compassSpacing),
          Zk = function(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              Ik = null;
            for (const Xk of kk) Math.abs(Xk.offset) <= Fk && (!Ik || Xk.distance < Ik.distance || Xk.distance === Ik.distance && Math.abs(Xk.offset) < Math.abs(Ik.offset)) && (Ik = Xk);
            return Ik
          }(tk),
          jk = kk => {
            var Fk;
            return null !== (Fk = kk.displayName) && void 0 !== Fk ? Fk : this.translateCached(kk.nameKey)
          },
          ek = {
            compass: {
              markers: tk.map((kk => ({
                id: kk.id,
                icon: kk.icon,
                colour: kk.colour,
                name: jk(kk),
                left: kk.left
              }))),
              cardinals: yk.map((kk => {
                let {
                  name: Fk,
                  bearing: Ik
                } = kk;
                const Xk = wk(Tk.e.computeShortestRotation(ak, Ik), qk);
                return {
                  name: Fk,
                  left: null !== Xk && void 0 !== Xk ? Xk : 0,
                  hidden: null === Xk
                }
              })),
              label: Zk ? `${jk(Zk)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",sk(Zk.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== Xk && void 0 !== Xk && Xk.background) {
          const Fk = kk[0] - Xk.mapOrigin[0],
            Ik = kk[2] - Xk.mapOrigin[2],
            {
              rotation: Tk,
              transform: yk
            } = function(kk, Fk, Ik, Xk) {
              const [Tk, yk] = lk(kk, Fk, Xk), ak = ik - Ik;
              return {
                rotation: ak,
                transform: `rotate(${ak}rad) translate(-${Tk}%, -${yk}%)`
              }
            }(Fk, Ik, ak, Xk.background.bounds);
          ek.minimap = {
            transform: yk,
            iconRotation: -Tk + "rad"
          };
          const [qk, Lk] = lk(Fk, Ik, Xk.background.bounds);
          ek.player = {
            left: qk,
            top: Lk,
            hidden: qk < 0 || Lk < 0 || qk > 100 || Lk > 100,
            rotation: -Tk + "rad"
          }
        }
        const {
          waypoint: Hk
        } = this.quests.getSnapshot();
        if ("search" === (null === Hk || void 0 === Hk ? void 0 : Hk.questMarkerIcon) && null !== Xk && void 0 !== Xk && Xk.background) {
          const {
            bounds: kk
          } = Xk.background, [Fk, Ik] = lk(Hk.position[0] - Xk.mapOrigin[0], Hk.position[2] - Xk.mapOrigin[2], kk);
          ek.searchArea = {
            left: Fk,
            top: Ik,
            width: 6400 / (kk.mapMaxX - kk.mapMinX),
            height: 6400 / (kk.mapMaxZ - kk.mapMinZ),
            shapeSeed: Hk.nameKey
          }
        }
        const Jk = this.quests.getNotificationSnapshot(),
          xk = "completion" === (null === Jk || void 0 === Jk ? void 0 : Jk.phase) && !SF(Jk.kind);
        if (Hk && !xk) {
          const Fk = Math.hypot(...Hk.position.map(((Fk, Ik) => Fk - kk[Ik]))),
            Xk = Math.round(Fk),
            Tk = "talk" === Hk.questMarkerIcon ? Math.min(1, Math.max(0, (10 - Fk) / 5)) : 0,
            ik = Ik.projectWorldPosToViewport(Hk.position),
            yk = ik && Ik.projectWorldPosToViewport([Hk.position[0], Hk.position[1] - 1, Hk.position[2]]);
          ek.waypoint = {
            ...Ik.projectWorldPosToScreenPos(Hk.position),
            text: ik,
            nearness: Tk * Tk * (3 - 2 * Tk),
            blockHeight: ik && yk ? yk.y - ik.y : null,
            name: this.translateCached(Hk.nameKey),
            nameKey: Hk.nameKey,
            markerIcon: Hk.questMarkerIcon ? TI[Hk.questMarkerIcon] : "quest",
            popupToken: (null === Jk || void 0 === Jk ? void 0 : Jk.waypointNameKey) === Hk.nameKey ? Jk.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(Xk)),
            hint: "search" === Hk.questMarkerIcon && Math.hypot(Hk.position[0] - kk[0], Hk.position[2] - kk[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = ek, this.display.render(ek)
      }
      dispose() {
        this.ee = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const yI = "skyblockSkillsView";
    class lI extends tk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          Ik = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk => kk,
          Xk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          Tk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : kk => kk;
        super(kk, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = Fk, this.translate = Ik, this.locale = Xk, this.itemName = Tk, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
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
      setTranslator(kk, Fk, Ik) {
        this.translate = kk, this.locale = Fk, this.itemName = Ik, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(kk) {
        let Fk = this.skillText.get(kk);
        return Fk || (Fk = {
          label: this.translate(`skyblockGame:${kk}`),
          description: this.translate(`skyblockGame:${kk}Description`)
        }, this.skillText.set(kk, Fk)), Fk
      }
      sources(kk) {
        if ("mining" === kk || "fishing" === kk) return this.buildSources(kk);
        let Fk = this.sourceText.get(kk);
        return Fk || (Fk = this.buildSources(kk), this.sourceText.set(kk, Fk)), Fk
      }
      buildSources(kk) {
        const Fk = this.translate;
        return "exploration" === kk ? [Fk("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), Fk("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === kk ? [Fk("skyblockGame:logSource", {
          xp: this.number(eF["Maple Log"])
        })] : "combat" === kk ? [Fk("skyblockGame:creatureKillSource"), Fk("skyblockGame:noEnvironmentalXp")] : "farming" === kk ? [Fk("skyblockGame:cropSource", {
          xp: this.number(JF["Wheat|FreshlyGrown"])
        }), Fk("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), Fk("skyblockGame:noYoungCropXp")] : Object.entries("mining" === kk ? HF : xF).map((kk => {
          let [Ik, Xk] = kk;
          return Fk("skyblockGame:itemXpSource", {
            item: this.itemName(Ik),
            xp: this.number(Xk)
          })
        }))
      }
      number(kk) {
        return kk.toLocaleString(this.locale)
      }
      benefit(kk, Fk) {
        const Ik = lF(kk, Fk);
        return this.translate(Ik.translationKey, {
          bonus: this.number(Ik.percent)
        })
      }
      Pe(kk) {
        if (!this.ee) {
          if ("snapshot" === kk.kind) this.progress = kk.progress, this.pending.clear(), this.recent = null;
          else if ("award" === kk.kind && this.progress) {
            const {
              award: Fk
            } = kk;
            this.progress = {
              ...this.progress,
              [Fk.skill]: Fk.after
            };
            for (const [kk, Xk] of this.pending) Xk.skill === Fk.skill && this.pending.delete(kk);
            const Ik = Fk.after.level > Fk.before.level;
            this.recordGain(Fk.skill, Fk.amount, Ik ? ++this.nextLevelUpToken : null), Ik && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: Fk.skill,
              beforeLevel: Fk.before.level,
              level: Fk.after.level
            })
          } else {
            if ("rejectBlock" === kk.kind) return void this.rejectBlock(kk.position);
            if ("open" === kk.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(kk, Fk, Ik) {
        if (!this.progress || this.ee || Ik) return;
        const Xk = function(kk, Fk) {
          const Ik = kk.split("|")[0];
          return "Air" === Fk || Fk === `Barkless ${kk}` ? Object.hasOwn(eF, Ik) ? {
            skill: "foraging",
            amount: eF[Ik]
          } : "Air" !== Fk ? null : Object.hasOwn(HF, kk) ? {
            skill: "mining",
            amount: HF[kk]
          } : tF(kk) ? {
            skill: "farming",
            amount: 10
          } : jF(kk) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(JF, kk) ? {
            skill: "farming",
            amount: JF[kk]
          } : Object.hasOwn(Nk, kk) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(Fk, "Air");
        if (!Xk) return;
        const Tk = kk.join(",");
        if (this.pending.has(Tk)) return;
        const ik = this.predictedProgress(Xk.skill).totalXp + Xk.amount;
        Number.isSafeInteger(ik) && (this.pending.set(Tk, {
          ...Xk,
          expires: this.now() + 2e3
        }), this.recordGain(Xk.skill, 0), this.emit())
      }
      rejectBlock(kk) {
        this.pending.delete(kk.join(",")) && this.emit()
      }
      Dt() {
        if (this.ee) return;
        let kk = !1;
        for (const [Fk, Ik] of this.pending) Ik.expires <= this.now() && (this.pending.delete(Fk), kk = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, kk = !0), kk && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(kk, Fk) {
        var Ik, Xk;
        let Tk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const ik = (null === (Ik = this.recent) || void 0 === Ik ? void 0 : Ik.skill) === kk && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          yk = (null === (Xk = this.recent) || void 0 === Xk ? void 0 : Xk.skill) === kk && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: kk,
          confirmed: ik + Fk,
          expires: this.now() + 3e3,
          levelUpToken: null !== Tk && void 0 !== Tk ? Tk : yk
        }
      }
      pendingXp(kk) {
        let Fk = 0;
        for (const Ik of this.pending.values()) Ik.skill === kk && (Fk += Ik.amount);
        return Fk
      }
      predictedProgress(kk) {
        const Fk = this.progress[kk],
          Ik = this.pendingXp(kk);
        return Ik ? qF(Fk.totalXp + Ik, kk) : Fk
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var kk, Fk, Ik;
        const Xk = this.progress ? rk.map((kk => {
            const Fk = this.predictedProgress(kk);
            return {
              ...this.text(kk),
              icon: PF[kk],
              benefit: this.benefit(kk, Fk.level),
              sources: this.sources(kk),
              id: kk,
              selected: kk === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(Fk.level)
              }),
              xp: null === Fk.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(Fk.xpIntoLevel),
                target: this.number(Fk.xpForNextLevel)
              }),
              percent: null === Fk.xpForNextLevel ? 100 : Math.min(100, Fk.xpIntoLevel / Fk.xpForNextLevel * 100)
            }
          })) : [],
          Tk = Xk.find((kk => {
            var Fk;
            return kk.id === (null === (Fk = this.recent) || void 0 === Fk ? void 0 : Fk.skill)
          })),
          ik = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: Xk,
          detail: null !== (kk = Xk.find((kk => kk.selected))) && void 0 !== kk ? kk : null,
          overallLevel: this.progress ? rk.reduce(((kk, Fk) => kk + this.predictedProgress(Fk).level), 0) : null,
          hud: Tk && ik > 0 ? {
            skill: Tk,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(ik)
            }),
            levelUpToken: null !== (Fk = null === (Ik = this.recent) || void 0 === Ik ? void 0 : Ik.levelUpToken) && void 0 !== Fk ? Fk : null,
            colour: QF(Tk.id)
          } : null
        }
      }
    }
    const aI = Math.max(1600, 600, 950) + 400,
      qI = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      LI = "skyblockQuestsView",
      tI = "skyblockQuestNotificationView";
    class ZI extends tk {
      constructor(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          yk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(kk, Xk, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = Fk, this.translate = Ik, this.now = Tk, this.locale = ik, this.publishNotification = yk, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var kk, Fk;
          this.selected = null !== (kk = null === (Fk = this.authoritative) || void 0 === Fk ? void 0 : Fk.trackedQuestId) && void 0 !== kk ? kk : null, this.show()
        }, this.select = kk => {
          this.selected = kk, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const kk = this.snapshot.detail;
          !this.ee && null !== kk && void 0 !== kk && kk.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(kk.id), this.emit())
        }, this.viewDialogue = () => {
          const kk = this.snapshot.detail;
          var Fk;
          kk && (null === (Fk = this.onViewDialogue) || void 0 === Fk || Fk.call(this, kk.id))
        }, this.notifications = new VF(Tk, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var kk, Fk;
        return null !== (kk = null === (Fk = this.authoritative) || void 0 === Fk ? void 0 : Fk.trackedQuestId) && void 0 !== kk ? kk : null
      }
      notify(kk) {
        !this.ee && this.notifications.enqueue(kk) && this.emitNotification()
      }
      setNotificationsHeld(kk) {
        (this.notifications.setHeld(kk) || kk) && this.emitNotification()
      }
      Dt() {
        var kk, Fk;
        if (this.ee) return;
        this.notifications.Dt() && this.emitNotification();
        let Ik = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, Ik = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, Ik = !0);
        const Xk = jI(this.authoritative);
        null !== Xk && void 0 !== Xk && null !== (kk = Xk.questClock) && void 0 !== kk && kk.running && this.clockText(Xk) !== (null === (Fk = this.snapshot.tracked) || void 0 === Fk ? void 0 : Fk.clock) && (Ik = !0), Ik && this.emit()
      }
      setTranslator(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = kk, this.locale = Fk, this.emitNotification(), this.emit()
      }
      Pe(kk) {
        if (!this.ee)
          if ("completion" === kk.kind) this.notify(kk.questCompletion);
          else if ("landmark" === kk.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: kk.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === kk.kind) {
          var Fk, Ik, Xk;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: kk.npcNoteTitleKey,
            textKey: kk.npcNoteTextKey,
            params: null !== (Fk = kk.npcNoteParams) && void 0 !== Fk ? Fk : {},
            nameKeys: null !== (Ik = kk.npcNoteNameKeys) && void 0 !== Ik ? Ik : {},
            iconItem: null !== (Xk = kk.npcNoteIconItem) && void 0 !== Xk ? Xk : null
          })
        } else if ("open" === kk.kind) this.show();
        else if ("guidance" === kk.kind) this.waypoint = kk.waypoint, this.compassTarget = kk.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === kk.kind) {
          this.authoritative = kk.snapshot, this.notifications.Dt() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const Fk = this.trackedStepPulse;
          this.updateTrackedStepPulse(kk.snapshot), this.emit(), this.trackedStepPulse > Fk && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.ee || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var kk;
        return null !== (kk = this.translateWithIcons) && void 0 !== kk ? kk : this.translate
      }
      clockText(kk) {
        const Fk = kk.questClock;
        if (!Fk) return null;
        const Ik = Fk.elapsedMs + (Fk.running ? this.now() - this.receivedAt : 0);
        return void 0 === Fk.countdownFromMs ? uk(Ik, !1) : uk(1e3 * Math.ceil(Math.max(0, Fk.countdownFromMs - Ik) / 1e3), !1)
      }
      updateTrackedStepPulse(kk) {
        var Fk, Ik, Xk;
        const Tk = jI(kk);
        if (!Tk) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const ik = kk => Tk.subquests.filter((Fk => kk(Fk.status))).map((kk => kk.id)),
          yk = ik((kk => "completed" === kk || "skipped" === kk)),
          lk = ik((kk => "locked" !== kk)),
          ak = (null === (Fk = this.trackedSteps) || void 0 === Fk ? void 0 : Fk.questId) === Tk.id && Tk.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (ak) {
          const kk = yk.filter((kk => !ak.finished.has(kk))),
            Fk = ik((kk => "active" === kk || "ready" === kk)).filter((kk => !ak.unlocked.has(kk)));
          kk.length > 0 && this.trackedStepPulse++, (kk.length > 0 || Fk.length > 0) && (this.trackedChange = {
            finished: new Set(kk),
            unlocked: new Set(Fk),
            expiresAt: this.now() + aI
          })
        } else {
          var qk;
          this.trackedStepPulse = (null === (qk = this.trackedSteps) || void 0 === qk ? void 0 : qk.questId) === Tk.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: Tk.id,
          progress: Tk.progress,
          finished: new Set([...null !== (Ik = null === ak || void 0 === ak ? void 0 : ak.finished) && void 0 !== Ik ? Ik : [], ...yk]),
          unlocked: new Set([...null !== (Xk = null === ak || void 0 === ak ? void 0 : ak.unlocked) && void 0 !== Xk ? Xk : [], ...lk])
        }
      }
      entry(kk, Fk) {
        var Ik, Xk;
        const Tk = kk.id === (null === (Ik = this.authoritative) || void 0 === Ik ? void 0 : Ik.trackedQuestId),
          ik = this.now() < this.trackAvailableAt,
          yk = this.questTextTranslator(),
          lk = kk.subquests.map((Fk => {
            var Ik, Xk, ik, lk, ak, qk;
            const Lk = null !== (Ik = Fk.handInNpcName) && void 0 !== Ik ? Ik : kk.giverName,
              tk = this.translate("skyblockGame:progress", {
                current: Fk.progress.toLocaleString(this.locale),
                target: Fk.target.toLocaleString(this.locale)
              }),
              Zk = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: Lk ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [Fk.status],
              jk = "active" === Fk.status || "ready" === Fk.status;
            return {
              id: Fk.id,
              name: sF(yk, Fk.nameKey, Fk.nameParams),
              description: sF(yk, Fk.descriptionKey, Fk.descriptionParams),
              progress: tk,
              status: Fk.status,
              statusLabel: Zk ? this.translate(Zk, {
                npc: Lk
              }) : tk,
              iconItem: jk && null !== (Xk = Fk.questIconItem) && void 0 !== Xk ? Xk : null,
              barPercent: "active" === Fk.status && Fk.showsProgressBar ? Math.min(100, 100 * Fk.progress / Fk.target) : null,
              justFinished: Tk && null !== (ik = null === (lk = this.trackedChange) || void 0 === lk ? void 0 : lk.finished.has(Fk.id)) && void 0 !== ik && ik,
              justUnlocked: Tk && null !== (ak = null === (qk = this.trackedChange) || void 0 === qk ? void 0 : qk.unlocked.has(Fk.id)) && void 0 !== ak && ak
            }
          }));
        return {
          id: kk.id,
          name: sF(yk, kk.nameKey, kk.nameParams),
          description: sF(yk, kk.descriptionKey, kk.descriptionParams),
          progress: Fk ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: kk.progress.toLocaleString(this.locale),
            target: kk.target.toLocaleString(this.locale)
          }),
          completed: Fk,
          tracked: Tk,
          selected: kk.id === this.selected,
          canTrack: !Fk && !Tk && !ik,
          trackLabel: this.translate(Tk ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : ik ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== kk.id,
          subquests: lk,
          focusStep: null !== (Xk = lk.find((kk => null !== kk.barPercent))) && void 0 !== Xk ? Xk : null,
          clock: this.clockText(kk)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk;
        const Lk = [...null !== (kk = null === (Fk = this.authoritative) || void 0 === Fk ? void 0 : Fk.active) && void 0 !== kk ? kk : [], ...null !== (Ik = null === (Xk = this.authoritative) || void 0 === Xk ? void 0 : Xk.completed) && void 0 !== Ik ? Ik : []];
        var tk, Zk, jk, ek;
        Lk.some((kk => kk.id === this.selected)) || (this.selected = null !== (tk = null !== (Zk = null === (jk = this.authoritative) || void 0 === jk ? void 0 : jk.trackedQuestId) && void 0 !== Zk ? Zk : null === (ek = Lk[0]) || void 0 === ek ? void 0 : ek.id) && void 0 !== tk ? tk : null);
        const wk = null !== (Tk = null === (ik = this.authoritative) || void 0 === ik ? void 0 : ik.active.map((kk => this.entry(kk, !1)))) && void 0 !== Tk ? Tk : [];
        wk.sort(((kk, Fk) => Number(Fk.tracked) - Number(kk.tracked)));
        const Hk = null !== (yk = null === (lk = this.authoritative) || void 0 === lk ? void 0 : lk.completed.map((kk => this.entry(kk, !0)))) && void 0 !== yk ? yk : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: wk,
          completed: Hk,
          completedExpanded: this.completedExpanded,
          detail: null !== (ak = [...wk, ...Hk].find((kk => kk.selected))) && void 0 !== ak ? ak : null,
          tracked: null !== (qk = wk.find((kk => kk.tracked))) && void 0 !== qk ? qk : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function jI(kk) {
      var Fk;
      return null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.active.find((Fk => Fk.id === kk.trackedQuestId))) && void 0 !== Fk ? Fk : null
    }
    const eI = "skyblockDungeonsView";
    class wI extends tk {
      constructor(kk, Fk) {
        let Ik = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          Xk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(kk, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = Fk, this.locale = Ik, this.requestEnter = Xk, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
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
            Fk = null === kk || void 0 === kk ? void 0 : kk.difficulties[this.pageIndex];
          void 0 !== Fk && null !== Fk.unlockedBoss && (this.close(), this.requestEnter(kk.id, Fk.difficulty))
        }
      }
      setTranslator(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = kk, this.locale = Fk, this.emit()
      }
      Pe(kk) {
        var Fk, Ik;
        if (!this.ee) return "open" === kk.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== kk.kind ? "snapshot" === kk.kind && (this.authoritative = kk.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (Fk = null === (Ik = this.pickerEntry()) || void 0 === Ik ? void 0 : Ik.difficulties.length) && void 0 !== Fk ? Fk : 1) - 1)), null === kk.snapshot && this.open ? this.close() : this.emit()) : this.choose(kk.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(kk) {
        var Fk;
        const Ik = null === (Fk = this.authoritative) || void 0 === Fk ? void 0 : Fk.dungeons.find((Fk => Fk.id === kk));
        void 0 !== Ik ? this.open && this.pickerDungeonId === kk || (this.pickerDungeonId = kk, this.pageIndex = Math.max(0, Ik.difficulties.findLastIndex((kk => null !== kk.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${kk}`)
      }
      turnTo(kk) {
        var Fk, Ik;
        const Xk = null !== (Fk = null === (Ik = this.pickerEntry()) || void 0 === Ik ? void 0 : Ik.difficulties.length) && void 0 !== Fk ? Fk : 0;
        kk < 0 || kk >= Xk || kk === this.pageIndex || (this.pageIndex = kk, this.emit())
      }
      pickerEntry() {
        var kk, Fk;
        return null !== (kk = null === (Fk = this.authoritative) || void 0 === Fk ? void 0 : Fk.dungeons.find((kk => kk.id === this.pickerDungeonId))) && void 0 !== kk ? kk : null
      }
      difficulty(kk) {
        const Fk = kk.completions > 0,
          Ik = null === kk.bestMs ? null : uk(kk.bestMs);
        return {
          difficulty: kk.difficulty,
          label: this.translate(Gk[kk.difficulty]),
          colour: pk[kk.difficulty],
          beaten: Fk,
          bestTime: Ik,
          completions: kk.completions,
          summary: Fk ? [null === Ik ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: Ik
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: kk.completions.toLocaleString(this.locale)
          })].filter((kk => null !== kk)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(kk) {
        const Fk = kk.difficulties.map((kk => this.difficulty(kk))),
          Ik = Fk.filter((kk => kk.beaten)).length;
        return {
          id: kk.id,
          name: this.translate(kk.nameKey),
          selected: kk.id === this.selected,
          beatenSummary: `${Ik} / ${Fk.length}`,
          difficulties: Fk
        }
      }
      picker() {
        const kk = this.pickerEntry();
        if (null === kk || 0 === kk.difficulties.length) return null;
        const Fk = kk.difficulties.map(((Fk, Ik) => {
          var Xk, Tk, ik, yk;
          const lk = Fk.unlockedBoss,
            ak = null === lk ? this.lockedHint(kk, Ik) : null;
          return {
            ...this.difficulty(Fk),
            unlocked: null !== lk,
            bossName: null === lk ? null : this.translate(lk.bossNameKey),
            bossMobType: null !== (Xk = null === lk || void 0 === lk ? void 0 : lk.bossMobType) && void 0 !== Xk ? Xk : null,
            bossMobVariation: null !== (Tk = null === lk || void 0 === lk ? void 0 : lk.bossMobVariation) && void 0 !== Tk ? Tk : null,
            lockedHint: null !== (ik = null === ak || void 0 === ak ? void 0 : ak.text) && void 0 !== ik ? ik : null,
            lockedHintHighlight: null !== (yk = null === ak || void 0 === ak ? void 0 : ak.highlight) && void 0 !== yk ? yk : null,
            current: Ik === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(kk.nameKey),
          pages: Fk,
          page: Fk[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < Fk.length - 1
        }
      }
      lockedHint(kk, Fk) {
        var Ik, Xk, Tk;
        if (0 === Fk && "number" === typeof kk.combatLevelLock) {
          const Fk = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: kk.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: Fk,
            colour: QF("combat"),
            icon: PF.combat
          })
        }
        const ik = null !== (Ik = null === (Xk = this.authoritative) || void 0 === Xk ? void 0 : Xk.dungeons) && void 0 !== Ik ? Ik : [],
          yk = Fk > 0 ? kk : null !== (Tk = ik[ik.indexOf(kk) - 1]) && void 0 !== Tk ? Tk : null,
          lk = Fk > 0 ? kk.difficulties[Fk - 1] : null === yk || void 0 === yk ? void 0 : yk.difficulties[0];
        if (null === yk || void 0 === lk) return null;
        const ak = this.translate(yk.nameKey);
        if (null === lk.unlockedBoss) return yk === kk ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, lk.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: ak
        }, lk.difficulty);
        const qk = this.translate(lk.unlockedBoss.bossNameKey);
        return yk === kk ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: qk
        }, lk.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: qk,
            dungeon: ak
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(kk, Fk, Ik) {
        return this.hintHighlighting(kk, Fk, "difficulty", {
          name: this.translate(Gk[Ik]),
          colour: pk[Ik],
          icon: null
        })
      }
      hintHighlighting(kk, Fk, Ik, Xk) {
        let {
          name: Tk,
          colour: ik,
          icon: yk
        } = Xk;
        const lk = this.translate(kk, {
          ...Fk,
          [Ik]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(kk, {
            ...Fk,
            [Ik]: Tk
          }),
          highlight: 2 === lk.length ? {
            before: lk[0],
            name: Tk,
            after: lk[1],
            colour: ik,
            icon: yk
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var kk, Fk, Ik;
        const Xk = null !== (kk = null === (Fk = this.authoritative) || void 0 === Fk ? void 0 : Fk.dungeons) && void 0 !== kk ? kk : [];
        var Tk, ik;
        Xk.some((kk => kk.id === this.selected)) || (this.selected = null !== (Tk = null === (ik = Xk[0]) || void 0 === ik ? void 0 : ik.id) && void 0 !== Tk ? Tk : null);
        const yk = Xk.map((kk => this.entry(kk)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: yk,
          detail: null !== (Ik = yk.find((kk => kk.selected))) && void 0 !== Ik ? Ik : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const HI = ["mining", "farming", "foraging", "fishing", "combat"],
      JI = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      xI = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function PI() {
      for (var kk = arguments.length, Fk = new Array(kk), Ik = 0; Ik < kk; Ik++) Fk[Ik] = arguments[Ik];
      return Fk.map(((kk, Fk) => ({
        amount: kk,
        coins: JI[Fk],
        xp: xI[Fk]
      })))
    }
    const KI = PI(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      QI = PI(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      sI = PI(50, 100, 250, 500, 1e3, 2500, 5e3),
      VI = PI(25, 50, 100, 250, 500, 1e3),
      zI = PI(10, 25, 50, 100, 250, 500, 1e3),
      SI = PI(1, 5, 10, 25, 50);

    function oI(kk, Fk) {
      return {
        id: kk,
        category: "fishing",
        item: Fk,
        drops: [Fk],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zI
      }
    }
    const vI = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: QI
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: sI
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: sI
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: VI
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: VI
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: QI
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: KI
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: KI
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: KI
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: sI
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: QI
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: QI
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: QI
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: sI
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: sI
      }, oI("wheatfish", "Wheatfish"), oI("darter", "Darter"), oI("sunset_minnow", "Sunset Minnow"), oI("root_flounder", "Root Flounder"), oI("greenfin_loach", "Greenfin Loach"), oI("red_strongfish", "Red Strongfish"), oI("green_strongfish", "Green Strongfish"), oI("boomerang_fish", "Boomerang Fish"), oI("seahorse", "Seahorse"), oI("spined_stickleback", "Spined Stickleback"), oI("moon_strongfish", "Moon Strongfish"), oI("boulder_bass", "Boulder Bass"), oI("grass_snapper", "Grass Snapper"), oI("crystal_wheatfish", "Crystalized Wheatfish", SI), oI("moonstone_pupfish", "Moonstone Pupfish", SI), oI("reedglass_minnow", "Reedglass Minnow"), oI("mangrove_herring", "Mangrove Herring"), oI("mudline_perch", "Mudline Perch"), oI("coastal_mullet", "Coastal Mullet"), oI("reef_sardine", "Reef Sardine"), oI("root_perch", "Root Perch"), oI("driftwood_catfish", "Driftwood Catfish"), oI("aether_minnow", "Aether Minnow"), oI("needlefish", "Tri-Pointed Needlefish"), oI("threadfin_bream", "Threadfin Bream"), oI("mudbelly_tilapia", "Mudbelly Tilapia"), oI("rotslab_eel", "Rotslab Eel"), oI("polarflash_electron", "Polarflash Electron"), oI("mireback_carp", "Mireback Carp"), oI("blackwater_bream", "Blackwater Bream"), oI("stone_grouper", "Stone Grouper"), oI("shadeback_ray", "Shadeback Ray"), oI("glacial_silverfish", "Glacial Silverfish"), oI("hatchetfish", "Hatchetfish"), oI("moonlit_boomerang", "Moonlit Boomerang Fish"), oI("murkborne_ray", "Murkborne Ray"), oI("bamboo_catfish", "Bamboo Catfish"), oI("mossback_arapaima", "Mossback Arapaima"), oI("murk_stingray", "Murk Stingray"), oI("channel_sawfish", "Channel Sawfish"), oI("boned_sturgeon", "Boned Sturgeon"), oI("oarfish", "Oarfish"), oI("snakehead", "Snakehead", SI), oI("eldertide_leviathan", "Eldertide Leviathan", SI), oI("pithead", "Pithead"), oI("electric_eel", "Electric Eel"), oI("shadow_darter", "Shadow Darter"), oI("abyss_carp", "Abyss Carp"), oI("nomai_moray", "Nomai Moray"), oI("silver_dragonfish", "Silver Dragonfish"), oI("giant_moray", "Giant Moray"), oI("coelacanth", "Coelacanth", SI), oI("frost_herring", "Frost Herring"), oI("permafrost_halibut", "Permafrost Halibut"), oI("glacial_lanternfish", "Glacial Lanternfish"), oI("frozen_grenadier", "Frozen Grenadier"), oI("blackfin_icefish", "Blackfin Icefish"), oI("moonfish", "Moonfish"), oI("alpha_strongfish", "Alpha Moon Strongfish"), oI("deep_lanternfish", "Deepwater Lanternfish", SI), oI("pearlescent_moonfish", "Pearlescent Moonfish", SI), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: QI
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: VI
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: VI
      }],
      EI = (new Map(vI.map((kk => [kk.id, kk]))), new Map),
      OI = new Map;
    for (const La of vI) {
      for (const [kk, Fk] of Object.entries(null !== (nI = La.blocks) && void 0 !== nI ? nI : {})) {
        var nI;
        EI.set(kk, {
          collection: La,
          amount: Fk
        })
      }
      for (const kk of null !== (GI = La.drops) && void 0 !== GI ? GI : []) {
        var GI;
        OI.set(kk, La)
      }
    }

    function pI(kk, Fk) {
      let Ik = 0;
      for (; Ik < kk.tiers.length && Fk >= kk.tiers[Ik].amount;) Ik++;
      return Ik
    }
    const uI = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function bI(kk) {
      return uI[kk - 1]
    }
    const RI = "skyblockCollectionsView";
    class UI extends tk {
      constructor(kk, Fk) {
        let Ik = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          Xk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : kk => kk;
        super(kk, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = Fk, this.locale = Ik, this.itemName = Xk, this.counts = null, this.category = "mining", this.selected = vI[0].id, this.snapshot = {
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
      setTranslator(kk, Fk, Ik) {
        this.translate = kk, this.locale = Fk, this.itemName = Ik, this.emit()
      }
      Pe(kk) {
        if (!this.ee)
          if ("collOpen" !== kk.kind) {
            (kk.collFull || null === this.counts) && (this.counts = new Map);
            for (const [Fk, Ik] of kk.collCounts) this.counts.set(Fk, Ik);
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
        const Fk = this.inCategory(this.category).map((kk => this.collectionView(kk))),
          Ik = vI.reduce(((kk, Fk) => kk + this.tierOf(Fk)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: HI.map((kk => this.categoryView(kk))),
          collections: Fk,
          detail: null !== (kk = Fk.find((kk => kk.selected))) && void 0 !== kk ? kk : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(Ik)
          })
        }
      }
      categoryView(kk) {
        const Fk = this.inCategory(kk),
          Ik = Fk.reduce(((kk, Fk) => kk + this.tierOf(Fk)), 0),
          Xk = Fk.reduce(((kk, Fk) => kk + Fk.tiers.length), 0);
        return {
          id: kk,
          label: this.translate(`skyblockGame:${kk}`),
          icon: PF[kk],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(Ik),
            target: this.number(Xk)
          }),
          selected: kk === this.category
        }
      }
      collectionView(kk) {
        var Fk, Ik;
        const Xk = null !== (Fk = this.counts.get(kk.id)) && void 0 !== Fk ? Fk : 0,
          Tk = pI(kk, Xk),
          ik = null !== (Ik = kk.tiers[Tk]) && void 0 !== Ik ? Ik : null,
          yk = 0 === Tk ? 0 : kk.tiers[Tk - 1].amount;
        return {
          id: kk.id,
          name: this.itemName(kk.item),
          icon: kk.item,
          selected: kk.id === this.selected,
          locked: 0 === Xk,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(Xk)
          }),
          tier: 0 === Tk ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(Tk),
          percent: null === ik ? 100 : Math.min(100, (Xk - yk) / (ik.amount - yk) * 100),
          progress: null === ik ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(Xk),
            target: this.number(ik.amount)
          }),
          nextReward: null === ik ? null : this.reward(kk, ik.coins, ik.xp)
        }
      }
      reward(kk, Fk, Ik) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(Fk),
          xp: this.number(Ik),
          skill: this.translate(`skyblockGame:${kk.category}`)
        })
      }
      tierLabel(kk) {
        return this.translate("skyblockGame:collectionTier", {
          tier: bI(kk)
        })
      }
      tierOf(kk) {
        var Fk;
        return pI(kk, null !== (Fk = this.counts.get(kk.id)) && void 0 !== Fk ? Fk : 0)
      }
      inCategory(kk) {
        return vI.filter((Fk => Fk.category === kk))
      }
      number(kk) {
        return kk.toLocaleString(this.locale)
      }
    }
    const CI = "skyblockPortalTransitView",
      NI = "skyblockPortalArrival";
    class cI {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.GL = kk, this.storage = Fk, this.now = Ik, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      Pe(kk) {
        const Fk = {
          zoneNameKey: kk.transitZoneNameKey,
          variation: kk.transitZoneVariation,
          colour: kk.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(NI, Fk), this.show("departure", Fk.zoneNameKey, Fk.colour, kk.transitDurationMs, kk.transitDurationMs + 1500, (() => {
          this.storage.removeItem(NI)
        }))
      }
      resumeArrival(kk) {
        const Fk = this.storage.getItem(NI);
        this.storage.removeItem(NI), null === Fk || Fk.variation !== kk || this.now() - Fk.departedAt > 3e4 || this.show("arrival", Fk.zoneNameKey, Fk.colour, 3200, 2e4)
      }
      finishArrival(kk) {
        var Fk;
        "arrival" === (null === (Fk = this.view) || void 0 === Fk ? void 0 : Fk.phase) && this.view.token === kk && (this.clearTimer(), this.view = null, this.GL(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(kk, Fk, Ik, Xk, Tk, ik) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: kk,
          zoneNameKey: Fk,
          colour: Ik,
          durationMs: Xk
        }, this.GL(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.GL(null), null === ik || void 0 === ik || ik()
        }), Tk)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const WI = "skyblockDailyRewardView",
      fI = "skyblockDailyRewardCoin";
    class BI {
      constructor(kk, Fk, Ik, Xk) {
        let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          yk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          lk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          ak = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.GL = kk, this.isBusy = Fk, this.holdQuestPopups = Ik, this.onHeldCoinsChanged = Xk, this.onCoinLanded = Tk, this.onStarted = ik, this.onFinished = yk, this.onItemLanded = lk, this.now = ak, this.eq = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var kk, Fk;
        return null !== (kk = null === (Fk = this.playing) || void 0 === Fk ? void 0 : Fk.view) && void 0 !== kk ? kk : null
      }
      getHeldCoins() {
        var kk, Fk;
        let Ik = 0;
        for (const Xk of this.eq) Ik += Xk.coins;
        return Ik - (null !== (kk = null === (Fk = this.playing) || void 0 === Fk ? void 0 : Fk.released) && void 0 !== kk ? kk : 0)
      }
      Pe(kk) {
        "dailyRewardClaimed" !== kk.kind ? (this.queue.push(kk), this.Dt()) : this.eq.push({
          coins: kk.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      Dt() {
        const kk = this.now();
        if (null === this.playing) return this.releaseUnshown(kk), void this.startNext(kk);
        const Fk = this.playing,
          Ik = kk - Fk.startedAt,
          Xk = Fk.view.flyingCoins,
          Tk = function(kk, Fk) {
            let Ik = 0;
            for (; Ik < Fk && YI(Ik, Fk) <= kk;) Ik++;
            return Ik
          }(Ik, Xk);
        if (Tk !== Fk.landed) {
          for (let kk = Tk - Fk.landed > 2 ? Tk - 1 : Fk.landed; kk < Tk; kk++) this.onCoinLanded(kk, Xk);
          Fk.landed = Tk, Fk.released = Math.round(Fk.view.coins * Tk / Xk), this.onHeldCoinsChanged()
        }
        for (; Fk.itemsLanded < Fk.view.items.length && 2e3 + 160 * Fk.itemsLanded + 630 <= Ik;) this.onItemLanded(Fk.itemsLanded), Fk.itemsLanded++;
        Ik >= Fk.view.durationMs && (this.finish(), this.startNext(kk))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.eq = [], this.GL(null)
      }
      startNext(kk) {
        if (0 === this.queue.length || this.isBusy()) return;
        const Fk = this.queue.shift();
        this.token++;
        const Ik = {
          token: this.token,
          day: Fk.dailyRewardDay,
          coins: Fk.dailyRewardCoins,
          items: Fk.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: Fk.dailyRewardDay === Ek ? 24 : 14
        };
        this.playing = {
          view: Ik,
          startedAt: kk,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.GL(Ik), this.onStarted(Ik)
      }
      finish() {
        this.eq.shift(), this.playing = null, this.holdQuestPopups(!1), this.GL(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(kk) {
        if (this.queue.length > 0 || 0 === this.eq.length) return;
        const Fk = this.eq.length;
        this.eq = this.eq.filter((Fk => kk - Fk.receivedAt < 6e4)), this.eq.length !== Fk && this.onHeldCoinsChanged()
      }
    }

    function dI(kk, Fk) {
      return 450 + 715 * kk / (Fk - 1)
    }

    function YI(kk, Fk) {
      return dI(kk, Fk) + 650
    }
    const AI = "skyblockMailboxView";
    class gI {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.GL = kk, this.isBusy = Fk, this.onStarted = Ik, this.now = Xk, this.waiting = [], this.playing = null, this.token = 0, this.itemName = kk => kk
      }
      getSnapshot() {
        var kk, Fk;
        return null !== (kk = null === (Fk = this.playing) || void 0 === Fk ? void 0 : Fk.view) && void 0 !== kk ? kk : null
      }
      setItemName(kk) {
        this.itemName = kk
      }
      Pe(kk) {
        this.waiting.push(...kk.mailLetters), this.Dt()
      }
      Dt() {
        const kk = this.now();
        null !== this.playing && kk - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.GL(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(kk)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.GL(null)
      }
      start(kk) {
        const Fk = this.waiting.slice(0, 3);
        this.token++;
        const Ik = {
          token: this.token,
          letters: Fk.map((kk => this.toView(kk))),
          more: this.waiting.length - Fk.length,
          durationMs: 4500 + 700 * Fk.length
        };
        this.waiting = [], this.playing = {
          view: Ik,
          startedAt: kk
        }, this.GL(Ik), this.onStarted(Ik)
      }
      toView(kk) {
        return {
          coins: kk.mailCoins,
          items: kk.mailItems.map((kk => {
            var Fk;
            return {
              itemName: kk.mailItemName,
              amount: kk.mailItemAmount,
              label: null !== (Fk = kk.mailItemLabel) && void 0 !== Fk ? Fk : this.itemName(kk.mailItemName)
            }
          })),
          reasonKey: kk.mailReasonKey,
          reasonParams: kk.mailReasonParams
        }
      }
    }
    const mI = "skyblockQuestGraphView",
      hI = "skyblockDevQuestJump";

    function rI(kk) {
      if (0 === kk.length) return "";
      const Fk = [`M ${kk[0].x} ${kk[0].y}`];
      for (let Xk = 1; Xk < kk.length - 1; Xk++) {
        const Ik = kk[Xk + 1];
        Fk.push(`Q ${kk[Xk].x} ${kk[Xk].y} ${(kk[Xk].x+Ik.x)/2} ${(kk[Xk].y+Ik.y)/2}`)
      }
      const Ik = kk[kk.length - 1];
      return Fk.push(`L ${Ik.x} ${Ik.y}`), Fk.join(" ")
    }

    function DI(kk, Fk) {
      return kk < Fk ? `${kk}|${Fk}` : `${Fk}|${kk}`
    }
    class MI extends tk {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          yk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          lk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(kk, Ik, Xk), this.translate = Fk, this.requestJump = Tk, this.requestArrive = ik, this.storage = yk, this.now = lk, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
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
      Pe(kk) {
        if (!this.ee)
          if ("graph" !== kk.kind) {
            if ("jumping" === kk.kind) {
              const Fk = {
                questId: kk.graphQuestId,
                variation: kk.graphVariation,
                completes: kk.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(hI, Fk)
            }
          } else {
            const Fk = ++this.graphCount;
            Ik.e(118).then((() => Ik(6440))).then((Ik => {
              let {
                default: Xk
              } = Ik;
              this.ee || Fk !== this.graphCount || (this.layout = function(kk, Fk, Ik) {
                var Xk, Tk;
                const ik = new kk.graphlib.Graph;
                ik.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), ik.setDefaultEdgeLabel((() => ({})));
                const yk = new Set;
                for (const Lk of Fk) yk.add(Lk.graphQuestId), ik.setNode(Lk.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const lk = Ik.filter((kk => yk.has(kk.graphFromId) && yk.has(kk.graphToId) && kk.graphFromId !== kk.graphToId)),
                  ak = new Map;
                for (const Lk of [...lk].sort(((kk, Fk) => Number("awaits" === kk.graphEdgeKind) - Number("awaits" === Fk.graphEdgeKind)))) {
                  const kk = DI(Lk.graphFromId, Lk.graphToId);
                  ak.has(kk) || (ak.set(kk, Lk), ik.setEdge(Lk.graphFromId, Lk.graphToId))
                }
                kk.layout(ik);
                const qk = ik.graph();
                return {
                  width: Math.ceil(null !== (Xk = qk.width) && void 0 !== Xk ? Xk : 0),
                  height: Math.ceil(null !== (Tk = qk.height) && void 0 !== Tk ? Tk : 0),
                  nodes: Fk.map((kk => {
                    var Fk, Ik;
                    const Xk = ik.node(kk.graphQuestId);
                    return {
                      node: kk,
                      left: (null !== (Fk = Xk.x) && void 0 !== Fk ? Fk : 0) - 95,
                      top: (null !== (Ik = Xk.y) && void 0 !== Ik ? Ik : 0) - 26
                    }
                  })),
                  edges: lk.map((kk => {
                    var Fk;
                    const Ik = ak.get(DI(kk.graphFromId, kk.graphToId)),
                      Xk = null !== (Fk = ik.edge(Ik.graphFromId, Ik.graphToId).points) && void 0 !== Fk ? Fk : [];
                    return {
                      edge: kk,
                      key: `${kk.graphFromId}|${kk.graphToId}|${kk.graphEdgeKind}`,
                      path: rI(Ik.graphFromId === kk.graphFromId ? Xk : [...Xk].reverse())
                    }
                  })),
                  plans: new Map(Fk.map((kk => [kk.graphQuestId, new Set([kk.graphQuestId, ...kk.graphPlanIds])])))
                }
              }(Xk, kk.graphNodes, kk.graphEdges), this.show())
            })).catch((kk => {
              console.error("The quest graph could not be laid out", kk)
            }))
          }
      }
      resumeJump(kk) {
        const Fk = this.storage.getItem(hI);
        this.storage.removeItem(hI), null === Fk || Fk.variation !== kk || this.now() - Fk.departedAt > 6e4 || this.requestArrive(Fk.questId, Fk.completes)
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
        var kk, Fk;
        return null !== (kk = null === this.hoveredId || null === (Fk = this.layout) || void 0 === Fk ? void 0 : Fk.plans.get(this.hoveredId)) && void 0 !== kk ? kk : new Set
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
        const Fk = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: kk.width,
          height: kk.height,
          nodes: kk.nodes.map((kk => {
            let {
              node: Ik,
              left: Xk,
              top: Tk
            } = kk;
            return {
              id: Ik.graphQuestId,
              name: this.translate(Ik.graphNameKey),
              detail: null === Ik.graphGiverName ? Ik.graphZoneId : `${Ik.graphGiverName} \xb7 ${Ik.graphZoneId}`,
              state: Ik.graphState,
              left: Xk,
              top: Tk,
              inPlan: Fk.has(Ik.graphQuestId),
              hovered: Ik.graphQuestId === this.hoveredId
            }
          })),
          edges: kk.edges.map((kk => {
            let {
              edge: Ik,
              key: Xk,
              path: Tk
            } = kk;
            return {
              key: Xk,
              kind: Ik.graphEdgeKind,
              path: Tk,
              inPlan: Fk.has(Ik.graphFromId) && Fk.has(Ik.graphToId)
            }
          })),
          planning: Fk.size > 0
        }
      }
    }
    var kX = Ik(37109);
    const FX = 250,
      IX = 2150,
      XX = -2.8,
      TX = 2.2,
      iX = -27,
      yX = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      lX = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      aX = Math.round(50 + 1e3 * (lX.delay + lX.period / 2)),
      qX = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      LX = Array.from({
        length: 26
      }, ((kk, Fk) => {
        const Ik = 2.39996 * Fk,
          Xk = .5 + .618034 * Fk % 1 * .23,
          Tk = Fk % 3 !== 2;
        return {
          rune: Tk ? qX[7 * Fk % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(Ik)*Xk).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(Ik)*Xk).toFixed(3)})`,
            "--spin": 40 * (Fk % 5 - 2) + "deg",
            "--size": (Tk ? 1 + Fk % 4 * .2 : .3 + Fk % 2 * .15) + "rem",
            "--duration": `${(1.8+7*Fk%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*Fk%3).toFixed(2)}s`
          }
        }
      }));

    function tX(kk, Fk) {
      return Array.from({
        length: 30 + 3 * kk + (Fk ? 10 : 0)
      }, ((kk, Fk) => {
        const Ik = Fk < 4,
          Xk = Ik ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          Tk = Ik ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          ik = Ik ? 2.2 : .6 + Math.random(),
          yk = Ik ? .3 : Math.random() < .5 ? .16 : .24,
          lk = Ik ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": Xk,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${Tk.toFixed(2)}rem`,
          "--length": `${ik.toFixed(2)}rem`,
          "--width": `${yk}rem`,
          "--duration": `${Math.round(lk)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function ZX(kk) {
      let {
        zeta: Fk,
        period: Ik
      } = kk;
      const Xk = 2 * Math.PI / Ik;
      return {
        w: Xk,
        decay: Fk * Xk / Math.sqrt(1 - Fk * Fk)
      }
    }
    let jX = !1;

    function eX() {
      if (jX) return;
      jX = !0;
      const kk = document.createElement("style");
      kk.textContent = function() {
        const kk = ZX(yX),
          Fk = ZX(lX),
          Ik = Fk => Math.exp(-kk.decay * Fk) * Math.sin(kk.w * Fk),
          Xk = Ik(Math.atan(kk.w / kk.decay) / kk.w),
          Tk = .25,
          ik = 2.15,
          yk = Math.round(215),
          lk = [];
        for (let ak = 0; ak <= yk; ak++) {
          const kk = ak / yk * ik;
          let qk = Math.sin(Math.min(kk, Tk) / Tk * Math.PI / 2) ** 2,
            Lk = 0,
            tk = 1,
            Zk = 1 - .2 * qk,
            jk = 1;
          if (kk >= Tk) {
            const yk = kk - Tk,
              lk = Math.max(0, yk - .05);
            qk = Math.exp(-lk / .05), Lk = Ik(lk + yX.lead * (1 - Math.exp(-lk / yX.rush))) / Xk;
            const ak = lk - lX.delay,
              ek = ak <= 0 ? 0 : 1 - Math.exp(-Fk.decay * ak) * (Math.cos(Fk.w * ak) + Fk.decay / Fk.w * Math.sin(Fk.w * ak)),
              wk = Math.max(0, (kk - 1.77) / (ik - 1.77));
            tk = (1 + (lX.to - 1) * ek) * (1 + .08 * wk), Zk = 1.1 + 1.5 * Math.exp(-yk / .07) + .3 * Math.exp(-(((1e3 * yk - aX) / 100) ** 2)) + .8 * wk, jk = 1 - wk ** 1.5
          }
          const ek = .15 * qk + XX * Lk,
            wk = -.1 * qk + TX * Lk,
            Hk = 3 * qk + iX * Lk;
          lk.push(`${(ak/yk*100).toFixed(3)}% { opacity: ${jk.toFixed(3)}; transform: translate(${ek.toFixed(3)}rem, ${wk.toFixed(3)}rem) rotate(${Hk.toFixed(2)}deg) scale(${tk.toFixed(3)}); filter: brightness(${Zk.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${lk.join(" ")} }`
      }(), document.head.append(kk)
    }
    const wX = "skyblockForgeView",
      HX = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class JX extends tk {
      constructor(kk, Fk, Ik, Xk, Tk) {
        super(kk, Ik, Xk), this.translate = Fk, this.requestForge = Tk, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.onOpened = null, this.select = (kk, Fk) => {
          var Ik, Xk;
          null !== this.forging || (null !== (Ik = this.owned[(0, kX.m)(Fk, kk)]) && void 0 !== Ik ? Ik : 0) <= 0 || (this.selected[kk] = this.selected[kk] === Fk ? null : Fk, this.status = null, null === (Xk = this.onPartSelected) || void 0 === Xk || Xk.call(this), this.emit())
        }, this.forge = kk => {
          var Fk, Ik;
          const Xk = this.selectedParts();
          if (null === Xk || this.isPending() || !this.open) return;
          const Tk = (0, kX.j)(Xk);
          if (null === Tk || Tk.coalCost > this.coal) return;
          const ik = this.preview(Tk),
            yk = null !== (Fk = null === (Ik = this.onForgeStarted) || void 0 === Ik ? void 0 : Ik.call(this, ik.tier, ik.named, kk)) && void 0 !== Fk ? Fk : () => {};
          if (this.dropArrival(), kk) {
            const kk = {
              id: ++this.forgeId,
              preview: ik,
              timers: [],
              stopSounds: yk,
              landed: !1,
              reply: null
            };
            kk.timers.push(setTimeout((() => {
              kk.landed = !0, null !== kk.reply && (this.apply(kk.reply), kk.reply = null, this.emit())
            }), FX), setTimeout((() => {
              this.finishForge(kk)
            }), IX)), this.forging = kk
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(Xk)
        }, this.snapshot = this.buildSnapshot()
      }
      Pe(kk) {
        var Fk;
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === kk.forgeMessageKind) return this.dropForge(), this.apply(kk), this.status = null, this.show(), void(null === (Fk = this.onOpened) || void 0 === Fk || Fk.call(this));
        const Ik = this.forging;
        if (null !== Ik && null !== kk.forgeRefusalKey) this.dropForge();
        else if (null !== Ik && !Ik.landed) return void(Ik.reply = kk);
        this.apply(kk), this.emit()
      }
      apply(kk) {
        if (this.owned = kk.forgeOwnedParts, this.coal = kk.forgeCoalOwned, this.keepSelectionOwned("open" === kk.forgeMessageKind), null !== kk.forgeForgedSwordId) {
          var Fk;
          const Ik = (0, kX.j)(kk.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (Fk = null === Ik || void 0 === Ik ? void 0 : Ik.displayName) && void 0 !== Fk ? Fk : ""
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
        var Fk;
        this.forging = null;
        const Ik = this.selectedParts(),
          Xk = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: kk.id,
          sameSword: null !== Ik && (null === (Fk = (0, kX.j)(Ik)) || void 0 === Fk ? void 0 : Fk.displayName) === kk.preview.name,
          timer: Xk
        }, this.emit()
      }
      dropForge() {
        const kk = this.forging;
        if (null !== kk) {
          this.forging = null;
          for (const Fk of kk.timers) clearTimeout(Fk);
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
        var kk, Fk, Ik;
        const Xk = this.selectedParts(),
          Tk = null === Xk ? null : (0, kX.j)(Xk),
          ik = null !== (kk = null === (Fk = this.forging) || void 0 === Fk ? void 0 : Fk.preview) && void 0 !== kk ? kk : null === Tk ? null : this.preview(Tk);
        return {
          enabled: this.received,
          open: this.open,
          slots: kX.i.map((kk => ({
            kind: kk,
            label: this.translate(HX[kk]),
            parts: this.partsFor(kk)
          }))),
          coalOwned: this.coal,
          preview: ik,
          unformedSword: kX.f[null !== (Ik = this.selected.Blade) && void 0 !== Ik ? Ik : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((kk => kk > 0)),
          canForge: null !== ik && !ik.coalShort && !this.isPending(),
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
        const Fk = [];
        for (const Xk of kX.e) {
          var Ik;
          const Tk = (0, kX.m)(Xk, kk),
            ik = null !== (Ik = this.owned[Tk]) && void 0 !== Ik ? Ik : 0;
          ik > 0 && Fk.push({
            material: Xk,
            itemName: Tk,
            owned: ik,
            selected: this.selected[kk] === Xk,
            placeholder: !1
          })
        }
        if (0 === Fk.length) {
          const Ik = kX.e[0];
          Fk.push({
            material: Ik,
            itemName: (0, kX.m)(Ik, kk),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return Fk
      }
      stats(kk) {
        const Fk = [{
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
        return kk.reachBonus > 0 && Fk.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${kk.reachBonus.toFixed(1)}`,
          better: !0
        }), kk.damageReduction > 0 && Fk.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*kk.damageReduction)}%`,
          better: !0
        }), Fk
      }
      selectedParts() {
        const {
          Blade: kk,
          Guard: Fk,
          Handle: Ik
        } = this.selected;
        return null === kk || null === Fk || null === Ik ? null : {
          blade: kk,
          guard: Fk,
          handle: Ik
        }
      }
      keepSelectionOwned(kk) {
        for (const Ik of kX.i) {
          var Fk;
          const Xk = this.selected[Ik];
          if (null !== Xk && (null !== (Fk = this.owned[(0, kX.m)(Xk, Ik)]) && void 0 !== Fk ? Fk : 0) > 0) continue;
          if (!kk) {
            this.selected[Ik] = null;
            continue
          }
          const Tk = [...kX.e].reverse().find((kk => {
            var Fk;
            return (null !== (Fk = this.owned[(0, kX.m)(kk, Ik)]) && void 0 !== Fk ? Fk : 0) > 0
          }));
          this.selected[Ik] = null !== Tk && void 0 !== Tk ? Tk : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const xX = "skyblockSmugglerView",
      PX = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class KX extends tk {
      constructor(kk, Fk, Ik, Xk, Tk) {
        let ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(kk, Ik, Xk), this.translate = Fk, this.requestBuy = Tk, this.now = ik, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = kk => kk, this.onBought = null, this.buy = kk => {
          const Fk = this.deals[kk];
          void 0 !== Fk && !this.isPending() && this.open && !this.soldOut.has(kk) && this.canAfford(Fk) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, kk))
        }, this.snapshot = this.buildSnapshot()
      }
      Pe(kk) {
        if (this.received = !0, this.day = kk.smugglerDay, this.deals = kk.smugglerDeals, this.rivets = kk.smugglerRivetsOwned, this.crests = kk.smugglerCrestsOwned, this.soldOut = new Set(kk.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + kk.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === kk.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = kk.smugglerBoughtSlot, null !== kk.smugglerBoughtSlot) {
          var Fk, Ik;
          const Xk = this.deals[kk.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === Xk ? "" : this.dealName(Xk),
              amount: String(null !== (Fk = null === Xk || void 0 === Xk ? void 0 : Xk.smugglerDealAmount) && void 0 !== Fk ? Fk : 0)
            }
          }, this.boughtCount++, null === (Ik = this.onBought) || void 0 === Ik || Ik.call(this)
        } else null !== kk.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: kk.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(kk, Fk, Ik) {
        this.translate = kk, void 0 !== Ik && (this.itemName = Ik), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(kk) {
        if (null !== kk.smugglerDealUniqueName) return kk.smugglerDealUniqueName;
        const Fk = PX[kk.smugglerDealItem];
        return void 0 === Fk ? this.itemName(kk.smugglerDealItem) : this.translate(Fk)
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
          deals: this.deals.map(((kk, Fk) => ({
            slot: Fk,
            itemName: kk.smugglerDealItem,
            displayName: this.dealName(kk),
            enchantmentTier: kk.smugglerDealEnchantmentTier,
            amount: kk.smugglerDealAmount,
            rivets: kk.smugglerDealRivets,
            crests: kk.smugglerDealCrests,
            affordable: this.canAfford(kk),
            soldOut: this.soldOut.has(Fk),
            justBought: this.boughtSlot === Fk
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
    const QX = "skyblockPassageView",
      sX = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function VX(kk, Fk) {
      return kk(sX[Fk])
    }

    function zX(kk, Fk, Ik, Xk) {
      const Tk = Math.ceil((Ik - Xk) / 864e5),
        ik = VX(kk, Fk);
      return Tk > 1 ? kk("skyblockGame:passageNextDays", {
        phase: ik,
        days: String(Tk)
      }) : kk("skyblockGame:passageNextSoon", {
        phase: ik
      })
    }
    class SX extends tk {
      constructor(kk, Fk, Ik, Xk) {
        let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(kk, Ik, Xk), this.translate = Fk, this.now = Tk, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = kk => kk, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      Pe(kk) {
        this.message = kk, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(kk, Fk, Ik) {
        this.translate = kk, void 0 !== Ik && (this.itemName = Ik), this.emit()
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
          phaseName: VX(this.translate, kk.passagePhase),
          visitors: kk.passageVisitors.map((kk => this.describe(kk))),
          resting: this.describe(kk.passageResting),
          nextPhase: kk.passageNextPhase,
          next: zX(this.translate, kk.passageNextPhase, kk.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var oX = Ik(38540);
    const vX = "skyblockKeepersChairView";
    class EX extends tk {
      constructor(kk, Fk, Ik, Xk, Tk) {
        let ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          yk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new oX.e;
        super(kk, Ik, Xk), this.translate = Fk, this.requestAim = Tk, this.now = ik, this.pacer = yk, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = kk => kk, this.aim = kk => {
          !this.awaitingReply && this.open && this.atChair && kk !== this.favoured && (null === kk || this.islands.some((Fk => Fk.keepersChairIslandId === kk && Fk.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== kk && void 0 !== kk ? kk : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = yk.subscribe((() => {
          this.emit()
        }))
      }
      Pe(kk) {
        var Fk, Ik;
        this.received = !0;
        const Xk = this.favoured,
          Tk = this.atChair;
        var ik;
        return this.islands = kk.keepersChairIslands, this.favoured = kk.keepersChairFavoured, this.passage = null !== (Fk = kk.keepersChairPassage) && void 0 !== Fk ? Fk : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (Ik = kk.keepersChairAtChair) || void 0 === Ik || Ik, "place" === kk.keepersChairMessageKind ? (!Tk && this.atChair && "refused" === (null === (ik = this.status) || void 0 === ik ? void 0 : ik.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === kk.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== kk.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: kk.keepersChairRefusalKey,
          island: null
        } : this.favoured !== Xk && (this.status = null === this.favoured ? {
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
      setTranslator(kk, Fk, Ik) {
        this.translate = kk, void 0 !== Ik && (this.itemName = Ik), this.emit()
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
        const Fk = this.islands.find((Fk => Fk.keepersChairIslandId === kk));
        return void 0 === Fk ? kk : this.translate(Fk.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const kk = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          Fk = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((kk => {
            const Fk = kk.keepersChairFeaturedFish;
            return {
              id: kk.keepersChairIslandId,
              name: this.translate(kk.keepersChairIslandNameKey),
              relit: kk.keepersChairIslandRelit,
              featuredFish: null === Fk ? null : {
                itemName: Fk,
                displayName: this.itemName(Fk)
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
          almanac: null === Fk ? null : {
            phase: Fk.keepersChairPassagePhase,
            phaseName: VX(this.translate, Fk.keepersChairPassagePhase),
            nextPhase: Fk.keepersChairPassageNextPhase,
            next: zX(this.translate, Fk.keepersChairPassageNextPhase, Fk.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const OX = "skyblockReachLogView",
      nX = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      GX = "Caught Fish",
      pX = [1, 2, 4];

    function uX(kk, Fk) {
      return kk.map((kk => ({
        ...kk,
        reachLogPageFish: kk.reachLogPageFish.map((kk => ({
          ...kk,
          reachLogFishFresh: Fk(kk)
        })))
      })))
    }
    class bX extends tk {
      constructor(kk, Fk, Ik, Xk, Tk) {
        let ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new oX.e;
        super(kk, Ik, Xk), this.translate = Fk, this.requestOpen = Tk, this.pacer = ik, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = kk => kk, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = kk => {
          this.pages.some((Fk => Fk.reachLogIslandId === kk)) && (this.selected = kk, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = ik.subscribe((() => {
          this.emit()
        }))
      }
      Pe(kk) {
        if (this.received = !0, "status" === kk.reachLogMessageKind) return !0 === kk.reachLogNews && this.markNews(), this.serverFresh = kk.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const Fk = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== kk.reachLogMessageKind)
          if (this.pageViews = null, this.pages = uX(kk.reachLogPages, (kk => kk.reachLogFishFresh || this.heldFresh.has(kk.reachLogFishItem))), this.letGoShown = kk.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, Fk) this.showPages();
          else {
            for (const kk of this.pages)
              for (const Fk of kk.reachLogPageFish) Fk.reachLogFishFresh && this.heldFresh.add(Fk.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(kk, Fk, Ik) {
        this.translate = kk, this.pageViews = null, void 0 !== Ik && (this.itemName = Ik), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = uX(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var kk, Fk, Ik, Xk;
        const Tk = this.pages.find((kk => kk.reachLogPageFish.some((kk => kk.reachLogFishFresh))));
        if (void 0 !== Tk) return Tk.reachLogIslandId;
        if (null !== this.selected && this.pages.some((kk => kk.reachLogIslandId === this.selected))) return this.selected;
        return null !== (kk = null !== (Fk = null === (Ik = this.pages.filter((kk => kk.reachLogIslandAwake)).at(-1)) || void 0 === Ik ? void 0 : Ik.reachLogIslandId) && void 0 !== Fk ? Fk : null === (Xk = this.pages[0]) || void 0 === Xk ? void 0 : Xk.reachLogIslandId) && void 0 !== kk ? kk : null
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
          var Fk;
          return {
            id: kk.reachLogIslandId,
            name: this.translate(kk.reachLogIslandNameKey),
            awake: kk.reachLogIslandAwake,
            gold: kk.reachLogPageGold,
            caught: kk.reachLogPageFish.filter((kk => kk.reachLogFishCaught && !kk.reachLogFishVisitor)).length,
            total: kk.reachLogPageFish.filter((kk => !kk.reachLogFishVisitor)).length,
            fish: kk.reachLogPageFish.map((kk => {
              const Fk = kk.reachLogFishBestKg;
              return {
                itemName: kk.reachLogFishItem,
                name: kk.reachLogFishCaught ? this.itemName(kk.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: kk.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / kk.reachLogFishChance))
                }),
                best: kk.reachLogFishCaught ? null === Fk ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: Fk.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: kk.reachLogFishMarks,
                ribbons: pX.map((Fk => 0 !== (kk.reachLogFishRibbons & Fk))),
                glimmer: 0 !== (8 & kk.reachLogFishRibbons),
                halo: 0 !== (32 & kk.reachLogFishRibbons),
                fresh: kk.reachLogFishFresh,
                visitor: kk.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (Fk = kk.reachLogPageReturner) && void 0 !== Fk ? Fk : null)
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
    const RX = "skyblockLampLightView";
    class UX {
      constructor(kk, Fk, Ik, Xk) {
        this.GL = kk, this.translate = Fk, this.requestCommand = Ik, this.pacer = Xk, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.ee = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = kk => {
          kk ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = kk => {
          this.send(`buy ${kk}`)
        }, this.socket = kk => {
          this.send(`socket ${null!==kk&&void 0!==kk?kk:Rk}`)
        }, this.wearTint = kk => {
          this.send(`tint ${null!==kk&&void 0!==kk?kk:Rk}`)
        }, this.setSituation = kk => {
          this.situation = kk, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Xk.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = Xk.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      Pe(kk) {
        if (this.message = kk, null !== kk.lampLightShop && (this.shop = kk.lampLightShop), "open" === kk.lampLightKind && (this.refusalKey = null), "reply" === kk.lampLightKind) {
          var Fk;
          const Tk = null !== (Fk = kk.lampLightReplyTag) && void 0 !== Fk ? Fk : null,
            ik = null !== Tk && Tk === this.offTag;
          var Ik, Xk;
          if (ik ? this.settleOff() : null !== Tk && Tk !== this.awaitingTag || this.settleReply(), this.refusalKey = kk.lampLightRefusalKey, null !== kk.lampLightBought && !ik) this.sparkle = {
            id: kk.lampLightBought,
            count: (null !== (Ik = null === (Xk = this.sparkle) || void 0 === Xk ? void 0 : Xk.count) && void 0 !== Ik ? Ik : 0) + 1
          }
        }
        kk.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === kk.lampLightKind && (this.lastGained = kk.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(kk) {
        kk !== this.atChair && (this.atChair = kk, kk && (this.refusalKey = null), this.emit())
      }
      setTranslator(kk, Fk) {
        this.translate = kk, this.locale = null !== Fk && void 0 !== Fk ? Fk : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.ee = !0
      }
      send(kk) {
        var Fk;
        if (null !== this.awaitingTag || "ready" !== (null === (Fk = this.message) || void 0 === Fk ? void 0 : Fk.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const Ik = this.nextTag();
        this.awaitingTag = Ik, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${kk} ${Ik}`), this.emit()
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
        this.ee || (this.snapshot = this.buildSnapshot(), this.GL(this.snapshot))
      }
      formatLight(kk) {
        return Math.floor(kk).toLocaleString(this.locale)
      }
      formatPercent(kk) {
        const Fk = 100 * kk;
        return Fk >= 10 ? Math.round(Fk).toLocaleString(this.locale) : Fk.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(kk, Fk) {
        if ("bite" === kk) return this.translate("skyblockGame:lampLightBite", {
          seconds: (Fk.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === kk) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(Fk.lampLightRareChance)
        });
        if ("notice" === kk) return null === Fk.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(Fk.lampLightNoticeChance)
        });
        const Ik = "meter" === kk ? Fk.lampLightMeterCatches : Fk.lampLightBloomCatches;
        return null === Ik ? null : this.translate("meter" === kk ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(Ik))
        })
      }
      oddsLines(kk, Fk) {
        const Ik = (kk, Fk) => {
            var Ik;
            return null !== (Ik = {
              bite: Fk.lampLightBiteMs,
              rare: Fk.lampLightRareChance,
              meter: Fk.lampLightMeterCatches,
              bloom: Fk.lampLightBloomCatches,
              notice: Fk.lampLightNoticeChance
            } [kk]) && void 0 !== Ik ? Ik : 0
          },
          Xk = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          Tk = [];
        for (const ik of ["bite", "rare", "meter", "bloom", "notice"]) {
          const yk = this.formatOdds(ik, kk),
            lk = this.formatOdds(ik, Fk);
          if (null === yk || null === lk || "bite" !== ik && "rare" !== ik && yk === lk) continue;
          const ak = Ik(ik, Fk) - Ik(ik, kk),
            qk = Xk[ik] ? ak < 0 : ak > 0;
          Tk.push({
            label: ik,
            before: yk,
            after: lk,
            tone: yk === lk ? "same" : qk ? "better" : "worse"
          })
        }
        return Tk
      }
      charmView(kk, Fk, Ik) {
        const Xk = kk.lampLightCharmId.charAt(0).toUpperCase() + kk.lampLightCharmId.slice(1),
          Tk = "bloom" === this.situation;
        return {
          id: kk.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${Xk}`),
          effect: this.translate(`skyblockGame:lampLightCharm${Xk}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(kk.lampLightCharmCost)
          }),
          owned: kk.lampLightCharmOwned,
          affordable: Ik >= kk.lampLightCharmCost,
          socketed: Fk.lampLightSocketed === kk.lampLightCharmId,
          lines: this.oddsLines(Tk ? Fk.lampLightBareBloom : Fk.lampLightBareOpen, Tk ? kk.lampLightCharmBloom : kk.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var kk, Fk, Ik, Xk;
        const Tk = this.message,
          ik = "ready" === (null === Tk || void 0 === Tk ? void 0 : Tk.lampLightStatus) ? this.shop : null,
          yk = null !== (kk = null === Tk || void 0 === Tk ? void 0 : Tk.lampLightBalance) && void 0 !== kk ? kk : 0,
          lk = this.atChair,
          ak = "loading" === (null === Tk || void 0 === Tk ? void 0 : Tk.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === Tk || void 0 === Tk ? void 0 : Tk.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          qk = "ready" !== (null === Tk || void 0 === Tk ? void 0 : Tk.lampLightStatus) || lk ? null !== (Fk = this.refusalKey) && void 0 !== Fk ? Fk : ak : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== Tk && "locked" !== Tk.lampLightStatus,
          status: null !== (Ik = null === Tk || void 0 === Tk ? void 0 : Tk.lampLightStatus) && void 0 !== Ik ? Ik : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(yk)
          }),
          releasing: null !== (Xk = null === Tk || void 0 === Tk ? void 0 : Tk.lampLightReleasing) && void 0 !== Xk && Xk,
          gained: null === Tk || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === Tk || void 0 === Tk ? void 0 : Tk.lampLightStatus) && lk && !this.isPending(),
          situation: this.situation,
          shop: null === ik ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: ik.lampLightOddsRod,
              island: this.translate(ik.lampLightIslandNameKey)
            }),
            heldRod: null !== ik.lampLightHeldRod,
            charms: ik.lampLightCharms.map((kk => this.charmView(kk, ik, yk))),
            tints: ik.lampLightTints.map((kk => {
              const Fk = kk.lampLightTintId,
                [Ik, Xk, Tk] = kk.lampLightTintColour;
              return {
                id: Fk,
                name: this.translate(`skyblockGame:lampLightTint${Fk.charAt(0).toUpperCase()}${Fk.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(kk.lampLightTintCost)
                }),
                owned: kk.lampLightTintOwned,
                affordable: yk >= kk.lampLightTintCost,
                wearing: ik.lampLightTint === Fk,
                colour: `rgb(${Ik}, ${Xk}, ${Tk})`
              }
            })),
            wearingIslandColours: null === ik.lampLightTint
          },
          notice: null === qk ? null : this.translate(qk),
          sparkle: this.sparkle
        }
      }
    }
    const CX = "skyblockMagmawardView";
    class NX {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.GL = kk, this.now = Fk, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = Bk.map((() => 0)), this.wornAt = Bk.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      Pe(kk) {
        var Fk, Ik;
        const Xk = Bk.map(((Fk, Ik) => !0 === kk.magmawardPiecesWorn[Ik]));
        if (!Xk.includes(!0)) return this.snapshot = null, void this.GL(null);
        const Tk = this.now(),
          ik = this.snapshot;
        null === ik && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const yk = kk.magmawardFuelCarried,
          lk = !Xk.includes(!1);
        let ak = null !== (Fk = null === ik || void 0 === ik ? void 0 : ik.pulse) && void 0 !== Fk ? Fk : null,
          qk = null !== (Ik = null === ik || void 0 === ik ? void 0 : ik.flare) && void 0 !== Ik ? Ik : null;
        kk.magmawardFuelBurned ? (ak = "burn", qk = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = Tk, this.flareAt = Tk) : null !== ik && yk > ik.fuel && (ak = "gain", this.pulseToken++, this.pulseAt = Tk), lk && null !== ik && !ik.fullSet && (qk = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = Tk, this.setLitAt = Tk);
        const Lk = Bk.map(((kk, Fk) => (Xk[Fk] && null !== ik && !ik.pieces[Fk].worn && (this.wornTokens[Fk]++, this.wornAt[Fk] = Tk), {
          itemName: kk,
          worn: Xk[Fk],
          wornToken: this.wornTokens[Fk],
          justWorn: Xk[Fk] && this.isPlaying(this.wornAt[Fk], Tk)
        })));
        this.snapshot = {
          pieces: Lk,
          wornCount: Xk.filter(Boolean).length,
          fullSet: lk,
          fuel: yk,
          fuelState: yk <= 0 ? "empty" : yk <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, Tk) ? ak : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, Tk) ? qk : null,
          flareToken: this.flareToken,
          setLit: lk && this.isPlaying(this.setLitAt, Tk),
          setLitToken: this.setLitToken
        }, this.GL(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.GL(null)
      }
      isPlaying(kk, Fk) {
        return Fk - kk < 1200
      }
    }
    const cX = "skyblockGlowtideView";
    class WX {
      constructor(kk) {
        this.GL = kk, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = kk => {
          this.arrow = kk, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      Pe(kk) {
        this.bloom = kk.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.GL(null))
      }
      afterRender(kk, Fk) {
        const Ik = this.bloom;
        if (null === Ik || null === kk) return;
        const Xk = Ik.glowtideBloomX - kk[0],
          ik = Ik.glowtideBloomZ - kk[2],
          yk = Math.hypot(Xk, ik),
          lk = this.snapshot,
          ak = null !== lk && void 0 !== lk && lk.inRange ? 1 : 0,
          qk = yk <= 12.5 + ak && kk[1] - Ik.glowtideBloomY <= 10 + ak;
        !qk || null !== lk && void 0 !== lk && lk.inRange || this.inRangeToken++;
        const Lk = {
          colour: Ik.glowtideBloomColour,
          inRange: qk,
          distance: Math.round(yk),
          inRangeToken: this.inRangeToken
        };
        (null === lk || Lk.colour !== lk.colour || Lk.inRange !== lk.inRange || !qk && Lk.distance !== lk.distance) && (this.snapshot = Lk, this.GL(Lk));
        const tk = Tk.e.computeShortestRotation(Fk, (0, Tk.Kb)([Xk, 0, ik]));
        null === this.arrow || Math.abs(tk - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${tk}rad)`, this.arrowTurn = tk)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.GL(null)
      }
    }
    const fX = "skyblockGlowMeterView";
    class BX {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.GL = kk, this.now = Fk, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      Pe(kk) {
        const Fk = this.now(),
          {
            glowMeterFill: Ik,
            glowMeterCapacity: Xk
          } = kk,
          Tk = Ik >= Xk,
          ik = this.snapshot;
        null !== ik && (Tk && !ik.full && (this.fullToken++, this.fullAt = Fk), ik.full && !Tk ? (this.burstToken++, this.burstAt = Fk) : Ik > ik.fill && (this.gainToken++, this.gainAt = Fk)), this.snapshot = {
          fill: Ik,
          St: Xk,
          ratio: Math.min(1, Math.max(0, Ik / Xk)),
          full: Tk,
          rares: kk.glowMeterRares,
          ready: Tk && this.isPlaying(this.fullAt, Fk),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, Fk),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, Fk),
          gainToken: this.gainToken
        }, this.GL(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.GL(null)
      }
      isPlaying(kk, Fk) {
        return Fk - kk < 2e3
      }
    }
    const dX = "skyblockHushWaitView";
    class YX {
      constructor(kk) {
        this.GL = kk, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      Pe(kk) {
        let {
          hushWaitMs: Fk,
          hushWaitTotalMs: Ik,
          hushWaitLines: Xk
        } = kk;
        if (this.clearTimers(), this.token++, 0 === Xk.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (Fk <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: Xk[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const Tk = Math.max(null !== Ik && void 0 !== Ik ? Ik : Fk, Fk),
          ik = Tk - Fk,
          yk = kk => Tk * kk / Xk.length,
          lk = kk => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: Tk,
              elapsedMs: ik,
              line: Xk[kk],
              lineIndex: kk
            })
          };
        let ak = 0;
        for (; ak + 1 < Xk.length && yk(ak + 1) <= ik;) ak++;
        lk(ak);
        for (let qk = ak + 1; qk < Xk.length; qk++) this.later(yk(qk) - ik, (() => {
          lk(qk)
        }));
        this.later(Fk, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(kk) {
        this.snapshot = kk, this.GL(kk)
      }
      later(kk, Fk) {
        this.timers.push(setTimeout(Fk, kk))
      }
      clearTimers() {
        for (const kk of this.timers) clearTimeout(kk);
        this.timers = []
      }
    }
    const AX = "skyblockTideChartsView",
      gX = 36e5,
      mX = 864e5;

    function hX(kk, Fk, Ik) {
      const [Xk, Tk, ik, yk] = kk.tideChartArea, lk = Math.floor(Fk), ak = Math.floor(Ik);
      return lk >= Xk && lk <= ik && ak >= Tk && ak <= yk
    }

    function rX(kk, Fk, Ik) {
      const [Xk, Tk, ik, yk] = kk.tideChartWater;
      return function(kk, Fk, Ik, Xk, Tk, ik) {
        const yk = 4 - dk(Math.floor(Tk) - (kk - Ik), Ik);
        return 5 * dk(Math.floor(ik) - (Fk - Xk), Xk) + yk
      }(Xk, Tk, ik, yk, Fk, Ik)
    }

    function DX(kk, Fk, Ik) {
      const Xk = kk.tideCharts;
      for (let Tk = 0; Tk < Xk.length; Tk++)
        if (hX(Xk[Tk], Fk, Ik)) return Xk[Tk];
      return null
    }

    function MX(kk, Fk, Ik) {
      const Xk = Math.max(0, Fk - Ik);
      return Xk > mX ? kk("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(Xk / mX))
      }) : Xk > gX ? kk("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(Xk / gX))
      }) : kk("skyblockGame:tideChartsTurnSoon")
    }
    class kT extends tk {
      constructor(kk, Fk, Ik, Xk) {
        let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(kk, Ik, Xk), this.translate = Fk, this.now = Tk, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.rZ = kk => {
          this.picked = kk, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      Pe(kk) {
        const Fk = this.message;
        if (null !== Fk)
          for (const Xk of kk.tideCharts) {
            var Ik;
            const kk = Fk.tideCharts.find((kk => kk.tideChartIsland === Xk.tideChartIsland)),
              Tk = Xk.tideChartLit & ~(null !== (Ik = null === kk || void 0 === kk ? void 0 : kk.tideChartLit) && void 0 !== Ik ? Ik : 0);
            void 0 !== kk && 0 !== Tk && (this.pulse = {
              island: Xk.tideChartIsland,
              cells: Tk,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = kk, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(kk, Fk) {
        var Ik;
        const Xk = null === this.message || Number.isNaN(kk) ? null : DX(this.message, kk, Fk),
          Tk = null !== (Ik = null === Xk || void 0 === Xk ? void 0 : Xk.tideChartIsland) && void 0 !== Ik ? Ik : null,
          ik = null === Xk ? -1 : function(kk, Fk, Ik) {
            const [Xk, Tk, ik, yk] = kk.tideChartWater;
            return function(kk, Fk, Ik, Xk, Tk, ik, yk) {
              return ((Tk - kk) / (Ik + yk)) ** 2 + ((ik - Fk) / (Xk + yk)) ** 2 <= 1
            }(Xk, Tk, ik, yk, Fk, Ik, 2) ? rX(kk, Fk, Ik) : -1
          }(Xk, kk, Fk);
        return (Tk !== this.hereIsland || ik !== this.hereCell) && (this.hereIsland = Tk, this.hereCell = ik, null !== Tk && (this.lastIsland = Tk), !0)
      }
      afterRender(kk) {
        if (null === this.message) return;
        this.lastX = null === kk ? Number.NaN : kk[0], this.lastZ = null === kk ? Number.NaN : kk[2];
        const Fk = this.locate(this.lastX, this.lastZ),
          Ik = this.expirePulses();
        (Fk || Ik || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const kk = this.now();
        return !(!this.open || kk - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = kk, MX(this.translate, this.message.tideChartTurnsInMs, kk - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(kk, Fk) {
        const Ik = null === this.message ? null : DX(this.message, kk, Fk);
        if (null === Ik) return;
        const Xk = rX(Ik, kk, Fk);
        0 === (Ik.tideChartPreBlank & 1 << Xk) && (this.cast = {
          island: Ik.tideChartIsland,
          cell: Xk,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const kk = this.now();
        let Fk = !1;
        return 0 !== this.pulse.cells && kk - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, Fk = !0), null !== this.cast && kk - this.cast.atMs >= 1500 && (this.cast = null, Fk = !0), Fk
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
      findChart(kk, Fk) {
        var Ik;
        return null !== (Ik = kk.tideCharts.find((kk => kk.tideChartIsland === Fk))) && void 0 !== Ik ? Ik : null
      }
      describe(kk) {
        var Fk, Ik, Xk;
        const Tk = kk.tideChartIsland,
          ik = [];
        for (let jk = 0; jk < 25; jk++) {
          const Fk = 1 << jk;
          0 !== (kk.tideChartLit & Fk) ? ik.push("lit") : 0 !== (kk.tideChartClear & Fk) ? ik.push("clear") : 0 !== (kk.tideChartPreBlank & Fk) ? ik.push("shore") : ik.push("water")
        }
        const yk = function(kk) {
            let Fk = 0;
            for (let Ik = kk >>> 0; 0 !== Ik; Ik &= Ik - 1) Fk++;
            return Fk
          }(kk.tideChartLit),
          lk = kk.tideChartInkCount,
          ak = this.translate(kk.tideChartIslandNameKey),
          qk = this.translate("skyblockGame:tideChartsLit", {
            lit: String(yk),
            ink: String(lk)
          }),
          Lk = null === kk.tideChartPictureNameKey ? null : this.translate(kk.tideChartPictureNameKey),
          tk = this.hereIsland === Tk && -1 !== this.hereCell ? this.hereCell : null,
          Zk = [`${ak}: ${qk}.`];
        if (null !== Lk && Zk.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: Lk
          })), null !== tk) {
          const kk = Math.floor(tk / 5) + 1,
            Fk = tk % 5 + 1;
          Zk.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(kk),
            column: String(Fk)
          }))
        }
        return {
          island: Tk,
          islandName: ak,
          cells: ik,
          hereCell: tk,
          lit: yk,
          ink: lk,
          litText: qk,
          pictureName: Lk,
          gridLabel: Zk.join(" "),
          pulseCells: this.pulse.island === Tk ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (Fk = this.cast) || void 0 === Fk ? void 0 : Fk.island) === Tk ? this.cast.cell : null,
          castToken: null !== (Ik = null === (Xk = this.cast) || void 0 === Xk ? void 0 : Xk.token) && void 0 !== Ik ? Ik : 0
        }
      }
      buildSnapshot() {
        var kk, Fk, Ik;
        const Xk = this.message;
        if (null === Xk || 0 === Xk.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const Tk = this.findChart(Xk, this.hereIsland),
          ik = null !== (kk = null !== (Fk = null !== (Ik = this.findChart(Xk, this.open ? this.picked : null)) && void 0 !== Ik ? Ik : Tk) && void 0 !== Fk ? Fk : this.findChart(Xk, this.lastIsland)) && void 0 !== kk ? kk : Xk.tideCharts[0],
          yk = null === Tk ? null : this.describe(Tk);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: yk,
          card: ik === Tk ? yk : this.describe(ik),
          turnsText: MX(this.translate, Xk.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(Xk.tideChartBookCount)
          }),
          tabs: Xk.tideCharts.map((kk => ({
            island: kk.tideChartIsland,
            name: this.translate(kk.tideChartIslandNameKey),
            selected: kk.tideChartIsland === ik.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const FT = "skyblockRegularsView",
      IT = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      XT = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function TT(kk, Fk) {
      return "given" === kk ? Fk.given : "owed" === kk ? Fk.owed : Fk.goal
    }
    class iT extends tk {
      constructor(kk, Fk, Ik, Xk) {
        super(kk, Ik, Xk), this.translate = Fk, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = kk => kk, this.openIsland = kk => {
          this.selected = kk, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = kk => {
          this.selected = kk, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      Pe(kk) {
        this.message = kk, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const kk = this.openedFromReachLog;
        return this.openedFromReachLog = !1, kk
      }
      setTranslator(kk, Fk, Ik) {
        this.translate = kk, void 0 !== Ik && (this.itemName = Ik), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(kk, Fk, Ik) {
        return {
          text: this.translate(TT(kk, Fk), Ik),
          given: "given" === kk
        }
      }
      describeRegular(kk, Fk) {
        const Ik = this.translate,
          Xk = null !== kk.regularKg,
          Tk = kk.regularMeetings,
          ik = Xk ? 0 === Tk ? Ik("skyblockGame:regularsNotMet") : 1 === Tk ? Ik("skyblockGame:regularsMeetingsOne") : Ik("skyblockGame:regularsMeetings", {
            count: Tk
          }) : "";
        return {
          id: kk.regularId,
          name: Ik(kk.regularNameKey),
          line: Ik(kk.regularLineKey),
          itemName: kk.regularFishItem,
          fishName: this.itemName(kk.regularFishItem),
          tagged: Xk,
          size: null === kk.regularKg ? Ik("skyblockGame:regularsNotTagged") : Ik("skyblockGame:regularsSize", {
            kg: kk.regularKg.toFixed(1)
          }),
          meetings: ik,
          chance: Ik("skyblockGame:regularsChance", {
            count: kk.regularOneInCasts
          }),
          resting: kk.regularRestingToday,
          gifts: [{
            text: Ik("skyblockGame:regularsGiftFlare"),
            given: Tk >= 3
          }, this.describeGift(kk.regularTintGift, IT, {
            tint: Ik(kk.regularTintNameKey)
          })],
          history: [...kk.regularHistory].reverse().map((kk => {
            const Xk = kk.regularMeetingKg.toFixed(1),
              Tk = Fk - kk.regularMeetingDay;
            return Tk <= 0 ? Ik("skyblockGame:regularsToday", {
              kg: Xk
            }) : Ik("skyblockGame:regularsDaysAgo", {
              days: Tk,
              kg: Xk
            })
          }))
        }
      }
      describeIsland(kk, Fk) {
        return {
          id: kk.regularsIslandId,
          name: this.translate(kk.regularsIslandNameKey),
          charm: this.describeGift(kk.regularsCharmGift, XT, {
            charm: this.translate(kk.regularsCharmNameKey)
          }),
          regulars: kk.regularsList.map((kk => this.describeRegular(kk, Fk)))
        }
      }
      buildSnapshot() {
        var kk, Fk, Ik, Xk;
        const Tk = this.message;
        if (null === Tk) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const ik = Tk.regularsIslands.map((kk => this.describeIsland(kk, Tk.regularsToday))),
          yk = null !== (kk = null !== (Fk = null === (Ik = ik.find((kk => kk.id === this.selected))) || void 0 === Ik ? void 0 : Ik.id) && void 0 !== Fk ? Fk : null === (Xk = ik[0]) || void 0 === Xk ? void 0 : Xk.id) && void 0 !== kk ? kk : "";
        return {
          enabled: !0,
          open: this.open,
          selected: yk,
          islands: ik
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const yT = "skyblockHiddenWatersView";
    class lT {
      constructor(kk) {
        this.GL = kk, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      Pe(kk) {
        this.snapshot = function(kk) {
          const [Fk, Ik] = kk.hiddenWatersMapSize, Xk = (kk, Xk) => ({
            left: 1 - kk / Fk,
            top: Xk / Ik
          }), Tk = new Map;
          for (const [yk, lk] of kk.hiddenWatersGlimpses) {
            var ik;
            const kk = null !== (ik = Tk.get(yk)) && void 0 !== ik ? ik : [];
            kk.push(lk), Tk.set(yk, kk)
          }
          return {
            found: kk.hiddenWatersFound,
            total: kk.hiddenWatersTotal,
            aspect: Ik / Fk,
            pins: kk.hiddenWatersPins.map((kk => {
              let [Fk, Ik] = kk;
              return Xk(Fk, Ik)
            })),
            islands: kk.hiddenWatersIslands.map((kk => {
              let [Tk, ik, yk, lk] = kk;
              const {
                left: ak,
                top: qk
              } = Xk(yk + 1, ik);
              return {
                left: ak,
                top: qk,
                width: (yk + 1 - Tk) / Fk,
                height: (lk + 1 - ik) / Ik
              }
            })),
            glimpses: Tk
          }
        }(kk), this.GL(this.snapshot)
      }
    }
    const aT = "skyblockDialogueView";
    class qT extends tk {
      constructor(kk, Fk, Ik, Xk, Tk) {
        let ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(kk, Ik, Xk), this.translate = Fk, this.requestDialogue = Tk, this.now = ik, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
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
      Pe(kk) {
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
        const Fk = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...Fk,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const Ik = this.selection;
        if ("quest" === Ik.kind) {
          const kk = this.scripts.find((kk => kk.dialogueQuestId === Ik.questId));
          return {
            ...Fk,
            characters: [],
            questFocus: Ik.questId,
            conversations: kk ? [this.conversation(kk)] : []
          }
        }
        const Xk = [];
        for (let ik = this.scripts.length - 1; ik >= 0; ik--) {
          const kk = this.scripts[ik].dialogueLines;
          for (let Fk = kk.length - 1; Fk >= 0; Fk--) Xk.includes(kk[Fk].dialogueSpeakerId) || Xk.push(kk[Fk].dialogueSpeakerId)
        }
        const Tk = null !== Ik.npcId && Xk.includes(Ik.npcId) ? Ik.npcId : null !== (kk = Xk[0]) && void 0 !== kk ? kk : null;
        return {
          ...Fk,
          characters: Xk.map((kk => {
            var Fk, Ik;
            return {
              id: kk,
              styling: null !== (Fk = null === (Ik = this.speakers.get(kk)) || void 0 === Ik ? void 0 : Ik.dialogueSpeakerStyling) && void 0 !== Fk ? Fk : kk,
              selected: kk === Tk
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((kk => kk.dialogueLines.some((kk => kk.dialogueSpeakerId === Tk)))).map((kk => this.conversation(kk))).reverse()
        }
      }
      conversation(kk) {
        let Fk = null;
        return {
          questId: kk.dialogueQuestId,
          questName: this.translate(kk.dialogueQuestNameKey),
          completed: kk.dialogueQuestCompleted,
          lines: kk.dialogueLines.map(((kk, Ik) => {
            var Xk;
            const Tk = kk.dialogueSpeakerId === Fk || null === (Xk = this.speakers.get(kk.dialogueSpeakerId)) || void 0 === Xk ? void 0 : Xk.dialogueSpeakerStyling;
            return Fk = kk.dialogueSpeakerId, {
              key: Ik,
              display: {
                line: {
                  translationKey: kk.dialogueLineKey,
                  params: this.params(kk.dialogueLineParams)
                },
                speakerName: Tk,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(kk) {
        if (void 0 !== kk) return Object.fromEntries(Object.entries(kk).map((kk => {
          let [Fk, Ik] = kk;
          return [Fk, "string" === typeof Ik ? Ik : this.translate(Ik.translationKey)]
        })))
      }
    }
    var LT = Ik(612),
      tT = Ik(1253),
      ZT = Ik(95);
    const jT = "skyblockAutographsView";

    function eT(kk) {
      const Fk = LT.j[kk];
      return {
        label: Fk.chatTag.map((kk => kk.str)).join(""),
        icon: Fk.icon,
        colour: Fk.mainRGB
      }
    }
    class wT extends tk {
      constructor(kk) {
        let Fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = Fk, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      Pe(kk) {
        this.signatures = kk.autographSignatures, kk.autographOpen ? this.show() : this.emit()
      }
      setTranslator(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = Fk, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var kk;
        const Fk = null !== (kk = this.signatures) && void 0 !== kk ? kk : [],
          Ik = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          Xk = [...Fk].sort(((kk, Fk) => Number(null !== Fk.autographRank) - Number(null !== kk.autographRank) || Fk.autographSignedAtMs - kk.autographSignedAtMs)).map((kk => ({
            key: `${kk.autographSignedAtMs}|${kk.autographSignerName}`,
            name: (0, tT.e)(kk.autographSignerName, !ZT.featureFlags.canSeeRealPlayerNames),
            rank: null === kk.autographRank ? null : eT(kk.autographRank),
            signedOn: Ik.format(kk.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: Xk,
          total: Xk.length,
          rankTotal: Xk.filter((kk => null !== kk.rank)).length
        }
      }
    }
    const HT = "skyblockHudView",
      JT = () => {},
      xT = {
        getItem: () => null,
        setItem: JT,
        removeItem: JT
      };
    class PT {
      constructor(kk) {
        let {
          translate: Fk,
          translateWithIcons: Ik,
          setMenuOpen: Xk = JT,
          dismissMenu: Tk = () => {
            Xk(!1)
          },
          publishSkills: ik = JT,
          publishQuests: yk = JT,
          publishQuestNotification: lk = JT,
          publishDungeons: ak = JT,
          publishCollections: qk = JT,
          publishMap: Lk = JT,
          publishHud: tk = JT,
          publishPortalTransit: Zk = JT,
          publishDailyReward: ek = JT,
          publishMailbox: wk = JT,
          publishQuestGraph: Hk = JT,
          publishForge: Jk = JT,
          publishSmuggler: xk = JT,
          publishKeepersChair: Pk = JT,
          publishReachLog: Kk = JT,
          publishLampLight: Qk = JT,
          publishMagmaward: sk = JT,
          publishGlowtide: zk = JT,
          publishGlowMeter: Sk = JT,
          publishHushWait: vk = JT,
          publishPassage: Ek = JT,
          publishTideCharts: Ok = JT,
          publishRegulars: nk = JT,
          publishHiddenWaters: Gk = JT,
          publishDialogue: pk = JT,
          publishAutographs: uk = JT,
          isLoadingScreenUp: bk = () => !1,
          onDailyRewardCoinLanded: Rk = JT,
          onDailyRewardStarted: Uk = JT,
          onDailyRewardFinished: Ck = JT,
          onDailyRewardItemLanded: Nk = JT,
          onMailboxStarted: ck = JT,
          journeyStorage: Wk = xT,
          requestTracking: fk = JT,
          requestTravel: Bk = JT,
          requestDungeonEnter: dk = JT,
          requestQuestJump: Yk = JT,
          requestQuestArrive: Ak = JT,
          requestForge: gk = JT,
          requestSmuggle: mk = JT,
          requestKeepersChairAim: hk = JT,
          requestReachLogOpen: rk = JT,
          requestLampLight: Dk = JT,
          requestDialogue: Mk = JT
        } = kk;
        this.navigation = void 0, this.map = void 0, this.compass = new Vk, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new oX.e, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = kk => kk, this.close = () => {
          for (const kk of this.panels) kk.close()
        }, this.setMenuOpen = Xk, this.publishHud = tk, this.portalTransit = new cI(Zk, Wk), this.magmaward = new NX(sk), this.glowtide = new WX(zk), this.glowMeter = new BX(Sk), this.hushWait = new YX(vk), this.dailyReward = new BI(ek, (() => bk() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (kk => {
          this.quests.setNotificationsHeld(kk)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), Rk, Uk, Ck, Nk);
        const kF = kk => {
          this.panels.some((kk => kk.isOpen())) || (kk ? Tk() : this.setMenuOpen(!1))
        };
        this.skills = new lI(ik, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), Fk, void 0, void 0, kF), this.quests = new ZI(yk, fk, Fk, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, kF, lk), this.dungeons = new wI(ak, Fk, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, kF, dk), this.collections = new UI(qk, Fk, (() => {
          this.beforePanelOpen(this.collections)
        }), kF), this.map = new jk(Lk, Bk, Fk, (() => {
          this.beforePanelOpen(this.map)
        }), kF), this.questGraph = new MI(Hk, Fk, (() => {
          this.beforePanelOpen(this.questGraph)
        }), kF, Yk, Ak, Wk), this.forge = new JX(Jk, Fk, (() => {
          this.beforePanelOpen(this.forge)
        }), kF, gk), this.smuggler = new KX(xk, Fk, (() => {
          this.beforePanelOpen(this.smuggler)
        }), kF, mk), this.lampLight = new UX(Qk, Fk, Dk, this.commandPacer), this.keepersChair = new EX(Pk, Fk, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (kk => {
          this.lampLight.onChairClosed(), kF(kk)
        }), hk, Date.now, this.commandPacer), this.reachLog = new bX(Kk, Fk, (() => {
          this.beforePanelOpen(this.reachLog)
        }), kF, rk, this.commandPacer), this.passage = new SX(Ek, Fk, (() => {
          this.beforePanelOpen(this.passage)
        }), kF), this.tideCharts = new kT(Ok, Fk, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), kF), this.regulars = new iT(nk, Fk, (() => {
          this.beforePanelOpen(this.regulars)
        }), (kk => {
          this.regulars.takeReturnToReachLog() && !kk && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), kF(kk)
        })), this.hiddenWaters = new lT(Gk), this.dialogue = new qT(pk, Fk, (() => {
          this.beforePanelOpen(this.dialogue)
        }), kF, Mk), this.autographs = new wT(uk, (() => {
          this.beforePanelOpen(this.autographs)
        }), kF), this.mailbox = new gI(wk, (() => bk() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), ck), this.quests.translateWithIcons = null !== Ik && void 0 !== Ik ? Ik : null, this.skills.onLevelUp = kk => {
          this.quests.notify(kk)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new iI(this.map, this.quests, this.compass, Fk)
      }
      getHudSnapshot() {
        const kk = this.hudSnapshot,
          Fk = this.dailyReward.getHeldCoins();
        return null === kk || Fk <= 0 || !("hudPurseCoins" in kk) ? kk : {
          ...kk,
          hudPurseCoins: Math.max(0, kk.hudPurseCoins - Fk)
        }
      }
      receiveHud(kk) {
        this.hudSnapshot = kk, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(kk) {
        this.setMenuOpen(!0);
        const Fk = kk === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = kk;
        for (const Ik of this.panels) Ik === kk || Fk && Ik === this.reachLog || Ik.close();
        this.openingPanel = null
      }
      setTranslator(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Fk => this.resolveItemName(Fk, kk);
        this.quests.translateWithIcons = null !== Ik && void 0 !== Ik ? Ik : null, this.navigation.setTranslator(kk, Fk), this.lampLight.setTranslator(kk, Fk), this.mailbox.setItemName(Xk);
        for (const Tk of this.panels) Tk.setTranslator(kk, Fk, Xk)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const kk of this.panels) kk.dispose()
      }
    }
    var KT = Ik(1055),
      QT = Ik.n(KT),
      sT = Ik(25),
      VT = Ik(36597),
      zT = Ik(3349),
      ST = Ik(1864),
      oT = Ik(1849),
      vT = Ik(34202),
      ET = Ik(1179),
      OT = Ik(1402),
      nT = Ik(1096);

    function GT(kk) {
      let {
        controller: Fk,
        minimap: Ik,
        children: Xk
      } = kk;
      const ik = (0, OT.f)(HT, Fk.getHudSnapshot()),
        [yk, lk] = (0, Sk.useState)(Fk.skills.getSnapshot().overallLevel);
      (0, OT.d)(yI, (kk => {
        lk(kk.overallLevel)
      }));
      const ak = (0, Sk.useRef)(null);
      (0, OT.d)(fI, (kk => {
        ! function(kk, Fk) {
          if (null === kk || "function" !== typeof kk.animate) return;
          const Ik = Fk ? 1.35 : 1.15;
          kk.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${Ik})`
          }, {
            transform: "scale(1)"
          }], {
            duration: Fk ? 320 : 160,
            easing: "ease-out"
          }), kk.classList.toggle("Receiving", !Fk), Fk && (kk.classList.remove("Shine"), kk.offsetWidth, kk.classList.add("Shine"))
        }(ak.current, kk)
      }));
      const {
        t: qk
      } = (0, ET.y)(), {
        isTouchScreen: Lk
      } = (0, sT.j)(["isTouchScreen"]), [tk, Zk] = (0, Sk.useState)(null);
      return (0, zT.i)(tk, ".SkyblockRightHud"), null !== ik || Ik ? (0, nT.jsx)(VT.f, {
        placement: "topRight",
        children: (0, nT.jsxs)("div", {
          className: QT()("SkyblockRightHud", {
            TouchScreen: Lk
          }),
          children: [Ik, null !== ik && (0, nT.jsxs)("div", {
            ref: Zk,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in ik ? (0, nT.jsx)("div", {
              className: "SkyblockHudHelp",
              children: ik.hudHelpText
            }) : (0, nT.jsxs)(nT.Fragment, {
              children: [(0, nT.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, nT.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, nT.jsx)("strong", {
                    style: {
                      color: Tk.J.cyanUiText
                    },
                    children: qk(ik.hudZoneNameKey)
                  }), null !== yk && (0, nT.jsx)("span", {
                    style: {
                      color: Tk.J.goldUiText
                    },
                    children: qk("skyblockGame:level", {
                      level: (0, vT.d)(yk)
                    })
                  })]
                }), (0, nT.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: ak,
                  children: [(0, nT.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, nT.jsx)(ST.d, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, vT.d)(ik.hudPurseCoins)]
                })]
              }), ik.hudClockText.length > 0 && (0, nT.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, nT.jsx)(oT.c, {
                  text: ik.hudClockText
                })
              })]
            }), Xk, "hudZoneNameKey" in ik && (0, nT.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function pT(kk) {
      let {
        icon: Fk
      } = kk;
      const Ik = (0, Sk.useCallback)((kk => {
        null === kk || void 0 === kk || kk.replaceChildren(AF(Fk))
      }), [Fk]);
      return (0, nT.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: Ik
      })
    }

    function uT(kk) {
      let {
        controller: Fk
      } = kk;
      const {
        t: Ik
      } = (0, ET.y)();
      return (0, nT.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: Fk.display.mountPlayer,
        title: Ik("skyblockGame:mapYouAreHere"),
        children: (0, nT.jsx)(pT, {
          icon: "player"
        })
      })
    }
    const bT = Ik(38548),
      RT = Object.fromEntries(bT.keys().map((kk => [kk.replace(/^\.\/(.*)\.png$/, "$1"), bT(kk)])));

    function UT(kk, Fk) {
      var Ik;
      return null !== (Ik = RT[kk]) && void 0 !== Ik ? Ik : RT[Fk]
    }

    function CT(kk) {
      let {
        imageKey: Fk,
        fallbackImageKey: Ik,
        geometryKey: Xk,
        alt: Tk,
        className: ik
      } = kk;
      const [yk, lk] = (0, Sk.useState)((() => function(kk, Fk) {
        return [{
          id: 0,
          imageKey: kk,
          geometryKey: Fk,
          phase: "shown"
        }]
      }(Fk, Xk))), ak = function(kk, Fk, Ik) {
        const Xk = kk[kk.length - 1];
        if (Xk.imageKey === Fk && Xk.geometryKey === Ik) return kk;
        const Tk = {
          id: Xk.id + 1,
          imageKey: Fk,
          geometryKey: Ik,
          phase: "entering"
        };
        return Xk.geometryKey === Ik ? [{
          ...Xk,
          phase: "leaving"
        }, Tk] : [Tk]
      }(yk, Fk, Xk);
      return ak !== yk && lk(ak), (0, nT.jsx)(nT.Fragment, {
        children: ak.map((kk => (0, nT.jsx)("img", {
          className: QT()("SkyblockMapTerrainImage", ik, {
            Entering: "entering" === kk.phase,
            Leaving: "leaving" === kk.phase
          }),
          src: UT(kk.imageKey, Ik),
          alt: "leaving" === kk.phase ? "" : Tk,
          onAnimationEnd: () => {
            lk((Fk => function(kk, Fk) {
              return kk.flatMap((kk => kk.id !== Fk ? [kk] : "leaving" === kk.phase ? [] : [{
                ...kk,
                phase: "shown"
              }]))
            }(Fk, kk.id)))
          }
        }, kk.id)))
      })
    }
    var NT = Ik(4516),
      cT = Ik(1406);

    function WT(kk) {
      if ("Tab" !== kk.key) return;
      const Fk = Array.from(kk.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        Ik = Fk.indexOf(document.activeElement);
      var Xk;
      if (kk.shiftKey && Ik <= 0) kk.preventDefault(), null === (Xk = Fk.at(-1)) || void 0 === Xk || Xk.focus();
      else if (!kk.shiftKey && (-1 === Ik || Ik === Fk.length - 1)) {
        var Tk;
        kk.preventDefault(), null === (Tk = Fk[0]) || void 0 === Tk || Tk.focus()
      }
    }

    function fT() {
      const kk = (0, Sk.useRef)(null);
      return (0, Sk.useCallback)((Fk => {
        var Ik;
        Fk ? (kk.current = document.activeElement, Fk.focus()) : null === (Ik = kk.current) || void 0 === Ik || Ik.focus()
      }), [])
    }

    function BT(kk) {
      let {
        percent: Fk,
        label: Ik,
        levelUpToken: Xk,
        colour: Tk
      } = kk;
      return (0, nT.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": Ik,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Fk,
        "aria-valuetext": Ik,
        children: [(0, nT.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${Fk/100})`
          }
        }), null !== Xk && void 0 !== Xk && (0, nT.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": Tk
          }
        }, Xk)]
      })
    }

    function dT(kk) {
      let {
        mount: Fk
      } = kk;
      return (0, nT.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: Fk,
        hidden: !0,
        children: (0, nT.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, nT.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, nT.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function YT(kk, Fk, Ik, Xk) {
      (0, Sk.useLayoutEffect)((() => {
        const Tk = kk.current;
        if (!Ik || null === Fk || void 0 === Fk || !Fk.local || !Tk) return;
        const ik = Array.from(Tk.querySelectorAll(".SkyblockMapNode")),
          yk = [...Fk.points, ...Fk.portals],
          lk = () => {
            const kk = Tk.clientWidth,
              Ik = Tk.clientHeight,
              lk = ik.map(((Tk, ik) => {
                const lk = yk[ik];
                return {
                  id: lk.id,
                  portal: ik >= Fk.points.length,
                  x: lk.position[0] * kk / 100,
                  y: lk.position[1] * Ik / 100,
                  width: Tk.offsetWidth / Xk,
                  height: Tk.offsetHeight / Xk
                }
              })),
              ak = new Map(yk.map(((kk, Fk) => [kk.id, ik[Fk]])));
            for (const Fk of function(kk, Fk, Ik) {
                const Xk = [],
                  Tk = [...kk].sort(((kk, Fk) => Number(Fk.portal) - Number(kk.portal) || kk.id.localeCompare(Fk.id)));
                for (const ik of Tk) {
                  const kk = kk => Math.max(ik.width / 2, Math.min(Fk - ik.width / 2, kk)),
                    Tk = kk => Math.max(ik.height / 2, Math.min(Ik - ik.height / 2, kk)),
                    yk = [kk(ik.x)],
                    lk = [Tk(ik.y)];
                  for (const Fk of Xk) yk.push(kk(Fk.x - (Fk.width + ik.width) / 2 - 4), kk(Fk.x + (Fk.width + ik.width) / 2 + 4)), lk.push(Tk(Fk.y - (Fk.height + ik.height) / 2 - 4), Tk(Fk.y + (Fk.height + ik.height) / 2 + 4));
                  let ak = {
                      ...ik,
                      x: yk[0],
                      y: lk[0]
                    },
                    qk = 1 / 0,
                    Lk = 1 / 0;
                  for (const Fk of new Set(yk))
                    for (const kk of new Set(lk)) {
                      let Ik = 0;
                      for (const yk of Xk) Ik += Math.max(0, (ik.width + yk.width) / 2 + 4 - Math.abs(Fk - yk.x)) * Math.max(0, (ik.height + yk.height) / 2 + 4 - Math.abs(kk - yk.y));
                      const Tk = (Fk - ik.x) ** 2 + (kk - ik.y) ** 2;
                      (Ik < qk || Ik === qk && Tk < Lk) && (ak = {
                        ...ik,
                        x: Fk,
                        y: kk
                      }, qk = Ik, Lk = Tk)
                    }
                  Xk.push(ak)
                }
                return Xk
              }(lk, kk, Ik)) {
              const kk = ak.get(Fk.id);
              kk.style.left = `${Fk.x}px`, kk.style.top = `${Fk.y}px`
            }
          };
        lk();
        const ak = new ResizeObserver(lk);
        ak.observe(Tk);
        for (const kk of ik) ak.observe(kk);
        return () => {
          ak.disconnect()
        }
      }), [kk, Fk, Ik, Xk])
    }
    const AT = {
        zoom: 1,
        x: 0,
        y: 0
      },
      gT = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function mT(kk, Fk, Ik) {
      return Math.min(Ik, Math.max(Fk, kk))
    }

    function hT(kk, Fk, Ik) {
      const Xk = Math.min(1, Ik * Fk / kk),
        Tk = Math.min(1, kk / (Ik * Fk));
      return {
        x0: (1 - Xk) / 2,
        y0: (1 - Tk) / 2,
        x1: (1 + Xk) / 2,
        y1: (1 + Tk) / 2
      }
    }

    function rT(kk, Fk, Ik, Xk) {
      const Tk = Fk * (Xk - Ik);
      if (Tk <= 1) return .5 - Fk * (Ik + Xk) / 2;
      const ik = .45 * Math.min(1, Tk - 1);
      return mT(kk, 1 - Fk * Xk - ik, ik - Fk * Ik)
    }

    function DT(kk, Fk) {
      const Ik = mT(kk.zoom, 1, 12);
      return {
        zoom: Ik,
        x: rT(kk.x, Ik, Fk.x0, Fk.x1),
        y: rT(kk.y, Ik, Fk.y0, Fk.y1)
      }
    }

    function MT(kk, Fk, Ik, Xk) {
      let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : gT;
      const ik = mT(kk.zoom * Fk, 1, 12),
        yk = ik / kk.zoom;
      return DT({
        zoom: ik,
        x: Ik - (Ik - kk.x) * yk,
        y: Xk - (Xk - kk.y) * yk
      }, Tk)
    }

    function ki(kk, Fk, Ik, Xk) {
      const [Tk, ik] = (0, Sk.useState)(AT);
      (0, Sk.useEffect)((() => {
        ik(AT)
      }), [Ik]), (0, Sk.useEffect)((() => {
        const Ik = kk.current;
        if (!Fk || !Ik) return;
        const Tk = () => hT(Ik.clientWidth, Ik.clientHeight, Xk),
          yk = kk => {
            const Fk = Ik.getBoundingClientRect();
            return {
              x: (kk.clientX - Fk.left) / Fk.width,
              y: (kk.clientY - Fk.top) / Fk.height
            }
          },
          lk = new Map;
        let ak = {
            x: 0,
            y: 0
          },
          qk = !1,
          Lk = 0;
        const tk = kk => {
            kk.preventDefault();
            const Fk = kk.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * kk.deltaY : kk.deltaY,
              Ik = yk(kk);
            ik((kk => MT(kk, Math.exp(.0015 * -Fk), Ik.x, Ik.y, Tk())))
          },
          Zk = kk => {
            "mouse" === kk.pointerType && 0 !== kk.button || (lk.set(kk.pointerId, yk(kk)), 1 === lk.size && (ak = {
              x: kk.clientX,
              y: kk.clientY
            }, qk = !1), Lk = 0)
          },
          jk = kk => {
            const Fk = lk.get(kk.pointerId);
            if (!Fk) return;
            const Xk = yk(kk);
            if (lk.set(kk.pointerId, Xk), 2 === lk.size) {
              const [kk, Fk] = [...lk.values()], Ik = Math.hypot(kk.x - Fk.x, kk.y - Fk.y);
              if (Lk > 0) {
                const Xk = Ik / Lk;
                ik((Ik => MT(Ik, Xk, (kk.x + Fk.x) / 2, (kk.y + Fk.y) / 2, Tk())))
              }
              return Lk = Ik, void(qk = !0)
            }!qk && Math.hypot(kk.clientX - ak.x, kk.clientY - ak.y) < 4 || (qk || (qk = !0, Ik.setPointerCapture(kk.pointerId)), ik((kk => function(kk, Fk, Ik) {
              let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : gT;
              return DT({
                zoom: kk.zoom,
                x: kk.x + Fk,
                y: kk.y + Ik
              }, Xk)
            }(kk, Xk.x - Fk.x, Xk.y - Fk.y, Tk()))))
          },
          ek = kk => {
            lk.delete(kk.pointerId), Lk = 0
          },
          wk = kk => {
            qk && (kk.stopPropagation(), kk.preventDefault(), qk = !1)
          },
          Hk = new ResizeObserver((() => {
            ik((kk => DT(kk, Tk())))
          }));
        return Hk.observe(Ik), Ik.addEventListener("wheel", tk, {
          passive: !1
        }), Ik.addEventListener("pointerdown", Zk), Ik.addEventListener("pointermove", jk), Ik.addEventListener("pointerup", ek), Ik.addEventListener("pointercancel", ek), Ik.addEventListener("click", wk, !0), () => {
          Hk.disconnect(), Ik.removeEventListener("wheel", tk), Ik.removeEventListener("pointerdown", Zk), Ik.removeEventListener("pointermove", jk), Ik.removeEventListener("pointerup", ek), Ik.removeEventListener("pointercancel", ek), Ik.removeEventListener("click", wk, !0)
        }
      }), [kk, Fk, Ik, Xk]);
      return {
        view: Tk,
        zoomBy: Fk => {
          const Ik = kk.current;
          Ik && ik((kk => MT(kk, Fk, .5, .5, hT(Ik.clientWidth, Ik.clientHeight, Xk))))
        }
      }
    }

    function Fi(kk) {
      var Fk, Ik, Xk, Tk;
      let {
        controller: ik,
        navigation: yk
      } = kk;
      const lk = (0, OT.f)(Zk, ik.getSnapshot()),
        {
          t: ak
        } = (0, ET.y)(),
        qk = fT(),
        Lk = lk.presentation,
        tk = (0, Sk.useRef)(null),
        jk = (0, Sk.useRef)(null),
        ek = Boolean(lk.open && (null === Lk || void 0 === Lk ? void 0 : Lk.local) && Lk.background),
        wk = ki(tk, ek, `${lk.open}|${lk.tab}|${null===Lk||void 0===Lk||null===(Fk=Lk.background)||void 0===Fk?void 0:Fk.geometryKey}`, null !== (Ik = null === Lk || void 0 === Lk || null === (Xk = Lk.background) || void 0 === Xk ? void 0 : Xk.ratio) && void 0 !== Ik ? Ik : 2);
      if (YT(jk, Lk, lk.open, wk.view.zoom), !Lk || !lk.open) return null;
      const Hk = Lk.local ? Lk.background : null,
        Jk = {
          "--map-ratio": String(null !== (Tk = null === Hk || void 0 === Hk ? void 0 : Hk.ratio) && void 0 !== Tk ? Tk : 2),
          backgroundColor: null === Hk || void 0 === Hk ? void 0 : Hk.colour
        },
        xk = {
          "--map-zoom": String(wk.view.zoom),
          transform: `translate(${100*wk.view.x}%, ${100*wk.view.y}%) scale(${wk.view.zoom})`
        };
      return (0, nT.jsx)(NT.c, {
        show: lk.open,
        close: ik.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, nT.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: qk,
          onKeyDown: WT,
          children: [(0, nT.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, nT.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, nT.jsx)("h2", {
                id: "skyblockMapTitle",
                children: ak("skyblockGame:map")
              }), Lk.minimap && (0, nT.jsx)("p", {
                children: Lk.minimap.caption
              })]
            }), (0, nT.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((kk => (0, nT.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": kk === lk.tab ? "true" : void 0,
                className: QT()({
                  Selected: kk === lk.tab
                }),
                "aria-pressed": kk === lk.tab,
                onClick: () => {
                  ik.selectTab(kk)
                },
                children: ak("local" === kk ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, kk)))
            }), (0, nT.jsx)(cT.k, {
              padIgnore: !0,
              onClick: ik.dismiss
            })]
          }), (0, nT.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, nT.jsxs)("div", {
              ref: tk,
              className: QT()("SkyblockMapCanvas", {
                Local: Lk.local,
                Overview: !Lk.local,
                Zoomed: wk.view.zoom > 1
              }),
              style: Jk,
              children: [(0, nT.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: ek ? xk : void 0,
                children: (0, nT.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: jk,
                  children: [Hk && (0, nT.jsx)(CT, {
                    className: "SkyblockMapTerrain",
                    imageKey: Hk.imageKey,
                    fallbackImageKey: Hk.fallbackImageKey,
                    geometryKey: Hk.geometryKey,
                    alt: Hk.label
                  }), Lk.local && (0, nT.jsx)(dT, {
                    mount: yk.display.mountMapSearchArea
                  }), !Lk.local && (0, nT.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: Lk.connections.map((kk => (0, nT.jsx)("line", {
                      className: QT()({
                        Explored: kk.explored
                      }),
                      x1: kk.start[0],
                      y1: kk.start[1],
                      x2: kk.end[0],
                      y2: kk.end[1]
                    }, kk.id)))
                  }), Lk.points.map((kk => {
                    const Fk = !Lk.local && kk.thumbnail ? RT[kk.thumbnail] : void 0;
                    return (0, nT.jsxs)("div", {
                      className: QT()("SkyblockMapNode", {
                        Current: kk.current
                      }),
                      style: {
                        left: `${kk.position[0]}%`,
                        top: `${kk.position[1]}%`
                      },
                      children: [(0, nT.jsxs)(cT.d, {
                        className: QT()("SkyblockMapPin", {
                          Unknown: !kk.visited,
                          Current: kk.current
                        }),
                        disabled: lk.pending,
                        onClick: () => {
                          ik.travel(kk.travelKind, kk.travelId)
                        },
                        children: [Fk && (0, nT.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: Fk,
                          alt: ""
                        }), !Fk && (0, nT.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, nT.jsx)(pT, {
                            icon: kk.icon
                          })
                        }), (0, nT.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: kk.name
                        })]
                      }), kk.current && (0, nT.jsx)("span", {
                        className: QT()("SkyblockMapHereBadge", {
                          Above: kk.position[1] > 50
                        }),
                        children: ak("skyblockGame:mapYouAreHere")
                      })]
                    }, kk.id)
                  })), Lk.portals.map((kk => (0, nT.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${kk.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${kk.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, nT.jsxs)(cT.d, {
                      className: "SkyblockMapPin",
                      disabled: lk.pending,
                      onClick: () => {
                        ik.travel(kk.travelKind, kk.travelId)
                      },
                      children: [(0, nT.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: kk.colour
                        },
                        "aria-hidden": "true",
                        children: (0, nT.jsx)(pT, {
                          icon: kk.icon
                        })
                      }), (0, nT.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: kk.name
                      })]
                    })
                  }, kk.id))), Lk.local && (0, nT.jsx)(uT, {
                    controller: yk
                  })]
                })
              }), ek && (0, nT.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, nT.jsx)("button", {
                  type: "button",
                  "aria-label": ak("skyblockGame:mapZoomIn"),
                  disabled: wk.view.zoom >= 12,
                  onClick: () => {
                    wk.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, nT.jsx)("button", {
                  type: "button",
                  "aria-label": ak("skyblockGame:mapZoomOut"),
                  disabled: wk.view.zoom <= 1,
                  onClick: () => {
                    wk.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, nT.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: lk.feedback
              })]
            })
          }), (0, nT.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [Lk.progress && (0, nT.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, nT.jsx)("span", {
                children: Lk.progress
              }), (0, nT.jsx)(BT, {
                percent: Lk.percent,
                label: Lk.progress
              })]
            }), Lk.noLandmarks && (0, nT.jsx)("span", {
              children: ak("skyblockGame:mapNoLandmarks")
            }), Lk.canTravel && (0, nT.jsx)("span", {
              className: "SkyblockMapHint",
              children: ak("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function Ii(kk) {
      let {
        view: Fk,
        controller: Ik,
        navigation: Xk
      } = kk;
      const {
        t: Tk
      } = (0, ET.y)(), {
        isTouchScreen: ik
      } = (0, sT.j)(["isTouchScreen"]);
      return (0, nT.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": Tk("skyblockGame:mapLocal"),
        children: [ik && (0, nT.jsx)(cT.d, {
          className: "SkyblockMinimapOpen",
          onClick: Ik.showLocal,
          children: Tk("skyblockGame:map")
        }), (0, nT.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: Fk.colour
          },
          children: [(0, nT.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: Xk.display.mountTerrain,
            style: {
              width: Fk.width,
              height: Fk.height
            },
            children: [(0, nT.jsx)(CT, {
              imageKey: Fk.imageKey,
              fallbackImageKey: Fk.fallbackImageKey,
              geometryKey: Fk.geometryKey,
              alt: Fk.label
            }), (0, nT.jsx)(dT, {
              mount: Xk.display.mountMinimapSearchArea
            }), Fk.markers.map((kk => (0, nT.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${kk.position[0]}%`,
                top: `${kk.position[1]}%`,
                color: kk.colour
              },
              title: kk.name,
              children: (0, nT.jsx)(pT, {
                icon: kk.icon
              })
            }, kk.id)))]
          }), (0, nT.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: Tk("skyblockGame:mapYouAreHere"),
            children: (0, nT.jsx)(pT, {
              icon: "player"
            })
          })]
        }), (0, nT.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: Fk.caption
        })]
      })
    }

    function Xi(kk) {
      let {
        controller: Fk
      } = kk;
      return (0, nT.jsxs)("div", {
        className: "SkyblockCompass",
        ref: Fk.display.mountCompass,
        children: [(0, nT.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, nT.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, nT.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function Ti(kk) {
      let {
        controller: Fk,
        surface: Ik
      } = kk;
      const {
        t: Xk
      } = (0, ET.y)(), Tk = (0, OT.f)(yI, Fk.getSnapshot()), ik = fT();
      return Tk.enabled ? (0, nT.jsxs)(nT.Fragment, {
        children: ["hud" === Ik && (0, nT.jsx)(VT.f, {
          placement: "statBars",
          children: Tk.hud && (0, nT.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": Tk.hud.colour
            },
            children: [(0, nT.jsx)(BT, {
              percent: Tk.hud.skill.percent,
              label: Tk.hud.skill.xp,
              levelUpToken: Tk.hud.levelUpToken,
              colour: Tk.hud.colour
            }), (0, nT.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, nT.jsxs)("span", {
                children: [Tk.hud.skill.label, " \xb7 ", Tk.hud.skill.level]
              }), (0, nT.jsx)("span", {
                children: Tk.hud.gain
              })]
            })]
          })
        }), "hud" === Ik && (0, nT.jsx)(VT.f, {
          children: Tk.hud && (0, nT.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, nT.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, nT.jsx)("strong", {
                children: Tk.hud.skill.label
              }), (0, nT.jsx)("span", {
                children: Tk.hud.gain
              })]
            }), (0, nT.jsx)(BT, {
              percent: Tk.hud.skill.percent,
              label: Tk.hud.skill.xp,
              levelUpToken: Tk.hud.levelUpToken,
              colour: Tk.hud.colour
            }), (0, nT.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, nT.jsx)("span", {
                children: Tk.hud.skill.level
              }), (0, nT.jsx)("span", {
                children: Tk.hud.skill.xp
              })]
            })]
          })
        }), "menu" === Ik && (0, nT.jsx)(NT.c, {
          show: Tk.open,
          close: Fk.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, nT.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: ik,
            onKeyDown: WT,
            children: [(0, nT.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, nT.jsxs)("div", {
                children: [(0, nT.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: Xk("skyblockGame:skills")
                }), (0, nT.jsx)("p", {
                  children: Xk("skyblockGame:skillsIntro")
                })]
              }), (0, nT.jsx)(cT.k, {
                padIgnore: !0,
                onClick: Fk.dismiss
              })]
            }), (0, nT.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, nT.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: Tk.skills.map((kk => (0, nT.jsxs)(cT.d, {
                  className: QT()("SkyblockSkillCard", {
                    Selected: kk.selected
                  }),
                  ariaPressed: kk.selected,
                  onClick: () => {
                    Fk.select(kk.id)
                  },
                  children: [(0, nT.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, nT.jsx)(ST.d, {
                      itemName: kk.icon,
                      amount: 0
                    })
                  }), (0, nT.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, nT.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, nT.jsx)("strong", {
                        children: kk.label
                      }), (0, nT.jsx)("span", {
                        children: kk.level
                      })]
                    }), (0, nT.jsx)(BT, {
                      percent: kk.percent,
                      label: `${kk.label}: ${kk.xp}`
                    }), (0, nT.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: kk.xp
                    })]
                  })]
                }, kk.id)))
              }), Tk.detail && (0, nT.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, nT.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, nT.jsx)(ST.d, {
                    itemName: Tk.detail.icon,
                    amount: 0
                  })
                }), (0, nT.jsx)("h3", {
                  children: Tk.detail.label
                }), (0, nT.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: Tk.detail.level
                }), (0, nT.jsx)("p", {
                  children: Tk.detail.description
                }), (0, nT.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, nT.jsx)("strong", {
                    children: Xk("skyblockGame:currentBenefit")
                  }), (0, nT.jsx)("span", {
                    children: Tk.detail.benefit
                  })]
                }), (0, nT.jsx)(BT, {
                  percent: Tk.detail.percent,
                  label: Tk.detail.xp
                }), (0, nT.jsx)("p", {
                  children: Tk.detail.xp
                }), (0, nT.jsx)("h4", {
                  children: Xk("skyblockGame:earnXp")
                }), (0, nT.jsx)("ul", {
                  children: Tk.detail.sources.map((kk => (0, nT.jsx)("li", {
                    children: kk
                  }, kk)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var ii = Ik(1333),
      yi = Ik(4833),
      li = Ik(318);

    function ai(kk) {
      let {
        item: Fk
      } = kk;
      return (0, nT.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, nT.jsx)(ST.d, {
          itemName: Fk,
          amount: 0
        })
      })
    }

    function qi(kk) {
      let {
        name: Fk,
        percent: Ik,
        progress: Xk
      } = kk;
      return (0, nT.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, nT.jsx)(BT, {
          percent: Ik,
          label: `${(0,li.xb)(Fk)}: ${Xk}`
        }), (0, nT.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: Xk
        })]
      })
    }

    function Li(kk) {
      let {
        subquests: Fk,
        showDescriptions: Ik = !1
      } = kk;
      return (0, nT.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: Fk.map((kk => {
          const Fk = Ik && "completed" === kk.status,
            Xk = (0, nT.jsxs)("li", {
              className: QT()("SkyblockQuestStep", kk.status, {
                JustFinished: kk.justFinished,
                JustUnlocked: kk.justUnlocked
              }),
              tabIndex: Fk ? 0 : void 0,
              children: [null !== kk.iconItem && (0, nT.jsx)(ai, {
                item: kk.iconItem
              }), null === kk.iconItem && (0, nT.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === kk.status ? "\u2713" : "skipped" === kk.status ? "\u2212" : "\u25cb"
              }), (0, nT.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, nT.jsx)("strong", {
                  children: (0, nT.jsx)(yi.b, {
                    text: kk.name
                  })
                }), Ik && !Fk && (0, nT.jsx)("span", {
                  children: (0, nT.jsx)(yi.b, {
                    text: kk.description
                  })
                }), null !== kk.barPercent && (0, nT.jsx)(qi, {
                  name: kk.name,
                  percent: kk.barPercent,
                  progress: kk.progress
                }), null === kk.barPercent && !Fk && (0, nT.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: kk.statusLabel
                })]
              })]
            }, kk.id);
          return Fk ? (0, nT.jsx)(ii.g, {
            delayShow: 200,
            tooltipInner: (0, nT.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, nT.jsx)("span", {
                children: (0, nT.jsx)(yi.b, {
                  text: kk.description
                })
              }), (0, nT.jsx)("strong", {
                children: kk.statusLabel
              })]
            }),
            children: Xk
          }, kk.id) : Xk
        }))
      })
    }

    function ti(kk) {
      let {
        quest: Fk,
        select: Ik
      } = kk;
      const {
        t: Xk
      } = (0, ET.y)(), Tk = Fk.focusStep;
      return (0, nT.jsxs)(cT.d, {
        className: QT()("SkyblockQuestCard", {
          Selected: Fk.selected,
          Tracked: Fk.tracked
        }),
        onClick: () => {
          Ik(Fk.id)
        },
        children: [(0, nT.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, nT.jsx)("strong", {
            children: (0, nT.jsx)(yi.b, {
              text: Fk.name
            })
          }), Fk.tracked && (0, nT.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: Xk("skyblockGame:currentQuest")
          })]
        }), Tk && (0, nT.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== Tk.iconItem && (0, nT.jsx)(ai, {
            item: Tk.iconItem
          }), (0, nT.jsx)(qi, {
            name: Tk.name,
            percent: Tk.barPercent,
            progress: Tk.progress
          })]
        }), (0, nT.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: Fk.progress
        })]
      })
    }

    function Zi(kk) {
      let {
        controller: Fk,
        surface: Ik
      } = kk;
      const Xk = (0, OT.f)(LI, Fk.getSnapshot()),
        {
          t: Tk
        } = (0, ET.y)(),
        ik = fT();
      return Xk.enabled ? (0, nT.jsxs)(nT.Fragment, {
        children: ["hud" === Ik && (0, nT.jsx)(nT.Fragment, {
          children: Xk.tracked && (0, nT.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: qI,
            children: (0, nT.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [Xk.trackedStepPulse > 0 && (0, nT.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, Xk.trackedStepPulse), (0, nT.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: Tk("skyblockGame:currentQuest")
              }), (0, nT.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, nT.jsx)("strong", {
                  children: (0, nT.jsx)(yi.b, {
                    text: Xk.tracked.name
                  })
                }), null !== Xk.tracked.clock && (0, nT.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: Xk.tracked.clock
                })]
              }), (0, nT.jsx)(Li, {
                subquests: Xk.tracked.subquests
              })]
            })
          })
        }), "menu" === Ik && (0, nT.jsx)(NT.c, {
          show: Xk.open,
          close: Fk.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, nT.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: ik,
            onKeyDown: WT,
            children: [(0, nT.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, nT.jsx)("div", {
                children: (0, nT.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: Tk("skyblockGame:quests")
                })
              }), (0, nT.jsx)(cT.k, {
                padIgnore: !0,
                onClick: Fk.dismiss
              })]
            }), (0, nT.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, nT.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, nT.jsx)("h3", {
                  children: Tk("skyblockGame:current")
                }), 0 === Xk.active.length && (0, nT.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: Tk("skyblockGame:noActiveQuests")
                }), Xk.active.map((kk => (0, nT.jsx)(ti, {
                  quest: kk,
                  select: Fk.select
                }, kk.id))), (0, nT.jsx)("h3", {
                  children: (0, nT.jsxs)("button", {
                    type: "button",
                    className: QT()("SkyblockQuestSectionToggle", {
                      Expanded: Xk.completedExpanded
                    }),
                    "aria-expanded": Xk.completedExpanded,
                    onClick: Fk.toggleCompleted,
                    children: [(0, nT.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), Tk("skyblockGame:completed"), (0, nT.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: Xk.completed.length
                    })]
                  })
                }), Xk.completedExpanded && 0 === Xk.completed.length && (0, nT.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: Tk("skyblockGame:noCompletedQuests")
                }), Xk.completedExpanded && Xk.completed.map((kk => (0, nT.jsx)(ti, {
                  quest: kk,
                  select: Fk.select
                }, kk.id)))]
              }), Xk.detail && (0, nT.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [Xk.detail.completed && (0, nT.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: Tk("skyblockGame:completedQuest")
                }), (0, nT.jsx)("h3", {
                  children: (0, nT.jsx)(yi.b, {
                    text: Xk.detail.name
                  })
                }), (0, nT.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, nT.jsx)(yi.b, {
                    text: Xk.detail.description
                  })
                }), (0, nT.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [Xk.detail.progress, null !== Xk.detail.clock && (0, nT.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: Xk.detail.clock
                  })]
                }), (0, nT.jsx)(Li, {
                  subquests: Xk.detail.subquests,
                  showDescriptions: !0
                }), Xk.detail.tracked && (0, nT.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: Xk.detail.trackLabel
                }), !Xk.detail.completed && !Xk.detail.tracked && (0, nT.jsx)(cT.m, {
                  onClick: Fk.trackSelected,
                  disabled: !Xk.detail.canTrack,
                  children: Xk.detail.trackLabel
                }), Xk.detail.canViewDialogue && (0, nT.jsx)(cT.d, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: Fk.viewDialogue,
                  children: Tk("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var ji = Ik(1066),
      ei = Ik(2546);

    function wi(kk, Fk, Ik, Xk, Tk) {
      const ik = kk => "linear" === Tk ? kk : {
          ii: Tk,
          point: kk
        },
        yk = {};
      for (const [lk, ak] of Xk)
        for (const [Fk, Ik] of Object.entries(kk(lk, ak, ik))) yk[Fk] ??= {
          timeline: []
        }, yk[Fk].timeline.push(Ik);
      return {
        ki: Fk,
        loop: Ik,
        Ii: yk
      }
    }
    const Hi = .547,
      Ji = .022,
      xi = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      Pi = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function Ki(kk, Fk, Ik) {
      const {
        drop: Xk = 0,
        shift: Tk = 0,
        torso: ik = 0,
        nod: yk = 0,
        tilt: lk = 0,
        legs: ak = [0, 0],
        arms: qk = 0,
        spread: Lk = 0
      } = Fk, tk = Hi * Math.cos(ik) - Ji * Math.sin(ik), Zk = Hi * Math.sin(ik) + Ji * Math.cos(ik), jk = Ik([0, -Xk, Tk]);
      return {
        LowerBody: {
          timeFraction: kk,
          position: jk,
          rotation: Ik([0, 0, 0])
        },
        UpperBody: {
          timeFraction: kk,
          position: jk,
          rotation: Ik([ik, 0, lk])
        },
        HeadMesh: {
          timeFraction: kk,
          position: Ik([0, tk - Hi - Xk, Zk - Ji + Tk]),
          rotation: Ik([ik + yk, 0, lk])
        },
        LegLeftMesh: {
          timeFraction: kk,
          rotation: Ik([ak[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: kk,
          rotation: Ik([ak[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: kk,
          rotation: Ik([qk, 0, Lk])
        },
        ArmRightMesh: {
          timeFraction: kk,
          rotation: Ik([qk, 0, -Lk])
        }
      }
    }

    function Qi(kk, Fk, Ik) {
      return wi(Ki, kk, Fk, Ik, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function si(kk) {
      return "number" === typeof kk ? [kk, kk] : kk
    }

    function Vi(kk, Fk, Ik) {
      const {
        rise: Xk = 0,
        shift: Tk = 0,
        torso: ik = 0,
        twist: yk = 0,
        tilt: lk = 0,
        nod: ak = 0,
        cock: qk = 0,
        arms: Lk = 0,
        spread: tk = 0
      } = Fk, [Zk, jk] = si(Lk), [ek, wk] = si(tk);
      return {
        TorsoNode: {
          timeFraction: kk,
          position: Ik([0, Xk, Tk]),
          rotation: Ik([ik, yk, lk])
        },
        HeadMesh: {
          timeFraction: kk,
          rotation: Ik([ak, 0, qk])
        },
        ArmLeftMesh: {
          timeFraction: kk,
          rotation: Ik([Zk, 0, ek])
        },
        ArmRightMesh: {
          timeFraction: kk,
          rotation: Ik([jk, 0, -wk])
        }
      }
    }
    const zi = [1.0625, -1, 0];

    function Si(kk) {
      return "number" === typeof kk ? [kk, kk] : kk
    }

    function oi(kk, Fk, Ik) {
      const {
        drop: Xk = 0,
        shift: Tk = 0,
        torso: ik = 0,
        tilt: yk = 0,
        nod: lk = 0,
        cock: ak = 0,
        legs: qk = [0, 0],
        arms: Lk = 0,
        spread: tk = 0
      } = Fk, [Zk, jk] = Si(Lk), [ek, wk] = Si(tk), Hk = -ik, Jk = -yk, [xk, Pk, Kk] = function(kk, Fk) {
        const [Ik, Xk, Tk] = [-zi[0], zi[1], -zi[2]], ik = Ik * Math.cos(Fk) - Xk * Math.sin(Fk), yk = Ik * Math.sin(Fk) + Xk * Math.cos(Fk);
        return [ik - Ik, -(yk * Math.cos(kk) - Tk * Math.sin(kk) - Xk), yk * Math.sin(kk) + Tk * Math.cos(kk) - Tk]
      }(Hk, Jk), Qk = Ik([0, -Xk, Tk]);
      return {
        TorsoNode: {
          timeFraction: kk,
          position: Ik([xk, Pk - Xk, Kk + Tk]),
          rotation: Ik([Hk, 0, Jk])
        },
        HeadMesh: {
          timeFraction: kk,
          rotation: Ik([-lk, 0, -ak])
        },
        ArmLeftMesh: {
          timeFraction: kk,
          rotation: Ik([-Zk, 0, -ek])
        },
        ArmRightMesh: {
          timeFraction: kk,
          rotation: Ik([-jk, 0, wk])
        },
        LegLeftMesh: {
          timeFraction: kk,
          position: Qk,
          rotation: Ik([-qk[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: kk,
          position: Qk,
          rotation: Ik([-qk[1], 0, 0])
        }
      }
    }
    var vi = Ik(37224),
      Ei = Ik(38460),
      Oi = Ik(38621);

    function ni(kk, Fk, Ik) {
      var Xk, Tk;
      const ik = function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return kk + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - kk) * Ik
        },
        [yk, lk] = null !== (Xk = kk.legs) && void 0 !== Xk ? Xk : [0, 0],
        [ak, qk] = null !== (Tk = Fk.legs) && void 0 !== Tk ? Tk : [0, 0];
      return {
        drop: ik(kk.drop, Fk.drop),
        shift: ik(kk.shift, Fk.shift),
        torso: ik(kk.torso, Fk.torso),
        nod: ik(kk.nod, Fk.nod),
        tilt: ik(kk.tilt, Fk.tilt),
        legs: [ik(yk, ak), ik(lk, qk)],
        arms: ik(kk.arms, Fk.arms),
        spread: ik(kk.spread, Fk.spread)
      }
    }
    const Gi = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      ui = Qi(4400, !0, [
        [0, Gi],
        [.16, {
          ...Gi,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, Gi],
        [.44, {
          ...Gi,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, ni(Gi, xi, .7)],
        [.66, ni(Gi, xi, .78)],
        [.74, ni(Gi, Pi, .65)],
        [.86, {
          ...Gi,
          drop: .14
        }],
        [1, Gi]
      ], "catmull-rom-spline"),
      bi = {
        ...Gi,
        drop: .14,
        torso: .3,
        spread: .4
      },
      Ri = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      Ui = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      Ci = {
        caveGolem: ui,
        magmaGolem: Qi(3600, !0, [
          [0, bi],
          [.12, {
            ...bi,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...bi,
            tilt: -.08
          }],
          [.4, {
            ...bi,
            tilt: .06,
            drop: .11
          }],
          [.52, ni(bi, xi, .9)],
          [.62, ni(bi, Pi, .8)],
          [.7, ni(bi, Pi, .45)],
          [.78, ni(bi, Pi, .85)],
          [.9, {
            ...bi,
            drop: .17
          }],
          [1, bi]
        ], "catmull-rom-spline"),
        frostWraith: function(kk, Fk, Ik) {
          return wi(Vi, kk, Fk, Ik, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, Ri],
          [.14, {
            ...Ri,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...Ri,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...Ri,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...Ri,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...Ri,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...Ri,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...Ri,
            rise: .16,
            tilt: -.04
          }],
          [1, Ri]
        ], "catmull-rom-spline"),
        tikiTerror: function(kk, Fk, Ik) {
          return wi(oi, kk, Fk, Ik, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, Ui],
          [.16, {
            ...Ui,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, Ui],
          [.44, {
            ...Ui,
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
            ...Ui,
            drop: .1
          }],
          [1, Ui]
        ], "catmull-rom-spline")
      },
      Ni = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      ci = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      Wi = Object.fromEntries(Object.entries(Ci).map((kk => {
        let [Fk, Ik] = kk;
        return [Fk, (0, Oi.d)((0, vi.i)(Ik), Fk)]
      })));

    function fi(kk) {
      const Fk = function(kk) {
        var Fk;
        const Ik = (0, Ei.c)(kk).poseRig;
        return null !== (Fk = ci[kk]) && void 0 !== Fk ? Fk : void 0 === Ik ? null : Ni[Ik]
      }(kk);
      return null === Fk ? null : Wi[Fk]
    }

    function Bi(kk) {
      return {
        "--difficulty-colour": kk
      }
    }
    const di = (0, Sk.lazy)((() => (0, ei.e)(Ik.e(200).then((() => Ik(41520))), (kk => kk.MobPreview))));

    function Yi(kk) {
      var Fk, Ik, Xk;
      let {
        picker: Tk,
        controller: ik
      } = kk;
      const {
        t: yk
      } = (0, ET.y)(), lk = fT(), {
        page: ak
      } = Tk;
      return (0, nT.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: lk,
        onKeyDown: kk => {
          "ArrowLeft" === kk.key ? (kk.preventDefault(), kk.stopPropagation(), ik.previous()) : "ArrowRight" === kk.key ? (kk.preventDefault(), kk.stopPropagation(), ik.next()) : WT(kk)
        },
        style: Bi(ak.colour),
        children: [(0, nT.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, nT.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: Tk.dungeonName
          }), (0, nT.jsx)(cT.k, {
            padIgnore: !0,
            onClick: ik.dismiss
          })]
        }), (0, nT.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, nT.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, nT.jsx)(cT.d, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !Tk.canPrevious,
              onClick: ik.previous,
              children: (0, nT.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, nT.jsx)(ji.e, {
                  name: "angle-up"
                })
              })
            }), (0, nT.jsxs)("div", {
              className: QT()("SkyblockBossPickerBoss", {
                Locked: !ak.unlocked
              }),
              children: [null !== ak.bossMobType && (0, nT.jsx)(Sk.Suspense, {
                fallback: (0, nT.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, nT.jsx)(di, {
                  className: "SkyblockBossPickerModel",
                  mobType: ak.bossMobType,
                  variation: ak.bossMobVariation,
                  animation: null !== (Fk = fi(ak.bossMobType)) && void 0 !== Fk ? Fk : void 0
                })
              }), null === ak.bossMobType && (0, nT.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, nT.jsx)(cT.d, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !Tk.canNext,
              onClick: ik.next,
              children: (0, nT.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, nT.jsx)(ji.e, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, nT.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, nT.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [ak.beaten && (0, nT.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), ak.label]
            }), (0, nT.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (Ik = ak.bossName) && void 0 !== Ik ? Ik : "???"
            }), (0, nT.jsxs)("span", {
              className: QT()("SkyblockBossPickerRecord", {
                Locked: null !== ak.lockedHint
              }),
              children: [null !== ak.lockedHintHighlight && (0, nT.jsxs)(nT.Fragment, {
                children: [ak.lockedHintHighlight.before, (0, nT.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: Bi(ak.lockedHintHighlight.colour),
                  children: [null !== ak.lockedHintHighlight.icon && (0, nT.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, nT.jsx)(ST.d, {
                      itemName: ak.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), ak.lockedHintHighlight.name]
                }), ak.lockedHintHighlight.after]
              }), null === ak.lockedHintHighlight && (null !== (Xk = ak.lockedHint) && void 0 !== Xk ? Xk : ak.summary)]
            })]
          }), (0, nT.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: Tk.pages.map((kk => (0, nT.jsx)("span", {
              className: QT()("SkyblockBossPickerDot", {
                Current: kk.current,
                Locked: !kk.unlocked
              }),
              style: Bi(kk.colour)
            }, kk.difficulty)))
          }), (0, nT.jsx)(cT.q, {
            className: "SkyblockBossPickerFight",
            disabled: !ak.unlocked,
            onClick: ik.enter,
            children: yk("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function Ai(kk) {
      let {
        dungeon: Fk,
        select: Ik
      } = kk;
      return (0, nT.jsxs)(cT.d, {
        className: QT()("SkyblockDungeonCard", {
          Selected: Fk.selected
        }),
        onClick: () => {
          Ik(Fk.id)
        },
        children: [(0, nT.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, nT.jsx)("strong", {
            children: Fk.name
          }), (0, nT.jsx)("span", {
            children: Fk.beatenSummary
          })]
        }), (0, nT.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: Fk.difficulties.map((kk => (0, nT.jsxs)("span", {
            className: QT()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: kk.beaten
            }),
            style: Bi(kk.colour),
            title: kk.summary,
            children: [kk.beaten && (0, nT.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), kk.label]
          }, kk.difficulty)))
        })]
      })
    }

    function gi(kk) {
      let {
        controller: Fk
      } = kk;
      const Ik = (0, OT.f)(eI, Fk.getSnapshot()),
        {
          t: Xk
        } = (0, ET.y)(),
        Tk = fT();
      return Ik.enabled ? (0, nT.jsxs)(NT.c, {
        show: Ik.open,
        close: Fk.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [Ik.picker && (0, nT.jsx)(Yi, {
          picker: Ik.picker,
          controller: Fk
        }), !Ik.picker && (0, nT.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: Tk,
          onKeyDown: WT,
          children: [(0, nT.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, nT.jsxs)("div", {
              children: [(0, nT.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: Xk("skyblockGame:dungeons")
              }), (0, nT.jsx)("p", {
                children: Xk("skyblockGame:dungeonsIntro")
              })]
            }), (0, nT.jsx)(cT.k, {
              padIgnore: !0,
              onClick: Fk.dismiss
            })]
          }), (0, nT.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, nT.jsx)("div", {
              className: "SkyblockDungeonList",
              children: Ik.dungeons.map((kk => (0, nT.jsx)(Ai, {
                dungeon: kk,
                select: Fk.select
              }, kk.id)))
            }), Ik.detail && (0, nT.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, nT.jsx)("h3", {
                children: Ik.detail.name
              }), (0, nT.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: Ik.detail.difficulties.map((kk => (0, nT.jsxs)("li", {
                  className: QT()("SkyblockDungeonRecord", {
                    Beaten: kk.beaten
                  }),
                  children: [(0, nT.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: Bi(kk.colour),
                    children: [kk.beaten && (0, nT.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), kk.label]
                  }), (0, nT.jsx)("span", {
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

    function mi(kk) {
      let {
        collection: Fk,
        select: Ik
      } = kk;
      return (0, nT.jsxs)(cT.d, {
        className: QT()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: Fk.selected,
          Locked: Fk.locked
        }),
        ariaPressed: Fk.selected,
        onClick: () => {
          Ik(Fk.id)
        },
        children: [(0, nT.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, nT.jsx)(ST.d, {
            itemName: Fk.icon,
            amount: 0
          })
        }), (0, nT.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, nT.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, nT.jsx)("strong", {
              children: Fk.name
            }), (0, nT.jsx)("span", {
              children: Fk.tier
            })]
          }), (0, nT.jsx)(BT, {
            percent: Fk.percent,
            label: `${Fk.name}: ${Fk.progress}`
          }), (0, nT.jsx)("span", {
            className: "SkyblockSkillXp",
            children: Fk.progress
          })]
        })]
      })
    }

    function ri(kk) {
      let {
        collection: Fk
      } = kk;
      const {
        t: Ik
      } = (0, ET.y)();
      return (0, nT.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, nT.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, nT.jsx)(ST.d, {
            itemName: Fk.icon,
            amount: 0
          })
        }), (0, nT.jsx)("h3", {
          children: Fk.name
        }), (0, nT.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: Fk.tier
        }), (0, nT.jsx)("p", {
          children: Fk.locked ? Ik("skyblockGame:collectionLocked") : Fk.count
        }), null !== Fk.nextReward && (0, nT.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, nT.jsx)("strong", {
            children: Ik("skyblockGame:collectionNextReward")
          }), (0, nT.jsx)("span", {
            children: Fk.nextReward
          })]
        }), (0, nT.jsx)(BT, {
          percent: Fk.percent,
          label: Fk.progress
        }), (0, nT.jsx)("p", {
          children: Fk.progress
        })]
      })
    }

    function Di(kk) {
      let {
        controller: Fk
      } = kk;
      const Ik = (0, OT.f)(RI, Fk.getSnapshot()),
        {
          t: Xk
        } = (0, ET.y)(),
        Tk = fT();
      return Ik.enabled ? (0, nT.jsx)(NT.c, {
        show: Ik.open,
        close: Fk.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, nT.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: Tk,
          onKeyDown: WT,
          children: [(0, nT.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, nT.jsxs)("div", {
              children: [(0, nT.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: Xk("skyblockGame:collections")
              }), (0, nT.jsxs)("p", {
                children: [Xk("skyblockGame:collectionsIntro"), " ", Ik.tiersUnlocked]
              })]
            }), (0, nT.jsx)(cT.k, {
              padIgnore: !0,
              onClick: Fk.dismiss
            })]
          }), (0, nT.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: Ik.categories.map((kk => (0, nT.jsxs)(cT.d, {
              className: QT()("SkyblockCollectionCategory", {
                Selected: kk.selected
              }),
              ariaPressed: kk.selected,
              padTabSelected: kk.selected,
              onClick: () => {
                Fk.selectCategory(kk.id)
              },
              children: [(0, nT.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, nT.jsx)(ST.d, {
                  itemName: kk.icon,
                  amount: 0
                })
              }), (0, nT.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, nT.jsx)("strong", {
                  children: kk.label
                }), (0, nT.jsx)("span", {
                  children: kk.tiers
                })]
              })]
            }, kk.id)))
          }), (0, nT.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, nT.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: Ik.collections.map((kk => (0, nT.jsx)(mi, {
                collection: kk,
                select: Fk.select
              }, kk.id)))
            }), Ik.detail && (0, nT.jsx)(ri, {
              collection: Ik.detail
            })]
          })]
        })
      }) : null
    }
    const Mi = ["completed", "active", "available", "locked"],
      ky = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function Fy(kk) {
      let {
        controller: Fk
      } = kk;
      const Ik = (0, OT.f)(mI, Fk.getSnapshot()),
        {
          t: Xk
        } = (0, ET.y)(),
        Tk = fT();
      return Ik.enabled ? (0, nT.jsx)(NT.c, {
        show: Ik.open,
        close: Fk.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, nT.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: Tk,
          onKeyDown: WT,
          children: [(0, nT.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, nT.jsxs)("div", {
              children: [(0, nT.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: Xk("skyblockDevQuests:title")
              }), (0, nT.jsx)("p", {
                children: Xk("skyblockDevQuests:intro")
              })]
            }), (0, nT.jsx)(cT.k, {
              onClick: Fk.dismiss
            })]
          }), (0, nT.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [Mi.map((kk => (0, nT.jsx)("span", {
              className: QT()("SkyblockQuestGraphLegendState", kk),
              children: Xk(`skyblockDevQuests:state_${kk}`)
            }, kk))), ky.map((kk => (0, nT.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, nT.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, nT.jsx)("line", {
                  className: QT()("SkyblockQuestGraphEdge", kk),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), Xk(`skyblockDevQuests:edge_${kk}`)]
            }, kk)))]
          }), (0, nT.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, nT.jsxs)("div", {
              className: QT()("SkyblockQuestGraphCanvas", {
                Planning: Ik.planning
              }),
              style: {
                width: Ik.width,
                height: Ik.height
              },
              children: [(0, nT.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: Ik.width,
                height: Ik.height,
                "aria-hidden": "true",
                children: [(0, nT.jsx)("defs", {
                  children: (0, nT.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, nT.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), Ik.edges.map((kk => (0, nT.jsx)("path", {
                  className: QT()("SkyblockQuestGraphEdge", kk.kind, {
                    InPlan: kk.inPlan
                  }),
                  d: kk.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, kk.key)))]
              }), Ik.nodes.map((kk => (0, nT.jsxs)("button", {
                type: "button",
                className: QT()("SkyblockQuestGraphNode", kk.state, {
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
                  Fk.hover(kk.id)
                },
                onMouseLeave: () => {
                  Fk.hover(null)
                },
                onFocus: () => {
                  Fk.hover(kk.id)
                },
                onBlur: () => {
                  Fk.hover(null)
                },
                onClick: () => {
                  Fk.jump(kk.id)
                },
                children: [(0, nT.jsx)("strong", {
                  children: kk.name
                }), (0, nT.jsx)("span", {
                  children: kk.detail
                })]
              }, kk.id)))]
            })
          })]
        })
      }) : null
    }
    const Iy = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      Xy = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${aX}ms`,
        "--forge-duration": "2150ms"
      },
      Ty = Array.from({
        length: 18
      }, ((kk, Fk) => ({
        "--ember-left": `${(4+92*(.618034*Fk%1)).toFixed(1)}%`,
        "--ember-size": 3 + Fk % 3 * 2 + "px",
        "--ember-drift": 14 * (Fk % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*Fk%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*Fk%8).toFixed(2)}s`
      })));

    function iy(kk) {
      if (kk.style.removeProperty("--part-size"), null === kk.parentElement || "wrap" === getComputedStyle(kk.parentElement).flexWrap) return;
      const Fk = [...kk.children],
        Ik = getComputedStyle(kk),
        Xk = parseFloat(Ik.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        Tk = (kk.clientHeight - parseFloat(Ik.rowGap) * (Fk.length - 1)) / Fk.length,
        ik = Fk.map((kk => {
          const Fk = getComputedStyle(kk),
            Ik = kk.querySelector("h3"),
            ik = kk.querySelector(".SkyblockForgeParts");
          if (null === Ik || null === ik) return Xk;
          const yk = Tk - parseFloat(Fk.paddingTop) - parseFloat(Fk.paddingBottom) - Ik.offsetHeight - parseFloat(getComputedStyle(Ik).marginBottom),
            lk = parseFloat(getComputedStyle(ik).columnGap),
            ak = ik.children.length;
          let qk = 0;
          for (let Xk = 1; Xk <= ak; Xk++) {
            const kk = Math.ceil(ak / Xk);
            qk = Math.max(qk, Math.min((ik.clientWidth - lk * (Xk - 1)) / Xk, (yk - lk * (kk - 1)) / kk))
          }
          return qk
        }));
      kk.style.setProperty("--part-size", `${Math.floor(Math.max(Xk,Math.min(...ik)))}px`)
    }

    function yy(kk) {
      var Fk, Ik, Xk, ik, yk;
      let {
        controller: lk
      } = kk;
      const ak = (0, OT.f)(wX, lk.getSnapshot()),
        {
          t: qk
        } = (0, ET.y)(),
        Lk = fT(),
        tk = function() {
          const kk = (0, Sk.useRef)(null),
            Fk = (0, Sk.useRef)(null);
          return (0, Sk.useLayoutEffect)((() => {
            null !== kk.current && iy(kk.current)
          })), (0, Sk.useCallback)((Ik => {
            var Xk;
            null === (Xk = Fk.current) || void 0 === Xk || Xk.disconnect(), Fk.current = null, kk.current = Ik, null !== Ik && (Fk.current = new ResizeObserver((() => {
              iy(Ik)
            })), Fk.current.observe(Ik))
          }), [])
        }(),
        Zk = function(kk) {
          const Fk = (0, Sk.useRef)(null);
          return (0, Sk.useLayoutEffect)((() => {
            const kk = Fk.current;
            if (null !== kk) {
              kk.style.removeProperty("font-size");
              for (let Fk = 1.7; Fk > 1.1 && kk.scrollWidth > kk.clientWidth; Fk -= .1) kk.style.fontSize = Fk - .1 + "rem"
            }
          }), [kk]), (0, Sk.useCallback)((kk => {
            Fk.current = kk
          }), [])
        }(null === (Fk = ak.preview) || void 0 === Fk ? void 0 : Fk.name),
        jk = (0, Sk.useRef)(null),
        ek = (0, Sk.useRef)({}),
        wk = ak.forging,
        Hk = null !== (Ik = null === wk || void 0 === wk ? void 0 : wk.preview.tier) && void 0 !== Ik ? Ik : 0,
        Jk = null !== (Xk = null === wk || void 0 === wk ? void 0 : wk.preview.named) && void 0 !== Xk && Xk,
        xk = (0, Sk.useMemo)((() => {
          return null === wk ? null : {
            flames: (kk = Hk, Fk = Jk, Array.from({
              length: 26 + 6 * kk + (Fk ? 20 : 0)
            }, ((kk, Fk) => {
              const Ik = Fk < 6,
                Xk = Math.random() * Math.PI * 2,
                Tk = Ik ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                ik = Math.cos(Xk) * Tk,
                yk = Math.sin(Xk) * Tk - 2 - 3 * Math.random(),
                lk = Math.random(),
                [ak, qk, Lk] = Ik ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : lk < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : lk < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [lk < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": ak,
                "--x0": `${(.15*ik).toFixed(2)}rem`,
                "--y0": `${(.15*yk).toFixed(2)}rem`,
                "--x": `${ik.toFixed(2)}rem`,
                "--y": `${yk.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${qk.toFixed(2)}rem`,
                "--duration": `${Math.round(Lk)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: tX(Hk, Jk)
          };
          var kk, Fk
        }), [null === wk || void 0 === wk ? void 0 : wk.id]);
      if (!ak.enabled) return null;
      const Pk = ak.preview,
        Kk = ak.arriving,
        Qk = null !== Kk && !Kk.sameSword,
        sk = null !== Pk && (0, nT.jsx)(ST.d, {
          itemName: Pk.baseSword,
          amount: 0,
          enchantmentTier: Pk.enchantmentTier
        });
      return (0, nT.jsx)(NT.c, {
        show: ak.open,
        close: lk.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, nT.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: Lk,
          onKeyDown: WT,
          children: [(0, nT.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: Ty.map(((kk, Fk) => (0, nT.jsx)("span", {
              style: kk
            }, Fk)))
          }), (0, nT.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, nT.jsxs)("div", {
              children: [(0, nT.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: qk("skyblockGame:forgeTitle")
              }), (0, nT.jsx)("p", {
                children: qk("skyblockGame:forgeIntro")
              })]
            }), (0, nT.jsx)(cT.k, {
              onClick: lk.dismiss
            })]
          }), (0, nT.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, nT.jsx)("div", {
              ref: tk,
              className: QT()("SkyblockForgeSlots", {
                Locked: null !== wk
              }),
              children: ak.slots.map((kk => (0, nT.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, nT.jsx)("h3", {
                  children: kk.label
                }), (0, nT.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: kk.parts.map((Fk => (0, nT.jsx)("button", {
                    type: "button",
                    className: QT()("SkyblockForgePart", {
                      Selected: Fk.selected,
                      Missing: Fk.placeholder
                    }),
                    disabled: Fk.placeholder,
                    title: Fk.placeholder ? qk("skyblockGame:forgePickParts") : Fk.itemName,
                    "aria-pressed": Fk.selected,
                    onClick: () => {
                      lk.select(kk.kind, Fk.material)
                    },
                    children: (0, nT.jsx)(ST.d, {
                      itemName: Fk.itemName,
                      amount: Fk.owned
                    })
                  }, Fk.material)))
                })]
              }, kk.kind)))
            }), (0, nT.jsxs)("div", {
              className: QT()("SkyblockForgeAnvil", {
                Named: null === Pk || void 0 === Pk ? void 0 : Pk.named
              }),
              style: {
                "--tier": null === Pk ? "transparent" : Tk.sb[Pk.enchantmentTier]
              },
              children: [(0, nT.jsxs)("div", {
                className: QT()("SkyblockForgeAltar", {
                  Forging: null !== wk
                }),
                style: null === wk ? void 0 : Xy,
                children: [(0, nT.jsxs)("div", {
                  className: QT()("SkyblockForgeMount", {
                    Arrive: null !== Kk
                  }),
                  children: [null === Pk && (0, nT.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, nT.jsx)(ST.d, {
                      itemName: ak.unformedSword,
                      amount: 0
                    })
                  }), null !== Pk && (0, nT.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== Pk && null === wk && (0, nT.jsx)("div", {
                    ref: jk,
                    className: "SkyblockForgeFloat",
                    children: (0, nT.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: sk
                    })
                  }), null !== Pk && (0, nT.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: LX.map(((kk, Fk) => (0, nT.jsx)("span", {
                      className: QT()({
                        Rune: "" !== kk.rune
                      }),
                      style: kk.style,
                      children: kk.rune
                    }, Fk)))
                  }), null !== wk && null !== xk && (0, nT.jsxs)(nT.Fragment, {
                    children: [(0, nT.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, nT.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: xk.flames.map(((kk, Fk) => (0, nT.jsx)("span", {
                        style: kk
                      }, Fk)))
                    }), (0, nT.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: ek.current,
                      children: (0, nT.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: sk
                      })
                    }), (0, nT.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, nT.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (Hk >= 4 || Jk) && (0, nT.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, nT.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: xk.sparks.map(((kk, Fk) => (0, nT.jsx)("span", {
                        style: kk
                      }, Fk)))
                    }), (0, nT.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, nT.jsx)("p", {
                  className: QT()("SkyblockForgeStatus", null === (ik = ak.status) || void 0 === ik ? void 0 : ik.tone),
                  children: null === (yk = ak.status) || void 0 === yk ? void 0 : yk.text
                })]
              }), null === Pk && (0, nT.jsx)("p", {
                className: QT()("SkyblockForgeName Waiting", {
                  ArriveText: Qk
                }),
                children: qk(ak.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== Pk && (0, nT.jsx)("h3", {
                ref: Zk,
                className: QT()("SkyblockForgeName", {
                  ArriveText: Qk
                }),
                title: Pk.name,
                children: Pk.name
              }), (null === Pk || void 0 === Pk ? void 0 : Pk.named) && (0, nT.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: qk("skyblockGame:forgeSecret")
              }), (0, nT.jsxs)(cT.q, {
                className: "SkyblockForgeButton",
                disabled: !ak.canForge,
                title: null === Pk ? void 0 : qk("skyblockGame:forgeCoalOwned", {
                  owned: String(ak.coalOwned)
                }),
                onClick: () => {
                  ek.current = function(kk) {
                    const Fk = null === kk ? "none" : getComputedStyle(kk).transform,
                      Ik = new DOMMatrixReadOnly("none" === Fk ? void 0 : Fk);
                    return {
                      "--settle-y": `${Ik.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(Ik.b,Ik.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(jk.current), eX(), lk.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [qk("skyblockGame:forgeButton"), null !== Pk && (0, nT.jsxs)("span", {
                  className: QT()("SkyblockForgeCost", {
                    Short: Pk.coalShort
                  }),
                  children: [(0, nT.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, nT.jsx)(ST.d, {
                      itemName: kX.b,
                      amount: 0
                    })
                  }), Pk.coalCost]
                })]
              })]
            }), (0, nT.jsxs)("div", {
              className: QT()("SkyblockForgeDetails", {
                Named: null === Pk || void 0 === Pk ? void 0 : Pk.named
              }),
              children: [(0, nT.jsx)("p", {
                className: QT()("SkyblockForgeLore", {
                  ArriveText: Qk
                }),
                title: null === Pk || void 0 === Pk ? void 0 : Pk.lore,
                children: null === Pk || void 0 === Pk ? void 0 : Pk.lore
              }), (0, nT.jsxs)("dl", {
                className: QT()("SkyblockForgeStats", {
                  ArriveText: Qk
                }),
                children: [null === Pk && Iy.map((kk => (0, nT.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, nT.jsx)("dt", {
                    children: qk(kk)
                  }), (0, nT.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, kk))), null === Pk || void 0 === Pk ? void 0 : Pk.stats.map((kk => (0, nT.jsxs)("div", {
                  className: QT()("SkyblockForgeStat", {
                    Better: kk.better
                  }),
                  children: [(0, nT.jsx)("dt", {
                    children: kk.label
                  }), (0, nT.jsx)("dd", {
                    children: kk.value
                  })]
                }, kk.label)))]
              }), (0, nT.jsx)("ul", {
                className: QT()("SkyblockForgeEffects", {
                  ArriveText: Qk
                }),
                children: null === Pk || void 0 === Pk ? void 0 : Pk.effects.map((kk => (0, nT.jsx)("li", {
                  children: kk
                }, kk)))
              })]
            })]
          })]
        })
      })
    }
    const ly = "Doom Rivet",
      ay = "Doom Crest";

    function qy(kk) {
      let {
        itemName: Fk,
        amount: Ik,
        owned: Xk
      } = kk;
      return (0, nT.jsxs)("span", {
        className: QT()("SkyblockSmugglerPrice", {
          Short: Ik > Xk
        }),
        children: [(0, nT.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, nT.jsx)(ST.d, {
            itemName: Fk,
            amount: 0
          })
        }), (0, nT.jsx)("span", {
          children: Ik
        })]
      })
    }

    function Ly(kk) {
      return kk.justBought ? "skyblockGame:smugglerJustBought" : kk.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function ty(kk) {
      let {
        deal: Fk,
        view: Ik,
        buy: Xk
      } = kk;
      const {
        t: Tk
      } = (0, ET.y)();
      return (0, nT.jsxs)("div", {
        className: QT()("SkyblockSmugglerPocket", {
          Bought: Fk.justBought,
          Unaffordable: !Fk.affordable,
          SoldOut: Fk.soldOut && !Fk.justBought
        }),
        children: [(0, nT.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, nT.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, nT.jsx)(ST.d, {
            itemName: Fk.itemName,
            amount: 0,
            enchantmentTier: Fk.enchantmentTier
          }), Fk.amount > 1 && (0, nT.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: Tk("skyblockGame:smugglerAmount", {
              amount: Fk.amount
            })
          })]
        }), (0, nT.jsx)("h3", {
          children: Fk.displayName
        }), (0, nT.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, nT.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [Fk.rivets > 0 && (0, nT.jsx)(qy, {
              itemName: ly,
              amount: Fk.rivets,
              owned: Ik.rivetsOwned
            }), Fk.crests > 0 && (0, nT.jsx)(qy, {
              itemName: ay,
              amount: Fk.crests,
              owned: Ik.crestsOwned
            })]
          }), (0, nT.jsx)(cT.d, {
            className: "SkyblockSmugglerBuy",
            disabled: Fk.soldOut || !Fk.affordable || Ik.pending,
            onClick: () => {
              Xk(Fk.slot)
            },
            children: Tk(Ly(Fk))
          })]
        })]
      }, Fk.justBought ? Ik.boughtCount : 0)
    }

    function Zy(kk) {
      let {
        controller: Fk
      } = kk;
      const Ik = (0, OT.f)(xX, Fk.getSnapshot()),
        {
          t: Xk
        } = (0, ET.y)(),
        Tk = fT();
      return Ik.enabled ? (0, nT.jsx)(NT.c, {
        show: Ik.open,
        close: Fk.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, nT.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: Tk,
          onKeyDown: WT,
          children: [(0, nT.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, nT.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, nT.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, nT.jsxs)("div", {
              children: [(0, nT.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: Xk("skyblockGame:smugglerTitle")
              }), (0, nT.jsx)("p", {
                children: Xk("skyblockGame:smugglerIntro")
              })]
            }), (0, nT.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, nT.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, nT.jsx)(qy, {
                  itemName: ly,
                  amount: Ik.rivetsOwned,
                  owned: Ik.rivetsOwned
                }), (0, nT.jsx)(qy, {
                  itemName: ay,
                  amount: Ik.crestsOwned,
                  owned: Ik.crestsOwned
                })]
              }), (0, nT.jsx)(cT.k, {
                onClick: Fk.dismiss
              })]
            })]
          }), (0, nT.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: Ik.deals.map((kk => (0, nT.jsx)(ty, {
              deal: kk,
              view: Ik,
              buy: Fk.buy
            }, kk.slot)))
          }), (0, nT.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, nT.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: Ik.rotatesText
            }), null !== Ik.status && (0, nT.jsx)("span", {
              className: QT()("SkyblockSmugglerStatus", Ik.status.tone),
              children: Ik.status.text
            })]
          })]
        })
      }) : null
    }

    function jy(kk) {
      let {
        phase: Fk,
        className: Ik
      } = kk;
      return (0, nT.jsx)("span", {
        className: QT()("SkyblockMoon", `Moon-${Fk}`, Ik),
        "aria-hidden": "true"
      })
    }

    function ey(kk) {
      let {
        controller: Fk
      } = kk;
      const Ik = (0, OT.f)(QX, Fk.getSnapshot()),
        {
          t: Xk
        } = (0, ET.y)();
      return Ik.enabled ? (0, nT.jsx)(VT.f, {
        placement: "statBars",
        children: (0, nT.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: QT()("SkyblockPassageChip", Ik.open && "Open"),
          "aria-label": Xk("skyblockGame:passageChipLabel", {
            phase: Ik.phaseName
          }),
          title: Xk("skyblockGame:passageChipLabel", {
            phase: Ik.phaseName
          }),
          onMouseDown: kk => {
            kk.preventDefault()
          },
          onClick: Fk.toggle,
          children: (0, nT.jsx)(jy, {
            phase: Ik.phase
          }, Ik.phase)
        })
      }) : null
    }

    function wy(kk) {
      let {
        fish: Fk
      } = kk;
      return (0, nT.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, nT.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, nT.jsx)(ST.d, {
            itemName: Fk.itemName,
            amount: 0
          })
        }), (0, nT.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, nT.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: Fk.displayName
          }), (0, nT.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: Fk.where
          })]
        })]
      })
    }

    function Hy(kk) {
      let {
        controller: Fk
      } = kk;
      const Ik = (0, OT.f)(QX, Fk.getSnapshot()),
        {
          t: Xk
        } = (0, ET.y)(),
        Tk = fT();
      return Ik.enabled ? (0, nT.jsx)(NT.c, {
        show: Ik.open,
        close: Fk.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, nT.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: Tk,
          onKeyDown: WT,
          children: [(0, nT.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, nT.jsx)(jy, {
              phase: Ik.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, nT.jsxs)("div", {
              children: [(0, nT.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: Xk("skyblockGame:passageTitle")
              }), (0, nT.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: Ik.phaseName
              })]
            }), (0, nT.jsx)(cT.k, {
              padIgnore: !0,
              onClick: Fk.dismiss
            })]
          }), (0, nT.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: Xk("skyblockGame:passageIntro")
          }), (0, nT.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, nT.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, nT.jsx)("h3", {
                children: Xk("skyblockGame:passageVisiting")
              }), (0, nT.jsx)("ul", {
                className: "SkyblockPassageList",
                children: Ik.visitors.map((kk => (0, nT.jsx)(wy, {
                  fish: kk
                }, kk.itemName)))
              })]
            }), (0, nT.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== Ik.resting && (0, nT.jsxs)(nT.Fragment, {
                children: [(0, nT.jsx)("h3", {
                  children: Xk("skyblockGame:passageResting")
                }), (0, nT.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, nT.jsx)(wy, {
                    fish: Ik.resting
                  })
                })]
              }), (0, nT.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, nT.jsx)(jy, {
                  phase: Ik.nextPhase
                }), (0, nT.jsx)("span", {
                  children: Ik.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function Jy() {
      return (0, nT.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((kk => (0, nT.jsx)("i", {
          style: {
            "--sparkle-index": kk
          }
        }, kk)))
      })
    }

    function xy(kk) {
      var Fk;
      let {
        charm: Ik,
        view: Xk,
        controller: Tk
      } = kk;
      const {
        t: ik
      } = (0, ET.y)(), yk = Xk.shop, lk = (null === (Fk = Xk.sparkle) || void 0 === Fk ? void 0 : Fk.id) === Ik.id;
      return (0, nT.jsxs)("li", {
        className: QT()("SkyblockLampLightCharm", Ik.owned && "Owned", Ik.socketed && "Socketed"),
        children: [lk && (0, nT.jsx)(Jy, {}, Xk.sparkle.count), (0, nT.jsx)("h4", {
          children: Ik.name
        }), (0, nT.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: Ik.effect
        }), (0, nT.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: Ik.lines.map((kk => (0, nT.jsxs)("li", {
            className: QT()("SkyblockLampLightOddsLine", "better" === kk.tone ? "Better" : "worse" === kk.tone ? "Worse" : "Same"),
            children: [(0, nT.jsx)("span", {
              className: "Before",
              children: kk.before
            }), (0, nT.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, nT.jsx)("span", {
              className: "After",
              children: kk.after
            })]
          }, kk.label)))
        }), (0, nT.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: Ik.owned ? Ik.socketed ? (0, nT.jsxs)(nT.Fragment, {
            children: [(0, nT.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: ik("skyblockGame:lampLightSocketed")
            }), (0, nT.jsx)(cT.Q, {
              disabled: !Xk.canCommand,
              ariaLabel: ik("skyblockGame:lampLightRemoveLabel", {
                charm: Ik.name
              }),
              onClick: () => {
                Tk.socket(null)
              },
              children: ik("skyblockGame:lampLightRemove")
            })]
          }) : (0, nT.jsx)(cT.d, {
            disabled: !Xk.canCommand || !yk.heldRod,
            ariaLabel: ik("skyblockGame:lampLightSocketLabel", {
              charm: Ik.name
            }),
            onClick: () => {
              Tk.socket(Ik.id)
            },
            children: ik("skyblockGame:lampLightSocket")
          }) : (0, nT.jsx)(cT.d, {
            disabled: !Xk.canCommand || !Ik.affordable,
            ariaLabel: ik("skyblockGame:lampLightBuyLabel", {
              item: Ik.name,
              cost: Ik.cost
            }),
            onClick: () => {
              Tk.buy(Ik.id)
            },
            children: Ik.cost
          })
        })]
      })
    }

    function Py(kk) {
      var Fk;
      let {
        tint: Ik,
        view: Xk,
        controller: Tk
      } = kk;
      const {
        t: ik
      } = (0, ET.y)();
      return (0, nT.jsxs)("li", {
        className: QT()("SkyblockLampLightTint", Ik.wearing && "Wearing"),
        style: {
          "--tint-colour": Ik.colour
        },
        children: [(null === (Fk = Xk.sparkle) || void 0 === Fk ? void 0 : Fk.id) === Ik.id && (0, nT.jsx)(Jy, {}, Xk.sparkle.count), (0, nT.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, nT.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: Ik.name
        }), Ik.wearing ? (0, nT.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: ik("skyblockGame:lampLightWearing")
        }) : (0, nT.jsx)(cT.d, {
          disabled: !Xk.canCommand || !Ik.owned && !Ik.affordable,
          ariaLabel: Ik.owned ? ik("skyblockGame:lampLightWearLabel", {
            tint: Ik.name
          }) : ik("skyblockGame:lampLightBuyLabel", {
            item: Ik.name,
            cost: Ik.cost
          }),
          onClick: () => {
            Ik.owned ? Tk.wearTint(Ik.id) : Tk.buy(Ik.id)
          },
          children: Ik.owned ? ik("skyblockGame:lampLightWear") : Ik.cost
        })]
      })
    }

    function Ky(kk) {
      let {
        controller: Fk
      } = kk;
      const Ik = (0, OT.f)(RX, Fk.getSnapshot()),
        {
          t: Xk
        } = (0, ET.y)(),
        Tk = Ik.shop;
      return (0, nT.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, nT.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, nT.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: Ik.balance
          }), (0, nT.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": Ik.releasing,
            className: QT()("SkyblockLampLightSwitch", Ik.releasing && "On"),
            disabled: Ik.releasing ? "ready" !== Ik.status : !Ik.canCommand,
            onClick: () => {
              Fk.setRelease(!Ik.releasing)
            },
            children: [(0, nT.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, nT.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), Xk("skyblockGame:lampLightRelease")]
          }), (0, nT.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: Xk("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== Ik.notice && (0, nT.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: Ik.notice
        }), null !== Tk && (0, nT.jsxs)(nT.Fragment, {
          children: [(0, nT.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, nT.jsx)("h3", {
              children: Xk("skyblockGame:lampLightCharms")
            }), (0, nT.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: Tk.oddsFor
            }), (0, nT.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((kk => (0, nT.jsx)("button", {
                type: "button",
                "aria-pressed": Ik.situation === kk,
                className: QT()("SkyblockLampLightSituation", Ik.situation === kk && "Selected"),
                onClick: () => {
                  Fk.setSituation(kk)
                },
                children: Xk("open" === kk ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, kk)))
            })]
          }), !Tk.heldRod && (0, nT.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: Xk("skyblockGame:lampLightHoldRod")
          }), (0, nT.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: Tk.charms.map((kk => (0, nT.jsx)(xy, {
              charm: kk,
              view: Ik,
              controller: Fk
            }, kk.id)))
          }), (0, nT.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, nT.jsx)("h3", {
              children: Xk("skyblockGame:lampLightTints")
            })
          }), (0, nT.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, nT.jsxs)("li", {
              className: QT()("SkyblockLampLightTint", "Islands", Tk.wearingIslandColours && "Wearing"),
              children: [(0, nT.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, nT.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: Xk("skyblockGame:lampLightIslandColours")
              }), Tk.wearingIslandColours ? (0, nT.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: Xk("skyblockGame:lampLightWearing")
              }) : (0, nT.jsx)(cT.d, {
                disabled: !Ik.canCommand,
                ariaLabel: Xk("skyblockGame:lampLightWearLabel", {
                  tint: Xk("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  Fk.wearTint(null)
                },
                children: Xk("skyblockGame:lampLightWear")
              })]
            }), Tk.tints.map((kk => (0, nT.jsx)(Py, {
              tint: kk,
              view: Ik,
              controller: Fk
            }, kk.id)))]
          })]
        })]
      })
    }

    function Qy(kk) {
      let {
        controller: Fk
      } = kk;
      const Ik = (0, OT.f)(RX, Fk.getSnapshot()),
        {
          t: Xk
        } = (0, ET.y)();
      return Ik.releasing ? (0, nT.jsx)(VT.f, {
        children: (0, nT.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            Fk.setRelease(!1)
          },
          children: [(0, nT.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, nT.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [Xk("skyblockGame:lampLightReleasing"), " \xb7 ", Ik.balance]
          }), (0, nT.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: Xk("skyblockGame:lampLightKeepCatches")
          }), null !== Ik.gained && (0, nT.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: Ik.gained.text
          }, Ik.gained.count)]
        })
      }) : null
    }

    function sy(kk) {
      let {
        island: Fk,
        view: Ik,
        aim: Xk
      } = kk;
      const {
        t: Tk
      } = (0, ET.y)(), ik = Fk.featuredFish;
      return (0, nT.jsxs)("li", {
        className: QT()("SkyblockKeepersChairIsland", `Island-${Fk.id}`, Fk.favoured && "Aimed", !Fk.relit && "Dark"),
        children: [(0, nT.jsx)("h3", {
          children: Fk.name
        }), Fk.relit && null !== ik ? (0, nT.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, nT.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: Tk("skyblockGame:keepersChairTideNotice")
          }), (0, nT.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, nT.jsx)(ST.d, {
              itemName: ik.itemName,
              amount: 0
            })
          }), (0, nT.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: ik.displayName
          })]
        }) : (0, nT.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, nT.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: Tk("skyblockGame:keepersChairDark")
          })
        }), Fk.relit && (Fk.favoured ? (0, nT.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: Tk("skyblockGame:keepersChairAimed")
        }) : (0, nT.jsx)(cT.d, {
          className: "SkyblockKeepersChairAim",
          disabled: !Ik.canAim,
          ariaLabel: Tk("skyblockGame:keepersChairAimLabel", {
            island: Fk.name
          }),
          onClick: () => {
            Xk(Fk.id)
          },
          children: Tk("skyblockGame:keepersChairAim")
        }))]
      }, Fk.favoured ? Ik.aimedCount : 0)
    }

    function Vy(kk) {
      let {
        controller: Fk,
        lampLight: Ik
      } = kk;
      const Xk = (0, OT.f)(vX, Fk.getSnapshot()),
        Tk = (0, OT.f)(RX, Ik.getSnapshot()),
        [ik, yk] = (0, Sk.useState)("lamp"),
        {
          t: lk
        } = (0, ET.y)(),
        ak = fT();
      if (!Xk.enabled) return null;
      const qk = "light" === ik && Tk.enabled;
      return (0, nT.jsx)(NT.c, {
        show: Xk.open,
        close: Fk.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, nT.jsxs)("section", {
          className: QT()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", qk && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: ak,
          onKeyDown: WT,
          children: [(0, nT.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, nT.jsxs)("div", {
              children: [(0, nT.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: lk("skyblockGame:keepersChairTitle")
              }), (0, nT.jsx)("p", {
                children: lk(qk ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, nT.jsx)(cT.k, {
              padIgnore: !0,
              ariaLabel: lk("skyblockGame:keepersChairClose"),
              onClick: Fk.dismiss
            })]
          }), Tk.enabled && (0, nT.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((kk => (0, nT.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === kk === qk,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === kk === qk ? "true" : void 0,
              className: QT()("SkyblockKeepersChairTab", "light" === kk === qk && "Selected"),
              onClick: () => {
                yk(kk)
              },
              children: [lk("lamp" === kk ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === kk && (0, nT.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: Tk.balance
              })]
            }, kk)))
          }), qk ? (0, nT.jsx)(Ky, {
            controller: Ik
          }) : (0, nT.jsx)(zy, {
            view: Xk,
            controller: Fk
          })]
        })
      })
    }

    function zy(kk) {
      let {
        view: Fk,
        controller: Ik
      } = kk;
      const {
        t: Xk
      } = (0, ET.y)();
      return (0, nT.jsxs)(nT.Fragment, {
        children: [(0, nT.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: Fk.islands.map((kk => (0, nT.jsx)(sy, {
            island: kk,
            view: Fk,
            aim: Ik.aim
          }, kk.id)))
        }), null !== Fk.almanac && (0, nT.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, nT.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: Xk("skyblockGame:passageTitle")
          }), (0, nT.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, nT.jsx)(jy, {
              phase: Fk.almanac.phase
            }), Fk.almanac.phaseName]
          }), (0, nT.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, nT.jsx)(jy, {
              phase: Fk.almanac.nextPhase
            }), Fk.almanac.next]
          })]
        }), (0, nT.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, nT.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: Xk("skyblockGame:keepersChairFavour")
          }), Fk.aimed && (0, nT.jsx)(cT.Q, {
            className: "SkyblockKeepersChairRest",
            disabled: !Fk.canAim,
            onClick: () => {
              Ik.aim(null)
            },
            children: Xk("skyblockGame:keepersChairRest")
          })]
        }), null !== Fk.status && (0, nT.jsx)("p", {
          className: QT()("SkyblockKeepersChairStatus", "refused" === Fk.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: Fk.status.text
        })]
      })
    }

    function Sy(kk) {
      let {
        controller: Fk
      } = kk;
      const {
        t: Ik
      } = (0, ET.y)(), Xk = (0, OT.f)(OX, Fk.getSnapshot());
      if (!Xk.enabled) return null;
      const Tk = Xk.freshCount > 0 ? Ik("skyblockGame:reachLogOpenNews", {
        count: Xk.freshCount
      }) : Ik("skyblockGame:reachLogOpen");
      return (0, nT.jsx)(VT.f, {
        placement: "statBars",
        children: (0, nT.jsxs)("button", {
          type: "button",
          className: QT()("SkyblockReachLogButton", Xk.freshCount > 0 && "HasNews", Xk.pending && "Pending"),
          "aria-label": Tk,
          title: Tk,
          onClick: Fk.ask,
          children: [Xk.news && (0, nT.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${Xk.newsToken}`), (0, nT.jsx)("span", {
            className: QT()("SkyblockReachLogIcon", Xk.news && "Jump"),
            "aria-hidden": "true",
            children: (0, nT.jsx)(ST.d, {
              itemName: GX,
              amount: 0
            })
          }, `icon:${Xk.newsToken}`), Xk.freshCount > 0 && (0, nT.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: Xk.freshCount
          })]
        })
      })
    }

    function oy(kk) {
      let {
        gift: Fk
      } = kk;
      return (0, nT.jsx)("li", {
        className: QT()("SkyblockRegularsGift", Fk.given && "Given"),
        children: Fk.text
      })
    }

    function vy(kk) {
      let {
        regular: Fk
      } = kk;
      const {
        t: Ik
      } = (0, ET.y)();
      return (0, nT.jsxs)("li", {
        className: QT()("SkyblockRegularsCard", Fk.tagged ? "Tagged" : "Untagged", Fk.resting && "Resting"),
        children: [(0, nT.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, nT.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: Fk.fishName,
            children: (0, nT.jsx)(ST.d, {
              itemName: Fk.itemName,
              amount: 0
            })
          }), (0, nT.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, nT.jsx)("h3", {
              children: Fk.name
            }), (0, nT.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: Fk.fishName
            })]
          })]
        }), (0, nT.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: Fk.line
        }), (0, nT.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, nT.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: Fk.size
          }), Fk.tagged && (0, nT.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: Fk.resting ? Ik("skyblockGame:regularsResting") : Fk.meetings
          })]
        }), (0, nT.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: Fk.chance
        }), (0, nT.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: Fk.gifts.map((kk => (0, nT.jsx)(oy, {
            gift: kk
          }, kk.text)))
        }), Fk.history.length > 0 && (0, nT.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: Fk.history.map(((kk, Fk) => (0, nT.jsx)("li", {
            children: kk
          }, Fk)))
        })]
      })
    }

    function Ey(kk) {
      let {
        controller: Fk,
        island: Ik
      } = kk;
      const {
        t: Xk
      } = (0, ET.y)(), Tk = (0, OT.f)(FT, Fk.getSnapshot()), ik = Tk.islands.find((kk => kk.id === Ik));
      if (!Tk.enabled || void 0 === ik) return null;
      const yk = Xk("skyblockGame:regularsOpen");
      return (0, nT.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": yk,
        title: yk,
        onClick: () => {
          Fk.openIsland(Ik)
        },
        children: [(0, nT.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: Xk("skyblockGame:regularsTitle")
        }), ik.regulars.map((kk => (0, nT.jsx)("span", {
          className: QT()("SkyblockRegularsStripIcon", kk.tagged && "Tagged"),
          title: kk.name,
          children: (0, nT.jsx)(ST.d, {
            itemName: kk.itemName,
            amount: 0
          })
        }, kk.id)))]
      })
    }

    function Oy(kk) {
      var Fk;
      let {
        controller: Ik
      } = kk;
      const Xk = (0, OT.f)(FT, Ik.getSnapshot()),
        {
          t: Tk
        } = (0, ET.y)(),
        ik = fT();
      if (!Xk.enabled) return null;
      const yk = null !== (Fk = Xk.islands.find((kk => kk.id === Xk.selected))) && void 0 !== Fk ? Fk : null;
      return (0, nT.jsx)(NT.c, {
        show: Xk.open,
        close: Ik.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, nT.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: ik,
          onKeyDown: WT,
          children: [(0, nT.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, nT.jsxs)("div", {
              children: [(0, nT.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: Tk("skyblockGame:regularsTitle")
              }), (0, nT.jsx)("p", {
                children: Tk("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, nT.jsx)(cT.k, {
              padIgnore: !0,
              onClick: Ik.dismiss
            })]
          }), (0, nT.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: Xk.islands.map((kk => {
              const Fk = kk.id === Xk.selected;
              return (0, nT.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": Fk,
                "data-pad-tab": !0,
                "data-pad-selected": Fk ? "true" : void 0,
                className: QT()("SkyblockReachLogTab", `Island-${kk.id}`, Fk && "Selected", kk.charm.given && "GoldPage"),
                onClick: () => {
                  Ik.selectIsland(kk.id)
                },
                children: (0, nT.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: kk.name
                })
              }, kk.id)
            }))
          }), (0, nT.jsxs)("div", {
            className: QT()("SkyblockRegularsPage", null !== yk && `Island-${yk.id}`),
            role: "tabpanel",
            children: [(0, nT.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: Tk("skyblockGame:regularsHow")
            }), null !== yk && (0, nT.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: yk.regulars.map((kk => (0, nT.jsx)(vy, {
                regular: kk
              }, kk.id)))
            })]
          }), null !== yk && (0, nT.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, nT.jsx)("span", {
              className: QT()("SkyblockRegularsCharm", yk.charm.given && "Given"),
              children: yk.charm.text
            })
          })]
        })
      })
    }
    const ny = [{
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
      Gy = Array.from({
        length: 6
      }, ((kk, Fk) => ({
        "--x": `${(88*(.618034*Fk%1)).toFixed(1)}%`,
        "--y": `${(10+37*Fk%70).toFixed(1)}%`,
        "--size": 7 + Fk % 3 * 3 + "rem",
        "--drift-x": 3 * (Fk % 3 - 1) + "rem",
        "--drift-y": 2 * (Fk % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + Fk % 4 * 3 + "s",
        "--delay": 2.5 * -Fk + "s"
      }))),
      py = Array.from({
        length: 14
      }, ((kk, Fk) => ({
        "--left": `${(3+94*((.618034*Fk+.3)%1)).toFixed(1)}%`,
        "--size": 4 + Fk % 4 * 2 + "px",
        "--sway": Fk % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*Fk%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*Fk%12).toFixed(2)}s`
      }))),
      uy = (0, Sk.memo)((function(kk) {
        let {
          island: Fk
        } = kk;
        return (0, nT.jsxs)("div", {
          className: QT()("SkyblockReachLogDepths", null !== Fk && `Island-${Fk}`),
          "aria-hidden": "true",
          children: [ny.map(((kk, Fk) => (0, nT.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: kk
          }, `shaft${Fk}`))), Gy.map(((kk, Fk) => (0, nT.jsx)("span", {
            className: QT()("SkyblockReachLogMote", Fk % 2 === 1 && "Violet"),
            style: kk
          }, `mote${Fk}`))), py.map(((kk, Fk) => (0, nT.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: kk
          }, `bubble${Fk}`)))]
        })
      })),
      by = 100;

    function Ry(kk) {
      let {
        view: Fk
      } = kk;
      const {
        t: Ik
      } = (0, ET.y)();
      if (null === Fk || 0 === Fk.total) return null;
      const Xk = by * Fk.aspect,
        Tk = Ik("skyblockGame:hiddenWatersCount", {
          found: Fk.found,
          total: Fk.total
        });
      return (0, nT.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${Ik("skyblockGame:hiddenWatersTitle")}: ${Tk}`,
        children: [(0, nT.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${Xk}`,
          "aria-hidden": "true",
          children: [Fk.islands.map(((kk, Fk) => (0, nT.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (kk.left + kk.width / 2) * by,
            cy: (kk.top + kk.height / 2) * Xk,
            rx: kk.width / 2 * by,
            ry: kk.height / 2 * Xk
          }, Fk))), Fk.pins.map(((kk, Fk) => (0, nT.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: kk.left * by,
            cy: kk.top * Xk,
            r: 13
          }, Fk)))]
        }), (0, nT.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, nT.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: Ik("skyblockGame:hiddenWatersTitle")
          }), (0, nT.jsx)("span", {
            className: Fk.found === Fk.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: Tk
          })]
        })]
      })
    }

    function Uy(kk) {
      let {
        view: Fk,
        island: Ik
      } = kk;
      const {
        t: Xk
      } = (0, ET.y)(), Tk = null === Fk || void 0 === Fk ? void 0 : Fk.glimpses.get(Ik);
      return void 0 === Tk || 0 === Tk.length ? null : (0, nT.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, nT.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: Xk("skyblockGame:hiddenWatersGlimpsed")
        }), (0, nT.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: Tk.map((kk => (0, nT.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, nT.jsx)(ST.d, {
              itemName: kk,
              amount: 0
            })
          }, kk)))
        })]
      })
    }
    const Cy = ["Bronze", "Silver", "Gold"],
      Ny = [{
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
      cy = Ny.slice(0, 2);

    function Wy(kk) {
      return kk ? Ny : cy
    }

    function fy(kk) {
      let {
        fish: Fk,
        letGoShown: Ik
      } = kk;
      const {
        t: Xk
      } = (0, ET.y)();
      return (0, nT.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [Cy.map(((kk, Ik) => {
          const Tk = Ik < Fk.marks;
          return (0, nT.jsx)("span", {
            className: QT()("SkyblockReachLogPip", kk, Tk && "Earned", Tk && Fk.fresh && Ik === Fk.marks - 1 && "Newest"),
            title: Xk(nX[Ik])
          }, kk)
        })), (0, nT.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), Wy(Ik).map(((kk, Ik) => (0, nT.jsx)("span", {
          className: QT()("SkyblockReachLogRibbon", kk.className, !0 === Fk.ribbons[Ik] && "Earned"),
          title: Xk(kk.titleKey)
        }, kk.className)))]
      })
    }

    function By(kk) {
      let {
        letGoShown: Fk,
        haloShown: Ik
      } = kk;
      const {
        t: Xk
      } = (0, ET.y)();
      return (0, nT.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, nT.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Xk("skyblockGame:reachLogMarks"),
          children: [(0, nT.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), Xk("skyblockGame:reachLogLegendMarks")]
        }), Wy(Fk).map((kk => (0, nT.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Xk(kk.titleKey),
          children: [(0, nT.jsx)("span", {
            className: QT()("SkyblockReachLogRibbon", kk.className, "Earned")
          }), Xk(kk.legendKey)]
        }, kk.className))), (0, nT.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Xk("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, nT.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), Xk("skyblockGame:reachLogLegendGlimmer")]
        }), Ik && (0, nT.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Xk("skyblockGame:reachLogHaloTitle"),
          children: [(0, nT.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), Xk("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function dy(kk) {
      let {
        returner: Fk
      } = kk;
      return (0, nT.jsxs)("div", {
        className: QT()("SkyblockReachLogReturner", Fk.back && "Back"),
        children: [(0, nT.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, nT.jsx)(ST.d, {
            itemName: Fk.itemName,
            amount: 0
          })
        }), (0, nT.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: Fk.line
        })]
      })
    }

    function Yy(kk) {
      let {
        fish: Fk,
        letGoShown: Ik
      } = kk;
      const {
        t: Xk
      } = (0, ET.y)();
      return (0, nT.jsxs)("li", {
        className: QT()("SkyblockReachLogCard", Fk.caught ? "Caught" : "Unknown", Fk.marks >= 3 && "GoldCard", Fk.fresh && "Fresh", Fk.visitor && "Visitor"),
        children: [Fk.visitor && (0, nT.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: Xk("skyblockGame:reachLogVisitor")
        }), Fk.fresh && Array.from({
          length: 4
        }, ((kk, Fk) => (0, nT.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, Fk))), (0, nT.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [Fk.halo && (0, nT.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: Xk("skyblockGame:reachLogHaloTitle")
          }), (0, nT.jsx)(ST.d, {
            itemName: Fk.itemName,
            amount: 0
          }), Fk.glimmer && (0, nT.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: Xk("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, nT.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: Fk.name
        }), (0, nT.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: Fk.chance
        }), (0, nT.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: Fk.best
        }), (0, nT.jsx)(fy, {
          fish: Fk,
          letGoShown: Ik
        })]
      })
    }

    function Ay(kk) {
      let {
        page: Fk,
        letGoShown: Ik,
        hiddenWaters: Xk
      } = kk;
      const {
        t: Tk
      } = (0, ET.y)();
      return Fk.awake ? (0, nT.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: Fk.fish.map((kk => (0, nT.jsx)(Yy, {
          fish: kk,
          letGoShown: Ik
        }, kk.itemName)))
      }) : (0, nT.jsxs)(nT.Fragment, {
        children: [(0, nT.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: Tk("skyblockGame:reachLogAsleep")
        }), (0, nT.jsx)(Uy, {
          view: Xk,
          island: Fk.id
        })]
      })
    }

    function gy(kk) {
      var Fk, Ik;
      let {
        controller: Xk,
        regulars: Tk,
        hiddenWaters: ik
      } = kk;
      const yk = (0, OT.f)(OX, Xk.getSnapshot()),
        lk = function(kk) {
          return (0, OT.f)(yT, kk.getSnapshot())
        }(ik),
        ak = (0, OT.f)(FT, Tk.getSnapshot()),
        {
          t: qk
        } = (0, ET.y)(),
        Lk = fT();
      if (!yk.enabled) return null;
      const tk = null !== (Fk = yk.pages.find((kk => kk.id === yk.selected))) && void 0 !== Fk ? Fk : null;
      return (0, nT.jsx)(NT.c, {
        show: yk.open,
        close: Xk.dismiss,
        togglePointerLock: !1,
        className: QT()("SkyblockSkillsOverlay", ak.open && "SkyblockReachLogUnderLedger"),
        children: (0, nT.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: Lk,
          onKeyDown: WT,
          children: [(0, nT.jsx)(uy, {
            island: null !== (Ik = null === tk || void 0 === tk ? void 0 : tk.id) && void 0 !== Ik ? Ik : null
          }), (0, nT.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, nT.jsxs)("div", {
              children: [(0, nT.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: qk("skyblockGame:reachLogTitle")
              }), (0, nT.jsx)("p", {
                children: qk("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, nT.jsx)(Ry, {
              view: lk
            }), (0, nT.jsx)(cT.k, {
              padIgnore: !0,
              onClick: Xk.dismiss
            })]
          }), (0, nT.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: yk.pages.map((kk => {
              const Fk = kk.id === yk.selected,
                Ik = kk.fish.some((kk => kk.fresh));
              return (0, nT.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": Fk,
                "data-pad-tab": !0,
                "data-pad-selected": Fk ? "true" : void 0,
                className: QT()("SkyblockReachLogTab", `Island-${kk.id}`, Fk && "Selected", !kk.awake && "Asleep", kk.gold && "GoldPage", Ik && "HasNews"),
                onClick: () => {
                  Xk.selectPage(kk.id)
                },
                children: [(0, nT.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: kk.name
                }), kk.awake && (0, nT.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: qk("skyblockGame:reachLogCaughtCount", {
                    caught: kk.caught,
                    total: kk.total
                  })
                })]
              }, kk.id)
            }))
          }), (0, nT.jsxs)("div", {
            className: QT()("SkyblockReachLogPage", null !== tk && `Island-${tk.id}`),
            role: "tabpanel",
            children: [null !== tk && (0, nT.jsx)(Ay, {
              page: tk,
              letGoShown: yk.letGoShown,
              hiddenWaters: lk
            }), !0 === (null === tk || void 0 === tk ? void 0 : tk.awake) && null !== tk.returner && (0, nT.jsx)(dy, {
              returner: tk.returner
            }), !0 === (null === tk || void 0 === tk ? void 0 : tk.awake) && (0, nT.jsx)(Ey, {
              controller: Tk,
              island: tk.id
            })]
          }), (0, nT.jsx)("footer", {
            className: QT()("SkyblockReachLogFooter", null !== tk && `Island-${tk.id}`, !0 === (null === tk || void 0 === tk ? void 0 : tk.gold) && "GoldPage"),
            children: !0 === (null === tk || void 0 === tk ? void 0 : tk.gold) ? (0, nT.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: qk("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, nT.jsxs)(nT.Fragment, {
              children: [(0, nT.jsx)(By, {
                letGoShown: yk.letGoShown,
                haloShown: !0 === (null === tk || void 0 === tk ? void 0 : tk.fish.some((kk => kk.halo)))
              }), (0, nT.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: qk("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var my = Ik(4829);

    function hy(kk) {
      let {
        conversation: Fk,
        completedLabel: Ik
      } = kk;
      return (0, nT.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, nT.jsxs)("header", {
          children: [(0, nT.jsx)("h3", {
            children: Fk.questName
          }), Fk.completed && (0, nT.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: Ik
          })]
        }), Fk.lines.map((kk => (0, nT.jsx)(my.e, {
          display: kk.display
        }, kk.key)))]
      })
    }

    function ry(kk) {
      let {
        controller: Fk
      } = kk;
      const {
        t: Ik
      } = (0, ET.y)(), Xk = (0, OT.f)(aT, Fk.getSnapshot()), Tk = fT();
      if (!Xk.enabled) return null;
      const ik = !Xk.loading && 0 === Xk.conversations.length;
      return (0, nT.jsx)(NT.c, {
        show: Xk.open,
        close: Fk.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, nT.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: Tk,
          onKeyDown: WT,
          children: [(0, nT.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, nT.jsxs)("div", {
              children: [(0, nT.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: Ik("skyblockDialogue:title")
              }), (0, nT.jsx)("p", {
                children: Ik("skyblockDialogue:intro")
              })]
            }), (0, nT.jsx)(cT.k, {
              padIgnore: !0,
              onClick: Fk.dismiss
            })]
          }), (0, nT.jsxs)("div", {
            className: QT()("SkyblockDialogueBody", {
              SingleColumn: null !== Xk.questFocus || 0 === Xk.characters.length
            }),
            children: [null === Xk.questFocus && Xk.characters.length > 0 && (0, nT.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: Xk.characters.map((kk => (0, nT.jsx)(cT.d, {
                className: QT()("SkyblockDialogueCharacter", {
                  Selected: kk.selected
                }),
                onClick: () => {
                  Fk.selectCharacter(kk.id)
                },
                children: (0, nT.jsx)(oT.c, {
                  text: kk.styling
                })
              }, kk.id)))
            }), (0, nT.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== Xk.questFocus && (0, nT.jsx)(cT.d, {
                className: "SkyblockDialogueBack",
                onClick: Fk.showCharacters,
                children: Ik("skyblockDialogue:allCharacters")
              }), Xk.loading && (0, nT.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: Ik("skyblockDialogue:loading")
              }), ik && (0, nT.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: Ik(null === Xk.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), Xk.conversations.map((kk => (0, nT.jsx)(hy, {
                conversation: kk,
                completedLabel: Xk.completedLabel
              }, kk.questId)))]
            })]
          })]
        })
      })
    }

    function Dy(kk) {
      let {
        controller: Fk
      } = kk;
      const Ik = (0, OT.f)(jT, Fk.getSnapshot()),
        {
          t: Xk
        } = (0, ET.y)(),
        Tk = fT();
      return Ik.enabled ? (0, nT.jsx)(NT.c, {
        show: Ik.open,
        close: Fk.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, nT.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: Tk,
          onKeyDown: WT,
          children: [(0, nT.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, nT.jsxs)("div", {
              children: [(0, nT.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: Xk("skyblockGame:autographBook")
              }), (0, nT.jsx)("p", {
                children: Xk("skyblockGame:autographBookIntro")
              })]
            }), (0, nT.jsx)(cT.k, {
              padIgnore: !0,
              onClick: Fk.dismiss
            })]
          }), (0, nT.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, nT.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, nT.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, nT.jsx)("strong", {
                  children: Ik.total
                }), (0, nT.jsx)("span", {
                  children: Xk("skyblockGame:autographTotal")
                })]
              }), (0, nT.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, nT.jsx)("strong", {
                  children: Ik.rankTotal
                }), (0, nT.jsx)("span", {
                  children: Xk("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === Ik.entries.length ? (0, nT.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: Xk("skyblockGame:autographBookEmpty")
            }) : (0, nT.jsx)("ul", {
              className: "SkyblockAutographList",
              children: Ik.entries.map((kk => (0, nT.jsxs)("li", {
                className: QT()("SkyblockAutograph", {
                  Ranked: null !== kk.rank
                }),
                style: null === kk.rank ? void 0 : {
                  color: kk.rank.colour
                },
                children: [null !== kk.rank && (0, nT.jsx)(ji.e, {
                  className: "SkyblockAutographRankIcon",
                  name: kk.rank.icon,
                  kit: (0, ji.f)(kk.rank.icon)
                }), (0, nT.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, nT.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: kk.name
                  }), (0, nT.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== kk.rank && (0, nT.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: kk.rank.label
                    }), (0, nT.jsx)("span", {
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
    const My = (0, Sk.memo)((function(kk) {
        let {
          controller: Fk
        } = kk;
        return (0, nT.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: Fk.display.mountWaypoint,
          children: [(0, nT.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, nT.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, nT.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, nT.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, nT.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, nT.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      kl = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function Fl(kk) {
      return "next" === kk.phase ? "\u2192" : kl[kk.kind]
    }
    const Il = (0, Sk.memo)((function(kk) {
      let {
        controller: Fk,
        display: Ik
      } = kk;
      const Xk = (0, OT.f)(tI, Fk.getNotificationSnapshot()),
        [Tk, ik] = (0, Sk.useState)(!1);
      return (0, OT.d)("qteStateUpdated", (kk => {
        ik(kk.isActive)
      })), (0, nT.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (Tk ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [Xk && (0, nT.jsxs)("div", {
          className: `SkyblockQuestNotification ${Xk.kind} ${Xk.phase}`,
          style: {
            "--quest-notification-duration": `${Xk.durationMs}ms`,
            ...Xk.accent && {
              "--quest-notification-accent": Xk.accent
            }
          },
          children: [(0, nT.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (Xk.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, nT.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: Fl(Xk)
            }), Xk.iconItem && (0, nT.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, nT.jsx)(ST.d, {
                itemName: Xk.iconItem,
                amount: 0
              })
            })]
          }), (0, nT.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, nT.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: Xk.title
            }), (0, nT.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, nT.jsx)(yi.b, {
                text: Xk.name
              })
            }), Xk.description && (0, nT.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, nT.jsx)(yi.b, {
                text: Xk.description
              })
            }), Xk.reward && (0, nT.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, nT.jsx)(yi.b, {
                text: Xk.reward
              })
            })]
          })]
        }, Xk.token), (null === Xk || void 0 === Xk ? void 0 : Xk.waypointNameKey) && (0, nT.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": Xk.waypointNameKey,
          "data-notification-token": Xk.token,
          ref: Ik.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${Xk.token}`)]
      })
    }));

    function Xl(kk) {
      const Fk = parseInt(kk.replace("#", ""), 16);
      return `${Fk>>16&255}, ${Fk>>8&255}, ${255&Fk}`
    }
    const Tl = (0, Sk.memo)((function(kk) {
      let {
        controller: Fk
      } = kk;
      const {
        t: Ik
      } = (0, ET.y)(), Xk = (0, OT.f)(CI, Fk.getSnapshot());
      if (!Xk) return null;
      const Tk = "arrival" === Xk.phase;
      return (0, nT.jsxs)("div", {
        className: QT()("SkyblockPortalTransit", {
          Departure: !Tk,
          Arrival: Tk
        }),
        style: {
          "--portal-rgb": Xl(Xk.colour),
          "--portal-duration": `${Xk.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, nT.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, nT.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            Fk.finishArrival(Xk.token)
          }
        }), (0, nT.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, nT.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !Tk && (0, nT.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: Ik("skyblockGame:portalTransitHeading")
          }), (0, nT.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: Ik(Xk.zoneNameKey)
          })]
        })]
      }, Xk.token)
    }));

    function il() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function yl() {
      const kk = document.querySelector(".SkyblockHudCoins"),
        Fk = null === kk || void 0 === kk ? void 0 : kk.getBoundingClientRect();
      return Fk && Fk.width > 0 ? {
        x: Fk.left + Math.min(Fk.width, 24) / 2,
        y: Fk.top + Fk.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function ll(kk) {
      return {
        x: kk.left + kk.width / 2,
        y: kk.top + kk.height / 2
      }
    }

    function al() {
      var kk;
      const Fk = null === (kk = document.querySelector(".HotBar")) || void 0 === kk ? void 0 : kk.getBoundingClientRect();
      return Fk && Fk.width > 0 ? ll(Fk) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function ql(kk) {
      let {
        items: Fk,
        origins: Ik,
        target: Xk
      } = kk;
      return (0, nT.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: Fk.map(((kk, Fk) => {
          const Tk = Ik[Fk];
          return (0, nT.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${Tk.x}px`,
              top: `${Tk.y}px`,
              "--item-dx": Xk.x - Tk.x + "px",
              "--item-dy": Xk.y - Tk.y + "px",
              "--item-delay": 2e3 + 160 * Fk + "ms",
              "--item-flight": "700ms"
            },
            children: (0, nT.jsx)(ST.d, {
              itemName: kk.dailyRewardItemName,
              amount: 0
            })
          }, kk.dailyRewardItemName)
        }))
      })
    }

    function Ll(kk, Fk) {
      const Ik = -Math.PI / 2 + 1.25 * (kk / (Fk - 1) * 2 - 1),
        Xk = 70 + kk % 3 * 22;
      return {
        x: Math.cos(Ik) * Xk,
        y: Math.sin(Ik) * Xk * .7
      }
    }

    function tl(kk) {
      let {
        origin: Fk,
        target: Ik,
        count: Xk
      } = kk;
      const Tk = [];
      for (let ik = 0; ik < Xk; ik++) {
        const kk = Ll(ik, Xk);
        Tk.push((0, nT.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${Fk.x}px`,
            top: `${Fk.y}px`,
            "--coin-bx": `${kk.x}px`,
            "--coin-by": `${kk.y}px`,
            "--coin-dx": Ik.x - Fk.x + "px",
            "--coin-dy": Ik.y - Fk.y + "px",
            "--coin-delay": `${dI(ik,Xk)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, nT.jsx)(ST.d, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, ik))
      }
      return (0, nT.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: Tk
      })
    }

    function Zl(kk) {
      let {
        day: Fk
      } = kk;
      const Ik = vk[Fk - 1];
      return (0, nT.jsxs)(nT.Fragment, {
        children: [(0, nT.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, nT.jsx)(ST.d, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, vT.d)(Ik.dailyRewardCoins)]
        }), Ik.dailyRewardItems.map((kk => (0, nT.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, nT.jsx)(ST.d, {
            itemName: kk.dailyRewardItemName,
            amount: 0
          }), "\xd7", kk.dailyRewardItemAmount]
        }, kk.dailyRewardItemName)))]
      })
    }

    function jl(kk) {
      let {
        day: Fk
      } = kk;
      const Ik = Ok(Fk);
      return (0, nT.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: vk.map(((kk, Xk) => {
          const Tk = Xk + 1;
          return (0, nT.jsxs)("li", {
            className: QT()("SkyblockDailyRewardTile", {
              Claimed: Tk < Fk && Tk !== Ik,
              Today: Tk === Fk,
              Tomorrow: Tk === Ik,
              Jackpot: Tk === Ek
            }),
            children: [(0, nT.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: Tk
            }), (0, nT.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, nT.jsx)(ST.d, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, vT.d)(kk.dailyRewardCoins)]
            }), kk.dailyRewardItems.map((kk => (0, nT.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, nT.jsx)(ST.d, {
                itemName: kk.dailyRewardItemName,
                amount: 0
              }), "\xd7", kk.dailyRewardItemAmount]
            }, kk.dailyRewardItemName)))]
          }, Tk)
        }))
      })
    }

    function el(kk) {
      let {
        view: Fk
      } = kk;
      const {
        t: Ik
      } = (0, ET.y)(), Xk = (0, Sk.useRef)(null), Tk = (0, Sk.useRef)(null), [ik, yk] = (0, Sk.useState)(null);
      (0, Sk.useLayoutEffect)((() => {
        var kk;
        const Fk = null === (kk = Xk.current) || void 0 === kk ? void 0 : kk.getBoundingClientRect();
        if (Fk) {
          var Ik, ik;
          const kk = Array.from(null !== (Ik = null === (ik = Tk.current) || void 0 === ik ? void 0 : ik.children) && void 0 !== Ik ? Ik : [], (kk => ll(kk.getBoundingClientRect())));
          yk({
            origin: ll(Fk),
            target: yl(),
            itemOrigins: kk,
            itemTarget: al()
          })
        }
      }), []);
      const lk = Ok(Fk.day),
        ak = function(kk, Fk) {
          const [Ik, Xk] = (0, Sk.useState)((() => il() ? kk : 0));
          return (0, Sk.useEffect)((() => {
            if (il()) return;
            const Ik = performance.now();
            let Tk = 0;
            const ik = yk => {
              const lk = Math.min(Math.max((yk - Ik) / Fk, 0), 1);
              Xk(Math.round(kk * (1 - (1 - lk) ** 3))), lk < 1 && (Tk = requestAnimationFrame(ik))
            };
            return Tk = requestAnimationFrame(ik), () => {
              cancelAnimationFrame(Tk)
            }
          }), [kk, Fk]), Ik
        }(Fk.coins, 450);
      return (0, nT.jsxs)("div", {
        className: QT()("SkyblockDailyReward", {
          Jackpot: Fk.day === Ek
        }),
        style: {
          "--daily-duration": `${Fk.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, nT.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, nT.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, nT.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, nT.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: Ik("skyblockGame:dailyRewardTitle")
            }), (0, nT.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: Ik("skyblockGame:dailyRewardDay", {
                day: String(Fk.day)
              })
            })]
          }), (0, nT.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: Xk,
            children: [(0, nT.jsx)(ST.d, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, nT.jsxs)("span", {
              children: ["+", (0, vT.d)(ak)]
            })]
          }), Fk.items.length > 0 && (0, nT.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: Tk,
            children: Fk.items.map((kk => (0, nT.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, nT.jsx)(ST.d, {
                itemName: kk.dailyRewardItemName,
                amount: 0
              }), "\xd7", kk.dailyRewardItemAmount]
            }, kk.dailyRewardItemName)))
          }), (0, nT.jsx)(jl, {
            day: Fk.day
          }), (0, nT.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [Ik("skyblockGame:dailyRewardComeBack"), (0, nT.jsx)(Zl, {
              day: lk
            })]
          })]
        }), null !== ik && (0, nT.jsx)(tl, {
          origin: ik.origin,
          target: ik.target,
          count: Fk.flyingCoins
        }), null !== ik && ik.itemOrigins.length === Fk.items.length && (0, nT.jsx)(ql, {
          items: Fk.items,
          origins: ik.itemOrigins,
          target: ik.itemTarget
        })]
      })
    }
    const wl = (0, Sk.memo)((function(kk) {
        let {
          controller: Fk
        } = kk;
        const Ik = (0, OT.f)(WI, Fk.getSnapshot());
        return Ik ? (0, nT.jsx)(el, {
          view: Ik
        }, Ik.token) : null
      })),
      Hl = "Gold Coin";

    function Jl(kk) {
      return 650 + 220 * kk
    }

    function xl(kk) {
      return {
        "--letter-delay": `${Jl(kk)}ms`,
        "--letter-land": `${Jl(kk)+300}ms`
      }
    }

    function Pl(kk) {
      let {
        letterCount: Fk
      } = kk;
      return (0, nT.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, nT.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, nT.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, nT.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: Fk
        }, ((kk, Fk) => (0, nT.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: xl(Fk),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, Fk)))]
      })
    }

    function Kl(kk) {
      var Fk, Ik, Xk;
      let {
        letter: Tk,
        index: ik
      } = kk;
      const {
        t: yk
      } = (0, ET.y)(), lk = null !== (Fk = null === (Ik = Tk.items[0]) || void 0 === Ik ? void 0 : Ik.itemName) && void 0 !== Fk ? Fk : Hl;
      return (0, nT.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: xl(ik),
        children: [(0, nT.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, nT.jsx)(ST.d, {
            itemName: lk,
            amount: 0
          })
        }), (0, nT.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: yk(Tk.reasonKey, null !== (Xk = Tk.reasonParams) && void 0 !== Xk ? Xk : void 0)
        }), (0, nT.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [Tk.coins > 0 && (0, nT.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, nT.jsx)(ST.d, {
              itemName: Hl,
              amount: 0
            }), "+", (0, vT.d)(Tk.coins)]
          }), Tk.items.map(((kk, Fk) => (0, nT.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, nT.jsx)(ST.d, {
              itemName: kk.itemName,
              amount: 0
            }), kk.label, " \xd7", kk.amount]
          }, Fk)))]
        })]
      })
    }

    function Ql(kk) {
      let {
        view: Fk
      } = kk;
      const {
        t: Ik
      } = (0, ET.y)();
      return (0, nT.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${Fk.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${Jl(Fk.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, nT.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, nT.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, nT.jsx)(Pl, {
              letterCount: Fk.letters.length
            }), (0, nT.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: Ik("skyblockGame:mailboxTitle")
            })]
          }), (0, nT.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: Fk.letters.map(((kk, Fk) => (0, nT.jsx)(Kl, {
              letter: kk,
              index: Fk
            }, Fk)))
          }), Fk.more > 0 && (0, nT.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: Ik("skyblockGame:mailboxMore", {
              count: String(Fk.more)
            })
          })]
        })
      })
    }
    const sl = (0, Sk.memo)((function(kk) {
      let {
        controller: Fk
      } = kk;
      const Ik = (0, OT.f)(AI, Fk.getSnapshot());
      return Ik ? (0, nT.jsx)(Ql, {
        view: Ik
      }, Ik.token) : null
    }));

    function Vl(kk) {
      let {
        controller: Fk
      } = kk;
      const {
        t: Ik
      } = (0, ET.y)(), Xk = (0, OT.f)(CX, Fk.getSnapshot());
      if (null === Xk) return null;
      const Tk = Xk.fullSet ? "empty" === Xk.fuelState ? {
        text: Ik("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: Ik("skyblockGame:magmawardHudFullSet", {
          worn: String(Xk.wornCount)
        }),
        tone: "partial"
      };
      return (0, nT.jsx)(VT.f, {
        placement: "statBars",
        children: (0, nT.jsxs)("div", {
          className: QT()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${Xk.fuelState}`, {
            "SkyblockMagmawardHud-partial": !Xk.fullSet,
            "SkyblockMagmawardHud-armed": Xk.fullSet && "empty" !== Xk.fuelState
          }),
          children: [null !== Xk.flare && (0, nT.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${Xk.flare}`
          }, `flare:${Xk.flareToken}`), (0, nT.jsx)("div", {
            className: QT()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: Xk.setLit
            }),
            children: Xk.pieces.map(((kk, Fk) => (0, nT.jsx)("div", {
              className: QT()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: kk.worn,
                SkyblockMagmawardPieceJustWorn: kk.justWorn
              }),
              children: (0, nT.jsx)(ST.d, {
                itemName: kk.itemName,
                amount: 0
              })
            }, `${Fk}:${kk.wornToken}`)))
          }, `pieces:${Xk.setLitToken}`), (0, nT.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, nT.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, nT.jsxs)("div", {
              className: QT()("SkyblockMagmawardFuelCounter", Xk.pulse && `SkyblockMagmawardFuelCounter-${Xk.pulse}`),
              children: [(0, nT.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, nT.jsx)(ST.d, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, nT.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: Xk.fuel
              })]
            }, `counter:${Xk.pulseToken}`), "burn" === Xk.pulse && (0, nT.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${Xk.pulseToken}`)]
          }), Tk && (0, nT.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${Tk.tone} SmallTextBold`,
            children: Tk.text
          })]
        })
      })
    }

    function zl(kk) {
      let {
        controller: Fk
      } = kk;
      const {
        t: Ik,
        selectedLanguage: Xk
      } = (0, ET.y)(), Tk = (0, OT.f)(cX, Fk.getSnapshot());
      return null === Tk ? null : (0, nT.jsx)(VT.f, {
        placement: "statBars",
        children: (0, nT.jsxs)("div", {
          className: QT()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: Tk.inRange
          }),
          style: {
            "--glowtide-colour": Tk.colour
          },
          "aria-label": Ik("skyblockGame:glowtideChipLabel"),
          children: [(0, nT.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), Tk.inRange ? (0, nT.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: Ik("skyblockGame:glowtideChipInRange")
          }, `call:${Tk.inRangeToken}`) : (0, nT.jsxs)(nT.Fragment, {
            children: [(0, nT.jsx)("div", {
              ref: Fk.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, nT.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: Ik("skyblockGame:waypointDistance", {
                distance: sk(Tk.distance, Xk.code)
              })
            })]
          })]
        })
      })
    }

    function Sl(kk) {
      let {
        controller: Fk
      } = kk;
      const {
        t: Ik
      } = (0, ET.y)(), Xk = (0, OT.f)(fX, Fk.getSnapshot());
      return null === Xk ? null : (0, nT.jsx)(VT.f, {
        placement: "statBars",
        children: (0, nT.jsxs)("div", {
          className: QT()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: Xk.full
          }),
          "aria-label": Ik("skyblockGame:glowMeterLabel", {
            fill: String(Xk.fill),
            St: String(Xk.St)
          }),
          children: [Xk.burst && (0, nT.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${Xk.burstToken}`), (0, nT.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, nT.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${Xk.ratio})`
              }
            }), Xk.gained && (0, nT.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${Xk.gainToken}`), Xk.full && Array.from({
              length: 5
            }, ((kk, Fk) => (0, nT.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, Fk)))]
          }), Xk.full && Xk.rares.map((kk => (0, nT.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, nT.jsx)(ST.d, {
              itemName: kk,
              amount: 0
            })
          }, kk))), Xk.ready && (0, nT.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, nT.jsx)("span", {
              children: Ik("skyblockGame:glowMeterReady")
            })
          }, `ready:${Xk.fullToken}`)]
        })
      })
    }

    function ol(kk) {
      let {
        controller: Fk
      } = kk;
      const {
        t: Ik
      } = (0, ET.y)(), Xk = (0, OT.f)(dX, Fk.getSnapshot());
      if (null === Xk) return null;
      const Tk = "waiting" === Xk.phase,
        ik = {
          animationDuration: `${Xk.waitMs}ms`,
          animationDelay: -Xk.elapsedMs + "ms"
        },
        yk = Tk ? void 0 : {
          animationDuration: `${Xk.waitMs}ms`
        };
      return (0, nT.jsxs)("div", {
        className: Tk ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [Tk && (0, nT.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((kk, Fk) => (0, nT.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, Fk))), (0, nT.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: ik
          }), (0, nT.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, nT.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, nT.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: ik
            })]
          }), (0, nT.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, nT.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: yk,
          children: Ik(Xk.line)
        }, Xk.lineIndex)]
      }, Xk.token)
    }

    function vl(kk) {
      let {
        chart: Fk,
        showHere: Ik,
        className: Xk
      } = kk;
      return (0, nT.jsx)("div", {
        className: QT()("SkyblockTideChartGrid", Xk, null !== Fk.pictureName && "Complete"),
        "aria-hidden": "true",
        children: Fk.cells.map(((kk, Xk) => {
          const Tk = 0 !== (Fk.pulseCells & 1 << Xk),
            ik = Fk.castCell === Xk;
          return (0, nT.jsx)("span", {
            className: QT()("SkyblockTideChartCell", `Cell-${kk}`, Tk && "Pulse", ik && "Cast", Ik && Fk.hereCell === Xk && "Here")
          }, `${Xk}:${Tk?`p${Fk.pulseToken}`:""}:${ik?`c${Fk.castToken}`:""}`)
        }))
      })
    }

    function El(kk) {
      let {
        controller: Fk
      } = kk;
      const Ik = (0, OT.f)(AX, Fk.getSnapshot()),
        {
          t: Xk
        } = (0, ET.y)(),
        Tk = Ik.chip;
      if (!Ik.enabled || null === Tk) return null;
      const ik = Xk("skyblockGame:tideChartsChipLabel", {
        island: Tk.islandName,
        lit: String(Tk.lit),
        ink: String(Tk.ink)
      });
      return (0, nT.jsx)(VT.f, {
        placement: "statBars",
        children: (0, nT.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: QT()("SkyblockTideChartsChip", Ik.open && "Open", null !== Tk.pictureName && "Complete"),
          "aria-label": ik,
          title: ik,
          onMouseDown: kk => {
            kk.preventDefault()
          },
          onClick: Fk.toggle,
          children: [(0, nT.jsx)(vl, {
            chart: Tk,
            showHere: !1,
            className: "Mini"
          }), (0, nT.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [Tk.lit, "/", Tk.ink]
          })]
        })
      })
    }

    function Ol(kk) {
      let {
        controller: Fk
      } = kk;
      const Ik = (0, OT.f)(AX, Fk.getSnapshot()),
        {
          t: Xk
        } = (0, ET.y)(),
        Tk = fT(),
        ik = Ik.card;
      return Ik.enabled && null !== ik ? (0, nT.jsx)(NT.c, {
        show: Ik.open,
        close: Fk.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, nT.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: Tk,
          onKeyDown: WT,
          children: [(0, nT.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, nT.jsxs)("div", {
              children: [(0, nT.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: Xk("skyblockGame:tideChartsTitle")
              }), (0, nT.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: Xk("skyblockGame:tideChartsIntro")
              })]
            }), (0, nT.jsx)(cT.k, {
              padIgnore: !0,
              ariaLabel: Xk("skyblockGame:tideChartsClose"),
              onClick: Fk.dismiss
            })]
          }), Ik.tabs.length > 1 && (0, nT.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": Xk("skyblockGame:tideChartsIslands"),
            children: Ik.tabs.map((kk => (0, nT.jsx)("button", {
              type: "button",
              className: QT()("SkyblockTideChartsTab", kk.selected && "Selected"),
              "aria-pressed": kk.selected,
              onClick: () => {
                Fk.rZ(kk.island)
              },
              children: kk.name
            }, kk.island)))
          }), (0, nT.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, nT.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": ik.gridLabel,
              children: (0, nT.jsx)(vl, {
                chart: ik,
                showHere: !0,
                className: "Large"
              })
            }), (0, nT.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, nT.jsx)("h3", {
                children: ik.islandName
              }), (0, nT.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: ik.litText
              }), null === ik.pictureName ? (0, nT.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: Xk("skyblockGame:tideChartsPictureHidden")
              }) : (0, nT.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: Xk("skyblockGame:tideChartsPictureRevealed", {
                  picture: ik.pictureName
                })
              }, ik.pictureName), (0, nT.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, nT.jsxs)("li", {
                  children: [(0, nT.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), Xk("skyblockGame:tideChartsLegendLit")]
                }), (0, nT.jsxs)("li", {
                  children: [(0, nT.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), Xk("skyblockGame:tideChartsLegendClear")]
                }), null !== ik.hereCell && (0, nT.jsxs)("li", {
                  children: [(0, nT.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), Xk("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, nT.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, nT.jsx)("span", {
                  children: Ik.turnsText
                }), (0, nT.jsx)("span", {
                  children: Ik.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function nl(kk) {
      var Fk;
      let {
        controller: Ik
      } = kk;
      const {
        selectedLanguage: Xk
      } = (0, ET.y)(), Tk = Xk.code;
      (0, Sk.useEffect)((() => {
        Ik.setTranslator(((kk, Fk) => (0, ET.w)(Tk, kk, Fk)), Tk, ((kk, Fk) => (0, ET.q)(Tk, kk, Fk)))
      }), [Ik, Tk]);
      const ik = (0, OT.f)(Zk, Ik.map.getSnapshot()),
        {
          openInGameMenuName: yk
        } = (0, sT.j)(["openInGameMenuName"]);
      return (0, nT.jsxs)(nT.Fragment, {
        children: [(0, nT.jsx)(Il, {
          controller: Ik.quests,
          display: Ik.navigation.display
        }), ik.enabled && !yk && (0, nT.jsx)(Xi, {
          controller: Ik.navigation
        }), (0, nT.jsx)(GT, {
          controller: Ik,
          minimap: ik.enabled && (null === (Fk = ik.presentation) || void 0 === Fk ? void 0 : Fk.minimap) && (0, nT.jsx)(Ii, {
            view: ik.presentation.minimap,
            navigation: Ik.navigation,
            controller: Ik.map
          }),
          children: (0, nT.jsx)(Zi, {
            controller: Ik.quests,
            surface: "hud"
          })
        }), (0, nT.jsx)(My, {
          controller: Ik.navigation
        }), (0, nT.jsx)(Tl, {
          controller: Ik.portalTransit
        }), (0, nT.jsx)(wl, {
          controller: Ik.dailyReward
        }), (0, nT.jsx)(sl, {
          controller: Ik.mailbox
        }), (0, nT.jsx)(Vl, {
          controller: Ik.magmaward
        }), (0, nT.jsx)(zl, {
          controller: Ik.glowtide
        }), (0, nT.jsx)(ey, {
          controller: Ik.passage
        }), (0, nT.jsx)(El, {
          controller: Ik.tideCharts
        }), (0, nT.jsx)(Sl, {
          controller: Ik.glowMeter
        }), (0, nT.jsx)(Sy, {
          controller: Ik.reachLog
        }), (0, nT.jsx)(ol, {
          controller: Ik.hushWait
        }), (0, nT.jsx)(Qy, {
          controller: Ik.lampLight
        }), (0, nT.jsx)(Ti, {
          controller: Ik.skills,
          surface: "hud"
        })]
      })
    }

    function Gl(kk) {
      let {
        controller: Fk
      } = kk;
      return (0, nT.jsxs)(nT.Fragment, {
        children: [(0, nT.jsx)(Fi, {
          controller: Fk.map,
          navigation: Fk.navigation
        }), (0, nT.jsx)(Ti, {
          controller: Fk.skills,
          surface: "menu"
        }), (0, nT.jsx)(Zi, {
          controller: Fk.quests,
          surface: "menu"
        }), (0, nT.jsx)(gi, {
          controller: Fk.dungeons
        }), (0, nT.jsx)(Di, {
          controller: Fk.collections
        }), (0, nT.jsx)(Fy, {
          controller: Fk.questGraph
        }), (0, nT.jsx)(yy, {
          controller: Fk.forge
        }), (0, nT.jsx)(Zy, {
          controller: Fk.smuggler
        }), (0, nT.jsx)(Vy, {
          controller: Fk.keepersChair,
          lampLight: Fk.lampLight
        }), (0, nT.jsx)(gy, {
          controller: Fk.reachLog,
          regulars: Fk.regulars,
          hiddenWaters: Fk.hiddenWaters
        }), (0, nT.jsx)(Oy, {
          controller: Fk.regulars
        }), (0, nT.jsx)(Hy, {
          controller: Fk.passage
        }), (0, nT.jsx)(Ol, {
          controller: Fk.tideCharts
        }), (0, nT.jsx)(ry, {
          controller: Fk.dialogue
        }), (0, nT.jsx)(Dy, {
          controller: Fk.autographs
        })]
      })
    }
    var pl = Ik(36772);
    const ul = FX + aX;

    function bl(kk, Fk, Ik, Xk, Tk) {
      const ik = [],
        yk = [],
        lk = Ik => {
          const Xk = kk.playSound(Fk, Ik.sound, Ik.volume, Ik.rate);
          Xk && (yk.push(Xk), void 0 !== Ik.cutAfter && ik.push(setTimeout((() => {
            Xk.fade(Xk.getVolume(), 0, 300)
          }), Ik.cutAfter)))
        };
      for (const ak of function(kk, Fk) {
          const Ik = [{
            sound: "rpgKnifeSlice1",
            beat: FX,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: FX,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: FX,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: FX,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: FX,
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
            sound: (0, pl.f)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: ul + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, pl.f)("bigDrumSwish"),
            beat: ul + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: ul + 60,
            lead: 180,
            volume: .5 + .06 * kk,
            rate: .82 + .07 * kk
          }];
          return kk >= 4 && Ik.push({
            sound: "exp_levelup",
            beat: ul + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), Fk && Ik.push({
            sound: "trumpetFlare",
            beat: ul + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), Ik.push({
            sound: "harp_pling",
            beat: IX,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), Ik
        }(Ik, Xk)) Tk ? ik.push(setTimeout((() => {
        lk(ak)
      }), Math.max(0, ak.beat - ak.lead / ak.rate))) : ak.beat !== FX && "magicAccent2" !== ak.sound && "trumpetFlare" !== ak.sound || lk(ak);
      return () => {
        for (const kk of ik) clearTimeout(kk);
        for (const kk of yk) kk.fade(kk.getVolume(), 0, 120)
      }
    }
    class Rl {
      constructor(kk) {
        this.deps = kk, this.pending = new Map, this.localHook = null
      }
      hookWaiting(kk, Fk) {
        this.pending.delete(kk);
        const Ik = this.deps.now();
        if (null === Fk) {
          var Xk;
          if ((null === (Xk = this.localHook) || void 0 === Xk ? void 0 : Xk.hookId) === kk) {
            const kk = Ik >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(kk)
          }
          return
        }
        const Tk = Ik + Fk;
        this.settle(kk, Tk) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(kk, {
          untilMs: Ik + 1e3,
          biteAtMs: Tk
        }))
      }
      getLocalHook() {
        var kk, Fk;
        return null !== (kk = null === (Fk = this.localHook) || void 0 === Fk ? void 0 : Fk.hookId) && void 0 !== kk ? kk : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const kk = this.deps.now();
        for (const [Fk, {
            untilMs: Ik,
            biteAtMs: Xk
          }] of this.pending)(this.settle(Fk, Xk) || kk > Ik) && this.pending.delete(Fk)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(kk, Fk) {
        const Ik = this.deps.getLineOwner(kk);
        if (null === Ik) return !1;
        if (!this.deps.isLocalPlayer(Ik)) return !0;
        if (this.localHook = {
            hookId: kk,
            biteAtMs: Fk
          }, !this.deps.isHushWaiting()) {
          const [Fk, Ik] = this.deps.getHookPosition(kk);
          this.deps.onCastLanded(Fk, Ik)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var Ul = Ik(4210);
    const Cl = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      Nl = {
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
    class cl {
      constructor(kk) {
        this.deps = kk, this.tell = null
      }
      receiveTell(kk) {
        let {
          biteTellTier: Fk
        } = kk;
        this.tell = {
          tier: Fk,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(kk) {
        const Fk = this.tell;
        if (this.tell = null, !kk) return;
        const Ik = null !== Fk && this.deps.now() - Fk.atMs <= 3e3 ? Fk.tier : 0;
        this.deps.vibrate(Cl[Ik])
      }
      burstAtHook() {
        const kk = this.tell,
          Fk = this.deps.getLocalHookPosition();
        null === kk || kk.burst || null === Fk || (kk.burst = !0, this.deps.playParticles(function(kk, Fk) {
          let [Ik, Xk, Tk] = Fk;
          const {
            count: ik,
            rise: yk,
            colour: lk
          } = Nl[kk], [ak, qk, Lk] = lk;
          return {
            texture: "glint",
            pos1: [Ik - .3, Xk, Tk - .3],
            pos2: [Ik + .3, Xk + .2, Tk + .3],
            dir1: [-.6, yk, -.6],
            dir2: [.6, 1.4 * yk, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: ik,
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
              minColor: [ak, qk, Lk, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [ak, qk, Lk, 0],
              maxColor: [ak, qk, Lk, 0]
            }],
            blendMode: Ul.d.Add,
            hideDist: 48
          }
        }(kk.tier, Fk)))
      }
    }
    var Wl = Ik(1241),
      fl = Ik(1881),
      Bl = Ik(41);

    function dl(kk, Fk) {
      return [{
        timeFraction: 0,
        minColor: [255 * kk[0], 255 * kk[1], 255 * kk[2], 1],
        maxColor: [255 * Fk[0], 255 * Fk[1], 255 * Fk[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const Yl = [0, 0, 0],
      Al = {
        texture: "glint",
        mipmaps: !1,
        St: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: Yl,
        dir2: Yl,
        blendMode: Ul.d.OneOne
      },
      gl = {
        ...Al,
        colorGradients: dl([1, .88, .38], [1, .65, .15])
      },
      ml = {
        ...Al,
        colorGradients: dl([.55, .95, 1], [.9, 1, 1])
      },
      hl = [.5, .5, .5],
      rl = {
        texture: "glint",
        mipmaps: !1,
        St: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: dl([1, .12, .12], [1, .35, .2]),
        blendMode: Ul.d.OneOne
      };
    class Dl {
      constructor() {
        this.drops = new Map
      }
      Pe(kk, Fk) {
        if ("overflowFlash" === Fk.kind) {
          const [Ik, Xk, Tk] = Fk.position, ik = kk.createParticles(rl, {
            pos: [Ik, Xk, Tk],
            half: hl
          });
          return ik.emit(18), void ik.stop()
        }
        this.drops.has(Fk.itemId) || this.drops.set(Fk.itemId, {
          owner: Fk.owner,
          cosmetic: Fk.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      Dt(kk) {
        if (0 === this.drops.size) return;
        const Fk = performance.now(),
          Ik = kk.getCameraPosition();
        let Xk = 0;
        for (const ik of this.drops.values()) null !== ik.particles && Xk++;
        for (const [ik, yk] of this.drops) {
          const lk = kk.getPositionView(ik);
          if (null === lk) {
            var Tk;
            if (yk.seen || Fk - yk.markedAt > 5e3) null !== yk.particles && Xk--, null === (Tk = yk.particles) || void 0 === Tk || Tk.stop(), this.drops.delete(ik);
            continue
          }
          yk.cosmetic || !kk.isLocalPlayer(yk.owner) || yk.pickupDelayCleared || (kk.clearPickupDelay(ik), yk.pickupDelayCleared = !0);
          const ak = yk.lastPosition,
            qk = yk.seen && (lk[0] - ak[0]) ** 2 + (lk[1] - ak[1]) ** 2 + (lk[2] - ak[2]) ** 2 > 4e-4,
            Lk = (lk[0] - Ik[0]) ** 2 + (lk[1] - Ik[1]) ** 2 + (lk[2] - Ik[2]) ** 2 < 2025;
          yk.seen = !0, ak[0] = lk[0], ak[1] = lk[1], ak[2] = lk[2], qk && (yk.lastMovingAt = Fk), null !== yk.particles && (!Lk || Fk - yk.lastMovingAt > 500) && (yk.particles.stop(), yk.particles = null, Xk--), qk && Lk && null === yk.particles && Xk < 32 && (yk.particles = kk.createParticles(yk.cosmetic ? ml : gl, {
            pos: lk
          }), Xk++), null !== yk.particles && (yk.particles.moveTo(lk), yk.particles.setEmitRate(qk ? 12 : 0)), !qk && null === yk.particles && Fk - Math.max(yk.lastMovingAt, yk.markedAt) > 2e3 && this.drops.delete(ik)
        }
      }
      dispose() {
        for (const Fk of this.drops.values()) {
          var kk;
          null === (kk = Fk.particles) || void 0 === kk || kk.stop()
        }
        this.drops.clear()
      }
    }
    var Ml = Ik(187);
    const ka = Ml.f.NH * Ml.f.playerEyeToHeightRatio;
    class Fa {
      constructor(kk) {
        this.host = kk, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      Pe(kk) {
        this.lava = kk, this.nextUpdateAt = 0
      }
      Dt() {
        var kk;
        const Fk = this.host.now();
        if (Fk < this.nextUpdateAt) return;
        this.nextUpdateAt = Fk + 250;
        const Ik = this.host.playerPosition(),
          Xk = Ik && this.findNearest([Ik[0], Ik[1] + ka, Ik[2]]);
        if (!Xk || Xk.distance >= 40) return void this.stop();
        const Tk = .5 * Math.min(1, (40 - Xk.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(Tk) : this.loop = this.host.play("lavaFlow", Tk, Xk.position, 40 + ka, 9, !0), null === (kk = this.loop) || void 0 === kk || kk.setPosition(Xk.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var kk;
        null === (kk = this.loop) || void 0 === kk || kk.stop(), this.loop = null
      }
      findNearest(kk) {
        let Fk = -1,
          Ik = 1 / 0;
        for (let Xk = 0; Xk < this.lava.length; Xk += 3) {
          const Tk = this.lava[Xk] - kk[0],
            ik = this.lava[Xk + 1] - kk[1],
            yk = this.lava[Xk + 2] - kk[2],
            lk = Tk * Tk + ik * ik + yk * yk;
          lk < Ik && (Ik = lk, Fk = Xk)
        }
        return Fk < 0 ? null : {
          position: [this.lava[Fk], this.lava[Fk + 1], this.lava[Fk + 2]],
          distance: Math.sqrt(Ik)
        }
      }
    }
    var Ia = Ik(1859),
      Xa = Ik(38623);
    const Ta = {
      "Grey Portal": "Gray"
    };
    for (const La of Tk.Mc) Ta[`${La} Portal`] = La;
    const ia = Object.keys(Ta),
      ya = Object.fromEntries(ia.map((kk => [kk, (0, Tk.Y)(Tk.J[`${(0,Tk.ye)(Ta[kk])}Team`])])));
    Object.fromEntries(ia.map((kk => [kk, Tk.J[`${(0,Tk.ye)(Ta[kk])}UiText`]])));
    class la {
      constructor(kk, Fk) {
        this.presentation = kk, this.portal = Fk, this.unlocked = void 0
      }
      Pe(kk) {
        const Fk = !1 === this.unlocked && kk;
        this.unlocked = kk, this.Dt();
        const {
          min: Ik,
          max: Xk,
          unlockedBlock: Tk
        } = this.portal;
        if (Fk && this.presentation.hasChunk(...Ik)) {
          const [kk, Fk, ik] = ya[Tk];
          this.presentation.playParticles({
            pos1: [...Ik],
            pos2: Xk.map((kk => kk + 1)),
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
              minColor: [kk, Fk, ik, 1],
              maxColor: [Math.min(255, kk + 55), Math.min(255, Fk + 55), Math.min(255, ik + 90), 1]
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
      Dt() {
        var kk;
        const Fk = this.unlocked ? this.portal.unlockedBlock : null !== (kk = this.portal.lockedBlock) && void 0 !== kk ? kk : "Light Gray Portal",
          {
            min: Ik,
            max: Xk
          } = this.portal;
        for (let Tk = Ik[0]; Tk <= Xk[0]; Tk++)
          for (let kk = Ik[1]; kk <= Xk[1]; kk++)
            for (let ik = Ik[2]; ik <= Xk[2]; ik++) this.presentation.hasChunk(Tk, kk, ik) && this.presentation.QJ(Tk, kk, ik) !== Fk && this.presentation.lG(Tk, kk, ik, Fk)
      }
    }
    const aa = {
        farming_1: {
          raises: kk => "NPC" === kk.type && "chef" === kk.variation,
          rise: .4
        },
        fishing_1: {
          raises: kk => "Draugr Warper" === kk.type,
          rise: .4
        }
      },
      qa = (kk, Fk, Ik, ik) => {
        let {
          localPlayerId: yk
        } = ik;
        const lk = new PT({
          translate: (kk, Fk) => (0, ET.w)(Wl.d.get().getCurrentLanguageCode(), kk, Fk),
          translateWithIcons: (kk, Fk) => (0, ET.q)(Wl.d.get().getCurrentLanguageCode(), kk, Fk),
          setMenuOpen: kk => {
            kk ? (0, gk.p)() : (0, gk.e)()
          },
          dismissMenu: gk.f,
          publishSkills: kk => {
            mk.g.GL(yI, kk, !0)
          },
          publishQuests: kk => {
            mk.g.GL(LI, kk, !0)
          },
          publishQuestNotification: kk => {
            mk.g.GL(tI, kk, !0)
          },
          publishDungeons: kk => {
            mk.g.GL(eI, kk, !0)
          },
          publishCollections: kk => {
            mk.g.GL(RI, kk, !0)
          },
          publishMap: kk => {
            mk.g.GL(Zk, kk, !0)
          },
          publishHud: kk => {
            mk.g.GL(HT, kk, !0)
          },
          publishPortalTransit: kk => {
            mk.g.GL(CI, kk, !0)
          },
          isLoadingScreenUp: () => sT.d.get("loadingOverlayVisible"),
          publishDailyReward: kk => {
            mk.g.GL(WI, kk, !0)
          },
          publishMailbox: kk => {
            mk.g.GL(AI, kk, !0)
          },
          publishQuestGraph: kk => {
            mk.g.GL(mI, kk, !0)
          },
          publishForge: kk => {
            mk.g.GL(wX, kk, !0)
          },
          publishSmuggler: kk => {
            mk.g.GL(xX, kk, !0)
          },
          publishKeepersChair: kk => {
            mk.g.GL(vX, kk, !0)
          },
          publishReachLog: kk => {
            mk.g.GL(OX, kk, !0)
          },
          publishLampLight: kk => {
            mk.g.GL(RX, kk, !0)
          },
          publishMagmaward: kk => {
            mk.g.GL(CX, kk, !0)
          },
          publishGlowtide: kk => {
            mk.g.GL(cX, kk, !0)
          },
          publishGlowMeter: kk => {
            mk.g.GL(fX, kk, !0)
          },
          publishHushWait: kk => {
            mk.g.GL(dX, kk, !0)
          },
          publishPassage: kk => {
            mk.g.GL(QX, kk, !0)
          },
          publishTideCharts: kk => {
            mk.g.GL(AX, kk, !0)
          },
          publishRegulars: kk => {
            mk.g.GL(FT, kk, !0)
          },
          publishHiddenWaters: kk => {
            mk.g.GL(yT, kk, !0)
          },
          publishDialogue: kk => {
            mk.g.GL(aT, kk, !0)
          },
          publishAutographs: kk => {
            mk.g.GL(jT, kk, !0)
          },
          onDailyRewardStarted: kk => {
            pk.playSound(yk, kk.day === Ek ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (kk, Fk) => {
            pk.playSound(yk, "exp_collect", .35, 1 + .6 * kk / (Fk - 1)), mk.g.GL(fI, kk === Fk - 1)
          },
          onDailyRewardItemLanded: kk => {
            pk.playSound(yk, "pickUp", .6, 1 + .15 * kk)
          },
          onMailboxStarted: () => {
            pk.playSound(yk, "rpgMetalClick", .6, 1), pk.playSound(yk, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            pk.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: Bl.m,
          requestTracking: kk => {
            pk.sendCommand(`quests track ${kk}`)
          },
          requestDungeonEnter: (kk, Fk) => {
            pk.sendCommand(`dungeonEnter ${kk} ${Fk}`)
          },
          requestQuestJump: kk => {
            pk.sendCommand(`${bk} jump ${kk}`)
          },
          requestQuestArrive: (kk, Fk) => {
            const Ik = `${bk} arrive ${kk}`;
            pk.sendCommand(Fk ? `${Ik} complete` : Ik)
          },
          requestForge: kk => {
            let {
              blade: Fk,
              guard: Ik,
              handle: Xk
            } = kk;
            pk.sendCommand(`forge ${Fk} ${Ik} ${Xk}`)
          },
          requestDialogue: () => {
            pk.sendCommand("quests dialogue")
          },
          requestSmuggle: (kk, Fk) => {
            pk.sendCommand(`smuggle ${kk} ${Fk}`)
          },
          requestKeepersChairAim: kk => {
            pk.sendCommand(`keeperschair-aim ${kk}`)
          },
          requestReachLogOpen: () => {
            pk.sendCommand("reachlog-open")
          },
          requestLampLight: kk => {
            pk.sendCommand(`${kk}`)
          },
          requestTravel: kk => {
            pk.sendCommand(`map travel ${kk.kind} ${kk.id} ${kk.requestId}`)
          }
        });
        let ak, qk, Lk, tk, jk, ek, wk, Kk, Qk, sk, Vk, vk, Ok;
        const Gk = new Dl;
        let pk, uk = null;
        const Rk = aa[null !== Ik && void 0 !== Ik ? Ik : ""],
          ck = (kk, Fk) => {
            null !== Rk && void 0 !== Rk && Rk.raises(Fk) && pk.setNametagOffset(kk, Rk.rise)
          },
          Bk = new cl({
            getLocalHookPosition: () => {
              const kk = dk.getLocalHook();
              return null !== kk && pk.checkValid(kk) ? pk.OJ(kk) : null
            },
            playParticles: kk => {
              pk.playParticleEffect(kk)
            },
            vibrate: kk => {
              hk.h.play("fishBite", kk)
            },
            now: () => performance.now()
          }),
          dk = new Rl({
            getLineOwner: kk => pk.checkValid(kk) ? pk.getLineOwner(kk) : null,
            isLocalPlayer: kk => pk.isLocalPlayer(kk),
            getHookPosition: kk => {
              const [Fk, , Ik] = pk.OJ(kk);
              return [Fk, Ik]
            },
            isHushWaiting: () => {
              var kk;
              return "waiting" === (null === (kk = lk.hushWait.getSnapshot()) || void 0 === kk ? void 0 : kk.phase)
            },
            onCastLanded: (kk, Fk) => {
              lk.tideCharts.castLanded(kk, Fk)
            },
            onLocalHookSettled: () => {
              Bk.onLocalHookSettled()
            },
            onLocalWaitEnded: kk => {
              Bk.onLocalWaitEnded(kk)
            },
            now: () => performance.now()
          }),
          rk = new Fa({
            now: () => performance.now(),
            playerPosition: () => pk.checkValid(yk) ? pk.OJ(yk) : null,
            play: (kk, Fk, Ik, Xk, Tk, ik) => pk.playSound(yk, kk, Fk, 1, {
              rX: Ik,
              maxHearDist: Xk,
              refDistance: Tk
            }, ik)
          }),
          Dk = new Map;
        let Mk;
        return {
          onCreate: kk => {
            if (pk = kk, uk = new Xa.SkyblockEntityFacing(kk, Rk ? ck : null), lk.portalTransit.resumeArrival(null !== Ik && void 0 !== Ik ? Ik : null), (null !== Ik && void 0 !== Ik ? Ik : Xk) === Xk) {
              let kk = -1 / 0;
              Mk = mk.g.subscribe("toggleMenu", (Fk => {
                const Ik = performance.now();
                "inventory|Workbench" !== Fk || "cross_to_hub" !== lk.quests.getTrackedQuestId() || Ik - kk < 1e4 || (kk = Ik, pk.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [Xk, Tk] of Object.entries(null !== (Fk = Uk[null !== Ik && void 0 !== Ik ? Ik : ""]) && void 0 !== Fk ? Fk : {})) {
              var Fk;
              Dk.set(Xk, new la({
                hasChunk: (Fk, Ik, Xk) => kk.isBlockInLoadedChunk(Fk, Ik, Xk),
                QJ: (Fk, Ik, Xk) => kk.blockIdToBlockName(kk.getBlockId(Fk, Ik, Xk)),
                lG: (Fk, Ik, Xk, Tk) => {
                  kk.lG(Fk, Ik, Xk, Tk)
                },
                playParticles: Fk => {
                  kk.playParticleEffect(Fk)
                }
              }, Tk))
            }
            Ok = (0, Ia.e)((kk => function(kk) {
              return Object.hasOwn(dF, kk) || kk.startsWith("npc_")
            }(kk) ? AF(kk) : null)), lk.resolveItemName = (Fk, Ik) => {
              const Xk = kk.getItemStat(yk, Fk, "displayName");
              return Xk && "object" === typeof Xk && "translationKey" in Xk ? Ik(Xk.translationKey, (0, ET.m)(Xk.params, fl.d.shown)) : "string" === typeof Xk ? Ik(Xk) : Fk
            }, lk.quests.notifications.onShown = kk => {
              "quest" === kk ? pk.playSound(yk, "magicAccent1", 1, 1) : "skillLevel" === kk ? pk.playSound(yk, "magicAccent1", 1, .6) : "landmark" === kk ? pk.playSound(yk, "trumpetFlare", 1, .6) : "npcNote" === kk ? pk.playSound(yk, "magicAccent2", .8, 1.1) : "started" === kk ? pk.playSound(yk, (0, pl.f)("bigDrumSwish"), 1, 1) : pk.playSound(yk, (0, pl.f)("rpgHandleSmallLeather"), 1, 1)
            }, lk.forge.onPartSelected = () => {
              pk.playSound(yk, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, lk.forge.onOpened = () => {
              ! function(kk) {
                kk.preloadSounds([(0, pl.f)("firecracker"), "fireBurn", "magicAccent2"])
              }(kk)
            }, lk.forge.onForgeStarted = (Fk, Ik, Xk) => bl(kk, yk, Fk, Ik, Xk), lk.smuggler.onBought = () => {
              pk.playSound(yk, (0, pl.f)("rpgHandleSmallLeather"), 1, 1), pk.playSound(yk, "chestOpen", .6, 1)
            }, lk.compass.register(new Hk(lk.map, !0)), lk.compass.register(new Hk(lk.map, !1)), lk.compass.register(new xk(lk.map)), lk.compass.register(new Pk((() => lk.quests.getSnapshot().compassTarget)));
            for (const Ik of ["enemy", "npc"]) lk.compass.register(new Jk(lk.map, Ik, (Fk => kk.checkValid(Fk) ? kk.OJ(Fk) : void 0), (Fk => kk.isAlive(Fk))))
          },
          onAfterRender: (kk, Fk) => {
            const Ik = pk.checkValid(yk) ? pk.OJ(yk) : null;
            lk.navigation.afterRender(Ik, performance.now(), Fk), lk.glowtide.afterRender(Ik, Fk.cameraHeading), lk.tideCharts.afterRender(Ik), dk.afterRender()
          },
          onClose: () => {
            var kk, Fk, Ik, Xk, Tk, ik, yk, Zk, ek, Hk, Jk, xk, Pk, zk, Sk;
            Mk && mk.g.unsubscribe(Mk), null === (kk = Ok) || void 0 === kk || kk(), Gk.dispose(), rk.dispose(), null === (Fk = uk) || void 0 === Fk || Fk.dispose(), dk.dispose(), lk.dispose(), null === (Ik = ak) || void 0 === Ik || Ik(), null === (Xk = qk) || void 0 === Xk || Xk(), null === (Tk = Lk) || void 0 === Tk || Tk(), null === (ik = tk) || void 0 === ik || ik(), null === (yk = jk) || void 0 === yk || yk(), null === (Zk = wk) || void 0 === Zk || Zk(), null === (ek = undefined) || void 0 === ek || ek(), null === (Hk = Kk) || void 0 === Hk || Hk(), null === (Jk = Qk) || void 0 === Jk || Jk(), null === (xk = sk) || void 0 === xk || xk(), null === (Pk = Vk) || void 0 === Pk || Pk(), null === (zk = undefined) || void 0 === zk || zk(), null === (Sk = vk) || void 0 === Sk || Sk()
          },
          onPlayerChangeBlock: (kk, Fk, Xk, ik, ak, qk) => {
            if (kk === yk && "Air" === qk) {
              const kk = pk.getClientOption(yk, "creative");
              lk.skills.predictBlock([Fk, Xk, ik], ak, kk);
              const qk = function(kk, Fk) {
                  if ("hub" === Fk || "farming_1" === Fk || "mining_1" === Fk) return !Wk.has(kk) || "hub" !== Fk && "mining_1" !== Fk ? Object.hasOwn(Nk, kk) ? Nk[kk] : void 0 : Ck
                }(ak, Ik),
                Lk = ("hub" === Ik || "mining_1" === Ik) && (Tk.xd.some((kk => kk === ak)) || Object.hasOwn(fk, ak) || "mining_1" === Ik && "Block of Coal" === ak);
              kk || void 0 === qk && !Lk || pk.lG(Fk, Xk, ik, null !== qk && void 0 !== qk ? qk : Ck)
            }
          },
          onPlayerAttackEntity: (kk, Fk) => {
            if (kk !== yk || "Player" !== pk.getEntityType(Fk)) return;
            const [Ik, Xk, Tk] = pk.OJ(Fk);
            pk.burstParticlePreset("critical", [Ik, Xk + 1, Tk], 10)
          },
          onChangeBlockFail: kk => {
            for (const {
                Ui: Fk
              }
              of kk) lk.skills.rejectBlock(Fk)
          },
          onReceivedMessageFromServer: (kk, Fk) => {
            if ("skyblockGatedPortal" === kk) {
              var Ik;
              const [kk, Xk] = Fk;
              return void(null === (Ik = Dk.get(kk)) || void 0 === Ik || Ik.Pe(Xk))
            }
            if ("skyblockDailyReward" === kk) return void lk.dailyReward.Pe(Fk);
            if ("skyblockMailbox" === kk) return void lk.mailbox.Pe(Fk);
            if ("skyblockPortalTransit" === kk) return void lk.portalTransit.Pe(Fk);
            if ("skyblockLoot" === kk) return void Gk.Pe(pk, Fk);
            if ("skyblockLava" === kk) return void rk.Pe(Fk);
            if ("skyblockForge" === kk) return void lk.forge.Pe(Fk);
            if ("skyblockMagmaward" === kk) return void lk.magmaward.Pe(Fk);
            if ("skyblockGlowtide" === kk) return void lk.glowtide.Pe(Fk);
            if ("skyblockGlowMeter" === kk) return void lk.glowMeter.Pe(Fk);
            if ("skyblockHushWait" === kk) return void lk.hushWait.Pe(Fk);
            if ("skyblockPassage" === kk) {
              const kk = Fk;
              return lk.passage.Pe(kk), lk.reachLog.receivePassagePhase(kk.passagePhase), sk ??= (0, zk.x)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: lk.passage.show
              }), void lk.keepersChair.receivePassage({
                keepersChairPassagePhase: kk.passagePhase,
                keepersChairPassageNextPhase: kk.passageNextPhase,
                keepersChairPassageTurnsInMs: kk.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === kk) {
              const kk = Fk;
              return lk.tideCharts.Pe(kk), void(kk.tideCharts.length > 0 && (Vk ??= (0, zk.x)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: lk.tideCharts.show
              })))
            }
            if (kk === Yk.D) {
              var Xk;
              const {
                hookId: kk,
                waiting: Ik
              } = Fk;
              return void dk.hookWaiting(kk, null !== (Xk = null === Ik || void 0 === Ik ? void 0 : Ik.remainingMs) && void 0 !== Xk ? Xk : null)
            }
            if ("skyblockBiteTell" === kk) return void Bk.receiveTell(Fk);
            if ("skyblockSmuggler" === kk) return void lk.smuggler.Pe(Fk);
            if ("skyblockKeepersChair" === kk) return lk.keepersChair.Pe(Fk), void lk.lampLight.setAtChair(lk.keepersChair.isAtChair());
            if ("skyblockLampLight" === kk) {
              const kk = Fk;
              var Tk;
              if (lk.lampLight.Pe(kk), kk.lampLightReleasing) Qk ??= (0, zk.x)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  lk.lampLight.setRelease(!1)
                }
              });
              else null === (Tk = Qk) || void 0 === Tk || Tk(), Qk = void 0;
              return
            }
            if ("skyblockRegulars" === kk) return void lk.regulars.Pe(Fk);
            if ("skyblockHiddenWaters" === kk) return void lk.hiddenWaters.Pe(Fk);
            if ("skyblockReachLog" === kk) return lk.reachLog.Pe(Fk), void(Kk ??= (0, zk.x)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: GX
              },
              onClick: lk.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === kk) {
              for (const [kk, Ik, Xk, Tk] of Fk) pk.lG(kk, Ik, Xk, Tk);
              return
            }
            if ("skyblockHud" === kk) lk.receiveHud(Fk);
            else if ("skyblockMap" === kk) lk.map.Pe(Fk);
            else if (kk === Ak.f) lk.skills.Pe(Fk);
            else if (kk === nk && "dialogue" === Fk.kind) lk.dialogue.Pe(Fk);
            else if (kk === nk) lk.quests.Pe(Fk);
            else if ("skyblockDungeons" === kk) lk.dungeons.Pe(Fk);
            else if ("sbCollections" === kk) lk.collections.Pe(Fk);
            else if ("skyblockQuestGraph" === kk) lk.questGraph.Pe(Fk);
            else {
              if ("skyblockAutographs" !== kk) return;
              lk.autographs.Pe(Fk)
            }
            if (!qk && lk.map.getSnapshot().enabled) {
              const kk = (0, zk.x)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: lk.map.show
                }),
                Fk = (0, gk.r)(lk.map.show);
              qk = () => {
                kk(), Fk()
              }
            }!Lk && lk.skills.getSnapshot().enabled && (Lk = (0, zk.x)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: lk.skills.show
            })), !wk && lk.collections.getSnapshot().enabled && (wk = (0, zk.x)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: lk.collections.show
            })), !tk && lk.quests.getSnapshot().enabled && (tk = (0, zk.x)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: lk.quests.show
            })), !vk && lk.autographs.getSnapshot().enabled && (vk = (0, zk.x)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: lk.autographs.show
            }));
            const ik = lk.dungeons.getSnapshot().enabled;
            var yk;
            (Lk || tk || ik) && ek !== ik && (ek = ik, null === (yk = jk) || void 0 === yk || yk(), jk = (0, zk.x)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: uF
              },
              disabled: !ik,
              panel: !0,
              onClick: lk.dungeons.show
            }));
            ak || (ak = (0, gk.v)((0, Sk.createElement)(nl, {
              controller: lk
            }), {
              content: (0, Sk.createElement)(Gl, {
                controller: lk
              }),
              onClose: lk.close
            }))
          },
          Dt: () => {
            var kk;
            for (const Fk of Dk.values()) Fk.Dt();
            Gk.Dt(pk), rk.Dt(), null === (kk = uk) || void 0 === kk || kk.Dt(), lk.skills.Dt(), lk.quests.Dt(), lk.dailyReward.Dt(), lk.mailbox.Dt(), lk.map.Dt()
          }
        }
      }
  },
  36363: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Tk,
      f: () => Xk
    });
    const Xk = "skyblockSkills",
      Tk = "skills_test_gym"
  },
  34202: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Tk,
      d: () => yk
    });
    const Xk = [{
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

    function Tk(kk) {
      let Fk, Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof kk) {
        if (!Number.isFinite(kk)) return "0";
        if (Math.abs(kk) < 100) {
          const Fk = kk < 0 ? "-" : "",
            Ik = Math.abs(kk);
          return Ik >= 10 ? `${Fk}${Ik.toFixed(1).replace(/\.0$/,"")}` : `${Fk}${Ik.toFixed(2).replace(/\.?0+$/,"")}`
        }
        Fk = BigInt(Math.floor(kk))
      } else Fk = kk;
      const Tk = Fk < 0n ? -Fk : Fk,
        ik = Fk < 0n ? "-" : "",
        yk = Tk.toString();
      if (yk.length <= Ik) return `${ik}${yk}`;
      const lk = 3 * Math.floor((yk.length - 1) / 3);
      if (lk < 3) return `${ik}${yk}`;
      if (lk > 3 * Xk.length) {
        const kk = yk[0],
          Fk = yk.slice(1, 3).replace(/0+$/, "");
        return `${ik}${Fk?`${kk}.${Fk}`:kk}e${yk.length-1}`
      }
      const {
        threshold: ak,
        suffix: qk
      } = Xk[Xk.length - lk / 3], Lk = Tk / ak, tk = Number(1000n * (Tk % ak) / ak), Zk = Number(Lk) + tk / 1e3;
      let jk;
      return jk = Zk >= 100 ? Math.floor(Zk).toString() : Zk >= 10 ? Zk.toFixed(1).replace(/\.0$/, "") : Zk.toFixed(2).replace(/\.?0+$/, ""), `${ik}${jk}${qk}`
    }
    const ik = Xk.map((kk => {
      let {
        threshold: Fk,
        suffix: Ik
      } = kk;
      return {
        threshold: Number(Fk),
        suffix: Ik
      }
    })).filter((kk => {
      let {
        threshold: Fk
      } = kk;
      return Number.isFinite(Fk)
    }));

    function yk(kk) {
      const Fk = Math.abs(kk),
        Ik = kk < 0 ? "-" : "";
      for (const {
          threshold: Xk,
          suffix: Tk
        }
        of ik)
        if (Fk >= Xk) {
          const kk = Fk / Xk;
          if (kk >= 1e3) return `${Ik}${Fk.toExponential(2).replace("e+","e")}`;
          let ik;
          return ik = kk >= 100 ? Math.floor(kk).toString() : kk >= 10 ? kk.toFixed(1).replace(/\.0$/, "") : kk.toFixed(2).replace(/\.?0+$/, ""), `${Ik}${ik}${Tk}`
        } return `${Ik}${Fk}`
    }
  },
  38548: (kk, Fk, Ik) => {
    var Xk = {
      "./combat_1.png": 38557,
      "./dungeon_crumbling_crypt.png": 38559,
      "./dungeon_frozen_hollow.png": 38565,
      "./dungeon_wildwood_grove.png": 38573,
      "./dungeons.png": 38576,
      "./farming_1.png": 38584,
      "./fishing_1.png": 38586,
      "./hub.png": 38589,
      "./island.png": 38593,
      "./mining_1.png": 38597,
      "./mining_1_bridge.png": 38599,
      "./mining_1_gallery.png": 38603,
      "./mining_1_hollow.png": 38605,
      "./mining_1_village.png": 38613
    };

    function Tk(kk) {
      var Fk = ik(kk);
      return Ik(Fk)
    }

    function ik(kk) {
      if (!Ik.o(Xk, kk)) {
        var Fk = new Error("Cannot find module '" + kk + "'");
        throw Fk.code = "MODULE_NOT_FOUND", Fk
      }
      return Xk[kk]
    }
    Tk.keys = function() {
      return Object.keys(Xk)
    }, Tk.resolve = ik, kk.exports = Tk, Tk.id = 38548
  },
  38557: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  38559: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  38565: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  38573: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  38576: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  38584: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/farming_1.08302e28e41bf98474fe.png"
  },
  38586: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  38589: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/hub.8b20a64678134496251d.png"
  },
  38593: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/island.113e20c7bd7db93fe1ce.png"
  },
  38597: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/mining_1.68cac4bdadc5ef809ae5.png"
  },
  38599: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/mining_1_bridge.56ff82ba845db0b52726.png"
  },
  38603: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/mining_1_gallery.4e799e6329dbc66249ce.png"
  },
  38605: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  38613: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/mining_1_village.c2a625c1c4541a1fbe65.png"
  },
  18315: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  20442: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  22854: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  24422: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  26092: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  26116: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  38537: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);