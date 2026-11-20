export const id = 190;
export const ids = [49, 190];
export const modules = {
  38277: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => tk,
      e: () => ak
    });
    const Rk = new WeakMap;

    function tk(kk, Fk) {
      return Rk.set(kk, Fk), kk
    }

    function ak(kk) {
      var Fk;
      return null !== (Fk = Rk.get(kk)) && void 0 !== Fk ? Fk : null
    }
  },
  38173: (kk, Fk, Bk) => {
    function Rk(kk, Fk, Bk) {
      var Rk;
      const {
        width: tk,
        height: ak
      } = Bk, Xk = null !== (Rk = kk.text) && void 0 !== Rk ? Rk : kk, bk = (Xk.x / 100 - .5) * tk, wk = (Xk.y / 100 - .5) * ak, dk = tk / 2 - Fk.x;
      if (null !== kk.text && Math.abs(bk) <= dk && wk >= Fk.top - ak / 2 && wk <= ak / 2 - Fk.bottom) return {
        x: Xk.x,
        y: Xk.y
      };
      const sk = Math.min(0 === bk ? 1 / 0 : dk / Math.abs(bk), wk > 0 ? (ak / 2 - Fk.bottom) / wk : wk < 0 ? (Fk.top - ak / 2) / wk : 1 / 0);
      return !Number.isFinite(sk) || sk < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + bk * sk / tk * 100,
        y: 50 + wk * sk / ak * 100
      }
    }
    Bk.d(Fk, {
      e: () => Rk
    })
  },
  38188: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk
    });
    const Rk = 4,
      tk = 12e3,
      ak = 1e3;
    class Xk {
      constructor() {
        let {
          limit: kk = Rk,
          windowMs: Fk = tk,
          spacingMs: Bk = ak,
          now: Xk = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = kk, this.windowMs = Fk, this.spacingMs = Bk, this.now = Xk
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
          Bk = Math.min(Fk > kk ? Fk : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        Bk !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, Bk - kk)))
      }
      notify() {
        for (const kk of this.listeners) kk()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38166: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk
    });
    class Rk {
      constructor(kk, Fk, Bk) {
        this.Hf = kk, this.beforeOpen = Fk, this.afterClose = Bk, this.open = !1, this.Te = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.Te && (this.open = !0, this.beforeOpen(this), this.emit())
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
        this.open = !1, this.emit(), this.Te = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.Te || (this.snapshot = this.buildSnapshot(), this.Hf(this.snapshot))
      }
    }
  },
  38286: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      SkyblockEntityFacing: () => bk,
      needsSkyblockEntityFacing: () => Xk
    });
    var Rk = Bk(597),
      tk = Bk(4002),
      ak = Bk(38290);

    function Xk(kk, Fk) {
      if (kk.metaInfo === Rk.d || "Iron Guardian" === kk.type || "Gold Guardian" === kk.type) return !0;
      if ("Pig" === kk.type) return "sitting" === kk.pose;
      if ("Person" !== kk.meshKind || void 0 === kk.meshOpts) return !1;
      let Bk = null === Fk || void 0 === Fk ? void 0 : Fk.get(kk.meshOpts);
      if (void 0 === Bk) {
        var ak, Xk;
        const Rk = (0, tk.h)(kk);
        Bk = !1, "pig_napoleon" === (null === Rk || void 0 === Rk || null === (ak = Rk.opts.textures) || void 0 === ak ? void 0 : ak.head) ? Bk = !0 : "npc_pig_head" === (null === Rk || void 0 === Rk || null === (Xk = Rk.opts.textures) || void 0 === Xk ? void 0 : Xk.head) && (Bk = "sitting" === Rk.opts.pose || "sitting"), Fk && (Fk.size >= 256 && Fk.clear(), Fk.set(kk.meshOpts, Bk))
      }
      return "sitting" === Bk ? "sitting" === kk.pose : Bk
    }(0, ak.d)("skyblock", ((kk, Fk) => {
      Fk.setFacingTolerance(Xk(kk) ? 0 : null)
    }));
    class bk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = kk, this.alsoVisit = Fk, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = kk => {
          var Fk;
          const Bk = this.api.getEntityInfo(kk);
          Bk && (Xk(Bk, this.meshFacingCache) && (this.api.setFacingTolerance(kk, 0), this.nextFacing.add(kk)), null === (Fk = this.alsoVisit) || void 0 === Fk || Fk.call(this, kk, Bk))
        }
      }
      yJ() {
        const {
          api: kk
        } = this, Fk = this.nextFacing;
        kk.forEachEntity(this.visit);
        for (const Bk of this.facing) Fk.has(Bk) || kk.setFacingTolerance(Bk, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = Fk
      }
      dispose() {
        for (const kk of this.facing) this.api.setFacingTolerance(kk, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  38163: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      default: () => ww
    });
    const Rk = "island";
    var tk = Bk(291);
    const ak = (0, tk.Hb)([0, 0, -1]),
      Xk = [{
        name: "S",
        bearing: (0, tk.Hb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, tk.Hb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: ak
      }, {
        name: "W",
        bearing: (0, tk.Hb)([1, 0, 0])
      }];

    function bk(kk, Fk, Bk) {
      return [100 * (Bk.mapMaxX - kk) / (Bk.mapMaxX - Bk.mapMinX), 100 * (Fk - Bk.mapMinZ) / (Bk.mapMaxZ - Bk.mapMinZ)]
    }

    function wk(kk, Fk, Bk) {
      const tk = "local" === Fk,
        ak = kk.background,
        Xk = Fk => ak ? bk(Fk[0] - kk.mapOrigin[0], Fk[2] - kk.mapOrigin[2], ak.bounds) : [50, 50],
        wk = (kk.insideDungeon ? [] : kk.landmarks).map((kk => {
          var Fk, Rk;
          return {
            id: kk.id,
            name: Bk(kk.visited && kk.nameKey ? null !== (Fk = kk.mapLabelKey) && void 0 !== Fk ? Fk : kk.nameKey : "skyblockGame:mapUnknown"),
            icon: kk.visited && null !== (Rk = kk.icon) && void 0 !== Rk ? Rk : "unknown",
            visited: kk.visited,
            current: !1,
            position: Xk(kk.position),
            travelKind: "landmark",
            travelId: kk.id
          }
        })),
        sk = kk.zones.map((Fk => {
          var Rk;
          return {
            id: Fk.id,
            name: Bk(Fk.visited && Fk.nameKey ? Fk.nameKey : "skyblockGame:mapUnknown"),
            icon: Fk.visited && null !== (Rk = Fk.icon) && void 0 !== Rk ? Rk : "unknown",
            visited: Fk.visited,
            current: Fk.id === kk.zoneId,
            position: Fk.position,
            thumbnail: Fk.visited ? Fk.id : void 0,
            travelKind: "zone",
            travelId: Fk.id
          }
        })),
        Vk = kk.insideDungeon || !ak ? [] : kk.portals.map((kk => {
          var Fk;
          return {
            id: kk.id,
            name: Bk(null !== (Fk = kk.nameKey) && void 0 !== Fk ? Fk : "skyblockGame:mapUnknown"),
            icon: kk.visited ? "dungeons" === kk.destination ? "portal_orange" : "portal" : "unknown",
            visited: kk.visited,
            current: !1,
            position: Xk(kk.position),
            colour: kk.colour,
            travelKind: "zone",
            travelId: kk.destination
          }
        })),
        Jk = tk ? wk : sk,
        Ak = Jk.filter((kk => kk.visited)).length,
        ek = ak ? (ak.bounds.mapMaxX - ak.bounds.mapMinX) / (ak.bounds.mapMaxZ - ak.bounds.mapMinZ) : 2,
        yk = ak ? JSON.stringify([ak.bounds, kk.mapOrigin]) : "";
      return {
        local: tk,
        points: Jk,
        portals: tk ? Vk : [],
        progress: Jk.length ? Bk("skyblockGame:mapDiscovered", {
          current: String(Ak),
          total: String(Jk.length)
        }) : null,
        percent: Jk.length ? 100 * Ak / Jk.length : 0,
        canTravel: [...Jk, ...tk ? Vk : []].some((kk => kk.visited && !kk.current)),
        noLandmarks: tk && !kk.insideDungeon && 0 === wk.length,
        background: ak ? {
          imageKey: ak.imageKey,
          fallbackImageKey: kk.zoneId,
          geometryKey: yk,
          label: Bk(ak.labelKey),
          colour: ak.backgroundColour,
          ratio: ek
        } : null,
        connections: dk(kk.zones),
        minimap: ak ? {
          imageKey: ak.imageKey,
          fallbackImageKey: kk.zoneId,
          geometryKey: yk,
          label: Bk(ak.labelKey),
          colour: ak.backgroundColour,
          caption: Bk(kk.zoneId === Rk ? "skyblockGame:zoneIsland" : ak.labelKey),
          width: (ak.bounds.mapMaxX - ak.bounds.mapMinX) / ak.minimapSpan * 100 + "%",
          height: (ak.bounds.mapMaxZ - ak.bounds.mapMinZ) / ak.minimapSpan * 100 + "%",
          markers: [...wk, ...Vk]
        } : null
      }
    }

    function dk(kk) {
      const Fk = new Set;
      return kk.flatMap((Bk => Bk.connections.flatMap((Rk => {
        const tk = kk.find((kk => kk.id === Rk)),
          ak = [Bk.id, Rk].sort().join("|");
        return !tk || Fk.has(ak) ? [] : (Fk.add(ak), [{
          id: `${Bk.id}-${Rk}`,
          start: Bk.position,
          end: tk.position,
          explored: Bk.visited && tk.visited
        }])
      }))))
    }
    var sk = Bk(38166);
    class Vk extends sk.e {}
    const Jk = "skyblockMapView";
    class Ak extends Vk {
      constructor(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(kk, Rk, tk), this.requestTravel = Fk, this.translate = Bk, this.now = ak, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
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
          if (!this.map || this.pending || this.Te) return;
          const Bk = ("zone" === kk ? this.map.zones : this.map.landmarks).find((kk => kk.id === Fk));
          if (Bk) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in Bk && !Bk.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (Bk.visited)
              if ("zone" === kk && Fk === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const Bk = ++this.nextRequestId;
                this.pending = {
                  requestId: Bk,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: kk,
                  id: Fk,
                  requestId: Bk
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
      he(kk) {
        var Fk;
        if (!this.Te)
          if ("entities" !== kk.kind)
            if ("open" !== kk.kind) {
              var Bk, Rk;
              if ("snapshot" === kk.kind)(null === (Bk = kk.snapshot) || void 0 === Bk ? void 0 : Bk.zoneId) !== (null === (Rk = this.map) || void 0 === Rk ? void 0 : Rk.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = kk.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === kk.kind) {
                var tk;
                kk.requestId === (null === (tk = this.pending) || void 0 === tk ? void 0 : tk.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (kk.requestId === (null === (Fk = this.pending) || void 0 === Fk ? void 0 : Fk.requestId)) {
                var ak;
                this.pending = null, this.feedbackKey = null !== (ak = kk.errorKey) && void 0 !== ak ? ak : "", null === kk.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = kk.entities
      }
      yJ() {
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
          presentation: this.map ? wk(this.map, this.tab, this.translate) : null,
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

    function yk(kk, Fk) {
      const Bk = Math.abs(kk);
      if (Bk > ek || Fk.trackHalfWidth <= 0) return null;
      const Rk = Fk.trackHalfWidth,
        tk = Fk.screenHalfWidth / (Fk.tanHalfFovX * Math.max(.5, Math.cos(Fk.pitch))),
        ak = Math.min(Math.atan(.6 * Rk / tk), .75 * ek),
        Xk = tk * Math.tan(ak);
      let bk;
      if (Bk <= ak) bk = tk * Math.tan(Bk);
      else {
        const kk = ek - ak,
          Fk = Math.max(0, tk * kk / (Math.cos(ak) ** 2 * (Rk - Xk)) - 1),
          wk = (Bk - ak) / kk;
        bk = Xk + (Rk - Xk) * (1 + Fk) * wk / (1 + Fk * wk)
      }
      return 50 + Math.sign(kk) * bk * 50 / Rk
    }
    class fk {
      constructor(kk, Fk) {
        this.map = kk, this.visited = Fk, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = Fk ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const kk = this.map.getSnapshot().map;
        return !kk || kk.insideDungeon ? [] : kk.landmarks.filter((kk => kk.visited === this.visited)).map((kk => {
          var Fk, Bk;
          return {
            id: `landmark:${kk.id}`,
            position: kk.position,
            icon: null !== (Fk = kk.icon) && void 0 !== Fk ? Fk : "unknown",
            nameKey: null !== (Bk = kk.nameKey) && void 0 !== Bk ? Bk : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class mk {
      constructor(kk, Fk, Bk, Rk) {
        this.map = kk, this.kind = Fk, this.position = Bk, this.alive = Rk, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = Fk, this.range = "enemy" === Fk ? 48 : 64, this.limit = 12
      }
      rW(kk) {
        if ("enemy" !== this.kind || this.alive(kk.fa)) return this.position(kk.fa)
      }
      getPoints() {
        const kk = [];
        for (const Rk of this.map.getEntities()) {
          if (Rk.kind !== this.kind || "enemy" === this.kind && !this.alive(Rk.compassEntityId)) continue;
          const tk = this.position(Rk.compassEntityId);
          var Fk, Bk;
          if (tk) kk.push({
            id: `${this.kind}:${Rk.compassEntityId}`,
            fa: Rk.compassEntityId,
            kind: this.kind,
            icon: null !== (Fk = Rk.icon) && void 0 !== Fk ? Fk : Rk.npcSkin ? `npc_${Rk.npcSkin}` : this.kind,
            displayName: Rk.displayName,
            position: tk,
            nameKey: null !== (Bk = Rk.nameKey) && void 0 !== Bk ? Bk : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return kk
      }
    }
    class Wk {
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
    class vk {
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

    function ik(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk.position;
      const ak = Rk[0] - Fk[0],
        Xk = Rk[2] - Fk[2];
      return {
        ...kk,
        position: Rk,
        offset: tk.b.computeShortestRotation(Bk, (0, tk.Hb)([ak, 0, Xk])),
        distance: Math.hypot(ak, Rk[1] - Fk[1], Xk)
      }
    }
    let Yk;

    function Lk(kk, Fk) {
      var Bk;
      return (null === (Bk = Yk) || void 0 === Bk ? void 0 : Bk.locale) !== Fk && (Yk = {
        locale: Fk,
        near: new Intl.NumberFormat(Fk, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(Fk, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (kk < 10 ? Yk.near : Yk.far).format(kk)
    }
    class Ok {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(kk) {
        return this.providers.set(kk.id, kk), this.refreshAt = 0, () => {
          this.providers.get(kk.id) === kk && (this.providers.delete(kk.id), this.refreshAt = 0)
        }
      }
      frame(kk, Fk, Bk) {
        if (Bk >= this.refreshAt) {
          this.refreshAt = Bk + 200, this.candidates = [];
          for (const Fk of this.providers.values()) {
            if (!Fk.enabled) continue;
            const Bk = Fk.getPoints().map((Fk => {
              const Bk = Fk.position;
              return {
                point: Fk,
                distance: Math.hypot(Bk[0] - kk[0], Bk[1] - kk[1], Bk[2] - kk[2])
              }
            })).filter((kk => kk.distance <= Fk.range)).sort(((kk, Fk) => kk.distance - Fk.distance)).slice(0, Fk.limit);
            for (const {
                point: kk
              }
              of Bk) this.candidates.push({
              provider: Fk,
              point: kk
            })
          }
        }
        const Rk = [];
        for (const {
            point: tk,
            provider: ak
          }
          of this.candidates) {
          if (!ak.enabled) continue;
          const Bk = ak.rW ? ak.rW(tk) : tk.position;
          if (Bk) {
            const ak = ik(tk, kk, Fk, Bk);
            Math.abs(ak.offset) <= ek && Rk.push(ak)
          }
        }
        return Rk
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var Ek = Bk(36340),
      Sk = Bk(61);
    const Nk = [{
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
      Hk = Nk.length;

    function uk(kk) {
      return kk >= Hk ? 1 : kk + 1
    }
    const Mk = "skyblockQuests",
      gk = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      Uk = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function ck(kk) {
      let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const Bk = Math.max(0, Math.floor(kk)),
        Rk = Math.floor(Bk % 1e3 / 100),
        tk = Math.floor(Bk / 1e3),
        ak = tk % 60,
        Xk = Math.floor(tk / 60),
        bk = Xk % 60,
        wk = Math.floor(Xk / 60),
        dk = kk => kk < 10 ? `0${kk}` : String(kk),
        sk = Fk ? `.${Rk}` : "";
      return wk > 0 ? `${wk}:${dk(bk)}:${dk(ak)}${sk}` : `${bk}:${dk(ak)}${sk}`
    }
    const Gk = "devquests",
      Tk = "none",
      rk = {
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
      Dk = "Compressed Messy Stone",
      zk = {
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
      Pk = ["Stone", "Diorite", "Andesite", "Granite"],
      hk = new Set(Pk),
      qk = (Object.keys(zk), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const Ck = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function Zk(kk, Fk) {
      const Bk = Math.floor(5 * kk / (2 * Fk + 1));
      return Math.min(4, Math.max(0, Bk))
    }
    var pk = Bk(1192);
    var Kk = Bk(36097);
    var xk = Bk(36332),
      jk = Bk(29),
      lk = Bk(8565);
    const nk = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      Ik = 1e3;

    function Qk(kk) {
      return Math.max(0, kk)
    }

    function kF(kk) {
      return 1 + .01 * Qk(kk)
    }

    function FF(kk) {
      return 1 + .005 * Qk(kk)
    }

    function BF(kk) {
      return 1 + .005 * Qk(kk)
    }

    function RF(kk) {
      return .01 * Qk(kk)
    }

    function tF(kk) {
      return 150 / (150 + Qk(kk))
    }

    function aF(kk) {
      return 1 + .002 * Qk(kk)
    }

    function XF(kk) {
      return Math.round(10 * kk) / 10
    }

    function bF(kk, Fk) {
      switch (kk) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: XF(100 * (FF(Fk) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: XF(100 * (kF(Fk) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: XF(100 * (BF(Fk) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: XF(100 * RF(Fk))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: XF(100 * (1 - tF(Fk)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: XF(100 * (aF(Fk) - 1))
          }
      }
    }

    function wF(kk) {
      return "farming" === kk ? 200 : 100
    }

    function dF(kk, Fk) {
      if (!Number.isSafeInteger(kk) || kk < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const Bk = wF(Fk),
        Rk = kk => function(kk, Fk) {
          return wF(kk) * Fk * (Fk + 1) / 2
        }(Fk, kk);
      let tk = Math.min(Ik, Math.floor((Math.sqrt(8 * kk / Bk + 1) - 1) / 2));
      return tk < Ik && Rk(tk + 1) <= kk ? tk++ : Rk(tk) > kk && tk--, {
        totalXp: kk,
        level: tk,
        xpIntoLevel: kk - Rk(tk),
        xpForNextLevel: tk === Ik ? null : Bk * (tk + 1)
      }
    }
    const sF = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function VF(kk) {
      return sF.has(kk)
    }
    const JF = new Set(tk.vb);

    function AF(kk) {
      return JF.has(kk)
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
      yF = {
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
      fF = {
        ...yF,
        ...Object.fromEntries(Object.entries(qk).map((kk => {
          let [Fk, Bk] = kk;
          return [Fk, 9 * yF[Bk]]
        })))
      },
      mF = {
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
      WF = {
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
    const vF = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      iF = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function YF(kk) {
      return `rgb(${iF[kk].join(", ")})`
    }

    function oF(kk, Fk, Bk) {
      if (!Bk) return kk(Fk);
      const Rk = {};
      for (const [tk, ak] of Object.entries(Bk)) Rk[tk] = "string" === typeof ak ? ak : kk(ak.translationKey);
      return kk(Fk, Rk)
    }
    class LF {
      constructor(kk, Fk) {
        this.now = kk, this.getJournal = Fk, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.Hb = !1, this.onShown = () => {}
      }
      enqueue(kk) {
        const Fk = OF(kk);
        if (Fk) this.pending.push(kk);
        else {
          const Fk = this.pending.findIndex(OF);
          this.pending.splice(-1 === Fk ? this.pending.length : Fk, 0, kk)
        }
        return (null === this.current || null !== this.followUp && !Fk) && (this.advance(), !0)
      }
      setHeld(kk) {
        return this.Hb = kk, !kk && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      yJ() {
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
      getView(kk, Fk, Bk) {
        var Rk, tk, ak, Xk;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, kk, Bk);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, kk);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, kk, Fk);
        const {
          questCompletionKind: bk,
          questCompletionNameKey: wk
        } = this.current, dk = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, sk = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, Vk = "step" === (null === (Rk = this.followUp) || void 0 === Rk ? void 0 : Rk.kind) ? this.followUp : null, Jk = "explore" === (null === (tk = this.followUp) || void 0 === tk ? void 0 : tk.kind);
        let Ak;
        return Ak = Jk ? kk("skyblockGame:questExploreTitle") : null !== Vk ? "quest" === bk ? kk("skyblockGame:questNextQuestTitle", {
          quest: kk(Vk.questNameKey)
        }) : kk("skyblockGame:questNextStepTitle") : kk("started" === bk ? "skyblockGame:questStartedTitle" : "quest" === bk ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? bk : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: Ak,
          name: Jk ? Fk("skyblockGame:questExploreName") : null !== Vk ? oF(Fk, Vk.step.nameKey, Vk.step.nameParams) : oF(Fk, wk, dk),
          description: Jk ? Fk("skyblockGame:questExploreDescription") : null === Vk ? null : oF(Fk, Vk.step.descriptionKey, Vk.step.descriptionParams),
          reward: null === this.followUp && sk > 0 ? Fk("skyblockGame:questCoinRewardSuffix", {
            amount: sk.toLocaleString(Bk)
          }) : null,
          iconItem: null !== (ak = null === Vk || void 0 === Vk ? void 0 : Vk.step.questIconItem) && void 0 !== ak ? ak : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== Vk && (null === (Xk = this.getJournal()) || void 0 === Xk ? void 0 : Xk.trackedQuestId) === Vk.questId ? Vk.step.nameKey : null
        }
      }
      getSkillLevelView(kk, Fk, Bk) {
        let {
          skill: Rk,
          beforeLevel: tk,
          level: ak
        } = kk;
        const Xk = bF(Rk, tk),
          bk = bF(Rk, ak);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: Fk(`skyblockGame:${Rk}`),
          name: Fk("skyblockGame:skillLevelUp", {
            to: ak.toLocaleString(Bk)
          }),
          description: Xk.percent === bk.percent ? null : Fk(`${bk.translationKey}Change`, {
            before: Xk.percent.toLocaleString(Bk),
            after: bk.percent.toLocaleString(Bk)
          }),
          reward: null,
          iconItem: vF[Rk],
          accent: YF(Rk),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(kk, Fk) {
        let {
          landmarkNameKey: Bk
        } = kk;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: Fk("skyblockGame:landmarkDiscovered"),
          name: Fk(Bk),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(kk, Fk, Bk) {
        let {
          titleKey: Rk,
          textKey: tk,
          params: ak = {},
          nameKeys: Xk = {},
          iconItem: bk = null
        } = kk;
        const wk = {
          ...ak
        };
        for (const [dk, sk] of Object.entries(Xk)) wk[dk] = Fk(sk);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: Fk(Rk),
          name: Bk(tk, wk),
          description: null,
          reward: null,
          iconItem: bk,
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
        null === kk || this.Hb ? this.advance() : (this.followUp = kk, this.token++, this.shownAt = this.now(), this.expiresAt = null !== Fk && void 0 !== Fk ? Fk : this.shownAt + this.durationMs())
      }
      findFollowUp(kk) {
        var Fk;
        const Bk = this.getJournal();
        if (!Bk || this.hasPendingQuestPopup() || OF(kk)) return null;
        const Rk = "started" === kk.questCompletionKind ? Bk.active.some((Fk => Fk.id === kk.questCompletionQuestId)) : "quest" === kk.questCompletionKind ? Bk.completed.some((Fk => Fk.id === kk.questCompletionQuestId)) : [...Bk.active, ...Bk.completed].some((Fk => Fk.id === kk.questCompletionQuestId && Fk.subquests.some((Fk => Fk.id === kk.questCompletionStepId && "completed" === Fk.status))));
        if (!Rk) return null;
        if ("quest" === kk.questCompletionKind && 0 === Bk.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const tk = Bk.active.find((kk => kk.id === Bk.trackedQuestId)),
          ak = null !== (Fk = null === tk || void 0 === tk ? void 0 : tk.subquests.find((kk => "ready" === kk.status))) && void 0 !== Fk ? Fk : null === tk || void 0 === tk ? void 0 : tk.subquests.find((kk => "active" === kk.status));
        return ak ? {
          kind: "step",
          questId: tk.id,
          questNameKey: tk.nameKey,
          step: ak
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((kk => !OF(kk)))
      }
      advance() {
        var kk;
        this.current = this.Hb ? null : null !== (kk = this.pending.shift()) && void 0 !== kk ? kk : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function OF(kk) {
      return EF(kk.questCompletionKind)
    }

    function EF(kk) {
      return "skillLevel" === kk || "landmark" === kk || "npcNote" === kk
    }
    var SF = Bk(38173);
    const NF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      HF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      uF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      MF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      gF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var UF = Bk(38182);
    const cF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      GF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const TF = Bk.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const rF = Bk.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      DF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var zF = Bk(18196),
      PF = Bk(20335),
      hF = Bk(22748),
      qF = Bk(24340),
      CF = Bk(26019);
    const ZF = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: zF,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: PF,
      cow: gF,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: Bk(26034),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: NF,
      fishing_1: NF,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: HF,
      guardian_iron: uF,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: hF,
      mines: qF,
      mining_1: qF,
      npc: MF,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: gF,
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
      npc_gold_guardian: HF,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: uF,
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
      npc_tentacle_guy: UF,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: cF,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: TF,
      quest_talk: rF,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: DF,
      watermelon: CF
    };

    function pF(kk, Fk) {
      const Bk = document.createElement("img");
      return Bk.className = Fk, Bk.src = kk, Bk.alt = "", Bk.draggable = !1, Bk
    }

    function KF(kk) {
      var Fk;
      const Bk = null !== (Fk = ZF[kk]) && void 0 !== Fk ? Fk : kk.startsWith("npc_") ? MF : DF;
      if ("portal" !== kk) return pF(Bk, "SkyblockMapIcon");
      const Rk = document.createElement("span");
      Rk.className = "SkyblockMapIcon Portal";
      const tk = document.createElement("span");
      return tk.className = "SkyblockMapIconTint", tk.style.maskImage = tk.style.webkitMaskImage = `url("${GF}")`, Rk.append(pF(Bk, "SkyblockMapIconLayer"), tk, pF(GF, "SkyblockMapIconLayer SkyblockMapIconShade")), Rk
    }
    var xF = Bk(38148),
      jF = Bk(4011);
    const lF = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function nF(kk) {
      const Fk = new jF.i(kk);
      return {
        radius: 45,
        squareness: 3,
        wobbles: lF.map((kk => {
          let {
            lobes: Bk,
            amount: Rk
          } = kk;
          return {
            lobes: Bk[Math.floor(Fk.next() * Bk.length)],
            amount: Rk[0] + Fk.next() * (Rk[1] - Rk[0]),
            phase: 2 * Fk.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function IF(kk) {
      let {
        radius: Fk,
        squareness: Bk,
        wobbles: Rk,
        samples: tk
      } = kk;
      const ak = [];
      for (let Xk = 0; Xk < tk; Xk++) {
        const kk = 2 * Math.PI * Xk / tk,
          bk = Math.cos(kk),
          wk = Math.sin(kk),
          dk = Fk * (Math.abs(bk) ** Bk + Math.abs(wk) ** Bk) ** (-1 / Bk) * Rk.reduce(((Fk, Bk) => {
            let {
              lobes: Rk,
              amount: tk,
              phase: ak
            } = Bk;
            return Fk + tk * Math.sin(Rk * kk + ak)
          }), 1);
        ak.push(`${(50+dk*bk).toFixed(2)} ${(50+dk*wk).toFixed(2)}`)
      }
      return `M${ak.join("L")}Z`
    }
    const QF = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class kB {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.Te = !1, this.mountCompass = kk => {
          var Fk;
          if (null === (Fk = this.stopLayout) || void 0 === Fk || Fk.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !kk || this.Te) return;
          const Bk = kk.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: kk,
            track: Bk,
            label: kk.querySelector(".SkyblockCompassLabel")
          }, Bk.replaceChildren();
          for (let tk = 0; tk < 4; tk++) {
            const kk = document.createElement("span");
            kk.className = "SkyblockCompassCardinal", Bk.appendChild(kk), this.cardinals.push(kk)
          }
          const Rk = (0, xF.d)(QF, [kk], this.layout);
          this.stopLayout = () => {
            Rk(), Bk.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = kk => {
          this.terrain = this.Te ? null : kk, this.render(this.frame)
        }, this.mountMinimapSearchArea = kk => {
          this.mountSearchArea("minimap", kk)
        }, this.mountMapSearchArea = kk => {
          this.mountSearchArea("map", kk)
        }, this.mountPlayer = kk => {
          this.player = this.Te ? null : kk, this.render(this.frame)
        }, this.mountWaypoint = kk => {
          var Fk, Bk;
          if (null === (Fk = this.stopWaypoint) || void 0 === Fk || Fk.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !kk || this.Te) return;
          const Rk = kk.querySelector(".SkyblockQuestWaypointMarker");
          Rk.replaceChildren(KF("quest")), this.markerIcon = "quest", this.waypoint = {
            root: kk,
            marker: Rk,
            clip: kk.querySelector(".SkyblockQuestWaypointTextClip"),
            text: kk.querySelector(".SkyblockQuestWaypointText"),
            label: kk.querySelector(".SkyblockQuestWaypointLabel"),
            distance: kk.querySelector(".SkyblockQuestWaypointDistance"),
            hint: kk.querySelector(".SkyblockQuestWaypointHint")
          };
          const tk = () => {
              this.waypointMarkerSize = {
                width: Rk.offsetWidth,
                height: Rk.offsetHeight
              }, this.waypointInset = {
                x: Rk.offsetWidth / 2 + 8,
                top: Rk.offsetHeight + 8,
                bottom: 8
              }
            },
            ak = new ResizeObserver((() => {
              tk(), this.render(this.frame)
            }));
          ak.observe(Rk, {
            box: "border-box"
          });
          const Xk = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", Xk), null === (Bk = window.visualViewport) || void 0 === Bk || Bk.addEventListener("resize", Xk), this.stopWaypoint = () => {
            var kk;
            ak.disconnect(), window.removeEventListener("resize", Xk), null === (kk = window.visualViewport) || void 0 === kk || kk.removeEventListener("resize", Xk)
          }, Xk(), tk(), this.render(this.frame)
        }, this.mountWaypointOrigin = kk => {
          var Fk;
          if (null === (Fk = this.stopWaypointOrigin) || void 0 === Fk || Fk.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = kk && !this.Te ? Number(kk.dataset.notificationToken) : null, kk && !this.Te && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const Fk = {
              nameKey: kk.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = Fk;
            const Bk = () => {
                const Bk = kk.getBoundingClientRect();
                Fk.x = (Bk.left + Bk.width / 2) / window.innerWidth * 100, Fk.y = (Bk.top + Bk.height / 2) / window.innerHeight * 100
              },
              Rk = new ResizeObserver(Bk);
            Rk.observe(kk.parentElement), Rk.observe(kk), window.addEventListener("resize", Bk), this.stopWaypointOrigin = () => {
              Rk.disconnect(), window.removeEventListener("resize", Bk)
            }, Bk()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const kk = this.compass.root,
            Fk = getComputedStyle(kk),
            Bk = getComputedStyle(document.documentElement),
            Rk = parseFloat(Bk.fontSize),
            tk = parseFloat(Fk.getPropertyValue("--compass-icon-size")) * Rk,
            ak = "1" === Fk.getPropertyValue("--compass-fit-top").trim(),
            Xk = ak ? 1 : 8,
            bk = Array.from(document.querySelectorAll(QF), (kk => {
              var Fk;
              return (null !== (Fk = kk.querySelector(".MiddleTextTop")) && void 0 !== Fk ? Fk : kk).getBoundingClientRect()
            })).filter((kk => kk.width > 0 && kk.height > 0));
          let wk = (parseFloat(Bk.getPropertyValue("--notchTop")) || 0) + Xk,
            dk = "";
          if (ak) {
            const Fk = window.innerWidth / 2,
              Bk = kk.getBoundingClientRect().height,
              ak = [wk, ...bk.map((kk => Math.max(wk, kk.bottom + Xk)))].sort(((kk, Fk) => kk - Fk));
            for (const kk of ak) {
              let ak = Fk - 8;
              for (const Rk of bk) Rk.bottom + Xk <= kk || Rk.top >= kk + Bk + Xk || (ak = Math.min(ak, Rk.right <= Fk ? Fk - Rk.right - 8 : Rk.left - Fk - 8));
              const sk = 2 * ak - tk;
              if (sk >= 16 * Rk) {
                dk = `${sk}px`, wk = kk;
                break
              }
            }
          }
          kk.style.maxWidth !== dk && (kk.style.maxWidth = dk);
          const sk = kk.getBoundingClientRect(),
            Vk = this.compassSize.trackHalfWidth;
          if (sk.width > 0) {
            const kk = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: kk.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * tk / kk.width
          }
          if (!dk)
            for (const Jk of bk) Jk.right > sk.left - 8 && Jk.left < sk.right + 8 && (wk = Math.max(wk, Jk.bottom + Xk));
          kk.style.top = `${wk}px`, this.compassSize.trackHalfWidth !== Vk && this.render(this.frame)
        }
      }
      mountSearchArea(kk, Fk) {
        this.searchAreas[kk] = this.Te ? null : Fk, this.render(this.frame)
      }
      render(kk) {
        if (this.Te) return;
        if (this.frame = kk, this.compass && (FB(this.compass.root, !kk), kk)) {
          const Fk = this.compassSize.trackHalfWidth / 50;
          kk.compass.cardinals.forEach(((kk, Bk) => {
            const Rk = this.cardinals[Bk];
            Rk.textContent !== kk.name && (Rk.textContent = kk.name), FB(Rk, kk.hidden), Rk.style.translate = kk.left * Fk + "px"
          }));
          const Bk = new Set;
          kk.compass.markers.forEach(((Rk, tk) => {
            var ak;
            Bk.add(Rk.id);
            let Xk = this.markers.get(Rk.id);
            Xk || (Xk = document.createElement("span"), Xk.className = "SkyblockCompassMarker", this.markers.set(Rk.id, Xk), this.compass.track.appendChild(Xk)), Xk.dataset.icon !== Rk.icon && (Xk.dataset.icon = Rk.icon, Xk.replaceChildren(KF(Rk.icon))), Xk.style.color = null !== (ak = Rk.colour) && void 0 !== ak ? ak : "", Xk.style.translate = Rk.left * Fk + "px", Xk.style.zIndex = String(kk.compass.markers.length - tk), Xk.title !== Rk.name && (Xk.title = Rk.name)
          }));
          for (const [kk, Rk] of this.markers) Bk.has(kk) || (Rk.remove(), this.markers.delete(kk));
          this.compass.label.textContent !== kk.compass.label && (this.compass.label.textContent = kk.compass.label)
        }
        this.terrain && (FB(this.terrain, !(null !== kk && void 0 !== kk && kk.minimap)), null !== kk && void 0 !== kk && kk.minimap && (this.terrain.style.transform = kk.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", kk.minimap.iconRotation)));
        const Fk = null === kk || void 0 === kk ? void 0 : kk.searchArea;
        for (const Bk of [this.searchAreas.minimap, this.searchAreas.map])
          if (Bk && (FB(Bk, !Fk), Fk)) {
            if (this.searchAreaPath.seed !== Fk.shapeSeed && (this.searchAreaPath = {
                seed: Fk.shapeSeed,
                d: IF(nF(Fk.shapeSeed))
              }), Bk.dataset.shapeSeed !== Fk.shapeSeed) {
              Bk.dataset.shapeSeed = Fk.shapeSeed;
              for (const kk of Bk.querySelectorAll("path")) kk.setAttribute("d", this.searchAreaPath.d)
            }
            Bk.style.left = `${Fk.left}%`, Bk.style.top = `${Fk.top}%`, Bk.style.width = `${Fk.width}%`, Bk.style.height = `${Fk.height}%`
          } if (this.player && (FB(this.player, !(null !== kk && void 0 !== kk && kk.player) || kk.player.hidden), null !== kk && void 0 !== kk && kk.player && (this.player.style.left = `${kk.player.left}%`, this.player.style.top = `${kk.player.top}%`, this.player.style.setProperty("--map-player-rotation", kk.player.rotation))), this.waypoint) {
          const {
            root: Fk,
            marker: Bk,
            clip: Rk,
            text: tk,
            label: ak,
            distance: Xk,
            hint: bk
          } = this.waypoint, wk = !(null !== kk && void 0 !== kk && kk.waypoint) || null !== kk.waypoint.popupToken && kk.waypoint.popupToken !== this.waypointOriginToken;
          FB(Fk, wk);
          let dk = 1;
          const sk = this.waypointLaunch;
          if (!wk && sk && kk.waypoint.nameKey === sk.nameKey) {
            const kk = performance.now();
            sk.startedAt ??= kk, dk = Math.min(1, Math.max(0, (kk - sk.startedAt - 450) / 1e3)), Bk.style.opacity = String(Math.min(1, (kk - sk.startedAt) / 150)), 1 === dk && (this.waypointLaunch = null)
          } else Bk.style.opacity = "", sk && null !== sk.startedAt && (this.waypointLaunch = null);
          if (Fk.classList.toggle("Launching", dk < 1), null !== kk && void 0 !== kk && kk.waypoint) {
            const Fk = this.waypointInset,
              wk = "quest_talk" === kk.waypoint.markerIcon ? function(kk, Fk, Bk) {
                if (!kk.text || null === kk.blockHeight || 0 === kk.nearness) return kk;
                const Rk = kk.blockHeight / 100 * Bk.height,
                  tk = -kk.nearness * (BB * Rk + Fk.width / 2),
                  ak = kk.nearness * (RB * Rk + Fk.height / 2);
                return {
                  ...kk,
                  text: {
                    x: kk.text.x + tk / Bk.width * 100,
                    y: kk.text.y + ak / Bk.height * 100
                  }
                }
              }(kk.waypoint, this.waypointMarkerSize, this.viewport) : kk.waypoint,
              Vk = (0, SF.e)(wk, Fk, this.viewport),
              Jk = dk * dk * (3 - 2 * dk),
              Ak = dk < 1 ? sk.x + (Vk.x - sk.x) * Jk : Vk.x,
              ek = dk < 1 ? sk.y + (Vk.y - sk.y) * Jk : Vk.y;
            Bk.style.translate = `${Ak}vw ${ek}vh`, Rk.style.clipPath = `inset(${Fk.top}px ${Fk.x}px ${Fk.bottom}px)`, FB(tk, dk < 1 || !kk.waypoint.text), tk.style.opacity = String(1 - kk.waypoint.nearness), kk.waypoint.text && (tk.style.translate = `${kk.waypoint.text.x}vw ${kk.waypoint.text.y}vh`), ak.textContent !== kk.waypoint.name && (ak.textContent = kk.waypoint.name), this.markerIcon !== kk.waypoint.markerIcon && (this.markerIcon = kk.waypoint.markerIcon, Bk.replaceChildren(KF(this.markerIcon))), Xk.textContent !== kk.waypoint.distance && (Xk.textContent = kk.waypoint.distance), FB(bk, null === kk.waypoint.hint), null !== kk.waypoint.hint && bk.textContent !== kk.waypoint.hint && (bk.textContent = kk.waypoint.hint)
          }
        }
      }
      dispose() {
        var kk, Fk;
        this.mountWaypointOrigin(null), this.render(null), null === (kk = this.stopLayout) || void 0 === kk || kk.call(this), this.stopLayout = null, null === (Fk = this.stopWaypoint) || void 0 === Fk || Fk.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.Te = !0
      }
    }

    function FB(kk, Fk) {
      kk.hidden !== Fk && (kk.hidden = Fk)
    }
    const BB = .55,
      RB = .6;
    const tB = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class aB {
      constructor(kk, Fk, Bk, Rk) {
        this.map = kk, this.quests = Fk, this.compass = Bk, this.display = new kB, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.Te = !1, this.snapshot = null, this.texts = new Map, this.translate = Rk
      }
      setTranslator(kk, Fk) {
        this.translate = kk, this.locale = Fk, this.metresFormat = new Intl.NumberFormat(Fk), this.texts.clear()
      }
      translateCached(kk, Fk) {
        const Bk = void 0 === Fk ? kk : `${kk} ${Fk}`;
        let Rk = this.texts.get(Bk);
        return void 0 === Rk && (this.texts.size >= 500 && this.texts.clear(), Rk = this.translate(kk, void 0 === Fk ? void 0 : {
          distance: Fk
        }), this.texts.set(Bk, Rk)), Rk
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(kk, Fk, Bk) {
        if (this.Te) return;
        if (!kk) return this.snapshot = null, void this.display.render(null);
        const Rk = this.map.getSnapshot().map,
          wk = Bk.cameraHeading,
          dk = {
            ...this.display.compassSize,
            tanHalfFovX: Bk.tanHalfFovX,
            pitch: Bk.cameraPitch
          },
          sk = [];
        if (Rk)
          for (const tk of this.compass.frame(kk, wk, Fk)) {
            const kk = yk(tk.offset, dk);
            null !== kk && sk.push({
              ...tk,
              left: kk
            })
          }
        const Vk = function(kk, Fk) {
            const Bk = [],
              Rk = kk => "quest" === kk.kind ? kk.distance - 1 : kk.distance,
              tk = [...kk].sort(((kk, Fk) => Rk(kk) - Rk(Fk) || kk.id.localeCompare(Fk.id)));
            for (const ak of tk) {
              let kk = !1;
              if ("quest" !== ak.kind)
                for (const Rk of Bk)
                  if (Math.abs(Rk.left - ak.left) < Fk) {
                    kk = !0;
                    break
                  } kk || Bk.push(ak)
            }
            return Bk
          }(sk, this.display.compassSpacing),
          Jk = function(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              Bk = null;
            for (const Rk of kk) Math.abs(Rk.offset) <= Fk && (!Bk || Rk.distance < Bk.distance || Rk.distance === Bk.distance && Math.abs(Rk.offset) < Math.abs(Bk.offset)) && (Bk = Rk);
            return Bk
          }(Vk),
          Ak = kk => {
            var Fk;
            return null !== (Fk = kk.displayName) && void 0 !== Fk ? Fk : this.translateCached(kk.nameKey)
          },
          ek = {
            compass: {
              markers: Vk.map((kk => ({
                id: kk.id,
                icon: kk.icon,
                colour: kk.colour,
                name: Ak(kk),
                left: kk.left
              }))),
              cardinals: Xk.map((kk => {
                let {
                  name: Fk,
                  bearing: Bk
                } = kk;
                const Rk = yk(tk.b.computeShortestRotation(wk, Bk), dk);
                return {
                  name: Fk,
                  left: null !== Rk && void 0 !== Rk ? Rk : 0,
                  hidden: null === Rk
                }
              })),
              label: Jk ? `${Ak(Jk)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",Lk(Jk.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== Rk && void 0 !== Rk && Rk.background) {
          const Fk = kk[0] - Rk.mapOrigin[0],
            Bk = kk[2] - Rk.mapOrigin[2],
            {
              rotation: tk,
              transform: Xk
            } = function(kk, Fk, Bk, Rk) {
              const [tk, Xk] = bk(kk, Fk, Rk), wk = ak - Bk;
              return {
                rotation: wk,
                transform: `rotate(${wk}rad) translate(-${tk}%, -${Xk}%)`
              }
            }(Fk, Bk, wk, Rk.background.bounds);
          ek.minimap = {
            transform: Xk,
            iconRotation: -tk + "rad"
          };
          const [dk, sk] = bk(Fk, Bk, Rk.background.bounds);
          ek.player = {
            left: dk,
            top: sk,
            hidden: dk < 0 || sk < 0 || dk > 100 || sk > 100,
            rotation: -tk + "rad"
          }
        }
        const {
          waypoint: fk
        } = this.quests.getSnapshot();
        if ("search" === (null === fk || void 0 === fk ? void 0 : fk.questMarkerIcon) && null !== Rk && void 0 !== Rk && Rk.background) {
          const {
            bounds: kk
          } = Rk.background, [Fk, Bk] = bk(fk.position[0] - Rk.mapOrigin[0], fk.position[2] - Rk.mapOrigin[2], kk);
          ek.searchArea = {
            left: Fk,
            top: Bk,
            width: 6400 / (kk.mapMaxX - kk.mapMinX),
            height: 6400 / (kk.mapMaxZ - kk.mapMinZ),
            shapeSeed: fk.nameKey
          }
        }
        const mk = this.quests.getNotificationSnapshot(),
          Wk = "completion" === (null === mk || void 0 === mk ? void 0 : mk.phase) && !EF(mk.kind);
        if (fk && !Wk) {
          const Fk = Math.hypot(...fk.position.map(((Fk, Bk) => Fk - kk[Bk]))),
            Rk = Math.round(Fk),
            tk = "talk" === fk.questMarkerIcon ? Math.min(1, Math.max(0, (10 - Fk) / 5)) : 0,
            ak = Bk.projectWorldPosToViewport(fk.position),
            Xk = ak && Bk.projectWorldPosToViewport([fk.position[0], fk.position[1] - 1, fk.position[2]]);
          ek.waypoint = {
            ...Bk.projectWorldPosToScreenPos(fk.position),
            text: ak,
            nearness: tk * tk * (3 - 2 * tk),
            blockHeight: ak && Xk ? Xk.y - ak.y : null,
            name: this.translateCached(fk.nameKey),
            nameKey: fk.nameKey,
            markerIcon: fk.questMarkerIcon ? tB[fk.questMarkerIcon] : "quest",
            popupToken: (null === mk || void 0 === mk ? void 0 : mk.waypointNameKey) === fk.nameKey ? mk.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(Rk)),
            hint: "search" === fk.questMarkerIcon && Math.hypot(fk.position[0] - kk[0], fk.position[2] - kk[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = ek, this.display.render(ek)
      }
      dispose() {
        this.Te = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const XB = "skyblockSkillsView";
    class bB extends Vk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          Bk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk => kk,
          Rk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          tk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : kk => kk;
        super(kk, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = Fk, this.translate = Bk, this.locale = Rk, this.itemName = tk, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
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
      setTranslator(kk, Fk, Bk) {
        this.translate = kk, this.locale = Fk, this.itemName = Bk, this.skillText.clear(), this.sourceText.clear(), this.emit()
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
          xp: this.number(mF["Wheat|FreshlyGrown"])
        }), Fk("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), Fk("skyblockGame:noYoungCropXp")] : Object.entries("mining" === kk ? fF : WF).map((kk => {
          let [Bk, Rk] = kk;
          return Fk("skyblockGame:itemXpSource", {
            item: this.itemName(Bk),
            xp: this.number(Rk)
          })
        }))
      }
      number(kk) {
        return kk.toLocaleString(this.locale)
      }
      benefit(kk, Fk) {
        const Bk = bF(kk, Fk);
        return this.translate(Bk.translationKey, {
          bonus: this.number(Bk.percent)
        })
      }
      he(kk) {
        if (!this.Te) {
          if ("snapshot" === kk.kind) this.progress = kk.progress, this.pending.clear(), this.recent = null;
          else if ("award" === kk.kind && this.progress) {
            const {
              award: Fk
            } = kk;
            this.progress = {
              ...this.progress,
              [Fk.skill]: Fk.after
            };
            for (const [kk, Rk] of this.pending) Rk.skill === Fk.skill && this.pending.delete(kk);
            const Bk = Fk.after.level > Fk.before.level;
            this.recordGain(Fk.skill, Fk.amount, Bk ? ++this.nextLevelUpToken : null), Bk && this.onLevelUp({
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
      predictBlock(kk, Fk, Bk) {
        if (!this.progress || this.Te || Bk) return;
        const Rk = function(kk, Fk) {
          const Bk = kk.split("|")[0];
          return "Air" === Fk || Fk === `Barkless ${kk}` ? Object.hasOwn(eF, Bk) ? {
            skill: "foraging",
            amount: eF[Bk]
          } : "Air" !== Fk ? null : Object.hasOwn(fF, kk) ? {
            skill: "mining",
            amount: fF[kk]
          } : VF(kk) ? {
            skill: "farming",
            amount: 10
          } : AF(kk) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(mF, kk) ? {
            skill: "farming",
            amount: mF[kk]
          } : Object.hasOwn(zk, kk) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(Fk, "Air");
        if (!Rk) return;
        const tk = kk.join(",");
        if (this.pending.has(tk)) return;
        const ak = this.predictedProgress(Rk.skill).totalXp + Rk.amount;
        Number.isSafeInteger(ak) && (this.pending.set(tk, {
          ...Rk,
          expires: this.now() + 2e3
        }), this.recordGain(Rk.skill, 0), this.emit())
      }
      rejectBlock(kk) {
        this.pending.delete(kk.join(",")) && this.emit()
      }
      yJ() {
        if (this.Te) return;
        let kk = !1;
        for (const [Fk, Bk] of this.pending) Bk.expires <= this.now() && (this.pending.delete(Fk), kk = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, kk = !0), kk && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(kk, Fk) {
        var Bk, Rk;
        let tk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const ak = (null === (Bk = this.recent) || void 0 === Bk ? void 0 : Bk.skill) === kk && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          Xk = (null === (Rk = this.recent) || void 0 === Rk ? void 0 : Rk.skill) === kk && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: kk,
          confirmed: ak + Fk,
          expires: this.now() + 3e3,
          levelUpToken: null !== tk && void 0 !== tk ? tk : Xk
        }
      }
      pendingXp(kk) {
        let Fk = 0;
        for (const Bk of this.pending.values()) Bk.skill === kk && (Fk += Bk.amount);
        return Fk
      }
      predictedProgress(kk) {
        const Fk = this.progress[kk],
          Bk = this.pendingXp(kk);
        return Bk ? dF(Fk.totalXp + Bk, kk) : Fk
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var kk, Fk, Bk;
        const Rk = this.progress ? nk.map((kk => {
            const Fk = this.predictedProgress(kk);
            return {
              ...this.text(kk),
              icon: vF[kk],
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
          tk = Rk.find((kk => {
            var Fk;
            return kk.id === (null === (Fk = this.recent) || void 0 === Fk ? void 0 : Fk.skill)
          })),
          ak = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: Rk,
          detail: null !== (kk = Rk.find((kk => kk.selected))) && void 0 !== kk ? kk : null,
          overallLevel: this.progress ? nk.reduce(((kk, Fk) => kk + this.predictedProgress(Fk).level), 0) : null,
          hud: tk && ak > 0 ? {
            skill: tk,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(ak)
            }),
            levelUpToken: null !== (Fk = null === (Bk = this.recent) || void 0 === Bk ? void 0 : Bk.levelUpToken) && void 0 !== Fk ? Fk : null,
            colour: YF(tk.id)
          } : null
        }
      }
    }
    const wB = Math.max(1600, 600, 950) + 400,
      dB = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      sB = "skyblockQuestsView",
      VB = "skyblockQuestNotificationView";
    class JB extends Vk {
      constructor(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          Xk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(kk, Rk, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = Fk, this.translate = Bk, this.now = tk, this.locale = ak, this.publishNotification = Xk, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          !this.Te && null !== kk && void 0 !== kk && kk.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(kk.id), this.emit())
        }, this.viewDialogue = () => {
          const kk = this.snapshot.detail;
          var Fk;
          kk && (null === (Fk = this.onViewDialogue) || void 0 === Fk || Fk.call(this, kk.id))
        }, this.notifications = new LF(tk, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var kk, Fk;
        return null !== (kk = null === (Fk = this.authoritative) || void 0 === Fk ? void 0 : Fk.trackedQuestId) && void 0 !== kk ? kk : null
      }
      notify(kk) {
        !this.Te && this.notifications.enqueue(kk) && this.emitNotification()
      }
      setNotificationsHeld(kk) {
        (this.notifications.setHeld(kk) || kk) && this.emitNotification()
      }
      yJ() {
        var kk, Fk;
        if (this.Te) return;
        this.notifications.yJ() && this.emitNotification();
        let Bk = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, Bk = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, Bk = !0);
        const Rk = AB(this.authoritative);
        null !== Rk && void 0 !== Rk && null !== (kk = Rk.questClock) && void 0 !== kk && kk.running && this.clockText(Rk) !== (null === (Fk = this.snapshot.tracked) || void 0 === Fk ? void 0 : Fk.clock) && (Bk = !0), Bk && this.emit()
      }
      setTranslator(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = kk, this.locale = Fk, this.emitNotification(), this.emit()
      }
      he(kk) {
        if (!this.Te)
          if ("completion" === kk.kind) this.notify(kk.questCompletion);
          else if ("landmark" === kk.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: kk.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === kk.kind) {
          var Fk, Bk, Rk;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: kk.npcNoteTitleKey,
            textKey: kk.npcNoteTextKey,
            params: null !== (Fk = kk.npcNoteParams) && void 0 !== Fk ? Fk : {},
            nameKeys: null !== (Bk = kk.npcNoteNameKeys) && void 0 !== Bk ? Bk : {},
            iconItem: null !== (Rk = kk.npcNoteIconItem) && void 0 !== Rk ? Rk : null
          })
        } else if ("open" === kk.kind) this.show();
        else if ("guidance" === kk.kind) this.waypoint = kk.waypoint, this.compassTarget = kk.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === kk.kind) {
          this.authoritative = kk.snapshot, this.notifications.yJ() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const Fk = this.trackedStepPulse;
          this.updateTrackedStepPulse(kk.snapshot), this.emit(), this.trackedStepPulse > Fk && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.Te || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var kk;
        return null !== (kk = this.translateWithIcons) && void 0 !== kk ? kk : this.translate
      }
      clockText(kk) {
        const Fk = kk.questClock;
        if (!Fk) return null;
        const Bk = Fk.elapsedMs + (Fk.running ? this.now() - this.receivedAt : 0);
        return void 0 === Fk.countdownFromMs ? ck(Bk, !1) : ck(1e3 * Math.ceil(Math.max(0, Fk.countdownFromMs - Bk) / 1e3), !1)
      }
      updateTrackedStepPulse(kk) {
        var Fk, Bk, Rk;
        const tk = AB(kk);
        if (!tk) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const ak = kk => tk.subquests.filter((Fk => kk(Fk.status))).map((kk => kk.id)),
          Xk = ak((kk => "completed" === kk || "skipped" === kk)),
          bk = ak((kk => "locked" !== kk)),
          wk = (null === (Fk = this.trackedSteps) || void 0 === Fk ? void 0 : Fk.questId) === tk.id && tk.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (wk) {
          const kk = Xk.filter((kk => !wk.finished.has(kk))),
            Fk = ak((kk => "active" === kk || "ready" === kk)).filter((kk => !wk.unlocked.has(kk)));
          kk.length > 0 && this.trackedStepPulse++, (kk.length > 0 || Fk.length > 0) && (this.trackedChange = {
            finished: new Set(kk),
            unlocked: new Set(Fk),
            expiresAt: this.now() + wB
          })
        } else {
          var dk;
          this.trackedStepPulse = (null === (dk = this.trackedSteps) || void 0 === dk ? void 0 : dk.questId) === tk.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: tk.id,
          progress: tk.progress,
          finished: new Set([...null !== (Bk = null === wk || void 0 === wk ? void 0 : wk.finished) && void 0 !== Bk ? Bk : [], ...Xk]),
          unlocked: new Set([...null !== (Rk = null === wk || void 0 === wk ? void 0 : wk.unlocked) && void 0 !== Rk ? Rk : [], ...bk])
        }
      }
      entry(kk, Fk) {
        var Bk, Rk;
        const tk = kk.id === (null === (Bk = this.authoritative) || void 0 === Bk ? void 0 : Bk.trackedQuestId),
          ak = this.now() < this.trackAvailableAt,
          Xk = this.questTextTranslator(),
          bk = kk.subquests.map((Fk => {
            var Bk, Rk, ak, bk, wk, dk;
            const sk = null !== (Bk = Fk.handInNpcName) && void 0 !== Bk ? Bk : kk.giverName,
              Vk = this.translate("skyblockGame:progress", {
                current: Fk.progress.toLocaleString(this.locale),
                target: Fk.target.toLocaleString(this.locale)
              }),
              Jk = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: sk ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [Fk.status],
              Ak = "active" === Fk.status || "ready" === Fk.status;
            return {
              id: Fk.id,
              name: oF(Xk, Fk.nameKey, Fk.nameParams),
              description: oF(Xk, Fk.descriptionKey, Fk.descriptionParams),
              progress: Vk,
              status: Fk.status,
              statusLabel: Jk ? this.translate(Jk, {
                npc: sk
              }) : Vk,
              iconItem: Ak && null !== (Rk = Fk.questIconItem) && void 0 !== Rk ? Rk : null,
              barPercent: "active" === Fk.status && Fk.showsProgressBar ? Math.min(100, 100 * Fk.progress / Fk.target) : null,
              justFinished: tk && null !== (ak = null === (bk = this.trackedChange) || void 0 === bk ? void 0 : bk.finished.has(Fk.id)) && void 0 !== ak && ak,
              justUnlocked: tk && null !== (wk = null === (dk = this.trackedChange) || void 0 === dk ? void 0 : dk.unlocked.has(Fk.id)) && void 0 !== wk && wk
            }
          }));
        return {
          id: kk.id,
          name: oF(Xk, kk.nameKey, kk.nameParams),
          description: oF(Xk, kk.descriptionKey, kk.descriptionParams),
          progress: Fk ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: kk.progress.toLocaleString(this.locale),
            target: kk.target.toLocaleString(this.locale)
          }),
          completed: Fk,
          tracked: tk,
          selected: kk.id === this.selected,
          canTrack: !Fk && !tk && !ak,
          trackLabel: this.translate(tk ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : ak ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== kk.id,
          subquests: bk,
          focusStep: null !== (Rk = bk.find((kk => null !== kk.barPercent))) && void 0 !== Rk ? Rk : null,
          clock: this.clockText(kk)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk;
        const sk = [...null !== (kk = null === (Fk = this.authoritative) || void 0 === Fk ? void 0 : Fk.active) && void 0 !== kk ? kk : [], ...null !== (Bk = null === (Rk = this.authoritative) || void 0 === Rk ? void 0 : Rk.completed) && void 0 !== Bk ? Bk : []];
        var Vk, Jk, Ak, ek;
        sk.some((kk => kk.id === this.selected)) || (this.selected = null !== (Vk = null !== (Jk = null === (Ak = this.authoritative) || void 0 === Ak ? void 0 : Ak.trackedQuestId) && void 0 !== Jk ? Jk : null === (ek = sk[0]) || void 0 === ek ? void 0 : ek.id) && void 0 !== Vk ? Vk : null);
        const yk = null !== (tk = null === (ak = this.authoritative) || void 0 === ak ? void 0 : ak.active.map((kk => this.entry(kk, !1)))) && void 0 !== tk ? tk : [];
        yk.sort(((kk, Fk) => Number(Fk.tracked) - Number(kk.tracked)));
        const fk = null !== (Xk = null === (bk = this.authoritative) || void 0 === bk ? void 0 : bk.completed.map((kk => this.entry(kk, !0)))) && void 0 !== Xk ? Xk : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: yk,
          completed: fk,
          completedExpanded: this.completedExpanded,
          detail: null !== (wk = [...yk, ...fk].find((kk => kk.selected))) && void 0 !== wk ? wk : null,
          tracked: null !== (dk = yk.find((kk => kk.tracked))) && void 0 !== dk ? dk : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function AB(kk) {
      var Fk;
      return null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.active.find((Fk => Fk.id === kk.trackedQuestId))) && void 0 !== Fk ? Fk : null
    }
    const eB = "skyblockDungeonsView";
    class yB extends Vk {
      constructor(kk, Fk) {
        let Bk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          Rk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(kk, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = Fk, this.locale = Bk, this.requestEnter = Rk, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
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
      he(kk) {
        var Fk, Bk;
        if (!this.Te) return "open" === kk.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== kk.kind ? "snapshot" === kk.kind && (this.authoritative = kk.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (Fk = null === (Bk = this.pickerEntry()) || void 0 === Bk ? void 0 : Bk.difficulties.length) && void 0 !== Fk ? Fk : 1) - 1)), null === kk.snapshot && this.open ? this.close() : this.emit()) : this.choose(kk.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(kk) {
        var Fk;
        const Bk = null === (Fk = this.authoritative) || void 0 === Fk ? void 0 : Fk.dungeons.find((Fk => Fk.id === kk));
        void 0 !== Bk ? this.open && this.pickerDungeonId === kk || (this.pickerDungeonId = kk, this.pageIndex = Math.max(0, Bk.difficulties.findLastIndex((kk => null !== kk.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${kk}`)
      }
      turnTo(kk) {
        var Fk, Bk;
        const Rk = null !== (Fk = null === (Bk = this.pickerEntry()) || void 0 === Bk ? void 0 : Bk.difficulties.length) && void 0 !== Fk ? Fk : 0;
        kk < 0 || kk >= Rk || kk === this.pageIndex || (this.pageIndex = kk, this.emit())
      }
      pickerEntry() {
        var kk, Fk;
        return null !== (kk = null === (Fk = this.authoritative) || void 0 === Fk ? void 0 : Fk.dungeons.find((kk => kk.id === this.pickerDungeonId))) && void 0 !== kk ? kk : null
      }
      difficulty(kk) {
        const Fk = kk.completions > 0,
          Bk = null === kk.bestMs ? null : ck(kk.bestMs);
        return {
          difficulty: kk.difficulty,
          label: this.translate(gk[kk.difficulty]),
          colour: Uk[kk.difficulty],
          beaten: Fk,
          bestTime: Bk,
          completions: kk.completions,
          summary: Fk ? [null === Bk ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: Bk
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: kk.completions.toLocaleString(this.locale)
          })].filter((kk => null !== kk)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(kk) {
        const Fk = kk.difficulties.map((kk => this.difficulty(kk))),
          Bk = Fk.filter((kk => kk.beaten)).length;
        return {
          id: kk.id,
          name: this.translate(kk.nameKey),
          selected: kk.id === this.selected,
          beatenSummary: `${Bk} / ${Fk.length}`,
          difficulties: Fk
        }
      }
      picker() {
        const kk = this.pickerEntry();
        if (null === kk || 0 === kk.difficulties.length) return null;
        const Fk = kk.difficulties.map(((Fk, Bk) => {
          var Rk, tk, ak, Xk;
          const bk = Fk.unlockedBoss,
            wk = null === bk ? this.lockedHint(kk, Bk) : null;
          return {
            ...this.difficulty(Fk),
            unlocked: null !== bk,
            bossName: null === bk ? null : this.translate(bk.bossNameKey),
            bossMobType: null !== (Rk = null === bk || void 0 === bk ? void 0 : bk.bossMobType) && void 0 !== Rk ? Rk : null,
            bossMobVariation: null !== (tk = null === bk || void 0 === bk ? void 0 : bk.bossMobVariation) && void 0 !== tk ? tk : null,
            lockedHint: null !== (ak = null === wk || void 0 === wk ? void 0 : wk.text) && void 0 !== ak ? ak : null,
            lockedHintHighlight: null !== (Xk = null === wk || void 0 === wk ? void 0 : wk.highlight) && void 0 !== Xk ? Xk : null,
            current: Bk === this.pageIndex
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
        var Bk, Rk, tk;
        if (0 === Fk && "number" === typeof kk.combatLevelLock) {
          const Fk = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: kk.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: Fk,
            colour: YF("combat"),
            icon: vF.combat
          })
        }
        const ak = null !== (Bk = null === (Rk = this.authoritative) || void 0 === Rk ? void 0 : Rk.dungeons) && void 0 !== Bk ? Bk : [],
          Xk = Fk > 0 ? kk : null !== (tk = ak[ak.indexOf(kk) - 1]) && void 0 !== tk ? tk : null,
          bk = Fk > 0 ? kk.difficulties[Fk - 1] : null === Xk || void 0 === Xk ? void 0 : Xk.difficulties[0];
        if (null === Xk || void 0 === bk) return null;
        const wk = this.translate(Xk.nameKey);
        if (null === bk.unlockedBoss) return Xk === kk ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, bk.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: wk
        }, bk.difficulty);
        const dk = this.translate(bk.unlockedBoss.bossNameKey);
        return Xk === kk ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: dk
        }, bk.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: dk,
            dungeon: wk
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(kk, Fk, Bk) {
        return this.hintHighlighting(kk, Fk, "difficulty", {
          name: this.translate(gk[Bk]),
          colour: Uk[Bk],
          icon: null
        })
      }
      hintHighlighting(kk, Fk, Bk, Rk) {
        let {
          name: tk,
          colour: ak,
          icon: Xk
        } = Rk;
        const bk = this.translate(kk, {
          ...Fk,
          [Bk]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(kk, {
            ...Fk,
            [Bk]: tk
          }),
          highlight: 2 === bk.length ? {
            before: bk[0],
            name: tk,
            after: bk[1],
            colour: ak,
            icon: Xk
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var kk, Fk, Bk;
        const Rk = null !== (kk = null === (Fk = this.authoritative) || void 0 === Fk ? void 0 : Fk.dungeons) && void 0 !== kk ? kk : [];
        var tk, ak;
        Rk.some((kk => kk.id === this.selected)) || (this.selected = null !== (tk = null === (ak = Rk[0]) || void 0 === ak ? void 0 : ak.id) && void 0 !== tk ? tk : null);
        const Xk = Rk.map((kk => this.entry(kk)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: Xk,
          detail: null !== (Bk = Xk.find((kk => kk.selected))) && void 0 !== Bk ? Bk : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const fB = ["mining", "farming", "foraging", "fishing", "combat"],
      mB = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      WB = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function vB() {
      for (var kk = arguments.length, Fk = new Array(kk), Bk = 0; Bk < kk; Bk++) Fk[Bk] = arguments[Bk];
      return Fk.map(((kk, Fk) => ({
        amount: kk,
        coins: mB[Fk],
        xp: WB[Fk]
      })))
    }
    const iB = vB(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      YB = vB(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      oB = vB(50, 100, 250, 500, 1e3, 2500, 5e3),
      LB = vB(25, 50, 100, 250, 500, 1e3),
      OB = vB(10, 25, 50, 100, 250, 500, 1e3),
      EB = vB(1, 5, 10, 25, 50);

    function SB(kk, Fk) {
      return {
        id: kk,
        category: "fishing",
        item: Fk,
        drops: [Fk],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : OB
      }
    }
    const NB = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: YB
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: oB
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: oB
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: LB
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: LB
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: YB
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: iB
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: iB
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: iB
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: oB
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: YB
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: YB
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: YB
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: oB
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: oB
      }, SB("wheatfish", "Wheatfish"), SB("darter", "Darter"), SB("sunset_minnow", "Sunset Minnow"), SB("root_flounder", "Root Flounder"), SB("greenfin_loach", "Greenfin Loach"), SB("red_strongfish", "Red Strongfish"), SB("green_strongfish", "Green Strongfish"), SB("boomerang_fish", "Boomerang Fish"), SB("seahorse", "Seahorse"), SB("spined_stickleback", "Spined Stickleback"), SB("moon_strongfish", "Moon Strongfish"), SB("boulder_bass", "Boulder Bass"), SB("grass_snapper", "Grass Snapper"), SB("crystal_wheatfish", "Crystalized Wheatfish", EB), SB("moonstone_pupfish", "Moonstone Pupfish", EB), SB("reedglass_minnow", "Reedglass Minnow"), SB("mangrove_herring", "Mangrove Herring"), SB("mudline_perch", "Mudline Perch"), SB("coastal_mullet", "Coastal Mullet"), SB("reef_sardine", "Reef Sardine"), SB("root_perch", "Root Perch"), SB("driftwood_catfish", "Driftwood Catfish"), SB("aether_minnow", "Aether Minnow"), SB("needlefish", "Tri-Pointed Needlefish"), SB("threadfin_bream", "Threadfin Bream"), SB("mudbelly_tilapia", "Mudbelly Tilapia"), SB("rotslab_eel", "Rotslab Eel"), SB("polarflash_electron", "Polarflash Electron"), SB("mireback_carp", "Mireback Carp"), SB("blackwater_bream", "Blackwater Bream"), SB("stone_grouper", "Stone Grouper"), SB("shadeback_ray", "Shadeback Ray"), SB("glacial_silverfish", "Glacial Silverfish"), SB("hatchetfish", "Hatchetfish"), SB("moonlit_boomerang", "Moonlit Boomerang Fish"), SB("murkborne_ray", "Murkborne Ray"), SB("bamboo_catfish", "Bamboo Catfish"), SB("mossback_arapaima", "Mossback Arapaima"), SB("murk_stingray", "Murk Stingray"), SB("channel_sawfish", "Channel Sawfish"), SB("boned_sturgeon", "Boned Sturgeon"), SB("oarfish", "Oarfish"), SB("snakehead", "Snakehead", EB), SB("eldertide_leviathan", "Eldertide Leviathan", EB), SB("pithead", "Pithead"), SB("electric_eel", "Electric Eel"), SB("shadow_darter", "Shadow Darter"), SB("abyss_carp", "Abyss Carp"), SB("nomai_moray", "Nomai Moray"), SB("silver_dragonfish", "Silver Dragonfish"), SB("giant_moray", "Giant Moray"), SB("coelacanth", "Coelacanth", EB), SB("frost_herring", "Frost Herring"), SB("permafrost_halibut", "Permafrost Halibut"), SB("glacial_lanternfish", "Glacial Lanternfish"), SB("frozen_grenadier", "Frozen Grenadier"), SB("blackfin_icefish", "Blackfin Icefish"), SB("moonfish", "Moonfish"), SB("alpha_strongfish", "Alpha Moon Strongfish"), SB("deep_lanternfish", "Deepwater Lanternfish", EB), SB("pearlescent_moonfish", "Pearlescent Moonfish", EB), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: YB
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: LB
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: LB
      }],
      HB = (new Map(NB.map((kk => [kk.id, kk]))), new Map),
      uB = new Map;
    for (const dw of NB) {
      for (const [kk, Fk] of Object.entries(null !== (MB = dw.blocks) && void 0 !== MB ? MB : {})) {
        var MB;
        HB.set(kk, {
          collection: dw,
          amount: Fk
        })
      }
      for (const kk of null !== (gB = dw.drops) && void 0 !== gB ? gB : []) {
        var gB;
        uB.set(kk, dw)
      }
    }

    function UB(kk, Fk) {
      let Bk = 0;
      for (; Bk < kk.tiers.length && Fk >= kk.tiers[Bk].amount;) Bk++;
      return Bk
    }
    const cB = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function GB(kk) {
      return cB[kk - 1]
    }
    const TB = "skyblockCollectionsView";
    class rB extends Vk {
      constructor(kk, Fk) {
        let Bk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          Rk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : kk => kk;
        super(kk, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = Fk, this.locale = Bk, this.itemName = Rk, this.counts = null, this.category = "mining", this.selected = NB[0].id, this.snapshot = {
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
      setTranslator(kk, Fk, Bk) {
        this.translate = kk, this.locale = Fk, this.itemName = Bk, this.emit()
      }
      he(kk) {
        if (!this.Te)
          if ("collOpen" !== kk.kind) {
            (kk.collFull || null === this.counts) && (this.counts = new Map);
            for (const [Fk, Bk] of kk.collCounts) this.counts.set(Fk, Bk);
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
          Bk = NB.reduce(((kk, Fk) => kk + this.tierOf(Fk)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: fB.map((kk => this.categoryView(kk))),
          collections: Fk,
          detail: null !== (kk = Fk.find((kk => kk.selected))) && void 0 !== kk ? kk : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(Bk)
          })
        }
      }
      categoryView(kk) {
        const Fk = this.inCategory(kk),
          Bk = Fk.reduce(((kk, Fk) => kk + this.tierOf(Fk)), 0),
          Rk = Fk.reduce(((kk, Fk) => kk + Fk.tiers.length), 0);
        return {
          id: kk,
          label: this.translate(`skyblockGame:${kk}`),
          icon: vF[kk],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(Bk),
            target: this.number(Rk)
          }),
          selected: kk === this.category
        }
      }
      collectionView(kk) {
        var Fk, Bk;
        const Rk = null !== (Fk = this.counts.get(kk.id)) && void 0 !== Fk ? Fk : 0,
          tk = UB(kk, Rk),
          ak = null !== (Bk = kk.tiers[tk]) && void 0 !== Bk ? Bk : null,
          Xk = 0 === tk ? 0 : kk.tiers[tk - 1].amount;
        return {
          id: kk.id,
          name: this.itemName(kk.item),
          icon: kk.item,
          selected: kk.id === this.selected,
          locked: 0 === Rk,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(Rk)
          }),
          tier: 0 === tk ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(tk),
          percent: null === ak ? 100 : Math.min(100, (Rk - Xk) / (ak.amount - Xk) * 100),
          progress: null === ak ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(Rk),
            target: this.number(ak.amount)
          }),
          nextReward: null === ak ? null : this.reward(kk, ak.coins, ak.xp)
        }
      }
      reward(kk, Fk, Bk) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(Fk),
          xp: this.number(Bk),
          skill: this.translate(`skyblockGame:${kk.category}`)
        })
      }
      tierLabel(kk) {
        return this.translate("skyblockGame:collectionTier", {
          tier: GB(kk)
        })
      }
      tierOf(kk) {
        var Fk;
        return UB(kk, null !== (Fk = this.counts.get(kk.id)) && void 0 !== Fk ? Fk : 0)
      }
      inCategory(kk) {
        return NB.filter((Fk => Fk.category === kk))
      }
      number(kk) {
        return kk.toLocaleString(this.locale)
      }
    }
    const DB = "skyblockPortalTransitView",
      zB = "skyblockPortalArrival";
    class PB {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.Hf = kk, this.storage = Fk, this.now = Bk, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      he(kk) {
        const Fk = {
          zoneNameKey: kk.transitZoneNameKey,
          variation: kk.transitZoneVariation,
          colour: kk.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(zB, Fk), this.show("departure", Fk.zoneNameKey, Fk.colour, kk.transitDurationMs, kk.transitDurationMs + 1500, (() => {
          this.storage.removeItem(zB)
        }))
      }
      resumeArrival(kk) {
        const Fk = this.storage.getItem(zB);
        this.storage.removeItem(zB), null === Fk || Fk.variation !== kk || this.now() - Fk.departedAt > 3e4 || this.show("arrival", Fk.zoneNameKey, Fk.colour, 3200, 2e4)
      }
      finishArrival(kk) {
        var Fk;
        "arrival" === (null === (Fk = this.view) || void 0 === Fk ? void 0 : Fk.phase) && this.view.token === kk && (this.clearTimer(), this.view = null, this.Hf(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(kk, Fk, Bk, Rk, tk, ak) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: kk,
          zoneNameKey: Fk,
          colour: Bk,
          durationMs: Rk
        }, this.Hf(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.Hf(null), null === ak || void 0 === ak || ak()
        }), tk)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const hB = "skyblockDailyRewardView",
      qB = "skyblockDailyRewardCoin";
    class CB {
      constructor(kk, Fk, Bk, Rk) {
        let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          Xk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          bk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          wk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.Hf = kk, this.isBusy = Fk, this.holdQuestPopups = Bk, this.onHeldCoinsChanged = Rk, this.onCoinLanded = tk, this.onStarted = ak, this.onFinished = Xk, this.onItemLanded = bk, this.now = wk, this.Hb = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var kk, Fk;
        return null !== (kk = null === (Fk = this.playing) || void 0 === Fk ? void 0 : Fk.view) && void 0 !== kk ? kk : null
      }
      getHeldCoins() {
        var kk, Fk;
        let Bk = 0;
        for (const Rk of this.Hb) Bk += Rk.coins;
        return Bk - (null !== (kk = null === (Fk = this.playing) || void 0 === Fk ? void 0 : Fk.released) && void 0 !== kk ? kk : 0)
      }
      he(kk) {
        "dailyRewardClaimed" !== kk.kind ? (this.queue.push(kk), this.yJ()) : this.Hb.push({
          coins: kk.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      yJ() {
        const kk = this.now();
        if (null === this.playing) return this.releaseUnshown(kk), void this.startNext(kk);
        const Fk = this.playing,
          Bk = kk - Fk.startedAt,
          Rk = Fk.view.flyingCoins,
          tk = function(kk, Fk) {
            let Bk = 0;
            for (; Bk < Fk && pB(Bk, Fk) <= kk;) Bk++;
            return Bk
          }(Bk, Rk);
        if (tk !== Fk.landed) {
          for (let kk = tk - Fk.landed > 2 ? tk - 1 : Fk.landed; kk < tk; kk++) this.onCoinLanded(kk, Rk);
          Fk.landed = tk, Fk.released = Math.round(Fk.view.coins * tk / Rk), this.onHeldCoinsChanged()
        }
        for (; Fk.itemsLanded < Fk.view.items.length && 2e3 + 160 * Fk.itemsLanded + 630 <= Bk;) this.onItemLanded(Fk.itemsLanded), Fk.itemsLanded++;
        Bk >= Fk.view.durationMs && (this.finish(), this.startNext(kk))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.Hb = [], this.Hf(null)
      }
      startNext(kk) {
        if (0 === this.queue.length || this.isBusy()) return;
        const Fk = this.queue.shift();
        this.token++;
        const Bk = {
          token: this.token,
          day: Fk.dailyRewardDay,
          coins: Fk.dailyRewardCoins,
          items: Fk.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: Fk.dailyRewardDay === Hk ? 24 : 14
        };
        this.playing = {
          view: Bk,
          startedAt: kk,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.Hf(Bk), this.onStarted(Bk)
      }
      finish() {
        this.Hb.shift(), this.playing = null, this.holdQuestPopups(!1), this.Hf(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(kk) {
        if (this.queue.length > 0 || 0 === this.Hb.length) return;
        const Fk = this.Hb.length;
        this.Hb = this.Hb.filter((Fk => kk - Fk.receivedAt < 6e4)), this.Hb.length !== Fk && this.onHeldCoinsChanged()
      }
    }

    function ZB(kk, Fk) {
      return 450 + 715 * kk / (Fk - 1)
    }

    function pB(kk, Fk) {
      return ZB(kk, Fk) + 650
    }
    const KB = "skyblockMailboxView";
    class xB {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.Hf = kk, this.isBusy = Fk, this.onStarted = Bk, this.now = Rk, this.waiting = [], this.playing = null, this.token = 0, this.itemName = kk => kk
      }
      getSnapshot() {
        var kk, Fk;
        return null !== (kk = null === (Fk = this.playing) || void 0 === Fk ? void 0 : Fk.view) && void 0 !== kk ? kk : null
      }
      setItemName(kk) {
        this.itemName = kk
      }
      he(kk) {
        this.waiting.push(...kk.mailLetters), this.yJ()
      }
      yJ() {
        const kk = this.now();
        null !== this.playing && kk - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.Hf(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(kk)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.Hf(null)
      }
      start(kk) {
        const Fk = this.waiting.slice(0, 3);
        this.token++;
        const Bk = {
          token: this.token,
          letters: Fk.map((kk => this.toView(kk))),
          more: this.waiting.length - Fk.length,
          durationMs: 4500 + 700 * Fk.length
        };
        this.waiting = [], this.playing = {
          view: Bk,
          startedAt: kk
        }, this.Hf(Bk), this.onStarted(Bk)
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
    const jB = "skyblockQuestGraphView",
      lB = "skyblockDevQuestJump";

    function nB(kk) {
      if (0 === kk.length) return "";
      const Fk = [`M ${kk[0].x} ${kk[0].y}`];
      for (let Rk = 1; Rk < kk.length - 1; Rk++) {
        const Bk = kk[Rk + 1];
        Fk.push(`Q ${kk[Rk].x} ${kk[Rk].y} ${(kk[Rk].x+Bk.x)/2} ${(kk[Rk].y+Bk.y)/2}`)
      }
      const Bk = kk[kk.length - 1];
      return Fk.push(`L ${Bk.x} ${Bk.y}`), Fk.join(" ")
    }

    function IB(kk, Fk) {
      return kk < Fk ? `${kk}|${Fk}` : `${Fk}|${kk}`
    }
    class QB extends Vk {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          Xk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          bk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(kk, Bk, Rk), this.translate = Fk, this.requestJump = tk, this.requestArrive = ak, this.storage = Xk, this.now = bk, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
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
      he(kk) {
        if (!this.Te)
          if ("graph" !== kk.kind) {
            if ("jumping" === kk.kind) {
              const Fk = {
                questId: kk.graphQuestId,
                variation: kk.graphVariation,
                completes: kk.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(lB, Fk)
            }
          } else {
            const Fk = ++this.graphCount;
            Bk.e(111).then((() => Bk(6129))).then((Bk => {
              let {
                default: Rk
              } = Bk;
              this.Te || Fk !== this.graphCount || (this.layout = function(kk, Fk, Bk) {
                var Rk, tk;
                const ak = new kk.graphlib.Graph;
                ak.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), ak.setDefaultEdgeLabel((() => ({})));
                const Xk = new Set;
                for (const sk of Fk) Xk.add(sk.graphQuestId), ak.setNode(sk.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const bk = Bk.filter((kk => Xk.has(kk.graphFromId) && Xk.has(kk.graphToId) && kk.graphFromId !== kk.graphToId)),
                  wk = new Map;
                for (const sk of [...bk].sort(((kk, Fk) => Number("awaits" === kk.graphEdgeKind) - Number("awaits" === Fk.graphEdgeKind)))) {
                  const kk = IB(sk.graphFromId, sk.graphToId);
                  wk.has(kk) || (wk.set(kk, sk), ak.setEdge(sk.graphFromId, sk.graphToId))
                }
                kk.layout(ak);
                const dk = ak.graph();
                return {
                  width: Math.ceil(null !== (Rk = dk.width) && void 0 !== Rk ? Rk : 0),
                  height: Math.ceil(null !== (tk = dk.height) && void 0 !== tk ? tk : 0),
                  nodes: Fk.map((kk => {
                    var Fk, Bk;
                    const Rk = ak.node(kk.graphQuestId);
                    return {
                      node: kk,
                      left: (null !== (Fk = Rk.x) && void 0 !== Fk ? Fk : 0) - 95,
                      top: (null !== (Bk = Rk.y) && void 0 !== Bk ? Bk : 0) - 26
                    }
                  })),
                  edges: bk.map((kk => {
                    var Fk;
                    const Bk = wk.get(IB(kk.graphFromId, kk.graphToId)),
                      Rk = null !== (Fk = ak.edge(Bk.graphFromId, Bk.graphToId).points) && void 0 !== Fk ? Fk : [];
                    return {
                      edge: kk,
                      key: `${kk.graphFromId}|${kk.graphToId}|${kk.graphEdgeKind}`,
                      path: nB(Bk.graphFromId === kk.graphFromId ? Rk : [...Rk].reverse())
                    }
                  })),
                  plans: new Map(Fk.map((kk => [kk.graphQuestId, new Set([kk.graphQuestId, ...kk.graphPlanIds])])))
                }
              }(Rk, kk.graphNodes, kk.graphEdges), this.show())
            })).catch((kk => {
              console.error("The quest graph could not be laid out", kk)
            }))
          }
      }
      resumeJump(kk) {
        const Fk = this.storage.getItem(lB);
        this.storage.removeItem(lB), null === Fk || Fk.variation !== kk || this.now() - Fk.departedAt > 6e4 || this.requestArrive(Fk.questId, Fk.completes)
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
              node: Bk,
              left: Rk,
              top: tk
            } = kk;
            return {
              id: Bk.graphQuestId,
              name: this.translate(Bk.graphNameKey),
              detail: null === Bk.graphGiverName ? Bk.graphZoneId : `${Bk.graphGiverName} \xb7 ${Bk.graphZoneId}`,
              state: Bk.graphState,
              left: Rk,
              top: tk,
              inPlan: Fk.has(Bk.graphQuestId),
              hovered: Bk.graphQuestId === this.hoveredId
            }
          })),
          edges: kk.edges.map((kk => {
            let {
              edge: Bk,
              key: Rk,
              path: tk
            } = kk;
            return {
              key: Rk,
              kind: Bk.graphEdgeKind,
              path: tk,
              inPlan: Fk.has(Bk.graphFromId) && Fk.has(Bk.graphToId)
            }
          })),
          planning: Fk.size > 0
        }
      }
    }
    var kR = Bk(36726);
    const FR = 250,
      BR = 2150,
      RR = -2.8,
      tR = 2.2,
      aR = -27,
      XR = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      bR = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      wR = Math.round(50 + 1e3 * (bR.delay + bR.period / 2)),
      dR = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      sR = Array.from({
        length: 26
      }, ((kk, Fk) => {
        const Bk = 2.39996 * Fk,
          Rk = .5 + .618034 * Fk % 1 * .23,
          tk = Fk % 3 !== 2;
        return {
          rune: tk ? dR[7 * Fk % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(Bk)*Rk).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(Bk)*Rk).toFixed(3)})`,
            "--spin": 40 * (Fk % 5 - 2) + "deg",
            "--size": (tk ? 1 + Fk % 4 * .2 : .3 + Fk % 2 * .15) + "rem",
            "--duration": `${(1.8+7*Fk%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*Fk%3).toFixed(2)}s`
          }
        }
      }));

    function VR(kk, Fk) {
      return Array.from({
        length: 30 + 3 * kk + (Fk ? 10 : 0)
      }, ((kk, Fk) => {
        const Bk = Fk < 4,
          Rk = Bk ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          tk = Bk ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          ak = Bk ? 2.2 : .6 + Math.random(),
          Xk = Bk ? .3 : Math.random() < .5 ? .16 : .24,
          bk = Bk ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": Rk,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${tk.toFixed(2)}rem`,
          "--length": `${ak.toFixed(2)}rem`,
          "--width": `${Xk}rem`,
          "--duration": `${Math.round(bk)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function JR(kk) {
      let {
        zeta: Fk,
        period: Bk
      } = kk;
      const Rk = 2 * Math.PI / Bk;
      return {
        w: Rk,
        decay: Fk * Rk / Math.sqrt(1 - Fk * Fk)
      }
    }
    let AR = !1;

    function eR() {
      if (AR) return;
      AR = !0;
      const kk = document.createElement("style");
      kk.textContent = function() {
        const kk = JR(XR),
          Fk = JR(bR),
          Bk = Fk => Math.exp(-kk.decay * Fk) * Math.sin(kk.w * Fk),
          Rk = Bk(Math.atan(kk.w / kk.decay) / kk.w),
          tk = .25,
          ak = 2.15,
          Xk = Math.round(215),
          bk = [];
        for (let wk = 0; wk <= Xk; wk++) {
          const kk = wk / Xk * ak;
          let dk = Math.sin(Math.min(kk, tk) / tk * Math.PI / 2) ** 2,
            sk = 0,
            Vk = 1,
            Jk = 1 - .2 * dk,
            Ak = 1;
          if (kk >= tk) {
            const Xk = kk - tk,
              bk = Math.max(0, Xk - .05);
            dk = Math.exp(-bk / .05), sk = Bk(bk + XR.lead * (1 - Math.exp(-bk / XR.rush))) / Rk;
            const wk = bk - bR.delay,
              ek = wk <= 0 ? 0 : 1 - Math.exp(-Fk.decay * wk) * (Math.cos(Fk.w * wk) + Fk.decay / Fk.w * Math.sin(Fk.w * wk)),
              yk = Math.max(0, (kk - 1.77) / (ak - 1.77));
            Vk = (1 + (bR.to - 1) * ek) * (1 + .08 * yk), Jk = 1.1 + 1.5 * Math.exp(-Xk / .07) + .3 * Math.exp(-(((1e3 * Xk - wR) / 100) ** 2)) + .8 * yk, Ak = 1 - yk ** 1.5
          }
          const ek = .15 * dk + RR * sk,
            yk = -.1 * dk + tR * sk,
            fk = 3 * dk + aR * sk;
          bk.push(`${(wk/Xk*100).toFixed(3)}% { opacity: ${Ak.toFixed(3)}; transform: translate(${ek.toFixed(3)}rem, ${yk.toFixed(3)}rem) rotate(${fk.toFixed(2)}deg) scale(${Vk.toFixed(3)}); filter: brightness(${Jk.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${bk.join(" ")} }`
      }(), document.head.append(kk)
    }
    const yR = "skyblockForgeView",
      fR = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class mR extends Vk {
      constructor(kk, Fk, Bk, Rk, tk) {
        super(kk, Bk, Rk), this.translate = Fk, this.requestForge = tk, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.select = (kk, Fk) => {
          var Bk, Rk;
          null !== this.forging || (null !== (Bk = this.owned[(0, kR.i)(Fk, kk)]) && void 0 !== Bk ? Bk : 0) <= 0 || (this.selected[kk] = this.selected[kk] === Fk ? null : Fk, this.status = null, null === (Rk = this.onPartSelected) || void 0 === Rk || Rk.call(this), this.emit())
        }, this.forge = kk => {
          var Fk, Bk;
          const Rk = this.selectedParts();
          if (null === Rk || this.isPending() || !this.open) return;
          const tk = (0, kR.h)(Rk);
          if (null === tk || tk.coalCost > this.coal) return;
          const ak = this.preview(tk),
            Xk = null !== (Fk = null === (Bk = this.onForgeStarted) || void 0 === Bk ? void 0 : Bk.call(this, ak.tier, ak.named, kk)) && void 0 !== Fk ? Fk : () => {};
          if (this.dropArrival(), kk) {
            const kk = {
              id: ++this.forgeId,
              preview: ak,
              timers: [],
              stopSounds: Xk,
              landed: !1,
              reply: null
            };
            kk.timers.push(setTimeout((() => {
              kk.landed = !0, null !== kk.reply && (this.apply(kk.reply), kk.reply = null, this.emit())
            }), FR), setTimeout((() => {
              this.finishForge(kk)
            }), BR)), this.forging = kk
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(Rk)
        }, this.snapshot = this.buildSnapshot()
      }
      he(kk) {
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === kk.forgeMessageKind) return this.dropForge(), this.apply(kk), this.status = null, void this.show();
        const Fk = this.forging;
        if (null !== Fk && null !== kk.forgeRefusalKey) this.dropForge();
        else if (null !== Fk && !Fk.landed) return void(Fk.reply = kk);
        this.apply(kk), this.emit()
      }
      apply(kk) {
        if (this.owned = kk.forgeOwnedParts, this.coal = kk.forgeCoalOwned, this.keepSelectionOwned("open" === kk.forgeMessageKind), null !== kk.forgeForgedSwordId) {
          var Fk;
          const Bk = (0, kR.h)(kk.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (Fk = null === Bk || void 0 === Bk ? void 0 : Bk.displayName) && void 0 !== Fk ? Fk : ""
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
        const Bk = this.selectedParts(),
          Rk = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: kk.id,
          sameSword: null !== Bk && (null === (Fk = (0, kR.h)(Bk)) || void 0 === Fk ? void 0 : Fk.displayName) === kk.preview.name,
          timer: Rk
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
        var kk, Fk, Bk;
        const Rk = this.selectedParts(),
          tk = null === Rk ? null : (0, kR.h)(Rk),
          ak = null !== (kk = null === (Fk = this.forging) || void 0 === Fk ? void 0 : Fk.preview) && void 0 !== kk ? kk : null === tk ? null : this.preview(tk);
        return {
          enabled: this.received,
          open: this.open,
          slots: kR.g.map((kk => ({
            kind: kk,
            label: this.translate(fR[kk]),
            parts: this.partsFor(kk)
          }))),
          coalOwned: this.coal,
          preview: ak,
          unformedSword: kR.d[null !== (Bk = this.selected.Blade) && void 0 !== Bk ? Bk : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((kk => kk > 0)),
          canForge: null !== ak && !ak.coalShort && !this.isPending(),
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
        for (const Rk of kR.c) {
          var Bk;
          const tk = (0, kR.i)(Rk, kk),
            ak = null !== (Bk = this.owned[tk]) && void 0 !== Bk ? Bk : 0;
          ak > 0 && Fk.push({
            material: Rk,
            itemName: tk,
            owned: ak,
            selected: this.selected[kk] === Rk,
            placeholder: !1
          })
        }
        if (0 === Fk.length) {
          const Bk = kR.c[0];
          Fk.push({
            material: Bk,
            itemName: (0, kR.i)(Bk, kk),
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
          Handle: Bk
        } = this.selected;
        return null === kk || null === Fk || null === Bk ? null : {
          blade: kk,
          guard: Fk,
          handle: Bk
        }
      }
      keepSelectionOwned(kk) {
        for (const Bk of kR.g) {
          var Fk;
          const Rk = this.selected[Bk];
          if (null !== Rk && (null !== (Fk = this.owned[(0, kR.i)(Rk, Bk)]) && void 0 !== Fk ? Fk : 0) > 0) continue;
          if (!kk) {
            this.selected[Bk] = null;
            continue
          }
          const tk = [...kR.c].reverse().find((kk => {
            var Fk;
            return (null !== (Fk = this.owned[(0, kR.i)(kk, Bk)]) && void 0 !== Fk ? Fk : 0) > 0
          }));
          this.selected[Bk] = null !== tk && void 0 !== tk ? tk : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const WR = "skyblockSmugglerView",
      vR = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class iR extends Vk {
      constructor(kk, Fk, Bk, Rk, tk) {
        let ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(kk, Bk, Rk), this.translate = Fk, this.requestBuy = tk, this.now = ak, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = kk => kk, this.onBought = null, this.buy = kk => {
          const Fk = this.deals[kk];
          void 0 !== Fk && !this.isPending() && this.open && !this.soldOut.has(kk) && this.canAfford(Fk) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, kk))
        }, this.snapshot = this.buildSnapshot()
      }
      he(kk) {
        if (this.received = !0, this.day = kk.smugglerDay, this.deals = kk.smugglerDeals, this.rivets = kk.smugglerRivetsOwned, this.crests = kk.smugglerCrestsOwned, this.soldOut = new Set(kk.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + kk.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === kk.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = kk.smugglerBoughtSlot, null !== kk.smugglerBoughtSlot) {
          var Fk, Bk;
          const Rk = this.deals[kk.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === Rk ? "" : this.dealName(Rk),
              amount: String(null !== (Fk = null === Rk || void 0 === Rk ? void 0 : Rk.smugglerDealAmount) && void 0 !== Fk ? Fk : 0)
            }
          }, this.boughtCount++, null === (Bk = this.onBought) || void 0 === Bk || Bk.call(this)
        } else null !== kk.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: kk.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(kk, Fk, Bk) {
        this.translate = kk, void 0 !== Bk && (this.itemName = Bk), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(kk) {
        if (null !== kk.smugglerDealUniqueName) return kk.smugglerDealUniqueName;
        const Fk = vR[kk.smugglerDealItem];
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
    const YR = "skyblockPassageView",
      oR = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function LR(kk, Fk) {
      return kk(oR[Fk])
    }

    function OR(kk, Fk, Bk, Rk) {
      const tk = Math.ceil((Bk - Rk) / 864e5),
        ak = LR(kk, Fk);
      return tk > 1 ? kk("skyblockGame:passageNextDays", {
        phase: ak,
        days: String(tk)
      }) : kk("skyblockGame:passageNextSoon", {
        phase: ak
      })
    }
    class ER extends Vk {
      constructor(kk, Fk, Bk, Rk) {
        let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(kk, Bk, Rk), this.translate = Fk, this.now = tk, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = kk => kk, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      he(kk) {
        this.message = kk, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(kk, Fk, Bk) {
        this.translate = kk, void 0 !== Bk && (this.itemName = Bk), this.emit()
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
          phaseName: LR(this.translate, kk.passagePhase),
          visitors: kk.passageVisitors.map((kk => this.describe(kk))),
          resting: this.describe(kk.passageResting),
          nextPhase: kk.passageNextPhase,
          next: OR(this.translate, kk.passageNextPhase, kk.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var SR = Bk(38188);
    const NR = "skyblockKeepersChairView";
    class HR extends Vk {
      constructor(kk, Fk, Bk, Rk, tk) {
        let ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          Xk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new SR.b;
        super(kk, Bk, Rk), this.translate = Fk, this.requestAim = tk, this.now = ak, this.pacer = Xk, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = kk => kk, this.aim = kk => {
          !this.awaitingReply && this.open && this.atChair && kk !== this.favoured && (null === kk || this.islands.some((Fk => Fk.keepersChairIslandId === kk && Fk.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== kk && void 0 !== kk ? kk : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Xk.subscribe((() => {
          this.emit()
        }))
      }
      he(kk) {
        var Fk, Bk;
        this.received = !0;
        const Rk = this.favoured,
          tk = this.atChair;
        var ak;
        return this.islands = kk.keepersChairIslands, this.favoured = kk.keepersChairFavoured, this.passage = null !== (Fk = kk.keepersChairPassage) && void 0 !== Fk ? Fk : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (Bk = kk.keepersChairAtChair) || void 0 === Bk || Bk, "place" === kk.keepersChairMessageKind ? (!tk && this.atChair && "refused" === (null === (ak = this.status) || void 0 === ak ? void 0 : ak.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === kk.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== kk.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: kk.keepersChairRefusalKey,
          island: null
        } : this.favoured !== Rk && (this.status = null === this.favoured ? {
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
      setTranslator(kk, Fk, Bk) {
        this.translate = kk, void 0 !== Bk && (this.itemName = Bk), this.emit()
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
            phaseName: LR(this.translate, Fk.keepersChairPassagePhase),
            nextPhase: Fk.keepersChairPassageNextPhase,
            next: OR(this.translate, Fk.keepersChairPassageNextPhase, Fk.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const uR = "skyblockReachLogView",
      MR = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      gR = "Caught Fish",
      UR = [1, 2, 4];

    function cR(kk, Fk) {
      return kk.map((kk => ({
        ...kk,
        reachLogPageFish: kk.reachLogPageFish.map((kk => ({
          ...kk,
          reachLogFishFresh: Fk(kk)
        })))
      })))
    }
    class GR extends Vk {
      constructor(kk, Fk, Bk, Rk, tk) {
        let ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new SR.b;
        super(kk, Bk, Rk), this.translate = Fk, this.requestOpen = tk, this.pacer = ak, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = kk => kk, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = kk => {
          this.pages.some((Fk => Fk.reachLogIslandId === kk)) && (this.selected = kk, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = ak.subscribe((() => {
          this.emit()
        }))
      }
      he(kk) {
        if (this.received = !0, "status" === kk.reachLogMessageKind) return !0 === kk.reachLogNews && this.markNews(), this.serverFresh = kk.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const Fk = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== kk.reachLogMessageKind)
          if (this.pageViews = null, this.pages = cR(kk.reachLogPages, (kk => kk.reachLogFishFresh || this.heldFresh.has(kk.reachLogFishItem))), this.letGoShown = kk.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, Fk) this.showPages();
          else {
            for (const kk of this.pages)
              for (const Fk of kk.reachLogPageFish) Fk.reachLogFishFresh && this.heldFresh.add(Fk.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(kk, Fk, Bk) {
        this.translate = kk, this.pageViews = null, void 0 !== Bk && (this.itemName = Bk), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = cR(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var kk, Fk, Bk, Rk;
        const tk = this.pages.find((kk => kk.reachLogPageFish.some((kk => kk.reachLogFishFresh))));
        if (void 0 !== tk) return tk.reachLogIslandId;
        if (null !== this.selected && this.pages.some((kk => kk.reachLogIslandId === this.selected))) return this.selected;
        return null !== (kk = null !== (Fk = null === (Bk = this.pages.filter((kk => kk.reachLogIslandAwake)).at(-1)) || void 0 === Bk ? void 0 : Bk.reachLogIslandId) && void 0 !== Fk ? Fk : null === (Rk = this.pages[0]) || void 0 === Rk ? void 0 : Rk.reachLogIslandId) && void 0 !== kk ? kk : null
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
                ribbons: UR.map((Fk => 0 !== (kk.reachLogFishRibbons & Fk))),
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
    const TR = "skyblockLampLightView";
    class rR {
      constructor(kk, Fk, Bk, Rk) {
        this.Hf = kk, this.translate = Fk, this.requestCommand = Bk, this.pacer = Rk, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.Te = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = kk => {
          kk ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = kk => {
          this.send(`buy ${kk}`)
        }, this.socket = kk => {
          this.send(`socket ${null!==kk&&void 0!==kk?kk:Tk}`)
        }, this.wearTint = kk => {
          this.send(`tint ${null!==kk&&void 0!==kk?kk:Tk}`)
        }, this.setSituation = kk => {
          this.situation = kk, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Rk.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = Rk.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      he(kk) {
        if (this.message = kk, null !== kk.lampLightShop && (this.shop = kk.lampLightShop), "open" === kk.lampLightKind && (this.refusalKey = null), "reply" === kk.lampLightKind) {
          var Fk;
          const tk = null !== (Fk = kk.lampLightReplyTag) && void 0 !== Fk ? Fk : null,
            ak = null !== tk && tk === this.offTag;
          var Bk, Rk;
          if (ak ? this.settleOff() : null !== tk && tk !== this.awaitingTag || this.settleReply(), this.refusalKey = kk.lampLightRefusalKey, null !== kk.lampLightBought && !ak) this.sparkle = {
            id: kk.lampLightBought,
            count: (null !== (Bk = null === (Rk = this.sparkle) || void 0 === Rk ? void 0 : Rk.count) && void 0 !== Bk ? Bk : 0) + 1
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
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.Te = !0
      }
      send(kk) {
        var Fk;
        if (null !== this.awaitingTag || "ready" !== (null === (Fk = this.message) || void 0 === Fk ? void 0 : Fk.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const Bk = this.nextTag();
        this.awaitingTag = Bk, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${kk} ${Bk}`), this.emit()
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
        this.Te || (this.snapshot = this.buildSnapshot(), this.Hf(this.snapshot))
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
        const Bk = "meter" === kk ? Fk.lampLightMeterCatches : Fk.lampLightBloomCatches;
        return null === Bk ? null : this.translate("meter" === kk ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(Bk))
        })
      }
      oddsLines(kk, Fk) {
        const Bk = (kk, Fk) => {
            var Bk;
            return null !== (Bk = {
              bite: Fk.lampLightBiteMs,
              rare: Fk.lampLightRareChance,
              meter: Fk.lampLightMeterCatches,
              bloom: Fk.lampLightBloomCatches,
              notice: Fk.lampLightNoticeChance
            } [kk]) && void 0 !== Bk ? Bk : 0
          },
          Rk = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          tk = [];
        for (const ak of ["bite", "rare", "meter", "bloom", "notice"]) {
          const Xk = this.formatOdds(ak, kk),
            bk = this.formatOdds(ak, Fk);
          if (null === Xk || null === bk || "bite" !== ak && "rare" !== ak && Xk === bk) continue;
          const wk = Bk(ak, Fk) - Bk(ak, kk),
            dk = Rk[ak] ? wk < 0 : wk > 0;
          tk.push({
            label: ak,
            before: Xk,
            after: bk,
            tone: Xk === bk ? "same" : dk ? "better" : "worse"
          })
        }
        return tk
      }
      charmView(kk, Fk, Bk) {
        const Rk = kk.lampLightCharmId.charAt(0).toUpperCase() + kk.lampLightCharmId.slice(1),
          tk = "bloom" === this.situation;
        return {
          id: kk.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${Rk}`),
          effect: this.translate(`skyblockGame:lampLightCharm${Rk}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(kk.lampLightCharmCost)
          }),
          owned: kk.lampLightCharmOwned,
          affordable: Bk >= kk.lampLightCharmCost,
          socketed: Fk.lampLightSocketed === kk.lampLightCharmId,
          lines: this.oddsLines(tk ? Fk.lampLightBareBloom : Fk.lampLightBareOpen, tk ? kk.lampLightCharmBloom : kk.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var kk, Fk, Bk, Rk;
        const tk = this.message,
          ak = "ready" === (null === tk || void 0 === tk ? void 0 : tk.lampLightStatus) ? this.shop : null,
          Xk = null !== (kk = null === tk || void 0 === tk ? void 0 : tk.lampLightBalance) && void 0 !== kk ? kk : 0,
          bk = this.atChair,
          wk = "loading" === (null === tk || void 0 === tk ? void 0 : tk.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === tk || void 0 === tk ? void 0 : tk.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          dk = "ready" !== (null === tk || void 0 === tk ? void 0 : tk.lampLightStatus) || bk ? null !== (Fk = this.refusalKey) && void 0 !== Fk ? Fk : wk : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== tk && "locked" !== tk.lampLightStatus,
          status: null !== (Bk = null === tk || void 0 === tk ? void 0 : tk.lampLightStatus) && void 0 !== Bk ? Bk : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(Xk)
          }),
          releasing: null !== (Rk = null === tk || void 0 === tk ? void 0 : tk.lampLightReleasing) && void 0 !== Rk && Rk,
          gained: null === tk || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === tk || void 0 === tk ? void 0 : tk.lampLightStatus) && bk && !this.isPending(),
          situation: this.situation,
          shop: null === ak ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: ak.lampLightOddsRod,
              island: this.translate(ak.lampLightIslandNameKey)
            }),
            heldRod: null !== ak.lampLightHeldRod,
            charms: ak.lampLightCharms.map((kk => this.charmView(kk, ak, Xk))),
            tints: ak.lampLightTints.map((kk => {
              const Fk = kk.lampLightTintId,
                [Bk, Rk, tk] = kk.lampLightTintColour;
              return {
                id: Fk,
                name: this.translate(`skyblockGame:lampLightTint${Fk.charAt(0).toUpperCase()}${Fk.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(kk.lampLightTintCost)
                }),
                owned: kk.lampLightTintOwned,
                affordable: Xk >= kk.lampLightTintCost,
                wearing: ak.lampLightTint === Fk,
                colour: `rgb(${Bk}, ${Rk}, ${tk})`
              }
            })),
            wearingIslandColours: null === ak.lampLightTint
          },
          notice: null === dk ? null : this.translate(dk),
          sparkle: this.sparkle
        }
      }
    }
    const DR = "skyblockMagmawardView";
    class zR {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.Hf = kk, this.now = Fk, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = Ck.map((() => 0)), this.wornAt = Ck.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      he(kk) {
        var Fk, Bk;
        const Rk = Ck.map(((Fk, Bk) => !0 === kk.magmawardPiecesWorn[Bk]));
        if (!Rk.includes(!0)) return this.snapshot = null, void this.Hf(null);
        const tk = this.now(),
          ak = this.snapshot;
        null === ak && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const Xk = kk.magmawardFuelCarried,
          bk = !Rk.includes(!1);
        let wk = null !== (Fk = null === ak || void 0 === ak ? void 0 : ak.pulse) && void 0 !== Fk ? Fk : null,
          dk = null !== (Bk = null === ak || void 0 === ak ? void 0 : ak.flare) && void 0 !== Bk ? Bk : null;
        kk.magmawardFuelBurned ? (wk = "burn", dk = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = tk, this.flareAt = tk) : null !== ak && Xk > ak.fuel && (wk = "gain", this.pulseToken++, this.pulseAt = tk), bk && null !== ak && !ak.fullSet && (dk = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = tk, this.setLitAt = tk);
        const sk = Ck.map(((kk, Fk) => (Rk[Fk] && null !== ak && !ak.pieces[Fk].worn && (this.wornTokens[Fk]++, this.wornAt[Fk] = tk), {
          itemName: kk,
          worn: Rk[Fk],
          wornToken: this.wornTokens[Fk],
          justWorn: Rk[Fk] && this.isPlaying(this.wornAt[Fk], tk)
        })));
        this.snapshot = {
          pieces: sk,
          wornCount: Rk.filter(Boolean).length,
          fullSet: bk,
          fuel: Xk,
          fuelState: Xk <= 0 ? "empty" : Xk <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, tk) ? wk : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, tk) ? dk : null,
          flareToken: this.flareToken,
          setLit: bk && this.isPlaying(this.setLitAt, tk),
          setLitToken: this.setLitToken
        }, this.Hf(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.Hf(null)
      }
      isPlaying(kk, Fk) {
        return Fk - kk < 1200
      }
    }
    const PR = "skyblockGlowtideView";
    class hR {
      constructor(kk) {
        this.Hf = kk, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = kk => {
          this.arrow = kk, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      he(kk) {
        this.bloom = kk.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.Hf(null))
      }
      afterRender(kk, Fk) {
        const Bk = this.bloom;
        if (null === Bk || null === kk) return;
        const Rk = Bk.glowtideBloomX - kk[0],
          ak = Bk.glowtideBloomZ - kk[2],
          Xk = Math.hypot(Rk, ak),
          bk = this.snapshot,
          wk = null !== bk && void 0 !== bk && bk.inRange ? 1 : 0,
          dk = Xk <= 12.5 + wk && kk[1] - Bk.glowtideBloomY <= 10 + wk;
        !dk || null !== bk && void 0 !== bk && bk.inRange || this.inRangeToken++;
        const sk = {
          colour: Bk.glowtideBloomColour,
          inRange: dk,
          distance: Math.round(Xk),
          inRangeToken: this.inRangeToken
        };
        (null === bk || sk.colour !== bk.colour || sk.inRange !== bk.inRange || !dk && sk.distance !== bk.distance) && (this.snapshot = sk, this.Hf(sk));
        const Vk = tk.b.computeShortestRotation(Fk, (0, tk.Hb)([Rk, 0, ak]));
        null === this.arrow || Math.abs(Vk - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${Vk}rad)`, this.arrowTurn = Vk)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.Hf(null)
      }
    }
    const qR = "skyblockGlowMeterView";
    class CR {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.Hf = kk, this.now = Fk, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      he(kk) {
        const Fk = this.now(),
          {
            glowMeterFill: Bk,
            glowMeterCapacity: Rk
          } = kk,
          tk = Bk >= Rk,
          ak = this.snapshot;
        null !== ak && (tk && !ak.full && (this.fullToken++, this.fullAt = Fk), ak.full && !tk ? (this.burstToken++, this.burstAt = Fk) : Bk > ak.fill && (this.gainToken++, this.gainAt = Fk)), this.snapshot = {
          fill: Bk,
          KV: Rk,
          ratio: Math.min(1, Math.max(0, Bk / Rk)),
          full: tk,
          rares: kk.glowMeterRares,
          ready: tk && this.isPlaying(this.fullAt, Fk),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, Fk),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, Fk),
          gainToken: this.gainToken
        }, this.Hf(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.Hf(null)
      }
      isPlaying(kk, Fk) {
        return Fk - kk < 2e3
      }
    }
    const ZR = "skyblockHushWaitView";
    class pR {
      constructor(kk) {
        this.Hf = kk, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      he(kk) {
        let {
          hushWaitMs: Fk,
          hushWaitTotalMs: Bk,
          hushWaitLines: Rk
        } = kk;
        if (this.clearTimers(), this.token++, 0 === Rk.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (Fk <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: Rk[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const tk = Math.max(null !== Bk && void 0 !== Bk ? Bk : Fk, Fk),
          ak = tk - Fk,
          Xk = kk => tk * kk / Rk.length,
          bk = kk => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: tk,
              elapsedMs: ak,
              line: Rk[kk],
              lineIndex: kk
            })
          };
        let wk = 0;
        for (; wk + 1 < Rk.length && Xk(wk + 1) <= ak;) wk++;
        bk(wk);
        for (let dk = wk + 1; dk < Rk.length; dk++) this.later(Xk(dk) - ak, (() => {
          bk(dk)
        }));
        this.later(Fk, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(kk) {
        this.snapshot = kk, this.Hf(kk)
      }
      later(kk, Fk) {
        this.timers.push(setTimeout(Fk, kk))
      }
      clearTimers() {
        for (const kk of this.timers) clearTimeout(kk);
        this.timers = []
      }
    }
    const KR = "skyblockTideChartsView",
      xR = 36e5,
      jR = 864e5;

    function lR(kk, Fk, Bk) {
      const [Rk, tk, ak, Xk] = kk.tideChartArea, bk = Math.floor(Fk), wk = Math.floor(Bk);
      return bk >= Rk && bk <= ak && wk >= tk && wk <= Xk
    }

    function nR(kk, Fk, Bk) {
      const [Rk, tk, ak, Xk] = kk.tideChartWater;
      return function(kk, Fk, Bk, Rk, tk, ak) {
        const Xk = 4 - Zk(Math.floor(tk) - (kk - Bk), Bk);
        return 5 * Zk(Math.floor(ak) - (Fk - Rk), Rk) + Xk
      }(Rk, tk, ak, Xk, Fk, Bk)
    }

    function IR(kk, Fk, Bk) {
      const Rk = kk.tideCharts;
      for (let tk = 0; tk < Rk.length; tk++)
        if (lR(Rk[tk], Fk, Bk)) return Rk[tk];
      return null
    }

    function QR(kk, Fk, Bk) {
      const Rk = Math.max(0, Fk - Bk);
      return Rk > jR ? kk("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(Rk / jR))
      }) : Rk > xR ? kk("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(Rk / xR))
      }) : kk("skyblockGame:tideChartsTurnSoon")
    }
    class kt extends Vk {
      constructor(kk, Fk, Bk, Rk) {
        let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(kk, Bk, Rk), this.translate = Fk, this.now = tk, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.AA = kk => {
          this.picked = kk, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      he(kk) {
        const Fk = this.message;
        if (null !== Fk)
          for (const Rk of kk.tideCharts) {
            var Bk;
            const kk = Fk.tideCharts.find((kk => kk.tideChartIsland === Rk.tideChartIsland)),
              tk = Rk.tideChartLit & ~(null !== (Bk = null === kk || void 0 === kk ? void 0 : kk.tideChartLit) && void 0 !== Bk ? Bk : 0);
            void 0 !== kk && 0 !== tk && (this.pulse = {
              island: Rk.tideChartIsland,
              cells: tk,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = kk, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(kk, Fk) {
        var Bk;
        const Rk = null === this.message || Number.isNaN(kk) ? null : IR(this.message, kk, Fk),
          tk = null !== (Bk = null === Rk || void 0 === Rk ? void 0 : Rk.tideChartIsland) && void 0 !== Bk ? Bk : null,
          ak = null === Rk ? -1 : function(kk, Fk, Bk) {
            const [Rk, tk, ak, Xk] = kk.tideChartWater;
            return function(kk, Fk, Bk, Rk, tk, ak, Xk) {
              return ((tk - kk) / (Bk + Xk)) ** 2 + ((ak - Fk) / (Rk + Xk)) ** 2 <= 1
            }(Rk, tk, ak, Xk, Fk, Bk, 2) ? nR(kk, Fk, Bk) : -1
          }(Rk, kk, Fk);
        return (tk !== this.hereIsland || ak !== this.hereCell) && (this.hereIsland = tk, this.hereCell = ak, null !== tk && (this.lastIsland = tk), !0)
      }
      afterRender(kk) {
        if (null === this.message) return;
        this.lastX = null === kk ? Number.NaN : kk[0], this.lastZ = null === kk ? Number.NaN : kk[2];
        const Fk = this.locate(this.lastX, this.lastZ),
          Bk = this.expirePulses();
        (Fk || Bk || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const kk = this.now();
        return !(!this.open || kk - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = kk, QR(this.translate, this.message.tideChartTurnsInMs, kk - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(kk, Fk) {
        const Bk = null === this.message ? null : IR(this.message, kk, Fk);
        if (null === Bk) return;
        const Rk = nR(Bk, kk, Fk);
        0 === (Bk.tideChartPreBlank & 1 << Rk) && (this.cast = {
          island: Bk.tideChartIsland,
          cell: Rk,
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
        var Bk;
        return null !== (Bk = kk.tideCharts.find((kk => kk.tideChartIsland === Fk))) && void 0 !== Bk ? Bk : null
      }
      describe(kk) {
        var Fk, Bk, Rk;
        const tk = kk.tideChartIsland,
          ak = [];
        for (let Ak = 0; Ak < 25; Ak++) {
          const Fk = 1 << Ak;
          0 !== (kk.tideChartLit & Fk) ? ak.push("lit") : 0 !== (kk.tideChartClear & Fk) ? ak.push("clear") : 0 !== (kk.tideChartPreBlank & Fk) ? ak.push("shore") : ak.push("water")
        }
        const Xk = function(kk) {
            let Fk = 0;
            for (let Bk = kk >>> 0; 0 !== Bk; Bk &= Bk - 1) Fk++;
            return Fk
          }(kk.tideChartLit),
          bk = kk.tideChartInkCount,
          wk = this.translate(kk.tideChartIslandNameKey),
          dk = this.translate("skyblockGame:tideChartsLit", {
            lit: String(Xk),
            ink: String(bk)
          }),
          sk = null === kk.tideChartPictureNameKey ? null : this.translate(kk.tideChartPictureNameKey),
          Vk = this.hereIsland === tk && -1 !== this.hereCell ? this.hereCell : null,
          Jk = [`${wk}: ${dk}.`];
        if (null !== sk && Jk.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: sk
          })), null !== Vk) {
          const kk = Math.floor(Vk / 5) + 1,
            Fk = Vk % 5 + 1;
          Jk.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(kk),
            column: String(Fk)
          }))
        }
        return {
          island: tk,
          islandName: wk,
          cells: ak,
          hereCell: Vk,
          lit: Xk,
          ink: bk,
          litText: dk,
          pictureName: sk,
          gridLabel: Jk.join(" "),
          pulseCells: this.pulse.island === tk ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (Fk = this.cast) || void 0 === Fk ? void 0 : Fk.island) === tk ? this.cast.cell : null,
          castToken: null !== (Bk = null === (Rk = this.cast) || void 0 === Rk ? void 0 : Rk.token) && void 0 !== Bk ? Bk : 0
        }
      }
      buildSnapshot() {
        var kk, Fk, Bk;
        const Rk = this.message;
        if (null === Rk || 0 === Rk.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const tk = this.findChart(Rk, this.hereIsland),
          ak = null !== (kk = null !== (Fk = null !== (Bk = this.findChart(Rk, this.open ? this.picked : null)) && void 0 !== Bk ? Bk : tk) && void 0 !== Fk ? Fk : this.findChart(Rk, this.lastIsland)) && void 0 !== kk ? kk : Rk.tideCharts[0],
          Xk = null === tk ? null : this.describe(tk);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: Xk,
          card: ak === tk ? Xk : this.describe(ak),
          turnsText: QR(this.translate, Rk.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(Rk.tideChartBookCount)
          }),
          tabs: Rk.tideCharts.map((kk => ({
            island: kk.tideChartIsland,
            name: this.translate(kk.tideChartIslandNameKey),
            selected: kk.tideChartIsland === ak.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const Ft = "skyblockRegularsView",
      Bt = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      Rt = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function tt(kk, Fk) {
      return "given" === kk ? Fk.given : "owed" === kk ? Fk.owed : Fk.goal
    }
    class Xt extends Vk {
      constructor(kk, Fk, Bk, Rk) {
        super(kk, Bk, Rk), this.translate = Fk, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = kk => kk, this.openIsland = kk => {
          this.selected = kk, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = kk => {
          this.selected = kk, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      he(kk) {
        this.message = kk, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const kk = this.openedFromReachLog;
        return this.openedFromReachLog = !1, kk
      }
      setTranslator(kk, Fk, Bk) {
        this.translate = kk, void 0 !== Bk && (this.itemName = Bk), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(kk, Fk, Bk) {
        return {
          text: this.translate(tt(kk, Fk), Bk),
          given: "given" === kk
        }
      }
      describeRegular(kk, Fk) {
        const Bk = this.translate,
          Rk = null !== kk.regularKg,
          tk = kk.regularMeetings,
          ak = Rk ? 0 === tk ? Bk("skyblockGame:regularsNotMet") : 1 === tk ? Bk("skyblockGame:regularsMeetingsOne") : Bk("skyblockGame:regularsMeetings", {
            count: tk
          }) : "";
        return {
          id: kk.regularId,
          name: Bk(kk.regularNameKey),
          line: Bk(kk.regularLineKey),
          itemName: kk.regularFishItem,
          fishName: this.itemName(kk.regularFishItem),
          tagged: Rk,
          size: null === kk.regularKg ? Bk("skyblockGame:regularsNotTagged") : Bk("skyblockGame:regularsSize", {
            kg: kk.regularKg.toFixed(1)
          }),
          meetings: ak,
          chance: Bk("skyblockGame:regularsChance", {
            count: kk.regularOneInCasts
          }),
          resting: kk.regularRestingToday,
          gifts: [{
            text: Bk("skyblockGame:regularsGiftFlare"),
            given: tk >= 3
          }, this.describeGift(kk.regularTintGift, Bt, {
            tint: Bk(kk.regularTintNameKey)
          })],
          history: [...kk.regularHistory].reverse().map((kk => {
            const Rk = kk.regularMeetingKg.toFixed(1),
              tk = Fk - kk.regularMeetingDay;
            return tk <= 0 ? Bk("skyblockGame:regularsToday", {
              kg: Rk
            }) : Bk("skyblockGame:regularsDaysAgo", {
              days: tk,
              kg: Rk
            })
          }))
        }
      }
      describeIsland(kk, Fk) {
        return {
          id: kk.regularsIslandId,
          name: this.translate(kk.regularsIslandNameKey),
          charm: this.describeGift(kk.regularsCharmGift, Rt, {
            charm: this.translate(kk.regularsCharmNameKey)
          }),
          regulars: kk.regularsList.map((kk => this.describeRegular(kk, Fk)))
        }
      }
      buildSnapshot() {
        var kk, Fk, Bk, Rk;
        const tk = this.message;
        if (null === tk) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const ak = tk.regularsIslands.map((kk => this.describeIsland(kk, tk.regularsToday))),
          Xk = null !== (kk = null !== (Fk = null === (Bk = ak.find((kk => kk.id === this.selected))) || void 0 === Bk ? void 0 : Bk.id) && void 0 !== Fk ? Fk : null === (Rk = ak[0]) || void 0 === Rk ? void 0 : Rk.id) && void 0 !== kk ? kk : "";
        return {
          enabled: !0,
          open: this.open,
          selected: Xk,
          islands: ak
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const bt = "skyblockHiddenWatersView";
    class wt {
      constructor(kk) {
        this.Hf = kk, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      he(kk) {
        this.snapshot = function(kk) {
          const [Fk, Bk] = kk.hiddenWatersMapSize, Rk = (kk, Rk) => ({
            left: 1 - kk / Fk,
            top: Rk / Bk
          }), tk = new Map;
          for (const [Xk, bk] of kk.hiddenWatersGlimpses) {
            var ak;
            const kk = null !== (ak = tk.get(Xk)) && void 0 !== ak ? ak : [];
            kk.push(bk), tk.set(Xk, kk)
          }
          return {
            found: kk.hiddenWatersFound,
            total: kk.hiddenWatersTotal,
            aspect: Bk / Fk,
            pins: kk.hiddenWatersPins.map((kk => {
              let [Fk, Bk] = kk;
              return Rk(Fk, Bk)
            })),
            islands: kk.hiddenWatersIslands.map((kk => {
              let [tk, ak, Xk, bk] = kk;
              const {
                left: wk,
                top: dk
              } = Rk(Xk + 1, ak);
              return {
                left: wk,
                top: dk,
                width: (Xk + 1 - tk) / Fk,
                height: (bk + 1 - ak) / Bk
              }
            })),
            glimpses: tk
          }
        }(kk), this.Hf(this.snapshot)
      }
    }
    const dt = "skyblockDialogueView";
    class st extends Vk {
      constructor(kk, Fk, Bk, Rk, tk) {
        let ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(kk, Bk, Rk), this.translate = Fk, this.requestDialogue = tk, this.now = ak, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
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
      he(kk) {
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
        const Bk = this.selection;
        if ("quest" === Bk.kind) {
          const kk = this.scripts.find((kk => kk.dialogueQuestId === Bk.questId));
          return {
            ...Fk,
            characters: [],
            questFocus: Bk.questId,
            conversations: kk ? [this.conversation(kk)] : []
          }
        }
        const Rk = [];
        for (let ak = this.scripts.length - 1; ak >= 0; ak--) {
          const kk = this.scripts[ak].dialogueLines;
          for (let Fk = kk.length - 1; Fk >= 0; Fk--) Rk.includes(kk[Fk].dialogueSpeakerId) || Rk.push(kk[Fk].dialogueSpeakerId)
        }
        const tk = null !== Bk.npcId && Rk.includes(Bk.npcId) ? Bk.npcId : null !== (kk = Rk[0]) && void 0 !== kk ? kk : null;
        return {
          ...Fk,
          characters: Rk.map((kk => {
            var Fk, Bk;
            return {
              id: kk,
              styling: null !== (Fk = null === (Bk = this.speakers.get(kk)) || void 0 === Bk ? void 0 : Bk.dialogueSpeakerStyling) && void 0 !== Fk ? Fk : kk,
              selected: kk === tk
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((kk => kk.dialogueLines.some((kk => kk.dialogueSpeakerId === tk)))).map((kk => this.conversation(kk))).reverse()
        }
      }
      conversation(kk) {
        let Fk = null;
        return {
          questId: kk.dialogueQuestId,
          questName: this.translate(kk.dialogueQuestNameKey),
          completed: kk.dialogueQuestCompleted,
          lines: kk.dialogueLines.map(((kk, Bk) => {
            var Rk;
            const tk = kk.dialogueSpeakerId === Fk || null === (Rk = this.speakers.get(kk.dialogueSpeakerId)) || void 0 === Rk ? void 0 : Rk.dialogueSpeakerStyling;
            return Fk = kk.dialogueSpeakerId, {
              key: Bk,
              display: {
                line: {
                  translationKey: kk.dialogueLineKey,
                  params: this.params(kk.dialogueLineParams)
                },
                speakerName: tk,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(kk) {
        if (void 0 !== kk) return Object.fromEntries(Object.entries(kk).map((kk => {
          let [Fk, Bk] = kk;
          return [Fk, "string" === typeof Bk ? Bk : this.translate(Bk.translationKey)]
        })))
      }
    }
    var Vt = Bk(586),
      Jt = Bk(1219),
      At = Bk(98);
    const et = "skyblockAutographsView";

    function yt(kk) {
      const Fk = Vt.g[kk];
      return {
        label: Fk.chatTag.map((kk => kk.str)).join(""),
        icon: Fk.icon,
        colour: Fk.mainRGB
      }
    }
    class ft extends Vk {
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
      he(kk) {
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
          Bk = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          Rk = [...Fk].sort(((kk, Fk) => Number(null !== Fk.autographRank) - Number(null !== kk.autographRank) || Fk.autographSignedAtMs - kk.autographSignedAtMs)).map((kk => ({
            key: `${kk.autographSignedAtMs}|${kk.autographSignerName}`,
            name: (0, Jt.d)(kk.autographSignerName, !At.featureFlags.canSeeRealPlayerNames),
            rank: null === kk.autographRank ? null : yt(kk.autographRank),
            signedOn: Bk.format(kk.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: Rk,
          total: Rk.length,
          rankTotal: Rk.filter((kk => null !== kk.rank)).length
        }
      }
    }
    const mt = "skyblockHudView",
      Wt = () => {},
      vt = {
        getItem: () => null,
        setItem: Wt,
        removeItem: Wt
      };
    class it {
      constructor(kk) {
        let {
          translate: Fk,
          translateWithIcons: Bk,
          setMenuOpen: Rk = Wt,
          dismissMenu: tk = () => {
            Rk(!1)
          },
          publishSkills: ak = Wt,
          publishQuests: Xk = Wt,
          publishQuestNotification: bk = Wt,
          publishDungeons: wk = Wt,
          publishCollections: dk = Wt,
          publishMap: sk = Wt,
          publishHud: Vk = Wt,
          publishPortalTransit: Jk = Wt,
          publishDailyReward: ek = Wt,
          publishMailbox: yk = Wt,
          publishQuestGraph: fk = Wt,
          publishForge: mk = Wt,
          publishSmuggler: Wk = Wt,
          publishKeepersChair: vk = Wt,
          publishReachLog: ik = Wt,
          publishLampLight: Yk = Wt,
          publishMagmaward: Lk = Wt,
          publishGlowtide: Ek = Wt,
          publishGlowMeter: Sk = Wt,
          publishHushWait: Nk = Wt,
          publishPassage: Hk = Wt,
          publishTideCharts: uk = Wt,
          publishRegulars: Mk = Wt,
          publishHiddenWaters: gk = Wt,
          publishDialogue: Uk = Wt,
          publishAutographs: ck = Wt,
          isLoadingScreenUp: Gk = () => !1,
          onDailyRewardCoinLanded: Tk = Wt,
          onDailyRewardStarted: rk = Wt,
          onDailyRewardFinished: Dk = Wt,
          onDailyRewardItemLanded: zk = Wt,
          onMailboxStarted: Pk = Wt,
          journeyStorage: hk = vt,
          requestTracking: qk = Wt,
          requestTravel: Ck = Wt,
          requestDungeonEnter: Zk = Wt,
          requestQuestJump: pk = Wt,
          requestQuestArrive: Kk = Wt,
          requestForge: xk = Wt,
          requestSmuggle: jk = Wt,
          requestKeepersChairAim: lk = Wt,
          requestReachLogOpen: nk = Wt,
          requestLampLight: Ik = Wt,
          requestDialogue: Qk = Wt
        } = kk;
        this.navigation = void 0, this.map = void 0, this.compass = new Ok, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new SR.b, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = kk => kk, this.close = () => {
          for (const kk of this.panels) kk.close()
        }, this.setMenuOpen = Rk, this.publishHud = Vk, this.portalTransit = new PB(Jk, hk), this.magmaward = new zR(Lk), this.glowtide = new hR(Ek), this.glowMeter = new CR(Sk), this.hushWait = new pR(Nk), this.dailyReward = new CB(ek, (() => Gk() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (kk => {
          this.quests.setNotificationsHeld(kk)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), Tk, rk, Dk, zk);
        const kF = kk => {
          this.panels.some((kk => kk.isOpen())) || (kk ? tk() : this.setMenuOpen(!1))
        };
        this.skills = new bB(ak, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), Fk, void 0, void 0, kF), this.quests = new JB(Xk, qk, Fk, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, kF, bk), this.dungeons = new yB(wk, Fk, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, kF, Zk), this.collections = new rB(dk, Fk, (() => {
          this.beforePanelOpen(this.collections)
        }), kF), this.map = new Ak(sk, Ck, Fk, (() => {
          this.beforePanelOpen(this.map)
        }), kF), this.questGraph = new QB(fk, Fk, (() => {
          this.beforePanelOpen(this.questGraph)
        }), kF, pk, Kk, hk), this.forge = new mR(mk, Fk, (() => {
          this.beforePanelOpen(this.forge)
        }), kF, xk), this.smuggler = new iR(Wk, Fk, (() => {
          this.beforePanelOpen(this.smuggler)
        }), kF, jk), this.lampLight = new rR(Yk, Fk, Ik, this.commandPacer), this.keepersChair = new HR(vk, Fk, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (kk => {
          this.lampLight.onChairClosed(), kF(kk)
        }), lk, Date.now, this.commandPacer), this.reachLog = new GR(ik, Fk, (() => {
          this.beforePanelOpen(this.reachLog)
        }), kF, nk, this.commandPacer), this.passage = new ER(Hk, Fk, (() => {
          this.beforePanelOpen(this.passage)
        }), kF), this.tideCharts = new kt(uk, Fk, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), kF), this.regulars = new Xt(Mk, Fk, (() => {
          this.beforePanelOpen(this.regulars)
        }), (kk => {
          this.regulars.takeReturnToReachLog() && !kk && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), kF(kk)
        })), this.hiddenWaters = new wt(gk), this.dialogue = new st(Uk, Fk, (() => {
          this.beforePanelOpen(this.dialogue)
        }), kF, Qk), this.autographs = new ft(ck, (() => {
          this.beforePanelOpen(this.autographs)
        }), kF), this.mailbox = new xB(yk, (() => Gk() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), Pk), this.quests.translateWithIcons = null !== Bk && void 0 !== Bk ? Bk : null, this.skills.onLevelUp = kk => {
          this.quests.notify(kk)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new aB(this.map, this.quests, this.compass, Fk)
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
        for (const Bk of this.panels) Bk === kk || Fk && Bk === this.reachLog || Bk.close();
        this.openingPanel = null
      }
      setTranslator(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Fk => this.resolveItemName(Fk, kk);
        this.quests.translateWithIcons = null !== Bk && void 0 !== Bk ? Bk : null, this.navigation.setTranslator(kk, Fk), this.lampLight.setTranslator(kk, Fk), this.mailbox.setItemName(Rk);
        for (const tk of this.panels) tk.setTranslator(kk, Fk, Rk)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const kk of this.panels) kk.dispose()
      }
    }
    var Yt = Bk(1020),
      ot = Bk.n(Yt),
      Lt = Bk(22),
      Ot = Bk(36329),
      Et = Bk(3206),
      St = Bk(1835),
      Nt = Bk(1812),
      Ht = Bk(9029),
      ut = Bk(1149),
      Mt = Bk(1387),
      gt = Bk(1069);

    function Ut(kk) {
      let {
        controller: Fk,
        minimap: Bk,
        children: Rk
      } = kk;
      const ak = (0, Mt.g)(mt, Fk.getHudSnapshot()),
        [Xk, bk] = (0, Sk.useState)(Fk.skills.getSnapshot().overallLevel);
      (0, Mt.f)(XB, (kk => {
        bk(kk.overallLevel)
      }));
      const wk = (0, Sk.useRef)(null);
      (0, Mt.f)(qB, (kk => {
        ! function(kk, Fk) {
          if (null === kk || "function" !== typeof kk.animate) return;
          const Bk = Fk ? 1.35 : 1.15;
          kk.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${Bk})`
          }, {
            transform: "scale(1)"
          }], {
            duration: Fk ? 320 : 160,
            easing: "ease-out"
          }), kk.classList.toggle("Receiving", !Fk), Fk && (kk.classList.remove("Shine"), kk.offsetWidth, kk.classList.add("Shine"))
        }(wk.current, kk)
      }));
      const {
        t: dk
      } = (0, ut.x)(), {
        isTouchScreen: sk
      } = (0, Lt.h)(["isTouchScreen"]), [Vk, Jk] = (0, Sk.useState)(null);
      return (0, Et.i)(Vk, ".SkyblockRightHud"), null !== ak || Bk ? (0, gt.jsx)(Ot.g, {
        placement: "topRight",
        children: (0, gt.jsxs)("div", {
          className: ot()("SkyblockRightHud", {
            TouchScreen: sk
          }),
          children: [Bk, null !== ak && (0, gt.jsxs)("div", {
            ref: Jk,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in ak ? (0, gt.jsx)("div", {
              className: "SkyblockHudHelp",
              children: ak.hudHelpText
            }) : (0, gt.jsxs)(gt.Fragment, {
              children: [(0, gt.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, gt.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, gt.jsx)("strong", {
                    style: {
                      color: tk.N.cyanUiText
                    },
                    children: dk(ak.hudZoneNameKey)
                  }), null !== Xk && (0, gt.jsx)("span", {
                    style: {
                      color: tk.N.goldUiText
                    },
                    children: dk("skyblockGame:level", {
                      level: (0, Ht.f)(Xk)
                    })
                  })]
                }), (0, gt.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: wk,
                  children: [(0, gt.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, gt.jsx)(St.e, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, Ht.f)(ak.hudPurseCoins)]
                })]
              }), ak.hudClockText.length > 0 && (0, gt.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, gt.jsx)(Nt.d, {
                  text: ak.hudClockText
                })
              })]
            }), Rk, "hudZoneNameKey" in ak && (0, gt.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function ct(kk) {
      let {
        icon: Fk
      } = kk;
      const Bk = (0, Sk.useCallback)((kk => {
        null === kk || void 0 === kk || kk.replaceChildren(KF(Fk))
      }), [Fk]);
      return (0, gt.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: Bk
      })
    }

    function Gt(kk) {
      let {
        controller: Fk
      } = kk;
      const {
        t: Bk
      } = (0, ut.x)();
      return (0, gt.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: Fk.display.mountPlayer,
        title: Bk("skyblockGame:mapYouAreHere"),
        children: (0, gt.jsx)(ct, {
          icon: "player"
        })
      })
    }
    const Tt = Bk(38195),
      rt = Object.fromEntries(Tt.keys().map((kk => [kk.replace(/^\.\/(.*)\.png$/, "$1"), Tt(kk)])));

    function Dt(kk, Fk) {
      var Bk;
      return null !== (Bk = rt[kk]) && void 0 !== Bk ? Bk : rt[Fk]
    }

    function zt(kk) {
      let {
        imageKey: Fk,
        fallbackImageKey: Bk,
        geometryKey: Rk,
        alt: tk,
        className: ak
      } = kk;
      const [Xk, bk] = (0, Sk.useState)((() => function(kk, Fk) {
        return [{
          id: 0,
          imageKey: kk,
          geometryKey: Fk,
          phase: "shown"
        }]
      }(Fk, Rk))), wk = function(kk, Fk, Bk) {
        const Rk = kk[kk.length - 1];
        if (Rk.imageKey === Fk && Rk.geometryKey === Bk) return kk;
        const tk = {
          id: Rk.id + 1,
          imageKey: Fk,
          geometryKey: Bk,
          phase: "entering"
        };
        return Rk.geometryKey === Bk ? [{
          ...Rk,
          phase: "leaving"
        }, tk] : [tk]
      }(Xk, Fk, Rk);
      return wk !== Xk && bk(wk), (0, gt.jsx)(gt.Fragment, {
        children: wk.map((kk => (0, gt.jsx)("img", {
          className: ot()("SkyblockMapTerrainImage", ak, {
            Entering: "entering" === kk.phase,
            Leaving: "leaving" === kk.phase
          }),
          src: Dt(kk.imageKey, Bk),
          alt: "leaving" === kk.phase ? "" : tk,
          onAnimationEnd: () => {
            bk((Fk => function(kk, Fk) {
              return kk.flatMap((kk => kk.id !== Fk ? [kk] : "leaving" === kk.phase ? [] : [{
                ...kk,
                phase: "shown"
              }]))
            }(Fk, kk.id)))
          }
        }, kk.id)))
      })
    }
    var Pt = Bk(4268),
      ht = Bk(1389);

    function qt(kk) {
      if ("Tab" !== kk.key) return;
      const Fk = Array.from(kk.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        Bk = Fk.indexOf(document.activeElement);
      var Rk;
      if (kk.shiftKey && Bk <= 0) kk.preventDefault(), null === (Rk = Fk.at(-1)) || void 0 === Rk || Rk.focus();
      else if (!kk.shiftKey && (-1 === Bk || Bk === Fk.length - 1)) {
        var tk;
        kk.preventDefault(), null === (tk = Fk[0]) || void 0 === tk || tk.focus()
      }
    }

    function Ct() {
      const kk = (0, Sk.useRef)(null);
      return (0, Sk.useCallback)((Fk => {
        var Bk;
        Fk ? (kk.current = document.activeElement, Fk.focus()) : null === (Bk = kk.current) || void 0 === Bk || Bk.focus()
      }), [])
    }

    function Zt(kk) {
      let {
        percent: Fk,
        label: Bk,
        levelUpToken: Rk,
        colour: tk
      } = kk;
      return (0, gt.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": Bk,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Fk,
        "aria-valuetext": Bk,
        children: [(0, gt.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${Fk/100})`
          }
        }), null !== Rk && void 0 !== Rk && (0, gt.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": tk
          }
        }, Rk)]
      })
    }

    function pt(kk) {
      let {
        mount: Fk
      } = kk;
      return (0, gt.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: Fk,
        hidden: !0,
        children: (0, gt.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, gt.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, gt.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function Kt(kk, Fk, Bk, Rk) {
      (0, Sk.useLayoutEffect)((() => {
        const tk = kk.current;
        if (!Bk || null === Fk || void 0 === Fk || !Fk.local || !tk) return;
        const ak = Array.from(tk.querySelectorAll(".SkyblockMapNode")),
          Xk = [...Fk.points, ...Fk.portals],
          bk = () => {
            const kk = tk.clientWidth,
              Bk = tk.clientHeight,
              bk = ak.map(((tk, ak) => {
                const bk = Xk[ak];
                return {
                  id: bk.id,
                  portal: ak >= Fk.points.length,
                  x: bk.position[0] * kk / 100,
                  y: bk.position[1] * Bk / 100,
                  width: tk.offsetWidth / Rk,
                  height: tk.offsetHeight / Rk
                }
              })),
              wk = new Map(Xk.map(((kk, Fk) => [kk.id, ak[Fk]])));
            for (const Fk of function(kk, Fk, Bk) {
                const Rk = [],
                  tk = [...kk].sort(((kk, Fk) => Number(Fk.portal) - Number(kk.portal) || kk.id.localeCompare(Fk.id)));
                for (const ak of tk) {
                  const kk = kk => Math.max(ak.width / 2, Math.min(Fk - ak.width / 2, kk)),
                    tk = kk => Math.max(ak.height / 2, Math.min(Bk - ak.height / 2, kk)),
                    Xk = [kk(ak.x)],
                    bk = [tk(ak.y)];
                  for (const Fk of Rk) Xk.push(kk(Fk.x - (Fk.width + ak.width) / 2 - 4), kk(Fk.x + (Fk.width + ak.width) / 2 + 4)), bk.push(tk(Fk.y - (Fk.height + ak.height) / 2 - 4), tk(Fk.y + (Fk.height + ak.height) / 2 + 4));
                  let wk = {
                      ...ak,
                      x: Xk[0],
                      y: bk[0]
                    },
                    dk = 1 / 0,
                    sk = 1 / 0;
                  for (const Fk of new Set(Xk))
                    for (const kk of new Set(bk)) {
                      let Bk = 0;
                      for (const Xk of Rk) Bk += Math.max(0, (ak.width + Xk.width) / 2 + 4 - Math.abs(Fk - Xk.x)) * Math.max(0, (ak.height + Xk.height) / 2 + 4 - Math.abs(kk - Xk.y));
                      const tk = (Fk - ak.x) ** 2 + (kk - ak.y) ** 2;
                      (Bk < dk || Bk === dk && tk < sk) && (wk = {
                        ...ak,
                        x: Fk,
                        y: kk
                      }, dk = Bk, sk = tk)
                    }
                  Rk.push(wk)
                }
                return Rk
              }(bk, kk, Bk)) {
              const kk = wk.get(Fk.id);
              kk.style.left = `${Fk.x}px`, kk.style.top = `${Fk.y}px`
            }
          };
        bk();
        const wk = new ResizeObserver(bk);
        wk.observe(tk);
        for (const kk of ak) wk.observe(kk);
        return () => {
          wk.disconnect()
        }
      }), [kk, Fk, Bk, Rk])
    }
    const xt = {
        zoom: 1,
        x: 0,
        y: 0
      },
      jt = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function lt(kk, Fk, Bk) {
      return Math.min(Bk, Math.max(Fk, kk))
    }

    function nt(kk, Fk, Bk) {
      const Rk = Math.min(1, Bk * Fk / kk),
        tk = Math.min(1, kk / (Bk * Fk));
      return {
        x0: (1 - Rk) / 2,
        y0: (1 - tk) / 2,
        x1: (1 + Rk) / 2,
        y1: (1 + tk) / 2
      }
    }

    function It(kk, Fk, Bk, Rk) {
      const tk = Fk * (Rk - Bk);
      if (tk <= 1) return .5 - Fk * (Bk + Rk) / 2;
      const ak = .45 * Math.min(1, tk - 1);
      return lt(kk, 1 - Fk * Rk - ak, ak - Fk * Bk)
    }

    function Qt(kk, Fk) {
      const Bk = lt(kk.zoom, 1, 12);
      return {
        zoom: Bk,
        x: It(kk.x, Bk, Fk.x0, Fk.x1),
        y: It(kk.y, Bk, Fk.y0, Fk.y1)
      }
    }

    function ka(kk, Fk, Bk, Rk) {
      let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : jt;
      const ak = lt(kk.zoom * Fk, 1, 12),
        Xk = ak / kk.zoom;
      return Qt({
        zoom: ak,
        x: Bk - (Bk - kk.x) * Xk,
        y: Rk - (Rk - kk.y) * Xk
      }, tk)
    }

    function Fa(kk, Fk, Bk, Rk) {
      const [tk, ak] = (0, Sk.useState)(xt);
      (0, Sk.useEffect)((() => {
        ak(xt)
      }), [Bk]), (0, Sk.useEffect)((() => {
        const Bk = kk.current;
        if (!Fk || !Bk) return;
        const tk = () => nt(Bk.clientWidth, Bk.clientHeight, Rk),
          Xk = kk => {
            const Fk = Bk.getBoundingClientRect();
            return {
              x: (kk.clientX - Fk.left) / Fk.width,
              y: (kk.clientY - Fk.top) / Fk.height
            }
          },
          bk = new Map;
        let wk = {
            x: 0,
            y: 0
          },
          dk = !1,
          sk = 0;
        const Vk = kk => {
            kk.preventDefault();
            const Fk = kk.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * kk.deltaY : kk.deltaY,
              Bk = Xk(kk);
            ak((kk => ka(kk, Math.exp(.0015 * -Fk), Bk.x, Bk.y, tk())))
          },
          Jk = kk => {
            "mouse" === kk.pointerType && 0 !== kk.button || (bk.set(kk.pointerId, Xk(kk)), 1 === bk.size && (wk = {
              x: kk.clientX,
              y: kk.clientY
            }, dk = !1), sk = 0)
          },
          Ak = kk => {
            const Fk = bk.get(kk.pointerId);
            if (!Fk) return;
            const Rk = Xk(kk);
            if (bk.set(kk.pointerId, Rk), 2 === bk.size) {
              const [kk, Fk] = [...bk.values()], Bk = Math.hypot(kk.x - Fk.x, kk.y - Fk.y);
              if (sk > 0) {
                const Rk = Bk / sk;
                ak((Bk => ka(Bk, Rk, (kk.x + Fk.x) / 2, (kk.y + Fk.y) / 2, tk())))
              }
              return sk = Bk, void(dk = !0)
            }!dk && Math.hypot(kk.clientX - wk.x, kk.clientY - wk.y) < 4 || (dk || (dk = !0, Bk.setPointerCapture(kk.pointerId)), ak((kk => function(kk, Fk, Bk) {
              let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : jt;
              return Qt({
                zoom: kk.zoom,
                x: kk.x + Fk,
                y: kk.y + Bk
              }, Rk)
            }(kk, Rk.x - Fk.x, Rk.y - Fk.y, tk()))))
          },
          ek = kk => {
            bk.delete(kk.pointerId), sk = 0
          },
          yk = kk => {
            dk && (kk.stopPropagation(), kk.preventDefault(), dk = !1)
          },
          fk = new ResizeObserver((() => {
            ak((kk => Qt(kk, tk())))
          }));
        return fk.observe(Bk), Bk.addEventListener("wheel", Vk, {
          passive: !1
        }), Bk.addEventListener("pointerdown", Jk), Bk.addEventListener("pointermove", Ak), Bk.addEventListener("pointerup", ek), Bk.addEventListener("pointercancel", ek), Bk.addEventListener("click", yk, !0), () => {
          fk.disconnect(), Bk.removeEventListener("wheel", Vk), Bk.removeEventListener("pointerdown", Jk), Bk.removeEventListener("pointermove", Ak), Bk.removeEventListener("pointerup", ek), Bk.removeEventListener("pointercancel", ek), Bk.removeEventListener("click", yk, !0)
        }
      }), [kk, Fk, Bk, Rk]);
      return {
        view: tk,
        zoomBy: Fk => {
          const Bk = kk.current;
          Bk && ak((kk => ka(kk, Fk, .5, .5, nt(Bk.clientWidth, Bk.clientHeight, Rk))))
        }
      }
    }

    function Ba(kk) {
      var Fk, Bk, Rk, tk;
      let {
        controller: ak,
        navigation: Xk
      } = kk;
      const bk = (0, Mt.g)(Jk, ak.getSnapshot()),
        {
          t: wk
        } = (0, ut.x)(),
        dk = Ct(),
        sk = bk.presentation,
        Vk = (0, Sk.useRef)(null),
        Ak = (0, Sk.useRef)(null),
        ek = Boolean(bk.open && (null === sk || void 0 === sk ? void 0 : sk.local) && sk.background),
        yk = Fa(Vk, ek, `${bk.open}|${bk.tab}|${null===sk||void 0===sk||null===(Fk=sk.background)||void 0===Fk?void 0:Fk.geometryKey}`, null !== (Bk = null === sk || void 0 === sk || null === (Rk = sk.background) || void 0 === Rk ? void 0 : Rk.ratio) && void 0 !== Bk ? Bk : 2);
      if (Kt(Ak, sk, bk.open, yk.view.zoom), !sk || !bk.open) return null;
      const fk = sk.local ? sk.background : null,
        mk = {
          "--map-ratio": String(null !== (tk = null === fk || void 0 === fk ? void 0 : fk.ratio) && void 0 !== tk ? tk : 2),
          backgroundColor: null === fk || void 0 === fk ? void 0 : fk.colour
        },
        Wk = {
          "--map-zoom": String(yk.view.zoom),
          transform: `translate(${100*yk.view.x}%, ${100*yk.view.y}%) scale(${yk.view.zoom})`
        };
      return (0, gt.jsx)(Pt.e, {
        show: bk.open,
        close: ak.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gt.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: dk,
          onKeyDown: qt,
          children: [(0, gt.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, gt.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, gt.jsx)("h2", {
                id: "skyblockMapTitle",
                children: wk("skyblockGame:map")
              }), sk.minimap && (0, gt.jsx)("p", {
                children: sk.minimap.caption
              })]
            }), (0, gt.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((kk => (0, gt.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": kk === bk.tab ? "true" : void 0,
                className: ot()({
                  Selected: kk === bk.tab
                }),
                "aria-pressed": kk === bk.tab,
                onClick: () => {
                  ak.selectTab(kk)
                },
                children: wk("local" === kk ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, kk)))
            }), (0, gt.jsx)(ht.k, {
              padIgnore: !0,
              onClick: ak.dismiss
            })]
          }), (0, gt.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, gt.jsxs)("div", {
              ref: Vk,
              className: ot()("SkyblockMapCanvas", {
                Local: sk.local,
                Overview: !sk.local,
                Zoomed: yk.view.zoom > 1
              }),
              style: mk,
              children: [(0, gt.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: ek ? Wk : void 0,
                children: (0, gt.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: Ak,
                  children: [fk && (0, gt.jsx)(zt, {
                    className: "SkyblockMapTerrain",
                    imageKey: fk.imageKey,
                    fallbackImageKey: fk.fallbackImageKey,
                    geometryKey: fk.geometryKey,
                    alt: fk.label
                  }), sk.local && (0, gt.jsx)(pt, {
                    mount: Xk.display.mountMapSearchArea
                  }), !sk.local && (0, gt.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: sk.connections.map((kk => (0, gt.jsx)("line", {
                      className: ot()({
                        Explored: kk.explored
                      }),
                      x1: kk.start[0],
                      y1: kk.start[1],
                      x2: kk.end[0],
                      y2: kk.end[1]
                    }, kk.id)))
                  }), sk.points.map((kk => {
                    const Fk = !sk.local && kk.thumbnail ? rt[kk.thumbnail] : void 0;
                    return (0, gt.jsxs)("div", {
                      className: ot()("SkyblockMapNode", {
                        Current: kk.current
                      }),
                      style: {
                        left: `${kk.position[0]}%`,
                        top: `${kk.position[1]}%`
                      },
                      children: [(0, gt.jsxs)(ht.g, {
                        className: ot()("SkyblockMapPin", {
                          Unknown: !kk.visited,
                          Current: kk.current
                        }),
                        disabled: bk.pending,
                        onClick: () => {
                          ak.travel(kk.travelKind, kk.travelId)
                        },
                        children: [Fk && (0, gt.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: Fk,
                          alt: ""
                        }), !Fk && (0, gt.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, gt.jsx)(ct, {
                            icon: kk.icon
                          })
                        }), (0, gt.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: kk.name
                        })]
                      }), kk.current && (0, gt.jsx)("span", {
                        className: ot()("SkyblockMapHereBadge", {
                          Above: kk.position[1] > 50
                        }),
                        children: wk("skyblockGame:mapYouAreHere")
                      })]
                    }, kk.id)
                  })), sk.portals.map((kk => (0, gt.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${kk.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${kk.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, gt.jsxs)(ht.g, {
                      className: "SkyblockMapPin",
                      disabled: bk.pending,
                      onClick: () => {
                        ak.travel(kk.travelKind, kk.travelId)
                      },
                      children: [(0, gt.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: kk.colour
                        },
                        "aria-hidden": "true",
                        children: (0, gt.jsx)(ct, {
                          icon: kk.icon
                        })
                      }), (0, gt.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: kk.name
                      })]
                    })
                  }, kk.id))), sk.local && (0, gt.jsx)(Gt, {
                    controller: Xk
                  })]
                })
              }), ek && (0, gt.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, gt.jsx)("button", {
                  type: "button",
                  "aria-label": wk("skyblockGame:mapZoomIn"),
                  disabled: yk.view.zoom >= 12,
                  onClick: () => {
                    yk.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, gt.jsx)("button", {
                  type: "button",
                  "aria-label": wk("skyblockGame:mapZoomOut"),
                  disabled: yk.view.zoom <= 1,
                  onClick: () => {
                    yk.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, gt.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: bk.feedback
              })]
            })
          }), (0, gt.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [sk.progress && (0, gt.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, gt.jsx)("span", {
                children: sk.progress
              }), (0, gt.jsx)(Zt, {
                percent: sk.percent,
                label: sk.progress
              })]
            }), sk.noLandmarks && (0, gt.jsx)("span", {
              children: wk("skyblockGame:mapNoLandmarks")
            }), sk.canTravel && (0, gt.jsx)("span", {
              className: "SkyblockMapHint",
              children: wk("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function Ra(kk) {
      let {
        view: Fk,
        controller: Bk,
        navigation: Rk
      } = kk;
      const {
        t: tk
      } = (0, ut.x)(), {
        isTouchScreen: ak
      } = (0, Lt.h)(["isTouchScreen"]);
      return (0, gt.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": tk("skyblockGame:mapLocal"),
        children: [ak && (0, gt.jsx)(ht.g, {
          className: "SkyblockMinimapOpen",
          onClick: Bk.showLocal,
          children: tk("skyblockGame:map")
        }), (0, gt.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: Fk.colour
          },
          children: [(0, gt.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: Rk.display.mountTerrain,
            style: {
              width: Fk.width,
              height: Fk.height
            },
            children: [(0, gt.jsx)(zt, {
              imageKey: Fk.imageKey,
              fallbackImageKey: Fk.fallbackImageKey,
              geometryKey: Fk.geometryKey,
              alt: Fk.label
            }), (0, gt.jsx)(pt, {
              mount: Rk.display.mountMinimapSearchArea
            }), Fk.markers.map((kk => (0, gt.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${kk.position[0]}%`,
                top: `${kk.position[1]}%`,
                color: kk.colour
              },
              title: kk.name,
              children: (0, gt.jsx)(ct, {
                icon: kk.icon
              })
            }, kk.id)))]
          }), (0, gt.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: tk("skyblockGame:mapYouAreHere"),
            children: (0, gt.jsx)(ct, {
              icon: "player"
            })
          })]
        }), (0, gt.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: Fk.caption
        })]
      })
    }

    function ta(kk) {
      let {
        controller: Fk
      } = kk;
      return (0, gt.jsxs)("div", {
        className: "SkyblockCompass",
        ref: Fk.display.mountCompass,
        children: [(0, gt.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, gt.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, gt.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function aa(kk) {
      let {
        controller: Fk,
        surface: Bk
      } = kk;
      const {
        t: Rk
      } = (0, ut.x)(), tk = (0, Mt.g)(XB, Fk.getSnapshot()), ak = Ct();
      return tk.enabled ? (0, gt.jsxs)(gt.Fragment, {
        children: ["hud" === Bk && (0, gt.jsx)(Ot.g, {
          placement: "statBars",
          children: tk.hud && (0, gt.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": tk.hud.colour
            },
            children: [(0, gt.jsx)(Zt, {
              percent: tk.hud.skill.percent,
              label: tk.hud.skill.xp,
              levelUpToken: tk.hud.levelUpToken,
              colour: tk.hud.colour
            }), (0, gt.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, gt.jsxs)("span", {
                children: [tk.hud.skill.label, " \xb7 ", tk.hud.skill.level]
              }), (0, gt.jsx)("span", {
                children: tk.hud.gain
              })]
            })]
          })
        }), "hud" === Bk && (0, gt.jsx)(Ot.g, {
          children: tk.hud && (0, gt.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, gt.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, gt.jsx)("strong", {
                children: tk.hud.skill.label
              }), (0, gt.jsx)("span", {
                children: tk.hud.gain
              })]
            }), (0, gt.jsx)(Zt, {
              percent: tk.hud.skill.percent,
              label: tk.hud.skill.xp,
              levelUpToken: tk.hud.levelUpToken,
              colour: tk.hud.colour
            }), (0, gt.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, gt.jsx)("span", {
                children: tk.hud.skill.level
              }), (0, gt.jsx)("span", {
                children: tk.hud.skill.xp
              })]
            })]
          })
        }), "menu" === Bk && (0, gt.jsx)(Pt.e, {
          show: tk.open,
          close: Fk.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, gt.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: ak,
            onKeyDown: qt,
            children: [(0, gt.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, gt.jsxs)("div", {
                children: [(0, gt.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: Rk("skyblockGame:skills")
                }), (0, gt.jsx)("p", {
                  children: Rk("skyblockGame:skillsIntro")
                })]
              }), (0, gt.jsx)(ht.k, {
                padIgnore: !0,
                onClick: Fk.dismiss
              })]
            }), (0, gt.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, gt.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: tk.skills.map((kk => (0, gt.jsxs)(ht.g, {
                  className: ot()("SkyblockSkillCard", {
                    Selected: kk.selected
                  }),
                  ariaPressed: kk.selected,
                  onClick: () => {
                    Fk.select(kk.id)
                  },
                  children: [(0, gt.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, gt.jsx)(St.e, {
                      itemName: kk.icon,
                      amount: 0
                    })
                  }), (0, gt.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, gt.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, gt.jsx)("strong", {
                        children: kk.label
                      }), (0, gt.jsx)("span", {
                        children: kk.level
                      })]
                    }), (0, gt.jsx)(Zt, {
                      percent: kk.percent,
                      label: `${kk.label}: ${kk.xp}`
                    }), (0, gt.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: kk.xp
                    })]
                  })]
                }, kk.id)))
              }), tk.detail && (0, gt.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, gt.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, gt.jsx)(St.e, {
                    itemName: tk.detail.icon,
                    amount: 0
                  })
                }), (0, gt.jsx)("h3", {
                  children: tk.detail.label
                }), (0, gt.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: tk.detail.level
                }), (0, gt.jsx)("p", {
                  children: tk.detail.description
                }), (0, gt.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, gt.jsx)("strong", {
                    children: Rk("skyblockGame:currentBenefit")
                  }), (0, gt.jsx)("span", {
                    children: tk.detail.benefit
                  })]
                }), (0, gt.jsx)(Zt, {
                  percent: tk.detail.percent,
                  label: tk.detail.xp
                }), (0, gt.jsx)("p", {
                  children: tk.detail.xp
                }), (0, gt.jsx)("h4", {
                  children: Rk("skyblockGame:earnXp")
                }), (0, gt.jsx)("ul", {
                  children: tk.detail.sources.map((kk => (0, gt.jsx)("li", {
                    children: kk
                  }, kk)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var Xa = Bk(1312),
      ba = Bk(4566),
      wa = Bk(279);

    function da(kk) {
      let {
        item: Fk
      } = kk;
      return (0, gt.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, gt.jsx)(St.e, {
          itemName: Fk,
          amount: 0
        })
      })
    }

    function sa(kk) {
      let {
        name: Fk,
        percent: Bk,
        progress: Rk
      } = kk;
      return (0, gt.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, gt.jsx)(Zt, {
          percent: Bk,
          label: `${(0,wa.qb)(Fk)}: ${Rk}`
        }), (0, gt.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: Rk
        })]
      })
    }

    function Va(kk) {
      let {
        subquests: Fk,
        showDescriptions: Bk = !1
      } = kk;
      return (0, gt.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: Fk.map((kk => {
          const Fk = Bk && "completed" === kk.status,
            Rk = (0, gt.jsxs)("li", {
              className: ot()("SkyblockQuestStep", kk.status, {
                JustFinished: kk.justFinished,
                JustUnlocked: kk.justUnlocked
              }),
              tabIndex: Fk ? 0 : void 0,
              children: [null !== kk.iconItem && (0, gt.jsx)(da, {
                item: kk.iconItem
              }), null === kk.iconItem && (0, gt.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === kk.status ? "\u2713" : "skipped" === kk.status ? "\u2212" : "\u25cb"
              }), (0, gt.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, gt.jsx)("strong", {
                  children: (0, gt.jsx)(ba.c, {
                    text: kk.name
                  })
                }), Bk && !Fk && (0, gt.jsx)("span", {
                  children: (0, gt.jsx)(ba.c, {
                    text: kk.description
                  })
                }), null !== kk.barPercent && (0, gt.jsx)(sa, {
                  name: kk.name,
                  percent: kk.barPercent,
                  progress: kk.progress
                }), null === kk.barPercent && !Fk && (0, gt.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: kk.statusLabel
                })]
              })]
            }, kk.id);
          return Fk ? (0, gt.jsx)(Xa.d, {
            delayShow: 200,
            tooltipInner: (0, gt.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, gt.jsx)("span", {
                children: (0, gt.jsx)(ba.c, {
                  text: kk.description
                })
              }), (0, gt.jsx)("strong", {
                children: kk.statusLabel
              })]
            }),
            children: Rk
          }, kk.id) : Rk
        }))
      })
    }

    function Ja(kk) {
      let {
        quest: Fk,
        select: Bk
      } = kk;
      const {
        t: Rk
      } = (0, ut.x)(), tk = Fk.focusStep;
      return (0, gt.jsxs)(ht.g, {
        className: ot()("SkyblockQuestCard", {
          Selected: Fk.selected,
          Tracked: Fk.tracked
        }),
        onClick: () => {
          Bk(Fk.id)
        },
        children: [(0, gt.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, gt.jsx)("strong", {
            children: (0, gt.jsx)(ba.c, {
              text: Fk.name
            })
          }), Fk.tracked && (0, gt.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: Rk("skyblockGame:currentQuest")
          })]
        }), tk && (0, gt.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== tk.iconItem && (0, gt.jsx)(da, {
            item: tk.iconItem
          }), (0, gt.jsx)(sa, {
            name: tk.name,
            percent: tk.barPercent,
            progress: tk.progress
          })]
        }), (0, gt.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: Fk.progress
        })]
      })
    }

    function Aa(kk) {
      let {
        controller: Fk,
        surface: Bk
      } = kk;
      const Rk = (0, Mt.g)(sB, Fk.getSnapshot()),
        {
          t: tk
        } = (0, ut.x)(),
        ak = Ct();
      return Rk.enabled ? (0, gt.jsxs)(gt.Fragment, {
        children: ["hud" === Bk && (0, gt.jsx)(gt.Fragment, {
          children: Rk.tracked && (0, gt.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: dB,
            children: (0, gt.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [Rk.trackedStepPulse > 0 && (0, gt.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, Rk.trackedStepPulse), (0, gt.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: tk("skyblockGame:currentQuest")
              }), (0, gt.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, gt.jsx)("strong", {
                  children: (0, gt.jsx)(ba.c, {
                    text: Rk.tracked.name
                  })
                }), null !== Rk.tracked.clock && (0, gt.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: Rk.tracked.clock
                })]
              }), (0, gt.jsx)(Va, {
                subquests: Rk.tracked.subquests
              })]
            })
          })
        }), "menu" === Bk && (0, gt.jsx)(Pt.e, {
          show: Rk.open,
          close: Fk.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, gt.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: ak,
            onKeyDown: qt,
            children: [(0, gt.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, gt.jsx)("div", {
                children: (0, gt.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: tk("skyblockGame:quests")
                })
              }), (0, gt.jsx)(ht.k, {
                padIgnore: !0,
                onClick: Fk.dismiss
              })]
            }), (0, gt.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, gt.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, gt.jsx)("h3", {
                  children: tk("skyblockGame:current")
                }), 0 === Rk.active.length && (0, gt.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: tk("skyblockGame:noActiveQuests")
                }), Rk.active.map((kk => (0, gt.jsx)(Ja, {
                  quest: kk,
                  select: Fk.select
                }, kk.id))), (0, gt.jsx)("h3", {
                  children: (0, gt.jsxs)("button", {
                    type: "button",
                    className: ot()("SkyblockQuestSectionToggle", {
                      Expanded: Rk.completedExpanded
                    }),
                    "aria-expanded": Rk.completedExpanded,
                    onClick: Fk.toggleCompleted,
                    children: [(0, gt.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), tk("skyblockGame:completed"), (0, gt.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: Rk.completed.length
                    })]
                  })
                }), Rk.completedExpanded && 0 === Rk.completed.length && (0, gt.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: tk("skyblockGame:noCompletedQuests")
                }), Rk.completedExpanded && Rk.completed.map((kk => (0, gt.jsx)(Ja, {
                  quest: kk,
                  select: Fk.select
                }, kk.id)))]
              }), Rk.detail && (0, gt.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [Rk.detail.completed && (0, gt.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: tk("skyblockGame:completedQuest")
                }), (0, gt.jsx)("h3", {
                  children: (0, gt.jsx)(ba.c, {
                    text: Rk.detail.name
                  })
                }), (0, gt.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, gt.jsx)(ba.c, {
                    text: Rk.detail.description
                  })
                }), (0, gt.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [Rk.detail.progress, null !== Rk.detail.clock && (0, gt.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: Rk.detail.clock
                  })]
                }), (0, gt.jsx)(Va, {
                  subquests: Rk.detail.subquests,
                  showDescriptions: !0
                }), Rk.detail.tracked && (0, gt.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: Rk.detail.trackLabel
                }), !Rk.detail.completed && !Rk.detail.tracked && (0, gt.jsx)(ht.o, {
                  onClick: Fk.trackSelected,
                  disabled: !Rk.detail.canTrack,
                  children: Rk.detail.trackLabel
                }), Rk.detail.canViewDialogue && (0, gt.jsx)(ht.g, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: Fk.viewDialogue,
                  children: tk("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var ea = Bk(1028),
      ya = Bk(2466);

    function fa(kk, Fk, Bk, Rk, tk) {
      const ak = kk => "linear" === tk ? kk : {
          Ha: tk,
          point: kk
        },
        Xk = {};
      for (const [bk, wk] of Rk)
        for (const [Fk, Bk] of Object.entries(kk(bk, wk, ak))) Xk[Fk] ??= {
          timeline: []
        }, Xk[Fk].timeline.push(Bk);
      return {
        La: Fk,
        loop: Bk,
        Ea: Xk
      }
    }
    const ma = .547,
      Wa = .022,
      va = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      ia = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function Ya(kk, Fk, Bk) {
      const {
        drop: Rk = 0,
        shift: tk = 0,
        torso: ak = 0,
        nod: Xk = 0,
        tilt: bk = 0,
        legs: wk = [0, 0],
        arms: dk = 0,
        spread: sk = 0
      } = Fk, Vk = ma * Math.cos(ak) - Wa * Math.sin(ak), Jk = ma * Math.sin(ak) + Wa * Math.cos(ak), Ak = Bk([0, -Rk, tk]);
      return {
        LowerBody: {
          timeFraction: kk,
          position: Ak,
          rotation: Bk([0, 0, 0])
        },
        UpperBody: {
          timeFraction: kk,
          position: Ak,
          rotation: Bk([ak, 0, bk])
        },
        HeadMesh: {
          timeFraction: kk,
          position: Bk([0, Vk - ma - Rk, Jk - Wa + tk]),
          rotation: Bk([ak + Xk, 0, bk])
        },
        LegLeftMesh: {
          timeFraction: kk,
          rotation: Bk([wk[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: kk,
          rotation: Bk([wk[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: kk,
          rotation: Bk([dk, 0, sk])
        },
        ArmRightMesh: {
          timeFraction: kk,
          rotation: Bk([dk, 0, -sk])
        }
      }
    }

    function oa(kk, Fk, Bk) {
      return fa(Ya, kk, Fk, Bk, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function La(kk) {
      return "number" === typeof kk ? [kk, kk] : kk
    }

    function Oa(kk, Fk, Bk) {
      const {
        rise: Rk = 0,
        shift: tk = 0,
        torso: ak = 0,
        twist: Xk = 0,
        tilt: bk = 0,
        nod: wk = 0,
        cock: dk = 0,
        arms: sk = 0,
        spread: Vk = 0
      } = Fk, [Jk, Ak] = La(sk), [ek, yk] = La(Vk);
      return {
        TorsoNode: {
          timeFraction: kk,
          position: Bk([0, Rk, tk]),
          rotation: Bk([ak, Xk, bk])
        },
        HeadMesh: {
          timeFraction: kk,
          rotation: Bk([wk, 0, dk])
        },
        ArmLeftMesh: {
          timeFraction: kk,
          rotation: Bk([Jk, 0, ek])
        },
        ArmRightMesh: {
          timeFraction: kk,
          rotation: Bk([Ak, 0, -yk])
        }
      }
    }
    const Ea = [1.0625, -1, 0];

    function Sa(kk) {
      return "number" === typeof kk ? [kk, kk] : kk
    }

    function Na(kk, Fk, Bk) {
      const {
        drop: Rk = 0,
        shift: tk = 0,
        torso: ak = 0,
        tilt: Xk = 0,
        nod: bk = 0,
        cock: wk = 0,
        legs: dk = [0, 0],
        arms: sk = 0,
        spread: Vk = 0
      } = Fk, [Jk, Ak] = Sa(sk), [ek, yk] = Sa(Vk), fk = -ak, mk = -Xk, [Wk, vk, ik] = function(kk, Fk) {
        const [Bk, Rk, tk] = [-Ea[0], Ea[1], -Ea[2]], ak = Bk * Math.cos(Fk) - Rk * Math.sin(Fk), Xk = Bk * Math.sin(Fk) + Rk * Math.cos(Fk);
        return [ak - Bk, -(Xk * Math.cos(kk) - tk * Math.sin(kk) - Rk), Xk * Math.sin(kk) + tk * Math.cos(kk) - tk]
      }(fk, mk), Yk = Bk([0, -Rk, tk]);
      return {
        TorsoNode: {
          timeFraction: kk,
          position: Bk([Wk, vk - Rk, ik + tk]),
          rotation: Bk([fk, 0, mk])
        },
        HeadMesh: {
          timeFraction: kk,
          rotation: Bk([-bk, 0, -wk])
        },
        ArmLeftMesh: {
          timeFraction: kk,
          rotation: Bk([-Jk, 0, -ek])
        },
        ArmRightMesh: {
          timeFraction: kk,
          rotation: Bk([-Ak, 0, yk])
        },
        LegLeftMesh: {
          timeFraction: kk,
          position: Yk,
          rotation: Bk([-dk[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: kk,
          position: Yk,
          rotation: Bk([-dk[1], 0, 0])
        }
      }
    }
    var Ha = Bk(36813),
      ua = Bk(38118),
      Ma = Bk(38277);

    function ga(kk, Fk, Bk) {
      var Rk, tk;
      const ak = function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return kk + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - kk) * Bk
        },
        [Xk, bk] = null !== (Rk = kk.legs) && void 0 !== Rk ? Rk : [0, 0],
        [wk, dk] = null !== (tk = Fk.legs) && void 0 !== tk ? tk : [0, 0];
      return {
        drop: ak(kk.drop, Fk.drop),
        shift: ak(kk.shift, Fk.shift),
        torso: ak(kk.torso, Fk.torso),
        nod: ak(kk.nod, Fk.nod),
        tilt: ak(kk.tilt, Fk.tilt),
        legs: [ak(Xk, wk), ak(bk, dk)],
        arms: ak(kk.arms, Fk.arms),
        spread: ak(kk.spread, Fk.spread)
      }
    }
    const Ua = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      ca = oa(4400, !0, [
        [0, Ua],
        [.16, {
          ...Ua,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, Ua],
        [.44, {
          ...Ua,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, ga(Ua, va, .7)],
        [.66, ga(Ua, va, .78)],
        [.74, ga(Ua, ia, .65)],
        [.86, {
          ...Ua,
          drop: .14
        }],
        [1, Ua]
      ], "catmull-rom-spline"),
      Ga = {
        ...Ua,
        drop: .14,
        torso: .3,
        spread: .4
      },
      Ta = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      ra = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      Da = {
        caveGolem: ca,
        magmaGolem: oa(3600, !0, [
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
          [.52, ga(Ga, va, .9)],
          [.62, ga(Ga, ia, .8)],
          [.7, ga(Ga, ia, .45)],
          [.78, ga(Ga, ia, .85)],
          [.9, {
            ...Ga,
            drop: .17
          }],
          [1, Ga]
        ], "catmull-rom-spline"),
        frostWraith: function(kk, Fk, Bk) {
          return fa(Oa, kk, Fk, Bk, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, Ta],
          [.14, {
            ...Ta,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...Ta,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...Ta,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...Ta,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...Ta,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...Ta,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...Ta,
            rise: .16,
            tilt: -.04
          }],
          [1, Ta]
        ], "catmull-rom-spline"),
        tikiTerror: function(kk, Fk, Bk) {
          return fa(Na, kk, Fk, Bk, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, ra],
          [.16, {
            ...ra,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, ra],
          [.44, {
            ...ra,
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
            ...ra,
            drop: .1
          }],
          [1, ra]
        ], "catmull-rom-spline")
      },
      za = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      Pa = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      ha = Object.fromEntries(Object.entries(Da).map((kk => {
        let [Fk, Bk] = kk;
        return [Fk, (0, Ma.b)((0, Ha.c)(Bk), Fk)]
      })));

    function qa(kk) {
      const Fk = function(kk) {
        var Fk;
        const Bk = (0, ua.b)(kk).poseRig;
        return null !== (Fk = Pa[kk]) && void 0 !== Fk ? Fk : void 0 === Bk ? null : za[Bk]
      }(kk);
      return null === Fk ? null : ha[Fk]
    }

    function Ca(kk) {
      return {
        "--difficulty-colour": kk
      }
    }
    const Za = (0, Sk.lazy)((() => (0, ya.e)(Bk.e(192).then((() => Bk(40952))), (kk => kk.MobPreview))));

    function pa(kk) {
      var Fk, Bk, Rk;
      let {
        picker: tk,
        controller: ak
      } = kk;
      const {
        t: Xk
      } = (0, ut.x)(), bk = Ct(), {
        page: wk
      } = tk;
      return (0, gt.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: bk,
        onKeyDown: kk => {
          "ArrowLeft" === kk.key ? (kk.preventDefault(), kk.stopPropagation(), ak.previous()) : "ArrowRight" === kk.key ? (kk.preventDefault(), kk.stopPropagation(), ak.next()) : qt(kk)
        },
        style: Ca(wk.colour),
        children: [(0, gt.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, gt.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: tk.dungeonName
          }), (0, gt.jsx)(ht.k, {
            padIgnore: !0,
            onClick: ak.dismiss
          })]
        }), (0, gt.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, gt.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, gt.jsx)(ht.g, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !tk.canPrevious,
              onClick: ak.previous,
              children: (0, gt.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, gt.jsx)(ea.d, {
                  name: "angle-up"
                })
              })
            }), (0, gt.jsxs)("div", {
              className: ot()("SkyblockBossPickerBoss", {
                Locked: !wk.unlocked
              }),
              children: [null !== wk.bossMobType && (0, gt.jsx)(Sk.Suspense, {
                fallback: (0, gt.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, gt.jsx)(Za, {
                  className: "SkyblockBossPickerModel",
                  mobType: wk.bossMobType,
                  variation: wk.bossMobVariation,
                  animation: null !== (Fk = qa(wk.bossMobType)) && void 0 !== Fk ? Fk : void 0
                })
              }), null === wk.bossMobType && (0, gt.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, gt.jsx)(ht.g, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !tk.canNext,
              onClick: ak.next,
              children: (0, gt.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, gt.jsx)(ea.d, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, gt.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, gt.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [wk.beaten && (0, gt.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), wk.label]
            }), (0, gt.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (Bk = wk.bossName) && void 0 !== Bk ? Bk : "???"
            }), (0, gt.jsxs)("span", {
              className: ot()("SkyblockBossPickerRecord", {
                Locked: null !== wk.lockedHint
              }),
              children: [null !== wk.lockedHintHighlight && (0, gt.jsxs)(gt.Fragment, {
                children: [wk.lockedHintHighlight.before, (0, gt.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: Ca(wk.lockedHintHighlight.colour),
                  children: [null !== wk.lockedHintHighlight.icon && (0, gt.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, gt.jsx)(St.e, {
                      itemName: wk.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), wk.lockedHintHighlight.name]
                }), wk.lockedHintHighlight.after]
              }), null === wk.lockedHintHighlight && (null !== (Rk = wk.lockedHint) && void 0 !== Rk ? Rk : wk.summary)]
            })]
          }), (0, gt.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: tk.pages.map((kk => (0, gt.jsx)("span", {
              className: ot()("SkyblockBossPickerDot", {
                Current: kk.current,
                Locked: !kk.unlocked
              }),
              style: Ca(kk.colour)
            }, kk.difficulty)))
          }), (0, gt.jsx)(ht.v, {
            className: "SkyblockBossPickerFight",
            disabled: !wk.unlocked,
            onClick: ak.enter,
            children: Xk("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function Ka(kk) {
      let {
        dungeon: Fk,
        select: Bk
      } = kk;
      return (0, gt.jsxs)(ht.g, {
        className: ot()("SkyblockDungeonCard", {
          Selected: Fk.selected
        }),
        onClick: () => {
          Bk(Fk.id)
        },
        children: [(0, gt.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, gt.jsx)("strong", {
            children: Fk.name
          }), (0, gt.jsx)("span", {
            children: Fk.beatenSummary
          })]
        }), (0, gt.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: Fk.difficulties.map((kk => (0, gt.jsxs)("span", {
            className: ot()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: kk.beaten
            }),
            style: Ca(kk.colour),
            title: kk.summary,
            children: [kk.beaten && (0, gt.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), kk.label]
          }, kk.difficulty)))
        })]
      })
    }

    function xa(kk) {
      let {
        controller: Fk
      } = kk;
      const Bk = (0, Mt.g)(eB, Fk.getSnapshot()),
        {
          t: Rk
        } = (0, ut.x)(),
        tk = Ct();
      return Bk.enabled ? (0, gt.jsxs)(Pt.e, {
        show: Bk.open,
        close: Fk.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [Bk.picker && (0, gt.jsx)(pa, {
          picker: Bk.picker,
          controller: Fk
        }), !Bk.picker && (0, gt.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: tk,
          onKeyDown: qt,
          children: [(0, gt.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, gt.jsxs)("div", {
              children: [(0, gt.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: Rk("skyblockGame:dungeons")
              }), (0, gt.jsx)("p", {
                children: Rk("skyblockGame:dungeonsIntro")
              })]
            }), (0, gt.jsx)(ht.k, {
              padIgnore: !0,
              onClick: Fk.dismiss
            })]
          }), (0, gt.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, gt.jsx)("div", {
              className: "SkyblockDungeonList",
              children: Bk.dungeons.map((kk => (0, gt.jsx)(Ka, {
                dungeon: kk,
                select: Fk.select
              }, kk.id)))
            }), Bk.detail && (0, gt.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, gt.jsx)("h3", {
                children: Bk.detail.name
              }), (0, gt.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: Bk.detail.difficulties.map((kk => (0, gt.jsxs)("li", {
                  className: ot()("SkyblockDungeonRecord", {
                    Beaten: kk.beaten
                  }),
                  children: [(0, gt.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: Ca(kk.colour),
                    children: [kk.beaten && (0, gt.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), kk.label]
                  }), (0, gt.jsx)("span", {
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

    function ja(kk) {
      let {
        collection: Fk,
        select: Bk
      } = kk;
      return (0, gt.jsxs)(ht.g, {
        className: ot()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: Fk.selected,
          Locked: Fk.locked
        }),
        ariaPressed: Fk.selected,
        onClick: () => {
          Bk(Fk.id)
        },
        children: [(0, gt.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, gt.jsx)(St.e, {
            itemName: Fk.icon,
            amount: 0
          })
        }), (0, gt.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, gt.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, gt.jsx)("strong", {
              children: Fk.name
            }), (0, gt.jsx)("span", {
              children: Fk.tier
            })]
          }), (0, gt.jsx)(Zt, {
            percent: Fk.percent,
            label: `${Fk.name}: ${Fk.progress}`
          }), (0, gt.jsx)("span", {
            className: "SkyblockSkillXp",
            children: Fk.progress
          })]
        })]
      })
    }

    function la(kk) {
      let {
        collection: Fk
      } = kk;
      const {
        t: Bk
      } = (0, ut.x)();
      return (0, gt.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, gt.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, gt.jsx)(St.e, {
            itemName: Fk.icon,
            amount: 0
          })
        }), (0, gt.jsx)("h3", {
          children: Fk.name
        }), (0, gt.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: Fk.tier
        }), (0, gt.jsx)("p", {
          children: Fk.locked ? Bk("skyblockGame:collectionLocked") : Fk.count
        }), null !== Fk.nextReward && (0, gt.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, gt.jsx)("strong", {
            children: Bk("skyblockGame:collectionNextReward")
          }), (0, gt.jsx)("span", {
            children: Fk.nextReward
          })]
        }), (0, gt.jsx)(Zt, {
          percent: Fk.percent,
          label: Fk.progress
        }), (0, gt.jsx)("p", {
          children: Fk.progress
        })]
      })
    }

    function na(kk) {
      let {
        controller: Fk
      } = kk;
      const Bk = (0, Mt.g)(TB, Fk.getSnapshot()),
        {
          t: Rk
        } = (0, ut.x)(),
        tk = Ct();
      return Bk.enabled ? (0, gt.jsx)(Pt.e, {
        show: Bk.open,
        close: Fk.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gt.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: tk,
          onKeyDown: qt,
          children: [(0, gt.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, gt.jsxs)("div", {
              children: [(0, gt.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: Rk("skyblockGame:collections")
              }), (0, gt.jsxs)("p", {
                children: [Rk("skyblockGame:collectionsIntro"), " ", Bk.tiersUnlocked]
              })]
            }), (0, gt.jsx)(ht.k, {
              padIgnore: !0,
              onClick: Fk.dismiss
            })]
          }), (0, gt.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: Bk.categories.map((kk => (0, gt.jsxs)(ht.g, {
              className: ot()("SkyblockCollectionCategory", {
                Selected: kk.selected
              }),
              ariaPressed: kk.selected,
              padTabSelected: kk.selected,
              onClick: () => {
                Fk.selectCategory(kk.id)
              },
              children: [(0, gt.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, gt.jsx)(St.e, {
                  itemName: kk.icon,
                  amount: 0
                })
              }), (0, gt.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, gt.jsx)("strong", {
                  children: kk.label
                }), (0, gt.jsx)("span", {
                  children: kk.tiers
                })]
              })]
            }, kk.id)))
          }), (0, gt.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, gt.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: Bk.collections.map((kk => (0, gt.jsx)(ja, {
                collection: kk,
                select: Fk.select
              }, kk.id)))
            }), Bk.detail && (0, gt.jsx)(la, {
              collection: Bk.detail
            })]
          })]
        })
      }) : null
    }
    const Ia = ["completed", "active", "available", "locked"],
      Qa = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function kX(kk) {
      let {
        controller: Fk
      } = kk;
      const Bk = (0, Mt.g)(jB, Fk.getSnapshot()),
        {
          t: Rk
        } = (0, ut.x)(),
        tk = Ct();
      return Bk.enabled ? (0, gt.jsx)(Pt.e, {
        show: Bk.open,
        close: Fk.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gt.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: tk,
          onKeyDown: qt,
          children: [(0, gt.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, gt.jsxs)("div", {
              children: [(0, gt.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: Rk("skyblockDevQuests:title")
              }), (0, gt.jsx)("p", {
                children: Rk("skyblockDevQuests:intro")
              })]
            }), (0, gt.jsx)(ht.k, {
              onClick: Fk.dismiss
            })]
          }), (0, gt.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [Ia.map((kk => (0, gt.jsx)("span", {
              className: ot()("SkyblockQuestGraphLegendState", kk),
              children: Rk(`skyblockDevQuests:state_${kk}`)
            }, kk))), Qa.map((kk => (0, gt.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, gt.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, gt.jsx)("line", {
                  className: ot()("SkyblockQuestGraphEdge", kk),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), Rk(`skyblockDevQuests:edge_${kk}`)]
            }, kk)))]
          }), (0, gt.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, gt.jsxs)("div", {
              className: ot()("SkyblockQuestGraphCanvas", {
                Planning: Bk.planning
              }),
              style: {
                width: Bk.width,
                height: Bk.height
              },
              children: [(0, gt.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: Bk.width,
                height: Bk.height,
                "aria-hidden": "true",
                children: [(0, gt.jsx)("defs", {
                  children: (0, gt.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, gt.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), Bk.edges.map((kk => (0, gt.jsx)("path", {
                  className: ot()("SkyblockQuestGraphEdge", kk.kind, {
                    InPlan: kk.inPlan
                  }),
                  d: kk.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, kk.key)))]
              }), Bk.nodes.map((kk => (0, gt.jsxs)("button", {
                type: "button",
                className: ot()("SkyblockQuestGraphNode", kk.state, {
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
                children: [(0, gt.jsx)("strong", {
                  children: kk.name
                }), (0, gt.jsx)("span", {
                  children: kk.detail
                })]
              }, kk.id)))]
            })
          })]
        })
      }) : null
    }
    const FX = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      BX = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${wR}ms`,
        "--forge-duration": "2150ms"
      },
      RX = Array.from({
        length: 18
      }, ((kk, Fk) => ({
        "--ember-left": `${(4+92*(.618034*Fk%1)).toFixed(1)}%`,
        "--ember-size": 3 + Fk % 3 * 2 + "px",
        "--ember-drift": 14 * (Fk % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*Fk%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*Fk%8).toFixed(2)}s`
      })));

    function tX(kk) {
      if (kk.style.removeProperty("--part-size"), null === kk.parentElement || "wrap" === getComputedStyle(kk.parentElement).flexWrap) return;
      const Fk = [...kk.children],
        Bk = getComputedStyle(kk),
        Rk = parseFloat(Bk.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        tk = (kk.clientHeight - parseFloat(Bk.rowGap) * (Fk.length - 1)) / Fk.length,
        ak = Fk.map((kk => {
          const Fk = getComputedStyle(kk),
            Bk = kk.querySelector("h3"),
            ak = kk.querySelector(".SkyblockForgeParts");
          if (null === Bk || null === ak) return Rk;
          const Xk = tk - parseFloat(Fk.paddingTop) - parseFloat(Fk.paddingBottom) - Bk.offsetHeight - parseFloat(getComputedStyle(Bk).marginBottom),
            bk = parseFloat(getComputedStyle(ak).columnGap),
            wk = ak.children.length;
          let dk = 0;
          for (let Rk = 1; Rk <= wk; Rk++) {
            const kk = Math.ceil(wk / Rk);
            dk = Math.max(dk, Math.min((ak.clientWidth - bk * (Rk - 1)) / Rk, (Xk - bk * (kk - 1)) / kk))
          }
          return dk
        }));
      kk.style.setProperty("--part-size", `${Math.floor(Math.max(Rk,Math.min(...ak)))}px`)
    }

    function aX(kk) {
      var Fk, Bk, Rk, ak, Xk;
      let {
        controller: bk
      } = kk;
      const wk = (0, Mt.g)(yR, bk.getSnapshot()),
        {
          t: dk
        } = (0, ut.x)(),
        sk = Ct(),
        Vk = function() {
          const kk = (0, Sk.useRef)(null),
            Fk = (0, Sk.useRef)(null);
          return (0, Sk.useLayoutEffect)((() => {
            null !== kk.current && tX(kk.current)
          })), (0, Sk.useCallback)((Bk => {
            var Rk;
            null === (Rk = Fk.current) || void 0 === Rk || Rk.disconnect(), Fk.current = null, kk.current = Bk, null !== Bk && (Fk.current = new ResizeObserver((() => {
              tX(Bk)
            })), Fk.current.observe(Bk))
          }), [])
        }(),
        Jk = function(kk) {
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
        }(null === (Fk = wk.preview) || void 0 === Fk ? void 0 : Fk.name),
        Ak = (0, Sk.useRef)(null),
        ek = (0, Sk.useRef)({}),
        yk = wk.forging,
        fk = null !== (Bk = null === yk || void 0 === yk ? void 0 : yk.preview.tier) && void 0 !== Bk ? Bk : 0,
        mk = null !== (Rk = null === yk || void 0 === yk ? void 0 : yk.preview.named) && void 0 !== Rk && Rk,
        Wk = (0, Sk.useMemo)((() => {
          return null === yk ? null : {
            flames: (kk = fk, Fk = mk, Array.from({
              length: 26 + 6 * kk + (Fk ? 20 : 0)
            }, ((kk, Fk) => {
              const Bk = Fk < 6,
                Rk = Math.random() * Math.PI * 2,
                tk = Bk ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                ak = Math.cos(Rk) * tk,
                Xk = Math.sin(Rk) * tk - 2 - 3 * Math.random(),
                bk = Math.random(),
                [wk, dk, sk] = Bk ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : bk < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : bk < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [bk < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": wk,
                "--x0": `${(.15*ak).toFixed(2)}rem`,
                "--y0": `${(.15*Xk).toFixed(2)}rem`,
                "--x": `${ak.toFixed(2)}rem`,
                "--y": `${Xk.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${dk.toFixed(2)}rem`,
                "--duration": `${Math.round(sk)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: VR(fk, mk)
          };
          var kk, Fk
        }), [null === yk || void 0 === yk ? void 0 : yk.id]);
      if (!wk.enabled) return null;
      const vk = wk.preview,
        ik = wk.arriving,
        Yk = null !== ik && !ik.sameSword,
        Lk = null !== vk && (0, gt.jsx)(St.e, {
          itemName: vk.baseSword,
          amount: 0,
          enchantmentTier: vk.enchantmentTier
        });
      return (0, gt.jsx)(Pt.e, {
        show: wk.open,
        close: bk.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gt.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: sk,
          onKeyDown: qt,
          children: [(0, gt.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: RX.map(((kk, Fk) => (0, gt.jsx)("span", {
              style: kk
            }, Fk)))
          }), (0, gt.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, gt.jsxs)("div", {
              children: [(0, gt.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: dk("skyblockGame:forgeTitle")
              }), (0, gt.jsx)("p", {
                children: dk("skyblockGame:forgeIntro")
              })]
            }), (0, gt.jsx)(ht.k, {
              onClick: bk.dismiss
            })]
          }), (0, gt.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, gt.jsx)("div", {
              ref: Vk,
              className: ot()("SkyblockForgeSlots", {
                Locked: null !== yk
              }),
              children: wk.slots.map((kk => (0, gt.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, gt.jsx)("h3", {
                  children: kk.label
                }), (0, gt.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: kk.parts.map((Fk => (0, gt.jsx)("button", {
                    type: "button",
                    className: ot()("SkyblockForgePart", {
                      Selected: Fk.selected,
                      Missing: Fk.placeholder
                    }),
                    disabled: Fk.placeholder,
                    title: Fk.placeholder ? dk("skyblockGame:forgePickParts") : Fk.itemName,
                    "aria-pressed": Fk.selected,
                    onClick: () => {
                      bk.select(kk.kind, Fk.material)
                    },
                    children: (0, gt.jsx)(St.e, {
                      itemName: Fk.itemName,
                      amount: Fk.owned
                    })
                  }, Fk.material)))
                })]
              }, kk.kind)))
            }), (0, gt.jsxs)("div", {
              className: ot()("SkyblockForgeAnvil", {
                Named: null === vk || void 0 === vk ? void 0 : vk.named
              }),
              style: {
                "--tier": null === vk ? "transparent" : tk.tb[vk.enchantmentTier]
              },
              children: [(0, gt.jsxs)("div", {
                className: ot()("SkyblockForgeAltar", {
                  Forging: null !== yk
                }),
                style: null === yk ? void 0 : BX,
                children: [(0, gt.jsxs)("div", {
                  className: ot()("SkyblockForgeMount", {
                    Arrive: null !== ik
                  }),
                  children: [null === vk && (0, gt.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, gt.jsx)(St.e, {
                      itemName: wk.unformedSword,
                      amount: 0
                    })
                  }), null !== vk && (0, gt.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== vk && null === yk && (0, gt.jsx)("div", {
                    ref: Ak,
                    className: "SkyblockForgeFloat",
                    children: (0, gt.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: Lk
                    })
                  }), null !== vk && (0, gt.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: sR.map(((kk, Fk) => (0, gt.jsx)("span", {
                      className: ot()({
                        Rune: "" !== kk.rune
                      }),
                      style: kk.style,
                      children: kk.rune
                    }, Fk)))
                  }), null !== yk && null !== Wk && (0, gt.jsxs)(gt.Fragment, {
                    children: [(0, gt.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, gt.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: Wk.flames.map(((kk, Fk) => (0, gt.jsx)("span", {
                        style: kk
                      }, Fk)))
                    }), (0, gt.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: ek.current,
                      children: (0, gt.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: Lk
                      })
                    }), (0, gt.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, gt.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (fk >= 4 || mk) && (0, gt.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, gt.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: Wk.sparks.map(((kk, Fk) => (0, gt.jsx)("span", {
                        style: kk
                      }, Fk)))
                    }), (0, gt.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, gt.jsx)("p", {
                  className: ot()("SkyblockForgeStatus", null === (ak = wk.status) || void 0 === ak ? void 0 : ak.tone),
                  children: null === (Xk = wk.status) || void 0 === Xk ? void 0 : Xk.text
                })]
              }), null === vk && (0, gt.jsx)("p", {
                className: ot()("SkyblockForgeName Waiting", {
                  ArriveText: Yk
                }),
                children: dk(wk.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== vk && (0, gt.jsx)("h3", {
                ref: Jk,
                className: ot()("SkyblockForgeName", {
                  ArriveText: Yk
                }),
                title: vk.name,
                children: vk.name
              }), (null === vk || void 0 === vk ? void 0 : vk.named) && (0, gt.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: dk("skyblockGame:forgeSecret")
              }), (0, gt.jsxs)(ht.v, {
                className: "SkyblockForgeButton",
                disabled: !wk.canForge,
                title: null === vk ? void 0 : dk("skyblockGame:forgeCoalOwned", {
                  owned: String(wk.coalOwned)
                }),
                onClick: () => {
                  ek.current = function(kk) {
                    const Fk = null === kk ? "none" : getComputedStyle(kk).transform,
                      Bk = new DOMMatrixReadOnly("none" === Fk ? void 0 : Fk);
                    return {
                      "--settle-y": `${Bk.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(Bk.b,Bk.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(Ak.current), eR(), bk.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [dk("skyblockGame:forgeButton"), null !== vk && (0, gt.jsxs)("span", {
                  className: ot()("SkyblockForgeCost", {
                    Short: vk.coalShort
                  }),
                  children: [(0, gt.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, gt.jsx)(St.e, {
                      itemName: kR.b,
                      amount: 0
                    })
                  }), vk.coalCost]
                })]
              })]
            }), (0, gt.jsxs)("div", {
              className: ot()("SkyblockForgeDetails", {
                Named: null === vk || void 0 === vk ? void 0 : vk.named
              }),
              children: [(0, gt.jsx)("p", {
                className: ot()("SkyblockForgeLore", {
                  ArriveText: Yk
                }),
                title: null === vk || void 0 === vk ? void 0 : vk.lore,
                children: null === vk || void 0 === vk ? void 0 : vk.lore
              }), (0, gt.jsxs)("dl", {
                className: ot()("SkyblockForgeStats", {
                  ArriveText: Yk
                }),
                children: [null === vk && FX.map((kk => (0, gt.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, gt.jsx)("dt", {
                    children: dk(kk)
                  }), (0, gt.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, kk))), null === vk || void 0 === vk ? void 0 : vk.stats.map((kk => (0, gt.jsxs)("div", {
                  className: ot()("SkyblockForgeStat", {
                    Better: kk.better
                  }),
                  children: [(0, gt.jsx)("dt", {
                    children: kk.label
                  }), (0, gt.jsx)("dd", {
                    children: kk.value
                  })]
                }, kk.label)))]
              }), (0, gt.jsx)("ul", {
                className: ot()("SkyblockForgeEffects", {
                  ArriveText: Yk
                }),
                children: null === vk || void 0 === vk ? void 0 : vk.effects.map((kk => (0, gt.jsx)("li", {
                  children: kk
                }, kk)))
              })]
            })]
          })]
        })
      })
    }
    const XX = "Doom Rivet",
      bX = "Doom Crest";

    function wX(kk) {
      let {
        itemName: Fk,
        amount: Bk,
        owned: Rk
      } = kk;
      return (0, gt.jsxs)("span", {
        className: ot()("SkyblockSmugglerPrice", {
          Short: Bk > Rk
        }),
        children: [(0, gt.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, gt.jsx)(St.e, {
            itemName: Fk,
            amount: 0
          })
        }), (0, gt.jsx)("span", {
          children: Bk
        })]
      })
    }

    function dX(kk) {
      return kk.justBought ? "skyblockGame:smugglerJustBought" : kk.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function sX(kk) {
      let {
        deal: Fk,
        view: Bk,
        buy: Rk
      } = kk;
      const {
        t: tk
      } = (0, ut.x)();
      return (0, gt.jsxs)("div", {
        className: ot()("SkyblockSmugglerPocket", {
          Bought: Fk.justBought,
          Unaffordable: !Fk.affordable,
          SoldOut: Fk.soldOut && !Fk.justBought
        }),
        children: [(0, gt.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, gt.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, gt.jsx)(St.e, {
            itemName: Fk.itemName,
            amount: 0,
            enchantmentTier: Fk.enchantmentTier
          }), Fk.amount > 1 && (0, gt.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: tk("skyblockGame:smugglerAmount", {
              amount: Fk.amount
            })
          })]
        }), (0, gt.jsx)("h3", {
          children: Fk.displayName
        }), (0, gt.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, gt.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [Fk.rivets > 0 && (0, gt.jsx)(wX, {
              itemName: XX,
              amount: Fk.rivets,
              owned: Bk.rivetsOwned
            }), Fk.crests > 0 && (0, gt.jsx)(wX, {
              itemName: bX,
              amount: Fk.crests,
              owned: Bk.crestsOwned
            })]
          }), (0, gt.jsx)(ht.g, {
            className: "SkyblockSmugglerBuy",
            disabled: Fk.soldOut || !Fk.affordable || Bk.pending,
            onClick: () => {
              Rk(Fk.slot)
            },
            children: tk(dX(Fk))
          })]
        })]
      }, Fk.justBought ? Bk.boughtCount : 0)
    }

    function VX(kk) {
      let {
        controller: Fk
      } = kk;
      const Bk = (0, Mt.g)(WR, Fk.getSnapshot()),
        {
          t: Rk
        } = (0, ut.x)(),
        tk = Ct();
      return Bk.enabled ? (0, gt.jsx)(Pt.e, {
        show: Bk.open,
        close: Fk.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gt.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: tk,
          onKeyDown: qt,
          children: [(0, gt.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, gt.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, gt.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, gt.jsxs)("div", {
              children: [(0, gt.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: Rk("skyblockGame:smugglerTitle")
              }), (0, gt.jsx)("p", {
                children: Rk("skyblockGame:smugglerIntro")
              })]
            }), (0, gt.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, gt.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, gt.jsx)(wX, {
                  itemName: XX,
                  amount: Bk.rivetsOwned,
                  owned: Bk.rivetsOwned
                }), (0, gt.jsx)(wX, {
                  itemName: bX,
                  amount: Bk.crestsOwned,
                  owned: Bk.crestsOwned
                })]
              }), (0, gt.jsx)(ht.k, {
                onClick: Fk.dismiss
              })]
            })]
          }), (0, gt.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: Bk.deals.map((kk => (0, gt.jsx)(sX, {
              deal: kk,
              view: Bk,
              buy: Fk.buy
            }, kk.slot)))
          }), (0, gt.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, gt.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: Bk.rotatesText
            }), null !== Bk.status && (0, gt.jsx)("span", {
              className: ot()("SkyblockSmugglerStatus", Bk.status.tone),
              children: Bk.status.text
            })]
          })]
        })
      }) : null
    }

    function JX(kk) {
      let {
        phase: Fk,
        className: Bk
      } = kk;
      return (0, gt.jsx)("span", {
        className: ot()("SkyblockMoon", `Moon-${Fk}`, Bk),
        "aria-hidden": "true"
      })
    }

    function AX(kk) {
      let {
        controller: Fk
      } = kk;
      const Bk = (0, Mt.g)(YR, Fk.getSnapshot()),
        {
          t: Rk
        } = (0, ut.x)();
      return Bk.enabled ? (0, gt.jsx)(Ot.g, {
        placement: "statBars",
        children: (0, gt.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: ot()("SkyblockPassageChip", Bk.open && "Open"),
          "aria-label": Rk("skyblockGame:passageChipLabel", {
            phase: Bk.phaseName
          }),
          title: Rk("skyblockGame:passageChipLabel", {
            phase: Bk.phaseName
          }),
          onMouseDown: kk => {
            kk.preventDefault()
          },
          onClick: Fk.toggle,
          children: (0, gt.jsx)(JX, {
            phase: Bk.phase
          }, Bk.phase)
        })
      }) : null
    }

    function eX(kk) {
      let {
        fish: Fk
      } = kk;
      return (0, gt.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, gt.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, gt.jsx)(St.e, {
            itemName: Fk.itemName,
            amount: 0
          })
        }), (0, gt.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, gt.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: Fk.displayName
          }), (0, gt.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: Fk.where
          })]
        })]
      })
    }

    function yX(kk) {
      let {
        controller: Fk
      } = kk;
      const Bk = (0, Mt.g)(YR, Fk.getSnapshot()),
        {
          t: Rk
        } = (0, ut.x)(),
        tk = Ct();
      return Bk.enabled ? (0, gt.jsx)(Pt.e, {
        show: Bk.open,
        close: Fk.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gt.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: tk,
          onKeyDown: qt,
          children: [(0, gt.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, gt.jsx)(JX, {
              phase: Bk.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, gt.jsxs)("div", {
              children: [(0, gt.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: Rk("skyblockGame:passageTitle")
              }), (0, gt.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: Bk.phaseName
              })]
            }), (0, gt.jsx)(ht.k, {
              padIgnore: !0,
              onClick: Fk.dismiss
            })]
          }), (0, gt.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: Rk("skyblockGame:passageIntro")
          }), (0, gt.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, gt.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, gt.jsx)("h3", {
                children: Rk("skyblockGame:passageVisiting")
              }), (0, gt.jsx)("ul", {
                className: "SkyblockPassageList",
                children: Bk.visitors.map((kk => (0, gt.jsx)(eX, {
                  fish: kk
                }, kk.itemName)))
              })]
            }), (0, gt.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== Bk.resting && (0, gt.jsxs)(gt.Fragment, {
                children: [(0, gt.jsx)("h3", {
                  children: Rk("skyblockGame:passageResting")
                }), (0, gt.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, gt.jsx)(eX, {
                    fish: Bk.resting
                  })
                })]
              }), (0, gt.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, gt.jsx)(JX, {
                  phase: Bk.nextPhase
                }), (0, gt.jsx)("span", {
                  children: Bk.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function fX() {
      return (0, gt.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((kk => (0, gt.jsx)("i", {
          style: {
            "--sparkle-index": kk
          }
        }, kk)))
      })
    }

    function mX(kk) {
      var Fk;
      let {
        charm: Bk,
        view: Rk,
        controller: tk
      } = kk;
      const {
        t: ak
      } = (0, ut.x)(), Xk = Rk.shop, bk = (null === (Fk = Rk.sparkle) || void 0 === Fk ? void 0 : Fk.id) === Bk.id;
      return (0, gt.jsxs)("li", {
        className: ot()("SkyblockLampLightCharm", Bk.owned && "Owned", Bk.socketed && "Socketed"),
        children: [bk && (0, gt.jsx)(fX, {}, Rk.sparkle.count), (0, gt.jsx)("h4", {
          children: Bk.name
        }), (0, gt.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: Bk.effect
        }), (0, gt.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: Bk.lines.map((kk => (0, gt.jsxs)("li", {
            className: ot()("SkyblockLampLightOddsLine", "better" === kk.tone ? "Better" : "worse" === kk.tone ? "Worse" : "Same"),
            children: [(0, gt.jsx)("span", {
              className: "Before",
              children: kk.before
            }), (0, gt.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, gt.jsx)("span", {
              className: "After",
              children: kk.after
            })]
          }, kk.label)))
        }), (0, gt.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: Bk.owned ? Bk.socketed ? (0, gt.jsxs)(gt.Fragment, {
            children: [(0, gt.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: ak("skyblockGame:lampLightSocketed")
            }), (0, gt.jsx)(ht.O, {
              disabled: !Rk.canCommand,
              ariaLabel: ak("skyblockGame:lampLightRemoveLabel", {
                charm: Bk.name
              }),
              onClick: () => {
                tk.socket(null)
              },
              children: ak("skyblockGame:lampLightRemove")
            })]
          }) : (0, gt.jsx)(ht.g, {
            disabled: !Rk.canCommand || !Xk.heldRod,
            ariaLabel: ak("skyblockGame:lampLightSocketLabel", {
              charm: Bk.name
            }),
            onClick: () => {
              tk.socket(Bk.id)
            },
            children: ak("skyblockGame:lampLightSocket")
          }) : (0, gt.jsx)(ht.g, {
            disabled: !Rk.canCommand || !Bk.affordable,
            ariaLabel: ak("skyblockGame:lampLightBuyLabel", {
              item: Bk.name,
              cost: Bk.cost
            }),
            onClick: () => {
              tk.buy(Bk.id)
            },
            children: Bk.cost
          })
        })]
      })
    }

    function WX(kk) {
      var Fk;
      let {
        tint: Bk,
        view: Rk,
        controller: tk
      } = kk;
      const {
        t: ak
      } = (0, ut.x)();
      return (0, gt.jsxs)("li", {
        className: ot()("SkyblockLampLightTint", Bk.wearing && "Wearing"),
        style: {
          "--tint-colour": Bk.colour
        },
        children: [(null === (Fk = Rk.sparkle) || void 0 === Fk ? void 0 : Fk.id) === Bk.id && (0, gt.jsx)(fX, {}, Rk.sparkle.count), (0, gt.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, gt.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: Bk.name
        }), Bk.wearing ? (0, gt.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: ak("skyblockGame:lampLightWearing")
        }) : (0, gt.jsx)(ht.g, {
          disabled: !Rk.canCommand || !Bk.owned && !Bk.affordable,
          ariaLabel: Bk.owned ? ak("skyblockGame:lampLightWearLabel", {
            tint: Bk.name
          }) : ak("skyblockGame:lampLightBuyLabel", {
            item: Bk.name,
            cost: Bk.cost
          }),
          onClick: () => {
            Bk.owned ? tk.wearTint(Bk.id) : tk.buy(Bk.id)
          },
          children: Bk.owned ? ak("skyblockGame:lampLightWear") : Bk.cost
        })]
      })
    }

    function vX(kk) {
      let {
        controller: Fk
      } = kk;
      const Bk = (0, Mt.g)(TR, Fk.getSnapshot()),
        {
          t: Rk
        } = (0, ut.x)(),
        tk = Bk.shop;
      return (0, gt.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, gt.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, gt.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: Bk.balance
          }), (0, gt.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": Bk.releasing,
            className: ot()("SkyblockLampLightSwitch", Bk.releasing && "On"),
            disabled: Bk.releasing ? "ready" !== Bk.status : !Bk.canCommand,
            onClick: () => {
              Fk.setRelease(!Bk.releasing)
            },
            children: [(0, gt.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, gt.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), Rk("skyblockGame:lampLightRelease")]
          }), (0, gt.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: Rk("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== Bk.notice && (0, gt.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: Bk.notice
        }), null !== tk && (0, gt.jsxs)(gt.Fragment, {
          children: [(0, gt.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, gt.jsx)("h3", {
              children: Rk("skyblockGame:lampLightCharms")
            }), (0, gt.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: tk.oddsFor
            }), (0, gt.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((kk => (0, gt.jsx)("button", {
                type: "button",
                "aria-pressed": Bk.situation === kk,
                className: ot()("SkyblockLampLightSituation", Bk.situation === kk && "Selected"),
                onClick: () => {
                  Fk.setSituation(kk)
                },
                children: Rk("open" === kk ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, kk)))
            })]
          }), !tk.heldRod && (0, gt.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: Rk("skyblockGame:lampLightHoldRod")
          }), (0, gt.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: tk.charms.map((kk => (0, gt.jsx)(mX, {
              charm: kk,
              view: Bk,
              controller: Fk
            }, kk.id)))
          }), (0, gt.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, gt.jsx)("h3", {
              children: Rk("skyblockGame:lampLightTints")
            })
          }), (0, gt.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, gt.jsxs)("li", {
              className: ot()("SkyblockLampLightTint", "Islands", tk.wearingIslandColours && "Wearing"),
              children: [(0, gt.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, gt.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: Rk("skyblockGame:lampLightIslandColours")
              }), tk.wearingIslandColours ? (0, gt.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: Rk("skyblockGame:lampLightWearing")
              }) : (0, gt.jsx)(ht.g, {
                disabled: !Bk.canCommand,
                ariaLabel: Rk("skyblockGame:lampLightWearLabel", {
                  tint: Rk("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  Fk.wearTint(null)
                },
                children: Rk("skyblockGame:lampLightWear")
              })]
            }), tk.tints.map((kk => (0, gt.jsx)(WX, {
              tint: kk,
              view: Bk,
              controller: Fk
            }, kk.id)))]
          })]
        })]
      })
    }

    function iX(kk) {
      let {
        controller: Fk
      } = kk;
      const Bk = (0, Mt.g)(TR, Fk.getSnapshot()),
        {
          t: Rk
        } = (0, ut.x)();
      return Bk.releasing ? (0, gt.jsx)(Ot.g, {
        children: (0, gt.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            Fk.setRelease(!1)
          },
          children: [(0, gt.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, gt.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [Rk("skyblockGame:lampLightReleasing"), " \xb7 ", Bk.balance]
          }), (0, gt.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: Rk("skyblockGame:lampLightKeepCatches")
          }), null !== Bk.gained && (0, gt.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: Bk.gained.text
          }, Bk.gained.count)]
        })
      }) : null
    }

    function YX(kk) {
      let {
        island: Fk,
        view: Bk,
        aim: Rk
      } = kk;
      const {
        t: tk
      } = (0, ut.x)(), ak = Fk.featuredFish;
      return (0, gt.jsxs)("li", {
        className: ot()("SkyblockKeepersChairIsland", `Island-${Fk.id}`, Fk.favoured && "Aimed", !Fk.relit && "Dark"),
        children: [(0, gt.jsx)("h3", {
          children: Fk.name
        }), Fk.relit && null !== ak ? (0, gt.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, gt.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: tk("skyblockGame:keepersChairTideNotice")
          }), (0, gt.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, gt.jsx)(St.e, {
              itemName: ak.itemName,
              amount: 0
            })
          }), (0, gt.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: ak.displayName
          })]
        }) : (0, gt.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, gt.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: tk("skyblockGame:keepersChairDark")
          })
        }), Fk.relit && (Fk.favoured ? (0, gt.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: tk("skyblockGame:keepersChairAimed")
        }) : (0, gt.jsx)(ht.g, {
          className: "SkyblockKeepersChairAim",
          disabled: !Bk.canAim,
          ariaLabel: tk("skyblockGame:keepersChairAimLabel", {
            island: Fk.name
          }),
          onClick: () => {
            Rk(Fk.id)
          },
          children: tk("skyblockGame:keepersChairAim")
        }))]
      }, Fk.favoured ? Bk.aimedCount : 0)
    }

    function oX(kk) {
      let {
        controller: Fk,
        lampLight: Bk
      } = kk;
      const Rk = (0, Mt.g)(NR, Fk.getSnapshot()),
        tk = (0, Mt.g)(TR, Bk.getSnapshot()),
        [ak, Xk] = (0, Sk.useState)("lamp"),
        {
          t: bk
        } = (0, ut.x)(),
        wk = Ct();
      if (!Rk.enabled) return null;
      const dk = "light" === ak && tk.enabled;
      return (0, gt.jsx)(Pt.e, {
        show: Rk.open,
        close: Fk.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gt.jsxs)("section", {
          className: ot()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", dk && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: wk,
          onKeyDown: qt,
          children: [(0, gt.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, gt.jsxs)("div", {
              children: [(0, gt.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: bk("skyblockGame:keepersChairTitle")
              }), (0, gt.jsx)("p", {
                children: bk(dk ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, gt.jsx)(ht.k, {
              padIgnore: !0,
              ariaLabel: bk("skyblockGame:keepersChairClose"),
              onClick: Fk.dismiss
            })]
          }), tk.enabled && (0, gt.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((kk => (0, gt.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === kk === dk,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === kk === dk ? "true" : void 0,
              className: ot()("SkyblockKeepersChairTab", "light" === kk === dk && "Selected"),
              onClick: () => {
                Xk(kk)
              },
              children: [bk("lamp" === kk ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === kk && (0, gt.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: tk.balance
              })]
            }, kk)))
          }), dk ? (0, gt.jsx)(vX, {
            controller: Bk
          }) : (0, gt.jsx)(LX, {
            view: Rk,
            controller: Fk
          })]
        })
      })
    }

    function LX(kk) {
      let {
        view: Fk,
        controller: Bk
      } = kk;
      const {
        t: Rk
      } = (0, ut.x)();
      return (0, gt.jsxs)(gt.Fragment, {
        children: [(0, gt.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: Fk.islands.map((kk => (0, gt.jsx)(YX, {
            island: kk,
            view: Fk,
            aim: Bk.aim
          }, kk.id)))
        }), null !== Fk.almanac && (0, gt.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, gt.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: Rk("skyblockGame:passageTitle")
          }), (0, gt.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, gt.jsx)(JX, {
              phase: Fk.almanac.phase
            }), Fk.almanac.phaseName]
          }), (0, gt.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, gt.jsx)(JX, {
              phase: Fk.almanac.nextPhase
            }), Fk.almanac.next]
          })]
        }), (0, gt.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, gt.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: Rk("skyblockGame:keepersChairFavour")
          }), Fk.aimed && (0, gt.jsx)(ht.O, {
            className: "SkyblockKeepersChairRest",
            disabled: !Fk.canAim,
            onClick: () => {
              Bk.aim(null)
            },
            children: Rk("skyblockGame:keepersChairRest")
          })]
        }), null !== Fk.status && (0, gt.jsx)("p", {
          className: ot()("SkyblockKeepersChairStatus", "refused" === Fk.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: Fk.status.text
        })]
      })
    }

    function OX(kk) {
      let {
        controller: Fk
      } = kk;
      const {
        t: Bk
      } = (0, ut.x)(), Rk = (0, Mt.g)(uR, Fk.getSnapshot());
      if (!Rk.enabled) return null;
      const tk = Rk.freshCount > 0 ? Bk("skyblockGame:reachLogOpenNews", {
        count: Rk.freshCount
      }) : Bk("skyblockGame:reachLogOpen");
      return (0, gt.jsx)(Ot.g, {
        placement: "statBars",
        children: (0, gt.jsxs)("button", {
          type: "button",
          className: ot()("SkyblockReachLogButton", Rk.freshCount > 0 && "HasNews", Rk.pending && "Pending"),
          "aria-label": tk,
          title: tk,
          onClick: Fk.ask,
          children: [Rk.news && (0, gt.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${Rk.newsToken}`), (0, gt.jsx)("span", {
            className: ot()("SkyblockReachLogIcon", Rk.news && "Jump"),
            "aria-hidden": "true",
            children: (0, gt.jsx)(St.e, {
              itemName: gR,
              amount: 0
            })
          }, `icon:${Rk.newsToken}`), Rk.freshCount > 0 && (0, gt.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: Rk.freshCount
          })]
        })
      })
    }

    function EX(kk) {
      let {
        gift: Fk
      } = kk;
      return (0, gt.jsx)("li", {
        className: ot()("SkyblockRegularsGift", Fk.given && "Given"),
        children: Fk.text
      })
    }

    function SX(kk) {
      let {
        regular: Fk
      } = kk;
      const {
        t: Bk
      } = (0, ut.x)();
      return (0, gt.jsxs)("li", {
        className: ot()("SkyblockRegularsCard", Fk.tagged ? "Tagged" : "Untagged", Fk.resting && "Resting"),
        children: [(0, gt.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, gt.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: Fk.fishName,
            children: (0, gt.jsx)(St.e, {
              itemName: Fk.itemName,
              amount: 0
            })
          }), (0, gt.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, gt.jsx)("h3", {
              children: Fk.name
            }), (0, gt.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: Fk.fishName
            })]
          })]
        }), (0, gt.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: Fk.line
        }), (0, gt.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, gt.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: Fk.size
          }), Fk.tagged && (0, gt.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: Fk.resting ? Bk("skyblockGame:regularsResting") : Fk.meetings
          })]
        }), (0, gt.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: Fk.chance
        }), (0, gt.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: Fk.gifts.map((kk => (0, gt.jsx)(EX, {
            gift: kk
          }, kk.text)))
        }), Fk.history.length > 0 && (0, gt.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: Fk.history.map(((kk, Fk) => (0, gt.jsx)("li", {
            children: kk
          }, Fk)))
        })]
      })
    }

    function NX(kk) {
      let {
        controller: Fk,
        island: Bk
      } = kk;
      const {
        t: Rk
      } = (0, ut.x)(), tk = (0, Mt.g)(Ft, Fk.getSnapshot()), ak = tk.islands.find((kk => kk.id === Bk));
      if (!tk.enabled || void 0 === ak) return null;
      const Xk = Rk("skyblockGame:regularsOpen");
      return (0, gt.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": Xk,
        title: Xk,
        onClick: () => {
          Fk.openIsland(Bk)
        },
        children: [(0, gt.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: Rk("skyblockGame:regularsTitle")
        }), ak.regulars.map((kk => (0, gt.jsx)("span", {
          className: ot()("SkyblockRegularsStripIcon", kk.tagged && "Tagged"),
          title: kk.name,
          children: (0, gt.jsx)(St.e, {
            itemName: kk.itemName,
            amount: 0
          })
        }, kk.id)))]
      })
    }

    function HX(kk) {
      var Fk;
      let {
        controller: Bk
      } = kk;
      const Rk = (0, Mt.g)(Ft, Bk.getSnapshot()),
        {
          t: tk
        } = (0, ut.x)(),
        ak = Ct();
      if (!Rk.enabled) return null;
      const Xk = null !== (Fk = Rk.islands.find((kk => kk.id === Rk.selected))) && void 0 !== Fk ? Fk : null;
      return (0, gt.jsx)(Pt.e, {
        show: Rk.open,
        close: Bk.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gt.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: ak,
          onKeyDown: qt,
          children: [(0, gt.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, gt.jsxs)("div", {
              children: [(0, gt.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: tk("skyblockGame:regularsTitle")
              }), (0, gt.jsx)("p", {
                children: tk("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, gt.jsx)(ht.k, {
              padIgnore: !0,
              onClick: Bk.dismiss
            })]
          }), (0, gt.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: Rk.islands.map((kk => {
              const Fk = kk.id === Rk.selected;
              return (0, gt.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": Fk,
                "data-pad-tab": !0,
                "data-pad-selected": Fk ? "true" : void 0,
                className: ot()("SkyblockReachLogTab", `Island-${kk.id}`, Fk && "Selected", kk.charm.given && "GoldPage"),
                onClick: () => {
                  Bk.selectIsland(kk.id)
                },
                children: (0, gt.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: kk.name
                })
              }, kk.id)
            }))
          }), (0, gt.jsxs)("div", {
            className: ot()("SkyblockRegularsPage", null !== Xk && `Island-${Xk.id}`),
            role: "tabpanel",
            children: [(0, gt.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: tk("skyblockGame:regularsHow")
            }), null !== Xk && (0, gt.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: Xk.regulars.map((kk => (0, gt.jsx)(SX, {
                regular: kk
              }, kk.id)))
            })]
          }), null !== Xk && (0, gt.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, gt.jsx)("span", {
              className: ot()("SkyblockRegularsCharm", Xk.charm.given && "Given"),
              children: Xk.charm.text
            })
          })]
        })
      })
    }
    const uX = [{
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
      MX = Array.from({
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
      gX = Array.from({
        length: 14
      }, ((kk, Fk) => ({
        "--left": `${(3+94*((.618034*Fk+.3)%1)).toFixed(1)}%`,
        "--size": 4 + Fk % 4 * 2 + "px",
        "--sway": Fk % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*Fk%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*Fk%12).toFixed(2)}s`
      }))),
      UX = (0, Sk.memo)((function(kk) {
        let {
          island: Fk
        } = kk;
        return (0, gt.jsxs)("div", {
          className: ot()("SkyblockReachLogDepths", null !== Fk && `Island-${Fk}`),
          "aria-hidden": "true",
          children: [uX.map(((kk, Fk) => (0, gt.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: kk
          }, `shaft${Fk}`))), MX.map(((kk, Fk) => (0, gt.jsx)("span", {
            className: ot()("SkyblockReachLogMote", Fk % 2 === 1 && "Violet"),
            style: kk
          }, `mote${Fk}`))), gX.map(((kk, Fk) => (0, gt.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: kk
          }, `bubble${Fk}`)))]
        })
      })),
      cX = 100;

    function GX(kk) {
      let {
        view: Fk
      } = kk;
      const {
        t: Bk
      } = (0, ut.x)();
      if (null === Fk || 0 === Fk.total) return null;
      const Rk = cX * Fk.aspect,
        tk = Bk("skyblockGame:hiddenWatersCount", {
          found: Fk.found,
          total: Fk.total
        });
      return (0, gt.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${Bk("skyblockGame:hiddenWatersTitle")}: ${tk}`,
        children: [(0, gt.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${Rk}`,
          "aria-hidden": "true",
          children: [Fk.islands.map(((kk, Fk) => (0, gt.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (kk.left + kk.width / 2) * cX,
            cy: (kk.top + kk.height / 2) * Rk,
            rx: kk.width / 2 * cX,
            ry: kk.height / 2 * Rk
          }, Fk))), Fk.pins.map(((kk, Fk) => (0, gt.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: kk.left * cX,
            cy: kk.top * Rk,
            r: 13
          }, Fk)))]
        }), (0, gt.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, gt.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: Bk("skyblockGame:hiddenWatersTitle")
          }), (0, gt.jsx)("span", {
            className: Fk.found === Fk.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: tk
          })]
        })]
      })
    }

    function TX(kk) {
      let {
        view: Fk,
        island: Bk
      } = kk;
      const {
        t: Rk
      } = (0, ut.x)(), tk = null === Fk || void 0 === Fk ? void 0 : Fk.glimpses.get(Bk);
      return void 0 === tk || 0 === tk.length ? null : (0, gt.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, gt.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: Rk("skyblockGame:hiddenWatersGlimpsed")
        }), (0, gt.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: tk.map((kk => (0, gt.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, gt.jsx)(St.e, {
              itemName: kk,
              amount: 0
            })
          }, kk)))
        })]
      })
    }
    const rX = ["Bronze", "Silver", "Gold"],
      DX = [{
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
      zX = DX.slice(0, 2);

    function PX(kk) {
      return kk ? DX : zX
    }

    function hX(kk) {
      let {
        fish: Fk,
        letGoShown: Bk
      } = kk;
      const {
        t: Rk
      } = (0, ut.x)();
      return (0, gt.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [rX.map(((kk, Bk) => {
          const tk = Bk < Fk.marks;
          return (0, gt.jsx)("span", {
            className: ot()("SkyblockReachLogPip", kk, tk && "Earned", tk && Fk.fresh && Bk === Fk.marks - 1 && "Newest"),
            title: Rk(MR[Bk])
          }, kk)
        })), (0, gt.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), PX(Bk).map(((kk, Bk) => (0, gt.jsx)("span", {
          className: ot()("SkyblockReachLogRibbon", kk.className, !0 === Fk.ribbons[Bk] && "Earned"),
          title: Rk(kk.titleKey)
        }, kk.className)))]
      })
    }

    function qX(kk) {
      let {
        letGoShown: Fk,
        haloShown: Bk
      } = kk;
      const {
        t: Rk
      } = (0, ut.x)();
      return (0, gt.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, gt.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Rk("skyblockGame:reachLogMarks"),
          children: [(0, gt.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), Rk("skyblockGame:reachLogLegendMarks")]
        }), PX(Fk).map((kk => (0, gt.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Rk(kk.titleKey),
          children: [(0, gt.jsx)("span", {
            className: ot()("SkyblockReachLogRibbon", kk.className, "Earned")
          }), Rk(kk.legendKey)]
        }, kk.className))), (0, gt.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Rk("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, gt.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), Rk("skyblockGame:reachLogLegendGlimmer")]
        }), Bk && (0, gt.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Rk("skyblockGame:reachLogHaloTitle"),
          children: [(0, gt.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), Rk("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function CX(kk) {
      let {
        returner: Fk
      } = kk;
      return (0, gt.jsxs)("div", {
        className: ot()("SkyblockReachLogReturner", Fk.back && "Back"),
        children: [(0, gt.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, gt.jsx)(St.e, {
            itemName: Fk.itemName,
            amount: 0
          })
        }), (0, gt.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: Fk.line
        })]
      })
    }

    function ZX(kk) {
      let {
        fish: Fk,
        letGoShown: Bk
      } = kk;
      const {
        t: Rk
      } = (0, ut.x)();
      return (0, gt.jsxs)("li", {
        className: ot()("SkyblockReachLogCard", Fk.caught ? "Caught" : "Unknown", Fk.marks >= 3 && "GoldCard", Fk.fresh && "Fresh", Fk.visitor && "Visitor"),
        children: [Fk.visitor && (0, gt.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: Rk("skyblockGame:reachLogVisitor")
        }), Fk.fresh && Array.from({
          length: 4
        }, ((kk, Fk) => (0, gt.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, Fk))), (0, gt.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [Fk.halo && (0, gt.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: Rk("skyblockGame:reachLogHaloTitle")
          }), (0, gt.jsx)(St.e, {
            itemName: Fk.itemName,
            amount: 0
          }), Fk.glimmer && (0, gt.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: Rk("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, gt.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: Fk.name
        }), (0, gt.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: Fk.chance
        }), (0, gt.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: Fk.best
        }), (0, gt.jsx)(hX, {
          fish: Fk,
          letGoShown: Bk
        })]
      })
    }

    function pX(kk) {
      let {
        page: Fk,
        letGoShown: Bk,
        hiddenWaters: Rk
      } = kk;
      const {
        t: tk
      } = (0, ut.x)();
      return Fk.awake ? (0, gt.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: Fk.fish.map((kk => (0, gt.jsx)(ZX, {
          fish: kk,
          letGoShown: Bk
        }, kk.itemName)))
      }) : (0, gt.jsxs)(gt.Fragment, {
        children: [(0, gt.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: tk("skyblockGame:reachLogAsleep")
        }), (0, gt.jsx)(TX, {
          view: Rk,
          island: Fk.id
        })]
      })
    }

    function KX(kk) {
      var Fk, Bk;
      let {
        controller: Rk,
        regulars: tk,
        hiddenWaters: ak
      } = kk;
      const Xk = (0, Mt.g)(uR, Rk.getSnapshot()),
        bk = function(kk) {
          return (0, Mt.g)(bt, kk.getSnapshot())
        }(ak),
        wk = (0, Mt.g)(Ft, tk.getSnapshot()),
        {
          t: dk
        } = (0, ut.x)(),
        sk = Ct();
      if (!Xk.enabled) return null;
      const Vk = null !== (Fk = Xk.pages.find((kk => kk.id === Xk.selected))) && void 0 !== Fk ? Fk : null;
      return (0, gt.jsx)(Pt.e, {
        show: Xk.open,
        close: Rk.dismiss,
        togglePointerLock: !1,
        className: ot()("SkyblockSkillsOverlay", wk.open && "SkyblockReachLogUnderLedger"),
        children: (0, gt.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: sk,
          onKeyDown: qt,
          children: [(0, gt.jsx)(UX, {
            island: null !== (Bk = null === Vk || void 0 === Vk ? void 0 : Vk.id) && void 0 !== Bk ? Bk : null
          }), (0, gt.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, gt.jsxs)("div", {
              children: [(0, gt.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: dk("skyblockGame:reachLogTitle")
              }), (0, gt.jsx)("p", {
                children: dk("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, gt.jsx)(GX, {
              view: bk
            }), (0, gt.jsx)(ht.k, {
              padIgnore: !0,
              onClick: Rk.dismiss
            })]
          }), (0, gt.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: Xk.pages.map((kk => {
              const Fk = kk.id === Xk.selected,
                Bk = kk.fish.some((kk => kk.fresh));
              return (0, gt.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": Fk,
                "data-pad-tab": !0,
                "data-pad-selected": Fk ? "true" : void 0,
                className: ot()("SkyblockReachLogTab", `Island-${kk.id}`, Fk && "Selected", !kk.awake && "Asleep", kk.gold && "GoldPage", Bk && "HasNews"),
                onClick: () => {
                  Rk.selectPage(kk.id)
                },
                children: [(0, gt.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: kk.name
                }), kk.awake && (0, gt.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: dk("skyblockGame:reachLogCaughtCount", {
                    caught: kk.caught,
                    total: kk.total
                  })
                })]
              }, kk.id)
            }))
          }), (0, gt.jsxs)("div", {
            className: ot()("SkyblockReachLogPage", null !== Vk && `Island-${Vk.id}`),
            role: "tabpanel",
            children: [null !== Vk && (0, gt.jsx)(pX, {
              page: Vk,
              letGoShown: Xk.letGoShown,
              hiddenWaters: bk
            }), !0 === (null === Vk || void 0 === Vk ? void 0 : Vk.awake) && null !== Vk.returner && (0, gt.jsx)(CX, {
              returner: Vk.returner
            }), !0 === (null === Vk || void 0 === Vk ? void 0 : Vk.awake) && (0, gt.jsx)(NX, {
              controller: tk,
              island: Vk.id
            })]
          }), (0, gt.jsx)("footer", {
            className: ot()("SkyblockReachLogFooter", null !== Vk && `Island-${Vk.id}`, !0 === (null === Vk || void 0 === Vk ? void 0 : Vk.gold) && "GoldPage"),
            children: !0 === (null === Vk || void 0 === Vk ? void 0 : Vk.gold) ? (0, gt.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: dk("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, gt.jsxs)(gt.Fragment, {
              children: [(0, gt.jsx)(qX, {
                letGoShown: Xk.letGoShown,
                haloShown: !0 === (null === Vk || void 0 === Vk ? void 0 : Vk.fish.some((kk => kk.halo)))
              }), (0, gt.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: dk("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var xX = Bk(4559);

    function jX(kk) {
      let {
        conversation: Fk,
        completedLabel: Bk
      } = kk;
      return (0, gt.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, gt.jsxs)("header", {
          children: [(0, gt.jsx)("h3", {
            children: Fk.questName
          }), Fk.completed && (0, gt.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: Bk
          })]
        }), Fk.lines.map((kk => (0, gt.jsx)(xX.d, {
          display: kk.display
        }, kk.key)))]
      })
    }

    function lX(kk) {
      let {
        controller: Fk
      } = kk;
      const {
        t: Bk
      } = (0, ut.x)(), Rk = (0, Mt.g)(dt, Fk.getSnapshot()), tk = Ct();
      if (!Rk.enabled) return null;
      const ak = !Rk.loading && 0 === Rk.conversations.length;
      return (0, gt.jsx)(Pt.e, {
        show: Rk.open,
        close: Fk.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gt.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: tk,
          onKeyDown: qt,
          children: [(0, gt.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, gt.jsxs)("div", {
              children: [(0, gt.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: Bk("skyblockDialogue:title")
              }), (0, gt.jsx)("p", {
                children: Bk("skyblockDialogue:intro")
              })]
            }), (0, gt.jsx)(ht.k, {
              padIgnore: !0,
              onClick: Fk.dismiss
            })]
          }), (0, gt.jsxs)("div", {
            className: ot()("SkyblockDialogueBody", {
              SingleColumn: null !== Rk.questFocus || 0 === Rk.characters.length
            }),
            children: [null === Rk.questFocus && Rk.characters.length > 0 && (0, gt.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: Rk.characters.map((kk => (0, gt.jsx)(ht.g, {
                className: ot()("SkyblockDialogueCharacter", {
                  Selected: kk.selected
                }),
                onClick: () => {
                  Fk.selectCharacter(kk.id)
                },
                children: (0, gt.jsx)(Nt.d, {
                  text: kk.styling
                })
              }, kk.id)))
            }), (0, gt.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== Rk.questFocus && (0, gt.jsx)(ht.g, {
                className: "SkyblockDialogueBack",
                onClick: Fk.showCharacters,
                children: Bk("skyblockDialogue:allCharacters")
              }), Rk.loading && (0, gt.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: Bk("skyblockDialogue:loading")
              }), ak && (0, gt.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: Bk(null === Rk.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), Rk.conversations.map((kk => (0, gt.jsx)(jX, {
                conversation: kk,
                completedLabel: Rk.completedLabel
              }, kk.questId)))]
            })]
          })]
        })
      })
    }

    function nX(kk) {
      let {
        controller: Fk
      } = kk;
      const Bk = (0, Mt.g)(et, Fk.getSnapshot()),
        {
          t: Rk
        } = (0, ut.x)(),
        tk = Ct();
      return Bk.enabled ? (0, gt.jsx)(Pt.e, {
        show: Bk.open,
        close: Fk.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gt.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: tk,
          onKeyDown: qt,
          children: [(0, gt.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, gt.jsxs)("div", {
              children: [(0, gt.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: Rk("skyblockGame:autographBook")
              }), (0, gt.jsx)("p", {
                children: Rk("skyblockGame:autographBookIntro")
              })]
            }), (0, gt.jsx)(ht.k, {
              padIgnore: !0,
              onClick: Fk.dismiss
            })]
          }), (0, gt.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, gt.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, gt.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, gt.jsx)("strong", {
                  children: Bk.total
                }), (0, gt.jsx)("span", {
                  children: Rk("skyblockGame:autographTotal")
                })]
              }), (0, gt.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, gt.jsx)("strong", {
                  children: Bk.rankTotal
                }), (0, gt.jsx)("span", {
                  children: Rk("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === Bk.entries.length ? (0, gt.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: Rk("skyblockGame:autographBookEmpty")
            }) : (0, gt.jsx)("ul", {
              className: "SkyblockAutographList",
              children: Bk.entries.map((kk => (0, gt.jsxs)("li", {
                className: ot()("SkyblockAutograph", {
                  Ranked: null !== kk.rank
                }),
                style: null === kk.rank ? void 0 : {
                  color: kk.rank.colour
                },
                children: [null !== kk.rank && (0, gt.jsx)(ea.d, {
                  className: "SkyblockAutographRankIcon",
                  name: kk.rank.icon,
                  kit: (0, ea.g)(kk.rank.icon)
                }), (0, gt.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, gt.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: kk.name
                  }), (0, gt.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== kk.rank && (0, gt.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: kk.rank.label
                    }), (0, gt.jsx)("span", {
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
    const IX = (0, Sk.memo)((function(kk) {
        let {
          controller: Fk
        } = kk;
        return (0, gt.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: Fk.display.mountWaypoint,
          children: [(0, gt.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, gt.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, gt.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, gt.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, gt.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, gt.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      QX = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function kb(kk) {
      return "next" === kk.phase ? "\u2192" : QX[kk.kind]
    }
    const Fb = (0, Sk.memo)((function(kk) {
      let {
        controller: Fk,
        display: Bk
      } = kk;
      const Rk = (0, Mt.g)(VB, Fk.getNotificationSnapshot()),
        [tk, ak] = (0, Sk.useState)(!1);
      return (0, Mt.f)("qteStateUpdated", (kk => {
        ak(kk.isActive)
      })), (0, gt.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (tk ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [Rk && (0, gt.jsxs)("div", {
          className: `SkyblockQuestNotification ${Rk.kind} ${Rk.phase}`,
          style: {
            "--quest-notification-duration": `${Rk.durationMs}ms`,
            ...Rk.accent && {
              "--quest-notification-accent": Rk.accent
            }
          },
          children: [(0, gt.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (Rk.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, gt.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: kb(Rk)
            }), Rk.iconItem && (0, gt.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, gt.jsx)(St.e, {
                itemName: Rk.iconItem,
                amount: 0
              })
            })]
          }), (0, gt.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, gt.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: Rk.title
            }), (0, gt.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, gt.jsx)(ba.c, {
                text: Rk.name
              })
            }), Rk.description && (0, gt.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, gt.jsx)(ba.c, {
                text: Rk.description
              })
            }), Rk.reward && (0, gt.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, gt.jsx)(ba.c, {
                text: Rk.reward
              })
            })]
          })]
        }, Rk.token), (null === Rk || void 0 === Rk ? void 0 : Rk.waypointNameKey) && (0, gt.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": Rk.waypointNameKey,
          "data-notification-token": Rk.token,
          ref: Bk.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${Rk.token}`)]
      })
    }));

    function Bb(kk) {
      const Fk = parseInt(kk.replace("#", ""), 16);
      return `${Fk>>16&255}, ${Fk>>8&255}, ${255&Fk}`
    }
    const Rb = (0, Sk.memo)((function(kk) {
      let {
        controller: Fk
      } = kk;
      const {
        t: Bk
      } = (0, ut.x)(), Rk = (0, Mt.g)(DB, Fk.getSnapshot());
      if (!Rk) return null;
      const tk = "arrival" === Rk.phase;
      return (0, gt.jsxs)("div", {
        className: ot()("SkyblockPortalTransit", {
          Departure: !tk,
          Arrival: tk
        }),
        style: {
          "--portal-rgb": Bb(Rk.colour),
          "--portal-duration": `${Rk.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, gt.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, gt.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            Fk.finishArrival(Rk.token)
          }
        }), (0, gt.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, gt.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !tk && (0, gt.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: Bk("skyblockGame:portalTransitHeading")
          }), (0, gt.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: Bk(Rk.zoneNameKey)
          })]
        })]
      }, Rk.token)
    }));

    function tb() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function ab() {
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

    function Xb(kk) {
      return {
        x: kk.left + kk.width / 2,
        y: kk.top + kk.height / 2
      }
    }

    function bb() {
      var kk;
      const Fk = null === (kk = document.querySelector(".HotBar")) || void 0 === kk ? void 0 : kk.getBoundingClientRect();
      return Fk && Fk.width > 0 ? Xb(Fk) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function wb(kk) {
      let {
        items: Fk,
        origins: Bk,
        target: Rk
      } = kk;
      return (0, gt.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: Fk.map(((kk, Fk) => {
          const tk = Bk[Fk];
          return (0, gt.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${tk.x}px`,
              top: `${tk.y}px`,
              "--item-dx": Rk.x - tk.x + "px",
              "--item-dy": Rk.y - tk.y + "px",
              "--item-delay": 2e3 + 160 * Fk + "ms",
              "--item-flight": "700ms"
            },
            children: (0, gt.jsx)(St.e, {
              itemName: kk.dailyRewardItemName,
              amount: 0
            })
          }, kk.dailyRewardItemName)
        }))
      })
    }

    function db(kk, Fk) {
      const Bk = -Math.PI / 2 + 1.25 * (kk / (Fk - 1) * 2 - 1),
        Rk = 70 + kk % 3 * 22;
      return {
        x: Math.cos(Bk) * Rk,
        y: Math.sin(Bk) * Rk * .7
      }
    }

    function sb(kk) {
      let {
        origin: Fk,
        target: Bk,
        count: Rk
      } = kk;
      const tk = [];
      for (let ak = 0; ak < Rk; ak++) {
        const kk = db(ak, Rk);
        tk.push((0, gt.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${Fk.x}px`,
            top: `${Fk.y}px`,
            "--coin-bx": `${kk.x}px`,
            "--coin-by": `${kk.y}px`,
            "--coin-dx": Bk.x - Fk.x + "px",
            "--coin-dy": Bk.y - Fk.y + "px",
            "--coin-delay": `${ZB(ak,Rk)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, gt.jsx)(St.e, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, ak))
      }
      return (0, gt.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: tk
      })
    }

    function Vb(kk) {
      let {
        day: Fk
      } = kk;
      const Bk = Nk[Fk - 1];
      return (0, gt.jsxs)(gt.Fragment, {
        children: [(0, gt.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, gt.jsx)(St.e, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, Ht.f)(Bk.dailyRewardCoins)]
        }), Bk.dailyRewardItems.map((kk => (0, gt.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, gt.jsx)(St.e, {
            itemName: kk.dailyRewardItemName,
            amount: 0
          }), "\xd7", kk.dailyRewardItemAmount]
        }, kk.dailyRewardItemName)))]
      })
    }

    function Jb(kk) {
      let {
        day: Fk
      } = kk;
      const Bk = uk(Fk);
      return (0, gt.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: Nk.map(((kk, Rk) => {
          const tk = Rk + 1;
          return (0, gt.jsxs)("li", {
            className: ot()("SkyblockDailyRewardTile", {
              Claimed: tk < Fk && tk !== Bk,
              Today: tk === Fk,
              Tomorrow: tk === Bk,
              Jackpot: tk === Hk
            }),
            children: [(0, gt.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: tk
            }), (0, gt.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, gt.jsx)(St.e, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, Ht.f)(kk.dailyRewardCoins)]
            }), kk.dailyRewardItems.map((kk => (0, gt.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, gt.jsx)(St.e, {
                itemName: kk.dailyRewardItemName,
                amount: 0
              }), "\xd7", kk.dailyRewardItemAmount]
            }, kk.dailyRewardItemName)))]
          }, tk)
        }))
      })
    }

    function Ab(kk) {
      let {
        view: Fk
      } = kk;
      const {
        t: Bk
      } = (0, ut.x)(), Rk = (0, Sk.useRef)(null), tk = (0, Sk.useRef)(null), [ak, Xk] = (0, Sk.useState)(null);
      (0, Sk.useLayoutEffect)((() => {
        var kk;
        const Fk = null === (kk = Rk.current) || void 0 === kk ? void 0 : kk.getBoundingClientRect();
        if (Fk) {
          var Bk, ak;
          const kk = Array.from(null !== (Bk = null === (ak = tk.current) || void 0 === ak ? void 0 : ak.children) && void 0 !== Bk ? Bk : [], (kk => Xb(kk.getBoundingClientRect())));
          Xk({
            origin: Xb(Fk),
            target: ab(),
            itemOrigins: kk,
            itemTarget: bb()
          })
        }
      }), []);
      const bk = uk(Fk.day),
        wk = function(kk, Fk) {
          const [Bk, Rk] = (0, Sk.useState)((() => tb() ? kk : 0));
          return (0, Sk.useEffect)((() => {
            if (tb()) return;
            const Bk = performance.now();
            let tk = 0;
            const ak = Xk => {
              const bk = Math.min(Math.max((Xk - Bk) / Fk, 0), 1);
              Rk(Math.round(kk * (1 - (1 - bk) ** 3))), bk < 1 && (tk = requestAnimationFrame(ak))
            };
            return tk = requestAnimationFrame(ak), () => {
              cancelAnimationFrame(tk)
            }
          }), [kk, Fk]), Bk
        }(Fk.coins, 450);
      return (0, gt.jsxs)("div", {
        className: ot()("SkyblockDailyReward", {
          Jackpot: Fk.day === Hk
        }),
        style: {
          "--daily-duration": `${Fk.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, gt.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, gt.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, gt.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, gt.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: Bk("skyblockGame:dailyRewardTitle")
            }), (0, gt.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: Bk("skyblockGame:dailyRewardDay", {
                day: String(Fk.day)
              })
            })]
          }), (0, gt.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: Rk,
            children: [(0, gt.jsx)(St.e, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, gt.jsxs)("span", {
              children: ["+", (0, Ht.f)(wk)]
            })]
          }), Fk.items.length > 0 && (0, gt.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: tk,
            children: Fk.items.map((kk => (0, gt.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, gt.jsx)(St.e, {
                itemName: kk.dailyRewardItemName,
                amount: 0
              }), "\xd7", kk.dailyRewardItemAmount]
            }, kk.dailyRewardItemName)))
          }), (0, gt.jsx)(Jb, {
            day: Fk.day
          }), (0, gt.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [Bk("skyblockGame:dailyRewardComeBack"), (0, gt.jsx)(Vb, {
              day: bk
            })]
          })]
        }), null !== ak && (0, gt.jsx)(sb, {
          origin: ak.origin,
          target: ak.target,
          count: Fk.flyingCoins
        }), null !== ak && ak.itemOrigins.length === Fk.items.length && (0, gt.jsx)(wb, {
          items: Fk.items,
          origins: ak.itemOrigins,
          target: ak.itemTarget
        })]
      })
    }
    const eb = (0, Sk.memo)((function(kk) {
        let {
          controller: Fk
        } = kk;
        const Bk = (0, Mt.g)(hB, Fk.getSnapshot());
        return Bk ? (0, gt.jsx)(Ab, {
          view: Bk
        }, Bk.token) : null
      })),
      yb = "Gold Coin";

    function fb(kk) {
      return 650 + 220 * kk
    }

    function mb(kk) {
      return {
        "--letter-delay": `${fb(kk)}ms`,
        "--letter-land": `${fb(kk)+300}ms`
      }
    }

    function Wb(kk) {
      let {
        letterCount: Fk
      } = kk;
      return (0, gt.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, gt.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, gt.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, gt.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: Fk
        }, ((kk, Fk) => (0, gt.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: mb(Fk),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, Fk)))]
      })
    }

    function vb(kk) {
      var Fk, Bk, Rk;
      let {
        letter: tk,
        index: ak
      } = kk;
      const {
        t: Xk
      } = (0, ut.x)(), bk = null !== (Fk = null === (Bk = tk.items[0]) || void 0 === Bk ? void 0 : Bk.itemName) && void 0 !== Fk ? Fk : yb;
      return (0, gt.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: mb(ak),
        children: [(0, gt.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, gt.jsx)(St.e, {
            itemName: bk,
            amount: 0
          })
        }), (0, gt.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: Xk(tk.reasonKey, null !== (Rk = tk.reasonParams) && void 0 !== Rk ? Rk : void 0)
        }), (0, gt.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [tk.coins > 0 && (0, gt.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, gt.jsx)(St.e, {
              itemName: yb,
              amount: 0
            }), "+", (0, Ht.f)(tk.coins)]
          }), tk.items.map(((kk, Fk) => (0, gt.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, gt.jsx)(St.e, {
              itemName: kk.itemName,
              amount: 0
            }), kk.label, " \xd7", kk.amount]
          }, Fk)))]
        })]
      })
    }

    function ib(kk) {
      let {
        view: Fk
      } = kk;
      const {
        t: Bk
      } = (0, ut.x)();
      return (0, gt.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${Fk.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${fb(Fk.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, gt.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, gt.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, gt.jsx)(Wb, {
              letterCount: Fk.letters.length
            }), (0, gt.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: Bk("skyblockGame:mailboxTitle")
            })]
          }), (0, gt.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: Fk.letters.map(((kk, Fk) => (0, gt.jsx)(vb, {
              letter: kk,
              index: Fk
            }, Fk)))
          }), Fk.more > 0 && (0, gt.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: Bk("skyblockGame:mailboxMore", {
              count: String(Fk.more)
            })
          })]
        })
      })
    }
    const Yb = (0, Sk.memo)((function(kk) {
      let {
        controller: Fk
      } = kk;
      const Bk = (0, Mt.g)(KB, Fk.getSnapshot());
      return Bk ? (0, gt.jsx)(ib, {
        view: Bk
      }, Bk.token) : null
    }));

    function ob(kk) {
      let {
        controller: Fk
      } = kk;
      const {
        t: Bk
      } = (0, ut.x)(), Rk = (0, Mt.g)(DR, Fk.getSnapshot());
      if (null === Rk) return null;
      const tk = Rk.fullSet ? "empty" === Rk.fuelState ? {
        text: Bk("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: Bk("skyblockGame:magmawardHudFullSet", {
          worn: String(Rk.wornCount)
        }),
        tone: "partial"
      };
      return (0, gt.jsx)(Ot.g, {
        placement: "statBars",
        children: (0, gt.jsxs)("div", {
          className: ot()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${Rk.fuelState}`, {
            "SkyblockMagmawardHud-partial": !Rk.fullSet,
            "SkyblockMagmawardHud-armed": Rk.fullSet && "empty" !== Rk.fuelState
          }),
          children: [null !== Rk.flare && (0, gt.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${Rk.flare}`
          }, `flare:${Rk.flareToken}`), (0, gt.jsx)("div", {
            className: ot()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: Rk.setLit
            }),
            children: Rk.pieces.map(((kk, Fk) => (0, gt.jsx)("div", {
              className: ot()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: kk.worn,
                SkyblockMagmawardPieceJustWorn: kk.justWorn
              }),
              children: (0, gt.jsx)(St.e, {
                itemName: kk.itemName,
                amount: 0
              })
            }, `${Fk}:${kk.wornToken}`)))
          }, `pieces:${Rk.setLitToken}`), (0, gt.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, gt.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, gt.jsxs)("div", {
              className: ot()("SkyblockMagmawardFuelCounter", Rk.pulse && `SkyblockMagmawardFuelCounter-${Rk.pulse}`),
              children: [(0, gt.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, gt.jsx)(St.e, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, gt.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: Rk.fuel
              })]
            }, `counter:${Rk.pulseToken}`), "burn" === Rk.pulse && (0, gt.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${Rk.pulseToken}`)]
          }), tk && (0, gt.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${tk.tone} SmallTextBold`,
            children: tk.text
          })]
        })
      })
    }

    function Lb(kk) {
      let {
        controller: Fk
      } = kk;
      const {
        t: Bk,
        selectedLanguage: Rk
      } = (0, ut.x)(), tk = (0, Mt.g)(PR, Fk.getSnapshot());
      return null === tk ? null : (0, gt.jsx)(Ot.g, {
        placement: "statBars",
        children: (0, gt.jsxs)("div", {
          className: ot()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: tk.inRange
          }),
          style: {
            "--glowtide-colour": tk.colour
          },
          "aria-label": Bk("skyblockGame:glowtideChipLabel"),
          children: [(0, gt.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), tk.inRange ? (0, gt.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: Bk("skyblockGame:glowtideChipInRange")
          }, `call:${tk.inRangeToken}`) : (0, gt.jsxs)(gt.Fragment, {
            children: [(0, gt.jsx)("div", {
              ref: Fk.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, gt.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: Bk("skyblockGame:waypointDistance", {
                distance: Lk(tk.distance, Rk.code)
              })
            })]
          })]
        })
      })
    }

    function Ob(kk) {
      let {
        controller: Fk
      } = kk;
      const {
        t: Bk
      } = (0, ut.x)(), Rk = (0, Mt.g)(qR, Fk.getSnapshot());
      return null === Rk ? null : (0, gt.jsx)(Ot.g, {
        placement: "statBars",
        children: (0, gt.jsxs)("div", {
          className: ot()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: Rk.full
          }),
          "aria-label": Bk("skyblockGame:glowMeterLabel", {
            fill: String(Rk.fill),
            KV: String(Rk.KV)
          }),
          children: [Rk.burst && (0, gt.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${Rk.burstToken}`), (0, gt.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, gt.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${Rk.ratio})`
              }
            }), Rk.gained && (0, gt.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${Rk.gainToken}`), Rk.full && Array.from({
              length: 5
            }, ((kk, Fk) => (0, gt.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, Fk)))]
          }), Rk.full && Rk.rares.map((kk => (0, gt.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, gt.jsx)(St.e, {
              itemName: kk,
              amount: 0
            })
          }, kk))), Rk.ready && (0, gt.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, gt.jsx)("span", {
              children: Bk("skyblockGame:glowMeterReady")
            })
          }, `ready:${Rk.fullToken}`)]
        })
      })
    }

    function Eb(kk) {
      let {
        controller: Fk
      } = kk;
      const {
        t: Bk
      } = (0, ut.x)(), Rk = (0, Mt.g)(ZR, Fk.getSnapshot());
      if (null === Rk) return null;
      const tk = "waiting" === Rk.phase,
        ak = {
          animationDuration: `${Rk.waitMs}ms`,
          animationDelay: -Rk.elapsedMs + "ms"
        },
        Xk = tk ? void 0 : {
          animationDuration: `${Rk.waitMs}ms`
        };
      return (0, gt.jsxs)("div", {
        className: tk ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [tk && (0, gt.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((kk, Fk) => (0, gt.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, Fk))), (0, gt.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: ak
          }), (0, gt.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, gt.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, gt.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: ak
            })]
          }), (0, gt.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, gt.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: Xk,
          children: Bk(Rk.line)
        }, Rk.lineIndex)]
      }, Rk.token)
    }

    function Sb(kk) {
      let {
        chart: Fk,
        showHere: Bk,
        className: Rk
      } = kk;
      return (0, gt.jsx)("div", {
        className: ot()("SkyblockTideChartGrid", Rk, null !== Fk.pictureName && "Complete"),
        "aria-hidden": "true",
        children: Fk.cells.map(((kk, Rk) => {
          const tk = 0 !== (Fk.pulseCells & 1 << Rk),
            ak = Fk.castCell === Rk;
          return (0, gt.jsx)("span", {
            className: ot()("SkyblockTideChartCell", `Cell-${kk}`, tk && "Pulse", ak && "Cast", Bk && Fk.hereCell === Rk && "Here")
          }, `${Rk}:${tk?`p${Fk.pulseToken}`:""}:${ak?`c${Fk.castToken}`:""}`)
        }))
      })
    }

    function Nb(kk) {
      let {
        controller: Fk
      } = kk;
      const Bk = (0, Mt.g)(KR, Fk.getSnapshot()),
        {
          t: Rk
        } = (0, ut.x)(),
        tk = Bk.chip;
      if (!Bk.enabled || null === tk) return null;
      const ak = Rk("skyblockGame:tideChartsChipLabel", {
        island: tk.islandName,
        lit: String(tk.lit),
        ink: String(tk.ink)
      });
      return (0, gt.jsx)(Ot.g, {
        placement: "statBars",
        children: (0, gt.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: ot()("SkyblockTideChartsChip", Bk.open && "Open", null !== tk.pictureName && "Complete"),
          "aria-label": ak,
          title: ak,
          onMouseDown: kk => {
            kk.preventDefault()
          },
          onClick: Fk.toggle,
          children: [(0, gt.jsx)(Sb, {
            chart: tk,
            showHere: !1,
            className: "Mini"
          }), (0, gt.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [tk.lit, "/", tk.ink]
          })]
        })
      })
    }

    function Hb(kk) {
      let {
        controller: Fk
      } = kk;
      const Bk = (0, Mt.g)(KR, Fk.getSnapshot()),
        {
          t: Rk
        } = (0, ut.x)(),
        tk = Ct(),
        ak = Bk.card;
      return Bk.enabled && null !== ak ? (0, gt.jsx)(Pt.e, {
        show: Bk.open,
        close: Fk.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gt.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: tk,
          onKeyDown: qt,
          children: [(0, gt.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, gt.jsxs)("div", {
              children: [(0, gt.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: Rk("skyblockGame:tideChartsTitle")
              }), (0, gt.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: Rk("skyblockGame:tideChartsIntro")
              })]
            }), (0, gt.jsx)(ht.k, {
              padIgnore: !0,
              ariaLabel: Rk("skyblockGame:tideChartsClose"),
              onClick: Fk.dismiss
            })]
          }), Bk.tabs.length > 1 && (0, gt.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": Rk("skyblockGame:tideChartsIslands"),
            children: Bk.tabs.map((kk => (0, gt.jsx)("button", {
              type: "button",
              className: ot()("SkyblockTideChartsTab", kk.selected && "Selected"),
              "aria-pressed": kk.selected,
              onClick: () => {
                Fk.AA(kk.island)
              },
              children: kk.name
            }, kk.island)))
          }), (0, gt.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, gt.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": ak.gridLabel,
              children: (0, gt.jsx)(Sb, {
                chart: ak,
                showHere: !0,
                className: "Large"
              })
            }), (0, gt.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, gt.jsx)("h3", {
                children: ak.islandName
              }), (0, gt.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: ak.litText
              }), null === ak.pictureName ? (0, gt.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: Rk("skyblockGame:tideChartsPictureHidden")
              }) : (0, gt.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: Rk("skyblockGame:tideChartsPictureRevealed", {
                  picture: ak.pictureName
                })
              }, ak.pictureName), (0, gt.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, gt.jsxs)("li", {
                  children: [(0, gt.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), Rk("skyblockGame:tideChartsLegendLit")]
                }), (0, gt.jsxs)("li", {
                  children: [(0, gt.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), Rk("skyblockGame:tideChartsLegendClear")]
                }), null !== ak.hereCell && (0, gt.jsxs)("li", {
                  children: [(0, gt.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), Rk("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, gt.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, gt.jsx)("span", {
                  children: Bk.turnsText
                }), (0, gt.jsx)("span", {
                  children: Bk.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function ub(kk) {
      var Fk;
      let {
        controller: Bk
      } = kk;
      const {
        selectedLanguage: Rk
      } = (0, ut.x)(), tk = Rk.code;
      (0, Sk.useEffect)((() => {
        Bk.setTranslator(((kk, Fk) => (0, ut.r)(tk, kk, Fk)), tk, ((kk, Fk) => (0, ut.m)(tk, kk, Fk)))
      }), [Bk, tk]);
      const ak = (0, Mt.g)(Jk, Bk.map.getSnapshot()),
        {
          openInGameMenuName: Xk
        } = (0, Lt.h)(["openInGameMenuName"]);
      return (0, gt.jsxs)(gt.Fragment, {
        children: [(0, gt.jsx)(Fb, {
          controller: Bk.quests,
          display: Bk.navigation.display
        }), ak.enabled && !Xk && (0, gt.jsx)(ta, {
          controller: Bk.navigation
        }), (0, gt.jsx)(Ut, {
          controller: Bk,
          minimap: ak.enabled && (null === (Fk = ak.presentation) || void 0 === Fk ? void 0 : Fk.minimap) && (0, gt.jsx)(Ra, {
            view: ak.presentation.minimap,
            navigation: Bk.navigation,
            controller: Bk.map
          }),
          children: (0, gt.jsx)(Aa, {
            controller: Bk.quests,
            surface: "hud"
          })
        }), (0, gt.jsx)(IX, {
          controller: Bk.navigation
        }), (0, gt.jsx)(Rb, {
          controller: Bk.portalTransit
        }), (0, gt.jsx)(eb, {
          controller: Bk.dailyReward
        }), (0, gt.jsx)(Yb, {
          controller: Bk.mailbox
        }), (0, gt.jsx)(ob, {
          controller: Bk.magmaward
        }), (0, gt.jsx)(Lb, {
          controller: Bk.glowtide
        }), (0, gt.jsx)(AX, {
          controller: Bk.passage
        }), (0, gt.jsx)(Nb, {
          controller: Bk.tideCharts
        }), (0, gt.jsx)(Ob, {
          controller: Bk.glowMeter
        }), (0, gt.jsx)(OX, {
          controller: Bk.reachLog
        }), (0, gt.jsx)(Eb, {
          controller: Bk.hushWait
        }), (0, gt.jsx)(iX, {
          controller: Bk.lampLight
        }), (0, gt.jsx)(aa, {
          controller: Bk.skills,
          surface: "hud"
        })]
      })
    }

    function Mb(kk) {
      let {
        controller: Fk
      } = kk;
      return (0, gt.jsxs)(gt.Fragment, {
        children: [(0, gt.jsx)(Ba, {
          controller: Fk.map,
          navigation: Fk.navigation
        }), (0, gt.jsx)(aa, {
          controller: Fk.skills,
          surface: "menu"
        }), (0, gt.jsx)(Aa, {
          controller: Fk.quests,
          surface: "menu"
        }), (0, gt.jsx)(xa, {
          controller: Fk.dungeons
        }), (0, gt.jsx)(na, {
          controller: Fk.collections
        }), (0, gt.jsx)(kX, {
          controller: Fk.questGraph
        }), (0, gt.jsx)(aX, {
          controller: Fk.forge
        }), (0, gt.jsx)(VX, {
          controller: Fk.smuggler
        }), (0, gt.jsx)(oX, {
          controller: Fk.keepersChair,
          lampLight: Fk.lampLight
        }), (0, gt.jsx)(KX, {
          controller: Fk.reachLog,
          regulars: Fk.regulars,
          hiddenWaters: Fk.hiddenWaters
        }), (0, gt.jsx)(HX, {
          controller: Fk.regulars
        }), (0, gt.jsx)(yX, {
          controller: Fk.passage
        }), (0, gt.jsx)(Hb, {
          controller: Fk.tideCharts
        }), (0, gt.jsx)(lX, {
          controller: Fk.dialogue
        }), (0, gt.jsx)(nX, {
          controller: Fk.autographs
        })]
      })
    }
    var gb = Bk(36445);
    const Ub = FR + wR;

    function cb(kk, Fk, Bk, Rk, tk) {
      const ak = [],
        Xk = [],
        bk = Bk => {
          const Rk = kk.playSound(Fk, Bk.sound, Bk.volume, Bk.rate);
          Rk && (Xk.push(Rk), void 0 !== Bk.cutAfter && ak.push(setTimeout((() => {
            Rk.fade(Rk.getVolume(), 0, 300)
          }), Bk.cutAfter)))
        };
      for (const wk of function(kk, Fk) {
          const Bk = [{
            sound: "rpgKnifeSlice1",
            beat: FR,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: FR,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: FR,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: FR,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: FR,
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
            sound: (0, gb.c)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: Ub + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, gb.c)("bigDrumSwish"),
            beat: Ub + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: Ub + 60,
            lead: 180,
            volume: .5 + .06 * kk,
            rate: .82 + .07 * kk
          }];
          return kk >= 4 && Bk.push({
            sound: "exp_levelup",
            beat: Ub + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), Fk && Bk.push({
            sound: "trumpetFlare",
            beat: Ub + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), Bk.push({
            sound: "harp_pling",
            beat: BR,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), Bk
        }(Bk, Rk)) tk ? ak.push(setTimeout((() => {
        bk(wk)
      }), Math.max(0, wk.beat - wk.lead / wk.rate))) : wk.beat !== FR && "magicAccent2" !== wk.sound && "trumpetFlare" !== wk.sound || bk(wk);
      return () => {
        for (const kk of ak) clearTimeout(kk);
        for (const kk of Xk) kk.fade(kk.getVolume(), 0, 120)
      }
    }
    class Gb {
      constructor(kk) {
        this.deps = kk, this.pending = new Map, this.localHook = null
      }
      hookWaiting(kk, Fk) {
        this.pending.delete(kk);
        const Bk = this.deps.now();
        if (null === Fk) {
          var Rk;
          if ((null === (Rk = this.localHook) || void 0 === Rk ? void 0 : Rk.hookId) === kk) {
            const kk = Bk >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(kk)
          }
          return
        }
        const tk = Bk + Fk;
        this.settle(kk, tk) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(kk, {
          untilMs: Bk + 1e3,
          biteAtMs: tk
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
            untilMs: Bk,
            biteAtMs: Rk
          }] of this.pending)(this.settle(Fk, Rk) || kk > Bk) && this.pending.delete(Fk)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(kk, Fk) {
        const Bk = this.deps.getLineOwner(kk);
        if (null === Bk) return !1;
        if (!this.deps.isLocalPlayer(Bk)) return !0;
        if (this.localHook = {
            hookId: kk,
            biteAtMs: Fk
          }, !this.deps.isHushWaiting()) {
          const [Fk, Bk] = this.deps.getHookPosition(kk);
          this.deps.onCastLanded(Fk, Bk)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var Tb = Bk(4002);
    const rb = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      Db = {
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
    class zb {
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
        const Bk = null !== Fk && this.deps.now() - Fk.atMs <= 3e3 ? Fk.tier : 0;
        this.deps.vibrate(rb[Bk])
      }
      burstAtHook() {
        const kk = this.tell,
          Fk = this.deps.getLocalHookPosition();
        null === kk || kk.burst || null === Fk || (kk.burst = !0, this.deps.playParticles(function(kk, Fk) {
          let [Bk, Rk, tk] = Fk;
          const {
            count: ak,
            rise: Xk,
            colour: bk
          } = Db[kk], [wk, dk, sk] = bk;
          return {
            texture: "glint",
            pos1: [Bk - .3, Rk, tk - .3],
            pos2: [Bk + .3, Rk + .2, tk + .3],
            dir1: [-.6, Xk, -.6],
            dir2: [.6, 1.4 * Xk, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: ak,
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
              minColor: [wk, dk, sk, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [wk, dk, sk, 0],
              maxColor: [wk, dk, sk, 0]
            }],
            blendMode: Tb.d.Add,
            hideDist: 48
          }
        }(kk.tier, Fk)))
      }
    }
    var Pb = Bk(1203),
      hb = Bk(1849),
      qb = Bk(42);

    function Cb(kk, Fk) {
      return [{
        timeFraction: 0,
        minColor: [255 * kk[0], 255 * kk[1], 255 * kk[2], 1],
        maxColor: [255 * Fk[0], 255 * Fk[1], 255 * Fk[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const Zb = [0, 0, 0],
      pb = {
        texture: "glint",
        mipmaps: !1,
        KV: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: Zb,
        dir2: Zb,
        blendMode: Tb.d.OneOne
      },
      Kb = {
        ...pb,
        colorGradients: Cb([1, .88, .38], [1, .65, .15])
      },
      xb = {
        ...pb,
        colorGradients: Cb([.55, .95, 1], [.9, 1, 1])
      },
      jb = [.5, .5, .5],
      lb = {
        texture: "glint",
        mipmaps: !1,
        KV: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: Cb([1, .12, .12], [1, .35, .2]),
        blendMode: Tb.d.OneOne
      };
    class nb {
      constructor() {
        this.drops = new Map
      }
      he(kk, Fk) {
        if ("overflowFlash" === Fk.kind) {
          const [Bk, Rk, tk] = Fk.position, ak = kk.createParticles(lb, {
            pos: [Bk, Rk, tk],
            half: jb
          });
          return ak.emit(18), void ak.stop()
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
      yJ(kk) {
        if (0 === this.drops.size) return;
        const Fk = performance.now(),
          Bk = kk.getCameraPosition();
        let Rk = 0;
        for (const ak of this.drops.values()) null !== ak.particles && Rk++;
        for (const [ak, Xk] of this.drops) {
          const bk = kk.getPositionView(ak);
          if (null === bk) {
            var tk;
            if (Xk.seen || Fk - Xk.markedAt > 5e3) null !== Xk.particles && Rk--, null === (tk = Xk.particles) || void 0 === tk || tk.stop(), this.drops.delete(ak);
            continue
          }
          Xk.cosmetic || !kk.isLocalPlayer(Xk.owner) || Xk.pickupDelayCleared || (kk.clearPickupDelay(ak), Xk.pickupDelayCleared = !0);
          const wk = Xk.lastPosition,
            dk = Xk.seen && (bk[0] - wk[0]) ** 2 + (bk[1] - wk[1]) ** 2 + (bk[2] - wk[2]) ** 2 > 4e-4,
            sk = (bk[0] - Bk[0]) ** 2 + (bk[1] - Bk[1]) ** 2 + (bk[2] - Bk[2]) ** 2 < 2025;
          Xk.seen = !0, wk[0] = bk[0], wk[1] = bk[1], wk[2] = bk[2], dk && (Xk.lastMovingAt = Fk), null !== Xk.particles && (!sk || Fk - Xk.lastMovingAt > 500) && (Xk.particles.stop(), Xk.particles = null, Rk--), dk && sk && null === Xk.particles && Rk < 32 && (Xk.particles = kk.createParticles(Xk.cosmetic ? xb : Kb, {
            pos: bk
          }), Rk++), null !== Xk.particles && (Xk.particles.moveTo(bk), Xk.particles.setEmitRate(dk ? 12 : 0)), !dk && null === Xk.particles && Fk - Math.max(Xk.lastMovingAt, Xk.markedAt) > 2e3 && this.drops.delete(ak)
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
    var Ib = Bk(182);
    const Qb = Ib.h.FW * Ib.h.playerEyeToHeightRatio;
    class kw {
      constructor(kk) {
        this.host = kk, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      he(kk) {
        this.lava = kk, this.nextUpdateAt = 0
      }
      yJ() {
        var kk;
        const Fk = this.host.now();
        if (Fk < this.nextUpdateAt) return;
        this.nextUpdateAt = Fk + 250;
        const Bk = this.host.playerPosition(),
          Rk = Bk && this.findNearest([Bk[0], Bk[1] + Qb, Bk[2]]);
        if (!Rk || Rk.distance >= 40) return void this.stop();
        const tk = .5 * Math.min(1, (40 - Rk.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(tk) : this.loop = this.host.play("lavaFlow", tk, Rk.position, 40 + Qb, 9, !0), null === (kk = this.loop) || void 0 === kk || kk.setPosition(Rk.position)
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
          Bk = 1 / 0;
        for (let Rk = 0; Rk < this.lava.length; Rk += 3) {
          const tk = this.lava[Rk] - kk[0],
            ak = this.lava[Rk + 1] - kk[1],
            Xk = this.lava[Rk + 2] - kk[2],
            bk = tk * tk + ak * ak + Xk * Xk;
          bk < Bk && (Bk = bk, Fk = Rk)
        }
        return Fk < 0 ? null : {
          position: [this.lava[Fk], this.lava[Fk + 1], this.lava[Fk + 2]],
          distance: Math.sqrt(Bk)
        }
      }
    }
    var Fw = Bk(1826),
      Bw = Bk(38286);
    const Rw = {
      "Grey Portal": "Gray"
    };
    for (const dw of tk.Kc) Rw[`${dw} Portal`] = dw;
    const tw = Object.keys(Rw),
      aw = Object.fromEntries(tw.map((kk => [kk, (0, tk.Y)(tk.N[`${(0,tk.Be)(Rw[kk])}Team`])])));
    Object.fromEntries(tw.map((kk => [kk, tk.N[`${(0,tk.Be)(Rw[kk])}UiText`]])));
    class Xw {
      constructor(kk, Fk) {
        this.presentation = kk, this.portal = Fk, this.unlocked = void 0
      }
      he(kk) {
        const Fk = !1 === this.unlocked && kk;
        this.unlocked = kk, this.yJ();
        const {
          min: Bk,
          max: Rk,
          unlockedBlock: tk
        } = this.portal;
        if (Fk && this.presentation.hasChunk(...Bk)) {
          const [kk, Fk, ak] = aw[tk];
          this.presentation.playParticles({
            pos1: [...Bk],
            pos2: Rk.map((kk => kk + 1)),
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
              minColor: [kk, Fk, ak, 1],
              maxColor: [Math.min(255, kk + 55), Math.min(255, Fk + 55), Math.min(255, ak + 90), 1]
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
      yJ() {
        var kk;
        const Fk = this.unlocked ? this.portal.unlockedBlock : null !== (kk = this.portal.lockedBlock) && void 0 !== kk ? kk : "Light Gray Portal",
          {
            min: Bk,
            max: Rk
          } = this.portal;
        for (let tk = Bk[0]; tk <= Rk[0]; tk++)
          for (let kk = Bk[1]; kk <= Rk[1]; kk++)
            for (let ak = Bk[2]; ak <= Rk[2]; ak++) this.presentation.hasChunk(tk, kk, ak) && this.presentation.OW(tk, kk, ak) !== Fk && this.presentation.uE(tk, kk, ak, Fk)
      }
    }
    const bw = {
        farming_1: {
          raises: kk => "NPC" === kk.type && "chef" === kk.variation,
          rise: .4
        },
        fishing_1: {
          raises: kk => "Draugr Warper" === kk.type,
          rise: .4
        }
      },
      ww = (kk, Fk, Bk, ak) => {
        let {
          localPlayerId: Xk
        } = ak;
        const bk = new it({
          translate: (kk, Fk) => (0, ut.r)(Pb.c.get().getCurrentLanguageCode(), kk, Fk),
          translateWithIcons: (kk, Fk) => (0, ut.m)(Pb.c.get().getCurrentLanguageCode(), kk, Fk),
          setMenuOpen: kk => {
            kk ? (0, xk.q)() : (0, xk.f)()
          },
          dismissMenu: xk.i,
          publishSkills: kk => {
            jk.o.Hf(XB, kk, !0)
          },
          publishQuests: kk => {
            jk.o.Hf(sB, kk, !0)
          },
          publishQuestNotification: kk => {
            jk.o.Hf(VB, kk, !0)
          },
          publishDungeons: kk => {
            jk.o.Hf(eB, kk, !0)
          },
          publishCollections: kk => {
            jk.o.Hf(TB, kk, !0)
          },
          publishMap: kk => {
            jk.o.Hf(Jk, kk, !0)
          },
          publishHud: kk => {
            jk.o.Hf(mt, kk, !0)
          },
          publishPortalTransit: kk => {
            jk.o.Hf(DB, kk, !0)
          },
          isLoadingScreenUp: () => Lt.c.get("loadingOverlayVisible"),
          publishDailyReward: kk => {
            jk.o.Hf(hB, kk, !0)
          },
          publishMailbox: kk => {
            jk.o.Hf(KB, kk, !0)
          },
          publishQuestGraph: kk => {
            jk.o.Hf(jB, kk, !0)
          },
          publishForge: kk => {
            jk.o.Hf(yR, kk, !0)
          },
          publishSmuggler: kk => {
            jk.o.Hf(WR, kk, !0)
          },
          publishKeepersChair: kk => {
            jk.o.Hf(NR, kk, !0)
          },
          publishReachLog: kk => {
            jk.o.Hf(uR, kk, !0)
          },
          publishLampLight: kk => {
            jk.o.Hf(TR, kk, !0)
          },
          publishMagmaward: kk => {
            jk.o.Hf(DR, kk, !0)
          },
          publishGlowtide: kk => {
            jk.o.Hf(PR, kk, !0)
          },
          publishGlowMeter: kk => {
            jk.o.Hf(qR, kk, !0)
          },
          publishHushWait: kk => {
            jk.o.Hf(ZR, kk, !0)
          },
          publishPassage: kk => {
            jk.o.Hf(YR, kk, !0)
          },
          publishTideCharts: kk => {
            jk.o.Hf(KR, kk, !0)
          },
          publishRegulars: kk => {
            jk.o.Hf(Ft, kk, !0)
          },
          publishHiddenWaters: kk => {
            jk.o.Hf(bt, kk, !0)
          },
          publishDialogue: kk => {
            jk.o.Hf(dt, kk, !0)
          },
          publishAutographs: kk => {
            jk.o.Hf(et, kk, !0)
          },
          onDailyRewardStarted: kk => {
            Uk.playSound(Xk, kk.day === Hk ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (kk, Fk) => {
            Uk.playSound(Xk, "exp_collect", .35, 1 + .6 * kk / (Fk - 1)), jk.o.Hf(qB, kk === Fk - 1)
          },
          onDailyRewardItemLanded: kk => {
            Uk.playSound(Xk, "pickUp", .6, 1 + .15 * kk)
          },
          onMailboxStarted: () => {
            Uk.playSound(Xk, "rpgMetalClick", .6, 1), Uk.playSound(Xk, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            Uk.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: qb.j,
          requestTracking: kk => {
            Uk.sendCommand(`quests track ${kk}`)
          },
          requestDungeonEnter: (kk, Fk) => {
            Uk.sendCommand(`dungeonEnter ${kk} ${Fk}`)
          },
          requestQuestJump: kk => {
            Uk.sendCommand(`${Gk} jump ${kk}`)
          },
          requestQuestArrive: (kk, Fk) => {
            const Bk = `${Gk} arrive ${kk}`;
            Uk.sendCommand(Fk ? `${Bk} complete` : Bk)
          },
          requestForge: kk => {
            let {
              blade: Fk,
              guard: Bk,
              handle: Rk
            } = kk;
            Uk.sendCommand(`forge ${Fk} ${Bk} ${Rk}`)
          },
          requestDialogue: () => {
            Uk.sendCommand("quests dialogue")
          },
          requestSmuggle: (kk, Fk) => {
            Uk.sendCommand(`smuggle ${kk} ${Fk}`)
          },
          requestKeepersChairAim: kk => {
            Uk.sendCommand(`keeperschair-aim ${kk}`)
          },
          requestReachLogOpen: () => {
            Uk.sendCommand("reachlog-open")
          },
          requestLampLight: kk => {
            Uk.sendCommand(`${kk}`)
          },
          requestTravel: kk => {
            Uk.sendCommand(`map travel ${kk.kind} ${kk.id} ${kk.requestId}`)
          }
        });
        let wk, dk, sk, Vk, Ak, ek, yk, ik, Yk, Lk, Ok, Nk, uk;
        const gk = new nb;
        let Uk, ck = null;
        const Tk = bw[null !== Bk && void 0 !== Bk ? Bk : ""],
          Pk = (kk, Fk) => {
            null !== Tk && void 0 !== Tk && Tk.raises(Fk) && Uk.setNametagOffset(kk, Tk.rise)
          },
          Ck = new zb({
            getLocalHookPosition: () => {
              const kk = Zk.getLocalHook();
              return null !== kk && Uk.checkValid(kk) ? Uk.rW(kk) : null
            },
            playParticles: kk => {
              Uk.playParticleEffect(kk)
            },
            vibrate: kk => {
              lk.e.play("fishBite", kk)
            },
            now: () => performance.now()
          }),
          Zk = new Gb({
            getLineOwner: kk => Uk.checkValid(kk) ? Uk.getLineOwner(kk) : null,
            isLocalPlayer: kk => Uk.isLocalPlayer(kk),
            getHookPosition: kk => {
              const [Fk, , Bk] = Uk.rW(kk);
              return [Fk, Bk]
            },
            isHushWaiting: () => {
              var kk;
              return "waiting" === (null === (kk = bk.hushWait.getSnapshot()) || void 0 === kk ? void 0 : kk.phase)
            },
            onCastLanded: (kk, Fk) => {
              bk.tideCharts.castLanded(kk, Fk)
            },
            onLocalHookSettled: () => {
              Ck.onLocalHookSettled()
            },
            onLocalWaitEnded: kk => {
              Ck.onLocalWaitEnded(kk)
            },
            now: () => performance.now()
          }),
          nk = new kw({
            now: () => performance.now(),
            playerPosition: () => Uk.checkValid(Xk) ? Uk.rW(Xk) : null,
            play: (kk, Fk, Bk, Rk, tk, ak) => Uk.playSound(Xk, kk, Fk, 1, {
              gt: Bk,
              maxHearDist: Rk,
              refDistance: tk
            }, ak)
          }),
          Ik = new Map;
        let Qk;
        return {
          onCreate: kk => {
            if (Uk = kk, ck = new Bw.SkyblockEntityFacing(kk, Tk ? Pk : null), bk.portalTransit.resumeArrival(null !== Bk && void 0 !== Bk ? Bk : null), (null !== Bk && void 0 !== Bk ? Bk : Rk) === Rk) {
              let kk = -1 / 0;
              Qk = jk.o.subscribe("toggleMenu", (Fk => {
                const Bk = performance.now();
                "inventory|Workbench" !== Fk || "cross_to_hub" !== bk.quests.getTrackedQuestId() || Bk - kk < 1e4 || (kk = Bk, Uk.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [Rk, tk] of Object.entries(null !== (Fk = rk[null !== Bk && void 0 !== Bk ? Bk : ""]) && void 0 !== Fk ? Fk : {})) {
              var Fk;
              Ik.set(Rk, new Xw({
                hasChunk: (Fk, Bk, Rk) => kk.isBlockInLoadedChunk(Fk, Bk, Rk),
                OW: (Fk, Bk, Rk) => kk.blockIdToBlockName(kk.getBlockId(Fk, Bk, Rk)),
                uE: (Fk, Bk, Rk, tk) => {
                  kk.uE(Fk, Bk, Rk, tk)
                },
                playParticles: Fk => {
                  kk.playParticleEffect(Fk)
                }
              }, tk))
            }
            uk = (0, Fw.e)((kk => function(kk) {
              return Object.hasOwn(ZF, kk) || kk.startsWith("npc_")
            }(kk) ? KF(kk) : null)), bk.resolveItemName = (Fk, Bk) => {
              const Rk = kk.getItemStat(Xk, Fk, "displayName");
              return Rk && "object" === typeof Rk && "translationKey" in Rk ? Bk(Rk.translationKey, (0, ut.k)(Rk.params, hb.b.shown)) : "string" === typeof Rk ? Bk(Rk) : Fk
            }, bk.quests.notifications.onShown = kk => {
              "quest" === kk ? Uk.playSound(Xk, "magicAccent1", 1, 1) : "skillLevel" === kk ? Uk.playSound(Xk, "magicAccent1", 1, .6) : "landmark" === kk ? Uk.playSound(Xk, "trumpetFlare", 1, .6) : "npcNote" === kk ? Uk.playSound(Xk, "magicAccent2", .8, 1.1) : "started" === kk ? Uk.playSound(Xk, (0, gb.c)("bigDrumSwish"), 1, 1) : Uk.playSound(Xk, (0, gb.c)("rpgHandleSmallLeather"), 1, 1)
            }, bk.forge.onPartSelected = () => {
              Uk.playSound(Xk, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, bk.forge.onForgeStarted = (Fk, Bk, Rk) => cb(kk, Xk, Fk, Bk, Rk), bk.smuggler.onBought = () => {
              Uk.playSound(Xk, (0, gb.c)("rpgHandleSmallLeather"), 1, 1), Uk.playSound(Xk, "chestOpen", .6, 1)
            }, bk.compass.register(new fk(bk.map, !0)), bk.compass.register(new fk(bk.map, !1)), bk.compass.register(new Wk(bk.map)), bk.compass.register(new vk((() => bk.quests.getSnapshot().compassTarget)));
            for (const Bk of ["enemy", "npc"]) bk.compass.register(new mk(bk.map, Bk, (Fk => kk.checkValid(Fk) ? kk.rW(Fk) : void 0), (Fk => kk.isAlive(Fk))))
          },
          onAfterRender: (kk, Fk) => {
            const Bk = Uk.checkValid(Xk) ? Uk.rW(Xk) : null;
            bk.navigation.afterRender(Bk, performance.now(), Fk), bk.glowtide.afterRender(Bk, Fk.cameraHeading), bk.tideCharts.afterRender(Bk), Zk.afterRender()
          },
          onClose: () => {
            var kk, Fk, Bk, Rk, tk, ak, Xk, Jk, ek, fk, mk, Wk, vk, Ek, Sk;
            Qk && jk.o.unsubscribe(Qk), null === (kk = uk) || void 0 === kk || kk(), gk.dispose(), nk.dispose(), null === (Fk = ck) || void 0 === Fk || Fk.dispose(), Zk.dispose(), bk.dispose(), null === (Bk = wk) || void 0 === Bk || Bk(), null === (Rk = dk) || void 0 === Rk || Rk(), null === (tk = sk) || void 0 === tk || tk(), null === (ak = Vk) || void 0 === ak || ak(), null === (Xk = Ak) || void 0 === Xk || Xk(), null === (Jk = yk) || void 0 === Jk || Jk(), null === (ek = undefined) || void 0 === ek || ek(), null === (fk = ik) || void 0 === fk || fk(), null === (mk = Yk) || void 0 === mk || mk(), null === (Wk = Lk) || void 0 === Wk || Wk(), null === (vk = Ok) || void 0 === vk || vk(), null === (Ek = undefined) || void 0 === Ek || Ek(), null === (Sk = Nk) || void 0 === Sk || Sk()
          },
          onPlayerChangeBlock: (kk, Fk, Rk, ak, wk, dk) => {
            if (kk === Xk && "Air" === dk) {
              const kk = Uk.getClientOption(Xk, "creative");
              bk.skills.predictBlock([Fk, Rk, ak], wk, kk);
              const dk = function(kk, Fk) {
                  if ("hub" === Fk || "farming_1" === Fk || "mining_1" === Fk) return !hk.has(kk) || "hub" !== Fk && "mining_1" !== Fk ? Object.hasOwn(zk, kk) ? zk[kk] : void 0 : Dk
                }(wk, Bk),
                sk = ("hub" === Bk || "mining_1" === Bk) && (tk.rd.some((kk => kk === wk)) || Object.hasOwn(qk, wk) || "mining_1" === Bk && "Block of Coal" === wk);
              kk || void 0 === dk && !sk || Uk.uE(Fk, Rk, ak, null !== dk && void 0 !== dk ? dk : Dk)
            }
          },
          onPlayerAttackEntity: (kk, Fk) => {
            if (kk !== Xk || "Player" !== Uk.getEntityType(Fk)) return;
            const [Bk, Rk, tk] = Uk.rW(Fk);
            Uk.burstParticlePreset("critical", [Bk, Rk + 1, tk], 10)
          },
          onChangeBlockFail: kk => {
            for (const {
                Pa: Fk
              }
              of kk) bk.skills.rejectBlock(Fk)
          },
          onReceivedMessageFromServer: (kk, Fk) => {
            if ("skyblockGatedPortal" === kk) {
              var Bk;
              const [kk, Rk] = Fk;
              return void(null === (Bk = Ik.get(kk)) || void 0 === Bk || Bk.he(Rk))
            }
            if ("skyblockDailyReward" === kk) return void bk.dailyReward.he(Fk);
            if ("skyblockMailbox" === kk) return void bk.mailbox.he(Fk);
            if ("skyblockPortalTransit" === kk) return void bk.portalTransit.he(Fk);
            if ("skyblockLoot" === kk) return void gk.he(Uk, Fk);
            if ("skyblockLava" === kk) return void nk.he(Fk);
            if ("skyblockForge" === kk) return void bk.forge.he(Fk);
            if ("skyblockMagmaward" === kk) return void bk.magmaward.he(Fk);
            if ("skyblockGlowtide" === kk) return void bk.glowtide.he(Fk);
            if ("skyblockGlowMeter" === kk) return void bk.glowMeter.he(Fk);
            if ("skyblockHushWait" === kk) return void bk.hushWait.he(Fk);
            if ("skyblockPassage" === kk) {
              const kk = Fk;
              return bk.passage.he(kk), bk.reachLog.receivePassagePhase(kk.passagePhase), Lk ??= (0, Ek.z)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: bk.passage.show
              }), void bk.keepersChair.receivePassage({
                keepersChairPassagePhase: kk.passagePhase,
                keepersChairPassageNextPhase: kk.passageNextPhase,
                keepersChairPassageTurnsInMs: kk.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === kk) {
              const kk = Fk;
              return bk.tideCharts.he(kk), void(kk.tideCharts.length > 0 && (Ok ??= (0, Ek.z)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: bk.tideCharts.show
              })))
            }
            if (kk === pk.x) {
              var Rk;
              const {
                hookId: kk,
                waiting: Bk
              } = Fk;
              return void Zk.hookWaiting(kk, null !== (Rk = null === Bk || void 0 === Bk ? void 0 : Bk.remainingMs) && void 0 !== Rk ? Rk : null)
            }
            if ("skyblockBiteTell" === kk) return void Ck.receiveTell(Fk);
            if ("skyblockSmuggler" === kk) return void bk.smuggler.he(Fk);
            if ("skyblockKeepersChair" === kk) return bk.keepersChair.he(Fk), void bk.lampLight.setAtChair(bk.keepersChair.isAtChair());
            if ("skyblockLampLight" === kk) {
              const kk = Fk;
              var tk;
              if (bk.lampLight.he(kk), kk.lampLightReleasing) Yk ??= (0, Ek.z)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  bk.lampLight.setRelease(!1)
                }
              });
              else null === (tk = Yk) || void 0 === tk || tk(), Yk = void 0;
              return
            }
            if ("skyblockRegulars" === kk) return void bk.regulars.he(Fk);
            if ("skyblockHiddenWaters" === kk) return void bk.hiddenWaters.he(Fk);
            if ("skyblockReachLog" === kk) return bk.reachLog.he(Fk), void(ik ??= (0, Ek.z)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: gR
              },
              onClick: bk.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === kk) {
              for (const [kk, Bk, Rk, tk] of Fk) Uk.uE(kk, Bk, Rk, tk);
              return
            }
            if ("skyblockHud" === kk) bk.receiveHud(Fk);
            else if ("skyblockMap" === kk) bk.map.he(Fk);
            else if (kk === Kk.e) bk.skills.he(Fk);
            else if (kk === Mk && "dialogue" === Fk.kind) bk.dialogue.he(Fk);
            else if (kk === Mk) bk.quests.he(Fk);
            else if ("skyblockDungeons" === kk) bk.dungeons.he(Fk);
            else if ("sbCollections" === kk) bk.collections.he(Fk);
            else if ("skyblockQuestGraph" === kk) bk.questGraph.he(Fk);
            else {
              if ("skyblockAutographs" !== kk) return;
              bk.autographs.he(Fk)
            }
            if (!dk && bk.map.getSnapshot().enabled) {
              const kk = (0, Ek.z)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: bk.map.show
                }),
                Fk = (0, xk.s)(bk.map.show);
              dk = () => {
                kk(), Fk()
              }
            }!sk && bk.skills.getSnapshot().enabled && (sk = (0, Ek.z)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: bk.skills.show
            })), !yk && bk.collections.getSnapshot().enabled && (yk = (0, Ek.z)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: bk.collections.show
            })), !Vk && bk.quests.getSnapshot().enabled && (Vk = (0, Ek.z)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: bk.quests.show
            })), !Nk && bk.autographs.getSnapshot().enabled && (Nk = (0, Ek.z)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: bk.autographs.show
            }));
            const ak = bk.dungeons.getSnapshot().enabled;
            var Xk;
            (sk || Vk || ak) && ek !== ak && (ek = ak, null === (Xk = Ak) || void 0 === Xk || Xk(), Ak = (0, Ek.z)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: cF
              },
              disabled: !ak,
              panel: !0,
              onClick: bk.dungeons.show
            }));
            wk || (wk = (0, xk.w)((0, Sk.createElement)(ub, {
              controller: bk
            }), {
              content: (0, Sk.createElement)(Mb, {
                controller: bk
              }),
              onClose: bk.close
            }))
          },
          yJ: () => {
            var kk;
            for (const Fk of Ik.values()) Fk.yJ();
            gk.yJ(Uk), nk.yJ(), null === (kk = ck) || void 0 === kk || kk.yJ(), bk.skills.yJ(), bk.quests.yJ(), bk.dailyReward.yJ(), bk.mailbox.yJ(), bk.map.yJ()
          }
        }
      }
  },
  36097: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk,
      e: () => Rk
    });
    const Rk = "skyblockSkills",
      tk = "skills_test_gym"
  },
  9029: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => tk,
      f: () => Xk
    });
    const Rk = [{
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

    function tk(kk) {
      let Fk, Bk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof kk) {
        if (!Number.isFinite(kk)) return "0";
        if (Math.abs(kk) < 100) {
          const Fk = kk < 0 ? "-" : "",
            Bk = Math.abs(kk);
          return Bk >= 10 ? `${Fk}${Bk.toFixed(1).replace(/\.0$/,"")}` : `${Fk}${Bk.toFixed(2).replace(/\.?0+$/,"")}`
        }
        Fk = BigInt(Math.floor(kk))
      } else Fk = kk;
      const tk = Fk < 0n ? -Fk : Fk,
        ak = Fk < 0n ? "-" : "",
        Xk = tk.toString();
      if (Xk.length <= Bk) return `${ak}${Xk}`;
      const bk = 3 * Math.floor((Xk.length - 1) / 3);
      if (bk < 3) return `${ak}${Xk}`;
      if (bk > 3 * Rk.length) {
        const kk = Xk[0],
          Fk = Xk.slice(1, 3).replace(/0+$/, "");
        return `${ak}${Fk?`${kk}.${Fk}`:kk}e${Xk.length-1}`
      }
      const {
        threshold: wk,
        suffix: dk
      } = Rk[Rk.length - bk / 3], sk = tk / wk, Vk = Number(1000n * (tk % wk) / wk), Jk = Number(sk) + Vk / 1e3;
      let Ak;
      return Ak = Jk >= 100 ? Math.floor(Jk).toString() : Jk >= 10 ? Jk.toFixed(1).replace(/\.0$/, "") : Jk.toFixed(2).replace(/\.?0+$/, ""), `${ak}${Ak}${dk}`
    }
    const ak = Rk.map((kk => {
      let {
        threshold: Fk,
        suffix: Bk
      } = kk;
      return {
        threshold: Number(Fk),
        suffix: Bk
      }
    })).filter((kk => {
      let {
        threshold: Fk
      } = kk;
      return Number.isFinite(Fk)
    }));

    function Xk(kk) {
      const Fk = Math.abs(kk),
        Bk = kk < 0 ? "-" : "";
      for (const {
          threshold: Rk,
          suffix: tk
        }
        of ak)
        if (Fk >= Rk) {
          const kk = Fk / Rk;
          if (kk >= 1e3) return `${Bk}${Fk.toExponential(2).replace("e+","e")}`;
          let ak;
          return ak = kk >= 100 ? Math.floor(kk).toString() : kk >= 10 ? kk.toFixed(1).replace(/\.0$/, "") : kk.toFixed(2).replace(/\.?0+$/, ""), `${Bk}${ak}${tk}`
        } return `${Bk}${Fk}`
    }
  },
  38195: (kk, Fk, Bk) => {
    var Rk = {
      "./combat_1.png": 38199,
      "./dungeon_crumbling_crypt.png": 38204,
      "./dungeon_frozen_hollow.png": 38206,
      "./dungeon_wildwood_grove.png": 38215,
      "./dungeons.png": 38220,
      "./farming_1.png": 38222,
      "./fishing_1.png": 38231,
      "./hub.png": 38233,
      "./island.png": 38237,
      "./mining_1.png": 38242,
      "./mining_1_bridge.png": 38249,
      "./mining_1_gallery.png": 38255,
      "./mining_1_hollow.png": 38263,
      "./mining_1_village.png": 38268
    };

    function tk(kk) {
      var Fk = ak(kk);
      return Bk(Fk)
    }

    function ak(kk) {
      if (!Bk.o(Rk, kk)) {
        var Fk = new Error("Cannot find module '" + kk + "'");
        throw Fk.code = "MODULE_NOT_FOUND", Fk
      }
      return Rk[kk]
    }
    tk.keys = function() {
      return Object.keys(Rk)
    }, tk.resolve = ak, kk.exports = tk, tk.id = 38195
  },
  38199: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  38204: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  38206: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  38215: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  38220: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  38222: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/farming_1.08302e28e41bf98474fe.png"
  },
  38231: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  38233: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/hub.8b20a64678134496251d.png"
  },
  38237: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/island.113e20c7bd7db93fe1ce.png"
  },
  38242: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/mining_1.68cac4bdadc5ef809ae5.png"
  },
  38249: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/mining_1_bridge.56ff82ba845db0b52726.png"
  },
  38255: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/mining_1_gallery.4e799e6329dbc66249ce.png"
  },
  38263: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  38268: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/mining_1_village.c2a625c1c4541a1fbe65.png"
  },
  18196: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  20335: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  22748: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  24340: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  26019: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  26034: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  38182: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);