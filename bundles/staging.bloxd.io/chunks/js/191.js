export const id = 191;
export const ids = [50, 191];
export const modules = {
  38250: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob,
      e: () => Gb
    });
    const Bb = new WeakMap;

    function Ob(bb, ub) {
      return Bb.set(bb, ub), bb
    }

    function Gb(bb) {
      var ub;
      return null !== (ub = Bb.get(bb)) && void 0 !== ub ? ub : null
    }
  },
  38152: (bb, ub, hb) => {
    function Bb(bb, ub, hb) {
      var Bb;
      const {
        width: Ob,
        height: Gb
      } = hb, Ub = null !== (Bb = bb.text) && void 0 !== Bb ? Bb : bb, Lb = (Ub.x / 100 - .5) * Ob, Yb = (Ub.y / 100 - .5) * Gb, Sb = Ob / 2 - ub.x;
      if (null !== bb.text && Math.abs(Lb) <= Sb && Yb >= ub.top - Gb / 2 && Yb <= Gb / 2 - ub.bottom) return {
        x: Ub.x,
        y: Ub.y
      };
      const ab = Math.min(0 === Lb ? 1 / 0 : Sb / Math.abs(Lb), Yb > 0 ? (Gb / 2 - ub.bottom) / Yb : Yb < 0 ? (ub.top - Gb / 2) / Yb : 1 / 0);
      return !Number.isFinite(ab) || ab < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + Lb * ab / Ob * 100,
        y: 50 + Yb * ab / Gb * 100
      }
    }
    hb.d(ub, {
      e: () => Bb
    })
  },
  38160: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ub
    });
    const Bb = 4,
      Ob = 12e3,
      Gb = 1e3;
    class Ub {
      constructor() {
        let {
          limit: bb = Bb,
          windowMs: ub = Ob,
          spacingMs: hb = Gb,
          now: Ub = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = bb, this.windowMs = ub, this.spacingMs = hb, this.now = Ub
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
          ub = this.lastSentAt + this.spacingMs,
          hb = Math.min(ub > bb ? ub : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        hb !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, hb - bb)))
      }
      notify() {
        for (const bb of this.listeners) bb()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38149: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Bb
    });
    class Bb {
      constructor(bb, ub, hb) {
        this.vp = bb, this.beforeOpen = ub, this.afterClose = hb, this.open = !1, this.FZ = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.FZ && (this.open = !0, this.beforeOpen(this), this.emit())
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
        this.open = !1, this.emit(), this.FZ = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.FZ || (this.snapshot = this.buildSnapshot(), this.vp(this.snapshot))
      }
    }
  },
  38255: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      SkyblockEntityFacing: () => Lb,
      needsSkyblockEntityFacing: () => Ub
    });
    var Bb = hb(580),
      Ob = hb(4013),
      Gb = hb(38264);

    function Ub(bb, ub) {
      if (bb.metaInfo === Bb.b || "Iron Guardian" === bb.type || "Gold Guardian" === bb.type) return !0;
      if ("Pig" === bb.type) return "sitting" === bb.pose;
      if ("Person" !== bb.meshKind || void 0 === bb.meshOpts) return !1;
      let hb = null === ub || void 0 === ub ? void 0 : ub.get(bb.meshOpts);
      if (void 0 === hb) {
        var Gb, Ub;
        const Bb = (0, Ob.g)(bb);
        hb = !1, "pig_napoleon" === (null === Bb || void 0 === Bb || null === (Gb = Bb.opts.textures) || void 0 === Gb ? void 0 : Gb.head) ? hb = !0 : "npc_pig_head" === (null === Bb || void 0 === Bb || null === (Ub = Bb.opts.textures) || void 0 === Ub ? void 0 : Ub.head) && (hb = "sitting" === Bb.opts.pose || "sitting"), ub && (ub.size >= 256 && ub.clear(), ub.set(bb.meshOpts, hb))
      }
      return "sitting" === hb ? "sitting" === bb.pose : hb
    }(0, Gb.d)("skyblock", ((bb, ub) => {
      ub.setFacingTolerance(Ub(bb) ? 0 : null)
    }));
    class Lb {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = bb, this.alsoVisit = ub, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = bb => {
          var ub;
          const hb = this.api.getEntityInfo(bb);
          hb && (Ub(hb, this.meshFacingCache) && (this.api.setFacingTolerance(bb, 0), this.nextFacing.add(bb)), null === (ub = this.alsoVisit) || void 0 === ub || ub.call(this, bb, hb))
        }
      }
      gH() {
        const {
          api: bb
        } = this, ub = this.nextFacing;
        bb.forEachEntity(this.visit);
        for (const hb of this.facing) ub.has(hb) || bb.setFacingTolerance(hb, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = ub
      }
      dispose() {
        for (const bb of this.facing) this.api.setFacingTolerance(bb, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  38144: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      default: () => UY
    });
    const Bb = "island";
    var Ob = hb(314);
    const Gb = (0, Ob.Hb)([0, 0, -1]),
      Ub = [{
        name: "S",
        bearing: (0, Ob.Hb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, Ob.Hb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: Gb
      }, {
        name: "W",
        bearing: (0, Ob.Hb)([1, 0, 0])
      }];

    function Lb(bb, ub, hb) {
      return [100 * (hb.mapMaxX - bb) / (hb.mapMaxX - hb.mapMinX), 100 * (ub - hb.mapMinZ) / (hb.mapMaxZ - hb.mapMinZ)]
    }

    function Yb(bb, ub, hb) {
      const Ob = "local" === ub,
        Gb = bb.background,
        Ub = ub => Gb ? Lb(ub[0] - bb.mapOrigin[0], ub[2] - bb.mapOrigin[2], Gb.bounds) : [50, 50],
        Yb = (bb.insideDungeon ? [] : bb.landmarks).map((bb => {
          var ub, Bb;
          return {
            id: bb.id,
            name: hb(bb.visited && bb.nameKey ? null !== (ub = bb.mapLabelKey) && void 0 !== ub ? ub : bb.nameKey : "skyblockGame:mapUnknown"),
            icon: bb.visited && null !== (Bb = bb.icon) && void 0 !== Bb ? Bb : "unknown",
            visited: bb.visited,
            current: !1,
            position: Ub(bb.position),
            travelKind: "landmark",
            travelId: bb.id
          }
        })),
        ab = bb.zones.map((ub => {
          var Bb;
          return {
            id: ub.id,
            name: hb(ub.visited && ub.nameKey ? ub.nameKey : "skyblockGame:mapUnknown"),
            icon: ub.visited && null !== (Bb = ub.icon) && void 0 !== Bb ? Bb : "unknown",
            visited: ub.visited,
            current: ub.id === bb.zoneId,
            position: ub.position,
            thumbnail: ub.visited ? ub.id : void 0,
            travelKind: "zone",
            travelId: ub.id
          }
        })),
        Hb = bb.insideDungeon || !Gb ? [] : bb.portals.map((bb => {
          var ub;
          return {
            id: bb.id,
            name: hb(null !== (ub = bb.nameKey) && void 0 !== ub ? ub : "skyblockGame:mapUnknown"),
            icon: bb.visited ? "dungeons" === bb.destination ? "portal_orange" : "portal" : "unknown",
            visited: bb.visited,
            current: !1,
            position: Ub(bb.position),
            colour: bb.colour,
            travelKind: "zone",
            travelId: bb.destination
          }
        })),
        wb = Ob ? Yb : ab,
        Zb = wb.filter((bb => bb.visited)).length,
        Xb = Gb ? (Gb.bounds.mapMaxX - Gb.bounds.mapMinX) / (Gb.bounds.mapMaxZ - Gb.bounds.mapMinZ) : 2,
        pb = Gb ? JSON.stringify([Gb.bounds, bb.mapOrigin]) : "";
      return {
        local: Ob,
        points: wb,
        portals: Ob ? Hb : [],
        progress: wb.length ? hb("skyblockGame:mapDiscovered", {
          current: String(Zb),
          total: String(wb.length)
        }) : null,
        percent: wb.length ? 100 * Zb / wb.length : 0,
        canTravel: [...wb, ...Ob ? Hb : []].some((bb => bb.visited && !bb.current)),
        noLandmarks: Ob && !bb.insideDungeon && 0 === Yb.length,
        background: Gb ? {
          imageKey: Gb.imageKey,
          fallbackImageKey: bb.zoneId,
          geometryKey: pb,
          label: hb(Gb.labelKey),
          colour: Gb.backgroundColour,
          ratio: Xb
        } : null,
        connections: Sb(bb.zones),
        minimap: Gb ? {
          imageKey: Gb.imageKey,
          fallbackImageKey: bb.zoneId,
          geometryKey: pb,
          label: hb(Gb.labelKey),
          colour: Gb.backgroundColour,
          caption: hb(bb.zoneId === Bb ? "skyblockGame:zoneIsland" : Gb.labelKey),
          width: (Gb.bounds.mapMaxX - Gb.bounds.mapMinX) / Gb.minimapSpan * 100 + "%",
          height: (Gb.bounds.mapMaxZ - Gb.bounds.mapMinZ) / Gb.minimapSpan * 100 + "%",
          markers: [...Yb, ...Hb]
        } : null
      }
    }

    function Sb(bb) {
      const ub = new Set;
      return bb.flatMap((hb => hb.connections.flatMap((Bb => {
        const Ob = bb.find((bb => bb.id === Bb)),
          Gb = [hb.id, Bb].sort().join("|");
        return !Ob || ub.has(Gb) ? [] : (ub.add(Gb), [{
          id: `${hb.id}-${Bb}`,
          start: hb.position,
          end: Ob.position,
          explored: hb.visited && Ob.visited
        }])
      }))))
    }
    var ab = hb(38149);
    class Hb extends ab.c {}
    const wb = "skyblockMapView";
    class Zb extends Hb {
      constructor(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(bb, Bb, Ob), this.requestTravel = ub, this.translate = hb, this.now = Gb, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
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
        }, this.travel = (bb, ub) => {
          if (!this.map || this.pending || this.FZ) return;
          const hb = ("zone" === bb ? this.map.zones : this.map.landmarks).find((bb => bb.id === ub));
          if (hb) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in hb && !hb.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (hb.visited)
              if ("zone" === bb && ub === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const hb = ++this.nextRequestId;
                this.pending = {
                  requestId: hb,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: bb,
                  id: ub,
                  requestId: hb
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
      cZ(bb) {
        var ub;
        if (!this.FZ)
          if ("entities" !== bb.kind)
            if ("open" !== bb.kind) {
              var hb, Bb;
              if ("snapshot" === bb.kind)(null === (hb = bb.snapshot) || void 0 === hb ? void 0 : hb.zoneId) !== (null === (Bb = this.map) || void 0 === Bb ? void 0 : Bb.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = bb.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === bb.kind) {
                var Ob;
                bb.requestId === (null === (Ob = this.pending) || void 0 === Ob ? void 0 : Ob.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (bb.requestId === (null === (ub = this.pending) || void 0 === ub ? void 0 : ub.requestId)) {
                var Gb;
                this.pending = null, this.feedbackKey = null !== (Gb = bb.errorKey) && void 0 !== Gb ? Gb : "", null === bb.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = bb.entities
      }
      gH() {
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
          presentation: this.map ? Yb(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const Xb = 67.5 * Math.PI / 180;

    function pb(bb, ub) {
      const hb = Math.abs(bb);
      if (hb > Xb || ub.trackHalfWidth <= 0) return null;
      const Bb = ub.trackHalfWidth,
        Ob = ub.screenHalfWidth / (ub.tanHalfFovX * Math.max(.5, Math.cos(ub.pitch))),
        Gb = Math.min(Math.atan(.6 * Bb / Ob), .75 * Xb),
        Ub = Ob * Math.tan(Gb);
      let Lb;
      if (hb <= Gb) Lb = Ob * Math.tan(hb);
      else {
        const bb = Xb - Gb,
          ub = Math.max(0, Ob * bb / (Math.cos(Gb) ** 2 * (Bb - Ub)) - 1),
          Yb = (hb - Gb) / bb;
        Lb = Ub + (Bb - Ub) * (1 + ub) * Yb / (1 + ub * Yb)
      }
      return 50 + Math.sign(bb) * Lb * 50 / Bb
    }
    class ob {
      constructor(bb, ub) {
        this.map = bb, this.visited = ub, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = ub ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const bb = this.map.getSnapshot().map;
        return !bb || bb.insideDungeon ? [] : bb.landmarks.filter((bb => bb.visited === this.visited)).map((bb => {
          var ub, hb;
          return {
            id: `landmark:${bb.id}`,
            position: bb.position,
            icon: null !== (ub = bb.icon) && void 0 !== ub ? ub : "unknown",
            nameKey: null !== (hb = bb.nameKey) && void 0 !== hb ? hb : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class Ab {
      constructor(bb, ub, hb, Bb) {
        this.map = bb, this.kind = ub, this.position = hb, this.alive = Bb, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = ub, this.range = "enemy" === ub ? 48 : 64, this.limit = 12
      }
      iK(bb) {
        if ("enemy" !== this.kind || this.alive(bb.Ub)) return this.position(bb.Ub)
      }
      getPoints() {
        const bb = [];
        for (const Bb of this.map.getEntities()) {
          if (Bb.kind !== this.kind || "enemy" === this.kind && !this.alive(Bb.compassEntityId)) continue;
          const Ob = this.position(Bb.compassEntityId);
          var ub, hb;
          if (Ob) bb.push({
            id: `${this.kind}:${Bb.compassEntityId}`,
            Ub: Bb.compassEntityId,
            kind: this.kind,
            icon: null !== (ub = Bb.icon) && void 0 !== ub ? ub : Bb.npcSkin ? `npc_${Bb.npcSkin}` : this.kind,
            displayName: Bb.displayName,
            position: Ob,
            nameKey: null !== (hb = Bb.nameKey) && void 0 !== hb ? hb : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return bb
      }
    }
    class lb {
      constructor(bb) {
        this.map = bb, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const bb = this.map.getSnapshot().map;
        return !bb || bb.insideDungeon ? [] : bb.portals.map((bb => {
          var ub;
          return {
            id: "portal:" + bb.id,
            kind: "portal",
            position: bb.position,
            nameKey: null !== (ub = bb.nameKey) && void 0 !== ub ? ub : "skyblockGame:compassUnvisitedZone",
            icon: bb.visited ? "dungeons" === bb.destination ? "portal_orange" : "portal" : "unknown",
            colour: bb.colour
          }
        }))
      }
    }
    class Kb {
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

    function Wb(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.position;
      const Gb = Bb[0] - ub[0],
        Ub = Bb[2] - ub[2];
      return {
        ...bb,
        position: Bb,
        offset: Ob.d.computeShortestRotation(hb, (0, Ob.Hb)([Gb, 0, Ub])),
        distance: Math.hypot(Gb, Bb[1] - ub[1], Ub)
      }
    }
    let Cb;

    function db(bb, ub) {
      var hb;
      return (null === (hb = Cb) || void 0 === hb ? void 0 : hb.locale) !== ub && (Cb = {
        locale: ub,
        near: new Intl.NumberFormat(ub, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(ub, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (bb < 10 ? Cb.near : Cb.far).format(bb)
    }
    class rb {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(bb) {
        return this.providers.set(bb.id, bb), this.refreshAt = 0, () => {
          this.providers.get(bb.id) === bb && (this.providers.delete(bb.id), this.refreshAt = 0)
        }
      }
      frame(bb, ub, hb) {
        if (hb >= this.refreshAt) {
          this.refreshAt = hb + 200, this.candidates = [];
          for (const ub of this.providers.values()) {
            if (!ub.enabled) continue;
            const hb = ub.getPoints().map((ub => {
              const hb = ub.position;
              return {
                point: ub,
                distance: Math.hypot(hb[0] - bb[0], hb[1] - bb[1], hb[2] - bb[2])
              }
            })).filter((bb => bb.distance <= ub.range)).sort(((bb, ub) => bb.distance - ub.distance)).slice(0, ub.limit);
            for (const {
                point: bb
              }
              of hb) this.candidates.push({
              provider: ub,
              point: bb
            })
          }
        }
        const Bb = [];
        for (const {
            point: Ob,
            provider: Gb
          }
          of this.candidates) {
          if (!Gb.enabled) continue;
          const hb = Gb.iK ? Gb.iK(Ob) : Ob.position;
          if (hb) {
            const Gb = Wb(Ob, bb, ub, hb);
            Math.abs(Gb.offset) <= Xb && Bb.push(Gb)
          }
        }
        return Bb
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var jb = hb(36217),
      nb = hb(49);
    const Db = [{
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
      xb = Db.length;

    function zb(bb) {
      return bb >= xb ? 1 : bb + 1
    }
    const gb = "skyblockQuests",
      ib = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      vb = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function tb(bb) {
      let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const hb = Math.max(0, Math.floor(bb)),
        Bb = Math.floor(hb % 1e3 / 100),
        Ob = Math.floor(hb / 1e3),
        Gb = Ob % 60,
        Ub = Math.floor(Ob / 60),
        Lb = Ub % 60,
        Yb = Math.floor(Ub / 60),
        Sb = bb => bb < 10 ? `0${bb}` : String(bb),
        ab = ub ? `.${Bb}` : "";
      return Yb > 0 ? `${Yb}:${Sb(Lb)}:${Sb(Gb)}${ab}` : `${Lb}:${Sb(Gb)}${ab}`
    }
    const Jb = "devquests",
      eb = "none",
      Nb = {
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
      sb = "Compressed Messy Stone",
      Mb = {
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
      mb = ["Stone", "Diorite", "Andesite", "Granite"],
      Ib = new Set(mb),
      Pb = (Object.keys(Mb), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const qb = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function Eb(bb, ub) {
      const hb = Math.floor(5 * bb / (2 * ub + 1));
      return Math.min(4, Math.max(0, hb))
    }
    var yb = hb(1133);
    var Vb = hb(35987);
    var Fb = hb(36214),
      fb = hb(16),
      kb = hb(8613);
    const Tb = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      cb = 1e3;

    function Qb(bb) {
      return Math.max(0, bb)
    }

    function Rb(bb) {
      return 1 + .01 * Qb(bb)
    }

    function bu(bb) {
      return 1 + .005 * Qb(bb)
    }

    function uu(bb) {
      return 1 + .005 * Qb(bb)
    }

    function hu(bb) {
      return .01 * Qb(bb)
    }

    function Bu(bb) {
      return 150 / (150 + Qb(bb))
    }

    function Ou(bb) {
      return 1 + .002 * Qb(bb)
    }

    function Gu(bb) {
      return Math.round(10 * bb) / 10
    }

    function Uu(bb, ub) {
      switch (bb) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: Gu(100 * (bu(ub) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: Gu(100 * (Rb(ub) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: Gu(100 * (uu(ub) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: Gu(100 * hu(ub))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: Gu(100 * (1 - Bu(ub)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: Gu(100 * (Ou(ub) - 1))
          }
      }
    }

    function Lu(bb) {
      return "farming" === bb ? 200 : 100
    }

    function Yu(bb, ub) {
      if (!Number.isSafeInteger(bb) || bb < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const hb = Lu(ub),
        Bb = bb => function(bb, ub) {
          return Lu(bb) * ub * (ub + 1) / 2
        }(ub, bb);
      let Ob = Math.min(cb, Math.floor((Math.sqrt(8 * bb / hb + 1) - 1) / 2));
      return Ob < cb && Bb(Ob + 1) <= bb ? Ob++ : Bb(Ob) > bb && Ob--, {
        totalXp: bb,
        level: Ob,
        xpIntoLevel: bb - Bb(Ob),
        xpForNextLevel: Ob === cb ? null : hb * (Ob + 1)
      }
    }
    const Su = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function au(bb) {
      return Su.has(bb)
    }
    const Hu = new Set(Ob.sb);

    function wu(bb) {
      return Hu.has(bb)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const Zu = {
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
      Xu = {
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
      pu = {
        ...Xu,
        ...Object.fromEntries(Object.entries(Pb).map((bb => {
          let [ub, hb] = bb;
          return [ub, 9 * Xu[hb]]
        })))
      },
      ou = {
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
      Au = {
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
    const lu = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      Ku = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function Wu(bb) {
      return `rgb(${Ku[bb].join(", ")})`
    }

    function Cu(bb, ub, hb) {
      if (!hb) return bb(ub);
      const Bb = {};
      for (const [Ob, Gb] of Object.entries(hb)) Bb[Ob] = "string" === typeof Gb ? Gb : bb(Gb.translationKey);
      return bb(ub, Bb)
    }
    class du {
      constructor(bb, ub) {
        this.now = bb, this.getJournal = ub, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.MS = !1, this.onShown = () => {}
      }
      enqueue(bb) {
        const ub = ru(bb);
        if (ub) this.pending.push(bb);
        else {
          const ub = this.pending.findIndex(ru);
          this.pending.splice(-1 === ub ? this.pending.length : ub, 0, bb)
        }
        return (null === this.current || null !== this.followUp && !ub) && (this.advance(), !0)
      }
      setHeld(bb) {
        return this.MS = bb, !bb && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      gH() {
        const bb = this.getJournal(),
          ub = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === ub ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === ub || void 0 === ub ? void 0 : ub.kind) && bb && bb.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === ub || void 0 === ub ? void 0 : ub.kind)) {
          const bb = this.findFollowUp(this.current);
          if ("step" !== (null === bb || void 0 === bb ? void 0 : bb.kind) || bb.questId !== ub.questId || bb.step.id !== ub.step.id) return this.showFollowUp(bb, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(bb, ub, hb) {
        var Bb, Ob, Gb, Ub;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, bb, hb);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, bb);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, bb, ub);
        const {
          questCompletionKind: Lb,
          questCompletionNameKey: Yb
        } = this.current, Sb = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, ab = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, Hb = "step" === (null === (Bb = this.followUp) || void 0 === Bb ? void 0 : Bb.kind) ? this.followUp : null, wb = "explore" === (null === (Ob = this.followUp) || void 0 === Ob ? void 0 : Ob.kind);
        let Zb;
        return Zb = wb ? bb("skyblockGame:questExploreTitle") : null !== Hb ? "quest" === Lb ? bb("skyblockGame:questNextQuestTitle", {
          quest: bb(Hb.questNameKey)
        }) : bb("skyblockGame:questNextStepTitle") : bb("started" === Lb ? "skyblockGame:questStartedTitle" : "quest" === Lb ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? Lb : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: Zb,
          name: wb ? ub("skyblockGame:questExploreName") : null !== Hb ? Cu(ub, Hb.step.nameKey, Hb.step.nameParams) : Cu(ub, Yb, Sb),
          description: wb ? ub("skyblockGame:questExploreDescription") : null === Hb ? null : Cu(ub, Hb.step.descriptionKey, Hb.step.descriptionParams),
          reward: null === this.followUp && ab > 0 ? ub("skyblockGame:questCoinRewardSuffix", {
            amount: ab.toLocaleString(hb)
          }) : null,
          iconItem: null !== (Gb = null === Hb || void 0 === Hb ? void 0 : Hb.step.questIconItem) && void 0 !== Gb ? Gb : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== Hb && (null === (Ub = this.getJournal()) || void 0 === Ub ? void 0 : Ub.trackedQuestId) === Hb.questId ? Hb.step.nameKey : null
        }
      }
      getSkillLevelView(bb, ub, hb) {
        let {
          skill: Bb,
          beforeLevel: Ob,
          level: Gb
        } = bb;
        const Ub = Uu(Bb, Ob),
          Lb = Uu(Bb, Gb);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: ub(`skyblockGame:${Bb}`),
          name: ub("skyblockGame:skillLevelUp", {
            to: Gb.toLocaleString(hb)
          }),
          description: Ub.percent === Lb.percent ? null : ub(`${Lb.translationKey}Change`, {
            before: Ub.percent.toLocaleString(hb),
            after: Lb.percent.toLocaleString(hb)
          }),
          reward: null,
          iconItem: lu[Bb],
          accent: Wu(Bb),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(bb, ub) {
        let {
          landmarkNameKey: hb
        } = bb;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: ub("skyblockGame:landmarkDiscovered"),
          name: ub(hb),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(bb, ub, hb) {
        let {
          titleKey: Bb,
          textKey: Ob,
          params: Gb = {},
          nameKeys: Ub = {},
          iconItem: Lb = null
        } = bb;
        const Yb = {
          ...Gb
        };
        for (const [Sb, ab] of Object.entries(Ub)) Yb[Sb] = ub(ab);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: ub(Bb),
          name: hb(Ob, Yb),
          description: null,
          reward: null,
          iconItem: Lb,
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
      showFollowUp(bb, ub) {
        null === bb || this.MS ? this.advance() : (this.followUp = bb, this.token++, this.shownAt = this.now(), this.expiresAt = null !== ub && void 0 !== ub ? ub : this.shownAt + this.durationMs())
      }
      findFollowUp(bb) {
        var ub;
        const hb = this.getJournal();
        if (!hb || this.hasPendingQuestPopup() || ru(bb)) return null;
        const Bb = "started" === bb.questCompletionKind ? hb.active.some((ub => ub.id === bb.questCompletionQuestId)) : "quest" === bb.questCompletionKind ? hb.completed.some((ub => ub.id === bb.questCompletionQuestId)) : [...hb.active, ...hb.completed].some((ub => ub.id === bb.questCompletionQuestId && ub.subquests.some((ub => ub.id === bb.questCompletionStepId && "completed" === ub.status))));
        if (!Bb) return null;
        if ("quest" === bb.questCompletionKind && 0 === hb.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const Ob = hb.active.find((bb => bb.id === hb.trackedQuestId)),
          Gb = null !== (ub = null === Ob || void 0 === Ob ? void 0 : Ob.subquests.find((bb => "ready" === bb.status))) && void 0 !== ub ? ub : null === Ob || void 0 === Ob ? void 0 : Ob.subquests.find((bb => "active" === bb.status));
        return Gb ? {
          kind: "step",
          questId: Ob.id,
          questNameKey: Ob.nameKey,
          step: Gb
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((bb => !ru(bb)))
      }
      advance() {
        var bb;
        this.current = this.MS ? null : null !== (bb = this.pending.shift()) && void 0 !== bb ? bb : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function ru(bb) {
      return ju(bb.questCompletionKind)
    }

    function ju(bb) {
      return "skillLevel" === bb || "landmark" === bb || "npcNote" === bb
    }
    var nu = hb(38152);
    const Du = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      xu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      zu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      gu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      iu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var vu = hb(38158);
    const tu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      Ju = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const eu = hb.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const Nu = hb.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      su = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var Mu = hb(18282),
      mu = hb(20380),
      Iu = hb(22748),
      Pu = hb(24326),
      qu = hb(25984);
    const Eu = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: Mu,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: mu,
      cow: iu,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: hb(26007),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: Du,
      fishing_1: Du,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: xu,
      guardian_iron: zu,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: Iu,
      mines: Pu,
      mining_1: Pu,
      npc: gu,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: iu,
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
      npc_gold_guardian: xu,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: zu,
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
      npc_tentacle_guy: vu,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: tu,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: eu,
      quest_talk: Nu,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: su,
      watermelon: qu
    };

    function yu(bb, ub) {
      const hb = document.createElement("img");
      return hb.className = ub, hb.src = bb, hb.alt = "", hb.draggable = !1, hb
    }

    function Vu(bb) {
      var ub;
      const hb = null !== (ub = Eu[bb]) && void 0 !== ub ? ub : bb.startsWith("npc_") ? gu : su;
      if ("portal" !== bb) return yu(hb, "SkyblockMapIcon");
      const Bb = document.createElement("span");
      Bb.className = "SkyblockMapIcon Portal";
      const Ob = document.createElement("span");
      return Ob.className = "SkyblockMapIconTint", Ob.style.maskImage = Ob.style.webkitMaskImage = `url("${Ju}")`, Bb.append(yu(hb, "SkyblockMapIconLayer"), Ob, yu(Ju, "SkyblockMapIconLayer SkyblockMapIconShade")), Bb
    }
    var Fu = hb(38134),
      fu = hb(4024);
    const ku = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function Tu(bb) {
      const ub = new fu.h(bb);
      return {
        radius: 45,
        squareness: 3,
        wobbles: ku.map((bb => {
          let {
            lobes: hb,
            amount: Bb
          } = bb;
          return {
            lobes: hb[Math.floor(ub.next() * hb.length)],
            amount: Bb[0] + ub.next() * (Bb[1] - Bb[0]),
            phase: 2 * ub.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function cu(bb) {
      let {
        radius: ub,
        squareness: hb,
        wobbles: Bb,
        samples: Ob
      } = bb;
      const Gb = [];
      for (let Ub = 0; Ub < Ob; Ub++) {
        const bb = 2 * Math.PI * Ub / Ob,
          Lb = Math.cos(bb),
          Yb = Math.sin(bb),
          Sb = ub * (Math.abs(Lb) ** hb + Math.abs(Yb) ** hb) ** (-1 / hb) * Bb.reduce(((ub, hb) => {
            let {
              lobes: Bb,
              amount: Ob,
              phase: Gb
            } = hb;
            return ub + Ob * Math.sin(Bb * bb + Gb)
          }), 1);
        Gb.push(`${(50+Sb*Lb).toFixed(2)} ${(50+Sb*Yb).toFixed(2)}`)
      }
      return `M${Gb.join("L")}Z`
    }
    const Qu = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class Ru {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.FZ = !1, this.mountCompass = bb => {
          var ub;
          if (null === (ub = this.stopLayout) || void 0 === ub || ub.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !bb || this.FZ) return;
          const hb = bb.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: bb,
            track: hb,
            label: bb.querySelector(".SkyblockCompassLabel")
          }, hb.replaceChildren();
          for (let Ob = 0; Ob < 4; Ob++) {
            const bb = document.createElement("span");
            bb.className = "SkyblockCompassCardinal", hb.appendChild(bb), this.cardinals.push(bb)
          }
          const Bb = (0, Fu.c)(Qu, [bb], this.layout);
          this.stopLayout = () => {
            Bb(), hb.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = bb => {
          this.terrain = this.FZ ? null : bb, this.render(this.frame)
        }, this.mountMinimapSearchArea = bb => {
          this.mountSearchArea("minimap", bb)
        }, this.mountMapSearchArea = bb => {
          this.mountSearchArea("map", bb)
        }, this.mountPlayer = bb => {
          this.player = this.FZ ? null : bb, this.render(this.frame)
        }, this.mountWaypoint = bb => {
          var ub, hb;
          if (null === (ub = this.stopWaypoint) || void 0 === ub || ub.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !bb || this.FZ) return;
          const Bb = bb.querySelector(".SkyblockQuestWaypointMarker");
          Bb.replaceChildren(Vu("quest")), this.markerIcon = "quest", this.waypoint = {
            root: bb,
            marker: Bb,
            clip: bb.querySelector(".SkyblockQuestWaypointTextClip"),
            text: bb.querySelector(".SkyblockQuestWaypointText"),
            label: bb.querySelector(".SkyblockQuestWaypointLabel"),
            distance: bb.querySelector(".SkyblockQuestWaypointDistance"),
            hint: bb.querySelector(".SkyblockQuestWaypointHint")
          };
          const Ob = () => {
              this.waypointMarkerSize = {
                width: Bb.offsetWidth,
                height: Bb.offsetHeight
              }, this.waypointInset = {
                x: Bb.offsetWidth / 2 + 8,
                top: Bb.offsetHeight + 8,
                bottom: 8
              }
            },
            Gb = new ResizeObserver((() => {
              Ob(), this.render(this.frame)
            }));
          Gb.observe(Bb, {
            box: "border-box"
          });
          const Ub = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", Ub), null === (hb = window.visualViewport) || void 0 === hb || hb.addEventListener("resize", Ub), this.stopWaypoint = () => {
            var bb;
            Gb.disconnect(), window.removeEventListener("resize", Ub), null === (bb = window.visualViewport) || void 0 === bb || bb.removeEventListener("resize", Ub)
          }, Ub(), Ob(), this.render(this.frame)
        }, this.mountWaypointOrigin = bb => {
          var ub;
          if (null === (ub = this.stopWaypointOrigin) || void 0 === ub || ub.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = bb && !this.FZ ? Number(bb.dataset.notificationToken) : null, bb && !this.FZ && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const ub = {
              nameKey: bb.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = ub;
            const hb = () => {
                const hb = bb.getBoundingClientRect();
                ub.x = (hb.left + hb.width / 2) / window.innerWidth * 100, ub.y = (hb.top + hb.height / 2) / window.innerHeight * 100
              },
              Bb = new ResizeObserver(hb);
            Bb.observe(bb.parentElement), Bb.observe(bb), window.addEventListener("resize", hb), this.stopWaypointOrigin = () => {
              Bb.disconnect(), window.removeEventListener("resize", hb)
            }, hb()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const bb = this.compass.root,
            ub = getComputedStyle(bb),
            hb = getComputedStyle(document.documentElement),
            Bb = parseFloat(hb.fontSize),
            Ob = parseFloat(ub.getPropertyValue("--compass-icon-size")) * Bb,
            Gb = "1" === ub.getPropertyValue("--compass-fit-top").trim(),
            Ub = Gb ? 1 : 8,
            Lb = Array.from(document.querySelectorAll(Qu), (bb => {
              var ub;
              return (null !== (ub = bb.querySelector(".MiddleTextTop")) && void 0 !== ub ? ub : bb).getBoundingClientRect()
            })).filter((bb => bb.width > 0 && bb.height > 0));
          let Yb = (parseFloat(hb.getPropertyValue("--notchTop")) || 0) + Ub,
            Sb = "";
          if (Gb) {
            const ub = window.innerWidth / 2,
              hb = bb.getBoundingClientRect().height,
              Gb = [Yb, ...Lb.map((bb => Math.max(Yb, bb.bottom + Ub)))].sort(((bb, ub) => bb - ub));
            for (const bb of Gb) {
              let Gb = ub - 8;
              for (const Bb of Lb) Bb.bottom + Ub <= bb || Bb.top >= bb + hb + Ub || (Gb = Math.min(Gb, Bb.right <= ub ? ub - Bb.right - 8 : Bb.left - ub - 8));
              const ab = 2 * Gb - Ob;
              if (ab >= 16 * Bb) {
                Sb = `${ab}px`, Yb = bb;
                break
              }
            }
          }
          bb.style.maxWidth !== Sb && (bb.style.maxWidth = Sb);
          const ab = bb.getBoundingClientRect(),
            Hb = this.compassSize.trackHalfWidth;
          if (ab.width > 0) {
            const bb = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: bb.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * Ob / bb.width
          }
          if (!Sb)
            for (const wb of Lb) wb.right > ab.left - 8 && wb.left < ab.right + 8 && (Yb = Math.max(Yb, wb.bottom + Ub));
          bb.style.top = `${Yb}px`, this.compassSize.trackHalfWidth !== Hb && this.render(this.frame)
        }
      }
      mountSearchArea(bb, ub) {
        this.searchAreas[bb] = this.FZ ? null : ub, this.render(this.frame)
      }
      render(bb) {
        if (this.FZ) return;
        if (this.frame = bb, this.compass && (bh(this.compass.root, !bb), bb)) {
          const ub = this.compassSize.trackHalfWidth / 50;
          bb.compass.cardinals.forEach(((bb, hb) => {
            const Bb = this.cardinals[hb];
            Bb.textContent !== bb.name && (Bb.textContent = bb.name), bh(Bb, bb.hidden), Bb.style.translate = bb.left * ub + "px"
          }));
          const hb = new Set;
          bb.compass.markers.forEach(((Bb, Ob) => {
            var Gb;
            hb.add(Bb.id);
            let Ub = this.markers.get(Bb.id);
            Ub || (Ub = document.createElement("span"), Ub.className = "SkyblockCompassMarker", this.markers.set(Bb.id, Ub), this.compass.track.appendChild(Ub)), Ub.dataset.icon !== Bb.icon && (Ub.dataset.icon = Bb.icon, Ub.replaceChildren(Vu(Bb.icon))), Ub.style.color = null !== (Gb = Bb.colour) && void 0 !== Gb ? Gb : "", Ub.style.translate = Bb.left * ub + "px", Ub.style.zIndex = String(bb.compass.markers.length - Ob), Ub.title !== Bb.name && (Ub.title = Bb.name)
          }));
          for (const [bb, Bb] of this.markers) hb.has(bb) || (Bb.remove(), this.markers.delete(bb));
          this.compass.label.textContent !== bb.compass.label && (this.compass.label.textContent = bb.compass.label)
        }
        this.terrain && (bh(this.terrain, !(null !== bb && void 0 !== bb && bb.minimap)), null !== bb && void 0 !== bb && bb.minimap && (this.terrain.style.transform = bb.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", bb.minimap.iconRotation)));
        const ub = null === bb || void 0 === bb ? void 0 : bb.searchArea;
        for (const hb of [this.searchAreas.minimap, this.searchAreas.map])
          if (hb && (bh(hb, !ub), ub)) {
            if (this.searchAreaPath.seed !== ub.shapeSeed && (this.searchAreaPath = {
                seed: ub.shapeSeed,
                d: cu(Tu(ub.shapeSeed))
              }), hb.dataset.shapeSeed !== ub.shapeSeed) {
              hb.dataset.shapeSeed = ub.shapeSeed;
              for (const bb of hb.querySelectorAll("path")) bb.setAttribute("d", this.searchAreaPath.d)
            }
            hb.style.left = `${ub.left}%`, hb.style.top = `${ub.top}%`, hb.style.width = `${ub.width}%`, hb.style.height = `${ub.height}%`
          } if (this.player && (bh(this.player, !(null !== bb && void 0 !== bb && bb.player) || bb.player.hidden), null !== bb && void 0 !== bb && bb.player && (this.player.style.left = `${bb.player.left}%`, this.player.style.top = `${bb.player.top}%`, this.player.style.setProperty("--map-player-rotation", bb.player.rotation))), this.waypoint) {
          const {
            root: ub,
            marker: hb,
            clip: Bb,
            text: Ob,
            label: Gb,
            distance: Ub,
            hint: Lb
          } = this.waypoint, Yb = !(null !== bb && void 0 !== bb && bb.waypoint) || null !== bb.waypoint.popupToken && bb.waypoint.popupToken !== this.waypointOriginToken;
          bh(ub, Yb);
          let Sb = 1;
          const ab = this.waypointLaunch;
          if (!Yb && ab && bb.waypoint.nameKey === ab.nameKey) {
            const bb = performance.now();
            ab.startedAt ??= bb, Sb = Math.min(1, Math.max(0, (bb - ab.startedAt - 450) / 1e3)), hb.style.opacity = String(Math.min(1, (bb - ab.startedAt) / 150)), 1 === Sb && (this.waypointLaunch = null)
          } else hb.style.opacity = "", ab && null !== ab.startedAt && (this.waypointLaunch = null);
          if (ub.classList.toggle("Launching", Sb < 1), null !== bb && void 0 !== bb && bb.waypoint) {
            const ub = this.waypointInset,
              Yb = "quest_talk" === bb.waypoint.markerIcon ? function(bb, ub, hb) {
                if (!bb.text || null === bb.blockHeight || 0 === bb.nearness) return bb;
                const Bb = bb.blockHeight / 100 * hb.height,
                  Ob = -bb.nearness * (uh * Bb + ub.width / 2),
                  Gb = bb.nearness * (hh * Bb + ub.height / 2);
                return {
                  ...bb,
                  text: {
                    x: bb.text.x + Ob / hb.width * 100,
                    y: bb.text.y + Gb / hb.height * 100
                  }
                }
              }(bb.waypoint, this.waypointMarkerSize, this.viewport) : bb.waypoint,
              Hb = (0, nu.e)(Yb, ub, this.viewport),
              wb = Sb * Sb * (3 - 2 * Sb),
              Zb = Sb < 1 ? ab.x + (Hb.x - ab.x) * wb : Hb.x,
              Xb = Sb < 1 ? ab.y + (Hb.y - ab.y) * wb : Hb.y;
            hb.style.translate = `${Zb}vw ${Xb}vh`, Bb.style.clipPath = `inset(${ub.top}px ${ub.x}px ${ub.bottom}px)`, bh(Ob, Sb < 1 || !bb.waypoint.text), Ob.style.opacity = String(1 - bb.waypoint.nearness), bb.waypoint.text && (Ob.style.translate = `${bb.waypoint.text.x}vw ${bb.waypoint.text.y}vh`), Gb.textContent !== bb.waypoint.name && (Gb.textContent = bb.waypoint.name), this.markerIcon !== bb.waypoint.markerIcon && (this.markerIcon = bb.waypoint.markerIcon, hb.replaceChildren(Vu(this.markerIcon))), Ub.textContent !== bb.waypoint.distance && (Ub.textContent = bb.waypoint.distance), bh(Lb, null === bb.waypoint.hint), null !== bb.waypoint.hint && Lb.textContent !== bb.waypoint.hint && (Lb.textContent = bb.waypoint.hint)
          }
        }
      }
      dispose() {
        var bb, ub;
        this.mountWaypointOrigin(null), this.render(null), null === (bb = this.stopLayout) || void 0 === bb || bb.call(this), this.stopLayout = null, null === (ub = this.stopWaypoint) || void 0 === ub || ub.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.FZ = !0
      }
    }

    function bh(bb, ub) {
      bb.hidden !== ub && (bb.hidden = ub)
    }
    const uh = .55,
      hh = .6;
    const Bh = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class Oh {
      constructor(bb, ub, hb, Bb) {
        this.map = bb, this.quests = ub, this.compass = hb, this.display = new Ru, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.FZ = !1, this.snapshot = null, this.texts = new Map, this.translate = Bb
      }
      setTranslator(bb, ub) {
        this.translate = bb, this.locale = ub, this.metresFormat = new Intl.NumberFormat(ub), this.texts.clear()
      }
      translateCached(bb, ub) {
        const hb = void 0 === ub ? bb : `${bb} ${ub}`;
        let Bb = this.texts.get(hb);
        return void 0 === Bb && (this.texts.size >= 500 && this.texts.clear(), Bb = this.translate(bb, void 0 === ub ? void 0 : {
          distance: ub
        }), this.texts.set(hb, Bb)), Bb
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(bb, ub, hb) {
        if (this.FZ) return;
        if (!bb) return this.snapshot = null, void this.display.render(null);
        const Bb = this.map.getSnapshot().map,
          Yb = hb.cameraHeading,
          Sb = {
            ...this.display.compassSize,
            tanHalfFovX: hb.tanHalfFovX,
            pitch: hb.cameraPitch
          },
          ab = [];
        if (Bb)
          for (const Ob of this.compass.frame(bb, Yb, ub)) {
            const bb = pb(Ob.offset, Sb);
            null !== bb && ab.push({
              ...Ob,
              left: bb
            })
          }
        const Hb = function(bb, ub) {
            const hb = [],
              Bb = bb => "quest" === bb.kind ? bb.distance - 1 : bb.distance,
              Ob = [...bb].sort(((bb, ub) => Bb(bb) - Bb(ub) || bb.id.localeCompare(ub.id)));
            for (const Gb of Ob) {
              let bb = !1;
              if ("quest" !== Gb.kind)
                for (const Bb of hb)
                  if (Math.abs(Bb.left - Gb.left) < ub) {
                    bb = !0;
                    break
                  } bb || hb.push(Gb)
            }
            return hb
          }(ab, this.display.compassSpacing),
          wb = function(bb) {
            let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              hb = null;
            for (const Bb of bb) Math.abs(Bb.offset) <= ub && (!hb || Bb.distance < hb.distance || Bb.distance === hb.distance && Math.abs(Bb.offset) < Math.abs(hb.offset)) && (hb = Bb);
            return hb
          }(Hb),
          Zb = bb => {
            var ub;
            return null !== (ub = bb.displayName) && void 0 !== ub ? ub : this.translateCached(bb.nameKey)
          },
          Xb = {
            compass: {
              markers: Hb.map((bb => ({
                id: bb.id,
                icon: bb.icon,
                colour: bb.colour,
                name: Zb(bb),
                left: bb.left
              }))),
              cardinals: Ub.map((bb => {
                let {
                  name: ub,
                  bearing: hb
                } = bb;
                const Bb = pb(Ob.d.computeShortestRotation(Yb, hb), Sb);
                return {
                  name: ub,
                  left: null !== Bb && void 0 !== Bb ? Bb : 0,
                  hidden: null === Bb
                }
              })),
              label: wb ? `${Zb(wb)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",db(wb.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== Bb && void 0 !== Bb && Bb.background) {
          const ub = bb[0] - Bb.mapOrigin[0],
            hb = bb[2] - Bb.mapOrigin[2],
            {
              rotation: Ob,
              transform: Ub
            } = function(bb, ub, hb, Bb) {
              const [Ob, Ub] = Lb(bb, ub, Bb), Yb = Gb - hb;
              return {
                rotation: Yb,
                transform: `rotate(${Yb}rad) translate(-${Ob}%, -${Ub}%)`
              }
            }(ub, hb, Yb, Bb.background.bounds);
          Xb.minimap = {
            transform: Ub,
            iconRotation: -Ob + "rad"
          };
          const [Sb, ab] = Lb(ub, hb, Bb.background.bounds);
          Xb.player = {
            left: Sb,
            top: ab,
            hidden: Sb < 0 || ab < 0 || Sb > 100 || ab > 100,
            rotation: -Ob + "rad"
          }
        }
        const {
          waypoint: ob
        } = this.quests.getSnapshot();
        if ("search" === (null === ob || void 0 === ob ? void 0 : ob.questMarkerIcon) && null !== Bb && void 0 !== Bb && Bb.background) {
          const {
            bounds: bb
          } = Bb.background, [ub, hb] = Lb(ob.position[0] - Bb.mapOrigin[0], ob.position[2] - Bb.mapOrigin[2], bb);
          Xb.searchArea = {
            left: ub,
            top: hb,
            width: 6400 / (bb.mapMaxX - bb.mapMinX),
            height: 6400 / (bb.mapMaxZ - bb.mapMinZ),
            shapeSeed: ob.nameKey
          }
        }
        const Ab = this.quests.getNotificationSnapshot(),
          lb = "completion" === (null === Ab || void 0 === Ab ? void 0 : Ab.phase) && !ju(Ab.kind);
        if (ob && !lb) {
          const ub = Math.hypot(...ob.position.map(((ub, hb) => ub - bb[hb]))),
            Bb = Math.round(ub),
            Ob = "talk" === ob.questMarkerIcon ? Math.min(1, Math.max(0, (10 - ub) / 5)) : 0,
            Gb = hb.projectWorldPosToViewport(ob.position),
            Ub = Gb && hb.projectWorldPosToViewport([ob.position[0], ob.position[1] - 1, ob.position[2]]);
          Xb.waypoint = {
            ...hb.projectWorldPosToScreenPos(ob.position),
            text: Gb,
            nearness: Ob * Ob * (3 - 2 * Ob),
            blockHeight: Gb && Ub ? Ub.y - Gb.y : null,
            name: this.translateCached(ob.nameKey),
            nameKey: ob.nameKey,
            markerIcon: ob.questMarkerIcon ? Bh[ob.questMarkerIcon] : "quest",
            popupToken: (null === Ab || void 0 === Ab ? void 0 : Ab.waypointNameKey) === ob.nameKey ? Ab.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(Bb)),
            hint: "search" === ob.questMarkerIcon && Math.hypot(ob.position[0] - bb[0], ob.position[2] - bb[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = Xb, this.display.render(Xb)
      }
      dispose() {
        this.FZ = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const Gh = "skyblockSkillsView";
    class Uh extends Hb {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          hb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb => bb,
          Bb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          Ob = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : bb => bb;
        super(bb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = ub, this.translate = hb, this.locale = Bb, this.itemName = Ob, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
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
      setTranslator(bb, ub, hb) {
        this.translate = bb, this.locale = ub, this.itemName = hb, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(bb) {
        let ub = this.skillText.get(bb);
        return ub || (ub = {
          label: this.translate(`skyblockGame:${bb}`),
          description: this.translate(`skyblockGame:${bb}Description`)
        }, this.skillText.set(bb, ub)), ub
      }
      sources(bb) {
        if ("mining" === bb || "fishing" === bb) return this.buildSources(bb);
        let ub = this.sourceText.get(bb);
        return ub || (ub = this.buildSources(bb), this.sourceText.set(bb, ub)), ub
      }
      buildSources(bb) {
        const ub = this.translate;
        return "exploration" === bb ? [ub("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), ub("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === bb ? [ub("skyblockGame:logSource", {
          xp: this.number(Zu["Maple Log"])
        })] : "combat" === bb ? [ub("skyblockGame:creatureKillSource"), ub("skyblockGame:noEnvironmentalXp")] : "farming" === bb ? [ub("skyblockGame:cropSource", {
          xp: this.number(ou["Wheat|FreshlyGrown"])
        }), ub("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), ub("skyblockGame:noYoungCropXp")] : Object.entries("mining" === bb ? pu : Au).map((bb => {
          let [hb, Bb] = bb;
          return ub("skyblockGame:itemXpSource", {
            item: this.itemName(hb),
            xp: this.number(Bb)
          })
        }))
      }
      number(bb) {
        return bb.toLocaleString(this.locale)
      }
      benefit(bb, ub) {
        const hb = Uu(bb, ub);
        return this.translate(hb.translationKey, {
          bonus: this.number(hb.percent)
        })
      }
      cZ(bb) {
        if (!this.FZ) {
          if ("snapshot" === bb.kind) this.progress = bb.progress, this.pending.clear(), this.recent = null;
          else if ("award" === bb.kind && this.progress) {
            const {
              award: ub
            } = bb;
            this.progress = {
              ...this.progress,
              [ub.skill]: ub.after
            };
            for (const [bb, Bb] of this.pending) Bb.skill === ub.skill && this.pending.delete(bb);
            const hb = ub.after.level > ub.before.level;
            this.recordGain(ub.skill, ub.amount, hb ? ++this.nextLevelUpToken : null), hb && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: ub.skill,
              beforeLevel: ub.before.level,
              level: ub.after.level
            })
          } else {
            if ("rejectBlock" === bb.kind) return void this.rejectBlock(bb.position);
            if ("open" === bb.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(bb, ub, hb) {
        if (!this.progress || this.FZ || hb) return;
        const Bb = function(bb, ub) {
          const hb = bb.split("|")[0];
          return "Air" === ub || ub === `Barkless ${bb}` ? Object.hasOwn(Zu, hb) ? {
            skill: "foraging",
            amount: Zu[hb]
          } : "Air" !== ub ? null : Object.hasOwn(pu, bb) ? {
            skill: "mining",
            amount: pu[bb]
          } : au(bb) ? {
            skill: "farming",
            amount: 10
          } : wu(bb) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(ou, bb) ? {
            skill: "farming",
            amount: ou[bb]
          } : Object.hasOwn(Mb, bb) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(ub, "Air");
        if (!Bb) return;
        const Ob = bb.join(",");
        if (this.pending.has(Ob)) return;
        const Gb = this.predictedProgress(Bb.skill).totalXp + Bb.amount;
        Number.isSafeInteger(Gb) && (this.pending.set(Ob, {
          ...Bb,
          expires: this.now() + 2e3
        }), this.recordGain(Bb.skill, 0), this.emit())
      }
      rejectBlock(bb) {
        this.pending.delete(bb.join(",")) && this.emit()
      }
      gH() {
        if (this.FZ) return;
        let bb = !1;
        for (const [ub, hb] of this.pending) hb.expires <= this.now() && (this.pending.delete(ub), bb = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, bb = !0), bb && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(bb, ub) {
        var hb, Bb;
        let Ob = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Gb = (null === (hb = this.recent) || void 0 === hb ? void 0 : hb.skill) === bb && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          Ub = (null === (Bb = this.recent) || void 0 === Bb ? void 0 : Bb.skill) === bb && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: bb,
          confirmed: Gb + ub,
          expires: this.now() + 3e3,
          levelUpToken: null !== Ob && void 0 !== Ob ? Ob : Ub
        }
      }
      pendingXp(bb) {
        let ub = 0;
        for (const hb of this.pending.values()) hb.skill === bb && (ub += hb.amount);
        return ub
      }
      predictedProgress(bb) {
        const ub = this.progress[bb],
          hb = this.pendingXp(bb);
        return hb ? Yu(ub.totalXp + hb, bb) : ub
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var bb, ub, hb;
        const Bb = this.progress ? Tb.map((bb => {
            const ub = this.predictedProgress(bb);
            return {
              ...this.text(bb),
              icon: lu[bb],
              benefit: this.benefit(bb, ub.level),
              sources: this.sources(bb),
              id: bb,
              selected: bb === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(ub.level)
              }),
              xp: null === ub.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(ub.xpIntoLevel),
                target: this.number(ub.xpForNextLevel)
              }),
              percent: null === ub.xpForNextLevel ? 100 : Math.min(100, ub.xpIntoLevel / ub.xpForNextLevel * 100)
            }
          })) : [],
          Ob = Bb.find((bb => {
            var ub;
            return bb.id === (null === (ub = this.recent) || void 0 === ub ? void 0 : ub.skill)
          })),
          Gb = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: Bb,
          detail: null !== (bb = Bb.find((bb => bb.selected))) && void 0 !== bb ? bb : null,
          overallLevel: this.progress ? Tb.reduce(((bb, ub) => bb + this.predictedProgress(ub).level), 0) : null,
          hud: Ob && Gb > 0 ? {
            skill: Ob,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(Gb)
            }),
            levelUpToken: null !== (ub = null === (hb = this.recent) || void 0 === hb ? void 0 : hb.levelUpToken) && void 0 !== ub ? ub : null,
            colour: Wu(Ob.id)
          } : null
        }
      }
    }
    const Lh = Math.max(1600, 600, 950) + 400,
      Yh = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      Sh = "skyblockQuestsView",
      ah = "skyblockQuestNotificationView";
    class Hh extends Hb {
      constructor(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          Ub = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(bb, Bb, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = ub, this.translate = hb, this.now = Ob, this.locale = Gb, this.publishNotification = Ub, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var bb, ub;
          this.selected = null !== (bb = null === (ub = this.authoritative) || void 0 === ub ? void 0 : ub.trackedQuestId) && void 0 !== bb ? bb : null, this.show()
        }, this.select = bb => {
          this.selected = bb, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const bb = this.snapshot.detail;
          !this.FZ && null !== bb && void 0 !== bb && bb.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(bb.id), this.emit())
        }, this.viewDialogue = () => {
          const bb = this.snapshot.detail;
          var ub;
          bb && (null === (ub = this.onViewDialogue) || void 0 === ub || ub.call(this, bb.id))
        }, this.notifications = new du(Ob, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var bb, ub;
        return null !== (bb = null === (ub = this.authoritative) || void 0 === ub ? void 0 : ub.trackedQuestId) && void 0 !== bb ? bb : null
      }
      notify(bb) {
        !this.FZ && this.notifications.enqueue(bb) && this.emitNotification()
      }
      setNotificationsHeld(bb) {
        (this.notifications.setHeld(bb) || bb) && this.emitNotification()
      }
      gH() {
        var bb, ub;
        if (this.FZ) return;
        this.notifications.gH() && this.emitNotification();
        let hb = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, hb = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, hb = !0);
        const Bb = wh(this.authoritative);
        null !== Bb && void 0 !== Bb && null !== (bb = Bb.questClock) && void 0 !== bb && bb.running && this.clockText(Bb) !== (null === (ub = this.snapshot.tracked) || void 0 === ub ? void 0 : ub.clock) && (hb = !0), hb && this.emit()
      }
      setTranslator(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = bb, this.locale = ub, this.emitNotification(), this.emit()
      }
      cZ(bb) {
        if (!this.FZ)
          if ("completion" === bb.kind) this.notify(bb.questCompletion);
          else if ("landmark" === bb.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: bb.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === bb.kind) {
          var ub, hb, Bb;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: bb.npcNoteTitleKey,
            textKey: bb.npcNoteTextKey,
            params: null !== (ub = bb.npcNoteParams) && void 0 !== ub ? ub : {},
            nameKeys: null !== (hb = bb.npcNoteNameKeys) && void 0 !== hb ? hb : {},
            iconItem: null !== (Bb = bb.npcNoteIconItem) && void 0 !== Bb ? Bb : null
          })
        } else if ("open" === bb.kind) this.show();
        else if ("guidance" === bb.kind) this.waypoint = bb.waypoint, this.compassTarget = bb.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === bb.kind) {
          this.authoritative = bb.snapshot, this.notifications.gH() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const ub = this.trackedStepPulse;
          this.updateTrackedStepPulse(bb.snapshot), this.emit(), this.trackedStepPulse > ub && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.FZ || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var bb;
        return null !== (bb = this.translateWithIcons) && void 0 !== bb ? bb : this.translate
      }
      clockText(bb) {
        const ub = bb.questClock;
        if (!ub) return null;
        const hb = ub.elapsedMs + (ub.running ? this.now() - this.receivedAt : 0);
        return void 0 === ub.countdownFromMs ? tb(hb, !1) : tb(1e3 * Math.ceil(Math.max(0, ub.countdownFromMs - hb) / 1e3), !1)
      }
      updateTrackedStepPulse(bb) {
        var ub, hb, Bb;
        const Ob = wh(bb);
        if (!Ob) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const Gb = bb => Ob.subquests.filter((ub => bb(ub.status))).map((bb => bb.id)),
          Ub = Gb((bb => "completed" === bb || "skipped" === bb)),
          Lb = Gb((bb => "locked" !== bb)),
          Yb = (null === (ub = this.trackedSteps) || void 0 === ub ? void 0 : ub.questId) === Ob.id && Ob.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (Yb) {
          const bb = Ub.filter((bb => !Yb.finished.has(bb))),
            ub = Gb((bb => "active" === bb || "ready" === bb)).filter((bb => !Yb.unlocked.has(bb)));
          bb.length > 0 && this.trackedStepPulse++, (bb.length > 0 || ub.length > 0) && (this.trackedChange = {
            finished: new Set(bb),
            unlocked: new Set(ub),
            expiresAt: this.now() + Lh
          })
        } else {
          var Sb;
          this.trackedStepPulse = (null === (Sb = this.trackedSteps) || void 0 === Sb ? void 0 : Sb.questId) === Ob.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: Ob.id,
          progress: Ob.progress,
          finished: new Set([...null !== (hb = null === Yb || void 0 === Yb ? void 0 : Yb.finished) && void 0 !== hb ? hb : [], ...Ub]),
          unlocked: new Set([...null !== (Bb = null === Yb || void 0 === Yb ? void 0 : Yb.unlocked) && void 0 !== Bb ? Bb : [], ...Lb])
        }
      }
      entry(bb, ub) {
        var hb, Bb;
        const Ob = bb.id === (null === (hb = this.authoritative) || void 0 === hb ? void 0 : hb.trackedQuestId),
          Gb = this.now() < this.trackAvailableAt,
          Ub = this.questTextTranslator(),
          Lb = bb.subquests.map((ub => {
            var hb, Bb, Gb, Lb, Yb, Sb;
            const ab = null !== (hb = ub.handInNpcName) && void 0 !== hb ? hb : bb.giverName,
              Hb = this.translate("skyblockGame:progress", {
                current: ub.progress.toLocaleString(this.locale),
                target: ub.target.toLocaleString(this.locale)
              }),
              wb = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: ab ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [ub.status],
              Zb = "active" === ub.status || "ready" === ub.status;
            return {
              id: ub.id,
              name: Cu(Ub, ub.nameKey, ub.nameParams),
              description: Cu(Ub, ub.descriptionKey, ub.descriptionParams),
              progress: Hb,
              status: ub.status,
              statusLabel: wb ? this.translate(wb, {
                npc: ab
              }) : Hb,
              iconItem: Zb && null !== (Bb = ub.questIconItem) && void 0 !== Bb ? Bb : null,
              barPercent: "active" === ub.status && ub.showsProgressBar ? Math.min(100, 100 * ub.progress / ub.target) : null,
              justFinished: Ob && null !== (Gb = null === (Lb = this.trackedChange) || void 0 === Lb ? void 0 : Lb.finished.has(ub.id)) && void 0 !== Gb && Gb,
              justUnlocked: Ob && null !== (Yb = null === (Sb = this.trackedChange) || void 0 === Sb ? void 0 : Sb.unlocked.has(ub.id)) && void 0 !== Yb && Yb
            }
          }));
        return {
          id: bb.id,
          name: Cu(Ub, bb.nameKey, bb.nameParams),
          description: Cu(Ub, bb.descriptionKey, bb.descriptionParams),
          progress: ub ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: bb.progress.toLocaleString(this.locale),
            target: bb.target.toLocaleString(this.locale)
          }),
          completed: ub,
          tracked: Ob,
          selected: bb.id === this.selected,
          canTrack: !ub && !Ob && !Gb,
          trackLabel: this.translate(Ob ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : Gb ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== bb.id,
          subquests: Lb,
          focusStep: null !== (Bb = Lb.find((bb => null !== bb.barPercent))) && void 0 !== Bb ? Bb : null,
          clock: this.clockText(bb)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb;
        const ab = [...null !== (bb = null === (ub = this.authoritative) || void 0 === ub ? void 0 : ub.active) && void 0 !== bb ? bb : [], ...null !== (hb = null === (Bb = this.authoritative) || void 0 === Bb ? void 0 : Bb.completed) && void 0 !== hb ? hb : []];
        var Hb, wb, Zb, Xb;
        ab.some((bb => bb.id === this.selected)) || (this.selected = null !== (Hb = null !== (wb = null === (Zb = this.authoritative) || void 0 === Zb ? void 0 : Zb.trackedQuestId) && void 0 !== wb ? wb : null === (Xb = ab[0]) || void 0 === Xb ? void 0 : Xb.id) && void 0 !== Hb ? Hb : null);
        const pb = null !== (Ob = null === (Gb = this.authoritative) || void 0 === Gb ? void 0 : Gb.active.map((bb => this.entry(bb, !1)))) && void 0 !== Ob ? Ob : [];
        pb.sort(((bb, ub) => Number(ub.tracked) - Number(bb.tracked)));
        const ob = null !== (Ub = null === (Lb = this.authoritative) || void 0 === Lb ? void 0 : Lb.completed.map((bb => this.entry(bb, !0)))) && void 0 !== Ub ? Ub : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: pb,
          completed: ob,
          completedExpanded: this.completedExpanded,
          detail: null !== (Yb = [...pb, ...ob].find((bb => bb.selected))) && void 0 !== Yb ? Yb : null,
          tracked: null !== (Sb = pb.find((bb => bb.tracked))) && void 0 !== Sb ? Sb : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function wh(bb) {
      var ub;
      return null !== (ub = null === bb || void 0 === bb ? void 0 : bb.active.find((ub => ub.id === bb.trackedQuestId))) && void 0 !== ub ? ub : null
    }
    const Zh = "skyblockDungeonsView";
    class Xh extends Hb {
      constructor(bb, ub) {
        let hb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          Bb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(bb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = ub, this.locale = hb, this.requestEnter = Bb, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
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
            ub = null === bb || void 0 === bb ? void 0 : bb.difficulties[this.pageIndex];
          void 0 !== ub && null !== ub.unlockedBoss && (this.close(), this.requestEnter(bb.id, ub.difficulty))
        }
      }
      setTranslator(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = bb, this.locale = ub, this.emit()
      }
      cZ(bb) {
        var ub, hb;
        if (!this.FZ) return "open" === bb.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== bb.kind ? "snapshot" === bb.kind && (this.authoritative = bb.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (ub = null === (hb = this.pickerEntry()) || void 0 === hb ? void 0 : hb.difficulties.length) && void 0 !== ub ? ub : 1) - 1)), null === bb.snapshot && this.open ? this.close() : this.emit()) : this.choose(bb.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(bb) {
        var ub;
        const hb = null === (ub = this.authoritative) || void 0 === ub ? void 0 : ub.dungeons.find((ub => ub.id === bb));
        void 0 !== hb ? this.open && this.pickerDungeonId === bb || (this.pickerDungeonId = bb, this.pageIndex = Math.max(0, hb.difficulties.findLastIndex((bb => null !== bb.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${bb}`)
      }
      turnTo(bb) {
        var ub, hb;
        const Bb = null !== (ub = null === (hb = this.pickerEntry()) || void 0 === hb ? void 0 : hb.difficulties.length) && void 0 !== ub ? ub : 0;
        bb < 0 || bb >= Bb || bb === this.pageIndex || (this.pageIndex = bb, this.emit())
      }
      pickerEntry() {
        var bb, ub;
        return null !== (bb = null === (ub = this.authoritative) || void 0 === ub ? void 0 : ub.dungeons.find((bb => bb.id === this.pickerDungeonId))) && void 0 !== bb ? bb : null
      }
      difficulty(bb) {
        const ub = bb.completions > 0,
          hb = null === bb.bestMs ? null : tb(bb.bestMs);
        return {
          difficulty: bb.difficulty,
          label: this.translate(ib[bb.difficulty]),
          colour: vb[bb.difficulty],
          beaten: ub,
          bestTime: hb,
          completions: bb.completions,
          summary: ub ? [null === hb ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: hb
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: bb.completions.toLocaleString(this.locale)
          })].filter((bb => null !== bb)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(bb) {
        const ub = bb.difficulties.map((bb => this.difficulty(bb))),
          hb = ub.filter((bb => bb.beaten)).length;
        return {
          id: bb.id,
          name: this.translate(bb.nameKey),
          selected: bb.id === this.selected,
          beatenSummary: `${hb} / ${ub.length}`,
          difficulties: ub
        }
      }
      picker() {
        const bb = this.pickerEntry();
        if (null === bb || 0 === bb.difficulties.length) return null;
        const ub = bb.difficulties.map(((ub, hb) => {
          var Bb, Ob, Gb, Ub;
          const Lb = ub.unlockedBoss,
            Yb = null === Lb ? this.lockedHint(bb, hb) : null;
          return {
            ...this.difficulty(ub),
            unlocked: null !== Lb,
            bossName: null === Lb ? null : this.translate(Lb.bossNameKey),
            bossMobType: null !== (Bb = null === Lb || void 0 === Lb ? void 0 : Lb.bossMobType) && void 0 !== Bb ? Bb : null,
            bossMobVariation: null !== (Ob = null === Lb || void 0 === Lb ? void 0 : Lb.bossMobVariation) && void 0 !== Ob ? Ob : null,
            lockedHint: null !== (Gb = null === Yb || void 0 === Yb ? void 0 : Yb.text) && void 0 !== Gb ? Gb : null,
            lockedHintHighlight: null !== (Ub = null === Yb || void 0 === Yb ? void 0 : Yb.highlight) && void 0 !== Ub ? Ub : null,
            current: hb === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(bb.nameKey),
          pages: ub,
          page: ub[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < ub.length - 1
        }
      }
      lockedHint(bb, ub) {
        var hb, Bb, Ob;
        if (0 === ub && "number" === typeof bb.combatLevelLock) {
          const ub = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: bb.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: ub,
            colour: Wu("combat"),
            icon: lu.combat
          })
        }
        const Gb = null !== (hb = null === (Bb = this.authoritative) || void 0 === Bb ? void 0 : Bb.dungeons) && void 0 !== hb ? hb : [],
          Ub = ub > 0 ? bb : null !== (Ob = Gb[Gb.indexOf(bb) - 1]) && void 0 !== Ob ? Ob : null,
          Lb = ub > 0 ? bb.difficulties[ub - 1] : null === Ub || void 0 === Ub ? void 0 : Ub.difficulties[0];
        if (null === Ub || void 0 === Lb) return null;
        const Yb = this.translate(Ub.nameKey);
        if (null === Lb.unlockedBoss) return Ub === bb ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, Lb.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: Yb
        }, Lb.difficulty);
        const Sb = this.translate(Lb.unlockedBoss.bossNameKey);
        return Ub === bb ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: Sb
        }, Lb.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: Sb,
            dungeon: Yb
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(bb, ub, hb) {
        return this.hintHighlighting(bb, ub, "difficulty", {
          name: this.translate(ib[hb]),
          colour: vb[hb],
          icon: null
        })
      }
      hintHighlighting(bb, ub, hb, Bb) {
        let {
          name: Ob,
          colour: Gb,
          icon: Ub
        } = Bb;
        const Lb = this.translate(bb, {
          ...ub,
          [hb]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(bb, {
            ...ub,
            [hb]: Ob
          }),
          highlight: 2 === Lb.length ? {
            before: Lb[0],
            name: Ob,
            after: Lb[1],
            colour: Gb,
            icon: Ub
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var bb, ub, hb;
        const Bb = null !== (bb = null === (ub = this.authoritative) || void 0 === ub ? void 0 : ub.dungeons) && void 0 !== bb ? bb : [];
        var Ob, Gb;
        Bb.some((bb => bb.id === this.selected)) || (this.selected = null !== (Ob = null === (Gb = Bb[0]) || void 0 === Gb ? void 0 : Gb.id) && void 0 !== Ob ? Ob : null);
        const Ub = Bb.map((bb => this.entry(bb)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: Ub,
          detail: null !== (hb = Ub.find((bb => bb.selected))) && void 0 !== hb ? hb : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const ph = ["mining", "farming", "foraging", "fishing", "combat"],
      oh = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      Ah = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function lh() {
      for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
      return ub.map(((bb, ub) => ({
        amount: bb,
        coins: oh[ub],
        xp: Ah[ub]
      })))
    }
    const Kh = lh(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      Wh = lh(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      Ch = lh(50, 100, 250, 500, 1e3, 2500, 5e3),
      dh = lh(25, 50, 100, 250, 500, 1e3),
      rh = lh(10, 25, 50, 100, 250, 500, 1e3),
      jh = lh(1, 5, 10, 25, 50);

    function nh(bb, ub) {
      return {
        id: bb,
        category: "fishing",
        item: ub,
        drops: [ub],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rh
      }
    }
    const Dh = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: Wh
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: Ch
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: Ch
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: dh
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: dh
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: Wh
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: Kh
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: Kh
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: Kh
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: Ch
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: Wh
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: Wh
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: Wh
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: Ch
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: Ch
      }, nh("wheatfish", "Wheatfish"), nh("darter", "Darter"), nh("sunset_minnow", "Sunset Minnow"), nh("root_flounder", "Root Flounder"), nh("greenfin_loach", "Greenfin Loach"), nh("red_strongfish", "Red Strongfish"), nh("green_strongfish", "Green Strongfish"), nh("boomerang_fish", "Boomerang Fish"), nh("seahorse", "Seahorse"), nh("spined_stickleback", "Spined Stickleback"), nh("moon_strongfish", "Moon Strongfish"), nh("boulder_bass", "Boulder Bass"), nh("grass_snapper", "Grass Snapper"), nh("crystal_wheatfish", "Crystalized Wheatfish", jh), nh("moonstone_pupfish", "Moonstone Pupfish", jh), nh("reedglass_minnow", "Reedglass Minnow"), nh("mangrove_herring", "Mangrove Herring"), nh("mudline_perch", "Mudline Perch"), nh("coastal_mullet", "Coastal Mullet"), nh("reef_sardine", "Reef Sardine"), nh("root_perch", "Root Perch"), nh("driftwood_catfish", "Driftwood Catfish"), nh("aether_minnow", "Aether Minnow"), nh("needlefish", "Tri-Pointed Needlefish"), nh("threadfin_bream", "Threadfin Bream"), nh("mudbelly_tilapia", "Mudbelly Tilapia"), nh("rotslab_eel", "Rotslab Eel"), nh("polarflash_electron", "Polarflash Electron"), nh("mireback_carp", "Mireback Carp"), nh("blackwater_bream", "Blackwater Bream"), nh("stone_grouper", "Stone Grouper"), nh("shadeback_ray", "Shadeback Ray"), nh("glacial_silverfish", "Glacial Silverfish"), nh("hatchetfish", "Hatchetfish"), nh("moonlit_boomerang", "Moonlit Boomerang Fish"), nh("murkborne_ray", "Murkborne Ray"), nh("bamboo_catfish", "Bamboo Catfish"), nh("mossback_arapaima", "Mossback Arapaima"), nh("murk_stingray", "Murk Stingray"), nh("channel_sawfish", "Channel Sawfish"), nh("boned_sturgeon", "Boned Sturgeon"), nh("oarfish", "Oarfish"), nh("snakehead", "Snakehead", jh), nh("eldertide_leviathan", "Eldertide Leviathan", jh), nh("pithead", "Pithead"), nh("electric_eel", "Electric Eel"), nh("shadow_darter", "Shadow Darter"), nh("abyss_carp", "Abyss Carp"), nh("nomai_moray", "Nomai Moray"), nh("silver_dragonfish", "Silver Dragonfish"), nh("giant_moray", "Giant Moray"), nh("coelacanth", "Coelacanth", jh), nh("frost_herring", "Frost Herring"), nh("permafrost_halibut", "Permafrost Halibut"), nh("glacial_lanternfish", "Glacial Lanternfish"), nh("frozen_grenadier", "Frozen Grenadier"), nh("blackfin_icefish", "Blackfin Icefish"), nh("moonfish", "Moonfish"), nh("alpha_strongfish", "Alpha Moon Strongfish"), nh("deep_lanternfish", "Deepwater Lanternfish", jh), nh("pearlescent_moonfish", "Pearlescent Moonfish", jh), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: Wh
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: dh
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: dh
      }],
      xh = (new Map(Dh.map((bb => [bb.id, bb]))), new Map),
      zh = new Map;
    for (const LY of Dh) {
      for (const [bb, ub] of Object.entries(null !== (gh = LY.blocks) && void 0 !== gh ? gh : {})) {
        var gh;
        xh.set(bb, {
          collection: LY,
          amount: ub
        })
      }
      for (const bb of null !== (ih = LY.drops) && void 0 !== ih ? ih : []) {
        var ih;
        zh.set(bb, LY)
      }
    }

    function vh(bb, ub) {
      let hb = 0;
      for (; hb < bb.tiers.length && ub >= bb.tiers[hb].amount;) hb++;
      return hb
    }
    const th = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function Jh(bb) {
      return th[bb - 1]
    }
    const eh = "skyblockCollectionsView";
    class Nh extends Hb {
      constructor(bb, ub) {
        let hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          Bb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : bb => bb;
        super(bb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = ub, this.locale = hb, this.itemName = Bb, this.counts = null, this.category = "mining", this.selected = Dh[0].id, this.snapshot = {
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
      setTranslator(bb, ub, hb) {
        this.translate = bb, this.locale = ub, this.itemName = hb, this.emit()
      }
      cZ(bb) {
        if (!this.FZ)
          if ("collOpen" !== bb.kind) {
            (bb.collFull || null === this.counts) && (this.counts = new Map);
            for (const [ub, hb] of bb.collCounts) this.counts.set(ub, hb);
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
        const ub = this.inCategory(this.category).map((bb => this.collectionView(bb))),
          hb = Dh.reduce(((bb, ub) => bb + this.tierOf(ub)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: ph.map((bb => this.categoryView(bb))),
          collections: ub,
          detail: null !== (bb = ub.find((bb => bb.selected))) && void 0 !== bb ? bb : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(hb)
          })
        }
      }
      categoryView(bb) {
        const ub = this.inCategory(bb),
          hb = ub.reduce(((bb, ub) => bb + this.tierOf(ub)), 0),
          Bb = ub.reduce(((bb, ub) => bb + ub.tiers.length), 0);
        return {
          id: bb,
          label: this.translate(`skyblockGame:${bb}`),
          icon: lu[bb],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(hb),
            target: this.number(Bb)
          }),
          selected: bb === this.category
        }
      }
      collectionView(bb) {
        var ub, hb;
        const Bb = null !== (ub = this.counts.get(bb.id)) && void 0 !== ub ? ub : 0,
          Ob = vh(bb, Bb),
          Gb = null !== (hb = bb.tiers[Ob]) && void 0 !== hb ? hb : null,
          Ub = 0 === Ob ? 0 : bb.tiers[Ob - 1].amount;
        return {
          id: bb.id,
          name: this.itemName(bb.item),
          icon: bb.item,
          selected: bb.id === this.selected,
          locked: 0 === Bb,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(Bb)
          }),
          tier: 0 === Ob ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(Ob),
          percent: null === Gb ? 100 : Math.min(100, (Bb - Ub) / (Gb.amount - Ub) * 100),
          progress: null === Gb ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(Bb),
            target: this.number(Gb.amount)
          }),
          nextReward: null === Gb ? null : this.reward(bb, Gb.coins, Gb.xp)
        }
      }
      reward(bb, ub, hb) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(ub),
          xp: this.number(hb),
          skill: this.translate(`skyblockGame:${bb.category}`)
        })
      }
      tierLabel(bb) {
        return this.translate("skyblockGame:collectionTier", {
          tier: Jh(bb)
        })
      }
      tierOf(bb) {
        var ub;
        return vh(bb, null !== (ub = this.counts.get(bb.id)) && void 0 !== ub ? ub : 0)
      }
      inCategory(bb) {
        return Dh.filter((ub => ub.category === bb))
      }
      number(bb) {
        return bb.toLocaleString(this.locale)
      }
    }
    const sh = "skyblockPortalTransitView",
      Mh = "skyblockPortalArrival";
    class mh {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.vp = bb, this.storage = ub, this.now = hb, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      cZ(bb) {
        const ub = {
          zoneNameKey: bb.transitZoneNameKey,
          variation: bb.transitZoneVariation,
          colour: bb.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(Mh, ub), this.show("departure", ub.zoneNameKey, ub.colour, bb.transitDurationMs, bb.transitDurationMs + 1500, (() => {
          this.storage.removeItem(Mh)
        }))
      }
      resumeArrival(bb) {
        const ub = this.storage.getItem(Mh);
        this.storage.removeItem(Mh), null === ub || ub.variation !== bb || this.now() - ub.departedAt > 3e4 || this.show("arrival", ub.zoneNameKey, ub.colour, 3200, 2e4)
      }
      finishArrival(bb) {
        var ub;
        "arrival" === (null === (ub = this.view) || void 0 === ub ? void 0 : ub.phase) && this.view.token === bb && (this.clearTimer(), this.view = null, this.vp(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(bb, ub, hb, Bb, Ob, Gb) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: bb,
          zoneNameKey: ub,
          colour: hb,
          durationMs: Bb
        }, this.vp(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.vp(null), null === Gb || void 0 === Gb || Gb()
        }), Ob)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const Ih = "skyblockDailyRewardView",
      Ph = "skyblockDailyRewardCoin";
    class qh {
      constructor(bb, ub, hb, Bb) {
        let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          Ub = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          Lb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          Yb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.vp = bb, this.isBusy = ub, this.holdQuestPopups = hb, this.onHeldCoinsChanged = Bb, this.onCoinLanded = Ob, this.onStarted = Gb, this.onFinished = Ub, this.onItemLanded = Lb, this.now = Yb, this.MS = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var bb, ub;
        return null !== (bb = null === (ub = this.playing) || void 0 === ub ? void 0 : ub.view) && void 0 !== bb ? bb : null
      }
      getHeldCoins() {
        var bb, ub;
        let hb = 0;
        for (const Bb of this.MS) hb += Bb.coins;
        return hb - (null !== (bb = null === (ub = this.playing) || void 0 === ub ? void 0 : ub.released) && void 0 !== bb ? bb : 0)
      }
      cZ(bb) {
        "dailyRewardClaimed" !== bb.kind ? (this.queue.push(bb), this.gH()) : this.MS.push({
          coins: bb.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      gH() {
        const bb = this.now();
        if (null === this.playing) return this.releaseUnshown(bb), void this.startNext(bb);
        const ub = this.playing,
          hb = bb - ub.startedAt,
          Bb = ub.view.flyingCoins,
          Ob = function(bb, ub) {
            let hb = 0;
            for (; hb < ub && yh(hb, ub) <= bb;) hb++;
            return hb
          }(hb, Bb);
        if (Ob !== ub.landed) {
          for (let bb = Ob - ub.landed > 2 ? Ob - 1 : ub.landed; bb < Ob; bb++) this.onCoinLanded(bb, Bb);
          ub.landed = Ob, ub.released = Math.round(ub.view.coins * Ob / Bb), this.onHeldCoinsChanged()
        }
        for (; ub.itemsLanded < ub.view.items.length && 2e3 + 160 * ub.itemsLanded + 630 <= hb;) this.onItemLanded(ub.itemsLanded), ub.itemsLanded++;
        hb >= ub.view.durationMs && (this.finish(), this.startNext(bb))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.MS = [], this.vp(null)
      }
      startNext(bb) {
        if (0 === this.queue.length || this.isBusy()) return;
        const ub = this.queue.shift();
        this.token++;
        const hb = {
          token: this.token,
          day: ub.dailyRewardDay,
          coins: ub.dailyRewardCoins,
          items: ub.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: ub.dailyRewardDay === xb ? 24 : 14
        };
        this.playing = {
          view: hb,
          startedAt: bb,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.vp(hb), this.onStarted(hb)
      }
      finish() {
        this.MS.shift(), this.playing = null, this.holdQuestPopups(!1), this.vp(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(bb) {
        if (this.queue.length > 0 || 0 === this.MS.length) return;
        const ub = this.MS.length;
        this.MS = this.MS.filter((ub => bb - ub.receivedAt < 6e4)), this.MS.length !== ub && this.onHeldCoinsChanged()
      }
    }

    function Eh(bb, ub) {
      return 450 + 715 * bb / (ub - 1)
    }

    function yh(bb, ub) {
      return Eh(bb, ub) + 650
    }
    const Vh = "skyblockMailboxView";
    class Fh {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.vp = bb, this.isBusy = ub, this.onStarted = hb, this.now = Bb, this.waiting = [], this.playing = null, this.token = 0, this.itemName = bb => bb
      }
      getSnapshot() {
        var bb, ub;
        return null !== (bb = null === (ub = this.playing) || void 0 === ub ? void 0 : ub.view) && void 0 !== bb ? bb : null
      }
      setItemName(bb) {
        this.itemName = bb
      }
      cZ(bb) {
        this.waiting.push(...bb.mailLetters), this.gH()
      }
      gH() {
        const bb = this.now();
        null !== this.playing && bb - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.vp(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(bb)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.vp(null)
      }
      start(bb) {
        const ub = this.waiting.slice(0, 3);
        this.token++;
        const hb = {
          token: this.token,
          letters: ub.map((bb => this.toView(bb))),
          more: this.waiting.length - ub.length,
          durationMs: 4500 + 700 * ub.length
        };
        this.waiting = [], this.playing = {
          view: hb,
          startedAt: bb
        }, this.vp(hb), this.onStarted(hb)
      }
      toView(bb) {
        return {
          coins: bb.mailCoins,
          items: bb.mailItems.map((bb => {
            var ub;
            return {
              itemName: bb.mailItemName,
              amount: bb.mailItemAmount,
              label: null !== (ub = bb.mailItemLabel) && void 0 !== ub ? ub : this.itemName(bb.mailItemName)
            }
          })),
          reasonKey: bb.mailReasonKey,
          reasonParams: bb.mailReasonParams
        }
      }
    }
    const fh = "skyblockQuestGraphView",
      kh = "skyblockDevQuestJump";

    function Th(bb) {
      if (0 === bb.length) return "";
      const ub = [`M ${bb[0].x} ${bb[0].y}`];
      for (let Bb = 1; Bb < bb.length - 1; Bb++) {
        const hb = bb[Bb + 1];
        ub.push(`Q ${bb[Bb].x} ${bb[Bb].y} ${(bb[Bb].x+hb.x)/2} ${(bb[Bb].y+hb.y)/2}`)
      }
      const hb = bb[bb.length - 1];
      return ub.push(`L ${hb.x} ${hb.y}`), ub.join(" ")
    }

    function ch(bb, ub) {
      return bb < ub ? `${bb}|${ub}` : `${ub}|${bb}`
    }
    class Qh extends Hb {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          Ub = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          Lb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(bb, hb, Bb), this.translate = ub, this.requestJump = Ob, this.requestArrive = Gb, this.storage = Ub, this.now = Lb, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
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
      cZ(bb) {
        if (!this.FZ)
          if ("graph" !== bb.kind) {
            if ("jumping" === bb.kind) {
              const ub = {
                questId: bb.graphQuestId,
                variation: bb.graphVariation,
                completes: bb.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(kh, ub)
            }
          } else {
            const ub = ++this.graphCount;
            hb.e(112).then((() => hb(6166))).then((hb => {
              let {
                default: Bb
              } = hb;
              this.FZ || ub !== this.graphCount || (this.layout = function(bb, ub, hb) {
                var Bb, Ob;
                const Gb = new bb.graphlib.Graph;
                Gb.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), Gb.setDefaultEdgeLabel((() => ({})));
                const Ub = new Set;
                for (const ab of ub) Ub.add(ab.graphQuestId), Gb.setNode(ab.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const Lb = hb.filter((bb => Ub.has(bb.graphFromId) && Ub.has(bb.graphToId) && bb.graphFromId !== bb.graphToId)),
                  Yb = new Map;
                for (const ab of [...Lb].sort(((bb, ub) => Number("awaits" === bb.graphEdgeKind) - Number("awaits" === ub.graphEdgeKind)))) {
                  const bb = ch(ab.graphFromId, ab.graphToId);
                  Yb.has(bb) || (Yb.set(bb, ab), Gb.setEdge(ab.graphFromId, ab.graphToId))
                }
                bb.layout(Gb);
                const Sb = Gb.graph();
                return {
                  width: Math.ceil(null !== (Bb = Sb.width) && void 0 !== Bb ? Bb : 0),
                  height: Math.ceil(null !== (Ob = Sb.height) && void 0 !== Ob ? Ob : 0),
                  nodes: ub.map((bb => {
                    var ub, hb;
                    const Bb = Gb.node(bb.graphQuestId);
                    return {
                      node: bb,
                      left: (null !== (ub = Bb.x) && void 0 !== ub ? ub : 0) - 95,
                      top: (null !== (hb = Bb.y) && void 0 !== hb ? hb : 0) - 26
                    }
                  })),
                  edges: Lb.map((bb => {
                    var ub;
                    const hb = Yb.get(ch(bb.graphFromId, bb.graphToId)),
                      Bb = null !== (ub = Gb.edge(hb.graphFromId, hb.graphToId).points) && void 0 !== ub ? ub : [];
                    return {
                      edge: bb,
                      key: `${bb.graphFromId}|${bb.graphToId}|${bb.graphEdgeKind}`,
                      path: Th(hb.graphFromId === bb.graphFromId ? Bb : [...Bb].reverse())
                    }
                  })),
                  plans: new Map(ub.map((bb => [bb.graphQuestId, new Set([bb.graphQuestId, ...bb.graphPlanIds])])))
                }
              }(Bb, bb.graphNodes, bb.graphEdges), this.show())
            })).catch((bb => {
              console.error("The quest graph could not be laid out", bb)
            }))
          }
      }
      resumeJump(bb) {
        const ub = this.storage.getItem(kh);
        this.storage.removeItem(kh), null === ub || ub.variation !== bb || this.now() - ub.departedAt > 6e4 || this.requestArrive(ub.questId, ub.completes)
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
        var bb, ub;
        return null !== (bb = null === this.hoveredId || null === (ub = this.layout) || void 0 === ub ? void 0 : ub.plans.get(this.hoveredId)) && void 0 !== bb ? bb : new Set
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
        const ub = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: bb.width,
          height: bb.height,
          nodes: bb.nodes.map((bb => {
            let {
              node: hb,
              left: Bb,
              top: Ob
            } = bb;
            return {
              id: hb.graphQuestId,
              name: this.translate(hb.graphNameKey),
              detail: null === hb.graphGiverName ? hb.graphZoneId : `${hb.graphGiverName} \xb7 ${hb.graphZoneId}`,
              state: hb.graphState,
              left: Bb,
              top: Ob,
              inPlan: ub.has(hb.graphQuestId),
              hovered: hb.graphQuestId === this.hoveredId
            }
          })),
          edges: bb.edges.map((bb => {
            let {
              edge: hb,
              key: Bb,
              path: Ob
            } = bb;
            return {
              key: Bb,
              kind: hb.graphEdgeKind,
              path: Ob,
              inPlan: ub.has(hb.graphFromId) && ub.has(hb.graphToId)
            }
          })),
          planning: ub.size > 0
        }
      }
    }
    var Rh = hb(36695);
    const bB = 250,
      uB = 2150,
      hB = -2.8,
      BB = 2.2,
      OB = -27,
      GB = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      UB = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      LB = Math.round(50 + 1e3 * (UB.delay + UB.period / 2)),
      YB = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      SB = Array.from({
        length: 26
      }, ((bb, ub) => {
        const hb = 2.39996 * ub,
          Bb = .5 + .618034 * ub % 1 * .23,
          Ob = ub % 3 !== 2;
        return {
          rune: Ob ? YB[7 * ub % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(hb)*Bb).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(hb)*Bb).toFixed(3)})`,
            "--spin": 40 * (ub % 5 - 2) + "deg",
            "--size": (Ob ? 1 + ub % 4 * .2 : .3 + ub % 2 * .15) + "rem",
            "--duration": `${(1.8+7*ub%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*ub%3).toFixed(2)}s`
          }
        }
      }));

    function aB(bb, ub) {
      return Array.from({
        length: 30 + 3 * bb + (ub ? 10 : 0)
      }, ((bb, ub) => {
        const hb = ub < 4,
          Bb = hb ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          Ob = hb ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          Gb = hb ? 2.2 : .6 + Math.random(),
          Ub = hb ? .3 : Math.random() < .5 ? .16 : .24,
          Lb = hb ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": Bb,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${Ob.toFixed(2)}rem`,
          "--length": `${Gb.toFixed(2)}rem`,
          "--width": `${Ub}rem`,
          "--duration": `${Math.round(Lb)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function HB(bb) {
      let {
        zeta: ub,
        period: hb
      } = bb;
      const Bb = 2 * Math.PI / hb;
      return {
        w: Bb,
        decay: ub * Bb / Math.sqrt(1 - ub * ub)
      }
    }
    let wB = !1;

    function ZB() {
      if (wB) return;
      wB = !0;
      const bb = document.createElement("style");
      bb.textContent = function() {
        const bb = HB(GB),
          ub = HB(UB),
          hb = ub => Math.exp(-bb.decay * ub) * Math.sin(bb.w * ub),
          Bb = hb(Math.atan(bb.w / bb.decay) / bb.w),
          Ob = .25,
          Gb = 2.15,
          Ub = Math.round(215),
          Lb = [];
        for (let Yb = 0; Yb <= Ub; Yb++) {
          const bb = Yb / Ub * Gb;
          let Sb = Math.sin(Math.min(bb, Ob) / Ob * Math.PI / 2) ** 2,
            ab = 0,
            Hb = 1,
            wb = 1 - .2 * Sb,
            Zb = 1;
          if (bb >= Ob) {
            const Ub = bb - Ob,
              Lb = Math.max(0, Ub - .05);
            Sb = Math.exp(-Lb / .05), ab = hb(Lb + GB.lead * (1 - Math.exp(-Lb / GB.rush))) / Bb;
            const Yb = Lb - UB.delay,
              Xb = Yb <= 0 ? 0 : 1 - Math.exp(-ub.decay * Yb) * (Math.cos(ub.w * Yb) + ub.decay / ub.w * Math.sin(ub.w * Yb)),
              pb = Math.max(0, (bb - 1.77) / (Gb - 1.77));
            Hb = (1 + (UB.to - 1) * Xb) * (1 + .08 * pb), wb = 1.1 + 1.5 * Math.exp(-Ub / .07) + .3 * Math.exp(-(((1e3 * Ub - LB) / 100) ** 2)) + .8 * pb, Zb = 1 - pb ** 1.5
          }
          const Xb = .15 * Sb + hB * ab,
            pb = -.1 * Sb + BB * ab,
            ob = 3 * Sb + OB * ab;
          Lb.push(`${(Yb/Ub*100).toFixed(3)}% { opacity: ${Zb.toFixed(3)}; transform: translate(${Xb.toFixed(3)}rem, ${pb.toFixed(3)}rem) rotate(${ob.toFixed(2)}deg) scale(${Hb.toFixed(3)}); filter: brightness(${wb.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${Lb.join(" ")} }`
      }(), document.head.append(bb)
    }
    const XB = "skyblockForgeView",
      pB = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class oB extends Hb {
      constructor(bb, ub, hb, Bb, Ob) {
        super(bb, hb, Bb), this.translate = ub, this.requestForge = Ob, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.onOpened = null, this.select = (bb, ub) => {
          var hb, Bb;
          null !== this.forging || (null !== (hb = this.owned[(0, Rh.q)(ub, bb)]) && void 0 !== hb ? hb : 0) <= 0 || (this.selected[bb] = this.selected[bb] === ub ? null : ub, this.status = null, null === (Bb = this.onPartSelected) || void 0 === Bb || Bb.call(this), this.emit())
        }, this.forge = bb => {
          var ub, hb;
          const Bb = this.selectedParts();
          if (null === Bb || this.isPending() || !this.open) return;
          const Ob = (0, Rh.o)(Bb);
          if (null === Ob || Ob.coalCost > this.coal) return;
          const Gb = this.preview(Ob),
            Ub = null !== (ub = null === (hb = this.onForgeStarted) || void 0 === hb ? void 0 : hb.call(this, Gb.tier, Gb.named, bb)) && void 0 !== ub ? ub : () => {};
          if (this.dropArrival(), bb) {
            const bb = {
              id: ++this.forgeId,
              preview: Gb,
              timers: [],
              stopSounds: Ub,
              landed: !1,
              reply: null
            };
            bb.timers.push(setTimeout((() => {
              bb.landed = !0, null !== bb.reply && (this.apply(bb.reply), bb.reply = null, this.emit())
            }), bB), setTimeout((() => {
              this.finishForge(bb)
            }), uB)), this.forging = bb
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(Bb)
        }, this.snapshot = this.buildSnapshot()
      }
      cZ(bb) {
        var ub;
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === bb.forgeMessageKind) return this.dropForge(), this.apply(bb), this.status = null, this.show(), void(null === (ub = this.onOpened) || void 0 === ub || ub.call(this));
        const hb = this.forging;
        if (null !== hb && null !== bb.forgeRefusalKey) this.dropForge();
        else if (null !== hb && !hb.landed) return void(hb.reply = bb);
        this.apply(bb), this.emit()
      }
      apply(bb) {
        if (this.owned = bb.forgeOwnedParts, this.coal = bb.forgeCoalOwned, this.keepSelectionOwned("open" === bb.forgeMessageKind), null !== bb.forgeForgedSwordId) {
          var ub;
          const hb = (0, Rh.o)(bb.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (ub = null === hb || void 0 === hb ? void 0 : hb.displayName) && void 0 !== ub ? ub : ""
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
        var ub;
        this.forging = null;
        const hb = this.selectedParts(),
          Bb = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: bb.id,
          sameSword: null !== hb && (null === (ub = (0, Rh.o)(hb)) || void 0 === ub ? void 0 : ub.displayName) === bb.preview.name,
          timer: Bb
        }, this.emit()
      }
      dropForge() {
        const bb = this.forging;
        if (null !== bb) {
          this.forging = null;
          for (const ub of bb.timers) clearTimeout(ub);
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
        var bb, ub, hb;
        const Bb = this.selectedParts(),
          Ob = null === Bb ? null : (0, Rh.o)(Bb),
          Gb = null !== (bb = null === (ub = this.forging) || void 0 === ub ? void 0 : ub.preview) && void 0 !== bb ? bb : null === Ob ? null : this.preview(Ob);
        return {
          enabled: this.received,
          open: this.open,
          slots: Rh.k.map((bb => ({
            kind: bb,
            label: this.translate(pB[bb]),
            parts: this.partsFor(bb)
          }))),
          coalOwned: this.coal,
          preview: Gb,
          unformedSword: Rh.h[null !== (hb = this.selected.Blade) && void 0 !== hb ? hb : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((bb => bb > 0)),
          canForge: null !== Gb && !Gb.coalShort && !this.isPending(),
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
        const ub = [];
        for (const Bb of Rh.f) {
          var hb;
          const Ob = (0, Rh.q)(Bb, bb),
            Gb = null !== (hb = this.owned[Ob]) && void 0 !== hb ? hb : 0;
          Gb > 0 && ub.push({
            material: Bb,
            itemName: Ob,
            owned: Gb,
            selected: this.selected[bb] === Bb,
            placeholder: !1
          })
        }
        if (0 === ub.length) {
          const hb = Rh.f[0];
          ub.push({
            material: hb,
            itemName: (0, Rh.q)(hb, bb),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return ub
      }
      stats(bb) {
        const ub = [{
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
        return bb.reachBonus > 0 && ub.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${bb.reachBonus.toFixed(1)}`,
          better: !0
        }), bb.damageReduction > 0 && ub.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*bb.damageReduction)}%`,
          better: !0
        }), ub
      }
      selectedParts() {
        const {
          Blade: bb,
          Guard: ub,
          Handle: hb
        } = this.selected;
        return null === bb || null === ub || null === hb ? null : {
          blade: bb,
          guard: ub,
          handle: hb
        }
      }
      keepSelectionOwned(bb) {
        for (const hb of Rh.k) {
          var ub;
          const Bb = this.selected[hb];
          if (null !== Bb && (null !== (ub = this.owned[(0, Rh.q)(Bb, hb)]) && void 0 !== ub ? ub : 0) > 0) continue;
          if (!bb) {
            this.selected[hb] = null;
            continue
          }
          const Ob = [...Rh.f].reverse().find((bb => {
            var ub;
            return (null !== (ub = this.owned[(0, Rh.q)(bb, hb)]) && void 0 !== ub ? ub : 0) > 0
          }));
          this.selected[hb] = null !== Ob && void 0 !== Ob ? Ob : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const AB = "skyblockSmugglerView",
      lB = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class KB extends Hb {
      constructor(bb, ub, hb, Bb, Ob) {
        let Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(bb, hb, Bb), this.translate = ub, this.requestBuy = Ob, this.now = Gb, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = bb => bb, this.onBought = null, this.buy = bb => {
          const ub = this.deals[bb];
          void 0 !== ub && !this.isPending() && this.open && !this.soldOut.has(bb) && this.canAfford(ub) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, bb))
        }, this.snapshot = this.buildSnapshot()
      }
      cZ(bb) {
        if (this.received = !0, this.day = bb.smugglerDay, this.deals = bb.smugglerDeals, this.rivets = bb.smugglerRivetsOwned, this.crests = bb.smugglerCrestsOwned, this.soldOut = new Set(bb.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + bb.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === bb.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = bb.smugglerBoughtSlot, null !== bb.smugglerBoughtSlot) {
          var ub, hb;
          const Bb = this.deals[bb.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === Bb ? "" : this.dealName(Bb),
              amount: String(null !== (ub = null === Bb || void 0 === Bb ? void 0 : Bb.smugglerDealAmount) && void 0 !== ub ? ub : 0)
            }
          }, this.boughtCount++, null === (hb = this.onBought) || void 0 === hb || hb.call(this)
        } else null !== bb.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: bb.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(bb, ub, hb) {
        this.translate = bb, void 0 !== hb && (this.itemName = hb), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(bb) {
        if (null !== bb.smugglerDealUniqueName) return bb.smugglerDealUniqueName;
        const ub = lB[bb.smugglerDealItem];
        return void 0 === ub ? this.itemName(bb.smugglerDealItem) : this.translate(ub)
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
          deals: this.deals.map(((bb, ub) => ({
            slot: ub,
            itemName: bb.smugglerDealItem,
            displayName: this.dealName(bb),
            enchantmentTier: bb.smugglerDealEnchantmentTier,
            amount: bb.smugglerDealAmount,
            rivets: bb.smugglerDealRivets,
            crests: bb.smugglerDealCrests,
            affordable: this.canAfford(bb),
            soldOut: this.soldOut.has(ub),
            justBought: this.boughtSlot === ub
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
    const WB = "skyblockPassageView",
      CB = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function dB(bb, ub) {
      return bb(CB[ub])
    }

    function rB(bb, ub, hb, Bb) {
      const Ob = Math.ceil((hb - Bb) / 864e5),
        Gb = dB(bb, ub);
      return Ob > 1 ? bb("skyblockGame:passageNextDays", {
        phase: Gb,
        days: String(Ob)
      }) : bb("skyblockGame:passageNextSoon", {
        phase: Gb
      })
    }
    class jB extends Hb {
      constructor(bb, ub, hb, Bb) {
        let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(bb, hb, Bb), this.translate = ub, this.now = Ob, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = bb => bb, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      cZ(bb) {
        this.message = bb, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(bb, ub, hb) {
        this.translate = bb, void 0 !== hb && (this.itemName = hb), this.emit()
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
          phaseName: dB(this.translate, bb.passagePhase),
          visitors: bb.passageVisitors.map((bb => this.describe(bb))),
          resting: this.describe(bb.passageResting),
          nextPhase: bb.passageNextPhase,
          next: rB(this.translate, bb.passageNextPhase, bb.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var nB = hb(38160);
    const DB = "skyblockKeepersChairView";
    class xB extends Hb {
      constructor(bb, ub, hb, Bb, Ob) {
        let Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          Ub = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new nB.d;
        super(bb, hb, Bb), this.translate = ub, this.requestAim = Ob, this.now = Gb, this.pacer = Ub, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = bb => bb, this.aim = bb => {
          !this.awaitingReply && this.open && this.atChair && bb !== this.favoured && (null === bb || this.islands.some((ub => ub.keepersChairIslandId === bb && ub.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== bb && void 0 !== bb ? bb : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Ub.subscribe((() => {
          this.emit()
        }))
      }
      cZ(bb) {
        var ub, hb;
        this.received = !0;
        const Bb = this.favoured,
          Ob = this.atChair;
        var Gb;
        return this.islands = bb.keepersChairIslands, this.favoured = bb.keepersChairFavoured, this.passage = null !== (ub = bb.keepersChairPassage) && void 0 !== ub ? ub : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (hb = bb.keepersChairAtChair) || void 0 === hb || hb, "place" === bb.keepersChairMessageKind ? (!Ob && this.atChair && "refused" === (null === (Gb = this.status) || void 0 === Gb ? void 0 : Gb.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === bb.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== bb.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: bb.keepersChairRefusalKey,
          island: null
        } : this.favoured !== Bb && (this.status = null === this.favoured ? {
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
      setTranslator(bb, ub, hb) {
        this.translate = bb, void 0 !== hb && (this.itemName = hb), this.emit()
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
        const ub = this.islands.find((ub => ub.keepersChairIslandId === bb));
        return void 0 === ub ? bb : this.translate(ub.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const bb = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          ub = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((bb => {
            const ub = bb.keepersChairFeaturedFish;
            return {
              id: bb.keepersChairIslandId,
              name: this.translate(bb.keepersChairIslandNameKey),
              relit: bb.keepersChairIslandRelit,
              featuredFish: null === ub ? null : {
                itemName: ub,
                displayName: this.itemName(ub)
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
          almanac: null === ub ? null : {
            phase: ub.keepersChairPassagePhase,
            phaseName: dB(this.translate, ub.keepersChairPassagePhase),
            nextPhase: ub.keepersChairPassageNextPhase,
            next: rB(this.translate, ub.keepersChairPassageNextPhase, ub.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const zB = "skyblockReachLogView",
      gB = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      iB = "Caught Fish",
      vB = [1, 2, 4];

    function tB(bb, ub) {
      return bb.map((bb => ({
        ...bb,
        reachLogPageFish: bb.reachLogPageFish.map((bb => ({
          ...bb,
          reachLogFishFresh: ub(bb)
        })))
      })))
    }
    class JB extends Hb {
      constructor(bb, ub, hb, Bb, Ob) {
        let Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new nB.d;
        super(bb, hb, Bb), this.translate = ub, this.requestOpen = Ob, this.pacer = Gb, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = bb => bb, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = bb => {
          this.pages.some((ub => ub.reachLogIslandId === bb)) && (this.selected = bb, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Gb.subscribe((() => {
          this.emit()
        }))
      }
      cZ(bb) {
        if (this.received = !0, "status" === bb.reachLogMessageKind) return !0 === bb.reachLogNews && this.markNews(), this.serverFresh = bb.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const ub = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== bb.reachLogMessageKind)
          if (this.pageViews = null, this.pages = tB(bb.reachLogPages, (bb => bb.reachLogFishFresh || this.heldFresh.has(bb.reachLogFishItem))), this.letGoShown = bb.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, ub) this.showPages();
          else {
            for (const bb of this.pages)
              for (const ub of bb.reachLogPageFish) ub.reachLogFishFresh && this.heldFresh.add(ub.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(bb, ub, hb) {
        this.translate = bb, this.pageViews = null, void 0 !== hb && (this.itemName = hb), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = tB(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var bb, ub, hb, Bb;
        const Ob = this.pages.find((bb => bb.reachLogPageFish.some((bb => bb.reachLogFishFresh))));
        if (void 0 !== Ob) return Ob.reachLogIslandId;
        if (null !== this.selected && this.pages.some((bb => bb.reachLogIslandId === this.selected))) return this.selected;
        return null !== (bb = null !== (ub = null === (hb = this.pages.filter((bb => bb.reachLogIslandAwake)).at(-1)) || void 0 === hb ? void 0 : hb.reachLogIslandId) && void 0 !== ub ? ub : null === (Bb = this.pages[0]) || void 0 === Bb ? void 0 : Bb.reachLogIslandId) && void 0 !== bb ? bb : null
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
          var ub;
          return {
            id: bb.reachLogIslandId,
            name: this.translate(bb.reachLogIslandNameKey),
            awake: bb.reachLogIslandAwake,
            gold: bb.reachLogPageGold,
            caught: bb.reachLogPageFish.filter((bb => bb.reachLogFishCaught && !bb.reachLogFishVisitor)).length,
            total: bb.reachLogPageFish.filter((bb => !bb.reachLogFishVisitor)).length,
            fish: bb.reachLogPageFish.map((bb => {
              const ub = bb.reachLogFishBestKg;
              return {
                itemName: bb.reachLogFishItem,
                name: bb.reachLogFishCaught ? this.itemName(bb.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: bb.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / bb.reachLogFishChance))
                }),
                best: bb.reachLogFishCaught ? null === ub ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: ub.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: bb.reachLogFishMarks,
                ribbons: vB.map((ub => 0 !== (bb.reachLogFishRibbons & ub))),
                glimmer: 0 !== (8 & bb.reachLogFishRibbons),
                halo: 0 !== (32 & bb.reachLogFishRibbons),
                fresh: bb.reachLogFishFresh,
                visitor: bb.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (ub = bb.reachLogPageReturner) && void 0 !== ub ? ub : null)
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
    const eB = "skyblockLampLightView";
    class NB {
      constructor(bb, ub, hb, Bb) {
        this.vp = bb, this.translate = ub, this.requestCommand = hb, this.pacer = Bb, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.FZ = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = bb => {
          bb ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = bb => {
          this.send(`buy ${bb}`)
        }, this.socket = bb => {
          this.send(`socket ${null!==bb&&void 0!==bb?bb:eb}`)
        }, this.wearTint = bb => {
          this.send(`tint ${null!==bb&&void 0!==bb?bb:eb}`)
        }, this.setSituation = bb => {
          this.situation = bb, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Bb.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = Bb.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      cZ(bb) {
        if (this.message = bb, null !== bb.lampLightShop && (this.shop = bb.lampLightShop), "open" === bb.lampLightKind && (this.refusalKey = null), "reply" === bb.lampLightKind) {
          var ub;
          const Ob = null !== (ub = bb.lampLightReplyTag) && void 0 !== ub ? ub : null,
            Gb = null !== Ob && Ob === this.offTag;
          var hb, Bb;
          if (Gb ? this.settleOff() : null !== Ob && Ob !== this.awaitingTag || this.settleReply(), this.refusalKey = bb.lampLightRefusalKey, null !== bb.lampLightBought && !Gb) this.sparkle = {
            id: bb.lampLightBought,
            count: (null !== (hb = null === (Bb = this.sparkle) || void 0 === Bb ? void 0 : Bb.count) && void 0 !== hb ? hb : 0) + 1
          }
        }
        bb.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === bb.lampLightKind && (this.lastGained = bb.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(bb) {
        bb !== this.atChair && (this.atChair = bb, bb && (this.refusalKey = null), this.emit())
      }
      setTranslator(bb, ub) {
        this.translate = bb, this.locale = null !== ub && void 0 !== ub ? ub : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.FZ = !0
      }
      send(bb) {
        var ub;
        if (null !== this.awaitingTag || "ready" !== (null === (ub = this.message) || void 0 === ub ? void 0 : ub.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const hb = this.nextTag();
        this.awaitingTag = hb, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${bb} ${hb}`), this.emit()
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
        this.FZ || (this.snapshot = this.buildSnapshot(), this.vp(this.snapshot))
      }
      formatLight(bb) {
        return Math.floor(bb).toLocaleString(this.locale)
      }
      formatPercent(bb) {
        const ub = 100 * bb;
        return ub >= 10 ? Math.round(ub).toLocaleString(this.locale) : ub.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(bb, ub) {
        if ("bite" === bb) return this.translate("skyblockGame:lampLightBite", {
          seconds: (ub.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === bb) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(ub.lampLightRareChance)
        });
        if ("notice" === bb) return null === ub.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(ub.lampLightNoticeChance)
        });
        const hb = "meter" === bb ? ub.lampLightMeterCatches : ub.lampLightBloomCatches;
        return null === hb ? null : this.translate("meter" === bb ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(hb))
        })
      }
      oddsLines(bb, ub) {
        const hb = (bb, ub) => {
            var hb;
            return null !== (hb = {
              bite: ub.lampLightBiteMs,
              rare: ub.lampLightRareChance,
              meter: ub.lampLightMeterCatches,
              bloom: ub.lampLightBloomCatches,
              notice: ub.lampLightNoticeChance
            } [bb]) && void 0 !== hb ? hb : 0
          },
          Bb = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          Ob = [];
        for (const Gb of ["bite", "rare", "meter", "bloom", "notice"]) {
          const Ub = this.formatOdds(Gb, bb),
            Lb = this.formatOdds(Gb, ub);
          if (null === Ub || null === Lb || "bite" !== Gb && "rare" !== Gb && Ub === Lb) continue;
          const Yb = hb(Gb, ub) - hb(Gb, bb),
            Sb = Bb[Gb] ? Yb < 0 : Yb > 0;
          Ob.push({
            label: Gb,
            before: Ub,
            after: Lb,
            tone: Ub === Lb ? "same" : Sb ? "better" : "worse"
          })
        }
        return Ob
      }
      charmView(bb, ub, hb) {
        const Bb = bb.lampLightCharmId.charAt(0).toUpperCase() + bb.lampLightCharmId.slice(1),
          Ob = "bloom" === this.situation;
        return {
          id: bb.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${Bb}`),
          effect: this.translate(`skyblockGame:lampLightCharm${Bb}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(bb.lampLightCharmCost)
          }),
          owned: bb.lampLightCharmOwned,
          affordable: hb >= bb.lampLightCharmCost,
          socketed: ub.lampLightSocketed === bb.lampLightCharmId,
          lines: this.oddsLines(Ob ? ub.lampLightBareBloom : ub.lampLightBareOpen, Ob ? bb.lampLightCharmBloom : bb.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var bb, ub, hb, Bb;
        const Ob = this.message,
          Gb = "ready" === (null === Ob || void 0 === Ob ? void 0 : Ob.lampLightStatus) ? this.shop : null,
          Ub = null !== (bb = null === Ob || void 0 === Ob ? void 0 : Ob.lampLightBalance) && void 0 !== bb ? bb : 0,
          Lb = this.atChair,
          Yb = "loading" === (null === Ob || void 0 === Ob ? void 0 : Ob.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === Ob || void 0 === Ob ? void 0 : Ob.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          Sb = "ready" !== (null === Ob || void 0 === Ob ? void 0 : Ob.lampLightStatus) || Lb ? null !== (ub = this.refusalKey) && void 0 !== ub ? ub : Yb : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== Ob && "locked" !== Ob.lampLightStatus,
          status: null !== (hb = null === Ob || void 0 === Ob ? void 0 : Ob.lampLightStatus) && void 0 !== hb ? hb : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(Ub)
          }),
          releasing: null !== (Bb = null === Ob || void 0 === Ob ? void 0 : Ob.lampLightReleasing) && void 0 !== Bb && Bb,
          gained: null === Ob || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === Ob || void 0 === Ob ? void 0 : Ob.lampLightStatus) && Lb && !this.isPending(),
          situation: this.situation,
          shop: null === Gb ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: Gb.lampLightOddsRod,
              island: this.translate(Gb.lampLightIslandNameKey)
            }),
            heldRod: null !== Gb.lampLightHeldRod,
            charms: Gb.lampLightCharms.map((bb => this.charmView(bb, Gb, Ub))),
            tints: Gb.lampLightTints.map((bb => {
              const ub = bb.lampLightTintId,
                [hb, Bb, Ob] = bb.lampLightTintColour;
              return {
                id: ub,
                name: this.translate(`skyblockGame:lampLightTint${ub.charAt(0).toUpperCase()}${ub.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(bb.lampLightTintCost)
                }),
                owned: bb.lampLightTintOwned,
                affordable: Ub >= bb.lampLightTintCost,
                wearing: Gb.lampLightTint === ub,
                colour: `rgb(${hb}, ${Bb}, ${Ob})`
              }
            })),
            wearingIslandColours: null === Gb.lampLightTint
          },
          notice: null === Sb ? null : this.translate(Sb),
          sparkle: this.sparkle
        }
      }
    }
    const sB = "skyblockMagmawardView";
    class MB {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.vp = bb, this.now = ub, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = qb.map((() => 0)), this.wornAt = qb.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      cZ(bb) {
        var ub, hb;
        const Bb = qb.map(((ub, hb) => !0 === bb.magmawardPiecesWorn[hb]));
        if (!Bb.includes(!0)) return this.snapshot = null, void this.vp(null);
        const Ob = this.now(),
          Gb = this.snapshot;
        null === Gb && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const Ub = bb.magmawardFuelCarried,
          Lb = !Bb.includes(!1);
        let Yb = null !== (ub = null === Gb || void 0 === Gb ? void 0 : Gb.pulse) && void 0 !== ub ? ub : null,
          Sb = null !== (hb = null === Gb || void 0 === Gb ? void 0 : Gb.flare) && void 0 !== hb ? hb : null;
        bb.magmawardFuelBurned ? (Yb = "burn", Sb = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = Ob, this.flareAt = Ob) : null !== Gb && Ub > Gb.fuel && (Yb = "gain", this.pulseToken++, this.pulseAt = Ob), Lb && null !== Gb && !Gb.fullSet && (Sb = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = Ob, this.setLitAt = Ob);
        const ab = qb.map(((bb, ub) => (Bb[ub] && null !== Gb && !Gb.pieces[ub].worn && (this.wornTokens[ub]++, this.wornAt[ub] = Ob), {
          itemName: bb,
          worn: Bb[ub],
          wornToken: this.wornTokens[ub],
          justWorn: Bb[ub] && this.isPlaying(this.wornAt[ub], Ob)
        })));
        this.snapshot = {
          pieces: ab,
          wornCount: Bb.filter(Boolean).length,
          fullSet: Lb,
          fuel: Ub,
          fuelState: Ub <= 0 ? "empty" : Ub <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, Ob) ? Yb : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, Ob) ? Sb : null,
          flareToken: this.flareToken,
          setLit: Lb && this.isPlaying(this.setLitAt, Ob),
          setLitToken: this.setLitToken
        }, this.vp(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.vp(null)
      }
      isPlaying(bb, ub) {
        return ub - bb < 1200
      }
    }
    const mB = "skyblockGlowtideView";
    class IB {
      constructor(bb) {
        this.vp = bb, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = bb => {
          this.arrow = bb, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      cZ(bb) {
        this.bloom = bb.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.vp(null))
      }
      afterRender(bb, ub) {
        const hb = this.bloom;
        if (null === hb || null === bb) return;
        const Bb = hb.glowtideBloomX - bb[0],
          Gb = hb.glowtideBloomZ - bb[2],
          Ub = Math.hypot(Bb, Gb),
          Lb = this.snapshot,
          Yb = null !== Lb && void 0 !== Lb && Lb.inRange ? 1 : 0,
          Sb = Ub <= 12.5 + Yb && bb[1] - hb.glowtideBloomY <= 10 + Yb;
        !Sb || null !== Lb && void 0 !== Lb && Lb.inRange || this.inRangeToken++;
        const ab = {
          colour: hb.glowtideBloomColour,
          inRange: Sb,
          distance: Math.round(Ub),
          inRangeToken: this.inRangeToken
        };
        (null === Lb || ab.colour !== Lb.colour || ab.inRange !== Lb.inRange || !Sb && ab.distance !== Lb.distance) && (this.snapshot = ab, this.vp(ab));
        const Hb = Ob.d.computeShortestRotation(ub, (0, Ob.Hb)([Bb, 0, Gb]));
        null === this.arrow || Math.abs(Hb - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${Hb}rad)`, this.arrowTurn = Hb)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.vp(null)
      }
    }
    const PB = "skyblockGlowMeterView";
    class qB {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.vp = bb, this.now = ub, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      cZ(bb) {
        const ub = this.now(),
          {
            glowMeterFill: hb,
            glowMeterCapacity: Bb
          } = bb,
          Ob = hb >= Bb,
          Gb = this.snapshot;
        null !== Gb && (Ob && !Gb.full && (this.fullToken++, this.fullAt = ub), Gb.full && !Ob ? (this.burstToken++, this.burstAt = ub) : hb > Gb.fill && (this.gainToken++, this.gainAt = ub)), this.snapshot = {
          fill: hb,
          LH: Bb,
          ratio: Math.min(1, Math.max(0, hb / Bb)),
          full: Ob,
          rares: bb.glowMeterRares,
          ready: Ob && this.isPlaying(this.fullAt, ub),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, ub),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, ub),
          gainToken: this.gainToken
        }, this.vp(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.vp(null)
      }
      isPlaying(bb, ub) {
        return ub - bb < 2e3
      }
    }
    const EB = "skyblockHushWaitView";
    class yB {
      constructor(bb) {
        this.vp = bb, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      cZ(bb) {
        let {
          hushWaitMs: ub,
          hushWaitTotalMs: hb,
          hushWaitLines: Bb
        } = bb;
        if (this.clearTimers(), this.token++, 0 === Bb.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (ub <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: Bb[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const Ob = Math.max(null !== hb && void 0 !== hb ? hb : ub, ub),
          Gb = Ob - ub,
          Ub = bb => Ob * bb / Bb.length,
          Lb = bb => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: Ob,
              elapsedMs: Gb,
              line: Bb[bb],
              lineIndex: bb
            })
          };
        let Yb = 0;
        for (; Yb + 1 < Bb.length && Ub(Yb + 1) <= Gb;) Yb++;
        Lb(Yb);
        for (let Sb = Yb + 1; Sb < Bb.length; Sb++) this.later(Ub(Sb) - Gb, (() => {
          Lb(Sb)
        }));
        this.later(ub, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(bb) {
        this.snapshot = bb, this.vp(bb)
      }
      later(bb, ub) {
        this.timers.push(setTimeout(ub, bb))
      }
      clearTimers() {
        for (const bb of this.timers) clearTimeout(bb);
        this.timers = []
      }
    }
    const VB = "skyblockTideChartsView",
      FB = 36e5,
      fB = 864e5;

    function kB(bb, ub, hb) {
      const [Bb, Ob, Gb, Ub] = bb.tideChartArea, Lb = Math.floor(ub), Yb = Math.floor(hb);
      return Lb >= Bb && Lb <= Gb && Yb >= Ob && Yb <= Ub
    }

    function TB(bb, ub, hb) {
      const [Bb, Ob, Gb, Ub] = bb.tideChartWater;
      return function(bb, ub, hb, Bb, Ob, Gb) {
        const Ub = 4 - Eb(Math.floor(Ob) - (bb - hb), hb);
        return 5 * Eb(Math.floor(Gb) - (ub - Bb), Bb) + Ub
      }(Bb, Ob, Gb, Ub, ub, hb)
    }

    function cB(bb, ub, hb) {
      const Bb = bb.tideCharts;
      for (let Ob = 0; Ob < Bb.length; Ob++)
        if (kB(Bb[Ob], ub, hb)) return Bb[Ob];
      return null
    }

    function QB(bb, ub, hb) {
      const Bb = Math.max(0, ub - hb);
      return Bb > fB ? bb("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(Bb / fB))
      }) : Bb > FB ? bb("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(Bb / FB))
      }) : bb("skyblockGame:tideChartsTurnSoon")
    }
    class RB extends Hb {
      constructor(bb, ub, hb, Bb) {
        let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(bb, hb, Bb), this.translate = ub, this.now = Ob, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.xw = bb => {
          this.picked = bb, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      cZ(bb) {
        const ub = this.message;
        if (null !== ub)
          for (const Bb of bb.tideCharts) {
            var hb;
            const bb = ub.tideCharts.find((bb => bb.tideChartIsland === Bb.tideChartIsland)),
              Ob = Bb.tideChartLit & ~(null !== (hb = null === bb || void 0 === bb ? void 0 : bb.tideChartLit) && void 0 !== hb ? hb : 0);
            void 0 !== bb && 0 !== Ob && (this.pulse = {
              island: Bb.tideChartIsland,
              cells: Ob,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = bb, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(bb, ub) {
        var hb;
        const Bb = null === this.message || Number.isNaN(bb) ? null : cB(this.message, bb, ub),
          Ob = null !== (hb = null === Bb || void 0 === Bb ? void 0 : Bb.tideChartIsland) && void 0 !== hb ? hb : null,
          Gb = null === Bb ? -1 : function(bb, ub, hb) {
            const [Bb, Ob, Gb, Ub] = bb.tideChartWater;
            return function(bb, ub, hb, Bb, Ob, Gb, Ub) {
              return ((Ob - bb) / (hb + Ub)) ** 2 + ((Gb - ub) / (Bb + Ub)) ** 2 <= 1
            }(Bb, Ob, Gb, Ub, ub, hb, 2) ? TB(bb, ub, hb) : -1
          }(Bb, bb, ub);
        return (Ob !== this.hereIsland || Gb !== this.hereCell) && (this.hereIsland = Ob, this.hereCell = Gb, null !== Ob && (this.lastIsland = Ob), !0)
      }
      afterRender(bb) {
        if (null === this.message) return;
        this.lastX = null === bb ? Number.NaN : bb[0], this.lastZ = null === bb ? Number.NaN : bb[2];
        const ub = this.locate(this.lastX, this.lastZ),
          hb = this.expirePulses();
        (ub || hb || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const bb = this.now();
        return !(!this.open || bb - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = bb, QB(this.translate, this.message.tideChartTurnsInMs, bb - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(bb, ub) {
        const hb = null === this.message ? null : cB(this.message, bb, ub);
        if (null === hb) return;
        const Bb = TB(hb, bb, ub);
        0 === (hb.tideChartPreBlank & 1 << Bb) && (this.cast = {
          island: hb.tideChartIsland,
          cell: Bb,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const bb = this.now();
        let ub = !1;
        return 0 !== this.pulse.cells && bb - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, ub = !0), null !== this.cast && bb - this.cast.atMs >= 1500 && (this.cast = null, ub = !0), ub
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
      findChart(bb, ub) {
        var hb;
        return null !== (hb = bb.tideCharts.find((bb => bb.tideChartIsland === ub))) && void 0 !== hb ? hb : null
      }
      describe(bb) {
        var ub, hb, Bb;
        const Ob = bb.tideChartIsland,
          Gb = [];
        for (let Zb = 0; Zb < 25; Zb++) {
          const ub = 1 << Zb;
          0 !== (bb.tideChartLit & ub) ? Gb.push("lit") : 0 !== (bb.tideChartClear & ub) ? Gb.push("clear") : 0 !== (bb.tideChartPreBlank & ub) ? Gb.push("shore") : Gb.push("water")
        }
        const Ub = function(bb) {
            let ub = 0;
            for (let hb = bb >>> 0; 0 !== hb; hb &= hb - 1) ub++;
            return ub
          }(bb.tideChartLit),
          Lb = bb.tideChartInkCount,
          Yb = this.translate(bb.tideChartIslandNameKey),
          Sb = this.translate("skyblockGame:tideChartsLit", {
            lit: String(Ub),
            ink: String(Lb)
          }),
          ab = null === bb.tideChartPictureNameKey ? null : this.translate(bb.tideChartPictureNameKey),
          Hb = this.hereIsland === Ob && -1 !== this.hereCell ? this.hereCell : null,
          wb = [`${Yb}: ${Sb}.`];
        if (null !== ab && wb.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: ab
          })), null !== Hb) {
          const bb = Math.floor(Hb / 5) + 1,
            ub = Hb % 5 + 1;
          wb.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(bb),
            column: String(ub)
          }))
        }
        return {
          island: Ob,
          islandName: Yb,
          cells: Gb,
          hereCell: Hb,
          lit: Ub,
          ink: Lb,
          litText: Sb,
          pictureName: ab,
          gridLabel: wb.join(" "),
          pulseCells: this.pulse.island === Ob ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (ub = this.cast) || void 0 === ub ? void 0 : ub.island) === Ob ? this.cast.cell : null,
          castToken: null !== (hb = null === (Bb = this.cast) || void 0 === Bb ? void 0 : Bb.token) && void 0 !== hb ? hb : 0
        }
      }
      buildSnapshot() {
        var bb, ub, hb;
        const Bb = this.message;
        if (null === Bb || 0 === Bb.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const Ob = this.findChart(Bb, this.hereIsland),
          Gb = null !== (bb = null !== (ub = null !== (hb = this.findChart(Bb, this.open ? this.picked : null)) && void 0 !== hb ? hb : Ob) && void 0 !== ub ? ub : this.findChart(Bb, this.lastIsland)) && void 0 !== bb ? bb : Bb.tideCharts[0],
          Ub = null === Ob ? null : this.describe(Ob);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: Ub,
          card: Gb === Ob ? Ub : this.describe(Gb),
          turnsText: QB(this.translate, Bb.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(Bb.tideChartBookCount)
          }),
          tabs: Bb.tideCharts.map((bb => ({
            island: bb.tideChartIsland,
            name: this.translate(bb.tideChartIslandNameKey),
            selected: bb.tideChartIsland === Gb.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const bO = "skyblockRegularsView",
      uO = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      hO = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function BO(bb, ub) {
      return "given" === bb ? ub.given : "owed" === bb ? ub.owed : ub.goal
    }
    class OO extends Hb {
      constructor(bb, ub, hb, Bb) {
        super(bb, hb, Bb), this.translate = ub, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = bb => bb, this.openIsland = bb => {
          this.selected = bb, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = bb => {
          this.selected = bb, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      cZ(bb) {
        this.message = bb, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const bb = this.openedFromReachLog;
        return this.openedFromReachLog = !1, bb
      }
      setTranslator(bb, ub, hb) {
        this.translate = bb, void 0 !== hb && (this.itemName = hb), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(bb, ub, hb) {
        return {
          text: this.translate(BO(bb, ub), hb),
          given: "given" === bb
        }
      }
      describeRegular(bb, ub) {
        const hb = this.translate,
          Bb = null !== bb.regularKg,
          Ob = bb.regularMeetings,
          Gb = Bb ? 0 === Ob ? hb("skyblockGame:regularsNotMet") : 1 === Ob ? hb("skyblockGame:regularsMeetingsOne") : hb("skyblockGame:regularsMeetings", {
            count: Ob
          }) : "";
        return {
          id: bb.regularId,
          name: hb(bb.regularNameKey),
          line: hb(bb.regularLineKey),
          itemName: bb.regularFishItem,
          fishName: this.itemName(bb.regularFishItem),
          tagged: Bb,
          size: null === bb.regularKg ? hb("skyblockGame:regularsNotTagged") : hb("skyblockGame:regularsSize", {
            kg: bb.regularKg.toFixed(1)
          }),
          meetings: Gb,
          chance: hb("skyblockGame:regularsChance", {
            count: bb.regularOneInCasts
          }),
          resting: bb.regularRestingToday,
          gifts: [{
            text: hb("skyblockGame:regularsGiftFlare"),
            given: Ob >= 3
          }, this.describeGift(bb.regularTintGift, uO, {
            tint: hb(bb.regularTintNameKey)
          })],
          history: [...bb.regularHistory].reverse().map((bb => {
            const Bb = bb.regularMeetingKg.toFixed(1),
              Ob = ub - bb.regularMeetingDay;
            return Ob <= 0 ? hb("skyblockGame:regularsToday", {
              kg: Bb
            }) : hb("skyblockGame:regularsDaysAgo", {
              days: Ob,
              kg: Bb
            })
          }))
        }
      }
      describeIsland(bb, ub) {
        return {
          id: bb.regularsIslandId,
          name: this.translate(bb.regularsIslandNameKey),
          charm: this.describeGift(bb.regularsCharmGift, hO, {
            charm: this.translate(bb.regularsCharmNameKey)
          }),
          regulars: bb.regularsList.map((bb => this.describeRegular(bb, ub)))
        }
      }
      buildSnapshot() {
        var bb, ub, hb, Bb;
        const Ob = this.message;
        if (null === Ob) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const Gb = Ob.regularsIslands.map((bb => this.describeIsland(bb, Ob.regularsToday))),
          Ub = null !== (bb = null !== (ub = null === (hb = Gb.find((bb => bb.id === this.selected))) || void 0 === hb ? void 0 : hb.id) && void 0 !== ub ? ub : null === (Bb = Gb[0]) || void 0 === Bb ? void 0 : Bb.id) && void 0 !== bb ? bb : "";
        return {
          enabled: !0,
          open: this.open,
          selected: Ub,
          islands: Gb
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const GO = "skyblockHiddenWatersView";
    class UO {
      constructor(bb) {
        this.vp = bb, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      cZ(bb) {
        this.snapshot = function(bb) {
          const [ub, hb] = bb.hiddenWatersMapSize, Bb = (bb, Bb) => ({
            left: 1 - bb / ub,
            top: Bb / hb
          }), Ob = new Map;
          for (const [Ub, Lb] of bb.hiddenWatersGlimpses) {
            var Gb;
            const bb = null !== (Gb = Ob.get(Ub)) && void 0 !== Gb ? Gb : [];
            bb.push(Lb), Ob.set(Ub, bb)
          }
          return {
            found: bb.hiddenWatersFound,
            total: bb.hiddenWatersTotal,
            aspect: hb / ub,
            pins: bb.hiddenWatersPins.map((bb => {
              let [ub, hb] = bb;
              return Bb(ub, hb)
            })),
            islands: bb.hiddenWatersIslands.map((bb => {
              let [Ob, Gb, Ub, Lb] = bb;
              const {
                left: Yb,
                top: Sb
              } = Bb(Ub + 1, Gb);
              return {
                left: Yb,
                top: Sb,
                width: (Ub + 1 - Ob) / ub,
                height: (Lb + 1 - Gb) / hb
              }
            })),
            glimpses: Ob
          }
        }(bb), this.vp(this.snapshot)
      }
    }
    const LO = "skyblockDialogueView";
    class YO extends Hb {
      constructor(bb, ub, hb, Bb, Ob) {
        let Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(bb, hb, Bb), this.translate = ub, this.requestDialogue = Ob, this.now = Gb, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
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
      cZ(bb) {
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
        const ub = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...ub,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const hb = this.selection;
        if ("quest" === hb.kind) {
          const bb = this.scripts.find((bb => bb.dialogueQuestId === hb.questId));
          return {
            ...ub,
            characters: [],
            questFocus: hb.questId,
            conversations: bb ? [this.conversation(bb)] : []
          }
        }
        const Bb = [];
        for (let Gb = this.scripts.length - 1; Gb >= 0; Gb--) {
          const bb = this.scripts[Gb].dialogueLines;
          for (let ub = bb.length - 1; ub >= 0; ub--) Bb.includes(bb[ub].dialogueSpeakerId) || Bb.push(bb[ub].dialogueSpeakerId)
        }
        const Ob = null !== hb.npcId && Bb.includes(hb.npcId) ? hb.npcId : null !== (bb = Bb[0]) && void 0 !== bb ? bb : null;
        return {
          ...ub,
          characters: Bb.map((bb => {
            var ub, hb;
            return {
              id: bb,
              styling: null !== (ub = null === (hb = this.speakers.get(bb)) || void 0 === hb ? void 0 : hb.dialogueSpeakerStyling) && void 0 !== ub ? ub : bb,
              selected: bb === Ob
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((bb => bb.dialogueLines.some((bb => bb.dialogueSpeakerId === Ob)))).map((bb => this.conversation(bb))).reverse()
        }
      }
      conversation(bb) {
        let ub = null;
        return {
          questId: bb.dialogueQuestId,
          questName: this.translate(bb.dialogueQuestNameKey),
          completed: bb.dialogueQuestCompleted,
          lines: bb.dialogueLines.map(((bb, hb) => {
            var Bb;
            const Ob = bb.dialogueSpeakerId === ub || null === (Bb = this.speakers.get(bb.dialogueSpeakerId)) || void 0 === Bb ? void 0 : Bb.dialogueSpeakerStyling;
            return ub = bb.dialogueSpeakerId, {
              key: hb,
              display: {
                line: {
                  translationKey: bb.dialogueLineKey,
                  params: this.params(bb.dialogueLineParams)
                },
                speakerName: Ob,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(bb) {
        if (void 0 !== bb) return Object.fromEntries(Object.entries(bb).map((bb => {
          let [ub, hb] = bb;
          return [ub, "string" === typeof hb ? hb : this.translate(hb.translationKey)]
        })))
      }
    }
    var SO = hb(568),
      aO = hb(1166),
      HO = hb(86);
    const wO = "skyblockAutographsView";

    function ZO(bb) {
      const ub = SO.g[bb];
      return {
        label: ub.chatTag.map((bb => bb.str)).join(""),
        icon: ub.icon,
        colour: ub.mainRGB
      }
    }
    class XO extends Hb {
      constructor(bb) {
        let ub = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = ub, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      cZ(bb) {
        this.signatures = bb.autographSignatures, bb.autographOpen ? this.show() : this.emit()
      }
      setTranslator(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = ub, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var bb;
        const ub = null !== (bb = this.signatures) && void 0 !== bb ? bb : [],
          hb = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          Bb = [...ub].sort(((bb, ub) => Number(null !== ub.autographRank) - Number(null !== bb.autographRank) || ub.autographSignedAtMs - bb.autographSignedAtMs)).map((bb => ({
            key: `${bb.autographSignedAtMs}|${bb.autographSignerName}`,
            name: (0, aO.e)(bb.autographSignerName, !HO.featureFlags.canSeeRealPlayerNames),
            rank: null === bb.autographRank ? null : ZO(bb.autographRank),
            signedOn: hb.format(bb.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: Bb,
          total: Bb.length,
          rankTotal: Bb.filter((bb => null !== bb.rank)).length
        }
      }
    }
    const pO = "skyblockHudView",
      oO = () => {},
      AO = {
        getItem: () => null,
        setItem: oO,
        removeItem: oO
      };
    class lO {
      constructor(bb) {
        let {
          translate: ub,
          translateWithIcons: hb,
          setMenuOpen: Bb = oO,
          dismissMenu: Ob = () => {
            Bb(!1)
          },
          publishSkills: Gb = oO,
          publishQuests: Ub = oO,
          publishQuestNotification: Lb = oO,
          publishDungeons: Yb = oO,
          publishCollections: Sb = oO,
          publishMap: ab = oO,
          publishHud: Hb = oO,
          publishPortalTransit: wb = oO,
          publishDailyReward: Xb = oO,
          publishMailbox: pb = oO,
          publishQuestGraph: ob = oO,
          publishForge: Ab = oO,
          publishSmuggler: lb = oO,
          publishKeepersChair: Kb = oO,
          publishReachLog: Wb = oO,
          publishLampLight: Cb = oO,
          publishMagmaward: db = oO,
          publishGlowtide: jb = oO,
          publishGlowMeter: nb = oO,
          publishHushWait: Db = oO,
          publishPassage: xb = oO,
          publishTideCharts: zb = oO,
          publishRegulars: gb = oO,
          publishHiddenWaters: ib = oO,
          publishDialogue: vb = oO,
          publishAutographs: tb = oO,
          isLoadingScreenUp: Jb = () => !1,
          onDailyRewardCoinLanded: eb = oO,
          onDailyRewardStarted: Nb = oO,
          onDailyRewardFinished: sb = oO,
          onDailyRewardItemLanded: Mb = oO,
          onMailboxStarted: mb = oO,
          journeyStorage: Ib = AO,
          requestTracking: Pb = oO,
          requestTravel: qb = oO,
          requestDungeonEnter: Eb = oO,
          requestQuestJump: yb = oO,
          requestQuestArrive: Vb = oO,
          requestForge: Fb = oO,
          requestSmuggle: fb = oO,
          requestKeepersChairAim: kb = oO,
          requestReachLogOpen: Tb = oO,
          requestLampLight: cb = oO,
          requestDialogue: Qb = oO
        } = bb;
        this.navigation = void 0, this.map = void 0, this.compass = new rb, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new nB.d, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = bb => bb, this.close = () => {
          for (const bb of this.panels) bb.close()
        }, this.setMenuOpen = Bb, this.publishHud = Hb, this.portalTransit = new mh(wb, Ib), this.magmaward = new MB(db), this.glowtide = new IB(jb), this.glowMeter = new qB(nb), this.hushWait = new yB(Db), this.dailyReward = new qh(Xb, (() => Jb() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (bb => {
          this.quests.setNotificationsHeld(bb)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), eb, Nb, sb, Mb);
        const Rb = bb => {
          this.panels.some((bb => bb.isOpen())) || (bb ? Ob() : this.setMenuOpen(!1))
        };
        this.skills = new Uh(Gb, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), ub, void 0, void 0, Rb), this.quests = new Hh(Ub, Pb, ub, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, Rb, Lb), this.dungeons = new Xh(Yb, ub, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, Rb, Eb), this.collections = new Nh(Sb, ub, (() => {
          this.beforePanelOpen(this.collections)
        }), Rb), this.map = new Zb(ab, qb, ub, (() => {
          this.beforePanelOpen(this.map)
        }), Rb), this.questGraph = new Qh(ob, ub, (() => {
          this.beforePanelOpen(this.questGraph)
        }), Rb, yb, Vb, Ib), this.forge = new oB(Ab, ub, (() => {
          this.beforePanelOpen(this.forge)
        }), Rb, Fb), this.smuggler = new KB(lb, ub, (() => {
          this.beforePanelOpen(this.smuggler)
        }), Rb, fb), this.lampLight = new NB(Cb, ub, cb, this.commandPacer), this.keepersChair = new xB(Kb, ub, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (bb => {
          this.lampLight.onChairClosed(), Rb(bb)
        }), kb, Date.now, this.commandPacer), this.reachLog = new JB(Wb, ub, (() => {
          this.beforePanelOpen(this.reachLog)
        }), Rb, Tb, this.commandPacer), this.passage = new jB(xb, ub, (() => {
          this.beforePanelOpen(this.passage)
        }), Rb), this.tideCharts = new RB(zb, ub, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), Rb), this.regulars = new OO(gb, ub, (() => {
          this.beforePanelOpen(this.regulars)
        }), (bb => {
          this.regulars.takeReturnToReachLog() && !bb && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), Rb(bb)
        })), this.hiddenWaters = new UO(ib), this.dialogue = new YO(vb, ub, (() => {
          this.beforePanelOpen(this.dialogue)
        }), Rb, Qb), this.autographs = new XO(tb, (() => {
          this.beforePanelOpen(this.autographs)
        }), Rb), this.mailbox = new Fh(pb, (() => Jb() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), mb), this.quests.translateWithIcons = null !== hb && void 0 !== hb ? hb : null, this.skills.onLevelUp = bb => {
          this.quests.notify(bb)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new Oh(this.map, this.quests, this.compass, ub)
      }
      getHudSnapshot() {
        const bb = this.hudSnapshot,
          ub = this.dailyReward.getHeldCoins();
        return null === bb || ub <= 0 || !("hudPurseCoins" in bb) ? bb : {
          ...bb,
          hudPurseCoins: Math.max(0, bb.hudPurseCoins - ub)
        }
      }
      receiveHud(bb) {
        this.hudSnapshot = bb, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(bb) {
        this.setMenuOpen(!0);
        const ub = bb === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = bb;
        for (const hb of this.panels) hb === bb || ub && hb === this.reachLog || hb.close();
        this.openingPanel = null
      }
      setTranslator(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ub => this.resolveItemName(ub, bb);
        this.quests.translateWithIcons = null !== hb && void 0 !== hb ? hb : null, this.navigation.setTranslator(bb, ub), this.lampLight.setTranslator(bb, ub), this.mailbox.setItemName(Bb);
        for (const Ob of this.panels) Ob.setTranslator(bb, ub, Bb)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const bb of this.panels) bb.dispose()
      }
    }
    var KO = hb(958),
      WO = hb.n(KO),
      CO = hb(13),
      dO = hb(36208),
      rO = hb(3183),
      jO = hb(1799),
      nO = hb(1789),
      DO = hb(9115),
      xO = hb(1095),
      zO = hb(1348),
      gO = hb(1007);

    function iO(bb) {
      let {
        controller: ub,
        minimap: hb,
        children: Bb
      } = bb;
      const Gb = (0, zO.k)(pO, ub.getHudSnapshot()),
        [Ub, Lb] = (0, nb.useState)(ub.skills.getSnapshot().overallLevel);
      (0, zO.h)(Gh, (bb => {
        Lb(bb.overallLevel)
      }));
      const Yb = (0, nb.useRef)(null);
      (0, zO.h)(Ph, (bb => {
        ! function(bb, ub) {
          if (null === bb || "function" !== typeof bb.animate) return;
          const hb = ub ? 1.35 : 1.15;
          bb.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${hb})`
          }, {
            transform: "scale(1)"
          }], {
            duration: ub ? 320 : 160,
            easing: "ease-out"
          }), bb.classList.toggle("Receiving", !ub), ub && (bb.classList.remove("Shine"), bb.offsetWidth, bb.classList.add("Shine"))
        }(Yb.current, bb)
      }));
      const {
        t: Sb
      } = (0, xO.K)(), {
        isTouchScreen: ab
      } = (0, CO.j)(["isTouchScreen"]), [Hb, wb] = (0, nb.useState)(null);
      return (0, rO.k)(Hb, ".SkyblockRightHud"), null !== Gb || hb ? (0, gO.jsx)(dO.e, {
        placement: "topRight",
        children: (0, gO.jsxs)("div", {
          className: WO()("SkyblockRightHud", {
            TouchScreen: ab
          }),
          children: [hb, null !== Gb && (0, gO.jsxs)("div", {
            ref: wb,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in Gb ? (0, gO.jsx)("div", {
              className: "SkyblockHudHelp",
              children: Gb.hudHelpText
            }) : (0, gO.jsxs)(gO.Fragment, {
              children: [(0, gO.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, gO.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, gO.jsx)("strong", {
                    style: {
                      color: Ob.I.cyanUiText
                    },
                    children: Sb(Gb.hudZoneNameKey)
                  }), null !== Ub && (0, gO.jsx)("span", {
                    style: {
                      color: Ob.I.goldUiText
                    },
                    children: Sb("skyblockGame:level", {
                      level: (0, DO.c)(Ub)
                    })
                  })]
                }), (0, gO.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: Yb,
                  children: [(0, gO.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, gO.jsx)(jO.d, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, DO.c)(Gb.hudPurseCoins)]
                })]
              }), Gb.hudClockText.length > 0 && (0, gO.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, gO.jsx)(nO.c, {
                  text: Gb.hudClockText
                })
              })]
            }), Bb, "hudZoneNameKey" in Gb && (0, gO.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function vO(bb) {
      let {
        icon: ub
      } = bb;
      const hb = (0, nb.useCallback)((bb => {
        null === bb || void 0 === bb || bb.replaceChildren(Vu(ub))
      }), [ub]);
      return (0, gO.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: hb
      })
    }

    function tO(bb) {
      let {
        controller: ub
      } = bb;
      const {
        t: hb
      } = (0, xO.K)();
      return (0, gO.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: ub.display.mountPlayer,
        title: hb("skyblockGame:mapYouAreHere"),
        children: (0, gO.jsx)(vO, {
          icon: "player"
        })
      })
    }
    const JO = hb(38165),
      eO = Object.fromEntries(JO.keys().map((bb => [bb.replace(/^\.\/(.*)\.png$/, "$1"), JO(bb)])));

    function NO(bb, ub) {
      var hb;
      return null !== (hb = eO[bb]) && void 0 !== hb ? hb : eO[ub]
    }

    function sO(bb) {
      let {
        imageKey: ub,
        fallbackImageKey: hb,
        geometryKey: Bb,
        alt: Ob,
        className: Gb
      } = bb;
      const [Ub, Lb] = (0, nb.useState)((() => function(bb, ub) {
        return [{
          id: 0,
          imageKey: bb,
          geometryKey: ub,
          phase: "shown"
        }]
      }(ub, Bb))), Yb = function(bb, ub, hb) {
        const Bb = bb[bb.length - 1];
        if (Bb.imageKey === ub && Bb.geometryKey === hb) return bb;
        const Ob = {
          id: Bb.id + 1,
          imageKey: ub,
          geometryKey: hb,
          phase: "entering"
        };
        return Bb.geometryKey === hb ? [{
          ...Bb,
          phase: "leaving"
        }, Ob] : [Ob]
      }(Ub, ub, Bb);
      return Yb !== Ub && Lb(Yb), (0, gO.jsx)(gO.Fragment, {
        children: Yb.map((bb => (0, gO.jsx)("img", {
          className: WO()("SkyblockMapTerrainImage", Gb, {
            Entering: "entering" === bb.phase,
            Leaving: "leaving" === bb.phase
          }),
          src: NO(bb.imageKey, hb),
          alt: "leaving" === bb.phase ? "" : Ob,
          onAnimationEnd: () => {
            Lb((ub => function(bb, ub) {
              return bb.flatMap((bb => bb.id !== ub ? [bb] : "leaving" === bb.phase ? [] : [{
                ...bb,
                phase: "shown"
              }]))
            }(ub, bb.id)))
          }
        }, bb.id)))
      })
    }
    var MO = hb(4292),
      mO = hb(1357);

    function IO(bb) {
      if ("Tab" !== bb.key) return;
      const ub = Array.from(bb.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        hb = ub.indexOf(document.activeElement);
      var Bb;
      if (bb.shiftKey && hb <= 0) bb.preventDefault(), null === (Bb = ub.at(-1)) || void 0 === Bb || Bb.focus();
      else if (!bb.shiftKey && (-1 === hb || hb === ub.length - 1)) {
        var Ob;
        bb.preventDefault(), null === (Ob = ub[0]) || void 0 === Ob || Ob.focus()
      }
    }

    function PO() {
      const bb = (0, nb.useRef)(null);
      return (0, nb.useCallback)((ub => {
        var hb;
        ub ? (bb.current = document.activeElement, ub.focus()) : null === (hb = bb.current) || void 0 === hb || hb.focus()
      }), [])
    }

    function qO(bb) {
      let {
        percent: ub,
        label: hb,
        levelUpToken: Bb,
        colour: Ob
      } = bb;
      return (0, gO.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": hb,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": ub,
        "aria-valuetext": hb,
        children: [(0, gO.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${ub/100})`
          }
        }), null !== Bb && void 0 !== Bb && (0, gO.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": Ob
          }
        }, Bb)]
      })
    }

    function EO(bb) {
      let {
        mount: ub
      } = bb;
      return (0, gO.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: ub,
        hidden: !0,
        children: (0, gO.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, gO.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, gO.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function yO(bb, ub, hb, Bb) {
      (0, nb.useLayoutEffect)((() => {
        const Ob = bb.current;
        if (!hb || null === ub || void 0 === ub || !ub.local || !Ob) return;
        const Gb = Array.from(Ob.querySelectorAll(".SkyblockMapNode")),
          Ub = [...ub.points, ...ub.portals],
          Lb = () => {
            const bb = Ob.clientWidth,
              hb = Ob.clientHeight,
              Lb = Gb.map(((Ob, Gb) => {
                const Lb = Ub[Gb];
                return {
                  id: Lb.id,
                  portal: Gb >= ub.points.length,
                  x: Lb.position[0] * bb / 100,
                  y: Lb.position[1] * hb / 100,
                  width: Ob.offsetWidth / Bb,
                  height: Ob.offsetHeight / Bb
                }
              })),
              Yb = new Map(Ub.map(((bb, ub) => [bb.id, Gb[ub]])));
            for (const ub of function(bb, ub, hb) {
                const Bb = [],
                  Ob = [...bb].sort(((bb, ub) => Number(ub.portal) - Number(bb.portal) || bb.id.localeCompare(ub.id)));
                for (const Gb of Ob) {
                  const bb = bb => Math.max(Gb.width / 2, Math.min(ub - Gb.width / 2, bb)),
                    Ob = bb => Math.max(Gb.height / 2, Math.min(hb - Gb.height / 2, bb)),
                    Ub = [bb(Gb.x)],
                    Lb = [Ob(Gb.y)];
                  for (const ub of Bb) Ub.push(bb(ub.x - (ub.width + Gb.width) / 2 - 4), bb(ub.x + (ub.width + Gb.width) / 2 + 4)), Lb.push(Ob(ub.y - (ub.height + Gb.height) / 2 - 4), Ob(ub.y + (ub.height + Gb.height) / 2 + 4));
                  let Yb = {
                      ...Gb,
                      x: Ub[0],
                      y: Lb[0]
                    },
                    Sb = 1 / 0,
                    ab = 1 / 0;
                  for (const ub of new Set(Ub))
                    for (const bb of new Set(Lb)) {
                      let hb = 0;
                      for (const Ub of Bb) hb += Math.max(0, (Gb.width + Ub.width) / 2 + 4 - Math.abs(ub - Ub.x)) * Math.max(0, (Gb.height + Ub.height) / 2 + 4 - Math.abs(bb - Ub.y));
                      const Ob = (ub - Gb.x) ** 2 + (bb - Gb.y) ** 2;
                      (hb < Sb || hb === Sb && Ob < ab) && (Yb = {
                        ...Gb,
                        x: ub,
                        y: bb
                      }, Sb = hb, ab = Ob)
                    }
                  Bb.push(Yb)
                }
                return Bb
              }(Lb, bb, hb)) {
              const bb = Yb.get(ub.id);
              bb.style.left = `${ub.x}px`, bb.style.top = `${ub.y}px`
            }
          };
        Lb();
        const Yb = new ResizeObserver(Lb);
        Yb.observe(Ob);
        for (const bb of Gb) Yb.observe(bb);
        return () => {
          Yb.disconnect()
        }
      }), [bb, ub, hb, Bb])
    }
    const VO = {
        zoom: 1,
        x: 0,
        y: 0
      },
      FO = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function fO(bb, ub, hb) {
      return Math.min(hb, Math.max(ub, bb))
    }

    function kO(bb, ub, hb) {
      const Bb = Math.min(1, hb * ub / bb),
        Ob = Math.min(1, bb / (hb * ub));
      return {
        x0: (1 - Bb) / 2,
        y0: (1 - Ob) / 2,
        x1: (1 + Bb) / 2,
        y1: (1 + Ob) / 2
      }
    }

    function TO(bb, ub, hb, Bb) {
      const Ob = ub * (Bb - hb);
      if (Ob <= 1) return .5 - ub * (hb + Bb) / 2;
      const Gb = .45 * Math.min(1, Ob - 1);
      return fO(bb, 1 - ub * Bb - Gb, Gb - ub * hb)
    }

    function cO(bb, ub) {
      const hb = fO(bb.zoom, 1, 12);
      return {
        zoom: hb,
        x: TO(bb.x, hb, ub.x0, ub.x1),
        y: TO(bb.y, hb, ub.y0, ub.y1)
      }
    }

    function QO(bb, ub, hb, Bb) {
      let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : FO;
      const Gb = fO(bb.zoom * ub, 1, 12),
        Ub = Gb / bb.zoom;
      return cO({
        zoom: Gb,
        x: hb - (hb - bb.x) * Ub,
        y: Bb - (Bb - bb.y) * Ub
      }, Ob)
    }

    function RO(bb, ub, hb, Bb) {
      const [Ob, Gb] = (0, nb.useState)(VO);
      (0, nb.useEffect)((() => {
        Gb(VO)
      }), [hb]), (0, nb.useEffect)((() => {
        const hb = bb.current;
        if (!ub || !hb) return;
        const Ob = () => kO(hb.clientWidth, hb.clientHeight, Bb),
          Ub = bb => {
            const ub = hb.getBoundingClientRect();
            return {
              x: (bb.clientX - ub.left) / ub.width,
              y: (bb.clientY - ub.top) / ub.height
            }
          },
          Lb = new Map;
        let Yb = {
            x: 0,
            y: 0
          },
          Sb = !1,
          ab = 0;
        const Hb = bb => {
            bb.preventDefault();
            const ub = bb.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * bb.deltaY : bb.deltaY,
              hb = Ub(bb);
            Gb((bb => QO(bb, Math.exp(.0015 * -ub), hb.x, hb.y, Ob())))
          },
          wb = bb => {
            "mouse" === bb.pointerType && 0 !== bb.button || (Lb.set(bb.pointerId, Ub(bb)), 1 === Lb.size && (Yb = {
              x: bb.clientX,
              y: bb.clientY
            }, Sb = !1), ab = 0)
          },
          Zb = bb => {
            const ub = Lb.get(bb.pointerId);
            if (!ub) return;
            const Bb = Ub(bb);
            if (Lb.set(bb.pointerId, Bb), 2 === Lb.size) {
              const [bb, ub] = [...Lb.values()], hb = Math.hypot(bb.x - ub.x, bb.y - ub.y);
              if (ab > 0) {
                const Bb = hb / ab;
                Gb((hb => QO(hb, Bb, (bb.x + ub.x) / 2, (bb.y + ub.y) / 2, Ob())))
              }
              return ab = hb, void(Sb = !0)
            }!Sb && Math.hypot(bb.clientX - Yb.x, bb.clientY - Yb.y) < 4 || (Sb || (Sb = !0, hb.setPointerCapture(bb.pointerId)), Gb((bb => function(bb, ub, hb) {
              let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : FO;
              return cO({
                zoom: bb.zoom,
                x: bb.x + ub,
                y: bb.y + hb
              }, Bb)
            }(bb, Bb.x - ub.x, Bb.y - ub.y, Ob()))))
          },
          Xb = bb => {
            Lb.delete(bb.pointerId), ab = 0
          },
          pb = bb => {
            Sb && (bb.stopPropagation(), bb.preventDefault(), Sb = !1)
          },
          ob = new ResizeObserver((() => {
            Gb((bb => cO(bb, Ob())))
          }));
        return ob.observe(hb), hb.addEventListener("wheel", Hb, {
          passive: !1
        }), hb.addEventListener("pointerdown", wb), hb.addEventListener("pointermove", Zb), hb.addEventListener("pointerup", Xb), hb.addEventListener("pointercancel", Xb), hb.addEventListener("click", pb, !0), () => {
          ob.disconnect(), hb.removeEventListener("wheel", Hb), hb.removeEventListener("pointerdown", wb), hb.removeEventListener("pointermove", Zb), hb.removeEventListener("pointerup", Xb), hb.removeEventListener("pointercancel", Xb), hb.removeEventListener("click", pb, !0)
        }
      }), [bb, ub, hb, Bb]);
      return {
        view: Ob,
        zoomBy: ub => {
          const hb = bb.current;
          hb && Gb((bb => QO(bb, ub, .5, .5, kO(hb.clientWidth, hb.clientHeight, Bb))))
        }
      }
    }

    function bG(bb) {
      var ub, hb, Bb, Ob;
      let {
        controller: Gb,
        navigation: Ub
      } = bb;
      const Lb = (0, zO.k)(wb, Gb.getSnapshot()),
        {
          t: Yb
        } = (0, xO.K)(),
        Sb = PO(),
        ab = Lb.presentation,
        Hb = (0, nb.useRef)(null),
        Zb = (0, nb.useRef)(null),
        Xb = Boolean(Lb.open && (null === ab || void 0 === ab ? void 0 : ab.local) && ab.background),
        pb = RO(Hb, Xb, `${Lb.open}|${Lb.tab}|${null===ab||void 0===ab||null===(ub=ab.background)||void 0===ub?void 0:ub.geometryKey}`, null !== (hb = null === ab || void 0 === ab || null === (Bb = ab.background) || void 0 === Bb ? void 0 : Bb.ratio) && void 0 !== hb ? hb : 2);
      if (yO(Zb, ab, Lb.open, pb.view.zoom), !ab || !Lb.open) return null;
      const ob = ab.local ? ab.background : null,
        Ab = {
          "--map-ratio": String(null !== (Ob = null === ob || void 0 === ob ? void 0 : ob.ratio) && void 0 !== Ob ? Ob : 2),
          backgroundColor: null === ob || void 0 === ob ? void 0 : ob.colour
        },
        lb = {
          "--map-zoom": String(pb.view.zoom),
          transform: `translate(${100*pb.view.x}%, ${100*pb.view.y}%) scale(${pb.view.zoom})`
        };
      return (0, gO.jsx)(MO.b, {
        show: Lb.open,
        close: Gb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gO.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: Sb,
          onKeyDown: IO,
          children: [(0, gO.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, gO.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, gO.jsx)("h2", {
                id: "skyblockMapTitle",
                children: Yb("skyblockGame:map")
              }), ab.minimap && (0, gO.jsx)("p", {
                children: ab.minimap.caption
              })]
            }), (0, gO.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((bb => (0, gO.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": bb === Lb.tab ? "true" : void 0,
                className: WO()({
                  Selected: bb === Lb.tab
                }),
                "aria-pressed": bb === Lb.tab,
                onClick: () => {
                  Gb.selectTab(bb)
                },
                children: Yb("local" === bb ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, bb)))
            }), (0, gO.jsx)(mO.i, {
              padIgnore: !0,
              onClick: Gb.dismiss
            })]
          }), (0, gO.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, gO.jsxs)("div", {
              ref: Hb,
              className: WO()("SkyblockMapCanvas", {
                Local: ab.local,
                Overview: !ab.local,
                Zoomed: pb.view.zoom > 1
              }),
              style: Ab,
              children: [(0, gO.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: Xb ? lb : void 0,
                children: (0, gO.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: Zb,
                  children: [ob && (0, gO.jsx)(sO, {
                    className: "SkyblockMapTerrain",
                    imageKey: ob.imageKey,
                    fallbackImageKey: ob.fallbackImageKey,
                    geometryKey: ob.geometryKey,
                    alt: ob.label
                  }), ab.local && (0, gO.jsx)(EO, {
                    mount: Ub.display.mountMapSearchArea
                  }), !ab.local && (0, gO.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: ab.connections.map((bb => (0, gO.jsx)("line", {
                      className: WO()({
                        Explored: bb.explored
                      }),
                      x1: bb.start[0],
                      y1: bb.start[1],
                      x2: bb.end[0],
                      y2: bb.end[1]
                    }, bb.id)))
                  }), ab.points.map((bb => {
                    const ub = !ab.local && bb.thumbnail ? eO[bb.thumbnail] : void 0;
                    return (0, gO.jsxs)("div", {
                      className: WO()("SkyblockMapNode", {
                        Current: bb.current
                      }),
                      style: {
                        left: `${bb.position[0]}%`,
                        top: `${bb.position[1]}%`
                      },
                      children: [(0, gO.jsxs)(mO.e, {
                        className: WO()("SkyblockMapPin", {
                          Unknown: !bb.visited,
                          Current: bb.current
                        }),
                        disabled: Lb.pending,
                        onClick: () => {
                          Gb.travel(bb.travelKind, bb.travelId)
                        },
                        children: [ub && (0, gO.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: ub,
                          alt: ""
                        }), !ub && (0, gO.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, gO.jsx)(vO, {
                            icon: bb.icon
                          })
                        }), (0, gO.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: bb.name
                        })]
                      }), bb.current && (0, gO.jsx)("span", {
                        className: WO()("SkyblockMapHereBadge", {
                          Above: bb.position[1] > 50
                        }),
                        children: Yb("skyblockGame:mapYouAreHere")
                      })]
                    }, bb.id)
                  })), ab.portals.map((bb => (0, gO.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${bb.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${bb.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, gO.jsxs)(mO.e, {
                      className: "SkyblockMapPin",
                      disabled: Lb.pending,
                      onClick: () => {
                        Gb.travel(bb.travelKind, bb.travelId)
                      },
                      children: [(0, gO.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: bb.colour
                        },
                        "aria-hidden": "true",
                        children: (0, gO.jsx)(vO, {
                          icon: bb.icon
                        })
                      }), (0, gO.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: bb.name
                      })]
                    })
                  }, bb.id))), ab.local && (0, gO.jsx)(tO, {
                    controller: Ub
                  })]
                })
              }), Xb && (0, gO.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, gO.jsx)("button", {
                  type: "button",
                  "aria-label": Yb("skyblockGame:mapZoomIn"),
                  disabled: pb.view.zoom >= 12,
                  onClick: () => {
                    pb.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, gO.jsx)("button", {
                  type: "button",
                  "aria-label": Yb("skyblockGame:mapZoomOut"),
                  disabled: pb.view.zoom <= 1,
                  onClick: () => {
                    pb.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, gO.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: Lb.feedback
              })]
            })
          }), (0, gO.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [ab.progress && (0, gO.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, gO.jsx)("span", {
                children: ab.progress
              }), (0, gO.jsx)(qO, {
                percent: ab.percent,
                label: ab.progress
              })]
            }), ab.noLandmarks && (0, gO.jsx)("span", {
              children: Yb("skyblockGame:mapNoLandmarks")
            }), ab.canTravel && (0, gO.jsx)("span", {
              className: "SkyblockMapHint",
              children: Yb("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function uG(bb) {
      let {
        view: ub,
        controller: hb,
        navigation: Bb
      } = bb;
      const {
        t: Ob
      } = (0, xO.K)(), {
        isTouchScreen: Gb
      } = (0, CO.j)(["isTouchScreen"]);
      return (0, gO.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": Ob("skyblockGame:mapLocal"),
        children: [Gb && (0, gO.jsx)(mO.e, {
          className: "SkyblockMinimapOpen",
          onClick: hb.showLocal,
          children: Ob("skyblockGame:map")
        }), (0, gO.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: ub.colour
          },
          children: [(0, gO.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: Bb.display.mountTerrain,
            style: {
              width: ub.width,
              height: ub.height
            },
            children: [(0, gO.jsx)(sO, {
              imageKey: ub.imageKey,
              fallbackImageKey: ub.fallbackImageKey,
              geometryKey: ub.geometryKey,
              alt: ub.label
            }), (0, gO.jsx)(EO, {
              mount: Bb.display.mountMinimapSearchArea
            }), ub.markers.map((bb => (0, gO.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${bb.position[0]}%`,
                top: `${bb.position[1]}%`,
                color: bb.colour
              },
              title: bb.name,
              children: (0, gO.jsx)(vO, {
                icon: bb.icon
              })
            }, bb.id)))]
          }), (0, gO.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: Ob("skyblockGame:mapYouAreHere"),
            children: (0, gO.jsx)(vO, {
              icon: "player"
            })
          })]
        }), (0, gO.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: ub.caption
        })]
      })
    }

    function hG(bb) {
      let {
        controller: ub
      } = bb;
      return (0, gO.jsxs)("div", {
        className: "SkyblockCompass",
        ref: ub.display.mountCompass,
        children: [(0, gO.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, gO.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, gO.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function BG(bb) {
      let {
        controller: ub,
        surface: hb
      } = bb;
      const {
        t: Bb
      } = (0, xO.K)(), Ob = (0, zO.k)(Gh, ub.getSnapshot()), Gb = PO();
      return Ob.enabled ? (0, gO.jsxs)(gO.Fragment, {
        children: ["hud" === hb && (0, gO.jsx)(dO.e, {
          placement: "statBars",
          children: Ob.hud && (0, gO.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": Ob.hud.colour
            },
            children: [(0, gO.jsx)(qO, {
              percent: Ob.hud.skill.percent,
              label: Ob.hud.skill.xp,
              levelUpToken: Ob.hud.levelUpToken,
              colour: Ob.hud.colour
            }), (0, gO.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, gO.jsxs)("span", {
                children: [Ob.hud.skill.label, " \xb7 ", Ob.hud.skill.level]
              }), (0, gO.jsx)("span", {
                children: Ob.hud.gain
              })]
            })]
          })
        }), "hud" === hb && (0, gO.jsx)(dO.e, {
          children: Ob.hud && (0, gO.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, gO.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, gO.jsx)("strong", {
                children: Ob.hud.skill.label
              }), (0, gO.jsx)("span", {
                children: Ob.hud.gain
              })]
            }), (0, gO.jsx)(qO, {
              percent: Ob.hud.skill.percent,
              label: Ob.hud.skill.xp,
              levelUpToken: Ob.hud.levelUpToken,
              colour: Ob.hud.colour
            }), (0, gO.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, gO.jsx)("span", {
                children: Ob.hud.skill.level
              }), (0, gO.jsx)("span", {
                children: Ob.hud.skill.xp
              })]
            })]
          })
        }), "menu" === hb && (0, gO.jsx)(MO.b, {
          show: Ob.open,
          close: ub.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, gO.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: Gb,
            onKeyDown: IO,
            children: [(0, gO.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, gO.jsxs)("div", {
                children: [(0, gO.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: Bb("skyblockGame:skills")
                }), (0, gO.jsx)("p", {
                  children: Bb("skyblockGame:skillsIntro")
                })]
              }), (0, gO.jsx)(mO.i, {
                padIgnore: !0,
                onClick: ub.dismiss
              })]
            }), (0, gO.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, gO.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: Ob.skills.map((bb => (0, gO.jsxs)(mO.e, {
                  className: WO()("SkyblockSkillCard", {
                    Selected: bb.selected
                  }),
                  ariaPressed: bb.selected,
                  onClick: () => {
                    ub.select(bb.id)
                  },
                  children: [(0, gO.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, gO.jsx)(jO.d, {
                      itemName: bb.icon,
                      amount: 0
                    })
                  }), (0, gO.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, gO.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, gO.jsx)("strong", {
                        children: bb.label
                      }), (0, gO.jsx)("span", {
                        children: bb.level
                      })]
                    }), (0, gO.jsx)(qO, {
                      percent: bb.percent,
                      label: `${bb.label}: ${bb.xp}`
                    }), (0, gO.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: bb.xp
                    })]
                  })]
                }, bb.id)))
              }), Ob.detail && (0, gO.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, gO.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, gO.jsx)(jO.d, {
                    itemName: Ob.detail.icon,
                    amount: 0
                  })
                }), (0, gO.jsx)("h3", {
                  children: Ob.detail.label
                }), (0, gO.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: Ob.detail.level
                }), (0, gO.jsx)("p", {
                  children: Ob.detail.description
                }), (0, gO.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, gO.jsx)("strong", {
                    children: Bb("skyblockGame:currentBenefit")
                  }), (0, gO.jsx)("span", {
                    children: Ob.detail.benefit
                  })]
                }), (0, gO.jsx)(qO, {
                  percent: Ob.detail.percent,
                  label: Ob.detail.xp
                }), (0, gO.jsx)("p", {
                  children: Ob.detail.xp
                }), (0, gO.jsx)("h4", {
                  children: Bb("skyblockGame:earnXp")
                }), (0, gO.jsx)("ul", {
                  children: Ob.detail.sources.map((bb => (0, gO.jsx)("li", {
                    children: bb
                  }, bb)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var OG = hb(1260),
      GG = hb(4606),
      UG = hb(298);

    function LG(bb) {
      let {
        item: ub
      } = bb;
      return (0, gO.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, gO.jsx)(jO.d, {
          itemName: ub,
          amount: 0
        })
      })
    }

    function YG(bb) {
      let {
        name: ub,
        percent: hb,
        progress: Bb
      } = bb;
      return (0, gO.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, gO.jsx)(qO, {
          percent: hb,
          label: `${(0,UG.Ab)(ub)}: ${Bb}`
        }), (0, gO.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: Bb
        })]
      })
    }

    function SG(bb) {
      let {
        subquests: ub,
        showDescriptions: hb = !1
      } = bb;
      return (0, gO.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: ub.map((bb => {
          const ub = hb && "completed" === bb.status,
            Bb = (0, gO.jsxs)("li", {
              className: WO()("SkyblockQuestStep", bb.status, {
                JustFinished: bb.justFinished,
                JustUnlocked: bb.justUnlocked
              }),
              tabIndex: ub ? 0 : void 0,
              children: [null !== bb.iconItem && (0, gO.jsx)(LG, {
                item: bb.iconItem
              }), null === bb.iconItem && (0, gO.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === bb.status ? "\u2713" : "skipped" === bb.status ? "\u2212" : "\u25cb"
              }), (0, gO.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, gO.jsx)("strong", {
                  children: (0, gO.jsx)(GG.c, {
                    text: bb.name
                  })
                }), hb && !ub && (0, gO.jsx)("span", {
                  children: (0, gO.jsx)(GG.c, {
                    text: bb.description
                  })
                }), null !== bb.barPercent && (0, gO.jsx)(YG, {
                  name: bb.name,
                  percent: bb.barPercent,
                  progress: bb.progress
                }), null === bb.barPercent && !ub && (0, gO.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: bb.statusLabel
                })]
              })]
            }, bb.id);
          return ub ? (0, gO.jsx)(OG.d, {
            delayShow: 200,
            tooltipInner: (0, gO.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, gO.jsx)("span", {
                children: (0, gO.jsx)(GG.c, {
                  text: bb.description
                })
              }), (0, gO.jsx)("strong", {
                children: bb.statusLabel
              })]
            }),
            children: Bb
          }, bb.id) : Bb
        }))
      })
    }

    function aG(bb) {
      let {
        quest: ub,
        select: hb
      } = bb;
      const {
        t: Bb
      } = (0, xO.K)(), Ob = ub.focusStep;
      return (0, gO.jsxs)(mO.e, {
        className: WO()("SkyblockQuestCard", {
          Selected: ub.selected,
          Tracked: ub.tracked
        }),
        onClick: () => {
          hb(ub.id)
        },
        children: [(0, gO.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, gO.jsx)("strong", {
            children: (0, gO.jsx)(GG.c, {
              text: ub.name
            })
          }), ub.tracked && (0, gO.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: Bb("skyblockGame:currentQuest")
          })]
        }), Ob && (0, gO.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== Ob.iconItem && (0, gO.jsx)(LG, {
            item: Ob.iconItem
          }), (0, gO.jsx)(YG, {
            name: Ob.name,
            percent: Ob.barPercent,
            progress: Ob.progress
          })]
        }), (0, gO.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: ub.progress
        })]
      })
    }

    function HG(bb) {
      let {
        controller: ub,
        surface: hb
      } = bb;
      const Bb = (0, zO.k)(Sh, ub.getSnapshot()),
        {
          t: Ob
        } = (0, xO.K)(),
        Gb = PO();
      return Bb.enabled ? (0, gO.jsxs)(gO.Fragment, {
        children: ["hud" === hb && (0, gO.jsx)(gO.Fragment, {
          children: Bb.tracked && (0, gO.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: Yh,
            children: (0, gO.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [Bb.trackedStepPulse > 0 && (0, gO.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, Bb.trackedStepPulse), (0, gO.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: Ob("skyblockGame:currentQuest")
              }), (0, gO.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, gO.jsx)("strong", {
                  children: (0, gO.jsx)(GG.c, {
                    text: Bb.tracked.name
                  })
                }), null !== Bb.tracked.clock && (0, gO.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: Bb.tracked.clock
                })]
              }), (0, gO.jsx)(SG, {
                subquests: Bb.tracked.subquests
              })]
            })
          })
        }), "menu" === hb && (0, gO.jsx)(MO.b, {
          show: Bb.open,
          close: ub.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, gO.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: Gb,
            onKeyDown: IO,
            children: [(0, gO.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, gO.jsx)("div", {
                children: (0, gO.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: Ob("skyblockGame:quests")
                })
              }), (0, gO.jsx)(mO.i, {
                padIgnore: !0,
                onClick: ub.dismiss
              })]
            }), (0, gO.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, gO.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, gO.jsx)("h3", {
                  children: Ob("skyblockGame:current")
                }), 0 === Bb.active.length && (0, gO.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: Ob("skyblockGame:noActiveQuests")
                }), Bb.active.map((bb => (0, gO.jsx)(aG, {
                  quest: bb,
                  select: ub.select
                }, bb.id))), (0, gO.jsx)("h3", {
                  children: (0, gO.jsxs)("button", {
                    type: "button",
                    className: WO()("SkyblockQuestSectionToggle", {
                      Expanded: Bb.completedExpanded
                    }),
                    "aria-expanded": Bb.completedExpanded,
                    onClick: ub.toggleCompleted,
                    children: [(0, gO.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), Ob("skyblockGame:completed"), (0, gO.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: Bb.completed.length
                    })]
                  })
                }), Bb.completedExpanded && 0 === Bb.completed.length && (0, gO.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: Ob("skyblockGame:noCompletedQuests")
                }), Bb.completedExpanded && Bb.completed.map((bb => (0, gO.jsx)(aG, {
                  quest: bb,
                  select: ub.select
                }, bb.id)))]
              }), Bb.detail && (0, gO.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [Bb.detail.completed && (0, gO.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: Ob("skyblockGame:completedQuest")
                }), (0, gO.jsx)("h3", {
                  children: (0, gO.jsx)(GG.c, {
                    text: Bb.detail.name
                  })
                }), (0, gO.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, gO.jsx)(GG.c, {
                    text: Bb.detail.description
                  })
                }), (0, gO.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [Bb.detail.progress, null !== Bb.detail.clock && (0, gO.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: Bb.detail.clock
                  })]
                }), (0, gO.jsx)(SG, {
                  subquests: Bb.detail.subquests,
                  showDescriptions: !0
                }), Bb.detail.tracked && (0, gO.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: Bb.detail.trackLabel
                }), !Bb.detail.completed && !Bb.detail.tracked && (0, gO.jsx)(mO.m, {
                  onClick: ub.trackSelected,
                  disabled: !Bb.detail.canTrack,
                  children: Bb.detail.trackLabel
                }), Bb.detail.canViewDialogue && (0, gO.jsx)(mO.e, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: ub.viewDialogue,
                  children: Ob("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var wG = hb(966),
      ZG = hb(2440);

    function XG(bb, ub, hb, Bb, Ob) {
      const Gb = bb => "linear" === Ob ? bb : {
          Kb: Ob,
          point: bb
        },
        Ub = {};
      for (const [Lb, Yb] of Bb)
        for (const [ub, hb] of Object.entries(bb(Lb, Yb, Gb))) Ub[ub] ??= {
          timeline: []
        }, Ub[ub].timeline.push(hb);
      return {
        Xb: ub,
        loop: hb,
        ob: Ub
      }
    }
    const pG = .547,
      oG = .022,
      AG = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      lG = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function KG(bb, ub, hb) {
      const {
        drop: Bb = 0,
        shift: Ob = 0,
        torso: Gb = 0,
        nod: Ub = 0,
        tilt: Lb = 0,
        legs: Yb = [0, 0],
        arms: Sb = 0,
        spread: ab = 0
      } = ub, Hb = pG * Math.cos(Gb) - oG * Math.sin(Gb), wb = pG * Math.sin(Gb) + oG * Math.cos(Gb), Zb = hb([0, -Bb, Ob]);
      return {
        LowerBody: {
          timeFraction: bb,
          position: Zb,
          rotation: hb([0, 0, 0])
        },
        UpperBody: {
          timeFraction: bb,
          position: Zb,
          rotation: hb([Gb, 0, Lb])
        },
        HeadMesh: {
          timeFraction: bb,
          position: hb([0, Hb - pG - Bb, wb - oG + Ob]),
          rotation: hb([Gb + Ub, 0, Lb])
        },
        LegLeftMesh: {
          timeFraction: bb,
          rotation: hb([Yb[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: bb,
          rotation: hb([Yb[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: bb,
          rotation: hb([Sb, 0, ab])
        },
        ArmRightMesh: {
          timeFraction: bb,
          rotation: hb([Sb, 0, -ab])
        }
      }
    }

    function WG(bb, ub, hb) {
      return XG(KG, bb, ub, hb, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function CG(bb) {
      return "number" === typeof bb ? [bb, bb] : bb
    }

    function dG(bb, ub, hb) {
      const {
        rise: Bb = 0,
        shift: Ob = 0,
        torso: Gb = 0,
        twist: Ub = 0,
        tilt: Lb = 0,
        nod: Yb = 0,
        cock: Sb = 0,
        arms: ab = 0,
        spread: Hb = 0
      } = ub, [wb, Zb] = CG(ab), [Xb, pb] = CG(Hb);
      return {
        TorsoNode: {
          timeFraction: bb,
          position: hb([0, Bb, Ob]),
          rotation: hb([Gb, Ub, Lb])
        },
        HeadMesh: {
          timeFraction: bb,
          rotation: hb([Yb, 0, Sb])
        },
        ArmLeftMesh: {
          timeFraction: bb,
          rotation: hb([wb, 0, Xb])
        },
        ArmRightMesh: {
          timeFraction: bb,
          rotation: hb([Zb, 0, -pb])
        }
      }
    }
    const rG = [1.0625, -1, 0];

    function jG(bb) {
      return "number" === typeof bb ? [bb, bb] : bb
    }

    function nG(bb, ub, hb) {
      const {
        drop: Bb = 0,
        shift: Ob = 0,
        torso: Gb = 0,
        tilt: Ub = 0,
        nod: Lb = 0,
        cock: Yb = 0,
        legs: Sb = [0, 0],
        arms: ab = 0,
        spread: Hb = 0
      } = ub, [wb, Zb] = jG(ab), [Xb, pb] = jG(Hb), ob = -Gb, Ab = -Ub, [lb, Kb, Wb] = function(bb, ub) {
        const [hb, Bb, Ob] = [-rG[0], rG[1], -rG[2]], Gb = hb * Math.cos(ub) - Bb * Math.sin(ub), Ub = hb * Math.sin(ub) + Bb * Math.cos(ub);
        return [Gb - hb, -(Ub * Math.cos(bb) - Ob * Math.sin(bb) - Bb), Ub * Math.sin(bb) + Ob * Math.cos(bb) - Ob]
      }(ob, Ab), Cb = hb([0, -Bb, Ob]);
      return {
        TorsoNode: {
          timeFraction: bb,
          position: hb([lb, Kb - Bb, Wb + Ob]),
          rotation: hb([ob, 0, Ab])
        },
        HeadMesh: {
          timeFraction: bb,
          rotation: hb([-Lb, 0, -Yb])
        },
        ArmLeftMesh: {
          timeFraction: bb,
          rotation: hb([-wb, 0, -Xb])
        },
        ArmRightMesh: {
          timeFraction: bb,
          rotation: hb([-Zb, 0, pb])
        },
        LegLeftMesh: {
          timeFraction: bb,
          position: Cb,
          rotation: hb([-Sb[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: bb,
          position: Cb,
          rotation: hb([-Sb[1], 0, 0])
        }
      }
    }
    var DG = hb(36787),
      xG = hb(38095),
      zG = hb(38250);

    function gG(bb, ub, hb) {
      var Bb, Ob;
      const Gb = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return bb + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - bb) * hb
        },
        [Ub, Lb] = null !== (Bb = bb.legs) && void 0 !== Bb ? Bb : [0, 0],
        [Yb, Sb] = null !== (Ob = ub.legs) && void 0 !== Ob ? Ob : [0, 0];
      return {
        drop: Gb(bb.drop, ub.drop),
        shift: Gb(bb.shift, ub.shift),
        torso: Gb(bb.torso, ub.torso),
        nod: Gb(bb.nod, ub.nod),
        tilt: Gb(bb.tilt, ub.tilt),
        legs: [Gb(Ub, Yb), Gb(Lb, Sb)],
        arms: Gb(bb.arms, ub.arms),
        spread: Gb(bb.spread, ub.spread)
      }
    }
    const iG = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      vG = WG(4400, !0, [
        [0, iG],
        [.16, {
          ...iG,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, iG],
        [.44, {
          ...iG,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, gG(iG, AG, .7)],
        [.66, gG(iG, AG, .78)],
        [.74, gG(iG, lG, .65)],
        [.86, {
          ...iG,
          drop: .14
        }],
        [1, iG]
      ], "catmull-rom-spline"),
      tG = {
        ...iG,
        drop: .14,
        torso: .3,
        spread: .4
      },
      JG = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      eG = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      NG = {
        caveGolem: vG,
        magmaGolem: WG(3600, !0, [
          [0, tG],
          [.12, {
            ...tG,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...tG,
            tilt: -.08
          }],
          [.4, {
            ...tG,
            tilt: .06,
            drop: .11
          }],
          [.52, gG(tG, AG, .9)],
          [.62, gG(tG, lG, .8)],
          [.7, gG(tG, lG, .45)],
          [.78, gG(tG, lG, .85)],
          [.9, {
            ...tG,
            drop: .17
          }],
          [1, tG]
        ], "catmull-rom-spline"),
        frostWraith: function(bb, ub, hb) {
          return XG(dG, bb, ub, hb, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, JG],
          [.14, {
            ...JG,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...JG,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...JG,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...JG,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...JG,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...JG,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...JG,
            rise: .16,
            tilt: -.04
          }],
          [1, JG]
        ], "catmull-rom-spline"),
        tikiTerror: function(bb, ub, hb) {
          return XG(nG, bb, ub, hb, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, eG],
          [.16, {
            ...eG,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, eG],
          [.44, {
            ...eG,
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
            ...eG,
            drop: .1
          }],
          [1, eG]
        ], "catmull-rom-spline")
      },
      sG = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      MG = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      mG = Object.fromEntries(Object.entries(NG).map((bb => {
        let [ub, hb] = bb;
        return [ub, (0, zG.b)((0, DG.f)(hb), ub)]
      })));

    function IG(bb) {
      const ub = function(bb) {
        var ub;
        const hb = (0, xG.e)(bb).poseRig;
        return null !== (ub = MG[bb]) && void 0 !== ub ? ub : void 0 === hb ? null : sG[hb]
      }(bb);
      return null === ub ? null : mG[ub]
    }

    function PG(bb) {
      return {
        "--difficulty-colour": bb
      }
    }
    const qG = (0, nb.lazy)((() => (0, ZG.e)(hb.e(193).then((() => hb(40969))), (bb => bb.MobPreview))));

    function EG(bb) {
      var ub, hb, Bb;
      let {
        picker: Ob,
        controller: Gb
      } = bb;
      const {
        t: Ub
      } = (0, xO.K)(), Lb = PO(), {
        page: Yb
      } = Ob;
      return (0, gO.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: Lb,
        onKeyDown: bb => {
          "ArrowLeft" === bb.key ? (bb.preventDefault(), bb.stopPropagation(), Gb.previous()) : "ArrowRight" === bb.key ? (bb.preventDefault(), bb.stopPropagation(), Gb.next()) : IO(bb)
        },
        style: PG(Yb.colour),
        children: [(0, gO.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, gO.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: Ob.dungeonName
          }), (0, gO.jsx)(mO.i, {
            padIgnore: !0,
            onClick: Gb.dismiss
          })]
        }), (0, gO.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, gO.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, gO.jsx)(mO.e, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !Ob.canPrevious,
              onClick: Gb.previous,
              children: (0, gO.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, gO.jsx)(wG.e, {
                  name: "angle-up"
                })
              })
            }), (0, gO.jsxs)("div", {
              className: WO()("SkyblockBossPickerBoss", {
                Locked: !Yb.unlocked
              }),
              children: [null !== Yb.bossMobType && (0, gO.jsx)(nb.Suspense, {
                fallback: (0, gO.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, gO.jsx)(qG, {
                  className: "SkyblockBossPickerModel",
                  mobType: Yb.bossMobType,
                  variation: Yb.bossMobVariation,
                  animation: null !== (ub = IG(Yb.bossMobType)) && void 0 !== ub ? ub : void 0
                })
              }), null === Yb.bossMobType && (0, gO.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, gO.jsx)(mO.e, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !Ob.canNext,
              onClick: Gb.next,
              children: (0, gO.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, gO.jsx)(wG.e, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, gO.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, gO.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [Yb.beaten && (0, gO.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), Yb.label]
            }), (0, gO.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (hb = Yb.bossName) && void 0 !== hb ? hb : "???"
            }), (0, gO.jsxs)("span", {
              className: WO()("SkyblockBossPickerRecord", {
                Locked: null !== Yb.lockedHint
              }),
              children: [null !== Yb.lockedHintHighlight && (0, gO.jsxs)(gO.Fragment, {
                children: [Yb.lockedHintHighlight.before, (0, gO.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: PG(Yb.lockedHintHighlight.colour),
                  children: [null !== Yb.lockedHintHighlight.icon && (0, gO.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, gO.jsx)(jO.d, {
                      itemName: Yb.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), Yb.lockedHintHighlight.name]
                }), Yb.lockedHintHighlight.after]
              }), null === Yb.lockedHintHighlight && (null !== (Bb = Yb.lockedHint) && void 0 !== Bb ? Bb : Yb.summary)]
            })]
          }), (0, gO.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: Ob.pages.map((bb => (0, gO.jsx)("span", {
              className: WO()("SkyblockBossPickerDot", {
                Current: bb.current,
                Locked: !bb.unlocked
              }),
              style: PG(bb.colour)
            }, bb.difficulty)))
          }), (0, gO.jsx)(mO.q, {
            className: "SkyblockBossPickerFight",
            disabled: !Yb.unlocked,
            onClick: Gb.enter,
            children: Ub("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function yG(bb) {
      let {
        dungeon: ub,
        select: hb
      } = bb;
      return (0, gO.jsxs)(mO.e, {
        className: WO()("SkyblockDungeonCard", {
          Selected: ub.selected
        }),
        onClick: () => {
          hb(ub.id)
        },
        children: [(0, gO.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, gO.jsx)("strong", {
            children: ub.name
          }), (0, gO.jsx)("span", {
            children: ub.beatenSummary
          })]
        }), (0, gO.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: ub.difficulties.map((bb => (0, gO.jsxs)("span", {
            className: WO()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: bb.beaten
            }),
            style: PG(bb.colour),
            title: bb.summary,
            children: [bb.beaten && (0, gO.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), bb.label]
          }, bb.difficulty)))
        })]
      })
    }

    function VG(bb) {
      let {
        controller: ub
      } = bb;
      const hb = (0, zO.k)(Zh, ub.getSnapshot()),
        {
          t: Bb
        } = (0, xO.K)(),
        Ob = PO();
      return hb.enabled ? (0, gO.jsxs)(MO.b, {
        show: hb.open,
        close: ub.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [hb.picker && (0, gO.jsx)(EG, {
          picker: hb.picker,
          controller: ub
        }), !hb.picker && (0, gO.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: Ob,
          onKeyDown: IO,
          children: [(0, gO.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, gO.jsxs)("div", {
              children: [(0, gO.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: Bb("skyblockGame:dungeons")
              }), (0, gO.jsx)("p", {
                children: Bb("skyblockGame:dungeonsIntro")
              })]
            }), (0, gO.jsx)(mO.i, {
              padIgnore: !0,
              onClick: ub.dismiss
            })]
          }), (0, gO.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, gO.jsx)("div", {
              className: "SkyblockDungeonList",
              children: hb.dungeons.map((bb => (0, gO.jsx)(yG, {
                dungeon: bb,
                select: ub.select
              }, bb.id)))
            }), hb.detail && (0, gO.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, gO.jsx)("h3", {
                children: hb.detail.name
              }), (0, gO.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: hb.detail.difficulties.map((bb => (0, gO.jsxs)("li", {
                  className: WO()("SkyblockDungeonRecord", {
                    Beaten: bb.beaten
                  }),
                  children: [(0, gO.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: PG(bb.colour),
                    children: [bb.beaten && (0, gO.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), bb.label]
                  }), (0, gO.jsx)("span", {
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

    function FG(bb) {
      let {
        collection: ub,
        select: hb
      } = bb;
      return (0, gO.jsxs)(mO.e, {
        className: WO()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: ub.selected,
          Locked: ub.locked
        }),
        ariaPressed: ub.selected,
        onClick: () => {
          hb(ub.id)
        },
        children: [(0, gO.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, gO.jsx)(jO.d, {
            itemName: ub.icon,
            amount: 0
          })
        }), (0, gO.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, gO.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, gO.jsx)("strong", {
              children: ub.name
            }), (0, gO.jsx)("span", {
              children: ub.tier
            })]
          }), (0, gO.jsx)(qO, {
            percent: ub.percent,
            label: `${ub.name}: ${ub.progress}`
          }), (0, gO.jsx)("span", {
            className: "SkyblockSkillXp",
            children: ub.progress
          })]
        })]
      })
    }

    function fG(bb) {
      let {
        collection: ub
      } = bb;
      const {
        t: hb
      } = (0, xO.K)();
      return (0, gO.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, gO.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, gO.jsx)(jO.d, {
            itemName: ub.icon,
            amount: 0
          })
        }), (0, gO.jsx)("h3", {
          children: ub.name
        }), (0, gO.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: ub.tier
        }), (0, gO.jsx)("p", {
          children: ub.locked ? hb("skyblockGame:collectionLocked") : ub.count
        }), null !== ub.nextReward && (0, gO.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, gO.jsx)("strong", {
            children: hb("skyblockGame:collectionNextReward")
          }), (0, gO.jsx)("span", {
            children: ub.nextReward
          })]
        }), (0, gO.jsx)(qO, {
          percent: ub.percent,
          label: ub.progress
        }), (0, gO.jsx)("p", {
          children: ub.progress
        })]
      })
    }

    function kG(bb) {
      let {
        controller: ub
      } = bb;
      const hb = (0, zO.k)(eh, ub.getSnapshot()),
        {
          t: Bb
        } = (0, xO.K)(),
        Ob = PO();
      return hb.enabled ? (0, gO.jsx)(MO.b, {
        show: hb.open,
        close: ub.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gO.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: Ob,
          onKeyDown: IO,
          children: [(0, gO.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, gO.jsxs)("div", {
              children: [(0, gO.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: Bb("skyblockGame:collections")
              }), (0, gO.jsxs)("p", {
                children: [Bb("skyblockGame:collectionsIntro"), " ", hb.tiersUnlocked]
              })]
            }), (0, gO.jsx)(mO.i, {
              padIgnore: !0,
              onClick: ub.dismiss
            })]
          }), (0, gO.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: hb.categories.map((bb => (0, gO.jsxs)(mO.e, {
              className: WO()("SkyblockCollectionCategory", {
                Selected: bb.selected
              }),
              ariaPressed: bb.selected,
              padTabSelected: bb.selected,
              onClick: () => {
                ub.selectCategory(bb.id)
              },
              children: [(0, gO.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, gO.jsx)(jO.d, {
                  itemName: bb.icon,
                  amount: 0
                })
              }), (0, gO.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, gO.jsx)("strong", {
                  children: bb.label
                }), (0, gO.jsx)("span", {
                  children: bb.tiers
                })]
              })]
            }, bb.id)))
          }), (0, gO.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, gO.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: hb.collections.map((bb => (0, gO.jsx)(FG, {
                collection: bb,
                select: ub.select
              }, bb.id)))
            }), hb.detail && (0, gO.jsx)(fG, {
              collection: hb.detail
            })]
          })]
        })
      }) : null
    }
    const TG = ["completed", "active", "available", "locked"],
      cG = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function QG(bb) {
      let {
        controller: ub
      } = bb;
      const hb = (0, zO.k)(fh, ub.getSnapshot()),
        {
          t: Bb
        } = (0, xO.K)(),
        Ob = PO();
      return hb.enabled ? (0, gO.jsx)(MO.b, {
        show: hb.open,
        close: ub.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gO.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: Ob,
          onKeyDown: IO,
          children: [(0, gO.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, gO.jsxs)("div", {
              children: [(0, gO.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: Bb("skyblockDevQuests:title")
              }), (0, gO.jsx)("p", {
                children: Bb("skyblockDevQuests:intro")
              })]
            }), (0, gO.jsx)(mO.i, {
              onClick: ub.dismiss
            })]
          }), (0, gO.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [TG.map((bb => (0, gO.jsx)("span", {
              className: WO()("SkyblockQuestGraphLegendState", bb),
              children: Bb(`skyblockDevQuests:state_${bb}`)
            }, bb))), cG.map((bb => (0, gO.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, gO.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, gO.jsx)("line", {
                  className: WO()("SkyblockQuestGraphEdge", bb),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), Bb(`skyblockDevQuests:edge_${bb}`)]
            }, bb)))]
          }), (0, gO.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, gO.jsxs)("div", {
              className: WO()("SkyblockQuestGraphCanvas", {
                Planning: hb.planning
              }),
              style: {
                width: hb.width,
                height: hb.height
              },
              children: [(0, gO.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: hb.width,
                height: hb.height,
                "aria-hidden": "true",
                children: [(0, gO.jsx)("defs", {
                  children: (0, gO.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, gO.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), hb.edges.map((bb => (0, gO.jsx)("path", {
                  className: WO()("SkyblockQuestGraphEdge", bb.kind, {
                    InPlan: bb.inPlan
                  }),
                  d: bb.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, bb.key)))]
              }), hb.nodes.map((bb => (0, gO.jsxs)("button", {
                type: "button",
                className: WO()("SkyblockQuestGraphNode", bb.state, {
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
                  ub.hover(bb.id)
                },
                onMouseLeave: () => {
                  ub.hover(null)
                },
                onFocus: () => {
                  ub.hover(bb.id)
                },
                onBlur: () => {
                  ub.hover(null)
                },
                onClick: () => {
                  ub.jump(bb.id)
                },
                children: [(0, gO.jsx)("strong", {
                  children: bb.name
                }), (0, gO.jsx)("span", {
                  children: bb.detail
                })]
              }, bb.id)))]
            })
          })]
        })
      }) : null
    }
    const RG = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      bU = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${LB}ms`,
        "--forge-duration": "2150ms"
      },
      uU = Array.from({
        length: 18
      }, ((bb, ub) => ({
        "--ember-left": `${(4+92*(.618034*ub%1)).toFixed(1)}%`,
        "--ember-size": 3 + ub % 3 * 2 + "px",
        "--ember-drift": 14 * (ub % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*ub%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*ub%8).toFixed(2)}s`
      })));

    function hU(bb) {
      if (bb.style.removeProperty("--part-size"), null === bb.parentElement || "wrap" === getComputedStyle(bb.parentElement).flexWrap) return;
      const ub = [...bb.children],
        hb = getComputedStyle(bb),
        Bb = parseFloat(hb.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        Ob = (bb.clientHeight - parseFloat(hb.rowGap) * (ub.length - 1)) / ub.length,
        Gb = ub.map((bb => {
          const ub = getComputedStyle(bb),
            hb = bb.querySelector("h3"),
            Gb = bb.querySelector(".SkyblockForgeParts");
          if (null === hb || null === Gb) return Bb;
          const Ub = Ob - parseFloat(ub.paddingTop) - parseFloat(ub.paddingBottom) - hb.offsetHeight - parseFloat(getComputedStyle(hb).marginBottom),
            Lb = parseFloat(getComputedStyle(Gb).columnGap),
            Yb = Gb.children.length;
          let Sb = 0;
          for (let Bb = 1; Bb <= Yb; Bb++) {
            const bb = Math.ceil(Yb / Bb);
            Sb = Math.max(Sb, Math.min((Gb.clientWidth - Lb * (Bb - 1)) / Bb, (Ub - Lb * (bb - 1)) / bb))
          }
          return Sb
        }));
      bb.style.setProperty("--part-size", `${Math.floor(Math.max(Bb,Math.min(...Gb)))}px`)
    }

    function BU(bb) {
      var ub, hb, Bb, Gb, Ub;
      let {
        controller: Lb
      } = bb;
      const Yb = (0, zO.k)(XB, Lb.getSnapshot()),
        {
          t: Sb
        } = (0, xO.K)(),
        ab = PO(),
        Hb = function() {
          const bb = (0, nb.useRef)(null),
            ub = (0, nb.useRef)(null);
          return (0, nb.useLayoutEffect)((() => {
            null !== bb.current && hU(bb.current)
          })), (0, nb.useCallback)((hb => {
            var Bb;
            null === (Bb = ub.current) || void 0 === Bb || Bb.disconnect(), ub.current = null, bb.current = hb, null !== hb && (ub.current = new ResizeObserver((() => {
              hU(hb)
            })), ub.current.observe(hb))
          }), [])
        }(),
        wb = function(bb) {
          const ub = (0, nb.useRef)(null);
          return (0, nb.useLayoutEffect)((() => {
            const bb = ub.current;
            if (null !== bb) {
              bb.style.removeProperty("font-size");
              for (let ub = 1.7; ub > 1.1 && bb.scrollWidth > bb.clientWidth; ub -= .1) bb.style.fontSize = ub - .1 + "rem"
            }
          }), [bb]), (0, nb.useCallback)((bb => {
            ub.current = bb
          }), [])
        }(null === (ub = Yb.preview) || void 0 === ub ? void 0 : ub.name),
        Zb = (0, nb.useRef)(null),
        Xb = (0, nb.useRef)({}),
        pb = Yb.forging,
        ob = null !== (hb = null === pb || void 0 === pb ? void 0 : pb.preview.tier) && void 0 !== hb ? hb : 0,
        Ab = null !== (Bb = null === pb || void 0 === pb ? void 0 : pb.preview.named) && void 0 !== Bb && Bb,
        lb = (0, nb.useMemo)((() => {
          return null === pb ? null : {
            flames: (bb = ob, ub = Ab, Array.from({
              length: 26 + 6 * bb + (ub ? 20 : 0)
            }, ((bb, ub) => {
              const hb = ub < 6,
                Bb = Math.random() * Math.PI * 2,
                Ob = hb ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                Gb = Math.cos(Bb) * Ob,
                Ub = Math.sin(Bb) * Ob - 2 - 3 * Math.random(),
                Lb = Math.random(),
                [Yb, Sb, ab] = hb ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : Lb < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : Lb < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [Lb < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": Yb,
                "--x0": `${(.15*Gb).toFixed(2)}rem`,
                "--y0": `${(.15*Ub).toFixed(2)}rem`,
                "--x": `${Gb.toFixed(2)}rem`,
                "--y": `${Ub.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${Sb.toFixed(2)}rem`,
                "--duration": `${Math.round(ab)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: aB(ob, Ab)
          };
          var bb, ub
        }), [null === pb || void 0 === pb ? void 0 : pb.id]);
      if (!Yb.enabled) return null;
      const Kb = Yb.preview,
        Wb = Yb.arriving,
        Cb = null !== Wb && !Wb.sameSword,
        db = null !== Kb && (0, gO.jsx)(jO.d, {
          itemName: Kb.baseSword,
          amount: 0,
          enchantmentTier: Kb.enchantmentTier
        });
      return (0, gO.jsx)(MO.b, {
        show: Yb.open,
        close: Lb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gO.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: ab,
          onKeyDown: IO,
          children: [(0, gO.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: uU.map(((bb, ub) => (0, gO.jsx)("span", {
              style: bb
            }, ub)))
          }), (0, gO.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, gO.jsxs)("div", {
              children: [(0, gO.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: Sb("skyblockGame:forgeTitle")
              }), (0, gO.jsx)("p", {
                children: Sb("skyblockGame:forgeIntro")
              })]
            }), (0, gO.jsx)(mO.i, {
              onClick: Lb.dismiss
            })]
          }), (0, gO.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, gO.jsx)("div", {
              ref: Hb,
              className: WO()("SkyblockForgeSlots", {
                Locked: null !== pb
              }),
              children: Yb.slots.map((bb => (0, gO.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, gO.jsx)("h3", {
                  children: bb.label
                }), (0, gO.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: bb.parts.map((ub => (0, gO.jsx)("button", {
                    type: "button",
                    className: WO()("SkyblockForgePart", {
                      Selected: ub.selected,
                      Missing: ub.placeholder
                    }),
                    disabled: ub.placeholder,
                    title: ub.placeholder ? Sb("skyblockGame:forgePickParts") : ub.itemName,
                    "aria-pressed": ub.selected,
                    onClick: () => {
                      Lb.select(bb.kind, ub.material)
                    },
                    children: (0, gO.jsx)(jO.d, {
                      itemName: ub.itemName,
                      amount: ub.owned
                    })
                  }, ub.material)))
                })]
              }, bb.kind)))
            }), (0, gO.jsxs)("div", {
              className: WO()("SkyblockForgeAnvil", {
                Named: null === Kb || void 0 === Kb ? void 0 : Kb.named
              }),
              style: {
                "--tier": null === Kb ? "transparent" : Ob.rb[Kb.enchantmentTier]
              },
              children: [(0, gO.jsxs)("div", {
                className: WO()("SkyblockForgeAltar", {
                  Forging: null !== pb
                }),
                style: null === pb ? void 0 : bU,
                children: [(0, gO.jsxs)("div", {
                  className: WO()("SkyblockForgeMount", {
                    Arrive: null !== Wb
                  }),
                  children: [null === Kb && (0, gO.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, gO.jsx)(jO.d, {
                      itemName: Yb.unformedSword,
                      amount: 0
                    })
                  }), null !== Kb && (0, gO.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== Kb && null === pb && (0, gO.jsx)("div", {
                    ref: Zb,
                    className: "SkyblockForgeFloat",
                    children: (0, gO.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: db
                    })
                  }), null !== Kb && (0, gO.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: SB.map(((bb, ub) => (0, gO.jsx)("span", {
                      className: WO()({
                        Rune: "" !== bb.rune
                      }),
                      style: bb.style,
                      children: bb.rune
                    }, ub)))
                  }), null !== pb && null !== lb && (0, gO.jsxs)(gO.Fragment, {
                    children: [(0, gO.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, gO.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: lb.flames.map(((bb, ub) => (0, gO.jsx)("span", {
                        style: bb
                      }, ub)))
                    }), (0, gO.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: Xb.current,
                      children: (0, gO.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: db
                      })
                    }), (0, gO.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, gO.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (ob >= 4 || Ab) && (0, gO.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, gO.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: lb.sparks.map(((bb, ub) => (0, gO.jsx)("span", {
                        style: bb
                      }, ub)))
                    }), (0, gO.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, gO.jsx)("p", {
                  className: WO()("SkyblockForgeStatus", null === (Gb = Yb.status) || void 0 === Gb ? void 0 : Gb.tone),
                  children: null === (Ub = Yb.status) || void 0 === Ub ? void 0 : Ub.text
                })]
              }), null === Kb && (0, gO.jsx)("p", {
                className: WO()("SkyblockForgeName Waiting", {
                  ArriveText: Cb
                }),
                children: Sb(Yb.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== Kb && (0, gO.jsx)("h3", {
                ref: wb,
                className: WO()("SkyblockForgeName", {
                  ArriveText: Cb
                }),
                title: Kb.name,
                children: Kb.name
              }), (null === Kb || void 0 === Kb ? void 0 : Kb.named) && (0, gO.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: Sb("skyblockGame:forgeSecret")
              }), (0, gO.jsxs)(mO.q, {
                className: "SkyblockForgeButton",
                disabled: !Yb.canForge,
                title: null === Kb ? void 0 : Sb("skyblockGame:forgeCoalOwned", {
                  owned: String(Yb.coalOwned)
                }),
                onClick: () => {
                  Xb.current = function(bb) {
                    const ub = null === bb ? "none" : getComputedStyle(bb).transform,
                      hb = new DOMMatrixReadOnly("none" === ub ? void 0 : ub);
                    return {
                      "--settle-y": `${hb.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(hb.b,hb.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(Zb.current), ZB(), Lb.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [Sb("skyblockGame:forgeButton"), null !== Kb && (0, gO.jsxs)("span", {
                  className: WO()("SkyblockForgeCost", {
                    Short: Kb.coalShort
                  }),
                  children: [(0, gO.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, gO.jsx)(jO.d, {
                      itemName: Rh.e,
                      amount: 0
                    })
                  }), Kb.coalCost]
                })]
              })]
            }), (0, gO.jsxs)("div", {
              className: WO()("SkyblockForgeDetails", {
                Named: null === Kb || void 0 === Kb ? void 0 : Kb.named
              }),
              children: [(0, gO.jsx)("p", {
                className: WO()("SkyblockForgeLore", {
                  ArriveText: Cb
                }),
                title: null === Kb || void 0 === Kb ? void 0 : Kb.lore,
                children: null === Kb || void 0 === Kb ? void 0 : Kb.lore
              }), (0, gO.jsxs)("dl", {
                className: WO()("SkyblockForgeStats", {
                  ArriveText: Cb
                }),
                children: [null === Kb && RG.map((bb => (0, gO.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, gO.jsx)("dt", {
                    children: Sb(bb)
                  }), (0, gO.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, bb))), null === Kb || void 0 === Kb ? void 0 : Kb.stats.map((bb => (0, gO.jsxs)("div", {
                  className: WO()("SkyblockForgeStat", {
                    Better: bb.better
                  }),
                  children: [(0, gO.jsx)("dt", {
                    children: bb.label
                  }), (0, gO.jsx)("dd", {
                    children: bb.value
                  })]
                }, bb.label)))]
              }), (0, gO.jsx)("ul", {
                className: WO()("SkyblockForgeEffects", {
                  ArriveText: Cb
                }),
                children: null === Kb || void 0 === Kb ? void 0 : Kb.effects.map((bb => (0, gO.jsx)("li", {
                  children: bb
                }, bb)))
              })]
            })]
          })]
        })
      })
    }
    const OU = "Doom Rivet",
      GU = "Doom Crest";

    function UU(bb) {
      let {
        itemName: ub,
        amount: hb,
        owned: Bb
      } = bb;
      return (0, gO.jsxs)("span", {
        className: WO()("SkyblockSmugglerPrice", {
          Short: hb > Bb
        }),
        children: [(0, gO.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, gO.jsx)(jO.d, {
            itemName: ub,
            amount: 0
          })
        }), (0, gO.jsx)("span", {
          children: hb
        })]
      })
    }

    function LU(bb) {
      return bb.justBought ? "skyblockGame:smugglerJustBought" : bb.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function YU(bb) {
      let {
        deal: ub,
        view: hb,
        buy: Bb
      } = bb;
      const {
        t: Ob
      } = (0, xO.K)();
      return (0, gO.jsxs)("div", {
        className: WO()("SkyblockSmugglerPocket", {
          Bought: ub.justBought,
          Unaffordable: !ub.affordable,
          SoldOut: ub.soldOut && !ub.justBought
        }),
        children: [(0, gO.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, gO.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, gO.jsx)(jO.d, {
            itemName: ub.itemName,
            amount: 0,
            enchantmentTier: ub.enchantmentTier
          }), ub.amount > 1 && (0, gO.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: Ob("skyblockGame:smugglerAmount", {
              amount: ub.amount
            })
          })]
        }), (0, gO.jsx)("h3", {
          children: ub.displayName
        }), (0, gO.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, gO.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [ub.rivets > 0 && (0, gO.jsx)(UU, {
              itemName: OU,
              amount: ub.rivets,
              owned: hb.rivetsOwned
            }), ub.crests > 0 && (0, gO.jsx)(UU, {
              itemName: GU,
              amount: ub.crests,
              owned: hb.crestsOwned
            })]
          }), (0, gO.jsx)(mO.e, {
            className: "SkyblockSmugglerBuy",
            disabled: ub.soldOut || !ub.affordable || hb.pending,
            onClick: () => {
              Bb(ub.slot)
            },
            children: Ob(LU(ub))
          })]
        })]
      }, ub.justBought ? hb.boughtCount : 0)
    }

    function SU(bb) {
      let {
        controller: ub
      } = bb;
      const hb = (0, zO.k)(AB, ub.getSnapshot()),
        {
          t: Bb
        } = (0, xO.K)(),
        Ob = PO();
      return hb.enabled ? (0, gO.jsx)(MO.b, {
        show: hb.open,
        close: ub.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gO.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: Ob,
          onKeyDown: IO,
          children: [(0, gO.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, gO.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, gO.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, gO.jsxs)("div", {
              children: [(0, gO.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: Bb("skyblockGame:smugglerTitle")
              }), (0, gO.jsx)("p", {
                children: Bb("skyblockGame:smugglerIntro")
              })]
            }), (0, gO.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, gO.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, gO.jsx)(UU, {
                  itemName: OU,
                  amount: hb.rivetsOwned,
                  owned: hb.rivetsOwned
                }), (0, gO.jsx)(UU, {
                  itemName: GU,
                  amount: hb.crestsOwned,
                  owned: hb.crestsOwned
                })]
              }), (0, gO.jsx)(mO.i, {
                onClick: ub.dismiss
              })]
            })]
          }), (0, gO.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: hb.deals.map((bb => (0, gO.jsx)(YU, {
              deal: bb,
              view: hb,
              buy: ub.buy
            }, bb.slot)))
          }), (0, gO.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, gO.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: hb.rotatesText
            }), null !== hb.status && (0, gO.jsx)("span", {
              className: WO()("SkyblockSmugglerStatus", hb.status.tone),
              children: hb.status.text
            })]
          })]
        })
      }) : null
    }

    function aU(bb) {
      let {
        phase: ub,
        className: hb
      } = bb;
      return (0, gO.jsx)("span", {
        className: WO()("SkyblockMoon", `Moon-${ub}`, hb),
        "aria-hidden": "true"
      })
    }

    function HU(bb) {
      let {
        controller: ub
      } = bb;
      const hb = (0, zO.k)(WB, ub.getSnapshot()),
        {
          t: Bb
        } = (0, xO.K)();
      return hb.enabled ? (0, gO.jsx)(dO.e, {
        placement: "statBars",
        children: (0, gO.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: WO()("SkyblockPassageChip", hb.open && "Open"),
          "aria-label": Bb("skyblockGame:passageChipLabel", {
            phase: hb.phaseName
          }),
          title: Bb("skyblockGame:passageChipLabel", {
            phase: hb.phaseName
          }),
          onMouseDown: bb => {
            bb.preventDefault()
          },
          onClick: ub.toggle,
          children: (0, gO.jsx)(aU, {
            phase: hb.phase
          }, hb.phase)
        })
      }) : null
    }

    function wU(bb) {
      let {
        fish: ub
      } = bb;
      return (0, gO.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, gO.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, gO.jsx)(jO.d, {
            itemName: ub.itemName,
            amount: 0
          })
        }), (0, gO.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, gO.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: ub.displayName
          }), (0, gO.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: ub.where
          })]
        })]
      })
    }

    function ZU(bb) {
      let {
        controller: ub
      } = bb;
      const hb = (0, zO.k)(WB, ub.getSnapshot()),
        {
          t: Bb
        } = (0, xO.K)(),
        Ob = PO();
      return hb.enabled ? (0, gO.jsx)(MO.b, {
        show: hb.open,
        close: ub.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gO.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: Ob,
          onKeyDown: IO,
          children: [(0, gO.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, gO.jsx)(aU, {
              phase: hb.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, gO.jsxs)("div", {
              children: [(0, gO.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: Bb("skyblockGame:passageTitle")
              }), (0, gO.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: hb.phaseName
              })]
            }), (0, gO.jsx)(mO.i, {
              padIgnore: !0,
              onClick: ub.dismiss
            })]
          }), (0, gO.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: Bb("skyblockGame:passageIntro")
          }), (0, gO.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, gO.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, gO.jsx)("h3", {
                children: Bb("skyblockGame:passageVisiting")
              }), (0, gO.jsx)("ul", {
                className: "SkyblockPassageList",
                children: hb.visitors.map((bb => (0, gO.jsx)(wU, {
                  fish: bb
                }, bb.itemName)))
              })]
            }), (0, gO.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== hb.resting && (0, gO.jsxs)(gO.Fragment, {
                children: [(0, gO.jsx)("h3", {
                  children: Bb("skyblockGame:passageResting")
                }), (0, gO.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, gO.jsx)(wU, {
                    fish: hb.resting
                  })
                })]
              }), (0, gO.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, gO.jsx)(aU, {
                  phase: hb.nextPhase
                }), (0, gO.jsx)("span", {
                  children: hb.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function XU() {
      return (0, gO.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((bb => (0, gO.jsx)("i", {
          style: {
            "--sparkle-index": bb
          }
        }, bb)))
      })
    }

    function pU(bb) {
      var ub;
      let {
        charm: hb,
        view: Bb,
        controller: Ob
      } = bb;
      const {
        t: Gb
      } = (0, xO.K)(), Ub = Bb.shop, Lb = (null === (ub = Bb.sparkle) || void 0 === ub ? void 0 : ub.id) === hb.id;
      return (0, gO.jsxs)("li", {
        className: WO()("SkyblockLampLightCharm", hb.owned && "Owned", hb.socketed && "Socketed"),
        children: [Lb && (0, gO.jsx)(XU, {}, Bb.sparkle.count), (0, gO.jsx)("h4", {
          children: hb.name
        }), (0, gO.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: hb.effect
        }), (0, gO.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: hb.lines.map((bb => (0, gO.jsxs)("li", {
            className: WO()("SkyblockLampLightOddsLine", "better" === bb.tone ? "Better" : "worse" === bb.tone ? "Worse" : "Same"),
            children: [(0, gO.jsx)("span", {
              className: "Before",
              children: bb.before
            }), (0, gO.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, gO.jsx)("span", {
              className: "After",
              children: bb.after
            })]
          }, bb.label)))
        }), (0, gO.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: hb.owned ? hb.socketed ? (0, gO.jsxs)(gO.Fragment, {
            children: [(0, gO.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: Gb("skyblockGame:lampLightSocketed")
            }), (0, gO.jsx)(mO.O, {
              disabled: !Bb.canCommand,
              ariaLabel: Gb("skyblockGame:lampLightRemoveLabel", {
                charm: hb.name
              }),
              onClick: () => {
                Ob.socket(null)
              },
              children: Gb("skyblockGame:lampLightRemove")
            })]
          }) : (0, gO.jsx)(mO.e, {
            disabled: !Bb.canCommand || !Ub.heldRod,
            ariaLabel: Gb("skyblockGame:lampLightSocketLabel", {
              charm: hb.name
            }),
            onClick: () => {
              Ob.socket(hb.id)
            },
            children: Gb("skyblockGame:lampLightSocket")
          }) : (0, gO.jsx)(mO.e, {
            disabled: !Bb.canCommand || !hb.affordable,
            ariaLabel: Gb("skyblockGame:lampLightBuyLabel", {
              item: hb.name,
              cost: hb.cost
            }),
            onClick: () => {
              Ob.buy(hb.id)
            },
            children: hb.cost
          })
        })]
      })
    }

    function oU(bb) {
      var ub;
      let {
        tint: hb,
        view: Bb,
        controller: Ob
      } = bb;
      const {
        t: Gb
      } = (0, xO.K)();
      return (0, gO.jsxs)("li", {
        className: WO()("SkyblockLampLightTint", hb.wearing && "Wearing"),
        style: {
          "--tint-colour": hb.colour
        },
        children: [(null === (ub = Bb.sparkle) || void 0 === ub ? void 0 : ub.id) === hb.id && (0, gO.jsx)(XU, {}, Bb.sparkle.count), (0, gO.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, gO.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: hb.name
        }), hb.wearing ? (0, gO.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: Gb("skyblockGame:lampLightWearing")
        }) : (0, gO.jsx)(mO.e, {
          disabled: !Bb.canCommand || !hb.owned && !hb.affordable,
          ariaLabel: hb.owned ? Gb("skyblockGame:lampLightWearLabel", {
            tint: hb.name
          }) : Gb("skyblockGame:lampLightBuyLabel", {
            item: hb.name,
            cost: hb.cost
          }),
          onClick: () => {
            hb.owned ? Ob.wearTint(hb.id) : Ob.buy(hb.id)
          },
          children: hb.owned ? Gb("skyblockGame:lampLightWear") : hb.cost
        })]
      })
    }

    function AU(bb) {
      let {
        controller: ub
      } = bb;
      const hb = (0, zO.k)(eB, ub.getSnapshot()),
        {
          t: Bb
        } = (0, xO.K)(),
        Ob = hb.shop;
      return (0, gO.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, gO.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, gO.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: hb.balance
          }), (0, gO.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": hb.releasing,
            className: WO()("SkyblockLampLightSwitch", hb.releasing && "On"),
            disabled: hb.releasing ? "ready" !== hb.status : !hb.canCommand,
            onClick: () => {
              ub.setRelease(!hb.releasing)
            },
            children: [(0, gO.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, gO.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), Bb("skyblockGame:lampLightRelease")]
          }), (0, gO.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: Bb("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== hb.notice && (0, gO.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: hb.notice
        }), null !== Ob && (0, gO.jsxs)(gO.Fragment, {
          children: [(0, gO.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, gO.jsx)("h3", {
              children: Bb("skyblockGame:lampLightCharms")
            }), (0, gO.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: Ob.oddsFor
            }), (0, gO.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((bb => (0, gO.jsx)("button", {
                type: "button",
                "aria-pressed": hb.situation === bb,
                className: WO()("SkyblockLampLightSituation", hb.situation === bb && "Selected"),
                onClick: () => {
                  ub.setSituation(bb)
                },
                children: Bb("open" === bb ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, bb)))
            })]
          }), !Ob.heldRod && (0, gO.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: Bb("skyblockGame:lampLightHoldRod")
          }), (0, gO.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: Ob.charms.map((bb => (0, gO.jsx)(pU, {
              charm: bb,
              view: hb,
              controller: ub
            }, bb.id)))
          }), (0, gO.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, gO.jsx)("h3", {
              children: Bb("skyblockGame:lampLightTints")
            })
          }), (0, gO.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, gO.jsxs)("li", {
              className: WO()("SkyblockLampLightTint", "Islands", Ob.wearingIslandColours && "Wearing"),
              children: [(0, gO.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, gO.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: Bb("skyblockGame:lampLightIslandColours")
              }), Ob.wearingIslandColours ? (0, gO.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: Bb("skyblockGame:lampLightWearing")
              }) : (0, gO.jsx)(mO.e, {
                disabled: !hb.canCommand,
                ariaLabel: Bb("skyblockGame:lampLightWearLabel", {
                  tint: Bb("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  ub.wearTint(null)
                },
                children: Bb("skyblockGame:lampLightWear")
              })]
            }), Ob.tints.map((bb => (0, gO.jsx)(oU, {
              tint: bb,
              view: hb,
              controller: ub
            }, bb.id)))]
          })]
        })]
      })
    }

    function lU(bb) {
      let {
        controller: ub
      } = bb;
      const hb = (0, zO.k)(eB, ub.getSnapshot()),
        {
          t: Bb
        } = (0, xO.K)();
      return hb.releasing ? (0, gO.jsx)(dO.e, {
        children: (0, gO.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            ub.setRelease(!1)
          },
          children: [(0, gO.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, gO.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [Bb("skyblockGame:lampLightReleasing"), " \xb7 ", hb.balance]
          }), (0, gO.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: Bb("skyblockGame:lampLightKeepCatches")
          }), null !== hb.gained && (0, gO.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: hb.gained.text
          }, hb.gained.count)]
        })
      }) : null
    }

    function KU(bb) {
      let {
        island: ub,
        view: hb,
        aim: Bb
      } = bb;
      const {
        t: Ob
      } = (0, xO.K)(), Gb = ub.featuredFish;
      return (0, gO.jsxs)("li", {
        className: WO()("SkyblockKeepersChairIsland", `Island-${ub.id}`, ub.favoured && "Aimed", !ub.relit && "Dark"),
        children: [(0, gO.jsx)("h3", {
          children: ub.name
        }), ub.relit && null !== Gb ? (0, gO.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, gO.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: Ob("skyblockGame:keepersChairTideNotice")
          }), (0, gO.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, gO.jsx)(jO.d, {
              itemName: Gb.itemName,
              amount: 0
            })
          }), (0, gO.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: Gb.displayName
          })]
        }) : (0, gO.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, gO.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: Ob("skyblockGame:keepersChairDark")
          })
        }), ub.relit && (ub.favoured ? (0, gO.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: Ob("skyblockGame:keepersChairAimed")
        }) : (0, gO.jsx)(mO.e, {
          className: "SkyblockKeepersChairAim",
          disabled: !hb.canAim,
          ariaLabel: Ob("skyblockGame:keepersChairAimLabel", {
            island: ub.name
          }),
          onClick: () => {
            Bb(ub.id)
          },
          children: Ob("skyblockGame:keepersChairAim")
        }))]
      }, ub.favoured ? hb.aimedCount : 0)
    }

    function WU(bb) {
      let {
        controller: ub,
        lampLight: hb
      } = bb;
      const Bb = (0, zO.k)(DB, ub.getSnapshot()),
        Ob = (0, zO.k)(eB, hb.getSnapshot()),
        [Gb, Ub] = (0, nb.useState)("lamp"),
        {
          t: Lb
        } = (0, xO.K)(),
        Yb = PO();
      if (!Bb.enabled) return null;
      const Sb = "light" === Gb && Ob.enabled;
      return (0, gO.jsx)(MO.b, {
        show: Bb.open,
        close: ub.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gO.jsxs)("section", {
          className: WO()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", Sb && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: Yb,
          onKeyDown: IO,
          children: [(0, gO.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, gO.jsxs)("div", {
              children: [(0, gO.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: Lb("skyblockGame:keepersChairTitle")
              }), (0, gO.jsx)("p", {
                children: Lb(Sb ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, gO.jsx)(mO.i, {
              padIgnore: !0,
              ariaLabel: Lb("skyblockGame:keepersChairClose"),
              onClick: ub.dismiss
            })]
          }), Ob.enabled && (0, gO.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((bb => (0, gO.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === bb === Sb,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === bb === Sb ? "true" : void 0,
              className: WO()("SkyblockKeepersChairTab", "light" === bb === Sb && "Selected"),
              onClick: () => {
                Ub(bb)
              },
              children: [Lb("lamp" === bb ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === bb && (0, gO.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: Ob.balance
              })]
            }, bb)))
          }), Sb ? (0, gO.jsx)(AU, {
            controller: hb
          }) : (0, gO.jsx)(CU, {
            view: Bb,
            controller: ub
          })]
        })
      })
    }

    function CU(bb) {
      let {
        view: ub,
        controller: hb
      } = bb;
      const {
        t: Bb
      } = (0, xO.K)();
      return (0, gO.jsxs)(gO.Fragment, {
        children: [(0, gO.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: ub.islands.map((bb => (0, gO.jsx)(KU, {
            island: bb,
            view: ub,
            aim: hb.aim
          }, bb.id)))
        }), null !== ub.almanac && (0, gO.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, gO.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: Bb("skyblockGame:passageTitle")
          }), (0, gO.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, gO.jsx)(aU, {
              phase: ub.almanac.phase
            }), ub.almanac.phaseName]
          }), (0, gO.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, gO.jsx)(aU, {
              phase: ub.almanac.nextPhase
            }), ub.almanac.next]
          })]
        }), (0, gO.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, gO.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: Bb("skyblockGame:keepersChairFavour")
          }), ub.aimed && (0, gO.jsx)(mO.O, {
            className: "SkyblockKeepersChairRest",
            disabled: !ub.canAim,
            onClick: () => {
              hb.aim(null)
            },
            children: Bb("skyblockGame:keepersChairRest")
          })]
        }), null !== ub.status && (0, gO.jsx)("p", {
          className: WO()("SkyblockKeepersChairStatus", "refused" === ub.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: ub.status.text
        })]
      })
    }

    function dU(bb) {
      let {
        controller: ub
      } = bb;
      const {
        t: hb
      } = (0, xO.K)(), Bb = (0, zO.k)(zB, ub.getSnapshot());
      if (!Bb.enabled) return null;
      const Ob = Bb.freshCount > 0 ? hb("skyblockGame:reachLogOpenNews", {
        count: Bb.freshCount
      }) : hb("skyblockGame:reachLogOpen");
      return (0, gO.jsx)(dO.e, {
        placement: "statBars",
        children: (0, gO.jsxs)("button", {
          type: "button",
          className: WO()("SkyblockReachLogButton", Bb.freshCount > 0 && "HasNews", Bb.pending && "Pending"),
          "aria-label": Ob,
          title: Ob,
          onClick: ub.ask,
          children: [Bb.news && (0, gO.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${Bb.newsToken}`), (0, gO.jsx)("span", {
            className: WO()("SkyblockReachLogIcon", Bb.news && "Jump"),
            "aria-hidden": "true",
            children: (0, gO.jsx)(jO.d, {
              itemName: iB,
              amount: 0
            })
          }, `icon:${Bb.newsToken}`), Bb.freshCount > 0 && (0, gO.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: Bb.freshCount
          })]
        })
      })
    }

    function rU(bb) {
      let {
        gift: ub
      } = bb;
      return (0, gO.jsx)("li", {
        className: WO()("SkyblockRegularsGift", ub.given && "Given"),
        children: ub.text
      })
    }

    function jU(bb) {
      let {
        regular: ub
      } = bb;
      const {
        t: hb
      } = (0, xO.K)();
      return (0, gO.jsxs)("li", {
        className: WO()("SkyblockRegularsCard", ub.tagged ? "Tagged" : "Untagged", ub.resting && "Resting"),
        children: [(0, gO.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, gO.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: ub.fishName,
            children: (0, gO.jsx)(jO.d, {
              itemName: ub.itemName,
              amount: 0
            })
          }), (0, gO.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, gO.jsx)("h3", {
              children: ub.name
            }), (0, gO.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: ub.fishName
            })]
          })]
        }), (0, gO.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: ub.line
        }), (0, gO.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, gO.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: ub.size
          }), ub.tagged && (0, gO.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: ub.resting ? hb("skyblockGame:regularsResting") : ub.meetings
          })]
        }), (0, gO.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: ub.chance
        }), (0, gO.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: ub.gifts.map((bb => (0, gO.jsx)(rU, {
            gift: bb
          }, bb.text)))
        }), ub.history.length > 0 && (0, gO.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: ub.history.map(((bb, ub) => (0, gO.jsx)("li", {
            children: bb
          }, ub)))
        })]
      })
    }

    function nU(bb) {
      let {
        controller: ub,
        island: hb
      } = bb;
      const {
        t: Bb
      } = (0, xO.K)(), Ob = (0, zO.k)(bO, ub.getSnapshot()), Gb = Ob.islands.find((bb => bb.id === hb));
      if (!Ob.enabled || void 0 === Gb) return null;
      const Ub = Bb("skyblockGame:regularsOpen");
      return (0, gO.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": Ub,
        title: Ub,
        onClick: () => {
          ub.openIsland(hb)
        },
        children: [(0, gO.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: Bb("skyblockGame:regularsTitle")
        }), Gb.regulars.map((bb => (0, gO.jsx)("span", {
          className: WO()("SkyblockRegularsStripIcon", bb.tagged && "Tagged"),
          title: bb.name,
          children: (0, gO.jsx)(jO.d, {
            itemName: bb.itemName,
            amount: 0
          })
        }, bb.id)))]
      })
    }

    function DU(bb) {
      var ub;
      let {
        controller: hb
      } = bb;
      const Bb = (0, zO.k)(bO, hb.getSnapshot()),
        {
          t: Ob
        } = (0, xO.K)(),
        Gb = PO();
      if (!Bb.enabled) return null;
      const Ub = null !== (ub = Bb.islands.find((bb => bb.id === Bb.selected))) && void 0 !== ub ? ub : null;
      return (0, gO.jsx)(MO.b, {
        show: Bb.open,
        close: hb.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gO.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: Gb,
          onKeyDown: IO,
          children: [(0, gO.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, gO.jsxs)("div", {
              children: [(0, gO.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: Ob("skyblockGame:regularsTitle")
              }), (0, gO.jsx)("p", {
                children: Ob("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, gO.jsx)(mO.i, {
              padIgnore: !0,
              onClick: hb.dismiss
            })]
          }), (0, gO.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: Bb.islands.map((bb => {
              const ub = bb.id === Bb.selected;
              return (0, gO.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": ub,
                "data-pad-tab": !0,
                "data-pad-selected": ub ? "true" : void 0,
                className: WO()("SkyblockReachLogTab", `Island-${bb.id}`, ub && "Selected", bb.charm.given && "GoldPage"),
                onClick: () => {
                  hb.selectIsland(bb.id)
                },
                children: (0, gO.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: bb.name
                })
              }, bb.id)
            }))
          }), (0, gO.jsxs)("div", {
            className: WO()("SkyblockRegularsPage", null !== Ub && `Island-${Ub.id}`),
            role: "tabpanel",
            children: [(0, gO.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: Ob("skyblockGame:regularsHow")
            }), null !== Ub && (0, gO.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: Ub.regulars.map((bb => (0, gO.jsx)(jU, {
                regular: bb
              }, bb.id)))
            })]
          }), null !== Ub && (0, gO.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, gO.jsx)("span", {
              className: WO()("SkyblockRegularsCharm", Ub.charm.given && "Given"),
              children: Ub.charm.text
            })
          })]
        })
      })
    }
    const xU = [{
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
      zU = Array.from({
        length: 6
      }, ((bb, ub) => ({
        "--x": `${(88*(.618034*ub%1)).toFixed(1)}%`,
        "--y": `${(10+37*ub%70).toFixed(1)}%`,
        "--size": 7 + ub % 3 * 3 + "rem",
        "--drift-x": 3 * (ub % 3 - 1) + "rem",
        "--drift-y": 2 * (ub % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + ub % 4 * 3 + "s",
        "--delay": 2.5 * -ub + "s"
      }))),
      gU = Array.from({
        length: 14
      }, ((bb, ub) => ({
        "--left": `${(3+94*((.618034*ub+.3)%1)).toFixed(1)}%`,
        "--size": 4 + ub % 4 * 2 + "px",
        "--sway": ub % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*ub%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*ub%12).toFixed(2)}s`
      }))),
      iU = (0, nb.memo)((function(bb) {
        let {
          island: ub
        } = bb;
        return (0, gO.jsxs)("div", {
          className: WO()("SkyblockReachLogDepths", null !== ub && `Island-${ub}`),
          "aria-hidden": "true",
          children: [xU.map(((bb, ub) => (0, gO.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: bb
          }, `shaft${ub}`))), zU.map(((bb, ub) => (0, gO.jsx)("span", {
            className: WO()("SkyblockReachLogMote", ub % 2 === 1 && "Violet"),
            style: bb
          }, `mote${ub}`))), gU.map(((bb, ub) => (0, gO.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: bb
          }, `bubble${ub}`)))]
        })
      })),
      vU = 100;

    function tU(bb) {
      let {
        view: ub
      } = bb;
      const {
        t: hb
      } = (0, xO.K)();
      if (null === ub || 0 === ub.total) return null;
      const Bb = vU * ub.aspect,
        Ob = hb("skyblockGame:hiddenWatersCount", {
          found: ub.found,
          total: ub.total
        });
      return (0, gO.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${hb("skyblockGame:hiddenWatersTitle")}: ${Ob}`,
        children: [(0, gO.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${Bb}`,
          "aria-hidden": "true",
          children: [ub.islands.map(((bb, ub) => (0, gO.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (bb.left + bb.width / 2) * vU,
            cy: (bb.top + bb.height / 2) * Bb,
            rx: bb.width / 2 * vU,
            ry: bb.height / 2 * Bb
          }, ub))), ub.pins.map(((bb, ub) => (0, gO.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: bb.left * vU,
            cy: bb.top * Bb,
            r: 13
          }, ub)))]
        }), (0, gO.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, gO.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: hb("skyblockGame:hiddenWatersTitle")
          }), (0, gO.jsx)("span", {
            className: ub.found === ub.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: Ob
          })]
        })]
      })
    }

    function JU(bb) {
      let {
        view: ub,
        island: hb
      } = bb;
      const {
        t: Bb
      } = (0, xO.K)(), Ob = null === ub || void 0 === ub ? void 0 : ub.glimpses.get(hb);
      return void 0 === Ob || 0 === Ob.length ? null : (0, gO.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, gO.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: Bb("skyblockGame:hiddenWatersGlimpsed")
        }), (0, gO.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: Ob.map((bb => (0, gO.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, gO.jsx)(jO.d, {
              itemName: bb,
              amount: 0
            })
          }, bb)))
        })]
      })
    }
    const eU = ["Bronze", "Silver", "Gold"],
      NU = [{
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
      sU = NU.slice(0, 2);

    function MU(bb) {
      return bb ? NU : sU
    }

    function mU(bb) {
      let {
        fish: ub,
        letGoShown: hb
      } = bb;
      const {
        t: Bb
      } = (0, xO.K)();
      return (0, gO.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [eU.map(((bb, hb) => {
          const Ob = hb < ub.marks;
          return (0, gO.jsx)("span", {
            className: WO()("SkyblockReachLogPip", bb, Ob && "Earned", Ob && ub.fresh && hb === ub.marks - 1 && "Newest"),
            title: Bb(gB[hb])
          }, bb)
        })), (0, gO.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), MU(hb).map(((bb, hb) => (0, gO.jsx)("span", {
          className: WO()("SkyblockReachLogRibbon", bb.className, !0 === ub.ribbons[hb] && "Earned"),
          title: Bb(bb.titleKey)
        }, bb.className)))]
      })
    }

    function IU(bb) {
      let {
        letGoShown: ub,
        haloShown: hb
      } = bb;
      const {
        t: Bb
      } = (0, xO.K)();
      return (0, gO.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, gO.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Bb("skyblockGame:reachLogMarks"),
          children: [(0, gO.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), Bb("skyblockGame:reachLogLegendMarks")]
        }), MU(ub).map((bb => (0, gO.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Bb(bb.titleKey),
          children: [(0, gO.jsx)("span", {
            className: WO()("SkyblockReachLogRibbon", bb.className, "Earned")
          }), Bb(bb.legendKey)]
        }, bb.className))), (0, gO.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Bb("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, gO.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), Bb("skyblockGame:reachLogLegendGlimmer")]
        }), hb && (0, gO.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Bb("skyblockGame:reachLogHaloTitle"),
          children: [(0, gO.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), Bb("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function PU(bb) {
      let {
        returner: ub
      } = bb;
      return (0, gO.jsxs)("div", {
        className: WO()("SkyblockReachLogReturner", ub.back && "Back"),
        children: [(0, gO.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, gO.jsx)(jO.d, {
            itemName: ub.itemName,
            amount: 0
          })
        }), (0, gO.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: ub.line
        })]
      })
    }

    function qU(bb) {
      let {
        fish: ub,
        letGoShown: hb
      } = bb;
      const {
        t: Bb
      } = (0, xO.K)();
      return (0, gO.jsxs)("li", {
        className: WO()("SkyblockReachLogCard", ub.caught ? "Caught" : "Unknown", ub.marks >= 3 && "GoldCard", ub.fresh && "Fresh", ub.visitor && "Visitor"),
        children: [ub.visitor && (0, gO.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: Bb("skyblockGame:reachLogVisitor")
        }), ub.fresh && Array.from({
          length: 4
        }, ((bb, ub) => (0, gO.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, ub))), (0, gO.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [ub.halo && (0, gO.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: Bb("skyblockGame:reachLogHaloTitle")
          }), (0, gO.jsx)(jO.d, {
            itemName: ub.itemName,
            amount: 0
          }), ub.glimmer && (0, gO.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: Bb("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, gO.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: ub.name
        }), (0, gO.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: ub.chance
        }), (0, gO.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: ub.best
        }), (0, gO.jsx)(mU, {
          fish: ub,
          letGoShown: hb
        })]
      })
    }

    function EU(bb) {
      let {
        page: ub,
        letGoShown: hb,
        hiddenWaters: Bb
      } = bb;
      const {
        t: Ob
      } = (0, xO.K)();
      return ub.awake ? (0, gO.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: ub.fish.map((bb => (0, gO.jsx)(qU, {
          fish: bb,
          letGoShown: hb
        }, bb.itemName)))
      }) : (0, gO.jsxs)(gO.Fragment, {
        children: [(0, gO.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: Ob("skyblockGame:reachLogAsleep")
        }), (0, gO.jsx)(JU, {
          view: Bb,
          island: ub.id
        })]
      })
    }

    function yU(bb) {
      var ub, hb;
      let {
        controller: Bb,
        regulars: Ob,
        hiddenWaters: Gb
      } = bb;
      const Ub = (0, zO.k)(zB, Bb.getSnapshot()),
        Lb = function(bb) {
          return (0, zO.k)(GO, bb.getSnapshot())
        }(Gb),
        Yb = (0, zO.k)(bO, Ob.getSnapshot()),
        {
          t: Sb
        } = (0, xO.K)(),
        ab = PO();
      if (!Ub.enabled) return null;
      const Hb = null !== (ub = Ub.pages.find((bb => bb.id === Ub.selected))) && void 0 !== ub ? ub : null;
      return (0, gO.jsx)(MO.b, {
        show: Ub.open,
        close: Bb.dismiss,
        togglePointerLock: !1,
        className: WO()("SkyblockSkillsOverlay", Yb.open && "SkyblockReachLogUnderLedger"),
        children: (0, gO.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: ab,
          onKeyDown: IO,
          children: [(0, gO.jsx)(iU, {
            island: null !== (hb = null === Hb || void 0 === Hb ? void 0 : Hb.id) && void 0 !== hb ? hb : null
          }), (0, gO.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, gO.jsxs)("div", {
              children: [(0, gO.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: Sb("skyblockGame:reachLogTitle")
              }), (0, gO.jsx)("p", {
                children: Sb("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, gO.jsx)(tU, {
              view: Lb
            }), (0, gO.jsx)(mO.i, {
              padIgnore: !0,
              onClick: Bb.dismiss
            })]
          }), (0, gO.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: Ub.pages.map((bb => {
              const ub = bb.id === Ub.selected,
                hb = bb.fish.some((bb => bb.fresh));
              return (0, gO.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": ub,
                "data-pad-tab": !0,
                "data-pad-selected": ub ? "true" : void 0,
                className: WO()("SkyblockReachLogTab", `Island-${bb.id}`, ub && "Selected", !bb.awake && "Asleep", bb.gold && "GoldPage", hb && "HasNews"),
                onClick: () => {
                  Bb.selectPage(bb.id)
                },
                children: [(0, gO.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: bb.name
                }), bb.awake && (0, gO.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: Sb("skyblockGame:reachLogCaughtCount", {
                    caught: bb.caught,
                    total: bb.total
                  })
                })]
              }, bb.id)
            }))
          }), (0, gO.jsxs)("div", {
            className: WO()("SkyblockReachLogPage", null !== Hb && `Island-${Hb.id}`),
            role: "tabpanel",
            children: [null !== Hb && (0, gO.jsx)(EU, {
              page: Hb,
              letGoShown: Ub.letGoShown,
              hiddenWaters: Lb
            }), !0 === (null === Hb || void 0 === Hb ? void 0 : Hb.awake) && null !== Hb.returner && (0, gO.jsx)(PU, {
              returner: Hb.returner
            }), !0 === (null === Hb || void 0 === Hb ? void 0 : Hb.awake) && (0, gO.jsx)(nU, {
              controller: Ob,
              island: Hb.id
            })]
          }), (0, gO.jsx)("footer", {
            className: WO()("SkyblockReachLogFooter", null !== Hb && `Island-${Hb.id}`, !0 === (null === Hb || void 0 === Hb ? void 0 : Hb.gold) && "GoldPage"),
            children: !0 === (null === Hb || void 0 === Hb ? void 0 : Hb.gold) ? (0, gO.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: Sb("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, gO.jsxs)(gO.Fragment, {
              children: [(0, gO.jsx)(IU, {
                letGoShown: Ub.letGoShown,
                haloShown: !0 === (null === Hb || void 0 === Hb ? void 0 : Hb.fish.some((bb => bb.halo)))
              }), (0, gO.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: Sb("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var VU = hb(4598);

    function FU(bb) {
      let {
        conversation: ub,
        completedLabel: hb
      } = bb;
      return (0, gO.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, gO.jsxs)("header", {
          children: [(0, gO.jsx)("h3", {
            children: ub.questName
          }), ub.completed && (0, gO.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: hb
          })]
        }), ub.lines.map((bb => (0, gO.jsx)(VU.c, {
          display: bb.display
        }, bb.key)))]
      })
    }

    function fU(bb) {
      let {
        controller: ub
      } = bb;
      const {
        t: hb
      } = (0, xO.K)(), Bb = (0, zO.k)(LO, ub.getSnapshot()), Ob = PO();
      if (!Bb.enabled) return null;
      const Gb = !Bb.loading && 0 === Bb.conversations.length;
      return (0, gO.jsx)(MO.b, {
        show: Bb.open,
        close: ub.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gO.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: Ob,
          onKeyDown: IO,
          children: [(0, gO.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, gO.jsxs)("div", {
              children: [(0, gO.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: hb("skyblockDialogue:title")
              }), (0, gO.jsx)("p", {
                children: hb("skyblockDialogue:intro")
              })]
            }), (0, gO.jsx)(mO.i, {
              padIgnore: !0,
              onClick: ub.dismiss
            })]
          }), (0, gO.jsxs)("div", {
            className: WO()("SkyblockDialogueBody", {
              SingleColumn: null !== Bb.questFocus || 0 === Bb.characters.length
            }),
            children: [null === Bb.questFocus && Bb.characters.length > 0 && (0, gO.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: Bb.characters.map((bb => (0, gO.jsx)(mO.e, {
                className: WO()("SkyblockDialogueCharacter", {
                  Selected: bb.selected
                }),
                onClick: () => {
                  ub.selectCharacter(bb.id)
                },
                children: (0, gO.jsx)(nO.c, {
                  text: bb.styling
                })
              }, bb.id)))
            }), (0, gO.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== Bb.questFocus && (0, gO.jsx)(mO.e, {
                className: "SkyblockDialogueBack",
                onClick: ub.showCharacters,
                children: hb("skyblockDialogue:allCharacters")
              }), Bb.loading && (0, gO.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: hb("skyblockDialogue:loading")
              }), Gb && (0, gO.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: hb(null === Bb.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), Bb.conversations.map((bb => (0, gO.jsx)(FU, {
                conversation: bb,
                completedLabel: Bb.completedLabel
              }, bb.questId)))]
            })]
          })]
        })
      })
    }

    function kU(bb) {
      let {
        controller: ub
      } = bb;
      const hb = (0, zO.k)(wO, ub.getSnapshot()),
        {
          t: Bb
        } = (0, xO.K)(),
        Ob = PO();
      return hb.enabled ? (0, gO.jsx)(MO.b, {
        show: hb.open,
        close: ub.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gO.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: Ob,
          onKeyDown: IO,
          children: [(0, gO.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, gO.jsxs)("div", {
              children: [(0, gO.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: Bb("skyblockGame:autographBook")
              }), (0, gO.jsx)("p", {
                children: Bb("skyblockGame:autographBookIntro")
              })]
            }), (0, gO.jsx)(mO.i, {
              padIgnore: !0,
              onClick: ub.dismiss
            })]
          }), (0, gO.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, gO.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, gO.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, gO.jsx)("strong", {
                  children: hb.total
                }), (0, gO.jsx)("span", {
                  children: Bb("skyblockGame:autographTotal")
                })]
              }), (0, gO.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, gO.jsx)("strong", {
                  children: hb.rankTotal
                }), (0, gO.jsx)("span", {
                  children: Bb("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === hb.entries.length ? (0, gO.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: Bb("skyblockGame:autographBookEmpty")
            }) : (0, gO.jsx)("ul", {
              className: "SkyblockAutographList",
              children: hb.entries.map((bb => (0, gO.jsxs)("li", {
                className: WO()("SkyblockAutograph", {
                  Ranked: null !== bb.rank
                }),
                style: null === bb.rank ? void 0 : {
                  color: bb.rank.colour
                },
                children: [null !== bb.rank && (0, gO.jsx)(wG.e, {
                  className: "SkyblockAutographRankIcon",
                  name: bb.rank.icon,
                  kit: (0, wG.f)(bb.rank.icon)
                }), (0, gO.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, gO.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: bb.name
                  }), (0, gO.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== bb.rank && (0, gO.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: bb.rank.label
                    }), (0, gO.jsx)("span", {
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
    const TU = (0, nb.memo)((function(bb) {
        let {
          controller: ub
        } = bb;
        return (0, gO.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: ub.display.mountWaypoint,
          children: [(0, gO.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, gO.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, gO.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, gO.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, gO.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, gO.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      cU = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function QU(bb) {
      return "next" === bb.phase ? "\u2192" : cU[bb.kind]
    }
    const RU = (0, nb.memo)((function(bb) {
      let {
        controller: ub,
        display: hb
      } = bb;
      const Bb = (0, zO.k)(ah, ub.getNotificationSnapshot()),
        [Ob, Gb] = (0, nb.useState)(!1);
      return (0, zO.h)("qteStateUpdated", (bb => {
        Gb(bb.isActive)
      })), (0, gO.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (Ob ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [Bb && (0, gO.jsxs)("div", {
          className: `SkyblockQuestNotification ${Bb.kind} ${Bb.phase}`,
          style: {
            "--quest-notification-duration": `${Bb.durationMs}ms`,
            ...Bb.accent && {
              "--quest-notification-accent": Bb.accent
            }
          },
          children: [(0, gO.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (Bb.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, gO.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: QU(Bb)
            }), Bb.iconItem && (0, gO.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, gO.jsx)(jO.d, {
                itemName: Bb.iconItem,
                amount: 0
              })
            })]
          }), (0, gO.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, gO.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: Bb.title
            }), (0, gO.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, gO.jsx)(GG.c, {
                text: Bb.name
              })
            }), Bb.description && (0, gO.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, gO.jsx)(GG.c, {
                text: Bb.description
              })
            }), Bb.reward && (0, gO.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, gO.jsx)(GG.c, {
                text: Bb.reward
              })
            })]
          })]
        }, Bb.token), (null === Bb || void 0 === Bb ? void 0 : Bb.waypointNameKey) && (0, gO.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": Bb.waypointNameKey,
          "data-notification-token": Bb.token,
          ref: hb.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${Bb.token}`)]
      })
    }));

    function bL(bb) {
      const ub = parseInt(bb.replace("#", ""), 16);
      return `${ub>>16&255}, ${ub>>8&255}, ${255&ub}`
    }
    const uL = (0, nb.memo)((function(bb) {
      let {
        controller: ub
      } = bb;
      const {
        t: hb
      } = (0, xO.K)(), Bb = (0, zO.k)(sh, ub.getSnapshot());
      if (!Bb) return null;
      const Ob = "arrival" === Bb.phase;
      return (0, gO.jsxs)("div", {
        className: WO()("SkyblockPortalTransit", {
          Departure: !Ob,
          Arrival: Ob
        }),
        style: {
          "--portal-rgb": bL(Bb.colour),
          "--portal-duration": `${Bb.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, gO.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, gO.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            ub.finishArrival(Bb.token)
          }
        }), (0, gO.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, gO.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !Ob && (0, gO.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: hb("skyblockGame:portalTransitHeading")
          }), (0, gO.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: hb(Bb.zoneNameKey)
          })]
        })]
      }, Bb.token)
    }));

    function hL() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function BL() {
      const bb = document.querySelector(".SkyblockHudCoins"),
        ub = null === bb || void 0 === bb ? void 0 : bb.getBoundingClientRect();
      return ub && ub.width > 0 ? {
        x: ub.left + Math.min(ub.width, 24) / 2,
        y: ub.top + ub.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function OL(bb) {
      return {
        x: bb.left + bb.width / 2,
        y: bb.top + bb.height / 2
      }
    }

    function GL() {
      var bb;
      const ub = null === (bb = document.querySelector(".HotBar")) || void 0 === bb ? void 0 : bb.getBoundingClientRect();
      return ub && ub.width > 0 ? OL(ub) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function UL(bb) {
      let {
        items: ub,
        origins: hb,
        target: Bb
      } = bb;
      return (0, gO.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: ub.map(((bb, ub) => {
          const Ob = hb[ub];
          return (0, gO.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${Ob.x}px`,
              top: `${Ob.y}px`,
              "--item-dx": Bb.x - Ob.x + "px",
              "--item-dy": Bb.y - Ob.y + "px",
              "--item-delay": 2e3 + 160 * ub + "ms",
              "--item-flight": "700ms"
            },
            children: (0, gO.jsx)(jO.d, {
              itemName: bb.dailyRewardItemName,
              amount: 0
            })
          }, bb.dailyRewardItemName)
        }))
      })
    }

    function LL(bb, ub) {
      const hb = -Math.PI / 2 + 1.25 * (bb / (ub - 1) * 2 - 1),
        Bb = 70 + bb % 3 * 22;
      return {
        x: Math.cos(hb) * Bb,
        y: Math.sin(hb) * Bb * .7
      }
    }

    function YL(bb) {
      let {
        origin: ub,
        target: hb,
        count: Bb
      } = bb;
      const Ob = [];
      for (let Gb = 0; Gb < Bb; Gb++) {
        const bb = LL(Gb, Bb);
        Ob.push((0, gO.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${ub.x}px`,
            top: `${ub.y}px`,
            "--coin-bx": `${bb.x}px`,
            "--coin-by": `${bb.y}px`,
            "--coin-dx": hb.x - ub.x + "px",
            "--coin-dy": hb.y - ub.y + "px",
            "--coin-delay": `${Eh(Gb,Bb)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, gO.jsx)(jO.d, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, Gb))
      }
      return (0, gO.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: Ob
      })
    }

    function SL(bb) {
      let {
        day: ub
      } = bb;
      const hb = Db[ub - 1];
      return (0, gO.jsxs)(gO.Fragment, {
        children: [(0, gO.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, gO.jsx)(jO.d, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, DO.c)(hb.dailyRewardCoins)]
        }), hb.dailyRewardItems.map((bb => (0, gO.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, gO.jsx)(jO.d, {
            itemName: bb.dailyRewardItemName,
            amount: 0
          }), "\xd7", bb.dailyRewardItemAmount]
        }, bb.dailyRewardItemName)))]
      })
    }

    function aL(bb) {
      let {
        day: ub
      } = bb;
      const hb = zb(ub);
      return (0, gO.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: Db.map(((bb, Bb) => {
          const Ob = Bb + 1;
          return (0, gO.jsxs)("li", {
            className: WO()("SkyblockDailyRewardTile", {
              Claimed: Ob < ub && Ob !== hb,
              Today: Ob === ub,
              Tomorrow: Ob === hb,
              Jackpot: Ob === xb
            }),
            children: [(0, gO.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: Ob
            }), (0, gO.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, gO.jsx)(jO.d, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, DO.c)(bb.dailyRewardCoins)]
            }), bb.dailyRewardItems.map((bb => (0, gO.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, gO.jsx)(jO.d, {
                itemName: bb.dailyRewardItemName,
                amount: 0
              }), "\xd7", bb.dailyRewardItemAmount]
            }, bb.dailyRewardItemName)))]
          }, Ob)
        }))
      })
    }

    function HL(bb) {
      let {
        view: ub
      } = bb;
      const {
        t: hb
      } = (0, xO.K)(), Bb = (0, nb.useRef)(null), Ob = (0, nb.useRef)(null), [Gb, Ub] = (0, nb.useState)(null);
      (0, nb.useLayoutEffect)((() => {
        var bb;
        const ub = null === (bb = Bb.current) || void 0 === bb ? void 0 : bb.getBoundingClientRect();
        if (ub) {
          var hb, Gb;
          const bb = Array.from(null !== (hb = null === (Gb = Ob.current) || void 0 === Gb ? void 0 : Gb.children) && void 0 !== hb ? hb : [], (bb => OL(bb.getBoundingClientRect())));
          Ub({
            origin: OL(ub),
            target: BL(),
            itemOrigins: bb,
            itemTarget: GL()
          })
        }
      }), []);
      const Lb = zb(ub.day),
        Yb = function(bb, ub) {
          const [hb, Bb] = (0, nb.useState)((() => hL() ? bb : 0));
          return (0, nb.useEffect)((() => {
            if (hL()) return;
            const hb = performance.now();
            let Ob = 0;
            const Gb = Ub => {
              const Lb = Math.min(Math.max((Ub - hb) / ub, 0), 1);
              Bb(Math.round(bb * (1 - (1 - Lb) ** 3))), Lb < 1 && (Ob = requestAnimationFrame(Gb))
            };
            return Ob = requestAnimationFrame(Gb), () => {
              cancelAnimationFrame(Ob)
            }
          }), [bb, ub]), hb
        }(ub.coins, 450);
      return (0, gO.jsxs)("div", {
        className: WO()("SkyblockDailyReward", {
          Jackpot: ub.day === xb
        }),
        style: {
          "--daily-duration": `${ub.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, gO.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, gO.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, gO.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, gO.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: hb("skyblockGame:dailyRewardTitle")
            }), (0, gO.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: hb("skyblockGame:dailyRewardDay", {
                day: String(ub.day)
              })
            })]
          }), (0, gO.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: Bb,
            children: [(0, gO.jsx)(jO.d, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, gO.jsxs)("span", {
              children: ["+", (0, DO.c)(Yb)]
            })]
          }), ub.items.length > 0 && (0, gO.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: Ob,
            children: ub.items.map((bb => (0, gO.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, gO.jsx)(jO.d, {
                itemName: bb.dailyRewardItemName,
                amount: 0
              }), "\xd7", bb.dailyRewardItemAmount]
            }, bb.dailyRewardItemName)))
          }), (0, gO.jsx)(aL, {
            day: ub.day
          }), (0, gO.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [hb("skyblockGame:dailyRewardComeBack"), (0, gO.jsx)(SL, {
              day: Lb
            })]
          })]
        }), null !== Gb && (0, gO.jsx)(YL, {
          origin: Gb.origin,
          target: Gb.target,
          count: ub.flyingCoins
        }), null !== Gb && Gb.itemOrigins.length === ub.items.length && (0, gO.jsx)(UL, {
          items: ub.items,
          origins: Gb.itemOrigins,
          target: Gb.itemTarget
        })]
      })
    }
    const wL = (0, nb.memo)((function(bb) {
        let {
          controller: ub
        } = bb;
        const hb = (0, zO.k)(Ih, ub.getSnapshot());
        return hb ? (0, gO.jsx)(HL, {
          view: hb
        }, hb.token) : null
      })),
      ZL = "Gold Coin";

    function XL(bb) {
      return 650 + 220 * bb
    }

    function pL(bb) {
      return {
        "--letter-delay": `${XL(bb)}ms`,
        "--letter-land": `${XL(bb)+300}ms`
      }
    }

    function oL(bb) {
      let {
        letterCount: ub
      } = bb;
      return (0, gO.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, gO.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, gO.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, gO.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: ub
        }, ((bb, ub) => (0, gO.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: pL(ub),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, ub)))]
      })
    }

    function AL(bb) {
      var ub, hb, Bb;
      let {
        letter: Ob,
        index: Gb
      } = bb;
      const {
        t: Ub
      } = (0, xO.K)(), Lb = null !== (ub = null === (hb = Ob.items[0]) || void 0 === hb ? void 0 : hb.itemName) && void 0 !== ub ? ub : ZL;
      return (0, gO.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: pL(Gb),
        children: [(0, gO.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, gO.jsx)(jO.d, {
            itemName: Lb,
            amount: 0
          })
        }), (0, gO.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: Ub(Ob.reasonKey, null !== (Bb = Ob.reasonParams) && void 0 !== Bb ? Bb : void 0)
        }), (0, gO.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [Ob.coins > 0 && (0, gO.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, gO.jsx)(jO.d, {
              itemName: ZL,
              amount: 0
            }), "+", (0, DO.c)(Ob.coins)]
          }), Ob.items.map(((bb, ub) => (0, gO.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, gO.jsx)(jO.d, {
              itemName: bb.itemName,
              amount: 0
            }), bb.label, " \xd7", bb.amount]
          }, ub)))]
        })]
      })
    }

    function lL(bb) {
      let {
        view: ub
      } = bb;
      const {
        t: hb
      } = (0, xO.K)();
      return (0, gO.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${ub.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${XL(ub.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, gO.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, gO.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, gO.jsx)(oL, {
              letterCount: ub.letters.length
            }), (0, gO.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: hb("skyblockGame:mailboxTitle")
            })]
          }), (0, gO.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: ub.letters.map(((bb, ub) => (0, gO.jsx)(AL, {
              letter: bb,
              index: ub
            }, ub)))
          }), ub.more > 0 && (0, gO.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: hb("skyblockGame:mailboxMore", {
              count: String(ub.more)
            })
          })]
        })
      })
    }
    const KL = (0, nb.memo)((function(bb) {
      let {
        controller: ub
      } = bb;
      const hb = (0, zO.k)(Vh, ub.getSnapshot());
      return hb ? (0, gO.jsx)(lL, {
        view: hb
      }, hb.token) : null
    }));

    function WL(bb) {
      let {
        controller: ub
      } = bb;
      const {
        t: hb
      } = (0, xO.K)(), Bb = (0, zO.k)(sB, ub.getSnapshot());
      if (null === Bb) return null;
      const Ob = Bb.fullSet ? "empty" === Bb.fuelState ? {
        text: hb("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: hb("skyblockGame:magmawardHudFullSet", {
          worn: String(Bb.wornCount)
        }),
        tone: "partial"
      };
      return (0, gO.jsx)(dO.e, {
        placement: "statBars",
        children: (0, gO.jsxs)("div", {
          className: WO()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${Bb.fuelState}`, {
            "SkyblockMagmawardHud-partial": !Bb.fullSet,
            "SkyblockMagmawardHud-armed": Bb.fullSet && "empty" !== Bb.fuelState
          }),
          children: [null !== Bb.flare && (0, gO.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${Bb.flare}`
          }, `flare:${Bb.flareToken}`), (0, gO.jsx)("div", {
            className: WO()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: Bb.setLit
            }),
            children: Bb.pieces.map(((bb, ub) => (0, gO.jsx)("div", {
              className: WO()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: bb.worn,
                SkyblockMagmawardPieceJustWorn: bb.justWorn
              }),
              children: (0, gO.jsx)(jO.d, {
                itemName: bb.itemName,
                amount: 0
              })
            }, `${ub}:${bb.wornToken}`)))
          }, `pieces:${Bb.setLitToken}`), (0, gO.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, gO.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, gO.jsxs)("div", {
              className: WO()("SkyblockMagmawardFuelCounter", Bb.pulse && `SkyblockMagmawardFuelCounter-${Bb.pulse}`),
              children: [(0, gO.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, gO.jsx)(jO.d, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, gO.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: Bb.fuel
              })]
            }, `counter:${Bb.pulseToken}`), "burn" === Bb.pulse && (0, gO.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${Bb.pulseToken}`)]
          }), Ob && (0, gO.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${Ob.tone} SmallTextBold`,
            children: Ob.text
          })]
        })
      })
    }

    function CL(bb) {
      let {
        controller: ub
      } = bb;
      const {
        t: hb,
        selectedLanguage: Bb
      } = (0, xO.K)(), Ob = (0, zO.k)(mB, ub.getSnapshot());
      return null === Ob ? null : (0, gO.jsx)(dO.e, {
        placement: "statBars",
        children: (0, gO.jsxs)("div", {
          className: WO()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: Ob.inRange
          }),
          style: {
            "--glowtide-colour": Ob.colour
          },
          "aria-label": hb("skyblockGame:glowtideChipLabel"),
          children: [(0, gO.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), Ob.inRange ? (0, gO.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: hb("skyblockGame:glowtideChipInRange")
          }, `call:${Ob.inRangeToken}`) : (0, gO.jsxs)(gO.Fragment, {
            children: [(0, gO.jsx)("div", {
              ref: ub.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, gO.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: hb("skyblockGame:waypointDistance", {
                distance: db(Ob.distance, Bb.code)
              })
            })]
          })]
        })
      })
    }

    function dL(bb) {
      let {
        controller: ub
      } = bb;
      const {
        t: hb
      } = (0, xO.K)(), Bb = (0, zO.k)(PB, ub.getSnapshot());
      return null === Bb ? null : (0, gO.jsx)(dO.e, {
        placement: "statBars",
        children: (0, gO.jsxs)("div", {
          className: WO()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: Bb.full
          }),
          "aria-label": hb("skyblockGame:glowMeterLabel", {
            fill: String(Bb.fill),
            LH: String(Bb.LH)
          }),
          children: [Bb.burst && (0, gO.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${Bb.burstToken}`), (0, gO.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, gO.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${Bb.ratio})`
              }
            }), Bb.gained && (0, gO.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${Bb.gainToken}`), Bb.full && Array.from({
              length: 5
            }, ((bb, ub) => (0, gO.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, ub)))]
          }), Bb.full && Bb.rares.map((bb => (0, gO.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, gO.jsx)(jO.d, {
              itemName: bb,
              amount: 0
            })
          }, bb))), Bb.ready && (0, gO.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, gO.jsx)("span", {
              children: hb("skyblockGame:glowMeterReady")
            })
          }, `ready:${Bb.fullToken}`)]
        })
      })
    }

    function rL(bb) {
      let {
        controller: ub
      } = bb;
      const {
        t: hb
      } = (0, xO.K)(), Bb = (0, zO.k)(EB, ub.getSnapshot());
      if (null === Bb) return null;
      const Ob = "waiting" === Bb.phase,
        Gb = {
          animationDuration: `${Bb.waitMs}ms`,
          animationDelay: -Bb.elapsedMs + "ms"
        },
        Ub = Ob ? void 0 : {
          animationDuration: `${Bb.waitMs}ms`
        };
      return (0, gO.jsxs)("div", {
        className: Ob ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [Ob && (0, gO.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((bb, ub) => (0, gO.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, ub))), (0, gO.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: Gb
          }), (0, gO.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, gO.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, gO.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: Gb
            })]
          }), (0, gO.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, gO.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: Ub,
          children: hb(Bb.line)
        }, Bb.lineIndex)]
      }, Bb.token)
    }

    function jL(bb) {
      let {
        chart: ub,
        showHere: hb,
        className: Bb
      } = bb;
      return (0, gO.jsx)("div", {
        className: WO()("SkyblockTideChartGrid", Bb, null !== ub.pictureName && "Complete"),
        "aria-hidden": "true",
        children: ub.cells.map(((bb, Bb) => {
          const Ob = 0 !== (ub.pulseCells & 1 << Bb),
            Gb = ub.castCell === Bb;
          return (0, gO.jsx)("span", {
            className: WO()("SkyblockTideChartCell", `Cell-${bb}`, Ob && "Pulse", Gb && "Cast", hb && ub.hereCell === Bb && "Here")
          }, `${Bb}:${Ob?`p${ub.pulseToken}`:""}:${Gb?`c${ub.castToken}`:""}`)
        }))
      })
    }

    function nL(bb) {
      let {
        controller: ub
      } = bb;
      const hb = (0, zO.k)(VB, ub.getSnapshot()),
        {
          t: Bb
        } = (0, xO.K)(),
        Ob = hb.chip;
      if (!hb.enabled || null === Ob) return null;
      const Gb = Bb("skyblockGame:tideChartsChipLabel", {
        island: Ob.islandName,
        lit: String(Ob.lit),
        ink: String(Ob.ink)
      });
      return (0, gO.jsx)(dO.e, {
        placement: "statBars",
        children: (0, gO.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: WO()("SkyblockTideChartsChip", hb.open && "Open", null !== Ob.pictureName && "Complete"),
          "aria-label": Gb,
          title: Gb,
          onMouseDown: bb => {
            bb.preventDefault()
          },
          onClick: ub.toggle,
          children: [(0, gO.jsx)(jL, {
            chart: Ob,
            showHere: !1,
            className: "Mini"
          }), (0, gO.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [Ob.lit, "/", Ob.ink]
          })]
        })
      })
    }

    function DL(bb) {
      let {
        controller: ub
      } = bb;
      const hb = (0, zO.k)(VB, ub.getSnapshot()),
        {
          t: Bb
        } = (0, xO.K)(),
        Ob = PO(),
        Gb = hb.card;
      return hb.enabled && null !== Gb ? (0, gO.jsx)(MO.b, {
        show: hb.open,
        close: ub.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, gO.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: Ob,
          onKeyDown: IO,
          children: [(0, gO.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, gO.jsxs)("div", {
              children: [(0, gO.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: Bb("skyblockGame:tideChartsTitle")
              }), (0, gO.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: Bb("skyblockGame:tideChartsIntro")
              })]
            }), (0, gO.jsx)(mO.i, {
              padIgnore: !0,
              ariaLabel: Bb("skyblockGame:tideChartsClose"),
              onClick: ub.dismiss
            })]
          }), hb.tabs.length > 1 && (0, gO.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": Bb("skyblockGame:tideChartsIslands"),
            children: hb.tabs.map((bb => (0, gO.jsx)("button", {
              type: "button",
              className: WO()("SkyblockTideChartsTab", bb.selected && "Selected"),
              "aria-pressed": bb.selected,
              onClick: () => {
                ub.xw(bb.island)
              },
              children: bb.name
            }, bb.island)))
          }), (0, gO.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, gO.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": Gb.gridLabel,
              children: (0, gO.jsx)(jL, {
                chart: Gb,
                showHere: !0,
                className: "Large"
              })
            }), (0, gO.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, gO.jsx)("h3", {
                children: Gb.islandName
              }), (0, gO.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: Gb.litText
              }), null === Gb.pictureName ? (0, gO.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: Bb("skyblockGame:tideChartsPictureHidden")
              }) : (0, gO.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: Bb("skyblockGame:tideChartsPictureRevealed", {
                  picture: Gb.pictureName
                })
              }, Gb.pictureName), (0, gO.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, gO.jsxs)("li", {
                  children: [(0, gO.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), Bb("skyblockGame:tideChartsLegendLit")]
                }), (0, gO.jsxs)("li", {
                  children: [(0, gO.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), Bb("skyblockGame:tideChartsLegendClear")]
                }), null !== Gb.hereCell && (0, gO.jsxs)("li", {
                  children: [(0, gO.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), Bb("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, gO.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, gO.jsx)("span", {
                  children: hb.turnsText
                }), (0, gO.jsx)("span", {
                  children: hb.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function xL(bb) {
      var ub;
      let {
        controller: hb
      } = bb;
      const {
        selectedLanguage: Bb
      } = (0, xO.K)(), Ob = Bb.code;
      (0, nb.useEffect)((() => {
        hb.setTranslator(((bb, ub) => (0, xO.D)(Ob, bb, ub)), Ob, ((bb, ub) => (0, xO.w)(Ob, bb, ub)))
      }), [hb, Ob]);
      const Gb = (0, zO.k)(wb, hb.map.getSnapshot()),
        {
          openInGameMenuName: Ub
        } = (0, CO.j)(["openInGameMenuName"]);
      return (0, gO.jsxs)(gO.Fragment, {
        children: [(0, gO.jsx)(RU, {
          controller: hb.quests,
          display: hb.navigation.display
        }), Gb.enabled && !Ub && (0, gO.jsx)(hG, {
          controller: hb.navigation
        }), (0, gO.jsx)(iO, {
          controller: hb,
          minimap: Gb.enabled && (null === (ub = Gb.presentation) || void 0 === ub ? void 0 : ub.minimap) && (0, gO.jsx)(uG, {
            view: Gb.presentation.minimap,
            navigation: hb.navigation,
            controller: hb.map
          }),
          children: (0, gO.jsx)(HG, {
            controller: hb.quests,
            surface: "hud"
          })
        }), (0, gO.jsx)(TU, {
          controller: hb.navigation
        }), (0, gO.jsx)(uL, {
          controller: hb.portalTransit
        }), (0, gO.jsx)(wL, {
          controller: hb.dailyReward
        }), (0, gO.jsx)(KL, {
          controller: hb.mailbox
        }), (0, gO.jsx)(WL, {
          controller: hb.magmaward
        }), (0, gO.jsx)(CL, {
          controller: hb.glowtide
        }), (0, gO.jsx)(HU, {
          controller: hb.passage
        }), (0, gO.jsx)(nL, {
          controller: hb.tideCharts
        }), (0, gO.jsx)(dL, {
          controller: hb.glowMeter
        }), (0, gO.jsx)(dU, {
          controller: hb.reachLog
        }), (0, gO.jsx)(rL, {
          controller: hb.hushWait
        }), (0, gO.jsx)(lU, {
          controller: hb.lampLight
        }), (0, gO.jsx)(BG, {
          controller: hb.skills,
          surface: "hud"
        })]
      })
    }

    function zL(bb) {
      let {
        controller: ub
      } = bb;
      return (0, gO.jsxs)(gO.Fragment, {
        children: [(0, gO.jsx)(bG, {
          controller: ub.map,
          navigation: ub.navigation
        }), (0, gO.jsx)(BG, {
          controller: ub.skills,
          surface: "menu"
        }), (0, gO.jsx)(HG, {
          controller: ub.quests,
          surface: "menu"
        }), (0, gO.jsx)(VG, {
          controller: ub.dungeons
        }), (0, gO.jsx)(kG, {
          controller: ub.collections
        }), (0, gO.jsx)(QG, {
          controller: ub.questGraph
        }), (0, gO.jsx)(BU, {
          controller: ub.forge
        }), (0, gO.jsx)(SU, {
          controller: ub.smuggler
        }), (0, gO.jsx)(WU, {
          controller: ub.keepersChair,
          lampLight: ub.lampLight
        }), (0, gO.jsx)(yU, {
          controller: ub.reachLog,
          regulars: ub.regulars,
          hiddenWaters: ub.hiddenWaters
        }), (0, gO.jsx)(DU, {
          controller: ub.regulars
        }), (0, gO.jsx)(ZU, {
          controller: ub.passage
        }), (0, gO.jsx)(DL, {
          controller: ub.tideCharts
        }), (0, gO.jsx)(fU, {
          controller: ub.dialogue
        }), (0, gO.jsx)(kU, {
          controller: ub.autographs
        })]
      })
    }
    var gL = hb(36393);
    const iL = bB + LB;

    function vL(bb, ub, hb, Bb, Ob) {
      const Gb = [],
        Ub = [],
        Lb = hb => {
          const Bb = bb.playSound(ub, hb.sound, hb.volume, hb.rate);
          Bb && (Ub.push(Bb), void 0 !== hb.cutAfter && Gb.push(setTimeout((() => {
            Bb.fade(Bb.getVolume(), 0, 300)
          }), hb.cutAfter)))
        };
      for (const Yb of function(bb, ub) {
          const hb = [{
            sound: "rpgKnifeSlice1",
            beat: bB,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: bB,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: bB,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: bB,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: bB,
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
            sound: (0, gL.i)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: iL + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, gL.i)("bigDrumSwish"),
            beat: iL + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: iL + 60,
            lead: 180,
            volume: .5 + .06 * bb,
            rate: .82 + .07 * bb
          }];
          return bb >= 4 && hb.push({
            sound: "exp_levelup",
            beat: iL + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), ub && hb.push({
            sound: "trumpetFlare",
            beat: iL + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), hb.push({
            sound: "harp_pling",
            beat: uB,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), hb
        }(hb, Bb)) Ob ? Gb.push(setTimeout((() => {
        Lb(Yb)
      }), Math.max(0, Yb.beat - Yb.lead / Yb.rate))) : Yb.beat !== bB && "magicAccent2" !== Yb.sound && "trumpetFlare" !== Yb.sound || Lb(Yb);
      return () => {
        for (const bb of Gb) clearTimeout(bb);
        for (const bb of Ub) bb.fade(bb.getVolume(), 0, 120)
      }
    }
    class tL {
      constructor(bb) {
        this.deps = bb, this.pending = new Map, this.localHook = null
      }
      hookWaiting(bb, ub) {
        this.pending.delete(bb);
        const hb = this.deps.now();
        if (null === ub) {
          var Bb;
          if ((null === (Bb = this.localHook) || void 0 === Bb ? void 0 : Bb.hookId) === bb) {
            const bb = hb >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(bb)
          }
          return
        }
        const Ob = hb + ub;
        this.settle(bb, Ob) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(bb, {
          untilMs: hb + 1e3,
          biteAtMs: Ob
        }))
      }
      getLocalHook() {
        var bb, ub;
        return null !== (bb = null === (ub = this.localHook) || void 0 === ub ? void 0 : ub.hookId) && void 0 !== bb ? bb : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const bb = this.deps.now();
        for (const [ub, {
            untilMs: hb,
            biteAtMs: Bb
          }] of this.pending)(this.settle(ub, Bb) || bb > hb) && this.pending.delete(ub)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(bb, ub) {
        const hb = this.deps.getLineOwner(bb);
        if (null === hb) return !1;
        if (!this.deps.isLocalPlayer(hb)) return !0;
        if (this.localHook = {
            hookId: bb,
            biteAtMs: ub
          }, !this.deps.isHushWaiting()) {
          const [ub, hb] = this.deps.getHookPosition(bb);
          this.deps.onCastLanded(ub, hb)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var JL = hb(4013);
    const eL = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      NL = {
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
    class sL {
      constructor(bb) {
        this.deps = bb, this.tell = null
      }
      receiveTell(bb) {
        let {
          biteTellTier: ub
        } = bb;
        this.tell = {
          tier: ub,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(bb) {
        const ub = this.tell;
        if (this.tell = null, !bb) return;
        const hb = null !== ub && this.deps.now() - ub.atMs <= 3e3 ? ub.tier : 0;
        this.deps.vibrate(eL[hb])
      }
      burstAtHook() {
        const bb = this.tell,
          ub = this.deps.getLocalHookPosition();
        null === bb || bb.burst || null === ub || (bb.burst = !0, this.deps.playParticles(function(bb, ub) {
          let [hb, Bb, Ob] = ub;
          const {
            count: Gb,
            rise: Ub,
            colour: Lb
          } = NL[bb], [Yb, Sb, ab] = Lb;
          return {
            texture: "glint",
            pos1: [hb - .3, Bb, Ob - .3],
            pos2: [hb + .3, Bb + .2, Ob + .3],
            dir1: [-.6, Ub, -.6],
            dir2: [.6, 1.4 * Ub, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: Gb,
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
              minColor: [Yb, Sb, ab, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [Yb, Sb, ab, 0],
              maxColor: [Yb, Sb, ab, 0]
            }],
            blendMode: JL.f.Add,
            hideDist: 48
          }
        }(bb.tier, ub)))
      }
    }
    var ML = hb(1144),
      mL = hb(1819),
      IL = hb(29);

    function PL(bb, ub) {
      return [{
        timeFraction: 0,
        minColor: [255 * bb[0], 255 * bb[1], 255 * bb[2], 1],
        maxColor: [255 * ub[0], 255 * ub[1], 255 * ub[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const qL = [0, 0, 0],
      EL = {
        texture: "glint",
        mipmaps: !1,
        LH: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: qL,
        dir2: qL,
        blendMode: JL.f.OneOne
      },
      yL = {
        ...EL,
        colorGradients: PL([1, .88, .38], [1, .65, .15])
      },
      VL = {
        ...EL,
        colorGradients: PL([.55, .95, 1], [.9, 1, 1])
      },
      FL = [.5, .5, .5],
      fL = {
        texture: "glint",
        mipmaps: !1,
        LH: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: PL([1, .12, .12], [1, .35, .2]),
        blendMode: JL.f.OneOne
      };
    class kL {
      constructor() {
        this.drops = new Map
      }
      cZ(bb, ub) {
        if ("overflowFlash" === ub.kind) {
          const [hb, Bb, Ob] = ub.position, Gb = bb.createParticles(fL, {
            pos: [hb, Bb, Ob],
            half: FL
          });
          return Gb.emit(18), void Gb.stop()
        }
        this.drops.has(ub.itemId) || this.drops.set(ub.itemId, {
          owner: ub.owner,
          cosmetic: ub.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      gH(bb) {
        if (0 === this.drops.size) return;
        const ub = performance.now(),
          hb = bb.getCameraPosition();
        let Bb = 0;
        for (const Gb of this.drops.values()) null !== Gb.particles && Bb++;
        for (const [Gb, Ub] of this.drops) {
          const Lb = bb.getPositionView(Gb);
          if (null === Lb) {
            var Ob;
            if (Ub.seen || ub - Ub.markedAt > 5e3) null !== Ub.particles && Bb--, null === (Ob = Ub.particles) || void 0 === Ob || Ob.stop(), this.drops.delete(Gb);
            continue
          }
          Ub.cosmetic || !bb.isLocalPlayer(Ub.owner) || Ub.pickupDelayCleared || (bb.clearPickupDelay(Gb), Ub.pickupDelayCleared = !0);
          const Yb = Ub.lastPosition,
            Sb = Ub.seen && (Lb[0] - Yb[0]) ** 2 + (Lb[1] - Yb[1]) ** 2 + (Lb[2] - Yb[2]) ** 2 > 4e-4,
            ab = (Lb[0] - hb[0]) ** 2 + (Lb[1] - hb[1]) ** 2 + (Lb[2] - hb[2]) ** 2 < 2025;
          Ub.seen = !0, Yb[0] = Lb[0], Yb[1] = Lb[1], Yb[2] = Lb[2], Sb && (Ub.lastMovingAt = ub), null !== Ub.particles && (!ab || ub - Ub.lastMovingAt > 500) && (Ub.particles.stop(), Ub.particles = null, Bb--), Sb && ab && null === Ub.particles && Bb < 32 && (Ub.particles = bb.createParticles(Ub.cosmetic ? VL : yL, {
            pos: Lb
          }), Bb++), null !== Ub.particles && (Ub.particles.moveTo(Lb), Ub.particles.setEmitRate(Sb ? 12 : 0)), !Sb && null === Ub.particles && ub - Math.max(Ub.lastMovingAt, Ub.markedAt) > 2e3 && this.drops.delete(Gb)
        }
      }
      dispose() {
        for (const ub of this.drops.values()) {
          var bb;
          null === (bb = ub.particles) || void 0 === bb || bb.stop()
        }
        this.drops.clear()
      }
    }
    var TL = hb(191);
    const cL = TL.e.Tl * TL.e.playerEyeToHeightRatio;
    class QL {
      constructor(bb) {
        this.host = bb, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      cZ(bb) {
        this.lava = bb, this.nextUpdateAt = 0
      }
      gH() {
        var bb;
        const ub = this.host.now();
        if (ub < this.nextUpdateAt) return;
        this.nextUpdateAt = ub + 250;
        const hb = this.host.playerPosition(),
          Bb = hb && this.findNearest([hb[0], hb[1] + cL, hb[2]]);
        if (!Bb || Bb.distance >= 40) return void this.stop();
        const Ob = .5 * Math.min(1, (40 - Bb.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(Ob) : this.loop = this.host.play("lavaFlow", Ob, Bb.position, 40 + cL, 9, !0), null === (bb = this.loop) || void 0 === bb || bb.setPosition(Bb.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var bb;
        null === (bb = this.loop) || void 0 === bb || bb.stop(), this.loop = null
      }
      findNearest(bb) {
        let ub = -1,
          hb = 1 / 0;
        for (let Bb = 0; Bb < this.lava.length; Bb += 3) {
          const Ob = this.lava[Bb] - bb[0],
            Gb = this.lava[Bb + 1] - bb[1],
            Ub = this.lava[Bb + 2] - bb[2],
            Lb = Ob * Ob + Gb * Gb + Ub * Ub;
          Lb < hb && (hb = Lb, ub = Bb)
        }
        return ub < 0 ? null : {
          position: [this.lava[ub], this.lava[ub + 1], this.lava[ub + 2]],
          distance: Math.sqrt(hb)
        }
      }
    }
    var RL = hb(1796),
      bY = hb(38255);
    const uY = {
      "Grey Portal": "Gray"
    };
    for (const LY of Ob.Kc) uY[`${LY} Portal`] = LY;
    const hY = Object.keys(uY),
      BY = Object.fromEntries(hY.map((bb => [bb, (0, Ob.X)(Ob.I[`${(0,Ob.oe)(uY[bb])}Team`])])));
    Object.fromEntries(hY.map((bb => [bb, Ob.I[`${(0,Ob.oe)(uY[bb])}UiText`]])));
    class OY {
      constructor(bb, ub) {
        this.presentation = bb, this.portal = ub, this.unlocked = void 0
      }
      cZ(bb) {
        const ub = !1 === this.unlocked && bb;
        this.unlocked = bb, this.gH();
        const {
          min: hb,
          max: Bb,
          unlockedBlock: Ob
        } = this.portal;
        if (ub && this.presentation.hasChunk(...hb)) {
          const [bb, ub, Gb] = BY[Ob];
          this.presentation.playParticles({
            pos1: [...hb],
            pos2: Bb.map((bb => bb + 1)),
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
              minColor: [bb, ub, Gb, 1],
              maxColor: [Math.min(255, bb + 55), Math.min(255, ub + 55), Math.min(255, Gb + 90), 1]
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
      gH() {
        var bb;
        const ub = this.unlocked ? this.portal.unlockedBlock : null !== (bb = this.portal.lockedBlock) && void 0 !== bb ? bb : "Light Gray Portal",
          {
            min: hb,
            max: Bb
          } = this.portal;
        for (let Ob = hb[0]; Ob <= Bb[0]; Ob++)
          for (let bb = hb[1]; bb <= Bb[1]; bb++)
            for (let Gb = hb[2]; Gb <= Bb[2]; Gb++) this.presentation.hasChunk(Ob, bb, Gb) && this.presentation.rK(Ob, bb, Gb) !== ub && this.presentation.vJ(Ob, bb, Gb, ub)
      }
    }
    const GY = {
        farming_1: {
          raises: bb => "NPC" === bb.type && "chef" === bb.variation,
          rise: .4
        },
        fishing_1: {
          raises: bb => "Draugr Warper" === bb.type,
          rise: .4
        }
      },
      UY = (bb, ub, hb, Gb) => {
        let {
          localPlayerId: Ub
        } = Gb;
        const Lb = new lO({
          translate: (bb, ub) => (0, xO.D)(ML.h.get().getCurrentLanguageCode(), bb, ub),
          translateWithIcons: (bb, ub) => (0, xO.w)(ML.h.get().getCurrentLanguageCode(), bb, ub),
          setMenuOpen: bb => {
            bb ? (0, Fb.p)() : (0, Fb.g)()
          },
          dismissMenu: Fb.j,
          publishSkills: bb => {
            fb.i.vp(Gh, bb, !0)
          },
          publishQuests: bb => {
            fb.i.vp(Sh, bb, !0)
          },
          publishQuestNotification: bb => {
            fb.i.vp(ah, bb, !0)
          },
          publishDungeons: bb => {
            fb.i.vp(Zh, bb, !0)
          },
          publishCollections: bb => {
            fb.i.vp(eh, bb, !0)
          },
          publishMap: bb => {
            fb.i.vp(wb, bb, !0)
          },
          publishHud: bb => {
            fb.i.vp(pO, bb, !0)
          },
          publishPortalTransit: bb => {
            fb.i.vp(sh, bb, !0)
          },
          isLoadingScreenUp: () => CO.d.get("loadingOverlayVisible"),
          publishDailyReward: bb => {
            fb.i.vp(Ih, bb, !0)
          },
          publishMailbox: bb => {
            fb.i.vp(Vh, bb, !0)
          },
          publishQuestGraph: bb => {
            fb.i.vp(fh, bb, !0)
          },
          publishForge: bb => {
            fb.i.vp(XB, bb, !0)
          },
          publishSmuggler: bb => {
            fb.i.vp(AB, bb, !0)
          },
          publishKeepersChair: bb => {
            fb.i.vp(DB, bb, !0)
          },
          publishReachLog: bb => {
            fb.i.vp(zB, bb, !0)
          },
          publishLampLight: bb => {
            fb.i.vp(eB, bb, !0)
          },
          publishMagmaward: bb => {
            fb.i.vp(sB, bb, !0)
          },
          publishGlowtide: bb => {
            fb.i.vp(mB, bb, !0)
          },
          publishGlowMeter: bb => {
            fb.i.vp(PB, bb, !0)
          },
          publishHushWait: bb => {
            fb.i.vp(EB, bb, !0)
          },
          publishPassage: bb => {
            fb.i.vp(WB, bb, !0)
          },
          publishTideCharts: bb => {
            fb.i.vp(VB, bb, !0)
          },
          publishRegulars: bb => {
            fb.i.vp(bO, bb, !0)
          },
          publishHiddenWaters: bb => {
            fb.i.vp(GO, bb, !0)
          },
          publishDialogue: bb => {
            fb.i.vp(LO, bb, !0)
          },
          publishAutographs: bb => {
            fb.i.vp(wO, bb, !0)
          },
          onDailyRewardStarted: bb => {
            vb.playSound(Ub, bb.day === xb ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (bb, ub) => {
            vb.playSound(Ub, "exp_collect", .35, 1 + .6 * bb / (ub - 1)), fb.i.vp(Ph, bb === ub - 1)
          },
          onDailyRewardItemLanded: bb => {
            vb.playSound(Ub, "pickUp", .6, 1 + .15 * bb)
          },
          onMailboxStarted: () => {
            vb.playSound(Ub, "rpgMetalClick", .6, 1), vb.playSound(Ub, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            vb.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: IL.m,
          requestTracking: bb => {
            vb.sendCommand(`quests track ${bb}`)
          },
          requestDungeonEnter: (bb, ub) => {
            vb.sendCommand(`dungeonEnter ${bb} ${ub}`)
          },
          requestQuestJump: bb => {
            vb.sendCommand(`${Jb} jump ${bb}`)
          },
          requestQuestArrive: (bb, ub) => {
            const hb = `${Jb} arrive ${bb}`;
            vb.sendCommand(ub ? `${hb} complete` : hb)
          },
          requestForge: bb => {
            let {
              blade: ub,
              guard: hb,
              handle: Bb
            } = bb;
            vb.sendCommand(`forge ${ub} ${hb} ${Bb}`)
          },
          requestDialogue: () => {
            vb.sendCommand("quests dialogue")
          },
          requestSmuggle: (bb, ub) => {
            vb.sendCommand(`smuggle ${bb} ${ub}`)
          },
          requestKeepersChairAim: bb => {
            vb.sendCommand(`keeperschair-aim ${bb}`)
          },
          requestReachLogOpen: () => {
            vb.sendCommand("reachlog-open")
          },
          requestLampLight: bb => {
            vb.sendCommand(`${bb}`)
          },
          requestTravel: bb => {
            vb.sendCommand(`map travel ${bb.kind} ${bb.id} ${bb.requestId}`)
          }
        });
        let Yb, Sb, ab, Hb, Zb, Xb, pb, Wb, Cb, db, rb, Db, zb;
        const ib = new kL;
        let vb, tb = null;
        const eb = GY[null !== hb && void 0 !== hb ? hb : ""],
          mb = (bb, ub) => {
            null !== eb && void 0 !== eb && eb.raises(ub) && vb.setNametagOffset(bb, eb.rise)
          },
          qb = new sL({
            getLocalHookPosition: () => {
              const bb = Eb.getLocalHook();
              return null !== bb && vb.checkValid(bb) ? vb.iK(bb) : null
            },
            playParticles: bb => {
              vb.playParticleEffect(bb)
            },
            vibrate: bb => {
              kb.f.play("fishBite", bb)
            },
            now: () => performance.now()
          }),
          Eb = new tL({
            getLineOwner: bb => vb.checkValid(bb) ? vb.getLineOwner(bb) : null,
            isLocalPlayer: bb => vb.isLocalPlayer(bb),
            getHookPosition: bb => {
              const [ub, , hb] = vb.iK(bb);
              return [ub, hb]
            },
            isHushWaiting: () => {
              var bb;
              return "waiting" === (null === (bb = Lb.hushWait.getSnapshot()) || void 0 === bb ? void 0 : bb.phase)
            },
            onCastLanded: (bb, ub) => {
              Lb.tideCharts.castLanded(bb, ub)
            },
            onLocalHookSettled: () => {
              qb.onLocalHookSettled()
            },
            onLocalWaitEnded: bb => {
              qb.onLocalWaitEnded(bb)
            },
            now: () => performance.now()
          }),
          Tb = new QL({
            now: () => performance.now(),
            playerPosition: () => vb.checkValid(Ub) ? vb.iK(Ub) : null,
            play: (bb, ub, hb, Bb, Ob, Gb) => vb.playSound(Ub, bb, ub, 1, {
              Oh: hb,
              maxHearDist: Bb,
              refDistance: Ob
            }, Gb)
          }),
          cb = new Map;
        let Qb;
        return {
          onCreate: bb => {
            if (vb = bb, tb = new bY.SkyblockEntityFacing(bb, eb ? mb : null), Lb.portalTransit.resumeArrival(null !== hb && void 0 !== hb ? hb : null), (null !== hb && void 0 !== hb ? hb : Bb) === Bb) {
              let bb = -1 / 0;
              Qb = fb.i.subscribe("toggleMenu", (ub => {
                const hb = performance.now();
                "inventory|Workbench" !== ub || "cross_to_hub" !== Lb.quests.getTrackedQuestId() || hb - bb < 1e4 || (bb = hb, vb.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [Bb, Ob] of Object.entries(null !== (ub = Nb[null !== hb && void 0 !== hb ? hb : ""]) && void 0 !== ub ? ub : {})) {
              var ub;
              cb.set(Bb, new OY({
                hasChunk: (ub, hb, Bb) => bb.isBlockInLoadedChunk(ub, hb, Bb),
                rK: (ub, hb, Bb) => bb.blockIdToBlockName(bb.getBlockId(ub, hb, Bb)),
                vJ: (ub, hb, Bb, Ob) => {
                  bb.vJ(ub, hb, Bb, Ob)
                },
                playParticles: ub => {
                  bb.playParticleEffect(ub)
                }
              }, Ob))
            }
            zb = (0, RL.d)((bb => function(bb) {
              return Object.hasOwn(Eu, bb) || bb.startsWith("npc_")
            }(bb) ? Vu(bb) : null)), Lb.resolveItemName = (ub, hb) => {
              const Bb = bb.getItemStat(Ub, ub, "displayName");
              return Bb && "object" === typeof Bb && "translationKey" in Bb ? hb(Bb.translationKey, (0, xO.s)(Bb.params, mL.d.shown)) : "string" === typeof Bb ? hb(Bb) : ub
            }, Lb.quests.notifications.onShown = bb => {
              "quest" === bb ? vb.playSound(Ub, "magicAccent1", 1, 1) : "skillLevel" === bb ? vb.playSound(Ub, "magicAccent1", 1, .6) : "landmark" === bb ? vb.playSound(Ub, "trumpetFlare", 1, .6) : "npcNote" === bb ? vb.playSound(Ub, "magicAccent2", .8, 1.1) : "started" === bb ? vb.playSound(Ub, (0, gL.i)("bigDrumSwish"), 1, 1) : vb.playSound(Ub, (0, gL.i)("rpgHandleSmallLeather"), 1, 1)
            }, Lb.forge.onPartSelected = () => {
              vb.playSound(Ub, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, Lb.forge.onOpened = () => {
              ! function(bb) {
                bb.preloadSounds([(0, gL.i)("firecracker"), "fireBurn", "magicAccent2"])
              }(bb)
            }, Lb.forge.onForgeStarted = (ub, hb, Bb) => vL(bb, Ub, ub, hb, Bb), Lb.smuggler.onBought = () => {
              vb.playSound(Ub, (0, gL.i)("rpgHandleSmallLeather"), 1, 1), vb.playSound(Ub, "chestOpen", .6, 1)
            }, Lb.compass.register(new ob(Lb.map, !0)), Lb.compass.register(new ob(Lb.map, !1)), Lb.compass.register(new lb(Lb.map)), Lb.compass.register(new Kb((() => Lb.quests.getSnapshot().compassTarget)));
            for (const hb of ["enemy", "npc"]) Lb.compass.register(new Ab(Lb.map, hb, (ub => bb.checkValid(ub) ? bb.iK(ub) : void 0), (ub => bb.isAlive(ub))))
          },
          onAfterRender: (bb, ub) => {
            const hb = vb.checkValid(Ub) ? vb.iK(Ub) : null;
            Lb.navigation.afterRender(hb, performance.now(), ub), Lb.glowtide.afterRender(hb, ub.cameraHeading), Lb.tideCharts.afterRender(hb), Eb.afterRender()
          },
          onClose: () => {
            var bb, ub, hb, Bb, Ob, Gb, Ub, wb, Xb, ob, Ab, lb, Kb, jb, nb;
            Qb && fb.i.unsubscribe(Qb), null === (bb = zb) || void 0 === bb || bb(), ib.dispose(), Tb.dispose(), null === (ub = tb) || void 0 === ub || ub.dispose(), Eb.dispose(), Lb.dispose(), null === (hb = Yb) || void 0 === hb || hb(), null === (Bb = Sb) || void 0 === Bb || Bb(), null === (Ob = ab) || void 0 === Ob || Ob(), null === (Gb = Hb) || void 0 === Gb || Gb(), null === (Ub = Zb) || void 0 === Ub || Ub(), null === (wb = pb) || void 0 === wb || wb(), null === (Xb = undefined) || void 0 === Xb || Xb(), null === (ob = Wb) || void 0 === ob || ob(), null === (Ab = Cb) || void 0 === Ab || Ab(), null === (lb = db) || void 0 === lb || lb(), null === (Kb = rb) || void 0 === Kb || Kb(), null === (jb = undefined) || void 0 === jb || jb(), null === (nb = Db) || void 0 === nb || nb()
          },
          onPlayerChangeBlock: (bb, ub, Bb, Gb, Yb, Sb) => {
            if (bb === Ub && "Air" === Sb) {
              const bb = vb.getClientOption(Ub, "creative");
              Lb.skills.predictBlock([ub, Bb, Gb], Yb, bb);
              const Sb = function(bb, ub) {
                  if ("hub" === ub || "farming_1" === ub || "mining_1" === ub) return !Ib.has(bb) || "hub" !== ub && "mining_1" !== ub ? Object.hasOwn(Mb, bb) ? Mb[bb] : void 0 : sb
                }(Yb, hb),
                ab = ("hub" === hb || "mining_1" === hb) && (Ob.gd.some((bb => bb === Yb)) || Object.hasOwn(Pb, Yb) || "mining_1" === hb && "Block of Coal" === Yb);
              bb || void 0 === Sb && !ab || vb.vJ(ub, Bb, Gb, null !== Sb && void 0 !== Sb ? Sb : sb)
            }
          },
          onPlayerAttackEntity: (bb, ub) => {
            if (bb !== Ub || "Player" !== vb.getEntityType(ub)) return;
            const [hb, Bb, Ob] = vb.iK(ub);
            vb.burstParticlePreset("critical", [hb, Bb + 1, Ob], 10)
          },
          onChangeBlockFail: bb => {
            for (const {
                qG: ub
              }
              of bb) Lb.skills.rejectBlock(ub)
          },
          onReceivedMessageFromServer: (bb, ub) => {
            if ("skyblockGatedPortal" === bb) {
              var hb;
              const [bb, Bb] = ub;
              return void(null === (hb = cb.get(bb)) || void 0 === hb || hb.cZ(Bb))
            }
            if ("skyblockDailyReward" === bb) return void Lb.dailyReward.cZ(ub);
            if ("skyblockMailbox" === bb) return void Lb.mailbox.cZ(ub);
            if ("skyblockPortalTransit" === bb) return void Lb.portalTransit.cZ(ub);
            if ("skyblockLoot" === bb) return void ib.cZ(vb, ub);
            if ("skyblockLava" === bb) return void Tb.cZ(ub);
            if ("skyblockForge" === bb) return void Lb.forge.cZ(ub);
            if ("skyblockMagmaward" === bb) return void Lb.magmaward.cZ(ub);
            if ("skyblockGlowtide" === bb) return void Lb.glowtide.cZ(ub);
            if ("skyblockGlowMeter" === bb) return void Lb.glowMeter.cZ(ub);
            if ("skyblockHushWait" === bb) return void Lb.hushWait.cZ(ub);
            if ("skyblockPassage" === bb) {
              const bb = ub;
              return Lb.passage.cZ(bb), Lb.reachLog.receivePassagePhase(bb.passagePhase), db ??= (0, jb.r)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: Lb.passage.show
              }), void Lb.keepersChair.receivePassage({
                keepersChairPassagePhase: bb.passagePhase,
                keepersChairPassageNextPhase: bb.passageNextPhase,
                keepersChairPassageTurnsInMs: bb.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === bb) {
              const bb = ub;
              return Lb.tideCharts.cZ(bb), void(bb.tideCharts.length > 0 && (rb ??= (0, jb.r)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: Lb.tideCharts.show
              })))
            }
            if (bb === yb.D) {
              var Bb;
              const {
                hookId: bb,
                waiting: hb
              } = ub;
              return void Eb.hookWaiting(bb, null !== (Bb = null === hb || void 0 === hb ? void 0 : hb.remainingMs) && void 0 !== Bb ? Bb : null)
            }
            if ("skyblockBiteTell" === bb) return void qb.receiveTell(ub);
            if ("skyblockSmuggler" === bb) return void Lb.smuggler.cZ(ub);
            if ("skyblockKeepersChair" === bb) return Lb.keepersChair.cZ(ub), void Lb.lampLight.setAtChair(Lb.keepersChair.isAtChair());
            if ("skyblockLampLight" === bb) {
              const bb = ub;
              var Ob;
              if (Lb.lampLight.cZ(bb), bb.lampLightReleasing) Cb ??= (0, jb.r)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  Lb.lampLight.setRelease(!1)
                }
              });
              else null === (Ob = Cb) || void 0 === Ob || Ob(), Cb = void 0;
              return
            }
            if ("skyblockRegulars" === bb) return void Lb.regulars.cZ(ub);
            if ("skyblockHiddenWaters" === bb) return void Lb.hiddenWaters.cZ(ub);
            if ("skyblockReachLog" === bb) return Lb.reachLog.cZ(ub), void(Wb ??= (0, jb.r)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: iB
              },
              onClick: Lb.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === bb) {
              for (const [bb, hb, Bb, Ob] of ub) vb.vJ(bb, hb, Bb, Ob);
              return
            }
            if ("skyblockHud" === bb) Lb.receiveHud(ub);
            else if ("skyblockMap" === bb) Lb.map.cZ(ub);
            else if (bb === Vb.e) Lb.skills.cZ(ub);
            else if (bb === gb && "dialogue" === ub.kind) Lb.dialogue.cZ(ub);
            else if (bb === gb) Lb.quests.cZ(ub);
            else if ("skyblockDungeons" === bb) Lb.dungeons.cZ(ub);
            else if ("sbCollections" === bb) Lb.collections.cZ(ub);
            else if ("skyblockQuestGraph" === bb) Lb.questGraph.cZ(ub);
            else {
              if ("skyblockAutographs" !== bb) return;
              Lb.autographs.cZ(ub)
            }
            if (!Sb && Lb.map.getSnapshot().enabled) {
              const bb = (0, jb.r)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: Lb.map.show
                }),
                ub = (0, Fb.q)(Lb.map.show);
              Sb = () => {
                bb(), ub()
              }
            }!ab && Lb.skills.getSnapshot().enabled && (ab = (0, jb.r)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: Lb.skills.show
            })), !pb && Lb.collections.getSnapshot().enabled && (pb = (0, jb.r)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: Lb.collections.show
            })), !Hb && Lb.quests.getSnapshot().enabled && (Hb = (0, jb.r)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: Lb.quests.show
            })), !Db && Lb.autographs.getSnapshot().enabled && (Db = (0, jb.r)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: Lb.autographs.show
            }));
            const Gb = Lb.dungeons.getSnapshot().enabled;
            var Ub;
            (ab || Hb || Gb) && Xb !== Gb && (Xb = Gb, null === (Ub = Zb) || void 0 === Ub || Ub(), Zb = (0, jb.r)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: tu
              },
              disabled: !Gb,
              panel: !0,
              onClick: Lb.dungeons.show
            }));
            Yb || (Yb = (0, Fb.t)((0, nb.createElement)(xL, {
              controller: Lb
            }), {
              content: (0, nb.createElement)(zL, {
                controller: Lb
              }),
              onClose: Lb.close
            }))
          },
          gH: () => {
            var bb;
            for (const ub of cb.values()) ub.gH();
            ib.gH(vb), Tb.gH(), null === (bb = tb) || void 0 === bb || bb.gH(), Lb.skills.gH(), Lb.quests.gH(), Lb.dailyReward.gH(), Lb.mailbox.gH(), Lb.map.gH()
          }
        }
      }
  },
  35987: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob,
      e: () => Bb
    });
    const Bb = "skyblockSkills",
      Ob = "skills_test_gym"
  },
  9115: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob,
      c: () => Ub
    });
    const Bb = [{
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

    function Ob(bb) {
      let ub, hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof bb) {
        if (!Number.isFinite(bb)) return "0";
        if (Math.abs(bb) < 100) {
          const ub = bb < 0 ? "-" : "",
            hb = Math.abs(bb);
          return hb >= 10 ? `${ub}${hb.toFixed(1).replace(/\.0$/,"")}` : `${ub}${hb.toFixed(2).replace(/\.?0+$/,"")}`
        }
        ub = BigInt(Math.floor(bb))
      } else ub = bb;
      const Ob = ub < 0n ? -ub : ub,
        Gb = ub < 0n ? "-" : "",
        Ub = Ob.toString();
      if (Ub.length <= hb) return `${Gb}${Ub}`;
      const Lb = 3 * Math.floor((Ub.length - 1) / 3);
      if (Lb < 3) return `${Gb}${Ub}`;
      if (Lb > 3 * Bb.length) {
        const bb = Ub[0],
          ub = Ub.slice(1, 3).replace(/0+$/, "");
        return `${Gb}${ub?`${bb}.${ub}`:bb}e${Ub.length-1}`
      }
      const {
        threshold: Yb,
        suffix: Sb
      } = Bb[Bb.length - Lb / 3], ab = Ob / Yb, Hb = Number(1000n * (Ob % Yb) / Yb), wb = Number(ab) + Hb / 1e3;
      let Zb;
      return Zb = wb >= 100 ? Math.floor(wb).toString() : wb >= 10 ? wb.toFixed(1).replace(/\.0$/, "") : wb.toFixed(2).replace(/\.?0+$/, ""), `${Gb}${Zb}${Sb}`
    }
    const Gb = Bb.map((bb => {
      let {
        threshold: ub,
        suffix: hb
      } = bb;
      return {
        threshold: Number(ub),
        suffix: hb
      }
    })).filter((bb => {
      let {
        threshold: ub
      } = bb;
      return Number.isFinite(ub)
    }));

    function Ub(bb) {
      const ub = Math.abs(bb),
        hb = bb < 0 ? "-" : "";
      for (const {
          threshold: Bb,
          suffix: Ob
        }
        of Gb)
        if (ub >= Bb) {
          const bb = ub / Bb;
          if (bb >= 1e3) return `${hb}${ub.toExponential(2).replace("e+","e")}`;
          let Gb;
          return Gb = bb >= 100 ? Math.floor(bb).toString() : bb >= 10 ? bb.toFixed(1).replace(/\.0$/, "") : bb.toFixed(2).replace(/\.?0+$/, ""), `${hb}${Gb}${Ob}`
        } return `${hb}${ub}`
    }
  },
  38165: (bb, ub, hb) => {
    var Bb = {
      "./combat_1.png": 38171,
      "./dungeon_crumbling_crypt.png": 38179,
      "./dungeon_frozen_hollow.png": 38182,
      "./dungeon_wildwood_grove.png": 38188,
      "./dungeons.png": 38190,
      "./farming_1.png": 38198,
      "./fishing_1.png": 38203,
      "./hub.png": 38207,
      "./island.png": 38213,
      "./mining_1.png": 38221,
      "./mining_1_bridge.png": 38227,
      "./mining_1_gallery.png": 38232,
      "./mining_1_hollow.png": 38235,
      "./mining_1_village.png": 38244
    };

    function Ob(bb) {
      var ub = Gb(bb);
      return hb(ub)
    }

    function Gb(bb) {
      if (!hb.o(Bb, bb)) {
        var ub = new Error("Cannot find module '" + bb + "'");
        throw ub.code = "MODULE_NOT_FOUND", ub
      }
      return Bb[bb]
    }
    Ob.keys = function() {
      return Object.keys(Bb)
    }, Ob.resolve = Gb, bb.exports = Ob, Ob.id = 38165
  },
  38171: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  38179: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  38182: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  38188: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  38190: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  38198: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/farming_1.08302e28e41bf98474fe.png"
  },
  38203: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  38207: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/hub.8b20a64678134496251d.png"
  },
  38213: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/island.113e20c7bd7db93fe1ce.png"
  },
  38221: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/mining_1.68cac4bdadc5ef809ae5.png"
  },
  38227: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/mining_1_bridge.56ff82ba845db0b52726.png"
  },
  38232: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/mining_1_gallery.4e799e6329dbc66249ce.png"
  },
  38235: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  38244: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/mining_1_village.c2a625c1c4541a1fbe65.png"
  },
  18282: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  20380: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  22748: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  24326: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  25984: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  26007: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  38158: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);