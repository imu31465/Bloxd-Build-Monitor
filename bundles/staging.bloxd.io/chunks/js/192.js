export const id = 192;
export const ids = [52, 192];
export const modules = {
  38982: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Uu,
      f: () => Zu
    });
    const su = new WeakMap;

    function Uu(uu, Eu) {
      return su.set(uu, Eu), uu
    }

    function Zu(uu) {
      var Eu;
      return null !== (Eu = su.get(uu)) && void 0 !== Eu ? Eu : null
    }
  },
  38857: (uu, Eu, ju) => {
    function su(uu, Eu, ju) {
      var su;
      const {
        width: Uu,
        height: Zu
      } = ju, Xu = null !== (su = uu.text) && void 0 !== su ? su : uu, lu = (Xu.x / 100 - .5) * Uu, qu = (Xu.y / 100 - .5) * Zu, fu = Uu / 2 - Eu.x;
      if (null !== uu.text && Math.abs(lu) <= fu && qu >= Eu.top - Zu / 2 && qu <= Zu / 2 - Eu.bottom) return {
        x: Xu.x,
        y: Xu.y
      };
      const Cu = Math.min(0 === lu ? 1 / 0 : fu / Math.abs(lu), qu > 0 ? (Zu / 2 - Eu.bottom) / qu : qu < 0 ? (Eu.top - Zu / 2) / qu : 1 / 0);
      return !Number.isFinite(Cu) || Cu < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + lu * Cu / Uu * 100,
        y: 50 + qu * Cu / Zu * 100
      }
    }
    ju.d(Eu, {
      d: () => su
    })
  },
  38882: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu
    });
    const su = 4,
      Uu = 12e3,
      Zu = 1e3;
    class Xu {
      constructor() {
        let {
          limit: uu = su,
          windowMs: Eu = Uu,
          spacingMs: ju = Zu,
          now: Xu = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = uu, this.windowMs = Eu, this.spacingMs = ju, this.now = Xu
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
          Eu = this.lastSentAt + this.spacingMs,
          ju = Math.min(Eu > uu ? Eu : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        ju !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, ju - uu)))
      }
      notify() {
        for (const uu of this.listeners) uu()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38851: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => su
    });
    class su {
      constructor(uu, Eu, ju) {
        this.TY = uu, this.beforeOpen = Eu, this.afterClose = ju, this.open = !1, this.fO = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.fO && (this.open = !0, this.beforeOpen(this), this.emit())
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
        this.open = !1, this.emit(), this.fO = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.fO || (this.snapshot = this.buildSnapshot(), this.TY(this.snapshot))
      }
    }
  },
  38988: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      SkyblockEntityFacing: () => lu,
      needsSkyblockEntityFacing: () => Xu
    });
    var su = ju(645),
      Uu = ju(4427),
      Zu = ju(38992);

    function Xu(uu, Eu) {
      if (uu.metaInfo === su.b || "Iron Guardian" === uu.type || "Gold Guardian" === uu.type) return !0;
      if ("Pig" === uu.type) return "sitting" === uu.pose;
      if ("Person" !== uu.meshKind || void 0 === uu.meshOpts) return !1;
      let ju = null === Eu || void 0 === Eu ? void 0 : Eu.get(uu.meshOpts);
      if (void 0 === ju) {
        var Zu, Xu;
        const su = (0, Uu.i)(uu);
        ju = !1, "pig_napoleon" === (null === su || void 0 === su || null === (Zu = su.opts.textures) || void 0 === Zu ? void 0 : Zu.head) ? ju = !0 : "npc_pig_head" === (null === su || void 0 === su || null === (Xu = su.opts.textures) || void 0 === Xu ? void 0 : Xu.head) && (ju = "sitting" === su.opts.pose || "sitting"), Eu && (Eu.size >= 256 && Eu.clear(), Eu.set(uu.meshOpts, ju))
      }
      return "sitting" === ju ? "sitting" === uu.pose : ju
    }(0, Zu.f)("skyblock", ((uu, Eu) => {
      Eu.setFacingTolerance(Xu(uu) ? 0 : null)
    }));
    class lu {
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = uu, this.alsoVisit = Eu, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = uu => {
          var Eu;
          const ju = this.api.getEntityInfo(uu);
          ju && (Xu(ju, this.meshFacingCache) && (this.api.setFacingTolerance(uu, 0), this.nextFacing.add(uu)), null === (Eu = this.alsoVisit) || void 0 === Eu || Eu.call(this, uu, ju))
        }
      }
      Tb() {
        const {
          api: uu
        } = this, Eu = this.nextFacing;
        uu.forEachEntity(this.visit);
        for (const ju of this.facing) Eu.has(ju) || uu.setFacingTolerance(ju, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = Eu
      }
      dispose() {
        for (const uu of this.facing) this.api.setFacingTolerance(uu, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  38843: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => fq
    });
    const su = "island";
    var Uu = ju(349);
    const Zu = (0, Uu.Ab)([0, 0, -1]),
      Xu = [{
        name: "S",
        bearing: (0, Uu.Ab)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, Uu.Ab)([-1, 0, 0])
      }, {
        name: "N",
        bearing: Zu
      }, {
        name: "W",
        bearing: (0, Uu.Ab)([1, 0, 0])
      }];

    function lu(uu, Eu, ju) {
      return [100 * (ju.mapMaxX - uu) / (ju.mapMaxX - ju.mapMinX), 100 * (Eu - ju.mapMinZ) / (ju.mapMaxZ - ju.mapMinZ)]
    }

    function qu(uu, Eu, ju) {
      const Uu = "local" === Eu,
        Zu = uu.background,
        Xu = Eu => Zu ? lu(Eu[0] - uu.mapOrigin[0], Eu[2] - uu.mapOrigin[2], Zu.bounds) : [50, 50],
        qu = (uu.insideDungeon ? [] : uu.landmarks).map((uu => {
          var Eu, su;
          return {
            id: uu.id,
            name: ju(uu.visited && uu.nameKey ? null !== (Eu = uu.mapLabelKey) && void 0 !== Eu ? Eu : uu.nameKey : "skyblockGame:mapUnknown"),
            icon: uu.visited && null !== (su = uu.icon) && void 0 !== su ? su : "unknown",
            visited: uu.visited,
            current: !1,
            position: Xu(uu.position),
            travelKind: "landmark",
            travelId: uu.id
          }
        })),
        Cu = uu.zones.map((Eu => {
          var su;
          return {
            id: Eu.id,
            name: ju(Eu.visited && Eu.nameKey ? Eu.nameKey : "skyblockGame:mapUnknown"),
            icon: Eu.visited && null !== (su = Eu.icon) && void 0 !== su ? su : "unknown",
            visited: Eu.visited,
            current: Eu.id === uu.zoneId,
            position: Eu.position,
            thumbnail: Eu.visited ? Eu.id : void 0,
            travelKind: "zone",
            travelId: Eu.id
          }
        })),
        bu = uu.insideDungeon || !Zu ? [] : uu.portals.map((uu => {
          var Eu;
          return {
            id: uu.id,
            name: ju(null !== (Eu = uu.nameKey) && void 0 !== Eu ? Eu : "skyblockGame:mapUnknown"),
            icon: uu.visited ? "dungeons" === uu.destination ? "portal_orange" : "portal" : "unknown",
            visited: uu.visited,
            current: !1,
            position: Xu(uu.position),
            colour: uu.colour,
            travelKind: "zone",
            travelId: uu.destination
          }
        })),
        cu = Uu ? qu : Cu,
        Nu = cu.filter((uu => uu.visited)).length,
        Ou = Zu ? (Zu.bounds.mapMaxX - Zu.bounds.mapMinX) / (Zu.bounds.mapMaxZ - Zu.bounds.mapMinZ) : 2,
        Yu = Zu ? JSON.stringify([Zu.bounds, uu.mapOrigin]) : "";
      return {
        local: Uu,
        points: cu,
        portals: Uu ? bu : [],
        progress: cu.length ? ju("skyblockGame:mapDiscovered", {
          current: String(Nu),
          total: String(cu.length)
        }) : null,
        percent: cu.length ? 100 * Nu / cu.length : 0,
        canTravel: [...cu, ...Uu ? bu : []].some((uu => uu.visited && !uu.current)),
        noLandmarks: Uu && !uu.insideDungeon && 0 === qu.length,
        background: Zu ? {
          imageKey: Zu.imageKey,
          fallbackImageKey: uu.zoneId,
          geometryKey: Yu,
          label: ju(Zu.labelKey),
          colour: Zu.backgroundColour,
          ratio: Ou
        } : null,
        connections: fu(uu.zones),
        minimap: Zu ? {
          imageKey: Zu.imageKey,
          fallbackImageKey: uu.zoneId,
          geometryKey: Yu,
          label: ju(Zu.labelKey),
          colour: Zu.backgroundColour,
          caption: ju(uu.zoneId === su ? "skyblockGame:zoneIsland" : Zu.labelKey),
          width: (Zu.bounds.mapMaxX - Zu.bounds.mapMinX) / Zu.minimapSpan * 100 + "%",
          height: (Zu.bounds.mapMaxZ - Zu.bounds.mapMinZ) / Zu.minimapSpan * 100 + "%",
          markers: [...qu, ...bu]
        } : null
      }
    }

    function fu(uu) {
      const Eu = new Set;
      return uu.flatMap((ju => ju.connections.flatMap((su => {
        const Uu = uu.find((uu => uu.id === su)),
          Zu = [ju.id, su].sort().join("|");
        return !Uu || Eu.has(Zu) ? [] : (Eu.add(Zu), [{
          id: `${ju.id}-${su}`,
          start: ju.position,
          end: Uu.position,
          explored: ju.visited && Uu.visited
        }])
      }))))
    }
    var Cu = ju(38851);
    class bu extends Cu.d {}
    const cu = "skyblockMapView";
    class Nu extends bu {
      constructor(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(uu, su, Uu), this.requestTravel = Eu, this.translate = ju, this.now = Zu, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
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
        }, this.travel = (uu, Eu) => {
          if (!this.map || this.pending || this.fO) return;
          const ju = ("zone" === uu ? this.map.zones : this.map.landmarks).find((uu => uu.id === Eu));
          if (ju) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in ju && !ju.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (ju.visited)
              if ("zone" === uu && Eu === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const ju = ++this.nextRequestId;
                this.pending = {
                  requestId: ju,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: uu,
                  id: Eu,
                  requestId: ju
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
      NO(uu) {
        var Eu;
        if (!this.fO)
          if ("entities" !== uu.kind)
            if ("open" !== uu.kind) {
              var ju, su;
              if ("snapshot" === uu.kind)(null === (ju = uu.snapshot) || void 0 === ju ? void 0 : ju.zoneId) !== (null === (su = this.map) || void 0 === su ? void 0 : su.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = uu.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === uu.kind) {
                var Uu;
                uu.requestId === (null === (Uu = this.pending) || void 0 === Uu ? void 0 : Uu.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (uu.requestId === (null === (Eu = this.pending) || void 0 === Eu ? void 0 : Eu.requestId)) {
                var Zu;
                this.pending = null, this.feedbackKey = null !== (Zu = uu.errorKey) && void 0 !== Zu ? Zu : "", null === uu.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = uu.entities
      }
      Tb() {
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
          presentation: this.map ? qu(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const Ou = 67.5 * Math.PI / 180;

    function Yu(uu, Eu) {
      const ju = Math.abs(uu);
      if (ju > Ou || Eu.trackHalfWidth <= 0) return null;
      const su = Eu.trackHalfWidth,
        Uu = Eu.screenHalfWidth / (Eu.tanHalfFovX * Math.max(.5, Math.cos(Eu.pitch))),
        Zu = Math.min(Math.atan(.6 * su / Uu), .75 * Ou),
        Xu = Uu * Math.tan(Zu);
      let lu;
      if (ju <= Zu) lu = Uu * Math.tan(ju);
      else {
        const uu = Ou - Zu,
          Eu = Math.max(0, Uu * uu / (Math.cos(Zu) ** 2 * (su - Xu)) - 1),
          qu = (ju - Zu) / uu;
        lu = Xu + (su - Xu) * (1 + Eu) * qu / (1 + Eu * qu)
      }
      return 50 + Math.sign(uu) * lu * 50 / su
    }
    class hu {
      constructor(uu, Eu) {
        this.map = uu, this.visited = Eu, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = Eu ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const uu = this.map.getSnapshot().map;
        return !uu || uu.insideDungeon ? [] : uu.landmarks.filter((uu => uu.visited === this.visited)).map((uu => {
          var Eu, ju;
          return {
            id: `landmark:${uu.id}`,
            position: uu.position,
            icon: null !== (Eu = uu.icon) && void 0 !== Eu ? Eu : "unknown",
            nameKey: null !== (ju = uu.nameKey) && void 0 !== ju ? ju : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class Du {
      constructor(uu, Eu, ju, su) {
        this.map = uu, this.kind = Eu, this.position = ju, this.alive = su, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = Eu, this.range = "enemy" === Eu ? 48 : 64, this.limit = 12
      }
      bM(uu) {
        if ("enemy" !== this.kind || this.alive(uu.ys)) return this.position(uu.ys)
      }
      getPoints() {
        const uu = [];
        for (const su of this.map.getEntities()) {
          if (su.kind !== this.kind || "enemy" === this.kind && !this.alive(su.compassEntityId)) continue;
          const Uu = this.position(su.compassEntityId);
          var Eu, ju;
          if (Uu) uu.push({
            id: `${this.kind}:${su.compassEntityId}`,
            ys: su.compassEntityId,
            kind: this.kind,
            icon: null !== (Eu = su.icon) && void 0 !== Eu ? Eu : su.npcSkin ? `npc_${su.npcSkin}` : this.kind,
            displayName: su.displayName,
            position: Uu,
            nameKey: null !== (ju = su.nameKey) && void 0 !== ju ? ju : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return uu
      }
    }
    class gu {
      constructor(uu) {
        this.map = uu, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const uu = this.map.getSnapshot().map;
        return !uu || uu.insideDungeon ? [] : uu.portals.map((uu => {
          var Eu;
          return {
            id: "portal:" + uu.id,
            kind: "portal",
            position: uu.position,
            nameKey: null !== (Eu = uu.nameKey) && void 0 !== Eu ? Eu : "skyblockGame:compassUnvisitedZone",
            icon: uu.visited ? "dungeons" === uu.destination ? "portal_orange" : "portal" : "unknown",
            colour: uu.colour
          }
        }))
      }
    }
    class Mu {
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

    function eu(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : uu.position;
      const Zu = su[0] - Eu[0],
        Xu = su[2] - Eu[2];
      return {
        ...uu,
        position: su,
        offset: Uu.b.computeShortestRotation(ju, (0, Uu.Ab)([Zu, 0, Xu])),
        distance: Math.hypot(Zu, su[1] - Eu[1], Xu)
      }
    }
    let Gu;

    function pu(uu, Eu) {
      var ju;
      return (null === (ju = Gu) || void 0 === ju ? void 0 : ju.locale) !== Eu && (Gu = {
        locale: Eu,
        near: new Intl.NumberFormat(Eu, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(Eu, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (uu < 10 ? Gu.near : Gu.far).format(uu)
    }
    class wu {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(uu) {
        return this.providers.set(uu.id, uu), this.refreshAt = 0, () => {
          this.providers.get(uu.id) === uu && (this.providers.delete(uu.id), this.refreshAt = 0)
        }
      }
      frame(uu, Eu, ju) {
        if (ju >= this.refreshAt) {
          this.refreshAt = ju + 200, this.candidates = [];
          for (const Eu of this.providers.values()) {
            if (!Eu.enabled) continue;
            const ju = Eu.getPoints().map((Eu => {
              const ju = Eu.position;
              return {
                point: Eu,
                distance: Math.hypot(ju[0] - uu[0], ju[1] - uu[1], ju[2] - uu[2])
              }
            })).filter((uu => uu.distance <= Eu.range)).sort(((uu, Eu) => uu.distance - Eu.distance)).slice(0, Eu.limit);
            for (const {
                point: uu
              }
              of ju) this.candidates.push({
              provider: Eu,
              point: uu
            })
          }
        }
        const su = [];
        for (const {
            point: Uu,
            provider: Zu
          }
          of this.candidates) {
          if (!Zu.enabled) continue;
          const ju = Zu.bM ? Zu.bM(Uu) : Uu.position;
          if (ju) {
            const Zu = eu(Uu, uu, Eu, ju);
            Math.abs(Zu.offset) <= Ou && su.push(Zu)
          }
        }
        return su
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var Ju = ju(36998),
      du = ju(58);
    const au = [{
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
      Pu = au.length;

    function ou(uu) {
      return uu >= Pu ? 1 : uu + 1
    }
    const ku = "skyblockQuests",
      mu = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      vu = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function Ku(uu) {
      let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const ju = Math.max(0, Math.floor(uu)),
        su = Math.floor(ju % 1e3 / 100),
        Uu = Math.floor(ju / 1e3),
        Zu = Uu % 60,
        Xu = Math.floor(Uu / 60),
        lu = Xu % 60,
        qu = Math.floor(Xu / 60),
        fu = uu => uu < 10 ? `0${uu}` : String(uu),
        Cu = Eu ? `.${su}` : "";
      return qu > 0 ? `${qu}:${fu(lu)}:${fu(Zu)}${Cu}` : `${lu}:${fu(Zu)}${Cu}`
    }
    const Vu = "devquests",
      ru = "none",
      Qu = {
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
      iu = "Compressed Messy Stone",
      Wu = {
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
      Su = ["Stone", "Diorite", "Andesite", "Granite"],
      Iu = new Set(Su),
      Fu = (Object.keys(Wu), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const Bu = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function Lu(uu, Eu) {
      const ju = Math.floor(5 * uu / (2 * Eu + 1));
      return Math.min(4, Math.max(0, ju))
    }
    var tu = ju(1298);
    var xu = ju(36756);
    var Tu = ju(36992),
      Hu = ju(24),
      Au = ju(9091);
    const nu = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      yu = 1e3;

    function zu(uu) {
      return Math.max(0, uu)
    }

    function Ru(uu) {
      return 1 + .01 * zu(uu)
    }

    function uE(uu) {
      return 1 + .005 * zu(uu)
    }

    function EE(uu) {
      return 1 + .005 * zu(uu)
    }

    function jE(uu) {
      return .01 * zu(uu)
    }

    function sE(uu) {
      return 150 / (150 + zu(uu))
    }

    function UE(uu) {
      return 1 + .002 * zu(uu)
    }

    function ZE(uu) {
      return Math.round(10 * uu) / 10
    }

    function XE(uu, Eu) {
      switch (uu) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: ZE(100 * (uE(Eu) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: ZE(100 * (Ru(Eu) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: ZE(100 * (EE(Eu) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: ZE(100 * jE(Eu))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: ZE(100 * (1 - sE(Eu)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: ZE(100 * (UE(Eu) - 1))
          }
      }
    }

    function lE(uu) {
      return "farming" === uu ? 200 : 100
    }

    function qE(uu, Eu) {
      if (!Number.isSafeInteger(uu) || uu < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const ju = lE(Eu),
        su = uu => function(uu, Eu) {
          return lE(uu) * Eu * (Eu + 1) / 2
        }(Eu, uu);
      let Uu = Math.min(yu, Math.floor((Math.sqrt(8 * uu / ju + 1) - 1) / 2));
      return Uu < yu && su(Uu + 1) <= uu ? Uu++ : su(Uu) > uu && Uu--, {
        totalXp: uu,
        level: Uu,
        xpIntoLevel: uu - su(Uu),
        xpForNextLevel: Uu === yu ? null : ju * (Uu + 1)
      }
    }
    const fE = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function CE(uu) {
      return fE.has(uu)
    }
    const bE = new Set(Uu.nb);

    function cE(uu) {
      return bE.has(uu)
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
      OE = {
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
      YE = {
        ...OE,
        ...Object.fromEntries(Object.entries(Fu).map((uu => {
          let [Eu, ju] = uu;
          return [Eu, 9 * OE[ju]]
        })))
      },
      hE = {
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
      DE = {
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
    const gE = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      ME = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function eE(uu) {
      return `rgb(${ME[uu].join(", ")})`
    }

    function GE(uu, Eu, ju) {
      if (!ju) return uu(Eu);
      const su = {};
      for (const [Uu, Zu] of Object.entries(ju)) su[Uu] = "string" === typeof Zu ? Zu : uu(Zu.translationKey);
      return uu(Eu, su)
    }
    class pE {
      constructor(uu, Eu) {
        this.now = uu, this.getJournal = Eu, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.dl = !1, this.onShown = () => {}
      }
      enqueue(uu) {
        const Eu = wE(uu);
        if (Eu) this.pending.push(uu);
        else {
          const Eu = this.pending.findIndex(wE);
          this.pending.splice(-1 === Eu ? this.pending.length : Eu, 0, uu)
        }
        return (null === this.current || null !== this.followUp && !Eu) && (this.advance(), !0)
      }
      setHeld(uu) {
        return this.dl = uu, !uu && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      Tb() {
        const uu = this.getJournal(),
          Eu = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === Eu ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === Eu || void 0 === Eu ? void 0 : Eu.kind) && uu && uu.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === Eu || void 0 === Eu ? void 0 : Eu.kind)) {
          const uu = this.findFollowUp(this.current);
          if ("step" !== (null === uu || void 0 === uu ? void 0 : uu.kind) || uu.questId !== Eu.questId || uu.step.id !== Eu.step.id) return this.showFollowUp(uu, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(uu, Eu, ju) {
        var su, Uu, Zu, Xu;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, uu, ju);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, uu);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, uu, Eu);
        const {
          questCompletionKind: lu,
          questCompletionNameKey: qu
        } = this.current, fu = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, Cu = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, bu = "step" === (null === (su = this.followUp) || void 0 === su ? void 0 : su.kind) ? this.followUp : null, cu = "explore" === (null === (Uu = this.followUp) || void 0 === Uu ? void 0 : Uu.kind);
        let Nu;
        return Nu = cu ? uu("skyblockGame:questExploreTitle") : null !== bu ? "quest" === lu ? uu("skyblockGame:questNextQuestTitle", {
          quest: uu(bu.questNameKey)
        }) : uu("skyblockGame:questNextStepTitle") : uu("started" === lu ? "skyblockGame:questStartedTitle" : "quest" === lu ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? lu : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: Nu,
          name: cu ? Eu("skyblockGame:questExploreName") : null !== bu ? GE(Eu, bu.step.nameKey, bu.step.nameParams) : GE(Eu, qu, fu),
          description: cu ? Eu("skyblockGame:questExploreDescription") : null === bu ? null : GE(Eu, bu.step.descriptionKey, bu.step.descriptionParams),
          reward: null === this.followUp && Cu > 0 ? Eu("skyblockGame:questCoinRewardSuffix", {
            amount: Cu.toLocaleString(ju)
          }) : null,
          iconItem: null !== (Zu = null === bu || void 0 === bu ? void 0 : bu.step.questIconItem) && void 0 !== Zu ? Zu : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== bu && (null === (Xu = this.getJournal()) || void 0 === Xu ? void 0 : Xu.trackedQuestId) === bu.questId ? bu.step.nameKey : null
        }
      }
      getSkillLevelView(uu, Eu, ju) {
        let {
          skill: su,
          beforeLevel: Uu,
          level: Zu
        } = uu;
        const Xu = XE(su, Uu),
          lu = XE(su, Zu);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: Eu(`skyblockGame:${su}`),
          name: Eu("skyblockGame:skillLevelUp", {
            to: Zu.toLocaleString(ju)
          }),
          description: Xu.percent === lu.percent ? null : Eu(`${lu.translationKey}Change`, {
            before: Xu.percent.toLocaleString(ju),
            after: lu.percent.toLocaleString(ju)
          }),
          reward: null,
          iconItem: gE[su],
          accent: eE(su),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(uu, Eu) {
        let {
          landmarkNameKey: ju
        } = uu;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: Eu("skyblockGame:landmarkDiscovered"),
          name: Eu(ju),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(uu, Eu, ju) {
        let {
          titleKey: su,
          textKey: Uu,
          params: Zu = {},
          nameKeys: Xu = {},
          iconItem: lu = null
        } = uu;
        const qu = {
          ...Zu
        };
        for (const [fu, Cu] of Object.entries(Xu)) qu[fu] = Eu(Cu);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: Eu(su),
          name: ju(Uu, qu),
          description: null,
          reward: null,
          iconItem: lu,
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
      showFollowUp(uu, Eu) {
        null === uu || this.dl ? this.advance() : (this.followUp = uu, this.token++, this.shownAt = this.now(), this.expiresAt = null !== Eu && void 0 !== Eu ? Eu : this.shownAt + this.durationMs())
      }
      findFollowUp(uu) {
        var Eu;
        const ju = this.getJournal();
        if (!ju || this.hasPendingQuestPopup() || wE(uu)) return null;
        const su = "started" === uu.questCompletionKind ? ju.active.some((Eu => Eu.id === uu.questCompletionQuestId)) : "quest" === uu.questCompletionKind ? ju.completed.some((Eu => Eu.id === uu.questCompletionQuestId)) : [...ju.active, ...ju.completed].some((Eu => Eu.id === uu.questCompletionQuestId && Eu.subquests.some((Eu => Eu.id === uu.questCompletionStepId && "completed" === Eu.status))));
        if (!su) return null;
        if ("quest" === uu.questCompletionKind && 0 === ju.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const Uu = ju.active.find((uu => uu.id === ju.trackedQuestId)),
          Zu = null !== (Eu = null === Uu || void 0 === Uu ? void 0 : Uu.subquests.find((uu => "ready" === uu.status))) && void 0 !== Eu ? Eu : null === Uu || void 0 === Uu ? void 0 : Uu.subquests.find((uu => "active" === uu.status));
        return Zu ? {
          kind: "step",
          questId: Uu.id,
          questNameKey: Uu.nameKey,
          step: Zu
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((uu => !wE(uu)))
      }
      advance() {
        var uu;
        this.current = this.dl ? null : null !== (uu = this.pending.shift()) && void 0 !== uu ? uu : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function wE(uu) {
      return JE(uu.questCompletionKind)
    }

    function JE(uu) {
      return "skillLevel" === uu || "landmark" === uu || "npcNote" === uu
    }
    var dE = ju(38857);
    const aE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      PE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      oE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      kE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      mE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var vE = ju(38864);
    var KE = ju(38873);
    const VE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      rE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const QE = ju.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const iE = ju.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      WE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var SE = ju(18595),
      IE = ju(20652),
      FE = ju(23038),
      BE = ju(24609),
      LE = ju(26271);
    const tE = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: SE,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: IE,
      cow: mE,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: ju(26292),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: aE,
      fishing_1: aE,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: PE,
      guardian_iron: oE,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: FE,
      mines: BE,
      mining_1: BE,
      npc: kE,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: mE,
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
      npc_gold_guardian: PE,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: oE,
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
      npc_portal_mage: vE,
      npc_rabbit_aristocrat: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAXklEQVR4nGNgIAP8h2JcfDD4P3fB+v/3csphkmB2S/tUDMX/+yYuIE7h3AXrwYqRMU4TlZSV4YpAbJwKYe4EYRC7prYLU6GLocX/ODe3/1+//wJjEBskhtXnODBpAAD3lm2BX81XrwAAAABJRU5ErkJggg==",
      npc_smuglyn: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAASklEQVR42mNgIAP8x4FRFWlqamLF6IrBgj1hoSgYq8Kv33/9txBi/z81LhaMQWyQGIbC5VmZcEUwDBLDUIiuCIRB1pOtkOjgIQgAhutlSTAZTWcAAAAASUVORK5CYII=",
      npc_tentacle_boy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAiElEQVR4nGNkQID/DNgBI5wAKXJw8Wb48vkjhqozJ4+A1bHABKI0arEad+akBdzY/ybmNgw/f/3CqpCdjQ1sKthEM4scHM5DsZ7hf23T3v9fv//6z8srAmaj80FqmGC6JMSkUExB54Ot1ubgYSgoXQkWuHXrKpiG8UFyMAA3HkbjEIMoRqMxxABOskezGUlSqQAAAABJRU5ErkJggg==",
      npc_tentacle_girl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAgklEQVR4nGNgwA3+QzEYMOGQ/H9viS7Dp4N+MDEGFmRFO8PqGYTFRBjevnrDwMCwjuHN4/twSRZsikD07U1BUKnLKArBQExYAIxh7OvX78DlUNzoMbEWKxtDYb11MFY2htXPPr5nOH7mApiW4hdECxAkX/fbJIGDYqV3MYwND0eiAQAf4TQGGrZ+tQAAAABJRU5ErkJggg==",
      npc_tentacle_guy: KE,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: VE,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: QE,
      quest_talk: iE,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: WE,
      watermelon: LE
    };

    function xE(uu, Eu) {
      const ju = document.createElement("img");
      return ju.className = Eu, ju.src = uu, ju.alt = "", ju.draggable = !1, ju
    }

    function TE(uu) {
      var Eu;
      const ju = null !== (Eu = tE[uu]) && void 0 !== Eu ? Eu : uu.startsWith("npc_") ? kE : WE;
      if ("portal" !== uu) return xE(ju, "SkyblockMapIcon");
      const su = document.createElement("span");
      su.className = "SkyblockMapIcon Portal";
      const Uu = document.createElement("span");
      return Uu.className = "SkyblockMapIconTint", Uu.style.maskImage = Uu.style.webkitMaskImage = `url("${rE}")`, su.append(xE(ju, "SkyblockMapIconLayer"), Uu, xE(rE, "SkyblockMapIconLayer SkyblockMapIconShade")), su
    }
    var HE = ju(38834),
      AE = ju(4432);
    const nE = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function yE(uu) {
      const Eu = new AE.f(uu);
      return {
        radius: 45,
        squareness: 3,
        wobbles: nE.map((uu => {
          let {
            lobes: ju,
            amount: su
          } = uu;
          return {
            lobes: ju[Math.floor(Eu.next() * ju.length)],
            amount: su[0] + Eu.next() * (su[1] - su[0]),
            phase: 2 * Eu.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function zE(uu) {
      let {
        radius: Eu,
        squareness: ju,
        wobbles: su,
        samples: Uu
      } = uu;
      const Zu = [];
      for (let Xu = 0; Xu < Uu; Xu++) {
        const uu = 2 * Math.PI * Xu / Uu,
          lu = Math.cos(uu),
          qu = Math.sin(uu),
          fu = Eu * (Math.abs(lu) ** ju + Math.abs(qu) ** ju) ** (-1 / ju) * su.reduce(((Eu, ju) => {
            let {
              lobes: su,
              amount: Uu,
              phase: Zu
            } = ju;
            return Eu + Uu * Math.sin(su * uu + Zu)
          }), 1);
        Zu.push(`${(50+fu*lu).toFixed(2)} ${(50+fu*qu).toFixed(2)}`)
      }
      return `M${Zu.join("L")}Z`
    }
    const RE = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class uj {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.fO = !1, this.mountCompass = uu => {
          var Eu;
          if (null === (Eu = this.stopLayout) || void 0 === Eu || Eu.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !uu || this.fO) return;
          const ju = uu.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: uu,
            track: ju,
            label: uu.querySelector(".SkyblockCompassLabel")
          }, ju.replaceChildren();
          for (let Uu = 0; Uu < 4; Uu++) {
            const uu = document.createElement("span");
            uu.className = "SkyblockCompassCardinal", ju.appendChild(uu), this.cardinals.push(uu)
          }
          const su = (0, HE.e)(RE, [uu], this.layout);
          this.stopLayout = () => {
            su(), ju.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = uu => {
          this.terrain = this.fO ? null : uu, this.render(this.frame)
        }, this.mountMinimapSearchArea = uu => {
          this.mountSearchArea("minimap", uu)
        }, this.mountMapSearchArea = uu => {
          this.mountSearchArea("map", uu)
        }, this.mountPlayer = uu => {
          this.player = this.fO ? null : uu, this.render(this.frame)
        }, this.mountWaypoint = uu => {
          var Eu, ju;
          if (null === (Eu = this.stopWaypoint) || void 0 === Eu || Eu.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !uu || this.fO) return;
          const su = uu.querySelector(".SkyblockQuestWaypointMarker");
          su.replaceChildren(TE("quest")), this.markerIcon = "quest", this.waypoint = {
            root: uu,
            marker: su,
            clip: uu.querySelector(".SkyblockQuestWaypointTextClip"),
            text: uu.querySelector(".SkyblockQuestWaypointText"),
            label: uu.querySelector(".SkyblockQuestWaypointLabel"),
            distance: uu.querySelector(".SkyblockQuestWaypointDistance"),
            hint: uu.querySelector(".SkyblockQuestWaypointHint")
          };
          const Uu = () => {
              this.waypointMarkerSize = {
                width: su.offsetWidth,
                height: su.offsetHeight
              }, this.waypointInset = {
                x: su.offsetWidth / 2 + 8,
                top: su.offsetHeight + 8,
                bottom: 8
              }
            },
            Zu = new ResizeObserver((() => {
              Uu(), this.render(this.frame)
            }));
          Zu.observe(su, {
            box: "border-box"
          });
          const Xu = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", Xu), null === (ju = window.visualViewport) || void 0 === ju || ju.addEventListener("resize", Xu), this.stopWaypoint = () => {
            var uu;
            Zu.disconnect(), window.removeEventListener("resize", Xu), null === (uu = window.visualViewport) || void 0 === uu || uu.removeEventListener("resize", Xu)
          }, Xu(), Uu(), this.render(this.frame)
        }, this.mountWaypointOrigin = uu => {
          var Eu;
          if (null === (Eu = this.stopWaypointOrigin) || void 0 === Eu || Eu.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = uu && !this.fO ? Number(uu.dataset.notificationToken) : null, uu && !this.fO && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const Eu = {
              nameKey: uu.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = Eu;
            const ju = () => {
                const ju = uu.getBoundingClientRect();
                Eu.x = (ju.left + ju.width / 2) / window.innerWidth * 100, Eu.y = (ju.top + ju.height / 2) / window.innerHeight * 100
              },
              su = new ResizeObserver(ju);
            su.observe(uu.parentElement), su.observe(uu), window.addEventListener("resize", ju), this.stopWaypointOrigin = () => {
              su.disconnect(), window.removeEventListener("resize", ju)
            }, ju()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const uu = this.compass.root,
            Eu = getComputedStyle(uu),
            ju = getComputedStyle(document.documentElement),
            su = parseFloat(ju.fontSize),
            Uu = parseFloat(Eu.getPropertyValue("--compass-icon-size")) * su,
            Zu = "1" === Eu.getPropertyValue("--compass-fit-top").trim(),
            Xu = Zu ? 1 : 8,
            lu = Array.from(document.querySelectorAll(RE), (uu => {
              var Eu;
              return (null !== (Eu = uu.querySelector(".MiddleTextTop")) && void 0 !== Eu ? Eu : uu).getBoundingClientRect()
            })).filter((uu => uu.width > 0 && uu.height > 0));
          let qu = (parseFloat(ju.getPropertyValue("--notchTop")) || 0) + Xu,
            fu = "";
          if (Zu) {
            const Eu = window.innerWidth / 2,
              ju = uu.getBoundingClientRect().height,
              Zu = [qu, ...lu.map((uu => Math.max(qu, uu.bottom + Xu)))].sort(((uu, Eu) => uu - Eu));
            for (const uu of Zu) {
              let Zu = Eu - 8;
              for (const su of lu) su.bottom + Xu <= uu || su.top >= uu + ju + Xu || (Zu = Math.min(Zu, su.right <= Eu ? Eu - su.right - 8 : su.left - Eu - 8));
              const Cu = 2 * Zu - Uu;
              if (Cu >= 16 * su) {
                fu = `${Cu}px`, qu = uu;
                break
              }
            }
          }
          uu.style.maxWidth !== fu && (uu.style.maxWidth = fu);
          const Cu = uu.getBoundingClientRect(),
            bu = this.compassSize.trackHalfWidth;
          if (Cu.width > 0) {
            const uu = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: uu.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * Uu / uu.width
          }
          if (!fu)
            for (const cu of lu) cu.right > Cu.left - 8 && cu.left < Cu.right + 8 && (qu = Math.max(qu, cu.bottom + Xu));
          uu.style.top = `${qu}px`, this.compassSize.trackHalfWidth !== bu && this.render(this.frame)
        }
      }
      mountSearchArea(uu, Eu) {
        this.searchAreas[uu] = this.fO ? null : Eu, this.render(this.frame)
      }
      render(uu) {
        if (this.fO) return;
        if (this.frame = uu, this.compass && (Ej(this.compass.root, !uu), uu)) {
          const Eu = this.compassSize.trackHalfWidth / 50;
          uu.compass.cardinals.forEach(((uu, ju) => {
            const su = this.cardinals[ju];
            su.textContent !== uu.name && (su.textContent = uu.name), Ej(su, uu.hidden), su.style.translate = uu.left * Eu + "px"
          }));
          const ju = new Set;
          uu.compass.markers.forEach(((su, Uu) => {
            var Zu;
            ju.add(su.id);
            let Xu = this.markers.get(su.id);
            Xu || (Xu = document.createElement("span"), Xu.className = "SkyblockCompassMarker", this.markers.set(su.id, Xu), this.compass.track.appendChild(Xu)), Xu.dataset.icon !== su.icon && (Xu.dataset.icon = su.icon, Xu.replaceChildren(TE(su.icon))), Xu.style.color = null !== (Zu = su.colour) && void 0 !== Zu ? Zu : "", Xu.style.translate = su.left * Eu + "px", Xu.style.zIndex = String(uu.compass.markers.length - Uu), Xu.title !== su.name && (Xu.title = su.name)
          }));
          for (const [uu, su] of this.markers) ju.has(uu) || (su.remove(), this.markers.delete(uu));
          this.compass.label.textContent !== uu.compass.label && (this.compass.label.textContent = uu.compass.label)
        }
        this.terrain && (Ej(this.terrain, !(null !== uu && void 0 !== uu && uu.minimap)), null !== uu && void 0 !== uu && uu.minimap && (this.terrain.style.transform = uu.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", uu.minimap.iconRotation)));
        const Eu = null === uu || void 0 === uu ? void 0 : uu.searchArea;
        for (const ju of [this.searchAreas.minimap, this.searchAreas.map])
          if (ju && (Ej(ju, !Eu), Eu)) {
            if (this.searchAreaPath.seed !== Eu.shapeSeed && (this.searchAreaPath = {
                seed: Eu.shapeSeed,
                d: zE(yE(Eu.shapeSeed))
              }), ju.dataset.shapeSeed !== Eu.shapeSeed) {
              ju.dataset.shapeSeed = Eu.shapeSeed;
              for (const uu of ju.querySelectorAll("path")) uu.setAttribute("d", this.searchAreaPath.d)
            }
            ju.style.left = `${Eu.left}%`, ju.style.top = `${Eu.top}%`, ju.style.width = `${Eu.width}%`, ju.style.height = `${Eu.height}%`
          } if (this.player && (Ej(this.player, !(null !== uu && void 0 !== uu && uu.player) || uu.player.hidden), null !== uu && void 0 !== uu && uu.player && (this.player.style.left = `${uu.player.left}%`, this.player.style.top = `${uu.player.top}%`, this.player.style.setProperty("--map-player-rotation", uu.player.rotation))), this.waypoint) {
          const {
            root: Eu,
            marker: ju,
            clip: su,
            text: Uu,
            label: Zu,
            distance: Xu,
            hint: lu
          } = this.waypoint, qu = !(null !== uu && void 0 !== uu && uu.waypoint) || null !== uu.waypoint.popupToken && uu.waypoint.popupToken !== this.waypointOriginToken;
          Ej(Eu, qu);
          let fu = 1;
          const Cu = this.waypointLaunch;
          if (!qu && Cu && uu.waypoint.nameKey === Cu.nameKey) {
            const uu = performance.now();
            Cu.startedAt ??= uu, fu = Math.min(1, Math.max(0, (uu - Cu.startedAt - 450) / 1e3)), ju.style.opacity = String(Math.min(1, (uu - Cu.startedAt) / 150)), 1 === fu && (this.waypointLaunch = null)
          } else ju.style.opacity = "", Cu && null !== Cu.startedAt && (this.waypointLaunch = null);
          if (Eu.classList.toggle("Launching", fu < 1), null !== uu && void 0 !== uu && uu.waypoint) {
            const Eu = this.waypointInset,
              qu = "quest_talk" === uu.waypoint.markerIcon ? function(uu, Eu, ju) {
                if (!uu.text || null === uu.blockHeight || 0 === uu.nearness) return uu;
                const su = uu.blockHeight / 100 * ju.height,
                  Uu = -uu.nearness * (jj * su + Eu.width / 2),
                  Zu = uu.nearness * (sj * su + Eu.height / 2);
                return {
                  ...uu,
                  text: {
                    x: uu.text.x + Uu / ju.width * 100,
                    y: uu.text.y + Zu / ju.height * 100
                  }
                }
              }(uu.waypoint, this.waypointMarkerSize, this.viewport) : uu.waypoint,
              bu = (0, dE.d)(qu, Eu, this.viewport),
              cu = fu * fu * (3 - 2 * fu),
              Nu = fu < 1 ? Cu.x + (bu.x - Cu.x) * cu : bu.x,
              Ou = fu < 1 ? Cu.y + (bu.y - Cu.y) * cu : bu.y;
            ju.style.translate = `${Nu}vw ${Ou}vh`, su.style.clipPath = `inset(${Eu.top}px ${Eu.x}px ${Eu.bottom}px)`, Ej(Uu, fu < 1 || !uu.waypoint.text), Uu.style.opacity = String(1 - uu.waypoint.nearness), uu.waypoint.text && (Uu.style.translate = `${uu.waypoint.text.x}vw ${uu.waypoint.text.y}vh`), Zu.textContent !== uu.waypoint.name && (Zu.textContent = uu.waypoint.name), this.markerIcon !== uu.waypoint.markerIcon && (this.markerIcon = uu.waypoint.markerIcon, ju.replaceChildren(TE(this.markerIcon))), Xu.textContent !== uu.waypoint.distance && (Xu.textContent = uu.waypoint.distance), Ej(lu, null === uu.waypoint.hint), null !== uu.waypoint.hint && lu.textContent !== uu.waypoint.hint && (lu.textContent = uu.waypoint.hint)
          }
        }
      }
      dispose() {
        var uu, Eu;
        this.mountWaypointOrigin(null), this.render(null), null === (uu = this.stopLayout) || void 0 === uu || uu.call(this), this.stopLayout = null, null === (Eu = this.stopWaypoint) || void 0 === Eu || Eu.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.fO = !0
      }
    }

    function Ej(uu, Eu) {
      uu.hidden !== Eu && (uu.hidden = Eu)
    }
    const jj = .55,
      sj = .6;
    const Uj = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class Zj {
      constructor(uu, Eu, ju, su) {
        this.map = uu, this.quests = Eu, this.compass = ju, this.display = new uj, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.fO = !1, this.snapshot = null, this.texts = new Map, this.translate = su
      }
      setTranslator(uu, Eu) {
        this.translate = uu, this.locale = Eu, this.metresFormat = new Intl.NumberFormat(Eu), this.texts.clear()
      }
      translateCached(uu, Eu) {
        const ju = void 0 === Eu ? uu : `${uu} ${Eu}`;
        let su = this.texts.get(ju);
        return void 0 === su && (this.texts.size >= 500 && this.texts.clear(), su = this.translate(uu, void 0 === Eu ? void 0 : {
          distance: Eu
        }), this.texts.set(ju, su)), su
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(uu, Eu, ju) {
        if (this.fO) return;
        if (!uu) return this.snapshot = null, void this.display.render(null);
        const su = this.map.getSnapshot().map,
          qu = ju.cameraHeading,
          fu = {
            ...this.display.compassSize,
            tanHalfFovX: ju.tanHalfFovX,
            pitch: ju.cameraPitch
          },
          Cu = [];
        if (su)
          for (const Uu of this.compass.frame(uu, qu, Eu)) {
            const uu = Yu(Uu.offset, fu);
            null !== uu && Cu.push({
              ...Uu,
              left: uu
            })
          }
        const bu = function(uu, Eu) {
            const ju = [],
              su = uu => "quest" === uu.kind ? uu.distance - 1 : uu.distance,
              Uu = [...uu].sort(((uu, Eu) => su(uu) - su(Eu) || uu.id.localeCompare(Eu.id)));
            for (const Zu of Uu) {
              let uu = !1;
              if ("quest" !== Zu.kind)
                for (const su of ju)
                  if (Math.abs(su.left - Zu.left) < Eu) {
                    uu = !0;
                    break
                  } uu || ju.push(Zu)
            }
            return ju
          }(Cu, this.display.compassSpacing),
          cu = function(uu) {
            let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              ju = null;
            for (const su of uu) Math.abs(su.offset) <= Eu && (!ju || su.distance < ju.distance || su.distance === ju.distance && Math.abs(su.offset) < Math.abs(ju.offset)) && (ju = su);
            return ju
          }(bu),
          Nu = uu => {
            var Eu;
            return null !== (Eu = uu.displayName) && void 0 !== Eu ? Eu : this.translateCached(uu.nameKey)
          },
          Ou = {
            compass: {
              markers: bu.map((uu => ({
                id: uu.id,
                icon: uu.icon,
                colour: uu.colour,
                name: Nu(uu),
                left: uu.left
              }))),
              cardinals: Xu.map((uu => {
                let {
                  name: Eu,
                  bearing: ju
                } = uu;
                const su = Yu(Uu.b.computeShortestRotation(qu, ju), fu);
                return {
                  name: Eu,
                  left: null !== su && void 0 !== su ? su : 0,
                  hidden: null === su
                }
              })),
              label: cu ? `${Nu(cu)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",pu(cu.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== su && void 0 !== su && su.background) {
          const Eu = uu[0] - su.mapOrigin[0],
            ju = uu[2] - su.mapOrigin[2],
            {
              rotation: Uu,
              transform: Xu
            } = function(uu, Eu, ju, su) {
              const [Uu, Xu] = lu(uu, Eu, su), qu = Zu - ju;
              return {
                rotation: qu,
                transform: `rotate(${qu}rad) translate(-${Uu}%, -${Xu}%)`
              }
            }(Eu, ju, qu, su.background.bounds);
          Ou.minimap = {
            transform: Xu,
            iconRotation: -Uu + "rad"
          };
          const [fu, Cu] = lu(Eu, ju, su.background.bounds);
          Ou.player = {
            left: fu,
            top: Cu,
            hidden: fu < 0 || Cu < 0 || fu > 100 || Cu > 100,
            rotation: -Uu + "rad"
          }
        }
        const {
          waypoint: hu
        } = this.quests.getSnapshot();
        if ("search" === (null === hu || void 0 === hu ? void 0 : hu.questMarkerIcon) && null !== su && void 0 !== su && su.background) {
          const {
            bounds: uu
          } = su.background, [Eu, ju] = lu(hu.position[0] - su.mapOrigin[0], hu.position[2] - su.mapOrigin[2], uu);
          Ou.searchArea = {
            left: Eu,
            top: ju,
            width: 6400 / (uu.mapMaxX - uu.mapMinX),
            height: 6400 / (uu.mapMaxZ - uu.mapMinZ),
            shapeSeed: hu.nameKey
          }
        }
        const Du = this.quests.getNotificationSnapshot(),
          gu = "completion" === (null === Du || void 0 === Du ? void 0 : Du.phase) && !JE(Du.kind);
        if (hu && !gu) {
          const Eu = Math.hypot(...hu.position.map(((Eu, ju) => Eu - uu[ju]))),
            su = Math.round(Eu),
            Uu = "talk" === hu.questMarkerIcon ? Math.min(1, Math.max(0, (10 - Eu) / 5)) : 0,
            Zu = ju.projectWorldPosToViewport(hu.position),
            Xu = Zu && ju.projectWorldPosToViewport([hu.position[0], hu.position[1] - 1, hu.position[2]]);
          Ou.waypoint = {
            ...ju.projectWorldPosToScreenPos(hu.position),
            text: Zu,
            nearness: Uu * Uu * (3 - 2 * Uu),
            blockHeight: Zu && Xu ? Xu.y - Zu.y : null,
            name: this.translateCached(hu.nameKey),
            nameKey: hu.nameKey,
            markerIcon: hu.questMarkerIcon ? Uj[hu.questMarkerIcon] : "quest",
            popupToken: (null === Du || void 0 === Du ? void 0 : Du.waypointNameKey) === hu.nameKey ? Du.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(su)),
            hint: "search" === hu.questMarkerIcon && Math.hypot(hu.position[0] - uu[0], hu.position[2] - uu[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = Ou, this.display.render(Ou)
      }
      dispose() {
        this.fO = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const Xj = "skyblockSkillsView";
    class lj extends bu {
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          ju = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : uu => uu,
          su = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          Uu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : uu => uu;
        super(uu, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = Eu, this.translate = ju, this.locale = su, this.itemName = Uu, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
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
      setTranslator(uu, Eu, ju) {
        this.translate = uu, this.locale = Eu, this.itemName = ju, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(uu) {
        let Eu = this.skillText.get(uu);
        return Eu || (Eu = {
          label: this.translate(`skyblockGame:${uu}`),
          description: this.translate(`skyblockGame:${uu}Description`)
        }, this.skillText.set(uu, Eu)), Eu
      }
      sources(uu) {
        if ("mining" === uu || "fishing" === uu) return this.buildSources(uu);
        let Eu = this.sourceText.get(uu);
        return Eu || (Eu = this.buildSources(uu), this.sourceText.set(uu, Eu)), Eu
      }
      buildSources(uu) {
        const Eu = this.translate;
        return "exploration" === uu ? [Eu("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), Eu("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === uu ? [Eu("skyblockGame:logSource", {
          xp: this.number(NE["Maple Log"])
        })] : "combat" === uu ? [Eu("skyblockGame:creatureKillSource"), Eu("skyblockGame:noEnvironmentalXp")] : "farming" === uu ? [Eu("skyblockGame:cropSource", {
          xp: this.number(hE["Wheat|FreshlyGrown"])
        }), Eu("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), Eu("skyblockGame:noYoungCropXp")] : Object.entries("mining" === uu ? YE : DE).map((uu => {
          let [ju, su] = uu;
          return Eu("skyblockGame:itemXpSource", {
            item: this.itemName(ju),
            xp: this.number(su)
          })
        }))
      }
      number(uu) {
        return uu.toLocaleString(this.locale)
      }
      benefit(uu, Eu) {
        const ju = XE(uu, Eu);
        return this.translate(ju.translationKey, {
          bonus: this.number(ju.percent)
        })
      }
      NO(uu) {
        if (!this.fO) {
          if ("snapshot" === uu.kind) this.progress = uu.progress, this.pending.clear(), this.recent = null;
          else if ("award" === uu.kind && this.progress) {
            const {
              award: Eu
            } = uu;
            this.progress = {
              ...this.progress,
              [Eu.skill]: Eu.after
            };
            for (const [uu, su] of this.pending) su.skill === Eu.skill && this.pending.delete(uu);
            const ju = Eu.after.level > Eu.before.level;
            this.recordGain(Eu.skill, Eu.amount, ju ? ++this.nextLevelUpToken : null), ju && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: Eu.skill,
              beforeLevel: Eu.before.level,
              level: Eu.after.level
            })
          } else {
            if ("rejectBlock" === uu.kind) return void this.rejectBlock(uu.position);
            if ("open" === uu.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(uu, Eu, ju) {
        if (!this.progress || this.fO || ju) return;
        const su = function(uu, Eu) {
          const ju = uu.split("|")[0];
          return "Air" === Eu || Eu === `Barkless ${uu}` ? Object.hasOwn(NE, ju) ? {
            skill: "foraging",
            amount: NE[ju]
          } : "Air" !== Eu ? null : Object.hasOwn(YE, uu) ? {
            skill: "mining",
            amount: YE[uu]
          } : CE(uu) ? {
            skill: "farming",
            amount: 10
          } : cE(uu) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(hE, uu) ? {
            skill: "farming",
            amount: hE[uu]
          } : Object.hasOwn(Wu, uu) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(Eu, "Air");
        if (!su) return;
        const Uu = uu.join(",");
        if (this.pending.has(Uu)) return;
        const Zu = this.predictedProgress(su.skill).totalXp + su.amount;
        Number.isSafeInteger(Zu) && (this.pending.set(Uu, {
          ...su,
          expires: this.now() + 2e3
        }), this.recordGain(su.skill, 0), this.emit())
      }
      rejectBlock(uu) {
        this.pending.delete(uu.join(",")) && this.emit()
      }
      Tb() {
        if (this.fO) return;
        let uu = !1;
        for (const [Eu, ju] of this.pending) ju.expires <= this.now() && (this.pending.delete(Eu), uu = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, uu = !0), uu && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(uu, Eu) {
        var ju, su;
        let Uu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Zu = (null === (ju = this.recent) || void 0 === ju ? void 0 : ju.skill) === uu && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          Xu = (null === (su = this.recent) || void 0 === su ? void 0 : su.skill) === uu && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: uu,
          confirmed: Zu + Eu,
          expires: this.now() + 3e3,
          levelUpToken: null !== Uu && void 0 !== Uu ? Uu : Xu
        }
      }
      pendingXp(uu) {
        let Eu = 0;
        for (const ju of this.pending.values()) ju.skill === uu && (Eu += ju.amount);
        return Eu
      }
      predictedProgress(uu) {
        const Eu = this.progress[uu],
          ju = this.pendingXp(uu);
        return ju ? qE(Eu.totalXp + ju, uu) : Eu
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var uu, Eu, ju;
        const su = this.progress ? nu.map((uu => {
            const Eu = this.predictedProgress(uu);
            return {
              ...this.text(uu),
              icon: gE[uu],
              benefit: this.benefit(uu, Eu.level),
              sources: this.sources(uu),
              id: uu,
              selected: uu === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(Eu.level)
              }),
              xp: null === Eu.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(Eu.xpIntoLevel),
                target: this.number(Eu.xpForNextLevel)
              }),
              percent: null === Eu.xpForNextLevel ? 100 : Math.min(100, Eu.xpIntoLevel / Eu.xpForNextLevel * 100)
            }
          })) : [],
          Uu = su.find((uu => {
            var Eu;
            return uu.id === (null === (Eu = this.recent) || void 0 === Eu ? void 0 : Eu.skill)
          })),
          Zu = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: su,
          detail: null !== (uu = su.find((uu => uu.selected))) && void 0 !== uu ? uu : null,
          overallLevel: this.progress ? nu.reduce(((uu, Eu) => uu + this.predictedProgress(Eu).level), 0) : null,
          hud: Uu && Zu > 0 ? {
            skill: Uu,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(Zu)
            }),
            levelUpToken: null !== (Eu = null === (ju = this.recent) || void 0 === ju ? void 0 : ju.levelUpToken) && void 0 !== Eu ? Eu : null,
            colour: eE(Uu.id)
          } : null
        }
      }
    }
    const qj = Math.max(1600, 600, 950) + 400,
      fj = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      Cj = "skyblockQuestsView",
      bj = "skyblockQuestNotificationView";
    class cj extends bu {
      constructor(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          Xu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(uu, su, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = Eu, this.translate = ju, this.now = Uu, this.locale = Zu, this.publishNotification = Xu, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var uu, Eu;
          this.selected = null !== (uu = null === (Eu = this.authoritative) || void 0 === Eu ? void 0 : Eu.trackedQuestId) && void 0 !== uu ? uu : null, this.show()
        }, this.select = uu => {
          this.selected = uu, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const uu = this.snapshot.detail;
          !this.fO && null !== uu && void 0 !== uu && uu.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(uu.id), this.emit())
        }, this.viewDialogue = () => {
          const uu = this.snapshot.detail;
          var Eu;
          uu && (null === (Eu = this.onViewDialogue) || void 0 === Eu || Eu.call(this, uu.id))
        }, this.notifications = new pE(Uu, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var uu, Eu;
        return null !== (uu = null === (Eu = this.authoritative) || void 0 === Eu ? void 0 : Eu.trackedQuestId) && void 0 !== uu ? uu : null
      }
      notify(uu) {
        !this.fO && this.notifications.enqueue(uu) && this.emitNotification()
      }
      setNotificationsHeld(uu) {
        (this.notifications.setHeld(uu) || uu) && this.emitNotification()
      }
      Tb() {
        var uu, Eu;
        if (this.fO) return;
        this.notifications.Tb() && this.emitNotification();
        let ju = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, ju = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, ju = !0);
        const su = Nj(this.authoritative);
        null !== su && void 0 !== su && null !== (uu = su.questClock) && void 0 !== uu && uu.running && this.clockText(su) !== (null === (Eu = this.snapshot.tracked) || void 0 === Eu ? void 0 : Eu.clock) && (ju = !0), ju && this.emit()
      }
      setTranslator(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = uu, this.locale = Eu, this.emitNotification(), this.emit()
      }
      NO(uu) {
        if (!this.fO)
          if ("completion" === uu.kind) this.notify(uu.questCompletion);
          else if ("landmark" === uu.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: uu.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === uu.kind) {
          var Eu, ju, su;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: uu.npcNoteTitleKey,
            textKey: uu.npcNoteTextKey,
            params: null !== (Eu = uu.npcNoteParams) && void 0 !== Eu ? Eu : {},
            nameKeys: null !== (ju = uu.npcNoteNameKeys) && void 0 !== ju ? ju : {},
            iconItem: null !== (su = uu.npcNoteIconItem) && void 0 !== su ? su : null
          })
        } else if ("open" === uu.kind) this.show();
        else if ("guidance" === uu.kind) this.waypoint = uu.waypoint, this.compassTarget = uu.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === uu.kind) {
          this.authoritative = uu.snapshot, this.notifications.Tb() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const Eu = this.trackedStepPulse;
          this.updateTrackedStepPulse(uu.snapshot), this.emit(), this.trackedStepPulse > Eu && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.fO || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var uu;
        return null !== (uu = this.translateWithIcons) && void 0 !== uu ? uu : this.translate
      }
      clockText(uu) {
        const Eu = uu.questClock;
        if (!Eu) return null;
        const ju = Eu.elapsedMs + (Eu.running ? this.now() - this.receivedAt : 0);
        return void 0 === Eu.countdownFromMs ? Ku(ju, !1) : Ku(1e3 * Math.ceil(Math.max(0, Eu.countdownFromMs - ju) / 1e3), !1)
      }
      updateTrackedStepPulse(uu) {
        var Eu, ju, su;
        const Uu = Nj(uu);
        if (!Uu) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const Zu = uu => Uu.subquests.filter((Eu => uu(Eu.status))).map((uu => uu.id)),
          Xu = Zu((uu => "completed" === uu || "skipped" === uu)),
          lu = Zu((uu => "locked" !== uu)),
          qu = (null === (Eu = this.trackedSteps) || void 0 === Eu ? void 0 : Eu.questId) === Uu.id && Uu.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (qu) {
          const uu = Xu.filter((uu => !qu.finished.has(uu))),
            Eu = Zu((uu => "active" === uu || "ready" === uu)).filter((uu => !qu.unlocked.has(uu)));
          uu.length > 0 && this.trackedStepPulse++, (uu.length > 0 || Eu.length > 0) && (this.trackedChange = {
            finished: new Set(uu),
            unlocked: new Set(Eu),
            expiresAt: this.now() + qj
          })
        } else {
          var fu;
          this.trackedStepPulse = (null === (fu = this.trackedSteps) || void 0 === fu ? void 0 : fu.questId) === Uu.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: Uu.id,
          progress: Uu.progress,
          finished: new Set([...null !== (ju = null === qu || void 0 === qu ? void 0 : qu.finished) && void 0 !== ju ? ju : [], ...Xu]),
          unlocked: new Set([...null !== (su = null === qu || void 0 === qu ? void 0 : qu.unlocked) && void 0 !== su ? su : [], ...lu])
        }
      }
      entry(uu, Eu) {
        var ju, su;
        const Uu = uu.id === (null === (ju = this.authoritative) || void 0 === ju ? void 0 : ju.trackedQuestId),
          Zu = this.now() < this.trackAvailableAt,
          Xu = this.questTextTranslator(),
          lu = uu.subquests.map((Eu => {
            var ju, su, Zu, lu, qu, fu;
            const Cu = null !== (ju = Eu.handInNpcName) && void 0 !== ju ? ju : uu.giverName,
              bu = this.translate("skyblockGame:progress", {
                current: Eu.progress.toLocaleString(this.locale),
                target: Eu.target.toLocaleString(this.locale)
              }),
              cu = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: Cu ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [Eu.status],
              Nu = "active" === Eu.status || "ready" === Eu.status;
            return {
              id: Eu.id,
              name: GE(Xu, Eu.nameKey, Eu.nameParams),
              description: GE(Xu, Eu.descriptionKey, Eu.descriptionParams),
              progress: bu,
              status: Eu.status,
              statusLabel: cu ? this.translate(cu, {
                npc: Cu
              }) : bu,
              iconItem: Nu && null !== (su = Eu.questIconItem) && void 0 !== su ? su : null,
              barPercent: "active" === Eu.status && Eu.showsProgressBar ? Math.min(100, 100 * Eu.progress / Eu.target) : null,
              justFinished: Uu && null !== (Zu = null === (lu = this.trackedChange) || void 0 === lu ? void 0 : lu.finished.has(Eu.id)) && void 0 !== Zu && Zu,
              justUnlocked: Uu && null !== (qu = null === (fu = this.trackedChange) || void 0 === fu ? void 0 : fu.unlocked.has(Eu.id)) && void 0 !== qu && qu
            }
          }));
        return {
          id: uu.id,
          name: GE(Xu, uu.nameKey, uu.nameParams),
          description: GE(Xu, uu.descriptionKey, uu.descriptionParams),
          progress: Eu ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: uu.progress.toLocaleString(this.locale),
            target: uu.target.toLocaleString(this.locale)
          }),
          completed: Eu,
          tracked: Uu,
          selected: uu.id === this.selected,
          canTrack: !Eu && !Uu && !Zu,
          trackLabel: this.translate(Uu ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : Zu ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== uu.id,
          subquests: lu,
          focusStep: null !== (su = lu.find((uu => null !== uu.barPercent))) && void 0 !== su ? su : null,
          clock: this.clockText(uu)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu;
        const Cu = [...null !== (uu = null === (Eu = this.authoritative) || void 0 === Eu ? void 0 : Eu.active) && void 0 !== uu ? uu : [], ...null !== (ju = null === (su = this.authoritative) || void 0 === su ? void 0 : su.completed) && void 0 !== ju ? ju : []];
        var bu, cu, Nu, Ou;
        Cu.some((uu => uu.id === this.selected)) || (this.selected = null !== (bu = null !== (cu = null === (Nu = this.authoritative) || void 0 === Nu ? void 0 : Nu.trackedQuestId) && void 0 !== cu ? cu : null === (Ou = Cu[0]) || void 0 === Ou ? void 0 : Ou.id) && void 0 !== bu ? bu : null);
        const Yu = null !== (Uu = null === (Zu = this.authoritative) || void 0 === Zu ? void 0 : Zu.active.map((uu => this.entry(uu, !1)))) && void 0 !== Uu ? Uu : [];
        Yu.sort(((uu, Eu) => Number(Eu.tracked) - Number(uu.tracked)));
        const hu = null !== (Xu = null === (lu = this.authoritative) || void 0 === lu ? void 0 : lu.completed.map((uu => this.entry(uu, !0)))) && void 0 !== Xu ? Xu : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: Yu,
          completed: hu,
          completedExpanded: this.completedExpanded,
          detail: null !== (qu = [...Yu, ...hu].find((uu => uu.selected))) && void 0 !== qu ? qu : null,
          tracked: null !== (fu = Yu.find((uu => uu.tracked))) && void 0 !== fu ? fu : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function Nj(uu) {
      var Eu;
      return null !== (Eu = null === uu || void 0 === uu ? void 0 : uu.active.find((Eu => Eu.id === uu.trackedQuestId))) && void 0 !== Eu ? Eu : null
    }
    const Oj = "skyblockDungeonsView";
    class Yj extends bu {
      constructor(uu, Eu) {
        let ju = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          su = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(uu, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = Eu, this.locale = ju, this.requestEnter = su, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
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
            Eu = null === uu || void 0 === uu ? void 0 : uu.difficulties[this.pageIndex];
          void 0 !== Eu && null !== Eu.unlockedBoss && (this.close(), this.requestEnter(uu.id, Eu.difficulty))
        }
      }
      setTranslator(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = uu, this.locale = Eu, this.emit()
      }
      NO(uu) {
        var Eu, ju;
        if (!this.fO) return "open" === uu.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== uu.kind ? "snapshot" === uu.kind && (this.authoritative = uu.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (Eu = null === (ju = this.pickerEntry()) || void 0 === ju ? void 0 : ju.difficulties.length) && void 0 !== Eu ? Eu : 1) - 1)), null === uu.snapshot && this.open ? this.close() : this.emit()) : this.choose(uu.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(uu) {
        var Eu;
        const ju = null === (Eu = this.authoritative) || void 0 === Eu ? void 0 : Eu.dungeons.find((Eu => Eu.id === uu));
        void 0 !== ju ? this.open && this.pickerDungeonId === uu || (this.pickerDungeonId = uu, this.pageIndex = Math.max(0, ju.difficulties.findLastIndex((uu => null !== uu.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${uu}`)
      }
      turnTo(uu) {
        var Eu, ju;
        const su = null !== (Eu = null === (ju = this.pickerEntry()) || void 0 === ju ? void 0 : ju.difficulties.length) && void 0 !== Eu ? Eu : 0;
        uu < 0 || uu >= su || uu === this.pageIndex || (this.pageIndex = uu, this.emit())
      }
      pickerEntry() {
        var uu, Eu;
        return null !== (uu = null === (Eu = this.authoritative) || void 0 === Eu ? void 0 : Eu.dungeons.find((uu => uu.id === this.pickerDungeonId))) && void 0 !== uu ? uu : null
      }
      difficulty(uu) {
        const Eu = uu.completions > 0,
          ju = null === uu.bestMs ? null : Ku(uu.bestMs);
        return {
          difficulty: uu.difficulty,
          label: this.translate(mu[uu.difficulty]),
          colour: vu[uu.difficulty],
          beaten: Eu,
          bestTime: ju,
          completions: uu.completions,
          summary: Eu ? [null === ju ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: ju
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: uu.completions.toLocaleString(this.locale)
          })].filter((uu => null !== uu)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(uu) {
        const Eu = uu.difficulties.map((uu => this.difficulty(uu))),
          ju = Eu.filter((uu => uu.beaten)).length;
        return {
          id: uu.id,
          name: this.translate(uu.nameKey),
          selected: uu.id === this.selected,
          beatenSummary: `${ju} / ${Eu.length}`,
          difficulties: Eu
        }
      }
      picker() {
        const uu = this.pickerEntry();
        if (null === uu || 0 === uu.difficulties.length) return null;
        const Eu = uu.difficulties.map(((Eu, ju) => {
          var su, Uu, Zu, Xu;
          const lu = Eu.unlockedBoss,
            qu = null === lu ? this.lockedHint(uu, ju) : null;
          return {
            ...this.difficulty(Eu),
            unlocked: null !== lu,
            bossName: null === lu ? null : this.translate(lu.bossNameKey),
            bossMobType: null !== (su = null === lu || void 0 === lu ? void 0 : lu.bossMobType) && void 0 !== su ? su : null,
            bossMobVariation: null !== (Uu = null === lu || void 0 === lu ? void 0 : lu.bossMobVariation) && void 0 !== Uu ? Uu : null,
            lockedHint: null !== (Zu = null === qu || void 0 === qu ? void 0 : qu.text) && void 0 !== Zu ? Zu : null,
            lockedHintHighlight: null !== (Xu = null === qu || void 0 === qu ? void 0 : qu.highlight) && void 0 !== Xu ? Xu : null,
            current: ju === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(uu.nameKey),
          pages: Eu,
          page: Eu[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < Eu.length - 1
        }
      }
      lockedHint(uu, Eu) {
        var ju, su, Uu;
        if (0 === Eu && "number" === typeof uu.combatLevelLock) {
          const Eu = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: uu.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: Eu,
            colour: eE("combat"),
            icon: gE.combat
          })
        }
        const Zu = null !== (ju = null === (su = this.authoritative) || void 0 === su ? void 0 : su.dungeons) && void 0 !== ju ? ju : [],
          Xu = Eu > 0 ? uu : null !== (Uu = Zu[Zu.indexOf(uu) - 1]) && void 0 !== Uu ? Uu : null,
          lu = Eu > 0 ? uu.difficulties[Eu - 1] : null === Xu || void 0 === Xu ? void 0 : Xu.difficulties[0];
        if (null === Xu || void 0 === lu) return null;
        const qu = this.translate(Xu.nameKey);
        if (null === lu.unlockedBoss) return Xu === uu ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, lu.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: qu
        }, lu.difficulty);
        const fu = this.translate(lu.unlockedBoss.bossNameKey);
        return Xu === uu ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: fu
        }, lu.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: fu,
            dungeon: qu
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(uu, Eu, ju) {
        return this.hintHighlighting(uu, Eu, "difficulty", {
          name: this.translate(mu[ju]),
          colour: vu[ju],
          icon: null
        })
      }
      hintHighlighting(uu, Eu, ju, su) {
        let {
          name: Uu,
          colour: Zu,
          icon: Xu
        } = su;
        const lu = this.translate(uu, {
          ...Eu,
          [ju]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(uu, {
            ...Eu,
            [ju]: Uu
          }),
          highlight: 2 === lu.length ? {
            before: lu[0],
            name: Uu,
            after: lu[1],
            colour: Zu,
            icon: Xu
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var uu, Eu, ju;
        const su = null !== (uu = null === (Eu = this.authoritative) || void 0 === Eu ? void 0 : Eu.dungeons) && void 0 !== uu ? uu : [];
        var Uu, Zu;
        su.some((uu => uu.id === this.selected)) || (this.selected = null !== (Uu = null === (Zu = su[0]) || void 0 === Zu ? void 0 : Zu.id) && void 0 !== Uu ? Uu : null);
        const Xu = su.map((uu => this.entry(uu)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: Xu,
          detail: null !== (ju = Xu.find((uu => uu.selected))) && void 0 !== ju ? ju : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const hj = ["mining", "farming", "foraging", "fishing", "combat"],
      Dj = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      gj = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function Mj() {
      for (var uu = arguments.length, Eu = new Array(uu), ju = 0; ju < uu; ju++) Eu[ju] = arguments[ju];
      return Eu.map(((uu, Eu) => ({
        amount: uu,
        coins: Dj[Eu],
        xp: gj[Eu]
      })))
    }
    const ej = Mj(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      Gj = Mj(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      pj = Mj(50, 100, 250, 500, 1e3, 2500, 5e3),
      wj = Mj(25, 50, 100, 250, 500, 1e3),
      Jj = Mj(10, 25, 50, 100, 250, 500, 1e3),
      dj = Mj(1, 5, 10, 25, 50);

    function aj(uu, Eu) {
      return {
        id: uu,
        category: "fishing",
        item: Eu,
        drops: [Eu],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Jj
      }
    }
    const Pj = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: Gj
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: pj
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: pj
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: wj
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: wj
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: Gj
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: ej
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: ej
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: ej
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: pj
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: Gj
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: Gj
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: Gj
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: pj
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: pj
      }, aj("wheatfish", "Wheatfish"), aj("darter", "Darter"), aj("sunset_minnow", "Sunset Minnow"), aj("root_flounder", "Root Flounder"), aj("greenfin_loach", "Greenfin Loach"), aj("red_strongfish", "Red Strongfish"), aj("green_strongfish", "Green Strongfish"), aj("boomerang_fish", "Boomerang Fish"), aj("seahorse", "Seahorse"), aj("spined_stickleback", "Spined Stickleback"), aj("moon_strongfish", "Moon Strongfish"), aj("boulder_bass", "Boulder Bass"), aj("grass_snapper", "Grass Snapper"), aj("crystal_wheatfish", "Crystalized Wheatfish", dj), aj("moonstone_pupfish", "Moonstone Pupfish", dj), aj("reedglass_minnow", "Reedglass Minnow"), aj("mangrove_herring", "Mangrove Herring"), aj("mudline_perch", "Mudline Perch"), aj("coastal_mullet", "Coastal Mullet"), aj("reef_sardine", "Reef Sardine"), aj("root_perch", "Root Perch"), aj("driftwood_catfish", "Driftwood Catfish"), aj("aether_minnow", "Aether Minnow"), aj("needlefish", "Tri-Pointed Needlefish"), aj("threadfin_bream", "Threadfin Bream"), aj("mudbelly_tilapia", "Mudbelly Tilapia"), aj("rotslab_eel", "Rotslab Eel"), aj("polarflash_electron", "Polarflash Electron"), aj("mireback_carp", "Mireback Carp"), aj("blackwater_bream", "Blackwater Bream"), aj("stone_grouper", "Stone Grouper"), aj("shadeback_ray", "Shadeback Ray"), aj("glacial_silverfish", "Glacial Silverfish"), aj("hatchetfish", "Hatchetfish"), aj("moonlit_boomerang", "Moonlit Boomerang Fish"), aj("murkborne_ray", "Murkborne Ray"), aj("bamboo_catfish", "Bamboo Catfish"), aj("mossback_arapaima", "Mossback Arapaima"), aj("murk_stingray", "Murk Stingray"), aj("channel_sawfish", "Channel Sawfish"), aj("boned_sturgeon", "Boned Sturgeon"), aj("oarfish", "Oarfish"), aj("snakehead", "Snakehead", dj), aj("eldertide_leviathan", "Eldertide Leviathan", dj), aj("pithead", "Pithead"), aj("electric_eel", "Electric Eel"), aj("shadow_darter", "Shadow Darter"), aj("abyss_carp", "Abyss Carp"), aj("nomai_moray", "Nomai Moray"), aj("silver_dragonfish", "Silver Dragonfish"), aj("giant_moray", "Giant Moray"), aj("coelacanth", "Coelacanth", dj), aj("frost_herring", "Frost Herring"), aj("permafrost_halibut", "Permafrost Halibut"), aj("glacial_lanternfish", "Glacial Lanternfish"), aj("frozen_grenadier", "Frozen Grenadier"), aj("blackfin_icefish", "Blackfin Icefish"), aj("moonfish", "Moonfish"), aj("alpha_strongfish", "Alpha Moon Strongfish"), aj("deep_lanternfish", "Deepwater Lanternfish", dj), aj("pearlescent_moonfish", "Pearlescent Moonfish", dj), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: Gj
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: wj
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: wj
      }],
      oj = (new Map(Pj.map((uu => [uu.id, uu]))), new Map),
      kj = new Map;
    for (const Cq of Pj) {
      for (const [uu, Eu] of Object.entries(null !== (mj = Cq.blocks) && void 0 !== mj ? mj : {})) {
        var mj;
        oj.set(uu, {
          collection: Cq,
          amount: Eu
        })
      }
      for (const uu of null !== (vj = Cq.drops) && void 0 !== vj ? vj : []) {
        var vj;
        kj.set(uu, Cq)
      }
    }

    function Kj(uu, Eu) {
      let ju = 0;
      for (; ju < uu.tiers.length && Eu >= uu.tiers[ju].amount;) ju++;
      return ju
    }
    const Vj = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function rj(uu) {
      return Vj[uu - 1]
    }
    const Qj = "skyblockCollectionsView";
    class ij extends bu {
      constructor(uu, Eu) {
        let ju = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          su = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : uu => uu;
        super(uu, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = Eu, this.locale = ju, this.itemName = su, this.counts = null, this.category = "mining", this.selected = Pj[0].id, this.snapshot = {
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
      setTranslator(uu, Eu, ju) {
        this.translate = uu, this.locale = Eu, this.itemName = ju, this.emit()
      }
      NO(uu) {
        if (!this.fO)
          if ("collOpen" !== uu.kind) {
            (uu.collFull || null === this.counts) && (this.counts = new Map);
            for (const [Eu, ju] of uu.collCounts) this.counts.set(Eu, ju);
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
        const Eu = this.inCategory(this.category).map((uu => this.collectionView(uu))),
          ju = Pj.reduce(((uu, Eu) => uu + this.tierOf(Eu)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: hj.map((uu => this.categoryView(uu))),
          collections: Eu,
          detail: null !== (uu = Eu.find((uu => uu.selected))) && void 0 !== uu ? uu : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(ju)
          })
        }
      }
      categoryView(uu) {
        const Eu = this.inCategory(uu),
          ju = Eu.reduce(((uu, Eu) => uu + this.tierOf(Eu)), 0),
          su = Eu.reduce(((uu, Eu) => uu + Eu.tiers.length), 0);
        return {
          id: uu,
          label: this.translate(`skyblockGame:${uu}`),
          icon: gE[uu],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(ju),
            target: this.number(su)
          }),
          selected: uu === this.category
        }
      }
      collectionView(uu) {
        var Eu, ju;
        const su = null !== (Eu = this.counts.get(uu.id)) && void 0 !== Eu ? Eu : 0,
          Uu = Kj(uu, su),
          Zu = null !== (ju = uu.tiers[Uu]) && void 0 !== ju ? ju : null,
          Xu = 0 === Uu ? 0 : uu.tiers[Uu - 1].amount;
        return {
          id: uu.id,
          name: this.itemName(uu.item),
          icon: uu.item,
          selected: uu.id === this.selected,
          locked: 0 === su,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(su)
          }),
          tier: 0 === Uu ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(Uu),
          percent: null === Zu ? 100 : Math.min(100, (su - Xu) / (Zu.amount - Xu) * 100),
          progress: null === Zu ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(su),
            target: this.number(Zu.amount)
          }),
          nextReward: null === Zu ? null : this.reward(uu, Zu.coins, Zu.xp)
        }
      }
      reward(uu, Eu, ju) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(Eu),
          xp: this.number(ju),
          skill: this.translate(`skyblockGame:${uu.category}`)
        })
      }
      tierLabel(uu) {
        return this.translate("skyblockGame:collectionTier", {
          tier: rj(uu)
        })
      }
      tierOf(uu) {
        var Eu;
        return Kj(uu, null !== (Eu = this.counts.get(uu.id)) && void 0 !== Eu ? Eu : 0)
      }
      inCategory(uu) {
        return Pj.filter((Eu => Eu.category === uu))
      }
      number(uu) {
        return uu.toLocaleString(this.locale)
      }
    }
    const Wj = "skyblockPortalTransitView",
      Sj = "skyblockPortalArrival";
    class Ij {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.TY = uu, this.storage = Eu, this.now = ju, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      NO(uu) {
        const Eu = {
          zoneNameKey: uu.transitZoneNameKey,
          variation: uu.transitZoneVariation,
          colour: uu.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(Sj, Eu), this.show("departure", Eu.zoneNameKey, Eu.colour, uu.transitDurationMs, uu.transitDurationMs + 1500, (() => {
          this.storage.removeItem(Sj)
        }))
      }
      resumeArrival(uu) {
        const Eu = this.storage.getItem(Sj);
        this.storage.removeItem(Sj), null === Eu || Eu.variation !== uu || this.now() - Eu.departedAt > 3e4 || this.show("arrival", Eu.zoneNameKey, Eu.colour, 3200, 2e4)
      }
      finishArrival(uu) {
        var Eu;
        "arrival" === (null === (Eu = this.view) || void 0 === Eu ? void 0 : Eu.phase) && this.view.token === uu && (this.clearTimer(), this.view = null, this.TY(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(uu, Eu, ju, su, Uu, Zu) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: uu,
          zoneNameKey: Eu,
          colour: ju,
          durationMs: su
        }, this.TY(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.TY(null), null === Zu || void 0 === Zu || Zu()
        }), Uu)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const Fj = "skyblockDailyRewardView",
      Bj = "skyblockDailyRewardCoin";
    class Lj {
      constructor(uu, Eu, ju, su) {
        let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          Xu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          lu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          qu = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.TY = uu, this.isBusy = Eu, this.holdQuestPopups = ju, this.onHeldCoinsChanged = su, this.onCoinLanded = Uu, this.onStarted = Zu, this.onFinished = Xu, this.onItemLanded = lu, this.now = qu, this.dl = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var uu, Eu;
        return null !== (uu = null === (Eu = this.playing) || void 0 === Eu ? void 0 : Eu.view) && void 0 !== uu ? uu : null
      }
      getHeldCoins() {
        var uu, Eu;
        let ju = 0;
        for (const su of this.dl) ju += su.coins;
        return ju - (null !== (uu = null === (Eu = this.playing) || void 0 === Eu ? void 0 : Eu.released) && void 0 !== uu ? uu : 0)
      }
      NO(uu) {
        "dailyRewardClaimed" !== uu.kind ? (this.queue.push(uu), this.Tb()) : this.dl.push({
          coins: uu.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      Tb() {
        const uu = this.now();
        if (null === this.playing) return this.releaseUnshown(uu), void this.startNext(uu);
        const Eu = this.playing,
          ju = uu - Eu.startedAt,
          su = Eu.view.flyingCoins,
          Uu = function(uu, Eu) {
            let ju = 0;
            for (; ju < Eu && xj(ju, Eu) <= uu;) ju++;
            return ju
          }(ju, su);
        if (Uu !== Eu.landed) {
          for (let uu = Uu - Eu.landed > 2 ? Uu - 1 : Eu.landed; uu < Uu; uu++) this.onCoinLanded(uu, su);
          Eu.landed = Uu, Eu.released = Math.round(Eu.view.coins * Uu / su), this.onHeldCoinsChanged()
        }
        for (; Eu.itemsLanded < Eu.view.items.length && 2e3 + 160 * Eu.itemsLanded + 630 <= ju;) this.onItemLanded(Eu.itemsLanded), Eu.itemsLanded++;
        ju >= Eu.view.durationMs && (this.finish(), this.startNext(uu))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.dl = [], this.TY(null)
      }
      startNext(uu) {
        if (0 === this.queue.length || this.isBusy()) return;
        const Eu = this.queue.shift();
        this.token++;
        const ju = {
          token: this.token,
          day: Eu.dailyRewardDay,
          coins: Eu.dailyRewardCoins,
          items: Eu.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: Eu.dailyRewardDay === Pu ? 24 : 14
        };
        this.playing = {
          view: ju,
          startedAt: uu,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.TY(ju), this.onStarted(ju)
      }
      finish() {
        this.dl.shift(), this.playing = null, this.holdQuestPopups(!1), this.TY(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(uu) {
        if (this.queue.length > 0 || 0 === this.dl.length) return;
        const Eu = this.dl.length;
        this.dl = this.dl.filter((Eu => uu - Eu.receivedAt < 6e4)), this.dl.length !== Eu && this.onHeldCoinsChanged()
      }
    }

    function tj(uu, Eu) {
      return 450 + 715 * uu / (Eu - 1)
    }

    function xj(uu, Eu) {
      return tj(uu, Eu) + 650
    }
    const Tj = "skyblockMailboxView";
    class Hj {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.TY = uu, this.isBusy = Eu, this.onStarted = ju, this.now = su, this.waiting = [], this.playing = null, this.token = 0, this.itemName = uu => uu
      }
      getSnapshot() {
        var uu, Eu;
        return null !== (uu = null === (Eu = this.playing) || void 0 === Eu ? void 0 : Eu.view) && void 0 !== uu ? uu : null
      }
      setItemName(uu) {
        this.itemName = uu
      }
      NO(uu) {
        this.waiting.push(...uu.mailLetters), this.Tb()
      }
      Tb() {
        const uu = this.now();
        null !== this.playing && uu - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.TY(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(uu)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.TY(null)
      }
      start(uu) {
        const Eu = this.waiting.slice(0, 3);
        this.token++;
        const ju = {
          token: this.token,
          letters: Eu.map((uu => this.toView(uu))),
          more: this.waiting.length - Eu.length,
          durationMs: 4500 + 700 * Eu.length
        };
        this.waiting = [], this.playing = {
          view: ju,
          startedAt: uu
        }, this.TY(ju), this.onStarted(ju)
      }
      toView(uu) {
        return {
          coins: uu.mailCoins,
          items: uu.mailItems.map((uu => {
            var Eu;
            return {
              itemName: uu.mailItemName,
              amount: uu.mailItemAmount,
              label: null !== (Eu = uu.mailItemLabel) && void 0 !== Eu ? Eu : this.itemName(uu.mailItemName)
            }
          })),
          reasonKey: uu.mailReasonKey,
          reasonParams: uu.mailReasonParams
        }
      }
    }
    const Aj = "skyblockQuestGraphView",
      nj = "skyblockDevQuestJump";

    function yj(uu) {
      if (0 === uu.length) return "";
      const Eu = [`M ${uu[0].x} ${uu[0].y}`];
      for (let su = 1; su < uu.length - 1; su++) {
        const ju = uu[su + 1];
        Eu.push(`Q ${uu[su].x} ${uu[su].y} ${(uu[su].x+ju.x)/2} ${(uu[su].y+ju.y)/2}`)
      }
      const ju = uu[uu.length - 1];
      return Eu.push(`L ${ju.x} ${ju.y}`), Eu.join(" ")
    }

    function zj(uu, Eu) {
      return uu < Eu ? `${uu}|${Eu}` : `${Eu}|${uu}`
    }
    class Rj extends bu {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          Xu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          lu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(uu, ju, su), this.translate = Eu, this.requestJump = Uu, this.requestArrive = Zu, this.storage = Xu, this.now = lu, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
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
      NO(uu) {
        if (!this.fO)
          if ("graph" !== uu.kind) {
            if ("jumping" === uu.kind) {
              const Eu = {
                questId: uu.graphQuestId,
                variation: uu.graphVariation,
                completes: uu.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(nj, Eu)
            }
          } else {
            const Eu = ++this.graphCount;
            ju.e(120).then((() => ju(6642))).then((ju => {
              let {
                default: su
              } = ju;
              this.fO || Eu !== this.graphCount || (this.layout = function(uu, Eu, ju) {
                var su, Uu;
                const Zu = new uu.graphlib.Graph;
                Zu.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), Zu.setDefaultEdgeLabel((() => ({})));
                const Xu = new Set;
                for (const Cu of Eu) Xu.add(Cu.graphQuestId), Zu.setNode(Cu.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const lu = ju.filter((uu => Xu.has(uu.graphFromId) && Xu.has(uu.graphToId) && uu.graphFromId !== uu.graphToId)),
                  qu = new Map;
                for (const Cu of [...lu].sort(((uu, Eu) => Number("awaits" === uu.graphEdgeKind) - Number("awaits" === Eu.graphEdgeKind)))) {
                  const uu = zj(Cu.graphFromId, Cu.graphToId);
                  qu.has(uu) || (qu.set(uu, Cu), Zu.setEdge(Cu.graphFromId, Cu.graphToId))
                }
                uu.layout(Zu);
                const fu = Zu.graph();
                return {
                  width: Math.ceil(null !== (su = fu.width) && void 0 !== su ? su : 0),
                  height: Math.ceil(null !== (Uu = fu.height) && void 0 !== Uu ? Uu : 0),
                  nodes: Eu.map((uu => {
                    var Eu, ju;
                    const su = Zu.node(uu.graphQuestId);
                    return {
                      node: uu,
                      left: (null !== (Eu = su.x) && void 0 !== Eu ? Eu : 0) - 95,
                      top: (null !== (ju = su.y) && void 0 !== ju ? ju : 0) - 26
                    }
                  })),
                  edges: lu.map((uu => {
                    var Eu;
                    const ju = qu.get(zj(uu.graphFromId, uu.graphToId)),
                      su = null !== (Eu = Zu.edge(ju.graphFromId, ju.graphToId).points) && void 0 !== Eu ? Eu : [];
                    return {
                      edge: uu,
                      key: `${uu.graphFromId}|${uu.graphToId}|${uu.graphEdgeKind}`,
                      path: yj(ju.graphFromId === uu.graphFromId ? su : [...su].reverse())
                    }
                  })),
                  plans: new Map(Eu.map((uu => [uu.graphQuestId, new Set([uu.graphQuestId, ...uu.graphPlanIds])])))
                }
              }(su, uu.graphNodes, uu.graphEdges), this.show())
            })).catch((uu => {
              console.error("The quest graph could not be laid out", uu)
            }))
          }
      }
      resumeJump(uu) {
        const Eu = this.storage.getItem(nj);
        this.storage.removeItem(nj), null === Eu || Eu.variation !== uu || this.now() - Eu.departedAt > 6e4 || this.requestArrive(Eu.questId, Eu.completes)
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
        var uu, Eu;
        return null !== (uu = null === this.hoveredId || null === (Eu = this.layout) || void 0 === Eu ? void 0 : Eu.plans.get(this.hoveredId)) && void 0 !== uu ? uu : new Set
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
        const Eu = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: uu.width,
          height: uu.height,
          nodes: uu.nodes.map((uu => {
            let {
              node: ju,
              left: su,
              top: Uu
            } = uu;
            return {
              id: ju.graphQuestId,
              name: this.translate(ju.graphNameKey),
              detail: null === ju.graphGiverName ? ju.graphZoneId : `${ju.graphGiverName} \xb7 ${ju.graphZoneId}`,
              state: ju.graphState,
              left: su,
              top: Uu,
              inPlan: Eu.has(ju.graphQuestId),
              hovered: ju.graphQuestId === this.hoveredId
            }
          })),
          edges: uu.edges.map((uu => {
            let {
              edge: ju,
              key: su,
              path: Uu
            } = uu;
            return {
              key: su,
              kind: ju.graphEdgeKind,
              path: Uu,
              inPlan: Eu.has(ju.graphFromId) && Eu.has(ju.graphToId)
            }
          })),
          planning: Eu.size > 0
        }
      }
    }
    var us = ju(37460);
    const Es = 250,
      ss = 2150,
      Us = -2.8,
      Zs = 2.2,
      Xs = -27,
      ls = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      qs = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      fs = Math.round(50 + 1e3 * (qs.delay + qs.period / 2)),
      Cs = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      bs = Array.from({
        length: 26
      }, ((uu, Eu) => {
        const ju = 2.39996 * Eu,
          su = .5 + .618034 * Eu % 1 * .23,
          Uu = Eu % 3 !== 2;
        return {
          rune: Uu ? Cs[7 * Eu % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(ju)*su).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(ju)*su).toFixed(3)})`,
            "--spin": 40 * (Eu % 5 - 2) + "deg",
            "--size": (Uu ? 1 + Eu % 4 * .2 : .3 + Eu % 2 * .15) + "rem",
            "--duration": `${(1.8+7*Eu%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*Eu%3).toFixed(2)}s`
          }
        }
      }));

    function cs(uu, Eu) {
      return Array.from({
        length: 30 + 3 * uu + (Eu ? 10 : 0)
      }, ((uu, Eu) => {
        const ju = Eu < 4,
          su = ju ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          Uu = ju ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          Zu = ju ? 2.2 : .6 + Math.random(),
          Xu = ju ? .3 : Math.random() < .5 ? .16 : .24,
          lu = ju ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": su,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${Uu.toFixed(2)}rem`,
          "--length": `${Zu.toFixed(2)}rem`,
          "--width": `${Xu}rem`,
          "--duration": `${Math.round(lu)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function Ns(uu) {
      let {
        zeta: Eu,
        period: ju
      } = uu;
      const su = 2 * Math.PI / ju;
      return {
        w: su,
        decay: Eu * su / Math.sqrt(1 - Eu * Eu)
      }
    }
    let Os = !1;

    function Ys() {
      if (Os) return;
      Os = !0;
      const uu = document.createElement("style");
      uu.textContent = function() {
        const uu = Ns(ls),
          Eu = Ns(qs),
          ju = Eu => Math.exp(-uu.decay * Eu) * Math.sin(uu.w * Eu),
          su = ju(Math.atan(uu.w / uu.decay) / uu.w),
          Uu = .25,
          Zu = 2.15,
          Xu = Math.round(215),
          lu = [];
        for (let qu = 0; qu <= Xu; qu++) {
          const uu = qu / Xu * Zu;
          let fu = Math.sin(Math.min(uu, Uu) / Uu * Math.PI / 2) ** 2,
            Cu = 0,
            bu = 1,
            cu = 1 - .2 * fu,
            Nu = 1;
          if (uu >= Uu) {
            const Xu = uu - Uu,
              lu = Math.max(0, Xu - .05);
            fu = Math.exp(-lu / .05), Cu = ju(lu + ls.lead * (1 - Math.exp(-lu / ls.rush))) / su;
            const qu = lu - qs.delay,
              Ou = qu <= 0 ? 0 : 1 - Math.exp(-Eu.decay * qu) * (Math.cos(Eu.w * qu) + Eu.decay / Eu.w * Math.sin(Eu.w * qu)),
              Yu = Math.max(0, (uu - 1.77) / (Zu - 1.77));
            bu = (1 + (qs.to - 1) * Ou) * (1 + .08 * Yu), cu = 1.1 + 1.5 * Math.exp(-Xu / .07) + .3 * Math.exp(-(((1e3 * Xu - fs) / 100) ** 2)) + .8 * Yu, Nu = 1 - Yu ** 1.5
          }
          const Ou = .15 * fu + Us * Cu,
            Yu = -.1 * fu + Zs * Cu,
            hu = 3 * fu + Xs * Cu;
          lu.push(`${(qu/Xu*100).toFixed(3)}% { opacity: ${Nu.toFixed(3)}; transform: translate(${Ou.toFixed(3)}rem, ${Yu.toFixed(3)}rem) rotate(${hu.toFixed(2)}deg) scale(${bu.toFixed(3)}); filter: brightness(${cu.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${lu.join(" ")} }`
      }(), document.head.append(uu)
    }
    const hs = "skyblockForgeView",
      Ds = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class gs extends bu {
      constructor(uu, Eu, ju, su, Uu) {
        super(uu, ju, su), this.translate = Eu, this.requestForge = Uu, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.onOpened = null, this.select = (uu, Eu) => {
          var ju, su;
          null !== this.forging || (null !== (ju = this.owned[(0, us.m)(Eu, uu)]) && void 0 !== ju ? ju : 0) <= 0 || (this.selected[uu] = this.selected[uu] === Eu ? null : Eu, this.status = null, null === (su = this.onPartSelected) || void 0 === su || su.call(this), this.emit())
        }, this.forge = uu => {
          var Eu, ju;
          const su = this.selectedParts();
          if (null === su || this.isPending() || !this.open) return;
          const Uu = (0, us.l)(su);
          if (null === Uu || Uu.coalCost > this.coal) return;
          const Zu = this.preview(Uu),
            Xu = null !== (Eu = null === (ju = this.onForgeStarted) || void 0 === ju ? void 0 : ju.call(this, Zu.tier, Zu.named, uu)) && void 0 !== Eu ? Eu : () => {};
          if (this.dropArrival(), uu) {
            const uu = {
              id: ++this.forgeId,
              preview: Zu,
              timers: [],
              stopSounds: Xu,
              landed: !1,
              reply: null
            };
            uu.timers.push(setTimeout((() => {
              uu.landed = !0, null !== uu.reply && (this.apply(uu.reply), uu.reply = null, this.emit())
            }), Es), setTimeout((() => {
              this.finishForge(uu)
            }), ss)), this.forging = uu
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(su)
        }, this.snapshot = this.buildSnapshot()
      }
      NO(uu) {
        var Eu;
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === uu.forgeMessageKind) return this.dropForge(), this.apply(uu), this.status = null, this.show(), void(null === (Eu = this.onOpened) || void 0 === Eu || Eu.call(this));
        const ju = this.forging;
        if (null !== ju && null !== uu.forgeRefusalKey) this.dropForge();
        else if (null !== ju && !ju.landed) return void(ju.reply = uu);
        this.apply(uu), this.emit()
      }
      apply(uu) {
        if (this.owned = uu.forgeOwnedParts, this.coal = uu.forgeCoalOwned, this.keepSelectionOwned("open" === uu.forgeMessageKind), null !== uu.forgeForgedSwordId) {
          var Eu;
          const ju = (0, us.l)(uu.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (Eu = null === ju || void 0 === ju ? void 0 : ju.displayName) && void 0 !== Eu ? Eu : ""
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
        var Eu;
        this.forging = null;
        const ju = this.selectedParts(),
          su = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: uu.id,
          sameSword: null !== ju && (null === (Eu = (0, us.l)(ju)) || void 0 === Eu ? void 0 : Eu.displayName) === uu.preview.name,
          timer: su
        }, this.emit()
      }
      dropForge() {
        const uu = this.forging;
        if (null !== uu) {
          this.forging = null;
          for (const Eu of uu.timers) clearTimeout(Eu);
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
        var uu, Eu, ju;
        const su = this.selectedParts(),
          Uu = null === su ? null : (0, us.l)(su),
          Zu = null !== (uu = null === (Eu = this.forging) || void 0 === Eu ? void 0 : Eu.preview) && void 0 !== uu ? uu : null === Uu ? null : this.preview(Uu);
        return {
          enabled: this.received,
          open: this.open,
          slots: us.j.map((uu => ({
            kind: uu,
            label: this.translate(Ds[uu]),
            parts: this.partsFor(uu)
          }))),
          coalOwned: this.coal,
          preview: Zu,
          unformedSword: us.i[null !== (ju = this.selected.Blade) && void 0 !== ju ? ju : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((uu => uu > 0)),
          canForge: null !== Zu && !Zu.coalShort && !this.isPending(),
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
        const Eu = [];
        for (const su of us.g) {
          var ju;
          const Uu = (0, us.m)(su, uu),
            Zu = null !== (ju = this.owned[Uu]) && void 0 !== ju ? ju : 0;
          Zu > 0 && Eu.push({
            material: su,
            itemName: Uu,
            owned: Zu,
            selected: this.selected[uu] === su,
            placeholder: !1
          })
        }
        if (0 === Eu.length) {
          const ju = us.g[0];
          Eu.push({
            material: ju,
            itemName: (0, us.m)(ju, uu),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return Eu
      }
      stats(uu) {
        const Eu = [{
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
        return uu.reachBonus > 0 && Eu.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${uu.reachBonus.toFixed(1)}`,
          better: !0
        }), uu.damageReduction > 0 && Eu.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*uu.damageReduction)}%`,
          better: !0
        }), Eu
      }
      selectedParts() {
        const {
          Blade: uu,
          Guard: Eu,
          Handle: ju
        } = this.selected;
        return null === uu || null === Eu || null === ju ? null : {
          blade: uu,
          guard: Eu,
          handle: ju
        }
      }
      keepSelectionOwned(uu) {
        for (const ju of us.j) {
          var Eu;
          const su = this.selected[ju];
          if (null !== su && (null !== (Eu = this.owned[(0, us.m)(su, ju)]) && void 0 !== Eu ? Eu : 0) > 0) continue;
          if (!uu) {
            this.selected[ju] = null;
            continue
          }
          const Uu = [...us.g].reverse().find((uu => {
            var Eu;
            return (null !== (Eu = this.owned[(0, us.m)(uu, ju)]) && void 0 !== Eu ? Eu : 0) > 0
          }));
          this.selected[ju] = null !== Uu && void 0 !== Uu ? Uu : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const Ms = "skyblockSmugglerView",
      es = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class Gs extends bu {
      constructor(uu, Eu, ju, su, Uu) {
        let Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(uu, ju, su), this.translate = Eu, this.requestBuy = Uu, this.now = Zu, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = uu => uu, this.onBought = null, this.buy = uu => {
          const Eu = this.deals[uu];
          void 0 !== Eu && !this.isPending() && this.open && !this.soldOut.has(uu) && this.canAfford(Eu) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, uu))
        }, this.snapshot = this.buildSnapshot()
      }
      NO(uu) {
        if (this.received = !0, this.day = uu.smugglerDay, this.deals = uu.smugglerDeals, this.rivets = uu.smugglerRivetsOwned, this.crests = uu.smugglerCrestsOwned, this.soldOut = new Set(uu.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + uu.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === uu.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = uu.smugglerBoughtSlot, null !== uu.smugglerBoughtSlot) {
          var Eu, ju;
          const su = this.deals[uu.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === su ? "" : this.dealName(su),
              amount: String(null !== (Eu = null === su || void 0 === su ? void 0 : su.smugglerDealAmount) && void 0 !== Eu ? Eu : 0)
            }
          }, this.boughtCount++, null === (ju = this.onBought) || void 0 === ju || ju.call(this)
        } else null !== uu.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: uu.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(uu, Eu, ju) {
        this.translate = uu, void 0 !== ju && (this.itemName = ju), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(uu) {
        if (null !== uu.smugglerDealUniqueName) return uu.smugglerDealUniqueName;
        const Eu = es[uu.smugglerDealItem];
        return void 0 === Eu ? this.itemName(uu.smugglerDealItem) : this.translate(Eu)
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
          deals: this.deals.map(((uu, Eu) => ({
            slot: Eu,
            itemName: uu.smugglerDealItem,
            displayName: this.dealName(uu),
            enchantmentTier: uu.smugglerDealEnchantmentTier,
            amount: uu.smugglerDealAmount,
            rivets: uu.smugglerDealRivets,
            crests: uu.smugglerDealCrests,
            affordable: this.canAfford(uu),
            soldOut: this.soldOut.has(Eu),
            justBought: this.boughtSlot === Eu
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
    const ps = "skyblockPassageView",
      ws = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function ds(uu, Eu) {
      return uu(ws[Eu])
    }

    function as(uu, Eu, ju, su) {
      const Uu = Math.ceil((ju - su) / 864e5),
        Zu = ds(uu, Eu);
      return Uu > 1 ? uu("skyblockGame:passageNextDays", {
        phase: Zu,
        days: String(Uu)
      }) : uu("skyblockGame:passageNextSoon", {
        phase: Zu
      })
    }
    class Ps extends bu {
      constructor(uu, Eu, ju, su) {
        let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(uu, ju, su), this.translate = Eu, this.now = Uu, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = uu => uu, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      NO(uu) {
        this.message = uu, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(uu, Eu, ju) {
        this.translate = uu, void 0 !== ju && (this.itemName = ju), this.emit()
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
          phaseName: ds(this.translate, uu.passagePhase),
          visitors: uu.passageVisitors.map((uu => this.describe(uu))),
          resting: this.describe(uu.passageResting),
          nextPhase: uu.passageNextPhase,
          next: as(this.translate, uu.passageNextPhase, uu.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var os = ju(38882);
    const ks = "skyblockKeepersChairView";
    class ms extends bu {
      constructor(uu, Eu, ju, su, Uu) {
        let Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          Xu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new os.b;
        super(uu, ju, su), this.translate = Eu, this.requestAim = Uu, this.now = Zu, this.pacer = Xu, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = uu => uu, this.aim = uu => {
          !this.awaitingReply && this.open && this.atChair && uu !== this.favoured && (null === uu || this.islands.some((Eu => Eu.keepersChairIslandId === uu && Eu.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== uu && void 0 !== uu ? uu : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Xu.subscribe((() => {
          this.emit()
        }))
      }
      NO(uu) {
        var Eu, ju;
        this.received = !0;
        const su = this.favoured,
          Uu = this.atChair;
        var Zu;
        return this.islands = uu.keepersChairIslands, this.favoured = uu.keepersChairFavoured, this.passage = null !== (Eu = uu.keepersChairPassage) && void 0 !== Eu ? Eu : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (ju = uu.keepersChairAtChair) || void 0 === ju || ju, "place" === uu.keepersChairMessageKind ? (!Uu && this.atChair && "refused" === (null === (Zu = this.status) || void 0 === Zu ? void 0 : Zu.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === uu.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== uu.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: uu.keepersChairRefusalKey,
          island: null
        } : this.favoured !== su && (this.status = null === this.favoured ? {
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
      setTranslator(uu, Eu, ju) {
        this.translate = uu, void 0 !== ju && (this.itemName = ju), this.emit()
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
        const Eu = this.islands.find((Eu => Eu.keepersChairIslandId === uu));
        return void 0 === Eu ? uu : this.translate(Eu.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const uu = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          Eu = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((uu => {
            const Eu = uu.keepersChairFeaturedFish;
            return {
              id: uu.keepersChairIslandId,
              name: this.translate(uu.keepersChairIslandNameKey),
              relit: uu.keepersChairIslandRelit,
              featuredFish: null === Eu ? null : {
                itemName: Eu,
                displayName: this.itemName(Eu)
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
          almanac: null === Eu ? null : {
            phase: Eu.keepersChairPassagePhase,
            phaseName: ds(this.translate, Eu.keepersChairPassagePhase),
            nextPhase: Eu.keepersChairPassageNextPhase,
            next: as(this.translate, Eu.keepersChairPassageNextPhase, Eu.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const vs = "skyblockReachLogView",
      Ks = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      Vs = "Caught Fish",
      rs = [1, 2, 4];

    function Qs(uu, Eu) {
      return uu.map((uu => ({
        ...uu,
        reachLogPageFish: uu.reachLogPageFish.map((uu => ({
          ...uu,
          reachLogFishFresh: Eu(uu)
        })))
      })))
    }
    class is extends bu {
      constructor(uu, Eu, ju, su, Uu) {
        let Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new os.b;
        super(uu, ju, su), this.translate = Eu, this.requestOpen = Uu, this.pacer = Zu, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = uu => uu, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = uu => {
          this.pages.some((Eu => Eu.reachLogIslandId === uu)) && (this.selected = uu, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Zu.subscribe((() => {
          this.emit()
        }))
      }
      NO(uu) {
        if (this.received = !0, "status" === uu.reachLogMessageKind) return !0 === uu.reachLogNews && this.markNews(), this.serverFresh = uu.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const Eu = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== uu.reachLogMessageKind)
          if (this.pageViews = null, this.pages = Qs(uu.reachLogPages, (uu => uu.reachLogFishFresh || this.heldFresh.has(uu.reachLogFishItem))), this.letGoShown = uu.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, Eu) this.showPages();
          else {
            for (const uu of this.pages)
              for (const Eu of uu.reachLogPageFish) Eu.reachLogFishFresh && this.heldFresh.add(Eu.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(uu, Eu, ju) {
        this.translate = uu, this.pageViews = null, void 0 !== ju && (this.itemName = ju), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = Qs(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var uu, Eu, ju, su;
        const Uu = this.pages.find((uu => uu.reachLogPageFish.some((uu => uu.reachLogFishFresh))));
        if (void 0 !== Uu) return Uu.reachLogIslandId;
        if (null !== this.selected && this.pages.some((uu => uu.reachLogIslandId === this.selected))) return this.selected;
        return null !== (uu = null !== (Eu = null === (ju = this.pages.filter((uu => uu.reachLogIslandAwake)).at(-1)) || void 0 === ju ? void 0 : ju.reachLogIslandId) && void 0 !== Eu ? Eu : null === (su = this.pages[0]) || void 0 === su ? void 0 : su.reachLogIslandId) && void 0 !== uu ? uu : null
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
          var Eu;
          return {
            id: uu.reachLogIslandId,
            name: this.translate(uu.reachLogIslandNameKey),
            awake: uu.reachLogIslandAwake,
            gold: uu.reachLogPageGold,
            caught: uu.reachLogPageFish.filter((uu => uu.reachLogFishCaught && !uu.reachLogFishVisitor)).length,
            total: uu.reachLogPageFish.filter((uu => !uu.reachLogFishVisitor)).length,
            fish: uu.reachLogPageFish.map((uu => {
              const Eu = uu.reachLogFishBestKg;
              return {
                itemName: uu.reachLogFishItem,
                name: uu.reachLogFishCaught ? this.itemName(uu.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: uu.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / uu.reachLogFishChance))
                }),
                best: uu.reachLogFishCaught ? null === Eu ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: Eu.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: uu.reachLogFishMarks,
                ribbons: rs.map((Eu => 0 !== (uu.reachLogFishRibbons & Eu))),
                glimmer: 0 !== (8 & uu.reachLogFishRibbons),
                halo: 0 !== (32 & uu.reachLogFishRibbons),
                fresh: uu.reachLogFishFresh,
                visitor: uu.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (Eu = uu.reachLogPageReturner) && void 0 !== Eu ? Eu : null)
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
    const Ws = "skyblockLampLightView";
    class Ss {
      constructor(uu, Eu, ju, su) {
        this.TY = uu, this.translate = Eu, this.requestCommand = ju, this.pacer = su, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.fO = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = uu => {
          uu ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = uu => {
          this.send(`buy ${uu}`)
        }, this.socket = uu => {
          this.send(`socket ${null!==uu&&void 0!==uu?uu:ru}`)
        }, this.wearTint = uu => {
          this.send(`tint ${null!==uu&&void 0!==uu?uu:ru}`)
        }, this.setSituation = uu => {
          this.situation = uu, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = su.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = su.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      NO(uu) {
        if (this.message = uu, null !== uu.lampLightShop && (this.shop = uu.lampLightShop), "open" === uu.lampLightKind && (this.refusalKey = null), "reply" === uu.lampLightKind) {
          var Eu;
          const Uu = null !== (Eu = uu.lampLightReplyTag) && void 0 !== Eu ? Eu : null,
            Zu = null !== Uu && Uu === this.offTag;
          var ju, su;
          if (Zu ? this.settleOff() : null !== Uu && Uu !== this.awaitingTag || this.settleReply(), this.refusalKey = uu.lampLightRefusalKey, null !== uu.lampLightBought && !Zu) this.sparkle = {
            id: uu.lampLightBought,
            count: (null !== (ju = null === (su = this.sparkle) || void 0 === su ? void 0 : su.count) && void 0 !== ju ? ju : 0) + 1
          }
        }
        uu.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === uu.lampLightKind && (this.lastGained = uu.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(uu) {
        uu !== this.atChair && (this.atChair = uu, uu && (this.refusalKey = null), this.emit())
      }
      setTranslator(uu, Eu) {
        this.translate = uu, this.locale = null !== Eu && void 0 !== Eu ? Eu : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.fO = !0
      }
      send(uu) {
        var Eu;
        if (null !== this.awaitingTag || "ready" !== (null === (Eu = this.message) || void 0 === Eu ? void 0 : Eu.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const ju = this.nextTag();
        this.awaitingTag = ju, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${uu} ${ju}`), this.emit()
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
        this.fO || (this.snapshot = this.buildSnapshot(), this.TY(this.snapshot))
      }
      formatLight(uu) {
        return Math.floor(uu).toLocaleString(this.locale)
      }
      formatPercent(uu) {
        const Eu = 100 * uu;
        return Eu >= 10 ? Math.round(Eu).toLocaleString(this.locale) : Eu.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(uu, Eu) {
        if ("bite" === uu) return this.translate("skyblockGame:lampLightBite", {
          seconds: (Eu.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === uu) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(Eu.lampLightRareChance)
        });
        if ("notice" === uu) return null === Eu.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(Eu.lampLightNoticeChance)
        });
        const ju = "meter" === uu ? Eu.lampLightMeterCatches : Eu.lampLightBloomCatches;
        return null === ju ? null : this.translate("meter" === uu ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(ju))
        })
      }
      oddsLines(uu, Eu) {
        const ju = (uu, Eu) => {
            var ju;
            return null !== (ju = {
              bite: Eu.lampLightBiteMs,
              rare: Eu.lampLightRareChance,
              meter: Eu.lampLightMeterCatches,
              bloom: Eu.lampLightBloomCatches,
              notice: Eu.lampLightNoticeChance
            } [uu]) && void 0 !== ju ? ju : 0
          },
          su = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          Uu = [];
        for (const Zu of ["bite", "rare", "meter", "bloom", "notice"]) {
          const Xu = this.formatOdds(Zu, uu),
            lu = this.formatOdds(Zu, Eu);
          if (null === Xu || null === lu || "bite" !== Zu && "rare" !== Zu && Xu === lu) continue;
          const qu = ju(Zu, Eu) - ju(Zu, uu),
            fu = su[Zu] ? qu < 0 : qu > 0;
          Uu.push({
            label: Zu,
            before: Xu,
            after: lu,
            tone: Xu === lu ? "same" : fu ? "better" : "worse"
          })
        }
        return Uu
      }
      charmView(uu, Eu, ju) {
        const su = uu.lampLightCharmId.charAt(0).toUpperCase() + uu.lampLightCharmId.slice(1),
          Uu = "bloom" === this.situation;
        return {
          id: uu.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${su}`),
          effect: this.translate(`skyblockGame:lampLightCharm${su}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(uu.lampLightCharmCost)
          }),
          owned: uu.lampLightCharmOwned,
          affordable: ju >= uu.lampLightCharmCost,
          socketed: Eu.lampLightSocketed === uu.lampLightCharmId,
          lines: this.oddsLines(Uu ? Eu.lampLightBareBloom : Eu.lampLightBareOpen, Uu ? uu.lampLightCharmBloom : uu.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var uu, Eu, ju, su;
        const Uu = this.message,
          Zu = "ready" === (null === Uu || void 0 === Uu ? void 0 : Uu.lampLightStatus) ? this.shop : null,
          Xu = null !== (uu = null === Uu || void 0 === Uu ? void 0 : Uu.lampLightBalance) && void 0 !== uu ? uu : 0,
          lu = this.atChair,
          qu = "loading" === (null === Uu || void 0 === Uu ? void 0 : Uu.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === Uu || void 0 === Uu ? void 0 : Uu.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          fu = "ready" !== (null === Uu || void 0 === Uu ? void 0 : Uu.lampLightStatus) || lu ? null !== (Eu = this.refusalKey) && void 0 !== Eu ? Eu : qu : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== Uu && "locked" !== Uu.lampLightStatus,
          status: null !== (ju = null === Uu || void 0 === Uu ? void 0 : Uu.lampLightStatus) && void 0 !== ju ? ju : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(Xu)
          }),
          releasing: null !== (su = null === Uu || void 0 === Uu ? void 0 : Uu.lampLightReleasing) && void 0 !== su && su,
          gained: null === Uu || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === Uu || void 0 === Uu ? void 0 : Uu.lampLightStatus) && lu && !this.isPending(),
          situation: this.situation,
          shop: null === Zu ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: Zu.lampLightOddsRod,
              island: this.translate(Zu.lampLightIslandNameKey)
            }),
            heldRod: null !== Zu.lampLightHeldRod,
            charms: Zu.lampLightCharms.map((uu => this.charmView(uu, Zu, Xu))),
            tints: Zu.lampLightTints.map((uu => {
              const Eu = uu.lampLightTintId,
                [ju, su, Uu] = uu.lampLightTintColour;
              return {
                id: Eu,
                name: this.translate(`skyblockGame:lampLightTint${Eu.charAt(0).toUpperCase()}${Eu.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(uu.lampLightTintCost)
                }),
                owned: uu.lampLightTintOwned,
                affordable: Xu >= uu.lampLightTintCost,
                wearing: Zu.lampLightTint === Eu,
                colour: `rgb(${ju}, ${su}, ${Uu})`
              }
            })),
            wearingIslandColours: null === Zu.lampLightTint
          },
          notice: null === fu ? null : this.translate(fu),
          sparkle: this.sparkle
        }
      }
    }
    const Is = "skyblockMagmawardView";
    class Fs {
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.TY = uu, this.now = Eu, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = Bu.map((() => 0)), this.wornAt = Bu.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      NO(uu) {
        var Eu, ju;
        const su = Bu.map(((Eu, ju) => !0 === uu.magmawardPiecesWorn[ju]));
        if (!su.includes(!0)) return this.snapshot = null, void this.TY(null);
        const Uu = this.now(),
          Zu = this.snapshot;
        null === Zu && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const Xu = uu.magmawardFuelCarried,
          lu = !su.includes(!1);
        let qu = null !== (Eu = null === Zu || void 0 === Zu ? void 0 : Zu.pulse) && void 0 !== Eu ? Eu : null,
          fu = null !== (ju = null === Zu || void 0 === Zu ? void 0 : Zu.flare) && void 0 !== ju ? ju : null;
        uu.magmawardFuelBurned ? (qu = "burn", fu = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = Uu, this.flareAt = Uu) : null !== Zu && Xu > Zu.fuel && (qu = "gain", this.pulseToken++, this.pulseAt = Uu), lu && null !== Zu && !Zu.fullSet && (fu = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = Uu, this.setLitAt = Uu);
        const Cu = Bu.map(((uu, Eu) => (su[Eu] && null !== Zu && !Zu.pieces[Eu].worn && (this.wornTokens[Eu]++, this.wornAt[Eu] = Uu), {
          itemName: uu,
          worn: su[Eu],
          wornToken: this.wornTokens[Eu],
          justWorn: su[Eu] && this.isPlaying(this.wornAt[Eu], Uu)
        })));
        this.snapshot = {
          pieces: Cu,
          wornCount: su.filter(Boolean).length,
          fullSet: lu,
          fuel: Xu,
          fuelState: Xu <= 0 ? "empty" : Xu <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, Uu) ? qu : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, Uu) ? fu : null,
          flareToken: this.flareToken,
          setLit: lu && this.isPlaying(this.setLitAt, Uu),
          setLitToken: this.setLitToken
        }, this.TY(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.TY(null)
      }
      isPlaying(uu, Eu) {
        return Eu - uu < 1200
      }
    }
    const Bs = "skyblockGlowtideView";
    class Ls {
      constructor(uu) {
        this.TY = uu, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = uu => {
          this.arrow = uu, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      NO(uu) {
        this.bloom = uu.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.TY(null))
      }
      afterRender(uu, Eu) {
        const ju = this.bloom;
        if (null === ju || null === uu) return;
        const su = ju.glowtideBloomX - uu[0],
          Zu = ju.glowtideBloomZ - uu[2],
          Xu = Math.hypot(su, Zu),
          lu = this.snapshot,
          qu = null !== lu && void 0 !== lu && lu.inRange ? 1 : 0,
          fu = Xu <= 12.5 + qu && uu[1] - ju.glowtideBloomY <= 10 + qu;
        !fu || null !== lu && void 0 !== lu && lu.inRange || this.inRangeToken++;
        const Cu = {
          colour: ju.glowtideBloomColour,
          inRange: fu,
          distance: Math.round(Xu),
          inRangeToken: this.inRangeToken
        };
        (null === lu || Cu.colour !== lu.colour || Cu.inRange !== lu.inRange || !fu && Cu.distance !== lu.distance) && (this.snapshot = Cu, this.TY(Cu));
        const bu = Uu.b.computeShortestRotation(Eu, (0, Uu.Ab)([su, 0, Zu]));
        null === this.arrow || Math.abs(bu - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${bu}rad)`, this.arrowTurn = bu)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.TY(null)
      }
    }
    const ts = "skyblockGlowMeterView";
    class xs {
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.TY = uu, this.now = Eu, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      NO(uu) {
        const Eu = this.now(),
          {
            glowMeterFill: ju,
            glowMeterCapacity: su
          } = uu,
          Uu = ju >= su,
          Zu = this.snapshot;
        null !== Zu && (Uu && !Zu.full && (this.fullToken++, this.fullAt = Eu), Zu.full && !Uu ? (this.burstToken++, this.burstAt = Eu) : ju > Zu.fill && (this.gainToken++, this.gainAt = Eu)), this.snapshot = {
          fill: ju,
          Mb: su,
          ratio: Math.min(1, Math.max(0, ju / su)),
          full: Uu,
          rares: uu.glowMeterRares,
          ready: Uu && this.isPlaying(this.fullAt, Eu),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, Eu),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, Eu),
          gainToken: this.gainToken
        }, this.TY(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.TY(null)
      }
      isPlaying(uu, Eu) {
        return Eu - uu < 2e3
      }
    }
    const Ts = "skyblockHushWaitView";
    class Hs {
      constructor(uu) {
        this.TY = uu, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      NO(uu) {
        let {
          hushWaitMs: Eu,
          hushWaitTotalMs: ju,
          hushWaitLines: su
        } = uu;
        if (this.clearTimers(), this.token++, 0 === su.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (Eu <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: su[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const Uu = Math.max(null !== ju && void 0 !== ju ? ju : Eu, Eu),
          Zu = Uu - Eu,
          Xu = uu => Uu * uu / su.length,
          lu = uu => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: Uu,
              elapsedMs: Zu,
              line: su[uu],
              lineIndex: uu
            })
          };
        let qu = 0;
        for (; qu + 1 < su.length && Xu(qu + 1) <= Zu;) qu++;
        lu(qu);
        for (let fu = qu + 1; fu < su.length; fu++) this.later(Xu(fu) - Zu, (() => {
          lu(fu)
        }));
        this.later(Eu, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(uu) {
        this.snapshot = uu, this.TY(uu)
      }
      later(uu, Eu) {
        this.timers.push(setTimeout(Eu, uu))
      }
      clearTimers() {
        for (const uu of this.timers) clearTimeout(uu);
        this.timers = []
      }
    }
    const As = "skyblockTideChartsView",
      ns = 36e5,
      ys = 864e5;

    function zs(uu, Eu, ju) {
      const [su, Uu, Zu, Xu] = uu.tideChartArea, lu = Math.floor(Eu), qu = Math.floor(ju);
      return lu >= su && lu <= Zu && qu >= Uu && qu <= Xu
    }

    function Rs(uu, Eu, ju) {
      const [su, Uu, Zu, Xu] = uu.tideChartWater;
      return function(uu, Eu, ju, su, Uu, Zu) {
        const Xu = 4 - Lu(Math.floor(Uu) - (uu - ju), ju);
        return 5 * Lu(Math.floor(Zu) - (Eu - su), su) + Xu
      }(su, Uu, Zu, Xu, Eu, ju)
    }

    function uU(uu, Eu, ju) {
      const su = uu.tideCharts;
      for (let Uu = 0; Uu < su.length; Uu++)
        if (zs(su[Uu], Eu, ju)) return su[Uu];
      return null
    }

    function EU(uu, Eu, ju) {
      const su = Math.max(0, Eu - ju);
      return su > ys ? uu("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(su / ys))
      }) : su > ns ? uu("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(su / ns))
      }) : uu("skyblockGame:tideChartsTurnSoon")
    }
    class jU extends bu {
      constructor(uu, Eu, ju, su) {
        let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(uu, ju, su), this.translate = Eu, this.now = Uu, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.Hc = uu => {
          this.picked = uu, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      NO(uu) {
        const Eu = this.message;
        if (null !== Eu)
          for (const su of uu.tideCharts) {
            var ju;
            const uu = Eu.tideCharts.find((uu => uu.tideChartIsland === su.tideChartIsland)),
              Uu = su.tideChartLit & ~(null !== (ju = null === uu || void 0 === uu ? void 0 : uu.tideChartLit) && void 0 !== ju ? ju : 0);
            void 0 !== uu && 0 !== Uu && (this.pulse = {
              island: su.tideChartIsland,
              cells: Uu,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = uu, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(uu, Eu) {
        var ju;
        const su = null === this.message || Number.isNaN(uu) ? null : uU(this.message, uu, Eu),
          Uu = null !== (ju = null === su || void 0 === su ? void 0 : su.tideChartIsland) && void 0 !== ju ? ju : null,
          Zu = null === su ? -1 : function(uu, Eu, ju) {
            const [su, Uu, Zu, Xu] = uu.tideChartWater;
            return function(uu, Eu, ju, su, Uu, Zu, Xu) {
              return ((Uu - uu) / (ju + Xu)) ** 2 + ((Zu - Eu) / (su + Xu)) ** 2 <= 1
            }(su, Uu, Zu, Xu, Eu, ju, 2) ? Rs(uu, Eu, ju) : -1
          }(su, uu, Eu);
        return (Uu !== this.hereIsland || Zu !== this.hereCell) && (this.hereIsland = Uu, this.hereCell = Zu, null !== Uu && (this.lastIsland = Uu), !0)
      }
      afterRender(uu) {
        if (null === this.message) return;
        this.lastX = null === uu ? Number.NaN : uu[0], this.lastZ = null === uu ? Number.NaN : uu[2];
        const Eu = this.locate(this.lastX, this.lastZ),
          ju = this.expirePulses();
        (Eu || ju || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const uu = this.now();
        return !(!this.open || uu - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = uu, EU(this.translate, this.message.tideChartTurnsInMs, uu - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(uu, Eu) {
        const ju = null === this.message ? null : uU(this.message, uu, Eu);
        if (null === ju) return;
        const su = Rs(ju, uu, Eu);
        0 === (ju.tideChartPreBlank & 1 << su) && (this.cast = {
          island: ju.tideChartIsland,
          cell: su,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const uu = this.now();
        let Eu = !1;
        return 0 !== this.pulse.cells && uu - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, Eu = !0), null !== this.cast && uu - this.cast.atMs >= 1500 && (this.cast = null, Eu = !0), Eu
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
      findChart(uu, Eu) {
        var ju;
        return null !== (ju = uu.tideCharts.find((uu => uu.tideChartIsland === Eu))) && void 0 !== ju ? ju : null
      }
      describe(uu) {
        var Eu, ju, su;
        const Uu = uu.tideChartIsland,
          Zu = [];
        for (let Nu = 0; Nu < 25; Nu++) {
          const Eu = 1 << Nu;
          0 !== (uu.tideChartLit & Eu) ? Zu.push("lit") : 0 !== (uu.tideChartClear & Eu) ? Zu.push("clear") : 0 !== (uu.tideChartPreBlank & Eu) ? Zu.push("shore") : Zu.push("water")
        }
        const Xu = function(uu) {
            let Eu = 0;
            for (let ju = uu >>> 0; 0 !== ju; ju &= ju - 1) Eu++;
            return Eu
          }(uu.tideChartLit),
          lu = uu.tideChartInkCount,
          qu = this.translate(uu.tideChartIslandNameKey),
          fu = this.translate("skyblockGame:tideChartsLit", {
            lit: String(Xu),
            ink: String(lu)
          }),
          Cu = null === uu.tideChartPictureNameKey ? null : this.translate(uu.tideChartPictureNameKey),
          bu = this.hereIsland === Uu && -1 !== this.hereCell ? this.hereCell : null,
          cu = [`${qu}: ${fu}.`];
        if (null !== Cu && cu.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: Cu
          })), null !== bu) {
          const uu = Math.floor(bu / 5) + 1,
            Eu = bu % 5 + 1;
          cu.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(uu),
            column: String(Eu)
          }))
        }
        return {
          island: Uu,
          islandName: qu,
          cells: Zu,
          hereCell: bu,
          lit: Xu,
          ink: lu,
          litText: fu,
          pictureName: Cu,
          gridLabel: cu.join(" "),
          pulseCells: this.pulse.island === Uu ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (Eu = this.cast) || void 0 === Eu ? void 0 : Eu.island) === Uu ? this.cast.cell : null,
          castToken: null !== (ju = null === (su = this.cast) || void 0 === su ? void 0 : su.token) && void 0 !== ju ? ju : 0
        }
      }
      buildSnapshot() {
        var uu, Eu, ju;
        const su = this.message;
        if (null === su || 0 === su.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const Uu = this.findChart(su, this.hereIsland),
          Zu = null !== (uu = null !== (Eu = null !== (ju = this.findChart(su, this.open ? this.picked : null)) && void 0 !== ju ? ju : Uu) && void 0 !== Eu ? Eu : this.findChart(su, this.lastIsland)) && void 0 !== uu ? uu : su.tideCharts[0],
          Xu = null === Uu ? null : this.describe(Uu);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: Xu,
          card: Zu === Uu ? Xu : this.describe(Zu),
          turnsText: EU(this.translate, su.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(su.tideChartBookCount)
          }),
          tabs: su.tideCharts.map((uu => ({
            island: uu.tideChartIsland,
            name: this.translate(uu.tideChartIslandNameKey),
            selected: uu.tideChartIsland === Zu.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const sU = "skyblockRegularsView",
      UU = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      ZU = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function XU(uu, Eu) {
      return "given" === uu ? Eu.given : "owed" === uu ? Eu.owed : Eu.goal
    }
    class lU extends bu {
      constructor(uu, Eu, ju, su) {
        super(uu, ju, su), this.translate = Eu, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = uu => uu, this.openIsland = uu => {
          this.selected = uu, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = uu => {
          this.selected = uu, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      NO(uu) {
        this.message = uu, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const uu = this.openedFromReachLog;
        return this.openedFromReachLog = !1, uu
      }
      setTranslator(uu, Eu, ju) {
        this.translate = uu, void 0 !== ju && (this.itemName = ju), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(uu, Eu, ju) {
        return {
          text: this.translate(XU(uu, Eu), ju),
          given: "given" === uu
        }
      }
      describeRegular(uu, Eu) {
        const ju = this.translate,
          su = null !== uu.regularKg,
          Uu = uu.regularMeetings,
          Zu = su ? 0 === Uu ? ju("skyblockGame:regularsNotMet") : 1 === Uu ? ju("skyblockGame:regularsMeetingsOne") : ju("skyblockGame:regularsMeetings", {
            count: Uu
          }) : "";
        return {
          id: uu.regularId,
          name: ju(uu.regularNameKey),
          line: ju(uu.regularLineKey),
          itemName: uu.regularFishItem,
          fishName: this.itemName(uu.regularFishItem),
          tagged: su,
          size: null === uu.regularKg ? ju("skyblockGame:regularsNotTagged") : ju("skyblockGame:regularsSize", {
            kg: uu.regularKg.toFixed(1)
          }),
          meetings: Zu,
          chance: ju("skyblockGame:regularsChance", {
            count: uu.regularOneInCasts
          }),
          resting: uu.regularRestingToday,
          gifts: [{
            text: ju("skyblockGame:regularsGiftFlare"),
            given: Uu >= 3
          }, this.describeGift(uu.regularTintGift, UU, {
            tint: ju(uu.regularTintNameKey)
          })],
          history: [...uu.regularHistory].reverse().map((uu => {
            const su = uu.regularMeetingKg.toFixed(1),
              Uu = Eu - uu.regularMeetingDay;
            return Uu <= 0 ? ju("skyblockGame:regularsToday", {
              kg: su
            }) : ju("skyblockGame:regularsDaysAgo", {
              days: Uu,
              kg: su
            })
          }))
        }
      }
      describeIsland(uu, Eu) {
        return {
          id: uu.regularsIslandId,
          name: this.translate(uu.regularsIslandNameKey),
          charm: this.describeGift(uu.regularsCharmGift, ZU, {
            charm: this.translate(uu.regularsCharmNameKey)
          }),
          regulars: uu.regularsList.map((uu => this.describeRegular(uu, Eu)))
        }
      }
      buildSnapshot() {
        var uu, Eu, ju, su;
        const Uu = this.message;
        if (null === Uu) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const Zu = Uu.regularsIslands.map((uu => this.describeIsland(uu, Uu.regularsToday))),
          Xu = null !== (uu = null !== (Eu = null === (ju = Zu.find((uu => uu.id === this.selected))) || void 0 === ju ? void 0 : ju.id) && void 0 !== Eu ? Eu : null === (su = Zu[0]) || void 0 === su ? void 0 : su.id) && void 0 !== uu ? uu : "";
        return {
          enabled: !0,
          open: this.open,
          selected: Xu,
          islands: Zu
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const qU = "skyblockHiddenWatersView";
    class fU {
      constructor(uu) {
        this.TY = uu, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      NO(uu) {
        this.snapshot = function(uu) {
          const [Eu, ju] = uu.hiddenWatersMapSize, su = (uu, su) => ({
            left: 1 - uu / Eu,
            top: su / ju
          }), Uu = new Map;
          for (const [Xu, lu] of uu.hiddenWatersGlimpses) {
            var Zu;
            const uu = null !== (Zu = Uu.get(Xu)) && void 0 !== Zu ? Zu : [];
            uu.push(lu), Uu.set(Xu, uu)
          }
          return {
            found: uu.hiddenWatersFound,
            total: uu.hiddenWatersTotal,
            aspect: ju / Eu,
            pins: uu.hiddenWatersPins.map((uu => {
              let [Eu, ju] = uu;
              return su(Eu, ju)
            })),
            islands: uu.hiddenWatersIslands.map((uu => {
              let [Uu, Zu, Xu, lu] = uu;
              const {
                left: qu,
                top: fu
              } = su(Xu + 1, Zu);
              return {
                left: qu,
                top: fu,
                width: (Xu + 1 - Uu) / Eu,
                height: (lu + 1 - Zu) / ju
              }
            })),
            glimpses: Uu
          }
        }(uu), this.TY(this.snapshot)
      }
    }
    const CU = "skyblockDialogueView";
    class bU extends bu {
      constructor(uu, Eu, ju, su, Uu) {
        let Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(uu, ju, su), this.translate = Eu, this.requestDialogue = Uu, this.now = Zu, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
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
      NO(uu) {
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
        const Eu = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...Eu,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const ju = this.selection;
        if ("quest" === ju.kind) {
          const uu = this.scripts.find((uu => uu.dialogueQuestId === ju.questId));
          return {
            ...Eu,
            characters: [],
            questFocus: ju.questId,
            conversations: uu ? [this.conversation(uu)] : []
          }
        }
        const su = [];
        for (let Zu = this.scripts.length - 1; Zu >= 0; Zu--) {
          const uu = this.scripts[Zu].dialogueLines;
          for (let Eu = uu.length - 1; Eu >= 0; Eu--) su.includes(uu[Eu].dialogueSpeakerId) || su.push(uu[Eu].dialogueSpeakerId)
        }
        const Uu = null !== ju.npcId && su.includes(ju.npcId) ? ju.npcId : null !== (uu = su[0]) && void 0 !== uu ? uu : null;
        return {
          ...Eu,
          characters: su.map((uu => {
            var Eu, ju;
            return {
              id: uu,
              styling: null !== (Eu = null === (ju = this.speakers.get(uu)) || void 0 === ju ? void 0 : ju.dialogueSpeakerStyling) && void 0 !== Eu ? Eu : uu,
              selected: uu === Uu
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((uu => uu.dialogueLines.some((uu => uu.dialogueSpeakerId === Uu)))).map((uu => this.conversation(uu))).reverse()
        }
      }
      conversation(uu) {
        let Eu = null;
        return {
          questId: uu.dialogueQuestId,
          questName: this.translate(uu.dialogueQuestNameKey),
          completed: uu.dialogueQuestCompleted,
          lines: uu.dialogueLines.map(((uu, ju) => {
            var su;
            const Uu = uu.dialogueSpeakerId === Eu || null === (su = this.speakers.get(uu.dialogueSpeakerId)) || void 0 === su ? void 0 : su.dialogueSpeakerStyling;
            return Eu = uu.dialogueSpeakerId, {
              key: ju,
              display: {
                line: {
                  translationKey: uu.dialogueLineKey,
                  params: this.params(uu.dialogueLineParams)
                },
                speakerName: Uu,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(uu) {
        if (void 0 !== uu) return Object.fromEntries(Object.entries(uu).map((uu => {
          let [Eu, ju] = uu;
          return [Eu, "string" === typeof ju ? ju : this.translate(ju.translationKey)]
        })))
      }
    }
    var cU = ju(628),
      NU = ju(1320),
      OU = ju(91);
    const YU = "skyblockAutographsView";

    function hU(uu) {
      const Eu = cU.n[uu];
      return {
        label: Eu.chatTag.map((uu => uu.str)).join(""),
        icon: Eu.icon,
        colour: Eu.mainRGB
      }
    }
    class DU extends bu {
      constructor(uu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(uu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = Eu, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      NO(uu) {
        this.signatures = uu.autographSignatures, uu.autographOpen ? this.show() : this.emit()
      }
      setTranslator(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = Eu, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var uu;
        const Eu = null !== (uu = this.signatures) && void 0 !== uu ? uu : [],
          ju = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          su = [...Eu].sort(((uu, Eu) => Number(null !== Eu.autographRank) - Number(null !== uu.autographRank) || Eu.autographSignedAtMs - uu.autographSignedAtMs)).map((uu => ({
            key: `${uu.autographSignedAtMs}|${uu.autographSignerName}`,
            name: (0, NU.e)(uu.autographSignerName, !OU.featureFlags.canSeeRealPlayerNames),
            rank: null === uu.autographRank ? null : hU(uu.autographRank),
            signedOn: ju.format(uu.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: su,
          total: su.length,
          rankTotal: su.filter((uu => null !== uu.rank)).length
        }
      }
    }
    const gU = "skyblockHudView",
      MU = () => {},
      eU = {
        getItem: () => null,
        setItem: MU,
        removeItem: MU
      };
    class GU {
      constructor(uu) {
        let {
          translate: Eu,
          translateWithIcons: ju,
          setMenuOpen: su = MU,
          dismissMenu: Uu = () => {
            su(!1)
          },
          publishSkills: Zu = MU,
          publishQuests: Xu = MU,
          publishQuestNotification: lu = MU,
          publishDungeons: qu = MU,
          publishCollections: fu = MU,
          publishMap: Cu = MU,
          publishHud: bu = MU,
          publishPortalTransit: cu = MU,
          publishDailyReward: Ou = MU,
          publishMailbox: Yu = MU,
          publishQuestGraph: hu = MU,
          publishForge: Du = MU,
          publishSmuggler: gu = MU,
          publishKeepersChair: Mu = MU,
          publishReachLog: eu = MU,
          publishLampLight: Gu = MU,
          publishMagmaward: pu = MU,
          publishGlowtide: Ju = MU,
          publishGlowMeter: du = MU,
          publishHushWait: au = MU,
          publishPassage: Pu = MU,
          publishTideCharts: ou = MU,
          publishRegulars: ku = MU,
          publishHiddenWaters: mu = MU,
          publishDialogue: vu = MU,
          publishAutographs: Ku = MU,
          isLoadingScreenUp: Vu = () => !1,
          onDailyRewardCoinLanded: ru = MU,
          onDailyRewardStarted: Qu = MU,
          onDailyRewardFinished: iu = MU,
          onDailyRewardItemLanded: Wu = MU,
          onMailboxStarted: Su = MU,
          journeyStorage: Iu = eU,
          requestTracking: Fu = MU,
          requestTravel: Bu = MU,
          requestDungeonEnter: Lu = MU,
          requestQuestJump: tu = MU,
          requestQuestArrive: xu = MU,
          requestForge: Tu = MU,
          requestSmuggle: Hu = MU,
          requestKeepersChairAim: Au = MU,
          requestReachLogOpen: nu = MU,
          requestLampLight: yu = MU,
          requestDialogue: zu = MU
        } = uu;
        this.navigation = void 0, this.map = void 0, this.compass = new wu, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new os.b, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = uu => uu, this.close = () => {
          for (const uu of this.panels) uu.close()
        }, this.setMenuOpen = su, this.publishHud = bu, this.portalTransit = new Ij(cu, Iu), this.magmaward = new Fs(pu), this.glowtide = new Ls(Ju), this.glowMeter = new xs(du), this.hushWait = new Hs(au), this.dailyReward = new Lj(Ou, (() => Vu() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (uu => {
          this.quests.setNotificationsHeld(uu)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), ru, Qu, iu, Wu);
        const Ru = uu => {
          this.panels.some((uu => uu.isOpen())) || (uu ? Uu() : this.setMenuOpen(!1))
        };
        this.skills = new lj(Zu, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), Eu, void 0, void 0, Ru), this.quests = new cj(Xu, Fu, Eu, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, Ru, lu), this.dungeons = new Yj(qu, Eu, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, Ru, Lu), this.collections = new ij(fu, Eu, (() => {
          this.beforePanelOpen(this.collections)
        }), Ru), this.map = new Nu(Cu, Bu, Eu, (() => {
          this.beforePanelOpen(this.map)
        }), Ru), this.questGraph = new Rj(hu, Eu, (() => {
          this.beforePanelOpen(this.questGraph)
        }), Ru, tu, xu, Iu), this.forge = new gs(Du, Eu, (() => {
          this.beforePanelOpen(this.forge)
        }), Ru, Tu), this.smuggler = new Gs(gu, Eu, (() => {
          this.beforePanelOpen(this.smuggler)
        }), Ru, Hu), this.lampLight = new Ss(Gu, Eu, yu, this.commandPacer), this.keepersChair = new ms(Mu, Eu, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (uu => {
          this.lampLight.onChairClosed(), Ru(uu)
        }), Au, Date.now, this.commandPacer), this.reachLog = new is(eu, Eu, (() => {
          this.beforePanelOpen(this.reachLog)
        }), Ru, nu, this.commandPacer), this.passage = new Ps(Pu, Eu, (() => {
          this.beforePanelOpen(this.passage)
        }), Ru), this.tideCharts = new jU(ou, Eu, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), Ru), this.regulars = new lU(ku, Eu, (() => {
          this.beforePanelOpen(this.regulars)
        }), (uu => {
          this.regulars.takeReturnToReachLog() && !uu && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), Ru(uu)
        })), this.hiddenWaters = new fU(mu), this.dialogue = new bU(vu, Eu, (() => {
          this.beforePanelOpen(this.dialogue)
        }), Ru, zu), this.autographs = new DU(Ku, (() => {
          this.beforePanelOpen(this.autographs)
        }), Ru), this.mailbox = new Hj(Yu, (() => Vu() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), Su), this.quests.translateWithIcons = null !== ju && void 0 !== ju ? ju : null, this.skills.onLevelUp = uu => {
          this.quests.notify(uu)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new Zj(this.map, this.quests, this.compass, Eu)
      }
      getHudSnapshot() {
        const uu = this.hudSnapshot,
          Eu = this.dailyReward.getHeldCoins();
        return null === uu || Eu <= 0 || !("hudPurseCoins" in uu) ? uu : {
          ...uu,
          hudPurseCoins: Math.max(0, uu.hudPurseCoins - Eu)
        }
      }
      receiveHud(uu) {
        this.hudSnapshot = uu, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(uu) {
        this.setMenuOpen(!0);
        const Eu = uu === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = uu;
        for (const ju of this.panels) ju === uu || Eu && ju === this.reachLog || ju.close();
        this.openingPanel = null
      }
      setTranslator(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Eu => this.resolveItemName(Eu, uu);
        this.quests.translateWithIcons = null !== ju && void 0 !== ju ? ju : null, this.navigation.setTranslator(uu, Eu), this.lampLight.setTranslator(uu, Eu), this.mailbox.setItemName(su);
        for (const Uu of this.panels) Uu.setTranslator(uu, Eu, su)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const uu of this.panels) uu.dispose()
      }
    }
    var pU = ju(1105),
      wU = ju.n(pU),
      JU = ju(22),
      dU = ju(36990),
      aU = ju(3601),
      PU = ju(1971),
      oU = ju(1964),
      kU = ju(34571),
      mU = ju(1244),
      vU = ju(1499),
      KU = ju(1154);

    function VU(uu) {
      let {
        controller: Eu,
        minimap: ju,
        children: su
      } = uu;
      const Zu = (0, vU.g)(gU, Eu.getHudSnapshot()),
        [Xu, lu] = (0, du.useState)(Eu.skills.getSnapshot().overallLevel);
      (0, vU.f)(Xj, (uu => {
        lu(uu.overallLevel)
      }));
      const qu = (0, du.useRef)(null);
      (0, vU.f)(Bj, (uu => {
        ! function(uu, Eu) {
          if (null === uu || "function" !== typeof uu.animate) return;
          const ju = Eu ? 1.35 : 1.15;
          uu.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${ju})`
          }, {
            transform: "scale(1)"
          }], {
            duration: Eu ? 320 : 160,
            easing: "ease-out"
          }), uu.classList.toggle("Receiving", !Eu), Eu && (uu.classList.remove("Shine"), uu.offsetWidth, uu.classList.add("Shine"))
        }(qu.current, uu)
      }));
      const {
        t: fu
      } = (0, mU.A)(), {
        isTouchScreen: Cu
      } = (0, JU.l)(["isTouchScreen"]), [bu, cu] = (0, du.useState)(null);
      return (0, aU.g)(bu, ".SkyblockRightHud"), null !== Zu || ju ? (0, KU.jsx)(dU.h, {
        placement: "topRight",
        children: (0, KU.jsxs)("div", {
          className: wU()("SkyblockRightHud", {
            TouchScreen: Cu
          }),
          children: [ju, null !== Zu && (0, KU.jsxs)("div", {
            ref: cu,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in Zu ? (0, KU.jsx)("div", {
              className: "SkyblockHudHelp",
              children: Zu.hudHelpText
            }) : (0, KU.jsxs)(KU.Fragment, {
              children: [(0, KU.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, KU.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, KU.jsx)("strong", {
                    style: {
                      color: Uu.G.cyanUiText
                    },
                    children: fu(Zu.hudZoneNameKey)
                  }), null !== Xu && (0, KU.jsx)("span", {
                    style: {
                      color: Uu.G.goldUiText
                    },
                    children: fu("skyblockGame:level", {
                      level: (0, kU.c)(Xu)
                    })
                  })]
                }), (0, KU.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: qu,
                  children: [(0, KU.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, KU.jsx)(PU.d, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, kU.c)(Zu.hudPurseCoins)]
                })]
              }), Zu.hudClockText.length > 0 && (0, KU.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, KU.jsx)(oU.d, {
                  text: Zu.hudClockText
                })
              })]
            }), su, "hudZoneNameKey" in Zu && (0, KU.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function rU(uu) {
      let {
        icon: Eu
      } = uu;
      const ju = (0, du.useCallback)((uu => {
        null === uu || void 0 === uu || uu.replaceChildren(TE(Eu))
      }), [Eu]);
      return (0, KU.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: ju
      })
    }

    function QU(uu) {
      let {
        controller: Eu
      } = uu;
      const {
        t: ju
      } = (0, mU.A)();
      return (0, KU.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: Eu.display.mountPlayer,
        title: ju("skyblockGame:mapYouAreHere"),
        children: (0, KU.jsx)(rU, {
          icon: "player"
        })
      })
    }
    const iU = ju(38889),
      WU = Object.fromEntries(iU.keys().map((uu => [uu.replace(/^\.\/(.*)\.png$/, "$1"), iU(uu)])));

    function SU(uu, Eu) {
      var ju;
      return null !== (ju = WU[uu]) && void 0 !== ju ? ju : WU[Eu]
    }

    function IU(uu) {
      let {
        imageKey: Eu,
        fallbackImageKey: ju,
        geometryKey: su,
        alt: Uu,
        className: Zu
      } = uu;
      const [Xu, lu] = (0, du.useState)((() => function(uu, Eu) {
        return [{
          id: 0,
          imageKey: uu,
          geometryKey: Eu,
          phase: "shown"
        }]
      }(Eu, su))), qu = function(uu, Eu, ju) {
        const su = uu[uu.length - 1];
        if (su.imageKey === Eu && su.geometryKey === ju) return uu;
        const Uu = {
          id: su.id + 1,
          imageKey: Eu,
          geometryKey: ju,
          phase: "entering"
        };
        return su.geometryKey === ju ? [{
          ...su,
          phase: "leaving"
        }, Uu] : [Uu]
      }(Xu, Eu, su);
      return qu !== Xu && lu(qu), (0, KU.jsx)(KU.Fragment, {
        children: qu.map((uu => (0, KU.jsx)("img", {
          className: wU()("SkyblockMapTerrainImage", Zu, {
            Entering: "entering" === uu.phase,
            Leaving: "leaving" === uu.phase
          }),
          src: SU(uu.imageKey, ju),
          alt: "leaving" === uu.phase ? "" : Uu,
          onAnimationEnd: () => {
            lu((Eu => function(uu, Eu) {
              return uu.flatMap((uu => uu.id !== Eu ? [uu] : "leaving" === uu.phase ? [] : [{
                ...uu,
                phase: "shown"
              }]))
            }(Eu, uu.id)))
          }
        }, uu.id)))
      })
    }
    var FU = ju(4719),
      BU = ju(1506);

    function LU(uu) {
      if ("Tab" !== uu.key) return;
      const Eu = Array.from(uu.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        ju = Eu.indexOf(document.activeElement);
      var su;
      if (uu.shiftKey && ju <= 0) uu.preventDefault(), null === (su = Eu.at(-1)) || void 0 === su || su.focus();
      else if (!uu.shiftKey && (-1 === ju || ju === Eu.length - 1)) {
        var Uu;
        uu.preventDefault(), null === (Uu = Eu[0]) || void 0 === Uu || Uu.focus()
      }
    }

    function tU() {
      const uu = (0, du.useRef)(null);
      return (0, du.useCallback)((Eu => {
        var ju;
        Eu ? (uu.current = document.activeElement, Eu.focus()) : null === (ju = uu.current) || void 0 === ju || ju.focus()
      }), [])
    }

    function xU(uu) {
      let {
        percent: Eu,
        label: ju,
        levelUpToken: su,
        colour: Uu
      } = uu;
      return (0, KU.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": ju,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Eu,
        "aria-valuetext": ju,
        children: [(0, KU.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${Eu/100})`
          }
        }), null !== su && void 0 !== su && (0, KU.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": Uu
          }
        }, su)]
      })
    }

    function TU(uu) {
      let {
        mount: Eu
      } = uu;
      return (0, KU.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: Eu,
        hidden: !0,
        children: (0, KU.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, KU.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, KU.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function HU(uu, Eu, ju, su) {
      (0, du.useLayoutEffect)((() => {
        const Uu = uu.current;
        if (!ju || null === Eu || void 0 === Eu || !Eu.local || !Uu) return;
        const Zu = Array.from(Uu.querySelectorAll(".SkyblockMapNode")),
          Xu = [...Eu.points, ...Eu.portals],
          lu = () => {
            const uu = Uu.clientWidth,
              ju = Uu.clientHeight,
              lu = Zu.map(((Uu, Zu) => {
                const lu = Xu[Zu];
                return {
                  id: lu.id,
                  portal: Zu >= Eu.points.length,
                  x: lu.position[0] * uu / 100,
                  y: lu.position[1] * ju / 100,
                  width: Uu.offsetWidth / su,
                  height: Uu.offsetHeight / su
                }
              })),
              qu = new Map(Xu.map(((uu, Eu) => [uu.id, Zu[Eu]])));
            for (const Eu of function(uu, Eu, ju) {
                const su = [],
                  Uu = [...uu].sort(((uu, Eu) => Number(Eu.portal) - Number(uu.portal) || uu.id.localeCompare(Eu.id)));
                for (const Zu of Uu) {
                  const uu = uu => Math.max(Zu.width / 2, Math.min(Eu - Zu.width / 2, uu)),
                    Uu = uu => Math.max(Zu.height / 2, Math.min(ju - Zu.height / 2, uu)),
                    Xu = [uu(Zu.x)],
                    lu = [Uu(Zu.y)];
                  for (const Eu of su) Xu.push(uu(Eu.x - (Eu.width + Zu.width) / 2 - 4), uu(Eu.x + (Eu.width + Zu.width) / 2 + 4)), lu.push(Uu(Eu.y - (Eu.height + Zu.height) / 2 - 4), Uu(Eu.y + (Eu.height + Zu.height) / 2 + 4));
                  let qu = {
                      ...Zu,
                      x: Xu[0],
                      y: lu[0]
                    },
                    fu = 1 / 0,
                    Cu = 1 / 0;
                  for (const Eu of new Set(Xu))
                    for (const uu of new Set(lu)) {
                      let ju = 0;
                      for (const Xu of su) ju += Math.max(0, (Zu.width + Xu.width) / 2 + 4 - Math.abs(Eu - Xu.x)) * Math.max(0, (Zu.height + Xu.height) / 2 + 4 - Math.abs(uu - Xu.y));
                      const Uu = (Eu - Zu.x) ** 2 + (uu - Zu.y) ** 2;
                      (ju < fu || ju === fu && Uu < Cu) && (qu = {
                        ...Zu,
                        x: Eu,
                        y: uu
                      }, fu = ju, Cu = Uu)
                    }
                  su.push(qu)
                }
                return su
              }(lu, uu, ju)) {
              const uu = qu.get(Eu.id);
              uu.style.left = `${Eu.x}px`, uu.style.top = `${Eu.y}px`
            }
          };
        lu();
        const qu = new ResizeObserver(lu);
        qu.observe(Uu);
        for (const uu of Zu) qu.observe(uu);
        return () => {
          qu.disconnect()
        }
      }), [uu, Eu, ju, su])
    }
    const AU = {
        zoom: 1,
        x: 0,
        y: 0
      },
      nU = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function yU(uu, Eu, ju) {
      return Math.min(ju, Math.max(Eu, uu))
    }

    function zU(uu, Eu, ju) {
      const su = Math.min(1, ju * Eu / uu),
        Uu = Math.min(1, uu / (ju * Eu));
      return {
        x0: (1 - su) / 2,
        y0: (1 - Uu) / 2,
        x1: (1 + su) / 2,
        y1: (1 + Uu) / 2
      }
    }

    function RU(uu, Eu, ju, su) {
      const Uu = Eu * (su - ju);
      if (Uu <= 1) return .5 - Eu * (ju + su) / 2;
      const Zu = .45 * Math.min(1, Uu - 1);
      return yU(uu, 1 - Eu * su - Zu, Zu - Eu * ju)
    }

    function uZ(uu, Eu) {
      const ju = yU(uu.zoom, 1, 12);
      return {
        zoom: ju,
        x: RU(uu.x, ju, Eu.x0, Eu.x1),
        y: RU(uu.y, ju, Eu.y0, Eu.y1)
      }
    }

    function EZ(uu, Eu, ju, su) {
      let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : nU;
      const Zu = yU(uu.zoom * Eu, 1, 12),
        Xu = Zu / uu.zoom;
      return uZ({
        zoom: Zu,
        x: ju - (ju - uu.x) * Xu,
        y: su - (su - uu.y) * Xu
      }, Uu)
    }

    function jZ(uu, Eu, ju, su) {
      const [Uu, Zu] = (0, du.useState)(AU);
      (0, du.useEffect)((() => {
        Zu(AU)
      }), [ju]), (0, du.useEffect)((() => {
        const ju = uu.current;
        if (!Eu || !ju) return;
        const Uu = () => zU(ju.clientWidth, ju.clientHeight, su),
          Xu = uu => {
            const Eu = ju.getBoundingClientRect();
            return {
              x: (uu.clientX - Eu.left) / Eu.width,
              y: (uu.clientY - Eu.top) / Eu.height
            }
          },
          lu = new Map;
        let qu = {
            x: 0,
            y: 0
          },
          fu = !1,
          Cu = 0;
        const bu = uu => {
            uu.preventDefault();
            const Eu = uu.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * uu.deltaY : uu.deltaY,
              ju = Xu(uu);
            Zu((uu => EZ(uu, Math.exp(.0015 * -Eu), ju.x, ju.y, Uu())))
          },
          cu = uu => {
            "mouse" === uu.pointerType && 0 !== uu.button || (lu.set(uu.pointerId, Xu(uu)), 1 === lu.size && (qu = {
              x: uu.clientX,
              y: uu.clientY
            }, fu = !1), Cu = 0)
          },
          Nu = uu => {
            const Eu = lu.get(uu.pointerId);
            if (!Eu) return;
            const su = Xu(uu);
            if (lu.set(uu.pointerId, su), 2 === lu.size) {
              const [uu, Eu] = [...lu.values()], ju = Math.hypot(uu.x - Eu.x, uu.y - Eu.y);
              if (Cu > 0) {
                const su = ju / Cu;
                Zu((ju => EZ(ju, su, (uu.x + Eu.x) / 2, (uu.y + Eu.y) / 2, Uu())))
              }
              return Cu = ju, void(fu = !0)
            }!fu && Math.hypot(uu.clientX - qu.x, uu.clientY - qu.y) < 4 || (fu || (fu = !0, ju.setPointerCapture(uu.pointerId)), Zu((uu => function(uu, Eu, ju) {
              let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : nU;
              return uZ({
                zoom: uu.zoom,
                x: uu.x + Eu,
                y: uu.y + ju
              }, su)
            }(uu, su.x - Eu.x, su.y - Eu.y, Uu()))))
          },
          Ou = uu => {
            lu.delete(uu.pointerId), Cu = 0
          },
          Yu = uu => {
            fu && (uu.stopPropagation(), uu.preventDefault(), fu = !1)
          },
          hu = new ResizeObserver((() => {
            Zu((uu => uZ(uu, Uu())))
          }));
        return hu.observe(ju), ju.addEventListener("wheel", bu, {
          passive: !1
        }), ju.addEventListener("pointerdown", cu), ju.addEventListener("pointermove", Nu), ju.addEventListener("pointerup", Ou), ju.addEventListener("pointercancel", Ou), ju.addEventListener("click", Yu, !0), () => {
          hu.disconnect(), ju.removeEventListener("wheel", bu), ju.removeEventListener("pointerdown", cu), ju.removeEventListener("pointermove", Nu), ju.removeEventListener("pointerup", Ou), ju.removeEventListener("pointercancel", Ou), ju.removeEventListener("click", Yu, !0)
        }
      }), [uu, Eu, ju, su]);
      return {
        view: Uu,
        zoomBy: Eu => {
          const ju = uu.current;
          ju && Zu((uu => EZ(uu, Eu, .5, .5, zU(ju.clientWidth, ju.clientHeight, su))))
        }
      }
    }

    function sZ(uu) {
      var Eu, ju, su, Uu;
      let {
        controller: Zu,
        navigation: Xu
      } = uu;
      const lu = (0, vU.g)(cu, Zu.getSnapshot()),
        {
          t: qu
        } = (0, mU.A)(),
        fu = tU(),
        Cu = lu.presentation,
        bu = (0, du.useRef)(null),
        Nu = (0, du.useRef)(null),
        Ou = Boolean(lu.open && (null === Cu || void 0 === Cu ? void 0 : Cu.local) && Cu.background),
        Yu = jZ(bu, Ou, `${lu.open}|${lu.tab}|${null===Cu||void 0===Cu||null===(Eu=Cu.background)||void 0===Eu?void 0:Eu.geometryKey}`, null !== (ju = null === Cu || void 0 === Cu || null === (su = Cu.background) || void 0 === su ? void 0 : su.ratio) && void 0 !== ju ? ju : 2);
      if (HU(Nu, Cu, lu.open, Yu.view.zoom), !Cu || !lu.open) return null;
      const hu = Cu.local ? Cu.background : null,
        Du = {
          "--map-ratio": String(null !== (Uu = null === hu || void 0 === hu ? void 0 : hu.ratio) && void 0 !== Uu ? Uu : 2),
          backgroundColor: null === hu || void 0 === hu ? void 0 : hu.colour
        },
        gu = {
          "--map-zoom": String(Yu.view.zoom),
          transform: `translate(${100*Yu.view.x}%, ${100*Yu.view.y}%) scale(${Yu.view.zoom})`
        };
      return (0, KU.jsx)(FU.c, {
        show: lu.open,
        close: Zu.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, KU.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: fu,
          onKeyDown: LU,
          children: [(0, KU.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, KU.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, KU.jsx)("h2", {
                id: "skyblockMapTitle",
                children: qu("skyblockGame:map")
              }), Cu.minimap && (0, KU.jsx)("p", {
                children: Cu.minimap.caption
              })]
            }), (0, KU.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((uu => (0, KU.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": uu === lu.tab ? "true" : void 0,
                className: wU()({
                  Selected: uu === lu.tab
                }),
                "aria-pressed": uu === lu.tab,
                onClick: () => {
                  Zu.selectTab(uu)
                },
                children: qu("local" === uu ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, uu)))
            }), (0, KU.jsx)(BU.l, {
              padIgnore: !0,
              onClick: Zu.dismiss
            })]
          }), (0, KU.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, KU.jsxs)("div", {
              ref: bu,
              className: wU()("SkyblockMapCanvas", {
                Local: Cu.local,
                Overview: !Cu.local,
                Zoomed: Yu.view.zoom > 1
              }),
              style: Du,
              children: [(0, KU.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: Ou ? gu : void 0,
                children: (0, KU.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: Nu,
                  children: [hu && (0, KU.jsx)(IU, {
                    className: "SkyblockMapTerrain",
                    imageKey: hu.imageKey,
                    fallbackImageKey: hu.fallbackImageKey,
                    geometryKey: hu.geometryKey,
                    alt: hu.label
                  }), Cu.local && (0, KU.jsx)(TU, {
                    mount: Xu.display.mountMapSearchArea
                  }), !Cu.local && (0, KU.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: Cu.connections.map((uu => (0, KU.jsx)("line", {
                      className: wU()({
                        Explored: uu.explored
                      }),
                      x1: uu.start[0],
                      y1: uu.start[1],
                      x2: uu.end[0],
                      y2: uu.end[1]
                    }, uu.id)))
                  }), Cu.points.map((uu => {
                    const Eu = !Cu.local && uu.thumbnail ? WU[uu.thumbnail] : void 0;
                    return (0, KU.jsxs)("div", {
                      className: wU()("SkyblockMapNode", {
                        Current: uu.current
                      }),
                      style: {
                        left: `${uu.position[0]}%`,
                        top: `${uu.position[1]}%`
                      },
                      children: [(0, KU.jsxs)(BU.f, {
                        className: wU()("SkyblockMapPin", {
                          Unknown: !uu.visited,
                          Current: uu.current
                        }),
                        disabled: lu.pending,
                        onClick: () => {
                          Zu.travel(uu.travelKind, uu.travelId)
                        },
                        children: [Eu && (0, KU.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: Eu,
                          alt: ""
                        }), !Eu && (0, KU.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, KU.jsx)(rU, {
                            icon: uu.icon
                          })
                        }), (0, KU.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: uu.name
                        })]
                      }), uu.current && (0, KU.jsx)("span", {
                        className: wU()("SkyblockMapHereBadge", {
                          Above: uu.position[1] > 50
                        }),
                        children: qu("skyblockGame:mapYouAreHere")
                      })]
                    }, uu.id)
                  })), Cu.portals.map((uu => (0, KU.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${uu.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${uu.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, KU.jsxs)(BU.f, {
                      className: "SkyblockMapPin",
                      disabled: lu.pending,
                      onClick: () => {
                        Zu.travel(uu.travelKind, uu.travelId)
                      },
                      children: [(0, KU.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: uu.colour
                        },
                        "aria-hidden": "true",
                        children: (0, KU.jsx)(rU, {
                          icon: uu.icon
                        })
                      }), (0, KU.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: uu.name
                      })]
                    })
                  }, uu.id))), Cu.local && (0, KU.jsx)(QU, {
                    controller: Xu
                  })]
                })
              }), Ou && (0, KU.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, KU.jsx)("button", {
                  type: "button",
                  "aria-label": qu("skyblockGame:mapZoomIn"),
                  disabled: Yu.view.zoom >= 12,
                  onClick: () => {
                    Yu.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, KU.jsx)("button", {
                  type: "button",
                  "aria-label": qu("skyblockGame:mapZoomOut"),
                  disabled: Yu.view.zoom <= 1,
                  onClick: () => {
                    Yu.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, KU.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: lu.feedback
              })]
            })
          }), (0, KU.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [Cu.progress && (0, KU.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, KU.jsx)("span", {
                children: Cu.progress
              }), (0, KU.jsx)(xU, {
                percent: Cu.percent,
                label: Cu.progress
              })]
            }), Cu.noLandmarks && (0, KU.jsx)("span", {
              children: qu("skyblockGame:mapNoLandmarks")
            }), Cu.canTravel && (0, KU.jsx)("span", {
              className: "SkyblockMapHint",
              children: qu("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function UZ(uu) {
      let {
        view: Eu,
        controller: ju,
        navigation: su
      } = uu;
      const {
        t: Uu
      } = (0, mU.A)(), {
        isTouchScreen: Zu
      } = (0, JU.l)(["isTouchScreen"]);
      return (0, KU.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": Uu("skyblockGame:mapLocal"),
        children: [Zu && (0, KU.jsx)(BU.f, {
          className: "SkyblockMinimapOpen",
          onClick: ju.showLocal,
          children: Uu("skyblockGame:map")
        }), (0, KU.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: Eu.colour
          },
          children: [(0, KU.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: su.display.mountTerrain,
            style: {
              width: Eu.width,
              height: Eu.height
            },
            children: [(0, KU.jsx)(IU, {
              imageKey: Eu.imageKey,
              fallbackImageKey: Eu.fallbackImageKey,
              geometryKey: Eu.geometryKey,
              alt: Eu.label
            }), (0, KU.jsx)(TU, {
              mount: su.display.mountMinimapSearchArea
            }), Eu.markers.map((uu => (0, KU.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${uu.position[0]}%`,
                top: `${uu.position[1]}%`,
                color: uu.colour
              },
              title: uu.name,
              children: (0, KU.jsx)(rU, {
                icon: uu.icon
              })
            }, uu.id)))]
          }), (0, KU.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: Uu("skyblockGame:mapYouAreHere"),
            children: (0, KU.jsx)(rU, {
              icon: "player"
            })
          })]
        }), (0, KU.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: Eu.caption
        })]
      })
    }

    function ZZ(uu) {
      let {
        controller: Eu
      } = uu;
      return (0, KU.jsxs)("div", {
        className: "SkyblockCompass",
        ref: Eu.display.mountCompass,
        children: [(0, KU.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, KU.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, KU.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function XZ(uu) {
      let {
        controller: Eu,
        surface: ju
      } = uu;
      const {
        t: su
      } = (0, mU.A)(), Uu = (0, vU.g)(Xj, Eu.getSnapshot()), Zu = tU();
      return Uu.enabled ? (0, KU.jsxs)(KU.Fragment, {
        children: ["hud" === ju && (0, KU.jsx)(dU.h, {
          placement: "statBars",
          children: Uu.hud && (0, KU.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": Uu.hud.colour
            },
            children: [(0, KU.jsx)(xU, {
              percent: Uu.hud.skill.percent,
              label: Uu.hud.skill.xp,
              levelUpToken: Uu.hud.levelUpToken,
              colour: Uu.hud.colour
            }), (0, KU.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, KU.jsxs)("span", {
                children: [Uu.hud.skill.label, " \xb7 ", Uu.hud.skill.level]
              }), (0, KU.jsx)("span", {
                children: Uu.hud.gain
              })]
            })]
          })
        }), "hud" === ju && (0, KU.jsx)(dU.h, {
          children: Uu.hud && (0, KU.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, KU.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, KU.jsx)("strong", {
                children: Uu.hud.skill.label
              }), (0, KU.jsx)("span", {
                children: Uu.hud.gain
              })]
            }), (0, KU.jsx)(xU, {
              percent: Uu.hud.skill.percent,
              label: Uu.hud.skill.xp,
              levelUpToken: Uu.hud.levelUpToken,
              colour: Uu.hud.colour
            }), (0, KU.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, KU.jsx)("span", {
                children: Uu.hud.skill.level
              }), (0, KU.jsx)("span", {
                children: Uu.hud.skill.xp
              })]
            })]
          })
        }), "menu" === ju && (0, KU.jsx)(FU.c, {
          show: Uu.open,
          close: Eu.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, KU.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: Zu,
            onKeyDown: LU,
            children: [(0, KU.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, KU.jsxs)("div", {
                children: [(0, KU.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: su("skyblockGame:skills")
                }), (0, KU.jsx)("p", {
                  children: su("skyblockGame:skillsIntro")
                })]
              }), (0, KU.jsx)(BU.l, {
                padIgnore: !0,
                onClick: Eu.dismiss
              })]
            }), (0, KU.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, KU.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: Uu.skills.map((uu => (0, KU.jsxs)(BU.f, {
                  className: wU()("SkyblockSkillCard", {
                    Selected: uu.selected
                  }),
                  ariaPressed: uu.selected,
                  onClick: () => {
                    Eu.select(uu.id)
                  },
                  children: [(0, KU.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, KU.jsx)(PU.d, {
                      itemName: uu.icon,
                      amount: 0
                    })
                  }), (0, KU.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, KU.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, KU.jsx)("strong", {
                        children: uu.label
                      }), (0, KU.jsx)("span", {
                        children: uu.level
                      })]
                    }), (0, KU.jsx)(xU, {
                      percent: uu.percent,
                      label: `${uu.label}: ${uu.xp}`
                    }), (0, KU.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: uu.xp
                    })]
                  })]
                }, uu.id)))
              }), Uu.detail && (0, KU.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, KU.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, KU.jsx)(PU.d, {
                    itemName: Uu.detail.icon,
                    amount: 0
                  })
                }), (0, KU.jsx)("h3", {
                  children: Uu.detail.label
                }), (0, KU.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: Uu.detail.level
                }), (0, KU.jsx)("p", {
                  children: Uu.detail.description
                }), (0, KU.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, KU.jsx)("strong", {
                    children: su("skyblockGame:currentBenefit")
                  }), (0, KU.jsx)("span", {
                    children: Uu.detail.benefit
                  })]
                }), (0, KU.jsx)(xU, {
                  percent: Uu.detail.percent,
                  label: Uu.detail.xp
                }), (0, KU.jsx)("p", {
                  children: Uu.detail.xp
                }), (0, KU.jsx)("h4", {
                  children: su("skyblockGame:earnXp")
                }), (0, KU.jsx)("ul", {
                  children: Uu.detail.sources.map((uu => (0, KU.jsx)("li", {
                    children: uu
                  }, uu)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var lZ = ju(1419),
      qZ = ju(4999),
      fZ = ju(337);

    function CZ(uu) {
      let {
        item: Eu
      } = uu;
      return (0, KU.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, KU.jsx)(PU.d, {
          itemName: Eu,
          amount: 0
        })
      })
    }

    function bZ(uu) {
      let {
        name: Eu,
        percent: ju,
        progress: su
      } = uu;
      return (0, KU.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, KU.jsx)(xU, {
          percent: ju,
          label: `${(0,fZ.sb)(Eu)}: ${su}`
        }), (0, KU.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: su
        })]
      })
    }

    function cZ(uu) {
      let {
        subquests: Eu,
        showDescriptions: ju = !1
      } = uu;
      return (0, KU.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: Eu.map((uu => {
          const Eu = ju && "completed" === uu.status,
            su = (0, KU.jsxs)("li", {
              className: wU()("SkyblockQuestStep", uu.status, {
                JustFinished: uu.justFinished,
                JustUnlocked: uu.justUnlocked
              }),
              tabIndex: Eu ? 0 : void 0,
              children: [null !== uu.iconItem && (0, KU.jsx)(CZ, {
                item: uu.iconItem
              }), null === uu.iconItem && (0, KU.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === uu.status ? "\u2713" : "skipped" === uu.status ? "\u2212" : "\u25cb"
              }), (0, KU.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, KU.jsx)("strong", {
                  children: (0, KU.jsx)(qZ.e, {
                    text: uu.name
                  })
                }), ju && !Eu && (0, KU.jsx)("span", {
                  children: (0, KU.jsx)(qZ.e, {
                    text: uu.description
                  })
                }), null !== uu.barPercent && (0, KU.jsx)(bZ, {
                  name: uu.name,
                  percent: uu.barPercent,
                  progress: uu.progress
                }), null === uu.barPercent && !Eu && (0, KU.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: uu.statusLabel
                })]
              })]
            }, uu.id);
          return Eu ? (0, KU.jsx)(lZ.e, {
            delayShow: 200,
            tooltipInner: (0, KU.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, KU.jsx)("span", {
                children: (0, KU.jsx)(qZ.e, {
                  text: uu.description
                })
              }), (0, KU.jsx)("strong", {
                children: uu.statusLabel
              })]
            }),
            children: su
          }, uu.id) : su
        }))
      })
    }

    function NZ(uu) {
      let {
        quest: Eu,
        select: ju
      } = uu;
      const {
        t: su
      } = (0, mU.A)(), Uu = Eu.focusStep;
      return (0, KU.jsxs)(BU.f, {
        className: wU()("SkyblockQuestCard", {
          Selected: Eu.selected,
          Tracked: Eu.tracked
        }),
        onClick: () => {
          ju(Eu.id)
        },
        children: [(0, KU.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, KU.jsx)("strong", {
            children: (0, KU.jsx)(qZ.e, {
              text: Eu.name
            })
          }), Eu.tracked && (0, KU.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: su("skyblockGame:currentQuest")
          })]
        }), Uu && (0, KU.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== Uu.iconItem && (0, KU.jsx)(CZ, {
            item: Uu.iconItem
          }), (0, KU.jsx)(bZ, {
            name: Uu.name,
            percent: Uu.barPercent,
            progress: Uu.progress
          })]
        }), (0, KU.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: Eu.progress
        })]
      })
    }

    function OZ(uu) {
      let {
        controller: Eu,
        surface: ju
      } = uu;
      const su = (0, vU.g)(Cj, Eu.getSnapshot()),
        {
          t: Uu
        } = (0, mU.A)(),
        Zu = tU();
      return su.enabled ? (0, KU.jsxs)(KU.Fragment, {
        children: ["hud" === ju && (0, KU.jsx)(KU.Fragment, {
          children: su.tracked && (0, KU.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: fj,
            children: (0, KU.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [su.trackedStepPulse > 0 && (0, KU.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, su.trackedStepPulse), (0, KU.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: Uu("skyblockGame:currentQuest")
              }), (0, KU.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, KU.jsx)("strong", {
                  children: (0, KU.jsx)(qZ.e, {
                    text: su.tracked.name
                  })
                }), null !== su.tracked.clock && (0, KU.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: su.tracked.clock
                })]
              }), (0, KU.jsx)(cZ, {
                subquests: su.tracked.subquests
              })]
            })
          })
        }), "menu" === ju && (0, KU.jsx)(FU.c, {
          show: su.open,
          close: Eu.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, KU.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: Zu,
            onKeyDown: LU,
            children: [(0, KU.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, KU.jsx)("div", {
                children: (0, KU.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: Uu("skyblockGame:quests")
                })
              }), (0, KU.jsx)(BU.l, {
                padIgnore: !0,
                onClick: Eu.dismiss
              })]
            }), (0, KU.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, KU.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, KU.jsx)("h3", {
                  children: Uu("skyblockGame:current")
                }), 0 === su.active.length && (0, KU.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: Uu("skyblockGame:noActiveQuests")
                }), su.active.map((uu => (0, KU.jsx)(NZ, {
                  quest: uu,
                  select: Eu.select
                }, uu.id))), (0, KU.jsx)("h3", {
                  children: (0, KU.jsxs)("button", {
                    type: "button",
                    className: wU()("SkyblockQuestSectionToggle", {
                      Expanded: su.completedExpanded
                    }),
                    "aria-expanded": su.completedExpanded,
                    onClick: Eu.toggleCompleted,
                    children: [(0, KU.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), Uu("skyblockGame:completed"), (0, KU.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: su.completed.length
                    })]
                  })
                }), su.completedExpanded && 0 === su.completed.length && (0, KU.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: Uu("skyblockGame:noCompletedQuests")
                }), su.completedExpanded && su.completed.map((uu => (0, KU.jsx)(NZ, {
                  quest: uu,
                  select: Eu.select
                }, uu.id)))]
              }), su.detail && (0, KU.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [su.detail.completed && (0, KU.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: Uu("skyblockGame:completedQuest")
                }), (0, KU.jsx)("h3", {
                  children: (0, KU.jsx)(qZ.e, {
                    text: su.detail.name
                  })
                }), (0, KU.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, KU.jsx)(qZ.e, {
                    text: su.detail.description
                  })
                }), (0, KU.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [su.detail.progress, null !== su.detail.clock && (0, KU.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: su.detail.clock
                  })]
                }), (0, KU.jsx)(cZ, {
                  subquests: su.detail.subquests,
                  showDescriptions: !0
                }), su.detail.tracked && (0, KU.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: su.detail.trackLabel
                }), !su.detail.completed && !su.detail.tracked && (0, KU.jsx)(BU.p, {
                  onClick: Eu.trackSelected,
                  disabled: !su.detail.canTrack,
                  children: su.detail.trackLabel
                }), su.detail.canViewDialogue && (0, KU.jsx)(BU.f, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: Eu.viewDialogue,
                  children: Uu("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var YZ = ju(1116),
      hZ = ju(2742);

    function DZ(uu, Eu, ju, su, Uu) {
      const Zu = uu => "linear" === Uu ? uu : {
          fU: Uu,
          point: uu
        },
        Xu = {};
      for (const [lu, qu] of su)
        for (const [Eu, ju] of Object.entries(uu(lu, qu, Zu))) Xu[Eu] ??= {
          timeline: []
        }, Xu[Eu].timeline.push(ju);
      return {
        UU: Eu,
        loop: ju,
        XU: Xu
      }
    }
    const gZ = .547,
      MZ = .022,
      eZ = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      GZ = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function pZ(uu, Eu, ju) {
      const {
        drop: su = 0,
        shift: Uu = 0,
        torso: Zu = 0,
        nod: Xu = 0,
        tilt: lu = 0,
        legs: qu = [0, 0],
        arms: fu = 0,
        spread: Cu = 0
      } = Eu, bu = gZ * Math.cos(Zu) - MZ * Math.sin(Zu), cu = gZ * Math.sin(Zu) + MZ * Math.cos(Zu), Nu = ju([0, -su, Uu]);
      return {
        LowerBody: {
          timeFraction: uu,
          position: Nu,
          rotation: ju([0, 0, 0])
        },
        UpperBody: {
          timeFraction: uu,
          position: Nu,
          rotation: ju([Zu, 0, lu])
        },
        HeadMesh: {
          timeFraction: uu,
          position: ju([0, bu - gZ - su, cu - MZ + Uu]),
          rotation: ju([Zu + Xu, 0, lu])
        },
        LegLeftMesh: {
          timeFraction: uu,
          rotation: ju([qu[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: uu,
          rotation: ju([qu[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: uu,
          rotation: ju([fu, 0, Cu])
        },
        ArmRightMesh: {
          timeFraction: uu,
          rotation: ju([fu, 0, -Cu])
        }
      }
    }

    function wZ(uu, Eu, ju) {
      return DZ(pZ, uu, Eu, ju, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function JZ(uu) {
      return "number" === typeof uu ? [uu, uu] : uu
    }

    function dZ(uu, Eu, ju) {
      const {
        rise: su = 0,
        shift: Uu = 0,
        torso: Zu = 0,
        twist: Xu = 0,
        tilt: lu = 0,
        nod: qu = 0,
        cock: fu = 0,
        arms: Cu = 0,
        spread: bu = 0
      } = Eu, [cu, Nu] = JZ(Cu), [Ou, Yu] = JZ(bu);
      return {
        TorsoNode: {
          timeFraction: uu,
          position: ju([0, su, Uu]),
          rotation: ju([Zu, Xu, lu])
        },
        HeadMesh: {
          timeFraction: uu,
          rotation: ju([qu, 0, fu])
        },
        ArmLeftMesh: {
          timeFraction: uu,
          rotation: ju([cu, 0, Ou])
        },
        ArmRightMesh: {
          timeFraction: uu,
          rotation: ju([Nu, 0, -Yu])
        }
      }
    }
    const aZ = [1.0625, -1, 0];

    function PZ(uu) {
      return "number" === typeof uu ? [uu, uu] : uu
    }

    function oZ(uu, Eu, ju) {
      const {
        drop: su = 0,
        shift: Uu = 0,
        torso: Zu = 0,
        tilt: Xu = 0,
        nod: lu = 0,
        cock: qu = 0,
        legs: fu = [0, 0],
        arms: Cu = 0,
        spread: bu = 0
      } = Eu, [cu, Nu] = PZ(Cu), [Ou, Yu] = PZ(bu), hu = -Zu, Du = -Xu, [gu, Mu, eu] = function(uu, Eu) {
        const [ju, su, Uu] = [-aZ[0], aZ[1], -aZ[2]], Zu = ju * Math.cos(Eu) - su * Math.sin(Eu), Xu = ju * Math.sin(Eu) + su * Math.cos(Eu);
        return [Zu - ju, -(Xu * Math.cos(uu) - Uu * Math.sin(uu) - su), Xu * Math.sin(uu) + Uu * Math.cos(uu) - Uu]
      }(hu, Du), Gu = ju([0, -su, Uu]);
      return {
        TorsoNode: {
          timeFraction: uu,
          position: ju([gu, Mu - su, eu + Uu]),
          rotation: ju([hu, 0, Du])
        },
        HeadMesh: {
          timeFraction: uu,
          rotation: ju([-lu, 0, -qu])
        },
        ArmLeftMesh: {
          timeFraction: uu,
          rotation: ju([-cu, 0, -Ou])
        },
        ArmRightMesh: {
          timeFraction: uu,
          rotation: ju([-Nu, 0, Yu])
        },
        LegLeftMesh: {
          timeFraction: uu,
          position: Gu,
          rotation: ju([-fu[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: uu,
          position: Gu,
          rotation: ju([-fu[1], 0, 0])
        }
      }
    }
    var kZ = ju(37554),
      mZ = ju(38795),
      vZ = ju(38982);

    function KZ(uu, Eu, ju) {
      var su, Uu;
      const Zu = function() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return uu + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - uu) * ju
        },
        [Xu, lu] = null !== (su = uu.legs) && void 0 !== su ? su : [0, 0],
        [qu, fu] = null !== (Uu = Eu.legs) && void 0 !== Uu ? Uu : [0, 0];
      return {
        drop: Zu(uu.drop, Eu.drop),
        shift: Zu(uu.shift, Eu.shift),
        torso: Zu(uu.torso, Eu.torso),
        nod: Zu(uu.nod, Eu.nod),
        tilt: Zu(uu.tilt, Eu.tilt),
        legs: [Zu(Xu, qu), Zu(lu, fu)],
        arms: Zu(uu.arms, Eu.arms),
        spread: Zu(uu.spread, Eu.spread)
      }
    }
    const VZ = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      rZ = wZ(4400, !0, [
        [0, VZ],
        [.16, {
          ...VZ,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, VZ],
        [.44, {
          ...VZ,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, KZ(VZ, eZ, .7)],
        [.66, KZ(VZ, eZ, .78)],
        [.74, KZ(VZ, GZ, .65)],
        [.86, {
          ...VZ,
          drop: .14
        }],
        [1, VZ]
      ], "catmull-rom-spline"),
      QZ = {
        ...VZ,
        drop: .14,
        torso: .3,
        spread: .4
      },
      iZ = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      WZ = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      SZ = {
        caveGolem: rZ,
        magmaGolem: wZ(3600, !0, [
          [0, QZ],
          [.12, {
            ...QZ,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...QZ,
            tilt: -.08
          }],
          [.4, {
            ...QZ,
            tilt: .06,
            drop: .11
          }],
          [.52, KZ(QZ, eZ, .9)],
          [.62, KZ(QZ, GZ, .8)],
          [.7, KZ(QZ, GZ, .45)],
          [.78, KZ(QZ, GZ, .85)],
          [.9, {
            ...QZ,
            drop: .17
          }],
          [1, QZ]
        ], "catmull-rom-spline"),
        frostWraith: function(uu, Eu, ju) {
          return DZ(dZ, uu, Eu, ju, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, iZ],
          [.14, {
            ...iZ,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...iZ,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...iZ,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...iZ,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...iZ,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...iZ,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...iZ,
            rise: .16,
            tilt: -.04
          }],
          [1, iZ]
        ], "catmull-rom-spline"),
        tikiTerror: function(uu, Eu, ju) {
          return DZ(oZ, uu, Eu, ju, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, WZ],
          [.16, {
            ...WZ,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, WZ],
          [.44, {
            ...WZ,
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
            ...WZ,
            drop: .1
          }],
          [1, WZ]
        ], "catmull-rom-spline")
      },
      IZ = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      FZ = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      BZ = Object.fromEntries(Object.entries(SZ).map((uu => {
        let [Eu, ju] = uu;
        return [Eu, (0, vZ.c)((0, kZ.d)(ju), Eu)]
      })));

    function LZ(uu) {
      const Eu = function(uu) {
        var Eu;
        const ju = (0, mZ.b)(uu).poseRig;
        return null !== (Eu = FZ[uu]) && void 0 !== Eu ? Eu : void 0 === ju ? null : IZ[ju]
      }(uu);
      return null === Eu ? null : BZ[Eu]
    }

    function tZ(uu) {
      return {
        "--difficulty-colour": uu
      }
    }
    const xZ = (0, du.lazy)((() => (0, hZ.d)(ju.e(203).then((() => ju(41783))), (uu => uu.MobPreview))));

    function TZ(uu) {
      var Eu, ju, su;
      let {
        picker: Uu,
        controller: Zu
      } = uu;
      const {
        t: Xu
      } = (0, mU.A)(), lu = tU(), {
        page: qu
      } = Uu;
      return (0, KU.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: lu,
        onKeyDown: uu => {
          "ArrowLeft" === uu.key ? (uu.preventDefault(), uu.stopPropagation(), Zu.previous()) : "ArrowRight" === uu.key ? (uu.preventDefault(), uu.stopPropagation(), Zu.next()) : LU(uu)
        },
        style: tZ(qu.colour),
        children: [(0, KU.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, KU.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: Uu.dungeonName
          }), (0, KU.jsx)(BU.l, {
            padIgnore: !0,
            onClick: Zu.dismiss
          })]
        }), (0, KU.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, KU.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, KU.jsx)(BU.f, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !Uu.canPrevious,
              onClick: Zu.previous,
              children: (0, KU.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, KU.jsx)(YZ.e, {
                  name: "angle-up"
                })
              })
            }), (0, KU.jsxs)("div", {
              className: wU()("SkyblockBossPickerBoss", {
                Locked: !qu.unlocked
              }),
              children: [null !== qu.bossMobType && (0, KU.jsx)(du.Suspense, {
                fallback: (0, KU.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, KU.jsx)(xZ, {
                  className: "SkyblockBossPickerModel",
                  mobType: qu.bossMobType,
                  variation: qu.bossMobVariation,
                  animation: null !== (Eu = LZ(qu.bossMobType)) && void 0 !== Eu ? Eu : void 0
                })
              }), null === qu.bossMobType && (0, KU.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, KU.jsx)(BU.f, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !Uu.canNext,
              onClick: Zu.next,
              children: (0, KU.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, KU.jsx)(YZ.e, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, KU.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, KU.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [qu.beaten && (0, KU.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), qu.label]
            }), (0, KU.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (ju = qu.bossName) && void 0 !== ju ? ju : "???"
            }), (0, KU.jsxs)("span", {
              className: wU()("SkyblockBossPickerRecord", {
                Locked: null !== qu.lockedHint
              }),
              children: [null !== qu.lockedHintHighlight && (0, KU.jsxs)(KU.Fragment, {
                children: [qu.lockedHintHighlight.before, (0, KU.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: tZ(qu.lockedHintHighlight.colour),
                  children: [null !== qu.lockedHintHighlight.icon && (0, KU.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, KU.jsx)(PU.d, {
                      itemName: qu.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), qu.lockedHintHighlight.name]
                }), qu.lockedHintHighlight.after]
              }), null === qu.lockedHintHighlight && (null !== (su = qu.lockedHint) && void 0 !== su ? su : qu.summary)]
            })]
          }), (0, KU.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: Uu.pages.map((uu => (0, KU.jsx)("span", {
              className: wU()("SkyblockBossPickerDot", {
                Current: uu.current,
                Locked: !uu.unlocked
              }),
              style: tZ(uu.colour)
            }, uu.difficulty)))
          }), (0, KU.jsx)(BU.x, {
            className: "SkyblockBossPickerFight",
            disabled: !qu.unlocked,
            onClick: Zu.enter,
            children: Xu("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function HZ(uu) {
      let {
        dungeon: Eu,
        select: ju
      } = uu;
      return (0, KU.jsxs)(BU.f, {
        className: wU()("SkyblockDungeonCard", {
          Selected: Eu.selected
        }),
        onClick: () => {
          ju(Eu.id)
        },
        children: [(0, KU.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, KU.jsx)("strong", {
            children: Eu.name
          }), (0, KU.jsx)("span", {
            children: Eu.beatenSummary
          })]
        }), (0, KU.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: Eu.difficulties.map((uu => (0, KU.jsxs)("span", {
            className: wU()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: uu.beaten
            }),
            style: tZ(uu.colour),
            title: uu.summary,
            children: [uu.beaten && (0, KU.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), uu.label]
          }, uu.difficulty)))
        })]
      })
    }

    function AZ(uu) {
      let {
        controller: Eu
      } = uu;
      const ju = (0, vU.g)(Oj, Eu.getSnapshot()),
        {
          t: su
        } = (0, mU.A)(),
        Uu = tU();
      return ju.enabled ? (0, KU.jsxs)(FU.c, {
        show: ju.open,
        close: Eu.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [ju.picker && (0, KU.jsx)(TZ, {
          picker: ju.picker,
          controller: Eu
        }), !ju.picker && (0, KU.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: Uu,
          onKeyDown: LU,
          children: [(0, KU.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, KU.jsxs)("div", {
              children: [(0, KU.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: su("skyblockGame:dungeons")
              }), (0, KU.jsx)("p", {
                children: su("skyblockGame:dungeonsIntro")
              })]
            }), (0, KU.jsx)(BU.l, {
              padIgnore: !0,
              onClick: Eu.dismiss
            })]
          }), (0, KU.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, KU.jsx)("div", {
              className: "SkyblockDungeonList",
              children: ju.dungeons.map((uu => (0, KU.jsx)(HZ, {
                dungeon: uu,
                select: Eu.select
              }, uu.id)))
            }), ju.detail && (0, KU.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, KU.jsx)("h3", {
                children: ju.detail.name
              }), (0, KU.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: ju.detail.difficulties.map((uu => (0, KU.jsxs)("li", {
                  className: wU()("SkyblockDungeonRecord", {
                    Beaten: uu.beaten
                  }),
                  children: [(0, KU.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: tZ(uu.colour),
                    children: [uu.beaten && (0, KU.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), uu.label]
                  }), (0, KU.jsx)("span", {
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

    function nZ(uu) {
      let {
        collection: Eu,
        select: ju
      } = uu;
      return (0, KU.jsxs)(BU.f, {
        className: wU()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: Eu.selected,
          Locked: Eu.locked
        }),
        ariaPressed: Eu.selected,
        onClick: () => {
          ju(Eu.id)
        },
        children: [(0, KU.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, KU.jsx)(PU.d, {
            itemName: Eu.icon,
            amount: 0
          })
        }), (0, KU.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, KU.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, KU.jsx)("strong", {
              children: Eu.name
            }), (0, KU.jsx)("span", {
              children: Eu.tier
            })]
          }), (0, KU.jsx)(xU, {
            percent: Eu.percent,
            label: `${Eu.name}: ${Eu.progress}`
          }), (0, KU.jsx)("span", {
            className: "SkyblockSkillXp",
            children: Eu.progress
          })]
        })]
      })
    }

    function yZ(uu) {
      let {
        collection: Eu
      } = uu;
      const {
        t: ju
      } = (0, mU.A)();
      return (0, KU.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, KU.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, KU.jsx)(PU.d, {
            itemName: Eu.icon,
            amount: 0
          })
        }), (0, KU.jsx)("h3", {
          children: Eu.name
        }), (0, KU.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: Eu.tier
        }), (0, KU.jsx)("p", {
          children: Eu.locked ? ju("skyblockGame:collectionLocked") : Eu.count
        }), null !== Eu.nextReward && (0, KU.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, KU.jsx)("strong", {
            children: ju("skyblockGame:collectionNextReward")
          }), (0, KU.jsx)("span", {
            children: Eu.nextReward
          })]
        }), (0, KU.jsx)(xU, {
          percent: Eu.percent,
          label: Eu.progress
        }), (0, KU.jsx)("p", {
          children: Eu.progress
        })]
      })
    }

    function zZ(uu) {
      let {
        controller: Eu
      } = uu;
      const ju = (0, vU.g)(Qj, Eu.getSnapshot()),
        {
          t: su
        } = (0, mU.A)(),
        Uu = tU();
      return ju.enabled ? (0, KU.jsx)(FU.c, {
        show: ju.open,
        close: Eu.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, KU.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: Uu,
          onKeyDown: LU,
          children: [(0, KU.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, KU.jsxs)("div", {
              children: [(0, KU.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: su("skyblockGame:collections")
              }), (0, KU.jsxs)("p", {
                children: [su("skyblockGame:collectionsIntro"), " ", ju.tiersUnlocked]
              })]
            }), (0, KU.jsx)(BU.l, {
              padIgnore: !0,
              onClick: Eu.dismiss
            })]
          }), (0, KU.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: ju.categories.map((uu => (0, KU.jsxs)(BU.f, {
              className: wU()("SkyblockCollectionCategory", {
                Selected: uu.selected
              }),
              ariaPressed: uu.selected,
              padTabSelected: uu.selected,
              onClick: () => {
                Eu.selectCategory(uu.id)
              },
              children: [(0, KU.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, KU.jsx)(PU.d, {
                  itemName: uu.icon,
                  amount: 0
                })
              }), (0, KU.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, KU.jsx)("strong", {
                  children: uu.label
                }), (0, KU.jsx)("span", {
                  children: uu.tiers
                })]
              })]
            }, uu.id)))
          }), (0, KU.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, KU.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: ju.collections.map((uu => (0, KU.jsx)(nZ, {
                collection: uu,
                select: Eu.select
              }, uu.id)))
            }), ju.detail && (0, KU.jsx)(yZ, {
              collection: ju.detail
            })]
          })]
        })
      }) : null
    }
    const RZ = ["completed", "active", "available", "locked"],
      uX = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function EX(uu) {
      let {
        controller: Eu
      } = uu;
      const ju = (0, vU.g)(Aj, Eu.getSnapshot()),
        {
          t: su
        } = (0, mU.A)(),
        Uu = tU();
      return ju.enabled ? (0, KU.jsx)(FU.c, {
        show: ju.open,
        close: Eu.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, KU.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: Uu,
          onKeyDown: LU,
          children: [(0, KU.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, KU.jsxs)("div", {
              children: [(0, KU.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: su("skyblockDevQuests:title")
              }), (0, KU.jsx)("p", {
                children: su("skyblockDevQuests:intro")
              })]
            }), (0, KU.jsx)(BU.l, {
              onClick: Eu.dismiss
            })]
          }), (0, KU.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [RZ.map((uu => (0, KU.jsx)("span", {
              className: wU()("SkyblockQuestGraphLegendState", uu),
              children: su(`skyblockDevQuests:state_${uu}`)
            }, uu))), uX.map((uu => (0, KU.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, KU.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, KU.jsx)("line", {
                  className: wU()("SkyblockQuestGraphEdge", uu),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), su(`skyblockDevQuests:edge_${uu}`)]
            }, uu)))]
          }), (0, KU.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, KU.jsxs)("div", {
              className: wU()("SkyblockQuestGraphCanvas", {
                Planning: ju.planning
              }),
              style: {
                width: ju.width,
                height: ju.height
              },
              children: [(0, KU.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: ju.width,
                height: ju.height,
                "aria-hidden": "true",
                children: [(0, KU.jsx)("defs", {
                  children: (0, KU.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, KU.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), ju.edges.map((uu => (0, KU.jsx)("path", {
                  className: wU()("SkyblockQuestGraphEdge", uu.kind, {
                    InPlan: uu.inPlan
                  }),
                  d: uu.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, uu.key)))]
              }), ju.nodes.map((uu => (0, KU.jsxs)("button", {
                type: "button",
                className: wU()("SkyblockQuestGraphNode", uu.state, {
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
                  Eu.hover(uu.id)
                },
                onMouseLeave: () => {
                  Eu.hover(null)
                },
                onFocus: () => {
                  Eu.hover(uu.id)
                },
                onBlur: () => {
                  Eu.hover(null)
                },
                onClick: () => {
                  Eu.jump(uu.id)
                },
                children: [(0, KU.jsx)("strong", {
                  children: uu.name
                }), (0, KU.jsx)("span", {
                  children: uu.detail
                })]
              }, uu.id)))]
            })
          })]
        })
      }) : null
    }
    const jX = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      sX = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${fs}ms`,
        "--forge-duration": "2150ms"
      },
      UX = Array.from({
        length: 18
      }, ((uu, Eu) => ({
        "--ember-left": `${(4+92*(.618034*Eu%1)).toFixed(1)}%`,
        "--ember-size": 3 + Eu % 3 * 2 + "px",
        "--ember-drift": 14 * (Eu % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*Eu%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*Eu%8).toFixed(2)}s`
      })));

    function ZX(uu) {
      if (uu.style.removeProperty("--part-size"), null === uu.parentElement || "wrap" === getComputedStyle(uu.parentElement).flexWrap) return;
      const Eu = [...uu.children],
        ju = getComputedStyle(uu),
        su = parseFloat(ju.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        Uu = (uu.clientHeight - parseFloat(ju.rowGap) * (Eu.length - 1)) / Eu.length,
        Zu = Eu.map((uu => {
          const Eu = getComputedStyle(uu),
            ju = uu.querySelector("h3"),
            Zu = uu.querySelector(".SkyblockForgeParts");
          if (null === ju || null === Zu) return su;
          const Xu = Uu - parseFloat(Eu.paddingTop) - parseFloat(Eu.paddingBottom) - ju.offsetHeight - parseFloat(getComputedStyle(ju).marginBottom),
            lu = parseFloat(getComputedStyle(Zu).columnGap),
            qu = Zu.children.length;
          let fu = 0;
          for (let su = 1; su <= qu; su++) {
            const uu = Math.ceil(qu / su);
            fu = Math.max(fu, Math.min((Zu.clientWidth - lu * (su - 1)) / su, (Xu - lu * (uu - 1)) / uu))
          }
          return fu
        }));
      uu.style.setProperty("--part-size", `${Math.floor(Math.max(su,Math.min(...Zu)))}px`)
    }

    function XX(uu) {
      var Eu, ju, su, Zu, Xu;
      let {
        controller: lu
      } = uu;
      const qu = (0, vU.g)(hs, lu.getSnapshot()),
        {
          t: fu
        } = (0, mU.A)(),
        Cu = tU(),
        bu = function() {
          const uu = (0, du.useRef)(null),
            Eu = (0, du.useRef)(null);
          return (0, du.useLayoutEffect)((() => {
            null !== uu.current && ZX(uu.current)
          })), (0, du.useCallback)((ju => {
            var su;
            null === (su = Eu.current) || void 0 === su || su.disconnect(), Eu.current = null, uu.current = ju, null !== ju && (Eu.current = new ResizeObserver((() => {
              ZX(ju)
            })), Eu.current.observe(ju))
          }), [])
        }(),
        cu = function(uu) {
          const Eu = (0, du.useRef)(null);
          return (0, du.useLayoutEffect)((() => {
            const uu = Eu.current;
            if (null !== uu) {
              uu.style.removeProperty("font-size");
              for (let Eu = 1.7; Eu > 1.1 && uu.scrollWidth > uu.clientWidth; Eu -= .1) uu.style.fontSize = Eu - .1 + "rem"
            }
          }), [uu]), (0, du.useCallback)((uu => {
            Eu.current = uu
          }), [])
        }(null === (Eu = qu.preview) || void 0 === Eu ? void 0 : Eu.name),
        Nu = (0, du.useRef)(null),
        Ou = (0, du.useRef)({}),
        Yu = qu.forging,
        hu = null !== (ju = null === Yu || void 0 === Yu ? void 0 : Yu.preview.tier) && void 0 !== ju ? ju : 0,
        Du = null !== (su = null === Yu || void 0 === Yu ? void 0 : Yu.preview.named) && void 0 !== su && su,
        gu = (0, du.useMemo)((() => {
          return null === Yu ? null : {
            flames: (uu = hu, Eu = Du, Array.from({
              length: 26 + 6 * uu + (Eu ? 20 : 0)
            }, ((uu, Eu) => {
              const ju = Eu < 6,
                su = Math.random() * Math.PI * 2,
                Uu = ju ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                Zu = Math.cos(su) * Uu,
                Xu = Math.sin(su) * Uu - 2 - 3 * Math.random(),
                lu = Math.random(),
                [qu, fu, Cu] = ju ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : lu < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : lu < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [lu < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": qu,
                "--x0": `${(.15*Zu).toFixed(2)}rem`,
                "--y0": `${(.15*Xu).toFixed(2)}rem`,
                "--x": `${Zu.toFixed(2)}rem`,
                "--y": `${Xu.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${fu.toFixed(2)}rem`,
                "--duration": `${Math.round(Cu)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: cs(hu, Du)
          };
          var uu, Eu
        }), [null === Yu || void 0 === Yu ? void 0 : Yu.id]);
      if (!qu.enabled) return null;
      const Mu = qu.preview,
        eu = qu.arriving,
        Gu = null !== eu && !eu.sameSword,
        pu = null !== Mu && (0, KU.jsx)(PU.d, {
          itemName: Mu.baseSword,
          amount: 0,
          enchantmentTier: Mu.enchantmentTier
        });
      return (0, KU.jsx)(FU.c, {
        show: qu.open,
        close: lu.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, KU.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: Cu,
          onKeyDown: LU,
          children: [(0, KU.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: UX.map(((uu, Eu) => (0, KU.jsx)("span", {
              style: uu
            }, Eu)))
          }), (0, KU.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, KU.jsxs)("div", {
              children: [(0, KU.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: fu("skyblockGame:forgeTitle")
              }), (0, KU.jsx)("p", {
                children: fu("skyblockGame:forgeIntro")
              })]
            }), (0, KU.jsx)(BU.l, {
              onClick: lu.dismiss
            })]
          }), (0, KU.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, KU.jsx)("div", {
              ref: bu,
              className: wU()("SkyblockForgeSlots", {
                Locked: null !== Yu
              }),
              children: qu.slots.map((uu => (0, KU.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, KU.jsx)("h3", {
                  children: uu.label
                }), (0, KU.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: uu.parts.map((Eu => (0, KU.jsx)("button", {
                    type: "button",
                    className: wU()("SkyblockForgePart", {
                      Selected: Eu.selected,
                      Missing: Eu.placeholder
                    }),
                    disabled: Eu.placeholder,
                    title: Eu.placeholder ? fu("skyblockGame:forgePickParts") : Eu.itemName,
                    "aria-pressed": Eu.selected,
                    onClick: () => {
                      lu.select(uu.kind, Eu.material)
                    },
                    children: (0, KU.jsx)(PU.d, {
                      itemName: Eu.itemName,
                      amount: Eu.owned
                    })
                  }, Eu.material)))
                })]
              }, uu.kind)))
            }), (0, KU.jsxs)("div", {
              className: wU()("SkyblockForgeAnvil", {
                Named: null === Mu || void 0 === Mu ? void 0 : Mu.named
              }),
              style: {
                "--tier": null === Mu ? "transparent" : Uu.jb[Mu.enchantmentTier]
              },
              children: [(0, KU.jsxs)("div", {
                className: wU()("SkyblockForgeAltar", {
                  Forging: null !== Yu
                }),
                style: null === Yu ? void 0 : sX,
                children: [(0, KU.jsxs)("div", {
                  className: wU()("SkyblockForgeMount", {
                    Arrive: null !== eu
                  }),
                  children: [null === Mu && (0, KU.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, KU.jsx)(PU.d, {
                      itemName: qu.unformedSword,
                      amount: 0
                    })
                  }), null !== Mu && (0, KU.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== Mu && null === Yu && (0, KU.jsx)("div", {
                    ref: Nu,
                    className: "SkyblockForgeFloat",
                    children: (0, KU.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: pu
                    })
                  }), null !== Mu && (0, KU.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: bs.map(((uu, Eu) => (0, KU.jsx)("span", {
                      className: wU()({
                        Rune: "" !== uu.rune
                      }),
                      style: uu.style,
                      children: uu.rune
                    }, Eu)))
                  }), null !== Yu && null !== gu && (0, KU.jsxs)(KU.Fragment, {
                    children: [(0, KU.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, KU.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: gu.flames.map(((uu, Eu) => (0, KU.jsx)("span", {
                        style: uu
                      }, Eu)))
                    }), (0, KU.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: Ou.current,
                      children: (0, KU.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: pu
                      })
                    }), (0, KU.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, KU.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (hu >= 4 || Du) && (0, KU.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, KU.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: gu.sparks.map(((uu, Eu) => (0, KU.jsx)("span", {
                        style: uu
                      }, Eu)))
                    }), (0, KU.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, KU.jsx)("p", {
                  className: wU()("SkyblockForgeStatus", null === (Zu = qu.status) || void 0 === Zu ? void 0 : Zu.tone),
                  children: null === (Xu = qu.status) || void 0 === Xu ? void 0 : Xu.text
                })]
              }), null === Mu && (0, KU.jsx)("p", {
                className: wU()("SkyblockForgeName Waiting", {
                  ArriveText: Gu
                }),
                children: fu(qu.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== Mu && (0, KU.jsx)("h3", {
                ref: cu,
                className: wU()("SkyblockForgeName", {
                  ArriveText: Gu
                }),
                title: Mu.name,
                children: Mu.name
              }), (null === Mu || void 0 === Mu ? void 0 : Mu.named) && (0, KU.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: fu("skyblockGame:forgeSecret")
              }), (0, KU.jsxs)(BU.x, {
                className: "SkyblockForgeButton",
                disabled: !qu.canForge,
                title: null === Mu ? void 0 : fu("skyblockGame:forgeCoalOwned", {
                  owned: String(qu.coalOwned)
                }),
                onClick: () => {
                  Ou.current = function(uu) {
                    const Eu = null === uu ? "none" : getComputedStyle(uu).transform,
                      ju = new DOMMatrixReadOnly("none" === Eu ? void 0 : Eu);
                    return {
                      "--settle-y": `${ju.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(ju.b,ju.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(Nu.current), Ys(), lu.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [fu("skyblockGame:forgeButton"), null !== Mu && (0, KU.jsxs)("span", {
                  className: wU()("SkyblockForgeCost", {
                    Short: Mu.coalShort
                  }),
                  children: [(0, KU.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, KU.jsx)(PU.d, {
                      itemName: us.d,
                      amount: 0
                    })
                  }), Mu.coalCost]
                })]
              })]
            }), (0, KU.jsxs)("div", {
              className: wU()("SkyblockForgeDetails", {
                Named: null === Mu || void 0 === Mu ? void 0 : Mu.named
              }),
              children: [(0, KU.jsx)("p", {
                className: wU()("SkyblockForgeLore", {
                  ArriveText: Gu
                }),
                title: null === Mu || void 0 === Mu ? void 0 : Mu.lore,
                children: null === Mu || void 0 === Mu ? void 0 : Mu.lore
              }), (0, KU.jsxs)("dl", {
                className: wU()("SkyblockForgeStats", {
                  ArriveText: Gu
                }),
                children: [null === Mu && jX.map((uu => (0, KU.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, KU.jsx)("dt", {
                    children: fu(uu)
                  }), (0, KU.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, uu))), null === Mu || void 0 === Mu ? void 0 : Mu.stats.map((uu => (0, KU.jsxs)("div", {
                  className: wU()("SkyblockForgeStat", {
                    Better: uu.better
                  }),
                  children: [(0, KU.jsx)("dt", {
                    children: uu.label
                  }), (0, KU.jsx)("dd", {
                    children: uu.value
                  })]
                }, uu.label)))]
              }), (0, KU.jsx)("ul", {
                className: wU()("SkyblockForgeEffects", {
                  ArriveText: Gu
                }),
                children: null === Mu || void 0 === Mu ? void 0 : Mu.effects.map((uu => (0, KU.jsx)("li", {
                  children: uu
                }, uu)))
              })]
            })]
          })]
        })
      })
    }
    const lX = "Doom Rivet",
      qX = "Doom Crest";

    function fX(uu) {
      let {
        itemName: Eu,
        amount: ju,
        owned: su
      } = uu;
      return (0, KU.jsxs)("span", {
        className: wU()("SkyblockSmugglerPrice", {
          Short: ju > su
        }),
        children: [(0, KU.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, KU.jsx)(PU.d, {
            itemName: Eu,
            amount: 0
          })
        }), (0, KU.jsx)("span", {
          children: ju
        })]
      })
    }

    function CX(uu) {
      return uu.justBought ? "skyblockGame:smugglerJustBought" : uu.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function bX(uu) {
      let {
        deal: Eu,
        view: ju,
        buy: su
      } = uu;
      const {
        t: Uu
      } = (0, mU.A)();
      return (0, KU.jsxs)("div", {
        className: wU()("SkyblockSmugglerPocket", {
          Bought: Eu.justBought,
          Unaffordable: !Eu.affordable,
          SoldOut: Eu.soldOut && !Eu.justBought
        }),
        children: [(0, KU.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, KU.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, KU.jsx)(PU.d, {
            itemName: Eu.itemName,
            amount: 0,
            enchantmentTier: Eu.enchantmentTier
          }), Eu.amount > 1 && (0, KU.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: Uu("skyblockGame:smugglerAmount", {
              amount: Eu.amount
            })
          })]
        }), (0, KU.jsx)("h3", {
          children: Eu.displayName
        }), (0, KU.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, KU.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [Eu.rivets > 0 && (0, KU.jsx)(fX, {
              itemName: lX,
              amount: Eu.rivets,
              owned: ju.rivetsOwned
            }), Eu.crests > 0 && (0, KU.jsx)(fX, {
              itemName: qX,
              amount: Eu.crests,
              owned: ju.crestsOwned
            })]
          }), (0, KU.jsx)(BU.f, {
            className: "SkyblockSmugglerBuy",
            disabled: Eu.soldOut || !Eu.affordable || ju.pending,
            onClick: () => {
              su(Eu.slot)
            },
            children: Uu(CX(Eu))
          })]
        })]
      }, Eu.justBought ? ju.boughtCount : 0)
    }

    function cX(uu) {
      let {
        controller: Eu
      } = uu;
      const ju = (0, vU.g)(Ms, Eu.getSnapshot()),
        {
          t: su
        } = (0, mU.A)(),
        Uu = tU();
      return ju.enabled ? (0, KU.jsx)(FU.c, {
        show: ju.open,
        close: Eu.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, KU.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: Uu,
          onKeyDown: LU,
          children: [(0, KU.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, KU.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, KU.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, KU.jsxs)("div", {
              children: [(0, KU.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: su("skyblockGame:smugglerTitle")
              }), (0, KU.jsx)("p", {
                children: su("skyblockGame:smugglerIntro")
              })]
            }), (0, KU.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, KU.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, KU.jsx)(fX, {
                  itemName: lX,
                  amount: ju.rivetsOwned,
                  owned: ju.rivetsOwned
                }), (0, KU.jsx)(fX, {
                  itemName: qX,
                  amount: ju.crestsOwned,
                  owned: ju.crestsOwned
                })]
              }), (0, KU.jsx)(BU.l, {
                onClick: Eu.dismiss
              })]
            })]
          }), (0, KU.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: ju.deals.map((uu => (0, KU.jsx)(bX, {
              deal: uu,
              view: ju,
              buy: Eu.buy
            }, uu.slot)))
          }), (0, KU.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, KU.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: ju.rotatesText
            }), null !== ju.status && (0, KU.jsx)("span", {
              className: wU()("SkyblockSmugglerStatus", ju.status.tone),
              children: ju.status.text
            })]
          })]
        })
      }) : null
    }

    function NX(uu) {
      let {
        phase: Eu,
        className: ju
      } = uu;
      return (0, KU.jsx)("span", {
        className: wU()("SkyblockMoon", `Moon-${Eu}`, ju),
        "aria-hidden": "true"
      })
    }

    function OX(uu) {
      let {
        controller: Eu
      } = uu;
      const ju = (0, vU.g)(ps, Eu.getSnapshot()),
        {
          t: su
        } = (0, mU.A)();
      return ju.enabled ? (0, KU.jsx)(dU.h, {
        placement: "statBars",
        children: (0, KU.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: wU()("SkyblockPassageChip", ju.open && "Open"),
          "aria-label": su("skyblockGame:passageChipLabel", {
            phase: ju.phaseName
          }),
          title: su("skyblockGame:passageChipLabel", {
            phase: ju.phaseName
          }),
          onMouseDown: uu => {
            uu.preventDefault()
          },
          onClick: Eu.toggle,
          children: (0, KU.jsx)(NX, {
            phase: ju.phase
          }, ju.phase)
        })
      }) : null
    }

    function YX(uu) {
      let {
        fish: Eu
      } = uu;
      return (0, KU.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, KU.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, KU.jsx)(PU.d, {
            itemName: Eu.itemName,
            amount: 0
          })
        }), (0, KU.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, KU.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: Eu.displayName
          }), (0, KU.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: Eu.where
          })]
        })]
      })
    }

    function hX(uu) {
      let {
        controller: Eu
      } = uu;
      const ju = (0, vU.g)(ps, Eu.getSnapshot()),
        {
          t: su
        } = (0, mU.A)(),
        Uu = tU();
      return ju.enabled ? (0, KU.jsx)(FU.c, {
        show: ju.open,
        close: Eu.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, KU.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: Uu,
          onKeyDown: LU,
          children: [(0, KU.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, KU.jsx)(NX, {
              phase: ju.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, KU.jsxs)("div", {
              children: [(0, KU.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: su("skyblockGame:passageTitle")
              }), (0, KU.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: ju.phaseName
              })]
            }), (0, KU.jsx)(BU.l, {
              padIgnore: !0,
              onClick: Eu.dismiss
            })]
          }), (0, KU.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: su("skyblockGame:passageIntro")
          }), (0, KU.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, KU.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, KU.jsx)("h3", {
                children: su("skyblockGame:passageVisiting")
              }), (0, KU.jsx)("ul", {
                className: "SkyblockPassageList",
                children: ju.visitors.map((uu => (0, KU.jsx)(YX, {
                  fish: uu
                }, uu.itemName)))
              })]
            }), (0, KU.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== ju.resting && (0, KU.jsxs)(KU.Fragment, {
                children: [(0, KU.jsx)("h3", {
                  children: su("skyblockGame:passageResting")
                }), (0, KU.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, KU.jsx)(YX, {
                    fish: ju.resting
                  })
                })]
              }), (0, KU.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, KU.jsx)(NX, {
                  phase: ju.nextPhase
                }), (0, KU.jsx)("span", {
                  children: ju.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function DX() {
      return (0, KU.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((uu => (0, KU.jsx)("i", {
          style: {
            "--sparkle-index": uu
          }
        }, uu)))
      })
    }

    function gX(uu) {
      var Eu;
      let {
        charm: ju,
        view: su,
        controller: Uu
      } = uu;
      const {
        t: Zu
      } = (0, mU.A)(), Xu = su.shop, lu = (null === (Eu = su.sparkle) || void 0 === Eu ? void 0 : Eu.id) === ju.id;
      return (0, KU.jsxs)("li", {
        className: wU()("SkyblockLampLightCharm", ju.owned && "Owned", ju.socketed && "Socketed"),
        children: [lu && (0, KU.jsx)(DX, {}, su.sparkle.count), (0, KU.jsx)("h4", {
          children: ju.name
        }), (0, KU.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: ju.effect
        }), (0, KU.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: ju.lines.map((uu => (0, KU.jsxs)("li", {
            className: wU()("SkyblockLampLightOddsLine", "better" === uu.tone ? "Better" : "worse" === uu.tone ? "Worse" : "Same"),
            children: [(0, KU.jsx)("span", {
              className: "Before",
              children: uu.before
            }), (0, KU.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, KU.jsx)("span", {
              className: "After",
              children: uu.after
            })]
          }, uu.label)))
        }), (0, KU.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: ju.owned ? ju.socketed ? (0, KU.jsxs)(KU.Fragment, {
            children: [(0, KU.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: Zu("skyblockGame:lampLightSocketed")
            }), (0, KU.jsx)(BU.$, {
              disabled: !su.canCommand,
              ariaLabel: Zu("skyblockGame:lampLightRemoveLabel", {
                charm: ju.name
              }),
              onClick: () => {
                Uu.socket(null)
              },
              children: Zu("skyblockGame:lampLightRemove")
            })]
          }) : (0, KU.jsx)(BU.f, {
            disabled: !su.canCommand || !Xu.heldRod,
            ariaLabel: Zu("skyblockGame:lampLightSocketLabel", {
              charm: ju.name
            }),
            onClick: () => {
              Uu.socket(ju.id)
            },
            children: Zu("skyblockGame:lampLightSocket")
          }) : (0, KU.jsx)(BU.f, {
            disabled: !su.canCommand || !ju.affordable,
            ariaLabel: Zu("skyblockGame:lampLightBuyLabel", {
              item: ju.name,
              cost: ju.cost
            }),
            onClick: () => {
              Uu.buy(ju.id)
            },
            children: ju.cost
          })
        })]
      })
    }

    function MX(uu) {
      var Eu;
      let {
        tint: ju,
        view: su,
        controller: Uu
      } = uu;
      const {
        t: Zu
      } = (0, mU.A)();
      return (0, KU.jsxs)("li", {
        className: wU()("SkyblockLampLightTint", ju.wearing && "Wearing"),
        style: {
          "--tint-colour": ju.colour
        },
        children: [(null === (Eu = su.sparkle) || void 0 === Eu ? void 0 : Eu.id) === ju.id && (0, KU.jsx)(DX, {}, su.sparkle.count), (0, KU.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, KU.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: ju.name
        }), ju.wearing ? (0, KU.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: Zu("skyblockGame:lampLightWearing")
        }) : (0, KU.jsx)(BU.f, {
          disabled: !su.canCommand || !ju.owned && !ju.affordable,
          ariaLabel: ju.owned ? Zu("skyblockGame:lampLightWearLabel", {
            tint: ju.name
          }) : Zu("skyblockGame:lampLightBuyLabel", {
            item: ju.name,
            cost: ju.cost
          }),
          onClick: () => {
            ju.owned ? Uu.wearTint(ju.id) : Uu.buy(ju.id)
          },
          children: ju.owned ? Zu("skyblockGame:lampLightWear") : ju.cost
        })]
      })
    }

    function eX(uu) {
      let {
        controller: Eu
      } = uu;
      const ju = (0, vU.g)(Ws, Eu.getSnapshot()),
        {
          t: su
        } = (0, mU.A)(),
        Uu = ju.shop;
      return (0, KU.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, KU.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, KU.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: ju.balance
          }), (0, KU.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": ju.releasing,
            className: wU()("SkyblockLampLightSwitch", ju.releasing && "On"),
            disabled: ju.releasing ? "ready" !== ju.status : !ju.canCommand,
            onClick: () => {
              Eu.setRelease(!ju.releasing)
            },
            children: [(0, KU.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, KU.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), su("skyblockGame:lampLightRelease")]
          }), (0, KU.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: su("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== ju.notice && (0, KU.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: ju.notice
        }), null !== Uu && (0, KU.jsxs)(KU.Fragment, {
          children: [(0, KU.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, KU.jsx)("h3", {
              children: su("skyblockGame:lampLightCharms")
            }), (0, KU.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: Uu.oddsFor
            }), (0, KU.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((uu => (0, KU.jsx)("button", {
                type: "button",
                "aria-pressed": ju.situation === uu,
                className: wU()("SkyblockLampLightSituation", ju.situation === uu && "Selected"),
                onClick: () => {
                  Eu.setSituation(uu)
                },
                children: su("open" === uu ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, uu)))
            })]
          }), !Uu.heldRod && (0, KU.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: su("skyblockGame:lampLightHoldRod")
          }), (0, KU.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: Uu.charms.map((uu => (0, KU.jsx)(gX, {
              charm: uu,
              view: ju,
              controller: Eu
            }, uu.id)))
          }), (0, KU.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, KU.jsx)("h3", {
              children: su("skyblockGame:lampLightTints")
            })
          }), (0, KU.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, KU.jsxs)("li", {
              className: wU()("SkyblockLampLightTint", "Islands", Uu.wearingIslandColours && "Wearing"),
              children: [(0, KU.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, KU.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: su("skyblockGame:lampLightIslandColours")
              }), Uu.wearingIslandColours ? (0, KU.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: su("skyblockGame:lampLightWearing")
              }) : (0, KU.jsx)(BU.f, {
                disabled: !ju.canCommand,
                ariaLabel: su("skyblockGame:lampLightWearLabel", {
                  tint: su("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  Eu.wearTint(null)
                },
                children: su("skyblockGame:lampLightWear")
              })]
            }), Uu.tints.map((uu => (0, KU.jsx)(MX, {
              tint: uu,
              view: ju,
              controller: Eu
            }, uu.id)))]
          })]
        })]
      })
    }

    function GX(uu) {
      let {
        controller: Eu
      } = uu;
      const ju = (0, vU.g)(Ws, Eu.getSnapshot()),
        {
          t: su
        } = (0, mU.A)();
      return ju.releasing ? (0, KU.jsx)(dU.h, {
        children: (0, KU.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            Eu.setRelease(!1)
          },
          children: [(0, KU.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, KU.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [su("skyblockGame:lampLightReleasing"), " \xb7 ", ju.balance]
          }), (0, KU.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: su("skyblockGame:lampLightKeepCatches")
          }), null !== ju.gained && (0, KU.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: ju.gained.text
          }, ju.gained.count)]
        })
      }) : null
    }

    function pX(uu) {
      let {
        island: Eu,
        view: ju,
        aim: su
      } = uu;
      const {
        t: Uu
      } = (0, mU.A)(), Zu = Eu.featuredFish;
      return (0, KU.jsxs)("li", {
        className: wU()("SkyblockKeepersChairIsland", `Island-${Eu.id}`, Eu.favoured && "Aimed", !Eu.relit && "Dark"),
        children: [(0, KU.jsx)("h3", {
          children: Eu.name
        }), Eu.relit && null !== Zu ? (0, KU.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, KU.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: Uu("skyblockGame:keepersChairTideNotice")
          }), (0, KU.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, KU.jsx)(PU.d, {
              itemName: Zu.itemName,
              amount: 0
            })
          }), (0, KU.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: Zu.displayName
          })]
        }) : (0, KU.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, KU.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: Uu("skyblockGame:keepersChairDark")
          })
        }), Eu.relit && (Eu.favoured ? (0, KU.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: Uu("skyblockGame:keepersChairAimed")
        }) : (0, KU.jsx)(BU.f, {
          className: "SkyblockKeepersChairAim",
          disabled: !ju.canAim,
          ariaLabel: Uu("skyblockGame:keepersChairAimLabel", {
            island: Eu.name
          }),
          onClick: () => {
            su(Eu.id)
          },
          children: Uu("skyblockGame:keepersChairAim")
        }))]
      }, Eu.favoured ? ju.aimedCount : 0)
    }

    function wX(uu) {
      let {
        controller: Eu,
        lampLight: ju
      } = uu;
      const su = (0, vU.g)(ks, Eu.getSnapshot()),
        Uu = (0, vU.g)(Ws, ju.getSnapshot()),
        [Zu, Xu] = (0, du.useState)("lamp"),
        {
          t: lu
        } = (0, mU.A)(),
        qu = tU();
      if (!su.enabled) return null;
      const fu = "light" === Zu && Uu.enabled;
      return (0, KU.jsx)(FU.c, {
        show: su.open,
        close: Eu.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, KU.jsxs)("section", {
          className: wU()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", fu && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: qu,
          onKeyDown: LU,
          children: [(0, KU.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, KU.jsxs)("div", {
              children: [(0, KU.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: lu("skyblockGame:keepersChairTitle")
              }), (0, KU.jsx)("p", {
                children: lu(fu ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, KU.jsx)(BU.l, {
              padIgnore: !0,
              ariaLabel: lu("skyblockGame:keepersChairClose"),
              onClick: Eu.dismiss
            })]
          }), Uu.enabled && (0, KU.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((uu => (0, KU.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === uu === fu,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === uu === fu ? "true" : void 0,
              className: wU()("SkyblockKeepersChairTab", "light" === uu === fu && "Selected"),
              onClick: () => {
                Xu(uu)
              },
              children: [lu("lamp" === uu ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === uu && (0, KU.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: Uu.balance
              })]
            }, uu)))
          }), fu ? (0, KU.jsx)(eX, {
            controller: ju
          }) : (0, KU.jsx)(JX, {
            view: su,
            controller: Eu
          })]
        })
      })
    }

    function JX(uu) {
      let {
        view: Eu,
        controller: ju
      } = uu;
      const {
        t: su
      } = (0, mU.A)();
      return (0, KU.jsxs)(KU.Fragment, {
        children: [(0, KU.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: Eu.islands.map((uu => (0, KU.jsx)(pX, {
            island: uu,
            view: Eu,
            aim: ju.aim
          }, uu.id)))
        }), null !== Eu.almanac && (0, KU.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, KU.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: su("skyblockGame:passageTitle")
          }), (0, KU.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, KU.jsx)(NX, {
              phase: Eu.almanac.phase
            }), Eu.almanac.phaseName]
          }), (0, KU.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, KU.jsx)(NX, {
              phase: Eu.almanac.nextPhase
            }), Eu.almanac.next]
          })]
        }), (0, KU.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, KU.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: su("skyblockGame:keepersChairFavour")
          }), Eu.aimed && (0, KU.jsx)(BU.$, {
            className: "SkyblockKeepersChairRest",
            disabled: !Eu.canAim,
            onClick: () => {
              ju.aim(null)
            },
            children: su("skyblockGame:keepersChairRest")
          })]
        }), null !== Eu.status && (0, KU.jsx)("p", {
          className: wU()("SkyblockKeepersChairStatus", "refused" === Eu.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: Eu.status.text
        })]
      })
    }

    function dX(uu) {
      let {
        controller: Eu
      } = uu;
      const {
        t: ju
      } = (0, mU.A)(), su = (0, vU.g)(vs, Eu.getSnapshot());
      if (!su.enabled) return null;
      const Uu = su.freshCount > 0 ? ju("skyblockGame:reachLogOpenNews", {
        count: su.freshCount
      }) : ju("skyblockGame:reachLogOpen");
      return (0, KU.jsx)(dU.h, {
        placement: "statBars",
        children: (0, KU.jsxs)("button", {
          type: "button",
          className: wU()("SkyblockReachLogButton", su.freshCount > 0 && "HasNews", su.pending && "Pending"),
          "aria-label": Uu,
          title: Uu,
          onClick: Eu.ask,
          children: [su.news && (0, KU.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${su.newsToken}`), (0, KU.jsx)("span", {
            className: wU()("SkyblockReachLogIcon", su.news && "Jump"),
            "aria-hidden": "true",
            children: (0, KU.jsx)(PU.d, {
              itemName: Vs,
              amount: 0
            })
          }, `icon:${su.newsToken}`), su.freshCount > 0 && (0, KU.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: su.freshCount
          })]
        })
      })
    }

    function aX(uu) {
      let {
        gift: Eu
      } = uu;
      return (0, KU.jsx)("li", {
        className: wU()("SkyblockRegularsGift", Eu.given && "Given"),
        children: Eu.text
      })
    }

    function PX(uu) {
      let {
        regular: Eu
      } = uu;
      const {
        t: ju
      } = (0, mU.A)();
      return (0, KU.jsxs)("li", {
        className: wU()("SkyblockRegularsCard", Eu.tagged ? "Tagged" : "Untagged", Eu.resting && "Resting"),
        children: [(0, KU.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, KU.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: Eu.fishName,
            children: (0, KU.jsx)(PU.d, {
              itemName: Eu.itemName,
              amount: 0
            })
          }), (0, KU.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, KU.jsx)("h3", {
              children: Eu.name
            }), (0, KU.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: Eu.fishName
            })]
          })]
        }), (0, KU.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: Eu.line
        }), (0, KU.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, KU.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: Eu.size
          }), Eu.tagged && (0, KU.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: Eu.resting ? ju("skyblockGame:regularsResting") : Eu.meetings
          })]
        }), (0, KU.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: Eu.chance
        }), (0, KU.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: Eu.gifts.map((uu => (0, KU.jsx)(aX, {
            gift: uu
          }, uu.text)))
        }), Eu.history.length > 0 && (0, KU.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: Eu.history.map(((uu, Eu) => (0, KU.jsx)("li", {
            children: uu
          }, Eu)))
        })]
      })
    }

    function oX(uu) {
      let {
        controller: Eu,
        island: ju
      } = uu;
      const {
        t: su
      } = (0, mU.A)(), Uu = (0, vU.g)(sU, Eu.getSnapshot()), Zu = Uu.islands.find((uu => uu.id === ju));
      if (!Uu.enabled || void 0 === Zu) return null;
      const Xu = su("skyblockGame:regularsOpen");
      return (0, KU.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": Xu,
        title: Xu,
        onClick: () => {
          Eu.openIsland(ju)
        },
        children: [(0, KU.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: su("skyblockGame:regularsTitle")
        }), Zu.regulars.map((uu => (0, KU.jsx)("span", {
          className: wU()("SkyblockRegularsStripIcon", uu.tagged && "Tagged"),
          title: uu.name,
          children: (0, KU.jsx)(PU.d, {
            itemName: uu.itemName,
            amount: 0
          })
        }, uu.id)))]
      })
    }

    function kX(uu) {
      var Eu;
      let {
        controller: ju
      } = uu;
      const su = (0, vU.g)(sU, ju.getSnapshot()),
        {
          t: Uu
        } = (0, mU.A)(),
        Zu = tU();
      if (!su.enabled) return null;
      const Xu = null !== (Eu = su.islands.find((uu => uu.id === su.selected))) && void 0 !== Eu ? Eu : null;
      return (0, KU.jsx)(FU.c, {
        show: su.open,
        close: ju.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, KU.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: Zu,
          onKeyDown: LU,
          children: [(0, KU.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, KU.jsxs)("div", {
              children: [(0, KU.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: Uu("skyblockGame:regularsTitle")
              }), (0, KU.jsx)("p", {
                children: Uu("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, KU.jsx)(BU.l, {
              padIgnore: !0,
              onClick: ju.dismiss
            })]
          }), (0, KU.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: su.islands.map((uu => {
              const Eu = uu.id === su.selected;
              return (0, KU.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": Eu,
                "data-pad-tab": !0,
                "data-pad-selected": Eu ? "true" : void 0,
                className: wU()("SkyblockReachLogTab", `Island-${uu.id}`, Eu && "Selected", uu.charm.given && "GoldPage"),
                onClick: () => {
                  ju.selectIsland(uu.id)
                },
                children: (0, KU.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: uu.name
                })
              }, uu.id)
            }))
          }), (0, KU.jsxs)("div", {
            className: wU()("SkyblockRegularsPage", null !== Xu && `Island-${Xu.id}`),
            role: "tabpanel",
            children: [(0, KU.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: Uu("skyblockGame:regularsHow")
            }), null !== Xu && (0, KU.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: Xu.regulars.map((uu => (0, KU.jsx)(PX, {
                regular: uu
              }, uu.id)))
            })]
          }), null !== Xu && (0, KU.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, KU.jsx)("span", {
              className: wU()("SkyblockRegularsCharm", Xu.charm.given && "Given"),
              children: Xu.charm.text
            })
          })]
        })
      })
    }
    const mX = [{
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
      vX = Array.from({
        length: 6
      }, ((uu, Eu) => ({
        "--x": `${(88*(.618034*Eu%1)).toFixed(1)}%`,
        "--y": `${(10+37*Eu%70).toFixed(1)}%`,
        "--size": 7 + Eu % 3 * 3 + "rem",
        "--drift-x": 3 * (Eu % 3 - 1) + "rem",
        "--drift-y": 2 * (Eu % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + Eu % 4 * 3 + "s",
        "--delay": 2.5 * -Eu + "s"
      }))),
      KX = Array.from({
        length: 14
      }, ((uu, Eu) => ({
        "--left": `${(3+94*((.618034*Eu+.3)%1)).toFixed(1)}%`,
        "--size": 4 + Eu % 4 * 2 + "px",
        "--sway": Eu % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*Eu%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*Eu%12).toFixed(2)}s`
      }))),
      VX = (0, du.memo)((function(uu) {
        let {
          island: Eu
        } = uu;
        return (0, KU.jsxs)("div", {
          className: wU()("SkyblockReachLogDepths", null !== Eu && `Island-${Eu}`),
          "aria-hidden": "true",
          children: [mX.map(((uu, Eu) => (0, KU.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: uu
          }, `shaft${Eu}`))), vX.map(((uu, Eu) => (0, KU.jsx)("span", {
            className: wU()("SkyblockReachLogMote", Eu % 2 === 1 && "Violet"),
            style: uu
          }, `mote${Eu}`))), KX.map(((uu, Eu) => (0, KU.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: uu
          }, `bubble${Eu}`)))]
        })
      })),
      rX = 100;

    function QX(uu) {
      let {
        view: Eu
      } = uu;
      const {
        t: ju
      } = (0, mU.A)();
      if (null === Eu || 0 === Eu.total) return null;
      const su = rX * Eu.aspect,
        Uu = ju("skyblockGame:hiddenWatersCount", {
          found: Eu.found,
          total: Eu.total
        });
      return (0, KU.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${ju("skyblockGame:hiddenWatersTitle")}: ${Uu}`,
        children: [(0, KU.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${su}`,
          "aria-hidden": "true",
          children: [Eu.islands.map(((uu, Eu) => (0, KU.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (uu.left + uu.width / 2) * rX,
            cy: (uu.top + uu.height / 2) * su,
            rx: uu.width / 2 * rX,
            ry: uu.height / 2 * su
          }, Eu))), Eu.pins.map(((uu, Eu) => (0, KU.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: uu.left * rX,
            cy: uu.top * su,
            r: 13
          }, Eu)))]
        }), (0, KU.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, KU.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: ju("skyblockGame:hiddenWatersTitle")
          }), (0, KU.jsx)("span", {
            className: Eu.found === Eu.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: Uu
          })]
        })]
      })
    }

    function iX(uu) {
      let {
        view: Eu,
        island: ju
      } = uu;
      const {
        t: su
      } = (0, mU.A)(), Uu = null === Eu || void 0 === Eu ? void 0 : Eu.glimpses.get(ju);
      return void 0 === Uu || 0 === Uu.length ? null : (0, KU.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, KU.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: su("skyblockGame:hiddenWatersGlimpsed")
        }), (0, KU.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: Uu.map((uu => (0, KU.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, KU.jsx)(PU.d, {
              itemName: uu,
              amount: 0
            })
          }, uu)))
        })]
      })
    }
    const WX = ["Bronze", "Silver", "Gold"],
      SX = [{
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
      IX = SX.slice(0, 2);

    function FX(uu) {
      return uu ? SX : IX
    }

    function BX(uu) {
      let {
        fish: Eu,
        letGoShown: ju
      } = uu;
      const {
        t: su
      } = (0, mU.A)();
      return (0, KU.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [WX.map(((uu, ju) => {
          const Uu = ju < Eu.marks;
          return (0, KU.jsx)("span", {
            className: wU()("SkyblockReachLogPip", uu, Uu && "Earned", Uu && Eu.fresh && ju === Eu.marks - 1 && "Newest"),
            title: su(Ks[ju])
          }, uu)
        })), (0, KU.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), FX(ju).map(((uu, ju) => (0, KU.jsx)("span", {
          className: wU()("SkyblockReachLogRibbon", uu.className, !0 === Eu.ribbons[ju] && "Earned"),
          title: su(uu.titleKey)
        }, uu.className)))]
      })
    }

    function LX(uu) {
      let {
        letGoShown: Eu,
        haloShown: ju
      } = uu;
      const {
        t: su
      } = (0, mU.A)();
      return (0, KU.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, KU.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: su("skyblockGame:reachLogMarks"),
          children: [(0, KU.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), su("skyblockGame:reachLogLegendMarks")]
        }), FX(Eu).map((uu => (0, KU.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: su(uu.titleKey),
          children: [(0, KU.jsx)("span", {
            className: wU()("SkyblockReachLogRibbon", uu.className, "Earned")
          }), su(uu.legendKey)]
        }, uu.className))), (0, KU.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: su("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, KU.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), su("skyblockGame:reachLogLegendGlimmer")]
        }), ju && (0, KU.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: su("skyblockGame:reachLogHaloTitle"),
          children: [(0, KU.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), su("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function tX(uu) {
      let {
        returner: Eu
      } = uu;
      return (0, KU.jsxs)("div", {
        className: wU()("SkyblockReachLogReturner", Eu.back && "Back"),
        children: [(0, KU.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, KU.jsx)(PU.d, {
            itemName: Eu.itemName,
            amount: 0
          })
        }), (0, KU.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: Eu.line
        })]
      })
    }

    function xX(uu) {
      let {
        fish: Eu,
        letGoShown: ju
      } = uu;
      const {
        t: su
      } = (0, mU.A)();
      return (0, KU.jsxs)("li", {
        className: wU()("SkyblockReachLogCard", Eu.caught ? "Caught" : "Unknown", Eu.marks >= 3 && "GoldCard", Eu.fresh && "Fresh", Eu.visitor && "Visitor"),
        children: [Eu.visitor && (0, KU.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: su("skyblockGame:reachLogVisitor")
        }), Eu.fresh && Array.from({
          length: 4
        }, ((uu, Eu) => (0, KU.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, Eu))), (0, KU.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [Eu.halo && (0, KU.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: su("skyblockGame:reachLogHaloTitle")
          }), (0, KU.jsx)(PU.d, {
            itemName: Eu.itemName,
            amount: 0
          }), Eu.glimmer && (0, KU.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: su("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, KU.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: Eu.name
        }), (0, KU.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: Eu.chance
        }), (0, KU.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: Eu.best
        }), (0, KU.jsx)(BX, {
          fish: Eu,
          letGoShown: ju
        })]
      })
    }

    function TX(uu) {
      let {
        page: Eu,
        letGoShown: ju,
        hiddenWaters: su
      } = uu;
      const {
        t: Uu
      } = (0, mU.A)();
      return Eu.awake ? (0, KU.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: Eu.fish.map((uu => (0, KU.jsx)(xX, {
          fish: uu,
          letGoShown: ju
        }, uu.itemName)))
      }) : (0, KU.jsxs)(KU.Fragment, {
        children: [(0, KU.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: Uu("skyblockGame:reachLogAsleep")
        }), (0, KU.jsx)(iX, {
          view: su,
          island: Eu.id
        })]
      })
    }

    function HX(uu) {
      var Eu, ju;
      let {
        controller: su,
        regulars: Uu,
        hiddenWaters: Zu
      } = uu;
      const Xu = (0, vU.g)(vs, su.getSnapshot()),
        lu = function(uu) {
          return (0, vU.g)(qU, uu.getSnapshot())
        }(Zu),
        qu = (0, vU.g)(sU, Uu.getSnapshot()),
        {
          t: fu
        } = (0, mU.A)(),
        Cu = tU();
      if (!Xu.enabled) return null;
      const bu = null !== (Eu = Xu.pages.find((uu => uu.id === Xu.selected))) && void 0 !== Eu ? Eu : null;
      return (0, KU.jsx)(FU.c, {
        show: Xu.open,
        close: su.dismiss,
        togglePointerLock: !1,
        className: wU()("SkyblockSkillsOverlay", qu.open && "SkyblockReachLogUnderLedger"),
        children: (0, KU.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: Cu,
          onKeyDown: LU,
          children: [(0, KU.jsx)(VX, {
            island: null !== (ju = null === bu || void 0 === bu ? void 0 : bu.id) && void 0 !== ju ? ju : null
          }), (0, KU.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, KU.jsxs)("div", {
              children: [(0, KU.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: fu("skyblockGame:reachLogTitle")
              }), (0, KU.jsx)("p", {
                children: fu("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, KU.jsx)(QX, {
              view: lu
            }), (0, KU.jsx)(BU.l, {
              padIgnore: !0,
              onClick: su.dismiss
            })]
          }), (0, KU.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: Xu.pages.map((uu => {
              const Eu = uu.id === Xu.selected,
                ju = uu.fish.some((uu => uu.fresh));
              return (0, KU.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": Eu,
                "data-pad-tab": !0,
                "data-pad-selected": Eu ? "true" : void 0,
                className: wU()("SkyblockReachLogTab", `Island-${uu.id}`, Eu && "Selected", !uu.awake && "Asleep", uu.gold && "GoldPage", ju && "HasNews"),
                onClick: () => {
                  su.selectPage(uu.id)
                },
                children: [(0, KU.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: uu.name
                }), uu.awake && (0, KU.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: fu("skyblockGame:reachLogCaughtCount", {
                    caught: uu.caught,
                    total: uu.total
                  })
                })]
              }, uu.id)
            }))
          }), (0, KU.jsxs)("div", {
            className: wU()("SkyblockReachLogPage", null !== bu && `Island-${bu.id}`),
            role: "tabpanel",
            children: [null !== bu && (0, KU.jsx)(TX, {
              page: bu,
              letGoShown: Xu.letGoShown,
              hiddenWaters: lu
            }), !0 === (null === bu || void 0 === bu ? void 0 : bu.awake) && null !== bu.returner && (0, KU.jsx)(tX, {
              returner: bu.returner
            }), !0 === (null === bu || void 0 === bu ? void 0 : bu.awake) && (0, KU.jsx)(oX, {
              controller: Uu,
              island: bu.id
            })]
          }), (0, KU.jsx)("footer", {
            className: wU()("SkyblockReachLogFooter", null !== bu && `Island-${bu.id}`, !0 === (null === bu || void 0 === bu ? void 0 : bu.gold) && "GoldPage"),
            children: !0 === (null === bu || void 0 === bu ? void 0 : bu.gold) ? (0, KU.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: fu("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, KU.jsxs)(KU.Fragment, {
              children: [(0, KU.jsx)(LX, {
                letGoShown: Xu.letGoShown,
                haloShown: !0 === (null === bu || void 0 === bu ? void 0 : bu.fish.some((uu => uu.halo)))
              }), (0, KU.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: fu("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var AX = ju(4997);

    function nX(uu) {
      let {
        conversation: Eu,
        completedLabel: ju
      } = uu;
      return (0, KU.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, KU.jsxs)("header", {
          children: [(0, KU.jsx)("h3", {
            children: Eu.questName
          }), Eu.completed && (0, KU.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: ju
          })]
        }), Eu.lines.map((uu => (0, KU.jsx)(AX.b, {
          display: uu.display
        }, uu.key)))]
      })
    }

    function yX(uu) {
      let {
        controller: Eu
      } = uu;
      const {
        t: ju
      } = (0, mU.A)(), su = (0, vU.g)(CU, Eu.getSnapshot()), Uu = tU();
      if (!su.enabled) return null;
      const Zu = !su.loading && 0 === su.conversations.length;
      return (0, KU.jsx)(FU.c, {
        show: su.open,
        close: Eu.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, KU.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: Uu,
          onKeyDown: LU,
          children: [(0, KU.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, KU.jsxs)("div", {
              children: [(0, KU.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: ju("skyblockDialogue:title")
              }), (0, KU.jsx)("p", {
                children: ju("skyblockDialogue:intro")
              })]
            }), (0, KU.jsx)(BU.l, {
              padIgnore: !0,
              onClick: Eu.dismiss
            })]
          }), (0, KU.jsxs)("div", {
            className: wU()("SkyblockDialogueBody", {
              SingleColumn: null !== su.questFocus || 0 === su.characters.length
            }),
            children: [null === su.questFocus && su.characters.length > 0 && (0, KU.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: su.characters.map((uu => (0, KU.jsx)(BU.f, {
                className: wU()("SkyblockDialogueCharacter", {
                  Selected: uu.selected
                }),
                onClick: () => {
                  Eu.selectCharacter(uu.id)
                },
                children: (0, KU.jsx)(oU.d, {
                  text: uu.styling
                })
              }, uu.id)))
            }), (0, KU.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== su.questFocus && (0, KU.jsx)(BU.f, {
                className: "SkyblockDialogueBack",
                onClick: Eu.showCharacters,
                children: ju("skyblockDialogue:allCharacters")
              }), su.loading && (0, KU.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: ju("skyblockDialogue:loading")
              }), Zu && (0, KU.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: ju(null === su.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), su.conversations.map((uu => (0, KU.jsx)(nX, {
                conversation: uu,
                completedLabel: su.completedLabel
              }, uu.questId)))]
            })]
          })]
        })
      })
    }

    function zX(uu) {
      let {
        controller: Eu
      } = uu;
      const ju = (0, vU.g)(YU, Eu.getSnapshot()),
        {
          t: su
        } = (0, mU.A)(),
        Uu = tU();
      return ju.enabled ? (0, KU.jsx)(FU.c, {
        show: ju.open,
        close: Eu.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, KU.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: Uu,
          onKeyDown: LU,
          children: [(0, KU.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, KU.jsxs)("div", {
              children: [(0, KU.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: su("skyblockGame:autographBook")
              }), (0, KU.jsx)("p", {
                children: su("skyblockGame:autographBookIntro")
              })]
            }), (0, KU.jsx)(BU.l, {
              padIgnore: !0,
              onClick: Eu.dismiss
            })]
          }), (0, KU.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, KU.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, KU.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, KU.jsx)("strong", {
                  children: ju.total
                }), (0, KU.jsx)("span", {
                  children: su("skyblockGame:autographTotal")
                })]
              }), (0, KU.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, KU.jsx)("strong", {
                  children: ju.rankTotal
                }), (0, KU.jsx)("span", {
                  children: su("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === ju.entries.length ? (0, KU.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: su("skyblockGame:autographBookEmpty")
            }) : (0, KU.jsx)("ul", {
              className: "SkyblockAutographList",
              children: ju.entries.map((uu => (0, KU.jsxs)("li", {
                className: wU()("SkyblockAutograph", {
                  Ranked: null !== uu.rank
                }),
                style: null === uu.rank ? void 0 : {
                  color: uu.rank.colour
                },
                children: [null !== uu.rank && (0, KU.jsx)(YZ.e, {
                  className: "SkyblockAutographRankIcon",
                  name: uu.rank.icon,
                  kit: (0, YZ.i)(uu.rank.icon)
                }), (0, KU.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, KU.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: uu.name
                  }), (0, KU.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== uu.rank && (0, KU.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: uu.rank.label
                    }), (0, KU.jsx)("span", {
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
    const RX = (0, du.memo)((function(uu) {
        let {
          controller: Eu
        } = uu;
        return (0, KU.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: Eu.display.mountWaypoint,
          children: [(0, KU.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, KU.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, KU.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, KU.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, KU.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, KU.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      ul = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function El(uu) {
      return "next" === uu.phase ? "\u2192" : ul[uu.kind]
    }
    const jl = (0, du.memo)((function(uu) {
      let {
        controller: Eu,
        display: ju
      } = uu;
      const su = (0, vU.g)(bj, Eu.getNotificationSnapshot()),
        [Uu, Zu] = (0, du.useState)(!1);
      return (0, vU.f)("qteStateUpdated", (uu => {
        Zu(uu.isActive)
      })), (0, KU.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (Uu ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [su && (0, KU.jsxs)("div", {
          className: `SkyblockQuestNotification ${su.kind} ${su.phase}`,
          style: {
            "--quest-notification-duration": `${su.durationMs}ms`,
            ...su.accent && {
              "--quest-notification-accent": su.accent
            }
          },
          children: [(0, KU.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (su.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, KU.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: El(su)
            }), su.iconItem && (0, KU.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, KU.jsx)(PU.d, {
                itemName: su.iconItem,
                amount: 0
              })
            })]
          }), (0, KU.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, KU.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: su.title
            }), (0, KU.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, KU.jsx)(qZ.e, {
                text: su.name
              })
            }), su.description && (0, KU.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, KU.jsx)(qZ.e, {
                text: su.description
              })
            }), su.reward && (0, KU.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, KU.jsx)(qZ.e, {
                text: su.reward
              })
            })]
          })]
        }, su.token), (null === su || void 0 === su ? void 0 : su.waypointNameKey) && (0, KU.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": su.waypointNameKey,
          "data-notification-token": su.token,
          ref: ju.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${su.token}`)]
      })
    }));

    function sl(uu) {
      const Eu = parseInt(uu.replace("#", ""), 16);
      return `${Eu>>16&255}, ${Eu>>8&255}, ${255&Eu}`
    }
    const Ul = (0, du.memo)((function(uu) {
      let {
        controller: Eu
      } = uu;
      const {
        t: ju
      } = (0, mU.A)(), su = (0, vU.g)(Wj, Eu.getSnapshot());
      if (!su) return null;
      const Uu = "arrival" === su.phase;
      return (0, KU.jsxs)("div", {
        className: wU()("SkyblockPortalTransit", {
          Departure: !Uu,
          Arrival: Uu
        }),
        style: {
          "--portal-rgb": sl(su.colour),
          "--portal-duration": `${su.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, KU.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, KU.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            Eu.finishArrival(su.token)
          }
        }), (0, KU.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, KU.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !Uu && (0, KU.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: ju("skyblockGame:portalTransitHeading")
          }), (0, KU.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: ju(su.zoneNameKey)
          })]
        })]
      }, su.token)
    }));

    function Zl() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function Xl() {
      const uu = document.querySelector(".SkyblockHudCoins"),
        Eu = null === uu || void 0 === uu ? void 0 : uu.getBoundingClientRect();
      return Eu && Eu.width > 0 ? {
        x: Eu.left + Math.min(Eu.width, 24) / 2,
        y: Eu.top + Eu.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function ll(uu) {
      return {
        x: uu.left + uu.width / 2,
        y: uu.top + uu.height / 2
      }
    }

    function ql() {
      var uu;
      const Eu = null === (uu = document.querySelector(".HotBar")) || void 0 === uu ? void 0 : uu.getBoundingClientRect();
      return Eu && Eu.width > 0 ? ll(Eu) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function fl(uu) {
      let {
        items: Eu,
        origins: ju,
        target: su
      } = uu;
      return (0, KU.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: Eu.map(((uu, Eu) => {
          const Uu = ju[Eu];
          return (0, KU.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${Uu.x}px`,
              top: `${Uu.y}px`,
              "--item-dx": su.x - Uu.x + "px",
              "--item-dy": su.y - Uu.y + "px",
              "--item-delay": 2e3 + 160 * Eu + "ms",
              "--item-flight": "700ms"
            },
            children: (0, KU.jsx)(PU.d, {
              itemName: uu.dailyRewardItemName,
              amount: 0
            })
          }, uu.dailyRewardItemName)
        }))
      })
    }

    function Cl(uu, Eu) {
      const ju = -Math.PI / 2 + 1.25 * (uu / (Eu - 1) * 2 - 1),
        su = 70 + uu % 3 * 22;
      return {
        x: Math.cos(ju) * su,
        y: Math.sin(ju) * su * .7
      }
    }

    function bl(uu) {
      let {
        origin: Eu,
        target: ju,
        count: su
      } = uu;
      const Uu = [];
      for (let Zu = 0; Zu < su; Zu++) {
        const uu = Cl(Zu, su);
        Uu.push((0, KU.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${Eu.x}px`,
            top: `${Eu.y}px`,
            "--coin-bx": `${uu.x}px`,
            "--coin-by": `${uu.y}px`,
            "--coin-dx": ju.x - Eu.x + "px",
            "--coin-dy": ju.y - Eu.y + "px",
            "--coin-delay": `${tj(Zu,su)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, KU.jsx)(PU.d, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, Zu))
      }
      return (0, KU.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: Uu
      })
    }

    function cl(uu) {
      let {
        day: Eu
      } = uu;
      const ju = au[Eu - 1];
      return (0, KU.jsxs)(KU.Fragment, {
        children: [(0, KU.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, KU.jsx)(PU.d, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, kU.c)(ju.dailyRewardCoins)]
        }), ju.dailyRewardItems.map((uu => (0, KU.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, KU.jsx)(PU.d, {
            itemName: uu.dailyRewardItemName,
            amount: 0
          }), "\xd7", uu.dailyRewardItemAmount]
        }, uu.dailyRewardItemName)))]
      })
    }

    function Nl(uu) {
      let {
        day: Eu
      } = uu;
      const ju = ou(Eu);
      return (0, KU.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: au.map(((uu, su) => {
          const Uu = su + 1;
          return (0, KU.jsxs)("li", {
            className: wU()("SkyblockDailyRewardTile", {
              Claimed: Uu < Eu && Uu !== ju,
              Today: Uu === Eu,
              Tomorrow: Uu === ju,
              Jackpot: Uu === Pu
            }),
            children: [(0, KU.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: Uu
            }), (0, KU.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, KU.jsx)(PU.d, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, kU.c)(uu.dailyRewardCoins)]
            }), uu.dailyRewardItems.map((uu => (0, KU.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, KU.jsx)(PU.d, {
                itemName: uu.dailyRewardItemName,
                amount: 0
              }), "\xd7", uu.dailyRewardItemAmount]
            }, uu.dailyRewardItemName)))]
          }, Uu)
        }))
      })
    }

    function Ol(uu) {
      let {
        view: Eu
      } = uu;
      const {
        t: ju
      } = (0, mU.A)(), su = (0, du.useRef)(null), Uu = (0, du.useRef)(null), [Zu, Xu] = (0, du.useState)(null);
      (0, du.useLayoutEffect)((() => {
        var uu;
        const Eu = null === (uu = su.current) || void 0 === uu ? void 0 : uu.getBoundingClientRect();
        if (Eu) {
          var ju, Zu;
          const uu = Array.from(null !== (ju = null === (Zu = Uu.current) || void 0 === Zu ? void 0 : Zu.children) && void 0 !== ju ? ju : [], (uu => ll(uu.getBoundingClientRect())));
          Xu({
            origin: ll(Eu),
            target: Xl(),
            itemOrigins: uu,
            itemTarget: ql()
          })
        }
      }), []);
      const lu = ou(Eu.day),
        qu = function(uu, Eu) {
          const [ju, su] = (0, du.useState)((() => Zl() ? uu : 0));
          return (0, du.useEffect)((() => {
            if (Zl()) return;
            const ju = performance.now();
            let Uu = 0;
            const Zu = Xu => {
              const lu = Math.min(Math.max((Xu - ju) / Eu, 0), 1);
              su(Math.round(uu * (1 - (1 - lu) ** 3))), lu < 1 && (Uu = requestAnimationFrame(Zu))
            };
            return Uu = requestAnimationFrame(Zu), () => {
              cancelAnimationFrame(Uu)
            }
          }), [uu, Eu]), ju
        }(Eu.coins, 450);
      return (0, KU.jsxs)("div", {
        className: wU()("SkyblockDailyReward", {
          Jackpot: Eu.day === Pu
        }),
        style: {
          "--daily-duration": `${Eu.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, KU.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, KU.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, KU.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, KU.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: ju("skyblockGame:dailyRewardTitle")
            }), (0, KU.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: ju("skyblockGame:dailyRewardDay", {
                day: String(Eu.day)
              })
            })]
          }), (0, KU.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: su,
            children: [(0, KU.jsx)(PU.d, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, KU.jsxs)("span", {
              children: ["+", (0, kU.c)(qu)]
            })]
          }), Eu.items.length > 0 && (0, KU.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: Uu,
            children: Eu.items.map((uu => (0, KU.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, KU.jsx)(PU.d, {
                itemName: uu.dailyRewardItemName,
                amount: 0
              }), "\xd7", uu.dailyRewardItemAmount]
            }, uu.dailyRewardItemName)))
          }), (0, KU.jsx)(Nl, {
            day: Eu.day
          }), (0, KU.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [ju("skyblockGame:dailyRewardComeBack"), (0, KU.jsx)(cl, {
              day: lu
            })]
          })]
        }), null !== Zu && (0, KU.jsx)(bl, {
          origin: Zu.origin,
          target: Zu.target,
          count: Eu.flyingCoins
        }), null !== Zu && Zu.itemOrigins.length === Eu.items.length && (0, KU.jsx)(fl, {
          items: Eu.items,
          origins: Zu.itemOrigins,
          target: Zu.itemTarget
        })]
      })
    }
    const Yl = (0, du.memo)((function(uu) {
        let {
          controller: Eu
        } = uu;
        const ju = (0, vU.g)(Fj, Eu.getSnapshot());
        return ju ? (0, KU.jsx)(Ol, {
          view: ju
        }, ju.token) : null
      })),
      hl = "Gold Coin";

    function Dl(uu) {
      return 650 + 220 * uu
    }

    function gl(uu) {
      return {
        "--letter-delay": `${Dl(uu)}ms`,
        "--letter-land": `${Dl(uu)+300}ms`
      }
    }

    function Ml(uu) {
      let {
        letterCount: Eu
      } = uu;
      return (0, KU.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, KU.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, KU.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, KU.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: Eu
        }, ((uu, Eu) => (0, KU.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: gl(Eu),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, Eu)))]
      })
    }

    function el(uu) {
      var Eu, ju, su;
      let {
        letter: Uu,
        index: Zu
      } = uu;
      const {
        t: Xu
      } = (0, mU.A)(), lu = null !== (Eu = null === (ju = Uu.items[0]) || void 0 === ju ? void 0 : ju.itemName) && void 0 !== Eu ? Eu : hl;
      return (0, KU.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: gl(Zu),
        children: [(0, KU.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, KU.jsx)(PU.d, {
            itemName: lu,
            amount: 0
          })
        }), (0, KU.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: Xu(Uu.reasonKey, null !== (su = Uu.reasonParams) && void 0 !== su ? su : void 0)
        }), (0, KU.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [Uu.coins > 0 && (0, KU.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, KU.jsx)(PU.d, {
              itemName: hl,
              amount: 0
            }), "+", (0, kU.c)(Uu.coins)]
          }), Uu.items.map(((uu, Eu) => (0, KU.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, KU.jsx)(PU.d, {
              itemName: uu.itemName,
              amount: 0
            }), uu.label, " \xd7", uu.amount]
          }, Eu)))]
        })]
      })
    }

    function Gl(uu) {
      let {
        view: Eu
      } = uu;
      const {
        t: ju
      } = (0, mU.A)();
      return (0, KU.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${Eu.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${Dl(Eu.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, KU.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, KU.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, KU.jsx)(Ml, {
              letterCount: Eu.letters.length
            }), (0, KU.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: ju("skyblockGame:mailboxTitle")
            })]
          }), (0, KU.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: Eu.letters.map(((uu, Eu) => (0, KU.jsx)(el, {
              letter: uu,
              index: Eu
            }, Eu)))
          }), Eu.more > 0 && (0, KU.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: ju("skyblockGame:mailboxMore", {
              count: String(Eu.more)
            })
          })]
        })
      })
    }
    const pl = (0, du.memo)((function(uu) {
      let {
        controller: Eu
      } = uu;
      const ju = (0, vU.g)(Tj, Eu.getSnapshot());
      return ju ? (0, KU.jsx)(Gl, {
        view: ju
      }, ju.token) : null
    }));

    function wl(uu) {
      let {
        controller: Eu
      } = uu;
      const {
        t: ju
      } = (0, mU.A)(), su = (0, vU.g)(Is, Eu.getSnapshot());
      if (null === su) return null;
      const Uu = su.fullSet ? "empty" === su.fuelState ? {
        text: ju("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: ju("skyblockGame:magmawardHudFullSet", {
          worn: String(su.wornCount)
        }),
        tone: "partial"
      };
      return (0, KU.jsx)(dU.h, {
        placement: "statBars",
        children: (0, KU.jsxs)("div", {
          className: wU()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${su.fuelState}`, {
            "SkyblockMagmawardHud-partial": !su.fullSet,
            "SkyblockMagmawardHud-armed": su.fullSet && "empty" !== su.fuelState
          }),
          children: [null !== su.flare && (0, KU.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${su.flare}`
          }, `flare:${su.flareToken}`), (0, KU.jsx)("div", {
            className: wU()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: su.setLit
            }),
            children: su.pieces.map(((uu, Eu) => (0, KU.jsx)("div", {
              className: wU()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: uu.worn,
                SkyblockMagmawardPieceJustWorn: uu.justWorn
              }),
              children: (0, KU.jsx)(PU.d, {
                itemName: uu.itemName,
                amount: 0
              })
            }, `${Eu}:${uu.wornToken}`)))
          }, `pieces:${su.setLitToken}`), (0, KU.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, KU.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, KU.jsxs)("div", {
              className: wU()("SkyblockMagmawardFuelCounter", su.pulse && `SkyblockMagmawardFuelCounter-${su.pulse}`),
              children: [(0, KU.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, KU.jsx)(PU.d, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, KU.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: su.fuel
              })]
            }, `counter:${su.pulseToken}`), "burn" === su.pulse && (0, KU.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${su.pulseToken}`)]
          }), Uu && (0, KU.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${Uu.tone} SmallTextBold`,
            children: Uu.text
          })]
        })
      })
    }

    function Jl(uu) {
      let {
        controller: Eu
      } = uu;
      const {
        t: ju,
        selectedLanguage: su
      } = (0, mU.A)(), Uu = (0, vU.g)(Bs, Eu.getSnapshot());
      return null === Uu ? null : (0, KU.jsx)(dU.h, {
        placement: "statBars",
        children: (0, KU.jsxs)("div", {
          className: wU()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: Uu.inRange
          }),
          style: {
            "--glowtide-colour": Uu.colour
          },
          "aria-label": ju("skyblockGame:glowtideChipLabel"),
          children: [(0, KU.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), Uu.inRange ? (0, KU.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: ju("skyblockGame:glowtideChipInRange")
          }, `call:${Uu.inRangeToken}`) : (0, KU.jsxs)(KU.Fragment, {
            children: [(0, KU.jsx)("div", {
              ref: Eu.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, KU.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: ju("skyblockGame:waypointDistance", {
                distance: pu(Uu.distance, su.code)
              })
            })]
          })]
        })
      })
    }

    function dl(uu) {
      let {
        controller: Eu
      } = uu;
      const {
        t: ju
      } = (0, mU.A)(), su = (0, vU.g)(ts, Eu.getSnapshot());
      return null === su ? null : (0, KU.jsx)(dU.h, {
        placement: "statBars",
        children: (0, KU.jsxs)("div", {
          className: wU()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: su.full
          }),
          "aria-label": ju("skyblockGame:glowMeterLabel", {
            fill: String(su.fill),
            Mb: String(su.Mb)
          }),
          children: [su.burst && (0, KU.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${su.burstToken}`), (0, KU.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, KU.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${su.ratio})`
              }
            }), su.gained && (0, KU.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${su.gainToken}`), su.full && Array.from({
              length: 5
            }, ((uu, Eu) => (0, KU.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, Eu)))]
          }), su.full && su.rares.map((uu => (0, KU.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, KU.jsx)(PU.d, {
              itemName: uu,
              amount: 0
            })
          }, uu))), su.ready && (0, KU.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, KU.jsx)("span", {
              children: ju("skyblockGame:glowMeterReady")
            })
          }, `ready:${su.fullToken}`)]
        })
      })
    }

    function al(uu) {
      let {
        controller: Eu
      } = uu;
      const {
        t: ju
      } = (0, mU.A)(), su = (0, vU.g)(Ts, Eu.getSnapshot());
      if (null === su) return null;
      const Uu = "waiting" === su.phase,
        Zu = {
          animationDuration: `${su.waitMs}ms`,
          animationDelay: -su.elapsedMs + "ms"
        },
        Xu = Uu ? void 0 : {
          animationDuration: `${su.waitMs}ms`
        };
      return (0, KU.jsxs)("div", {
        className: Uu ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [Uu && (0, KU.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((uu, Eu) => (0, KU.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, Eu))), (0, KU.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: Zu
          }), (0, KU.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, KU.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, KU.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: Zu
            })]
          }), (0, KU.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, KU.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: Xu,
          children: ju(su.line)
        }, su.lineIndex)]
      }, su.token)
    }

    function Pl(uu) {
      let {
        chart: Eu,
        showHere: ju,
        className: su
      } = uu;
      return (0, KU.jsx)("div", {
        className: wU()("SkyblockTideChartGrid", su, null !== Eu.pictureName && "Complete"),
        "aria-hidden": "true",
        children: Eu.cells.map(((uu, su) => {
          const Uu = 0 !== (Eu.pulseCells & 1 << su),
            Zu = Eu.castCell === su;
          return (0, KU.jsx)("span", {
            className: wU()("SkyblockTideChartCell", `Cell-${uu}`, Uu && "Pulse", Zu && "Cast", ju && Eu.hereCell === su && "Here")
          }, `${su}:${Uu?`p${Eu.pulseToken}`:""}:${Zu?`c${Eu.castToken}`:""}`)
        }))
      })
    }

    function ol(uu) {
      let {
        controller: Eu
      } = uu;
      const ju = (0, vU.g)(As, Eu.getSnapshot()),
        {
          t: su
        } = (0, mU.A)(),
        Uu = ju.chip;
      if (!ju.enabled || null === Uu) return null;
      const Zu = su("skyblockGame:tideChartsChipLabel", {
        island: Uu.islandName,
        lit: String(Uu.lit),
        ink: String(Uu.ink)
      });
      return (0, KU.jsx)(dU.h, {
        placement: "statBars",
        children: (0, KU.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: wU()("SkyblockTideChartsChip", ju.open && "Open", null !== Uu.pictureName && "Complete"),
          "aria-label": Zu,
          title: Zu,
          onMouseDown: uu => {
            uu.preventDefault()
          },
          onClick: Eu.toggle,
          children: [(0, KU.jsx)(Pl, {
            chart: Uu,
            showHere: !1,
            className: "Mini"
          }), (0, KU.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [Uu.lit, "/", Uu.ink]
          })]
        })
      })
    }

    function kl(uu) {
      let {
        controller: Eu
      } = uu;
      const ju = (0, vU.g)(As, Eu.getSnapshot()),
        {
          t: su
        } = (0, mU.A)(),
        Uu = tU(),
        Zu = ju.card;
      return ju.enabled && null !== Zu ? (0, KU.jsx)(FU.c, {
        show: ju.open,
        close: Eu.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, KU.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: Uu,
          onKeyDown: LU,
          children: [(0, KU.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, KU.jsxs)("div", {
              children: [(0, KU.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: su("skyblockGame:tideChartsTitle")
              }), (0, KU.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: su("skyblockGame:tideChartsIntro")
              })]
            }), (0, KU.jsx)(BU.l, {
              padIgnore: !0,
              ariaLabel: su("skyblockGame:tideChartsClose"),
              onClick: Eu.dismiss
            })]
          }), ju.tabs.length > 1 && (0, KU.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": su("skyblockGame:tideChartsIslands"),
            children: ju.tabs.map((uu => (0, KU.jsx)("button", {
              type: "button",
              className: wU()("SkyblockTideChartsTab", uu.selected && "Selected"),
              "aria-pressed": uu.selected,
              onClick: () => {
                Eu.Hc(uu.island)
              },
              children: uu.name
            }, uu.island)))
          }), (0, KU.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, KU.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": Zu.gridLabel,
              children: (0, KU.jsx)(Pl, {
                chart: Zu,
                showHere: !0,
                className: "Large"
              })
            }), (0, KU.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, KU.jsx)("h3", {
                children: Zu.islandName
              }), (0, KU.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: Zu.litText
              }), null === Zu.pictureName ? (0, KU.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: su("skyblockGame:tideChartsPictureHidden")
              }) : (0, KU.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: su("skyblockGame:tideChartsPictureRevealed", {
                  picture: Zu.pictureName
                })
              }, Zu.pictureName), (0, KU.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, KU.jsxs)("li", {
                  children: [(0, KU.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), su("skyblockGame:tideChartsLegendLit")]
                }), (0, KU.jsxs)("li", {
                  children: [(0, KU.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), su("skyblockGame:tideChartsLegendClear")]
                }), null !== Zu.hereCell && (0, KU.jsxs)("li", {
                  children: [(0, KU.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), su("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, KU.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, KU.jsx)("span", {
                  children: ju.turnsText
                }), (0, KU.jsx)("span", {
                  children: ju.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function ml(uu) {
      var Eu;
      let {
        controller: ju
      } = uu;
      const {
        selectedLanguage: su
      } = (0, mU.A)(), Uu = su.code;
      (0, du.useEffect)((() => {
        ju.setTranslator(((uu, Eu) => (0, mU.x)(Uu, uu, Eu)), Uu, ((uu, Eu) => (0, mU.u)(Uu, uu, Eu)))
      }), [ju, Uu]);
      const Zu = (0, vU.g)(cu, ju.map.getSnapshot()),
        {
          openInGameMenuName: Xu
        } = (0, JU.l)(["openInGameMenuName"]);
      return (0, KU.jsxs)(KU.Fragment, {
        children: [(0, KU.jsx)(jl, {
          controller: ju.quests,
          display: ju.navigation.display
        }), Zu.enabled && !Xu && (0, KU.jsx)(ZZ, {
          controller: ju.navigation
        }), (0, KU.jsx)(VU, {
          controller: ju,
          minimap: Zu.enabled && (null === (Eu = Zu.presentation) || void 0 === Eu ? void 0 : Eu.minimap) && (0, KU.jsx)(UZ, {
            view: Zu.presentation.minimap,
            navigation: ju.navigation,
            controller: ju.map
          }),
          children: (0, KU.jsx)(OZ, {
            controller: ju.quests,
            surface: "hud"
          })
        }), (0, KU.jsx)(RX, {
          controller: ju.navigation
        }), (0, KU.jsx)(Ul, {
          controller: ju.portalTransit
        }), (0, KU.jsx)(Yl, {
          controller: ju.dailyReward
        }), (0, KU.jsx)(pl, {
          controller: ju.mailbox
        }), (0, KU.jsx)(wl, {
          controller: ju.magmaward
        }), (0, KU.jsx)(Jl, {
          controller: ju.glowtide
        }), (0, KU.jsx)(OX, {
          controller: ju.passage
        }), (0, KU.jsx)(ol, {
          controller: ju.tideCharts
        }), (0, KU.jsx)(dl, {
          controller: ju.glowMeter
        }), (0, KU.jsx)(dX, {
          controller: ju.reachLog
        }), (0, KU.jsx)(al, {
          controller: ju.hushWait
        }), (0, KU.jsx)(GX, {
          controller: ju.lampLight
        }), (0, KU.jsx)(XZ, {
          controller: ju.skills,
          surface: "hud"
        })]
      })
    }

    function vl(uu) {
      let {
        controller: Eu
      } = uu;
      return (0, KU.jsxs)(KU.Fragment, {
        children: [(0, KU.jsx)(sZ, {
          controller: Eu.map,
          navigation: Eu.navigation
        }), (0, KU.jsx)(XZ, {
          controller: Eu.skills,
          surface: "menu"
        }), (0, KU.jsx)(OZ, {
          controller: Eu.quests,
          surface: "menu"
        }), (0, KU.jsx)(AZ, {
          controller: Eu.dungeons
        }), (0, KU.jsx)(zZ, {
          controller: Eu.collections
        }), (0, KU.jsx)(EX, {
          controller: Eu.questGraph
        }), (0, KU.jsx)(XX, {
          controller: Eu.forge
        }), (0, KU.jsx)(cX, {
          controller: Eu.smuggler
        }), (0, KU.jsx)(wX, {
          controller: Eu.keepersChair,
          lampLight: Eu.lampLight
        }), (0, KU.jsx)(HX, {
          controller: Eu.reachLog,
          regulars: Eu.regulars,
          hiddenWaters: Eu.hiddenWaters
        }), (0, KU.jsx)(kX, {
          controller: Eu.regulars
        }), (0, KU.jsx)(hX, {
          controller: Eu.passage
        }), (0, KU.jsx)(kl, {
          controller: Eu.tideCharts
        }), (0, KU.jsx)(yX, {
          controller: Eu.dialogue
        }), (0, KU.jsx)(zX, {
          controller: Eu.autographs
        })]
      })
    }
    var Kl = ju(37151);
    const Vl = Es + fs;

    function rl(uu, Eu, ju, su, Uu) {
      const Zu = [],
        Xu = [],
        lu = ju => {
          const su = uu.playSound(Eu, ju.sound, ju.volume, ju.rate);
          su && (Xu.push(su), void 0 !== ju.cutAfter && Zu.push(setTimeout((() => {
            su.fade(su.getVolume(), 0, 300)
          }), ju.cutAfter)))
        };
      for (const qu of function(uu, Eu) {
          const ju = [{
            sound: "rpgKnifeSlice1",
            beat: Es,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: Es,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: Es,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: Es,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: Es,
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
            sound: (0, Kl.e)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: Vl + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, Kl.e)("bigDrumSwish"),
            beat: Vl + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: Vl + 60,
            lead: 180,
            volume: .5 + .06 * uu,
            rate: .82 + .07 * uu
          }];
          return uu >= 4 && ju.push({
            sound: "exp_levelup",
            beat: Vl + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), Eu && ju.push({
            sound: "trumpetFlare",
            beat: Vl + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), ju.push({
            sound: "harp_pling",
            beat: ss,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), ju
        }(ju, su)) Uu ? Zu.push(setTimeout((() => {
        lu(qu)
      }), Math.max(0, qu.beat - qu.lead / qu.rate))) : qu.beat !== Es && "magicAccent2" !== qu.sound && "trumpetFlare" !== qu.sound || lu(qu);
      return () => {
        for (const uu of Zu) clearTimeout(uu);
        for (const uu of Xu) uu.fade(uu.getVolume(), 0, 120)
      }
    }
    class Ql {
      constructor(uu) {
        this.deps = uu, this.pending = new Map, this.localHook = null
      }
      hookWaiting(uu, Eu) {
        this.pending.delete(uu);
        const ju = this.deps.now();
        if (null === Eu) {
          var su;
          if ((null === (su = this.localHook) || void 0 === su ? void 0 : su.hookId) === uu) {
            const uu = ju >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(uu)
          }
          return
        }
        const Uu = ju + Eu;
        this.settle(uu, Uu) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(uu, {
          untilMs: ju + 1e3,
          biteAtMs: Uu
        }))
      }
      getLocalHook() {
        var uu, Eu;
        return null !== (uu = null === (Eu = this.localHook) || void 0 === Eu ? void 0 : Eu.hookId) && void 0 !== uu ? uu : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const uu = this.deps.now();
        for (const [Eu, {
            untilMs: ju,
            biteAtMs: su
          }] of this.pending)(this.settle(Eu, su) || uu > ju) && this.pending.delete(Eu)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(uu, Eu) {
        const ju = this.deps.getLineOwner(uu);
        if (null === ju) return !1;
        if (!this.deps.isLocalPlayer(ju)) return !0;
        if (this.localHook = {
            hookId: uu,
            biteAtMs: Eu
          }, !this.deps.isHushWaiting()) {
          const [Eu, ju] = this.deps.getHookPosition(uu);
          this.deps.onCastLanded(Eu, ju)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var il = ju(4427);
    const Wl = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      Sl = {
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
    class Il {
      constructor(uu) {
        this.deps = uu, this.tell = null
      }
      receiveTell(uu) {
        let {
          biteTellTier: Eu
        } = uu;
        this.tell = {
          tier: Eu,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(uu) {
        const Eu = this.tell;
        if (this.tell = null, !uu) return;
        const ju = null !== Eu && this.deps.now() - Eu.atMs <= 3e3 ? Eu.tier : 0;
        this.deps.vibrate(Wl[ju])
      }
      burstAtHook() {
        const uu = this.tell,
          Eu = this.deps.getLocalHookPosition();
        null === uu || uu.burst || null === Eu || (uu.burst = !0, this.deps.playParticles(function(uu, Eu) {
          let [ju, su, Uu] = Eu;
          const {
            count: Zu,
            rise: Xu,
            colour: lu
          } = Sl[uu], [qu, fu, Cu] = lu;
          return {
            texture: "glint",
            pos1: [ju - .3, su, Uu - .3],
            pos2: [ju + .3, su + .2, Uu + .3],
            dir1: [-.6, Xu, -.6],
            dir2: [.6, 1.4 * Xu, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: Zu,
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
              minColor: [qu, fu, Cu, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [qu, fu, Cu, 0],
              maxColor: [qu, fu, Cu, 0]
            }],
            blendMode: il.e.Add,
            hideDist: 48
          }
        }(uu.tier, Eu)))
      }
    }
    var Fl = ju(1303),
      Bl = ju(1995),
      Ll = ju(31);

    function tl(uu, Eu) {
      return [{
        timeFraction: 0,
        minColor: [255 * uu[0], 255 * uu[1], 255 * uu[2], 1],
        maxColor: [255 * Eu[0], 255 * Eu[1], 255 * Eu[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const xl = [0, 0, 0],
      Tl = {
        texture: "glint",
        mipmaps: !1,
        Mb: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: xl,
        dir2: xl,
        blendMode: il.e.OneOne
      },
      Hl = {
        ...Tl,
        colorGradients: tl([1, .88, .38], [1, .65, .15])
      },
      Al = {
        ...Tl,
        colorGradients: tl([.55, .95, 1], [.9, 1, 1])
      },
      nl = [.5, .5, .5],
      yl = {
        texture: "glint",
        mipmaps: !1,
        Mb: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: tl([1, .12, .12], [1, .35, .2]),
        blendMode: il.e.OneOne
      };
    class zl {
      constructor() {
        this.drops = new Map
      }
      NO(uu, Eu) {
        if ("overflowFlash" === Eu.kind) {
          const [ju, su, Uu] = Eu.position, Zu = uu.createParticles(yl, {
            pos: [ju, su, Uu],
            half: nl
          });
          return Zu.emit(18), void Zu.stop()
        }
        this.drops.has(Eu.itemId) || this.drops.set(Eu.itemId, {
          owner: Eu.owner,
          cosmetic: Eu.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      Tb(uu) {
        if (0 === this.drops.size) return;
        const Eu = performance.now(),
          ju = uu.getCameraPosition();
        let su = 0;
        for (const Zu of this.drops.values()) null !== Zu.particles && su++;
        for (const [Zu, Xu] of this.drops) {
          const lu = uu.getPositionView(Zu);
          if (null === lu) {
            var Uu;
            if (Xu.seen || Eu - Xu.markedAt > 5e3) null !== Xu.particles && su--, null === (Uu = Xu.particles) || void 0 === Uu || Uu.stop(), this.drops.delete(Zu);
            continue
          }
          Xu.cosmetic || !uu.isLocalPlayer(Xu.owner) || Xu.pickupDelayCleared || (uu.clearPickupDelay(Zu), Xu.pickupDelayCleared = !0);
          const qu = Xu.lastPosition,
            fu = Xu.seen && (lu[0] - qu[0]) ** 2 + (lu[1] - qu[1]) ** 2 + (lu[2] - qu[2]) ** 2 > 4e-4,
            Cu = (lu[0] - ju[0]) ** 2 + (lu[1] - ju[1]) ** 2 + (lu[2] - ju[2]) ** 2 < 2025;
          Xu.seen = !0, qu[0] = lu[0], qu[1] = lu[1], qu[2] = lu[2], fu && (Xu.lastMovingAt = Eu), null !== Xu.particles && (!Cu || Eu - Xu.lastMovingAt > 500) && (Xu.particles.stop(), Xu.particles = null, su--), fu && Cu && null === Xu.particles && su < 32 && (Xu.particles = uu.createParticles(Xu.cosmetic ? Al : Hl, {
            pos: lu
          }), su++), null !== Xu.particles && (Xu.particles.moveTo(lu), Xu.particles.setEmitRate(fu ? 12 : 0)), !fu && null === Xu.particles && Eu - Math.max(Xu.lastMovingAt, Xu.markedAt) > 2e3 && this.drops.delete(Zu)
        }
      }
      dispose() {
        for (const Eu of this.drops.values()) {
          var uu;
          null === (uu = Eu.particles) || void 0 === uu || uu.stop()
        }
        this.drops.clear()
      }
    }
    var Rl = ju(202);
    const uq = Rl.e.Ih * Rl.e.playerEyeToHeightRatio;
    class Eq {
      constructor(uu) {
        this.host = uu, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      NO(uu) {
        this.lava = uu, this.nextUpdateAt = 0
      }
      Tb() {
        var uu;
        const Eu = this.host.now();
        if (Eu < this.nextUpdateAt) return;
        this.nextUpdateAt = Eu + 250;
        const ju = this.host.playerPosition(),
          su = ju && this.findNearest([ju[0], ju[1] + uq, ju[2]]);
        if (!su || su.distance >= 40) return void this.stop();
        const Uu = .5 * Math.min(1, (40 - su.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(Uu) : this.loop = this.host.play("lavaFlow", Uu, su.position, 40 + uq, 9, !0), null === (uu = this.loop) || void 0 === uu || uu.setPosition(su.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var uu;
        null === (uu = this.loop) || void 0 === uu || uu.stop(), this.loop = null
      }
      findNearest(uu) {
        let Eu = -1,
          ju = 1 / 0;
        for (let su = 0; su < this.lava.length; su += 3) {
          const Uu = this.lava[su] - uu[0],
            Zu = this.lava[su + 1] - uu[1],
            Xu = this.lava[su + 2] - uu[2],
            lu = Uu * Uu + Zu * Zu + Xu * Xu;
          lu < ju && (ju = lu, Eu = su)
        }
        return Eu < 0 ? null : {
          position: [this.lava[Eu], this.lava[Eu + 1], this.lava[Eu + 2]],
          distance: Math.sqrt(ju)
        }
      }
    }
    var jq = ju(1969),
      sq = ju(38988);
    const Uq = {
      "Grey Portal": "Gray"
    };
    for (const Cq of Uu.Lc) Uq[`${Cq} Portal`] = Cq;
    const Zq = Object.keys(Uq),
      Xq = Object.fromEntries(Zq.map((uu => [uu, (0, Uu.S)(Uu.G[`${(0,Uu.ze)(Uq[uu])}Team`])])));
    Object.fromEntries(Zq.map((uu => [uu, Uu.G[`${(0,Uu.ze)(Uq[uu])}UiText`]])));
    class lq {
      constructor(uu, Eu) {
        this.presentation = uu, this.portal = Eu, this.unlocked = void 0
      }
      NO(uu) {
        const Eu = !1 === this.unlocked && uu;
        this.unlocked = uu, this.Tb();
        const {
          min: ju,
          max: su,
          unlockedBlock: Uu
        } = this.portal;
        if (Eu && this.presentation.hasChunk(...ju)) {
          const [uu, Eu, Zu] = Xq[Uu];
          this.presentation.playParticles({
            pos1: [...ju],
            pos2: su.map((uu => uu + 1)),
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
              minColor: [uu, Eu, Zu, 1],
              maxColor: [Math.min(255, uu + 55), Math.min(255, Eu + 55), Math.min(255, Zu + 90), 1]
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
      Tb() {
        var uu;
        const Eu = this.unlocked ? this.portal.unlockedBlock : null !== (uu = this.portal.lockedBlock) && void 0 !== uu ? uu : "Light Gray Portal",
          {
            min: ju,
            max: su
          } = this.portal;
        for (let Uu = ju[0]; Uu <= su[0]; Uu++)
          for (let uu = ju[1]; uu <= su[1]; uu++)
            for (let Zu = ju[2]; Zu <= su[2]; Zu++) this.presentation.hasChunk(Uu, uu, Zu) && this.presentation.zD(Uu, uu, Zu) !== Eu && this.presentation.lK(Uu, uu, Zu, Eu)
      }
    }
    const qq = {
        farming_1: {
          raises: uu => "NPC" === uu.type && "chef" === uu.variation,
          rise: .4
        },
        fishing_1: {
          raises: uu => "Draugr Warper" === uu.type,
          rise: .4
        }
      },
      fq = (uu, Eu, ju, Zu) => {
        let {
          localPlayerId: Xu
        } = Zu;
        const lu = new GU({
          translate: (uu, Eu) => (0, mU.x)(Fl.h.get().getCurrentLanguageCode(), uu, Eu),
          translateWithIcons: (uu, Eu) => (0, mU.u)(Fl.h.get().getCurrentLanguageCode(), uu, Eu),
          setMenuOpen: uu => {
            uu ? (0, Tu.m)() : (0, Tu.e)()
          },
          dismissMenu: Tu.g,
          publishSkills: uu => {
            Hu.h.TY(Xj, uu, !0)
          },
          publishQuests: uu => {
            Hu.h.TY(Cj, uu, !0)
          },
          publishQuestNotification: uu => {
            Hu.h.TY(bj, uu, !0)
          },
          publishDungeons: uu => {
            Hu.h.TY(Oj, uu, !0)
          },
          publishCollections: uu => {
            Hu.h.TY(Qj, uu, !0)
          },
          publishMap: uu => {
            Hu.h.TY(cu, uu, !0)
          },
          publishHud: uu => {
            Hu.h.TY(gU, uu, !0)
          },
          publishPortalTransit: uu => {
            Hu.h.TY(Wj, uu, !0)
          },
          isLoadingScreenUp: () => JU.d.get("loadingOverlayVisible"),
          publishDailyReward: uu => {
            Hu.h.TY(Fj, uu, !0)
          },
          publishMailbox: uu => {
            Hu.h.TY(Tj, uu, !0)
          },
          publishQuestGraph: uu => {
            Hu.h.TY(Aj, uu, !0)
          },
          publishForge: uu => {
            Hu.h.TY(hs, uu, !0)
          },
          publishSmuggler: uu => {
            Hu.h.TY(Ms, uu, !0)
          },
          publishKeepersChair: uu => {
            Hu.h.TY(ks, uu, !0)
          },
          publishReachLog: uu => {
            Hu.h.TY(vs, uu, !0)
          },
          publishLampLight: uu => {
            Hu.h.TY(Ws, uu, !0)
          },
          publishMagmaward: uu => {
            Hu.h.TY(Is, uu, !0)
          },
          publishGlowtide: uu => {
            Hu.h.TY(Bs, uu, !0)
          },
          publishGlowMeter: uu => {
            Hu.h.TY(ts, uu, !0)
          },
          publishHushWait: uu => {
            Hu.h.TY(Ts, uu, !0)
          },
          publishPassage: uu => {
            Hu.h.TY(ps, uu, !0)
          },
          publishTideCharts: uu => {
            Hu.h.TY(As, uu, !0)
          },
          publishRegulars: uu => {
            Hu.h.TY(sU, uu, !0)
          },
          publishHiddenWaters: uu => {
            Hu.h.TY(qU, uu, !0)
          },
          publishDialogue: uu => {
            Hu.h.TY(CU, uu, !0)
          },
          publishAutographs: uu => {
            Hu.h.TY(YU, uu, !0)
          },
          onDailyRewardStarted: uu => {
            vu.playSound(Xu, uu.day === Pu ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (uu, Eu) => {
            vu.playSound(Xu, "exp_collect", .35, 1 + .6 * uu / (Eu - 1)), Hu.h.TY(Bj, uu === Eu - 1)
          },
          onDailyRewardItemLanded: uu => {
            vu.playSound(Xu, "pickUp", .6, 1 + .15 * uu)
          },
          onMailboxStarted: () => {
            vu.playSound(Xu, "rpgMetalClick", .6, 1), vu.playSound(Xu, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            vu.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: Ll.l,
          requestTracking: uu => {
            vu.sendCommand(`quests track ${uu}`)
          },
          requestDungeonEnter: (uu, Eu) => {
            vu.sendCommand(`dungeonEnter ${uu} ${Eu}`)
          },
          requestQuestJump: uu => {
            vu.sendCommand(`${Vu} jump ${uu}`)
          },
          requestQuestArrive: (uu, Eu) => {
            const ju = `${Vu} arrive ${uu}`;
            vu.sendCommand(Eu ? `${ju} complete` : ju)
          },
          requestForge: uu => {
            let {
              blade: Eu,
              guard: ju,
              handle: su
            } = uu;
            vu.sendCommand(`forge ${Eu} ${ju} ${su}`)
          },
          requestDialogue: () => {
            vu.sendCommand("quests dialogue")
          },
          requestSmuggle: (uu, Eu) => {
            vu.sendCommand(`smuggle ${uu} ${Eu}`)
          },
          requestKeepersChairAim: uu => {
            vu.sendCommand(`keeperschair-aim ${uu}`)
          },
          requestReachLogOpen: () => {
            vu.sendCommand("reachlog-open")
          },
          requestLampLight: uu => {
            vu.sendCommand(`${uu}`)
          },
          requestTravel: uu => {
            vu.sendCommand(`map travel ${uu.kind} ${uu.id} ${uu.requestId}`)
          }
        });
        let qu, fu, Cu, bu, Nu, Ou, Yu, eu, Gu, pu, wu, au, ou;
        const mu = new zl;
        let vu, Ku = null;
        const ru = qq[null !== ju && void 0 !== ju ? ju : ""],
          Su = (uu, Eu) => {
            null !== ru && void 0 !== ru && ru.raises(Eu) && vu.setNametagOffset(uu, ru.rise)
          },
          Bu = new Il({
            getLocalHookPosition: () => {
              const uu = Lu.getLocalHook();
              return null !== uu && vu.checkValid(uu) ? vu.bM(uu) : null
            },
            playParticles: uu => {
              vu.playParticleEffect(uu)
            },
            vibrate: uu => {
              Au.e.play("fishBite", uu)
            },
            now: () => performance.now()
          }),
          Lu = new Ql({
            getLineOwner: uu => vu.checkValid(uu) ? vu.getLineOwner(uu) : null,
            isLocalPlayer: uu => vu.isLocalPlayer(uu),
            getHookPosition: uu => {
              const [Eu, , ju] = vu.bM(uu);
              return [Eu, ju]
            },
            isHushWaiting: () => {
              var uu;
              return "waiting" === (null === (uu = lu.hushWait.getSnapshot()) || void 0 === uu ? void 0 : uu.phase)
            },
            onCastLanded: (uu, Eu) => {
              lu.tideCharts.castLanded(uu, Eu)
            },
            onLocalHookSettled: () => {
              Bu.onLocalHookSettled()
            },
            onLocalWaitEnded: uu => {
              Bu.onLocalWaitEnded(uu)
            },
            now: () => performance.now()
          }),
          nu = new Eq({
            now: () => performance.now(),
            playerPosition: () => vu.checkValid(Xu) ? vu.bM(Xu) : null,
            play: (uu, Eu, ju, su, Uu, Zu) => vu.playSound(Xu, uu, Eu, 1, {
              Zu: ju,
              maxHearDist: su,
              refDistance: Uu
            }, Zu)
          }),
          yu = new Map;
        let zu;
        return {
          onCreate: uu => {
            if (vu = uu, Ku = new sq.SkyblockEntityFacing(uu, ru ? Su : null), lu.portalTransit.resumeArrival(null !== ju && void 0 !== ju ? ju : null), (null !== ju && void 0 !== ju ? ju : su) === su) {
              let uu = -1 / 0;
              zu = Hu.h.subscribe("toggleMenu", (Eu => {
                const ju = performance.now();
                "inventory|Workbench" !== Eu || "cross_to_hub" !== lu.quests.getTrackedQuestId() || ju - uu < 1e4 || (uu = ju, vu.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [su, Uu] of Object.entries(null !== (Eu = Qu[null !== ju && void 0 !== ju ? ju : ""]) && void 0 !== Eu ? Eu : {})) {
              var Eu;
              yu.set(su, new lq({
                hasChunk: (Eu, ju, su) => uu.isBlockInLoadedChunk(Eu, ju, su),
                zD: (Eu, ju, su) => uu.blockIdToBlockName(uu.getBlockId(Eu, ju, su)),
                lK: (Eu, ju, su, Uu) => {
                  uu.lK(Eu, ju, su, Uu)
                },
                playParticles: Eu => {
                  uu.playParticleEffect(Eu)
                }
              }, Uu))
            }
            ou = (0, jq.e)((uu => function(uu) {
              return Object.hasOwn(tE, uu) || uu.startsWith("npc_")
            }(uu) ? TE(uu) : null)), lu.resolveItemName = (Eu, ju) => {
              const su = uu.getItemStat(Xu, Eu, "displayName");
              return su && "object" === typeof su && "translationKey" in su ? ju(su.translationKey, (0, mU.r)(su.params, Bl.e.shown)) : "string" === typeof su ? ju(su) : Eu
            }, lu.quests.notifications.onShown = uu => {
              "quest" === uu ? vu.playSound(Xu, "magicAccent1", 1, 1) : "skillLevel" === uu ? vu.playSound(Xu, "magicAccent1", 1, .6) : "landmark" === uu ? vu.playSound(Xu, "trumpetFlare", 1, .6) : "npcNote" === uu ? vu.playSound(Xu, "magicAccent2", .8, 1.1) : "started" === uu ? vu.playSound(Xu, (0, Kl.e)("bigDrumSwish"), 1, 1) : vu.playSound(Xu, (0, Kl.e)("rpgHandleSmallLeather"), 1, 1)
            }, lu.forge.onPartSelected = () => {
              vu.playSound(Xu, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, lu.forge.onOpened = () => {
              ! function(uu) {
                uu.preloadSounds([(0, Kl.e)("firecracker"), "fireBurn", "magicAccent2"])
              }(uu)
            }, lu.forge.onForgeStarted = (Eu, ju, su) => rl(uu, Xu, Eu, ju, su), lu.smuggler.onBought = () => {
              vu.playSound(Xu, (0, Kl.e)("rpgHandleSmallLeather"), 1, 1), vu.playSound(Xu, "chestOpen", .6, 1)
            }, lu.compass.register(new hu(lu.map, !0)), lu.compass.register(new hu(lu.map, !1)), lu.compass.register(new gu(lu.map)), lu.compass.register(new Mu((() => lu.quests.getSnapshot().compassTarget)));
            for (const ju of ["enemy", "npc"]) lu.compass.register(new Du(lu.map, ju, (Eu => uu.checkValid(Eu) ? uu.bM(Eu) : void 0), (Eu => uu.isAlive(Eu))))
          },
          onAfterRender: (uu, Eu) => {
            const ju = vu.checkValid(Xu) ? vu.bM(Xu) : null;
            lu.navigation.afterRender(ju, performance.now(), Eu), lu.glowtide.afterRender(ju, Eu.cameraHeading), lu.tideCharts.afterRender(ju), Lu.afterRender()
          },
          onClose: () => {
            var uu, Eu, ju, su, Uu, Zu, Xu, cu, Ou, hu, Du, gu, Mu, Ju, du;
            zu && Hu.h.unsubscribe(zu), null === (uu = ou) || void 0 === uu || uu(), mu.dispose(), nu.dispose(), null === (Eu = Ku) || void 0 === Eu || Eu.dispose(), Lu.dispose(), lu.dispose(), null === (ju = qu) || void 0 === ju || ju(), null === (su = fu) || void 0 === su || su(), null === (Uu = Cu) || void 0 === Uu || Uu(), null === (Zu = bu) || void 0 === Zu || Zu(), null === (Xu = Nu) || void 0 === Xu || Xu(), null === (cu = Yu) || void 0 === cu || cu(), null === (Ou = undefined) || void 0 === Ou || Ou(), null === (hu = eu) || void 0 === hu || hu(), null === (Du = Gu) || void 0 === Du || Du(), null === (gu = pu) || void 0 === gu || gu(), null === (Mu = wu) || void 0 === Mu || Mu(), null === (Ju = undefined) || void 0 === Ju || Ju(), null === (du = au) || void 0 === du || du()
          },
          onPlayerChangeBlock: (uu, Eu, su, Zu, qu, fu) => {
            if (uu === Xu && "Air" === fu) {
              const uu = vu.getClientOption(Xu, "creative");
              lu.skills.predictBlock([Eu, su, Zu], qu, uu);
              const fu = function(uu, Eu) {
                  if ("hub" === Eu || "farming_1" === Eu || "mining_1" === Eu) return !Iu.has(uu) || "hub" !== Eu && "mining_1" !== Eu ? Object.hasOwn(Wu, uu) ? Wu[uu] : void 0 : iu
                }(qu, ju),
                Cu = ("hub" === ju || "mining_1" === ju) && (Uu.vd.some((uu => uu === qu)) || Object.hasOwn(Fu, qu) || "mining_1" === ju && "Block of Coal" === qu);
              uu || void 0 === fu && !Cu || vu.lK(Eu, su, Zu, null !== fu && void 0 !== fu ? fu : iu)
            }
          },
          onPlayerAttackEntity: (uu, Eu) => {
            if (uu !== Xu || "Player" !== vu.getEntityType(Eu)) return;
            const [ju, su, Uu] = vu.bM(Eu);
            vu.burstParticlePreset("critical", [ju, su + 1, Uu], 10)
          },
          onChangeBlockFail: uu => {
            for (const {
                eu: Eu
              }
              of uu) lu.skills.rejectBlock(Eu)
          },
          onReceivedMessageFromServer: (uu, Eu) => {
            if ("skyblockGatedPortal" === uu) {
              var ju;
              const [uu, su] = Eu;
              return void(null === (ju = yu.get(uu)) || void 0 === ju || ju.NO(su))
            }
            if ("skyblockDailyReward" === uu) return void lu.dailyReward.NO(Eu);
            if ("skyblockMailbox" === uu) return void lu.mailbox.NO(Eu);
            if ("skyblockPortalTransit" === uu) return void lu.portalTransit.NO(Eu);
            if ("skyblockLoot" === uu) return void mu.NO(vu, Eu);
            if ("skyblockLava" === uu) return void nu.NO(Eu);
            if ("skyblockForge" === uu) return void lu.forge.NO(Eu);
            if ("skyblockMagmaward" === uu) return void lu.magmaward.NO(Eu);
            if ("skyblockGlowtide" === uu) return void lu.glowtide.NO(Eu);
            if ("skyblockGlowMeter" === uu) return void lu.glowMeter.NO(Eu);
            if ("skyblockHushWait" === uu) return void lu.hushWait.NO(Eu);
            if ("skyblockPassage" === uu) {
              const uu = Eu;
              return lu.passage.NO(uu), lu.reachLog.receivePassagePhase(uu.passagePhase), pu ??= (0, Ju.t)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: lu.passage.show
              }), void lu.keepersChair.receivePassage({
                keepersChairPassagePhase: uu.passagePhase,
                keepersChairPassageNextPhase: uu.passageNextPhase,
                keepersChairPassageTurnsInMs: uu.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === uu) {
              const uu = Eu;
              return lu.tideCharts.NO(uu), void(uu.tideCharts.length > 0 && (wu ??= (0, Ju.t)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: lu.tideCharts.show
              })))
            }
            if (uu === tu.x) {
              var su;
              const {
                hookId: uu,
                waiting: ju
              } = Eu;
              return void Lu.hookWaiting(uu, null !== (su = null === ju || void 0 === ju ? void 0 : ju.remainingMs) && void 0 !== su ? su : null)
            }
            if ("skyblockBiteTell" === uu) return void Bu.receiveTell(Eu);
            if ("skyblockSmuggler" === uu) return void lu.smuggler.NO(Eu);
            if ("skyblockKeepersChair" === uu) return lu.keepersChair.NO(Eu), void lu.lampLight.setAtChair(lu.keepersChair.isAtChair());
            if ("skyblockLampLight" === uu) {
              const uu = Eu;
              var Uu;
              if (lu.lampLight.NO(uu), uu.lampLightReleasing) Gu ??= (0, Ju.t)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  lu.lampLight.setRelease(!1)
                }
              });
              else null === (Uu = Gu) || void 0 === Uu || Uu(), Gu = void 0;
              return
            }
            if ("skyblockRegulars" === uu) return void lu.regulars.NO(Eu);
            if ("skyblockHiddenWaters" === uu) return void lu.hiddenWaters.NO(Eu);
            if ("skyblockReachLog" === uu) return lu.reachLog.NO(Eu), void(eu ??= (0, Ju.t)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: Vs
              },
              onClick: lu.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === uu) {
              for (const [uu, ju, su, Uu] of Eu) vu.lK(uu, ju, su, Uu);
              return
            }
            if ("skyblockHud" === uu) lu.receiveHud(Eu);
            else if ("skyblockMap" === uu) lu.map.NO(Eu);
            else if (uu === xu.d) lu.skills.NO(Eu);
            else if (uu === ku && "dialogue" === Eu.kind) lu.dialogue.NO(Eu);
            else if (uu === ku) lu.quests.NO(Eu);
            else if ("skyblockDungeons" === uu) lu.dungeons.NO(Eu);
            else if ("sbCollections" === uu) lu.collections.NO(Eu);
            else if ("skyblockQuestGraph" === uu) lu.questGraph.NO(Eu);
            else {
              if ("skyblockAutographs" !== uu) return;
              lu.autographs.NO(Eu)
            }
            if (!fu && lu.map.getSnapshot().enabled) {
              const uu = (0, Ju.t)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: lu.map.show
                }),
                Eu = (0, Tu.n)(lu.map.show);
              fu = () => {
                uu(), Eu()
              }
            }!Cu && lu.skills.getSnapshot().enabled && (Cu = (0, Ju.t)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: lu.skills.show
            })), !Yu && lu.collections.getSnapshot().enabled && (Yu = (0, Ju.t)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: lu.collections.show
            })), !bu && lu.quests.getSnapshot().enabled && (bu = (0, Ju.t)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: lu.quests.show
            })), !au && lu.autographs.getSnapshot().enabled && (au = (0, Ju.t)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: lu.autographs.show
            }));
            const Zu = lu.dungeons.getSnapshot().enabled;
            var Xu;
            (Cu || bu || Zu) && Ou !== Zu && (Ou = Zu, null === (Xu = Nu) || void 0 === Xu || Xu(), Nu = (0, Ju.t)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: VE
              },
              disabled: !Zu,
              panel: !0,
              onClick: lu.dungeons.show
            }));
            qu || (qu = (0, Tu.o)((0, du.createElement)(ml, {
              controller: lu
            }), {
              content: (0, du.createElement)(vl, {
                controller: lu
              }),
              onClose: lu.close
            }))
          },
          Tb: () => {
            var uu;
            for (const Eu of yu.values()) Eu.Tb();
            mu.Tb(vu), nu.Tb(), null === (uu = Ku) || void 0 === uu || uu.Tb(), lu.skills.Tb(), lu.quests.Tb(), lu.dailyReward.Tb(), lu.mailbox.Tb(), lu.map.Tb()
          }
        }
      }
  },
  36756: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Uu,
      d: () => su
    });
    const su = "skyblockSkills",
      Uu = "skills_test_gym"
  },
  34571: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Uu,
      c: () => Xu
    });
    const su = [{
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

    function Uu(uu) {
      let Eu, ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof uu) {
        if (!Number.isFinite(uu)) return "0";
        if (Math.abs(uu) < 100) {
          const Eu = uu < 0 ? "-" : "",
            ju = Math.abs(uu);
          return ju >= 10 ? `${Eu}${ju.toFixed(1).replace(/\.0$/,"")}` : `${Eu}${ju.toFixed(2).replace(/\.?0+$/,"")}`
        }
        Eu = BigInt(Math.floor(uu))
      } else Eu = uu;
      const Uu = Eu < 0n ? -Eu : Eu,
        Zu = Eu < 0n ? "-" : "",
        Xu = Uu.toString();
      if (Xu.length <= ju) return `${Zu}${Xu}`;
      const lu = 3 * Math.floor((Xu.length - 1) / 3);
      if (lu < 3) return `${Zu}${Xu}`;
      if (lu > 3 * su.length) {
        const uu = Xu[0],
          Eu = Xu.slice(1, 3).replace(/0+$/, "");
        return `${Zu}${Eu?`${uu}.${Eu}`:uu}e${Xu.length-1}`
      }
      const {
        threshold: qu,
        suffix: fu
      } = su[su.length - lu / 3], Cu = Uu / qu, bu = Number(1000n * (Uu % qu) / qu), cu = Number(Cu) + bu / 1e3;
      let Nu;
      return Nu = cu >= 100 ? Math.floor(cu).toString() : cu >= 10 ? cu.toFixed(1).replace(/\.0$/, "") : cu.toFixed(2).replace(/\.?0+$/, ""), `${Zu}${Nu}${fu}`
    }
    const Zu = su.map((uu => {
      let {
        threshold: Eu,
        suffix: ju
      } = uu;
      return {
        threshold: Number(Eu),
        suffix: ju
      }
    })).filter((uu => {
      let {
        threshold: Eu
      } = uu;
      return Number.isFinite(Eu)
    }));

    function Xu(uu) {
      const Eu = Math.abs(uu),
        ju = uu < 0 ? "-" : "";
      for (const {
          threshold: su,
          suffix: Uu
        }
        of Zu)
        if (Eu >= su) {
          const uu = Eu / su;
          if (uu >= 1e3) return `${ju}${Eu.toExponential(2).replace("e+","e")}`;
          let Zu;
          return Zu = uu >= 100 ? Math.floor(uu).toString() : uu >= 10 ? uu.toFixed(1).replace(/\.0$/, "") : uu.toFixed(2).replace(/\.?0+$/, ""), `${ju}${Zu}${Uu}`
        } return `${ju}${Eu}`
    }
  },
  38889: (uu, Eu, ju) => {
    var su = {
      "./combat_1.png": 38897,
      "./dungeon_crumbling_crypt.png": 38906,
      "./dungeon_frozen_hollow.png": 38913,
      "./dungeon_wildwood_grove.png": 38918,
      "./dungeons.png": 38921,
      "./farming_1.png": 38929,
      "./fishing_1.png": 38938,
      "./hub.png": 38946,
      "./island.png": 38949,
      "./mining_1.png": 38952,
      "./mining_1_bridge.png": 38958,
      "./mining_1_gallery.png": 38967,
      "./mining_1_hollow.png": 38970,
      "./mining_1_village.png": 38979
    };

    function Uu(uu) {
      var Eu = Zu(uu);
      return ju(Eu)
    }

    function Zu(uu) {
      if (!ju.o(su, uu)) {
        var Eu = new Error("Cannot find module '" + uu + "'");
        throw Eu.code = "MODULE_NOT_FOUND", Eu
      }
      return su[uu]
    }
    Uu.keys = function() {
      return Object.keys(su)
    }, Uu.resolve = Zu, uu.exports = Uu, Uu.id = 38889
  },
  38897: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  38906: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  38913: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  38918: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  38921: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  38929: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/farming_1.88c6a10630aed3ef8195.png"
  },
  38938: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  38946: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/hub.2531ead8f8a327f34b1c.png"
  },
  38949: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/island.205bb9973a65f87b60a3.png"
  },
  38952: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/mining_1.98c7a7e3424532a89b98.png"
  },
  38958: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/mining_1_bridge.65d4e676030492359993.png"
  },
  38967: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/mining_1_gallery.f9f2baffc0a921cd9ffe.png"
  },
  38970: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  38979: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/mining_1_village.855cb5fdab046ca65e04.png"
  },
  18595: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  20652: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  23038: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  24609: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  26271: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  26292: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  38864: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYUlEQVR4nGNgIBP8R8NYwX+GDVNRMQOm4v8MC9qxYwZUxf//b+T4//8A+///51khGMTeyIGp8Nz0gv8MDoFgGsbeUB2BXeHESHcUjFNhR4Dj/zp3OzAGsbEphHgIOyYNAACzzGY5JF2GbAAAAABJRU5ErkJggg=="
  },
  38873: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);