export const id = 190;
export const ids = [49, 190];
export const modules = {
  38401: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ku,
      f: () => Qu
    });
    const Eu = new WeakMap;

    function Ku(uu, Ru) {
      return Eu.set(uu, Ru), uu
    }

    function Qu(uu) {
      var Ru;
      return null !== (Ru = Eu.get(uu)) && void 0 !== Ru ? Ru : null
    }
  },
  38303: (uu, Ru, yu) => {
    function Eu(uu, Ru, yu) {
      var Eu;
      const {
        width: Ku,
        height: Qu
      } = yu, mu = null !== (Eu = uu.text) && void 0 !== Eu ? Eu : uu, Ju = (mu.x / 100 - .5) * Ku, Nu = (mu.y / 100 - .5) * Qu, Xu = Ku / 2 - Ru.x;
      if (null !== uu.text && Math.abs(Ju) <= Xu && Nu >= Ru.top - Qu / 2 && Nu <= Qu / 2 - Ru.bottom) return {
        x: mu.x,
        y: mu.y
      };
      const Vu = Math.min(0 === Ju ? 1 / 0 : Xu / Math.abs(Ju), Nu > 0 ? (Qu / 2 - Ru.bottom) / Nu : Nu < 0 ? (Ru.top - Qu / 2) / Nu : 1 / 0);
      return !Number.isFinite(Vu) || Vu < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + Ju * Vu / Ku * 100,
        y: 50 + Nu * Vu / Qu * 100
      }
    }
    yu.d(Ru, {
      d: () => Eu
    })
  },
  38308: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu
    });
    const Eu = 4,
      Ku = 12e3,
      Qu = 1e3;
    class mu {
      constructor() {
        let {
          limit: uu = Eu,
          windowMs: Ru = Ku,
          spacingMs: yu = Qu,
          now: mu = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = uu, this.windowMs = Ru, this.spacingMs = yu, this.now = mu
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const uu of this.priority) uu.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const uu = this.now();
        this.sent.push(uu), this.lastSentAt = uu, this.schedule(), this.notify()
      }
      addPriority(uu) {
        return this.priority.add(uu), () => {
          this.priority.delete(uu)
        }
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const uu of this.priority)
          if (uu.waiting()) return !0;
        return !1
      }
      prune() {
        const uu = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= uu;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const uu = this.now(),
          Ru = this.lastSentAt + this.spacingMs,
          yu = Math.min(Ru > uu ? Ru : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        yu !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, yu - uu)))
      }
      notify() {
        for (const uu of this.listeners) uu()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38299: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu
    });
    class Eu {
      constructor(uu, Ru, yu) {
        this.Op = uu, this.beforeOpen = Ru, this.afterClose = yu, this.open = !1, this.VS = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.VS && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(uu) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(uu)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.VS = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.VS || (this.snapshot = this.buildSnapshot(), this.Op(this.snapshot))
      }
    }
  },
  38405: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      SkyblockEntityFacing: () => Ju,
      needsSkyblockEntityFacing: () => mu
    });
    var Eu = yu(602),
      Ku = yu(4053),
      Qu = yu(38414);

    function mu(uu, Ru) {
      if (uu.metaInfo === Eu.b || "Iron Guardian" === uu.type || "Gold Guardian" === uu.type) return !0;
      if ("Pig" === uu.type) return "sitting" === uu.pose;
      if ("Person" !== uu.meshKind || void 0 === uu.meshOpts) return !1;
      let yu = null === Ru || void 0 === Ru ? void 0 : Ru.get(uu.meshOpts);
      if (void 0 === yu) {
        var Qu, mu;
        const Eu = (0, Ku.k)(uu);
        yu = !1, "pig_napoleon" === (null === Eu || void 0 === Eu || null === (Qu = Eu.opts.textures) || void 0 === Qu ? void 0 : Qu.head) ? yu = !0 : "npc_pig_head" === (null === Eu || void 0 === Eu || null === (mu = Eu.opts.textures) || void 0 === mu ? void 0 : mu.head) && (yu = "sitting" === Eu.opts.pose || "sitting"), Ru && (Ru.size >= 256 && Ru.clear(), Ru.set(uu.meshOpts, yu))
      }
      return "sitting" === yu ? "sitting" === uu.pose : yu
    }(0, Qu.c)("skyblock", ((uu, Ru) => {
      Ru.setFacingTolerance(mu(uu) ? 0 : null)
    }));
    class Ju {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = uu, this.alsoVisit = Ru, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = uu => {
          var Ru;
          const yu = this.api.getEntityInfo(uu);
          yu && (mu(yu, this.meshFacingCache) && (this.api.setFacingTolerance(uu, 0), this.nextFacing.add(uu)), null === (Ru = this.alsoVisit) || void 0 === Ru || Ru.call(this, uu, yu))
        }
      }
      sr() {
        const {
          api: uu
        } = this, Ru = this.nextFacing;
        uu.forEachEntity(this.visit);
        for (const yu of this.facing) Ru.has(yu) || uu.setFacingTolerance(yu, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = Ru
      }
      dispose() {
        for (const uu of this.facing) this.api.setFacingTolerance(uu, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  38290: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      default: () => JN
    });
    const Eu = "island";
    var Ku = yu(343);
    const Qu = (0, Ku.Jb)([0, 0, -1]),
      mu = [{
        name: "S",
        bearing: (0, Ku.Jb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, Ku.Jb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: Qu
      }, {
        name: "W",
        bearing: (0, Ku.Jb)([1, 0, 0])
      }];

    function Ju(uu, Ru, yu) {
      return [100 * (yu.mapMaxX - uu) / (yu.mapMaxX - yu.mapMinX), 100 * (Ru - yu.mapMinZ) / (yu.mapMaxZ - yu.mapMinZ)]
    }

    function Nu(uu, Ru, yu) {
      const Ku = "local" === Ru,
        Qu = uu.background,
        mu = Ru => Qu ? Ju(Ru[0] - uu.mapOrigin[0], Ru[2] - uu.mapOrigin[2], Qu.bounds) : [50, 50],
        Nu = (uu.insideDungeon ? [] : uu.landmarks).map((uu => {
          var Ru, Eu;
          return {
            id: uu.id,
            name: yu(uu.visited && uu.nameKey ? null !== (Ru = uu.mapLabelKey) && void 0 !== Ru ? Ru : uu.nameKey : "skyblockGame:mapUnknown"),
            icon: uu.visited && null !== (Eu = uu.icon) && void 0 !== Eu ? Eu : "unknown",
            visited: uu.visited,
            current: !1,
            position: mu(uu.position),
            travelKind: "landmark",
            travelId: uu.id
          }
        })),
        Vu = uu.zones.map((Ru => {
          var Eu;
          return {
            id: Ru.id,
            name: yu(Ru.visited && Ru.nameKey ? Ru.nameKey : "skyblockGame:mapUnknown"),
            icon: Ru.visited && null !== (Eu = Ru.icon) && void 0 !== Eu ? Eu : "unknown",
            visited: Ru.visited,
            current: Ru.id === uu.zoneId,
            position: Ru.position,
            thumbnail: Ru.visited ? Ru.id : void 0,
            travelKind: "zone",
            travelId: Ru.id
          }
        })),
        ru = uu.insideDungeon || !Qu ? [] : uu.portals.map((uu => {
          var Ru;
          return {
            id: uu.id,
            name: yu(null !== (Ru = uu.nameKey) && void 0 !== Ru ? Ru : "skyblockGame:mapUnknown"),
            icon: uu.visited ? "dungeons" === uu.destination ? "portal_orange" : "portal" : "unknown",
            visited: uu.visited,
            current: !1,
            position: mu(uu.position),
            colour: uu.colour,
            travelKind: "zone",
            travelId: uu.destination
          }
        })),
        Bu = Ku ? Nu : Vu,
        xu = Bu.filter((uu => uu.visited)).length,
        Su = Qu ? (Qu.bounds.mapMaxX - Qu.bounds.mapMinX) / (Qu.bounds.mapMaxZ - Qu.bounds.mapMinZ) : 2,
        pu = Qu ? JSON.stringify([Qu.bounds, uu.mapOrigin]) : "";
      return {
        local: Ku,
        points: Bu,
        portals: Ku ? ru : [],
        progress: Bu.length ? yu("skyblockGame:mapDiscovered", {
          current: String(xu),
          total: String(Bu.length)
        }) : null,
        percent: Bu.length ? 100 * xu / Bu.length : 0,
        canTravel: [...Bu, ...Ku ? ru : []].some((uu => uu.visited && !uu.current)),
        noLandmarks: Ku && !uu.insideDungeon && 0 === Nu.length,
        background: Qu ? {
          imageKey: Qu.imageKey,
          fallbackImageKey: uu.zoneId,
          geometryKey: pu,
          label: yu(Qu.labelKey),
          colour: Qu.backgroundColour,
          ratio: Su
        } : null,
        connections: Xu(uu.zones),
        minimap: Qu ? {
          imageKey: Qu.imageKey,
          fallbackImageKey: uu.zoneId,
          geometryKey: pu,
          label: yu(Qu.labelKey),
          colour: Qu.backgroundColour,
          caption: yu(uu.zoneId === Eu ? "skyblockGame:zoneIsland" : Qu.labelKey),
          width: (Qu.bounds.mapMaxX - Qu.bounds.mapMinX) / Qu.minimapSpan * 100 + "%",
          height: (Qu.bounds.mapMaxZ - Qu.bounds.mapMinZ) / Qu.minimapSpan * 100 + "%",
          markers: [...Nu, ...ru]
        } : null
      }
    }

    function Xu(uu) {
      const Ru = new Set;
      return uu.flatMap((yu => yu.connections.flatMap((Eu => {
        const Ku = uu.find((uu => uu.id === Eu)),
          Qu = [yu.id, Eu].sort().join("|");
        return !Ku || Ru.has(Qu) ? [] : (Ru.add(Qu), [{
          id: `${yu.id}-${Eu}`,
          start: yu.position,
          end: Ku.position,
          explored: yu.visited && Ku.visited
        }])
      }))))
    }
    var Vu = yu(38299);
    class ru extends Vu.b {}
    const Bu = "skyblockMapView";
    class xu extends ru {
      constructor(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(uu, Eu, Ku), this.requestTravel = Ru, this.translate = yu, this.now = Qu, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = uu => {
          this.tab = uu, this.feedbackKey = "", this.emit()
        }, this.travel = (uu, Ru) => {
          if (!this.map || this.pending || this.VS) return;
          const yu = ("zone" === uu ? this.map.zones : this.map.landmarks).find((uu => uu.id === Ru));
          if (yu) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in yu && !yu.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (yu.visited)
              if ("zone" === uu && Ru === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const yu = ++this.nextRequestId;
                this.pending = {
                  requestId: yu,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: uu,
                  id: Ru,
                  requestId: yu
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
      setTranslator(uu) {
        this.translate = uu, this.emit()
      }
      SS(uu) {
        var Ru;
        if (!this.VS)
          if ("entities" !== uu.kind)
            if ("open" !== uu.kind) {
              var yu, Eu;
              if ("snapshot" === uu.kind)(null === (yu = uu.snapshot) || void 0 === yu ? void 0 : yu.zoneId) !== (null === (Eu = this.map) || void 0 === Eu ? void 0 : Eu.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = uu.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === uu.kind) {
                var Ku;
                uu.requestId === (null === (Ku = this.pending) || void 0 === Ku ? void 0 : Ku.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (uu.requestId === (null === (Ru = this.pending) || void 0 === Ru ? void 0 : Ru.requestId)) {
                var Qu;
                this.pending = null, this.feedbackKey = null !== (Qu = uu.errorKey) && void 0 !== Qu ? Qu : "", null === uu.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = uu.entities
      }
      sr() {
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
          presentation: this.map ? Nu(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const Su = 67.5 * Math.PI / 180;

    function pu(uu, Ru) {
      const yu = Math.abs(uu);
      if (yu > Su || Ru.trackHalfWidth <= 0) return null;
      const Eu = Ru.trackHalfWidth,
        Ku = Ru.screenHalfWidth / (Ru.tanHalfFovX * Math.max(.5, Math.cos(Ru.pitch))),
        Qu = Math.min(Math.atan(.6 * Eu / Ku), .75 * Su),
        mu = Ku * Math.tan(Qu);
      let Ju;
      if (yu <= Qu) Ju = Ku * Math.tan(yu);
      else {
        const uu = Su - Qu,
          Ru = Math.max(0, Ku * uu / (Math.cos(Qu) ** 2 * (Eu - mu)) - 1),
          Nu = (yu - Qu) / uu;
        Ju = mu + (Eu - mu) * (1 + Ru) * Nu / (1 + Ru * Nu)
      }
      return 50 + Math.sign(uu) * Ju * 50 / Eu
    }
    class Tu {
      constructor(uu, Ru) {
        this.map = uu, this.visited = Ru, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = Ru ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const uu = this.map.getSnapshot().map;
        return !uu || uu.insideDungeon ? [] : uu.landmarks.filter((uu => uu.visited === this.visited)).map((uu => {
          var Ru, yu;
          return {
            id: `landmark:${uu.id}`,
            position: uu.position,
            icon: null !== (Ru = uu.icon) && void 0 !== Ru ? Ru : "unknown",
            nameKey: null !== (yu = uu.nameKey) && void 0 !== yu ? yu : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class Wu {
      constructor(uu, Ru, yu, Eu) {
        this.map = uu, this.kind = Ru, this.position = yu, this.alive = Eu, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = Ru, this.range = "enemy" === Ru ? 48 : 64, this.limit = 12
      }
      mH(uu) {
        if ("enemy" !== this.kind || this.alive(uu.XQ)) return this.position(uu.XQ)
      }
      getPoints() {
        const uu = [];
        for (const Eu of this.map.getEntities()) {
          if (Eu.kind !== this.kind || "enemy" === this.kind && !this.alive(Eu.compassEntityId)) continue;
          const Ku = this.position(Eu.compassEntityId);
          var Ru, yu;
          if (Ku) uu.push({
            id: `${this.kind}:${Eu.compassEntityId}`,
            XQ: Eu.compassEntityId,
            kind: this.kind,
            icon: null !== (Ru = Eu.icon) && void 0 !== Ru ? Ru : Eu.npcSkin ? `npc_${Eu.npcSkin}` : this.kind,
            displayName: Eu.displayName,
            position: Ku,
            nameKey: null !== (yu = Eu.nameKey) && void 0 !== yu ? yu : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return uu
      }
    }
    class ju {
      constructor(uu) {
        this.map = uu, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const uu = this.map.getSnapshot().map;
        return !uu || uu.insideDungeon ? [] : uu.portals.map((uu => {
          var Ru;
          return {
            id: "portal:" + uu.id,
            kind: "portal",
            position: uu.position,
            nameKey: null !== (Ru = uu.nameKey) && void 0 !== Ru ? Ru : "skyblockGame:compassUnvisitedZone",
            icon: uu.visited ? "dungeons" === uu.destination ? "portal_orange" : "portal" : "unknown",
            colour: uu.colour
          }
        }))
      }
    }
    class Hu {
      constructor(uu) {
        this.target = uu, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const uu = this.target();
        return uu ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: uu.position,
          nameKey: uu.nameKey
        }] : []
      }
    }

    function du(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : uu.position;
      const Qu = Eu[0] - Ru[0],
        mu = Eu[2] - Ru[2];
      return {
        ...uu,
        position: Eu,
        offset: Ku.c.computeShortestRotation(yu, (0, Ku.Jb)([Qu, 0, mu])),
        distance: Math.hypot(Qu, Eu[1] - Ru[1], mu)
      }
    }
    let bu;

    function Cu(uu, Ru) {
      var yu;
      return (null === (yu = bu) || void 0 === yu ? void 0 : yu.locale) !== Ru && (bu = {
        locale: Ru,
        near: new Intl.NumberFormat(Ru, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(Ru, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (uu < 10 ? bu.near : bu.far).format(uu)
    }
    class ku {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(uu) {
        return this.providers.set(uu.id, uu), this.refreshAt = 0, () => {
          this.providers.get(uu.id) === uu && (this.providers.delete(uu.id), this.refreshAt = 0)
        }
      }
      frame(uu, Ru, yu) {
        if (yu >= this.refreshAt) {
          this.refreshAt = yu + 200, this.candidates = [];
          for (const Ru of this.providers.values()) {
            if (!Ru.enabled) continue;
            const yu = Ru.getPoints().map((Ru => {
              const yu = Ru.position;
              return {
                point: Ru,
                distance: Math.hypot(yu[0] - uu[0], yu[1] - uu[1], yu[2] - uu[2])
              }
            })).filter((uu => uu.distance <= Ru.range)).sort(((uu, Ru) => uu.distance - Ru.distance)).slice(0, Ru.limit);
            for (const {
                point: uu
              }
              of yu) this.candidates.push({
              provider: Ru,
              point: uu
            })
          }
        }
        const Eu = [];
        for (const {
            point: Ku,
            provider: Qu
          }
          of this.candidates) {
          if (!Qu.enabled) continue;
          const yu = Qu.mH ? Qu.mH(Ku) : Ku.position;
          if (yu) {
            const Qu = du(Ku, uu, Ru, yu);
            Math.abs(Qu.offset) <= Su && Eu.push(Qu)
          }
        }
        return Eu
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var eu = yu(36449),
      Au = yu(64);
    const Du = [{
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
      Mu = Du.length;

    function Iu(uu) {
      return uu >= Mu ? 1 : uu + 1
    }
    const Gu = "skyblockQuests",
      Uu = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      nu = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function su(uu) {
      let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const yu = Math.max(0, Math.floor(uu)),
        Eu = Math.floor(yu % 1e3 / 100),
        Ku = Math.floor(yu / 1e3),
        Qu = Ku % 60,
        mu = Math.floor(Ku / 60),
        Ju = mu % 60,
        Nu = Math.floor(mu / 60),
        Xu = uu => uu < 10 ? `0${uu}` : String(uu),
        Vu = Ru ? `.${Eu}` : "";
      return Nu > 0 ? `${Nu}:${Xu(Ju)}:${Xu(Qu)}${Vu}` : `${Ju}:${Xu(Qu)}${Vu}`
    }
    const tu = "devquests",
      lu = "none",
      gu = {
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
      cu = "Compressed Messy Stone",
      Lu = {
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
      zu = ["Stone", "Diorite", "Andesite", "Granite"],
      Fu = new Set(zu),
      wu = (Object.keys(Lu), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const Zu = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function hu(uu, Ru) {
      const yu = Math.floor(5 * uu / (2 * Ru + 1));
      return Math.min(4, Math.max(0, yu))
    }
    var Pu = yu(1215);
    var iu = yu(36243);
    var Yu = yu(36445),
      ou = yu(34),
      qu = yu(8631);
    const Ou = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      vu = 1e3;

    function au(uu) {
      return Math.max(0, uu)
    }

    function fu(uu) {
      return 1 + .01 * au(uu)
    }

    function uR(uu) {
      return 1 + .005 * au(uu)
    }

    function RR(uu) {
      return 1 + .005 * au(uu)
    }

    function yR(uu) {
      return .01 * au(uu)
    }

    function ER(uu) {
      return 150 / (150 + au(uu))
    }

    function KR(uu) {
      return 1 + .002 * au(uu)
    }

    function QR(uu) {
      return Math.round(10 * uu) / 10
    }

    function mR(uu, Ru) {
      switch (uu) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: QR(100 * (uR(Ru) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: QR(100 * (fu(Ru) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: QR(100 * (RR(Ru) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: QR(100 * yR(Ru))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: QR(100 * (1 - ER(Ru)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: QR(100 * (KR(Ru) - 1))
          }
      }
    }

    function JR(uu) {
      return "farming" === uu ? 200 : 100
    }

    function NR(uu, Ru) {
      if (!Number.isSafeInteger(uu) || uu < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const yu = JR(Ru),
        Eu = uu => function(uu, Ru) {
          return JR(uu) * Ru * (Ru + 1) / 2
        }(Ru, uu);
      let Ku = Math.min(vu, Math.floor((Math.sqrt(8 * uu / yu + 1) - 1) / 2));
      return Ku < vu && Eu(Ku + 1) <= uu ? Ku++ : Eu(Ku) > uu && Ku--, {
        totalXp: uu,
        level: Ku,
        xpIntoLevel: uu - Eu(Ku),
        xpForNextLevel: Ku === vu ? null : yu * (Ku + 1)
      }
    }
    const XR = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function VR(uu) {
      return XR.has(uu)
    }
    const rR = new Set(Ku.wb);

    function BR(uu) {
      return rR.has(uu)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const xR = {
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
      SR = {
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
      pR = {
        ...SR,
        ...Object.fromEntries(Object.entries(wu).map((uu => {
          let [Ru, yu] = uu;
          return [Ru, 9 * SR[yu]]
        })))
      },
      TR = {
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
      WR = {
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
    const jR = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      HR = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function dR(uu) {
      return `rgb(${HR[uu].join(", ")})`
    }

    function bR(uu, Ru, yu) {
      if (!yu) return uu(Ru);
      const Eu = {};
      for (const [Ku, Qu] of Object.entries(yu)) Eu[Ku] = "string" === typeof Qu ? Qu : uu(Qu.translationKey);
      return uu(Ru, Eu)
    }
    class CR {
      constructor(uu, Ru) {
        this.now = uu, this.getJournal = Ru, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.jJ = !1, this.onShown = () => {}
      }
      enqueue(uu) {
        const Ru = kR(uu);
        if (Ru) this.pending.push(uu);
        else {
          const Ru = this.pending.findIndex(kR);
          this.pending.splice(-1 === Ru ? this.pending.length : Ru, 0, uu)
        }
        return (null === this.current || null !== this.followUp && !Ru) && (this.advance(), !0)
      }
      setHeld(uu) {
        return this.jJ = uu, !uu && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      sr() {
        const uu = this.getJournal(),
          Ru = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === Ru ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === Ru || void 0 === Ru ? void 0 : Ru.kind) && uu && uu.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === Ru || void 0 === Ru ? void 0 : Ru.kind)) {
          const uu = this.findFollowUp(this.current);
          if ("step" !== (null === uu || void 0 === uu ? void 0 : uu.kind) || uu.questId !== Ru.questId || uu.step.id !== Ru.step.id) return this.showFollowUp(uu, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(uu, Ru, yu) {
        var Eu, Ku, Qu, mu;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, uu, yu);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, uu);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, uu, Ru);
        const {
          questCompletionKind: Ju,
          questCompletionNameKey: Nu
        } = this.current, Xu = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, Vu = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, ru = "step" === (null === (Eu = this.followUp) || void 0 === Eu ? void 0 : Eu.kind) ? this.followUp : null, Bu = "explore" === (null === (Ku = this.followUp) || void 0 === Ku ? void 0 : Ku.kind);
        let xu;
        return xu = Bu ? uu("skyblockGame:questExploreTitle") : null !== ru ? "quest" === Ju ? uu("skyblockGame:questNextQuestTitle", {
          quest: uu(ru.questNameKey)
        }) : uu("skyblockGame:questNextStepTitle") : uu("started" === Ju ? "skyblockGame:questStartedTitle" : "quest" === Ju ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? Ju : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: xu,
          name: Bu ? Ru("skyblockGame:questExploreName") : null !== ru ? bR(Ru, ru.step.nameKey, ru.step.nameParams) : bR(Ru, Nu, Xu),
          description: Bu ? Ru("skyblockGame:questExploreDescription") : null === ru ? null : bR(Ru, ru.step.descriptionKey, ru.step.descriptionParams),
          reward: null === this.followUp && Vu > 0 ? Ru("skyblockGame:questCoinRewardSuffix", {
            amount: Vu.toLocaleString(yu)
          }) : null,
          iconItem: null !== (Qu = null === ru || void 0 === ru ? void 0 : ru.step.questIconItem) && void 0 !== Qu ? Qu : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== ru && (null === (mu = this.getJournal()) || void 0 === mu ? void 0 : mu.trackedQuestId) === ru.questId ? ru.step.nameKey : null
        }
      }
      getSkillLevelView(uu, Ru, yu) {
        let {
          skill: Eu,
          beforeLevel: Ku,
          level: Qu
        } = uu;
        const mu = mR(Eu, Ku),
          Ju = mR(Eu, Qu);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: Ru(`skyblockGame:${Eu}`),
          name: Ru("skyblockGame:skillLevelUp", {
            to: Qu.toLocaleString(yu)
          }),
          description: mu.percent === Ju.percent ? null : Ru(`${Ju.translationKey}Change`, {
            before: mu.percent.toLocaleString(yu),
            after: Ju.percent.toLocaleString(yu)
          }),
          reward: null,
          iconItem: jR[Eu],
          accent: dR(Eu),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(uu, Ru) {
        let {
          landmarkNameKey: yu
        } = uu;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: Ru("skyblockGame:landmarkDiscovered"),
          name: Ru(yu),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(uu, Ru, yu) {
        let {
          titleKey: Eu,
          textKey: Ku,
          params: Qu = {},
          nameKeys: mu = {},
          iconItem: Ju = null
        } = uu;
        const Nu = {
          ...Qu
        };
        for (const [Xu, Vu] of Object.entries(mu)) Nu[Xu] = Ru(Vu);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: Ru(Eu),
          name: yu(Ku, Nu),
          description: null,
          reward: null,
          iconItem: Ju,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var uu;
        if (null !== this.followUp) return 5600;
        switch (null === (uu = this.current) || void 0 === uu ? void 0 : uu.questCompletionKind) {
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
      showFollowUp(uu, Ru) {
        null === uu || this.jJ ? this.advance() : (this.followUp = uu, this.token++, this.shownAt = this.now(), this.expiresAt = null !== Ru && void 0 !== Ru ? Ru : this.shownAt + this.durationMs())
      }
      findFollowUp(uu) {
        var Ru;
        const yu = this.getJournal();
        if (!yu || this.hasPendingQuestPopup() || kR(uu)) return null;
        const Eu = "started" === uu.questCompletionKind ? yu.active.some((Ru => Ru.id === uu.questCompletionQuestId)) : "quest" === uu.questCompletionKind ? yu.completed.some((Ru => Ru.id === uu.questCompletionQuestId)) : [...yu.active, ...yu.completed].some((Ru => Ru.id === uu.questCompletionQuestId && Ru.subquests.some((Ru => Ru.id === uu.questCompletionStepId && "completed" === Ru.status))));
        if (!Eu) return null;
        if ("quest" === uu.questCompletionKind && 0 === yu.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const Ku = yu.active.find((uu => uu.id === yu.trackedQuestId)),
          Qu = null !== (Ru = null === Ku || void 0 === Ku ? void 0 : Ku.subquests.find((uu => "ready" === uu.status))) && void 0 !== Ru ? Ru : null === Ku || void 0 === Ku ? void 0 : Ku.subquests.find((uu => "active" === uu.status));
        return Qu ? {
          kind: "step",
          questId: Ku.id,
          questNameKey: Ku.nameKey,
          step: Qu
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((uu => !kR(uu)))
      }
      advance() {
        var uu;
        this.current = this.jJ ? null : null !== (uu = this.pending.shift()) && void 0 !== uu ? uu : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function kR(uu) {
      return eR(uu.questCompletionKind)
    }

    function eR(uu) {
      return "skillLevel" === uu || "landmark" === uu || "npcNote" === uu
    }
    var AR = yu(38303);
    const DR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      MR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      IR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      GR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      UR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var nR = yu(38306);
    const sR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      tR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const lR = yu.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const gR = yu.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      cR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var LR = yu(18484),
      zR = yu(20565),
      FR = yu(22977),
      wR = yu(24512),
      ZR = yu(26166);
    const hR = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: LR,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: zR,
      cow: UR,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: yu(26183),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: DR,
      fishing_1: DR,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: MR,
      guardian_iron: IR,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: FR,
      mines: wR,
      mining_1: wR,
      npc: GR,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: UR,
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
      npc_gold_guardian: MR,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: IR,
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
      npc_tentacle_guy: nR,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: sR,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: lR,
      quest_talk: gR,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: cR,
      watermelon: ZR
    };

    function PR(uu, Ru) {
      const yu = document.createElement("img");
      return yu.className = Ru, yu.src = uu, yu.alt = "", yu.draggable = !1, yu
    }

    function iR(uu) {
      var Ru;
      const yu = null !== (Ru = hR[uu]) && void 0 !== Ru ? Ru : uu.startsWith("npc_") ? GR : cR;
      if ("portal" !== uu) return PR(yu, "SkyblockMapIcon");
      const Eu = document.createElement("span");
      Eu.className = "SkyblockMapIcon Portal";
      const Ku = document.createElement("span");
      return Ku.className = "SkyblockMapIconTint", Ku.style.maskImage = Ku.style.webkitMaskImage = `url("${tR}")`, Eu.append(PR(yu, "SkyblockMapIconLayer"), Ku, PR(tR, "SkyblockMapIconLayer SkyblockMapIconShade")), Eu
    }
    var YR = yu(38279),
      oR = yu(4063);
    const qR = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function OR(uu) {
      const Ru = new oR.k(uu);
      return {
        radius: 45,
        squareness: 3,
        wobbles: qR.map((uu => {
          let {
            lobes: yu,
            amount: Eu
          } = uu;
          return {
            lobes: yu[Math.floor(Ru.next() * yu.length)],
            amount: Eu[0] + Ru.next() * (Eu[1] - Eu[0]),
            phase: 2 * Ru.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function vR(uu) {
      let {
        radius: Ru,
        squareness: yu,
        wobbles: Eu,
        samples: Ku
      } = uu;
      const Qu = [];
      for (let mu = 0; mu < Ku; mu++) {
        const uu = 2 * Math.PI * mu / Ku,
          Ju = Math.cos(uu),
          Nu = Math.sin(uu),
          Xu = Ru * (Math.abs(Ju) ** yu + Math.abs(Nu) ** yu) ** (-1 / yu) * Eu.reduce(((Ru, yu) => {
            let {
              lobes: Eu,
              amount: Ku,
              phase: Qu
            } = yu;
            return Ru + Ku * Math.sin(Eu * uu + Qu)
          }), 1);
        Qu.push(`${(50+Xu*Ju).toFixed(2)} ${(50+Xu*Nu).toFixed(2)}`)
      }
      return `M${Qu.join("L")}Z`
    }
    const aR = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class fR {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.VS = !1, this.mountCompass = uu => {
          var Ru;
          if (null === (Ru = this.stopLayout) || void 0 === Ru || Ru.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !uu || this.VS) return;
          const yu = uu.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: uu,
            track: yu,
            label: uu.querySelector(".SkyblockCompassLabel")
          }, yu.replaceChildren();
          for (let Ku = 0; Ku < 4; Ku++) {
            const uu = document.createElement("span");
            uu.className = "SkyblockCompassCardinal", yu.appendChild(uu), this.cardinals.push(uu)
          }
          const Eu = (0, YR.c)(aR, [uu], this.layout);
          this.stopLayout = () => {
            Eu(), yu.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = uu => {
          this.terrain = this.VS ? null : uu, this.render(this.frame)
        }, this.mountMinimapSearchArea = uu => {
          this.mountSearchArea("minimap", uu)
        }, this.mountMapSearchArea = uu => {
          this.mountSearchArea("map", uu)
        }, this.mountPlayer = uu => {
          this.player = this.VS ? null : uu, this.render(this.frame)
        }, this.mountWaypoint = uu => {
          var Ru, yu;
          if (null === (Ru = this.stopWaypoint) || void 0 === Ru || Ru.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !uu || this.VS) return;
          const Eu = uu.querySelector(".SkyblockQuestWaypointMarker");
          Eu.replaceChildren(iR("quest")), this.markerIcon = "quest", this.waypoint = {
            root: uu,
            marker: Eu,
            clip: uu.querySelector(".SkyblockQuestWaypointTextClip"),
            text: uu.querySelector(".SkyblockQuestWaypointText"),
            label: uu.querySelector(".SkyblockQuestWaypointLabel"),
            distance: uu.querySelector(".SkyblockQuestWaypointDistance"),
            hint: uu.querySelector(".SkyblockQuestWaypointHint")
          };
          const Ku = () => {
              this.waypointMarkerSize = {
                width: Eu.offsetWidth,
                height: Eu.offsetHeight
              }, this.waypointInset = {
                x: Eu.offsetWidth / 2 + 8,
                top: Eu.offsetHeight + 8,
                bottom: 8
              }
            },
            Qu = new ResizeObserver((() => {
              Ku(), this.render(this.frame)
            }));
          Qu.observe(Eu, {
            box: "border-box"
          });
          const mu = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", mu), null === (yu = window.visualViewport) || void 0 === yu || yu.addEventListener("resize", mu), this.stopWaypoint = () => {
            var uu;
            Qu.disconnect(), window.removeEventListener("resize", mu), null === (uu = window.visualViewport) || void 0 === uu || uu.removeEventListener("resize", mu)
          }, mu(), Ku(), this.render(this.frame)
        }, this.mountWaypointOrigin = uu => {
          var Ru;
          if (null === (Ru = this.stopWaypointOrigin) || void 0 === Ru || Ru.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = uu && !this.VS ? Number(uu.dataset.notificationToken) : null, uu && !this.VS && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const Ru = {
              nameKey: uu.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = Ru;
            const yu = () => {
                const yu = uu.getBoundingClientRect();
                Ru.x = (yu.left + yu.width / 2) / window.innerWidth * 100, Ru.y = (yu.top + yu.height / 2) / window.innerHeight * 100
              },
              Eu = new ResizeObserver(yu);
            Eu.observe(uu.parentElement), Eu.observe(uu), window.addEventListener("resize", yu), this.stopWaypointOrigin = () => {
              Eu.disconnect(), window.removeEventListener("resize", yu)
            }, yu()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const uu = this.compass.root,
            Ru = getComputedStyle(uu),
            yu = getComputedStyle(document.documentElement),
            Eu = parseFloat(yu.fontSize),
            Ku = parseFloat(Ru.getPropertyValue("--compass-icon-size")) * Eu,
            Qu = "1" === Ru.getPropertyValue("--compass-fit-top").trim(),
            mu = Qu ? 1 : 8,
            Ju = Array.from(document.querySelectorAll(aR), (uu => {
              var Ru;
              return (null !== (Ru = uu.querySelector(".MiddleTextTop")) && void 0 !== Ru ? Ru : uu).getBoundingClientRect()
            })).filter((uu => uu.width > 0 && uu.height > 0));
          let Nu = (parseFloat(yu.getPropertyValue("--notchTop")) || 0) + mu,
            Xu = "";
          if (Qu) {
            const Ru = window.innerWidth / 2,
              yu = uu.getBoundingClientRect().height,
              Qu = [Nu, ...Ju.map((uu => Math.max(Nu, uu.bottom + mu)))].sort(((uu, Ru) => uu - Ru));
            for (const uu of Qu) {
              let Qu = Ru - 8;
              for (const Eu of Ju) Eu.bottom + mu <= uu || Eu.top >= uu + yu + mu || (Qu = Math.min(Qu, Eu.right <= Ru ? Ru - Eu.right - 8 : Eu.left - Ru - 8));
              const Vu = 2 * Qu - Ku;
              if (Vu >= 16 * Eu) {
                Xu = `${Vu}px`, Nu = uu;
                break
              }
            }
          }
          uu.style.maxWidth !== Xu && (uu.style.maxWidth = Xu);
          const Vu = uu.getBoundingClientRect(),
            ru = this.compassSize.trackHalfWidth;
          if (Vu.width > 0) {
            const uu = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: uu.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * Ku / uu.width
          }
          if (!Xu)
            for (const Bu of Ju) Bu.right > Vu.left - 8 && Bu.left < Vu.right + 8 && (Nu = Math.max(Nu, Bu.bottom + mu));
          uu.style.top = `${Nu}px`, this.compassSize.trackHalfWidth !== ru && this.render(this.frame)
        }
      }
      mountSearchArea(uu, Ru) {
        this.searchAreas[uu] = this.VS ? null : Ru, this.render(this.frame)
      }
      render(uu) {
        if (this.VS) return;
        if (this.frame = uu, this.compass && (uy(this.compass.root, !uu), uu)) {
          const Ru = this.compassSize.trackHalfWidth / 50;
          uu.compass.cardinals.forEach(((uu, yu) => {
            const Eu = this.cardinals[yu];
            Eu.textContent !== uu.name && (Eu.textContent = uu.name), uy(Eu, uu.hidden), Eu.style.translate = uu.left * Ru + "px"
          }));
          const yu = new Set;
          uu.compass.markers.forEach(((Eu, Ku) => {
            var Qu;
            yu.add(Eu.id);
            let mu = this.markers.get(Eu.id);
            mu || (mu = document.createElement("span"), mu.className = "SkyblockCompassMarker", this.markers.set(Eu.id, mu), this.compass.track.appendChild(mu)), mu.dataset.icon !== Eu.icon && (mu.dataset.icon = Eu.icon, mu.replaceChildren(iR(Eu.icon))), mu.style.color = null !== (Qu = Eu.colour) && void 0 !== Qu ? Qu : "", mu.style.translate = Eu.left * Ru + "px", mu.style.zIndex = String(uu.compass.markers.length - Ku), mu.title !== Eu.name && (mu.title = Eu.name)
          }));
          for (const [uu, Eu] of this.markers) yu.has(uu) || (Eu.remove(), this.markers.delete(uu));
          this.compass.label.textContent !== uu.compass.label && (this.compass.label.textContent = uu.compass.label)
        }
        this.terrain && (uy(this.terrain, !(null !== uu && void 0 !== uu && uu.minimap)), null !== uu && void 0 !== uu && uu.minimap && (this.terrain.style.transform = uu.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", uu.minimap.iconRotation)));
        const Ru = null === uu || void 0 === uu ? void 0 : uu.searchArea;
        for (const yu of [this.searchAreas.minimap, this.searchAreas.map])
          if (yu && (uy(yu, !Ru), Ru)) {
            if (this.searchAreaPath.seed !== Ru.shapeSeed && (this.searchAreaPath = {
                seed: Ru.shapeSeed,
                d: vR(OR(Ru.shapeSeed))
              }), yu.dataset.shapeSeed !== Ru.shapeSeed) {
              yu.dataset.shapeSeed = Ru.shapeSeed;
              for (const uu of yu.querySelectorAll("path")) uu.setAttribute("d", this.searchAreaPath.d)
            }
            yu.style.left = `${Ru.left}%`, yu.style.top = `${Ru.top}%`, yu.style.width = `${Ru.width}%`, yu.style.height = `${Ru.height}%`
          } if (this.player && (uy(this.player, !(null !== uu && void 0 !== uu && uu.player) || uu.player.hidden), null !== uu && void 0 !== uu && uu.player && (this.player.style.left = `${uu.player.left}%`, this.player.style.top = `${uu.player.top}%`, this.player.style.setProperty("--map-player-rotation", uu.player.rotation))), this.waypoint) {
          const {
            root: Ru,
            marker: yu,
            clip: Eu,
            text: Ku,
            label: Qu,
            distance: mu,
            hint: Ju
          } = this.waypoint, Nu = !(null !== uu && void 0 !== uu && uu.waypoint) || null !== uu.waypoint.popupToken && uu.waypoint.popupToken !== this.waypointOriginToken;
          uy(Ru, Nu);
          let Xu = 1;
          const Vu = this.waypointLaunch;
          if (!Nu && Vu && uu.waypoint.nameKey === Vu.nameKey) {
            const uu = performance.now();
            Vu.startedAt ??= uu, Xu = Math.min(1, Math.max(0, (uu - Vu.startedAt - 450) / 1e3)), yu.style.opacity = String(Math.min(1, (uu - Vu.startedAt) / 150)), 1 === Xu && (this.waypointLaunch = null)
          } else yu.style.opacity = "", Vu && null !== Vu.startedAt && (this.waypointLaunch = null);
          if (Ru.classList.toggle("Launching", Xu < 1), null !== uu && void 0 !== uu && uu.waypoint) {
            const Ru = this.waypointInset,
              Nu = "quest_talk" === uu.waypoint.markerIcon ? function(uu, Ru, yu) {
                if (!uu.text || null === uu.blockHeight || 0 === uu.nearness) return uu;
                const Eu = uu.blockHeight / 100 * yu.height,
                  Ku = -uu.nearness * (Ry * Eu + Ru.width / 2),
                  Qu = uu.nearness * (yy * Eu + Ru.height / 2);
                return {
                  ...uu,
                  text: {
                    x: uu.text.x + Ku / yu.width * 100,
                    y: uu.text.y + Qu / yu.height * 100
                  }
                }
              }(uu.waypoint, this.waypointMarkerSize, this.viewport) : uu.waypoint,
              ru = (0, AR.d)(Nu, Ru, this.viewport),
              Bu = Xu * Xu * (3 - 2 * Xu),
              xu = Xu < 1 ? Vu.x + (ru.x - Vu.x) * Bu : ru.x,
              Su = Xu < 1 ? Vu.y + (ru.y - Vu.y) * Bu : ru.y;
            yu.style.translate = `${xu}vw ${Su}vh`, Eu.style.clipPath = `inset(${Ru.top}px ${Ru.x}px ${Ru.bottom}px)`, uy(Ku, Xu < 1 || !uu.waypoint.text), Ku.style.opacity = String(1 - uu.waypoint.nearness), uu.waypoint.text && (Ku.style.translate = `${uu.waypoint.text.x}vw ${uu.waypoint.text.y}vh`), Qu.textContent !== uu.waypoint.name && (Qu.textContent = uu.waypoint.name), this.markerIcon !== uu.waypoint.markerIcon && (this.markerIcon = uu.waypoint.markerIcon, yu.replaceChildren(iR(this.markerIcon))), mu.textContent !== uu.waypoint.distance && (mu.textContent = uu.waypoint.distance), uy(Ju, null === uu.waypoint.hint), null !== uu.waypoint.hint && Ju.textContent !== uu.waypoint.hint && (Ju.textContent = uu.waypoint.hint)
          }
        }
      }
      dispose() {
        var uu, Ru;
        this.mountWaypointOrigin(null), this.render(null), null === (uu = this.stopLayout) || void 0 === uu || uu.call(this), this.stopLayout = null, null === (Ru = this.stopWaypoint) || void 0 === Ru || Ru.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.VS = !0
      }
    }

    function uy(uu, Ru) {
      uu.hidden !== Ru && (uu.hidden = Ru)
    }
    const Ry = .55,
      yy = .6;
    const Ey = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class Ky {
      constructor(uu, Ru, yu, Eu) {
        this.map = uu, this.quests = Ru, this.compass = yu, this.display = new fR, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.VS = !1, this.snapshot = null, this.texts = new Map, this.translate = Eu
      }
      setTranslator(uu, Ru) {
        this.translate = uu, this.locale = Ru, this.metresFormat = new Intl.NumberFormat(Ru), this.texts.clear()
      }
      translateCached(uu, Ru) {
        const yu = void 0 === Ru ? uu : `${uu} ${Ru}`;
        let Eu = this.texts.get(yu);
        return void 0 === Eu && (this.texts.size >= 500 && this.texts.clear(), Eu = this.translate(uu, void 0 === Ru ? void 0 : {
          distance: Ru
        }), this.texts.set(yu, Eu)), Eu
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(uu, Ru, yu) {
        if (this.VS) return;
        if (!uu) return this.snapshot = null, void this.display.render(null);
        const Eu = this.map.getSnapshot().map,
          Nu = yu.cameraHeading,
          Xu = {
            ...this.display.compassSize,
            tanHalfFovX: yu.tanHalfFovX,
            pitch: yu.cameraPitch
          },
          Vu = [];
        if (Eu)
          for (const Ku of this.compass.frame(uu, Nu, Ru)) {
            const uu = pu(Ku.offset, Xu);
            null !== uu && Vu.push({
              ...Ku,
              left: uu
            })
          }
        const ru = function(uu, Ru) {
            const yu = [],
              Eu = uu => "quest" === uu.kind ? uu.distance - 1 : uu.distance,
              Ku = [...uu].sort(((uu, Ru) => Eu(uu) - Eu(Ru) || uu.id.localeCompare(Ru.id)));
            for (const Qu of Ku) {
              let uu = !1;
              if ("quest" !== Qu.kind)
                for (const Eu of yu)
                  if (Math.abs(Eu.left - Qu.left) < Ru) {
                    uu = !0;
                    break
                  } uu || yu.push(Qu)
            }
            return yu
          }(Vu, this.display.compassSpacing),
          Bu = function(uu) {
            let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              yu = null;
            for (const Eu of uu) Math.abs(Eu.offset) <= Ru && (!yu || Eu.distance < yu.distance || Eu.distance === yu.distance && Math.abs(Eu.offset) < Math.abs(yu.offset)) && (yu = Eu);
            return yu
          }(ru),
          xu = uu => {
            var Ru;
            return null !== (Ru = uu.displayName) && void 0 !== Ru ? Ru : this.translateCached(uu.nameKey)
          },
          Su = {
            compass: {
              markers: ru.map((uu => ({
                id: uu.id,
                icon: uu.icon,
                colour: uu.colour,
                name: xu(uu),
                left: uu.left
              }))),
              cardinals: mu.map((uu => {
                let {
                  name: Ru,
                  bearing: yu
                } = uu;
                const Eu = pu(Ku.c.computeShortestRotation(Nu, yu), Xu);
                return {
                  name: Ru,
                  left: null !== Eu && void 0 !== Eu ? Eu : 0,
                  hidden: null === Eu
                }
              })),
              label: Bu ? `${xu(Bu)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",Cu(Bu.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== Eu && void 0 !== Eu && Eu.background) {
          const Ru = uu[0] - Eu.mapOrigin[0],
            yu = uu[2] - Eu.mapOrigin[2],
            {
              rotation: Ku,
              transform: mu
            } = function(uu, Ru, yu, Eu) {
              const [Ku, mu] = Ju(uu, Ru, Eu), Nu = Qu - yu;
              return {
                rotation: Nu,
                transform: `rotate(${Nu}rad) translate(-${Ku}%, -${mu}%)`
              }
            }(Ru, yu, Nu, Eu.background.bounds);
          Su.minimap = {
            transform: mu,
            iconRotation: -Ku + "rad"
          };
          const [Xu, Vu] = Ju(Ru, yu, Eu.background.bounds);
          Su.player = {
            left: Xu,
            top: Vu,
            hidden: Xu < 0 || Vu < 0 || Xu > 100 || Vu > 100,
            rotation: -Ku + "rad"
          }
        }
        const {
          waypoint: Tu
        } = this.quests.getSnapshot();
        if ("search" === (null === Tu || void 0 === Tu ? void 0 : Tu.questMarkerIcon) && null !== Eu && void 0 !== Eu && Eu.background) {
          const {
            bounds: uu
          } = Eu.background, [Ru, yu] = Ju(Tu.position[0] - Eu.mapOrigin[0], Tu.position[2] - Eu.mapOrigin[2], uu);
          Su.searchArea = {
            left: Ru,
            top: yu,
            width: 6400 / (uu.mapMaxX - uu.mapMinX),
            height: 6400 / (uu.mapMaxZ - uu.mapMinZ),
            shapeSeed: Tu.nameKey
          }
        }
        const Wu = this.quests.getNotificationSnapshot(),
          ju = "completion" === (null === Wu || void 0 === Wu ? void 0 : Wu.phase) && !eR(Wu.kind);
        if (Tu && !ju) {
          const Ru = Math.hypot(...Tu.position.map(((Ru, yu) => Ru - uu[yu]))),
            Eu = Math.round(Ru),
            Ku = "talk" === Tu.questMarkerIcon ? Math.min(1, Math.max(0, (10 - Ru) / 5)) : 0,
            Qu = yu.projectWorldPosToViewport(Tu.position),
            mu = Qu && yu.projectWorldPosToViewport([Tu.position[0], Tu.position[1] - 1, Tu.position[2]]);
          Su.waypoint = {
            ...yu.projectWorldPosToScreenPos(Tu.position),
            text: Qu,
            nearness: Ku * Ku * (3 - 2 * Ku),
            blockHeight: Qu && mu ? mu.y - Qu.y : null,
            name: this.translateCached(Tu.nameKey),
            nameKey: Tu.nameKey,
            markerIcon: Tu.questMarkerIcon ? Ey[Tu.questMarkerIcon] : "quest",
            popupToken: (null === Wu || void 0 === Wu ? void 0 : Wu.waypointNameKey) === Tu.nameKey ? Wu.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(Eu)),
            hint: "search" === Tu.questMarkerIcon && Math.hypot(Tu.position[0] - uu[0], Tu.position[2] - uu[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = Su, this.display.render(Su)
      }
      dispose() {
        this.VS = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const Qy = "skyblockSkillsView";
    class my extends ru {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          yu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : uu => uu,
          Eu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          Ku = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : uu => uu;
        super(uu, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = Ru, this.translate = yu, this.locale = Eu, this.itemName = Ku, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = uu => {
          this.selected = uu, this.emit()
        }
      }
      setTranslator(uu, Ru, yu) {
        this.translate = uu, this.locale = Ru, this.itemName = yu, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(uu) {
        let Ru = this.skillText.get(uu);
        return Ru || (Ru = {
          label: this.translate(`skyblockGame:${uu}`),
          description: this.translate(`skyblockGame:${uu}Description`)
        }, this.skillText.set(uu, Ru)), Ru
      }
      sources(uu) {
        if ("mining" === uu || "fishing" === uu) return this.buildSources(uu);
        let Ru = this.sourceText.get(uu);
        return Ru || (Ru = this.buildSources(uu), this.sourceText.set(uu, Ru)), Ru
      }
      buildSources(uu) {
        const Ru = this.translate;
        return "exploration" === uu ? [Ru("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), Ru("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === uu ? [Ru("skyblockGame:logSource", {
          xp: this.number(xR["Maple Log"])
        })] : "combat" === uu ? [Ru("skyblockGame:creatureKillSource"), Ru("skyblockGame:noEnvironmentalXp")] : "farming" === uu ? [Ru("skyblockGame:cropSource", {
          xp: this.number(TR["Wheat|FreshlyGrown"])
        }), Ru("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), Ru("skyblockGame:noYoungCropXp")] : Object.entries("mining" === uu ? pR : WR).map((uu => {
          let [yu, Eu] = uu;
          return Ru("skyblockGame:itemXpSource", {
            item: this.itemName(yu),
            xp: this.number(Eu)
          })
        }))
      }
      number(uu) {
        return uu.toLocaleString(this.locale)
      }
      benefit(uu, Ru) {
        const yu = mR(uu, Ru);
        return this.translate(yu.translationKey, {
          bonus: this.number(yu.percent)
        })
      }
      SS(uu) {
        if (!this.VS) {
          if ("snapshot" === uu.kind) this.progress = uu.progress, this.pending.clear(), this.recent = null;
          else if ("award" === uu.kind && this.progress) {
            const {
              award: Ru
            } = uu;
            this.progress = {
              ...this.progress,
              [Ru.skill]: Ru.after
            };
            for (const [uu, Eu] of this.pending) Eu.skill === Ru.skill && this.pending.delete(uu);
            const yu = Ru.after.level > Ru.before.level;
            this.recordGain(Ru.skill, Ru.amount, yu ? ++this.nextLevelUpToken : null), yu && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: Ru.skill,
              beforeLevel: Ru.before.level,
              level: Ru.after.level
            })
          } else {
            if ("rejectBlock" === uu.kind) return void this.rejectBlock(uu.position);
            if ("open" === uu.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(uu, Ru, yu) {
        if (!this.progress || this.VS || yu) return;
        const Eu = function(uu, Ru) {
          const yu = uu.split("|")[0];
          return "Air" === Ru || Ru === `Barkless ${uu}` ? Object.hasOwn(xR, yu) ? {
            skill: "foraging",
            amount: xR[yu]
          } : "Air" !== Ru ? null : Object.hasOwn(pR, uu) ? {
            skill: "mining",
            amount: pR[uu]
          } : VR(uu) ? {
            skill: "farming",
            amount: 10
          } : BR(uu) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(TR, uu) ? {
            skill: "farming",
            amount: TR[uu]
          } : Object.hasOwn(Lu, uu) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(Ru, "Air");
        if (!Eu) return;
        const Ku = uu.join(",");
        if (this.pending.has(Ku)) return;
        const Qu = this.predictedProgress(Eu.skill).totalXp + Eu.amount;
        Number.isSafeInteger(Qu) && (this.pending.set(Ku, {
          ...Eu,
          expires: this.now() + 2e3
        }), this.recordGain(Eu.skill, 0), this.emit())
      }
      rejectBlock(uu) {
        this.pending.delete(uu.join(",")) && this.emit()
      }
      sr() {
        if (this.VS) return;
        let uu = !1;
        for (const [Ru, yu] of this.pending) yu.expires <= this.now() && (this.pending.delete(Ru), uu = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, uu = !0), uu && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(uu, Ru) {
        var yu, Eu;
        let Ku = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Qu = (null === (yu = this.recent) || void 0 === yu ? void 0 : yu.skill) === uu && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          mu = (null === (Eu = this.recent) || void 0 === Eu ? void 0 : Eu.skill) === uu && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: uu,
          confirmed: Qu + Ru,
          expires: this.now() + 3e3,
          levelUpToken: null !== Ku && void 0 !== Ku ? Ku : mu
        }
      }
      pendingXp(uu) {
        let Ru = 0;
        for (const yu of this.pending.values()) yu.skill === uu && (Ru += yu.amount);
        return Ru
      }
      predictedProgress(uu) {
        const Ru = this.progress[uu],
          yu = this.pendingXp(uu);
        return yu ? NR(Ru.totalXp + yu, uu) : Ru
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var uu, Ru, yu;
        const Eu = this.progress ? Ou.map((uu => {
            const Ru = this.predictedProgress(uu);
            return {
              ...this.text(uu),
              icon: jR[uu],
              benefit: this.benefit(uu, Ru.level),
              sources: this.sources(uu),
              id: uu,
              selected: uu === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(Ru.level)
              }),
              xp: null === Ru.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(Ru.xpIntoLevel),
                target: this.number(Ru.xpForNextLevel)
              }),
              percent: null === Ru.xpForNextLevel ? 100 : Math.min(100, Ru.xpIntoLevel / Ru.xpForNextLevel * 100)
            }
          })) : [],
          Ku = Eu.find((uu => {
            var Ru;
            return uu.id === (null === (Ru = this.recent) || void 0 === Ru ? void 0 : Ru.skill)
          })),
          Qu = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: Eu,
          detail: null !== (uu = Eu.find((uu => uu.selected))) && void 0 !== uu ? uu : null,
          overallLevel: this.progress ? Ou.reduce(((uu, Ru) => uu + this.predictedProgress(Ru).level), 0) : null,
          hud: Ku && Qu > 0 ? {
            skill: Ku,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(Qu)
            }),
            levelUpToken: null !== (Ru = null === (yu = this.recent) || void 0 === yu ? void 0 : yu.levelUpToken) && void 0 !== Ru ? Ru : null,
            colour: dR(Ku.id)
          } : null
        }
      }
    }
    const Jy = Math.max(1600, 600, 950) + 400,
      Ny = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      Xy = "skyblockQuestsView",
      Vy = "skyblockQuestNotificationView";
    class ry extends ru {
      constructor(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          mu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(uu, Eu, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = Ru, this.translate = yu, this.now = Ku, this.locale = Qu, this.publishNotification = mu, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var uu, Ru;
          this.selected = null !== (uu = null === (Ru = this.authoritative) || void 0 === Ru ? void 0 : Ru.trackedQuestId) && void 0 !== uu ? uu : null, this.show()
        }, this.select = uu => {
          this.selected = uu, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const uu = this.snapshot.detail;
          !this.VS && null !== uu && void 0 !== uu && uu.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(uu.id), this.emit())
        }, this.viewDialogue = () => {
          const uu = this.snapshot.detail;
          var Ru;
          uu && (null === (Ru = this.onViewDialogue) || void 0 === Ru || Ru.call(this, uu.id))
        }, this.notifications = new CR(Ku, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var uu, Ru;
        return null !== (uu = null === (Ru = this.authoritative) || void 0 === Ru ? void 0 : Ru.trackedQuestId) && void 0 !== uu ? uu : null
      }
      notify(uu) {
        !this.VS && this.notifications.enqueue(uu) && this.emitNotification()
      }
      setNotificationsHeld(uu) {
        (this.notifications.setHeld(uu) || uu) && this.emitNotification()
      }
      sr() {
        var uu, Ru;
        if (this.VS) return;
        this.notifications.sr() && this.emitNotification();
        let yu = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, yu = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, yu = !0);
        const Eu = By(this.authoritative);
        null !== Eu && void 0 !== Eu && null !== (uu = Eu.questClock) && void 0 !== uu && uu.running && this.clockText(Eu) !== (null === (Ru = this.snapshot.tracked) || void 0 === Ru ? void 0 : Ru.clock) && (yu = !0), yu && this.emit()
      }
      setTranslator(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = uu, this.locale = Ru, this.emitNotification(), this.emit()
      }
      SS(uu) {
        if (!this.VS)
          if ("completion" === uu.kind) this.notify(uu.questCompletion);
          else if ("landmark" === uu.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: uu.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === uu.kind) {
          var Ru, yu, Eu;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: uu.npcNoteTitleKey,
            textKey: uu.npcNoteTextKey,
            params: null !== (Ru = uu.npcNoteParams) && void 0 !== Ru ? Ru : {},
            nameKeys: null !== (yu = uu.npcNoteNameKeys) && void 0 !== yu ? yu : {},
            iconItem: null !== (Eu = uu.npcNoteIconItem) && void 0 !== Eu ? Eu : null
          })
        } else if ("open" === uu.kind) this.show();
        else if ("guidance" === uu.kind) this.waypoint = uu.waypoint, this.compassTarget = uu.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === uu.kind) {
          this.authoritative = uu.snapshot, this.notifications.sr() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const Ru = this.trackedStepPulse;
          this.updateTrackedStepPulse(uu.snapshot), this.emit(), this.trackedStepPulse > Ru && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.VS || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var uu;
        return null !== (uu = this.translateWithIcons) && void 0 !== uu ? uu : this.translate
      }
      clockText(uu) {
        const Ru = uu.questClock;
        if (!Ru) return null;
        const yu = Ru.elapsedMs + (Ru.running ? this.now() - this.receivedAt : 0);
        return void 0 === Ru.countdownFromMs ? su(yu, !1) : su(1e3 * Math.ceil(Math.max(0, Ru.countdownFromMs - yu) / 1e3), !1)
      }
      updateTrackedStepPulse(uu) {
        var Ru, yu, Eu;
        const Ku = By(uu);
        if (!Ku) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const Qu = uu => Ku.subquests.filter((Ru => uu(Ru.status))).map((uu => uu.id)),
          mu = Qu((uu => "completed" === uu || "skipped" === uu)),
          Ju = Qu((uu => "locked" !== uu)),
          Nu = (null === (Ru = this.trackedSteps) || void 0 === Ru ? void 0 : Ru.questId) === Ku.id && Ku.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (Nu) {
          const uu = mu.filter((uu => !Nu.finished.has(uu))),
            Ru = Qu((uu => "active" === uu || "ready" === uu)).filter((uu => !Nu.unlocked.has(uu)));
          uu.length > 0 && this.trackedStepPulse++, (uu.length > 0 || Ru.length > 0) && (this.trackedChange = {
            finished: new Set(uu),
            unlocked: new Set(Ru),
            expiresAt: this.now() + Jy
          })
        } else {
          var Xu;
          this.trackedStepPulse = (null === (Xu = this.trackedSteps) || void 0 === Xu ? void 0 : Xu.questId) === Ku.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: Ku.id,
          progress: Ku.progress,
          finished: new Set([...null !== (yu = null === Nu || void 0 === Nu ? void 0 : Nu.finished) && void 0 !== yu ? yu : [], ...mu]),
          unlocked: new Set([...null !== (Eu = null === Nu || void 0 === Nu ? void 0 : Nu.unlocked) && void 0 !== Eu ? Eu : [], ...Ju])
        }
      }
      entry(uu, Ru) {
        var yu, Eu;
        const Ku = uu.id === (null === (yu = this.authoritative) || void 0 === yu ? void 0 : yu.trackedQuestId),
          Qu = this.now() < this.trackAvailableAt,
          mu = this.questTextTranslator(),
          Ju = uu.subquests.map((Ru => {
            var yu, Eu, Qu, Ju, Nu, Xu;
            const Vu = null !== (yu = Ru.handInNpcName) && void 0 !== yu ? yu : uu.giverName,
              ru = this.translate("skyblockGame:progress", {
                current: Ru.progress.toLocaleString(this.locale),
                target: Ru.target.toLocaleString(this.locale)
              }),
              Bu = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: Vu ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [Ru.status],
              xu = "active" === Ru.status || "ready" === Ru.status;
            return {
              id: Ru.id,
              name: bR(mu, Ru.nameKey, Ru.nameParams),
              description: bR(mu, Ru.descriptionKey, Ru.descriptionParams),
              progress: ru,
              status: Ru.status,
              statusLabel: Bu ? this.translate(Bu, {
                npc: Vu
              }) : ru,
              iconItem: xu && null !== (Eu = Ru.questIconItem) && void 0 !== Eu ? Eu : null,
              barPercent: "active" === Ru.status && Ru.showsProgressBar ? Math.min(100, 100 * Ru.progress / Ru.target) : null,
              justFinished: Ku && null !== (Qu = null === (Ju = this.trackedChange) || void 0 === Ju ? void 0 : Ju.finished.has(Ru.id)) && void 0 !== Qu && Qu,
              justUnlocked: Ku && null !== (Nu = null === (Xu = this.trackedChange) || void 0 === Xu ? void 0 : Xu.unlocked.has(Ru.id)) && void 0 !== Nu && Nu
            }
          }));
        return {
          id: uu.id,
          name: bR(mu, uu.nameKey, uu.nameParams),
          description: bR(mu, uu.descriptionKey, uu.descriptionParams),
          progress: Ru ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: uu.progress.toLocaleString(this.locale),
            target: uu.target.toLocaleString(this.locale)
          }),
          completed: Ru,
          tracked: Ku,
          selected: uu.id === this.selected,
          canTrack: !Ru && !Ku && !Qu,
          trackLabel: this.translate(Ku ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : Qu ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== uu.id,
          subquests: Ju,
          focusStep: null !== (Eu = Ju.find((uu => null !== uu.barPercent))) && void 0 !== Eu ? Eu : null,
          clock: this.clockText(uu)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu;
        const Vu = [...null !== (uu = null === (Ru = this.authoritative) || void 0 === Ru ? void 0 : Ru.active) && void 0 !== uu ? uu : [], ...null !== (yu = null === (Eu = this.authoritative) || void 0 === Eu ? void 0 : Eu.completed) && void 0 !== yu ? yu : []];
        var ru, Bu, xu, Su;
        Vu.some((uu => uu.id === this.selected)) || (this.selected = null !== (ru = null !== (Bu = null === (xu = this.authoritative) || void 0 === xu ? void 0 : xu.trackedQuestId) && void 0 !== Bu ? Bu : null === (Su = Vu[0]) || void 0 === Su ? void 0 : Su.id) && void 0 !== ru ? ru : null);
        const pu = null !== (Ku = null === (Qu = this.authoritative) || void 0 === Qu ? void 0 : Qu.active.map((uu => this.entry(uu, !1)))) && void 0 !== Ku ? Ku : [];
        pu.sort(((uu, Ru) => Number(Ru.tracked) - Number(uu.tracked)));
        const Tu = null !== (mu = null === (Ju = this.authoritative) || void 0 === Ju ? void 0 : Ju.completed.map((uu => this.entry(uu, !0)))) && void 0 !== mu ? mu : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: pu,
          completed: Tu,
          completedExpanded: this.completedExpanded,
          detail: null !== (Nu = [...pu, ...Tu].find((uu => uu.selected))) && void 0 !== Nu ? Nu : null,
          tracked: null !== (Xu = pu.find((uu => uu.tracked))) && void 0 !== Xu ? Xu : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function By(uu) {
      var Ru;
      return null !== (Ru = null === uu || void 0 === uu ? void 0 : uu.active.find((Ru => Ru.id === uu.trackedQuestId))) && void 0 !== Ru ? Ru : null
    }
    const xy = "skyblockDungeonsView";
    class Sy extends ru {
      constructor(uu, Ru) {
        let yu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          Eu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(uu, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = Ru, this.locale = yu, this.requestEnter = Eu, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = uu => {
          this.selected = uu, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const uu = this.pickerEntry(),
            Ru = null === uu || void 0 === uu ? void 0 : uu.difficulties[this.pageIndex];
          void 0 !== Ru && null !== Ru.unlockedBoss && (this.close(), this.requestEnter(uu.id, Ru.difficulty))
        }
      }
      setTranslator(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = uu, this.locale = Ru, this.emit()
      }
      SS(uu) {
        var Ru, yu;
        if (!this.VS) return "open" === uu.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== uu.kind ? "snapshot" === uu.kind && (this.authoritative = uu.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (Ru = null === (yu = this.pickerEntry()) || void 0 === yu ? void 0 : yu.difficulties.length) && void 0 !== Ru ? Ru : 1) - 1)), null === uu.snapshot && this.open ? this.close() : this.emit()) : this.choose(uu.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(uu) {
        var Ru;
        const yu = null === (Ru = this.authoritative) || void 0 === Ru ? void 0 : Ru.dungeons.find((Ru => Ru.id === uu));
        void 0 !== yu ? this.open && this.pickerDungeonId === uu || (this.pickerDungeonId = uu, this.pageIndex = Math.max(0, yu.difficulties.findLastIndex((uu => null !== uu.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${uu}`)
      }
      turnTo(uu) {
        var Ru, yu;
        const Eu = null !== (Ru = null === (yu = this.pickerEntry()) || void 0 === yu ? void 0 : yu.difficulties.length) && void 0 !== Ru ? Ru : 0;
        uu < 0 || uu >= Eu || uu === this.pageIndex || (this.pageIndex = uu, this.emit())
      }
      pickerEntry() {
        var uu, Ru;
        return null !== (uu = null === (Ru = this.authoritative) || void 0 === Ru ? void 0 : Ru.dungeons.find((uu => uu.id === this.pickerDungeonId))) && void 0 !== uu ? uu : null
      }
      difficulty(uu) {
        const Ru = uu.completions > 0,
          yu = null === uu.bestMs ? null : su(uu.bestMs);
        return {
          difficulty: uu.difficulty,
          label: this.translate(Uu[uu.difficulty]),
          colour: nu[uu.difficulty],
          beaten: Ru,
          bestTime: yu,
          completions: uu.completions,
          summary: Ru ? [null === yu ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: yu
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: uu.completions.toLocaleString(this.locale)
          })].filter((uu => null !== uu)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(uu) {
        const Ru = uu.difficulties.map((uu => this.difficulty(uu))),
          yu = Ru.filter((uu => uu.beaten)).length;
        return {
          id: uu.id,
          name: this.translate(uu.nameKey),
          selected: uu.id === this.selected,
          beatenSummary: `${yu} / ${Ru.length}`,
          difficulties: Ru
        }
      }
      picker() {
        const uu = this.pickerEntry();
        if (null === uu || 0 === uu.difficulties.length) return null;
        const Ru = uu.difficulties.map(((Ru, yu) => {
          var Eu, Ku, Qu, mu;
          const Ju = Ru.unlockedBoss,
            Nu = null === Ju ? this.lockedHint(uu, yu) : null;
          return {
            ...this.difficulty(Ru),
            unlocked: null !== Ju,
            bossName: null === Ju ? null : this.translate(Ju.bossNameKey),
            bossMobType: null !== (Eu = null === Ju || void 0 === Ju ? void 0 : Ju.bossMobType) && void 0 !== Eu ? Eu : null,
            bossMobVariation: null !== (Ku = null === Ju || void 0 === Ju ? void 0 : Ju.bossMobVariation) && void 0 !== Ku ? Ku : null,
            lockedHint: null !== (Qu = null === Nu || void 0 === Nu ? void 0 : Nu.text) && void 0 !== Qu ? Qu : null,
            lockedHintHighlight: null !== (mu = null === Nu || void 0 === Nu ? void 0 : Nu.highlight) && void 0 !== mu ? mu : null,
            current: yu === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(uu.nameKey),
          pages: Ru,
          page: Ru[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < Ru.length - 1
        }
      }
      lockedHint(uu, Ru) {
        var yu, Eu, Ku;
        if (0 === Ru && "number" === typeof uu.combatLevelLock) {
          const Ru = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: uu.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: Ru,
            colour: dR("combat"),
            icon: jR.combat
          })
        }
        const Qu = null !== (yu = null === (Eu = this.authoritative) || void 0 === Eu ? void 0 : Eu.dungeons) && void 0 !== yu ? yu : [],
          mu = Ru > 0 ? uu : null !== (Ku = Qu[Qu.indexOf(uu) - 1]) && void 0 !== Ku ? Ku : null,
          Ju = Ru > 0 ? uu.difficulties[Ru - 1] : null === mu || void 0 === mu ? void 0 : mu.difficulties[0];
        if (null === mu || void 0 === Ju) return null;
        const Nu = this.translate(mu.nameKey);
        if (null === Ju.unlockedBoss) return mu === uu ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, Ju.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: Nu
        }, Ju.difficulty);
        const Xu = this.translate(Ju.unlockedBoss.bossNameKey);
        return mu === uu ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: Xu
        }, Ju.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: Xu,
            dungeon: Nu
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(uu, Ru, yu) {
        return this.hintHighlighting(uu, Ru, "difficulty", {
          name: this.translate(Uu[yu]),
          colour: nu[yu],
          icon: null
        })
      }
      hintHighlighting(uu, Ru, yu, Eu) {
        let {
          name: Ku,
          colour: Qu,
          icon: mu
        } = Eu;
        const Ju = this.translate(uu, {
          ...Ru,
          [yu]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(uu, {
            ...Ru,
            [yu]: Ku
          }),
          highlight: 2 === Ju.length ? {
            before: Ju[0],
            name: Ku,
            after: Ju[1],
            colour: Qu,
            icon: mu
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var uu, Ru, yu;
        const Eu = null !== (uu = null === (Ru = this.authoritative) || void 0 === Ru ? void 0 : Ru.dungeons) && void 0 !== uu ? uu : [];
        var Ku, Qu;
        Eu.some((uu => uu.id === this.selected)) || (this.selected = null !== (Ku = null === (Qu = Eu[0]) || void 0 === Qu ? void 0 : Qu.id) && void 0 !== Ku ? Ku : null);
        const mu = Eu.map((uu => this.entry(uu)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: mu,
          detail: null !== (yu = mu.find((uu => uu.selected))) && void 0 !== yu ? yu : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const py = ["mining", "farming", "foraging", "fishing", "combat"],
      Ty = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      Wy = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function jy() {
      for (var uu = arguments.length, Ru = new Array(uu), yu = 0; yu < uu; yu++) Ru[yu] = arguments[yu];
      return Ru.map(((uu, Ru) => ({
        amount: uu,
        coins: Ty[Ru],
        xp: Wy[Ru]
      })))
    }
    const Hy = jy(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      dy = jy(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      by = jy(50, 100, 250, 500, 1e3, 2500, 5e3),
      Cy = jy(25, 50, 100, 250, 500, 1e3),
      ky = jy(10, 25, 50, 100, 250, 500, 1e3),
      ey = jy(1, 5, 10, 25, 50);

    function Ay(uu, Ru) {
      return {
        id: uu,
        category: "fishing",
        item: Ru,
        drops: [Ru],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ky
      }
    }
    const Dy = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: dy
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: by
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: by
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: Cy
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: Cy
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: dy
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: Hy
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: Hy
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: Hy
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: by
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: dy
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: dy
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: dy
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: by
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: by
      }, Ay("wheatfish", "Wheatfish"), Ay("darter", "Darter"), Ay("sunset_minnow", "Sunset Minnow"), Ay("root_flounder", "Root Flounder"), Ay("greenfin_loach", "Greenfin Loach"), Ay("red_strongfish", "Red Strongfish"), Ay("green_strongfish", "Green Strongfish"), Ay("boomerang_fish", "Boomerang Fish"), Ay("seahorse", "Seahorse"), Ay("spined_stickleback", "Spined Stickleback"), Ay("moon_strongfish", "Moon Strongfish"), Ay("boulder_bass", "Boulder Bass"), Ay("grass_snapper", "Grass Snapper"), Ay("crystal_wheatfish", "Crystalized Wheatfish", ey), Ay("moonstone_pupfish", "Moonstone Pupfish", ey), Ay("reedglass_minnow", "Reedglass Minnow"), Ay("mangrove_herring", "Mangrove Herring"), Ay("mudline_perch", "Mudline Perch"), Ay("coastal_mullet", "Coastal Mullet"), Ay("reef_sardine", "Reef Sardine"), Ay("root_perch", "Root Perch"), Ay("driftwood_catfish", "Driftwood Catfish"), Ay("aether_minnow", "Aether Minnow"), Ay("needlefish", "Tri-Pointed Needlefish"), Ay("threadfin_bream", "Threadfin Bream"), Ay("mudbelly_tilapia", "Mudbelly Tilapia"), Ay("rotslab_eel", "Rotslab Eel"), Ay("polarflash_electron", "Polarflash Electron"), Ay("mireback_carp", "Mireback Carp"), Ay("blackwater_bream", "Blackwater Bream"), Ay("stone_grouper", "Stone Grouper"), Ay("shadeback_ray", "Shadeback Ray"), Ay("glacial_silverfish", "Glacial Silverfish"), Ay("hatchetfish", "Hatchetfish"), Ay("moonlit_boomerang", "Moonlit Boomerang Fish"), Ay("murkborne_ray", "Murkborne Ray"), Ay("bamboo_catfish", "Bamboo Catfish"), Ay("mossback_arapaima", "Mossback Arapaima"), Ay("murk_stingray", "Murk Stingray"), Ay("channel_sawfish", "Channel Sawfish"), Ay("boned_sturgeon", "Boned Sturgeon"), Ay("oarfish", "Oarfish"), Ay("snakehead", "Snakehead", ey), Ay("eldertide_leviathan", "Eldertide Leviathan", ey), Ay("pithead", "Pithead"), Ay("electric_eel", "Electric Eel"), Ay("shadow_darter", "Shadow Darter"), Ay("abyss_carp", "Abyss Carp"), Ay("nomai_moray", "Nomai Moray"), Ay("silver_dragonfish", "Silver Dragonfish"), Ay("giant_moray", "Giant Moray"), Ay("coelacanth", "Coelacanth", ey), Ay("frost_herring", "Frost Herring"), Ay("permafrost_halibut", "Permafrost Halibut"), Ay("glacial_lanternfish", "Glacial Lanternfish"), Ay("frozen_grenadier", "Frozen Grenadier"), Ay("blackfin_icefish", "Blackfin Icefish"), Ay("moonfish", "Moonfish"), Ay("alpha_strongfish", "Alpha Moon Strongfish"), Ay("deep_lanternfish", "Deepwater Lanternfish", ey), Ay("pearlescent_moonfish", "Pearlescent Moonfish", ey), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: dy
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: Cy
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: Cy
      }],
      My = (new Map(Dy.map((uu => [uu.id, uu]))), new Map),
      Iy = new Map;
    for (const NN of Dy) {
      for (const [uu, Ru] of Object.entries(null !== (Gy = NN.blocks) && void 0 !== Gy ? Gy : {})) {
        var Gy;
        My.set(uu, {
          collection: NN,
          amount: Ru
        })
      }
      for (const uu of null !== (Uy = NN.drops) && void 0 !== Uy ? Uy : []) {
        var Uy;
        Iy.set(uu, NN)
      }
    }

    function ny(uu, Ru) {
      let yu = 0;
      for (; yu < uu.tiers.length && Ru >= uu.tiers[yu].amount;) yu++;
      return yu
    }
    const sy = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function ty(uu) {
      return sy[uu - 1]
    }
    const ly = "skyblockCollectionsView";
    class gy extends ru {
      constructor(uu, Ru) {
        let yu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          Eu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : uu => uu;
        super(uu, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = Ru, this.locale = yu, this.itemName = Eu, this.counts = null, this.category = "mining", this.selected = Dy[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = uu => {
          this.category = uu, this.selected = this.inCategory(uu)[0].id, this.emit()
        }, this.select = uu => {
          this.selected = uu, this.emit()
        }
      }
      setTranslator(uu, Ru, yu) {
        this.translate = uu, this.locale = Ru, this.itemName = yu, this.emit()
      }
      SS(uu) {
        if (!this.VS)
          if ("collOpen" !== uu.kind) {
            (uu.collFull || null === this.counts) && (this.counts = new Map);
            for (const [Ru, yu] of uu.collCounts) this.counts.set(Ru, yu);
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
        var uu;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const Ru = this.inCategory(this.category).map((uu => this.collectionView(uu))),
          yu = Dy.reduce(((uu, Ru) => uu + this.tierOf(Ru)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: py.map((uu => this.categoryView(uu))),
          collections: Ru,
          detail: null !== (uu = Ru.find((uu => uu.selected))) && void 0 !== uu ? uu : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(yu)
          })
        }
      }
      categoryView(uu) {
        const Ru = this.inCategory(uu),
          yu = Ru.reduce(((uu, Ru) => uu + this.tierOf(Ru)), 0),
          Eu = Ru.reduce(((uu, Ru) => uu + Ru.tiers.length), 0);
        return {
          id: uu,
          label: this.translate(`skyblockGame:${uu}`),
          icon: jR[uu],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(yu),
            target: this.number(Eu)
          }),
          selected: uu === this.category
        }
      }
      collectionView(uu) {
        var Ru, yu;
        const Eu = null !== (Ru = this.counts.get(uu.id)) && void 0 !== Ru ? Ru : 0,
          Ku = ny(uu, Eu),
          Qu = null !== (yu = uu.tiers[Ku]) && void 0 !== yu ? yu : null,
          mu = 0 === Ku ? 0 : uu.tiers[Ku - 1].amount;
        return {
          id: uu.id,
          name: this.itemName(uu.item),
          icon: uu.item,
          selected: uu.id === this.selected,
          locked: 0 === Eu,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(Eu)
          }),
          tier: 0 === Ku ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(Ku),
          percent: null === Qu ? 100 : Math.min(100, (Eu - mu) / (Qu.amount - mu) * 100),
          progress: null === Qu ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(Eu),
            target: this.number(Qu.amount)
          }),
          nextReward: null === Qu ? null : this.reward(uu, Qu.coins, Qu.xp)
        }
      }
      reward(uu, Ru, yu) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(Ru),
          xp: this.number(yu),
          skill: this.translate(`skyblockGame:${uu.category}`)
        })
      }
      tierLabel(uu) {
        return this.translate("skyblockGame:collectionTier", {
          tier: ty(uu)
        })
      }
      tierOf(uu) {
        var Ru;
        return ny(uu, null !== (Ru = this.counts.get(uu.id)) && void 0 !== Ru ? Ru : 0)
      }
      inCategory(uu) {
        return Dy.filter((Ru => Ru.category === uu))
      }
      number(uu) {
        return uu.toLocaleString(this.locale)
      }
    }
    const cy = "skyblockPortalTransitView",
      Ly = "skyblockPortalArrival";
    class zy {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.Op = uu, this.storage = Ru, this.now = yu, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      SS(uu) {
        const Ru = {
          zoneNameKey: uu.transitZoneNameKey,
          variation: uu.transitZoneVariation,
          colour: uu.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(Ly, Ru), this.show("departure", Ru.zoneNameKey, Ru.colour, uu.transitDurationMs, uu.transitDurationMs + 1500, (() => {
          this.storage.removeItem(Ly)
        }))
      }
      resumeArrival(uu) {
        const Ru = this.storage.getItem(Ly);
        this.storage.removeItem(Ly), null === Ru || Ru.variation !== uu || this.now() - Ru.departedAt > 3e4 || this.show("arrival", Ru.zoneNameKey, Ru.colour, 3200, 2e4)
      }
      finishArrival(uu) {
        var Ru;
        "arrival" === (null === (Ru = this.view) || void 0 === Ru ? void 0 : Ru.phase) && this.view.token === uu && (this.clearTimer(), this.view = null, this.Op(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(uu, Ru, yu, Eu, Ku, Qu) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: uu,
          zoneNameKey: Ru,
          colour: yu,
          durationMs: Eu
        }, this.Op(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.Op(null), null === Qu || void 0 === Qu || Qu()
        }), Ku)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const Fy = "skyblockDailyRewardView",
      wy = "skyblockDailyRewardCoin";
    class Zy {
      constructor(uu, Ru, yu, Eu) {
        let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          mu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          Ju = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          Nu = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.Op = uu, this.isBusy = Ru, this.holdQuestPopups = yu, this.onHeldCoinsChanged = Eu, this.onCoinLanded = Ku, this.onStarted = Qu, this.onFinished = mu, this.onItemLanded = Ju, this.now = Nu, this.jJ = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var uu, Ru;
        return null !== (uu = null === (Ru = this.playing) || void 0 === Ru ? void 0 : Ru.view) && void 0 !== uu ? uu : null
      }
      getHeldCoins() {
        var uu, Ru;
        let yu = 0;
        for (const Eu of this.jJ) yu += Eu.coins;
        return yu - (null !== (uu = null === (Ru = this.playing) || void 0 === Ru ? void 0 : Ru.released) && void 0 !== uu ? uu : 0)
      }
      SS(uu) {
        "dailyRewardClaimed" !== uu.kind ? (this.queue.push(uu), this.sr()) : this.jJ.push({
          coins: uu.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      sr() {
        const uu = this.now();
        if (null === this.playing) return this.releaseUnshown(uu), void this.startNext(uu);
        const Ru = this.playing,
          yu = uu - Ru.startedAt,
          Eu = Ru.view.flyingCoins,
          Ku = function(uu, Ru) {
            let yu = 0;
            for (; yu < Ru && Py(yu, Ru) <= uu;) yu++;
            return yu
          }(yu, Eu);
        if (Ku !== Ru.landed) {
          for (let uu = Ku - Ru.landed > 2 ? Ku - 1 : Ru.landed; uu < Ku; uu++) this.onCoinLanded(uu, Eu);
          Ru.landed = Ku, Ru.released = Math.round(Ru.view.coins * Ku / Eu), this.onHeldCoinsChanged()
        }
        for (; Ru.itemsLanded < Ru.view.items.length && 2e3 + 160 * Ru.itemsLanded + 630 <= yu;) this.onItemLanded(Ru.itemsLanded), Ru.itemsLanded++;
        yu >= Ru.view.durationMs && (this.finish(), this.startNext(uu))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.jJ = [], this.Op(null)
      }
      startNext(uu) {
        if (0 === this.queue.length || this.isBusy()) return;
        const Ru = this.queue.shift();
        this.token++;
        const yu = {
          token: this.token,
          day: Ru.dailyRewardDay,
          coins: Ru.dailyRewardCoins,
          items: Ru.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: Ru.dailyRewardDay === Mu ? 24 : 14
        };
        this.playing = {
          view: yu,
          startedAt: uu,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.Op(yu), this.onStarted(yu)
      }
      finish() {
        this.jJ.shift(), this.playing = null, this.holdQuestPopups(!1), this.Op(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(uu) {
        if (this.queue.length > 0 || 0 === this.jJ.length) return;
        const Ru = this.jJ.length;
        this.jJ = this.jJ.filter((Ru => uu - Ru.receivedAt < 6e4)), this.jJ.length !== Ru && this.onHeldCoinsChanged()
      }
    }

    function hy(uu, Ru) {
      return 450 + 715 * uu / (Ru - 1)
    }

    function Py(uu, Ru) {
      return hy(uu, Ru) + 650
    }
    const iy = "skyblockMailboxView";
    class Yy {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.Op = uu, this.isBusy = Ru, this.onStarted = yu, this.now = Eu, this.waiting = [], this.playing = null, this.token = 0, this.itemName = uu => uu
      }
      getSnapshot() {
        var uu, Ru;
        return null !== (uu = null === (Ru = this.playing) || void 0 === Ru ? void 0 : Ru.view) && void 0 !== uu ? uu : null
      }
      setItemName(uu) {
        this.itemName = uu
      }
      SS(uu) {
        this.waiting.push(...uu.mailLetters), this.sr()
      }
      sr() {
        const uu = this.now();
        null !== this.playing && uu - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.Op(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(uu)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.Op(null)
      }
      start(uu) {
        const Ru = this.waiting.slice(0, 3);
        this.token++;
        const yu = {
          token: this.token,
          letters: Ru.map((uu => this.toView(uu))),
          more: this.waiting.length - Ru.length,
          durationMs: 4500 + 700 * Ru.length
        };
        this.waiting = [], this.playing = {
          view: yu,
          startedAt: uu
        }, this.Op(yu), this.onStarted(yu)
      }
      toView(uu) {
        return {
          coins: uu.mailCoins,
          items: uu.mailItems.map((uu => {
            var Ru;
            return {
              itemName: uu.mailItemName,
              amount: uu.mailItemAmount,
              label: null !== (Ru = uu.mailItemLabel) && void 0 !== Ru ? Ru : this.itemName(uu.mailItemName)
            }
          })),
          reasonKey: uu.mailReasonKey,
          reasonParams: uu.mailReasonParams
        }
      }
    }
    const oy = "skyblockQuestGraphView",
      qy = "skyblockDevQuestJump";

    function Oy(uu) {
      if (0 === uu.length) return "";
      const Ru = [`M ${uu[0].x} ${uu[0].y}`];
      for (let Eu = 1; Eu < uu.length - 1; Eu++) {
        const yu = uu[Eu + 1];
        Ru.push(`Q ${uu[Eu].x} ${uu[Eu].y} ${(uu[Eu].x+yu.x)/2} ${(uu[Eu].y+yu.y)/2}`)
      }
      const yu = uu[uu.length - 1];
      return Ru.push(`L ${yu.x} ${yu.y}`), Ru.join(" ")
    }

    function vy(uu, Ru) {
      return uu < Ru ? `${uu}|${Ru}` : `${Ru}|${uu}`
    }
    class ay extends ru {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          mu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          Ju = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(uu, yu, Eu), this.translate = Ru, this.requestJump = Ku, this.requestArrive = Qu, this.storage = mu, this.now = Ju, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = uu => {
          uu !== this.hoveredId && (this.hoveredId = uu, this.emit())
        }, this.jump = uu => {
          this.close(), this.requestJump(uu)
        }
      }
      SS(uu) {
        if (!this.VS)
          if ("graph" !== uu.kind) {
            if ("jumping" === uu.kind) {
              const Ru = {
                questId: uu.graphQuestId,
                variation: uu.graphVariation,
                completes: uu.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(qy, Ru)
            }
          } else {
            const Ru = ++this.graphCount;
            yu.e(111).then((() => yu(6228))).then((yu => {
              let {
                default: Eu
              } = yu;
              this.VS || Ru !== this.graphCount || (this.layout = function(uu, Ru, yu) {
                var Eu, Ku;
                const Qu = new uu.graphlib.Graph;
                Qu.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), Qu.setDefaultEdgeLabel((() => ({})));
                const mu = new Set;
                for (const Vu of Ru) mu.add(Vu.graphQuestId), Qu.setNode(Vu.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const Ju = yu.filter((uu => mu.has(uu.graphFromId) && mu.has(uu.graphToId) && uu.graphFromId !== uu.graphToId)),
                  Nu = new Map;
                for (const Vu of [...Ju].sort(((uu, Ru) => Number("awaits" === uu.graphEdgeKind) - Number("awaits" === Ru.graphEdgeKind)))) {
                  const uu = vy(Vu.graphFromId, Vu.graphToId);
                  Nu.has(uu) || (Nu.set(uu, Vu), Qu.setEdge(Vu.graphFromId, Vu.graphToId))
                }
                uu.layout(Qu);
                const Xu = Qu.graph();
                return {
                  width: Math.ceil(null !== (Eu = Xu.width) && void 0 !== Eu ? Eu : 0),
                  height: Math.ceil(null !== (Ku = Xu.height) && void 0 !== Ku ? Ku : 0),
                  nodes: Ru.map((uu => {
                    var Ru, yu;
                    const Eu = Qu.node(uu.graphQuestId);
                    return {
                      node: uu,
                      left: (null !== (Ru = Eu.x) && void 0 !== Ru ? Ru : 0) - 95,
                      top: (null !== (yu = Eu.y) && void 0 !== yu ? yu : 0) - 26
                    }
                  })),
                  edges: Ju.map((uu => {
                    var Ru;
                    const yu = Nu.get(vy(uu.graphFromId, uu.graphToId)),
                      Eu = null !== (Ru = Qu.edge(yu.graphFromId, yu.graphToId).points) && void 0 !== Ru ? Ru : [];
                    return {
                      edge: uu,
                      key: `${uu.graphFromId}|${uu.graphToId}|${uu.graphEdgeKind}`,
                      path: Oy(yu.graphFromId === uu.graphFromId ? Eu : [...Eu].reverse())
                    }
                  })),
                  plans: new Map(Ru.map((uu => [uu.graphQuestId, new Set([uu.graphQuestId, ...uu.graphPlanIds])])))
                }
              }(Eu, uu.graphNodes, uu.graphEdges), this.show())
            })).catch((uu => {
              console.error("The quest graph could not be laid out", uu)
            }))
          }
      }
      resumeJump(uu) {
        const Ru = this.storage.getItem(qy);
        this.storage.removeItem(qy), null === Ru || Ru.variation !== uu || this.now() - Ru.departedAt > 6e4 || this.requestArrive(Ru.questId, Ru.completes)
      }
      setTranslator(uu) {
        this.translate = uu, this.emit()
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
        var uu, Ru;
        return null !== (uu = null === this.hoveredId || null === (Ru = this.layout) || void 0 === Ru ? void 0 : Ru.plans.get(this.hoveredId)) && void 0 !== uu ? uu : new Set
      }
      buildSnapshot() {
        const uu = this.layout;
        if (null === uu) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const Ru = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: uu.width,
          height: uu.height,
          nodes: uu.nodes.map((uu => {
            let {
              node: yu,
              left: Eu,
              top: Ku
            } = uu;
            return {
              id: yu.graphQuestId,
              name: this.translate(yu.graphNameKey),
              detail: null === yu.graphGiverName ? yu.graphZoneId : `${yu.graphGiverName} \xb7 ${yu.graphZoneId}`,
              state: yu.graphState,
              left: Eu,
              top: Ku,
              inPlan: Ru.has(yu.graphQuestId),
              hovered: yu.graphQuestId === this.hoveredId
            }
          })),
          edges: uu.edges.map((uu => {
            let {
              edge: yu,
              key: Eu,
              path: Ku
            } = uu;
            return {
              key: Eu,
              kind: yu.graphEdgeKind,
              path: Ku,
              inPlan: Ru.has(yu.graphFromId) && Ru.has(yu.graphToId)
            }
          })),
          planning: Ru.size > 0
        }
      }
    }
    var fy = yu(36805);
    const uE = 250,
      RE = 2150,
      yE = -2.8,
      EE = 2.2,
      KE = -27,
      QE = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      mE = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      JE = Math.round(50 + 1e3 * (mE.delay + mE.period / 2)),
      NE = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      XE = Array.from({
        length: 26
      }, ((uu, Ru) => {
        const yu = 2.39996 * Ru,
          Eu = .5 + .618034 * Ru % 1 * .23,
          Ku = Ru % 3 !== 2;
        return {
          rune: Ku ? NE[7 * Ru % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(yu)*Eu).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(yu)*Eu).toFixed(3)})`,
            "--spin": 40 * (Ru % 5 - 2) + "deg",
            "--size": (Ku ? 1 + Ru % 4 * .2 : .3 + Ru % 2 * .15) + "rem",
            "--duration": `${(1.8+7*Ru%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*Ru%3).toFixed(2)}s`
          }
        }
      }));

    function VE(uu, Ru) {
      return Array.from({
        length: 30 + 3 * uu + (Ru ? 10 : 0)
      }, ((uu, Ru) => {
        const yu = Ru < 4,
          Eu = yu ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          Ku = yu ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          Qu = yu ? 2.2 : .6 + Math.random(),
          mu = yu ? .3 : Math.random() < .5 ? .16 : .24,
          Ju = yu ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": Eu,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${Ku.toFixed(2)}rem`,
          "--length": `${Qu.toFixed(2)}rem`,
          "--width": `${mu}rem`,
          "--duration": `${Math.round(Ju)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function rE(uu) {
      let {
        zeta: Ru,
        period: yu
      } = uu;
      const Eu = 2 * Math.PI / yu;
      return {
        w: Eu,
        decay: Ru * Eu / Math.sqrt(1 - Ru * Ru)
      }
    }
    let BE = !1;

    function xE() {
      if (BE) return;
      BE = !0;
      const uu = document.createElement("style");
      uu.textContent = function() {
        const uu = rE(QE),
          Ru = rE(mE),
          yu = Ru => Math.exp(-uu.decay * Ru) * Math.sin(uu.w * Ru),
          Eu = yu(Math.atan(uu.w / uu.decay) / uu.w),
          Ku = .25,
          Qu = 2.15,
          mu = Math.round(215),
          Ju = [];
        for (let Nu = 0; Nu <= mu; Nu++) {
          const uu = Nu / mu * Qu;
          let Xu = Math.sin(Math.min(uu, Ku) / Ku * Math.PI / 2) ** 2,
            Vu = 0,
            ru = 1,
            Bu = 1 - .2 * Xu,
            xu = 1;
          if (uu >= Ku) {
            const mu = uu - Ku,
              Ju = Math.max(0, mu - .05);
            Xu = Math.exp(-Ju / .05), Vu = yu(Ju + QE.lead * (1 - Math.exp(-Ju / QE.rush))) / Eu;
            const Nu = Ju - mE.delay,
              Su = Nu <= 0 ? 0 : 1 - Math.exp(-Ru.decay * Nu) * (Math.cos(Ru.w * Nu) + Ru.decay / Ru.w * Math.sin(Ru.w * Nu)),
              pu = Math.max(0, (uu - 1.77) / (Qu - 1.77));
            ru = (1 + (mE.to - 1) * Su) * (1 + .08 * pu), Bu = 1.1 + 1.5 * Math.exp(-mu / .07) + .3 * Math.exp(-(((1e3 * mu - JE) / 100) ** 2)) + .8 * pu, xu = 1 - pu ** 1.5
          }
          const Su = .15 * Xu + yE * Vu,
            pu = -.1 * Xu + EE * Vu,
            Tu = 3 * Xu + KE * Vu;
          Ju.push(`${(Nu/mu*100).toFixed(3)}% { opacity: ${xu.toFixed(3)}; transform: translate(${Su.toFixed(3)}rem, ${pu.toFixed(3)}rem) rotate(${Tu.toFixed(2)}deg) scale(${ru.toFixed(3)}); filter: brightness(${Bu.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${Ju.join(" ")} }`
      }(), document.head.append(uu)
    }
    const SE = "skyblockForgeView",
      pE = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class TE extends ru {
      constructor(uu, Ru, yu, Eu, Ku) {
        super(uu, yu, Eu), this.translate = Ru, this.requestForge = Ku, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.select = (uu, Ru) => {
          var yu, Eu;
          null !== this.forging || (null !== (yu = this.owned[(0, fy.t)(Ru, uu)]) && void 0 !== yu ? yu : 0) <= 0 || (this.selected[uu] = this.selected[uu] === Ru ? null : Ru, this.status = null, null === (Eu = this.onPartSelected) || void 0 === Eu || Eu.call(this), this.emit())
        }, this.forge = uu => {
          var Ru, yu;
          const Eu = this.selectedParts();
          if (null === Eu || this.isPending() || !this.open) return;
          const Ku = (0, fy.q)(Eu);
          if (null === Ku || Ku.coalCost > this.coal) return;
          const Qu = this.preview(Ku),
            mu = null !== (Ru = null === (yu = this.onForgeStarted) || void 0 === yu ? void 0 : yu.call(this, Qu.tier, Qu.named, uu)) && void 0 !== Ru ? Ru : () => {};
          if (this.dropArrival(), uu) {
            const uu = {
              id: ++this.forgeId,
              preview: Qu,
              timers: [],
              stopSounds: mu,
              landed: !1,
              reply: null
            };
            uu.timers.push(setTimeout((() => {
              uu.landed = !0, null !== uu.reply && (this.apply(uu.reply), uu.reply = null, this.emit())
            }), uE), setTimeout((() => {
              this.finishForge(uu)
            }), RE)), this.forging = uu
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(Eu)
        }, this.snapshot = this.buildSnapshot()
      }
      SS(uu) {
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === uu.forgeMessageKind) return this.dropForge(), this.apply(uu), this.status = null, void this.show();
        const Ru = this.forging;
        if (null !== Ru && null !== uu.forgeRefusalKey) this.dropForge();
        else if (null !== Ru && !Ru.landed) return void(Ru.reply = uu);
        this.apply(uu), this.emit()
      }
      apply(uu) {
        if (this.owned = uu.forgeOwnedParts, this.coal = uu.forgeCoalOwned, this.keepSelectionOwned("open" === uu.forgeMessageKind), null !== uu.forgeForgedSwordId) {
          var Ru;
          const yu = (0, fy.q)(uu.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (Ru = null === yu || void 0 === yu ? void 0 : yu.displayName) && void 0 !== Ru ? Ru : ""
            }
          }
        } else null !== uu.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: uu.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(uu) {
        this.translate = uu, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(uu) {
        var Ru;
        this.forging = null;
        const yu = this.selectedParts(),
          Eu = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: uu.id,
          sameSword: null !== yu && (null === (Ru = (0, fy.q)(yu)) || void 0 === Ru ? void 0 : Ru.displayName) === uu.preview.name,
          timer: Eu
        }, this.emit()
      }
      dropForge() {
        const uu = this.forging;
        if (null !== uu) {
          this.forging = null;
          for (const Ru of uu.timers) clearTimeout(Ru);
          uu.stopSounds(), null !== uu.reply && this.apply(uu.reply)
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
        var uu, Ru, yu;
        const Eu = this.selectedParts(),
          Ku = null === Eu ? null : (0, fy.q)(Eu),
          Qu = null !== (uu = null === (Ru = this.forging) || void 0 === Ru ? void 0 : Ru.preview) && void 0 !== uu ? uu : null === Ku ? null : this.preview(Ku);
        return {
          enabled: this.received,
          open: this.open,
          slots: fy.m.map((uu => ({
            kind: uu,
            label: this.translate(pE[uu]),
            parts: this.partsFor(uu)
          }))),
          coalOwned: this.coal,
          preview: Qu,
          unformedSword: fy.k[null !== (yu = this.selected.Blade) && void 0 !== yu ? yu : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((uu => uu > 0)),
          canForge: null !== Qu && !Qu.coalShort && !this.isPending(),
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
      preview(uu) {
        return {
          name: uu.displayName,
          lore: uu.lore,
          baseSword: uu.baseSword,
          enchantmentTier: uu.enchantmentTier,
          tier: Number(uu.enchantmentTier.slice(-1)),
          named: uu.named,
          stats: this.stats(uu),
          effects: uu.effects,
          coalCost: uu.coalCost,
          coalShort: null === this.forging && uu.coalCost > this.coal
        }
      }
      partsFor(uu) {
        const Ru = [];
        for (const Eu of fy.h) {
          var yu;
          const Ku = (0, fy.t)(Eu, uu),
            Qu = null !== (yu = this.owned[Ku]) && void 0 !== yu ? yu : 0;
          Qu > 0 && Ru.push({
            material: Eu,
            itemName: Ku,
            owned: Qu,
            selected: this.selected[uu] === Eu,
            placeholder: !1
          })
        }
        if (0 === Ru.length) {
          const yu = fy.h[0];
          Ru.push({
            material: yu,
            itemName: (0, fy.t)(yu, uu),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return Ru
      }
      stats(uu) {
        const Ru = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${uu.powerMultiplier.toFixed(2)}`,
          better: uu.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${uu.damageMultiplier.toFixed(2)}`,
          better: uu.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/uu.cooldownMultiplier).toFixed(2)}`,
          better: uu.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${uu.knockbackMultiplier.toFixed(2)}`,
          better: uu.knockbackMultiplier > 1
        }];
        return uu.reachBonus > 0 && Ru.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${uu.reachBonus.toFixed(1)}`,
          better: !0
        }), uu.damageReduction > 0 && Ru.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*uu.damageReduction)}%`,
          better: !0
        }), Ru
      }
      selectedParts() {
        const {
          Blade: uu,
          Guard: Ru,
          Handle: yu
        } = this.selected;
        return null === uu || null === Ru || null === yu ? null : {
          blade: uu,
          guard: Ru,
          handle: yu
        }
      }
      keepSelectionOwned(uu) {
        for (const yu of fy.m) {
          var Ru;
          const Eu = this.selected[yu];
          if (null !== Eu && (null !== (Ru = this.owned[(0, fy.t)(Eu, yu)]) && void 0 !== Ru ? Ru : 0) > 0) continue;
          if (!uu) {
            this.selected[yu] = null;
            continue
          }
          const Ku = [...fy.h].reverse().find((uu => {
            var Ru;
            return (null !== (Ru = this.owned[(0, fy.t)(uu, yu)]) && void 0 !== Ru ? Ru : 0) > 0
          }));
          this.selected[yu] = null !== Ku && void 0 !== Ku ? Ku : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const WE = "skyblockSmugglerView",
      jE = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class HE extends ru {
      constructor(uu, Ru, yu, Eu, Ku) {
        let Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(uu, yu, Eu), this.translate = Ru, this.requestBuy = Ku, this.now = Qu, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = uu => uu, this.onBought = null, this.buy = uu => {
          const Ru = this.deals[uu];
          void 0 !== Ru && !this.isPending() && this.open && !this.soldOut.has(uu) && this.canAfford(Ru) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, uu))
        }, this.snapshot = this.buildSnapshot()
      }
      SS(uu) {
        if (this.received = !0, this.day = uu.smugglerDay, this.deals = uu.smugglerDeals, this.rivets = uu.smugglerRivetsOwned, this.crests = uu.smugglerCrestsOwned, this.soldOut = new Set(uu.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + uu.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === uu.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = uu.smugglerBoughtSlot, null !== uu.smugglerBoughtSlot) {
          var Ru, yu;
          const Eu = this.deals[uu.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === Eu ? "" : this.dealName(Eu),
              amount: String(null !== (Ru = null === Eu || void 0 === Eu ? void 0 : Eu.smugglerDealAmount) && void 0 !== Ru ? Ru : 0)
            }
          }, this.boughtCount++, null === (yu = this.onBought) || void 0 === yu || yu.call(this)
        } else null !== uu.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: uu.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(uu, Ru, yu) {
        this.translate = uu, void 0 !== yu && (this.itemName = yu), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(uu) {
        if (null !== uu.smugglerDealUniqueName) return uu.smugglerDealUniqueName;
        const Ru = jE[uu.smugglerDealItem];
        return void 0 === Ru ? this.itemName(uu.smugglerDealItem) : this.translate(Ru)
      }
      canAfford(uu) {
        return uu.smugglerDealRivets <= this.rivets && uu.smugglerDealCrests <= this.crests
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
        const uu = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return uu <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : uu < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(uu)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(uu / 60)),
          minutes: String(uu % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((uu, Ru) => ({
            slot: Ru,
            itemName: uu.smugglerDealItem,
            displayName: this.dealName(uu),
            enchantmentTier: uu.smugglerDealEnchantmentTier,
            amount: uu.smugglerDealAmount,
            rivets: uu.smugglerDealRivets,
            crests: uu.smugglerDealCrests,
            affordable: this.canAfford(uu),
            soldOut: this.soldOut.has(Ru),
            justBought: this.boughtSlot === Ru
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
    const dE = "skyblockPassageView",
      bE = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function CE(uu, Ru) {
      return uu(bE[Ru])
    }

    function kE(uu, Ru, yu, Eu) {
      const Ku = Math.ceil((yu - Eu) / 864e5),
        Qu = CE(uu, Ru);
      return Ku > 1 ? uu("skyblockGame:passageNextDays", {
        phase: Qu,
        days: String(Ku)
      }) : uu("skyblockGame:passageNextSoon", {
        phase: Qu
      })
    }
    class eE extends ru {
      constructor(uu, Ru, yu, Eu) {
        let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(uu, yu, Eu), this.translate = Ru, this.now = Ku, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = uu => uu, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      SS(uu) {
        this.message = uu, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(uu, Ru, yu) {
        this.translate = uu, void 0 !== yu && (this.itemName = yu), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(uu) {
        return {
          itemName: uu.passageFish,
          displayName: this.itemName(uu.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(uu.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const uu = this.message;
        return null === uu ? {
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
          phase: uu.passagePhase,
          phaseName: CE(this.translate, uu.passagePhase),
          visitors: uu.passageVisitors.map((uu => this.describe(uu))),
          resting: this.describe(uu.passageResting),
          nextPhase: uu.passageNextPhase,
          next: kE(this.translate, uu.passageNextPhase, uu.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var AE = yu(38308);
    const DE = "skyblockKeepersChairView";
    class ME extends ru {
      constructor(uu, Ru, yu, Eu, Ku) {
        let Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          mu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new AE.b;
        super(uu, yu, Eu), this.translate = Ru, this.requestAim = Ku, this.now = Qu, this.pacer = mu, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = uu => uu, this.aim = uu => {
          !this.awaitingReply && this.open && this.atChair && uu !== this.favoured && (null === uu || this.islands.some((Ru => Ru.keepersChairIslandId === uu && Ru.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== uu && void 0 !== uu ? uu : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = mu.subscribe((() => {
          this.emit()
        }))
      }
      SS(uu) {
        var Ru, yu;
        this.received = !0;
        const Eu = this.favoured,
          Ku = this.atChair;
        var Qu;
        return this.islands = uu.keepersChairIslands, this.favoured = uu.keepersChairFavoured, this.passage = null !== (Ru = uu.keepersChairPassage) && void 0 !== Ru ? Ru : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (yu = uu.keepersChairAtChair) || void 0 === yu || yu, "place" === uu.keepersChairMessageKind ? (!Ku && this.atChair && "refused" === (null === (Qu = this.status) || void 0 === Qu ? void 0 : Qu.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === uu.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== uu.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: uu.keepersChairRefusalKey,
          island: null
        } : this.favoured !== Eu && (this.status = null === this.favoured ? {
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
      receivePassage(uu) {
        this.received && (this.passage = uu, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(uu, Ru, yu) {
        this.translate = uu, void 0 !== yu && (this.itemName = yu), this.emit()
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
      islandName(uu) {
        const Ru = this.islands.find((Ru => Ru.keepersChairIslandId === uu));
        return void 0 === Ru ? uu : this.translate(Ru.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const uu = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          Ru = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((uu => {
            const Ru = uu.keepersChairFeaturedFish;
            return {
              id: uu.keepersChairIslandId,
              name: this.translate(uu.keepersChairIslandNameKey),
              relit: uu.keepersChairIslandRelit,
              featuredFish: null === Ru ? null : {
                itemName: Ru,
                displayName: this.itemName(Ru)
              },
              favoured: uu.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === uu ? null : {
            tone: uu.tone,
            text: this.translate(uu.key, null === uu.island ? void 0 : {
              island: this.islandName(uu.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === Ru ? null : {
            phase: Ru.keepersChairPassagePhase,
            phaseName: CE(this.translate, Ru.keepersChairPassagePhase),
            nextPhase: Ru.keepersChairPassageNextPhase,
            next: kE(this.translate, Ru.keepersChairPassageNextPhase, Ru.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const IE = "skyblockReachLogView",
      GE = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      UE = "Caught Fish",
      nE = [1, 2, 4];

    function sE(uu, Ru) {
      return uu.map((uu => ({
        ...uu,
        reachLogPageFish: uu.reachLogPageFish.map((uu => ({
          ...uu,
          reachLogFishFresh: Ru(uu)
        })))
      })))
    }
    class tE extends ru {
      constructor(uu, Ru, yu, Eu, Ku) {
        let Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new AE.b;
        super(uu, yu, Eu), this.translate = Ru, this.requestOpen = Ku, this.pacer = Qu, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = uu => uu, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = uu => {
          this.pages.some((Ru => Ru.reachLogIslandId === uu)) && (this.selected = uu, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Qu.subscribe((() => {
          this.emit()
        }))
      }
      SS(uu) {
        if (this.received = !0, "status" === uu.reachLogMessageKind) return !0 === uu.reachLogNews && this.markNews(), this.serverFresh = uu.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const Ru = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== uu.reachLogMessageKind)
          if (this.pageViews = null, this.pages = sE(uu.reachLogPages, (uu => uu.reachLogFishFresh || this.heldFresh.has(uu.reachLogFishItem))), this.letGoShown = uu.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, Ru) this.showPages();
          else {
            for (const uu of this.pages)
              for (const Ru of uu.reachLogPageFish) Ru.reachLogFishFresh && this.heldFresh.add(Ru.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(uu, Ru, yu) {
        this.translate = uu, this.pageViews = null, void 0 !== yu && (this.itemName = yu), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = sE(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var uu, Ru, yu, Eu;
        const Ku = this.pages.find((uu => uu.reachLogPageFish.some((uu => uu.reachLogFishFresh))));
        if (void 0 !== Ku) return Ku.reachLogIslandId;
        if (null !== this.selected && this.pages.some((uu => uu.reachLogIslandId === this.selected))) return this.selected;
        return null !== (uu = null !== (Ru = null === (yu = this.pages.filter((uu => uu.reachLogIslandAwake)).at(-1)) || void 0 === yu ? void 0 : yu.reachLogIslandId) && void 0 !== Ru ? Ru : null === (Eu = this.pages[0]) || void 0 === Eu ? void 0 : Eu.reachLogIslandId) && void 0 !== uu ? uu : null
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
        return this.pages.map((uu => {
          var Ru;
          return {
            id: uu.reachLogIslandId,
            name: this.translate(uu.reachLogIslandNameKey),
            awake: uu.reachLogIslandAwake,
            gold: uu.reachLogPageGold,
            caught: uu.reachLogPageFish.filter((uu => uu.reachLogFishCaught && !uu.reachLogFishVisitor)).length,
            total: uu.reachLogPageFish.filter((uu => !uu.reachLogFishVisitor)).length,
            fish: uu.reachLogPageFish.map((uu => {
              const Ru = uu.reachLogFishBestKg;
              return {
                itemName: uu.reachLogFishItem,
                name: uu.reachLogFishCaught ? this.itemName(uu.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: uu.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / uu.reachLogFishChance))
                }),
                best: uu.reachLogFishCaught ? null === Ru ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: Ru.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: uu.reachLogFishMarks,
                ribbons: nE.map((Ru => 0 !== (uu.reachLogFishRibbons & Ru))),
                glimmer: 0 !== (8 & uu.reachLogFishRibbons),
                halo: 0 !== (32 & uu.reachLogFishRibbons),
                fresh: uu.reachLogFishFresh,
                visitor: uu.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (Ru = uu.reachLogPageReturner) && void 0 !== Ru ? Ru : null)
          }
        }))
      }
      buildReturner(uu) {
        return null === uu ? null : {
          itemName: uu.reachLogReturnerFishItem,
          line: this.translate(uu.reachLogReturnerLineKey, {
            name: this.translate(uu.reachLogReturnerNameKey),
            trinket: this.translate(uu.reachLogReturnerTrinketKey)
          }),
          back: uu.reachLogReturnerBack
        }
      }
      receivePassagePhase(uu) {
        null !== this.passagePhase && this.passagePhase !== uu && (this.pagesCurrent = !1), this.passagePhase = uu
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const lE = "skyblockLampLightView";
    class gE {
      constructor(uu, Ru, yu, Eu) {
        this.Op = uu, this.translate = Ru, this.requestCommand = yu, this.pacer = Eu, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.VS = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = uu => {
          uu ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = uu => {
          this.send(`buy ${uu}`)
        }, this.socket = uu => {
          this.send(`socket ${null!==uu&&void 0!==uu?uu:lu}`)
        }, this.wearTint = uu => {
          this.send(`tint ${null!==uu&&void 0!==uu?uu:lu}`)
        }, this.setSituation = uu => {
          this.situation = uu, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Eu.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = Eu.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      SS(uu) {
        if (this.message = uu, null !== uu.lampLightShop && (this.shop = uu.lampLightShop), "open" === uu.lampLightKind && (this.refusalKey = null), "reply" === uu.lampLightKind) {
          var Ru;
          const Ku = null !== (Ru = uu.lampLightReplyTag) && void 0 !== Ru ? Ru : null,
            Qu = null !== Ku && Ku === this.offTag;
          var yu, Eu;
          if (Qu ? this.settleOff() : null !== Ku && Ku !== this.awaitingTag || this.settleReply(), this.refusalKey = uu.lampLightRefusalKey, null !== uu.lampLightBought && !Qu) this.sparkle = {
            id: uu.lampLightBought,
            count: (null !== (yu = null === (Eu = this.sparkle) || void 0 === Eu ? void 0 : Eu.count) && void 0 !== yu ? yu : 0) + 1
          }
        }
        uu.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === uu.lampLightKind && (this.lastGained = uu.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(uu) {
        uu !== this.atChair && (this.atChair = uu, uu && (this.refusalKey = null), this.emit())
      }
      setTranslator(uu, Ru) {
        this.translate = uu, this.locale = null !== Ru && void 0 !== Ru ? Ru : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.VS = !0
      }
      send(uu) {
        var Ru;
        if (null !== this.awaitingTag || "ready" !== (null === (Ru = this.message) || void 0 === Ru ? void 0 : Ru.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const yu = this.nextTag();
        this.awaitingTag = yu, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${uu} ${yu}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const uu = this.nextTag();
        this.offTag = uu, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${uu}`)
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
        this.VS || (this.snapshot = this.buildSnapshot(), this.Op(this.snapshot))
      }
      formatLight(uu) {
        return Math.floor(uu).toLocaleString(this.locale)
      }
      formatPercent(uu) {
        const Ru = 100 * uu;
        return Ru >= 10 ? Math.round(Ru).toLocaleString(this.locale) : Ru.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(uu, Ru) {
        if ("bite" === uu) return this.translate("skyblockGame:lampLightBite", {
          seconds: (Ru.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === uu) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(Ru.lampLightRareChance)
        });
        if ("notice" === uu) return null === Ru.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(Ru.lampLightNoticeChance)
        });
        const yu = "meter" === uu ? Ru.lampLightMeterCatches : Ru.lampLightBloomCatches;
        return null === yu ? null : this.translate("meter" === uu ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(yu))
        })
      }
      oddsLines(uu, Ru) {
        const yu = (uu, Ru) => {
            var yu;
            return null !== (yu = {
              bite: Ru.lampLightBiteMs,
              rare: Ru.lampLightRareChance,
              meter: Ru.lampLightMeterCatches,
              bloom: Ru.lampLightBloomCatches,
              notice: Ru.lampLightNoticeChance
            } [uu]) && void 0 !== yu ? yu : 0
          },
          Eu = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          Ku = [];
        for (const Qu of ["bite", "rare", "meter", "bloom", "notice"]) {
          const mu = this.formatOdds(Qu, uu),
            Ju = this.formatOdds(Qu, Ru);
          if (null === mu || null === Ju || "bite" !== Qu && "rare" !== Qu && mu === Ju) continue;
          const Nu = yu(Qu, Ru) - yu(Qu, uu),
            Xu = Eu[Qu] ? Nu < 0 : Nu > 0;
          Ku.push({
            label: Qu,
            before: mu,
            after: Ju,
            tone: mu === Ju ? "same" : Xu ? "better" : "worse"
          })
        }
        return Ku
      }
      charmView(uu, Ru, yu) {
        const Eu = uu.lampLightCharmId.charAt(0).toUpperCase() + uu.lampLightCharmId.slice(1),
          Ku = "bloom" === this.situation;
        return {
          id: uu.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${Eu}`),
          effect: this.translate(`skyblockGame:lampLightCharm${Eu}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(uu.lampLightCharmCost)
          }),
          owned: uu.lampLightCharmOwned,
          affordable: yu >= uu.lampLightCharmCost,
          socketed: Ru.lampLightSocketed === uu.lampLightCharmId,
          lines: this.oddsLines(Ku ? Ru.lampLightBareBloom : Ru.lampLightBareOpen, Ku ? uu.lampLightCharmBloom : uu.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var uu, Ru, yu, Eu;
        const Ku = this.message,
          Qu = "ready" === (null === Ku || void 0 === Ku ? void 0 : Ku.lampLightStatus) ? this.shop : null,
          mu = null !== (uu = null === Ku || void 0 === Ku ? void 0 : Ku.lampLightBalance) && void 0 !== uu ? uu : 0,
          Ju = this.atChair,
          Nu = "loading" === (null === Ku || void 0 === Ku ? void 0 : Ku.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === Ku || void 0 === Ku ? void 0 : Ku.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          Xu = "ready" !== (null === Ku || void 0 === Ku ? void 0 : Ku.lampLightStatus) || Ju ? null !== (Ru = this.refusalKey) && void 0 !== Ru ? Ru : Nu : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== Ku && "locked" !== Ku.lampLightStatus,
          status: null !== (yu = null === Ku || void 0 === Ku ? void 0 : Ku.lampLightStatus) && void 0 !== yu ? yu : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(mu)
          }),
          releasing: null !== (Eu = null === Ku || void 0 === Ku ? void 0 : Ku.lampLightReleasing) && void 0 !== Eu && Eu,
          gained: null === Ku || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === Ku || void 0 === Ku ? void 0 : Ku.lampLightStatus) && Ju && !this.isPending(),
          situation: this.situation,
          shop: null === Qu ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: Qu.lampLightOddsRod,
              island: this.translate(Qu.lampLightIslandNameKey)
            }),
            heldRod: null !== Qu.lampLightHeldRod,
            charms: Qu.lampLightCharms.map((uu => this.charmView(uu, Qu, mu))),
            tints: Qu.lampLightTints.map((uu => {
              const Ru = uu.lampLightTintId,
                [yu, Eu, Ku] = uu.lampLightTintColour;
              return {
                id: Ru,
                name: this.translate(`skyblockGame:lampLightTint${Ru.charAt(0).toUpperCase()}${Ru.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(uu.lampLightTintCost)
                }),
                owned: uu.lampLightTintOwned,
                affordable: mu >= uu.lampLightTintCost,
                wearing: Qu.lampLightTint === Ru,
                colour: `rgb(${yu}, ${Eu}, ${Ku})`
              }
            })),
            wearingIslandColours: null === Qu.lampLightTint
          },
          notice: null === Xu ? null : this.translate(Xu),
          sparkle: this.sparkle
        }
      }
    }
    const cE = "skyblockMagmawardView";
    class LE {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.Op = uu, this.now = Ru, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = Zu.map((() => 0)), this.wornAt = Zu.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      SS(uu) {
        var Ru, yu;
        const Eu = Zu.map(((Ru, yu) => !0 === uu.magmawardPiecesWorn[yu]));
        if (!Eu.includes(!0)) return this.snapshot = null, void this.Op(null);
        const Ku = this.now(),
          Qu = this.snapshot;
        null === Qu && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const mu = uu.magmawardFuelCarried,
          Ju = !Eu.includes(!1);
        let Nu = null !== (Ru = null === Qu || void 0 === Qu ? void 0 : Qu.pulse) && void 0 !== Ru ? Ru : null,
          Xu = null !== (yu = null === Qu || void 0 === Qu ? void 0 : Qu.flare) && void 0 !== yu ? yu : null;
        uu.magmawardFuelBurned ? (Nu = "burn", Xu = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = Ku, this.flareAt = Ku) : null !== Qu && mu > Qu.fuel && (Nu = "gain", this.pulseToken++, this.pulseAt = Ku), Ju && null !== Qu && !Qu.fullSet && (Xu = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = Ku, this.setLitAt = Ku);
        const Vu = Zu.map(((uu, Ru) => (Eu[Ru] && null !== Qu && !Qu.pieces[Ru].worn && (this.wornTokens[Ru]++, this.wornAt[Ru] = Ku), {
          itemName: uu,
          worn: Eu[Ru],
          wornToken: this.wornTokens[Ru],
          justWorn: Eu[Ru] && this.isPlaying(this.wornAt[Ru], Ku)
        })));
        this.snapshot = {
          pieces: Vu,
          wornCount: Eu.filter(Boolean).length,
          fullSet: Ju,
          fuel: mu,
          fuelState: mu <= 0 ? "empty" : mu <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, Ku) ? Nu : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, Ku) ? Xu : null,
          flareToken: this.flareToken,
          setLit: Ju && this.isPlaying(this.setLitAt, Ku),
          setLitToken: this.setLitToken
        }, this.Op(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.Op(null)
      }
      isPlaying(uu, Ru) {
        return Ru - uu < 1200
      }
    }
    const zE = "skyblockGlowtideView";
    class FE {
      constructor(uu) {
        this.Op = uu, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = uu => {
          this.arrow = uu, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      SS(uu) {
        this.bloom = uu.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.Op(null))
      }
      afterRender(uu, Ru) {
        const yu = this.bloom;
        if (null === yu || null === uu) return;
        const Eu = yu.glowtideBloomX - uu[0],
          Qu = yu.glowtideBloomZ - uu[2],
          mu = Math.hypot(Eu, Qu),
          Ju = this.snapshot,
          Nu = null !== Ju && void 0 !== Ju && Ju.inRange ? 1 : 0,
          Xu = mu <= 12.5 + Nu && uu[1] - yu.glowtideBloomY <= 10 + Nu;
        !Xu || null !== Ju && void 0 !== Ju && Ju.inRange || this.inRangeToken++;
        const Vu = {
          colour: yu.glowtideBloomColour,
          inRange: Xu,
          distance: Math.round(mu),
          inRangeToken: this.inRangeToken
        };
        (null === Ju || Vu.colour !== Ju.colour || Vu.inRange !== Ju.inRange || !Xu && Vu.distance !== Ju.distance) && (this.snapshot = Vu, this.Op(Vu));
        const ru = Ku.c.computeShortestRotation(Ru, (0, Ku.Jb)([Eu, 0, Qu]));
        null === this.arrow || Math.abs(ru - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${ru}rad)`, this.arrowTurn = ru)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.Op(null)
      }
    }
    const wE = "skyblockGlowMeterView";
    class ZE {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.Op = uu, this.now = Ru, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      SS(uu) {
        const Ru = this.now(),
          {
            glowMeterFill: yu,
            glowMeterCapacity: Eu
          } = uu,
          Ku = yu >= Eu,
          Qu = this.snapshot;
        null !== Qu && (Ku && !Qu.full && (this.fullToken++, this.fullAt = Ru), Qu.full && !Ku ? (this.burstToken++, this.burstAt = Ru) : yu > Qu.fill && (this.gainToken++, this.gainAt = Ru)), this.snapshot = {
          fill: yu,
          Nr: Eu,
          ratio: Math.min(1, Math.max(0, yu / Eu)),
          full: Ku,
          rares: uu.glowMeterRares,
          ready: Ku && this.isPlaying(this.fullAt, Ru),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, Ru),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, Ru),
          gainToken: this.gainToken
        }, this.Op(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.Op(null)
      }
      isPlaying(uu, Ru) {
        return Ru - uu < 2e3
      }
    }
    const hE = "skyblockHushWaitView";
    class PE {
      constructor(uu) {
        this.Op = uu, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      SS(uu) {
        let {
          hushWaitMs: Ru,
          hushWaitTotalMs: yu,
          hushWaitLines: Eu
        } = uu;
        if (this.clearTimers(), this.token++, 0 === Eu.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (Ru <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: Eu[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const Ku = Math.max(null !== yu && void 0 !== yu ? yu : Ru, Ru),
          Qu = Ku - Ru,
          mu = uu => Ku * uu / Eu.length,
          Ju = uu => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: Ku,
              elapsedMs: Qu,
              line: Eu[uu],
              lineIndex: uu
            })
          };
        let Nu = 0;
        for (; Nu + 1 < Eu.length && mu(Nu + 1) <= Qu;) Nu++;
        Ju(Nu);
        for (let Xu = Nu + 1; Xu < Eu.length; Xu++) this.later(mu(Xu) - Qu, (() => {
          Ju(Xu)
        }));
        this.later(Ru, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(uu) {
        this.snapshot = uu, this.Op(uu)
      }
      later(uu, Ru) {
        this.timers.push(setTimeout(Ru, uu))
      }
      clearTimers() {
        for (const uu of this.timers) clearTimeout(uu);
        this.timers = []
      }
    }
    const iE = "skyblockTideChartsView",
      YE = 36e5,
      oE = 864e5;

    function qE(uu, Ru, yu) {
      const [Eu, Ku, Qu, mu] = uu.tideChartArea, Ju = Math.floor(Ru), Nu = Math.floor(yu);
      return Ju >= Eu && Ju <= Qu && Nu >= Ku && Nu <= mu
    }

    function OE(uu, Ru, yu) {
      const [Eu, Ku, Qu, mu] = uu.tideChartWater;
      return function(uu, Ru, yu, Eu, Ku, Qu) {
        const mu = 4 - hu(Math.floor(Ku) - (uu - yu), yu);
        return 5 * hu(Math.floor(Qu) - (Ru - Eu), Eu) + mu
      }(Eu, Ku, Qu, mu, Ru, yu)
    }

    function vE(uu, Ru, yu) {
      const Eu = uu.tideCharts;
      for (let Ku = 0; Ku < Eu.length; Ku++)
        if (qE(Eu[Ku], Ru, yu)) return Eu[Ku];
      return null
    }

    function aE(uu, Ru, yu) {
      const Eu = Math.max(0, Ru - yu);
      return Eu > oE ? uu("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(Eu / oE))
      }) : Eu > YE ? uu("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(Eu / YE))
      }) : uu("skyblockGame:tideChartsTurnSoon")
    }
    class fE extends ru {
      constructor(uu, Ru, yu, Eu) {
        let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(uu, yu, Eu), this.translate = Ru, this.now = Ku, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.cB = uu => {
          this.picked = uu, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      SS(uu) {
        const Ru = this.message;
        if (null !== Ru)
          for (const Eu of uu.tideCharts) {
            var yu;
            const uu = Ru.tideCharts.find((uu => uu.tideChartIsland === Eu.tideChartIsland)),
              Ku = Eu.tideChartLit & ~(null !== (yu = null === uu || void 0 === uu ? void 0 : uu.tideChartLit) && void 0 !== yu ? yu : 0);
            void 0 !== uu && 0 !== Ku && (this.pulse = {
              island: Eu.tideChartIsland,
              cells: Ku,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = uu, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(uu, Ru) {
        var yu;
        const Eu = null === this.message || Number.isNaN(uu) ? null : vE(this.message, uu, Ru),
          Ku = null !== (yu = null === Eu || void 0 === Eu ? void 0 : Eu.tideChartIsland) && void 0 !== yu ? yu : null,
          Qu = null === Eu ? -1 : function(uu, Ru, yu) {
            const [Eu, Ku, Qu, mu] = uu.tideChartWater;
            return function(uu, Ru, yu, Eu, Ku, Qu, mu) {
              return ((Ku - uu) / (yu + mu)) ** 2 + ((Qu - Ru) / (Eu + mu)) ** 2 <= 1
            }(Eu, Ku, Qu, mu, Ru, yu, 2) ? OE(uu, Ru, yu) : -1
          }(Eu, uu, Ru);
        return (Ku !== this.hereIsland || Qu !== this.hereCell) && (this.hereIsland = Ku, this.hereCell = Qu, null !== Ku && (this.lastIsland = Ku), !0)
      }
      afterRender(uu) {
        if (null === this.message) return;
        this.lastX = null === uu ? Number.NaN : uu[0], this.lastZ = null === uu ? Number.NaN : uu[2];
        const Ru = this.locate(this.lastX, this.lastZ),
          yu = this.expirePulses();
        (Ru || yu || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const uu = this.now();
        return !(!this.open || uu - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = uu, aE(this.translate, this.message.tideChartTurnsInMs, uu - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(uu, Ru) {
        const yu = null === this.message ? null : vE(this.message, uu, Ru);
        if (null === yu) return;
        const Eu = OE(yu, uu, Ru);
        0 === (yu.tideChartPreBlank & 1 << Eu) && (this.cast = {
          island: yu.tideChartIsland,
          cell: Eu,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const uu = this.now();
        let Ru = !1;
        return 0 !== this.pulse.cells && uu - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, Ru = !0), null !== this.cast && uu - this.cast.atMs >= 1500 && (this.cast = null, Ru = !0), Ru
      }
      setTranslator(uu) {
        this.translate = uu, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(uu, Ru) {
        var yu;
        return null !== (yu = uu.tideCharts.find((uu => uu.tideChartIsland === Ru))) && void 0 !== yu ? yu : null
      }
      describe(uu) {
        var Ru, yu, Eu;
        const Ku = uu.tideChartIsland,
          Qu = [];
        for (let xu = 0; xu < 25; xu++) {
          const Ru = 1 << xu;
          0 !== (uu.tideChartLit & Ru) ? Qu.push("lit") : 0 !== (uu.tideChartClear & Ru) ? Qu.push("clear") : 0 !== (uu.tideChartPreBlank & Ru) ? Qu.push("shore") : Qu.push("water")
        }
        const mu = function(uu) {
            let Ru = 0;
            for (let yu = uu >>> 0; 0 !== yu; yu &= yu - 1) Ru++;
            return Ru
          }(uu.tideChartLit),
          Ju = uu.tideChartInkCount,
          Nu = this.translate(uu.tideChartIslandNameKey),
          Xu = this.translate("skyblockGame:tideChartsLit", {
            lit: String(mu),
            ink: String(Ju)
          }),
          Vu = null === uu.tideChartPictureNameKey ? null : this.translate(uu.tideChartPictureNameKey),
          ru = this.hereIsland === Ku && -1 !== this.hereCell ? this.hereCell : null,
          Bu = [`${Nu}: ${Xu}.`];
        if (null !== Vu && Bu.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: Vu
          })), null !== ru) {
          const uu = Math.floor(ru / 5) + 1,
            Ru = ru % 5 + 1;
          Bu.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(uu),
            column: String(Ru)
          }))
        }
        return {
          island: Ku,
          islandName: Nu,
          cells: Qu,
          hereCell: ru,
          lit: mu,
          ink: Ju,
          litText: Xu,
          pictureName: Vu,
          gridLabel: Bu.join(" "),
          pulseCells: this.pulse.island === Ku ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (Ru = this.cast) || void 0 === Ru ? void 0 : Ru.island) === Ku ? this.cast.cell : null,
          castToken: null !== (yu = null === (Eu = this.cast) || void 0 === Eu ? void 0 : Eu.token) && void 0 !== yu ? yu : 0
        }
      }
      buildSnapshot() {
        var uu, Ru, yu;
        const Eu = this.message;
        if (null === Eu || 0 === Eu.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const Ku = this.findChart(Eu, this.hereIsland),
          Qu = null !== (uu = null !== (Ru = null !== (yu = this.findChart(Eu, this.open ? this.picked : null)) && void 0 !== yu ? yu : Ku) && void 0 !== Ru ? Ru : this.findChart(Eu, this.lastIsland)) && void 0 !== uu ? uu : Eu.tideCharts[0],
          mu = null === Ku ? null : this.describe(Ku);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: mu,
          card: Qu === Ku ? mu : this.describe(Qu),
          turnsText: aE(this.translate, Eu.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(Eu.tideChartBookCount)
          }),
          tabs: Eu.tideCharts.map((uu => ({
            island: uu.tideChartIsland,
            name: this.translate(uu.tideChartIslandNameKey),
            selected: uu.tideChartIsland === Qu.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const uK = "skyblockRegularsView",
      RK = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      yK = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function EK(uu, Ru) {
      return "given" === uu ? Ru.given : "owed" === uu ? Ru.owed : Ru.goal
    }
    class KK extends ru {
      constructor(uu, Ru, yu, Eu) {
        super(uu, yu, Eu), this.translate = Ru, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = uu => uu, this.openIsland = uu => {
          this.selected = uu, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = uu => {
          this.selected = uu, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      SS(uu) {
        this.message = uu, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const uu = this.openedFromReachLog;
        return this.openedFromReachLog = !1, uu
      }
      setTranslator(uu, Ru, yu) {
        this.translate = uu, void 0 !== yu && (this.itemName = yu), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(uu, Ru, yu) {
        return {
          text: this.translate(EK(uu, Ru), yu),
          given: "given" === uu
        }
      }
      describeRegular(uu, Ru) {
        const yu = this.translate,
          Eu = null !== uu.regularKg,
          Ku = uu.regularMeetings,
          Qu = Eu ? 0 === Ku ? yu("skyblockGame:regularsNotMet") : 1 === Ku ? yu("skyblockGame:regularsMeetingsOne") : yu("skyblockGame:regularsMeetings", {
            count: Ku
          }) : "";
        return {
          id: uu.regularId,
          name: yu(uu.regularNameKey),
          line: yu(uu.regularLineKey),
          itemName: uu.regularFishItem,
          fishName: this.itemName(uu.regularFishItem),
          tagged: Eu,
          size: null === uu.regularKg ? yu("skyblockGame:regularsNotTagged") : yu("skyblockGame:regularsSize", {
            kg: uu.regularKg.toFixed(1)
          }),
          meetings: Qu,
          chance: yu("skyblockGame:regularsChance", {
            count: uu.regularOneInCasts
          }),
          resting: uu.regularRestingToday,
          gifts: [{
            text: yu("skyblockGame:regularsGiftFlare"),
            given: Ku >= 3
          }, this.describeGift(uu.regularTintGift, RK, {
            tint: yu(uu.regularTintNameKey)
          })],
          history: [...uu.regularHistory].reverse().map((uu => {
            const Eu = uu.regularMeetingKg.toFixed(1),
              Ku = Ru - uu.regularMeetingDay;
            return Ku <= 0 ? yu("skyblockGame:regularsToday", {
              kg: Eu
            }) : yu("skyblockGame:regularsDaysAgo", {
              days: Ku,
              kg: Eu
            })
          }))
        }
      }
      describeIsland(uu, Ru) {
        return {
          id: uu.regularsIslandId,
          name: this.translate(uu.regularsIslandNameKey),
          charm: this.describeGift(uu.regularsCharmGift, yK, {
            charm: this.translate(uu.regularsCharmNameKey)
          }),
          regulars: uu.regularsList.map((uu => this.describeRegular(uu, Ru)))
        }
      }
      buildSnapshot() {
        var uu, Ru, yu, Eu;
        const Ku = this.message;
        if (null === Ku) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const Qu = Ku.regularsIslands.map((uu => this.describeIsland(uu, Ku.regularsToday))),
          mu = null !== (uu = null !== (Ru = null === (yu = Qu.find((uu => uu.id === this.selected))) || void 0 === yu ? void 0 : yu.id) && void 0 !== Ru ? Ru : null === (Eu = Qu[0]) || void 0 === Eu ? void 0 : Eu.id) && void 0 !== uu ? uu : "";
        return {
          enabled: !0,
          open: this.open,
          selected: mu,
          islands: Qu
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const QK = "skyblockHiddenWatersView";
    class mK {
      constructor(uu) {
        this.Op = uu, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      SS(uu) {
        this.snapshot = function(uu) {
          const [Ru, yu] = uu.hiddenWatersMapSize, Eu = (uu, Eu) => ({
            left: 1 - uu / Ru,
            top: Eu / yu
          }), Ku = new Map;
          for (const [mu, Ju] of uu.hiddenWatersGlimpses) {
            var Qu;
            const uu = null !== (Qu = Ku.get(mu)) && void 0 !== Qu ? Qu : [];
            uu.push(Ju), Ku.set(mu, uu)
          }
          return {
            found: uu.hiddenWatersFound,
            total: uu.hiddenWatersTotal,
            aspect: yu / Ru,
            pins: uu.hiddenWatersPins.map((uu => {
              let [Ru, yu] = uu;
              return Eu(Ru, yu)
            })),
            islands: uu.hiddenWatersIslands.map((uu => {
              let [Ku, Qu, mu, Ju] = uu;
              const {
                left: Nu,
                top: Xu
              } = Eu(mu + 1, Qu);
              return {
                left: Nu,
                top: Xu,
                width: (mu + 1 - Ku) / Ru,
                height: (Ju + 1 - Qu) / yu
              }
            })),
            glimpses: Ku
          }
        }(uu), this.Op(this.snapshot)
      }
    }
    const JK = "skyblockDialogueView";
    class NK extends ru {
      constructor(uu, Ru, yu, Eu, Ku) {
        let Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(uu, yu, Eu), this.translate = Ru, this.requestDialogue = Ku, this.now = Qu, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = uu => {
          this.selection = {
            kind: "quest",
            questId: uu
          }, this.request(), this.show()
        }, this.selectCharacter = uu => {
          this.selection = {
            kind: "character",
            npcId: uu
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      SS(uu) {
        this.received = !0, this.scripts = uu.questDialogueScripts, this.speakers = new Map(uu.questDialogueSpeakers.map((uu => [uu.dialogueSpeakerId, uu]))), this.emit()
      }
      setTranslator(uu) {
        this.translate = uu, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const uu = this.now();
        uu >= this.requestAvailableAt && (this.requestAvailableAt = uu + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var uu;
        const Ru = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...Ru,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const yu = this.selection;
        if ("quest" === yu.kind) {
          const uu = this.scripts.find((uu => uu.dialogueQuestId === yu.questId));
          return {
            ...Ru,
            characters: [],
            questFocus: yu.questId,
            conversations: uu ? [this.conversation(uu)] : []
          }
        }
        const Eu = [];
        for (let Qu = this.scripts.length - 1; Qu >= 0; Qu--) {
          const uu = this.scripts[Qu].dialogueLines;
          for (let Ru = uu.length - 1; Ru >= 0; Ru--) Eu.includes(uu[Ru].dialogueSpeakerId) || Eu.push(uu[Ru].dialogueSpeakerId)
        }
        const Ku = null !== yu.npcId && Eu.includes(yu.npcId) ? yu.npcId : null !== (uu = Eu[0]) && void 0 !== uu ? uu : null;
        return {
          ...Ru,
          characters: Eu.map((uu => {
            var Ru, yu;
            return {
              id: uu,
              styling: null !== (Ru = null === (yu = this.speakers.get(uu)) || void 0 === yu ? void 0 : yu.dialogueSpeakerStyling) && void 0 !== Ru ? Ru : uu,
              selected: uu === Ku
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((uu => uu.dialogueLines.some((uu => uu.dialogueSpeakerId === Ku)))).map((uu => this.conversation(uu))).reverse()
        }
      }
      conversation(uu) {
        let Ru = null;
        return {
          questId: uu.dialogueQuestId,
          questName: this.translate(uu.dialogueQuestNameKey),
          completed: uu.dialogueQuestCompleted,
          lines: uu.dialogueLines.map(((uu, yu) => {
            var Eu;
            const Ku = uu.dialogueSpeakerId === Ru || null === (Eu = this.speakers.get(uu.dialogueSpeakerId)) || void 0 === Eu ? void 0 : Eu.dialogueSpeakerStyling;
            return Ru = uu.dialogueSpeakerId, {
              key: yu,
              display: {
                line: {
                  translationKey: uu.dialogueLineKey,
                  params: this.params(uu.dialogueLineParams)
                },
                speakerName: Ku,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(uu) {
        if (void 0 !== uu) return Object.fromEntries(Object.entries(uu).map((uu => {
          let [Ru, yu] = uu;
          return [Ru, "string" === typeof yu ? yu : this.translate(yu.translationKey)]
        })))
      }
    }
    var XK = yu(595),
      VK = yu(1240),
      rK = yu(106);
    const BK = "skyblockAutographsView";

    function xK(uu) {
      const Ru = XK.h[uu];
      return {
        label: Ru.chatTag.map((uu => uu.str)).join(""),
        icon: Ru.icon,
        colour: Ru.mainRGB
      }
    }
    class SK extends ru {
      constructor(uu) {
        let Ru = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(uu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = Ru, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      SS(uu) {
        this.signatures = uu.autographSignatures, uu.autographOpen ? this.show() : this.emit()
      }
      setTranslator(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = Ru, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var uu;
        const Ru = null !== (uu = this.signatures) && void 0 !== uu ? uu : [],
          yu = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          Eu = [...Ru].sort(((uu, Ru) => Number(null !== Ru.autographRank) - Number(null !== uu.autographRank) || Ru.autographSignedAtMs - uu.autographSignedAtMs)).map((uu => ({
            key: `${uu.autographSignedAtMs}|${uu.autographSignerName}`,
            name: (0, VK.e)(uu.autographSignerName, !rK.featureFlags.canSeeRealPlayerNames),
            rank: null === uu.autographRank ? null : xK(uu.autographRank),
            signedOn: yu.format(uu.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: Eu,
          total: Eu.length,
          rankTotal: Eu.filter((uu => null !== uu.rank)).length
        }
      }
    }
    const pK = "skyblockHudView",
      TK = () => {},
      WK = {
        getItem: () => null,
        setItem: TK,
        removeItem: TK
      };
    class jK {
      constructor(uu) {
        let {
          translate: Ru,
          translateWithIcons: yu,
          setMenuOpen: Eu = TK,
          dismissMenu: Ku = () => {
            Eu(!1)
          },
          publishSkills: Qu = TK,
          publishQuests: mu = TK,
          publishQuestNotification: Ju = TK,
          publishDungeons: Nu = TK,
          publishCollections: Xu = TK,
          publishMap: Vu = TK,
          publishHud: ru = TK,
          publishPortalTransit: Bu = TK,
          publishDailyReward: Su = TK,
          publishMailbox: pu = TK,
          publishQuestGraph: Tu = TK,
          publishForge: Wu = TK,
          publishSmuggler: ju = TK,
          publishKeepersChair: Hu = TK,
          publishReachLog: du = TK,
          publishLampLight: bu = TK,
          publishMagmaward: Cu = TK,
          publishGlowtide: eu = TK,
          publishGlowMeter: Au = TK,
          publishHushWait: Du = TK,
          publishPassage: Mu = TK,
          publishTideCharts: Iu = TK,
          publishRegulars: Gu = TK,
          publishHiddenWaters: Uu = TK,
          publishDialogue: nu = TK,
          publishAutographs: su = TK,
          isLoadingScreenUp: tu = () => !1,
          onDailyRewardCoinLanded: lu = TK,
          onDailyRewardStarted: gu = TK,
          onDailyRewardFinished: cu = TK,
          onDailyRewardItemLanded: Lu = TK,
          onMailboxStarted: zu = TK,
          journeyStorage: Fu = WK,
          requestTracking: wu = TK,
          requestTravel: Zu = TK,
          requestDungeonEnter: hu = TK,
          requestQuestJump: Pu = TK,
          requestQuestArrive: iu = TK,
          requestForge: Yu = TK,
          requestSmuggle: ou = TK,
          requestKeepersChairAim: qu = TK,
          requestReachLogOpen: Ou = TK,
          requestLampLight: vu = TK,
          requestDialogue: au = TK
        } = uu;
        this.navigation = void 0, this.map = void 0, this.compass = new ku, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new AE.b, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = uu => uu, this.close = () => {
          for (const uu of this.panels) uu.close()
        }, this.setMenuOpen = Eu, this.publishHud = ru, this.portalTransit = new zy(Bu, Fu), this.magmaward = new LE(Cu), this.glowtide = new FE(eu), this.glowMeter = new ZE(Au), this.hushWait = new PE(Du), this.dailyReward = new Zy(Su, (() => tu() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (uu => {
          this.quests.setNotificationsHeld(uu)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), lu, gu, cu, Lu);
        const fu = uu => {
          this.panels.some((uu => uu.isOpen())) || (uu ? Ku() : this.setMenuOpen(!1))
        };
        this.skills = new my(Qu, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), Ru, void 0, void 0, fu), this.quests = new ry(mu, wu, Ru, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, fu, Ju), this.dungeons = new Sy(Nu, Ru, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, fu, hu), this.collections = new gy(Xu, Ru, (() => {
          this.beforePanelOpen(this.collections)
        }), fu), this.map = new xu(Vu, Zu, Ru, (() => {
          this.beforePanelOpen(this.map)
        }), fu), this.questGraph = new ay(Tu, Ru, (() => {
          this.beforePanelOpen(this.questGraph)
        }), fu, Pu, iu, Fu), this.forge = new TE(Wu, Ru, (() => {
          this.beforePanelOpen(this.forge)
        }), fu, Yu), this.smuggler = new HE(ju, Ru, (() => {
          this.beforePanelOpen(this.smuggler)
        }), fu, ou), this.lampLight = new gE(bu, Ru, vu, this.commandPacer), this.keepersChair = new ME(Hu, Ru, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (uu => {
          this.lampLight.onChairClosed(), fu(uu)
        }), qu, Date.now, this.commandPacer), this.reachLog = new tE(du, Ru, (() => {
          this.beforePanelOpen(this.reachLog)
        }), fu, Ou, this.commandPacer), this.passage = new eE(Mu, Ru, (() => {
          this.beforePanelOpen(this.passage)
        }), fu), this.tideCharts = new fE(Iu, Ru, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), fu), this.regulars = new KK(Gu, Ru, (() => {
          this.beforePanelOpen(this.regulars)
        }), (uu => {
          this.regulars.takeReturnToReachLog() && !uu && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), fu(uu)
        })), this.hiddenWaters = new mK(Uu), this.dialogue = new NK(nu, Ru, (() => {
          this.beforePanelOpen(this.dialogue)
        }), fu, au), this.autographs = new SK(su, (() => {
          this.beforePanelOpen(this.autographs)
        }), fu), this.mailbox = new Yy(pu, (() => tu() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), zu), this.quests.translateWithIcons = null !== yu && void 0 !== yu ? yu : null, this.skills.onLevelUp = uu => {
          this.quests.notify(uu)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new Ky(this.map, this.quests, this.compass, Ru)
      }
      getHudSnapshot() {
        const uu = this.hudSnapshot,
          Ru = this.dailyReward.getHeldCoins();
        return null === uu || Ru <= 0 || !("hudPurseCoins" in uu) ? uu : {
          ...uu,
          hudPurseCoins: Math.max(0, uu.hudPurseCoins - Ru)
        }
      }
      receiveHud(uu) {
        this.hudSnapshot = uu, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(uu) {
        this.setMenuOpen(!0);
        const Ru = uu === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = uu;
        for (const yu of this.panels) yu === uu || Ru && yu === this.reachLog || yu.close();
        this.openingPanel = null
      }
      setTranslator(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ru => this.resolveItemName(Ru, uu);
        this.quests.translateWithIcons = null !== yu && void 0 !== yu ? yu : null, this.navigation.setTranslator(uu, Ru), this.lampLight.setTranslator(uu, Ru), this.mailbox.setItemName(Eu);
        for (const Ku of this.panels) Ku.setTranslator(uu, Ru, Eu)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const uu of this.panels) uu.dispose()
      }
    }
    var HK = yu(1035),
      dK = yu.n(HK),
      bK = yu(27),
      CK = yu(36436),
      kK = yu(3208),
      eK = yu(1841),
      AK = yu(1825),
      DK = yu(9087),
      MK = yu(1170),
      IK = yu(1400),
      GK = yu(1079);

    function UK(uu) {
      let {
        controller: Ru,
        minimap: yu,
        children: Eu
      } = uu;
      const Qu = (0, IK.h)(pK, Ru.getHudSnapshot()),
        [mu, Ju] = (0, Au.useState)(Ru.skills.getSnapshot().overallLevel);
      (0, IK.e)(Qy, (uu => {
        Ju(uu.overallLevel)
      }));
      const Nu = (0, Au.useRef)(null);
      (0, IK.e)(wy, (uu => {
        ! function(uu, Ru) {
          if (null === uu || "function" !== typeof uu.animate) return;
          const yu = Ru ? 1.35 : 1.15;
          uu.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${yu})`
          }, {
            transform: "scale(1)"
          }], {
            duration: Ru ? 320 : 160,
            easing: "ease-out"
          }), uu.classList.toggle("Receiving", !Ru), Ru && (uu.classList.remove("Shine"), uu.offsetWidth, uu.classList.add("Shine"))
        }(Nu.current, uu)
      }));
      const {
        t: Xu
      } = (0, MK.E)(), {
        isTouchScreen: Vu
      } = (0, bK.j)(["isTouchScreen"]), [ru, Bu] = (0, Au.useState)(null);
      return (0, kK.g)(ru, ".SkyblockRightHud"), null !== Qu || yu ? (0, GK.jsx)(CK.d, {
        placement: "topRight",
        children: (0, GK.jsxs)("div", {
          className: dK()("SkyblockRightHud", {
            TouchScreen: Vu
          }),
          children: [yu, null !== Qu && (0, GK.jsxs)("div", {
            ref: Bu,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in Qu ? (0, GK.jsx)("div", {
              className: "SkyblockHudHelp",
              children: Qu.hudHelpText
            }) : (0, GK.jsxs)(GK.Fragment, {
              children: [(0, GK.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, GK.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, GK.jsx)("strong", {
                    style: {
                      color: Ku.L.cyanUiText
                    },
                    children: Xu(Qu.hudZoneNameKey)
                  }), null !== mu && (0, GK.jsx)("span", {
                    style: {
                      color: Ku.L.goldUiText
                    },
                    children: Xu("skyblockGame:level", {
                      level: (0, DK.g)(mu)
                    })
                  })]
                }), (0, GK.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: Nu,
                  children: [(0, GK.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, GK.jsx)(eK.c, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, DK.g)(Qu.hudPurseCoins)]
                })]
              }), Qu.hudClockText.length > 0 && (0, GK.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, GK.jsx)(AK.d, {
                  text: Qu.hudClockText
                })
              })]
            }), Eu, "hudZoneNameKey" in Qu && (0, GK.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function nK(uu) {
      let {
        icon: Ru
      } = uu;
      const yu = (0, Au.useCallback)((uu => {
        null === uu || void 0 === uu || uu.replaceChildren(iR(Ru))
      }), [Ru]);
      return (0, GK.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: yu
      })
    }

    function sK(uu) {
      let {
        controller: Ru
      } = uu;
      const {
        t: yu
      } = (0, MK.E)();
      return (0, GK.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: Ru.display.mountPlayer,
        title: yu("skyblockGame:mapYouAreHere"),
        children: (0, GK.jsx)(nK, {
          icon: "player"
        })
      })
    }
    const tK = yu(38316),
      lK = Object.fromEntries(tK.keys().map((uu => [uu.replace(/^\.\/(.*)\.png$/, "$1"), tK(uu)])));

    function gK(uu, Ru) {
      var yu;
      return null !== (yu = lK[uu]) && void 0 !== yu ? yu : lK[Ru]
    }

    function cK(uu) {
      let {
        imageKey: Ru,
        fallbackImageKey: yu,
        geometryKey: Eu,
        alt: Ku,
        className: Qu
      } = uu;
      const [mu, Ju] = (0, Au.useState)((() => function(uu, Ru) {
        return [{
          id: 0,
          imageKey: uu,
          geometryKey: Ru,
          phase: "shown"
        }]
      }(Ru, Eu))), Nu = function(uu, Ru, yu) {
        const Eu = uu[uu.length - 1];
        if (Eu.imageKey === Ru && Eu.geometryKey === yu) return uu;
        const Ku = {
          id: Eu.id + 1,
          imageKey: Ru,
          geometryKey: yu,
          phase: "entering"
        };
        return Eu.geometryKey === yu ? [{
          ...Eu,
          phase: "leaving"
        }, Ku] : [Ku]
      }(mu, Ru, Eu);
      return Nu !== mu && Ju(Nu), (0, GK.jsx)(GK.Fragment, {
        children: Nu.map((uu => (0, GK.jsx)("img", {
          className: dK()("SkyblockMapTerrainImage", Qu, {
            Entering: "entering" === uu.phase,
            Leaving: "leaving" === uu.phase
          }),
          src: gK(uu.imageKey, yu),
          alt: "leaving" === uu.phase ? "" : Ku,
          onAnimationEnd: () => {
            Ju((Ru => function(uu, Ru) {
              return uu.flatMap((uu => uu.id !== Ru ? [uu] : "leaving" === uu.phase ? [] : [{
                ...uu,
                phase: "shown"
              }]))
            }(Ru, uu.id)))
          }
        }, uu.id)))
      })
    }
    var LK = yu(4301),
      zK = yu(1408);

    function FK(uu) {
      if ("Tab" !== uu.key) return;
      const Ru = Array.from(uu.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        yu = Ru.indexOf(document.activeElement);
      var Eu;
      if (uu.shiftKey && yu <= 0) uu.preventDefault(), null === (Eu = Ru.at(-1)) || void 0 === Eu || Eu.focus();
      else if (!uu.shiftKey && (-1 === yu || yu === Ru.length - 1)) {
        var Ku;
        uu.preventDefault(), null === (Ku = Ru[0]) || void 0 === Ku || Ku.focus()
      }
    }

    function wK() {
      const uu = (0, Au.useRef)(null);
      return (0, Au.useCallback)((Ru => {
        var yu;
        Ru ? (uu.current = document.activeElement, Ru.focus()) : null === (yu = uu.current) || void 0 === yu || yu.focus()
      }), [])
    }

    function ZK(uu) {
      let {
        percent: Ru,
        label: yu,
        levelUpToken: Eu,
        colour: Ku
      } = uu;
      return (0, GK.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": yu,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Ru,
        "aria-valuetext": yu,
        children: [(0, GK.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${Ru/100})`
          }
        }), null !== Eu && void 0 !== Eu && (0, GK.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": Ku
          }
        }, Eu)]
      })
    }

    function hK(uu) {
      let {
        mount: Ru
      } = uu;
      return (0, GK.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: Ru,
        hidden: !0,
        children: (0, GK.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, GK.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, GK.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function PK(uu, Ru, yu, Eu) {
      (0, Au.useLayoutEffect)((() => {
        const Ku = uu.current;
        if (!yu || null === Ru || void 0 === Ru || !Ru.local || !Ku) return;
        const Qu = Array.from(Ku.querySelectorAll(".SkyblockMapNode")),
          mu = [...Ru.points, ...Ru.portals],
          Ju = () => {
            const uu = Ku.clientWidth,
              yu = Ku.clientHeight,
              Ju = Qu.map(((Ku, Qu) => {
                const Ju = mu[Qu];
                return {
                  id: Ju.id,
                  portal: Qu >= Ru.points.length,
                  x: Ju.position[0] * uu / 100,
                  y: Ju.position[1] * yu / 100,
                  width: Ku.offsetWidth / Eu,
                  height: Ku.offsetHeight / Eu
                }
              })),
              Nu = new Map(mu.map(((uu, Ru) => [uu.id, Qu[Ru]])));
            for (const Ru of function(uu, Ru, yu) {
                const Eu = [],
                  Ku = [...uu].sort(((uu, Ru) => Number(Ru.portal) - Number(uu.portal) || uu.id.localeCompare(Ru.id)));
                for (const Qu of Ku) {
                  const uu = uu => Math.max(Qu.width / 2, Math.min(Ru - Qu.width / 2, uu)),
                    Ku = uu => Math.max(Qu.height / 2, Math.min(yu - Qu.height / 2, uu)),
                    mu = [uu(Qu.x)],
                    Ju = [Ku(Qu.y)];
                  for (const Ru of Eu) mu.push(uu(Ru.x - (Ru.width + Qu.width) / 2 - 4), uu(Ru.x + (Ru.width + Qu.width) / 2 + 4)), Ju.push(Ku(Ru.y - (Ru.height + Qu.height) / 2 - 4), Ku(Ru.y + (Ru.height + Qu.height) / 2 + 4));
                  let Nu = {
                      ...Qu,
                      x: mu[0],
                      y: Ju[0]
                    },
                    Xu = 1 / 0,
                    Vu = 1 / 0;
                  for (const Ru of new Set(mu))
                    for (const uu of new Set(Ju)) {
                      let yu = 0;
                      for (const mu of Eu) yu += Math.max(0, (Qu.width + mu.width) / 2 + 4 - Math.abs(Ru - mu.x)) * Math.max(0, (Qu.height + mu.height) / 2 + 4 - Math.abs(uu - mu.y));
                      const Ku = (Ru - Qu.x) ** 2 + (uu - Qu.y) ** 2;
                      (yu < Xu || yu === Xu && Ku < Vu) && (Nu = {
                        ...Qu,
                        x: Ru,
                        y: uu
                      }, Xu = yu, Vu = Ku)
                    }
                  Eu.push(Nu)
                }
                return Eu
              }(Ju, uu, yu)) {
              const uu = Nu.get(Ru.id);
              uu.style.left = `${Ru.x}px`, uu.style.top = `${Ru.y}px`
            }
          };
        Ju();
        const Nu = new ResizeObserver(Ju);
        Nu.observe(Ku);
        for (const uu of Qu) Nu.observe(uu);
        return () => {
          Nu.disconnect()
        }
      }), [uu, Ru, yu, Eu])
    }
    const iK = {
        zoom: 1,
        x: 0,
        y: 0
      },
      YK = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function oK(uu, Ru, yu) {
      return Math.min(yu, Math.max(Ru, uu))
    }

    function qK(uu, Ru, yu) {
      const Eu = Math.min(1, yu * Ru / uu),
        Ku = Math.min(1, uu / (yu * Ru));
      return {
        x0: (1 - Eu) / 2,
        y0: (1 - Ku) / 2,
        x1: (1 + Eu) / 2,
        y1: (1 + Ku) / 2
      }
    }

    function OK(uu, Ru, yu, Eu) {
      const Ku = Ru * (Eu - yu);
      if (Ku <= 1) return .5 - Ru * (yu + Eu) / 2;
      const Qu = .45 * Math.min(1, Ku - 1);
      return oK(uu, 1 - Ru * Eu - Qu, Qu - Ru * yu)
    }

    function vK(uu, Ru) {
      const yu = oK(uu.zoom, 1, 12);
      return {
        zoom: yu,
        x: OK(uu.x, yu, Ru.x0, Ru.x1),
        y: OK(uu.y, yu, Ru.y0, Ru.y1)
      }
    }

    function aK(uu, Ru, yu, Eu) {
      let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : YK;
      const Qu = oK(uu.zoom * Ru, 1, 12),
        mu = Qu / uu.zoom;
      return vK({
        zoom: Qu,
        x: yu - (yu - uu.x) * mu,
        y: Eu - (Eu - uu.y) * mu
      }, Ku)
    }

    function fK(uu, Ru, yu, Eu) {
      const [Ku, Qu] = (0, Au.useState)(iK);
      (0, Au.useEffect)((() => {
        Qu(iK)
      }), [yu]), (0, Au.useEffect)((() => {
        const yu = uu.current;
        if (!Ru || !yu) return;
        const Ku = () => qK(yu.clientWidth, yu.clientHeight, Eu),
          mu = uu => {
            const Ru = yu.getBoundingClientRect();
            return {
              x: (uu.clientX - Ru.left) / Ru.width,
              y: (uu.clientY - Ru.top) / Ru.height
            }
          },
          Ju = new Map;
        let Nu = {
            x: 0,
            y: 0
          },
          Xu = !1,
          Vu = 0;
        const ru = uu => {
            uu.preventDefault();
            const Ru = uu.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * uu.deltaY : uu.deltaY,
              yu = mu(uu);
            Qu((uu => aK(uu, Math.exp(.0015 * -Ru), yu.x, yu.y, Ku())))
          },
          Bu = uu => {
            "mouse" === uu.pointerType && 0 !== uu.button || (Ju.set(uu.pointerId, mu(uu)), 1 === Ju.size && (Nu = {
              x: uu.clientX,
              y: uu.clientY
            }, Xu = !1), Vu = 0)
          },
          xu = uu => {
            const Ru = Ju.get(uu.pointerId);
            if (!Ru) return;
            const Eu = mu(uu);
            if (Ju.set(uu.pointerId, Eu), 2 === Ju.size) {
              const [uu, Ru] = [...Ju.values()], yu = Math.hypot(uu.x - Ru.x, uu.y - Ru.y);
              if (Vu > 0) {
                const Eu = yu / Vu;
                Qu((yu => aK(yu, Eu, (uu.x + Ru.x) / 2, (uu.y + Ru.y) / 2, Ku())))
              }
              return Vu = yu, void(Xu = !0)
            }!Xu && Math.hypot(uu.clientX - Nu.x, uu.clientY - Nu.y) < 4 || (Xu || (Xu = !0, yu.setPointerCapture(uu.pointerId)), Qu((uu => function(uu, Ru, yu) {
              let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : YK;
              return vK({
                zoom: uu.zoom,
                x: uu.x + Ru,
                y: uu.y + yu
              }, Eu)
            }(uu, Eu.x - Ru.x, Eu.y - Ru.y, Ku()))))
          },
          Su = uu => {
            Ju.delete(uu.pointerId), Vu = 0
          },
          pu = uu => {
            Xu && (uu.stopPropagation(), uu.preventDefault(), Xu = !1)
          },
          Tu = new ResizeObserver((() => {
            Qu((uu => vK(uu, Ku())))
          }));
        return Tu.observe(yu), yu.addEventListener("wheel", ru, {
          passive: !1
        }), yu.addEventListener("pointerdown", Bu), yu.addEventListener("pointermove", xu), yu.addEventListener("pointerup", Su), yu.addEventListener("pointercancel", Su), yu.addEventListener("click", pu, !0), () => {
          Tu.disconnect(), yu.removeEventListener("wheel", ru), yu.removeEventListener("pointerdown", Bu), yu.removeEventListener("pointermove", xu), yu.removeEventListener("pointerup", Su), yu.removeEventListener("pointercancel", Su), yu.removeEventListener("click", pu, !0)
        }
      }), [uu, Ru, yu, Eu]);
      return {
        view: Ku,
        zoomBy: Ru => {
          const yu = uu.current;
          yu && Qu((uu => aK(uu, Ru, .5, .5, qK(yu.clientWidth, yu.clientHeight, Eu))))
        }
      }
    }

    function uQ(uu) {
      var Ru, yu, Eu, Ku;
      let {
        controller: Qu,
        navigation: mu
      } = uu;
      const Ju = (0, IK.h)(Bu, Qu.getSnapshot()),
        {
          t: Nu
        } = (0, MK.E)(),
        Xu = wK(),
        Vu = Ju.presentation,
        ru = (0, Au.useRef)(null),
        xu = (0, Au.useRef)(null),
        Su = Boolean(Ju.open && (null === Vu || void 0 === Vu ? void 0 : Vu.local) && Vu.background),
        pu = fK(ru, Su, `${Ju.open}|${Ju.tab}|${null===Vu||void 0===Vu||null===(Ru=Vu.background)||void 0===Ru?void 0:Ru.geometryKey}`, null !== (yu = null === Vu || void 0 === Vu || null === (Eu = Vu.background) || void 0 === Eu ? void 0 : Eu.ratio) && void 0 !== yu ? yu : 2);
      if (PK(xu, Vu, Ju.open, pu.view.zoom), !Vu || !Ju.open) return null;
      const Tu = Vu.local ? Vu.background : null,
        Wu = {
          "--map-ratio": String(null !== (Ku = null === Tu || void 0 === Tu ? void 0 : Tu.ratio) && void 0 !== Ku ? Ku : 2),
          backgroundColor: null === Tu || void 0 === Tu ? void 0 : Tu.colour
        },
        ju = {
          "--map-zoom": String(pu.view.zoom),
          transform: `translate(${100*pu.view.x}%, ${100*pu.view.y}%) scale(${pu.view.zoom})`
        };
      return (0, GK.jsx)(LK.e, {
        show: Ju.open,
        close: Qu.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, GK.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: Xu,
          onKeyDown: FK,
          children: [(0, GK.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, GK.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, GK.jsx)("h2", {
                id: "skyblockMapTitle",
                children: Nu("skyblockGame:map")
              }), Vu.minimap && (0, GK.jsx)("p", {
                children: Vu.minimap.caption
              })]
            }), (0, GK.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((uu => (0, GK.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": uu === Ju.tab ? "true" : void 0,
                className: dK()({
                  Selected: uu === Ju.tab
                }),
                "aria-pressed": uu === Ju.tab,
                onClick: () => {
                  Qu.selectTab(uu)
                },
                children: Nu("local" === uu ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, uu)))
            }), (0, GK.jsx)(zK.h, {
              padIgnore: !0,
              onClick: Qu.dismiss
            })]
          }), (0, GK.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, GK.jsxs)("div", {
              ref: ru,
              className: dK()("SkyblockMapCanvas", {
                Local: Vu.local,
                Overview: !Vu.local,
                Zoomed: pu.view.zoom > 1
              }),
              style: Wu,
              children: [(0, GK.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: Su ? ju : void 0,
                children: (0, GK.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: xu,
                  children: [Tu && (0, GK.jsx)(cK, {
                    className: "SkyblockMapTerrain",
                    imageKey: Tu.imageKey,
                    fallbackImageKey: Tu.fallbackImageKey,
                    geometryKey: Tu.geometryKey,
                    alt: Tu.label
                  }), Vu.local && (0, GK.jsx)(hK, {
                    mount: mu.display.mountMapSearchArea
                  }), !Vu.local && (0, GK.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: Vu.connections.map((uu => (0, GK.jsx)("line", {
                      className: dK()({
                        Explored: uu.explored
                      }),
                      x1: uu.start[0],
                      y1: uu.start[1],
                      x2: uu.end[0],
                      y2: uu.end[1]
                    }, uu.id)))
                  }), Vu.points.map((uu => {
                    const Ru = !Vu.local && uu.thumbnail ? lK[uu.thumbnail] : void 0;
                    return (0, GK.jsxs)("div", {
                      className: dK()("SkyblockMapNode", {
                        Current: uu.current
                      }),
                      style: {
                        left: `${uu.position[0]}%`,
                        top: `${uu.position[1]}%`
                      },
                      children: [(0, GK.jsxs)(zK.e, {
                        className: dK()("SkyblockMapPin", {
                          Unknown: !uu.visited,
                          Current: uu.current
                        }),
                        disabled: Ju.pending,
                        onClick: () => {
                          Qu.travel(uu.travelKind, uu.travelId)
                        },
                        children: [Ru && (0, GK.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: Ru,
                          alt: ""
                        }), !Ru && (0, GK.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, GK.jsx)(nK, {
                            icon: uu.icon
                          })
                        }), (0, GK.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: uu.name
                        })]
                      }), uu.current && (0, GK.jsx)("span", {
                        className: dK()("SkyblockMapHereBadge", {
                          Above: uu.position[1] > 50
                        }),
                        children: Nu("skyblockGame:mapYouAreHere")
                      })]
                    }, uu.id)
                  })), Vu.portals.map((uu => (0, GK.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${uu.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${uu.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, GK.jsxs)(zK.e, {
                      className: "SkyblockMapPin",
                      disabled: Ju.pending,
                      onClick: () => {
                        Qu.travel(uu.travelKind, uu.travelId)
                      },
                      children: [(0, GK.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: uu.colour
                        },
                        "aria-hidden": "true",
                        children: (0, GK.jsx)(nK, {
                          icon: uu.icon
                        })
                      }), (0, GK.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: uu.name
                      })]
                    })
                  }, uu.id))), Vu.local && (0, GK.jsx)(sK, {
                    controller: mu
                  })]
                })
              }), Su && (0, GK.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, GK.jsx)("button", {
                  type: "button",
                  "aria-label": Nu("skyblockGame:mapZoomIn"),
                  disabled: pu.view.zoom >= 12,
                  onClick: () => {
                    pu.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, GK.jsx)("button", {
                  type: "button",
                  "aria-label": Nu("skyblockGame:mapZoomOut"),
                  disabled: pu.view.zoom <= 1,
                  onClick: () => {
                    pu.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, GK.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: Ju.feedback
              })]
            })
          }), (0, GK.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [Vu.progress && (0, GK.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, GK.jsx)("span", {
                children: Vu.progress
              }), (0, GK.jsx)(ZK, {
                percent: Vu.percent,
                label: Vu.progress
              })]
            }), Vu.noLandmarks && (0, GK.jsx)("span", {
              children: Nu("skyblockGame:mapNoLandmarks")
            }), Vu.canTravel && (0, GK.jsx)("span", {
              className: "SkyblockMapHint",
              children: Nu("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function RQ(uu) {
      let {
        view: Ru,
        controller: yu,
        navigation: Eu
      } = uu;
      const {
        t: Ku
      } = (0, MK.E)(), {
        isTouchScreen: Qu
      } = (0, bK.j)(["isTouchScreen"]);
      return (0, GK.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": Ku("skyblockGame:mapLocal"),
        children: [Qu && (0, GK.jsx)(zK.e, {
          className: "SkyblockMinimapOpen",
          onClick: yu.showLocal,
          children: Ku("skyblockGame:map")
        }), (0, GK.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: Ru.colour
          },
          children: [(0, GK.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: Eu.display.mountTerrain,
            style: {
              width: Ru.width,
              height: Ru.height
            },
            children: [(0, GK.jsx)(cK, {
              imageKey: Ru.imageKey,
              fallbackImageKey: Ru.fallbackImageKey,
              geometryKey: Ru.geometryKey,
              alt: Ru.label
            }), (0, GK.jsx)(hK, {
              mount: Eu.display.mountMinimapSearchArea
            }), Ru.markers.map((uu => (0, GK.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${uu.position[0]}%`,
                top: `${uu.position[1]}%`,
                color: uu.colour
              },
              title: uu.name,
              children: (0, GK.jsx)(nK, {
                icon: uu.icon
              })
            }, uu.id)))]
          }), (0, GK.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: Ku("skyblockGame:mapYouAreHere"),
            children: (0, GK.jsx)(nK, {
              icon: "player"
            })
          })]
        }), (0, GK.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: Ru.caption
        })]
      })
    }

    function yQ(uu) {
      let {
        controller: Ru
      } = uu;
      return (0, GK.jsxs)("div", {
        className: "SkyblockCompass",
        ref: Ru.display.mountCompass,
        children: [(0, GK.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, GK.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, GK.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function EQ(uu) {
      let {
        controller: Ru,
        surface: yu
      } = uu;
      const {
        t: Eu
      } = (0, MK.E)(), Ku = (0, IK.h)(Qy, Ru.getSnapshot()), Qu = wK();
      return Ku.enabled ? (0, GK.jsxs)(GK.Fragment, {
        children: ["hud" === yu && (0, GK.jsx)(CK.d, {
          placement: "statBars",
          children: Ku.hud && (0, GK.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": Ku.hud.colour
            },
            children: [(0, GK.jsx)(ZK, {
              percent: Ku.hud.skill.percent,
              label: Ku.hud.skill.xp,
              levelUpToken: Ku.hud.levelUpToken,
              colour: Ku.hud.colour
            }), (0, GK.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, GK.jsxs)("span", {
                children: [Ku.hud.skill.label, " \xb7 ", Ku.hud.skill.level]
              }), (0, GK.jsx)("span", {
                children: Ku.hud.gain
              })]
            })]
          })
        }), "hud" === yu && (0, GK.jsx)(CK.d, {
          children: Ku.hud && (0, GK.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, GK.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, GK.jsx)("strong", {
                children: Ku.hud.skill.label
              }), (0, GK.jsx)("span", {
                children: Ku.hud.gain
              })]
            }), (0, GK.jsx)(ZK, {
              percent: Ku.hud.skill.percent,
              label: Ku.hud.skill.xp,
              levelUpToken: Ku.hud.levelUpToken,
              colour: Ku.hud.colour
            }), (0, GK.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, GK.jsx)("span", {
                children: Ku.hud.skill.level
              }), (0, GK.jsx)("span", {
                children: Ku.hud.skill.xp
              })]
            })]
          })
        }), "menu" === yu && (0, GK.jsx)(LK.e, {
          show: Ku.open,
          close: Ru.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, GK.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: Qu,
            onKeyDown: FK,
            children: [(0, GK.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, GK.jsxs)("div", {
                children: [(0, GK.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: Eu("skyblockGame:skills")
                }), (0, GK.jsx)("p", {
                  children: Eu("skyblockGame:skillsIntro")
                })]
              }), (0, GK.jsx)(zK.h, {
                padIgnore: !0,
                onClick: Ru.dismiss
              })]
            }), (0, GK.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, GK.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: Ku.skills.map((uu => (0, GK.jsxs)(zK.e, {
                  className: dK()("SkyblockSkillCard", {
                    Selected: uu.selected
                  }),
                  ariaPressed: uu.selected,
                  onClick: () => {
                    Ru.select(uu.id)
                  },
                  children: [(0, GK.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, GK.jsx)(eK.c, {
                      itemName: uu.icon,
                      amount: 0
                    })
                  }), (0, GK.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, GK.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, GK.jsx)("strong", {
                        children: uu.label
                      }), (0, GK.jsx)("span", {
                        children: uu.level
                      })]
                    }), (0, GK.jsx)(ZK, {
                      percent: uu.percent,
                      label: `${uu.label}: ${uu.xp}`
                    }), (0, GK.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: uu.xp
                    })]
                  })]
                }, uu.id)))
              }), Ku.detail && (0, GK.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, GK.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, GK.jsx)(eK.c, {
                    itemName: Ku.detail.icon,
                    amount: 0
                  })
                }), (0, GK.jsx)("h3", {
                  children: Ku.detail.label
                }), (0, GK.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: Ku.detail.level
                }), (0, GK.jsx)("p", {
                  children: Ku.detail.description
                }), (0, GK.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, GK.jsx)("strong", {
                    children: Eu("skyblockGame:currentBenefit")
                  }), (0, GK.jsx)("span", {
                    children: Ku.detail.benefit
                  })]
                }), (0, GK.jsx)(ZK, {
                  percent: Ku.detail.percent,
                  label: Ku.detail.xp
                }), (0, GK.jsx)("p", {
                  children: Ku.detail.xp
                }), (0, GK.jsx)("h4", {
                  children: Eu("skyblockGame:earnXp")
                }), (0, GK.jsx)("ul", {
                  children: Ku.detail.sources.map((uu => (0, GK.jsx)("li", {
                    children: uu
                  }, uu)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var KQ = yu(1325),
      QQ = yu(4604),
      mQ = yu(330);

    function JQ(uu) {
      let {
        item: Ru
      } = uu;
      return (0, GK.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, GK.jsx)(eK.c, {
          itemName: Ru,
          amount: 0
        })
      })
    }

    function NQ(uu) {
      let {
        name: Ru,
        percent: yu,
        progress: Eu
      } = uu;
      return (0, GK.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, GK.jsx)(ZK, {
          percent: yu,
          label: `${(0,mQ.rb)(Ru)}: ${Eu}`
        }), (0, GK.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: Eu
        })]
      })
    }

    function XQ(uu) {
      let {
        subquests: Ru,
        showDescriptions: yu = !1
      } = uu;
      return (0, GK.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: Ru.map((uu => {
          const Ru = yu && "completed" === uu.status,
            Eu = (0, GK.jsxs)("li", {
              className: dK()("SkyblockQuestStep", uu.status, {
                JustFinished: uu.justFinished,
                JustUnlocked: uu.justUnlocked
              }),
              tabIndex: Ru ? 0 : void 0,
              children: [null !== uu.iconItem && (0, GK.jsx)(JQ, {
                item: uu.iconItem
              }), null === uu.iconItem && (0, GK.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === uu.status ? "\u2713" : "skipped" === uu.status ? "\u2212" : "\u25cb"
              }), (0, GK.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, GK.jsx)("strong", {
                  children: (0, GK.jsx)(QQ.c, {
                    text: uu.name
                  })
                }), yu && !Ru && (0, GK.jsx)("span", {
                  children: (0, GK.jsx)(QQ.c, {
                    text: uu.description
                  })
                }), null !== uu.barPercent && (0, GK.jsx)(NQ, {
                  name: uu.name,
                  percent: uu.barPercent,
                  progress: uu.progress
                }), null === uu.barPercent && !Ru && (0, GK.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: uu.statusLabel
                })]
              })]
            }, uu.id);
          return Ru ? (0, GK.jsx)(KQ.i, {
            delayShow: 200,
            tooltipInner: (0, GK.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, GK.jsx)("span", {
                children: (0, GK.jsx)(QQ.c, {
                  text: uu.description
                })
              }), (0, GK.jsx)("strong", {
                children: uu.statusLabel
              })]
            }),
            children: Eu
          }, uu.id) : Eu
        }))
      })
    }

    function VQ(uu) {
      let {
        quest: Ru,
        select: yu
      } = uu;
      const {
        t: Eu
      } = (0, MK.E)(), Ku = Ru.focusStep;
      return (0, GK.jsxs)(zK.e, {
        className: dK()("SkyblockQuestCard", {
          Selected: Ru.selected,
          Tracked: Ru.tracked
        }),
        onClick: () => {
          yu(Ru.id)
        },
        children: [(0, GK.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, GK.jsx)("strong", {
            children: (0, GK.jsx)(QQ.c, {
              text: Ru.name
            })
          }), Ru.tracked && (0, GK.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: Eu("skyblockGame:currentQuest")
          })]
        }), Ku && (0, GK.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== Ku.iconItem && (0, GK.jsx)(JQ, {
            item: Ku.iconItem
          }), (0, GK.jsx)(NQ, {
            name: Ku.name,
            percent: Ku.barPercent,
            progress: Ku.progress
          })]
        }), (0, GK.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: Ru.progress
        })]
      })
    }

    function rQ(uu) {
      let {
        controller: Ru,
        surface: yu
      } = uu;
      const Eu = (0, IK.h)(Xy, Ru.getSnapshot()),
        {
          t: Ku
        } = (0, MK.E)(),
        Qu = wK();
      return Eu.enabled ? (0, GK.jsxs)(GK.Fragment, {
        children: ["hud" === yu && (0, GK.jsx)(GK.Fragment, {
          children: Eu.tracked && (0, GK.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: Ny,
            children: (0, GK.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [Eu.trackedStepPulse > 0 && (0, GK.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, Eu.trackedStepPulse), (0, GK.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: Ku("skyblockGame:currentQuest")
              }), (0, GK.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, GK.jsx)("strong", {
                  children: (0, GK.jsx)(QQ.c, {
                    text: Eu.tracked.name
                  })
                }), null !== Eu.tracked.clock && (0, GK.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: Eu.tracked.clock
                })]
              }), (0, GK.jsx)(XQ, {
                subquests: Eu.tracked.subquests
              })]
            })
          })
        }), "menu" === yu && (0, GK.jsx)(LK.e, {
          show: Eu.open,
          close: Ru.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, GK.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: Qu,
            onKeyDown: FK,
            children: [(0, GK.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, GK.jsx)("div", {
                children: (0, GK.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: Ku("skyblockGame:quests")
                })
              }), (0, GK.jsx)(zK.h, {
                padIgnore: !0,
                onClick: Ru.dismiss
              })]
            }), (0, GK.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, GK.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, GK.jsx)("h3", {
                  children: Ku("skyblockGame:current")
                }), 0 === Eu.active.length && (0, GK.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: Ku("skyblockGame:noActiveQuests")
                }), Eu.active.map((uu => (0, GK.jsx)(VQ, {
                  quest: uu,
                  select: Ru.select
                }, uu.id))), (0, GK.jsx)("h3", {
                  children: (0, GK.jsxs)("button", {
                    type: "button",
                    className: dK()("SkyblockQuestSectionToggle", {
                      Expanded: Eu.completedExpanded
                    }),
                    "aria-expanded": Eu.completedExpanded,
                    onClick: Ru.toggleCompleted,
                    children: [(0, GK.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), Ku("skyblockGame:completed"), (0, GK.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: Eu.completed.length
                    })]
                  })
                }), Eu.completedExpanded && 0 === Eu.completed.length && (0, GK.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: Ku("skyblockGame:noCompletedQuests")
                }), Eu.completedExpanded && Eu.completed.map((uu => (0, GK.jsx)(VQ, {
                  quest: uu,
                  select: Ru.select
                }, uu.id)))]
              }), Eu.detail && (0, GK.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [Eu.detail.completed && (0, GK.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: Ku("skyblockGame:completedQuest")
                }), (0, GK.jsx)("h3", {
                  children: (0, GK.jsx)(QQ.c, {
                    text: Eu.detail.name
                  })
                }), (0, GK.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, GK.jsx)(QQ.c, {
                    text: Eu.detail.description
                  })
                }), (0, GK.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [Eu.detail.progress, null !== Eu.detail.clock && (0, GK.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: Eu.detail.clock
                  })]
                }), (0, GK.jsx)(XQ, {
                  subquests: Eu.detail.subquests,
                  showDescriptions: !0
                }), Eu.detail.tracked && (0, GK.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: Eu.detail.trackLabel
                }), !Eu.detail.completed && !Eu.detail.tracked && (0, GK.jsx)(zK.l, {
                  onClick: Ru.trackSelected,
                  disabled: !Eu.detail.canTrack,
                  children: Eu.detail.trackLabel
                }), Eu.detail.canViewDialogue && (0, GK.jsx)(zK.e, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: Ru.viewDialogue,
                  children: Ku("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var BQ = yu(1043),
      xQ = yu(2481);

    function SQ(uu, Ru, yu, Eu, Ku) {
      const Qu = uu => "linear" === Ku ? uu : {
          bQ: Ku,
          point: uu
        },
        mu = {};
      for (const [Ju, Nu] of Eu)
        for (const [Ru, yu] of Object.entries(uu(Ju, Nu, Qu))) mu[Ru] ??= {
          timeline: []
        }, mu[Ru].timeline.push(yu);
      return {
        TQ: Ru,
        loop: yu,
        jQ: mu
      }
    }
    const pQ = .547,
      TQ = .022,
      WQ = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      jQ = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function HQ(uu, Ru, yu) {
      const {
        drop: Eu = 0,
        shift: Ku = 0,
        torso: Qu = 0,
        nod: mu = 0,
        tilt: Ju = 0,
        legs: Nu = [0, 0],
        arms: Xu = 0,
        spread: Vu = 0
      } = Ru, ru = pQ * Math.cos(Qu) - TQ * Math.sin(Qu), Bu = pQ * Math.sin(Qu) + TQ * Math.cos(Qu), xu = yu([0, -Eu, Ku]);
      return {
        LowerBody: {
          timeFraction: uu,
          position: xu,
          rotation: yu([0, 0, 0])
        },
        UpperBody: {
          timeFraction: uu,
          position: xu,
          rotation: yu([Qu, 0, Ju])
        },
        HeadMesh: {
          timeFraction: uu,
          position: yu([0, ru - pQ - Eu, Bu - TQ + Ku]),
          rotation: yu([Qu + mu, 0, Ju])
        },
        LegLeftMesh: {
          timeFraction: uu,
          rotation: yu([Nu[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: uu,
          rotation: yu([Nu[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: uu,
          rotation: yu([Xu, 0, Vu])
        },
        ArmRightMesh: {
          timeFraction: uu,
          rotation: yu([Xu, 0, -Vu])
        }
      }
    }

    function dQ(uu, Ru, yu) {
      return SQ(HQ, uu, Ru, yu, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function bQ(uu) {
      return "number" === typeof uu ? [uu, uu] : uu
    }

    function CQ(uu, Ru, yu) {
      const {
        rise: Eu = 0,
        shift: Ku = 0,
        torso: Qu = 0,
        twist: mu = 0,
        tilt: Ju = 0,
        nod: Nu = 0,
        cock: Xu = 0,
        arms: Vu = 0,
        spread: ru = 0
      } = Ru, [Bu, xu] = bQ(Vu), [Su, pu] = bQ(ru);
      return {
        TorsoNode: {
          timeFraction: uu,
          position: yu([0, Eu, Ku]),
          rotation: yu([Qu, mu, Ju])
        },
        HeadMesh: {
          timeFraction: uu,
          rotation: yu([Nu, 0, Xu])
        },
        ArmLeftMesh: {
          timeFraction: uu,
          rotation: yu([Bu, 0, Su])
        },
        ArmRightMesh: {
          timeFraction: uu,
          rotation: yu([xu, 0, -pu])
        }
      }
    }
    const kQ = [1.0625, -1, 0];

    function eQ(uu) {
      return "number" === typeof uu ? [uu, uu] : uu
    }

    function AQ(uu, Ru, yu) {
      const {
        drop: Eu = 0,
        shift: Ku = 0,
        torso: Qu = 0,
        tilt: mu = 0,
        nod: Ju = 0,
        cock: Nu = 0,
        legs: Xu = [0, 0],
        arms: Vu = 0,
        spread: ru = 0
      } = Ru, [Bu, xu] = eQ(Vu), [Su, pu] = eQ(ru), Tu = -Qu, Wu = -mu, [ju, Hu, du] = function(uu, Ru) {
        const [yu, Eu, Ku] = [-kQ[0], kQ[1], -kQ[2]], Qu = yu * Math.cos(Ru) - Eu * Math.sin(Ru), mu = yu * Math.sin(Ru) + Eu * Math.cos(Ru);
        return [Qu - yu, -(mu * Math.cos(uu) - Ku * Math.sin(uu) - Eu), mu * Math.sin(uu) + Ku * Math.cos(uu) - Ku]
      }(Tu, Wu), bu = yu([0, -Eu, Ku]);
      return {
        TorsoNode: {
          timeFraction: uu,
          position: yu([ju, Hu - Eu, du + Ku]),
          rotation: yu([Tu, 0, Wu])
        },
        HeadMesh: {
          timeFraction: uu,
          rotation: yu([-Ju, 0, -Nu])
        },
        ArmLeftMesh: {
          timeFraction: uu,
          rotation: yu([-Bu, 0, -Su])
        },
        ArmRightMesh: {
          timeFraction: uu,
          rotation: yu([-xu, 0, pu])
        },
        LegLeftMesh: {
          timeFraction: uu,
          position: bu,
          rotation: yu([-Xu[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: uu,
          position: bu,
          rotation: yu([-Xu[1], 0, 0])
        }
      }
    }
    var DQ = yu(36889),
      MQ = yu(38241),
      IQ = yu(38401);

    function GQ(uu, Ru, yu) {
      var Eu, Ku;
      const Qu = function() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return uu + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - uu) * yu
        },
        [mu, Ju] = null !== (Eu = uu.legs) && void 0 !== Eu ? Eu : [0, 0],
        [Nu, Xu] = null !== (Ku = Ru.legs) && void 0 !== Ku ? Ku : [0, 0];
      return {
        drop: Qu(uu.drop, Ru.drop),
        shift: Qu(uu.shift, Ru.shift),
        torso: Qu(uu.torso, Ru.torso),
        nod: Qu(uu.nod, Ru.nod),
        tilt: Qu(uu.tilt, Ru.tilt),
        legs: [Qu(mu, Nu), Qu(Ju, Xu)],
        arms: Qu(uu.arms, Ru.arms),
        spread: Qu(uu.spread, Ru.spread)
      }
    }
    const UQ = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      nQ = dQ(4400, !0, [
        [0, UQ],
        [.16, {
          ...UQ,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, UQ],
        [.44, {
          ...UQ,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, GQ(UQ, WQ, .7)],
        [.66, GQ(UQ, WQ, .78)],
        [.74, GQ(UQ, jQ, .65)],
        [.86, {
          ...UQ,
          drop: .14
        }],
        [1, UQ]
      ], "catmull-rom-spline"),
      sQ = {
        ...UQ,
        drop: .14,
        torso: .3,
        spread: .4
      },
      tQ = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      lQ = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      gQ = {
        caveGolem: nQ,
        magmaGolem: dQ(3600, !0, [
          [0, sQ],
          [.12, {
            ...sQ,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...sQ,
            tilt: -.08
          }],
          [.4, {
            ...sQ,
            tilt: .06,
            drop: .11
          }],
          [.52, GQ(sQ, WQ, .9)],
          [.62, GQ(sQ, jQ, .8)],
          [.7, GQ(sQ, jQ, .45)],
          [.78, GQ(sQ, jQ, .85)],
          [.9, {
            ...sQ,
            drop: .17
          }],
          [1, sQ]
        ], "catmull-rom-spline"),
        frostWraith: function(uu, Ru, yu) {
          return SQ(CQ, uu, Ru, yu, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, tQ],
          [.14, {
            ...tQ,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...tQ,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...tQ,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...tQ,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...tQ,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...tQ,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...tQ,
            rise: .16,
            tilt: -.04
          }],
          [1, tQ]
        ], "catmull-rom-spline"),
        tikiTerror: function(uu, Ru, yu) {
          return SQ(AQ, uu, Ru, yu, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, lQ],
          [.16, {
            ...lQ,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, lQ],
          [.44, {
            ...lQ,
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
            ...lQ,
            drop: .1
          }],
          [1, lQ]
        ], "catmull-rom-spline")
      },
      cQ = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      LQ = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      zQ = Object.fromEntries(Object.entries(gQ).map((uu => {
        let [Ru, yu] = uu;
        return [Ru, (0, IQ.c)((0, DQ.e)(yu), Ru)]
      })));

    function FQ(uu) {
      const Ru = function(uu) {
        var Ru;
        const yu = (0, MQ.c)(uu).poseRig;
        return null !== (Ru = LQ[uu]) && void 0 !== Ru ? Ru : void 0 === yu ? null : cQ[yu]
      }(uu);
      return null === Ru ? null : zQ[Ru]
    }

    function wQ(uu) {
      return {
        "--difficulty-colour": uu
      }
    }
    const ZQ = (0, Au.lazy)((() => (0, xQ.d)(yu.e(192).then((() => yu(41098))), (uu => uu.MobPreview))));

    function hQ(uu) {
      var Ru, yu, Eu;
      let {
        picker: Ku,
        controller: Qu
      } = uu;
      const {
        t: mu
      } = (0, MK.E)(), Ju = wK(), {
        page: Nu
      } = Ku;
      return (0, GK.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: Ju,
        onKeyDown: uu => {
          "ArrowLeft" === uu.key ? (uu.preventDefault(), uu.stopPropagation(), Qu.previous()) : "ArrowRight" === uu.key ? (uu.preventDefault(), uu.stopPropagation(), Qu.next()) : FK(uu)
        },
        style: wQ(Nu.colour),
        children: [(0, GK.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, GK.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: Ku.dungeonName
          }), (0, GK.jsx)(zK.h, {
            padIgnore: !0,
            onClick: Qu.dismiss
          })]
        }), (0, GK.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, GK.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, GK.jsx)(zK.e, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !Ku.canPrevious,
              onClick: Qu.previous,
              children: (0, GK.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, GK.jsx)(BQ.c, {
                  name: "angle-up"
                })
              })
            }), (0, GK.jsxs)("div", {
              className: dK()("SkyblockBossPickerBoss", {
                Locked: !Nu.unlocked
              }),
              children: [null !== Nu.bossMobType && (0, GK.jsx)(Au.Suspense, {
                fallback: (0, GK.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, GK.jsx)(ZQ, {
                  className: "SkyblockBossPickerModel",
                  mobType: Nu.bossMobType,
                  variation: Nu.bossMobVariation,
                  animation: null !== (Ru = FQ(Nu.bossMobType)) && void 0 !== Ru ? Ru : void 0
                })
              }), null === Nu.bossMobType && (0, GK.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, GK.jsx)(zK.e, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !Ku.canNext,
              onClick: Qu.next,
              children: (0, GK.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, GK.jsx)(BQ.c, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, GK.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, GK.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [Nu.beaten && (0, GK.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), Nu.label]
            }), (0, GK.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (yu = Nu.bossName) && void 0 !== yu ? yu : "???"
            }), (0, GK.jsxs)("span", {
              className: dK()("SkyblockBossPickerRecord", {
                Locked: null !== Nu.lockedHint
              }),
              children: [null !== Nu.lockedHintHighlight && (0, GK.jsxs)(GK.Fragment, {
                children: [Nu.lockedHintHighlight.before, (0, GK.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: wQ(Nu.lockedHintHighlight.colour),
                  children: [null !== Nu.lockedHintHighlight.icon && (0, GK.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, GK.jsx)(eK.c, {
                      itemName: Nu.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), Nu.lockedHintHighlight.name]
                }), Nu.lockedHintHighlight.after]
              }), null === Nu.lockedHintHighlight && (null !== (Eu = Nu.lockedHint) && void 0 !== Eu ? Eu : Nu.summary)]
            })]
          }), (0, GK.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: Ku.pages.map((uu => (0, GK.jsx)("span", {
              className: dK()("SkyblockBossPickerDot", {
                Current: uu.current,
                Locked: !uu.unlocked
              }),
              style: wQ(uu.colour)
            }, uu.difficulty)))
          }), (0, GK.jsx)(zK.n, {
            className: "SkyblockBossPickerFight",
            disabled: !Nu.unlocked,
            onClick: Qu.enter,
            children: mu("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function PQ(uu) {
      let {
        dungeon: Ru,
        select: yu
      } = uu;
      return (0, GK.jsxs)(zK.e, {
        className: dK()("SkyblockDungeonCard", {
          Selected: Ru.selected
        }),
        onClick: () => {
          yu(Ru.id)
        },
        children: [(0, GK.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, GK.jsx)("strong", {
            children: Ru.name
          }), (0, GK.jsx)("span", {
            children: Ru.beatenSummary
          })]
        }), (0, GK.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: Ru.difficulties.map((uu => (0, GK.jsxs)("span", {
            className: dK()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: uu.beaten
            }),
            style: wQ(uu.colour),
            title: uu.summary,
            children: [uu.beaten && (0, GK.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), uu.label]
          }, uu.difficulty)))
        })]
      })
    }

    function iQ(uu) {
      let {
        controller: Ru
      } = uu;
      const yu = (0, IK.h)(xy, Ru.getSnapshot()),
        {
          t: Eu
        } = (0, MK.E)(),
        Ku = wK();
      return yu.enabled ? (0, GK.jsxs)(LK.e, {
        show: yu.open,
        close: Ru.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [yu.picker && (0, GK.jsx)(hQ, {
          picker: yu.picker,
          controller: Ru
        }), !yu.picker && (0, GK.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: Ku,
          onKeyDown: FK,
          children: [(0, GK.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, GK.jsxs)("div", {
              children: [(0, GK.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: Eu("skyblockGame:dungeons")
              }), (0, GK.jsx)("p", {
                children: Eu("skyblockGame:dungeonsIntro")
              })]
            }), (0, GK.jsx)(zK.h, {
              padIgnore: !0,
              onClick: Ru.dismiss
            })]
          }), (0, GK.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, GK.jsx)("div", {
              className: "SkyblockDungeonList",
              children: yu.dungeons.map((uu => (0, GK.jsx)(PQ, {
                dungeon: uu,
                select: Ru.select
              }, uu.id)))
            }), yu.detail && (0, GK.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, GK.jsx)("h3", {
                children: yu.detail.name
              }), (0, GK.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: yu.detail.difficulties.map((uu => (0, GK.jsxs)("li", {
                  className: dK()("SkyblockDungeonRecord", {
                    Beaten: uu.beaten
                  }),
                  children: [(0, GK.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: wQ(uu.colour),
                    children: [uu.beaten && (0, GK.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), uu.label]
                  }), (0, GK.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: uu.summary
                  })]
                }, uu.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function YQ(uu) {
      let {
        collection: Ru,
        select: yu
      } = uu;
      return (0, GK.jsxs)(zK.e, {
        className: dK()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: Ru.selected,
          Locked: Ru.locked
        }),
        ariaPressed: Ru.selected,
        onClick: () => {
          yu(Ru.id)
        },
        children: [(0, GK.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, GK.jsx)(eK.c, {
            itemName: Ru.icon,
            amount: 0
          })
        }), (0, GK.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, GK.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, GK.jsx)("strong", {
              children: Ru.name
            }), (0, GK.jsx)("span", {
              children: Ru.tier
            })]
          }), (0, GK.jsx)(ZK, {
            percent: Ru.percent,
            label: `${Ru.name}: ${Ru.progress}`
          }), (0, GK.jsx)("span", {
            className: "SkyblockSkillXp",
            children: Ru.progress
          })]
        })]
      })
    }

    function oQ(uu) {
      let {
        collection: Ru
      } = uu;
      const {
        t: yu
      } = (0, MK.E)();
      return (0, GK.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, GK.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, GK.jsx)(eK.c, {
            itemName: Ru.icon,
            amount: 0
          })
        }), (0, GK.jsx)("h3", {
          children: Ru.name
        }), (0, GK.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: Ru.tier
        }), (0, GK.jsx)("p", {
          children: Ru.locked ? yu("skyblockGame:collectionLocked") : Ru.count
        }), null !== Ru.nextReward && (0, GK.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, GK.jsx)("strong", {
            children: yu("skyblockGame:collectionNextReward")
          }), (0, GK.jsx)("span", {
            children: Ru.nextReward
          })]
        }), (0, GK.jsx)(ZK, {
          percent: Ru.percent,
          label: Ru.progress
        }), (0, GK.jsx)("p", {
          children: Ru.progress
        })]
      })
    }

    function qQ(uu) {
      let {
        controller: Ru
      } = uu;
      const yu = (0, IK.h)(ly, Ru.getSnapshot()),
        {
          t: Eu
        } = (0, MK.E)(),
        Ku = wK();
      return yu.enabled ? (0, GK.jsx)(LK.e, {
        show: yu.open,
        close: Ru.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, GK.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: Ku,
          onKeyDown: FK,
          children: [(0, GK.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, GK.jsxs)("div", {
              children: [(0, GK.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: Eu("skyblockGame:collections")
              }), (0, GK.jsxs)("p", {
                children: [Eu("skyblockGame:collectionsIntro"), " ", yu.tiersUnlocked]
              })]
            }), (0, GK.jsx)(zK.h, {
              padIgnore: !0,
              onClick: Ru.dismiss
            })]
          }), (0, GK.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: yu.categories.map((uu => (0, GK.jsxs)(zK.e, {
              className: dK()("SkyblockCollectionCategory", {
                Selected: uu.selected
              }),
              ariaPressed: uu.selected,
              padTabSelected: uu.selected,
              onClick: () => {
                Ru.selectCategory(uu.id)
              },
              children: [(0, GK.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, GK.jsx)(eK.c, {
                  itemName: uu.icon,
                  amount: 0
                })
              }), (0, GK.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, GK.jsx)("strong", {
                  children: uu.label
                }), (0, GK.jsx)("span", {
                  children: uu.tiers
                })]
              })]
            }, uu.id)))
          }), (0, GK.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, GK.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: yu.collections.map((uu => (0, GK.jsx)(YQ, {
                collection: uu,
                select: Ru.select
              }, uu.id)))
            }), yu.detail && (0, GK.jsx)(oQ, {
              collection: yu.detail
            })]
          })]
        })
      }) : null
    }
    const OQ = ["completed", "active", "available", "locked"],
      vQ = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function aQ(uu) {
      let {
        controller: Ru
      } = uu;
      const yu = (0, IK.h)(oy, Ru.getSnapshot()),
        {
          t: Eu
        } = (0, MK.E)(),
        Ku = wK();
      return yu.enabled ? (0, GK.jsx)(LK.e, {
        show: yu.open,
        close: Ru.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, GK.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: Ku,
          onKeyDown: FK,
          children: [(0, GK.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, GK.jsxs)("div", {
              children: [(0, GK.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: Eu("skyblockDevQuests:title")
              }), (0, GK.jsx)("p", {
                children: Eu("skyblockDevQuests:intro")
              })]
            }), (0, GK.jsx)(zK.h, {
              onClick: Ru.dismiss
            })]
          }), (0, GK.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [OQ.map((uu => (0, GK.jsx)("span", {
              className: dK()("SkyblockQuestGraphLegendState", uu),
              children: Eu(`skyblockDevQuests:state_${uu}`)
            }, uu))), vQ.map((uu => (0, GK.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, GK.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, GK.jsx)("line", {
                  className: dK()("SkyblockQuestGraphEdge", uu),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), Eu(`skyblockDevQuests:edge_${uu}`)]
            }, uu)))]
          }), (0, GK.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, GK.jsxs)("div", {
              className: dK()("SkyblockQuestGraphCanvas", {
                Planning: yu.planning
              }),
              style: {
                width: yu.width,
                height: yu.height
              },
              children: [(0, GK.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: yu.width,
                height: yu.height,
                "aria-hidden": "true",
                children: [(0, GK.jsx)("defs", {
                  children: (0, GK.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, GK.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), yu.edges.map((uu => (0, GK.jsx)("path", {
                  className: dK()("SkyblockQuestGraphEdge", uu.kind, {
                    InPlan: uu.inPlan
                  }),
                  d: uu.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, uu.key)))]
              }), yu.nodes.map((uu => (0, GK.jsxs)("button", {
                type: "button",
                className: dK()("SkyblockQuestGraphNode", uu.state, {
                  InPlan: uu.inPlan,
                  Hovered: uu.hovered
                }),
                style: {
                  left: uu.left,
                  top: uu.top,
                  width: 190,
                  height: 52
                },
                title: uu.id,
                onMouseEnter: () => {
                  Ru.hover(uu.id)
                },
                onMouseLeave: () => {
                  Ru.hover(null)
                },
                onFocus: () => {
                  Ru.hover(uu.id)
                },
                onBlur: () => {
                  Ru.hover(null)
                },
                onClick: () => {
                  Ru.jump(uu.id)
                },
                children: [(0, GK.jsx)("strong", {
                  children: uu.name
                }), (0, GK.jsx)("span", {
                  children: uu.detail
                })]
              }, uu.id)))]
            })
          })]
        })
      }) : null
    }
    const fQ = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      um = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${JE}ms`,
        "--forge-duration": "2150ms"
      },
      Rm = Array.from({
        length: 18
      }, ((uu, Ru) => ({
        "--ember-left": `${(4+92*(.618034*Ru%1)).toFixed(1)}%`,
        "--ember-size": 3 + Ru % 3 * 2 + "px",
        "--ember-drift": 14 * (Ru % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*Ru%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*Ru%8).toFixed(2)}s`
      })));

    function ym(uu) {
      if (uu.style.removeProperty("--part-size"), null === uu.parentElement || "wrap" === getComputedStyle(uu.parentElement).flexWrap) return;
      const Ru = [...uu.children],
        yu = getComputedStyle(uu),
        Eu = parseFloat(yu.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        Ku = (uu.clientHeight - parseFloat(yu.rowGap) * (Ru.length - 1)) / Ru.length,
        Qu = Ru.map((uu => {
          const Ru = getComputedStyle(uu),
            yu = uu.querySelector("h3"),
            Qu = uu.querySelector(".SkyblockForgeParts");
          if (null === yu || null === Qu) return Eu;
          const mu = Ku - parseFloat(Ru.paddingTop) - parseFloat(Ru.paddingBottom) - yu.offsetHeight - parseFloat(getComputedStyle(yu).marginBottom),
            Ju = parseFloat(getComputedStyle(Qu).columnGap),
            Nu = Qu.children.length;
          let Xu = 0;
          for (let Eu = 1; Eu <= Nu; Eu++) {
            const uu = Math.ceil(Nu / Eu);
            Xu = Math.max(Xu, Math.min((Qu.clientWidth - Ju * (Eu - 1)) / Eu, (mu - Ju * (uu - 1)) / uu))
          }
          return Xu
        }));
      uu.style.setProperty("--part-size", `${Math.floor(Math.max(Eu,Math.min(...Qu)))}px`)
    }

    function Em(uu) {
      var Ru, yu, Eu, Qu, mu;
      let {
        controller: Ju
      } = uu;
      const Nu = (0, IK.h)(SE, Ju.getSnapshot()),
        {
          t: Xu
        } = (0, MK.E)(),
        Vu = wK(),
        ru = function() {
          const uu = (0, Au.useRef)(null),
            Ru = (0, Au.useRef)(null);
          return (0, Au.useLayoutEffect)((() => {
            null !== uu.current && ym(uu.current)
          })), (0, Au.useCallback)((yu => {
            var Eu;
            null === (Eu = Ru.current) || void 0 === Eu || Eu.disconnect(), Ru.current = null, uu.current = yu, null !== yu && (Ru.current = new ResizeObserver((() => {
              ym(yu)
            })), Ru.current.observe(yu))
          }), [])
        }(),
        Bu = function(uu) {
          const Ru = (0, Au.useRef)(null);
          return (0, Au.useLayoutEffect)((() => {
            const uu = Ru.current;
            if (null !== uu) {
              uu.style.removeProperty("font-size");
              for (let Ru = 1.7; Ru > 1.1 && uu.scrollWidth > uu.clientWidth; Ru -= .1) uu.style.fontSize = Ru - .1 + "rem"
            }
          }), [uu]), (0, Au.useCallback)((uu => {
            Ru.current = uu
          }), [])
        }(null === (Ru = Nu.preview) || void 0 === Ru ? void 0 : Ru.name),
        xu = (0, Au.useRef)(null),
        Su = (0, Au.useRef)({}),
        pu = Nu.forging,
        Tu = null !== (yu = null === pu || void 0 === pu ? void 0 : pu.preview.tier) && void 0 !== yu ? yu : 0,
        Wu = null !== (Eu = null === pu || void 0 === pu ? void 0 : pu.preview.named) && void 0 !== Eu && Eu,
        ju = (0, Au.useMemo)((() => {
          return null === pu ? null : {
            flames: (uu = Tu, Ru = Wu, Array.from({
              length: 26 + 6 * uu + (Ru ? 20 : 0)
            }, ((uu, Ru) => {
              const yu = Ru < 6,
                Eu = Math.random() * Math.PI * 2,
                Ku = yu ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                Qu = Math.cos(Eu) * Ku,
                mu = Math.sin(Eu) * Ku - 2 - 3 * Math.random(),
                Ju = Math.random(),
                [Nu, Xu, Vu] = yu ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : Ju < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : Ju < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [Ju < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": Nu,
                "--x0": `${(.15*Qu).toFixed(2)}rem`,
                "--y0": `${(.15*mu).toFixed(2)}rem`,
                "--x": `${Qu.toFixed(2)}rem`,
                "--y": `${mu.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${Xu.toFixed(2)}rem`,
                "--duration": `${Math.round(Vu)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: VE(Tu, Wu)
          };
          var uu, Ru
        }), [null === pu || void 0 === pu ? void 0 : pu.id]);
      if (!Nu.enabled) return null;
      const Hu = Nu.preview,
        du = Nu.arriving,
        bu = null !== du && !du.sameSword,
        Cu = null !== Hu && (0, GK.jsx)(eK.c, {
          itemName: Hu.baseSword,
          amount: 0,
          enchantmentTier: Hu.enchantmentTier
        });
      return (0, GK.jsx)(LK.e, {
        show: Nu.open,
        close: Ju.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, GK.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: Vu,
          onKeyDown: FK,
          children: [(0, GK.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: Rm.map(((uu, Ru) => (0, GK.jsx)("span", {
              style: uu
            }, Ru)))
          }), (0, GK.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, GK.jsxs)("div", {
              children: [(0, GK.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: Xu("skyblockGame:forgeTitle")
              }), (0, GK.jsx)("p", {
                children: Xu("skyblockGame:forgeIntro")
              })]
            }), (0, GK.jsx)(zK.h, {
              onClick: Ju.dismiss
            })]
          }), (0, GK.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, GK.jsx)("div", {
              ref: ru,
              className: dK()("SkyblockForgeSlots", {
                Locked: null !== pu
              }),
              children: Nu.slots.map((uu => (0, GK.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, GK.jsx)("h3", {
                  children: uu.label
                }), (0, GK.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: uu.parts.map((Ru => (0, GK.jsx)("button", {
                    type: "button",
                    className: dK()("SkyblockForgePart", {
                      Selected: Ru.selected,
                      Missing: Ru.placeholder
                    }),
                    disabled: Ru.placeholder,
                    title: Ru.placeholder ? Xu("skyblockGame:forgePickParts") : Ru.itemName,
                    "aria-pressed": Ru.selected,
                    onClick: () => {
                      Ju.select(uu.kind, Ru.material)
                    },
                    children: (0, GK.jsx)(eK.c, {
                      itemName: Ru.itemName,
                      amount: Ru.owned
                    })
                  }, Ru.material)))
                })]
              }, uu.kind)))
            }), (0, GK.jsxs)("div", {
              className: dK()("SkyblockForgeAnvil", {
                Named: null === Hu || void 0 === Hu ? void 0 : Hu.named
              }),
              style: {
                "--tier": null === Hu ? "transparent" : Ku.tb[Hu.enchantmentTier]
              },
              children: [(0, GK.jsxs)("div", {
                className: dK()("SkyblockForgeAltar", {
                  Forging: null !== pu
                }),
                style: null === pu ? void 0 : um,
                children: [(0, GK.jsxs)("div", {
                  className: dK()("SkyblockForgeMount", {
                    Arrive: null !== du
                  }),
                  children: [null === Hu && (0, GK.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, GK.jsx)(eK.c, {
                      itemName: Nu.unformedSword,
                      amount: 0
                    })
                  }), null !== Hu && (0, GK.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== Hu && null === pu && (0, GK.jsx)("div", {
                    ref: xu,
                    className: "SkyblockForgeFloat",
                    children: (0, GK.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: Cu
                    })
                  }), null !== Hu && (0, GK.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: XE.map(((uu, Ru) => (0, GK.jsx)("span", {
                      className: dK()({
                        Rune: "" !== uu.rune
                      }),
                      style: uu.style,
                      children: uu.rune
                    }, Ru)))
                  }), null !== pu && null !== ju && (0, GK.jsxs)(GK.Fragment, {
                    children: [(0, GK.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, GK.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: ju.flames.map(((uu, Ru) => (0, GK.jsx)("span", {
                        style: uu
                      }, Ru)))
                    }), (0, GK.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: Su.current,
                      children: (0, GK.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: Cu
                      })
                    }), (0, GK.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, GK.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (Tu >= 4 || Wu) && (0, GK.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, GK.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: ju.sparks.map(((uu, Ru) => (0, GK.jsx)("span", {
                        style: uu
                      }, Ru)))
                    }), (0, GK.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, GK.jsx)("p", {
                  className: dK()("SkyblockForgeStatus", null === (Qu = Nu.status) || void 0 === Qu ? void 0 : Qu.tone),
                  children: null === (mu = Nu.status) || void 0 === mu ? void 0 : mu.text
                })]
              }), null === Hu && (0, GK.jsx)("p", {
                className: dK()("SkyblockForgeName Waiting", {
                  ArriveText: bu
                }),
                children: Xu(Nu.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== Hu && (0, GK.jsx)("h3", {
                ref: Bu,
                className: dK()("SkyblockForgeName", {
                  ArriveText: bu
                }),
                title: Hu.name,
                children: Hu.name
              }), (null === Hu || void 0 === Hu ? void 0 : Hu.named) && (0, GK.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: Xu("skyblockGame:forgeSecret")
              }), (0, GK.jsxs)(zK.n, {
                className: "SkyblockForgeButton",
                disabled: !Nu.canForge,
                title: null === Hu ? void 0 : Xu("skyblockGame:forgeCoalOwned", {
                  owned: String(Nu.coalOwned)
                }),
                onClick: () => {
                  Su.current = function(uu) {
                    const Ru = null === uu ? "none" : getComputedStyle(uu).transform,
                      yu = new DOMMatrixReadOnly("none" === Ru ? void 0 : Ru);
                    return {
                      "--settle-y": `${yu.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(yu.b,yu.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(xu.current), xE(), Ju.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [Xu("skyblockGame:forgeButton"), null !== Hu && (0, GK.jsxs)("span", {
                  className: dK()("SkyblockForgeCost", {
                    Short: Hu.coalShort
                  }),
                  children: [(0, GK.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, GK.jsx)(eK.c, {
                      itemName: fy.e,
                      amount: 0
                    })
                  }), Hu.coalCost]
                })]
              })]
            }), (0, GK.jsxs)("div", {
              className: dK()("SkyblockForgeDetails", {
                Named: null === Hu || void 0 === Hu ? void 0 : Hu.named
              }),
              children: [(0, GK.jsx)("p", {
                className: dK()("SkyblockForgeLore", {
                  ArriveText: bu
                }),
                title: null === Hu || void 0 === Hu ? void 0 : Hu.lore,
                children: null === Hu || void 0 === Hu ? void 0 : Hu.lore
              }), (0, GK.jsxs)("dl", {
                className: dK()("SkyblockForgeStats", {
                  ArriveText: bu
                }),
                children: [null === Hu && fQ.map((uu => (0, GK.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, GK.jsx)("dt", {
                    children: Xu(uu)
                  }), (0, GK.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, uu))), null === Hu || void 0 === Hu ? void 0 : Hu.stats.map((uu => (0, GK.jsxs)("div", {
                  className: dK()("SkyblockForgeStat", {
                    Better: uu.better
                  }),
                  children: [(0, GK.jsx)("dt", {
                    children: uu.label
                  }), (0, GK.jsx)("dd", {
                    children: uu.value
                  })]
                }, uu.label)))]
              }), (0, GK.jsx)("ul", {
                className: dK()("SkyblockForgeEffects", {
                  ArriveText: bu
                }),
                children: null === Hu || void 0 === Hu ? void 0 : Hu.effects.map((uu => (0, GK.jsx)("li", {
                  children: uu
                }, uu)))
              })]
            })]
          })]
        })
      })
    }
    const Km = "Doom Rivet",
      Qm = "Doom Crest";

    function mm(uu) {
      let {
        itemName: Ru,
        amount: yu,
        owned: Eu
      } = uu;
      return (0, GK.jsxs)("span", {
        className: dK()("SkyblockSmugglerPrice", {
          Short: yu > Eu
        }),
        children: [(0, GK.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, GK.jsx)(eK.c, {
            itemName: Ru,
            amount: 0
          })
        }), (0, GK.jsx)("span", {
          children: yu
        })]
      })
    }

    function Jm(uu) {
      return uu.justBought ? "skyblockGame:smugglerJustBought" : uu.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function Nm(uu) {
      let {
        deal: Ru,
        view: yu,
        buy: Eu
      } = uu;
      const {
        t: Ku
      } = (0, MK.E)();
      return (0, GK.jsxs)("div", {
        className: dK()("SkyblockSmugglerPocket", {
          Bought: Ru.justBought,
          Unaffordable: !Ru.affordable,
          SoldOut: Ru.soldOut && !Ru.justBought
        }),
        children: [(0, GK.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, GK.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, GK.jsx)(eK.c, {
            itemName: Ru.itemName,
            amount: 0,
            enchantmentTier: Ru.enchantmentTier
          }), Ru.amount > 1 && (0, GK.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: Ku("skyblockGame:smugglerAmount", {
              amount: Ru.amount
            })
          })]
        }), (0, GK.jsx)("h3", {
          children: Ru.displayName
        }), (0, GK.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, GK.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [Ru.rivets > 0 && (0, GK.jsx)(mm, {
              itemName: Km,
              amount: Ru.rivets,
              owned: yu.rivetsOwned
            }), Ru.crests > 0 && (0, GK.jsx)(mm, {
              itemName: Qm,
              amount: Ru.crests,
              owned: yu.crestsOwned
            })]
          }), (0, GK.jsx)(zK.e, {
            className: "SkyblockSmugglerBuy",
            disabled: Ru.soldOut || !Ru.affordable || yu.pending,
            onClick: () => {
              Eu(Ru.slot)
            },
            children: Ku(Jm(Ru))
          })]
        })]
      }, Ru.justBought ? yu.boughtCount : 0)
    }

    function Xm(uu) {
      let {
        controller: Ru
      } = uu;
      const yu = (0, IK.h)(WE, Ru.getSnapshot()),
        {
          t: Eu
        } = (0, MK.E)(),
        Ku = wK();
      return yu.enabled ? (0, GK.jsx)(LK.e, {
        show: yu.open,
        close: Ru.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, GK.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: Ku,
          onKeyDown: FK,
          children: [(0, GK.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, GK.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, GK.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, GK.jsxs)("div", {
              children: [(0, GK.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: Eu("skyblockGame:smugglerTitle")
              }), (0, GK.jsx)("p", {
                children: Eu("skyblockGame:smugglerIntro")
              })]
            }), (0, GK.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, GK.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, GK.jsx)(mm, {
                  itemName: Km,
                  amount: yu.rivetsOwned,
                  owned: yu.rivetsOwned
                }), (0, GK.jsx)(mm, {
                  itemName: Qm,
                  amount: yu.crestsOwned,
                  owned: yu.crestsOwned
                })]
              }), (0, GK.jsx)(zK.h, {
                onClick: Ru.dismiss
              })]
            })]
          }), (0, GK.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: yu.deals.map((uu => (0, GK.jsx)(Nm, {
              deal: uu,
              view: yu,
              buy: Ru.buy
            }, uu.slot)))
          }), (0, GK.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, GK.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: yu.rotatesText
            }), null !== yu.status && (0, GK.jsx)("span", {
              className: dK()("SkyblockSmugglerStatus", yu.status.tone),
              children: yu.status.text
            })]
          })]
        })
      }) : null
    }

    function Vm(uu) {
      let {
        phase: Ru,
        className: yu
      } = uu;
      return (0, GK.jsx)("span", {
        className: dK()("SkyblockMoon", `Moon-${Ru}`, yu),
        "aria-hidden": "true"
      })
    }

    function rm(uu) {
      let {
        controller: Ru
      } = uu;
      const yu = (0, IK.h)(dE, Ru.getSnapshot()),
        {
          t: Eu
        } = (0, MK.E)();
      return yu.enabled ? (0, GK.jsx)(CK.d, {
        placement: "statBars",
        children: (0, GK.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: dK()("SkyblockPassageChip", yu.open && "Open"),
          "aria-label": Eu("skyblockGame:passageChipLabel", {
            phase: yu.phaseName
          }),
          title: Eu("skyblockGame:passageChipLabel", {
            phase: yu.phaseName
          }),
          onMouseDown: uu => {
            uu.preventDefault()
          },
          onClick: Ru.toggle,
          children: (0, GK.jsx)(Vm, {
            phase: yu.phase
          }, yu.phase)
        })
      }) : null
    }

    function Bm(uu) {
      let {
        fish: Ru
      } = uu;
      return (0, GK.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, GK.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, GK.jsx)(eK.c, {
            itemName: Ru.itemName,
            amount: 0
          })
        }), (0, GK.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, GK.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: Ru.displayName
          }), (0, GK.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: Ru.where
          })]
        })]
      })
    }

    function xm(uu) {
      let {
        controller: Ru
      } = uu;
      const yu = (0, IK.h)(dE, Ru.getSnapshot()),
        {
          t: Eu
        } = (0, MK.E)(),
        Ku = wK();
      return yu.enabled ? (0, GK.jsx)(LK.e, {
        show: yu.open,
        close: Ru.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, GK.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: Ku,
          onKeyDown: FK,
          children: [(0, GK.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, GK.jsx)(Vm, {
              phase: yu.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, GK.jsxs)("div", {
              children: [(0, GK.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: Eu("skyblockGame:passageTitle")
              }), (0, GK.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: yu.phaseName
              })]
            }), (0, GK.jsx)(zK.h, {
              padIgnore: !0,
              onClick: Ru.dismiss
            })]
          }), (0, GK.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: Eu("skyblockGame:passageIntro")
          }), (0, GK.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, GK.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, GK.jsx)("h3", {
                children: Eu("skyblockGame:passageVisiting")
              }), (0, GK.jsx)("ul", {
                className: "SkyblockPassageList",
                children: yu.visitors.map((uu => (0, GK.jsx)(Bm, {
                  fish: uu
                }, uu.itemName)))
              })]
            }), (0, GK.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== yu.resting && (0, GK.jsxs)(GK.Fragment, {
                children: [(0, GK.jsx)("h3", {
                  children: Eu("skyblockGame:passageResting")
                }), (0, GK.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, GK.jsx)(Bm, {
                    fish: yu.resting
                  })
                })]
              }), (0, GK.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, GK.jsx)(Vm, {
                  phase: yu.nextPhase
                }), (0, GK.jsx)("span", {
                  children: yu.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function Sm() {
      return (0, GK.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((uu => (0, GK.jsx)("i", {
          style: {
            "--sparkle-index": uu
          }
        }, uu)))
      })
    }

    function pm(uu) {
      var Ru;
      let {
        charm: yu,
        view: Eu,
        controller: Ku
      } = uu;
      const {
        t: Qu
      } = (0, MK.E)(), mu = Eu.shop, Ju = (null === (Ru = Eu.sparkle) || void 0 === Ru ? void 0 : Ru.id) === yu.id;
      return (0, GK.jsxs)("li", {
        className: dK()("SkyblockLampLightCharm", yu.owned && "Owned", yu.socketed && "Socketed"),
        children: [Ju && (0, GK.jsx)(Sm, {}, Eu.sparkle.count), (0, GK.jsx)("h4", {
          children: yu.name
        }), (0, GK.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: yu.effect
        }), (0, GK.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: yu.lines.map((uu => (0, GK.jsxs)("li", {
            className: dK()("SkyblockLampLightOddsLine", "better" === uu.tone ? "Better" : "worse" === uu.tone ? "Worse" : "Same"),
            children: [(0, GK.jsx)("span", {
              className: "Before",
              children: uu.before
            }), (0, GK.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, GK.jsx)("span", {
              className: "After",
              children: uu.after
            })]
          }, uu.label)))
        }), (0, GK.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: yu.owned ? yu.socketed ? (0, GK.jsxs)(GK.Fragment, {
            children: [(0, GK.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: Qu("skyblockGame:lampLightSocketed")
            }), (0, GK.jsx)(zK.P, {
              disabled: !Eu.canCommand,
              ariaLabel: Qu("skyblockGame:lampLightRemoveLabel", {
                charm: yu.name
              }),
              onClick: () => {
                Ku.socket(null)
              },
              children: Qu("skyblockGame:lampLightRemove")
            })]
          }) : (0, GK.jsx)(zK.e, {
            disabled: !Eu.canCommand || !mu.heldRod,
            ariaLabel: Qu("skyblockGame:lampLightSocketLabel", {
              charm: yu.name
            }),
            onClick: () => {
              Ku.socket(yu.id)
            },
            children: Qu("skyblockGame:lampLightSocket")
          }) : (0, GK.jsx)(zK.e, {
            disabled: !Eu.canCommand || !yu.affordable,
            ariaLabel: Qu("skyblockGame:lampLightBuyLabel", {
              item: yu.name,
              cost: yu.cost
            }),
            onClick: () => {
              Ku.buy(yu.id)
            },
            children: yu.cost
          })
        })]
      })
    }

    function Tm(uu) {
      var Ru;
      let {
        tint: yu,
        view: Eu,
        controller: Ku
      } = uu;
      const {
        t: Qu
      } = (0, MK.E)();
      return (0, GK.jsxs)("li", {
        className: dK()("SkyblockLampLightTint", yu.wearing && "Wearing"),
        style: {
          "--tint-colour": yu.colour
        },
        children: [(null === (Ru = Eu.sparkle) || void 0 === Ru ? void 0 : Ru.id) === yu.id && (0, GK.jsx)(Sm, {}, Eu.sparkle.count), (0, GK.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, GK.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: yu.name
        }), yu.wearing ? (0, GK.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: Qu("skyblockGame:lampLightWearing")
        }) : (0, GK.jsx)(zK.e, {
          disabled: !Eu.canCommand || !yu.owned && !yu.affordable,
          ariaLabel: yu.owned ? Qu("skyblockGame:lampLightWearLabel", {
            tint: yu.name
          }) : Qu("skyblockGame:lampLightBuyLabel", {
            item: yu.name,
            cost: yu.cost
          }),
          onClick: () => {
            yu.owned ? Ku.wearTint(yu.id) : Ku.buy(yu.id)
          },
          children: yu.owned ? Qu("skyblockGame:lampLightWear") : yu.cost
        })]
      })
    }

    function Wm(uu) {
      let {
        controller: Ru
      } = uu;
      const yu = (0, IK.h)(lE, Ru.getSnapshot()),
        {
          t: Eu
        } = (0, MK.E)(),
        Ku = yu.shop;
      return (0, GK.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, GK.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, GK.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: yu.balance
          }), (0, GK.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": yu.releasing,
            className: dK()("SkyblockLampLightSwitch", yu.releasing && "On"),
            disabled: yu.releasing ? "ready" !== yu.status : !yu.canCommand,
            onClick: () => {
              Ru.setRelease(!yu.releasing)
            },
            children: [(0, GK.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, GK.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), Eu("skyblockGame:lampLightRelease")]
          }), (0, GK.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: Eu("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== yu.notice && (0, GK.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: yu.notice
        }), null !== Ku && (0, GK.jsxs)(GK.Fragment, {
          children: [(0, GK.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, GK.jsx)("h3", {
              children: Eu("skyblockGame:lampLightCharms")
            }), (0, GK.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: Ku.oddsFor
            }), (0, GK.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((uu => (0, GK.jsx)("button", {
                type: "button",
                "aria-pressed": yu.situation === uu,
                className: dK()("SkyblockLampLightSituation", yu.situation === uu && "Selected"),
                onClick: () => {
                  Ru.setSituation(uu)
                },
                children: Eu("open" === uu ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, uu)))
            })]
          }), !Ku.heldRod && (0, GK.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: Eu("skyblockGame:lampLightHoldRod")
          }), (0, GK.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: Ku.charms.map((uu => (0, GK.jsx)(pm, {
              charm: uu,
              view: yu,
              controller: Ru
            }, uu.id)))
          }), (0, GK.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, GK.jsx)("h3", {
              children: Eu("skyblockGame:lampLightTints")
            })
          }), (0, GK.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, GK.jsxs)("li", {
              className: dK()("SkyblockLampLightTint", "Islands", Ku.wearingIslandColours && "Wearing"),
              children: [(0, GK.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, GK.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: Eu("skyblockGame:lampLightIslandColours")
              }), Ku.wearingIslandColours ? (0, GK.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: Eu("skyblockGame:lampLightWearing")
              }) : (0, GK.jsx)(zK.e, {
                disabled: !yu.canCommand,
                ariaLabel: Eu("skyblockGame:lampLightWearLabel", {
                  tint: Eu("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  Ru.wearTint(null)
                },
                children: Eu("skyblockGame:lampLightWear")
              })]
            }), Ku.tints.map((uu => (0, GK.jsx)(Tm, {
              tint: uu,
              view: yu,
              controller: Ru
            }, uu.id)))]
          })]
        })]
      })
    }

    function jm(uu) {
      let {
        controller: Ru
      } = uu;
      const yu = (0, IK.h)(lE, Ru.getSnapshot()),
        {
          t: Eu
        } = (0, MK.E)();
      return yu.releasing ? (0, GK.jsx)(CK.d, {
        children: (0, GK.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            Ru.setRelease(!1)
          },
          children: [(0, GK.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, GK.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [Eu("skyblockGame:lampLightReleasing"), " \xb7 ", yu.balance]
          }), (0, GK.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: Eu("skyblockGame:lampLightKeepCatches")
          }), null !== yu.gained && (0, GK.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: yu.gained.text
          }, yu.gained.count)]
        })
      }) : null
    }

    function Hm(uu) {
      let {
        island: Ru,
        view: yu,
        aim: Eu
      } = uu;
      const {
        t: Ku
      } = (0, MK.E)(), Qu = Ru.featuredFish;
      return (0, GK.jsxs)("li", {
        className: dK()("SkyblockKeepersChairIsland", `Island-${Ru.id}`, Ru.favoured && "Aimed", !Ru.relit && "Dark"),
        children: [(0, GK.jsx)("h3", {
          children: Ru.name
        }), Ru.relit && null !== Qu ? (0, GK.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, GK.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: Ku("skyblockGame:keepersChairTideNotice")
          }), (0, GK.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, GK.jsx)(eK.c, {
              itemName: Qu.itemName,
              amount: 0
            })
          }), (0, GK.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: Qu.displayName
          })]
        }) : (0, GK.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, GK.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: Ku("skyblockGame:keepersChairDark")
          })
        }), Ru.relit && (Ru.favoured ? (0, GK.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: Ku("skyblockGame:keepersChairAimed")
        }) : (0, GK.jsx)(zK.e, {
          className: "SkyblockKeepersChairAim",
          disabled: !yu.canAim,
          ariaLabel: Ku("skyblockGame:keepersChairAimLabel", {
            island: Ru.name
          }),
          onClick: () => {
            Eu(Ru.id)
          },
          children: Ku("skyblockGame:keepersChairAim")
        }))]
      }, Ru.favoured ? yu.aimedCount : 0)
    }

    function dm(uu) {
      let {
        controller: Ru,
        lampLight: yu
      } = uu;
      const Eu = (0, IK.h)(DE, Ru.getSnapshot()),
        Ku = (0, IK.h)(lE, yu.getSnapshot()),
        [Qu, mu] = (0, Au.useState)("lamp"),
        {
          t: Ju
        } = (0, MK.E)(),
        Nu = wK();
      if (!Eu.enabled) return null;
      const Xu = "light" === Qu && Ku.enabled;
      return (0, GK.jsx)(LK.e, {
        show: Eu.open,
        close: Ru.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, GK.jsxs)("section", {
          className: dK()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", Xu && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: Nu,
          onKeyDown: FK,
          children: [(0, GK.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, GK.jsxs)("div", {
              children: [(0, GK.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: Ju("skyblockGame:keepersChairTitle")
              }), (0, GK.jsx)("p", {
                children: Ju(Xu ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, GK.jsx)(zK.h, {
              padIgnore: !0,
              ariaLabel: Ju("skyblockGame:keepersChairClose"),
              onClick: Ru.dismiss
            })]
          }), Ku.enabled && (0, GK.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((uu => (0, GK.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === uu === Xu,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === uu === Xu ? "true" : void 0,
              className: dK()("SkyblockKeepersChairTab", "light" === uu === Xu && "Selected"),
              onClick: () => {
                mu(uu)
              },
              children: [Ju("lamp" === uu ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === uu && (0, GK.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: Ku.balance
              })]
            }, uu)))
          }), Xu ? (0, GK.jsx)(Wm, {
            controller: yu
          }) : (0, GK.jsx)(bm, {
            view: Eu,
            controller: Ru
          })]
        })
      })
    }

    function bm(uu) {
      let {
        view: Ru,
        controller: yu
      } = uu;
      const {
        t: Eu
      } = (0, MK.E)();
      return (0, GK.jsxs)(GK.Fragment, {
        children: [(0, GK.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: Ru.islands.map((uu => (0, GK.jsx)(Hm, {
            island: uu,
            view: Ru,
            aim: yu.aim
          }, uu.id)))
        }), null !== Ru.almanac && (0, GK.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, GK.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: Eu("skyblockGame:passageTitle")
          }), (0, GK.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, GK.jsx)(Vm, {
              phase: Ru.almanac.phase
            }), Ru.almanac.phaseName]
          }), (0, GK.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, GK.jsx)(Vm, {
              phase: Ru.almanac.nextPhase
            }), Ru.almanac.next]
          })]
        }), (0, GK.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, GK.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: Eu("skyblockGame:keepersChairFavour")
          }), Ru.aimed && (0, GK.jsx)(zK.P, {
            className: "SkyblockKeepersChairRest",
            disabled: !Ru.canAim,
            onClick: () => {
              yu.aim(null)
            },
            children: Eu("skyblockGame:keepersChairRest")
          })]
        }), null !== Ru.status && (0, GK.jsx)("p", {
          className: dK()("SkyblockKeepersChairStatus", "refused" === Ru.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: Ru.status.text
        })]
      })
    }

    function Cm(uu) {
      let {
        controller: Ru
      } = uu;
      const {
        t: yu
      } = (0, MK.E)(), Eu = (0, IK.h)(IE, Ru.getSnapshot());
      if (!Eu.enabled) return null;
      const Ku = Eu.freshCount > 0 ? yu("skyblockGame:reachLogOpenNews", {
        count: Eu.freshCount
      }) : yu("skyblockGame:reachLogOpen");
      return (0, GK.jsx)(CK.d, {
        placement: "statBars",
        children: (0, GK.jsxs)("button", {
          type: "button",
          className: dK()("SkyblockReachLogButton", Eu.freshCount > 0 && "HasNews", Eu.pending && "Pending"),
          "aria-label": Ku,
          title: Ku,
          onClick: Ru.ask,
          children: [Eu.news && (0, GK.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${Eu.newsToken}`), (0, GK.jsx)("span", {
            className: dK()("SkyblockReachLogIcon", Eu.news && "Jump"),
            "aria-hidden": "true",
            children: (0, GK.jsx)(eK.c, {
              itemName: UE,
              amount: 0
            })
          }, `icon:${Eu.newsToken}`), Eu.freshCount > 0 && (0, GK.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: Eu.freshCount
          })]
        })
      })
    }

    function km(uu) {
      let {
        gift: Ru
      } = uu;
      return (0, GK.jsx)("li", {
        className: dK()("SkyblockRegularsGift", Ru.given && "Given"),
        children: Ru.text
      })
    }

    function em(uu) {
      let {
        regular: Ru
      } = uu;
      const {
        t: yu
      } = (0, MK.E)();
      return (0, GK.jsxs)("li", {
        className: dK()("SkyblockRegularsCard", Ru.tagged ? "Tagged" : "Untagged", Ru.resting && "Resting"),
        children: [(0, GK.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, GK.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: Ru.fishName,
            children: (0, GK.jsx)(eK.c, {
              itemName: Ru.itemName,
              amount: 0
            })
          }), (0, GK.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, GK.jsx)("h3", {
              children: Ru.name
            }), (0, GK.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: Ru.fishName
            })]
          })]
        }), (0, GK.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: Ru.line
        }), (0, GK.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, GK.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: Ru.size
          }), Ru.tagged && (0, GK.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: Ru.resting ? yu("skyblockGame:regularsResting") : Ru.meetings
          })]
        }), (0, GK.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: Ru.chance
        }), (0, GK.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: Ru.gifts.map((uu => (0, GK.jsx)(km, {
            gift: uu
          }, uu.text)))
        }), Ru.history.length > 0 && (0, GK.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: Ru.history.map(((uu, Ru) => (0, GK.jsx)("li", {
            children: uu
          }, Ru)))
        })]
      })
    }

    function Am(uu) {
      let {
        controller: Ru,
        island: yu
      } = uu;
      const {
        t: Eu
      } = (0, MK.E)(), Ku = (0, IK.h)(uK, Ru.getSnapshot()), Qu = Ku.islands.find((uu => uu.id === yu));
      if (!Ku.enabled || void 0 === Qu) return null;
      const mu = Eu("skyblockGame:regularsOpen");
      return (0, GK.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": mu,
        title: mu,
        onClick: () => {
          Ru.openIsland(yu)
        },
        children: [(0, GK.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: Eu("skyblockGame:regularsTitle")
        }), Qu.regulars.map((uu => (0, GK.jsx)("span", {
          className: dK()("SkyblockRegularsStripIcon", uu.tagged && "Tagged"),
          title: uu.name,
          children: (0, GK.jsx)(eK.c, {
            itemName: uu.itemName,
            amount: 0
          })
        }, uu.id)))]
      })
    }

    function Dm(uu) {
      var Ru;
      let {
        controller: yu
      } = uu;
      const Eu = (0, IK.h)(uK, yu.getSnapshot()),
        {
          t: Ku
        } = (0, MK.E)(),
        Qu = wK();
      if (!Eu.enabled) return null;
      const mu = null !== (Ru = Eu.islands.find((uu => uu.id === Eu.selected))) && void 0 !== Ru ? Ru : null;
      return (0, GK.jsx)(LK.e, {
        show: Eu.open,
        close: yu.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, GK.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: Qu,
          onKeyDown: FK,
          children: [(0, GK.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, GK.jsxs)("div", {
              children: [(0, GK.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: Ku("skyblockGame:regularsTitle")
              }), (0, GK.jsx)("p", {
                children: Ku("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, GK.jsx)(zK.h, {
              padIgnore: !0,
              onClick: yu.dismiss
            })]
          }), (0, GK.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: Eu.islands.map((uu => {
              const Ru = uu.id === Eu.selected;
              return (0, GK.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": Ru,
                "data-pad-tab": !0,
                "data-pad-selected": Ru ? "true" : void 0,
                className: dK()("SkyblockReachLogTab", `Island-${uu.id}`, Ru && "Selected", uu.charm.given && "GoldPage"),
                onClick: () => {
                  yu.selectIsland(uu.id)
                },
                children: (0, GK.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: uu.name
                })
              }, uu.id)
            }))
          }), (0, GK.jsxs)("div", {
            className: dK()("SkyblockRegularsPage", null !== mu && `Island-${mu.id}`),
            role: "tabpanel",
            children: [(0, GK.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: Ku("skyblockGame:regularsHow")
            }), null !== mu && (0, GK.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: mu.regulars.map((uu => (0, GK.jsx)(em, {
                regular: uu
              }, uu.id)))
            })]
          }), null !== mu && (0, GK.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, GK.jsx)("span", {
              className: dK()("SkyblockRegularsCharm", mu.charm.given && "Given"),
              children: mu.charm.text
            })
          })]
        })
      })
    }
    const Mm = [{
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
      }, ((uu, Ru) => ({
        "--x": `${(88*(.618034*Ru%1)).toFixed(1)}%`,
        "--y": `${(10+37*Ru%70).toFixed(1)}%`,
        "--size": 7 + Ru % 3 * 3 + "rem",
        "--drift-x": 3 * (Ru % 3 - 1) + "rem",
        "--drift-y": 2 * (Ru % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + Ru % 4 * 3 + "s",
        "--delay": 2.5 * -Ru + "s"
      }))),
      Gm = Array.from({
        length: 14
      }, ((uu, Ru) => ({
        "--left": `${(3+94*((.618034*Ru+.3)%1)).toFixed(1)}%`,
        "--size": 4 + Ru % 4 * 2 + "px",
        "--sway": Ru % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*Ru%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*Ru%12).toFixed(2)}s`
      }))),
      Um = (0, Au.memo)((function(uu) {
        let {
          island: Ru
        } = uu;
        return (0, GK.jsxs)("div", {
          className: dK()("SkyblockReachLogDepths", null !== Ru && `Island-${Ru}`),
          "aria-hidden": "true",
          children: [Mm.map(((uu, Ru) => (0, GK.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: uu
          }, `shaft${Ru}`))), Im.map(((uu, Ru) => (0, GK.jsx)("span", {
            className: dK()("SkyblockReachLogMote", Ru % 2 === 1 && "Violet"),
            style: uu
          }, `mote${Ru}`))), Gm.map(((uu, Ru) => (0, GK.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: uu
          }, `bubble${Ru}`)))]
        })
      })),
      nm = 100;

    function sm(uu) {
      let {
        view: Ru
      } = uu;
      const {
        t: yu
      } = (0, MK.E)();
      if (null === Ru || 0 === Ru.total) return null;
      const Eu = nm * Ru.aspect,
        Ku = yu("skyblockGame:hiddenWatersCount", {
          found: Ru.found,
          total: Ru.total
        });
      return (0, GK.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${yu("skyblockGame:hiddenWatersTitle")}: ${Ku}`,
        children: [(0, GK.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${Eu}`,
          "aria-hidden": "true",
          children: [Ru.islands.map(((uu, Ru) => (0, GK.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (uu.left + uu.width / 2) * nm,
            cy: (uu.top + uu.height / 2) * Eu,
            rx: uu.width / 2 * nm,
            ry: uu.height / 2 * Eu
          }, Ru))), Ru.pins.map(((uu, Ru) => (0, GK.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: uu.left * nm,
            cy: uu.top * Eu,
            r: 13
          }, Ru)))]
        }), (0, GK.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, GK.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: yu("skyblockGame:hiddenWatersTitle")
          }), (0, GK.jsx)("span", {
            className: Ru.found === Ru.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: Ku
          })]
        })]
      })
    }

    function tm(uu) {
      let {
        view: Ru,
        island: yu
      } = uu;
      const {
        t: Eu
      } = (0, MK.E)(), Ku = null === Ru || void 0 === Ru ? void 0 : Ru.glimpses.get(yu);
      return void 0 === Ku || 0 === Ku.length ? null : (0, GK.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, GK.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: Eu("skyblockGame:hiddenWatersGlimpsed")
        }), (0, GK.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: Ku.map((uu => (0, GK.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, GK.jsx)(eK.c, {
              itemName: uu,
              amount: 0
            })
          }, uu)))
        })]
      })
    }
    const lm = ["Bronze", "Silver", "Gold"],
      gm = [{
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
      cm = gm.slice(0, 2);

    function Lm(uu) {
      return uu ? gm : cm
    }

    function zm(uu) {
      let {
        fish: Ru,
        letGoShown: yu
      } = uu;
      const {
        t: Eu
      } = (0, MK.E)();
      return (0, GK.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [lm.map(((uu, yu) => {
          const Ku = yu < Ru.marks;
          return (0, GK.jsx)("span", {
            className: dK()("SkyblockReachLogPip", uu, Ku && "Earned", Ku && Ru.fresh && yu === Ru.marks - 1 && "Newest"),
            title: Eu(GE[yu])
          }, uu)
        })), (0, GK.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), Lm(yu).map(((uu, yu) => (0, GK.jsx)("span", {
          className: dK()("SkyblockReachLogRibbon", uu.className, !0 === Ru.ribbons[yu] && "Earned"),
          title: Eu(uu.titleKey)
        }, uu.className)))]
      })
    }

    function Fm(uu) {
      let {
        letGoShown: Ru,
        haloShown: yu
      } = uu;
      const {
        t: Eu
      } = (0, MK.E)();
      return (0, GK.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, GK.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Eu("skyblockGame:reachLogMarks"),
          children: [(0, GK.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), Eu("skyblockGame:reachLogLegendMarks")]
        }), Lm(Ru).map((uu => (0, GK.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Eu(uu.titleKey),
          children: [(0, GK.jsx)("span", {
            className: dK()("SkyblockReachLogRibbon", uu.className, "Earned")
          }), Eu(uu.legendKey)]
        }, uu.className))), (0, GK.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Eu("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, GK.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), Eu("skyblockGame:reachLogLegendGlimmer")]
        }), yu && (0, GK.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Eu("skyblockGame:reachLogHaloTitle"),
          children: [(0, GK.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), Eu("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function wm(uu) {
      let {
        returner: Ru
      } = uu;
      return (0, GK.jsxs)("div", {
        className: dK()("SkyblockReachLogReturner", Ru.back && "Back"),
        children: [(0, GK.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, GK.jsx)(eK.c, {
            itemName: Ru.itemName,
            amount: 0
          })
        }), (0, GK.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: Ru.line
        })]
      })
    }

    function Zm(uu) {
      let {
        fish: Ru,
        letGoShown: yu
      } = uu;
      const {
        t: Eu
      } = (0, MK.E)();
      return (0, GK.jsxs)("li", {
        className: dK()("SkyblockReachLogCard", Ru.caught ? "Caught" : "Unknown", Ru.marks >= 3 && "GoldCard", Ru.fresh && "Fresh", Ru.visitor && "Visitor"),
        children: [Ru.visitor && (0, GK.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: Eu("skyblockGame:reachLogVisitor")
        }), Ru.fresh && Array.from({
          length: 4
        }, ((uu, Ru) => (0, GK.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, Ru))), (0, GK.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [Ru.halo && (0, GK.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: Eu("skyblockGame:reachLogHaloTitle")
          }), (0, GK.jsx)(eK.c, {
            itemName: Ru.itemName,
            amount: 0
          }), Ru.glimmer && (0, GK.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: Eu("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, GK.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: Ru.name
        }), (0, GK.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: Ru.chance
        }), (0, GK.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: Ru.best
        }), (0, GK.jsx)(zm, {
          fish: Ru,
          letGoShown: yu
        })]
      })
    }

    function hm(uu) {
      let {
        page: Ru,
        letGoShown: yu,
        hiddenWaters: Eu
      } = uu;
      const {
        t: Ku
      } = (0, MK.E)();
      return Ru.awake ? (0, GK.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: Ru.fish.map((uu => (0, GK.jsx)(Zm, {
          fish: uu,
          letGoShown: yu
        }, uu.itemName)))
      }) : (0, GK.jsxs)(GK.Fragment, {
        children: [(0, GK.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: Ku("skyblockGame:reachLogAsleep")
        }), (0, GK.jsx)(tm, {
          view: Eu,
          island: Ru.id
        })]
      })
    }

    function Pm(uu) {
      var Ru, yu;
      let {
        controller: Eu,
        regulars: Ku,
        hiddenWaters: Qu
      } = uu;
      const mu = (0, IK.h)(IE, Eu.getSnapshot()),
        Ju = function(uu) {
          return (0, IK.h)(QK, uu.getSnapshot())
        }(Qu),
        Nu = (0, IK.h)(uK, Ku.getSnapshot()),
        {
          t: Xu
        } = (0, MK.E)(),
        Vu = wK();
      if (!mu.enabled) return null;
      const ru = null !== (Ru = mu.pages.find((uu => uu.id === mu.selected))) && void 0 !== Ru ? Ru : null;
      return (0, GK.jsx)(LK.e, {
        show: mu.open,
        close: Eu.dismiss,
        togglePointerLock: !1,
        className: dK()("SkyblockSkillsOverlay", Nu.open && "SkyblockReachLogUnderLedger"),
        children: (0, GK.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: Vu,
          onKeyDown: FK,
          children: [(0, GK.jsx)(Um, {
            island: null !== (yu = null === ru || void 0 === ru ? void 0 : ru.id) && void 0 !== yu ? yu : null
          }), (0, GK.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, GK.jsxs)("div", {
              children: [(0, GK.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: Xu("skyblockGame:reachLogTitle")
              }), (0, GK.jsx)("p", {
                children: Xu("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, GK.jsx)(sm, {
              view: Ju
            }), (0, GK.jsx)(zK.h, {
              padIgnore: !0,
              onClick: Eu.dismiss
            })]
          }), (0, GK.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: mu.pages.map((uu => {
              const Ru = uu.id === mu.selected,
                yu = uu.fish.some((uu => uu.fresh));
              return (0, GK.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": Ru,
                "data-pad-tab": !0,
                "data-pad-selected": Ru ? "true" : void 0,
                className: dK()("SkyblockReachLogTab", `Island-${uu.id}`, Ru && "Selected", !uu.awake && "Asleep", uu.gold && "GoldPage", yu && "HasNews"),
                onClick: () => {
                  Eu.selectPage(uu.id)
                },
                children: [(0, GK.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: uu.name
                }), uu.awake && (0, GK.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: Xu("skyblockGame:reachLogCaughtCount", {
                    caught: uu.caught,
                    total: uu.total
                  })
                })]
              }, uu.id)
            }))
          }), (0, GK.jsxs)("div", {
            className: dK()("SkyblockReachLogPage", null !== ru && `Island-${ru.id}`),
            role: "tabpanel",
            children: [null !== ru && (0, GK.jsx)(hm, {
              page: ru,
              letGoShown: mu.letGoShown,
              hiddenWaters: Ju
            }), !0 === (null === ru || void 0 === ru ? void 0 : ru.awake) && null !== ru.returner && (0, GK.jsx)(wm, {
              returner: ru.returner
            }), !0 === (null === ru || void 0 === ru ? void 0 : ru.awake) && (0, GK.jsx)(Am, {
              controller: Ku,
              island: ru.id
            })]
          }), (0, GK.jsx)("footer", {
            className: dK()("SkyblockReachLogFooter", null !== ru && `Island-${ru.id}`, !0 === (null === ru || void 0 === ru ? void 0 : ru.gold) && "GoldPage"),
            children: !0 === (null === ru || void 0 === ru ? void 0 : ru.gold) ? (0, GK.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: Xu("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, GK.jsxs)(GK.Fragment, {
              children: [(0, GK.jsx)(Fm, {
                letGoShown: mu.letGoShown,
                haloShown: !0 === (null === ru || void 0 === ru ? void 0 : ru.fish.some((uu => uu.halo)))
              }), (0, GK.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: Xu("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var im = yu(4598);

    function Ym(uu) {
      let {
        conversation: Ru,
        completedLabel: yu
      } = uu;
      return (0, GK.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, GK.jsxs)("header", {
          children: [(0, GK.jsx)("h3", {
            children: Ru.questName
          }), Ru.completed && (0, GK.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: yu
          })]
        }), Ru.lines.map((uu => (0, GK.jsx)(im.b, {
          display: uu.display
        }, uu.key)))]
      })
    }

    function om(uu) {
      let {
        controller: Ru
      } = uu;
      const {
        t: yu
      } = (0, MK.E)(), Eu = (0, IK.h)(JK, Ru.getSnapshot()), Ku = wK();
      if (!Eu.enabled) return null;
      const Qu = !Eu.loading && 0 === Eu.conversations.length;
      return (0, GK.jsx)(LK.e, {
        show: Eu.open,
        close: Ru.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, GK.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: Ku,
          onKeyDown: FK,
          children: [(0, GK.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, GK.jsxs)("div", {
              children: [(0, GK.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: yu("skyblockDialogue:title")
              }), (0, GK.jsx)("p", {
                children: yu("skyblockDialogue:intro")
              })]
            }), (0, GK.jsx)(zK.h, {
              padIgnore: !0,
              onClick: Ru.dismiss
            })]
          }), (0, GK.jsxs)("div", {
            className: dK()("SkyblockDialogueBody", {
              SingleColumn: null !== Eu.questFocus || 0 === Eu.characters.length
            }),
            children: [null === Eu.questFocus && Eu.characters.length > 0 && (0, GK.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: Eu.characters.map((uu => (0, GK.jsx)(zK.e, {
                className: dK()("SkyblockDialogueCharacter", {
                  Selected: uu.selected
                }),
                onClick: () => {
                  Ru.selectCharacter(uu.id)
                },
                children: (0, GK.jsx)(AK.d, {
                  text: uu.styling
                })
              }, uu.id)))
            }), (0, GK.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== Eu.questFocus && (0, GK.jsx)(zK.e, {
                className: "SkyblockDialogueBack",
                onClick: Ru.showCharacters,
                children: yu("skyblockDialogue:allCharacters")
              }), Eu.loading && (0, GK.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: yu("skyblockDialogue:loading")
              }), Qu && (0, GK.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: yu(null === Eu.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), Eu.conversations.map((uu => (0, GK.jsx)(Ym, {
                conversation: uu,
                completedLabel: Eu.completedLabel
              }, uu.questId)))]
            })]
          })]
        })
      })
    }

    function qm(uu) {
      let {
        controller: Ru
      } = uu;
      const yu = (0, IK.h)(BK, Ru.getSnapshot()),
        {
          t: Eu
        } = (0, MK.E)(),
        Ku = wK();
      return yu.enabled ? (0, GK.jsx)(LK.e, {
        show: yu.open,
        close: Ru.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, GK.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: Ku,
          onKeyDown: FK,
          children: [(0, GK.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, GK.jsxs)("div", {
              children: [(0, GK.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: Eu("skyblockGame:autographBook")
              }), (0, GK.jsx)("p", {
                children: Eu("skyblockGame:autographBookIntro")
              })]
            }), (0, GK.jsx)(zK.h, {
              padIgnore: !0,
              onClick: Ru.dismiss
            })]
          }), (0, GK.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, GK.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, GK.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, GK.jsx)("strong", {
                  children: yu.total
                }), (0, GK.jsx)("span", {
                  children: Eu("skyblockGame:autographTotal")
                })]
              }), (0, GK.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, GK.jsx)("strong", {
                  children: yu.rankTotal
                }), (0, GK.jsx)("span", {
                  children: Eu("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === yu.entries.length ? (0, GK.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: Eu("skyblockGame:autographBookEmpty")
            }) : (0, GK.jsx)("ul", {
              className: "SkyblockAutographList",
              children: yu.entries.map((uu => (0, GK.jsxs)("li", {
                className: dK()("SkyblockAutograph", {
                  Ranked: null !== uu.rank
                }),
                style: null === uu.rank ? void 0 : {
                  color: uu.rank.colour
                },
                children: [null !== uu.rank && (0, GK.jsx)(BQ.c, {
                  className: "SkyblockAutographRankIcon",
                  name: uu.rank.icon,
                  kit: (0, BQ.e)(uu.rank.icon)
                }), (0, GK.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, GK.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: uu.name
                  }), (0, GK.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== uu.rank && (0, GK.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: uu.rank.label
                    }), (0, GK.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: uu.signedOn
                    })]
                  })]
                })]
              }, uu.key)))
            })]
          })]
        })
      }) : null
    }
    const Om = (0, Au.memo)((function(uu) {
        let {
          controller: Ru
        } = uu;
        return (0, GK.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: Ru.display.mountWaypoint,
          children: [(0, GK.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, GK.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, GK.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, GK.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, GK.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, GK.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      am = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function fm(uu) {
      return "next" === uu.phase ? "\u2192" : am[uu.kind]
    }
    const uJ = (0, Au.memo)((function(uu) {
      let {
        controller: Ru,
        display: yu
      } = uu;
      const Eu = (0, IK.h)(Vy, Ru.getNotificationSnapshot()),
        [Ku, Qu] = (0, Au.useState)(!1);
      return (0, IK.e)("qteStateUpdated", (uu => {
        Qu(uu.isActive)
      })), (0, GK.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (Ku ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [Eu && (0, GK.jsxs)("div", {
          className: `SkyblockQuestNotification ${Eu.kind} ${Eu.phase}`,
          style: {
            "--quest-notification-duration": `${Eu.durationMs}ms`,
            ...Eu.accent && {
              "--quest-notification-accent": Eu.accent
            }
          },
          children: [(0, GK.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (Eu.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, GK.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: fm(Eu)
            }), Eu.iconItem && (0, GK.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, GK.jsx)(eK.c, {
                itemName: Eu.iconItem,
                amount: 0
              })
            })]
          }), (0, GK.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, GK.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: Eu.title
            }), (0, GK.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, GK.jsx)(QQ.c, {
                text: Eu.name
              })
            }), Eu.description && (0, GK.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, GK.jsx)(QQ.c, {
                text: Eu.description
              })
            }), Eu.reward && (0, GK.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, GK.jsx)(QQ.c, {
                text: Eu.reward
              })
            })]
          })]
        }, Eu.token), (null === Eu || void 0 === Eu ? void 0 : Eu.waypointNameKey) && (0, GK.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": Eu.waypointNameKey,
          "data-notification-token": Eu.token,
          ref: yu.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${Eu.token}`)]
      })
    }));

    function RJ(uu) {
      const Ru = parseInt(uu.replace("#", ""), 16);
      return `${Ru>>16&255}, ${Ru>>8&255}, ${255&Ru}`
    }
    const yJ = (0, Au.memo)((function(uu) {
      let {
        controller: Ru
      } = uu;
      const {
        t: yu
      } = (0, MK.E)(), Eu = (0, IK.h)(cy, Ru.getSnapshot());
      if (!Eu) return null;
      const Ku = "arrival" === Eu.phase;
      return (0, GK.jsxs)("div", {
        className: dK()("SkyblockPortalTransit", {
          Departure: !Ku,
          Arrival: Ku
        }),
        style: {
          "--portal-rgb": RJ(Eu.colour),
          "--portal-duration": `${Eu.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, GK.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, GK.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            Ru.finishArrival(Eu.token)
          }
        }), (0, GK.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, GK.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !Ku && (0, GK.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: yu("skyblockGame:portalTransitHeading")
          }), (0, GK.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: yu(Eu.zoneNameKey)
          })]
        })]
      }, Eu.token)
    }));

    function EJ() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function KJ() {
      const uu = document.querySelector(".SkyblockHudCoins"),
        Ru = null === uu || void 0 === uu ? void 0 : uu.getBoundingClientRect();
      return Ru && Ru.width > 0 ? {
        x: Ru.left + Math.min(Ru.width, 24) / 2,
        y: Ru.top + Ru.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function QJ(uu) {
      return {
        x: uu.left + uu.width / 2,
        y: uu.top + uu.height / 2
      }
    }

    function mJ() {
      var uu;
      const Ru = null === (uu = document.querySelector(".HotBar")) || void 0 === uu ? void 0 : uu.getBoundingClientRect();
      return Ru && Ru.width > 0 ? QJ(Ru) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function JJ(uu) {
      let {
        items: Ru,
        origins: yu,
        target: Eu
      } = uu;
      return (0, GK.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: Ru.map(((uu, Ru) => {
          const Ku = yu[Ru];
          return (0, GK.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${Ku.x}px`,
              top: `${Ku.y}px`,
              "--item-dx": Eu.x - Ku.x + "px",
              "--item-dy": Eu.y - Ku.y + "px",
              "--item-delay": 2e3 + 160 * Ru + "ms",
              "--item-flight": "700ms"
            },
            children: (0, GK.jsx)(eK.c, {
              itemName: uu.dailyRewardItemName,
              amount: 0
            })
          }, uu.dailyRewardItemName)
        }))
      })
    }

    function NJ(uu, Ru) {
      const yu = -Math.PI / 2 + 1.25 * (uu / (Ru - 1) * 2 - 1),
        Eu = 70 + uu % 3 * 22;
      return {
        x: Math.cos(yu) * Eu,
        y: Math.sin(yu) * Eu * .7
      }
    }

    function XJ(uu) {
      let {
        origin: Ru,
        target: yu,
        count: Eu
      } = uu;
      const Ku = [];
      for (let Qu = 0; Qu < Eu; Qu++) {
        const uu = NJ(Qu, Eu);
        Ku.push((0, GK.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${Ru.x}px`,
            top: `${Ru.y}px`,
            "--coin-bx": `${uu.x}px`,
            "--coin-by": `${uu.y}px`,
            "--coin-dx": yu.x - Ru.x + "px",
            "--coin-dy": yu.y - Ru.y + "px",
            "--coin-delay": `${hy(Qu,Eu)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, GK.jsx)(eK.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, Qu))
      }
      return (0, GK.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: Ku
      })
    }

    function VJ(uu) {
      let {
        day: Ru
      } = uu;
      const yu = Du[Ru - 1];
      return (0, GK.jsxs)(GK.Fragment, {
        children: [(0, GK.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, GK.jsx)(eK.c, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, DK.g)(yu.dailyRewardCoins)]
        }), yu.dailyRewardItems.map((uu => (0, GK.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, GK.jsx)(eK.c, {
            itemName: uu.dailyRewardItemName,
            amount: 0
          }), "\xd7", uu.dailyRewardItemAmount]
        }, uu.dailyRewardItemName)))]
      })
    }

    function rJ(uu) {
      let {
        day: Ru
      } = uu;
      const yu = Iu(Ru);
      return (0, GK.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: Du.map(((uu, Eu) => {
          const Ku = Eu + 1;
          return (0, GK.jsxs)("li", {
            className: dK()("SkyblockDailyRewardTile", {
              Claimed: Ku < Ru && Ku !== yu,
              Today: Ku === Ru,
              Tomorrow: Ku === yu,
              Jackpot: Ku === Mu
            }),
            children: [(0, GK.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: Ku
            }), (0, GK.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, GK.jsx)(eK.c, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, DK.g)(uu.dailyRewardCoins)]
            }), uu.dailyRewardItems.map((uu => (0, GK.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, GK.jsx)(eK.c, {
                itemName: uu.dailyRewardItemName,
                amount: 0
              }), "\xd7", uu.dailyRewardItemAmount]
            }, uu.dailyRewardItemName)))]
          }, Ku)
        }))
      })
    }

    function BJ(uu) {
      let {
        view: Ru
      } = uu;
      const {
        t: yu
      } = (0, MK.E)(), Eu = (0, Au.useRef)(null), Ku = (0, Au.useRef)(null), [Qu, mu] = (0, Au.useState)(null);
      (0, Au.useLayoutEffect)((() => {
        var uu;
        const Ru = null === (uu = Eu.current) || void 0 === uu ? void 0 : uu.getBoundingClientRect();
        if (Ru) {
          var yu, Qu;
          const uu = Array.from(null !== (yu = null === (Qu = Ku.current) || void 0 === Qu ? void 0 : Qu.children) && void 0 !== yu ? yu : [], (uu => QJ(uu.getBoundingClientRect())));
          mu({
            origin: QJ(Ru),
            target: KJ(),
            itemOrigins: uu,
            itemTarget: mJ()
          })
        }
      }), []);
      const Ju = Iu(Ru.day),
        Nu = function(uu, Ru) {
          const [yu, Eu] = (0, Au.useState)((() => EJ() ? uu : 0));
          return (0, Au.useEffect)((() => {
            if (EJ()) return;
            const yu = performance.now();
            let Ku = 0;
            const Qu = mu => {
              const Ju = Math.min(Math.max((mu - yu) / Ru, 0), 1);
              Eu(Math.round(uu * (1 - (1 - Ju) ** 3))), Ju < 1 && (Ku = requestAnimationFrame(Qu))
            };
            return Ku = requestAnimationFrame(Qu), () => {
              cancelAnimationFrame(Ku)
            }
          }), [uu, Ru]), yu
        }(Ru.coins, 450);
      return (0, GK.jsxs)("div", {
        className: dK()("SkyblockDailyReward", {
          Jackpot: Ru.day === Mu
        }),
        style: {
          "--daily-duration": `${Ru.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, GK.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, GK.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, GK.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, GK.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: yu("skyblockGame:dailyRewardTitle")
            }), (0, GK.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: yu("skyblockGame:dailyRewardDay", {
                day: String(Ru.day)
              })
            })]
          }), (0, GK.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: Eu,
            children: [(0, GK.jsx)(eK.c, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, GK.jsxs)("span", {
              children: ["+", (0, DK.g)(Nu)]
            })]
          }), Ru.items.length > 0 && (0, GK.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: Ku,
            children: Ru.items.map((uu => (0, GK.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, GK.jsx)(eK.c, {
                itemName: uu.dailyRewardItemName,
                amount: 0
              }), "\xd7", uu.dailyRewardItemAmount]
            }, uu.dailyRewardItemName)))
          }), (0, GK.jsx)(rJ, {
            day: Ru.day
          }), (0, GK.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [yu("skyblockGame:dailyRewardComeBack"), (0, GK.jsx)(VJ, {
              day: Ju
            })]
          })]
        }), null !== Qu && (0, GK.jsx)(XJ, {
          origin: Qu.origin,
          target: Qu.target,
          count: Ru.flyingCoins
        }), null !== Qu && Qu.itemOrigins.length === Ru.items.length && (0, GK.jsx)(JJ, {
          items: Ru.items,
          origins: Qu.itemOrigins,
          target: Qu.itemTarget
        })]
      })
    }
    const xJ = (0, Au.memo)((function(uu) {
        let {
          controller: Ru
        } = uu;
        const yu = (0, IK.h)(Fy, Ru.getSnapshot());
        return yu ? (0, GK.jsx)(BJ, {
          view: yu
        }, yu.token) : null
      })),
      SJ = "Gold Coin";

    function pJ(uu) {
      return 650 + 220 * uu
    }

    function TJ(uu) {
      return {
        "--letter-delay": `${pJ(uu)}ms`,
        "--letter-land": `${pJ(uu)+300}ms`
      }
    }

    function WJ(uu) {
      let {
        letterCount: Ru
      } = uu;
      return (0, GK.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, GK.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, GK.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, GK.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: Ru
        }, ((uu, Ru) => (0, GK.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: TJ(Ru),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, Ru)))]
      })
    }

    function jJ(uu) {
      var Ru, yu, Eu;
      let {
        letter: Ku,
        index: Qu
      } = uu;
      const {
        t: mu
      } = (0, MK.E)(), Ju = null !== (Ru = null === (yu = Ku.items[0]) || void 0 === yu ? void 0 : yu.itemName) && void 0 !== Ru ? Ru : SJ;
      return (0, GK.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: TJ(Qu),
        children: [(0, GK.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, GK.jsx)(eK.c, {
            itemName: Ju,
            amount: 0
          })
        }), (0, GK.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: mu(Ku.reasonKey, null !== (Eu = Ku.reasonParams) && void 0 !== Eu ? Eu : void 0)
        }), (0, GK.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [Ku.coins > 0 && (0, GK.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, GK.jsx)(eK.c, {
              itemName: SJ,
              amount: 0
            }), "+", (0, DK.g)(Ku.coins)]
          }), Ku.items.map(((uu, Ru) => (0, GK.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, GK.jsx)(eK.c, {
              itemName: uu.itemName,
              amount: 0
            }), uu.label, " \xd7", uu.amount]
          }, Ru)))]
        })]
      })
    }

    function HJ(uu) {
      let {
        view: Ru
      } = uu;
      const {
        t: yu
      } = (0, MK.E)();
      return (0, GK.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${Ru.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${pJ(Ru.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, GK.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, GK.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, GK.jsx)(WJ, {
              letterCount: Ru.letters.length
            }), (0, GK.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: yu("skyblockGame:mailboxTitle")
            })]
          }), (0, GK.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: Ru.letters.map(((uu, Ru) => (0, GK.jsx)(jJ, {
              letter: uu,
              index: Ru
            }, Ru)))
          }), Ru.more > 0 && (0, GK.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: yu("skyblockGame:mailboxMore", {
              count: String(Ru.more)
            })
          })]
        })
      })
    }
    const dJ = (0, Au.memo)((function(uu) {
      let {
        controller: Ru
      } = uu;
      const yu = (0, IK.h)(iy, Ru.getSnapshot());
      return yu ? (0, GK.jsx)(HJ, {
        view: yu
      }, yu.token) : null
    }));

    function bJ(uu) {
      let {
        controller: Ru
      } = uu;
      const {
        t: yu
      } = (0, MK.E)(), Eu = (0, IK.h)(cE, Ru.getSnapshot());
      if (null === Eu) return null;
      const Ku = Eu.fullSet ? "empty" === Eu.fuelState ? {
        text: yu("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: yu("skyblockGame:magmawardHudFullSet", {
          worn: String(Eu.wornCount)
        }),
        tone: "partial"
      };
      return (0, GK.jsx)(CK.d, {
        placement: "statBars",
        children: (0, GK.jsxs)("div", {
          className: dK()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${Eu.fuelState}`, {
            "SkyblockMagmawardHud-partial": !Eu.fullSet,
            "SkyblockMagmawardHud-armed": Eu.fullSet && "empty" !== Eu.fuelState
          }),
          children: [null !== Eu.flare && (0, GK.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${Eu.flare}`
          }, `flare:${Eu.flareToken}`), (0, GK.jsx)("div", {
            className: dK()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: Eu.setLit
            }),
            children: Eu.pieces.map(((uu, Ru) => (0, GK.jsx)("div", {
              className: dK()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: uu.worn,
                SkyblockMagmawardPieceJustWorn: uu.justWorn
              }),
              children: (0, GK.jsx)(eK.c, {
                itemName: uu.itemName,
                amount: 0
              })
            }, `${Ru}:${uu.wornToken}`)))
          }, `pieces:${Eu.setLitToken}`), (0, GK.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, GK.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, GK.jsxs)("div", {
              className: dK()("SkyblockMagmawardFuelCounter", Eu.pulse && `SkyblockMagmawardFuelCounter-${Eu.pulse}`),
              children: [(0, GK.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, GK.jsx)(eK.c, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, GK.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: Eu.fuel
              })]
            }, `counter:${Eu.pulseToken}`), "burn" === Eu.pulse && (0, GK.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${Eu.pulseToken}`)]
          }), Ku && (0, GK.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${Ku.tone} SmallTextBold`,
            children: Ku.text
          })]
        })
      })
    }

    function CJ(uu) {
      let {
        controller: Ru
      } = uu;
      const {
        t: yu,
        selectedLanguage: Eu
      } = (0, MK.E)(), Ku = (0, IK.h)(zE, Ru.getSnapshot());
      return null === Ku ? null : (0, GK.jsx)(CK.d, {
        placement: "statBars",
        children: (0, GK.jsxs)("div", {
          className: dK()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: Ku.inRange
          }),
          style: {
            "--glowtide-colour": Ku.colour
          },
          "aria-label": yu("skyblockGame:glowtideChipLabel"),
          children: [(0, GK.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), Ku.inRange ? (0, GK.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: yu("skyblockGame:glowtideChipInRange")
          }, `call:${Ku.inRangeToken}`) : (0, GK.jsxs)(GK.Fragment, {
            children: [(0, GK.jsx)("div", {
              ref: Ru.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, GK.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: yu("skyblockGame:waypointDistance", {
                distance: Cu(Ku.distance, Eu.code)
              })
            })]
          })]
        })
      })
    }

    function kJ(uu) {
      let {
        controller: Ru
      } = uu;
      const {
        t: yu
      } = (0, MK.E)(), Eu = (0, IK.h)(wE, Ru.getSnapshot());
      return null === Eu ? null : (0, GK.jsx)(CK.d, {
        placement: "statBars",
        children: (0, GK.jsxs)("div", {
          className: dK()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: Eu.full
          }),
          "aria-label": yu("skyblockGame:glowMeterLabel", {
            fill: String(Eu.fill),
            Nr: String(Eu.Nr)
          }),
          children: [Eu.burst && (0, GK.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${Eu.burstToken}`), (0, GK.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, GK.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${Eu.ratio})`
              }
            }), Eu.gained && (0, GK.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${Eu.gainToken}`), Eu.full && Array.from({
              length: 5
            }, ((uu, Ru) => (0, GK.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, Ru)))]
          }), Eu.full && Eu.rares.map((uu => (0, GK.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, GK.jsx)(eK.c, {
              itemName: uu,
              amount: 0
            })
          }, uu))), Eu.ready && (0, GK.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, GK.jsx)("span", {
              children: yu("skyblockGame:glowMeterReady")
            })
          }, `ready:${Eu.fullToken}`)]
        })
      })
    }

    function eJ(uu) {
      let {
        controller: Ru
      } = uu;
      const {
        t: yu
      } = (0, MK.E)(), Eu = (0, IK.h)(hE, Ru.getSnapshot());
      if (null === Eu) return null;
      const Ku = "waiting" === Eu.phase,
        Qu = {
          animationDuration: `${Eu.waitMs}ms`,
          animationDelay: -Eu.elapsedMs + "ms"
        },
        mu = Ku ? void 0 : {
          animationDuration: `${Eu.waitMs}ms`
        };
      return (0, GK.jsxs)("div", {
        className: Ku ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [Ku && (0, GK.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((uu, Ru) => (0, GK.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, Ru))), (0, GK.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: Qu
          }), (0, GK.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, GK.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, GK.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: Qu
            })]
          }), (0, GK.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, GK.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: mu,
          children: yu(Eu.line)
        }, Eu.lineIndex)]
      }, Eu.token)
    }

    function AJ(uu) {
      let {
        chart: Ru,
        showHere: yu,
        className: Eu
      } = uu;
      return (0, GK.jsx)("div", {
        className: dK()("SkyblockTideChartGrid", Eu, null !== Ru.pictureName && "Complete"),
        "aria-hidden": "true",
        children: Ru.cells.map(((uu, Eu) => {
          const Ku = 0 !== (Ru.pulseCells & 1 << Eu),
            Qu = Ru.castCell === Eu;
          return (0, GK.jsx)("span", {
            className: dK()("SkyblockTideChartCell", `Cell-${uu}`, Ku && "Pulse", Qu && "Cast", yu && Ru.hereCell === Eu && "Here")
          }, `${Eu}:${Ku?`p${Ru.pulseToken}`:""}:${Qu?`c${Ru.castToken}`:""}`)
        }))
      })
    }

    function DJ(uu) {
      let {
        controller: Ru
      } = uu;
      const yu = (0, IK.h)(iE, Ru.getSnapshot()),
        {
          t: Eu
        } = (0, MK.E)(),
        Ku = yu.chip;
      if (!yu.enabled || null === Ku) return null;
      const Qu = Eu("skyblockGame:tideChartsChipLabel", {
        island: Ku.islandName,
        lit: String(Ku.lit),
        ink: String(Ku.ink)
      });
      return (0, GK.jsx)(CK.d, {
        placement: "statBars",
        children: (0, GK.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: dK()("SkyblockTideChartsChip", yu.open && "Open", null !== Ku.pictureName && "Complete"),
          "aria-label": Qu,
          title: Qu,
          onMouseDown: uu => {
            uu.preventDefault()
          },
          onClick: Ru.toggle,
          children: [(0, GK.jsx)(AJ, {
            chart: Ku,
            showHere: !1,
            className: "Mini"
          }), (0, GK.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [Ku.lit, "/", Ku.ink]
          })]
        })
      })
    }

    function MJ(uu) {
      let {
        controller: Ru
      } = uu;
      const yu = (0, IK.h)(iE, Ru.getSnapshot()),
        {
          t: Eu
        } = (0, MK.E)(),
        Ku = wK(),
        Qu = yu.card;
      return yu.enabled && null !== Qu ? (0, GK.jsx)(LK.e, {
        show: yu.open,
        close: Ru.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, GK.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: Ku,
          onKeyDown: FK,
          children: [(0, GK.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, GK.jsxs)("div", {
              children: [(0, GK.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: Eu("skyblockGame:tideChartsTitle")
              }), (0, GK.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: Eu("skyblockGame:tideChartsIntro")
              })]
            }), (0, GK.jsx)(zK.h, {
              padIgnore: !0,
              ariaLabel: Eu("skyblockGame:tideChartsClose"),
              onClick: Ru.dismiss
            })]
          }), yu.tabs.length > 1 && (0, GK.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": Eu("skyblockGame:tideChartsIslands"),
            children: yu.tabs.map((uu => (0, GK.jsx)("button", {
              type: "button",
              className: dK()("SkyblockTideChartsTab", uu.selected && "Selected"),
              "aria-pressed": uu.selected,
              onClick: () => {
                Ru.cB(uu.island)
              },
              children: uu.name
            }, uu.island)))
          }), (0, GK.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, GK.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": Qu.gridLabel,
              children: (0, GK.jsx)(AJ, {
                chart: Qu,
                showHere: !0,
                className: "Large"
              })
            }), (0, GK.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, GK.jsx)("h3", {
                children: Qu.islandName
              }), (0, GK.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: Qu.litText
              }), null === Qu.pictureName ? (0, GK.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: Eu("skyblockGame:tideChartsPictureHidden")
              }) : (0, GK.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: Eu("skyblockGame:tideChartsPictureRevealed", {
                  picture: Qu.pictureName
                })
              }, Qu.pictureName), (0, GK.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, GK.jsxs)("li", {
                  children: [(0, GK.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), Eu("skyblockGame:tideChartsLegendLit")]
                }), (0, GK.jsxs)("li", {
                  children: [(0, GK.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), Eu("skyblockGame:tideChartsLegendClear")]
                }), null !== Qu.hereCell && (0, GK.jsxs)("li", {
                  children: [(0, GK.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), Eu("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, GK.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, GK.jsx)("span", {
                  children: yu.turnsText
                }), (0, GK.jsx)("span", {
                  children: yu.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function IJ(uu) {
      var Ru;
      let {
        controller: yu
      } = uu;
      const {
        selectedLanguage: Eu
      } = (0, MK.E)(), Ku = Eu.code;
      (0, Au.useEffect)((() => {
        yu.setTranslator(((uu, Ru) => (0, MK.w)(Ku, uu, Ru)), Ku, ((uu, Ru) => (0, MK.q)(Ku, uu, Ru)))
      }), [yu, Ku]);
      const Qu = (0, IK.h)(Bu, yu.map.getSnapshot()),
        {
          openInGameMenuName: mu
        } = (0, bK.j)(["openInGameMenuName"]);
      return (0, GK.jsxs)(GK.Fragment, {
        children: [(0, GK.jsx)(uJ, {
          controller: yu.quests,
          display: yu.navigation.display
        }), Qu.enabled && !mu && (0, GK.jsx)(yQ, {
          controller: yu.navigation
        }), (0, GK.jsx)(UK, {
          controller: yu,
          minimap: Qu.enabled && (null === (Ru = Qu.presentation) || void 0 === Ru ? void 0 : Ru.minimap) && (0, GK.jsx)(RQ, {
            view: Qu.presentation.minimap,
            navigation: yu.navigation,
            controller: yu.map
          }),
          children: (0, GK.jsx)(rQ, {
            controller: yu.quests,
            surface: "hud"
          })
        }), (0, GK.jsx)(Om, {
          controller: yu.navigation
        }), (0, GK.jsx)(yJ, {
          controller: yu.portalTransit
        }), (0, GK.jsx)(xJ, {
          controller: yu.dailyReward
        }), (0, GK.jsx)(dJ, {
          controller: yu.mailbox
        }), (0, GK.jsx)(bJ, {
          controller: yu.magmaward
        }), (0, GK.jsx)(CJ, {
          controller: yu.glowtide
        }), (0, GK.jsx)(rm, {
          controller: yu.passage
        }), (0, GK.jsx)(DJ, {
          controller: yu.tideCharts
        }), (0, GK.jsx)(kJ, {
          controller: yu.glowMeter
        }), (0, GK.jsx)(Cm, {
          controller: yu.reachLog
        }), (0, GK.jsx)(eJ, {
          controller: yu.hushWait
        }), (0, GK.jsx)(jm, {
          controller: yu.lampLight
        }), (0, GK.jsx)(EQ, {
          controller: yu.skills,
          surface: "hud"
        })]
      })
    }

    function GJ(uu) {
      let {
        controller: Ru
      } = uu;
      return (0, GK.jsxs)(GK.Fragment, {
        children: [(0, GK.jsx)(uQ, {
          controller: Ru.map,
          navigation: Ru.navigation
        }), (0, GK.jsx)(EQ, {
          controller: Ru.skills,
          surface: "menu"
        }), (0, GK.jsx)(rQ, {
          controller: Ru.quests,
          surface: "menu"
        }), (0, GK.jsx)(iQ, {
          controller: Ru.dungeons
        }), (0, GK.jsx)(qQ, {
          controller: Ru.collections
        }), (0, GK.jsx)(aQ, {
          controller: Ru.questGraph
        }), (0, GK.jsx)(Em, {
          controller: Ru.forge
        }), (0, GK.jsx)(Xm, {
          controller: Ru.smuggler
        }), (0, GK.jsx)(dm, {
          controller: Ru.keepersChair,
          lampLight: Ru.lampLight
        }), (0, GK.jsx)(Pm, {
          controller: Ru.reachLog,
          regulars: Ru.regulars,
          hiddenWaters: Ru.hiddenWaters
        }), (0, GK.jsx)(Dm, {
          controller: Ru.regulars
        }), (0, GK.jsx)(xm, {
          controller: Ru.passage
        }), (0, GK.jsx)(MJ, {
          controller: Ru.tideCharts
        }), (0, GK.jsx)(om, {
          controller: Ru.dialogue
        }), (0, GK.jsx)(qm, {
          controller: Ru.autographs
        })]
      })
    }
    var UJ = yu(36549);
    const nJ = uE + JE;

    function sJ(uu, Ru, yu, Eu, Ku) {
      const Qu = [],
        mu = [],
        Ju = yu => {
          const Eu = uu.playSound(Ru, yu.sound, yu.volume, yu.rate);
          Eu && (mu.push(Eu), void 0 !== yu.cutAfter && Qu.push(setTimeout((() => {
            Eu.fade(Eu.getVolume(), 0, 300)
          }), yu.cutAfter)))
        };
      for (const Nu of function(uu, Ru) {
          const yu = [{
            sound: "rpgKnifeSlice1",
            beat: uE,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: uE,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: uE,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: uE,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: uE,
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
            sound: (0, UJ.d)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: nJ + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, UJ.d)("bigDrumSwish"),
            beat: nJ + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: nJ + 60,
            lead: 180,
            volume: .5 + .06 * uu,
            rate: .82 + .07 * uu
          }];
          return uu >= 4 && yu.push({
            sound: "exp_levelup",
            beat: nJ + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), Ru && yu.push({
            sound: "trumpetFlare",
            beat: nJ + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), yu.push({
            sound: "harp_pling",
            beat: RE,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), yu
        }(yu, Eu)) Ku ? Qu.push(setTimeout((() => {
        Ju(Nu)
      }), Math.max(0, Nu.beat - Nu.lead / Nu.rate))) : Nu.beat !== uE && "magicAccent2" !== Nu.sound && "trumpetFlare" !== Nu.sound || Ju(Nu);
      return () => {
        for (const uu of Qu) clearTimeout(uu);
        for (const uu of mu) uu.fade(uu.getVolume(), 0, 120)
      }
    }
    class tJ {
      constructor(uu) {
        this.deps = uu, this.pending = new Map, this.localHook = null
      }
      hookWaiting(uu, Ru) {
        this.pending.delete(uu);
        const yu = this.deps.now();
        if (null === Ru) {
          var Eu;
          if ((null === (Eu = this.localHook) || void 0 === Eu ? void 0 : Eu.hookId) === uu) {
            const uu = yu >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(uu)
          }
          return
        }
        const Ku = yu + Ru;
        this.settle(uu, Ku) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(uu, {
          untilMs: yu + 1e3,
          biteAtMs: Ku
        }))
      }
      getLocalHook() {
        var uu, Ru;
        return null !== (uu = null === (Ru = this.localHook) || void 0 === Ru ? void 0 : Ru.hookId) && void 0 !== uu ? uu : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const uu = this.deps.now();
        for (const [Ru, {
            untilMs: yu,
            biteAtMs: Eu
          }] of this.pending)(this.settle(Ru, Eu) || uu > yu) && this.pending.delete(Ru)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(uu, Ru) {
        const yu = this.deps.getLineOwner(uu);
        if (null === yu) return !1;
        if (!this.deps.isLocalPlayer(yu)) return !0;
        if (this.localHook = {
            hookId: uu,
            biteAtMs: Ru
          }, !this.deps.isHushWaiting()) {
          const [Ru, yu] = this.deps.getHookPosition(uu);
          this.deps.onCastLanded(Ru, yu)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var lJ = yu(4053);
    const gJ = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      cJ = {
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
    class LJ {
      constructor(uu) {
        this.deps = uu, this.tell = null
      }
      receiveTell(uu) {
        let {
          biteTellTier: Ru
        } = uu;
        this.tell = {
          tier: Ru,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(uu) {
        const Ru = this.tell;
        if (this.tell = null, !uu) return;
        const yu = null !== Ru && this.deps.now() - Ru.atMs <= 3e3 ? Ru.tier : 0;
        this.deps.vibrate(gJ[yu])
      }
      burstAtHook() {
        const uu = this.tell,
          Ru = this.deps.getLocalHookPosition();
        null === uu || uu.burst || null === Ru || (uu.burst = !0, this.deps.playParticles(function(uu, Ru) {
          let [yu, Eu, Ku] = Ru;
          const {
            count: Qu,
            rise: mu,
            colour: Ju
          } = cJ[uu], [Nu, Xu, Vu] = Ju;
          return {
            texture: "glint",
            pos1: [yu - .3, Eu, Ku - .3],
            pos2: [yu + .3, Eu + .2, Ku + .3],
            dir1: [-.6, mu, -.6],
            dir2: [.6, 1.4 * mu, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: Qu,
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
              minColor: [Nu, Xu, Vu, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [Nu, Xu, Vu, 0],
              maxColor: [Nu, Xu, Vu, 0]
            }],
            blendMode: lJ.g.Add,
            hideDist: 48
          }
        }(uu.tier, Ru)))
      }
    }
    var zJ = yu(1224),
      FJ = yu(1862),
      wJ = yu(47);

    function ZJ(uu, Ru) {
      return [{
        timeFraction: 0,
        minColor: [255 * uu[0], 255 * uu[1], 255 * uu[2], 1],
        maxColor: [255 * Ru[0], 255 * Ru[1], 255 * Ru[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const hJ = [0, 0, 0],
      PJ = {
        texture: "glint",
        mipmaps: !1,
        Nr: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: hJ,
        dir2: hJ,
        blendMode: lJ.g.OneOne
      },
      iJ = {
        ...PJ,
        colorGradients: ZJ([1, .88, .38], [1, .65, .15])
      },
      YJ = {
        ...PJ,
        colorGradients: ZJ([.55, .95, 1], [.9, 1, 1])
      },
      oJ = [.5, .5, .5],
      qJ = {
        texture: "glint",
        mipmaps: !1,
        Nr: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: ZJ([1, .12, .12], [1, .35, .2]),
        blendMode: lJ.g.OneOne
      };
    class OJ {
      constructor() {
        this.drops = new Map
      }
      SS(uu, Ru) {
        if ("overflowFlash" === Ru.kind) {
          const [yu, Eu, Ku] = Ru.position, Qu = uu.createParticles(qJ, {
            pos: [yu, Eu, Ku],
            half: oJ
          });
          return Qu.emit(18), void Qu.stop()
        }
        this.drops.has(Ru.itemId) || this.drops.set(Ru.itemId, {
          owner: Ru.owner,
          cosmetic: Ru.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      sr(uu) {
        if (0 === this.drops.size) return;
        const Ru = performance.now(),
          yu = uu.getCameraPosition();
        let Eu = 0;
        for (const Qu of this.drops.values()) null !== Qu.particles && Eu++;
        for (const [Qu, mu] of this.drops) {
          const Ju = uu.getPositionView(Qu);
          if (null === Ju) {
            var Ku;
            if (mu.seen || Ru - mu.markedAt > 5e3) null !== mu.particles && Eu--, null === (Ku = mu.particles) || void 0 === Ku || Ku.stop(), this.drops.delete(Qu);
            continue
          }
          mu.cosmetic || !uu.isLocalPlayer(mu.owner) || mu.pickupDelayCleared || (uu.clearPickupDelay(Qu), mu.pickupDelayCleared = !0);
          const Nu = mu.lastPosition,
            Xu = mu.seen && (Ju[0] - Nu[0]) ** 2 + (Ju[1] - Nu[1]) ** 2 + (Ju[2] - Nu[2]) ** 2 > 4e-4,
            Vu = (Ju[0] - yu[0]) ** 2 + (Ju[1] - yu[1]) ** 2 + (Ju[2] - yu[2]) ** 2 < 2025;
          mu.seen = !0, Nu[0] = Ju[0], Nu[1] = Ju[1], Nu[2] = Ju[2], Xu && (mu.lastMovingAt = Ru), null !== mu.particles && (!Vu || Ru - mu.lastMovingAt > 500) && (mu.particles.stop(), mu.particles = null, Eu--), Xu && Vu && null === mu.particles && Eu < 32 && (mu.particles = uu.createParticles(mu.cosmetic ? YJ : iJ, {
            pos: Ju
          }), Eu++), null !== mu.particles && (mu.particles.moveTo(Ju), mu.particles.setEmitRate(Xu ? 12 : 0)), !Xu && null === mu.particles && Ru - Math.max(mu.lastMovingAt, mu.markedAt) > 2e3 && this.drops.delete(Qu)
        }
      }
      dispose() {
        for (const Ru of this.drops.values()) {
          var uu;
          null === (uu = Ru.particles) || void 0 === uu || uu.stop()
        }
        this.drops.clear()
      }
    }
    var vJ = yu(212);
    const aJ = vJ.f.UW * vJ.f.playerEyeToHeightRatio;
    class fJ {
      constructor(uu) {
        this.host = uu, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      SS(uu) {
        this.lava = uu, this.nextUpdateAt = 0
      }
      sr() {
        var uu;
        const Ru = this.host.now();
        if (Ru < this.nextUpdateAt) return;
        this.nextUpdateAt = Ru + 250;
        const yu = this.host.playerPosition(),
          Eu = yu && this.findNearest([yu[0], yu[1] + aJ, yu[2]]);
        if (!Eu || Eu.distance >= 40) return void this.stop();
        const Ku = .5 * Math.min(1, (40 - Eu.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(Ku) : this.loop = this.host.play("lavaFlow", Ku, Eu.position, 40 + aJ, 9, !0), null === (uu = this.loop) || void 0 === uu || uu.setPosition(Eu.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var uu;
        null === (uu = this.loop) || void 0 === uu || uu.stop(), this.loop = null
      }
      findNearest(uu) {
        let Ru = -1,
          yu = 1 / 0;
        for (let Eu = 0; Eu < this.lava.length; Eu += 3) {
          const Ku = this.lava[Eu] - uu[0],
            Qu = this.lava[Eu + 1] - uu[1],
            mu = this.lava[Eu + 2] - uu[2],
            Ju = Ku * Ku + Qu * Qu + mu * mu;
          Ju < yu && (yu = Ju, Ru = Eu)
        }
        return Ru < 0 ? null : {
          position: [this.lava[Ru], this.lava[Ru + 1], this.lava[Ru + 2]],
          distance: Math.sqrt(yu)
        }
      }
    }
    var uN = yu(1836),
      RN = yu(38405);
    const yN = {
      "Grey Portal": "Gray"
    };
    for (const NN of Ku.Tc) yN[`${NN} Portal`] = NN;
    const EN = Object.keys(yN),
      KN = Object.fromEntries(EN.map((uu => [uu, (0, Ku.Z)(Ku.L[`${(0,Ku.xe)(yN[uu])}Team`])])));
    Object.fromEntries(EN.map((uu => [uu, Ku.L[`${(0,Ku.xe)(yN[uu])}UiText`]])));
    class QN {
      constructor(uu, Ru) {
        this.presentation = uu, this.portal = Ru, this.unlocked = void 0
      }
      SS(uu) {
        const Ru = !1 === this.unlocked && uu;
        this.unlocked = uu, this.sr();
        const {
          min: yu,
          max: Eu,
          unlockedBlock: Ku
        } = this.portal;
        if (Ru && this.presentation.hasChunk(...yu)) {
          const [uu, Ru, Qu] = KN[Ku];
          this.presentation.playParticles({
            pos1: [...yu],
            pos2: Eu.map((uu => uu + 1)),
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
              minColor: [uu, Ru, Qu, 1],
              maxColor: [Math.min(255, uu + 55), Math.min(255, Ru + 55), Math.min(255, Qu + 90), 1]
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
      sr() {
        var uu;
        const Ru = this.unlocked ? this.portal.unlockedBlock : null !== (uu = this.portal.lockedBlock) && void 0 !== uu ? uu : "Light Gray Portal",
          {
            min: yu,
            max: Eu
          } = this.portal;
        for (let Ku = yu[0]; Ku <= Eu[0]; Ku++)
          for (let uu = yu[1]; uu <= Eu[1]; uu++)
            for (let Qu = yu[2]; Qu <= Eu[2]; Qu++) this.presentation.hasChunk(Ku, uu, Qu) && this.presentation.OW(Ku, uu, Qu) !== Ru && this.presentation.sA(Ku, uu, Qu, Ru)
      }
    }
    const mN = {
        farming_1: {
          raises: uu => "NPC" === uu.type && "chef" === uu.variation,
          rise: .4
        },
        fishing_1: {
          raises: uu => "Draugr Warper" === uu.type,
          rise: .4
        }
      },
      JN = (uu, Ru, yu, Qu) => {
        let {
          localPlayerId: mu
        } = Qu;
        const Ju = new jK({
          translate: (uu, Ru) => (0, MK.w)(zJ.f.get().getCurrentLanguageCode(), uu, Ru),
          translateWithIcons: (uu, Ru) => (0, MK.q)(zJ.f.get().getCurrentLanguageCode(), uu, Ru),
          setMenuOpen: uu => {
            uu ? (0, Yu.q)() : (0, Yu.f)()
          },
          dismissMenu: Yu.i,
          publishSkills: uu => {
            ou.k.Op(Qy, uu, !0)
          },
          publishQuests: uu => {
            ou.k.Op(Xy, uu, !0)
          },
          publishQuestNotification: uu => {
            ou.k.Op(Vy, uu, !0)
          },
          publishDungeons: uu => {
            ou.k.Op(xy, uu, !0)
          },
          publishCollections: uu => {
            ou.k.Op(ly, uu, !0)
          },
          publishMap: uu => {
            ou.k.Op(Bu, uu, !0)
          },
          publishHud: uu => {
            ou.k.Op(pK, uu, !0)
          },
          publishPortalTransit: uu => {
            ou.k.Op(cy, uu, !0)
          },
          isLoadingScreenUp: () => bK.d.get("loadingOverlayVisible"),
          publishDailyReward: uu => {
            ou.k.Op(Fy, uu, !0)
          },
          publishMailbox: uu => {
            ou.k.Op(iy, uu, !0)
          },
          publishQuestGraph: uu => {
            ou.k.Op(oy, uu, !0)
          },
          publishForge: uu => {
            ou.k.Op(SE, uu, !0)
          },
          publishSmuggler: uu => {
            ou.k.Op(WE, uu, !0)
          },
          publishKeepersChair: uu => {
            ou.k.Op(DE, uu, !0)
          },
          publishReachLog: uu => {
            ou.k.Op(IE, uu, !0)
          },
          publishLampLight: uu => {
            ou.k.Op(lE, uu, !0)
          },
          publishMagmaward: uu => {
            ou.k.Op(cE, uu, !0)
          },
          publishGlowtide: uu => {
            ou.k.Op(zE, uu, !0)
          },
          publishGlowMeter: uu => {
            ou.k.Op(wE, uu, !0)
          },
          publishHushWait: uu => {
            ou.k.Op(hE, uu, !0)
          },
          publishPassage: uu => {
            ou.k.Op(dE, uu, !0)
          },
          publishTideCharts: uu => {
            ou.k.Op(iE, uu, !0)
          },
          publishRegulars: uu => {
            ou.k.Op(uK, uu, !0)
          },
          publishHiddenWaters: uu => {
            ou.k.Op(QK, uu, !0)
          },
          publishDialogue: uu => {
            ou.k.Op(JK, uu, !0)
          },
          publishAutographs: uu => {
            ou.k.Op(BK, uu, !0)
          },
          onDailyRewardStarted: uu => {
            nu.playSound(mu, uu.day === Mu ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (uu, Ru) => {
            nu.playSound(mu, "exp_collect", .35, 1 + .6 * uu / (Ru - 1)), ou.k.Op(wy, uu === Ru - 1)
          },
          onDailyRewardItemLanded: uu => {
            nu.playSound(mu, "pickUp", .6, 1 + .15 * uu)
          },
          onMailboxStarted: () => {
            nu.playSound(mu, "rpgMetalClick", .6, 1), nu.playSound(mu, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            nu.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: wJ.j,
          requestTracking: uu => {
            nu.sendCommand(`quests track ${uu}`)
          },
          requestDungeonEnter: (uu, Ru) => {
            nu.sendCommand(`dungeonEnter ${uu} ${Ru}`)
          },
          requestQuestJump: uu => {
            nu.sendCommand(`${tu} jump ${uu}`)
          },
          requestQuestArrive: (uu, Ru) => {
            const yu = `${tu} arrive ${uu}`;
            nu.sendCommand(Ru ? `${yu} complete` : yu)
          },
          requestForge: uu => {
            let {
              blade: Ru,
              guard: yu,
              handle: Eu
            } = uu;
            nu.sendCommand(`forge ${Ru} ${yu} ${Eu}`)
          },
          requestDialogue: () => {
            nu.sendCommand("quests dialogue")
          },
          requestSmuggle: (uu, Ru) => {
            nu.sendCommand(`smuggle ${uu} ${Ru}`)
          },
          requestKeepersChairAim: uu => {
            nu.sendCommand(`keeperschair-aim ${uu}`)
          },
          requestReachLogOpen: () => {
            nu.sendCommand("reachlog-open")
          },
          requestLampLight: uu => {
            nu.sendCommand(`${uu}`)
          },
          requestTravel: uu => {
            nu.sendCommand(`map travel ${uu.kind} ${uu.id} ${uu.requestId}`)
          }
        });
        let Nu, Xu, Vu, ru, xu, Su, pu, du, bu, Cu, ku, Du, Iu;
        const Uu = new OJ;
        let nu, su = null;
        const lu = mN[null !== yu && void 0 !== yu ? yu : ""],
          zu = (uu, Ru) => {
            null !== lu && void 0 !== lu && lu.raises(Ru) && nu.setNametagOffset(uu, lu.rise)
          },
          Zu = new LJ({
            getLocalHookPosition: () => {
              const uu = hu.getLocalHook();
              return null !== uu && nu.checkValid(uu) ? nu.mH(uu) : null
            },
            playParticles: uu => {
              nu.playParticleEffect(uu)
            },
            vibrate: uu => {
              qu.d.play("fishBite", uu)
            },
            now: () => performance.now()
          }),
          hu = new tJ({
            getLineOwner: uu => nu.checkValid(uu) ? nu.getLineOwner(uu) : null,
            isLocalPlayer: uu => nu.isLocalPlayer(uu),
            getHookPosition: uu => {
              const [Ru, , yu] = nu.mH(uu);
              return [Ru, yu]
            },
            isHushWaiting: () => {
              var uu;
              return "waiting" === (null === (uu = Ju.hushWait.getSnapshot()) || void 0 === uu ? void 0 : uu.phase)
            },
            onCastLanded: (uu, Ru) => {
              Ju.tideCharts.castLanded(uu, Ru)
            },
            onLocalHookSettled: () => {
              Zu.onLocalHookSettled()
            },
            onLocalWaitEnded: uu => {
              Zu.onLocalWaitEnded(uu)
            },
            now: () => performance.now()
          }),
          Ou = new fJ({
            now: () => performance.now(),
            playerPosition: () => nu.checkValid(mu) ? nu.mH(mu) : null,
            play: (uu, Ru, yu, Eu, Ku, Qu) => nu.playSound(mu, uu, Ru, 1, {
              GK: yu,
              maxHearDist: Eu,
              refDistance: Ku
            }, Qu)
          }),
          vu = new Map;
        let au;
        return {
          onCreate: uu => {
            if (nu = uu, su = new RN.SkyblockEntityFacing(uu, lu ? zu : null), Ju.portalTransit.resumeArrival(null !== yu && void 0 !== yu ? yu : null), (null !== yu && void 0 !== yu ? yu : Eu) === Eu) {
              let uu = -1 / 0;
              au = ou.k.subscribe("toggleMenu", (Ru => {
                const yu = performance.now();
                "inventory|Workbench" !== Ru || "cross_to_hub" !== Ju.quests.getTrackedQuestId() || yu - uu < 1e4 || (uu = yu, nu.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [Eu, Ku] of Object.entries(null !== (Ru = gu[null !== yu && void 0 !== yu ? yu : ""]) && void 0 !== Ru ? Ru : {})) {
              var Ru;
              vu.set(Eu, new QN({
                hasChunk: (Ru, yu, Eu) => uu.isBlockInLoadedChunk(Ru, yu, Eu),
                OW: (Ru, yu, Eu) => uu.blockIdToBlockName(uu.getBlockId(Ru, yu, Eu)),
                sA: (Ru, yu, Eu, Ku) => {
                  uu.sA(Ru, yu, Eu, Ku)
                },
                playParticles: Ru => {
                  uu.playParticleEffect(Ru)
                }
              }, Ku))
            }
            Iu = (0, uN.f)((uu => function(uu) {
              return Object.hasOwn(hR, uu) || uu.startsWith("npc_")
            }(uu) ? iR(uu) : null)), Ju.resolveItemName = (Ru, yu) => {
              const Eu = uu.getItemStat(mu, Ru, "displayName");
              return Eu && "object" === typeof Eu && "translationKey" in Eu ? yu(Eu.translationKey, (0, MK.o)(Eu.params, FJ.d.shown)) : "string" === typeof Eu ? yu(Eu) : Ru
            }, Ju.quests.notifications.onShown = uu => {
              "quest" === uu ? nu.playSound(mu, "magicAccent1", 1, 1) : "skillLevel" === uu ? nu.playSound(mu, "magicAccent1", 1, .6) : "landmark" === uu ? nu.playSound(mu, "trumpetFlare", 1, .6) : "npcNote" === uu ? nu.playSound(mu, "magicAccent2", .8, 1.1) : "started" === uu ? nu.playSound(mu, (0, UJ.d)("bigDrumSwish"), 1, 1) : nu.playSound(mu, (0, UJ.d)("rpgHandleSmallLeather"), 1, 1)
            }, Ju.forge.onPartSelected = () => {
              nu.playSound(mu, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, Ju.forge.onForgeStarted = (Ru, yu, Eu) => sJ(uu, mu, Ru, yu, Eu), Ju.smuggler.onBought = () => {
              nu.playSound(mu, (0, UJ.d)("rpgHandleSmallLeather"), 1, 1), nu.playSound(mu, "chestOpen", .6, 1)
            }, Ju.compass.register(new Tu(Ju.map, !0)), Ju.compass.register(new Tu(Ju.map, !1)), Ju.compass.register(new ju(Ju.map)), Ju.compass.register(new Hu((() => Ju.quests.getSnapshot().compassTarget)));
            for (const yu of ["enemy", "npc"]) Ju.compass.register(new Wu(Ju.map, yu, (Ru => uu.checkValid(Ru) ? uu.mH(Ru) : void 0), (Ru => uu.isAlive(Ru))))
          },
          onAfterRender: (uu, Ru) => {
            const yu = nu.checkValid(mu) ? nu.mH(mu) : null;
            Ju.navigation.afterRender(yu, performance.now(), Ru), Ju.glowtide.afterRender(yu, Ru.cameraHeading), Ju.tideCharts.afterRender(yu), hu.afterRender()
          },
          onClose: () => {
            var uu, Ru, yu, Eu, Ku, Qu, mu, Bu, Su, Tu, Wu, ju, Hu, eu, Au;
            au && ou.k.unsubscribe(au), null === (uu = Iu) || void 0 === uu || uu(), Uu.dispose(), Ou.dispose(), null === (Ru = su) || void 0 === Ru || Ru.dispose(), hu.dispose(), Ju.dispose(), null === (yu = Nu) || void 0 === yu || yu(), null === (Eu = Xu) || void 0 === Eu || Eu(), null === (Ku = Vu) || void 0 === Ku || Ku(), null === (Qu = ru) || void 0 === Qu || Qu(), null === (mu = xu) || void 0 === mu || mu(), null === (Bu = pu) || void 0 === Bu || Bu(), null === (Su = undefined) || void 0 === Su || Su(), null === (Tu = du) || void 0 === Tu || Tu(), null === (Wu = bu) || void 0 === Wu || Wu(), null === (ju = Cu) || void 0 === ju || ju(), null === (Hu = ku) || void 0 === Hu || Hu(), null === (eu = undefined) || void 0 === eu || eu(), null === (Au = Du) || void 0 === Au || Au()
          },
          onPlayerChangeBlock: (uu, Ru, Eu, Qu, Nu, Xu) => {
            if (uu === mu && "Air" === Xu) {
              const uu = nu.getClientOption(mu, "creative");
              Ju.skills.predictBlock([Ru, Eu, Qu], Nu, uu);
              const Xu = function(uu, Ru) {
                  if ("hub" === Ru || "farming_1" === Ru || "mining_1" === Ru) return !Fu.has(uu) || "hub" !== Ru && "mining_1" !== Ru ? Object.hasOwn(Lu, uu) ? Lu[uu] : void 0 : cu
                }(Nu, yu),
                Vu = ("hub" === yu || "mining_1" === yu) && (Ku.zd.some((uu => uu === Nu)) || Object.hasOwn(wu, Nu) || "mining_1" === yu && "Block of Coal" === Nu);
              uu || void 0 === Xu && !Vu || nu.sA(Ru, Eu, Qu, null !== Xu && void 0 !== Xu ? Xu : cu)
            }
          },
          onPlayerAttackEntity: (uu, Ru) => {
            if (uu !== mu || "Player" !== nu.getEntityType(Ru)) return;
            const [yu, Eu, Ku] = nu.mH(Ru);
            nu.burstParticlePreset("critical", [yu, Eu + 1, Ku], 10)
          },
          onChangeBlockFail: uu => {
            for (const {
                sQ: Ru
              }
              of uu) Ju.skills.rejectBlock(Ru)
          },
          onReceivedMessageFromServer: (uu, Ru) => {
            if ("skyblockGatedPortal" === uu) {
              var yu;
              const [uu, Eu] = Ru;
              return void(null === (yu = vu.get(uu)) || void 0 === yu || yu.SS(Eu))
            }
            if ("skyblockDailyReward" === uu) return void Ju.dailyReward.SS(Ru);
            if ("skyblockMailbox" === uu) return void Ju.mailbox.SS(Ru);
            if ("skyblockPortalTransit" === uu) return void Ju.portalTransit.SS(Ru);
            if ("skyblockLoot" === uu) return void Uu.SS(nu, Ru);
            if ("skyblockLava" === uu) return void Ou.SS(Ru);
            if ("skyblockForge" === uu) return void Ju.forge.SS(Ru);
            if ("skyblockMagmaward" === uu) return void Ju.magmaward.SS(Ru);
            if ("skyblockGlowtide" === uu) return void Ju.glowtide.SS(Ru);
            if ("skyblockGlowMeter" === uu) return void Ju.glowMeter.SS(Ru);
            if ("skyblockHushWait" === uu) return void Ju.hushWait.SS(Ru);
            if ("skyblockPassage" === uu) {
              const uu = Ru;
              return Ju.passage.SS(uu), Ju.reachLog.receivePassagePhase(uu.passagePhase), Cu ??= (0, eu.u)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: Ju.passage.show
              }), void Ju.keepersChair.receivePassage({
                keepersChairPassagePhase: uu.passagePhase,
                keepersChairPassageNextPhase: uu.passageNextPhase,
                keepersChairPassageTurnsInMs: uu.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === uu) {
              const uu = Ru;
              return Ju.tideCharts.SS(uu), void(uu.tideCharts.length > 0 && (ku ??= (0, eu.u)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: Ju.tideCharts.show
              })))
            }
            if (uu === Pu.D) {
              var Eu;
              const {
                hookId: uu,
                waiting: yu
              } = Ru;
              return void hu.hookWaiting(uu, null !== (Eu = null === yu || void 0 === yu ? void 0 : yu.remainingMs) && void 0 !== Eu ? Eu : null)
            }
            if ("skyblockBiteTell" === uu) return void Zu.receiveTell(Ru);
            if ("skyblockSmuggler" === uu) return void Ju.smuggler.SS(Ru);
            if ("skyblockKeepersChair" === uu) return Ju.keepersChair.SS(Ru), void Ju.lampLight.setAtChair(Ju.keepersChair.isAtChair());
            if ("skyblockLampLight" === uu) {
              const uu = Ru;
              var Ku;
              if (Ju.lampLight.SS(uu), uu.lampLightReleasing) bu ??= (0, eu.u)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  Ju.lampLight.setRelease(!1)
                }
              });
              else null === (Ku = bu) || void 0 === Ku || Ku(), bu = void 0;
              return
            }
            if ("skyblockRegulars" === uu) return void Ju.regulars.SS(Ru);
            if ("skyblockHiddenWaters" === uu) return void Ju.hiddenWaters.SS(Ru);
            if ("skyblockReachLog" === uu) return Ju.reachLog.SS(Ru), void(du ??= (0, eu.u)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: UE
              },
              onClick: Ju.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === uu) {
              for (const [uu, yu, Eu, Ku] of Ru) nu.sA(uu, yu, Eu, Ku);
              return
            }
            if ("skyblockHud" === uu) Ju.receiveHud(Ru);
            else if ("skyblockMap" === uu) Ju.map.SS(Ru);
            else if (uu === iu.f) Ju.skills.SS(Ru);
            else if (uu === Gu && "dialogue" === Ru.kind) Ju.dialogue.SS(Ru);
            else if (uu === Gu) Ju.quests.SS(Ru);
            else if ("skyblockDungeons" === uu) Ju.dungeons.SS(Ru);
            else if ("sbCollections" === uu) Ju.collections.SS(Ru);
            else if ("skyblockQuestGraph" === uu) Ju.questGraph.SS(Ru);
            else {
              if ("skyblockAutographs" !== uu) return;
              Ju.autographs.SS(Ru)
            }
            if (!Xu && Ju.map.getSnapshot().enabled) {
              const uu = (0, eu.u)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: Ju.map.show
                }),
                Ru = (0, Yu.u)(Ju.map.show);
              Xu = () => {
                uu(), Ru()
              }
            }!Vu && Ju.skills.getSnapshot().enabled && (Vu = (0, eu.u)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: Ju.skills.show
            })), !pu && Ju.collections.getSnapshot().enabled && (pu = (0, eu.u)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: Ju.collections.show
            })), !ru && Ju.quests.getSnapshot().enabled && (ru = (0, eu.u)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: Ju.quests.show
            })), !Du && Ju.autographs.getSnapshot().enabled && (Du = (0, eu.u)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: Ju.autographs.show
            }));
            const Qu = Ju.dungeons.getSnapshot().enabled;
            var mu;
            (Vu || ru || Qu) && Su !== Qu && (Su = Qu, null === (mu = xu) || void 0 === mu || mu(), xu = (0, eu.u)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: sR
              },
              disabled: !Qu,
              panel: !0,
              onClick: Ju.dungeons.show
            }));
            Nu || (Nu = (0, Yu.w)((0, Au.createElement)(IJ, {
              controller: Ju
            }), {
              content: (0, Au.createElement)(GJ, {
                controller: Ju
              }),
              onClose: Ju.close
            }))
          },
          sr: () => {
            var uu;
            for (const Ru of vu.values()) Ru.sr();
            Uu.sr(nu), Ou.sr(), null === (uu = su) || void 0 === uu || uu.sr(), Ju.skills.sr(), Ju.quests.sr(), Ju.dailyReward.sr(), Ju.mailbox.sr(), Ju.map.sr()
          }
        }
      }
  },
  36243: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku,
      f: () => Eu
    });
    const Eu = "skyblockSkills",
      Ku = "skills_test_gym"
  },
  9087: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku,
      g: () => mu
    });
    const Eu = [{
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

    function Ku(uu) {
      let Ru, yu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof uu) {
        if (!Number.isFinite(uu)) return "0";
        if (Math.abs(uu) < 100) {
          const Ru = uu < 0 ? "-" : "",
            yu = Math.abs(uu);
          return yu >= 10 ? `${Ru}${yu.toFixed(1).replace(/\.0$/,"")}` : `${Ru}${yu.toFixed(2).replace(/\.?0+$/,"")}`
        }
        Ru = BigInt(Math.floor(uu))
      } else Ru = uu;
      const Ku = Ru < 0n ? -Ru : Ru,
        Qu = Ru < 0n ? "-" : "",
        mu = Ku.toString();
      if (mu.length <= yu) return `${Qu}${mu}`;
      const Ju = 3 * Math.floor((mu.length - 1) / 3);
      if (Ju < 3) return `${Qu}${mu}`;
      if (Ju > 3 * Eu.length) {
        const uu = mu[0],
          Ru = mu.slice(1, 3).replace(/0+$/, "");
        return `${Qu}${Ru?`${uu}.${Ru}`:uu}e${mu.length-1}`
      }
      const {
        threshold: Nu,
        suffix: Xu
      } = Eu[Eu.length - Ju / 3], Vu = Ku / Nu, ru = Number(1000n * (Ku % Nu) / Nu), Bu = Number(Vu) + ru / 1e3;
      let xu;
      return xu = Bu >= 100 ? Math.floor(Bu).toString() : Bu >= 10 ? Bu.toFixed(1).replace(/\.0$/, "") : Bu.toFixed(2).replace(/\.?0+$/, ""), `${Qu}${xu}${Xu}`
    }
    const Qu = Eu.map((uu => {
      let {
        threshold: Ru,
        suffix: yu
      } = uu;
      return {
        threshold: Number(Ru),
        suffix: yu
      }
    })).filter((uu => {
      let {
        threshold: Ru
      } = uu;
      return Number.isFinite(Ru)
    }));

    function mu(uu) {
      const Ru = Math.abs(uu),
        yu = uu < 0 ? "-" : "";
      for (const {
          threshold: Eu,
          suffix: Ku
        }
        of Qu)
        if (Ru >= Eu) {
          const uu = Ru / Eu;
          if (uu >= 1e3) return `${yu}${Ru.toExponential(2).replace("e+","e")}`;
          let Qu;
          return Qu = uu >= 100 ? Math.floor(uu).toString() : uu >= 10 ? uu.toFixed(1).replace(/\.0$/, "") : uu.toFixed(2).replace(/\.?0+$/, ""), `${yu}${Qu}${Ku}`
        } return `${yu}${Ru}`
    }
  },
  38316: (uu, Ru, yu) => {
    var Eu = {
      "./combat_1.png": 38319,
      "./dungeon_crumbling_crypt.png": 38326,
      "./dungeon_frozen_hollow.png": 38332,
      "./dungeon_wildwood_grove.png": 38338,
      "./dungeons.png": 38340,
      "./farming_1.png": 38343,
      "./fishing_1.png": 38350,
      "./hub.png": 38357,
      "./island.png": 38364,
      "./mining_1.png": 38373,
      "./mining_1_bridge.png": 38382,
      "./mining_1_gallery.png": 38385,
      "./mining_1_hollow.png": 38392,
      "./mining_1_village.png": 38396
    };

    function Ku(uu) {
      var Ru = Qu(uu);
      return yu(Ru)
    }

    function Qu(uu) {
      if (!yu.o(Eu, uu)) {
        var Ru = new Error("Cannot find module '" + uu + "'");
        throw Ru.code = "MODULE_NOT_FOUND", Ru
      }
      return Eu[uu]
    }
    Ku.keys = function() {
      return Object.keys(Eu)
    }, Ku.resolve = Qu, uu.exports = Ku, Ku.id = 38316
  },
  38319: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  38326: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  38332: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  38338: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  38340: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  38343: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/farming_1.08302e28e41bf98474fe.png"
  },
  38350: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  38357: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/hub.8b20a64678134496251d.png"
  },
  38364: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/island.113e20c7bd7db93fe1ce.png"
  },
  38373: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/mining_1.68cac4bdadc5ef809ae5.png"
  },
  38382: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/mining_1_bridge.56ff82ba845db0b52726.png"
  },
  38385: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/mining_1_gallery.4e799e6329dbc66249ce.png"
  },
  38392: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  38396: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/mining_1_village.c2a625c1c4541a1fbe65.png"
  },
  18484: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  20565: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  22977: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  24512: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  26166: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  26183: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  38306: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);