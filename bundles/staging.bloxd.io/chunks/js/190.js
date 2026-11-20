export const id = 190;
export const ids = [49, 190];
export const modules = {
  37946: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Mb,
      g: () => Tb
    });
    const Ab = new WeakMap;

    function Mb(bb, ab) {
      return Ab.set(bb, ab), bb
    }

    function Tb(bb) {
      var ab;
      return null !== (ab = Ab.get(bb)) && void 0 !== ab ? ab : null
    }
  },
  37865: (bb, ab, Ub) => {
    function Ab(bb, ab, Ub) {
      var Ab;
      const {
        width: Mb,
        height: Tb
      } = Ub, Eb = null !== (Ab = bb.text) && void 0 !== Ab ? Ab : bb, Yb = (Eb.x / 100 - .5) * Mb, Bb = (Eb.y / 100 - .5) * Tb, eb = Mb / 2 - ab.x;
      if (null !== bb.text && Math.abs(Yb) <= eb && Bb >= ab.top - Tb / 2 && Bb <= Tb / 2 - ab.bottom) return {
        x: Eb.x,
        y: Eb.y
      };
      const vb = Math.min(0 === Yb ? 1 / 0 : eb / Math.abs(Yb), Bb > 0 ? (Tb / 2 - ab.bottom) / Bb : Bb < 0 ? (ab.top - Tb / 2) / Bb : 1 / 0);
      return !Number.isFinite(vb) || vb < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + Yb * vb / Mb * 100,
        y: 50 + Bb * vb / Tb * 100
      }
    }
    Ub.d(ab, {
      b: () => Ab
    })
  },
  37875: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Eb
    });
    const Ab = 4,
      Mb = 12e3,
      Tb = 1e3;
    class Eb {
      constructor() {
        let {
          limit: bb = Ab,
          windowMs: ab = Mb,
          spacingMs: Ub = Tb,
          now: Eb = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = bb, this.windowMs = ab, this.spacingMs = Ub, this.now = Eb
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
          ab = this.lastSentAt + this.spacingMs,
          Ub = Math.min(ab > bb ? ab : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        Ub !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, Ub - bb)))
      }
      notify() {
        for (const bb of this.listeners) bb()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  37856: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Ab
    });
    class Ab {
      constructor(bb, ab, Ub) {
        this.IR = bb, this.beforeOpen = ab, this.afterClose = Ub, this.open = !1, this.cX = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.cX && (this.open = !0, this.beforeOpen(this), this.emit())
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
        this.open = !1, this.emit(), this.cX = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.cX || (this.snapshot = this.buildSnapshot(), this.IR(this.snapshot))
      }
    }
  },
  37953: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      SkyblockEntityFacing: () => Yb,
      needsSkyblockEntityFacing: () => Eb
    });
    var Ab = Ub(583),
      Mb = Ub(3959),
      Tb = Ub(37955);

    function Eb(bb, ab) {
      if (bb.metaInfo === Ab.b || "Iron Guardian" === bb.type || "Gold Guardian" === bb.type) return !0;
      if ("Pig" === bb.type) return "sitting" === bb.pose;
      if ("Person" !== bb.meshKind || void 0 === bb.meshOpts) return !1;
      let Ub = null === ab || void 0 === ab ? void 0 : ab.get(bb.meshOpts);
      if (void 0 === Ub) {
        var Tb, Eb;
        const Ab = (0, Mb.h)(bb);
        Ub = !1, "pig_napoleon" === (null === Ab || void 0 === Ab || null === (Tb = Ab.opts.textures) || void 0 === Tb ? void 0 : Tb.head) ? Ub = !0 : "npc_pig_head" === (null === Ab || void 0 === Ab || null === (Eb = Ab.opts.textures) || void 0 === Eb ? void 0 : Eb.head) && (Ub = "sitting" === Ab.opts.pose || "sitting"), ab && (ab.size >= 256 && ab.clear(), ab.set(bb.meshOpts, Ub))
      }
      return "sitting" === Ub ? "sitting" === bb.pose : Ub
    }(0, Tb.h)("skyblock", ((bb, ab) => {
      ab.setFacingTolerance(Eb(bb) ? 0 : null)
    }));
    class Yb {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = bb, this.alsoVisit = ab, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = bb => {
          var ab;
          const Ub = this.api.getEntityInfo(bb);
          Ub && (Eb(Ub, this.meshFacingCache) && (this.api.setFacingTolerance(bb, 0), this.nextFacing.add(bb)), null === (ab = this.alsoVisit) || void 0 === ab || ab.call(this, bb, Ub))
        }
      }
      qL() {
        const {
          api: bb
        } = this, ab = this.nextFacing;
        bb.forEachEntity(this.visit);
        for (const Ub of this.facing) ab.has(Ub) || bb.setFacingTolerance(Ub, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = ab
      }
      dispose() {
        for (const bb of this.facing) this.api.setFacingTolerance(bb, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  37852: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      default: () => EB
    });
    const Ab = "island";
    var Mb = Ub(325);
    const Tb = (0, Mb.sb)([0, 0, -1]),
      Eb = [{
        name: "S",
        bearing: (0, Mb.sb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, Mb.sb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: Tb
      }, {
        name: "W",
        bearing: (0, Mb.sb)([1, 0, 0])
      }];

    function Yb(bb, ab, Ub) {
      return [100 * (Ub.mapMaxX - bb) / (Ub.mapMaxX - Ub.mapMinX), 100 * (ab - Ub.mapMinZ) / (Ub.mapMaxZ - Ub.mapMinZ)]
    }

    function Bb(bb, ab, Ub) {
      const Mb = "local" === ab,
        Tb = bb.background,
        Eb = ab => Tb ? Yb(ab[0] - bb.mapOrigin[0], ab[2] - bb.mapOrigin[2], Tb.bounds) : [50, 50],
        Bb = (bb.insideDungeon ? [] : bb.landmarks).map((bb => {
          var ab, Ab;
          return {
            id: bb.id,
            name: Ub(bb.visited && bb.nameKey ? null !== (ab = bb.mapLabelKey) && void 0 !== ab ? ab : bb.nameKey : "skyblockGame:mapUnknown"),
            icon: bb.visited && null !== (Ab = bb.icon) && void 0 !== Ab ? Ab : "unknown",
            visited: bb.visited,
            current: !1,
            position: Eb(bb.position),
            travelKind: "landmark",
            travelId: bb.id
          }
        })),
        vb = bb.zones.map((ab => {
          var Ab;
          return {
            id: ab.id,
            name: Ub(ab.visited && ab.nameKey ? ab.nameKey : "skyblockGame:mapUnknown"),
            icon: ab.visited && null !== (Ab = ab.icon) && void 0 !== Ab ? Ab : "unknown",
            visited: ab.visited,
            current: ab.id === bb.zoneId,
            position: ab.position,
            thumbnail: ab.visited ? ab.id : void 0,
            travelKind: "zone",
            travelId: ab.id
          }
        })),
        Lb = bb.insideDungeon || !Tb ? [] : bb.portals.map((bb => {
          var ab;
          return {
            id: bb.id,
            name: Ub(null !== (ab = bb.nameKey) && void 0 !== ab ? ab : "skyblockGame:mapUnknown"),
            icon: bb.visited ? "dungeons" === bb.destination ? "portal_orange" : "portal" : "unknown",
            visited: bb.visited,
            current: !1,
            position: Eb(bb.position),
            colour: bb.colour,
            travelKind: "zone",
            travelId: bb.destination
          }
        })),
        Pb = Mb ? Bb : vb,
        Xb = Pb.filter((bb => bb.visited)).length,
        jb = Tb ? (Tb.bounds.mapMaxX - Tb.bounds.mapMinX) / (Tb.bounds.mapMaxZ - Tb.bounds.mapMinZ) : 2,
        Rb = Tb ? JSON.stringify([Tb.bounds, bb.mapOrigin]) : "";
      return {
        local: Mb,
        points: Pb,
        portals: Mb ? Lb : [],
        progress: Pb.length ? Ub("skyblockGame:mapDiscovered", {
          current: String(Xb),
          total: String(Pb.length)
        }) : null,
        percent: Pb.length ? 100 * Xb / Pb.length : 0,
        canTravel: [...Pb, ...Mb ? Lb : []].some((bb => bb.visited && !bb.current)),
        noLandmarks: Mb && !bb.insideDungeon && 0 === Bb.length,
        background: Tb ? {
          imageKey: Tb.imageKey,
          fallbackImageKey: bb.zoneId,
          geometryKey: Rb,
          label: Ub(Tb.labelKey),
          colour: Tb.backgroundColour,
          ratio: jb
        } : null,
        connections: eb(bb.zones),
        minimap: Tb ? {
          imageKey: Tb.imageKey,
          fallbackImageKey: bb.zoneId,
          geometryKey: Rb,
          label: Ub(Tb.labelKey),
          colour: Tb.backgroundColour,
          caption: Ub(bb.zoneId === Ab ? "skyblockGame:zoneIsland" : Tb.labelKey),
          width: (Tb.bounds.mapMaxX - Tb.bounds.mapMinX) / Tb.minimapSpan * 100 + "%",
          height: (Tb.bounds.mapMaxZ - Tb.bounds.mapMinZ) / Tb.minimapSpan * 100 + "%",
          markers: [...Bb, ...Lb]
        } : null
      }
    }

    function eb(bb) {
      const ab = new Set;
      return bb.flatMap((Ub => Ub.connections.flatMap((Ab => {
        const Mb = bb.find((bb => bb.id === Ab)),
          Tb = [Ub.id, Ab].sort().join("|");
        return !Mb || ab.has(Tb) ? [] : (ab.add(Tb), [{
          id: `${Ub.id}-${Ab}`,
          start: Ub.position,
          end: Mb.position,
          explored: Ub.visited && Mb.visited
        }])
      }))))
    }
    var vb = Ub(37856);
    class Lb extends vb.d {}
    const Pb = "skyblockMapView";
    class Xb extends Lb {
      constructor(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(bb, Ab, Mb), this.requestTravel = ab, this.translate = Ub, this.now = Tb, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
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
        }, this.travel = (bb, ab) => {
          if (!this.map || this.pending || this.cX) return;
          const Ub = ("zone" === bb ? this.map.zones : this.map.landmarks).find((bb => bb.id === ab));
          if (Ub) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in Ub && !Ub.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (Ub.visited)
              if ("zone" === bb && ab === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const Ub = ++this.nextRequestId;
                this.pending = {
                  requestId: Ub,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: bb,
                  id: ab,
                  requestId: Ub
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
      aj(bb) {
        var ab;
        if (!this.cX)
          if ("entities" !== bb.kind)
            if ("open" !== bb.kind) {
              var Ub, Ab;
              if ("snapshot" === bb.kind)(null === (Ub = bb.snapshot) || void 0 === Ub ? void 0 : Ub.zoneId) !== (null === (Ab = this.map) || void 0 === Ab ? void 0 : Ab.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = bb.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === bb.kind) {
                var Mb;
                bb.requestId === (null === (Mb = this.pending) || void 0 === Mb ? void 0 : Mb.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (bb.requestId === (null === (ab = this.pending) || void 0 === ab ? void 0 : ab.requestId)) {
                var Tb;
                this.pending = null, this.feedbackKey = null !== (Tb = bb.errorKey) && void 0 !== Tb ? Tb : "", null === bb.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = bb.entities
      }
      qL() {
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
          presentation: this.map ? Bb(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const jb = 67.5 * Math.PI / 180;

    function Rb(bb, ab) {
      const Ub = Math.abs(bb);
      if (Ub > jb || ab.trackHalfWidth <= 0) return null;
      const Ab = ab.trackHalfWidth,
        Mb = ab.screenHalfWidth / (ab.tanHalfFovX * Math.max(.5, Math.cos(ab.pitch))),
        Tb = Math.min(Math.atan(.6 * Ab / Mb), .75 * jb),
        Eb = Mb * Math.tan(Tb);
      let Yb;
      if (Ub <= Tb) Yb = Mb * Math.tan(Ub);
      else {
        const bb = jb - Tb,
          ab = Math.max(0, Mb * bb / (Math.cos(Tb) ** 2 * (Ab - Eb)) - 1),
          Bb = (Ub - Tb) / bb;
        Yb = Eb + (Ab - Eb) * (1 + ab) * Bb / (1 + ab * Bb)
      }
      return 50 + Math.sign(bb) * Yb * 50 / Ab
    }
    class kb {
      constructor(bb, ab) {
        this.map = bb, this.visited = ab, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = ab ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const bb = this.map.getSnapshot().map;
        return !bb || bb.insideDungeon ? [] : bb.landmarks.filter((bb => bb.visited === this.visited)).map((bb => {
          var ab, Ub;
          return {
            id: `landmark:${bb.id}`,
            position: bb.position,
            icon: null !== (ab = bb.icon) && void 0 !== ab ? ab : "unknown",
            nameKey: null !== (Ub = bb.nameKey) && void 0 !== Ub ? Ub : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class yb {
      constructor(bb, ab, Ub, Ab) {
        this.map = bb, this.kind = ab, this.position = Ub, this.alive = Ab, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = ab, this.range = "enemy" === ab ? 48 : 64, this.limit = 12
      }
      eZ(bb) {
        if ("enemy" !== this.kind || this.alive(bb.YT)) return this.position(bb.YT)
      }
      getPoints() {
        const bb = [];
        for (const Ab of this.map.getEntities()) {
          if (Ab.kind !== this.kind || "enemy" === this.kind && !this.alive(Ab.compassEntityId)) continue;
          const Mb = this.position(Ab.compassEntityId);
          var ab, Ub;
          if (Mb) bb.push({
            id: `${this.kind}:${Ab.compassEntityId}`,
            YT: Ab.compassEntityId,
            kind: this.kind,
            icon: null !== (ab = Ab.icon) && void 0 !== ab ? ab : Ab.npcSkin ? `npc_${Ab.npcSkin}` : this.kind,
            displayName: Ab.displayName,
            position: Mb,
            nameKey: null !== (Ub = Ab.nameKey) && void 0 !== Ub ? Ub : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return bb
      }
    }
    class Zb {
      constructor(bb) {
        this.map = bb, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const bb = this.map.getSnapshot().map;
        return !bb || bb.insideDungeon ? [] : bb.portals.map((bb => {
          var ab;
          return {
            id: "portal:" + bb.id,
            kind: "portal",
            position: bb.position,
            nameKey: null !== (ab = bb.nameKey) && void 0 !== ab ? ab : "skyblockGame:compassUnvisitedZone",
            icon: bb.visited ? "dungeons" === bb.destination ? "portal_orange" : "portal" : "unknown",
            colour: bb.colour
          }
        }))
      }
    }
    class Db {
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

    function zb(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.position;
      const Tb = Ab[0] - ab[0],
        Eb = Ab[2] - ab[2];
      return {
        ...bb,
        position: Ab,
        offset: Mb.d.computeShortestRotation(Ub, (0, Mb.sb)([Tb, 0, Eb])),
        distance: Math.hypot(Tb, Ab[1] - ab[1], Eb)
      }
    }
    let xb;

    function ib(bb, ab) {
      var Ub;
      return (null === (Ub = xb) || void 0 === Ub ? void 0 : Ub.locale) !== ab && (xb = {
        locale: ab,
        near: new Intl.NumberFormat(ab, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(ab, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (bb < 10 ? xb.near : xb.far).format(bb)
    }
    class fb {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(bb) {
        return this.providers.set(bb.id, bb), this.refreshAt = 0, () => {
          this.providers.get(bb.id) === bb && (this.providers.delete(bb.id), this.refreshAt = 0)
        }
      }
      frame(bb, ab, Ub) {
        if (Ub >= this.refreshAt) {
          this.refreshAt = Ub + 200, this.candidates = [];
          for (const ab of this.providers.values()) {
            if (!ab.enabled) continue;
            const Ub = ab.getPoints().map((ab => {
              const Ub = ab.position;
              return {
                point: ab,
                distance: Math.hypot(Ub[0] - bb[0], Ub[1] - bb[1], Ub[2] - bb[2])
              }
            })).filter((bb => bb.distance <= ab.range)).sort(((bb, ab) => bb.distance - ab.distance)).slice(0, ab.limit);
            for (const {
                point: bb
              }
              of Ub) this.candidates.push({
              provider: ab,
              point: bb
            })
          }
        }
        const Ab = [];
        for (const {
            point: Mb,
            provider: Tb
          }
          of this.candidates) {
          if (!Tb.enabled) continue;
          const Ub = Tb.eZ ? Tb.eZ(Mb) : Mb.position;
          if (Ub) {
            const Tb = zb(Mb, bb, ab, Ub);
            Math.abs(Tb.offset) <= jb && Ab.push(Tb)
          }
        }
        return Ab
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var mb = Ub(36023),
      pb = Ub(52);
    const Nb = [{
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
      Wb = Nb.length;

    function Hb(bb) {
      return bb >= Wb ? 1 : bb + 1
    }
    const Ib = "skyblockQuests",
      db = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      Fb = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function hb(bb) {
      let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const Ub = Math.max(0, Math.floor(bb)),
        Ab = Math.floor(Ub % 1e3 / 100),
        Mb = Math.floor(Ub / 1e3),
        Tb = Mb % 60,
        Eb = Math.floor(Mb / 60),
        Yb = Eb % 60,
        Bb = Math.floor(Eb / 60),
        eb = bb => bb < 10 ? `0${bb}` : String(bb),
        vb = ab ? `.${Ab}` : "";
      return Bb > 0 ? `${Bb}:${eb(Yb)}:${eb(Tb)}${vb}` : `${Yb}:${eb(Tb)}${vb}`
    }
    const Gb = "devquests",
      Qb = "none",
      qb = {
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
      ub = "Compressed Messy Stone",
      rb = {
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
      Kb = ["Stone", "Diorite", "Andesite", "Granite"],
      ob = new Set(Kb),
      lb = (Object.keys(rb), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const tb = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function wb(bb, ab) {
      const Ub = Math.floor(5 * bb / (2 * ab + 1));
      return Math.min(4, Math.max(0, Ub))
    }
    var sb = Ub(1189);
    var gb = Ub(35822);
    var Cb = Ub(36017),
      Vb = Ub(22),
      Ob = Ub(8441);
    const cb = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      Jb = 1e3;

    function nb(bb) {
      return Math.max(0, bb)
    }

    function Sb(bb) {
      return 1 + .01 * nb(bb)
    }

    function ba(bb) {
      return 1 + .005 * nb(bb)
    }

    function aa(bb) {
      return 1 + .005 * nb(bb)
    }

    function Ua(bb) {
      return .01 * nb(bb)
    }

    function Aa(bb) {
      return 150 / (150 + nb(bb))
    }

    function Ma(bb) {
      return 1 + .002 * nb(bb)
    }

    function Ta(bb) {
      return Math.round(10 * bb) / 10
    }

    function Ea(bb, ab) {
      switch (bb) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: Ta(100 * (ba(ab) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: Ta(100 * (Sb(ab) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: Ta(100 * (aa(ab) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: Ta(100 * Ua(ab))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: Ta(100 * (1 - Aa(ab)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: Ta(100 * (Ma(ab) - 1))
          }
      }
    }

    function Ya(bb) {
      return "farming" === bb ? 200 : 100
    }

    function Ba(bb, ab) {
      if (!Number.isSafeInteger(bb) || bb < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const Ub = Ya(ab),
        Ab = bb => function(bb, ab) {
          return Ya(bb) * ab * (ab + 1) / 2
        }(ab, bb);
      let Mb = Math.min(Jb, Math.floor((Math.sqrt(8 * bb / Ub + 1) - 1) / 2));
      return Mb < Jb && Ab(Mb + 1) <= bb ? Mb++ : Ab(Mb) > bb && Mb--, {
        totalXp: bb,
        level: Mb,
        xpIntoLevel: bb - Ab(Mb),
        xpForNextLevel: Mb === Jb ? null : Ub * (Mb + 1)
      }
    }
    const ea = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function va(bb) {
      return ea.has(bb)
    }
    const La = new Set(Mb.hb);

    function Pa(bb) {
      return La.has(bb)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const Xa = {
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
      ja = {
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
      Ra = {
        ...ja,
        ...Object.fromEntries(Object.entries(lb).map((bb => {
          let [ab, Ub] = bb;
          return [ab, 9 * ja[Ub]]
        })))
      },
      ka = {
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
      ya = {
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
    const Za = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      Da = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function za(bb) {
      return `rgb(${Da[bb].join(", ")})`
    }

    function xa(bb, ab, Ub) {
      if (!Ub) return bb(ab);
      const Ab = {};
      for (const [Mb, Tb] of Object.entries(Ub)) Ab[Mb] = "string" === typeof Tb ? Tb : bb(Tb.translationKey);
      return bb(ab, Ab)
    }
    class ia {
      constructor(bb, ab) {
        this.now = bb, this.getJournal = ab, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.PY = !1, this.onShown = () => {}
      }
      enqueue(bb) {
        const ab = fa(bb);
        if (ab) this.pending.push(bb);
        else {
          const ab = this.pending.findIndex(fa);
          this.pending.splice(-1 === ab ? this.pending.length : ab, 0, bb)
        }
        return (null === this.current || null !== this.followUp && !ab) && (this.advance(), !0)
      }
      setHeld(bb) {
        return this.PY = bb, !bb && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      qL() {
        const bb = this.getJournal(),
          ab = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === ab ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === ab || void 0 === ab ? void 0 : ab.kind) && bb && bb.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === ab || void 0 === ab ? void 0 : ab.kind)) {
          const bb = this.findFollowUp(this.current);
          if ("step" !== (null === bb || void 0 === bb ? void 0 : bb.kind) || bb.questId !== ab.questId || bb.step.id !== ab.step.id) return this.showFollowUp(bb, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(bb, ab, Ub) {
        var Ab, Mb, Tb, Eb;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, bb, Ub);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, bb);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, bb, ab);
        const {
          questCompletionKind: Yb,
          questCompletionNameKey: Bb
        } = this.current, eb = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, vb = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, Lb = "step" === (null === (Ab = this.followUp) || void 0 === Ab ? void 0 : Ab.kind) ? this.followUp : null, Pb = "explore" === (null === (Mb = this.followUp) || void 0 === Mb ? void 0 : Mb.kind);
        let Xb;
        return Xb = Pb ? bb("skyblockGame:questExploreTitle") : null !== Lb ? "quest" === Yb ? bb("skyblockGame:questNextQuestTitle", {
          quest: bb(Lb.questNameKey)
        }) : bb("skyblockGame:questNextStepTitle") : bb("started" === Yb ? "skyblockGame:questStartedTitle" : "quest" === Yb ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? Yb : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: Xb,
          name: Pb ? ab("skyblockGame:questExploreName") : null !== Lb ? xa(ab, Lb.step.nameKey, Lb.step.nameParams) : xa(ab, Bb, eb),
          description: Pb ? ab("skyblockGame:questExploreDescription") : null === Lb ? null : xa(ab, Lb.step.descriptionKey, Lb.step.descriptionParams),
          reward: null === this.followUp && vb > 0 ? ab("skyblockGame:questCoinRewardSuffix", {
            amount: vb.toLocaleString(Ub)
          }) : null,
          iconItem: null !== (Tb = null === Lb || void 0 === Lb ? void 0 : Lb.step.questIconItem) && void 0 !== Tb ? Tb : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== Lb && (null === (Eb = this.getJournal()) || void 0 === Eb ? void 0 : Eb.trackedQuestId) === Lb.questId ? Lb.step.nameKey : null
        }
      }
      getSkillLevelView(bb, ab, Ub) {
        let {
          skill: Ab,
          beforeLevel: Mb,
          level: Tb
        } = bb;
        const Eb = Ea(Ab, Mb),
          Yb = Ea(Ab, Tb);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: ab(`skyblockGame:${Ab}`),
          name: ab("skyblockGame:skillLevelUp", {
            to: Tb.toLocaleString(Ub)
          }),
          description: Eb.percent === Yb.percent ? null : ab(`${Yb.translationKey}Change`, {
            before: Eb.percent.toLocaleString(Ub),
            after: Yb.percent.toLocaleString(Ub)
          }),
          reward: null,
          iconItem: Za[Ab],
          accent: za(Ab),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(bb, ab) {
        let {
          landmarkNameKey: Ub
        } = bb;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: ab("skyblockGame:landmarkDiscovered"),
          name: ab(Ub),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(bb, ab, Ub) {
        let {
          titleKey: Ab,
          textKey: Mb,
          params: Tb = {},
          nameKeys: Eb = {},
          iconItem: Yb = null
        } = bb;
        const Bb = {
          ...Tb
        };
        for (const [eb, vb] of Object.entries(Eb)) Bb[eb] = ab(vb);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: ab(Ab),
          name: Ub(Mb, Bb),
          description: null,
          reward: null,
          iconItem: Yb,
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
      showFollowUp(bb, ab) {
        null === bb || this.PY ? this.advance() : (this.followUp = bb, this.token++, this.shownAt = this.now(), this.expiresAt = null !== ab && void 0 !== ab ? ab : this.shownAt + this.durationMs())
      }
      findFollowUp(bb) {
        var ab;
        const Ub = this.getJournal();
        if (!Ub || this.hasPendingQuestPopup() || fa(bb)) return null;
        const Ab = "started" === bb.questCompletionKind ? Ub.active.some((ab => ab.id === bb.questCompletionQuestId)) : "quest" === bb.questCompletionKind ? Ub.completed.some((ab => ab.id === bb.questCompletionQuestId)) : [...Ub.active, ...Ub.completed].some((ab => ab.id === bb.questCompletionQuestId && ab.subquests.some((ab => ab.id === bb.questCompletionStepId && "completed" === ab.status))));
        if (!Ab) return null;
        if ("quest" === bb.questCompletionKind && 0 === Ub.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const Mb = Ub.active.find((bb => bb.id === Ub.trackedQuestId)),
          Tb = null !== (ab = null === Mb || void 0 === Mb ? void 0 : Mb.subquests.find((bb => "ready" === bb.status))) && void 0 !== ab ? ab : null === Mb || void 0 === Mb ? void 0 : Mb.subquests.find((bb => "active" === bb.status));
        return Tb ? {
          kind: "step",
          questId: Mb.id,
          questNameKey: Mb.nameKey,
          step: Tb
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((bb => !fa(bb)))
      }
      advance() {
        var bb;
        this.current = this.PY ? null : null !== (bb = this.pending.shift()) && void 0 !== bb ? bb : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function fa(bb) {
      return ma(bb.questCompletionKind)
    }

    function ma(bb) {
      return "skillLevel" === bb || "landmark" === bb || "npcNote" === bb
    }
    var pa = Ub(37865);
    const Na = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      Wa = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      Ha = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      Ia = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      da = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var Fa = Ub(37873);
    const ha = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      Ga = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const Qa = Ub.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const qa = Ub.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      ua = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var ra = Ub(18102),
      Ka = Ub(20197),
      oa = Ub(22580),
      la = Ub(24136),
      ta = Ub(25798);
    const wa = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: ra,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: Ka,
      cow: da,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: Ub(25812),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: Na,
      fishing_1: Na,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: Wa,
      guardian_iron: Ha,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: oa,
      mines: la,
      mining_1: la,
      npc: Ia,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: da,
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
      npc_gold_guardian: Wa,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: Ha,
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
      npc_tentacle_guy: Fa,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: ha,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: Qa,
      quest_talk: qa,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: ua,
      watermelon: ta
    };

    function sa(bb, ab) {
      const Ub = document.createElement("img");
      return Ub.className = ab, Ub.src = bb, Ub.alt = "", Ub.draggable = !1, Ub
    }

    function ga(bb) {
      var ab;
      const Ub = null !== (ab = wa[bb]) && void 0 !== ab ? ab : bb.startsWith("npc_") ? Ia : ua;
      if ("portal" !== bb) return sa(Ub, "SkyblockMapIcon");
      const Ab = document.createElement("span");
      Ab.className = "SkyblockMapIcon Portal";
      const Mb = document.createElement("span");
      return Mb.className = "SkyblockMapIconTint", Mb.style.maskImage = Mb.style.webkitMaskImage = `url("${Ga}")`, Ab.append(sa(Ub, "SkyblockMapIconLayer"), Mb, sa(Ga, "SkyblockMapIconLayer SkyblockMapIconShade")), Ab
    }
    var Ca = Ub(37843),
      Va = Ub(3968);
    const Oa = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function ca(bb) {
      const ab = new Va.g(bb);
      return {
        radius: 45,
        squareness: 3,
        wobbles: Oa.map((bb => {
          let {
            lobes: Ub,
            amount: Ab
          } = bb;
          return {
            lobes: Ub[Math.floor(ab.next() * Ub.length)],
            amount: Ab[0] + ab.next() * (Ab[1] - Ab[0]),
            phase: 2 * ab.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function Ja(bb) {
      let {
        radius: ab,
        squareness: Ub,
        wobbles: Ab,
        samples: Mb
      } = bb;
      const Tb = [];
      for (let Eb = 0; Eb < Mb; Eb++) {
        const bb = 2 * Math.PI * Eb / Mb,
          Yb = Math.cos(bb),
          Bb = Math.sin(bb),
          eb = ab * (Math.abs(Yb) ** Ub + Math.abs(Bb) ** Ub) ** (-1 / Ub) * Ab.reduce(((ab, Ub) => {
            let {
              lobes: Ab,
              amount: Mb,
              phase: Tb
            } = Ub;
            return ab + Mb * Math.sin(Ab * bb + Tb)
          }), 1);
        Tb.push(`${(50+eb*Yb).toFixed(2)} ${(50+eb*Bb).toFixed(2)}`)
      }
      return `M${Tb.join("L")}Z`
    }
    const na = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class Sa {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.cX = !1, this.mountCompass = bb => {
          var ab;
          if (null === (ab = this.stopLayout) || void 0 === ab || ab.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !bb || this.cX) return;
          const Ub = bb.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: bb,
            track: Ub,
            label: bb.querySelector(".SkyblockCompassLabel")
          }, Ub.replaceChildren();
          for (let Mb = 0; Mb < 4; Mb++) {
            const bb = document.createElement("span");
            bb.className = "SkyblockCompassCardinal", Ub.appendChild(bb), this.cardinals.push(bb)
          }
          const Ab = (0, Ca.e)(na, [bb], this.layout);
          this.stopLayout = () => {
            Ab(), Ub.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = bb => {
          this.terrain = this.cX ? null : bb, this.render(this.frame)
        }, this.mountMinimapSearchArea = bb => {
          this.mountSearchArea("minimap", bb)
        }, this.mountMapSearchArea = bb => {
          this.mountSearchArea("map", bb)
        }, this.mountPlayer = bb => {
          this.player = this.cX ? null : bb, this.render(this.frame)
        }, this.mountWaypoint = bb => {
          var ab, Ub;
          if (null === (ab = this.stopWaypoint) || void 0 === ab || ab.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !bb || this.cX) return;
          const Ab = bb.querySelector(".SkyblockQuestWaypointMarker");
          Ab.replaceChildren(ga("quest")), this.markerIcon = "quest", this.waypoint = {
            root: bb,
            marker: Ab,
            clip: bb.querySelector(".SkyblockQuestWaypointTextClip"),
            text: bb.querySelector(".SkyblockQuestWaypointText"),
            label: bb.querySelector(".SkyblockQuestWaypointLabel"),
            distance: bb.querySelector(".SkyblockQuestWaypointDistance"),
            hint: bb.querySelector(".SkyblockQuestWaypointHint")
          };
          const Mb = () => {
              this.waypointMarkerSize = {
                width: Ab.offsetWidth,
                height: Ab.offsetHeight
              }, this.waypointInset = {
                x: Ab.offsetWidth / 2 + 8,
                top: Ab.offsetHeight + 8,
                bottom: 8
              }
            },
            Tb = new ResizeObserver((() => {
              Mb(), this.render(this.frame)
            }));
          Tb.observe(Ab, {
            box: "border-box"
          });
          const Eb = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", Eb), null === (Ub = window.visualViewport) || void 0 === Ub || Ub.addEventListener("resize", Eb), this.stopWaypoint = () => {
            var bb;
            Tb.disconnect(), window.removeEventListener("resize", Eb), null === (bb = window.visualViewport) || void 0 === bb || bb.removeEventListener("resize", Eb)
          }, Eb(), Mb(), this.render(this.frame)
        }, this.mountWaypointOrigin = bb => {
          var ab;
          if (null === (ab = this.stopWaypointOrigin) || void 0 === ab || ab.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = bb && !this.cX ? Number(bb.dataset.notificationToken) : null, bb && !this.cX && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const ab = {
              nameKey: bb.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = ab;
            const Ub = () => {
                const Ub = bb.getBoundingClientRect();
                ab.x = (Ub.left + Ub.width / 2) / window.innerWidth * 100, ab.y = (Ub.top + Ub.height / 2) / window.innerHeight * 100
              },
              Ab = new ResizeObserver(Ub);
            Ab.observe(bb.parentElement), Ab.observe(bb), window.addEventListener("resize", Ub), this.stopWaypointOrigin = () => {
              Ab.disconnect(), window.removeEventListener("resize", Ub)
            }, Ub()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const bb = this.compass.root,
            ab = getComputedStyle(bb),
            Ub = getComputedStyle(document.documentElement),
            Ab = parseFloat(Ub.fontSize),
            Mb = parseFloat(ab.getPropertyValue("--compass-icon-size")) * Ab,
            Tb = "1" === ab.getPropertyValue("--compass-fit-top").trim(),
            Eb = Tb ? 1 : 8,
            Yb = Array.from(document.querySelectorAll(na), (bb => {
              var ab;
              return (null !== (ab = bb.querySelector(".MiddleTextTop")) && void 0 !== ab ? ab : bb).getBoundingClientRect()
            })).filter((bb => bb.width > 0 && bb.height > 0));
          let Bb = (parseFloat(Ub.getPropertyValue("--notchTop")) || 0) + Eb,
            eb = "";
          if (Tb) {
            const ab = window.innerWidth / 2,
              Ub = bb.getBoundingClientRect().height,
              Tb = [Bb, ...Yb.map((bb => Math.max(Bb, bb.bottom + Eb)))].sort(((bb, ab) => bb - ab));
            for (const bb of Tb) {
              let Tb = ab - 8;
              for (const Ab of Yb) Ab.bottom + Eb <= bb || Ab.top >= bb + Ub + Eb || (Tb = Math.min(Tb, Ab.right <= ab ? ab - Ab.right - 8 : Ab.left - ab - 8));
              const vb = 2 * Tb - Mb;
              if (vb >= 16 * Ab) {
                eb = `${vb}px`, Bb = bb;
                break
              }
            }
          }
          bb.style.maxWidth !== eb && (bb.style.maxWidth = eb);
          const vb = bb.getBoundingClientRect(),
            Lb = this.compassSize.trackHalfWidth;
          if (vb.width > 0) {
            const bb = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: bb.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * Mb / bb.width
          }
          if (!eb)
            for (const Pb of Yb) Pb.right > vb.left - 8 && Pb.left < vb.right + 8 && (Bb = Math.max(Bb, Pb.bottom + Eb));
          bb.style.top = `${Bb}px`, this.compassSize.trackHalfWidth !== Lb && this.render(this.frame)
        }
      }
      mountSearchArea(bb, ab) {
        this.searchAreas[bb] = this.cX ? null : ab, this.render(this.frame)
      }
      render(bb) {
        if (this.cX) return;
        if (this.frame = bb, this.compass && (bU(this.compass.root, !bb), bb)) {
          const ab = this.compassSize.trackHalfWidth / 50;
          bb.compass.cardinals.forEach(((bb, Ub) => {
            const Ab = this.cardinals[Ub];
            Ab.textContent !== bb.name && (Ab.textContent = bb.name), bU(Ab, bb.hidden), Ab.style.translate = bb.left * ab + "px"
          }));
          const Ub = new Set;
          bb.compass.markers.forEach(((Ab, Mb) => {
            var Tb;
            Ub.add(Ab.id);
            let Eb = this.markers.get(Ab.id);
            Eb || (Eb = document.createElement("span"), Eb.className = "SkyblockCompassMarker", this.markers.set(Ab.id, Eb), this.compass.track.appendChild(Eb)), Eb.dataset.icon !== Ab.icon && (Eb.dataset.icon = Ab.icon, Eb.replaceChildren(ga(Ab.icon))), Eb.style.color = null !== (Tb = Ab.colour) && void 0 !== Tb ? Tb : "", Eb.style.translate = Ab.left * ab + "px", Eb.style.zIndex = String(bb.compass.markers.length - Mb), Eb.title !== Ab.name && (Eb.title = Ab.name)
          }));
          for (const [bb, Ab] of this.markers) Ub.has(bb) || (Ab.remove(), this.markers.delete(bb));
          this.compass.label.textContent !== bb.compass.label && (this.compass.label.textContent = bb.compass.label)
        }
        this.terrain && (bU(this.terrain, !(null !== bb && void 0 !== bb && bb.minimap)), null !== bb && void 0 !== bb && bb.minimap && (this.terrain.style.transform = bb.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", bb.minimap.iconRotation)));
        const ab = null === bb || void 0 === bb ? void 0 : bb.searchArea;
        for (const Ub of [this.searchAreas.minimap, this.searchAreas.map])
          if (Ub && (bU(Ub, !ab), ab)) {
            if (this.searchAreaPath.seed !== ab.shapeSeed && (this.searchAreaPath = {
                seed: ab.shapeSeed,
                d: Ja(ca(ab.shapeSeed))
              }), Ub.dataset.shapeSeed !== ab.shapeSeed) {
              Ub.dataset.shapeSeed = ab.shapeSeed;
              for (const bb of Ub.querySelectorAll("path")) bb.setAttribute("d", this.searchAreaPath.d)
            }
            Ub.style.left = `${ab.left}%`, Ub.style.top = `${ab.top}%`, Ub.style.width = `${ab.width}%`, Ub.style.height = `${ab.height}%`
          } if (this.player && (bU(this.player, !(null !== bb && void 0 !== bb && bb.player) || bb.player.hidden), null !== bb && void 0 !== bb && bb.player && (this.player.style.left = `${bb.player.left}%`, this.player.style.top = `${bb.player.top}%`, this.player.style.setProperty("--map-player-rotation", bb.player.rotation))), this.waypoint) {
          const {
            root: ab,
            marker: Ub,
            clip: Ab,
            text: Mb,
            label: Tb,
            distance: Eb,
            hint: Yb
          } = this.waypoint, Bb = !(null !== bb && void 0 !== bb && bb.waypoint) || null !== bb.waypoint.popupToken && bb.waypoint.popupToken !== this.waypointOriginToken;
          bU(ab, Bb);
          let eb = 1;
          const vb = this.waypointLaunch;
          if (!Bb && vb && bb.waypoint.nameKey === vb.nameKey) {
            const bb = performance.now();
            vb.startedAt ??= bb, eb = Math.min(1, Math.max(0, (bb - vb.startedAt - 450) / 1e3)), Ub.style.opacity = String(Math.min(1, (bb - vb.startedAt) / 150)), 1 === eb && (this.waypointLaunch = null)
          } else Ub.style.opacity = "", vb && null !== vb.startedAt && (this.waypointLaunch = null);
          if (ab.classList.toggle("Launching", eb < 1), null !== bb && void 0 !== bb && bb.waypoint) {
            const ab = this.waypointInset,
              Bb = "quest_talk" === bb.waypoint.markerIcon ? function(bb, ab, Ub) {
                if (!bb.text || null === bb.blockHeight || 0 === bb.nearness) return bb;
                const Ab = bb.blockHeight / 100 * Ub.height,
                  Mb = -bb.nearness * (aU * Ab + ab.width / 2),
                  Tb = bb.nearness * (UU * Ab + ab.height / 2);
                return {
                  ...bb,
                  text: {
                    x: bb.text.x + Mb / Ub.width * 100,
                    y: bb.text.y + Tb / Ub.height * 100
                  }
                }
              }(bb.waypoint, this.waypointMarkerSize, this.viewport) : bb.waypoint,
              Lb = (0, pa.b)(Bb, ab, this.viewport),
              Pb = eb * eb * (3 - 2 * eb),
              Xb = eb < 1 ? vb.x + (Lb.x - vb.x) * Pb : Lb.x,
              jb = eb < 1 ? vb.y + (Lb.y - vb.y) * Pb : Lb.y;
            Ub.style.translate = `${Xb}vw ${jb}vh`, Ab.style.clipPath = `inset(${ab.top}px ${ab.x}px ${ab.bottom}px)`, bU(Mb, eb < 1 || !bb.waypoint.text), Mb.style.opacity = String(1 - bb.waypoint.nearness), bb.waypoint.text && (Mb.style.translate = `${bb.waypoint.text.x}vw ${bb.waypoint.text.y}vh`), Tb.textContent !== bb.waypoint.name && (Tb.textContent = bb.waypoint.name), this.markerIcon !== bb.waypoint.markerIcon && (this.markerIcon = bb.waypoint.markerIcon, Ub.replaceChildren(ga(this.markerIcon))), Eb.textContent !== bb.waypoint.distance && (Eb.textContent = bb.waypoint.distance), bU(Yb, null === bb.waypoint.hint), null !== bb.waypoint.hint && Yb.textContent !== bb.waypoint.hint && (Yb.textContent = bb.waypoint.hint)
          }
        }
      }
      dispose() {
        var bb, ab;
        this.mountWaypointOrigin(null), this.render(null), null === (bb = this.stopLayout) || void 0 === bb || bb.call(this), this.stopLayout = null, null === (ab = this.stopWaypoint) || void 0 === ab || ab.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.cX = !0
      }
    }

    function bU(bb, ab) {
      bb.hidden !== ab && (bb.hidden = ab)
    }
    const aU = .55,
      UU = .6;
    const AU = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class MU {
      constructor(bb, ab, Ub, Ab) {
        this.map = bb, this.quests = ab, this.compass = Ub, this.display = new Sa, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.cX = !1, this.snapshot = null, this.texts = new Map, this.translate = Ab
      }
      setTranslator(bb, ab) {
        this.translate = bb, this.locale = ab, this.metresFormat = new Intl.NumberFormat(ab), this.texts.clear()
      }
      translateCached(bb, ab) {
        const Ub = void 0 === ab ? bb : `${bb} ${ab}`;
        let Ab = this.texts.get(Ub);
        return void 0 === Ab && (this.texts.size >= 500 && this.texts.clear(), Ab = this.translate(bb, void 0 === ab ? void 0 : {
          distance: ab
        }), this.texts.set(Ub, Ab)), Ab
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(bb, ab, Ub) {
        if (this.cX) return;
        if (!bb) return this.snapshot = null, void this.display.render(null);
        const Ab = this.map.getSnapshot().map,
          Bb = Ub.cameraHeading,
          eb = {
            ...this.display.compassSize,
            tanHalfFovX: Ub.tanHalfFovX,
            pitch: Ub.cameraPitch
          },
          vb = [];
        if (Ab)
          for (const Mb of this.compass.frame(bb, Bb, ab)) {
            const bb = Rb(Mb.offset, eb);
            null !== bb && vb.push({
              ...Mb,
              left: bb
            })
          }
        const Lb = function(bb, ab) {
            const Ub = [],
              Ab = bb => "quest" === bb.kind ? bb.distance - 1 : bb.distance,
              Mb = [...bb].sort(((bb, ab) => Ab(bb) - Ab(ab) || bb.id.localeCompare(ab.id)));
            for (const Tb of Mb) {
              let bb = !1;
              if ("quest" !== Tb.kind)
                for (const Ab of Ub)
                  if (Math.abs(Ab.left - Tb.left) < ab) {
                    bb = !0;
                    break
                  } bb || Ub.push(Tb)
            }
            return Ub
          }(vb, this.display.compassSpacing),
          Pb = function(bb) {
            let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              Ub = null;
            for (const Ab of bb) Math.abs(Ab.offset) <= ab && (!Ub || Ab.distance < Ub.distance || Ab.distance === Ub.distance && Math.abs(Ab.offset) < Math.abs(Ub.offset)) && (Ub = Ab);
            return Ub
          }(Lb),
          Xb = bb => {
            var ab;
            return null !== (ab = bb.displayName) && void 0 !== ab ? ab : this.translateCached(bb.nameKey)
          },
          jb = {
            compass: {
              markers: Lb.map((bb => ({
                id: bb.id,
                icon: bb.icon,
                colour: bb.colour,
                name: Xb(bb),
                left: bb.left
              }))),
              cardinals: Eb.map((bb => {
                let {
                  name: ab,
                  bearing: Ub
                } = bb;
                const Ab = Rb(Mb.d.computeShortestRotation(Bb, Ub), eb);
                return {
                  name: ab,
                  left: null !== Ab && void 0 !== Ab ? Ab : 0,
                  hidden: null === Ab
                }
              })),
              label: Pb ? `${Xb(Pb)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",ib(Pb.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== Ab && void 0 !== Ab && Ab.background) {
          const ab = bb[0] - Ab.mapOrigin[0],
            Ub = bb[2] - Ab.mapOrigin[2],
            {
              rotation: Mb,
              transform: Eb
            } = function(bb, ab, Ub, Ab) {
              const [Mb, Eb] = Yb(bb, ab, Ab), Bb = Tb - Ub;
              return {
                rotation: Bb,
                transform: `rotate(${Bb}rad) translate(-${Mb}%, -${Eb}%)`
              }
            }(ab, Ub, Bb, Ab.background.bounds);
          jb.minimap = {
            transform: Eb,
            iconRotation: -Mb + "rad"
          };
          const [eb, vb] = Yb(ab, Ub, Ab.background.bounds);
          jb.player = {
            left: eb,
            top: vb,
            hidden: eb < 0 || vb < 0 || eb > 100 || vb > 100,
            rotation: -Mb + "rad"
          }
        }
        const {
          waypoint: kb
        } = this.quests.getSnapshot();
        if ("search" === (null === kb || void 0 === kb ? void 0 : kb.questMarkerIcon) && null !== Ab && void 0 !== Ab && Ab.background) {
          const {
            bounds: bb
          } = Ab.background, [ab, Ub] = Yb(kb.position[0] - Ab.mapOrigin[0], kb.position[2] - Ab.mapOrigin[2], bb);
          jb.searchArea = {
            left: ab,
            top: Ub,
            width: 6400 / (bb.mapMaxX - bb.mapMinX),
            height: 6400 / (bb.mapMaxZ - bb.mapMinZ),
            shapeSeed: kb.nameKey
          }
        }
        const yb = this.quests.getNotificationSnapshot(),
          Zb = "completion" === (null === yb || void 0 === yb ? void 0 : yb.phase) && !ma(yb.kind);
        if (kb && !Zb) {
          const ab = Math.hypot(...kb.position.map(((ab, Ub) => ab - bb[Ub]))),
            Ab = Math.round(ab),
            Mb = "talk" === kb.questMarkerIcon ? Math.min(1, Math.max(0, (10 - ab) / 5)) : 0,
            Tb = Ub.projectWorldPosToViewport(kb.position),
            Eb = Tb && Ub.projectWorldPosToViewport([kb.position[0], kb.position[1] - 1, kb.position[2]]);
          jb.waypoint = {
            ...Ub.projectWorldPosToScreenPos(kb.position),
            text: Tb,
            nearness: Mb * Mb * (3 - 2 * Mb),
            blockHeight: Tb && Eb ? Eb.y - Tb.y : null,
            name: this.translateCached(kb.nameKey),
            nameKey: kb.nameKey,
            markerIcon: kb.questMarkerIcon ? AU[kb.questMarkerIcon] : "quest",
            popupToken: (null === yb || void 0 === yb ? void 0 : yb.waypointNameKey) === kb.nameKey ? yb.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(Ab)),
            hint: "search" === kb.questMarkerIcon && Math.hypot(kb.position[0] - bb[0], kb.position[2] - bb[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = jb, this.display.render(jb)
      }
      dispose() {
        this.cX = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const TU = "skyblockSkillsView";
    class EU extends Lb {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          Ub = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb => bb,
          Ab = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          Mb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : bb => bb;
        super(bb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = ab, this.translate = Ub, this.locale = Ab, this.itemName = Mb, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
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
      setTranslator(bb, ab, Ub) {
        this.translate = bb, this.locale = ab, this.itemName = Ub, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(bb) {
        let ab = this.skillText.get(bb);
        return ab || (ab = {
          label: this.translate(`skyblockGame:${bb}`),
          description: this.translate(`skyblockGame:${bb}Description`)
        }, this.skillText.set(bb, ab)), ab
      }
      sources(bb) {
        if ("mining" === bb || "fishing" === bb) return this.buildSources(bb);
        let ab = this.sourceText.get(bb);
        return ab || (ab = this.buildSources(bb), this.sourceText.set(bb, ab)), ab
      }
      buildSources(bb) {
        const ab = this.translate;
        return "exploration" === bb ? [ab("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), ab("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === bb ? [ab("skyblockGame:logSource", {
          xp: this.number(Xa["Maple Log"])
        })] : "combat" === bb ? [ab("skyblockGame:creatureKillSource"), ab("skyblockGame:noEnvironmentalXp")] : "farming" === bb ? [ab("skyblockGame:cropSource", {
          xp: this.number(ka["Wheat|FreshlyGrown"])
        }), ab("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), ab("skyblockGame:noYoungCropXp")] : Object.entries("mining" === bb ? Ra : ya).map((bb => {
          let [Ub, Ab] = bb;
          return ab("skyblockGame:itemXpSource", {
            item: this.itemName(Ub),
            xp: this.number(Ab)
          })
        }))
      }
      number(bb) {
        return bb.toLocaleString(this.locale)
      }
      benefit(bb, ab) {
        const Ub = Ea(bb, ab);
        return this.translate(Ub.translationKey, {
          bonus: this.number(Ub.percent)
        })
      }
      aj(bb) {
        if (!this.cX) {
          if ("snapshot" === bb.kind) this.progress = bb.progress, this.pending.clear(), this.recent = null;
          else if ("award" === bb.kind && this.progress) {
            const {
              award: ab
            } = bb;
            this.progress = {
              ...this.progress,
              [ab.skill]: ab.after
            };
            for (const [bb, Ab] of this.pending) Ab.skill === ab.skill && this.pending.delete(bb);
            const Ub = ab.after.level > ab.before.level;
            this.recordGain(ab.skill, ab.amount, Ub ? ++this.nextLevelUpToken : null), Ub && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: ab.skill,
              beforeLevel: ab.before.level,
              level: ab.after.level
            })
          } else {
            if ("rejectBlock" === bb.kind) return void this.rejectBlock(bb.position);
            if ("open" === bb.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(bb, ab, Ub) {
        if (!this.progress || this.cX || Ub) return;
        const Ab = function(bb, ab) {
          const Ub = bb.split("|")[0];
          return "Air" === ab || ab === `Barkless ${bb}` ? Object.hasOwn(Xa, Ub) ? {
            skill: "foraging",
            amount: Xa[Ub]
          } : "Air" !== ab ? null : Object.hasOwn(Ra, bb) ? {
            skill: "mining",
            amount: Ra[bb]
          } : va(bb) ? {
            skill: "farming",
            amount: 10
          } : Pa(bb) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(ka, bb) ? {
            skill: "farming",
            amount: ka[bb]
          } : Object.hasOwn(rb, bb) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(ab, "Air");
        if (!Ab) return;
        const Mb = bb.join(",");
        if (this.pending.has(Mb)) return;
        const Tb = this.predictedProgress(Ab.skill).totalXp + Ab.amount;
        Number.isSafeInteger(Tb) && (this.pending.set(Mb, {
          ...Ab,
          expires: this.now() + 2e3
        }), this.recordGain(Ab.skill, 0), this.emit())
      }
      rejectBlock(bb) {
        this.pending.delete(bb.join(",")) && this.emit()
      }
      qL() {
        if (this.cX) return;
        let bb = !1;
        for (const [ab, Ub] of this.pending) Ub.expires <= this.now() && (this.pending.delete(ab), bb = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, bb = !0), bb && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(bb, ab) {
        var Ub, Ab;
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Tb = (null === (Ub = this.recent) || void 0 === Ub ? void 0 : Ub.skill) === bb && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          Eb = (null === (Ab = this.recent) || void 0 === Ab ? void 0 : Ab.skill) === bb && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: bb,
          confirmed: Tb + ab,
          expires: this.now() + 3e3,
          levelUpToken: null !== Mb && void 0 !== Mb ? Mb : Eb
        }
      }
      pendingXp(bb) {
        let ab = 0;
        for (const Ub of this.pending.values()) Ub.skill === bb && (ab += Ub.amount);
        return ab
      }
      predictedProgress(bb) {
        const ab = this.progress[bb],
          Ub = this.pendingXp(bb);
        return Ub ? Ba(ab.totalXp + Ub, bb) : ab
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var bb, ab, Ub;
        const Ab = this.progress ? cb.map((bb => {
            const ab = this.predictedProgress(bb);
            return {
              ...this.text(bb),
              icon: Za[bb],
              benefit: this.benefit(bb, ab.level),
              sources: this.sources(bb),
              id: bb,
              selected: bb === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(ab.level)
              }),
              xp: null === ab.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(ab.xpIntoLevel),
                target: this.number(ab.xpForNextLevel)
              }),
              percent: null === ab.xpForNextLevel ? 100 : Math.min(100, ab.xpIntoLevel / ab.xpForNextLevel * 100)
            }
          })) : [],
          Mb = Ab.find((bb => {
            var ab;
            return bb.id === (null === (ab = this.recent) || void 0 === ab ? void 0 : ab.skill)
          })),
          Tb = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: Ab,
          detail: null !== (bb = Ab.find((bb => bb.selected))) && void 0 !== bb ? bb : null,
          overallLevel: this.progress ? cb.reduce(((bb, ab) => bb + this.predictedProgress(ab).level), 0) : null,
          hud: Mb && Tb > 0 ? {
            skill: Mb,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(Tb)
            }),
            levelUpToken: null !== (ab = null === (Ub = this.recent) || void 0 === Ub ? void 0 : Ub.levelUpToken) && void 0 !== ab ? ab : null,
            colour: za(Mb.id)
          } : null
        }
      }
    }
    const YU = Math.max(1600, 600, 950) + 400,
      BU = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      eU = "skyblockQuestsView",
      vU = "skyblockQuestNotificationView";
    class LU extends Lb {
      constructor(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          Eb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(bb, Ab, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = ab, this.translate = Ub, this.now = Mb, this.locale = Tb, this.publishNotification = Eb, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var bb, ab;
          this.selected = null !== (bb = null === (ab = this.authoritative) || void 0 === ab ? void 0 : ab.trackedQuestId) && void 0 !== bb ? bb : null, this.show()
        }, this.select = bb => {
          this.selected = bb, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const bb = this.snapshot.detail;
          !this.cX && null !== bb && void 0 !== bb && bb.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(bb.id), this.emit())
        }, this.viewDialogue = () => {
          const bb = this.snapshot.detail;
          var ab;
          bb && (null === (ab = this.onViewDialogue) || void 0 === ab || ab.call(this, bb.id))
        }, this.notifications = new ia(Mb, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var bb, ab;
        return null !== (bb = null === (ab = this.authoritative) || void 0 === ab ? void 0 : ab.trackedQuestId) && void 0 !== bb ? bb : null
      }
      notify(bb) {
        !this.cX && this.notifications.enqueue(bb) && this.emitNotification()
      }
      setNotificationsHeld(bb) {
        (this.notifications.setHeld(bb) || bb) && this.emitNotification()
      }
      qL() {
        var bb, ab;
        if (this.cX) return;
        this.notifications.qL() && this.emitNotification();
        let Ub = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, Ub = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, Ub = !0);
        const Ab = PU(this.authoritative);
        null !== Ab && void 0 !== Ab && null !== (bb = Ab.questClock) && void 0 !== bb && bb.running && this.clockText(Ab) !== (null === (ab = this.snapshot.tracked) || void 0 === ab ? void 0 : ab.clock) && (Ub = !0), Ub && this.emit()
      }
      setTranslator(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = bb, this.locale = ab, this.emitNotification(), this.emit()
      }
      aj(bb) {
        if (!this.cX)
          if ("completion" === bb.kind) this.notify(bb.questCompletion);
          else if ("landmark" === bb.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: bb.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === bb.kind) {
          var ab, Ub, Ab;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: bb.npcNoteTitleKey,
            textKey: bb.npcNoteTextKey,
            params: null !== (ab = bb.npcNoteParams) && void 0 !== ab ? ab : {},
            nameKeys: null !== (Ub = bb.npcNoteNameKeys) && void 0 !== Ub ? Ub : {},
            iconItem: null !== (Ab = bb.npcNoteIconItem) && void 0 !== Ab ? Ab : null
          })
        } else if ("open" === bb.kind) this.show();
        else if ("guidance" === bb.kind) this.waypoint = bb.waypoint, this.compassTarget = bb.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === bb.kind) {
          this.authoritative = bb.snapshot, this.notifications.qL() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const ab = this.trackedStepPulse;
          this.updateTrackedStepPulse(bb.snapshot), this.emit(), this.trackedStepPulse > ab && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.cX || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var bb;
        return null !== (bb = this.translateWithIcons) && void 0 !== bb ? bb : this.translate
      }
      clockText(bb) {
        const ab = bb.questClock;
        if (!ab) return null;
        const Ub = ab.elapsedMs + (ab.running ? this.now() - this.receivedAt : 0);
        return void 0 === ab.countdownFromMs ? hb(Ub, !1) : hb(1e3 * Math.ceil(Math.max(0, ab.countdownFromMs - Ub) / 1e3), !1)
      }
      updateTrackedStepPulse(bb) {
        var ab, Ub, Ab;
        const Mb = PU(bb);
        if (!Mb) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const Tb = bb => Mb.subquests.filter((ab => bb(ab.status))).map((bb => bb.id)),
          Eb = Tb((bb => "completed" === bb || "skipped" === bb)),
          Yb = Tb((bb => "locked" !== bb)),
          Bb = (null === (ab = this.trackedSteps) || void 0 === ab ? void 0 : ab.questId) === Mb.id && Mb.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (Bb) {
          const bb = Eb.filter((bb => !Bb.finished.has(bb))),
            ab = Tb((bb => "active" === bb || "ready" === bb)).filter((bb => !Bb.unlocked.has(bb)));
          bb.length > 0 && this.trackedStepPulse++, (bb.length > 0 || ab.length > 0) && (this.trackedChange = {
            finished: new Set(bb),
            unlocked: new Set(ab),
            expiresAt: this.now() + YU
          })
        } else {
          var eb;
          this.trackedStepPulse = (null === (eb = this.trackedSteps) || void 0 === eb ? void 0 : eb.questId) === Mb.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: Mb.id,
          progress: Mb.progress,
          finished: new Set([...null !== (Ub = null === Bb || void 0 === Bb ? void 0 : Bb.finished) && void 0 !== Ub ? Ub : [], ...Eb]),
          unlocked: new Set([...null !== (Ab = null === Bb || void 0 === Bb ? void 0 : Bb.unlocked) && void 0 !== Ab ? Ab : [], ...Yb])
        }
      }
      entry(bb, ab) {
        var Ub, Ab;
        const Mb = bb.id === (null === (Ub = this.authoritative) || void 0 === Ub ? void 0 : Ub.trackedQuestId),
          Tb = this.now() < this.trackAvailableAt,
          Eb = this.questTextTranslator(),
          Yb = bb.subquests.map((ab => {
            var Ub, Ab, Tb, Yb, Bb, eb;
            const vb = null !== (Ub = ab.handInNpcName) && void 0 !== Ub ? Ub : bb.giverName,
              Lb = this.translate("skyblockGame:progress", {
                current: ab.progress.toLocaleString(this.locale),
                target: ab.target.toLocaleString(this.locale)
              }),
              Pb = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: vb ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [ab.status],
              Xb = "active" === ab.status || "ready" === ab.status;
            return {
              id: ab.id,
              name: xa(Eb, ab.nameKey, ab.nameParams),
              description: xa(Eb, ab.descriptionKey, ab.descriptionParams),
              progress: Lb,
              status: ab.status,
              statusLabel: Pb ? this.translate(Pb, {
                npc: vb
              }) : Lb,
              iconItem: Xb && null !== (Ab = ab.questIconItem) && void 0 !== Ab ? Ab : null,
              barPercent: "active" === ab.status && ab.showsProgressBar ? Math.min(100, 100 * ab.progress / ab.target) : null,
              justFinished: Mb && null !== (Tb = null === (Yb = this.trackedChange) || void 0 === Yb ? void 0 : Yb.finished.has(ab.id)) && void 0 !== Tb && Tb,
              justUnlocked: Mb && null !== (Bb = null === (eb = this.trackedChange) || void 0 === eb ? void 0 : eb.unlocked.has(ab.id)) && void 0 !== Bb && Bb
            }
          }));
        return {
          id: bb.id,
          name: xa(Eb, bb.nameKey, bb.nameParams),
          description: xa(Eb, bb.descriptionKey, bb.descriptionParams),
          progress: ab ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: bb.progress.toLocaleString(this.locale),
            target: bb.target.toLocaleString(this.locale)
          }),
          completed: ab,
          tracked: Mb,
          selected: bb.id === this.selected,
          canTrack: !ab && !Mb && !Tb,
          trackLabel: this.translate(Mb ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : Tb ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== bb.id,
          subquests: Yb,
          focusStep: null !== (Ab = Yb.find((bb => null !== bb.barPercent))) && void 0 !== Ab ? Ab : null,
          clock: this.clockText(bb)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb;
        const vb = [...null !== (bb = null === (ab = this.authoritative) || void 0 === ab ? void 0 : ab.active) && void 0 !== bb ? bb : [], ...null !== (Ub = null === (Ab = this.authoritative) || void 0 === Ab ? void 0 : Ab.completed) && void 0 !== Ub ? Ub : []];
        var Lb, Pb, Xb, jb;
        vb.some((bb => bb.id === this.selected)) || (this.selected = null !== (Lb = null !== (Pb = null === (Xb = this.authoritative) || void 0 === Xb ? void 0 : Xb.trackedQuestId) && void 0 !== Pb ? Pb : null === (jb = vb[0]) || void 0 === jb ? void 0 : jb.id) && void 0 !== Lb ? Lb : null);
        const Rb = null !== (Mb = null === (Tb = this.authoritative) || void 0 === Tb ? void 0 : Tb.active.map((bb => this.entry(bb, !1)))) && void 0 !== Mb ? Mb : [];
        Rb.sort(((bb, ab) => Number(ab.tracked) - Number(bb.tracked)));
        const kb = null !== (Eb = null === (Yb = this.authoritative) || void 0 === Yb ? void 0 : Yb.completed.map((bb => this.entry(bb, !0)))) && void 0 !== Eb ? Eb : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: Rb,
          completed: kb,
          completedExpanded: this.completedExpanded,
          detail: null !== (Bb = [...Rb, ...kb].find((bb => bb.selected))) && void 0 !== Bb ? Bb : null,
          tracked: null !== (eb = Rb.find((bb => bb.tracked))) && void 0 !== eb ? eb : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function PU(bb) {
      var ab;
      return null !== (ab = null === bb || void 0 === bb ? void 0 : bb.active.find((ab => ab.id === bb.trackedQuestId))) && void 0 !== ab ? ab : null
    }
    const XU = "skyblockDungeonsView";
    class jU extends Lb {
      constructor(bb, ab) {
        let Ub = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          Ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(bb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = ab, this.locale = Ub, this.requestEnter = Ab, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
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
            ab = null === bb || void 0 === bb ? void 0 : bb.difficulties[this.pageIndex];
          void 0 !== ab && null !== ab.unlockedBoss && (this.close(), this.requestEnter(bb.id, ab.difficulty))
        }
      }
      setTranslator(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = bb, this.locale = ab, this.emit()
      }
      aj(bb) {
        var ab, Ub;
        if (!this.cX) return "open" === bb.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== bb.kind ? "snapshot" === bb.kind && (this.authoritative = bb.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (ab = null === (Ub = this.pickerEntry()) || void 0 === Ub ? void 0 : Ub.difficulties.length) && void 0 !== ab ? ab : 1) - 1)), null === bb.snapshot && this.open ? this.close() : this.emit()) : this.choose(bb.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(bb) {
        var ab;
        const Ub = null === (ab = this.authoritative) || void 0 === ab ? void 0 : ab.dungeons.find((ab => ab.id === bb));
        void 0 !== Ub ? this.open && this.pickerDungeonId === bb || (this.pickerDungeonId = bb, this.pageIndex = Math.max(0, Ub.difficulties.findLastIndex((bb => null !== bb.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${bb}`)
      }
      turnTo(bb) {
        var ab, Ub;
        const Ab = null !== (ab = null === (Ub = this.pickerEntry()) || void 0 === Ub ? void 0 : Ub.difficulties.length) && void 0 !== ab ? ab : 0;
        bb < 0 || bb >= Ab || bb === this.pageIndex || (this.pageIndex = bb, this.emit())
      }
      pickerEntry() {
        var bb, ab;
        return null !== (bb = null === (ab = this.authoritative) || void 0 === ab ? void 0 : ab.dungeons.find((bb => bb.id === this.pickerDungeonId))) && void 0 !== bb ? bb : null
      }
      difficulty(bb) {
        const ab = bb.completions > 0,
          Ub = null === bb.bestMs ? null : hb(bb.bestMs);
        return {
          difficulty: bb.difficulty,
          label: this.translate(db[bb.difficulty]),
          colour: Fb[bb.difficulty],
          beaten: ab,
          bestTime: Ub,
          completions: bb.completions,
          summary: ab ? [null === Ub ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: Ub
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: bb.completions.toLocaleString(this.locale)
          })].filter((bb => null !== bb)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(bb) {
        const ab = bb.difficulties.map((bb => this.difficulty(bb))),
          Ub = ab.filter((bb => bb.beaten)).length;
        return {
          id: bb.id,
          name: this.translate(bb.nameKey),
          selected: bb.id === this.selected,
          beatenSummary: `${Ub} / ${ab.length}`,
          difficulties: ab
        }
      }
      picker() {
        const bb = this.pickerEntry();
        if (null === bb || 0 === bb.difficulties.length) return null;
        const ab = bb.difficulties.map(((ab, Ub) => {
          var Ab, Mb, Tb, Eb;
          const Yb = ab.unlockedBoss,
            Bb = null === Yb ? this.lockedHint(bb, Ub) : null;
          return {
            ...this.difficulty(ab),
            unlocked: null !== Yb,
            bossName: null === Yb ? null : this.translate(Yb.bossNameKey),
            bossMobType: null !== (Ab = null === Yb || void 0 === Yb ? void 0 : Yb.bossMobType) && void 0 !== Ab ? Ab : null,
            bossMobVariation: null !== (Mb = null === Yb || void 0 === Yb ? void 0 : Yb.bossMobVariation) && void 0 !== Mb ? Mb : null,
            lockedHint: null !== (Tb = null === Bb || void 0 === Bb ? void 0 : Bb.text) && void 0 !== Tb ? Tb : null,
            lockedHintHighlight: null !== (Eb = null === Bb || void 0 === Bb ? void 0 : Bb.highlight) && void 0 !== Eb ? Eb : null,
            current: Ub === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(bb.nameKey),
          pages: ab,
          page: ab[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < ab.length - 1
        }
      }
      lockedHint(bb, ab) {
        var Ub, Ab, Mb;
        if (0 === ab && "number" === typeof bb.combatLevelLock) {
          const ab = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: bb.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: ab,
            colour: za("combat"),
            icon: Za.combat
          })
        }
        const Tb = null !== (Ub = null === (Ab = this.authoritative) || void 0 === Ab ? void 0 : Ab.dungeons) && void 0 !== Ub ? Ub : [],
          Eb = ab > 0 ? bb : null !== (Mb = Tb[Tb.indexOf(bb) - 1]) && void 0 !== Mb ? Mb : null,
          Yb = ab > 0 ? bb.difficulties[ab - 1] : null === Eb || void 0 === Eb ? void 0 : Eb.difficulties[0];
        if (null === Eb || void 0 === Yb) return null;
        const Bb = this.translate(Eb.nameKey);
        if (null === Yb.unlockedBoss) return Eb === bb ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, Yb.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: Bb
        }, Yb.difficulty);
        const eb = this.translate(Yb.unlockedBoss.bossNameKey);
        return Eb === bb ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: eb
        }, Yb.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: eb,
            dungeon: Bb
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(bb, ab, Ub) {
        return this.hintHighlighting(bb, ab, "difficulty", {
          name: this.translate(db[Ub]),
          colour: Fb[Ub],
          icon: null
        })
      }
      hintHighlighting(bb, ab, Ub, Ab) {
        let {
          name: Mb,
          colour: Tb,
          icon: Eb
        } = Ab;
        const Yb = this.translate(bb, {
          ...ab,
          [Ub]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(bb, {
            ...ab,
            [Ub]: Mb
          }),
          highlight: 2 === Yb.length ? {
            before: Yb[0],
            name: Mb,
            after: Yb[1],
            colour: Tb,
            icon: Eb
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var bb, ab, Ub;
        const Ab = null !== (bb = null === (ab = this.authoritative) || void 0 === ab ? void 0 : ab.dungeons) && void 0 !== bb ? bb : [];
        var Mb, Tb;
        Ab.some((bb => bb.id === this.selected)) || (this.selected = null !== (Mb = null === (Tb = Ab[0]) || void 0 === Tb ? void 0 : Tb.id) && void 0 !== Mb ? Mb : null);
        const Eb = Ab.map((bb => this.entry(bb)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: Eb,
          detail: null !== (Ub = Eb.find((bb => bb.selected))) && void 0 !== Ub ? Ub : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const RU = ["mining", "farming", "foraging", "fishing", "combat"],
      kU = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      yU = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function ZU() {
      for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
      return ab.map(((bb, ab) => ({
        amount: bb,
        coins: kU[ab],
        xp: yU[ab]
      })))
    }
    const DU = ZU(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      zU = ZU(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      xU = ZU(50, 100, 250, 500, 1e3, 2500, 5e3),
      iU = ZU(25, 50, 100, 250, 500, 1e3),
      fU = ZU(10, 25, 50, 100, 250, 500, 1e3),
      mU = ZU(1, 5, 10, 25, 50);

    function pU(bb, ab) {
      return {
        id: bb,
        category: "fishing",
        item: ab,
        drops: [ab],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fU
      }
    }
    const NU = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: zU
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: xU
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: xU
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: iU
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: iU
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: zU
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: DU
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: DU
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: DU
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: xU
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: zU
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: zU
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: zU
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: xU
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: xU
      }, pU("wheatfish", "Wheatfish"), pU("darter", "Darter"), pU("sunset_minnow", "Sunset Minnow"), pU("root_flounder", "Root Flounder"), pU("greenfin_loach", "Greenfin Loach"), pU("red_strongfish", "Red Strongfish"), pU("green_strongfish", "Green Strongfish"), pU("boomerang_fish", "Boomerang Fish"), pU("seahorse", "Seahorse"), pU("spined_stickleback", "Spined Stickleback"), pU("moon_strongfish", "Moon Strongfish"), pU("boulder_bass", "Boulder Bass"), pU("grass_snapper", "Grass Snapper"), pU("crystal_wheatfish", "Crystalized Wheatfish", mU), pU("moonstone_pupfish", "Moonstone Pupfish", mU), pU("reedglass_minnow", "Reedglass Minnow"), pU("mangrove_herring", "Mangrove Herring"), pU("mudline_perch", "Mudline Perch"), pU("coastal_mullet", "Coastal Mullet"), pU("reef_sardine", "Reef Sardine"), pU("root_perch", "Root Perch"), pU("driftwood_catfish", "Driftwood Catfish"), pU("aether_minnow", "Aether Minnow"), pU("needlefish", "Tri-Pointed Needlefish"), pU("threadfin_bream", "Threadfin Bream"), pU("mudbelly_tilapia", "Mudbelly Tilapia"), pU("rotslab_eel", "Rotslab Eel"), pU("polarflash_electron", "Polarflash Electron"), pU("mireback_carp", "Mireback Carp"), pU("blackwater_bream", "Blackwater Bream"), pU("stone_grouper", "Stone Grouper"), pU("shadeback_ray", "Shadeback Ray"), pU("glacial_silverfish", "Glacial Silverfish"), pU("hatchetfish", "Hatchetfish"), pU("moonlit_boomerang", "Moonlit Boomerang Fish"), pU("murkborne_ray", "Murkborne Ray"), pU("bamboo_catfish", "Bamboo Catfish"), pU("mossback_arapaima", "Mossback Arapaima"), pU("murk_stingray", "Murk Stingray"), pU("channel_sawfish", "Channel Sawfish"), pU("boned_sturgeon", "Boned Sturgeon"), pU("oarfish", "Oarfish"), pU("snakehead", "Snakehead", mU), pU("eldertide_leviathan", "Eldertide Leviathan", mU), pU("pithead", "Pithead"), pU("electric_eel", "Electric Eel"), pU("shadow_darter", "Shadow Darter"), pU("abyss_carp", "Abyss Carp"), pU("nomai_moray", "Nomai Moray"), pU("silver_dragonfish", "Silver Dragonfish"), pU("giant_moray", "Giant Moray"), pU("coelacanth", "Coelacanth", mU), pU("frost_herring", "Frost Herring"), pU("permafrost_halibut", "Permafrost Halibut"), pU("glacial_lanternfish", "Glacial Lanternfish"), pU("frozen_grenadier", "Frozen Grenadier"), pU("blackfin_icefish", "Blackfin Icefish"), pU("moonfish", "Moonfish"), pU("alpha_strongfish", "Alpha Moon Strongfish"), pU("deep_lanternfish", "Deepwater Lanternfish", mU), pU("pearlescent_moonfish", "Pearlescent Moonfish", mU), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: zU
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: iU
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: iU
      }],
      WU = (new Map(NU.map((bb => [bb.id, bb]))), new Map),
      HU = new Map;
    for (const YB of NU) {
      for (const [bb, ab] of Object.entries(null !== (IU = YB.blocks) && void 0 !== IU ? IU : {})) {
        var IU;
        WU.set(bb, {
          collection: YB,
          amount: ab
        })
      }
      for (const bb of null !== (dU = YB.drops) && void 0 !== dU ? dU : []) {
        var dU;
        HU.set(bb, YB)
      }
    }

    function FU(bb, ab) {
      let Ub = 0;
      for (; Ub < bb.tiers.length && ab >= bb.tiers[Ub].amount;) Ub++;
      return Ub
    }
    const hU = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function GU(bb) {
      return hU[bb - 1]
    }
    const QU = "skyblockCollectionsView";
    class qU extends Lb {
      constructor(bb, ab) {
        let Ub = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          Ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : bb => bb;
        super(bb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = ab, this.locale = Ub, this.itemName = Ab, this.counts = null, this.category = "mining", this.selected = NU[0].id, this.snapshot = {
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
      setTranslator(bb, ab, Ub) {
        this.translate = bb, this.locale = ab, this.itemName = Ub, this.emit()
      }
      aj(bb) {
        if (!this.cX)
          if ("collOpen" !== bb.kind) {
            (bb.collFull || null === this.counts) && (this.counts = new Map);
            for (const [ab, Ub] of bb.collCounts) this.counts.set(ab, Ub);
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
        const ab = this.inCategory(this.category).map((bb => this.collectionView(bb))),
          Ub = NU.reduce(((bb, ab) => bb + this.tierOf(ab)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: RU.map((bb => this.categoryView(bb))),
          collections: ab,
          detail: null !== (bb = ab.find((bb => bb.selected))) && void 0 !== bb ? bb : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(Ub)
          })
        }
      }
      categoryView(bb) {
        const ab = this.inCategory(bb),
          Ub = ab.reduce(((bb, ab) => bb + this.tierOf(ab)), 0),
          Ab = ab.reduce(((bb, ab) => bb + ab.tiers.length), 0);
        return {
          id: bb,
          label: this.translate(`skyblockGame:${bb}`),
          icon: Za[bb],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(Ub),
            target: this.number(Ab)
          }),
          selected: bb === this.category
        }
      }
      collectionView(bb) {
        var ab, Ub;
        const Ab = null !== (ab = this.counts.get(bb.id)) && void 0 !== ab ? ab : 0,
          Mb = FU(bb, Ab),
          Tb = null !== (Ub = bb.tiers[Mb]) && void 0 !== Ub ? Ub : null,
          Eb = 0 === Mb ? 0 : bb.tiers[Mb - 1].amount;
        return {
          id: bb.id,
          name: this.itemName(bb.item),
          icon: bb.item,
          selected: bb.id === this.selected,
          locked: 0 === Ab,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(Ab)
          }),
          tier: 0 === Mb ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(Mb),
          percent: null === Tb ? 100 : Math.min(100, (Ab - Eb) / (Tb.amount - Eb) * 100),
          progress: null === Tb ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(Ab),
            target: this.number(Tb.amount)
          }),
          nextReward: null === Tb ? null : this.reward(bb, Tb.coins, Tb.xp)
        }
      }
      reward(bb, ab, Ub) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(ab),
          xp: this.number(Ub),
          skill: this.translate(`skyblockGame:${bb.category}`)
        })
      }
      tierLabel(bb) {
        return this.translate("skyblockGame:collectionTier", {
          tier: GU(bb)
        })
      }
      tierOf(bb) {
        var ab;
        return FU(bb, null !== (ab = this.counts.get(bb.id)) && void 0 !== ab ? ab : 0)
      }
      inCategory(bb) {
        return NU.filter((ab => ab.category === bb))
      }
      number(bb) {
        return bb.toLocaleString(this.locale)
      }
    }
    const uU = "skyblockPortalTransitView",
      rU = "skyblockPortalArrival";
    class KU {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.IR = bb, this.storage = ab, this.now = Ub, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      aj(bb) {
        const ab = {
          zoneNameKey: bb.transitZoneNameKey,
          variation: bb.transitZoneVariation,
          colour: bb.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(rU, ab), this.show("departure", ab.zoneNameKey, ab.colour, bb.transitDurationMs, bb.transitDurationMs + 1500, (() => {
          this.storage.removeItem(rU)
        }))
      }
      resumeArrival(bb) {
        const ab = this.storage.getItem(rU);
        this.storage.removeItem(rU), null === ab || ab.variation !== bb || this.now() - ab.departedAt > 3e4 || this.show("arrival", ab.zoneNameKey, ab.colour, 3200, 2e4)
      }
      finishArrival(bb) {
        var ab;
        "arrival" === (null === (ab = this.view) || void 0 === ab ? void 0 : ab.phase) && this.view.token === bb && (this.clearTimer(), this.view = null, this.IR(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(bb, ab, Ub, Ab, Mb, Tb) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: bb,
          zoneNameKey: ab,
          colour: Ub,
          durationMs: Ab
        }, this.IR(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.IR(null), null === Tb || void 0 === Tb || Tb()
        }), Mb)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const oU = "skyblockDailyRewardView",
      lU = "skyblockDailyRewardCoin";
    class tU {
      constructor(bb, ab, Ub, Ab) {
        let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          Eb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          Yb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          Bb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.IR = bb, this.isBusy = ab, this.holdQuestPopups = Ub, this.onHeldCoinsChanged = Ab, this.onCoinLanded = Mb, this.onStarted = Tb, this.onFinished = Eb, this.onItemLanded = Yb, this.now = Bb, this.PY = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var bb, ab;
        return null !== (bb = null === (ab = this.playing) || void 0 === ab ? void 0 : ab.view) && void 0 !== bb ? bb : null
      }
      getHeldCoins() {
        var bb, ab;
        let Ub = 0;
        for (const Ab of this.PY) Ub += Ab.coins;
        return Ub - (null !== (bb = null === (ab = this.playing) || void 0 === ab ? void 0 : ab.released) && void 0 !== bb ? bb : 0)
      }
      aj(bb) {
        "dailyRewardClaimed" !== bb.kind ? (this.queue.push(bb), this.qL()) : this.PY.push({
          coins: bb.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      qL() {
        const bb = this.now();
        if (null === this.playing) return this.releaseUnshown(bb), void this.startNext(bb);
        const ab = this.playing,
          Ub = bb - ab.startedAt,
          Ab = ab.view.flyingCoins,
          Mb = function(bb, ab) {
            let Ub = 0;
            for (; Ub < ab && sU(Ub, ab) <= bb;) Ub++;
            return Ub
          }(Ub, Ab);
        if (Mb !== ab.landed) {
          for (let bb = Mb - ab.landed > 2 ? Mb - 1 : ab.landed; bb < Mb; bb++) this.onCoinLanded(bb, Ab);
          ab.landed = Mb, ab.released = Math.round(ab.view.coins * Mb / Ab), this.onHeldCoinsChanged()
        }
        for (; ab.itemsLanded < ab.view.items.length && 2e3 + 160 * ab.itemsLanded + 630 <= Ub;) this.onItemLanded(ab.itemsLanded), ab.itemsLanded++;
        Ub >= ab.view.durationMs && (this.finish(), this.startNext(bb))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.PY = [], this.IR(null)
      }
      startNext(bb) {
        if (0 === this.queue.length || this.isBusy()) return;
        const ab = this.queue.shift();
        this.token++;
        const Ub = {
          token: this.token,
          day: ab.dailyRewardDay,
          coins: ab.dailyRewardCoins,
          items: ab.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: ab.dailyRewardDay === Wb ? 24 : 14
        };
        this.playing = {
          view: Ub,
          startedAt: bb,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.IR(Ub), this.onStarted(Ub)
      }
      finish() {
        this.PY.shift(), this.playing = null, this.holdQuestPopups(!1), this.IR(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(bb) {
        if (this.queue.length > 0 || 0 === this.PY.length) return;
        const ab = this.PY.length;
        this.PY = this.PY.filter((ab => bb - ab.receivedAt < 6e4)), this.PY.length !== ab && this.onHeldCoinsChanged()
      }
    }

    function wU(bb, ab) {
      return 450 + 715 * bb / (ab - 1)
    }

    function sU(bb, ab) {
      return wU(bb, ab) + 650
    }
    const gU = "skyblockMailboxView";
    class CU {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.IR = bb, this.isBusy = ab, this.onStarted = Ub, this.now = Ab, this.waiting = [], this.playing = null, this.token = 0, this.itemName = bb => bb
      }
      getSnapshot() {
        var bb, ab;
        return null !== (bb = null === (ab = this.playing) || void 0 === ab ? void 0 : ab.view) && void 0 !== bb ? bb : null
      }
      setItemName(bb) {
        this.itemName = bb
      }
      aj(bb) {
        this.waiting.push(...bb.mailLetters), this.qL()
      }
      qL() {
        const bb = this.now();
        null !== this.playing && bb - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.IR(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(bb)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.IR(null)
      }
      start(bb) {
        const ab = this.waiting.slice(0, 3);
        this.token++;
        const Ub = {
          token: this.token,
          letters: ab.map((bb => this.toView(bb))),
          more: this.waiting.length - ab.length,
          durationMs: 4500 + 700 * ab.length
        };
        this.waiting = [], this.playing = {
          view: Ub,
          startedAt: bb
        }, this.IR(Ub), this.onStarted(Ub)
      }
      toView(bb) {
        return {
          coins: bb.mailCoins,
          items: bb.mailItems.map((bb => {
            var ab;
            return {
              itemName: bb.mailItemName,
              amount: bb.mailItemAmount,
              label: null !== (ab = bb.mailItemLabel) && void 0 !== ab ? ab : this.itemName(bb.mailItemName)
            }
          })),
          reasonKey: bb.mailReasonKey,
          reasonParams: bb.mailReasonParams
        }
      }
    }
    const VU = "skyblockQuestGraphView",
      OU = "skyblockDevQuestJump";

    function cU(bb) {
      if (0 === bb.length) return "";
      const ab = [`M ${bb[0].x} ${bb[0].y}`];
      for (let Ab = 1; Ab < bb.length - 1; Ab++) {
        const Ub = bb[Ab + 1];
        ab.push(`Q ${bb[Ab].x} ${bb[Ab].y} ${(bb[Ab].x+Ub.x)/2} ${(bb[Ab].y+Ub.y)/2}`)
      }
      const Ub = bb[bb.length - 1];
      return ab.push(`L ${Ub.x} ${Ub.y}`), ab.join(" ")
    }

    function JU(bb, ab) {
      return bb < ab ? `${bb}|${ab}` : `${ab}|${bb}`
    }
    class nU extends Lb {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          Eb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          Yb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(bb, Ub, Ab), this.translate = ab, this.requestJump = Mb, this.requestArrive = Tb, this.storage = Eb, this.now = Yb, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
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
      aj(bb) {
        if (!this.cX)
          if ("graph" !== bb.kind) {
            if ("jumping" === bb.kind) {
              const ab = {
                questId: bb.graphQuestId,
                variation: bb.graphVariation,
                completes: bb.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(OU, ab)
            }
          } else {
            const ab = ++this.graphCount;
            Ub.e(111).then((() => Ub(6044))).then((Ub => {
              let {
                default: Ab
              } = Ub;
              this.cX || ab !== this.graphCount || (this.layout = function(bb, ab, Ub) {
                var Ab, Mb;
                const Tb = new bb.graphlib.Graph;
                Tb.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), Tb.setDefaultEdgeLabel((() => ({})));
                const Eb = new Set;
                for (const vb of ab) Eb.add(vb.graphQuestId), Tb.setNode(vb.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const Yb = Ub.filter((bb => Eb.has(bb.graphFromId) && Eb.has(bb.graphToId) && bb.graphFromId !== bb.graphToId)),
                  Bb = new Map;
                for (const vb of [...Yb].sort(((bb, ab) => Number("awaits" === bb.graphEdgeKind) - Number("awaits" === ab.graphEdgeKind)))) {
                  const bb = JU(vb.graphFromId, vb.graphToId);
                  Bb.has(bb) || (Bb.set(bb, vb), Tb.setEdge(vb.graphFromId, vb.graphToId))
                }
                bb.layout(Tb);
                const eb = Tb.graph();
                return {
                  width: Math.ceil(null !== (Ab = eb.width) && void 0 !== Ab ? Ab : 0),
                  height: Math.ceil(null !== (Mb = eb.height) && void 0 !== Mb ? Mb : 0),
                  nodes: ab.map((bb => {
                    var ab, Ub;
                    const Ab = Tb.node(bb.graphQuestId);
                    return {
                      node: bb,
                      left: (null !== (ab = Ab.x) && void 0 !== ab ? ab : 0) - 95,
                      top: (null !== (Ub = Ab.y) && void 0 !== Ub ? Ub : 0) - 26
                    }
                  })),
                  edges: Yb.map((bb => {
                    var ab;
                    const Ub = Bb.get(JU(bb.graphFromId, bb.graphToId)),
                      Ab = null !== (ab = Tb.edge(Ub.graphFromId, Ub.graphToId).points) && void 0 !== ab ? ab : [];
                    return {
                      edge: bb,
                      key: `${bb.graphFromId}|${bb.graphToId}|${bb.graphEdgeKind}`,
                      path: cU(Ub.graphFromId === bb.graphFromId ? Ab : [...Ab].reverse())
                    }
                  })),
                  plans: new Map(ab.map((bb => [bb.graphQuestId, new Set([bb.graphQuestId, ...bb.graphPlanIds])])))
                }
              }(Ab, bb.graphNodes, bb.graphEdges), this.show())
            })).catch((bb => {
              console.error("The quest graph could not be laid out", bb)
            }))
          }
      }
      resumeJump(bb) {
        const ab = this.storage.getItem(OU);
        this.storage.removeItem(OU), null === ab || ab.variation !== bb || this.now() - ab.departedAt > 6e4 || this.requestArrive(ab.questId, ab.completes)
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
        var bb, ab;
        return null !== (bb = null === this.hoveredId || null === (ab = this.layout) || void 0 === ab ? void 0 : ab.plans.get(this.hoveredId)) && void 0 !== bb ? bb : new Set
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
        const ab = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: bb.width,
          height: bb.height,
          nodes: bb.nodes.map((bb => {
            let {
              node: Ub,
              left: Ab,
              top: Mb
            } = bb;
            return {
              id: Ub.graphQuestId,
              name: this.translate(Ub.graphNameKey),
              detail: null === Ub.graphGiverName ? Ub.graphZoneId : `${Ub.graphGiverName} \xb7 ${Ub.graphZoneId}`,
              state: Ub.graphState,
              left: Ab,
              top: Mb,
              inPlan: ab.has(Ub.graphQuestId),
              hovered: Ub.graphQuestId === this.hoveredId
            }
          })),
          edges: bb.edges.map((bb => {
            let {
              edge: Ub,
              key: Ab,
              path: Mb
            } = bb;
            return {
              key: Ab,
              kind: Ub.graphEdgeKind,
              path: Mb,
              inPlan: ab.has(Ub.graphFromId) && ab.has(Ub.graphToId)
            }
          })),
          planning: ab.size > 0
        }
      }
    }
    var SU = Ub(36370);
    const bA = 250,
      aA = 2150,
      UA = -2.8,
      AA = 2.2,
      MA = -27,
      TA = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      EA = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      YA = Math.round(50 + 1e3 * (EA.delay + EA.period / 2)),
      BA = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      eA = Array.from({
        length: 26
      }, ((bb, ab) => {
        const Ub = 2.39996 * ab,
          Ab = .5 + .618034 * ab % 1 * .23,
          Mb = ab % 3 !== 2;
        return {
          rune: Mb ? BA[7 * ab % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(Ub)*Ab).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(Ub)*Ab).toFixed(3)})`,
            "--spin": 40 * (ab % 5 - 2) + "deg",
            "--size": (Mb ? 1 + ab % 4 * .2 : .3 + ab % 2 * .15) + "rem",
            "--duration": `${(1.8+7*ab%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*ab%3).toFixed(2)}s`
          }
        }
      }));

    function vA(bb, ab) {
      return Array.from({
        length: 30 + 3 * bb + (ab ? 10 : 0)
      }, ((bb, ab) => {
        const Ub = ab < 4,
          Ab = Ub ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          Mb = Ub ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          Tb = Ub ? 2.2 : .6 + Math.random(),
          Eb = Ub ? .3 : Math.random() < .5 ? .16 : .24,
          Yb = Ub ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": Ab,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${Mb.toFixed(2)}rem`,
          "--length": `${Tb.toFixed(2)}rem`,
          "--width": `${Eb}rem`,
          "--duration": `${Math.round(Yb)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function LA(bb) {
      let {
        zeta: ab,
        period: Ub
      } = bb;
      const Ab = 2 * Math.PI / Ub;
      return {
        w: Ab,
        decay: ab * Ab / Math.sqrt(1 - ab * ab)
      }
    }
    let PA = !1;

    function XA() {
      if (PA) return;
      PA = !0;
      const bb = document.createElement("style");
      bb.textContent = function() {
        const bb = LA(TA),
          ab = LA(EA),
          Ub = ab => Math.exp(-bb.decay * ab) * Math.sin(bb.w * ab),
          Ab = Ub(Math.atan(bb.w / bb.decay) / bb.w),
          Mb = .25,
          Tb = 2.15,
          Eb = Math.round(215),
          Yb = [];
        for (let Bb = 0; Bb <= Eb; Bb++) {
          const bb = Bb / Eb * Tb;
          let eb = Math.sin(Math.min(bb, Mb) / Mb * Math.PI / 2) ** 2,
            vb = 0,
            Lb = 1,
            Pb = 1 - .2 * eb,
            Xb = 1;
          if (bb >= Mb) {
            const Eb = bb - Mb,
              Yb = Math.max(0, Eb - .05);
            eb = Math.exp(-Yb / .05), vb = Ub(Yb + TA.lead * (1 - Math.exp(-Yb / TA.rush))) / Ab;
            const Bb = Yb - EA.delay,
              jb = Bb <= 0 ? 0 : 1 - Math.exp(-ab.decay * Bb) * (Math.cos(ab.w * Bb) + ab.decay / ab.w * Math.sin(ab.w * Bb)),
              Rb = Math.max(0, (bb - 1.77) / (Tb - 1.77));
            Lb = (1 + (EA.to - 1) * jb) * (1 + .08 * Rb), Pb = 1.1 + 1.5 * Math.exp(-Eb / .07) + .3 * Math.exp(-(((1e3 * Eb - YA) / 100) ** 2)) + .8 * Rb, Xb = 1 - Rb ** 1.5
          }
          const jb = .15 * eb + UA * vb,
            Rb = -.1 * eb + AA * vb,
            kb = 3 * eb + MA * vb;
          Yb.push(`${(Bb/Eb*100).toFixed(3)}% { opacity: ${Xb.toFixed(3)}; transform: translate(${jb.toFixed(3)}rem, ${Rb.toFixed(3)}rem) rotate(${kb.toFixed(2)}deg) scale(${Lb.toFixed(3)}); filter: brightness(${Pb.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${Yb.join(" ")} }`
      }(), document.head.append(bb)
    }
    const jA = "skyblockForgeView",
      RA = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class kA extends Lb {
      constructor(bb, ab, Ub, Ab, Mb) {
        super(bb, Ub, Ab), this.translate = ab, this.requestForge = Mb, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.select = (bb, ab) => {
          var Ub, Ab;
          null !== this.forging || (null !== (Ub = this.owned[(0, SU.m)(ab, bb)]) && void 0 !== Ub ? Ub : 0) <= 0 || (this.selected[bb] = this.selected[bb] === ab ? null : ab, this.status = null, null === (Ab = this.onPartSelected) || void 0 === Ab || Ab.call(this), this.emit())
        }, this.forge = bb => {
          var ab, Ub;
          const Ab = this.selectedParts();
          if (null === Ab || this.isPending() || !this.open) return;
          const Mb = (0, SU.l)(Ab);
          if (null === Mb || Mb.coalCost > this.coal) return;
          const Tb = this.preview(Mb),
            Eb = null !== (ab = null === (Ub = this.onForgeStarted) || void 0 === Ub ? void 0 : Ub.call(this, Tb.tier, Tb.named, bb)) && void 0 !== ab ? ab : () => {};
          if (this.dropArrival(), bb) {
            const bb = {
              id: ++this.forgeId,
              preview: Tb,
              timers: [],
              stopSounds: Eb,
              landed: !1,
              reply: null
            };
            bb.timers.push(setTimeout((() => {
              bb.landed = !0, null !== bb.reply && (this.apply(bb.reply), bb.reply = null, this.emit())
            }), bA), setTimeout((() => {
              this.finishForge(bb)
            }), aA)), this.forging = bb
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(Ab)
        }, this.snapshot = this.buildSnapshot()
      }
      aj(bb) {
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === bb.forgeMessageKind) return this.dropForge(), this.apply(bb), this.status = null, void this.show();
        const ab = this.forging;
        if (null !== ab && null !== bb.forgeRefusalKey) this.dropForge();
        else if (null !== ab && !ab.landed) return void(ab.reply = bb);
        this.apply(bb), this.emit()
      }
      apply(bb) {
        if (this.owned = bb.forgeOwnedParts, this.coal = bb.forgeCoalOwned, this.keepSelectionOwned("open" === bb.forgeMessageKind), null !== bb.forgeForgedSwordId) {
          var ab;
          const Ub = (0, SU.l)(bb.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (ab = null === Ub || void 0 === Ub ? void 0 : Ub.displayName) && void 0 !== ab ? ab : ""
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
        var ab;
        this.forging = null;
        const Ub = this.selectedParts(),
          Ab = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: bb.id,
          sameSword: null !== Ub && (null === (ab = (0, SU.l)(Ub)) || void 0 === ab ? void 0 : ab.displayName) === bb.preview.name,
          timer: Ab
        }, this.emit()
      }
      dropForge() {
        const bb = this.forging;
        if (null !== bb) {
          this.forging = null;
          for (const ab of bb.timers) clearTimeout(ab);
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
        var bb, ab, Ub;
        const Ab = this.selectedParts(),
          Mb = null === Ab ? null : (0, SU.l)(Ab),
          Tb = null !== (bb = null === (ab = this.forging) || void 0 === ab ? void 0 : ab.preview) && void 0 !== bb ? bb : null === Mb ? null : this.preview(Mb);
        return {
          enabled: this.received,
          open: this.open,
          slots: SU.h.map((bb => ({
            kind: bb,
            label: this.translate(RA[bb]),
            parts: this.partsFor(bb)
          }))),
          coalOwned: this.coal,
          preview: Tb,
          unformedSword: SU.g[null !== (Ub = this.selected.Blade) && void 0 !== Ub ? Ub : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((bb => bb > 0)),
          canForge: null !== Tb && !Tb.coalShort && !this.isPending(),
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
        const ab = [];
        for (const Ab of SU.e) {
          var Ub;
          const Mb = (0, SU.m)(Ab, bb),
            Tb = null !== (Ub = this.owned[Mb]) && void 0 !== Ub ? Ub : 0;
          Tb > 0 && ab.push({
            material: Ab,
            itemName: Mb,
            owned: Tb,
            selected: this.selected[bb] === Ab,
            placeholder: !1
          })
        }
        if (0 === ab.length) {
          const Ub = SU.e[0];
          ab.push({
            material: Ub,
            itemName: (0, SU.m)(Ub, bb),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return ab
      }
      stats(bb) {
        const ab = [{
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
        return bb.reachBonus > 0 && ab.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${bb.reachBonus.toFixed(1)}`,
          better: !0
        }), bb.damageReduction > 0 && ab.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*bb.damageReduction)}%`,
          better: !0
        }), ab
      }
      selectedParts() {
        const {
          Blade: bb,
          Guard: ab,
          Handle: Ub
        } = this.selected;
        return null === bb || null === ab || null === Ub ? null : {
          blade: bb,
          guard: ab,
          handle: Ub
        }
      }
      keepSelectionOwned(bb) {
        for (const Ub of SU.h) {
          var ab;
          const Ab = this.selected[Ub];
          if (null !== Ab && (null !== (ab = this.owned[(0, SU.m)(Ab, Ub)]) && void 0 !== ab ? ab : 0) > 0) continue;
          if (!bb) {
            this.selected[Ub] = null;
            continue
          }
          const Mb = [...SU.e].reverse().find((bb => {
            var ab;
            return (null !== (ab = this.owned[(0, SU.m)(bb, Ub)]) && void 0 !== ab ? ab : 0) > 0
          }));
          this.selected[Ub] = null !== Mb && void 0 !== Mb ? Mb : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const yA = "skyblockSmugglerView",
      ZA = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class DA extends Lb {
      constructor(bb, ab, Ub, Ab, Mb) {
        let Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(bb, Ub, Ab), this.translate = ab, this.requestBuy = Mb, this.now = Tb, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = bb => bb, this.onBought = null, this.buy = bb => {
          const ab = this.deals[bb];
          void 0 !== ab && !this.isPending() && this.open && !this.soldOut.has(bb) && this.canAfford(ab) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, bb))
        }, this.snapshot = this.buildSnapshot()
      }
      aj(bb) {
        if (this.received = !0, this.day = bb.smugglerDay, this.deals = bb.smugglerDeals, this.rivets = bb.smugglerRivetsOwned, this.crests = bb.smugglerCrestsOwned, this.soldOut = new Set(bb.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + bb.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === bb.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = bb.smugglerBoughtSlot, null !== bb.smugglerBoughtSlot) {
          var ab, Ub;
          const Ab = this.deals[bb.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === Ab ? "" : this.dealName(Ab),
              amount: String(null !== (ab = null === Ab || void 0 === Ab ? void 0 : Ab.smugglerDealAmount) && void 0 !== ab ? ab : 0)
            }
          }, this.boughtCount++, null === (Ub = this.onBought) || void 0 === Ub || Ub.call(this)
        } else null !== bb.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: bb.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(bb, ab, Ub) {
        this.translate = bb, void 0 !== Ub && (this.itemName = Ub), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(bb) {
        if (null !== bb.smugglerDealUniqueName) return bb.smugglerDealUniqueName;
        const ab = ZA[bb.smugglerDealItem];
        return void 0 === ab ? this.itemName(bb.smugglerDealItem) : this.translate(ab)
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
          deals: this.deals.map(((bb, ab) => ({
            slot: ab,
            itemName: bb.smugglerDealItem,
            displayName: this.dealName(bb),
            enchantmentTier: bb.smugglerDealEnchantmentTier,
            amount: bb.smugglerDealAmount,
            rivets: bb.smugglerDealRivets,
            crests: bb.smugglerDealCrests,
            affordable: this.canAfford(bb),
            soldOut: this.soldOut.has(ab),
            justBought: this.boughtSlot === ab
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
    const zA = "skyblockPassageView",
      xA = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function iA(bb, ab) {
      return bb(xA[ab])
    }

    function fA(bb, ab, Ub, Ab) {
      const Mb = Math.ceil((Ub - Ab) / 864e5),
        Tb = iA(bb, ab);
      return Mb > 1 ? bb("skyblockGame:passageNextDays", {
        phase: Tb,
        days: String(Mb)
      }) : bb("skyblockGame:passageNextSoon", {
        phase: Tb
      })
    }
    class mA extends Lb {
      constructor(bb, ab, Ub, Ab) {
        let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(bb, Ub, Ab), this.translate = ab, this.now = Mb, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = bb => bb, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      aj(bb) {
        this.message = bb, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(bb, ab, Ub) {
        this.translate = bb, void 0 !== Ub && (this.itemName = Ub), this.emit()
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
          phaseName: iA(this.translate, bb.passagePhase),
          visitors: bb.passageVisitors.map((bb => this.describe(bb))),
          resting: this.describe(bb.passageResting),
          nextPhase: bb.passageNextPhase,
          next: fA(this.translate, bb.passageNextPhase, bb.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var pA = Ub(37875);
    const NA = "skyblockKeepersChairView";
    class WA extends Lb {
      constructor(bb, ab, Ub, Ab, Mb) {
        let Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          Eb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new pA.b;
        super(bb, Ub, Ab), this.translate = ab, this.requestAim = Mb, this.now = Tb, this.pacer = Eb, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = bb => bb, this.aim = bb => {
          !this.awaitingReply && this.open && this.atChair && bb !== this.favoured && (null === bb || this.islands.some((ab => ab.keepersChairIslandId === bb && ab.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== bb && void 0 !== bb ? bb : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Eb.subscribe((() => {
          this.emit()
        }))
      }
      aj(bb) {
        var ab, Ub;
        this.received = !0;
        const Ab = this.favoured,
          Mb = this.atChair;
        var Tb;
        return this.islands = bb.keepersChairIslands, this.favoured = bb.keepersChairFavoured, this.passage = null !== (ab = bb.keepersChairPassage) && void 0 !== ab ? ab : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (Ub = bb.keepersChairAtChair) || void 0 === Ub || Ub, "place" === bb.keepersChairMessageKind ? (!Mb && this.atChair && "refused" === (null === (Tb = this.status) || void 0 === Tb ? void 0 : Tb.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === bb.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== bb.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: bb.keepersChairRefusalKey,
          island: null
        } : this.favoured !== Ab && (this.status = null === this.favoured ? {
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
      setTranslator(bb, ab, Ub) {
        this.translate = bb, void 0 !== Ub && (this.itemName = Ub), this.emit()
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
        const ab = this.islands.find((ab => ab.keepersChairIslandId === bb));
        return void 0 === ab ? bb : this.translate(ab.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const bb = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          ab = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((bb => {
            const ab = bb.keepersChairFeaturedFish;
            return {
              id: bb.keepersChairIslandId,
              name: this.translate(bb.keepersChairIslandNameKey),
              relit: bb.keepersChairIslandRelit,
              featuredFish: null === ab ? null : {
                itemName: ab,
                displayName: this.itemName(ab)
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
          almanac: null === ab ? null : {
            phase: ab.keepersChairPassagePhase,
            phaseName: iA(this.translate, ab.keepersChairPassagePhase),
            nextPhase: ab.keepersChairPassageNextPhase,
            next: fA(this.translate, ab.keepersChairPassageNextPhase, ab.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const HA = "skyblockReachLogView",
      IA = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      dA = "Caught Fish",
      FA = [1, 2, 4];

    function hA(bb, ab) {
      return bb.map((bb => ({
        ...bb,
        reachLogPageFish: bb.reachLogPageFish.map((bb => ({
          ...bb,
          reachLogFishFresh: ab(bb)
        })))
      })))
    }
    class GA extends Lb {
      constructor(bb, ab, Ub, Ab, Mb) {
        let Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new pA.b;
        super(bb, Ub, Ab), this.translate = ab, this.requestOpen = Mb, this.pacer = Tb, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = bb => bb, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = bb => {
          this.pages.some((ab => ab.reachLogIslandId === bb)) && (this.selected = bb, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Tb.subscribe((() => {
          this.emit()
        }))
      }
      aj(bb) {
        if (this.received = !0, "status" === bb.reachLogMessageKind) return !0 === bb.reachLogNews && this.markNews(), this.serverFresh = bb.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const ab = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== bb.reachLogMessageKind)
          if (this.pageViews = null, this.pages = hA(bb.reachLogPages, (bb => bb.reachLogFishFresh || this.heldFresh.has(bb.reachLogFishItem))), this.letGoShown = bb.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, ab) this.showPages();
          else {
            for (const bb of this.pages)
              for (const ab of bb.reachLogPageFish) ab.reachLogFishFresh && this.heldFresh.add(ab.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(bb, ab, Ub) {
        this.translate = bb, this.pageViews = null, void 0 !== Ub && (this.itemName = Ub), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = hA(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var bb, ab, Ub, Ab;
        const Mb = this.pages.find((bb => bb.reachLogPageFish.some((bb => bb.reachLogFishFresh))));
        if (void 0 !== Mb) return Mb.reachLogIslandId;
        if (null !== this.selected && this.pages.some((bb => bb.reachLogIslandId === this.selected))) return this.selected;
        return null !== (bb = null !== (ab = null === (Ub = this.pages.filter((bb => bb.reachLogIslandAwake)).at(-1)) || void 0 === Ub ? void 0 : Ub.reachLogIslandId) && void 0 !== ab ? ab : null === (Ab = this.pages[0]) || void 0 === Ab ? void 0 : Ab.reachLogIslandId) && void 0 !== bb ? bb : null
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
          var ab;
          return {
            id: bb.reachLogIslandId,
            name: this.translate(bb.reachLogIslandNameKey),
            awake: bb.reachLogIslandAwake,
            gold: bb.reachLogPageGold,
            caught: bb.reachLogPageFish.filter((bb => bb.reachLogFishCaught && !bb.reachLogFishVisitor)).length,
            total: bb.reachLogPageFish.filter((bb => !bb.reachLogFishVisitor)).length,
            fish: bb.reachLogPageFish.map((bb => {
              const ab = bb.reachLogFishBestKg;
              return {
                itemName: bb.reachLogFishItem,
                name: bb.reachLogFishCaught ? this.itemName(bb.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: bb.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / bb.reachLogFishChance))
                }),
                best: bb.reachLogFishCaught ? null === ab ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: ab.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: bb.reachLogFishMarks,
                ribbons: FA.map((ab => 0 !== (bb.reachLogFishRibbons & ab))),
                glimmer: 0 !== (8 & bb.reachLogFishRibbons),
                halo: 0 !== (32 & bb.reachLogFishRibbons),
                fresh: bb.reachLogFishFresh,
                visitor: bb.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (ab = bb.reachLogPageReturner) && void 0 !== ab ? ab : null)
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
    const QA = "skyblockLampLightView";
    class qA {
      constructor(bb, ab, Ub, Ab) {
        this.IR = bb, this.translate = ab, this.requestCommand = Ub, this.pacer = Ab, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.cX = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = bb => {
          bb ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = bb => {
          this.send(`buy ${bb}`)
        }, this.socket = bb => {
          this.send(`socket ${null!==bb&&void 0!==bb?bb:Qb}`)
        }, this.wearTint = bb => {
          this.send(`tint ${null!==bb&&void 0!==bb?bb:Qb}`)
        }, this.setSituation = bb => {
          this.situation = bb, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Ab.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = Ab.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      aj(bb) {
        if (this.message = bb, null !== bb.lampLightShop && (this.shop = bb.lampLightShop), "open" === bb.lampLightKind && (this.refusalKey = null), "reply" === bb.lampLightKind) {
          var ab;
          const Mb = null !== (ab = bb.lampLightReplyTag) && void 0 !== ab ? ab : null,
            Tb = null !== Mb && Mb === this.offTag;
          var Ub, Ab;
          if (Tb ? this.settleOff() : null !== Mb && Mb !== this.awaitingTag || this.settleReply(), this.refusalKey = bb.lampLightRefusalKey, null !== bb.lampLightBought && !Tb) this.sparkle = {
            id: bb.lampLightBought,
            count: (null !== (Ub = null === (Ab = this.sparkle) || void 0 === Ab ? void 0 : Ab.count) && void 0 !== Ub ? Ub : 0) + 1
          }
        }
        bb.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === bb.lampLightKind && (this.lastGained = bb.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(bb) {
        bb !== this.atChair && (this.atChair = bb, bb && (this.refusalKey = null), this.emit())
      }
      setTranslator(bb, ab) {
        this.translate = bb, this.locale = null !== ab && void 0 !== ab ? ab : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.cX = !0
      }
      send(bb) {
        var ab;
        if (null !== this.awaitingTag || "ready" !== (null === (ab = this.message) || void 0 === ab ? void 0 : ab.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const Ub = this.nextTag();
        this.awaitingTag = Ub, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${bb} ${Ub}`), this.emit()
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
        this.cX || (this.snapshot = this.buildSnapshot(), this.IR(this.snapshot))
      }
      formatLight(bb) {
        return Math.floor(bb).toLocaleString(this.locale)
      }
      formatPercent(bb) {
        const ab = 100 * bb;
        return ab >= 10 ? Math.round(ab).toLocaleString(this.locale) : ab.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(bb, ab) {
        if ("bite" === bb) return this.translate("skyblockGame:lampLightBite", {
          seconds: (ab.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === bb) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(ab.lampLightRareChance)
        });
        if ("notice" === bb) return null === ab.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(ab.lampLightNoticeChance)
        });
        const Ub = "meter" === bb ? ab.lampLightMeterCatches : ab.lampLightBloomCatches;
        return null === Ub ? null : this.translate("meter" === bb ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(Ub))
        })
      }
      oddsLines(bb, ab) {
        const Ub = (bb, ab) => {
            var Ub;
            return null !== (Ub = {
              bite: ab.lampLightBiteMs,
              rare: ab.lampLightRareChance,
              meter: ab.lampLightMeterCatches,
              bloom: ab.lampLightBloomCatches,
              notice: ab.lampLightNoticeChance
            } [bb]) && void 0 !== Ub ? Ub : 0
          },
          Ab = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          Mb = [];
        for (const Tb of ["bite", "rare", "meter", "bloom", "notice"]) {
          const Eb = this.formatOdds(Tb, bb),
            Yb = this.formatOdds(Tb, ab);
          if (null === Eb || null === Yb || "bite" !== Tb && "rare" !== Tb && Eb === Yb) continue;
          const Bb = Ub(Tb, ab) - Ub(Tb, bb),
            eb = Ab[Tb] ? Bb < 0 : Bb > 0;
          Mb.push({
            label: Tb,
            before: Eb,
            after: Yb,
            tone: Eb === Yb ? "same" : eb ? "better" : "worse"
          })
        }
        return Mb
      }
      charmView(bb, ab, Ub) {
        const Ab = bb.lampLightCharmId.charAt(0).toUpperCase() + bb.lampLightCharmId.slice(1),
          Mb = "bloom" === this.situation;
        return {
          id: bb.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${Ab}`),
          effect: this.translate(`skyblockGame:lampLightCharm${Ab}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(bb.lampLightCharmCost)
          }),
          owned: bb.lampLightCharmOwned,
          affordable: Ub >= bb.lampLightCharmCost,
          socketed: ab.lampLightSocketed === bb.lampLightCharmId,
          lines: this.oddsLines(Mb ? ab.lampLightBareBloom : ab.lampLightBareOpen, Mb ? bb.lampLightCharmBloom : bb.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var bb, ab, Ub, Ab;
        const Mb = this.message,
          Tb = "ready" === (null === Mb || void 0 === Mb ? void 0 : Mb.lampLightStatus) ? this.shop : null,
          Eb = null !== (bb = null === Mb || void 0 === Mb ? void 0 : Mb.lampLightBalance) && void 0 !== bb ? bb : 0,
          Yb = this.atChair,
          Bb = "loading" === (null === Mb || void 0 === Mb ? void 0 : Mb.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === Mb || void 0 === Mb ? void 0 : Mb.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          eb = "ready" !== (null === Mb || void 0 === Mb ? void 0 : Mb.lampLightStatus) || Yb ? null !== (ab = this.refusalKey) && void 0 !== ab ? ab : Bb : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== Mb && "locked" !== Mb.lampLightStatus,
          status: null !== (Ub = null === Mb || void 0 === Mb ? void 0 : Mb.lampLightStatus) && void 0 !== Ub ? Ub : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(Eb)
          }),
          releasing: null !== (Ab = null === Mb || void 0 === Mb ? void 0 : Mb.lampLightReleasing) && void 0 !== Ab && Ab,
          gained: null === Mb || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === Mb || void 0 === Mb ? void 0 : Mb.lampLightStatus) && Yb && !this.isPending(),
          situation: this.situation,
          shop: null === Tb ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: Tb.lampLightOddsRod,
              island: this.translate(Tb.lampLightIslandNameKey)
            }),
            heldRod: null !== Tb.lampLightHeldRod,
            charms: Tb.lampLightCharms.map((bb => this.charmView(bb, Tb, Eb))),
            tints: Tb.lampLightTints.map((bb => {
              const ab = bb.lampLightTintId,
                [Ub, Ab, Mb] = bb.lampLightTintColour;
              return {
                id: ab,
                name: this.translate(`skyblockGame:lampLightTint${ab.charAt(0).toUpperCase()}${ab.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(bb.lampLightTintCost)
                }),
                owned: bb.lampLightTintOwned,
                affordable: Eb >= bb.lampLightTintCost,
                wearing: Tb.lampLightTint === ab,
                colour: `rgb(${Ub}, ${Ab}, ${Mb})`
              }
            })),
            wearingIslandColours: null === Tb.lampLightTint
          },
          notice: null === eb ? null : this.translate(eb),
          sparkle: this.sparkle
        }
      }
    }
    const uA = "skyblockMagmawardView";
    class rA {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.IR = bb, this.now = ab, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = tb.map((() => 0)), this.wornAt = tb.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      aj(bb) {
        var ab, Ub;
        const Ab = tb.map(((ab, Ub) => !0 === bb.magmawardPiecesWorn[Ub]));
        if (!Ab.includes(!0)) return this.snapshot = null, void this.IR(null);
        const Mb = this.now(),
          Tb = this.snapshot;
        null === Tb && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const Eb = bb.magmawardFuelCarried,
          Yb = !Ab.includes(!1);
        let Bb = null !== (ab = null === Tb || void 0 === Tb ? void 0 : Tb.pulse) && void 0 !== ab ? ab : null,
          eb = null !== (Ub = null === Tb || void 0 === Tb ? void 0 : Tb.flare) && void 0 !== Ub ? Ub : null;
        bb.magmawardFuelBurned ? (Bb = "burn", eb = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = Mb, this.flareAt = Mb) : null !== Tb && Eb > Tb.fuel && (Bb = "gain", this.pulseToken++, this.pulseAt = Mb), Yb && null !== Tb && !Tb.fullSet && (eb = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = Mb, this.setLitAt = Mb);
        const vb = tb.map(((bb, ab) => (Ab[ab] && null !== Tb && !Tb.pieces[ab].worn && (this.wornTokens[ab]++, this.wornAt[ab] = Mb), {
          itemName: bb,
          worn: Ab[ab],
          wornToken: this.wornTokens[ab],
          justWorn: Ab[ab] && this.isPlaying(this.wornAt[ab], Mb)
        })));
        this.snapshot = {
          pieces: vb,
          wornCount: Ab.filter(Boolean).length,
          fullSet: Yb,
          fuel: Eb,
          fuelState: Eb <= 0 ? "empty" : Eb <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, Mb) ? Bb : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, Mb) ? eb : null,
          flareToken: this.flareToken,
          setLit: Yb && this.isPlaying(this.setLitAt, Mb),
          setLitToken: this.setLitToken
        }, this.IR(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.IR(null)
      }
      isPlaying(bb, ab) {
        return ab - bb < 1200
      }
    }
    const KA = "skyblockGlowtideView";
    class oA {
      constructor(bb) {
        this.IR = bb, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = bb => {
          this.arrow = bb, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      aj(bb) {
        this.bloom = bb.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.IR(null))
      }
      afterRender(bb, ab) {
        const Ub = this.bloom;
        if (null === Ub || null === bb) return;
        const Ab = Ub.glowtideBloomX - bb[0],
          Tb = Ub.glowtideBloomZ - bb[2],
          Eb = Math.hypot(Ab, Tb),
          Yb = this.snapshot,
          Bb = null !== Yb && void 0 !== Yb && Yb.inRange ? 1 : 0,
          eb = Eb <= 12.5 + Bb && bb[1] - Ub.glowtideBloomY <= 10 + Bb;
        !eb || null !== Yb && void 0 !== Yb && Yb.inRange || this.inRangeToken++;
        const vb = {
          colour: Ub.glowtideBloomColour,
          inRange: eb,
          distance: Math.round(Eb),
          inRangeToken: this.inRangeToken
        };
        (null === Yb || vb.colour !== Yb.colour || vb.inRange !== Yb.inRange || !eb && vb.distance !== Yb.distance) && (this.snapshot = vb, this.IR(vb));
        const Lb = Mb.d.computeShortestRotation(ab, (0, Mb.sb)([Ab, 0, Tb]));
        null === this.arrow || Math.abs(Lb - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${Lb}rad)`, this.arrowTurn = Lb)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.IR(null)
      }
    }
    const lA = "skyblockGlowMeterView";
    class tA {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.IR = bb, this.now = ab, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      aj(bb) {
        const ab = this.now(),
          {
            glowMeterFill: Ub,
            glowMeterCapacity: Ab
          } = bb,
          Mb = Ub >= Ab,
          Tb = this.snapshot;
        null !== Tb && (Mb && !Tb.full && (this.fullToken++, this.fullAt = ab), Tb.full && !Mb ? (this.burstToken++, this.burstAt = ab) : Ub > Tb.fill && (this.gainToken++, this.gainAt = ab)), this.snapshot = {
          fill: Ub,
          PL: Ab,
          ratio: Math.min(1, Math.max(0, Ub / Ab)),
          full: Mb,
          rares: bb.glowMeterRares,
          ready: Mb && this.isPlaying(this.fullAt, ab),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, ab),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, ab),
          gainToken: this.gainToken
        }, this.IR(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.IR(null)
      }
      isPlaying(bb, ab) {
        return ab - bb < 2e3
      }
    }
    const wA = "skyblockHushWaitView";
    class sA {
      constructor(bb) {
        this.IR = bb, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      aj(bb) {
        let {
          hushWaitMs: ab,
          hushWaitTotalMs: Ub,
          hushWaitLines: Ab
        } = bb;
        if (this.clearTimers(), this.token++, 0 === Ab.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (ab <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: Ab[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const Mb = Math.max(null !== Ub && void 0 !== Ub ? Ub : ab, ab),
          Tb = Mb - ab,
          Eb = bb => Mb * bb / Ab.length,
          Yb = bb => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: Mb,
              elapsedMs: Tb,
              line: Ab[bb],
              lineIndex: bb
            })
          };
        let Bb = 0;
        for (; Bb + 1 < Ab.length && Eb(Bb + 1) <= Tb;) Bb++;
        Yb(Bb);
        for (let eb = Bb + 1; eb < Ab.length; eb++) this.later(Eb(eb) - Tb, (() => {
          Yb(eb)
        }));
        this.later(ab, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(bb) {
        this.snapshot = bb, this.IR(bb)
      }
      later(bb, ab) {
        this.timers.push(setTimeout(ab, bb))
      }
      clearTimers() {
        for (const bb of this.timers) clearTimeout(bb);
        this.timers = []
      }
    }
    const gA = "skyblockTideChartsView",
      CA = 36e5,
      VA = 864e5;

    function OA(bb, ab, Ub) {
      const [Ab, Mb, Tb, Eb] = bb.tideChartArea, Yb = Math.floor(ab), Bb = Math.floor(Ub);
      return Yb >= Ab && Yb <= Tb && Bb >= Mb && Bb <= Eb
    }

    function cA(bb, ab, Ub) {
      const [Ab, Mb, Tb, Eb] = bb.tideChartWater;
      return function(bb, ab, Ub, Ab, Mb, Tb) {
        const Eb = 4 - wb(Math.floor(Mb) - (bb - Ub), Ub);
        return 5 * wb(Math.floor(Tb) - (ab - Ab), Ab) + Eb
      }(Ab, Mb, Tb, Eb, ab, Ub)
    }

    function JA(bb, ab, Ub) {
      const Ab = bb.tideCharts;
      for (let Mb = 0; Mb < Ab.length; Mb++)
        if (OA(Ab[Mb], ab, Ub)) return Ab[Mb];
      return null
    }

    function nA(bb, ab, Ub) {
      const Ab = Math.max(0, ab - Ub);
      return Ab > VA ? bb("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(Ab / VA))
      }) : Ab > CA ? bb("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(Ab / CA))
      }) : bb("skyblockGame:tideChartsTurnSoon")
    }
    class SA extends Lb {
      constructor(bb, ab, Ub, Ab) {
        let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(bb, Ub, Ab), this.translate = ab, this.now = Mb, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.GP = bb => {
          this.picked = bb, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      aj(bb) {
        const ab = this.message;
        if (null !== ab)
          for (const Ab of bb.tideCharts) {
            var Ub;
            const bb = ab.tideCharts.find((bb => bb.tideChartIsland === Ab.tideChartIsland)),
              Mb = Ab.tideChartLit & ~(null !== (Ub = null === bb || void 0 === bb ? void 0 : bb.tideChartLit) && void 0 !== Ub ? Ub : 0);
            void 0 !== bb && 0 !== Mb && (this.pulse = {
              island: Ab.tideChartIsland,
              cells: Mb,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = bb, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(bb, ab) {
        var Ub;
        const Ab = null === this.message || Number.isNaN(bb) ? null : JA(this.message, bb, ab),
          Mb = null !== (Ub = null === Ab || void 0 === Ab ? void 0 : Ab.tideChartIsland) && void 0 !== Ub ? Ub : null,
          Tb = null === Ab ? -1 : function(bb, ab, Ub) {
            const [Ab, Mb, Tb, Eb] = bb.tideChartWater;
            return function(bb, ab, Ub, Ab, Mb, Tb, Eb) {
              return ((Mb - bb) / (Ub + Eb)) ** 2 + ((Tb - ab) / (Ab + Eb)) ** 2 <= 1
            }(Ab, Mb, Tb, Eb, ab, Ub, 2) ? cA(bb, ab, Ub) : -1
          }(Ab, bb, ab);
        return (Mb !== this.hereIsland || Tb !== this.hereCell) && (this.hereIsland = Mb, this.hereCell = Tb, null !== Mb && (this.lastIsland = Mb), !0)
      }
      afterRender(bb) {
        if (null === this.message) return;
        this.lastX = null === bb ? Number.NaN : bb[0], this.lastZ = null === bb ? Number.NaN : bb[2];
        const ab = this.locate(this.lastX, this.lastZ),
          Ub = this.expirePulses();
        (ab || Ub || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const bb = this.now();
        return !(!this.open || bb - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = bb, nA(this.translate, this.message.tideChartTurnsInMs, bb - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(bb, ab) {
        const Ub = null === this.message ? null : JA(this.message, bb, ab);
        if (null === Ub) return;
        const Ab = cA(Ub, bb, ab);
        0 === (Ub.tideChartPreBlank & 1 << Ab) && (this.cast = {
          island: Ub.tideChartIsland,
          cell: Ab,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const bb = this.now();
        let ab = !1;
        return 0 !== this.pulse.cells && bb - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, ab = !0), null !== this.cast && bb - this.cast.atMs >= 1500 && (this.cast = null, ab = !0), ab
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
      findChart(bb, ab) {
        var Ub;
        return null !== (Ub = bb.tideCharts.find((bb => bb.tideChartIsland === ab))) && void 0 !== Ub ? Ub : null
      }
      describe(bb) {
        var ab, Ub, Ab;
        const Mb = bb.tideChartIsland,
          Tb = [];
        for (let Xb = 0; Xb < 25; Xb++) {
          const ab = 1 << Xb;
          0 !== (bb.tideChartLit & ab) ? Tb.push("lit") : 0 !== (bb.tideChartClear & ab) ? Tb.push("clear") : 0 !== (bb.tideChartPreBlank & ab) ? Tb.push("shore") : Tb.push("water")
        }
        const Eb = function(bb) {
            let ab = 0;
            for (let Ub = bb >>> 0; 0 !== Ub; Ub &= Ub - 1) ab++;
            return ab
          }(bb.tideChartLit),
          Yb = bb.tideChartInkCount,
          Bb = this.translate(bb.tideChartIslandNameKey),
          eb = this.translate("skyblockGame:tideChartsLit", {
            lit: String(Eb),
            ink: String(Yb)
          }),
          vb = null === bb.tideChartPictureNameKey ? null : this.translate(bb.tideChartPictureNameKey),
          Lb = this.hereIsland === Mb && -1 !== this.hereCell ? this.hereCell : null,
          Pb = [`${Bb}: ${eb}.`];
        if (null !== vb && Pb.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: vb
          })), null !== Lb) {
          const bb = Math.floor(Lb / 5) + 1,
            ab = Lb % 5 + 1;
          Pb.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(bb),
            column: String(ab)
          }))
        }
        return {
          island: Mb,
          islandName: Bb,
          cells: Tb,
          hereCell: Lb,
          lit: Eb,
          ink: Yb,
          litText: eb,
          pictureName: vb,
          gridLabel: Pb.join(" "),
          pulseCells: this.pulse.island === Mb ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (ab = this.cast) || void 0 === ab ? void 0 : ab.island) === Mb ? this.cast.cell : null,
          castToken: null !== (Ub = null === (Ab = this.cast) || void 0 === Ab ? void 0 : Ab.token) && void 0 !== Ub ? Ub : 0
        }
      }
      buildSnapshot() {
        var bb, ab, Ub;
        const Ab = this.message;
        if (null === Ab || 0 === Ab.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const Mb = this.findChart(Ab, this.hereIsland),
          Tb = null !== (bb = null !== (ab = null !== (Ub = this.findChart(Ab, this.open ? this.picked : null)) && void 0 !== Ub ? Ub : Mb) && void 0 !== ab ? ab : this.findChart(Ab, this.lastIsland)) && void 0 !== bb ? bb : Ab.tideCharts[0],
          Eb = null === Mb ? null : this.describe(Mb);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: Eb,
          card: Tb === Mb ? Eb : this.describe(Tb),
          turnsText: nA(this.translate, Ab.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(Ab.tideChartBookCount)
          }),
          tabs: Ab.tideCharts.map((bb => ({
            island: bb.tideChartIsland,
            name: this.translate(bb.tideChartIslandNameKey),
            selected: bb.tideChartIsland === Tb.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const bM = "skyblockRegularsView",
      aM = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      UM = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function AM(bb, ab) {
      return "given" === bb ? ab.given : "owed" === bb ? ab.owed : ab.goal
    }
    class MM extends Lb {
      constructor(bb, ab, Ub, Ab) {
        super(bb, Ub, Ab), this.translate = ab, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = bb => bb, this.openIsland = bb => {
          this.selected = bb, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = bb => {
          this.selected = bb, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      aj(bb) {
        this.message = bb, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const bb = this.openedFromReachLog;
        return this.openedFromReachLog = !1, bb
      }
      setTranslator(bb, ab, Ub) {
        this.translate = bb, void 0 !== Ub && (this.itemName = Ub), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(bb, ab, Ub) {
        return {
          text: this.translate(AM(bb, ab), Ub),
          given: "given" === bb
        }
      }
      describeRegular(bb, ab) {
        const Ub = this.translate,
          Ab = null !== bb.regularKg,
          Mb = bb.regularMeetings,
          Tb = Ab ? 0 === Mb ? Ub("skyblockGame:regularsNotMet") : 1 === Mb ? Ub("skyblockGame:regularsMeetingsOne") : Ub("skyblockGame:regularsMeetings", {
            count: Mb
          }) : "";
        return {
          id: bb.regularId,
          name: Ub(bb.regularNameKey),
          line: Ub(bb.regularLineKey),
          itemName: bb.regularFishItem,
          fishName: this.itemName(bb.regularFishItem),
          tagged: Ab,
          size: null === bb.regularKg ? Ub("skyblockGame:regularsNotTagged") : Ub("skyblockGame:regularsSize", {
            kg: bb.regularKg.toFixed(1)
          }),
          meetings: Tb,
          chance: Ub("skyblockGame:regularsChance", {
            count: bb.regularOneInCasts
          }),
          resting: bb.regularRestingToday,
          gifts: [{
            text: Ub("skyblockGame:regularsGiftFlare"),
            given: Mb >= 3
          }, this.describeGift(bb.regularTintGift, aM, {
            tint: Ub(bb.regularTintNameKey)
          })],
          history: [...bb.regularHistory].reverse().map((bb => {
            const Ab = bb.regularMeetingKg.toFixed(1),
              Mb = ab - bb.regularMeetingDay;
            return Mb <= 0 ? Ub("skyblockGame:regularsToday", {
              kg: Ab
            }) : Ub("skyblockGame:regularsDaysAgo", {
              days: Mb,
              kg: Ab
            })
          }))
        }
      }
      describeIsland(bb, ab) {
        return {
          id: bb.regularsIslandId,
          name: this.translate(bb.regularsIslandNameKey),
          charm: this.describeGift(bb.regularsCharmGift, UM, {
            charm: this.translate(bb.regularsCharmNameKey)
          }),
          regulars: bb.regularsList.map((bb => this.describeRegular(bb, ab)))
        }
      }
      buildSnapshot() {
        var bb, ab, Ub, Ab;
        const Mb = this.message;
        if (null === Mb) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const Tb = Mb.regularsIslands.map((bb => this.describeIsland(bb, Mb.regularsToday))),
          Eb = null !== (bb = null !== (ab = null === (Ub = Tb.find((bb => bb.id === this.selected))) || void 0 === Ub ? void 0 : Ub.id) && void 0 !== ab ? ab : null === (Ab = Tb[0]) || void 0 === Ab ? void 0 : Ab.id) && void 0 !== bb ? bb : "";
        return {
          enabled: !0,
          open: this.open,
          selected: Eb,
          islands: Tb
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const TM = "skyblockHiddenWatersView";
    class EM {
      constructor(bb) {
        this.IR = bb, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      aj(bb) {
        this.snapshot = function(bb) {
          const [ab, Ub] = bb.hiddenWatersMapSize, Ab = (bb, Ab) => ({
            left: 1 - bb / ab,
            top: Ab / Ub
          }), Mb = new Map;
          for (const [Eb, Yb] of bb.hiddenWatersGlimpses) {
            var Tb;
            const bb = null !== (Tb = Mb.get(Eb)) && void 0 !== Tb ? Tb : [];
            bb.push(Yb), Mb.set(Eb, bb)
          }
          return {
            found: bb.hiddenWatersFound,
            total: bb.hiddenWatersTotal,
            aspect: Ub / ab,
            pins: bb.hiddenWatersPins.map((bb => {
              let [ab, Ub] = bb;
              return Ab(ab, Ub)
            })),
            islands: bb.hiddenWatersIslands.map((bb => {
              let [Mb, Tb, Eb, Yb] = bb;
              const {
                left: Bb,
                top: eb
              } = Ab(Eb + 1, Tb);
              return {
                left: Bb,
                top: eb,
                width: (Eb + 1 - Mb) / ab,
                height: (Yb + 1 - Tb) / Ub
              }
            })),
            glimpses: Mb
          }
        }(bb), this.IR(this.snapshot)
      }
    }
    const YM = "skyblockDialogueView";
    class BM extends Lb {
      constructor(bb, ab, Ub, Ab, Mb) {
        let Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(bb, Ub, Ab), this.translate = ab, this.requestDialogue = Mb, this.now = Tb, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
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
      aj(bb) {
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
        const ab = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...ab,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const Ub = this.selection;
        if ("quest" === Ub.kind) {
          const bb = this.scripts.find((bb => bb.dialogueQuestId === Ub.questId));
          return {
            ...ab,
            characters: [],
            questFocus: Ub.questId,
            conversations: bb ? [this.conversation(bb)] : []
          }
        }
        const Ab = [];
        for (let Tb = this.scripts.length - 1; Tb >= 0; Tb--) {
          const bb = this.scripts[Tb].dialogueLines;
          for (let ab = bb.length - 1; ab >= 0; ab--) Ab.includes(bb[ab].dialogueSpeakerId) || Ab.push(bb[ab].dialogueSpeakerId)
        }
        const Mb = null !== Ub.npcId && Ab.includes(Ub.npcId) ? Ub.npcId : null !== (bb = Ab[0]) && void 0 !== bb ? bb : null;
        return {
          ...ab,
          characters: Ab.map((bb => {
            var ab, Ub;
            return {
              id: bb,
              styling: null !== (ab = null === (Ub = this.speakers.get(bb)) || void 0 === Ub ? void 0 : Ub.dialogueSpeakerStyling) && void 0 !== ab ? ab : bb,
              selected: bb === Mb
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((bb => bb.dialogueLines.some((bb => bb.dialogueSpeakerId === Mb)))).map((bb => this.conversation(bb))).reverse()
        }
      }
      conversation(bb) {
        let ab = null;
        return {
          questId: bb.dialogueQuestId,
          questName: this.translate(bb.dialogueQuestNameKey),
          completed: bb.dialogueQuestCompleted,
          lines: bb.dialogueLines.map(((bb, Ub) => {
            var Ab;
            const Mb = bb.dialogueSpeakerId === ab || null === (Ab = this.speakers.get(bb.dialogueSpeakerId)) || void 0 === Ab ? void 0 : Ab.dialogueSpeakerStyling;
            return ab = bb.dialogueSpeakerId, {
              key: Ub,
              display: {
                line: {
                  translationKey: bb.dialogueLineKey,
                  params: this.params(bb.dialogueLineParams)
                },
                speakerName: Mb,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(bb) {
        if (void 0 !== bb) return Object.fromEntries(Object.entries(bb).map((bb => {
          let [ab, Ub] = bb;
          return [ab, "string" === typeof Ub ? Ub : this.translate(Ub.translationKey)]
        })))
      }
    }
    var eM = Ub(574),
      vM = Ub(1208),
      LM = Ub(101);
    const PM = "skyblockAutographsView";

    function XM(bb) {
      const ab = eM.m[bb];
      return {
        label: ab.chatTag.map((bb => bb.str)).join(""),
        icon: ab.icon,
        colour: ab.mainRGB
      }
    }
    class jM extends Lb {
      constructor(bb) {
        let ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = ab, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      aj(bb) {
        this.signatures = bb.autographSignatures, bb.autographOpen ? this.show() : this.emit()
      }
      setTranslator(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = ab, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var bb;
        const ab = null !== (bb = this.signatures) && void 0 !== bb ? bb : [],
          Ub = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          Ab = [...ab].sort(((bb, ab) => Number(null !== ab.autographRank) - Number(null !== bb.autographRank) || ab.autographSignedAtMs - bb.autographSignedAtMs)).map((bb => ({
            key: `${bb.autographSignedAtMs}|${bb.autographSignerName}`,
            name: (0, vM.d)(bb.autographSignerName, !LM.featureFlags.canSeeRealPlayerNames),
            rank: null === bb.autographRank ? null : XM(bb.autographRank),
            signedOn: Ub.format(bb.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: Ab,
          total: Ab.length,
          rankTotal: Ab.filter((bb => null !== bb.rank)).length
        }
      }
    }
    const RM = "skyblockHudView",
      kM = () => {},
      yM = {
        getItem: () => null,
        setItem: kM,
        removeItem: kM
      };
    class ZM {
      constructor(bb) {
        let {
          translate: ab,
          translateWithIcons: Ub,
          setMenuOpen: Ab = kM,
          dismissMenu: Mb = () => {
            Ab(!1)
          },
          publishSkills: Tb = kM,
          publishQuests: Eb = kM,
          publishQuestNotification: Yb = kM,
          publishDungeons: Bb = kM,
          publishCollections: eb = kM,
          publishMap: vb = kM,
          publishHud: Lb = kM,
          publishPortalTransit: Pb = kM,
          publishDailyReward: jb = kM,
          publishMailbox: Rb = kM,
          publishQuestGraph: kb = kM,
          publishForge: yb = kM,
          publishSmuggler: Zb = kM,
          publishKeepersChair: Db = kM,
          publishReachLog: zb = kM,
          publishLampLight: xb = kM,
          publishMagmaward: ib = kM,
          publishGlowtide: mb = kM,
          publishGlowMeter: pb = kM,
          publishHushWait: Nb = kM,
          publishPassage: Wb = kM,
          publishTideCharts: Hb = kM,
          publishRegulars: Ib = kM,
          publishHiddenWaters: db = kM,
          publishDialogue: Fb = kM,
          publishAutographs: hb = kM,
          isLoadingScreenUp: Gb = () => !1,
          onDailyRewardCoinLanded: Qb = kM,
          onDailyRewardStarted: qb = kM,
          onDailyRewardFinished: ub = kM,
          onDailyRewardItemLanded: rb = kM,
          onMailboxStarted: Kb = kM,
          journeyStorage: ob = yM,
          requestTracking: lb = kM,
          requestTravel: tb = kM,
          requestDungeonEnter: wb = kM,
          requestQuestJump: sb = kM,
          requestQuestArrive: gb = kM,
          requestForge: Cb = kM,
          requestSmuggle: Vb = kM,
          requestKeepersChairAim: Ob = kM,
          requestReachLogOpen: cb = kM,
          requestLampLight: Jb = kM,
          requestDialogue: nb = kM
        } = bb;
        this.navigation = void 0, this.map = void 0, this.compass = new fb, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new pA.b, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = bb => bb, this.close = () => {
          for (const bb of this.panels) bb.close()
        }, this.setMenuOpen = Ab, this.publishHud = Lb, this.portalTransit = new KU(Pb, ob), this.magmaward = new rA(ib), this.glowtide = new oA(mb), this.glowMeter = new tA(pb), this.hushWait = new sA(Nb), this.dailyReward = new tU(jb, (() => Gb() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (bb => {
          this.quests.setNotificationsHeld(bb)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), Qb, qb, ub, rb);
        const Sb = bb => {
          this.panels.some((bb => bb.isOpen())) || (bb ? Mb() : this.setMenuOpen(!1))
        };
        this.skills = new EU(Tb, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), ab, void 0, void 0, Sb), this.quests = new LU(Eb, lb, ab, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, Sb, Yb), this.dungeons = new jU(Bb, ab, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, Sb, wb), this.collections = new qU(eb, ab, (() => {
          this.beforePanelOpen(this.collections)
        }), Sb), this.map = new Xb(vb, tb, ab, (() => {
          this.beforePanelOpen(this.map)
        }), Sb), this.questGraph = new nU(kb, ab, (() => {
          this.beforePanelOpen(this.questGraph)
        }), Sb, sb, gb, ob), this.forge = new kA(yb, ab, (() => {
          this.beforePanelOpen(this.forge)
        }), Sb, Cb), this.smuggler = new DA(Zb, ab, (() => {
          this.beforePanelOpen(this.smuggler)
        }), Sb, Vb), this.lampLight = new qA(xb, ab, Jb, this.commandPacer), this.keepersChair = new WA(Db, ab, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (bb => {
          this.lampLight.onChairClosed(), Sb(bb)
        }), Ob, Date.now, this.commandPacer), this.reachLog = new GA(zb, ab, (() => {
          this.beforePanelOpen(this.reachLog)
        }), Sb, cb, this.commandPacer), this.passage = new mA(Wb, ab, (() => {
          this.beforePanelOpen(this.passage)
        }), Sb), this.tideCharts = new SA(Hb, ab, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), Sb), this.regulars = new MM(Ib, ab, (() => {
          this.beforePanelOpen(this.regulars)
        }), (bb => {
          this.regulars.takeReturnToReachLog() && !bb && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), Sb(bb)
        })), this.hiddenWaters = new EM(db), this.dialogue = new BM(Fb, ab, (() => {
          this.beforePanelOpen(this.dialogue)
        }), Sb, nb), this.autographs = new jM(hb, (() => {
          this.beforePanelOpen(this.autographs)
        }), Sb), this.mailbox = new CU(Rb, (() => Gb() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), Kb), this.quests.translateWithIcons = null !== Ub && void 0 !== Ub ? Ub : null, this.skills.onLevelUp = bb => {
          this.quests.notify(bb)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new MU(this.map, this.quests, this.compass, ab)
      }
      getHudSnapshot() {
        const bb = this.hudSnapshot,
          ab = this.dailyReward.getHeldCoins();
        return null === bb || ab <= 0 || !("hudPurseCoins" in bb) ? bb : {
          ...bb,
          hudPurseCoins: Math.max(0, bb.hudPurseCoins - ab)
        }
      }
      receiveHud(bb) {
        this.hudSnapshot = bb, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(bb) {
        this.setMenuOpen(!0);
        const ab = bb === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = bb;
        for (const Ub of this.panels) Ub === bb || ab && Ub === this.reachLog || Ub.close();
        this.openingPanel = null
      }
      setTranslator(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ab => this.resolveItemName(ab, bb);
        this.quests.translateWithIcons = null !== Ub && void 0 !== Ub ? Ub : null, this.navigation.setTranslator(bb, ab), this.lampLight.setTranslator(bb, ab), this.mailbox.setItemName(Ab);
        for (const Mb of this.panels) Mb.setTranslator(bb, ab, Ab)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const bb of this.panels) bb.dispose()
      }
    }
    var DM = Ub(984),
      zM = Ub.n(DM),
      xM = Ub(19),
      iM = Ub(36013),
      fM = Ub(3083),
      mM = Ub(1812),
      pM = Ub(1794),
      NM = Ub(8930),
      WM = Ub(1134),
      HM = Ub(1345),
      IM = Ub(1023);

    function dM(bb) {
      let {
        controller: ab,
        minimap: Ub,
        children: Ab
      } = bb;
      const Tb = (0, HM.i)(RM, ab.getHudSnapshot()),
        [Eb, Yb] = (0, pb.useState)(ab.skills.getSnapshot().overallLevel);
      (0, HM.f)(TU, (bb => {
        Yb(bb.overallLevel)
      }));
      const Bb = (0, pb.useRef)(null);
      (0, HM.f)(lU, (bb => {
        ! function(bb, ab) {
          if (null === bb || "function" !== typeof bb.animate) return;
          const Ub = ab ? 1.35 : 1.15;
          bb.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${Ub})`
          }, {
            transform: "scale(1)"
          }], {
            duration: ab ? 320 : 160,
            easing: "ease-out"
          }), bb.classList.toggle("Receiving", !ab), ab && (bb.classList.remove("Shine"), bb.offsetWidth, bb.classList.add("Shine"))
        }(Bb.current, bb)
      }));
      const {
        t: eb
      } = (0, WM.A)(), {
        isTouchScreen: vb
      } = (0, xM.n)(["isTouchScreen"]), [Lb, Pb] = (0, pb.useState)(null);
      return (0, fM.k)(Lb, ".SkyblockRightHud"), null !== Tb || Ub ? (0, IM.jsx)(iM.e, {
        placement: "topRight",
        children: (0, IM.jsxs)("div", {
          className: zM()("SkyblockRightHud", {
            TouchScreen: vb
          }),
          children: [Ub, null !== Tb && (0, IM.jsxs)("div", {
            ref: Pb,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in Tb ? (0, IM.jsx)("div", {
              className: "SkyblockHudHelp",
              children: Tb.hudHelpText
            }) : (0, IM.jsxs)(IM.Fragment, {
              children: [(0, IM.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, IM.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, IM.jsx)("strong", {
                    style: {
                      color: Mb.E.cyanUiText
                    },
                    children: eb(Tb.hudZoneNameKey)
                  }), null !== Eb && (0, IM.jsx)("span", {
                    style: {
                      color: Mb.E.goldUiText
                    },
                    children: eb("skyblockGame:level", {
                      level: (0, NM.g)(Eb)
                    })
                  })]
                }), (0, IM.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: Bb,
                  children: [(0, IM.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, IM.jsx)(mM.c, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, NM.g)(Tb.hudPurseCoins)]
                })]
              }), Tb.hudClockText.length > 0 && (0, IM.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, IM.jsx)(pM.c, {
                  text: Tb.hudClockText
                })
              })]
            }), Ab, "hudZoneNameKey" in Tb && (0, IM.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function FM(bb) {
      let {
        icon: ab
      } = bb;
      const Ub = (0, pb.useCallback)((bb => {
        null === bb || void 0 === bb || bb.replaceChildren(ga(ab))
      }), [ab]);
      return (0, IM.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: Ub
      })
    }

    function hM(bb) {
      let {
        controller: ab
      } = bb;
      const {
        t: Ub
      } = (0, WM.A)();
      return (0, IM.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: ab.display.mountPlayer,
        title: Ub("skyblockGame:mapYouAreHere"),
        children: (0, IM.jsx)(FM, {
          icon: "player"
        })
      })
    }
    const GM = Ub(37878),
      QM = Object.fromEntries(GM.keys().map((bb => [bb.replace(/^\.\/(.*)\.png$/, "$1"), GM(bb)])));

    function qM(bb, ab) {
      var Ub;
      return null !== (Ub = QM[bb]) && void 0 !== Ub ? Ub : QM[ab]
    }

    function uM(bb) {
      let {
        imageKey: ab,
        fallbackImageKey: Ub,
        geometryKey: Ab,
        alt: Mb,
        className: Tb
      } = bb;
      const [Eb, Yb] = (0, pb.useState)((() => function(bb, ab) {
        return [{
          id: 0,
          imageKey: bb,
          geometryKey: ab,
          phase: "shown"
        }]
      }(ab, Ab))), Bb = function(bb, ab, Ub) {
        const Ab = bb[bb.length - 1];
        if (Ab.imageKey === ab && Ab.geometryKey === Ub) return bb;
        const Mb = {
          id: Ab.id + 1,
          imageKey: ab,
          geometryKey: Ub,
          phase: "entering"
        };
        return Ab.geometryKey === Ub ? [{
          ...Ab,
          phase: "leaving"
        }, Mb] : [Mb]
      }(Eb, ab, Ab);
      return Bb !== Eb && Yb(Bb), (0, IM.jsx)(IM.Fragment, {
        children: Bb.map((bb => (0, IM.jsx)("img", {
          className: zM()("SkyblockMapTerrainImage", Tb, {
            Entering: "entering" === bb.phase,
            Leaving: "leaving" === bb.phase
          }),
          src: qM(bb.imageKey, Ub),
          alt: "leaving" === bb.phase ? "" : Mb,
          onAnimationEnd: () => {
            Yb((ab => function(bb, ab) {
              return bb.flatMap((bb => bb.id !== ab ? [bb] : "leaving" === bb.phase ? [] : [{
                ...bb,
                phase: "shown"
              }]))
            }(ab, bb.id)))
          }
        }, bb.id)))
      })
    }
    var rM = Ub(4211),
      KM = Ub(1352);

    function oM(bb) {
      if ("Tab" !== bb.key) return;
      const ab = Array.from(bb.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        Ub = ab.indexOf(document.activeElement);
      var Ab;
      if (bb.shiftKey && Ub <= 0) bb.preventDefault(), null === (Ab = ab.at(-1)) || void 0 === Ab || Ab.focus();
      else if (!bb.shiftKey && (-1 === Ub || Ub === ab.length - 1)) {
        var Mb;
        bb.preventDefault(), null === (Mb = ab[0]) || void 0 === Mb || Mb.focus()
      }
    }

    function lM() {
      const bb = (0, pb.useRef)(null);
      return (0, pb.useCallback)((ab => {
        var Ub;
        ab ? (bb.current = document.activeElement, ab.focus()) : null === (Ub = bb.current) || void 0 === Ub || Ub.focus()
      }), [])
    }

    function tM(bb) {
      let {
        percent: ab,
        label: Ub,
        levelUpToken: Ab,
        colour: Mb
      } = bb;
      return (0, IM.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": Ub,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": ab,
        "aria-valuetext": Ub,
        children: [(0, IM.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${ab/100})`
          }
        }), null !== Ab && void 0 !== Ab && (0, IM.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": Mb
          }
        }, Ab)]
      })
    }

    function wM(bb) {
      let {
        mount: ab
      } = bb;
      return (0, IM.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: ab,
        hidden: !0,
        children: (0, IM.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, IM.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, IM.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function sM(bb, ab, Ub, Ab) {
      (0, pb.useLayoutEffect)((() => {
        const Mb = bb.current;
        if (!Ub || null === ab || void 0 === ab || !ab.local || !Mb) return;
        const Tb = Array.from(Mb.querySelectorAll(".SkyblockMapNode")),
          Eb = [...ab.points, ...ab.portals],
          Yb = () => {
            const bb = Mb.clientWidth,
              Ub = Mb.clientHeight,
              Yb = Tb.map(((Mb, Tb) => {
                const Yb = Eb[Tb];
                return {
                  id: Yb.id,
                  portal: Tb >= ab.points.length,
                  x: Yb.position[0] * bb / 100,
                  y: Yb.position[1] * Ub / 100,
                  width: Mb.offsetWidth / Ab,
                  height: Mb.offsetHeight / Ab
                }
              })),
              Bb = new Map(Eb.map(((bb, ab) => [bb.id, Tb[ab]])));
            for (const ab of function(bb, ab, Ub) {
                const Ab = [],
                  Mb = [...bb].sort(((bb, ab) => Number(ab.portal) - Number(bb.portal) || bb.id.localeCompare(ab.id)));
                for (const Tb of Mb) {
                  const bb = bb => Math.max(Tb.width / 2, Math.min(ab - Tb.width / 2, bb)),
                    Mb = bb => Math.max(Tb.height / 2, Math.min(Ub - Tb.height / 2, bb)),
                    Eb = [bb(Tb.x)],
                    Yb = [Mb(Tb.y)];
                  for (const ab of Ab) Eb.push(bb(ab.x - (ab.width + Tb.width) / 2 - 4), bb(ab.x + (ab.width + Tb.width) / 2 + 4)), Yb.push(Mb(ab.y - (ab.height + Tb.height) / 2 - 4), Mb(ab.y + (ab.height + Tb.height) / 2 + 4));
                  let Bb = {
                      ...Tb,
                      x: Eb[0],
                      y: Yb[0]
                    },
                    eb = 1 / 0,
                    vb = 1 / 0;
                  for (const ab of new Set(Eb))
                    for (const bb of new Set(Yb)) {
                      let Ub = 0;
                      for (const Eb of Ab) Ub += Math.max(0, (Tb.width + Eb.width) / 2 + 4 - Math.abs(ab - Eb.x)) * Math.max(0, (Tb.height + Eb.height) / 2 + 4 - Math.abs(bb - Eb.y));
                      const Mb = (ab - Tb.x) ** 2 + (bb - Tb.y) ** 2;
                      (Ub < eb || Ub === eb && Mb < vb) && (Bb = {
                        ...Tb,
                        x: ab,
                        y: bb
                      }, eb = Ub, vb = Mb)
                    }
                  Ab.push(Bb)
                }
                return Ab
              }(Yb, bb, Ub)) {
              const bb = Bb.get(ab.id);
              bb.style.left = `${ab.x}px`, bb.style.top = `${ab.y}px`
            }
          };
        Yb();
        const Bb = new ResizeObserver(Yb);
        Bb.observe(Mb);
        for (const bb of Tb) Bb.observe(bb);
        return () => {
          Bb.disconnect()
        }
      }), [bb, ab, Ub, Ab])
    }
    const gM = {
        zoom: 1,
        x: 0,
        y: 0
      },
      CM = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function VM(bb, ab, Ub) {
      return Math.min(Ub, Math.max(ab, bb))
    }

    function OM(bb, ab, Ub) {
      const Ab = Math.min(1, Ub * ab / bb),
        Mb = Math.min(1, bb / (Ub * ab));
      return {
        x0: (1 - Ab) / 2,
        y0: (1 - Mb) / 2,
        x1: (1 + Ab) / 2,
        y1: (1 + Mb) / 2
      }
    }

    function cM(bb, ab, Ub, Ab) {
      const Mb = ab * (Ab - Ub);
      if (Mb <= 1) return .5 - ab * (Ub + Ab) / 2;
      const Tb = .45 * Math.min(1, Mb - 1);
      return VM(bb, 1 - ab * Ab - Tb, Tb - ab * Ub)
    }

    function JM(bb, ab) {
      const Ub = VM(bb.zoom, 1, 12);
      return {
        zoom: Ub,
        x: cM(bb.x, Ub, ab.x0, ab.x1),
        y: cM(bb.y, Ub, ab.y0, ab.y1)
      }
    }

    function nM(bb, ab, Ub, Ab) {
      let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : CM;
      const Tb = VM(bb.zoom * ab, 1, 12),
        Eb = Tb / bb.zoom;
      return JM({
        zoom: Tb,
        x: Ub - (Ub - bb.x) * Eb,
        y: Ab - (Ab - bb.y) * Eb
      }, Mb)
    }

    function SM(bb, ab, Ub, Ab) {
      const [Mb, Tb] = (0, pb.useState)(gM);
      (0, pb.useEffect)((() => {
        Tb(gM)
      }), [Ub]), (0, pb.useEffect)((() => {
        const Ub = bb.current;
        if (!ab || !Ub) return;
        const Mb = () => OM(Ub.clientWidth, Ub.clientHeight, Ab),
          Eb = bb => {
            const ab = Ub.getBoundingClientRect();
            return {
              x: (bb.clientX - ab.left) / ab.width,
              y: (bb.clientY - ab.top) / ab.height
            }
          },
          Yb = new Map;
        let Bb = {
            x: 0,
            y: 0
          },
          eb = !1,
          vb = 0;
        const Lb = bb => {
            bb.preventDefault();
            const ab = bb.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * bb.deltaY : bb.deltaY,
              Ub = Eb(bb);
            Tb((bb => nM(bb, Math.exp(.0015 * -ab), Ub.x, Ub.y, Mb())))
          },
          Pb = bb => {
            "mouse" === bb.pointerType && 0 !== bb.button || (Yb.set(bb.pointerId, Eb(bb)), 1 === Yb.size && (Bb = {
              x: bb.clientX,
              y: bb.clientY
            }, eb = !1), vb = 0)
          },
          Xb = bb => {
            const ab = Yb.get(bb.pointerId);
            if (!ab) return;
            const Ab = Eb(bb);
            if (Yb.set(bb.pointerId, Ab), 2 === Yb.size) {
              const [bb, ab] = [...Yb.values()], Ub = Math.hypot(bb.x - ab.x, bb.y - ab.y);
              if (vb > 0) {
                const Ab = Ub / vb;
                Tb((Ub => nM(Ub, Ab, (bb.x + ab.x) / 2, (bb.y + ab.y) / 2, Mb())))
              }
              return vb = Ub, void(eb = !0)
            }!eb && Math.hypot(bb.clientX - Bb.x, bb.clientY - Bb.y) < 4 || (eb || (eb = !0, Ub.setPointerCapture(bb.pointerId)), Tb((bb => function(bb, ab, Ub) {
              let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : CM;
              return JM({
                zoom: bb.zoom,
                x: bb.x + ab,
                y: bb.y + Ub
              }, Ab)
            }(bb, Ab.x - ab.x, Ab.y - ab.y, Mb()))))
          },
          jb = bb => {
            Yb.delete(bb.pointerId), vb = 0
          },
          Rb = bb => {
            eb && (bb.stopPropagation(), bb.preventDefault(), eb = !1)
          },
          kb = new ResizeObserver((() => {
            Tb((bb => JM(bb, Mb())))
          }));
        return kb.observe(Ub), Ub.addEventListener("wheel", Lb, {
          passive: !1
        }), Ub.addEventListener("pointerdown", Pb), Ub.addEventListener("pointermove", Xb), Ub.addEventListener("pointerup", jb), Ub.addEventListener("pointercancel", jb), Ub.addEventListener("click", Rb, !0), () => {
          kb.disconnect(), Ub.removeEventListener("wheel", Lb), Ub.removeEventListener("pointerdown", Pb), Ub.removeEventListener("pointermove", Xb), Ub.removeEventListener("pointerup", jb), Ub.removeEventListener("pointercancel", jb), Ub.removeEventListener("click", Rb, !0)
        }
      }), [bb, ab, Ub, Ab]);
      return {
        view: Mb,
        zoomBy: ab => {
          const Ub = bb.current;
          Ub && Tb((bb => nM(bb, ab, .5, .5, OM(Ub.clientWidth, Ub.clientHeight, Ab))))
        }
      }
    }

    function bT(bb) {
      var ab, Ub, Ab, Mb;
      let {
        controller: Tb,
        navigation: Eb
      } = bb;
      const Yb = (0, HM.i)(Pb, Tb.getSnapshot()),
        {
          t: Bb
        } = (0, WM.A)(),
        eb = lM(),
        vb = Yb.presentation,
        Lb = (0, pb.useRef)(null),
        Xb = (0, pb.useRef)(null),
        jb = Boolean(Yb.open && (null === vb || void 0 === vb ? void 0 : vb.local) && vb.background),
        Rb = SM(Lb, jb, `${Yb.open}|${Yb.tab}|${null===vb||void 0===vb||null===(ab=vb.background)||void 0===ab?void 0:ab.geometryKey}`, null !== (Ub = null === vb || void 0 === vb || null === (Ab = vb.background) || void 0 === Ab ? void 0 : Ab.ratio) && void 0 !== Ub ? Ub : 2);
      if (sM(Xb, vb, Yb.open, Rb.view.zoom), !vb || !Yb.open) return null;
      const kb = vb.local ? vb.background : null,
        yb = {
          "--map-ratio": String(null !== (Mb = null === kb || void 0 === kb ? void 0 : kb.ratio) && void 0 !== Mb ? Mb : 2),
          backgroundColor: null === kb || void 0 === kb ? void 0 : kb.colour
        },
        Zb = {
          "--map-zoom": String(Rb.view.zoom),
          transform: `translate(${100*Rb.view.x}%, ${100*Rb.view.y}%) scale(${Rb.view.zoom})`
        };
      return (0, IM.jsx)(rM.d, {
        show: Yb.open,
        close: Tb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, IM.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: eb,
          onKeyDown: oM,
          children: [(0, IM.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, IM.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, IM.jsx)("h2", {
                id: "skyblockMapTitle",
                children: Bb("skyblockGame:map")
              }), vb.minimap && (0, IM.jsx)("p", {
                children: vb.minimap.caption
              })]
            }), (0, IM.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((bb => (0, IM.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": bb === Yb.tab ? "true" : void 0,
                className: zM()({
                  Selected: bb === Yb.tab
                }),
                "aria-pressed": bb === Yb.tab,
                onClick: () => {
                  Tb.selectTab(bb)
                },
                children: Bb("local" === bb ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, bb)))
            }), (0, IM.jsx)(KM.k, {
              padIgnore: !0,
              onClick: Tb.dismiss
            })]
          }), (0, IM.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, IM.jsxs)("div", {
              ref: Lb,
              className: zM()("SkyblockMapCanvas", {
                Local: vb.local,
                Overview: !vb.local,
                Zoomed: Rb.view.zoom > 1
              }),
              style: yb,
              children: [(0, IM.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: jb ? Zb : void 0,
                children: (0, IM.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: Xb,
                  children: [kb && (0, IM.jsx)(uM, {
                    className: "SkyblockMapTerrain",
                    imageKey: kb.imageKey,
                    fallbackImageKey: kb.fallbackImageKey,
                    geometryKey: kb.geometryKey,
                    alt: kb.label
                  }), vb.local && (0, IM.jsx)(wM, {
                    mount: Eb.display.mountMapSearchArea
                  }), !vb.local && (0, IM.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: vb.connections.map((bb => (0, IM.jsx)("line", {
                      className: zM()({
                        Explored: bb.explored
                      }),
                      x1: bb.start[0],
                      y1: bb.start[1],
                      x2: bb.end[0],
                      y2: bb.end[1]
                    }, bb.id)))
                  }), vb.points.map((bb => {
                    const ab = !vb.local && bb.thumbnail ? QM[bb.thumbnail] : void 0;
                    return (0, IM.jsxs)("div", {
                      className: zM()("SkyblockMapNode", {
                        Current: bb.current
                      }),
                      style: {
                        left: `${bb.position[0]}%`,
                        top: `${bb.position[1]}%`
                      },
                      children: [(0, IM.jsxs)(KM.g, {
                        className: zM()("SkyblockMapPin", {
                          Unknown: !bb.visited,
                          Current: bb.current
                        }),
                        disabled: Yb.pending,
                        onClick: () => {
                          Tb.travel(bb.travelKind, bb.travelId)
                        },
                        children: [ab && (0, IM.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: ab,
                          alt: ""
                        }), !ab && (0, IM.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, IM.jsx)(FM, {
                            icon: bb.icon
                          })
                        }), (0, IM.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: bb.name
                        })]
                      }), bb.current && (0, IM.jsx)("span", {
                        className: zM()("SkyblockMapHereBadge", {
                          Above: bb.position[1] > 50
                        }),
                        children: Bb("skyblockGame:mapYouAreHere")
                      })]
                    }, bb.id)
                  })), vb.portals.map((bb => (0, IM.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${bb.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${bb.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, IM.jsxs)(KM.g, {
                      className: "SkyblockMapPin",
                      disabled: Yb.pending,
                      onClick: () => {
                        Tb.travel(bb.travelKind, bb.travelId)
                      },
                      children: [(0, IM.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: bb.colour
                        },
                        "aria-hidden": "true",
                        children: (0, IM.jsx)(FM, {
                          icon: bb.icon
                        })
                      }), (0, IM.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: bb.name
                      })]
                    })
                  }, bb.id))), vb.local && (0, IM.jsx)(hM, {
                    controller: Eb
                  })]
                })
              }), jb && (0, IM.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, IM.jsx)("button", {
                  type: "button",
                  "aria-label": Bb("skyblockGame:mapZoomIn"),
                  disabled: Rb.view.zoom >= 12,
                  onClick: () => {
                    Rb.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, IM.jsx)("button", {
                  type: "button",
                  "aria-label": Bb("skyblockGame:mapZoomOut"),
                  disabled: Rb.view.zoom <= 1,
                  onClick: () => {
                    Rb.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, IM.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: Yb.feedback
              })]
            })
          }), (0, IM.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [vb.progress && (0, IM.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, IM.jsx)("span", {
                children: vb.progress
              }), (0, IM.jsx)(tM, {
                percent: vb.percent,
                label: vb.progress
              })]
            }), vb.noLandmarks && (0, IM.jsx)("span", {
              children: Bb("skyblockGame:mapNoLandmarks")
            }), vb.canTravel && (0, IM.jsx)("span", {
              className: "SkyblockMapHint",
              children: Bb("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function aT(bb) {
      let {
        view: ab,
        controller: Ub,
        navigation: Ab
      } = bb;
      const {
        t: Mb
      } = (0, WM.A)(), {
        isTouchScreen: Tb
      } = (0, xM.n)(["isTouchScreen"]);
      return (0, IM.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": Mb("skyblockGame:mapLocal"),
        children: [Tb && (0, IM.jsx)(KM.g, {
          className: "SkyblockMinimapOpen",
          onClick: Ub.showLocal,
          children: Mb("skyblockGame:map")
        }), (0, IM.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: ab.colour
          },
          children: [(0, IM.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: Ab.display.mountTerrain,
            style: {
              width: ab.width,
              height: ab.height
            },
            children: [(0, IM.jsx)(uM, {
              imageKey: ab.imageKey,
              fallbackImageKey: ab.fallbackImageKey,
              geometryKey: ab.geometryKey,
              alt: ab.label
            }), (0, IM.jsx)(wM, {
              mount: Ab.display.mountMinimapSearchArea
            }), ab.markers.map((bb => (0, IM.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${bb.position[0]}%`,
                top: `${bb.position[1]}%`,
                color: bb.colour
              },
              title: bb.name,
              children: (0, IM.jsx)(FM, {
                icon: bb.icon
              })
            }, bb.id)))]
          }), (0, IM.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: Mb("skyblockGame:mapYouAreHere"),
            children: (0, IM.jsx)(FM, {
              icon: "player"
            })
          })]
        }), (0, IM.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: ab.caption
        })]
      })
    }

    function UT(bb) {
      let {
        controller: ab
      } = bb;
      return (0, IM.jsxs)("div", {
        className: "SkyblockCompass",
        ref: ab.display.mountCompass,
        children: [(0, IM.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, IM.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, IM.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function AT(bb) {
      let {
        controller: ab,
        surface: Ub
      } = bb;
      const {
        t: Ab
      } = (0, WM.A)(), Mb = (0, HM.i)(TU, ab.getSnapshot()), Tb = lM();
      return Mb.enabled ? (0, IM.jsxs)(IM.Fragment, {
        children: ["hud" === Ub && (0, IM.jsx)(iM.e, {
          placement: "statBars",
          children: Mb.hud && (0, IM.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": Mb.hud.colour
            },
            children: [(0, IM.jsx)(tM, {
              percent: Mb.hud.skill.percent,
              label: Mb.hud.skill.xp,
              levelUpToken: Mb.hud.levelUpToken,
              colour: Mb.hud.colour
            }), (0, IM.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, IM.jsxs)("span", {
                children: [Mb.hud.skill.label, " \xb7 ", Mb.hud.skill.level]
              }), (0, IM.jsx)("span", {
                children: Mb.hud.gain
              })]
            })]
          })
        }), "hud" === Ub && (0, IM.jsx)(iM.e, {
          children: Mb.hud && (0, IM.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, IM.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, IM.jsx)("strong", {
                children: Mb.hud.skill.label
              }), (0, IM.jsx)("span", {
                children: Mb.hud.gain
              })]
            }), (0, IM.jsx)(tM, {
              percent: Mb.hud.skill.percent,
              label: Mb.hud.skill.xp,
              levelUpToken: Mb.hud.levelUpToken,
              colour: Mb.hud.colour
            }), (0, IM.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, IM.jsx)("span", {
                children: Mb.hud.skill.level
              }), (0, IM.jsx)("span", {
                children: Mb.hud.skill.xp
              })]
            })]
          })
        }), "menu" === Ub && (0, IM.jsx)(rM.d, {
          show: Mb.open,
          close: ab.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, IM.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: Tb,
            onKeyDown: oM,
            children: [(0, IM.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, IM.jsxs)("div", {
                children: [(0, IM.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: Ab("skyblockGame:skills")
                }), (0, IM.jsx)("p", {
                  children: Ab("skyblockGame:skillsIntro")
                })]
              }), (0, IM.jsx)(KM.k, {
                padIgnore: !0,
                onClick: ab.dismiss
              })]
            }), (0, IM.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, IM.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: Mb.skills.map((bb => (0, IM.jsxs)(KM.g, {
                  className: zM()("SkyblockSkillCard", {
                    Selected: bb.selected
                  }),
                  ariaPressed: bb.selected,
                  onClick: () => {
                    ab.select(bb.id)
                  },
                  children: [(0, IM.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, IM.jsx)(mM.c, {
                      itemName: bb.icon,
                      amount: 0
                    })
                  }), (0, IM.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, IM.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, IM.jsx)("strong", {
                        children: bb.label
                      }), (0, IM.jsx)("span", {
                        children: bb.level
                      })]
                    }), (0, IM.jsx)(tM, {
                      percent: bb.percent,
                      label: `${bb.label}: ${bb.xp}`
                    }), (0, IM.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: bb.xp
                    })]
                  })]
                }, bb.id)))
              }), Mb.detail && (0, IM.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, IM.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, IM.jsx)(mM.c, {
                    itemName: Mb.detail.icon,
                    amount: 0
                  })
                }), (0, IM.jsx)("h3", {
                  children: Mb.detail.label
                }), (0, IM.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: Mb.detail.level
                }), (0, IM.jsx)("p", {
                  children: Mb.detail.description
                }), (0, IM.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, IM.jsx)("strong", {
                    children: Ab("skyblockGame:currentBenefit")
                  }), (0, IM.jsx)("span", {
                    children: Mb.detail.benefit
                  })]
                }), (0, IM.jsx)(tM, {
                  percent: Mb.detail.percent,
                  label: Mb.detail.xp
                }), (0, IM.jsx)("p", {
                  children: Mb.detail.xp
                }), (0, IM.jsx)("h4", {
                  children: Ab("skyblockGame:earnXp")
                }), (0, IM.jsx)("ul", {
                  children: Mb.detail.sources.map((bb => (0, IM.jsx)("li", {
                    children: bb
                  }, bb)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var MT = Ub(1268),
      TT = Ub(4522),
      ET = Ub(307);

    function YT(bb) {
      let {
        item: ab
      } = bb;
      return (0, IM.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, IM.jsx)(mM.c, {
          itemName: ab,
          amount: 0
        })
      })
    }

    function BT(bb) {
      let {
        name: ab,
        percent: Ub,
        progress: Ab
      } = bb;
      return (0, IM.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, IM.jsx)(tM, {
          percent: Ub,
          label: `${(0,ET.nb)(ab)}: ${Ab}`
        }), (0, IM.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: Ab
        })]
      })
    }

    function eT(bb) {
      let {
        subquests: ab,
        showDescriptions: Ub = !1
      } = bb;
      return (0, IM.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: ab.map((bb => {
          const ab = Ub && "completed" === bb.status,
            Ab = (0, IM.jsxs)("li", {
              className: zM()("SkyblockQuestStep", bb.status, {
                JustFinished: bb.justFinished,
                JustUnlocked: bb.justUnlocked
              }),
              tabIndex: ab ? 0 : void 0,
              children: [null !== bb.iconItem && (0, IM.jsx)(YT, {
                item: bb.iconItem
              }), null === bb.iconItem && (0, IM.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === bb.status ? "\u2713" : "skipped" === bb.status ? "\u2212" : "\u25cb"
              }), (0, IM.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, IM.jsx)("strong", {
                  children: (0, IM.jsx)(TT.c, {
                    text: bb.name
                  })
                }), Ub && !ab && (0, IM.jsx)("span", {
                  children: (0, IM.jsx)(TT.c, {
                    text: bb.description
                  })
                }), null !== bb.barPercent && (0, IM.jsx)(BT, {
                  name: bb.name,
                  percent: bb.barPercent,
                  progress: bb.progress
                }), null === bb.barPercent && !ab && (0, IM.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: bb.statusLabel
                })]
              })]
            }, bb.id);
          return ab ? (0, IM.jsx)(MT.g, {
            delayShow: 200,
            tooltipInner: (0, IM.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, IM.jsx)("span", {
                children: (0, IM.jsx)(TT.c, {
                  text: bb.description
                })
              }), (0, IM.jsx)("strong", {
                children: bb.statusLabel
              })]
            }),
            children: Ab
          }, bb.id) : Ab
        }))
      })
    }

    function vT(bb) {
      let {
        quest: ab,
        select: Ub
      } = bb;
      const {
        t: Ab
      } = (0, WM.A)(), Mb = ab.focusStep;
      return (0, IM.jsxs)(KM.g, {
        className: zM()("SkyblockQuestCard", {
          Selected: ab.selected,
          Tracked: ab.tracked
        }),
        onClick: () => {
          Ub(ab.id)
        },
        children: [(0, IM.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, IM.jsx)("strong", {
            children: (0, IM.jsx)(TT.c, {
              text: ab.name
            })
          }), ab.tracked && (0, IM.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: Ab("skyblockGame:currentQuest")
          })]
        }), Mb && (0, IM.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== Mb.iconItem && (0, IM.jsx)(YT, {
            item: Mb.iconItem
          }), (0, IM.jsx)(BT, {
            name: Mb.name,
            percent: Mb.barPercent,
            progress: Mb.progress
          })]
        }), (0, IM.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: ab.progress
        })]
      })
    }

    function LT(bb) {
      let {
        controller: ab,
        surface: Ub
      } = bb;
      const Ab = (0, HM.i)(eU, ab.getSnapshot()),
        {
          t: Mb
        } = (0, WM.A)(),
        Tb = lM();
      return Ab.enabled ? (0, IM.jsxs)(IM.Fragment, {
        children: ["hud" === Ub && (0, IM.jsx)(IM.Fragment, {
          children: Ab.tracked && (0, IM.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: BU,
            children: (0, IM.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [Ab.trackedStepPulse > 0 && (0, IM.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, Ab.trackedStepPulse), (0, IM.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: Mb("skyblockGame:currentQuest")
              }), (0, IM.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, IM.jsx)("strong", {
                  children: (0, IM.jsx)(TT.c, {
                    text: Ab.tracked.name
                  })
                }), null !== Ab.tracked.clock && (0, IM.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: Ab.tracked.clock
                })]
              }), (0, IM.jsx)(eT, {
                subquests: Ab.tracked.subquests
              })]
            })
          })
        }), "menu" === Ub && (0, IM.jsx)(rM.d, {
          show: Ab.open,
          close: ab.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, IM.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: Tb,
            onKeyDown: oM,
            children: [(0, IM.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, IM.jsx)("div", {
                children: (0, IM.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: Mb("skyblockGame:quests")
                })
              }), (0, IM.jsx)(KM.k, {
                padIgnore: !0,
                onClick: ab.dismiss
              })]
            }), (0, IM.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, IM.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, IM.jsx)("h3", {
                  children: Mb("skyblockGame:current")
                }), 0 === Ab.active.length && (0, IM.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: Mb("skyblockGame:noActiveQuests")
                }), Ab.active.map((bb => (0, IM.jsx)(vT, {
                  quest: bb,
                  select: ab.select
                }, bb.id))), (0, IM.jsx)("h3", {
                  children: (0, IM.jsxs)("button", {
                    type: "button",
                    className: zM()("SkyblockQuestSectionToggle", {
                      Expanded: Ab.completedExpanded
                    }),
                    "aria-expanded": Ab.completedExpanded,
                    onClick: ab.toggleCompleted,
                    children: [(0, IM.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), Mb("skyblockGame:completed"), (0, IM.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: Ab.completed.length
                    })]
                  })
                }), Ab.completedExpanded && 0 === Ab.completed.length && (0, IM.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: Mb("skyblockGame:noCompletedQuests")
                }), Ab.completedExpanded && Ab.completed.map((bb => (0, IM.jsx)(vT, {
                  quest: bb,
                  select: ab.select
                }, bb.id)))]
              }), Ab.detail && (0, IM.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [Ab.detail.completed && (0, IM.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: Mb("skyblockGame:completedQuest")
                }), (0, IM.jsx)("h3", {
                  children: (0, IM.jsx)(TT.c, {
                    text: Ab.detail.name
                  })
                }), (0, IM.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, IM.jsx)(TT.c, {
                    text: Ab.detail.description
                  })
                }), (0, IM.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [Ab.detail.progress, null !== Ab.detail.clock && (0, IM.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: Ab.detail.clock
                  })]
                }), (0, IM.jsx)(eT, {
                  subquests: Ab.detail.subquests,
                  showDescriptions: !0
                }), Ab.detail.tracked && (0, IM.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: Ab.detail.trackLabel
                }), !Ab.detail.completed && !Ab.detail.tracked && (0, IM.jsx)(KM.m, {
                  onClick: ab.trackSelected,
                  disabled: !Ab.detail.canTrack,
                  children: Ab.detail.trackLabel
                }), Ab.detail.canViewDialogue && (0, IM.jsx)(KM.g, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: ab.viewDialogue,
                  children: Mb("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var PT = Ub(990),
      XT = Ub(2424);

    function jT(bb, ab, Ub, Ab, Mb) {
      const Tb = bb => "linear" === Mb ? bb : {
          DT: Mb,
          point: bb
        },
        Eb = {};
      for (const [Yb, Bb] of Ab)
        for (const [ab, Ub] of Object.entries(bb(Yb, Bb, Tb))) Eb[ab] ??= {
          timeline: []
        }, Eb[ab].timeline.push(Ub);
      return {
        jT: ab,
        loop: Ub,
        kT: Eb
      }
    }
    const RT = .547,
      kT = .022,
      yT = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      ZT = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function DT(bb, ab, Ub) {
      const {
        drop: Ab = 0,
        shift: Mb = 0,
        torso: Tb = 0,
        nod: Eb = 0,
        tilt: Yb = 0,
        legs: Bb = [0, 0],
        arms: eb = 0,
        spread: vb = 0
      } = ab, Lb = RT * Math.cos(Tb) - kT * Math.sin(Tb), Pb = RT * Math.sin(Tb) + kT * Math.cos(Tb), Xb = Ub([0, -Ab, Mb]);
      return {
        LowerBody: {
          timeFraction: bb,
          position: Xb,
          rotation: Ub([0, 0, 0])
        },
        UpperBody: {
          timeFraction: bb,
          position: Xb,
          rotation: Ub([Tb, 0, Yb])
        },
        HeadMesh: {
          timeFraction: bb,
          position: Ub([0, Lb - RT - Ab, Pb - kT + Mb]),
          rotation: Ub([Tb + Eb, 0, Yb])
        },
        LegLeftMesh: {
          timeFraction: bb,
          rotation: Ub([Bb[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: bb,
          rotation: Ub([Bb[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: bb,
          rotation: Ub([eb, 0, vb])
        },
        ArmRightMesh: {
          timeFraction: bb,
          rotation: Ub([eb, 0, -vb])
        }
      }
    }

    function zT(bb, ab, Ub) {
      return jT(DT, bb, ab, Ub, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function xT(bb) {
      return "number" === typeof bb ? [bb, bb] : bb
    }

    function iT(bb, ab, Ub) {
      const {
        rise: Ab = 0,
        shift: Mb = 0,
        torso: Tb = 0,
        twist: Eb = 0,
        tilt: Yb = 0,
        nod: Bb = 0,
        cock: eb = 0,
        arms: vb = 0,
        spread: Lb = 0
      } = ab, [Pb, Xb] = xT(vb), [jb, Rb] = xT(Lb);
      return {
        TorsoNode: {
          timeFraction: bb,
          position: Ub([0, Ab, Mb]),
          rotation: Ub([Tb, Eb, Yb])
        },
        HeadMesh: {
          timeFraction: bb,
          rotation: Ub([Bb, 0, eb])
        },
        ArmLeftMesh: {
          timeFraction: bb,
          rotation: Ub([Pb, 0, jb])
        },
        ArmRightMesh: {
          timeFraction: bb,
          rotation: Ub([Xb, 0, -Rb])
        }
      }
    }
    const fT = [1.0625, -1, 0];

    function mT(bb) {
      return "number" === typeof bb ? [bb, bb] : bb
    }

    function pT(bb, ab, Ub) {
      const {
        drop: Ab = 0,
        shift: Mb = 0,
        torso: Tb = 0,
        tilt: Eb = 0,
        nod: Yb = 0,
        cock: Bb = 0,
        legs: eb = [0, 0],
        arms: vb = 0,
        spread: Lb = 0
      } = ab, [Pb, Xb] = mT(vb), [jb, Rb] = mT(Lb), kb = -Tb, yb = -Eb, [Zb, Db, zb] = function(bb, ab) {
        const [Ub, Ab, Mb] = [-fT[0], fT[1], -fT[2]], Tb = Ub * Math.cos(ab) - Ab * Math.sin(ab), Eb = Ub * Math.sin(ab) + Ab * Math.cos(ab);
        return [Tb - Ub, -(Eb * Math.cos(bb) - Mb * Math.sin(bb) - Ab), Eb * Math.sin(bb) + Mb * Math.cos(bb) - Mb]
      }(kb, yb), xb = Ub([0, -Ab, Mb]);
      return {
        TorsoNode: {
          timeFraction: bb,
          position: Ub([Zb, Db - Ab, zb + Mb]),
          rotation: Ub([kb, 0, yb])
        },
        HeadMesh: {
          timeFraction: bb,
          rotation: Ub([-Yb, 0, -Bb])
        },
        ArmLeftMesh: {
          timeFraction: bb,
          rotation: Ub([-Pb, 0, -jb])
        },
        ArmRightMesh: {
          timeFraction: bb,
          rotation: Ub([-Xb, 0, Rb])
        },
        LegLeftMesh: {
          timeFraction: bb,
          position: xb,
          rotation: Ub([-eb[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: bb,
          position: xb,
          rotation: Ub([-eb[1], 0, 0])
        }
      }
    }
    var NT = Ub(36471),
      WT = Ub(37803),
      HT = Ub(37946);

    function IT(bb, ab, Ub) {
      var Ab, Mb;
      const Tb = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return bb + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - bb) * Ub
        },
        [Eb, Yb] = null !== (Ab = bb.legs) && void 0 !== Ab ? Ab : [0, 0],
        [Bb, eb] = null !== (Mb = ab.legs) && void 0 !== Mb ? Mb : [0, 0];
      return {
        drop: Tb(bb.drop, ab.drop),
        shift: Tb(bb.shift, ab.shift),
        torso: Tb(bb.torso, ab.torso),
        nod: Tb(bb.nod, ab.nod),
        tilt: Tb(bb.tilt, ab.tilt),
        legs: [Tb(Eb, Bb), Tb(Yb, eb)],
        arms: Tb(bb.arms, ab.arms),
        spread: Tb(bb.spread, ab.spread)
      }
    }
    const dT = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      FT = zT(4400, !0, [
        [0, dT],
        [.16, {
          ...dT,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, dT],
        [.44, {
          ...dT,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, IT(dT, yT, .7)],
        [.66, IT(dT, yT, .78)],
        [.74, IT(dT, ZT, .65)],
        [.86, {
          ...dT,
          drop: .14
        }],
        [1, dT]
      ], "catmull-rom-spline"),
      hT = {
        ...dT,
        drop: .14,
        torso: .3,
        spread: .4
      },
      GT = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      QT = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      qT = {
        caveGolem: FT,
        magmaGolem: zT(3600, !0, [
          [0, hT],
          [.12, {
            ...hT,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...hT,
            tilt: -.08
          }],
          [.4, {
            ...hT,
            tilt: .06,
            drop: .11
          }],
          [.52, IT(hT, yT, .9)],
          [.62, IT(hT, ZT, .8)],
          [.7, IT(hT, ZT, .45)],
          [.78, IT(hT, ZT, .85)],
          [.9, {
            ...hT,
            drop: .17
          }],
          [1, hT]
        ], "catmull-rom-spline"),
        frostWraith: function(bb, ab, Ub) {
          return jT(iT, bb, ab, Ub, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, GT],
          [.14, {
            ...GT,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...GT,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...GT,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...GT,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...GT,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...GT,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...GT,
            rise: .16,
            tilt: -.04
          }],
          [1, GT]
        ], "catmull-rom-spline"),
        tikiTerror: function(bb, ab, Ub) {
          return jT(pT, bb, ab, Ub, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, QT],
          [.16, {
            ...QT,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, QT],
          [.44, {
            ...QT,
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
            ...QT,
            drop: .1
          }],
          [1, QT]
        ], "catmull-rom-spline")
      },
      uT = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      rT = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      KT = Object.fromEntries(Object.entries(qT).map((bb => {
        let [ab, Ub] = bb;
        return [ab, (0, HT.e)((0, NT.e)(Ub), ab)]
      })));

    function oT(bb) {
      const ab = function(bb) {
        var ab;
        const Ub = (0, WT.b)(bb).poseRig;
        return null !== (ab = rT[bb]) && void 0 !== ab ? ab : void 0 === Ub ? null : uT[Ub]
      }(bb);
      return null === ab ? null : KT[ab]
    }

    function lT(bb) {
      return {
        "--difficulty-colour": bb
      }
    }
    const tT = (0, pb.lazy)((() => (0, XT.e)(Ub.e(192).then((() => Ub(40649))), (bb => bb.MobPreview))));

    function wT(bb) {
      var ab, Ub, Ab;
      let {
        picker: Mb,
        controller: Tb
      } = bb;
      const {
        t: Eb
      } = (0, WM.A)(), Yb = lM(), {
        page: Bb
      } = Mb;
      return (0, IM.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: Yb,
        onKeyDown: bb => {
          "ArrowLeft" === bb.key ? (bb.preventDefault(), bb.stopPropagation(), Tb.previous()) : "ArrowRight" === bb.key ? (bb.preventDefault(), bb.stopPropagation(), Tb.next()) : oM(bb)
        },
        style: lT(Bb.colour),
        children: [(0, IM.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, IM.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: Mb.dungeonName
          }), (0, IM.jsx)(KM.k, {
            padIgnore: !0,
            onClick: Tb.dismiss
          })]
        }), (0, IM.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, IM.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, IM.jsx)(KM.g, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !Mb.canPrevious,
              onClick: Tb.previous,
              children: (0, IM.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, IM.jsx)(PT.e, {
                  name: "angle-up"
                })
              })
            }), (0, IM.jsxs)("div", {
              className: zM()("SkyblockBossPickerBoss", {
                Locked: !Bb.unlocked
              }),
              children: [null !== Bb.bossMobType && (0, IM.jsx)(pb.Suspense, {
                fallback: (0, IM.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, IM.jsx)(tT, {
                  className: "SkyblockBossPickerModel",
                  mobType: Bb.bossMobType,
                  variation: Bb.bossMobVariation,
                  animation: null !== (ab = oT(Bb.bossMobType)) && void 0 !== ab ? ab : void 0
                })
              }), null === Bb.bossMobType && (0, IM.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, IM.jsx)(KM.g, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !Mb.canNext,
              onClick: Tb.next,
              children: (0, IM.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, IM.jsx)(PT.e, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, IM.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, IM.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [Bb.beaten && (0, IM.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), Bb.label]
            }), (0, IM.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (Ub = Bb.bossName) && void 0 !== Ub ? Ub : "???"
            }), (0, IM.jsxs)("span", {
              className: zM()("SkyblockBossPickerRecord", {
                Locked: null !== Bb.lockedHint
              }),
              children: [null !== Bb.lockedHintHighlight && (0, IM.jsxs)(IM.Fragment, {
                children: [Bb.lockedHintHighlight.before, (0, IM.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: lT(Bb.lockedHintHighlight.colour),
                  children: [null !== Bb.lockedHintHighlight.icon && (0, IM.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, IM.jsx)(mM.c, {
                      itemName: Bb.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), Bb.lockedHintHighlight.name]
                }), Bb.lockedHintHighlight.after]
              }), null === Bb.lockedHintHighlight && (null !== (Ab = Bb.lockedHint) && void 0 !== Ab ? Ab : Bb.summary)]
            })]
          }), (0, IM.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: Mb.pages.map((bb => (0, IM.jsx)("span", {
              className: zM()("SkyblockBossPickerDot", {
                Current: bb.current,
                Locked: !bb.unlocked
              }),
              style: lT(bb.colour)
            }, bb.difficulty)))
          }), (0, IM.jsx)(KM.s, {
            className: "SkyblockBossPickerFight",
            disabled: !Bb.unlocked,
            onClick: Tb.enter,
            children: Eb("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function sT(bb) {
      let {
        dungeon: ab,
        select: Ub
      } = bb;
      return (0, IM.jsxs)(KM.g, {
        className: zM()("SkyblockDungeonCard", {
          Selected: ab.selected
        }),
        onClick: () => {
          Ub(ab.id)
        },
        children: [(0, IM.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, IM.jsx)("strong", {
            children: ab.name
          }), (0, IM.jsx)("span", {
            children: ab.beatenSummary
          })]
        }), (0, IM.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: ab.difficulties.map((bb => (0, IM.jsxs)("span", {
            className: zM()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: bb.beaten
            }),
            style: lT(bb.colour),
            title: bb.summary,
            children: [bb.beaten && (0, IM.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), bb.label]
          }, bb.difficulty)))
        })]
      })
    }

    function gT(bb) {
      let {
        controller: ab
      } = bb;
      const Ub = (0, HM.i)(XU, ab.getSnapshot()),
        {
          t: Ab
        } = (0, WM.A)(),
        Mb = lM();
      return Ub.enabled ? (0, IM.jsxs)(rM.d, {
        show: Ub.open,
        close: ab.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [Ub.picker && (0, IM.jsx)(wT, {
          picker: Ub.picker,
          controller: ab
        }), !Ub.picker && (0, IM.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: Mb,
          onKeyDown: oM,
          children: [(0, IM.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, IM.jsxs)("div", {
              children: [(0, IM.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: Ab("skyblockGame:dungeons")
              }), (0, IM.jsx)("p", {
                children: Ab("skyblockGame:dungeonsIntro")
              })]
            }), (0, IM.jsx)(KM.k, {
              padIgnore: !0,
              onClick: ab.dismiss
            })]
          }), (0, IM.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, IM.jsx)("div", {
              className: "SkyblockDungeonList",
              children: Ub.dungeons.map((bb => (0, IM.jsx)(sT, {
                dungeon: bb,
                select: ab.select
              }, bb.id)))
            }), Ub.detail && (0, IM.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, IM.jsx)("h3", {
                children: Ub.detail.name
              }), (0, IM.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: Ub.detail.difficulties.map((bb => (0, IM.jsxs)("li", {
                  className: zM()("SkyblockDungeonRecord", {
                    Beaten: bb.beaten
                  }),
                  children: [(0, IM.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: lT(bb.colour),
                    children: [bb.beaten && (0, IM.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), bb.label]
                  }), (0, IM.jsx)("span", {
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

    function CT(bb) {
      let {
        collection: ab,
        select: Ub
      } = bb;
      return (0, IM.jsxs)(KM.g, {
        className: zM()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: ab.selected,
          Locked: ab.locked
        }),
        ariaPressed: ab.selected,
        onClick: () => {
          Ub(ab.id)
        },
        children: [(0, IM.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, IM.jsx)(mM.c, {
            itemName: ab.icon,
            amount: 0
          })
        }), (0, IM.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, IM.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, IM.jsx)("strong", {
              children: ab.name
            }), (0, IM.jsx)("span", {
              children: ab.tier
            })]
          }), (0, IM.jsx)(tM, {
            percent: ab.percent,
            label: `${ab.name}: ${ab.progress}`
          }), (0, IM.jsx)("span", {
            className: "SkyblockSkillXp",
            children: ab.progress
          })]
        })]
      })
    }

    function VT(bb) {
      let {
        collection: ab
      } = bb;
      const {
        t: Ub
      } = (0, WM.A)();
      return (0, IM.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, IM.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, IM.jsx)(mM.c, {
            itemName: ab.icon,
            amount: 0
          })
        }), (0, IM.jsx)("h3", {
          children: ab.name
        }), (0, IM.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: ab.tier
        }), (0, IM.jsx)("p", {
          children: ab.locked ? Ub("skyblockGame:collectionLocked") : ab.count
        }), null !== ab.nextReward && (0, IM.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, IM.jsx)("strong", {
            children: Ub("skyblockGame:collectionNextReward")
          }), (0, IM.jsx)("span", {
            children: ab.nextReward
          })]
        }), (0, IM.jsx)(tM, {
          percent: ab.percent,
          label: ab.progress
        }), (0, IM.jsx)("p", {
          children: ab.progress
        })]
      })
    }

    function OT(bb) {
      let {
        controller: ab
      } = bb;
      const Ub = (0, HM.i)(QU, ab.getSnapshot()),
        {
          t: Ab
        } = (0, WM.A)(),
        Mb = lM();
      return Ub.enabled ? (0, IM.jsx)(rM.d, {
        show: Ub.open,
        close: ab.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, IM.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: Mb,
          onKeyDown: oM,
          children: [(0, IM.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, IM.jsxs)("div", {
              children: [(0, IM.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: Ab("skyblockGame:collections")
              }), (0, IM.jsxs)("p", {
                children: [Ab("skyblockGame:collectionsIntro"), " ", Ub.tiersUnlocked]
              })]
            }), (0, IM.jsx)(KM.k, {
              padIgnore: !0,
              onClick: ab.dismiss
            })]
          }), (0, IM.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: Ub.categories.map((bb => (0, IM.jsxs)(KM.g, {
              className: zM()("SkyblockCollectionCategory", {
                Selected: bb.selected
              }),
              ariaPressed: bb.selected,
              padTabSelected: bb.selected,
              onClick: () => {
                ab.selectCategory(bb.id)
              },
              children: [(0, IM.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, IM.jsx)(mM.c, {
                  itemName: bb.icon,
                  amount: 0
                })
              }), (0, IM.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, IM.jsx)("strong", {
                  children: bb.label
                }), (0, IM.jsx)("span", {
                  children: bb.tiers
                })]
              })]
            }, bb.id)))
          }), (0, IM.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, IM.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: Ub.collections.map((bb => (0, IM.jsx)(CT, {
                collection: bb,
                select: ab.select
              }, bb.id)))
            }), Ub.detail && (0, IM.jsx)(VT, {
              collection: Ub.detail
            })]
          })]
        })
      }) : null
    }
    const cT = ["completed", "active", "available", "locked"],
      JT = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function nT(bb) {
      let {
        controller: ab
      } = bb;
      const Ub = (0, HM.i)(VU, ab.getSnapshot()),
        {
          t: Ab
        } = (0, WM.A)(),
        Mb = lM();
      return Ub.enabled ? (0, IM.jsx)(rM.d, {
        show: Ub.open,
        close: ab.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, IM.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: Mb,
          onKeyDown: oM,
          children: [(0, IM.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, IM.jsxs)("div", {
              children: [(0, IM.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: Ab("skyblockDevQuests:title")
              }), (0, IM.jsx)("p", {
                children: Ab("skyblockDevQuests:intro")
              })]
            }), (0, IM.jsx)(KM.k, {
              onClick: ab.dismiss
            })]
          }), (0, IM.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [cT.map((bb => (0, IM.jsx)("span", {
              className: zM()("SkyblockQuestGraphLegendState", bb),
              children: Ab(`skyblockDevQuests:state_${bb}`)
            }, bb))), JT.map((bb => (0, IM.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, IM.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, IM.jsx)("line", {
                  className: zM()("SkyblockQuestGraphEdge", bb),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), Ab(`skyblockDevQuests:edge_${bb}`)]
            }, bb)))]
          }), (0, IM.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, IM.jsxs)("div", {
              className: zM()("SkyblockQuestGraphCanvas", {
                Planning: Ub.planning
              }),
              style: {
                width: Ub.width,
                height: Ub.height
              },
              children: [(0, IM.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: Ub.width,
                height: Ub.height,
                "aria-hidden": "true",
                children: [(0, IM.jsx)("defs", {
                  children: (0, IM.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, IM.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), Ub.edges.map((bb => (0, IM.jsx)("path", {
                  className: zM()("SkyblockQuestGraphEdge", bb.kind, {
                    InPlan: bb.inPlan
                  }),
                  d: bb.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, bb.key)))]
              }), Ub.nodes.map((bb => (0, IM.jsxs)("button", {
                type: "button",
                className: zM()("SkyblockQuestGraphNode", bb.state, {
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
                  ab.hover(bb.id)
                },
                onMouseLeave: () => {
                  ab.hover(null)
                },
                onFocus: () => {
                  ab.hover(bb.id)
                },
                onBlur: () => {
                  ab.hover(null)
                },
                onClick: () => {
                  ab.jump(bb.id)
                },
                children: [(0, IM.jsx)("strong", {
                  children: bb.name
                }), (0, IM.jsx)("span", {
                  children: bb.detail
                })]
              }, bb.id)))]
            })
          })]
        })
      }) : null
    }
    const ST = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      bE = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${YA}ms`,
        "--forge-duration": "2150ms"
      },
      aE = Array.from({
        length: 18
      }, ((bb, ab) => ({
        "--ember-left": `${(4+92*(.618034*ab%1)).toFixed(1)}%`,
        "--ember-size": 3 + ab % 3 * 2 + "px",
        "--ember-drift": 14 * (ab % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*ab%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*ab%8).toFixed(2)}s`
      })));

    function UE(bb) {
      if (bb.style.removeProperty("--part-size"), null === bb.parentElement || "wrap" === getComputedStyle(bb.parentElement).flexWrap) return;
      const ab = [...bb.children],
        Ub = getComputedStyle(bb),
        Ab = parseFloat(Ub.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        Mb = (bb.clientHeight - parseFloat(Ub.rowGap) * (ab.length - 1)) / ab.length,
        Tb = ab.map((bb => {
          const ab = getComputedStyle(bb),
            Ub = bb.querySelector("h3"),
            Tb = bb.querySelector(".SkyblockForgeParts");
          if (null === Ub || null === Tb) return Ab;
          const Eb = Mb - parseFloat(ab.paddingTop) - parseFloat(ab.paddingBottom) - Ub.offsetHeight - parseFloat(getComputedStyle(Ub).marginBottom),
            Yb = parseFloat(getComputedStyle(Tb).columnGap),
            Bb = Tb.children.length;
          let eb = 0;
          for (let Ab = 1; Ab <= Bb; Ab++) {
            const bb = Math.ceil(Bb / Ab);
            eb = Math.max(eb, Math.min((Tb.clientWidth - Yb * (Ab - 1)) / Ab, (Eb - Yb * (bb - 1)) / bb))
          }
          return eb
        }));
      bb.style.setProperty("--part-size", `${Math.floor(Math.max(Ab,Math.min(...Tb)))}px`)
    }

    function AE(bb) {
      var ab, Ub, Ab, Tb, Eb;
      let {
        controller: Yb
      } = bb;
      const Bb = (0, HM.i)(jA, Yb.getSnapshot()),
        {
          t: eb
        } = (0, WM.A)(),
        vb = lM(),
        Lb = function() {
          const bb = (0, pb.useRef)(null),
            ab = (0, pb.useRef)(null);
          return (0, pb.useLayoutEffect)((() => {
            null !== bb.current && UE(bb.current)
          })), (0, pb.useCallback)((Ub => {
            var Ab;
            null === (Ab = ab.current) || void 0 === Ab || Ab.disconnect(), ab.current = null, bb.current = Ub, null !== Ub && (ab.current = new ResizeObserver((() => {
              UE(Ub)
            })), ab.current.observe(Ub))
          }), [])
        }(),
        Pb = function(bb) {
          const ab = (0, pb.useRef)(null);
          return (0, pb.useLayoutEffect)((() => {
            const bb = ab.current;
            if (null !== bb) {
              bb.style.removeProperty("font-size");
              for (let ab = 1.7; ab > 1.1 && bb.scrollWidth > bb.clientWidth; ab -= .1) bb.style.fontSize = ab - .1 + "rem"
            }
          }), [bb]), (0, pb.useCallback)((bb => {
            ab.current = bb
          }), [])
        }(null === (ab = Bb.preview) || void 0 === ab ? void 0 : ab.name),
        Xb = (0, pb.useRef)(null),
        jb = (0, pb.useRef)({}),
        Rb = Bb.forging,
        kb = null !== (Ub = null === Rb || void 0 === Rb ? void 0 : Rb.preview.tier) && void 0 !== Ub ? Ub : 0,
        yb = null !== (Ab = null === Rb || void 0 === Rb ? void 0 : Rb.preview.named) && void 0 !== Ab && Ab,
        Zb = (0, pb.useMemo)((() => {
          return null === Rb ? null : {
            flames: (bb = kb, ab = yb, Array.from({
              length: 26 + 6 * bb + (ab ? 20 : 0)
            }, ((bb, ab) => {
              const Ub = ab < 6,
                Ab = Math.random() * Math.PI * 2,
                Mb = Ub ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                Tb = Math.cos(Ab) * Mb,
                Eb = Math.sin(Ab) * Mb - 2 - 3 * Math.random(),
                Yb = Math.random(),
                [Bb, eb, vb] = Ub ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : Yb < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : Yb < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [Yb < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": Bb,
                "--x0": `${(.15*Tb).toFixed(2)}rem`,
                "--y0": `${(.15*Eb).toFixed(2)}rem`,
                "--x": `${Tb.toFixed(2)}rem`,
                "--y": `${Eb.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${eb.toFixed(2)}rem`,
                "--duration": `${Math.round(vb)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: vA(kb, yb)
          };
          var bb, ab
        }), [null === Rb || void 0 === Rb ? void 0 : Rb.id]);
      if (!Bb.enabled) return null;
      const Db = Bb.preview,
        zb = Bb.arriving,
        xb = null !== zb && !zb.sameSword,
        ib = null !== Db && (0, IM.jsx)(mM.c, {
          itemName: Db.baseSword,
          amount: 0,
          enchantmentTier: Db.enchantmentTier
        });
      return (0, IM.jsx)(rM.d, {
        show: Bb.open,
        close: Yb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, IM.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: vb,
          onKeyDown: oM,
          children: [(0, IM.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: aE.map(((bb, ab) => (0, IM.jsx)("span", {
              style: bb
            }, ab)))
          }), (0, IM.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, IM.jsxs)("div", {
              children: [(0, IM.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: eb("skyblockGame:forgeTitle")
              }), (0, IM.jsx)("p", {
                children: eb("skyblockGame:forgeIntro")
              })]
            }), (0, IM.jsx)(KM.k, {
              onClick: Yb.dismiss
            })]
          }), (0, IM.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, IM.jsx)("div", {
              ref: Lb,
              className: zM()("SkyblockForgeSlots", {
                Locked: null !== Rb
              }),
              children: Bb.slots.map((bb => (0, IM.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, IM.jsx)("h3", {
                  children: bb.label
                }), (0, IM.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: bb.parts.map((ab => (0, IM.jsx)("button", {
                    type: "button",
                    className: zM()("SkyblockForgePart", {
                      Selected: ab.selected,
                      Missing: ab.placeholder
                    }),
                    disabled: ab.placeholder,
                    title: ab.placeholder ? eb("skyblockGame:forgePickParts") : ab.itemName,
                    "aria-pressed": ab.selected,
                    onClick: () => {
                      Yb.select(bb.kind, ab.material)
                    },
                    children: (0, IM.jsx)(mM.c, {
                      itemName: ab.itemName,
                      amount: ab.owned
                    })
                  }, ab.material)))
                })]
              }, bb.kind)))
            }), (0, IM.jsxs)("div", {
              className: zM()("SkyblockForgeAnvil", {
                Named: null === Db || void 0 === Db ? void 0 : Db.named
              }),
              style: {
                "--tier": null === Db ? "transparent" : Mb.fb[Db.enchantmentTier]
              },
              children: [(0, IM.jsxs)("div", {
                className: zM()("SkyblockForgeAltar", {
                  Forging: null !== Rb
                }),
                style: null === Rb ? void 0 : bE,
                children: [(0, IM.jsxs)("div", {
                  className: zM()("SkyblockForgeMount", {
                    Arrive: null !== zb
                  }),
                  children: [null === Db && (0, IM.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, IM.jsx)(mM.c, {
                      itemName: Bb.unformedSword,
                      amount: 0
                    })
                  }), null !== Db && (0, IM.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== Db && null === Rb && (0, IM.jsx)("div", {
                    ref: Xb,
                    className: "SkyblockForgeFloat",
                    children: (0, IM.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: ib
                    })
                  }), null !== Db && (0, IM.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: eA.map(((bb, ab) => (0, IM.jsx)("span", {
                      className: zM()({
                        Rune: "" !== bb.rune
                      }),
                      style: bb.style,
                      children: bb.rune
                    }, ab)))
                  }), null !== Rb && null !== Zb && (0, IM.jsxs)(IM.Fragment, {
                    children: [(0, IM.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, IM.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: Zb.flames.map(((bb, ab) => (0, IM.jsx)("span", {
                        style: bb
                      }, ab)))
                    }), (0, IM.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: jb.current,
                      children: (0, IM.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: ib
                      })
                    }), (0, IM.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, IM.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (kb >= 4 || yb) && (0, IM.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, IM.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: Zb.sparks.map(((bb, ab) => (0, IM.jsx)("span", {
                        style: bb
                      }, ab)))
                    }), (0, IM.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, IM.jsx)("p", {
                  className: zM()("SkyblockForgeStatus", null === (Tb = Bb.status) || void 0 === Tb ? void 0 : Tb.tone),
                  children: null === (Eb = Bb.status) || void 0 === Eb ? void 0 : Eb.text
                })]
              }), null === Db && (0, IM.jsx)("p", {
                className: zM()("SkyblockForgeName Waiting", {
                  ArriveText: xb
                }),
                children: eb(Bb.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== Db && (0, IM.jsx)("h3", {
                ref: Pb,
                className: zM()("SkyblockForgeName", {
                  ArriveText: xb
                }),
                title: Db.name,
                children: Db.name
              }), (null === Db || void 0 === Db ? void 0 : Db.named) && (0, IM.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: eb("skyblockGame:forgeSecret")
              }), (0, IM.jsxs)(KM.s, {
                className: "SkyblockForgeButton",
                disabled: !Bb.canForge,
                title: null === Db ? void 0 : eb("skyblockGame:forgeCoalOwned", {
                  owned: String(Bb.coalOwned)
                }),
                onClick: () => {
                  jb.current = function(bb) {
                    const ab = null === bb ? "none" : getComputedStyle(bb).transform,
                      Ub = new DOMMatrixReadOnly("none" === ab ? void 0 : ab);
                    return {
                      "--settle-y": `${Ub.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(Ub.b,Ub.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(Xb.current), XA(), Yb.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [eb("skyblockGame:forgeButton"), null !== Db && (0, IM.jsxs)("span", {
                  className: zM()("SkyblockForgeCost", {
                    Short: Db.coalShort
                  }),
                  children: [(0, IM.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, IM.jsx)(mM.c, {
                      itemName: SU.b,
                      amount: 0
                    })
                  }), Db.coalCost]
                })]
              })]
            }), (0, IM.jsxs)("div", {
              className: zM()("SkyblockForgeDetails", {
                Named: null === Db || void 0 === Db ? void 0 : Db.named
              }),
              children: [(0, IM.jsx)("p", {
                className: zM()("SkyblockForgeLore", {
                  ArriveText: xb
                }),
                title: null === Db || void 0 === Db ? void 0 : Db.lore,
                children: null === Db || void 0 === Db ? void 0 : Db.lore
              }), (0, IM.jsxs)("dl", {
                className: zM()("SkyblockForgeStats", {
                  ArriveText: xb
                }),
                children: [null === Db && ST.map((bb => (0, IM.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, IM.jsx)("dt", {
                    children: eb(bb)
                  }), (0, IM.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, bb))), null === Db || void 0 === Db ? void 0 : Db.stats.map((bb => (0, IM.jsxs)("div", {
                  className: zM()("SkyblockForgeStat", {
                    Better: bb.better
                  }),
                  children: [(0, IM.jsx)("dt", {
                    children: bb.label
                  }), (0, IM.jsx)("dd", {
                    children: bb.value
                  })]
                }, bb.label)))]
              }), (0, IM.jsx)("ul", {
                className: zM()("SkyblockForgeEffects", {
                  ArriveText: xb
                }),
                children: null === Db || void 0 === Db ? void 0 : Db.effects.map((bb => (0, IM.jsx)("li", {
                  children: bb
                }, bb)))
              })]
            })]
          })]
        })
      })
    }
    const ME = "Doom Rivet",
      TE = "Doom Crest";

    function EE(bb) {
      let {
        itemName: ab,
        amount: Ub,
        owned: Ab
      } = bb;
      return (0, IM.jsxs)("span", {
        className: zM()("SkyblockSmugglerPrice", {
          Short: Ub > Ab
        }),
        children: [(0, IM.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, IM.jsx)(mM.c, {
            itemName: ab,
            amount: 0
          })
        }), (0, IM.jsx)("span", {
          children: Ub
        })]
      })
    }

    function YE(bb) {
      return bb.justBought ? "skyblockGame:smugglerJustBought" : bb.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function BE(bb) {
      let {
        deal: ab,
        view: Ub,
        buy: Ab
      } = bb;
      const {
        t: Mb
      } = (0, WM.A)();
      return (0, IM.jsxs)("div", {
        className: zM()("SkyblockSmugglerPocket", {
          Bought: ab.justBought,
          Unaffordable: !ab.affordable,
          SoldOut: ab.soldOut && !ab.justBought
        }),
        children: [(0, IM.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, IM.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, IM.jsx)(mM.c, {
            itemName: ab.itemName,
            amount: 0,
            enchantmentTier: ab.enchantmentTier
          }), ab.amount > 1 && (0, IM.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: Mb("skyblockGame:smugglerAmount", {
              amount: ab.amount
            })
          })]
        }), (0, IM.jsx)("h3", {
          children: ab.displayName
        }), (0, IM.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, IM.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [ab.rivets > 0 && (0, IM.jsx)(EE, {
              itemName: ME,
              amount: ab.rivets,
              owned: Ub.rivetsOwned
            }), ab.crests > 0 && (0, IM.jsx)(EE, {
              itemName: TE,
              amount: ab.crests,
              owned: Ub.crestsOwned
            })]
          }), (0, IM.jsx)(KM.g, {
            className: "SkyblockSmugglerBuy",
            disabled: ab.soldOut || !ab.affordable || Ub.pending,
            onClick: () => {
              Ab(ab.slot)
            },
            children: Mb(YE(ab))
          })]
        })]
      }, ab.justBought ? Ub.boughtCount : 0)
    }

    function eE(bb) {
      let {
        controller: ab
      } = bb;
      const Ub = (0, HM.i)(yA, ab.getSnapshot()),
        {
          t: Ab
        } = (0, WM.A)(),
        Mb = lM();
      return Ub.enabled ? (0, IM.jsx)(rM.d, {
        show: Ub.open,
        close: ab.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, IM.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: Mb,
          onKeyDown: oM,
          children: [(0, IM.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, IM.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, IM.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, IM.jsxs)("div", {
              children: [(0, IM.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: Ab("skyblockGame:smugglerTitle")
              }), (0, IM.jsx)("p", {
                children: Ab("skyblockGame:smugglerIntro")
              })]
            }), (0, IM.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, IM.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, IM.jsx)(EE, {
                  itemName: ME,
                  amount: Ub.rivetsOwned,
                  owned: Ub.rivetsOwned
                }), (0, IM.jsx)(EE, {
                  itemName: TE,
                  amount: Ub.crestsOwned,
                  owned: Ub.crestsOwned
                })]
              }), (0, IM.jsx)(KM.k, {
                onClick: ab.dismiss
              })]
            })]
          }), (0, IM.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: Ub.deals.map((bb => (0, IM.jsx)(BE, {
              deal: bb,
              view: Ub,
              buy: ab.buy
            }, bb.slot)))
          }), (0, IM.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, IM.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: Ub.rotatesText
            }), null !== Ub.status && (0, IM.jsx)("span", {
              className: zM()("SkyblockSmugglerStatus", Ub.status.tone),
              children: Ub.status.text
            })]
          })]
        })
      }) : null
    }

    function vE(bb) {
      let {
        phase: ab,
        className: Ub
      } = bb;
      return (0, IM.jsx)("span", {
        className: zM()("SkyblockMoon", `Moon-${ab}`, Ub),
        "aria-hidden": "true"
      })
    }

    function LE(bb) {
      let {
        controller: ab
      } = bb;
      const Ub = (0, HM.i)(zA, ab.getSnapshot()),
        {
          t: Ab
        } = (0, WM.A)();
      return Ub.enabled ? (0, IM.jsx)(iM.e, {
        placement: "statBars",
        children: (0, IM.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: zM()("SkyblockPassageChip", Ub.open && "Open"),
          "aria-label": Ab("skyblockGame:passageChipLabel", {
            phase: Ub.phaseName
          }),
          title: Ab("skyblockGame:passageChipLabel", {
            phase: Ub.phaseName
          }),
          onMouseDown: bb => {
            bb.preventDefault()
          },
          onClick: ab.toggle,
          children: (0, IM.jsx)(vE, {
            phase: Ub.phase
          }, Ub.phase)
        })
      }) : null
    }

    function PE(bb) {
      let {
        fish: ab
      } = bb;
      return (0, IM.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, IM.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, IM.jsx)(mM.c, {
            itemName: ab.itemName,
            amount: 0
          })
        }), (0, IM.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, IM.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: ab.displayName
          }), (0, IM.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: ab.where
          })]
        })]
      })
    }

    function XE(bb) {
      let {
        controller: ab
      } = bb;
      const Ub = (0, HM.i)(zA, ab.getSnapshot()),
        {
          t: Ab
        } = (0, WM.A)(),
        Mb = lM();
      return Ub.enabled ? (0, IM.jsx)(rM.d, {
        show: Ub.open,
        close: ab.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, IM.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: Mb,
          onKeyDown: oM,
          children: [(0, IM.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, IM.jsx)(vE, {
              phase: Ub.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, IM.jsxs)("div", {
              children: [(0, IM.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: Ab("skyblockGame:passageTitle")
              }), (0, IM.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: Ub.phaseName
              })]
            }), (0, IM.jsx)(KM.k, {
              padIgnore: !0,
              onClick: ab.dismiss
            })]
          }), (0, IM.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: Ab("skyblockGame:passageIntro")
          }), (0, IM.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, IM.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, IM.jsx)("h3", {
                children: Ab("skyblockGame:passageVisiting")
              }), (0, IM.jsx)("ul", {
                className: "SkyblockPassageList",
                children: Ub.visitors.map((bb => (0, IM.jsx)(PE, {
                  fish: bb
                }, bb.itemName)))
              })]
            }), (0, IM.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== Ub.resting && (0, IM.jsxs)(IM.Fragment, {
                children: [(0, IM.jsx)("h3", {
                  children: Ab("skyblockGame:passageResting")
                }), (0, IM.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, IM.jsx)(PE, {
                    fish: Ub.resting
                  })
                })]
              }), (0, IM.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, IM.jsx)(vE, {
                  phase: Ub.nextPhase
                }), (0, IM.jsx)("span", {
                  children: Ub.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function jE() {
      return (0, IM.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((bb => (0, IM.jsx)("i", {
          style: {
            "--sparkle-index": bb
          }
        }, bb)))
      })
    }

    function RE(bb) {
      var ab;
      let {
        charm: Ub,
        view: Ab,
        controller: Mb
      } = bb;
      const {
        t: Tb
      } = (0, WM.A)(), Eb = Ab.shop, Yb = (null === (ab = Ab.sparkle) || void 0 === ab ? void 0 : ab.id) === Ub.id;
      return (0, IM.jsxs)("li", {
        className: zM()("SkyblockLampLightCharm", Ub.owned && "Owned", Ub.socketed && "Socketed"),
        children: [Yb && (0, IM.jsx)(jE, {}, Ab.sparkle.count), (0, IM.jsx)("h4", {
          children: Ub.name
        }), (0, IM.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: Ub.effect
        }), (0, IM.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: Ub.lines.map((bb => (0, IM.jsxs)("li", {
            className: zM()("SkyblockLampLightOddsLine", "better" === bb.tone ? "Better" : "worse" === bb.tone ? "Worse" : "Same"),
            children: [(0, IM.jsx)("span", {
              className: "Before",
              children: bb.before
            }), (0, IM.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, IM.jsx)("span", {
              className: "After",
              children: bb.after
            })]
          }, bb.label)))
        }), (0, IM.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: Ub.owned ? Ub.socketed ? (0, IM.jsxs)(IM.Fragment, {
            children: [(0, IM.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: Tb("skyblockGame:lampLightSocketed")
            }), (0, IM.jsx)(KM.M, {
              disabled: !Ab.canCommand,
              ariaLabel: Tb("skyblockGame:lampLightRemoveLabel", {
                charm: Ub.name
              }),
              onClick: () => {
                Mb.socket(null)
              },
              children: Tb("skyblockGame:lampLightRemove")
            })]
          }) : (0, IM.jsx)(KM.g, {
            disabled: !Ab.canCommand || !Eb.heldRod,
            ariaLabel: Tb("skyblockGame:lampLightSocketLabel", {
              charm: Ub.name
            }),
            onClick: () => {
              Mb.socket(Ub.id)
            },
            children: Tb("skyblockGame:lampLightSocket")
          }) : (0, IM.jsx)(KM.g, {
            disabled: !Ab.canCommand || !Ub.affordable,
            ariaLabel: Tb("skyblockGame:lampLightBuyLabel", {
              item: Ub.name,
              cost: Ub.cost
            }),
            onClick: () => {
              Mb.buy(Ub.id)
            },
            children: Ub.cost
          })
        })]
      })
    }

    function kE(bb) {
      var ab;
      let {
        tint: Ub,
        view: Ab,
        controller: Mb
      } = bb;
      const {
        t: Tb
      } = (0, WM.A)();
      return (0, IM.jsxs)("li", {
        className: zM()("SkyblockLampLightTint", Ub.wearing && "Wearing"),
        style: {
          "--tint-colour": Ub.colour
        },
        children: [(null === (ab = Ab.sparkle) || void 0 === ab ? void 0 : ab.id) === Ub.id && (0, IM.jsx)(jE, {}, Ab.sparkle.count), (0, IM.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, IM.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: Ub.name
        }), Ub.wearing ? (0, IM.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: Tb("skyblockGame:lampLightWearing")
        }) : (0, IM.jsx)(KM.g, {
          disabled: !Ab.canCommand || !Ub.owned && !Ub.affordable,
          ariaLabel: Ub.owned ? Tb("skyblockGame:lampLightWearLabel", {
            tint: Ub.name
          }) : Tb("skyblockGame:lampLightBuyLabel", {
            item: Ub.name,
            cost: Ub.cost
          }),
          onClick: () => {
            Ub.owned ? Mb.wearTint(Ub.id) : Mb.buy(Ub.id)
          },
          children: Ub.owned ? Tb("skyblockGame:lampLightWear") : Ub.cost
        })]
      })
    }

    function yE(bb) {
      let {
        controller: ab
      } = bb;
      const Ub = (0, HM.i)(QA, ab.getSnapshot()),
        {
          t: Ab
        } = (0, WM.A)(),
        Mb = Ub.shop;
      return (0, IM.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, IM.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, IM.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: Ub.balance
          }), (0, IM.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": Ub.releasing,
            className: zM()("SkyblockLampLightSwitch", Ub.releasing && "On"),
            disabled: Ub.releasing ? "ready" !== Ub.status : !Ub.canCommand,
            onClick: () => {
              ab.setRelease(!Ub.releasing)
            },
            children: [(0, IM.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, IM.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), Ab("skyblockGame:lampLightRelease")]
          }), (0, IM.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: Ab("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== Ub.notice && (0, IM.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: Ub.notice
        }), null !== Mb && (0, IM.jsxs)(IM.Fragment, {
          children: [(0, IM.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, IM.jsx)("h3", {
              children: Ab("skyblockGame:lampLightCharms")
            }), (0, IM.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: Mb.oddsFor
            }), (0, IM.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((bb => (0, IM.jsx)("button", {
                type: "button",
                "aria-pressed": Ub.situation === bb,
                className: zM()("SkyblockLampLightSituation", Ub.situation === bb && "Selected"),
                onClick: () => {
                  ab.setSituation(bb)
                },
                children: Ab("open" === bb ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, bb)))
            })]
          }), !Mb.heldRod && (0, IM.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: Ab("skyblockGame:lampLightHoldRod")
          }), (0, IM.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: Mb.charms.map((bb => (0, IM.jsx)(RE, {
              charm: bb,
              view: Ub,
              controller: ab
            }, bb.id)))
          }), (0, IM.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, IM.jsx)("h3", {
              children: Ab("skyblockGame:lampLightTints")
            })
          }), (0, IM.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, IM.jsxs)("li", {
              className: zM()("SkyblockLampLightTint", "Islands", Mb.wearingIslandColours && "Wearing"),
              children: [(0, IM.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, IM.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: Ab("skyblockGame:lampLightIslandColours")
              }), Mb.wearingIslandColours ? (0, IM.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: Ab("skyblockGame:lampLightWearing")
              }) : (0, IM.jsx)(KM.g, {
                disabled: !Ub.canCommand,
                ariaLabel: Ab("skyblockGame:lampLightWearLabel", {
                  tint: Ab("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  ab.wearTint(null)
                },
                children: Ab("skyblockGame:lampLightWear")
              })]
            }), Mb.tints.map((bb => (0, IM.jsx)(kE, {
              tint: bb,
              view: Ub,
              controller: ab
            }, bb.id)))]
          })]
        })]
      })
    }

    function ZE(bb) {
      let {
        controller: ab
      } = bb;
      const Ub = (0, HM.i)(QA, ab.getSnapshot()),
        {
          t: Ab
        } = (0, WM.A)();
      return Ub.releasing ? (0, IM.jsx)(iM.e, {
        children: (0, IM.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            ab.setRelease(!1)
          },
          children: [(0, IM.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, IM.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [Ab("skyblockGame:lampLightReleasing"), " \xb7 ", Ub.balance]
          }), (0, IM.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: Ab("skyblockGame:lampLightKeepCatches")
          }), null !== Ub.gained && (0, IM.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: Ub.gained.text
          }, Ub.gained.count)]
        })
      }) : null
    }

    function DE(bb) {
      let {
        island: ab,
        view: Ub,
        aim: Ab
      } = bb;
      const {
        t: Mb
      } = (0, WM.A)(), Tb = ab.featuredFish;
      return (0, IM.jsxs)("li", {
        className: zM()("SkyblockKeepersChairIsland", `Island-${ab.id}`, ab.favoured && "Aimed", !ab.relit && "Dark"),
        children: [(0, IM.jsx)("h3", {
          children: ab.name
        }), ab.relit && null !== Tb ? (0, IM.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, IM.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: Mb("skyblockGame:keepersChairTideNotice")
          }), (0, IM.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, IM.jsx)(mM.c, {
              itemName: Tb.itemName,
              amount: 0
            })
          }), (0, IM.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: Tb.displayName
          })]
        }) : (0, IM.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, IM.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: Mb("skyblockGame:keepersChairDark")
          })
        }), ab.relit && (ab.favoured ? (0, IM.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: Mb("skyblockGame:keepersChairAimed")
        }) : (0, IM.jsx)(KM.g, {
          className: "SkyblockKeepersChairAim",
          disabled: !Ub.canAim,
          ariaLabel: Mb("skyblockGame:keepersChairAimLabel", {
            island: ab.name
          }),
          onClick: () => {
            Ab(ab.id)
          },
          children: Mb("skyblockGame:keepersChairAim")
        }))]
      }, ab.favoured ? Ub.aimedCount : 0)
    }

    function zE(bb) {
      let {
        controller: ab,
        lampLight: Ub
      } = bb;
      const Ab = (0, HM.i)(NA, ab.getSnapshot()),
        Mb = (0, HM.i)(QA, Ub.getSnapshot()),
        [Tb, Eb] = (0, pb.useState)("lamp"),
        {
          t: Yb
        } = (0, WM.A)(),
        Bb = lM();
      if (!Ab.enabled) return null;
      const eb = "light" === Tb && Mb.enabled;
      return (0, IM.jsx)(rM.d, {
        show: Ab.open,
        close: ab.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, IM.jsxs)("section", {
          className: zM()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", eb && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: Bb,
          onKeyDown: oM,
          children: [(0, IM.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, IM.jsxs)("div", {
              children: [(0, IM.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: Yb("skyblockGame:keepersChairTitle")
              }), (0, IM.jsx)("p", {
                children: Yb(eb ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, IM.jsx)(KM.k, {
              padIgnore: !0,
              ariaLabel: Yb("skyblockGame:keepersChairClose"),
              onClick: ab.dismiss
            })]
          }), Mb.enabled && (0, IM.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((bb => (0, IM.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === bb === eb,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === bb === eb ? "true" : void 0,
              className: zM()("SkyblockKeepersChairTab", "light" === bb === eb && "Selected"),
              onClick: () => {
                Eb(bb)
              },
              children: [Yb("lamp" === bb ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === bb && (0, IM.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: Mb.balance
              })]
            }, bb)))
          }), eb ? (0, IM.jsx)(yE, {
            controller: Ub
          }) : (0, IM.jsx)(xE, {
            view: Ab,
            controller: ab
          })]
        })
      })
    }

    function xE(bb) {
      let {
        view: ab,
        controller: Ub
      } = bb;
      const {
        t: Ab
      } = (0, WM.A)();
      return (0, IM.jsxs)(IM.Fragment, {
        children: [(0, IM.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: ab.islands.map((bb => (0, IM.jsx)(DE, {
            island: bb,
            view: ab,
            aim: Ub.aim
          }, bb.id)))
        }), null !== ab.almanac && (0, IM.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, IM.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: Ab("skyblockGame:passageTitle")
          }), (0, IM.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, IM.jsx)(vE, {
              phase: ab.almanac.phase
            }), ab.almanac.phaseName]
          }), (0, IM.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, IM.jsx)(vE, {
              phase: ab.almanac.nextPhase
            }), ab.almanac.next]
          })]
        }), (0, IM.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, IM.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: Ab("skyblockGame:keepersChairFavour")
          }), ab.aimed && (0, IM.jsx)(KM.M, {
            className: "SkyblockKeepersChairRest",
            disabled: !ab.canAim,
            onClick: () => {
              Ub.aim(null)
            },
            children: Ab("skyblockGame:keepersChairRest")
          })]
        }), null !== ab.status && (0, IM.jsx)("p", {
          className: zM()("SkyblockKeepersChairStatus", "refused" === ab.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: ab.status.text
        })]
      })
    }

    function iE(bb) {
      let {
        controller: ab
      } = bb;
      const {
        t: Ub
      } = (0, WM.A)(), Ab = (0, HM.i)(HA, ab.getSnapshot());
      if (!Ab.enabled) return null;
      const Mb = Ab.freshCount > 0 ? Ub("skyblockGame:reachLogOpenNews", {
        count: Ab.freshCount
      }) : Ub("skyblockGame:reachLogOpen");
      return (0, IM.jsx)(iM.e, {
        placement: "statBars",
        children: (0, IM.jsxs)("button", {
          type: "button",
          className: zM()("SkyblockReachLogButton", Ab.freshCount > 0 && "HasNews", Ab.pending && "Pending"),
          "aria-label": Mb,
          title: Mb,
          onClick: ab.ask,
          children: [Ab.news && (0, IM.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${Ab.newsToken}`), (0, IM.jsx)("span", {
            className: zM()("SkyblockReachLogIcon", Ab.news && "Jump"),
            "aria-hidden": "true",
            children: (0, IM.jsx)(mM.c, {
              itemName: dA,
              amount: 0
            })
          }, `icon:${Ab.newsToken}`), Ab.freshCount > 0 && (0, IM.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: Ab.freshCount
          })]
        })
      })
    }

    function fE(bb) {
      let {
        gift: ab
      } = bb;
      return (0, IM.jsx)("li", {
        className: zM()("SkyblockRegularsGift", ab.given && "Given"),
        children: ab.text
      })
    }

    function mE(bb) {
      let {
        regular: ab
      } = bb;
      const {
        t: Ub
      } = (0, WM.A)();
      return (0, IM.jsxs)("li", {
        className: zM()("SkyblockRegularsCard", ab.tagged ? "Tagged" : "Untagged", ab.resting && "Resting"),
        children: [(0, IM.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, IM.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: ab.fishName,
            children: (0, IM.jsx)(mM.c, {
              itemName: ab.itemName,
              amount: 0
            })
          }), (0, IM.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, IM.jsx)("h3", {
              children: ab.name
            }), (0, IM.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: ab.fishName
            })]
          })]
        }), (0, IM.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: ab.line
        }), (0, IM.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, IM.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: ab.size
          }), ab.tagged && (0, IM.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: ab.resting ? Ub("skyblockGame:regularsResting") : ab.meetings
          })]
        }), (0, IM.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: ab.chance
        }), (0, IM.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: ab.gifts.map((bb => (0, IM.jsx)(fE, {
            gift: bb
          }, bb.text)))
        }), ab.history.length > 0 && (0, IM.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: ab.history.map(((bb, ab) => (0, IM.jsx)("li", {
            children: bb
          }, ab)))
        })]
      })
    }

    function pE(bb) {
      let {
        controller: ab,
        island: Ub
      } = bb;
      const {
        t: Ab
      } = (0, WM.A)(), Mb = (0, HM.i)(bM, ab.getSnapshot()), Tb = Mb.islands.find((bb => bb.id === Ub));
      if (!Mb.enabled || void 0 === Tb) return null;
      const Eb = Ab("skyblockGame:regularsOpen");
      return (0, IM.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": Eb,
        title: Eb,
        onClick: () => {
          ab.openIsland(Ub)
        },
        children: [(0, IM.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: Ab("skyblockGame:regularsTitle")
        }), Tb.regulars.map((bb => (0, IM.jsx)("span", {
          className: zM()("SkyblockRegularsStripIcon", bb.tagged && "Tagged"),
          title: bb.name,
          children: (0, IM.jsx)(mM.c, {
            itemName: bb.itemName,
            amount: 0
          })
        }, bb.id)))]
      })
    }

    function NE(bb) {
      var ab;
      let {
        controller: Ub
      } = bb;
      const Ab = (0, HM.i)(bM, Ub.getSnapshot()),
        {
          t: Mb
        } = (0, WM.A)(),
        Tb = lM();
      if (!Ab.enabled) return null;
      const Eb = null !== (ab = Ab.islands.find((bb => bb.id === Ab.selected))) && void 0 !== ab ? ab : null;
      return (0, IM.jsx)(rM.d, {
        show: Ab.open,
        close: Ub.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, IM.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: Tb,
          onKeyDown: oM,
          children: [(0, IM.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, IM.jsxs)("div", {
              children: [(0, IM.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: Mb("skyblockGame:regularsTitle")
              }), (0, IM.jsx)("p", {
                children: Mb("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, IM.jsx)(KM.k, {
              padIgnore: !0,
              onClick: Ub.dismiss
            })]
          }), (0, IM.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: Ab.islands.map((bb => {
              const ab = bb.id === Ab.selected;
              return (0, IM.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": ab,
                "data-pad-tab": !0,
                "data-pad-selected": ab ? "true" : void 0,
                className: zM()("SkyblockReachLogTab", `Island-${bb.id}`, ab && "Selected", bb.charm.given && "GoldPage"),
                onClick: () => {
                  Ub.selectIsland(bb.id)
                },
                children: (0, IM.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: bb.name
                })
              }, bb.id)
            }))
          }), (0, IM.jsxs)("div", {
            className: zM()("SkyblockRegularsPage", null !== Eb && `Island-${Eb.id}`),
            role: "tabpanel",
            children: [(0, IM.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: Mb("skyblockGame:regularsHow")
            }), null !== Eb && (0, IM.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: Eb.regulars.map((bb => (0, IM.jsx)(mE, {
                regular: bb
              }, bb.id)))
            })]
          }), null !== Eb && (0, IM.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, IM.jsx)("span", {
              className: zM()("SkyblockRegularsCharm", Eb.charm.given && "Given"),
              children: Eb.charm.text
            })
          })]
        })
      })
    }
    const WE = [{
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
      HE = Array.from({
        length: 6
      }, ((bb, ab) => ({
        "--x": `${(88*(.618034*ab%1)).toFixed(1)}%`,
        "--y": `${(10+37*ab%70).toFixed(1)}%`,
        "--size": 7 + ab % 3 * 3 + "rem",
        "--drift-x": 3 * (ab % 3 - 1) + "rem",
        "--drift-y": 2 * (ab % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + ab % 4 * 3 + "s",
        "--delay": 2.5 * -ab + "s"
      }))),
      IE = Array.from({
        length: 14
      }, ((bb, ab) => ({
        "--left": `${(3+94*((.618034*ab+.3)%1)).toFixed(1)}%`,
        "--size": 4 + ab % 4 * 2 + "px",
        "--sway": ab % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*ab%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*ab%12).toFixed(2)}s`
      }))),
      dE = (0, pb.memo)((function(bb) {
        let {
          island: ab
        } = bb;
        return (0, IM.jsxs)("div", {
          className: zM()("SkyblockReachLogDepths", null !== ab && `Island-${ab}`),
          "aria-hidden": "true",
          children: [WE.map(((bb, ab) => (0, IM.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: bb
          }, `shaft${ab}`))), HE.map(((bb, ab) => (0, IM.jsx)("span", {
            className: zM()("SkyblockReachLogMote", ab % 2 === 1 && "Violet"),
            style: bb
          }, `mote${ab}`))), IE.map(((bb, ab) => (0, IM.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: bb
          }, `bubble${ab}`)))]
        })
      })),
      FE = 100;

    function hE(bb) {
      let {
        view: ab
      } = bb;
      const {
        t: Ub
      } = (0, WM.A)();
      if (null === ab || 0 === ab.total) return null;
      const Ab = FE * ab.aspect,
        Mb = Ub("skyblockGame:hiddenWatersCount", {
          found: ab.found,
          total: ab.total
        });
      return (0, IM.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${Ub("skyblockGame:hiddenWatersTitle")}: ${Mb}`,
        children: [(0, IM.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${Ab}`,
          "aria-hidden": "true",
          children: [ab.islands.map(((bb, ab) => (0, IM.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (bb.left + bb.width / 2) * FE,
            cy: (bb.top + bb.height / 2) * Ab,
            rx: bb.width / 2 * FE,
            ry: bb.height / 2 * Ab
          }, ab))), ab.pins.map(((bb, ab) => (0, IM.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: bb.left * FE,
            cy: bb.top * Ab,
            r: 13
          }, ab)))]
        }), (0, IM.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, IM.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: Ub("skyblockGame:hiddenWatersTitle")
          }), (0, IM.jsx)("span", {
            className: ab.found === ab.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: Mb
          })]
        })]
      })
    }

    function GE(bb) {
      let {
        view: ab,
        island: Ub
      } = bb;
      const {
        t: Ab
      } = (0, WM.A)(), Mb = null === ab || void 0 === ab ? void 0 : ab.glimpses.get(Ub);
      return void 0 === Mb || 0 === Mb.length ? null : (0, IM.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, IM.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: Ab("skyblockGame:hiddenWatersGlimpsed")
        }), (0, IM.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: Mb.map((bb => (0, IM.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, IM.jsx)(mM.c, {
              itemName: bb,
              amount: 0
            })
          }, bb)))
        })]
      })
    }
    const QE = ["Bronze", "Silver", "Gold"],
      qE = [{
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
      uE = qE.slice(0, 2);

    function rE(bb) {
      return bb ? qE : uE
    }

    function KE(bb) {
      let {
        fish: ab,
        letGoShown: Ub
      } = bb;
      const {
        t: Ab
      } = (0, WM.A)();
      return (0, IM.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [QE.map(((bb, Ub) => {
          const Mb = Ub < ab.marks;
          return (0, IM.jsx)("span", {
            className: zM()("SkyblockReachLogPip", bb, Mb && "Earned", Mb && ab.fresh && Ub === ab.marks - 1 && "Newest"),
            title: Ab(IA[Ub])
          }, bb)
        })), (0, IM.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), rE(Ub).map(((bb, Ub) => (0, IM.jsx)("span", {
          className: zM()("SkyblockReachLogRibbon", bb.className, !0 === ab.ribbons[Ub] && "Earned"),
          title: Ab(bb.titleKey)
        }, bb.className)))]
      })
    }

    function oE(bb) {
      let {
        letGoShown: ab,
        haloShown: Ub
      } = bb;
      const {
        t: Ab
      } = (0, WM.A)();
      return (0, IM.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, IM.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Ab("skyblockGame:reachLogMarks"),
          children: [(0, IM.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), Ab("skyblockGame:reachLogLegendMarks")]
        }), rE(ab).map((bb => (0, IM.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Ab(bb.titleKey),
          children: [(0, IM.jsx)("span", {
            className: zM()("SkyblockReachLogRibbon", bb.className, "Earned")
          }), Ab(bb.legendKey)]
        }, bb.className))), (0, IM.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Ab("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, IM.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), Ab("skyblockGame:reachLogLegendGlimmer")]
        }), Ub && (0, IM.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Ab("skyblockGame:reachLogHaloTitle"),
          children: [(0, IM.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), Ab("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function lE(bb) {
      let {
        returner: ab
      } = bb;
      return (0, IM.jsxs)("div", {
        className: zM()("SkyblockReachLogReturner", ab.back && "Back"),
        children: [(0, IM.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, IM.jsx)(mM.c, {
            itemName: ab.itemName,
            amount: 0
          })
        }), (0, IM.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: ab.line
        })]
      })
    }

    function tE(bb) {
      let {
        fish: ab,
        letGoShown: Ub
      } = bb;
      const {
        t: Ab
      } = (0, WM.A)();
      return (0, IM.jsxs)("li", {
        className: zM()("SkyblockReachLogCard", ab.caught ? "Caught" : "Unknown", ab.marks >= 3 && "GoldCard", ab.fresh && "Fresh", ab.visitor && "Visitor"),
        children: [ab.visitor && (0, IM.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: Ab("skyblockGame:reachLogVisitor")
        }), ab.fresh && Array.from({
          length: 4
        }, ((bb, ab) => (0, IM.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, ab))), (0, IM.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [ab.halo && (0, IM.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: Ab("skyblockGame:reachLogHaloTitle")
          }), (0, IM.jsx)(mM.c, {
            itemName: ab.itemName,
            amount: 0
          }), ab.glimmer && (0, IM.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: Ab("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, IM.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: ab.name
        }), (0, IM.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: ab.chance
        }), (0, IM.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: ab.best
        }), (0, IM.jsx)(KE, {
          fish: ab,
          letGoShown: Ub
        })]
      })
    }

    function wE(bb) {
      let {
        page: ab,
        letGoShown: Ub,
        hiddenWaters: Ab
      } = bb;
      const {
        t: Mb
      } = (0, WM.A)();
      return ab.awake ? (0, IM.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: ab.fish.map((bb => (0, IM.jsx)(tE, {
          fish: bb,
          letGoShown: Ub
        }, bb.itemName)))
      }) : (0, IM.jsxs)(IM.Fragment, {
        children: [(0, IM.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: Mb("skyblockGame:reachLogAsleep")
        }), (0, IM.jsx)(GE, {
          view: Ab,
          island: ab.id
        })]
      })
    }

    function sE(bb) {
      var ab, Ub;
      let {
        controller: Ab,
        regulars: Mb,
        hiddenWaters: Tb
      } = bb;
      const Eb = (0, HM.i)(HA, Ab.getSnapshot()),
        Yb = function(bb) {
          return (0, HM.i)(TM, bb.getSnapshot())
        }(Tb),
        Bb = (0, HM.i)(bM, Mb.getSnapshot()),
        {
          t: eb
        } = (0, WM.A)(),
        vb = lM();
      if (!Eb.enabled) return null;
      const Lb = null !== (ab = Eb.pages.find((bb => bb.id === Eb.selected))) && void 0 !== ab ? ab : null;
      return (0, IM.jsx)(rM.d, {
        show: Eb.open,
        close: Ab.dismiss,
        togglePointerLock: !1,
        className: zM()("SkyblockSkillsOverlay", Bb.open && "SkyblockReachLogUnderLedger"),
        children: (0, IM.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: vb,
          onKeyDown: oM,
          children: [(0, IM.jsx)(dE, {
            island: null !== (Ub = null === Lb || void 0 === Lb ? void 0 : Lb.id) && void 0 !== Ub ? Ub : null
          }), (0, IM.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, IM.jsxs)("div", {
              children: [(0, IM.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: eb("skyblockGame:reachLogTitle")
              }), (0, IM.jsx)("p", {
                children: eb("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, IM.jsx)(hE, {
              view: Yb
            }), (0, IM.jsx)(KM.k, {
              padIgnore: !0,
              onClick: Ab.dismiss
            })]
          }), (0, IM.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: Eb.pages.map((bb => {
              const ab = bb.id === Eb.selected,
                Ub = bb.fish.some((bb => bb.fresh));
              return (0, IM.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": ab,
                "data-pad-tab": !0,
                "data-pad-selected": ab ? "true" : void 0,
                className: zM()("SkyblockReachLogTab", `Island-${bb.id}`, ab && "Selected", !bb.awake && "Asleep", bb.gold && "GoldPage", Ub && "HasNews"),
                onClick: () => {
                  Ab.selectPage(bb.id)
                },
                children: [(0, IM.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: bb.name
                }), bb.awake && (0, IM.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: eb("skyblockGame:reachLogCaughtCount", {
                    caught: bb.caught,
                    total: bb.total
                  })
                })]
              }, bb.id)
            }))
          }), (0, IM.jsxs)("div", {
            className: zM()("SkyblockReachLogPage", null !== Lb && `Island-${Lb.id}`),
            role: "tabpanel",
            children: [null !== Lb && (0, IM.jsx)(wE, {
              page: Lb,
              letGoShown: Eb.letGoShown,
              hiddenWaters: Yb
            }), !0 === (null === Lb || void 0 === Lb ? void 0 : Lb.awake) && null !== Lb.returner && (0, IM.jsx)(lE, {
              returner: Lb.returner
            }), !0 === (null === Lb || void 0 === Lb ? void 0 : Lb.awake) && (0, IM.jsx)(pE, {
              controller: Mb,
              island: Lb.id
            })]
          }), (0, IM.jsx)("footer", {
            className: zM()("SkyblockReachLogFooter", null !== Lb && `Island-${Lb.id}`, !0 === (null === Lb || void 0 === Lb ? void 0 : Lb.gold) && "GoldPage"),
            children: !0 === (null === Lb || void 0 === Lb ? void 0 : Lb.gold) ? (0, IM.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: eb("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, IM.jsxs)(IM.Fragment, {
              children: [(0, IM.jsx)(oE, {
                letGoShown: Eb.letGoShown,
                haloShown: !0 === (null === Lb || void 0 === Lb ? void 0 : Lb.fish.some((bb => bb.halo)))
              }), (0, IM.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: eb("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var gE = Ub(4516);

    function CE(bb) {
      let {
        conversation: ab,
        completedLabel: Ub
      } = bb;
      return (0, IM.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, IM.jsxs)("header", {
          children: [(0, IM.jsx)("h3", {
            children: ab.questName
          }), ab.completed && (0, IM.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: Ub
          })]
        }), ab.lines.map((bb => (0, IM.jsx)(gE.c, {
          display: bb.display
        }, bb.key)))]
      })
    }

    function VE(bb) {
      let {
        controller: ab
      } = bb;
      const {
        t: Ub
      } = (0, WM.A)(), Ab = (0, HM.i)(YM, ab.getSnapshot()), Mb = lM();
      if (!Ab.enabled) return null;
      const Tb = !Ab.loading && 0 === Ab.conversations.length;
      return (0, IM.jsx)(rM.d, {
        show: Ab.open,
        close: ab.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, IM.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: Mb,
          onKeyDown: oM,
          children: [(0, IM.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, IM.jsxs)("div", {
              children: [(0, IM.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: Ub("skyblockDialogue:title")
              }), (0, IM.jsx)("p", {
                children: Ub("skyblockDialogue:intro")
              })]
            }), (0, IM.jsx)(KM.k, {
              padIgnore: !0,
              onClick: ab.dismiss
            })]
          }), (0, IM.jsxs)("div", {
            className: zM()("SkyblockDialogueBody", {
              SingleColumn: null !== Ab.questFocus || 0 === Ab.characters.length
            }),
            children: [null === Ab.questFocus && Ab.characters.length > 0 && (0, IM.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: Ab.characters.map((bb => (0, IM.jsx)(KM.g, {
                className: zM()("SkyblockDialogueCharacter", {
                  Selected: bb.selected
                }),
                onClick: () => {
                  ab.selectCharacter(bb.id)
                },
                children: (0, IM.jsx)(pM.c, {
                  text: bb.styling
                })
              }, bb.id)))
            }), (0, IM.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== Ab.questFocus && (0, IM.jsx)(KM.g, {
                className: "SkyblockDialogueBack",
                onClick: ab.showCharacters,
                children: Ub("skyblockDialogue:allCharacters")
              }), Ab.loading && (0, IM.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: Ub("skyblockDialogue:loading")
              }), Tb && (0, IM.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: Ub(null === Ab.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), Ab.conversations.map((bb => (0, IM.jsx)(CE, {
                conversation: bb,
                completedLabel: Ab.completedLabel
              }, bb.questId)))]
            })]
          })]
        })
      })
    }

    function OE(bb) {
      let {
        controller: ab
      } = bb;
      const Ub = (0, HM.i)(PM, ab.getSnapshot()),
        {
          t: Ab
        } = (0, WM.A)(),
        Mb = lM();
      return Ub.enabled ? (0, IM.jsx)(rM.d, {
        show: Ub.open,
        close: ab.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, IM.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: Mb,
          onKeyDown: oM,
          children: [(0, IM.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, IM.jsxs)("div", {
              children: [(0, IM.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: Ab("skyblockGame:autographBook")
              }), (0, IM.jsx)("p", {
                children: Ab("skyblockGame:autographBookIntro")
              })]
            }), (0, IM.jsx)(KM.k, {
              padIgnore: !0,
              onClick: ab.dismiss
            })]
          }), (0, IM.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, IM.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, IM.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, IM.jsx)("strong", {
                  children: Ub.total
                }), (0, IM.jsx)("span", {
                  children: Ab("skyblockGame:autographTotal")
                })]
              }), (0, IM.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, IM.jsx)("strong", {
                  children: Ub.rankTotal
                }), (0, IM.jsx)("span", {
                  children: Ab("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === Ub.entries.length ? (0, IM.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: Ab("skyblockGame:autographBookEmpty")
            }) : (0, IM.jsx)("ul", {
              className: "SkyblockAutographList",
              children: Ub.entries.map((bb => (0, IM.jsxs)("li", {
                className: zM()("SkyblockAutograph", {
                  Ranked: null !== bb.rank
                }),
                style: null === bb.rank ? void 0 : {
                  color: bb.rank.colour
                },
                children: [null !== bb.rank && (0, IM.jsx)(PT.e, {
                  className: "SkyblockAutographRankIcon",
                  name: bb.rank.icon,
                  kit: (0, PT.f)(bb.rank.icon)
                }), (0, IM.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, IM.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: bb.name
                  }), (0, IM.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== bb.rank && (0, IM.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: bb.rank.label
                    }), (0, IM.jsx)("span", {
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
    const cE = (0, pb.memo)((function(bb) {
        let {
          controller: ab
        } = bb;
        return (0, IM.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: ab.display.mountWaypoint,
          children: [(0, IM.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, IM.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, IM.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, IM.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, IM.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, IM.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      JE = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function nE(bb) {
      return "next" === bb.phase ? "\u2192" : JE[bb.kind]
    }
    const SE = (0, pb.memo)((function(bb) {
      let {
        controller: ab,
        display: Ub
      } = bb;
      const Ab = (0, HM.i)(vU, ab.getNotificationSnapshot()),
        [Mb, Tb] = (0, pb.useState)(!1);
      return (0, HM.f)("qteStateUpdated", (bb => {
        Tb(bb.isActive)
      })), (0, IM.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (Mb ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [Ab && (0, IM.jsxs)("div", {
          className: `SkyblockQuestNotification ${Ab.kind} ${Ab.phase}`,
          style: {
            "--quest-notification-duration": `${Ab.durationMs}ms`,
            ...Ab.accent && {
              "--quest-notification-accent": Ab.accent
            }
          },
          children: [(0, IM.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (Ab.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, IM.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: nE(Ab)
            }), Ab.iconItem && (0, IM.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, IM.jsx)(mM.c, {
                itemName: Ab.iconItem,
                amount: 0
              })
            })]
          }), (0, IM.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, IM.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: Ab.title
            }), (0, IM.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, IM.jsx)(TT.c, {
                text: Ab.name
              })
            }), Ab.description && (0, IM.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, IM.jsx)(TT.c, {
                text: Ab.description
              })
            }), Ab.reward && (0, IM.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, IM.jsx)(TT.c, {
                text: Ab.reward
              })
            })]
          })]
        }, Ab.token), (null === Ab || void 0 === Ab ? void 0 : Ab.waypointNameKey) && (0, IM.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": Ab.waypointNameKey,
          "data-notification-token": Ab.token,
          ref: Ub.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${Ab.token}`)]
      })
    }));

    function bY(bb) {
      const ab = parseInt(bb.replace("#", ""), 16);
      return `${ab>>16&255}, ${ab>>8&255}, ${255&ab}`
    }
    const aY = (0, pb.memo)((function(bb) {
      let {
        controller: ab
      } = bb;
      const {
        t: Ub
      } = (0, WM.A)(), Ab = (0, HM.i)(uU, ab.getSnapshot());
      if (!Ab) return null;
      const Mb = "arrival" === Ab.phase;
      return (0, IM.jsxs)("div", {
        className: zM()("SkyblockPortalTransit", {
          Departure: !Mb,
          Arrival: Mb
        }),
        style: {
          "--portal-rgb": bY(Ab.colour),
          "--portal-duration": `${Ab.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, IM.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, IM.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            ab.finishArrival(Ab.token)
          }
        }), (0, IM.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, IM.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !Mb && (0, IM.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: Ub("skyblockGame:portalTransitHeading")
          }), (0, IM.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: Ub(Ab.zoneNameKey)
          })]
        })]
      }, Ab.token)
    }));

    function UY() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function AY() {
      const bb = document.querySelector(".SkyblockHudCoins"),
        ab = null === bb || void 0 === bb ? void 0 : bb.getBoundingClientRect();
      return ab && ab.width > 0 ? {
        x: ab.left + Math.min(ab.width, 24) / 2,
        y: ab.top + ab.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function MY(bb) {
      return {
        x: bb.left + bb.width / 2,
        y: bb.top + bb.height / 2
      }
    }

    function TY() {
      var bb;
      const ab = null === (bb = document.querySelector(".HotBar")) || void 0 === bb ? void 0 : bb.getBoundingClientRect();
      return ab && ab.width > 0 ? MY(ab) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function EY(bb) {
      let {
        items: ab,
        origins: Ub,
        target: Ab
      } = bb;
      return (0, IM.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: ab.map(((bb, ab) => {
          const Mb = Ub[ab];
          return (0, IM.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${Mb.x}px`,
              top: `${Mb.y}px`,
              "--item-dx": Ab.x - Mb.x + "px",
              "--item-dy": Ab.y - Mb.y + "px",
              "--item-delay": 2e3 + 160 * ab + "ms",
              "--item-flight": "700ms"
            },
            children: (0, IM.jsx)(mM.c, {
              itemName: bb.dailyRewardItemName,
              amount: 0
            })
          }, bb.dailyRewardItemName)
        }))
      })
    }

    function YY(bb, ab) {
      const Ub = -Math.PI / 2 + 1.25 * (bb / (ab - 1) * 2 - 1),
        Ab = 70 + bb % 3 * 22;
      return {
        x: Math.cos(Ub) * Ab,
        y: Math.sin(Ub) * Ab * .7
      }
    }

    function BY(bb) {
      let {
        origin: ab,
        target: Ub,
        count: Ab
      } = bb;
      const Mb = [];
      for (let Tb = 0; Tb < Ab; Tb++) {
        const bb = YY(Tb, Ab);
        Mb.push((0, IM.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${ab.x}px`,
            top: `${ab.y}px`,
            "--coin-bx": `${bb.x}px`,
            "--coin-by": `${bb.y}px`,
            "--coin-dx": Ub.x - ab.x + "px",
            "--coin-dy": Ub.y - ab.y + "px",
            "--coin-delay": `${wU(Tb,Ab)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, IM.jsx)(mM.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, Tb))
      }
      return (0, IM.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: Mb
      })
    }

    function eY(bb) {
      let {
        day: ab
      } = bb;
      const Ub = Nb[ab - 1];
      return (0, IM.jsxs)(IM.Fragment, {
        children: [(0, IM.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, IM.jsx)(mM.c, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, NM.g)(Ub.dailyRewardCoins)]
        }), Ub.dailyRewardItems.map((bb => (0, IM.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, IM.jsx)(mM.c, {
            itemName: bb.dailyRewardItemName,
            amount: 0
          }), "\xd7", bb.dailyRewardItemAmount]
        }, bb.dailyRewardItemName)))]
      })
    }

    function vY(bb) {
      let {
        day: ab
      } = bb;
      const Ub = Hb(ab);
      return (0, IM.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: Nb.map(((bb, Ab) => {
          const Mb = Ab + 1;
          return (0, IM.jsxs)("li", {
            className: zM()("SkyblockDailyRewardTile", {
              Claimed: Mb < ab && Mb !== Ub,
              Today: Mb === ab,
              Tomorrow: Mb === Ub,
              Jackpot: Mb === Wb
            }),
            children: [(0, IM.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: Mb
            }), (0, IM.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, IM.jsx)(mM.c, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, NM.g)(bb.dailyRewardCoins)]
            }), bb.dailyRewardItems.map((bb => (0, IM.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, IM.jsx)(mM.c, {
                itemName: bb.dailyRewardItemName,
                amount: 0
              }), "\xd7", bb.dailyRewardItemAmount]
            }, bb.dailyRewardItemName)))]
          }, Mb)
        }))
      })
    }

    function LY(bb) {
      let {
        view: ab
      } = bb;
      const {
        t: Ub
      } = (0, WM.A)(), Ab = (0, pb.useRef)(null), Mb = (0, pb.useRef)(null), [Tb, Eb] = (0, pb.useState)(null);
      (0, pb.useLayoutEffect)((() => {
        var bb;
        const ab = null === (bb = Ab.current) || void 0 === bb ? void 0 : bb.getBoundingClientRect();
        if (ab) {
          var Ub, Tb;
          const bb = Array.from(null !== (Ub = null === (Tb = Mb.current) || void 0 === Tb ? void 0 : Tb.children) && void 0 !== Ub ? Ub : [], (bb => MY(bb.getBoundingClientRect())));
          Eb({
            origin: MY(ab),
            target: AY(),
            itemOrigins: bb,
            itemTarget: TY()
          })
        }
      }), []);
      const Yb = Hb(ab.day),
        Bb = function(bb, ab) {
          const [Ub, Ab] = (0, pb.useState)((() => UY() ? bb : 0));
          return (0, pb.useEffect)((() => {
            if (UY()) return;
            const Ub = performance.now();
            let Mb = 0;
            const Tb = Eb => {
              const Yb = Math.min(Math.max((Eb - Ub) / ab, 0), 1);
              Ab(Math.round(bb * (1 - (1 - Yb) ** 3))), Yb < 1 && (Mb = requestAnimationFrame(Tb))
            };
            return Mb = requestAnimationFrame(Tb), () => {
              cancelAnimationFrame(Mb)
            }
          }), [bb, ab]), Ub
        }(ab.coins, 450);
      return (0, IM.jsxs)("div", {
        className: zM()("SkyblockDailyReward", {
          Jackpot: ab.day === Wb
        }),
        style: {
          "--daily-duration": `${ab.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, IM.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, IM.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, IM.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, IM.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: Ub("skyblockGame:dailyRewardTitle")
            }), (0, IM.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: Ub("skyblockGame:dailyRewardDay", {
                day: String(ab.day)
              })
            })]
          }), (0, IM.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: Ab,
            children: [(0, IM.jsx)(mM.c, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, IM.jsxs)("span", {
              children: ["+", (0, NM.g)(Bb)]
            })]
          }), ab.items.length > 0 && (0, IM.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: Mb,
            children: ab.items.map((bb => (0, IM.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, IM.jsx)(mM.c, {
                itemName: bb.dailyRewardItemName,
                amount: 0
              }), "\xd7", bb.dailyRewardItemAmount]
            }, bb.dailyRewardItemName)))
          }), (0, IM.jsx)(vY, {
            day: ab.day
          }), (0, IM.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [Ub("skyblockGame:dailyRewardComeBack"), (0, IM.jsx)(eY, {
              day: Yb
            })]
          })]
        }), null !== Tb && (0, IM.jsx)(BY, {
          origin: Tb.origin,
          target: Tb.target,
          count: ab.flyingCoins
        }), null !== Tb && Tb.itemOrigins.length === ab.items.length && (0, IM.jsx)(EY, {
          items: ab.items,
          origins: Tb.itemOrigins,
          target: Tb.itemTarget
        })]
      })
    }
    const PY = (0, pb.memo)((function(bb) {
        let {
          controller: ab
        } = bb;
        const Ub = (0, HM.i)(oU, ab.getSnapshot());
        return Ub ? (0, IM.jsx)(LY, {
          view: Ub
        }, Ub.token) : null
      })),
      XY = "Gold Coin";

    function jY(bb) {
      return 650 + 220 * bb
    }

    function RY(bb) {
      return {
        "--letter-delay": `${jY(bb)}ms`,
        "--letter-land": `${jY(bb)+300}ms`
      }
    }

    function kY(bb) {
      let {
        letterCount: ab
      } = bb;
      return (0, IM.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, IM.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, IM.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, IM.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: ab
        }, ((bb, ab) => (0, IM.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: RY(ab),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, ab)))]
      })
    }

    function yY(bb) {
      var ab, Ub, Ab;
      let {
        letter: Mb,
        index: Tb
      } = bb;
      const {
        t: Eb
      } = (0, WM.A)(), Yb = null !== (ab = null === (Ub = Mb.items[0]) || void 0 === Ub ? void 0 : Ub.itemName) && void 0 !== ab ? ab : XY;
      return (0, IM.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: RY(Tb),
        children: [(0, IM.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, IM.jsx)(mM.c, {
            itemName: Yb,
            amount: 0
          })
        }), (0, IM.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: Eb(Mb.reasonKey, null !== (Ab = Mb.reasonParams) && void 0 !== Ab ? Ab : void 0)
        }), (0, IM.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [Mb.coins > 0 && (0, IM.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, IM.jsx)(mM.c, {
              itemName: XY,
              amount: 0
            }), "+", (0, NM.g)(Mb.coins)]
          }), Mb.items.map(((bb, ab) => (0, IM.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, IM.jsx)(mM.c, {
              itemName: bb.itemName,
              amount: 0
            }), bb.label, " \xd7", bb.amount]
          }, ab)))]
        })]
      })
    }

    function ZY(bb) {
      let {
        view: ab
      } = bb;
      const {
        t: Ub
      } = (0, WM.A)();
      return (0, IM.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${ab.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${jY(ab.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, IM.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, IM.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, IM.jsx)(kY, {
              letterCount: ab.letters.length
            }), (0, IM.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: Ub("skyblockGame:mailboxTitle")
            })]
          }), (0, IM.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: ab.letters.map(((bb, ab) => (0, IM.jsx)(yY, {
              letter: bb,
              index: ab
            }, ab)))
          }), ab.more > 0 && (0, IM.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: Ub("skyblockGame:mailboxMore", {
              count: String(ab.more)
            })
          })]
        })
      })
    }
    const DY = (0, pb.memo)((function(bb) {
      let {
        controller: ab
      } = bb;
      const Ub = (0, HM.i)(gU, ab.getSnapshot());
      return Ub ? (0, IM.jsx)(ZY, {
        view: Ub
      }, Ub.token) : null
    }));

    function zY(bb) {
      let {
        controller: ab
      } = bb;
      const {
        t: Ub
      } = (0, WM.A)(), Ab = (0, HM.i)(uA, ab.getSnapshot());
      if (null === Ab) return null;
      const Mb = Ab.fullSet ? "empty" === Ab.fuelState ? {
        text: Ub("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: Ub("skyblockGame:magmawardHudFullSet", {
          worn: String(Ab.wornCount)
        }),
        tone: "partial"
      };
      return (0, IM.jsx)(iM.e, {
        placement: "statBars",
        children: (0, IM.jsxs)("div", {
          className: zM()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${Ab.fuelState}`, {
            "SkyblockMagmawardHud-partial": !Ab.fullSet,
            "SkyblockMagmawardHud-armed": Ab.fullSet && "empty" !== Ab.fuelState
          }),
          children: [null !== Ab.flare && (0, IM.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${Ab.flare}`
          }, `flare:${Ab.flareToken}`), (0, IM.jsx)("div", {
            className: zM()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: Ab.setLit
            }),
            children: Ab.pieces.map(((bb, ab) => (0, IM.jsx)("div", {
              className: zM()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: bb.worn,
                SkyblockMagmawardPieceJustWorn: bb.justWorn
              }),
              children: (0, IM.jsx)(mM.c, {
                itemName: bb.itemName,
                amount: 0
              })
            }, `${ab}:${bb.wornToken}`)))
          }, `pieces:${Ab.setLitToken}`), (0, IM.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, IM.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, IM.jsxs)("div", {
              className: zM()("SkyblockMagmawardFuelCounter", Ab.pulse && `SkyblockMagmawardFuelCounter-${Ab.pulse}`),
              children: [(0, IM.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, IM.jsx)(mM.c, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, IM.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: Ab.fuel
              })]
            }, `counter:${Ab.pulseToken}`), "burn" === Ab.pulse && (0, IM.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${Ab.pulseToken}`)]
          }), Mb && (0, IM.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${Mb.tone} SmallTextBold`,
            children: Mb.text
          })]
        })
      })
    }

    function xY(bb) {
      let {
        controller: ab
      } = bb;
      const {
        t: Ub,
        selectedLanguage: Ab
      } = (0, WM.A)(), Mb = (0, HM.i)(KA, ab.getSnapshot());
      return null === Mb ? null : (0, IM.jsx)(iM.e, {
        placement: "statBars",
        children: (0, IM.jsxs)("div", {
          className: zM()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: Mb.inRange
          }),
          style: {
            "--glowtide-colour": Mb.colour
          },
          "aria-label": Ub("skyblockGame:glowtideChipLabel"),
          children: [(0, IM.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), Mb.inRange ? (0, IM.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: Ub("skyblockGame:glowtideChipInRange")
          }, `call:${Mb.inRangeToken}`) : (0, IM.jsxs)(IM.Fragment, {
            children: [(0, IM.jsx)("div", {
              ref: ab.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, IM.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: Ub("skyblockGame:waypointDistance", {
                distance: ib(Mb.distance, Ab.code)
              })
            })]
          })]
        })
      })
    }

    function iY(bb) {
      let {
        controller: ab
      } = bb;
      const {
        t: Ub
      } = (0, WM.A)(), Ab = (0, HM.i)(lA, ab.getSnapshot());
      return null === Ab ? null : (0, IM.jsx)(iM.e, {
        placement: "statBars",
        children: (0, IM.jsxs)("div", {
          className: zM()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: Ab.full
          }),
          "aria-label": Ub("skyblockGame:glowMeterLabel", {
            fill: String(Ab.fill),
            PL: String(Ab.PL)
          }),
          children: [Ab.burst && (0, IM.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${Ab.burstToken}`), (0, IM.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, IM.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${Ab.ratio})`
              }
            }), Ab.gained && (0, IM.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${Ab.gainToken}`), Ab.full && Array.from({
              length: 5
            }, ((bb, ab) => (0, IM.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, ab)))]
          }), Ab.full && Ab.rares.map((bb => (0, IM.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, IM.jsx)(mM.c, {
              itemName: bb,
              amount: 0
            })
          }, bb))), Ab.ready && (0, IM.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, IM.jsx)("span", {
              children: Ub("skyblockGame:glowMeterReady")
            })
          }, `ready:${Ab.fullToken}`)]
        })
      })
    }

    function fY(bb) {
      let {
        controller: ab
      } = bb;
      const {
        t: Ub
      } = (0, WM.A)(), Ab = (0, HM.i)(wA, ab.getSnapshot());
      if (null === Ab) return null;
      const Mb = "waiting" === Ab.phase,
        Tb = {
          animationDuration: `${Ab.waitMs}ms`,
          animationDelay: -Ab.elapsedMs + "ms"
        },
        Eb = Mb ? void 0 : {
          animationDuration: `${Ab.waitMs}ms`
        };
      return (0, IM.jsxs)("div", {
        className: Mb ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [Mb && (0, IM.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((bb, ab) => (0, IM.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, ab))), (0, IM.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: Tb
          }), (0, IM.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, IM.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, IM.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: Tb
            })]
          }), (0, IM.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, IM.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: Eb,
          children: Ub(Ab.line)
        }, Ab.lineIndex)]
      }, Ab.token)
    }

    function mY(bb) {
      let {
        chart: ab,
        showHere: Ub,
        className: Ab
      } = bb;
      return (0, IM.jsx)("div", {
        className: zM()("SkyblockTideChartGrid", Ab, null !== ab.pictureName && "Complete"),
        "aria-hidden": "true",
        children: ab.cells.map(((bb, Ab) => {
          const Mb = 0 !== (ab.pulseCells & 1 << Ab),
            Tb = ab.castCell === Ab;
          return (0, IM.jsx)("span", {
            className: zM()("SkyblockTideChartCell", `Cell-${bb}`, Mb && "Pulse", Tb && "Cast", Ub && ab.hereCell === Ab && "Here")
          }, `${Ab}:${Mb?`p${ab.pulseToken}`:""}:${Tb?`c${ab.castToken}`:""}`)
        }))
      })
    }

    function pY(bb) {
      let {
        controller: ab
      } = bb;
      const Ub = (0, HM.i)(gA, ab.getSnapshot()),
        {
          t: Ab
        } = (0, WM.A)(),
        Mb = Ub.chip;
      if (!Ub.enabled || null === Mb) return null;
      const Tb = Ab("skyblockGame:tideChartsChipLabel", {
        island: Mb.islandName,
        lit: String(Mb.lit),
        ink: String(Mb.ink)
      });
      return (0, IM.jsx)(iM.e, {
        placement: "statBars",
        children: (0, IM.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: zM()("SkyblockTideChartsChip", Ub.open && "Open", null !== Mb.pictureName && "Complete"),
          "aria-label": Tb,
          title: Tb,
          onMouseDown: bb => {
            bb.preventDefault()
          },
          onClick: ab.toggle,
          children: [(0, IM.jsx)(mY, {
            chart: Mb,
            showHere: !1,
            className: "Mini"
          }), (0, IM.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [Mb.lit, "/", Mb.ink]
          })]
        })
      })
    }

    function NY(bb) {
      let {
        controller: ab
      } = bb;
      const Ub = (0, HM.i)(gA, ab.getSnapshot()),
        {
          t: Ab
        } = (0, WM.A)(),
        Mb = lM(),
        Tb = Ub.card;
      return Ub.enabled && null !== Tb ? (0, IM.jsx)(rM.d, {
        show: Ub.open,
        close: ab.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, IM.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: Mb,
          onKeyDown: oM,
          children: [(0, IM.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, IM.jsxs)("div", {
              children: [(0, IM.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: Ab("skyblockGame:tideChartsTitle")
              }), (0, IM.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: Ab("skyblockGame:tideChartsIntro")
              })]
            }), (0, IM.jsx)(KM.k, {
              padIgnore: !0,
              ariaLabel: Ab("skyblockGame:tideChartsClose"),
              onClick: ab.dismiss
            })]
          }), Ub.tabs.length > 1 && (0, IM.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": Ab("skyblockGame:tideChartsIslands"),
            children: Ub.tabs.map((bb => (0, IM.jsx)("button", {
              type: "button",
              className: zM()("SkyblockTideChartsTab", bb.selected && "Selected"),
              "aria-pressed": bb.selected,
              onClick: () => {
                ab.GP(bb.island)
              },
              children: bb.name
            }, bb.island)))
          }), (0, IM.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, IM.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": Tb.gridLabel,
              children: (0, IM.jsx)(mY, {
                chart: Tb,
                showHere: !0,
                className: "Large"
              })
            }), (0, IM.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, IM.jsx)("h3", {
                children: Tb.islandName
              }), (0, IM.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: Tb.litText
              }), null === Tb.pictureName ? (0, IM.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: Ab("skyblockGame:tideChartsPictureHidden")
              }) : (0, IM.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: Ab("skyblockGame:tideChartsPictureRevealed", {
                  picture: Tb.pictureName
                })
              }, Tb.pictureName), (0, IM.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, IM.jsxs)("li", {
                  children: [(0, IM.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), Ab("skyblockGame:tideChartsLegendLit")]
                }), (0, IM.jsxs)("li", {
                  children: [(0, IM.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), Ab("skyblockGame:tideChartsLegendClear")]
                }), null !== Tb.hereCell && (0, IM.jsxs)("li", {
                  children: [(0, IM.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), Ab("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, IM.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, IM.jsx)("span", {
                  children: Ub.turnsText
                }), (0, IM.jsx)("span", {
                  children: Ub.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function WY(bb) {
      var ab;
      let {
        controller: Ub
      } = bb;
      const {
        selectedLanguage: Ab
      } = (0, WM.A)(), Mb = Ab.code;
      (0, pb.useEffect)((() => {
        Ub.setTranslator(((bb, ab) => (0, WM.w)(Mb, bb, ab)), Mb, ((bb, ab) => (0, WM.p)(Mb, bb, ab)))
      }), [Ub, Mb]);
      const Tb = (0, HM.i)(Pb, Ub.map.getSnapshot()),
        {
          openInGameMenuName: Eb
        } = (0, xM.n)(["openInGameMenuName"]);
      return (0, IM.jsxs)(IM.Fragment, {
        children: [(0, IM.jsx)(SE, {
          controller: Ub.quests,
          display: Ub.navigation.display
        }), Tb.enabled && !Eb && (0, IM.jsx)(UT, {
          controller: Ub.navigation
        }), (0, IM.jsx)(dM, {
          controller: Ub,
          minimap: Tb.enabled && (null === (ab = Tb.presentation) || void 0 === ab ? void 0 : ab.minimap) && (0, IM.jsx)(aT, {
            view: Tb.presentation.minimap,
            navigation: Ub.navigation,
            controller: Ub.map
          }),
          children: (0, IM.jsx)(LT, {
            controller: Ub.quests,
            surface: "hud"
          })
        }), (0, IM.jsx)(cE, {
          controller: Ub.navigation
        }), (0, IM.jsx)(aY, {
          controller: Ub.portalTransit
        }), (0, IM.jsx)(PY, {
          controller: Ub.dailyReward
        }), (0, IM.jsx)(DY, {
          controller: Ub.mailbox
        }), (0, IM.jsx)(zY, {
          controller: Ub.magmaward
        }), (0, IM.jsx)(xY, {
          controller: Ub.glowtide
        }), (0, IM.jsx)(LE, {
          controller: Ub.passage
        }), (0, IM.jsx)(pY, {
          controller: Ub.tideCharts
        }), (0, IM.jsx)(iY, {
          controller: Ub.glowMeter
        }), (0, IM.jsx)(iE, {
          controller: Ub.reachLog
        }), (0, IM.jsx)(fY, {
          controller: Ub.hushWait
        }), (0, IM.jsx)(ZE, {
          controller: Ub.lampLight
        }), (0, IM.jsx)(AT, {
          controller: Ub.skills,
          surface: "hud"
        })]
      })
    }

    function HY(bb) {
      let {
        controller: ab
      } = bb;
      return (0, IM.jsxs)(IM.Fragment, {
        children: [(0, IM.jsx)(bT, {
          controller: ab.map,
          navigation: ab.navigation
        }), (0, IM.jsx)(AT, {
          controller: ab.skills,
          surface: "menu"
        }), (0, IM.jsx)(LT, {
          controller: ab.quests,
          surface: "menu"
        }), (0, IM.jsx)(gT, {
          controller: ab.dungeons
        }), (0, IM.jsx)(OT, {
          controller: ab.collections
        }), (0, IM.jsx)(nT, {
          controller: ab.questGraph
        }), (0, IM.jsx)(AE, {
          controller: ab.forge
        }), (0, IM.jsx)(eE, {
          controller: ab.smuggler
        }), (0, IM.jsx)(zE, {
          controller: ab.keepersChair,
          lampLight: ab.lampLight
        }), (0, IM.jsx)(sE, {
          controller: ab.reachLog,
          regulars: ab.regulars,
          hiddenWaters: ab.hiddenWaters
        }), (0, IM.jsx)(NE, {
          controller: ab.regulars
        }), (0, IM.jsx)(XE, {
          controller: ab.passage
        }), (0, IM.jsx)(NY, {
          controller: ab.tideCharts
        }), (0, IM.jsx)(VE, {
          controller: ab.dialogue
        }), (0, IM.jsx)(OE, {
          controller: ab.autographs
        })]
      })
    }
    var IY = Ub(36108);
    const dY = bA + YA;

    function FY(bb, ab, Ub, Ab, Mb) {
      const Tb = [],
        Eb = [],
        Yb = Ub => {
          const Ab = bb.playSound(ab, Ub.sound, Ub.volume, Ub.rate);
          Ab && (Eb.push(Ab), void 0 !== Ub.cutAfter && Tb.push(setTimeout((() => {
            Ab.fade(Ab.getVolume(), 0, 300)
          }), Ub.cutAfter)))
        };
      for (const Bb of function(bb, ab) {
          const Ub = [{
            sound: "rpgKnifeSlice1",
            beat: bA,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: bA,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: bA,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: bA,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: bA,
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
            sound: (0, IY.e)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: dY + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, IY.e)("bigDrumSwish"),
            beat: dY + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: dY + 60,
            lead: 180,
            volume: .5 + .06 * bb,
            rate: .82 + .07 * bb
          }];
          return bb >= 4 && Ub.push({
            sound: "exp_levelup",
            beat: dY + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), ab && Ub.push({
            sound: "trumpetFlare",
            beat: dY + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), Ub.push({
            sound: "harp_pling",
            beat: aA,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), Ub
        }(Ub, Ab)) Mb ? Tb.push(setTimeout((() => {
        Yb(Bb)
      }), Math.max(0, Bb.beat - Bb.lead / Bb.rate))) : Bb.beat !== bA && "magicAccent2" !== Bb.sound && "trumpetFlare" !== Bb.sound || Yb(Bb);
      return () => {
        for (const bb of Tb) clearTimeout(bb);
        for (const bb of Eb) bb.fade(bb.getVolume(), 0, 120)
      }
    }
    class hY {
      constructor(bb) {
        this.deps = bb, this.pending = new Map, this.localHook = null
      }
      hookWaiting(bb, ab) {
        this.pending.delete(bb);
        const Ub = this.deps.now();
        if (null === ab) {
          var Ab;
          if ((null === (Ab = this.localHook) || void 0 === Ab ? void 0 : Ab.hookId) === bb) {
            const bb = Ub >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(bb)
          }
          return
        }
        const Mb = Ub + ab;
        this.settle(bb, Mb) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(bb, {
          untilMs: Ub + 1e3,
          biteAtMs: Mb
        }))
      }
      getLocalHook() {
        var bb, ab;
        return null !== (bb = null === (ab = this.localHook) || void 0 === ab ? void 0 : ab.hookId) && void 0 !== bb ? bb : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const bb = this.deps.now();
        for (const [ab, {
            untilMs: Ub,
            biteAtMs: Ab
          }] of this.pending)(this.settle(ab, Ab) || bb > Ub) && this.pending.delete(ab)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(bb, ab) {
        const Ub = this.deps.getLineOwner(bb);
        if (null === Ub) return !1;
        if (!this.deps.isLocalPlayer(Ub)) return !0;
        if (this.localHook = {
            hookId: bb,
            biteAtMs: ab
          }, !this.deps.isHushWaiting()) {
          const [ab, Ub] = this.deps.getHookPosition(bb);
          this.deps.onCastLanded(ab, Ub)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var GY = Ub(3959);
    const QY = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      qY = {
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
    class uY {
      constructor(bb) {
        this.deps = bb, this.tell = null
      }
      receiveTell(bb) {
        let {
          biteTellTier: ab
        } = bb;
        this.tell = {
          tier: ab,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(bb) {
        const ab = this.tell;
        if (this.tell = null, !bb) return;
        const Ub = null !== ab && this.deps.now() - ab.atMs <= 3e3 ? ab.tier : 0;
        this.deps.vibrate(QY[Ub])
      }
      burstAtHook() {
        const bb = this.tell,
          ab = this.deps.getLocalHookPosition();
        null === bb || bb.burst || null === ab || (bb.burst = !0, this.deps.playParticles(function(bb, ab) {
          let [Ub, Ab, Mb] = ab;
          const {
            count: Tb,
            rise: Eb,
            colour: Yb
          } = qY[bb], [Bb, eb, vb] = Yb;
          return {
            texture: "glint",
            pos1: [Ub - .3, Ab, Mb - .3],
            pos2: [Ub + .3, Ab + .2, Mb + .3],
            dir1: [-.6, Eb, -.6],
            dir2: [.6, 1.4 * Eb, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: Tb,
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
              minColor: [Bb, eb, vb, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [Bb, eb, vb, 0],
              maxColor: [Bb, eb, vb, 0]
            }],
            blendMode: GY.f.Add,
            hideDist: 48
          }
        }(bb.tier, ab)))
      }
    }
    var rY = Ub(1198),
      KY = Ub(1829),
      oY = Ub(31);

    function lY(bb, ab) {
      return [{
        timeFraction: 0,
        minColor: [255 * bb[0], 255 * bb[1], 255 * bb[2], 1],
        maxColor: [255 * ab[0], 255 * ab[1], 255 * ab[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const tY = [0, 0, 0],
      wY = {
        texture: "glint",
        mipmaps: !1,
        PL: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: tY,
        dir2: tY,
        blendMode: GY.f.OneOne
      },
      sY = {
        ...wY,
        colorGradients: lY([1, .88, .38], [1, .65, .15])
      },
      gY = {
        ...wY,
        colorGradients: lY([.55, .95, 1], [.9, 1, 1])
      },
      CY = [.5, .5, .5],
      VY = {
        texture: "glint",
        mipmaps: !1,
        PL: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: lY([1, .12, .12], [1, .35, .2]),
        blendMode: GY.f.OneOne
      };
    class OY {
      constructor() {
        this.drops = new Map
      }
      aj(bb, ab) {
        if ("overflowFlash" === ab.kind) {
          const [Ub, Ab, Mb] = ab.position, Tb = bb.createParticles(VY, {
            pos: [Ub, Ab, Mb],
            half: CY
          });
          return Tb.emit(18), void Tb.stop()
        }
        this.drops.has(ab.itemId) || this.drops.set(ab.itemId, {
          owner: ab.owner,
          cosmetic: ab.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      qL(bb) {
        if (0 === this.drops.size) return;
        const ab = performance.now(),
          Ub = bb.getCameraPosition();
        let Ab = 0;
        for (const Tb of this.drops.values()) null !== Tb.particles && Ab++;
        for (const [Tb, Eb] of this.drops) {
          const Yb = bb.getPositionView(Tb);
          if (null === Yb) {
            var Mb;
            if (Eb.seen || ab - Eb.markedAt > 5e3) null !== Eb.particles && Ab--, null === (Mb = Eb.particles) || void 0 === Mb || Mb.stop(), this.drops.delete(Tb);
            continue
          }
          Eb.cosmetic || !bb.isLocalPlayer(Eb.owner) || Eb.pickupDelayCleared || (bb.clearPickupDelay(Tb), Eb.pickupDelayCleared = !0);
          const Bb = Eb.lastPosition,
            eb = Eb.seen && (Yb[0] - Bb[0]) ** 2 + (Yb[1] - Bb[1]) ** 2 + (Yb[2] - Bb[2]) ** 2 > 4e-4,
            vb = (Yb[0] - Ub[0]) ** 2 + (Yb[1] - Ub[1]) ** 2 + (Yb[2] - Ub[2]) ** 2 < 2025;
          Eb.seen = !0, Bb[0] = Yb[0], Bb[1] = Yb[1], Bb[2] = Yb[2], eb && (Eb.lastMovingAt = ab), null !== Eb.particles && (!vb || ab - Eb.lastMovingAt > 500) && (Eb.particles.stop(), Eb.particles = null, Ab--), eb && vb && null === Eb.particles && Ab < 32 && (Eb.particles = bb.createParticles(Eb.cosmetic ? gY : sY, {
            pos: Yb
          }), Ab++), null !== Eb.particles && (Eb.particles.moveTo(Yb), Eb.particles.setEmitRate(eb ? 12 : 0)), !eb && null === Eb.particles && ab - Math.max(Eb.lastMovingAt, Eb.markedAt) > 2e3 && this.drops.delete(Tb)
        }
      }
      dispose() {
        for (const ab of this.drops.values()) {
          var bb;
          null === (bb = ab.particles) || void 0 === bb || bb.stop()
        }
        this.drops.clear()
      }
    }
    var cY = Ub(205);
    const JY = cY.c.Py * cY.c.playerEyeToHeightRatio;
    class nY {
      constructor(bb) {
        this.host = bb, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      aj(bb) {
        this.lava = bb, this.nextUpdateAt = 0
      }
      qL() {
        var bb;
        const ab = this.host.now();
        if (ab < this.nextUpdateAt) return;
        this.nextUpdateAt = ab + 250;
        const Ub = this.host.playerPosition(),
          Ab = Ub && this.findNearest([Ub[0], Ub[1] + JY, Ub[2]]);
        if (!Ab || Ab.distance >= 40) return void this.stop();
        const Mb = .5 * Math.min(1, (40 - Ab.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(Mb) : this.loop = this.host.play("lavaFlow", Mb, Ab.position, 40 + JY, 9, !0), null === (bb = this.loop) || void 0 === bb || bb.setPosition(Ab.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var bb;
        null === (bb = this.loop) || void 0 === bb || bb.stop(), this.loop = null
      }
      findNearest(bb) {
        let ab = -1,
          Ub = 1 / 0;
        for (let Ab = 0; Ab < this.lava.length; Ab += 3) {
          const Mb = this.lava[Ab] - bb[0],
            Tb = this.lava[Ab + 1] - bb[1],
            Eb = this.lava[Ab + 2] - bb[2],
            Yb = Mb * Mb + Tb * Tb + Eb * Eb;
          Yb < Ub && (Ub = Yb, ab = Ab)
        }
        return ab < 0 ? null : {
          position: [this.lava[ab], this.lava[ab + 1], this.lava[ab + 2]],
          distance: Math.sqrt(Ub)
        }
      }
    }
    var SY = Ub(1805),
      bB = Ub(37953);
    const aB = {
      "Grey Portal": "Gray"
    };
    for (const YB of Mb.qc) aB[`${YB} Portal`] = YB;
    const UB = Object.keys(aB),
      AB = Object.fromEntries(UB.map((bb => [bb, (0, Mb.T)(Mb.E[`${(0,Mb.he)(aB[bb])}Team`])])));
    Object.fromEntries(UB.map((bb => [bb, Mb.E[`${(0,Mb.he)(aB[bb])}UiText`]])));
    class MB {
      constructor(bb, ab) {
        this.presentation = bb, this.portal = ab, this.unlocked = void 0
      }
      aj(bb) {
        const ab = !1 === this.unlocked && bb;
        this.unlocked = bb, this.qL();
        const {
          min: Ub,
          max: Ab,
          unlockedBlock: Mb
        } = this.portal;
        if (ab && this.presentation.hasChunk(...Ub)) {
          const [bb, ab, Tb] = AB[Mb];
          this.presentation.playParticles({
            pos1: [...Ub],
            pos2: Ab.map((bb => bb + 1)),
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
              minColor: [bb, ab, Tb, 1],
              maxColor: [Math.min(255, bb + 55), Math.min(255, ab + 55), Math.min(255, Tb + 90), 1]
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
      qL() {
        var bb;
        const ab = this.unlocked ? this.portal.unlockedBlock : null !== (bb = this.portal.lockedBlock) && void 0 !== bb ? bb : "Light Gray Portal",
          {
            min: Ub,
            max: Ab
          } = this.portal;
        for (let Mb = Ub[0]; Mb <= Ab[0]; Mb++)
          for (let bb = Ub[1]; bb <= Ab[1]; bb++)
            for (let Tb = Ub[2]; Tb <= Ab[2]; Tb++) this.presentation.hasChunk(Mb, bb, Tb) && this.presentation.Qy(Mb, bb, Tb) !== ab && this.presentation.Qp(Mb, bb, Tb, ab)
      }
    }
    const TB = {
        farming_1: {
          raises: bb => "NPC" === bb.type && "chef" === bb.variation,
          rise: .4
        },
        fishing_1: {
          raises: bb => "Draugr Warper" === bb.type,
          rise: .4
        }
      },
      EB = (bb, ab, Ub, Tb) => {
        let {
          localPlayerId: Eb
        } = Tb;
        const Yb = new ZM({
          translate: (bb, ab) => (0, WM.w)(rY.f.get().getCurrentLanguageCode(), bb, ab),
          translateWithIcons: (bb, ab) => (0, WM.p)(rY.f.get().getCurrentLanguageCode(), bb, ab),
          setMenuOpen: bb => {
            bb ? (0, Cb.o)() : (0, Cb.g)()
          },
          dismissMenu: Cb.i,
          publishSkills: bb => {
            Vb.m.IR(TU, bb, !0)
          },
          publishQuests: bb => {
            Vb.m.IR(eU, bb, !0)
          },
          publishQuestNotification: bb => {
            Vb.m.IR(vU, bb, !0)
          },
          publishDungeons: bb => {
            Vb.m.IR(XU, bb, !0)
          },
          publishCollections: bb => {
            Vb.m.IR(QU, bb, !0)
          },
          publishMap: bb => {
            Vb.m.IR(Pb, bb, !0)
          },
          publishHud: bb => {
            Vb.m.IR(RM, bb, !0)
          },
          publishPortalTransit: bb => {
            Vb.m.IR(uU, bb, !0)
          },
          isLoadingScreenUp: () => xM.c.get("loadingOverlayVisible"),
          publishDailyReward: bb => {
            Vb.m.IR(oU, bb, !0)
          },
          publishMailbox: bb => {
            Vb.m.IR(gU, bb, !0)
          },
          publishQuestGraph: bb => {
            Vb.m.IR(VU, bb, !0)
          },
          publishForge: bb => {
            Vb.m.IR(jA, bb, !0)
          },
          publishSmuggler: bb => {
            Vb.m.IR(yA, bb, !0)
          },
          publishKeepersChair: bb => {
            Vb.m.IR(NA, bb, !0)
          },
          publishReachLog: bb => {
            Vb.m.IR(HA, bb, !0)
          },
          publishLampLight: bb => {
            Vb.m.IR(QA, bb, !0)
          },
          publishMagmaward: bb => {
            Vb.m.IR(uA, bb, !0)
          },
          publishGlowtide: bb => {
            Vb.m.IR(KA, bb, !0)
          },
          publishGlowMeter: bb => {
            Vb.m.IR(lA, bb, !0)
          },
          publishHushWait: bb => {
            Vb.m.IR(wA, bb, !0)
          },
          publishPassage: bb => {
            Vb.m.IR(zA, bb, !0)
          },
          publishTideCharts: bb => {
            Vb.m.IR(gA, bb, !0)
          },
          publishRegulars: bb => {
            Vb.m.IR(bM, bb, !0)
          },
          publishHiddenWaters: bb => {
            Vb.m.IR(TM, bb, !0)
          },
          publishDialogue: bb => {
            Vb.m.IR(YM, bb, !0)
          },
          publishAutographs: bb => {
            Vb.m.IR(PM, bb, !0)
          },
          onDailyRewardStarted: bb => {
            Fb.playSound(Eb, bb.day === Wb ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (bb, ab) => {
            Fb.playSound(Eb, "exp_collect", .35, 1 + .6 * bb / (ab - 1)), Vb.m.IR(lU, bb === ab - 1)
          },
          onDailyRewardItemLanded: bb => {
            Fb.playSound(Eb, "pickUp", .6, 1 + .15 * bb)
          },
          onMailboxStarted: () => {
            Fb.playSound(Eb, "rpgMetalClick", .6, 1), Fb.playSound(Eb, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            Fb.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: oY.j,
          requestTracking: bb => {
            Fb.sendCommand(`quests track ${bb}`)
          },
          requestDungeonEnter: (bb, ab) => {
            Fb.sendCommand(`dungeonEnter ${bb} ${ab}`)
          },
          requestQuestJump: bb => {
            Fb.sendCommand(`${Gb} jump ${bb}`)
          },
          requestQuestArrive: (bb, ab) => {
            const Ub = `${Gb} arrive ${bb}`;
            Fb.sendCommand(ab ? `${Ub} complete` : Ub)
          },
          requestForge: bb => {
            let {
              blade: ab,
              guard: Ub,
              handle: Ab
            } = bb;
            Fb.sendCommand(`forge ${ab} ${Ub} ${Ab}`)
          },
          requestDialogue: () => {
            Fb.sendCommand("quests dialogue")
          },
          requestSmuggle: (bb, ab) => {
            Fb.sendCommand(`smuggle ${bb} ${ab}`)
          },
          requestKeepersChairAim: bb => {
            Fb.sendCommand(`keeperschair-aim ${bb}`)
          },
          requestReachLogOpen: () => {
            Fb.sendCommand("reachlog-open")
          },
          requestLampLight: bb => {
            Fb.sendCommand(`${bb}`)
          },
          requestTravel: bb => {
            Fb.sendCommand(`map travel ${bb.kind} ${bb.id} ${bb.requestId}`)
          }
        });
        let Bb, eb, vb, Lb, Xb, jb, Rb, zb, xb, ib, fb, Nb, Hb;
        const db = new OY;
        let Fb, hb = null;
        const Qb = TB[null !== Ub && void 0 !== Ub ? Ub : ""],
          Kb = (bb, ab) => {
            null !== Qb && void 0 !== Qb && Qb.raises(ab) && Fb.setNametagOffset(bb, Qb.rise)
          },
          tb = new uY({
            getLocalHookPosition: () => {
              const bb = wb.getLocalHook();
              return null !== bb && Fb.checkValid(bb) ? Fb.eZ(bb) : null
            },
            playParticles: bb => {
              Fb.playParticleEffect(bb)
            },
            vibrate: bb => {
              Ob.f.play("fishBite", bb)
            },
            now: () => performance.now()
          }),
          wb = new hY({
            getLineOwner: bb => Fb.checkValid(bb) ? Fb.getLineOwner(bb) : null,
            isLocalPlayer: bb => Fb.isLocalPlayer(bb),
            getHookPosition: bb => {
              const [ab, , Ub] = Fb.eZ(bb);
              return [ab, Ub]
            },
            isHushWaiting: () => {
              var bb;
              return "waiting" === (null === (bb = Yb.hushWait.getSnapshot()) || void 0 === bb ? void 0 : bb.phase)
            },
            onCastLanded: (bb, ab) => {
              Yb.tideCharts.castLanded(bb, ab)
            },
            onLocalHookSettled: () => {
              tb.onLocalHookSettled()
            },
            onLocalWaitEnded: bb => {
              tb.onLocalWaitEnded(bb)
            },
            now: () => performance.now()
          }),
          cb = new nY({
            now: () => performance.now(),
            playerPosition: () => Fb.checkValid(Eb) ? Fb.eZ(Eb) : null,
            play: (bb, ab, Ub, Ab, Mb, Tb) => Fb.playSound(Eb, bb, ab, 1, {
              HM: Ub,
              maxHearDist: Ab,
              refDistance: Mb
            }, Tb)
          }),
          Jb = new Map;
        let nb;
        return {
          onCreate: bb => {
            if (Fb = bb, hb = new bB.SkyblockEntityFacing(bb, Qb ? Kb : null), Yb.portalTransit.resumeArrival(null !== Ub && void 0 !== Ub ? Ub : null), (null !== Ub && void 0 !== Ub ? Ub : Ab) === Ab) {
              let bb = -1 / 0;
              nb = Vb.m.subscribe("toggleMenu", (ab => {
                const Ub = performance.now();
                "inventory|Workbench" !== ab || "cross_to_hub" !== Yb.quests.getTrackedQuestId() || Ub - bb < 1e4 || (bb = Ub, Fb.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [Ab, Mb] of Object.entries(null !== (ab = qb[null !== Ub && void 0 !== Ub ? Ub : ""]) && void 0 !== ab ? ab : {})) {
              var ab;
              Jb.set(Ab, new MB({
                hasChunk: (ab, Ub, Ab) => bb.isBlockInLoadedChunk(ab, Ub, Ab),
                Qy: (ab, Ub, Ab) => bb.blockIdToBlockName(bb.getBlockId(ab, Ub, Ab)),
                Qp: (ab, Ub, Ab, Mb) => {
                  bb.Qp(ab, Ub, Ab, Mb)
                },
                playParticles: ab => {
                  bb.playParticleEffect(ab)
                }
              }, Mb))
            }
            Hb = (0, SY.g)((bb => function(bb) {
              return Object.hasOwn(wa, bb) || bb.startsWith("npc_")
            }(bb) ? ga(bb) : null)), Yb.resolveItemName = (ab, Ub) => {
              const Ab = bb.getItemStat(Eb, ab, "displayName");
              return Ab && "object" === typeof Ab && "translationKey" in Ab ? Ub(Ab.translationKey, (0, WM.m)(Ab.params, KY.c.shown)) : "string" === typeof Ab ? Ub(Ab) : ab
            }, Yb.quests.notifications.onShown = bb => {
              "quest" === bb ? Fb.playSound(Eb, "magicAccent1", 1, 1) : "skillLevel" === bb ? Fb.playSound(Eb, "magicAccent1", 1, .6) : "landmark" === bb ? Fb.playSound(Eb, "trumpetFlare", 1, .6) : "npcNote" === bb ? Fb.playSound(Eb, "magicAccent2", .8, 1.1) : "started" === bb ? Fb.playSound(Eb, (0, IY.e)("bigDrumSwish"), 1, 1) : Fb.playSound(Eb, (0, IY.e)("rpgHandleSmallLeather"), 1, 1)
            }, Yb.forge.onPartSelected = () => {
              Fb.playSound(Eb, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, Yb.forge.onForgeStarted = (ab, Ub, Ab) => FY(bb, Eb, ab, Ub, Ab), Yb.smuggler.onBought = () => {
              Fb.playSound(Eb, (0, IY.e)("rpgHandleSmallLeather"), 1, 1), Fb.playSound(Eb, "chestOpen", .6, 1)
            }, Yb.compass.register(new kb(Yb.map, !0)), Yb.compass.register(new kb(Yb.map, !1)), Yb.compass.register(new Zb(Yb.map)), Yb.compass.register(new Db((() => Yb.quests.getSnapshot().compassTarget)));
            for (const Ub of ["enemy", "npc"]) Yb.compass.register(new yb(Yb.map, Ub, (ab => bb.checkValid(ab) ? bb.eZ(ab) : void 0), (ab => bb.isAlive(ab))))
          },
          onAfterRender: (bb, ab) => {
            const Ub = Fb.checkValid(Eb) ? Fb.eZ(Eb) : null;
            Yb.navigation.afterRender(Ub, performance.now(), ab), Yb.glowtide.afterRender(Ub, ab.cameraHeading), Yb.tideCharts.afterRender(Ub), wb.afterRender()
          },
          onClose: () => {
            var bb, ab, Ub, Ab, Mb, Tb, Eb, Pb, jb, kb, yb, Zb, Db, mb, pb;
            nb && Vb.m.unsubscribe(nb), null === (bb = Hb) || void 0 === bb || bb(), db.dispose(), cb.dispose(), null === (ab = hb) || void 0 === ab || ab.dispose(), wb.dispose(), Yb.dispose(), null === (Ub = Bb) || void 0 === Ub || Ub(), null === (Ab = eb) || void 0 === Ab || Ab(), null === (Mb = vb) || void 0 === Mb || Mb(), null === (Tb = Lb) || void 0 === Tb || Tb(), null === (Eb = Xb) || void 0 === Eb || Eb(), null === (Pb = Rb) || void 0 === Pb || Pb(), null === (jb = undefined) || void 0 === jb || jb(), null === (kb = zb) || void 0 === kb || kb(), null === (yb = xb) || void 0 === yb || yb(), null === (Zb = ib) || void 0 === Zb || Zb(), null === (Db = fb) || void 0 === Db || Db(), null === (mb = undefined) || void 0 === mb || mb(), null === (pb = Nb) || void 0 === pb || pb()
          },
          onPlayerChangeBlock: (bb, ab, Ab, Tb, Bb, eb) => {
            if (bb === Eb && "Air" === eb) {
              const bb = Fb.getClientOption(Eb, "creative");
              Yb.skills.predictBlock([ab, Ab, Tb], Bb, bb);
              const eb = function(bb, ab) {
                  if ("hub" === ab || "farming_1" === ab || "mining_1" === ab) return !ob.has(bb) || "hub" !== ab && "mining_1" !== ab ? Object.hasOwn(rb, bb) ? rb[bb] : void 0 : ub
                }(Bb, Ub),
                vb = ("hub" === Ub || "mining_1" === Ub) && (Mb.gd.some((bb => bb === Bb)) || Object.hasOwn(lb, Bb) || "mining_1" === Ub && "Block of Coal" === Bb);
              bb || void 0 === eb && !vb || Fb.Qp(ab, Ab, Tb, null !== eb && void 0 !== eb ? eb : ub)
            }
          },
          onPlayerAttackEntity: (bb, ab) => {
            if (bb !== Eb || "Player" !== Fb.getEntityType(ab)) return;
            const [Ub, Ab, Mb] = Fb.eZ(ab);
            Fb.burstParticlePreset("critical", [Ub, Ab + 1, Mb], 10)
          },
          onChangeBlockFail: bb => {
            for (const {
                dT: ab
              }
              of bb) Yb.skills.rejectBlock(ab)
          },
          onReceivedMessageFromServer: (bb, ab) => {
            if ("skyblockGatedPortal" === bb) {
              var Ub;
              const [bb, Ab] = ab;
              return void(null === (Ub = Jb.get(bb)) || void 0 === Ub || Ub.aj(Ab))
            }
            if ("skyblockDailyReward" === bb) return void Yb.dailyReward.aj(ab);
            if ("skyblockMailbox" === bb) return void Yb.mailbox.aj(ab);
            if ("skyblockPortalTransit" === bb) return void Yb.portalTransit.aj(ab);
            if ("skyblockLoot" === bb) return void db.aj(Fb, ab);
            if ("skyblockLava" === bb) return void cb.aj(ab);
            if ("skyblockForge" === bb) return void Yb.forge.aj(ab);
            if ("skyblockMagmaward" === bb) return void Yb.magmaward.aj(ab);
            if ("skyblockGlowtide" === bb) return void Yb.glowtide.aj(ab);
            if ("skyblockGlowMeter" === bb) return void Yb.glowMeter.aj(ab);
            if ("skyblockHushWait" === bb) return void Yb.hushWait.aj(ab);
            if ("skyblockPassage" === bb) {
              const bb = ab;
              return Yb.passage.aj(bb), Yb.reachLog.receivePassagePhase(bb.passagePhase), ib ??= (0, mb.u)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: Yb.passage.show
              }), void Yb.keepersChair.receivePassage({
                keepersChairPassagePhase: bb.passagePhase,
                keepersChairPassageNextPhase: bb.passageNextPhase,
                keepersChairPassageTurnsInMs: bb.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === bb) {
              const bb = ab;
              return Yb.tideCharts.aj(bb), void(bb.tideCharts.length > 0 && (fb ??= (0, mb.u)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: Yb.tideCharts.show
              })))
            }
            if (bb === sb.w) {
              var Ab;
              const {
                hookId: bb,
                waiting: Ub
              } = ab;
              return void wb.hookWaiting(bb, null !== (Ab = null === Ub || void 0 === Ub ? void 0 : Ub.remainingMs) && void 0 !== Ab ? Ab : null)
            }
            if ("skyblockBiteTell" === bb) return void tb.receiveTell(ab);
            if ("skyblockSmuggler" === bb) return void Yb.smuggler.aj(ab);
            if ("skyblockKeepersChair" === bb) return Yb.keepersChair.aj(ab), void Yb.lampLight.setAtChair(Yb.keepersChair.isAtChair());
            if ("skyblockLampLight" === bb) {
              const bb = ab;
              var Mb;
              if (Yb.lampLight.aj(bb), bb.lampLightReleasing) xb ??= (0, mb.u)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  Yb.lampLight.setRelease(!1)
                }
              });
              else null === (Mb = xb) || void 0 === Mb || Mb(), xb = void 0;
              return
            }
            if ("skyblockRegulars" === bb) return void Yb.regulars.aj(ab);
            if ("skyblockHiddenWaters" === bb) return void Yb.hiddenWaters.aj(ab);
            if ("skyblockReachLog" === bb) return Yb.reachLog.aj(ab), void(zb ??= (0, mb.u)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: dA
              },
              onClick: Yb.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === bb) {
              for (const [bb, Ub, Ab, Mb] of ab) Fb.Qp(bb, Ub, Ab, Mb);
              return
            }
            if ("skyblockHud" === bb) Yb.receiveHud(ab);
            else if ("skyblockMap" === bb) Yb.map.aj(ab);
            else if (bb === gb.g) Yb.skills.aj(ab);
            else if (bb === Ib && "dialogue" === ab.kind) Yb.dialogue.aj(ab);
            else if (bb === Ib) Yb.quests.aj(ab);
            else if ("skyblockDungeons" === bb) Yb.dungeons.aj(ab);
            else if ("sbCollections" === bb) Yb.collections.aj(ab);
            else if ("skyblockQuestGraph" === bb) Yb.questGraph.aj(ab);
            else {
              if ("skyblockAutographs" !== bb) return;
              Yb.autographs.aj(ab)
            }
            if (!eb && Yb.map.getSnapshot().enabled) {
              const bb = (0, mb.u)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: Yb.map.show
                }),
                ab = (0, Cb.s)(Yb.map.show);
              eb = () => {
                bb(), ab()
              }
            }!vb && Yb.skills.getSnapshot().enabled && (vb = (0, mb.u)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: Yb.skills.show
            })), !Rb && Yb.collections.getSnapshot().enabled && (Rb = (0, mb.u)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: Yb.collections.show
            })), !Lb && Yb.quests.getSnapshot().enabled && (Lb = (0, mb.u)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: Yb.quests.show
            })), !Nb && Yb.autographs.getSnapshot().enabled && (Nb = (0, mb.u)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: Yb.autographs.show
            }));
            const Tb = Yb.dungeons.getSnapshot().enabled;
            var Eb;
            (vb || Lb || Tb) && jb !== Tb && (jb = Tb, null === (Eb = Xb) || void 0 === Eb || Eb(), Xb = (0, mb.u)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: ha
              },
              disabled: !Tb,
              panel: !0,
              onClick: Yb.dungeons.show
            }));
            Bb || (Bb = (0, Cb.w)((0, pb.createElement)(WY, {
              controller: Yb
            }), {
              content: (0, pb.createElement)(HY, {
                controller: Yb
              }),
              onClose: Yb.close
            }))
          },
          qL: () => {
            var bb;
            for (const ab of Jb.values()) ab.qL();
            db.qL(Fb), cb.qL(), null === (bb = hb) || void 0 === bb || bb.qL(), Yb.skills.qL(), Yb.quests.qL(), Yb.dailyReward.qL(), Yb.mailbox.qL(), Yb.map.qL()
          }
        }
      }
  },
  35822: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Mb,
      g: () => Ab
    });
    const Ab = "skyblockSkills",
      Mb = "skills_test_gym"
  },
  8930: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Mb,
      g: () => Eb
    });
    const Ab = [{
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

    function Mb(bb) {
      let ab, Ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof bb) {
        if (!Number.isFinite(bb)) return "0";
        if (Math.abs(bb) < 100) {
          const ab = bb < 0 ? "-" : "",
            Ub = Math.abs(bb);
          return Ub >= 10 ? `${ab}${Ub.toFixed(1).replace(/\.0$/,"")}` : `${ab}${Ub.toFixed(2).replace(/\.?0+$/,"")}`
        }
        ab = BigInt(Math.floor(bb))
      } else ab = bb;
      const Mb = ab < 0n ? -ab : ab,
        Tb = ab < 0n ? "-" : "",
        Eb = Mb.toString();
      if (Eb.length <= Ub) return `${Tb}${Eb}`;
      const Yb = 3 * Math.floor((Eb.length - 1) / 3);
      if (Yb < 3) return `${Tb}${Eb}`;
      if (Yb > 3 * Ab.length) {
        const bb = Eb[0],
          ab = Eb.slice(1, 3).replace(/0+$/, "");
        return `${Tb}${ab?`${bb}.${ab}`:bb}e${Eb.length-1}`
      }
      const {
        threshold: Bb,
        suffix: eb
      } = Ab[Ab.length - Yb / 3], vb = Mb / Bb, Lb = Number(1000n * (Mb % Bb) / Bb), Pb = Number(vb) + Lb / 1e3;
      let Xb;
      return Xb = Pb >= 100 ? Math.floor(Pb).toString() : Pb >= 10 ? Pb.toFixed(1).replace(/\.0$/, "") : Pb.toFixed(2).replace(/\.?0+$/, ""), `${Tb}${Xb}${eb}`
    }
    const Tb = Ab.map((bb => {
      let {
        threshold: ab,
        suffix: Ub
      } = bb;
      return {
        threshold: Number(ab),
        suffix: Ub
      }
    })).filter((bb => {
      let {
        threshold: ab
      } = bb;
      return Number.isFinite(ab)
    }));

    function Eb(bb) {
      const ab = Math.abs(bb),
        Ub = bb < 0 ? "-" : "";
      for (const {
          threshold: Ab,
          suffix: Mb
        }
        of Tb)
        if (ab >= Ab) {
          const bb = ab / Ab;
          if (bb >= 1e3) return `${Ub}${ab.toExponential(2).replace("e+","e")}`;
          let Tb;
          return Tb = bb >= 100 ? Math.floor(bb).toString() : bb >= 10 ? bb.toFixed(1).replace(/\.0$/, "") : bb.toFixed(2).replace(/\.?0+$/, ""), `${Ub}${Tb}${Mb}`
        } return `${Ub}${ab}`
    }
  },
  37878: (bb, ab, Ub) => {
    var Ab = {
      "./combat_1.png": 37882,
      "./dungeon_crumbling_crypt.png": 37891,
      "./dungeon_frozen_hollow.png": 37893,
      "./dungeon_wildwood_grove.png": 37896,
      "./dungeons.png": 37898,
      "./farming_1.png": 37905,
      "./fishing_1.png": 37908,
      "./hub.png": 37911,
      "./island.png": 37914,
      "./mining_1.png": 37918,
      "./mining_1_bridge.png": 37920,
      "./mining_1_gallery.png": 37927,
      "./mining_1_hollow.png": 37934,
      "./mining_1_village.png": 37938
    };

    function Mb(bb) {
      var ab = Tb(bb);
      return Ub(ab)
    }

    function Tb(bb) {
      if (!Ub.o(Ab, bb)) {
        var ab = new Error("Cannot find module '" + bb + "'");
        throw ab.code = "MODULE_NOT_FOUND", ab
      }
      return Ab[bb]
    }
    Mb.keys = function() {
      return Object.keys(Ab)
    }, Mb.resolve = Tb, bb.exports = Mb, Mb.id = 37878
  },
  37882: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  37891: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  37893: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  37896: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  37898: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  37905: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/farming_1.08302e28e41bf98474fe.png"
  },
  37908: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  37911: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/hub.8b20a64678134496251d.png"
  },
  37914: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/island.113e20c7bd7db93fe1ce.png"
  },
  37918: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/mining_1.68cac4bdadc5ef809ae5.png"
  },
  37920: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/mining_1_bridge.56ff82ba845db0b52726.png"
  },
  37927: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/mining_1_gallery.4e799e6329dbc66249ce.png"
  },
  37934: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  37938: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/mining_1_village.c2a625c1c4541a1fbe65.png"
  },
  18102: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  20197: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  22580: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  24136: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  25798: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  25812: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  37873: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);